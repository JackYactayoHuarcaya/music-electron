import * as mm from "music-metadata";
import path from "path";

export interface Metadata {
  title: string;
  artist: string;
  album: string;
  year: string | number;
  duration: number;
  folder: string;
  path: string;
}

export async function getMusicsMetadata(rutas: string[]): Promise<Metadata[]> {
  const resultados: Metadata[] = []; // <-- ya tiene tipo

  for (const filePath of rutas) {
    try {
      const metadata = await mm.parseFile(filePath);

      resultados.push({
        title:
          metadata.common.title ||
          path.basename(filePath, path.extname(filePath)),
        artist: metadata.common.artist || "Desconocido",
        album: metadata.common.album || "Desconocido",
        year: metadata.common.year || "N/A",
        duration: metadata.format.duration || 0,
        folder: path.dirname(filePath),
        path: filePath,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: Error | any) {
      console.error(`Error leyendo metadata de: ${filePath}`, err.message);

      resultados.push({
        title: path.basename(filePath, path.extname(filePath)),
        artist: "Desconocido",
        album: "Desconocido",
        year: "N/A",
        duration: 0,
        folder: path.dirname(filePath),
        path: filePath,
      });
    }
  }

  return resultados;
}
