import require$$0 from "fs";
import path from "path";
import require$$1 from "os";
import require$$0$2 from "child_process";
import require$$0$1 from "util";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var js = {};
function commonjsRequire(path2) {
  throw new Error('Could not dynamically require "' + path2 + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var bindings$1 = { exports: {} };
var sep = path.sep || "/";
var fileUriToPath_1 = fileUriToPath;
function fileUriToPath(uri) {
  if ("string" != typeof uri || uri.length <= 7 || "file://" != uri.substring(0, 7)) {
    throw new TypeError("must pass in a file:// URI to convert to a file path");
  }
  var rest = decodeURI(uri.substring(7));
  var firstSlash = rest.indexOf("/");
  var host = rest.substring(0, firstSlash);
  var path2 = rest.substring(firstSlash + 1);
  if ("localhost" == host) host = "";
  if (host) {
    host = sep + sep + host;
  }
  path2 = path2.replace(/^(.+)\|/, "$1:");
  if (sep == "\\") {
    path2 = path2.replace(/\//g, "\\");
  }
  if (/^.+\:/.test(path2)) ;
  else {
    path2 = sep + path2;
  }
  return host + path2;
}
(function(module, exports) {
  var fs = require$$0, path$1 = path, fileURLToPath = fileUriToPath_1, join = path$1.join, dirname = path$1.dirname, exists = fs.accessSync && function(path2) {
    try {
      fs.accessSync(path2);
    } catch (e) {
      return false;
    }
    return true;
  } || fs.existsSync || path$1.existsSync, defaults = {
    arrow: process.env.NODE_BINDINGS_ARROW || " → ",
    compiled: process.env.NODE_BINDINGS_COMPILED_DIR || "compiled",
    platform: process.platform,
    arch: process.arch,
    nodePreGyp: "node-v" + process.versions.modules + "-" + process.platform + "-" + process.arch,
    version: process.versions.node,
    bindings: "bindings.node",
    try: [
      // node-gyp's linked version in the "build" dir
      ["module_root", "build", "bindings"],
      // node-waf and gyp_addon (a.k.a node-gyp)
      ["module_root", "build", "Debug", "bindings"],
      ["module_root", "build", "Release", "bindings"],
      // Debug files, for development (legacy behavior, remove for node v0.9)
      ["module_root", "out", "Debug", "bindings"],
      ["module_root", "Debug", "bindings"],
      // Release files, but manually compiled (legacy behavior, remove for node v0.9)
      ["module_root", "out", "Release", "bindings"],
      ["module_root", "Release", "bindings"],
      // Legacy from node-waf, node <= 0.4.x
      ["module_root", "build", "default", "bindings"],
      // Production "Release" buildtype binary (meh...)
      ["module_root", "compiled", "version", "platform", "arch", "bindings"],
      // node-qbs builds
      ["module_root", "addon-build", "release", "install-root", "bindings"],
      ["module_root", "addon-build", "debug", "install-root", "bindings"],
      ["module_root", "addon-build", "default", "install-root", "bindings"],
      // node-pre-gyp path ./lib/binding/{node_abi}-{platform}-{arch}
      ["module_root", "lib", "binding", "nodePreGyp", "bindings"]
    ]
  };
  function bindings2(opts) {
    if (typeof opts == "string") {
      opts = { bindings: opts };
    } else if (!opts) {
      opts = {};
    }
    Object.keys(defaults).map(function(i2) {
      if (!(i2 in opts)) opts[i2] = defaults[i2];
    });
    if (!opts.module_root) {
      opts.module_root = exports.getRoot(exports.getFileName());
    }
    if (path$1.extname(opts.bindings) != ".node") {
      opts.bindings += ".node";
    }
    var requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : commonjsRequire;
    var tries = [], i = 0, l = opts.try.length, n, b, err;
    for (; i < l; i++) {
      n = join.apply(
        null,
        opts.try[i].map(function(p) {
          return opts[p] || p;
        })
      );
      tries.push(n);
      try {
        b = opts.path ? requireFunc.resolve(n) : requireFunc(n);
        if (!opts.path) {
          b.path = n;
        }
        return b;
      } catch (e) {
        if (e.code !== "MODULE_NOT_FOUND" && e.code !== "QUALIFIED_PATH_RESOLUTION_FAILED" && !/not find/i.test(e.message)) {
          throw e;
        }
      }
    }
    err = new Error(
      "Could not locate the bindings file. Tried:\n" + tries.map(function(a) {
        return opts.arrow + a;
      }).join("\n")
    );
    err.tries = tries;
    throw err;
  }
  module.exports = exports = bindings2;
  exports.getFileName = function getFileName(calling_file) {
    var origPST = Error.prepareStackTrace, origSTL = Error.stackTraceLimit, dummy = {}, fileName;
    Error.stackTraceLimit = 10;
    Error.prepareStackTrace = function(e, st) {
      for (var i = 0, l = st.length; i < l; i++) {
        fileName = st[i].getFileName();
        if (fileName !== __filename) {
          if (calling_file) {
            if (fileName !== calling_file) {
              return;
            }
          } else {
            return;
          }
        }
      }
    };
    Error.captureStackTrace(dummy);
    dummy.stack;
    Error.prepareStackTrace = origPST;
    Error.stackTraceLimit = origSTL;
    var fileSchema = "file://";
    if (fileName.indexOf(fileSchema) === 0) {
      fileName = fileURLToPath(fileName);
    }
    return fileName;
  };
  exports.getRoot = function getRoot(file) {
    var dir = dirname(file), prev;
    while (true) {
      if (dir === ".") {
        dir = process.cwd();
      }
      if (exists(join(dir, "package.json")) || exists(join(dir, "node_modules"))) {
        return dir;
      }
      if (prev === dir) {
        throw new Error(
          'Could not find module root given file: "' + file + '". Do you have a `package.json` file? '
        );
      }
      prev = dir;
      dir = join(dir, "..");
    }
  };
})(bindings$1, bindings$1.exports);
var bindingsExports = bindings$1.exports;
var lsblk = {};
var json = {};
var hasRequiredJson;
function requireJson() {
  if (hasRequiredJson) return json;
  hasRequiredJson = 1;
  Object.defineProperty(json, "__esModule", { value: true });
  json.parse = json.transform = void 0;
  const path_1 = path;
  const _1 = requireLsblk();
  function getMountpoints(children) {
    return children.filter((child) => {
      return child.mountpoint;
    }).map((child) => {
      return {
        path: child.mountpoint,
        label: child.label || child.partlabel
      };
    });
  }
  function getDescription(device) {
    const description = [
      device.label || "",
      device.vendor || "",
      device.model || ""
    ];
    if (device.children) {
      let subLabels = device.children.filter((c) => c.label && c.label !== device.label || c.mountpoint).map((c) => c.label || c.mountpoint);
      subLabels = Array.from(new Set(subLabels));
      if (subLabels.length) {
        description.push(`(${subLabels.join(", ")})`);
      }
    }
    return description.join(" ").replace(/\s+/g, " ").trim();
  }
  function resolveDeviceName(name) {
    if (!name) {
      return null;
    }
    if (!path_1.posix.isAbsolute(name)) {
      return path_1.posix.resolve("/dev", name);
    }
    return name;
  }
  function transform(data) {
    return data.blockdevices.map((device) => Object.assign({}, device, {
      name: resolveDeviceName(device.name),
      kname: resolveDeviceName(device.kname)
    })).filter((device) => (
      // Omit loop devices, CD/DVD drives, and RAM
      !device.name.startsWith("/dev/loop") && !device.name.startsWith("/dev/sr") && !device.name.startsWith("/dev/ram")
    )).map((device) => {
      const isVirtual = device.subsystems ? /^(block)$/i.test(device.subsystems) : null;
      const isSCSI = device.tran ? /^(sata|scsi|ata|ide|pci)$/i.test(device.tran) : null;
      const isUSB = device.tran ? /^(usb)$/i.test(device.tran) : null;
      const isReadOnly = Number(device.ro) === 1;
      const isRemovable = Number(device.rm) === 1 || Number(device.hotplug) === 1 || Boolean(isVirtual);
      return {
        enumerator: "lsblk:json",
        busType: (device.tran || "UNKNOWN").toUpperCase(),
        busVersion: null,
        device: device.name,
        devicePath: null,
        raw: device.kname || device.name,
        description: getDescription(device),
        error: null,
        size: Number(device.size) || null,
        blockSize: Number(device["phy-sec"]) || 512,
        logicalBlockSize: Number(device["log-sec"]) || 512,
        mountpoints: device.children ? getMountpoints(device.children) : getMountpoints([device]),
        isReadOnly,
        isSystem: !isRemovable && !isVirtual,
        isVirtual,
        isRemovable,
        isCard: null,
        isSCSI,
        isUSB,
        isUAS: null,
        partitionTableType: (0, _1.getPartitionTableType)(device.pttype)
      };
    });
  }
  json.transform = transform;
  function parse(stdout) {
    return transform(JSON.parse(stdout));
  }
  json.parse = parse;
  return json;
}
var pairs = {};
var hasRequiredPairs;
function requirePairs() {
  if (hasRequiredPairs) return pairs;
  hasRequiredPairs = 1;
  Object.defineProperty(pairs, "__esModule", { value: true });
  pairs.parse = void 0;
  const _1 = requireLsblk();
  function parseLsblkLine(line) {
    const data = {};
    let offset = 0;
    let key = "";
    let value = "";
    const keyChar = /[^"=]/;
    const whitespace = /\s+/;
    const escape = "\\";
    let state = "key";
    while (offset < line.length) {
      if (state === "key") {
        while (keyChar.test(line[offset])) {
          key += line[offset];
          offset += 1;
        }
        if (line[offset] === "=") {
          state = "value";
          offset += 1;
        }
      } else if (state === "value") {
        if (line[offset] !== '"') {
          throw new Error(`Expected '"', saw "${line[offset]}"`);
        }
        offset += 1;
        while (line[offset - 1] === escape || line[offset - 1] !== escape && line[offset] !== '"') {
          value += line[offset];
          offset += 1;
        }
        if (line[offset] !== '"') {
          throw new Error(`Expected '"', saw "${line[offset]}"`);
        }
        offset += 1;
        data[key.toLowerCase()] = value.trim();
        key = "";
        value = "";
        state = "space";
      } else if (state === "space") {
        while (whitespace.test(line[offset])) {
          offset += 1;
        }
        state = "key";
      } else {
        throw new Error(`Undefined state "${state}"`);
      }
    }
    return data;
  }
  function parseLsblk(output) {
    return output.trim().split(/\r?\n/g).map(parseLsblkLine);
  }
  function consolidate(devices) {
    const primaries = devices.filter((device) => {
      return device.type === "disk" && !device.name.startsWith("ram") && !device.name.startsWith("sr");
    });
    return primaries.map((device) => {
      const children = devices.filter((child) => {
        return ["disk", "part"].includes(child.type) && child.name.startsWith(device.name);
      });
      return Object.assign({}, device, {
        mountpoints: children.filter((child) => child.mountpoint).map((child) => {
          return {
            path: child.mountpoint,
            label: child.label
          };
        })
      });
    });
  }
  function getDescription(device) {
    const description = [
      device.label || "",
      device.vendor || "",
      device.model || ""
    ];
    if (device.mountpoints.length) {
      let subLabels = device.mountpoints.filter((c) => {
        return c.label && c.label !== device.label || c.path;
      }).map((c) => {
        return c.label || c.path;
      });
      subLabels = Array.from(new Set(subLabels));
      if (subLabels.length) {
        description.push(`(${subLabels.join(", ")})`);
      }
    }
    return description.join(" ").replace(/\s+/g, " ").trim();
  }
  function parse(stdout) {
    const devices = consolidate(parseLsblk(stdout));
    return devices.map((device) => {
      const isVirtual = device.subsystems ? /^block$/i.test(device.subsystems) : null;
      const isSCSI = device.tran ? /^(?:sata|scsi|ata|ide|pci)$/i.test(device.tran) : null;
      const isUSB = device.tran ? /^usb$/i.test(device.tran) : null;
      const isReadOnly = Number(device.ro) === 1;
      const isRemovable = Number(device.rm) === 1 || Number(device.hotplug) === 1 || Boolean(isVirtual);
      return {
        enumerator: "lsblk:pairs",
        busType: (device.tran || "UNKNOWN").toUpperCase(),
        busVersion: null,
        device: "/dev/" + device.name,
        devicePath: null,
        raw: "/dev/" + device.name,
        description: getDescription(device) || device.name,
        error: null,
        size: Number(device.size) || null,
        blockSize: Number(device["phy-sec"]) || 512,
        logicalBlockSize: Number(device["log-sec"]) || 512,
        mountpoints: device.mountpoints,
        isReadOnly,
        isSystem: !isRemovable && !isVirtual,
        isVirtual,
        isRemovable,
        isCard: null,
        isSCSI,
        isUSB,
        isUAS: null,
        partitionTableType: (0, _1.getPartitionTableType)(device.pttype)
      };
    });
  }
  pairs.parse = parse;
  return pairs;
}
var hasRequiredLsblk;
function requireLsblk() {
  if (hasRequiredLsblk) return lsblk;
  hasRequiredLsblk = 1;
  Object.defineProperty(lsblk, "__esModule", { value: true });
  lsblk.lsblk = lsblk.getPartitionTableType = void 0;
  const child_process_1 = require$$0$2;
  const fs_1 = require$$0;
  const path_1 = path;
  const util_1 = require$$0$1;
  const json_1 = requireJson();
  const pairs_1 = requirePairs();
  const execFileAsync = (0, util_1.promisify)(child_process_1.execFile);
  const DISK_PATH_DIR = "/dev/disk/by-path/";
  let SUPPORTS_JSON = true;
  let SUPPORTS_PTTYPE = true;
  function getPartitionTableType(pttype) {
    if (pttype === "gpt") {
      return "gpt";
    } else if (pttype === "dos") {
      return "mbr";
    }
    return null;
  }
  lsblk.getPartitionTableType = getPartitionTableType;
  async function getDevicePaths() {
    const mapping = /* @__PURE__ */ new Map();
    for (const filename of await fs_1.promises.readdir(DISK_PATH_DIR)) {
      const linkPath = (0, path_1.join)(DISK_PATH_DIR, filename);
      let link;
      try {
        link = await fs_1.promises.readlink(linkPath);
      } catch (error) {
        continue;
      }
      const devicePath = (0, path_1.resolve)(DISK_PATH_DIR, link);
      mapping.set(devicePath, linkPath);
    }
    return mapping;
  }
  async function addDevicePaths(devices) {
    const devicePaths = await getDevicePaths();
    for (const device of devices) {
      device.devicePath = devicePaths.get(device.device) || null;
    }
  }
  async function getOutput(command, ...args) {
    const { stdout } = await execFileAsync(command, args);
    return stdout;
  }
  async function lsblkJSON() {
    return (0, json_1.parse)(await getOutput("lsblk", "--bytes", "--all", "--json", "--paths", "--output-all"));
  }
  async function getLsblkPairsOutput() {
    if (SUPPORTS_PTTYPE) {
      try {
        return await getOutput("lsblk", "--bytes", "--all", "--pairs", "-o", "+pttype");
      } catch (error) {
        SUPPORTS_PTTYPE = false;
      }
    }
    return await getOutput("lsblk", "--bytes", "--all", "--pairs");
  }
  async function lsblkPairs() {
    return (0, pairs_1.parse)(await getLsblkPairsOutput());
  }
  async function $lsblk() {
    if (SUPPORTS_JSON) {
      try {
        return await lsblkJSON();
      } catch (error) {
        SUPPORTS_JSON = false;
      }
    }
    return await lsblkPairs();
  }
  async function lsblk$1() {
    const drives = await $lsblk();
    try {
      await addDevicePaths(drives);
    } catch (error) {
    }
    return drives;
  }
  lsblk.lsblk = lsblk$1;
  return lsblk;
}
Object.defineProperty(js, "__esModule", { value: true });
var list_1 = js.list = void 0;
const bindings = bindingsExports;
const os_1 = require$$1;
const lsblk_1 = requireLsblk();
const drivelistBindings = bindings("drivelist");
function bindingsList() {
  return new Promise((resolve, reject) => {
    drivelistBindings.list((error, drives) => {
      if (error != null) {
        reject(error);
      } else {
        resolve(drives);
      }
    });
  });
}
function handleApfs(disks) {
  const apfs = [];
  const other = [];
  for (const disk of disks) {
    if (disk.description === "AppleAPFSMedia") {
      apfs.push(disk);
    } else {
      other.push(disk);
    }
  }
  for (const disk of apfs) {
    const source = other.find((d) => d.devicePath === disk.devicePath && !d.isVirtual);
    if (source !== void 0) {
      source.mountpoints.push(...disk.mountpoints);
      disk.isVirtual = true;
    }
  }
}
async function list() {
  const plat = (0, os_1.platform)();
  if (plat === "win32") {
    return await bindingsList();
  } else if (plat === "darwin") {
    const disks = await bindingsList();
    handleApfs(disks);
    return disks;
  } else if (plat === "linux") {
    return await (0, lsblk_1.lsblk)();
  }
  throw new Error(`Your OS is not supported by this module: ${(0, os_1.platform)()}`);
}
list_1 = js.list = list;
const index = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: js,
  get list() {
    return list_1;
  }
}, [js]);
export {
  index as i
};
