// music-scanner.js
// Módulo ESM para escanear música (usa import / export)
// Requiere: npm i fast-glob
// Opcional: npm i drivelist  (si no está instalado no falla)

import fs from "fs/promises";
import path from "path";
import os from "os";
import fg from "fast-glob";

const DEFAULT_IGNORE = [
  "**/AppData/**",
  "**/Application Data/**",
  "**/Cookies/**",
  "**/Local Settings/**",
  "**/Configuración local/**",
  "**/System Volume Information/**",
  "**/Windows/**",
  "**/Program Files/**",
  "**/Program Files (x86)/**",
  "**/node_modules/**",
];

async function tryListDrives() {
  try {
    // import dinámico para que sea opcional
    const drivelistModule = await import("drivelist").then(
      (m) => m.default ?? m
    );
    const drives = await drivelistModule.list();
    const roots: string[] = [];
    for (const d of drives) {
      for (const m of d.mountpoints || []) {
        roots.push((m.path || "").replace(/\\/g, "/"));
      }
    }
    return roots;
  } catch (e) {
    // si no existe drivelist o falla, devolvemos vacío y seguimos
    return [];
  }
}

function normalizeFolderForFg(folder: string) {
  if (!folder) return null;
  const p = path.resolve(folder);
  return p.replace(/\\/g, "/");
}

async function isAccessibleDir(folderOsStyle: string) {
  try {
    const st = await fs.stat(folderOsStyle);
    return st.isDirectory();
  } catch (e) {
    return false;
  }
}

/**
 * scanForMusic(options)
 * @param {Object} options
 * @param {string[]} options.extraFolders - carpetas adicionales (paths absolutos o relativos)
 * @param {string[]} options.extensions - extensiones sin punto, ej ['mp3','wav']
 * @param {number} options.deep - profundidad de búsqueda (fast-glob)
 * @param {string[]} options.ignore - patrones extra a ignorar
 * @returns {Promise<string[]>} lista de rutas absolutas encontradas (forward-slash normalized)
 */
async function scanForMusic({
  extraFolders = [],
  extensions = ["mp3"],
  deep = 8,
  ignore = [],
} = {}) {
  const found = new Set();

  // intentar obtener app.getPath('music') si estamos en main y electron presente
  let electronMusicPath: null | string = null;
  try {
    const electronModule = await import("electron").then((m) => m.default ?? m);
    if (
      electronModule &&
      electronModule.app &&
      typeof electronModule.app.getPath === "function"
    ) {
      electronMusicPath = electronModule.app.getPath("music");
    }
  } catch (e) {
    electronMusicPath = null;
  }

  const home = os.homedir();
  const commonCandidates = new Set();

  if (electronMusicPath) commonCandidates.add(electronMusicPath);
  commonCandidates.add(path.join(home, "Music"));
  commonCandidates.add(path.join(home, "Downloads"));
  commonCandidates.add(path.join(home, "Desktop"));
  commonCandidates.add(path.join(home, "Documents"));
  commonCandidates.add(
    path.join(process.env.PUBLIC || "C:/Users/Public", "Music")
  );

  for (const f of extraFolders || []) {
    if (typeof f === "string" && (f as string).trim()) commonCandidates.add(f);
  }

  const driveRoots = await tryListDrives();
  for (const r of driveRoots) {
    // en cada raíz intentamos agregar rutas comunes
    commonCandidates.add(path.join(r, "Music"));
    commonCandidates.add(path.join(r, "Public", "Music"));
    commonCandidates.add(path.join(r, "Users"));
  }

  // normalizar y filtrar las que existen / son accesibles
  const baseFolders: string[] = [];
  for (const cand of Array.from(commonCandidates)) {
    const normalized = normalizeFolderForFg(cand as string);
    if (!normalized) continue;
    const osStyle = normalized.replace(/\//g, path.sep);
    if (await isAccessibleDir(osStyle)) baseFolders.push(normalized);
  }

  if (baseFolders.length === 0) {
    // como fallback, usar el home
    const hb = normalizeFolderForFg(home);
    if (hb && (await isAccessibleDir(hb.replace(/\//g, path.sep))))
      baseFolders.push(hb);
  }

  const extPattern =
    extensions.length > 1 ? `{${extensions.join(",")}}` : extensions[0];

  const fgOptionsBase = {
    absolute: true,
    onlyFiles: true,
    dot: false,
    ignore: [...DEFAULT_IGNORE, ...ignore],
    deep,
  };

  for (const base of baseFolders) {
    try {
      // si la base es /.../Users, listamos usuarios y apuntamos a cada Users/*/Music
      if (/\/Users$/i.test(base)) {
        const osBase = base.replace(/\//g, path.sep);
        let subdirs: string[] = [];
        try {
          const dirents = await fs.readdir(osBase, { withFileTypes: true });
          subdirs = dirents.filter((d) => d.isDirectory()).map((d) => d.name);
        } catch (e) {
          subdirs = [];
        }
        for (const u of subdirs) {
          const candidateMusic = normalizeFolderForFg(
            path.join(osBase, u, "Music")
          );
          const candidateOs = (candidateMusic as string).replace(
            /\//g,
            path.sep
          );
          if (!(await isAccessibleDir(candidateOs))) continue;
          const results = await fg(`**/*.${extPattern}`, {
            ...fgOptionsBase,
            cwd: candidateMusic || "",
          });
          results.forEach((r) => found.add(r));
        }
        continue;
      }

      const results = await fg(`**/*.${extPattern}`, {
        ...fgOptionsBase,
        cwd: base,
      });
      results.forEach((r) => found.add(r));
    } catch (err) {
      // ignoramos errores en esa base (EPERM, EACCES, etc.) y seguimos con las demás
      continue;
    }
  }

  // devolver rutas únicas y ordenadas
  return Array.from(found).sort();
}

export { scanForMusic };
