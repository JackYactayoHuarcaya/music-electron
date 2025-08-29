import x from "fs";
import j from "path";
import C from "os";
import F from "child_process";
import M from "util";
function z(i, a) {
  for (var u = 0; u < a.length; u++) {
    const r = a[u];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in i)) {
          const f = Object.getOwnPropertyDescriptor(r, l);
          f && Object.defineProperty(i, l, f.get ? f : {
            enumerable: !0,
            get: () => r[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var N = {};
function B(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var $ = { exports: {} }, O = j.sep || "/", W = V;
function V(i) {
  if (typeof i != "string" || i.length <= 7 || i.substring(0, 7) != "file://")
    throw new TypeError("must pass in a file:// URI to convert to a file path");
  var a = decodeURI(i.substring(7)), u = a.indexOf("/"), r = a.substring(0, u), l = a.substring(u + 1);
  return r == "localhost" && (r = ""), r && (r = O + O + r), l = l.replace(/^(.+)\|/, "$1:"), O == "\\" && (l = l.replace(/\//g, "\\")), /^.+\:/.test(l) || (l = O + l), r + l;
}
(function(i, a) {
  var u = x, r = j, l = W, f = r.join, n = r.dirname, o = u.accessSync && function(e) {
    try {
      u.accessSync(e);
    } catch {
      return !1;
    }
    return !0;
  } || u.existsSync || r.existsSync, t = {
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
  function s(e) {
    typeof e == "string" ? e = { bindings: e } : e || (e = {}), Object.keys(t).map(function(m) {
      m in e || (e[m] = t[m]);
    }), e.module_root || (e.module_root = a.getRoot(a.getFileName())), r.extname(e.bindings) != ".node" && (e.bindings += ".node");
    for (var d = typeof __webpack_require__ == "function" ? __non_webpack_require__ : B, c = [], p = 0, h = e.try.length, g, _, S; p < h; p++) {
      g = f.apply(
        null,
        e.try[p].map(function(m) {
          return e[m] || m;
        })
      ), c.push(g);
      try {
        return _ = e.path ? d.resolve(g) : d(g), e.path || (_.path = g), _;
      } catch (m) {
        if (m.code !== "MODULE_NOT_FOUND" && m.code !== "QUALIFIED_PATH_RESOLUTION_FAILED" && !/not find/i.test(m.message))
          throw m;
      }
    }
    throw S = new Error(
      `Could not locate the bindings file. Tried:
` + c.map(function(m) {
        return e.arrow + m;
      }).join(`
`)
    ), S.tries = c, S;
  }
  i.exports = a = s, a.getFileName = function(d) {
    var c = Error.prepareStackTrace, p = Error.stackTraceLimit, h = {}, g;
    Error.stackTraceLimit = 10, Error.prepareStackTrace = function(S, m) {
      for (var b = 0, y = m.length; b < y; b++)
        if (g = m[b].getFileName(), g !== __filename)
          if (d) {
            if (g !== d)
              return;
          } else
            return;
    }, Error.captureStackTrace(h), h.stack, Error.prepareStackTrace = c, Error.stackTraceLimit = p;
    var _ = "file://";
    return g.indexOf(_) === 0 && (g = l(g)), g;
  }, a.getRoot = function(d) {
    for (var c = n(d), p; ; ) {
      if (c === "." && (c = process.cwd()), o(f(c, "package.json")) || o(f(c, "node_modules")))
        return c;
      if (p === c)
        throw new Error(
          'Could not find module root given file: "' + d + '". Do you have a `package.json` file? '
        );
      p = c, c = f(c, "..");
    }
  };
})($, $.exports);
var J = $.exports, w = {}, P = {}, R;
function G() {
  if (R) return P;
  R = 1, Object.defineProperty(P, "__esModule", { value: !0 }), P.parse = P.transform = void 0;
  const i = j, a = v();
  function u(o) {
    return o.filter((t) => t.mountpoint).map((t) => ({
      path: t.mountpoint,
      label: t.label || t.partlabel
    }));
  }
  function r(o) {
    const t = [
      o.label || "",
      o.vendor || "",
      o.model || ""
    ];
    if (o.children) {
      let s = o.children.filter((e) => e.label && e.label !== o.label || e.mountpoint).map((e) => e.label || e.mountpoint);
      s = Array.from(new Set(s)), s.length && t.push(`(${s.join(", ")})`);
    }
    return t.join(" ").replace(/\s+/g, " ").trim();
  }
  function l(o) {
    return o ? i.posix.isAbsolute(o) ? o : i.posix.resolve("/dev", o) : null;
  }
  function f(o) {
    return o.blockdevices.map((t) => Object.assign({}, t, {
      name: l(t.name),
      kname: l(t.kname)
    })).filter((t) => (
      // Omit loop devices, CD/DVD drives, and RAM
      !t.name.startsWith("/dev/loop") && !t.name.startsWith("/dev/sr") && !t.name.startsWith("/dev/ram")
    )).map((t) => {
      const s = t.subsystems ? /^(block)$/i.test(t.subsystems) : null, e = t.tran ? /^(sata|scsi|ata|ide|pci)$/i.test(t.tran) : null, d = t.tran ? /^(usb)$/i.test(t.tran) : null, c = Number(t.ro) === 1, p = Number(t.rm) === 1 || Number(t.hotplug) === 1 || !!s;
      return {
        enumerator: "lsblk:json",
        busType: (t.tran || "UNKNOWN").toUpperCase(),
        busVersion: null,
        device: t.name,
        devicePath: null,
        raw: t.kname || t.name,
        description: r(t),
        error: null,
        size: Number(t.size) || null,
        blockSize: Number(t["phy-sec"]) || 512,
        logicalBlockSize: Number(t["log-sec"]) || 512,
        mountpoints: t.children ? u(t.children) : u([t]),
        isReadOnly: c,
        isSystem: !p && !s,
        isVirtual: s,
        isRemovable: p,
        isCard: null,
        isSCSI: e,
        isUSB: d,
        isUAS: null,
        partitionTableType: (0, a.getPartitionTableType)(t.pttype)
      };
    });
  }
  P.transform = f;
  function n(o) {
    return f(JSON.parse(o));
  }
  return P.parse = n, P;
}
var T = {}, D;
function K() {
  if (D) return T;
  D = 1, Object.defineProperty(T, "__esModule", { value: !0 }), T.parse = void 0;
  const i = v();
  function a(n) {
    const o = {};
    let t = 0, s = "", e = "";
    const d = /[^"=]/, c = /\s+/, p = "\\";
    let h = "key";
    for (; t < n.length; )
      if (h === "key") {
        for (; d.test(n[t]); )
          s += n[t], t += 1;
        n[t] === "=" && (h = "value", t += 1);
      } else if (h === "value") {
        if (n[t] !== '"')
          throw new Error(`Expected '"', saw "${n[t]}"`);
        for (t += 1; n[t - 1] === p || n[t - 1] !== p && n[t] !== '"'; )
          e += n[t], t += 1;
        if (n[t] !== '"')
          throw new Error(`Expected '"', saw "${n[t]}"`);
        t += 1, o[s.toLowerCase()] = e.trim(), s = "", e = "", h = "space";
      } else if (h === "space") {
        for (; c.test(n[t]); )
          t += 1;
        h = "key";
      } else
        throw new Error(`Undefined state "${h}"`);
    return o;
  }
  function u(n) {
    return n.trim().split(/\r?\n/g).map(a);
  }
  function r(n) {
    return n.filter((t) => t.type === "disk" && !t.name.startsWith("ram") && !t.name.startsWith("sr")).map((t) => {
      const s = n.filter((e) => ["disk", "part"].includes(e.type) && e.name.startsWith(t.name));
      return Object.assign({}, t, {
        mountpoints: s.filter((e) => e.mountpoint).map((e) => ({
          path: e.mountpoint,
          label: e.label
        }))
      });
    });
  }
  function l(n) {
    const o = [
      n.label || "",
      n.vendor || "",
      n.model || ""
    ];
    if (n.mountpoints.length) {
      let t = n.mountpoints.filter((s) => s.label && s.label !== n.label || s.path).map((s) => s.label || s.path);
      t = Array.from(new Set(t)), t.length && o.push(`(${t.join(", ")})`);
    }
    return o.join(" ").replace(/\s+/g, " ").trim();
  }
  function f(n) {
    return r(u(n)).map((t) => {
      const s = t.subsystems ? /^block$/i.test(t.subsystems) : null, e = t.tran ? /^(?:sata|scsi|ata|ide|pci)$/i.test(t.tran) : null, d = t.tran ? /^usb$/i.test(t.tran) : null, c = Number(t.ro) === 1, p = Number(t.rm) === 1 || Number(t.hotplug) === 1 || !!s;
      return {
        enumerator: "lsblk:pairs",
        busType: (t.tran || "UNKNOWN").toUpperCase(),
        busVersion: null,
        device: "/dev/" + t.name,
        devicePath: null,
        raw: "/dev/" + t.name,
        description: l(t) || t.name,
        error: null,
        size: Number(t.size) || null,
        blockSize: Number(t["phy-sec"]) || 512,
        logicalBlockSize: Number(t["log-sec"]) || 512,
        mountpoints: t.mountpoints,
        isReadOnly: c,
        isSystem: !p && !s,
        isVirtual: s,
        isRemovable: p,
        isCard: null,
        isSCSI: e,
        isUSB: d,
        isUAS: null,
        partitionTableType: (0, i.getPartitionTableType)(t.pttype)
      };
    });
  }
  return T.parse = f, T;
}
var L;
function v() {
  if (L) return w;
  L = 1, Object.defineProperty(w, "__esModule", { value: !0 }), w.lsblk = w.getPartitionTableType = void 0;
  const i = F, a = x, u = j, r = M, l = G(), f = K(), n = (0, r.promisify)(i.execFile), o = "/dev/disk/by-path/";
  let t = !0, s = !0;
  function e(b) {
    return b === "gpt" ? "gpt" : b === "dos" ? "mbr" : null;
  }
  w.getPartitionTableType = e;
  async function d() {
    const b = /* @__PURE__ */ new Map();
    for (const y of await a.promises.readdir(o)) {
      const k = (0, u.join)(o, y);
      let E;
      try {
        E = await a.promises.readlink(k);
      } catch {
        continue;
      }
      const I = (0, u.resolve)(o, E);
      b.set(I, k);
    }
    return b;
  }
  async function c(b) {
    const y = await d();
    for (const k of b)
      k.devicePath = y.get(k.device) || null;
  }
  async function p(b, ...y) {
    const { stdout: k } = await n(b, y);
    return k;
  }
  async function h() {
    return (0, l.parse)(await p("lsblk", "--bytes", "--all", "--json", "--paths", "--output-all"));
  }
  async function g() {
    if (s)
      try {
        return await p("lsblk", "--bytes", "--all", "--pairs", "-o", "+pttype");
      } catch {
        s = !1;
      }
    return await p("lsblk", "--bytes", "--all", "--pairs");
  }
  async function _() {
    return (0, f.parse)(await g());
  }
  async function S() {
    if (t)
      try {
        return await h();
      } catch {
        t = !1;
      }
    return await _();
  }
  async function m() {
    const b = await S();
    try {
      await c(b);
    } catch {
    }
    return b;
  }
  return w.lsblk = m, w;
}
Object.defineProperty(N, "__esModule", { value: !0 });
var A = N.list = void 0;
const H = J, U = C, Y = v(), Q = H("drivelist");
function q() {
  return new Promise((i, a) => {
    Q.list((u, r) => {
      u != null ? a(u) : i(r);
    });
  });
}
function X(i) {
  const a = [], u = [];
  for (const r of i)
    r.description === "AppleAPFSMedia" ? a.push(r) : u.push(r);
  for (const r of a) {
    const l = u.find((f) => f.devicePath === r.devicePath && !f.isVirtual);
    l !== void 0 && (l.mountpoints.push(...r.mountpoints), r.isVirtual = !0);
  }
}
async function Z() {
  const i = (0, U.platform)();
  if (i === "win32")
    return await q();
  if (i === "darwin") {
    const a = await q();
    return X(a), a;
  } else if (i === "linux")
    return await (0, Y.lsblk)();
  throw new Error(`Your OS is not supported by this module: ${(0, U.platform)()}`);
}
A = N.list = Z;
const it = /* @__PURE__ */ z({
  __proto__: null,
  default: N,
  get list() {
    return A;
  }
}, [N]);
export {
  it as i
};
