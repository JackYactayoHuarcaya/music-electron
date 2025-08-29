var ra = Object.defineProperty;
var ia = (t, e, r) => e in t ? ra(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var ir = (t, e, r) => ia(t, typeof e != "symbol" ? e + "" : e, r);
import { ipcMain as na, app as Ct, BrowserWindow as Pn } from "electron";
import { fileURLToPath as sa } from "node:url";
import Fe from "node:path";
import On from "fs/promises";
import L from "path";
import st from "os";
import Yr from "util";
import Nt from "stream";
import aa from "events";
import Zr from "fs";
import { open as oa } from "node:fs/promises";
import Mn from "tty";
import { createRequire as ca } from "module";
var ua = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ee = {}, W = {}, Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.splitWhen = Ze.flatten = void 0;
function la(t) {
  return t.reduce((e, r) => [].concat(e, r), []);
}
Ze.flatten = la;
function fa(t, e) {
  const r = [[]];
  let i = 0;
  for (const n of t)
    e(n) ? (i++, r[i] = []) : r[i].push(n);
  return r;
}
Ze.splitWhen = fa;
var Ut = {};
Object.defineProperty(Ut, "__esModule", { value: !0 });
Ut.isEnoentCodeError = void 0;
function pa(t) {
  return t.code === "ENOENT";
}
Ut.isEnoentCodeError = pa;
var zt = {};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.createDirentFromStats = void 0;
let da = class {
  constructor(e, r) {
    this.name = e, this.isBlockDevice = r.isBlockDevice.bind(r), this.isCharacterDevice = r.isCharacterDevice.bind(r), this.isDirectory = r.isDirectory.bind(r), this.isFIFO = r.isFIFO.bind(r), this.isFile = r.isFile.bind(r), this.isSocket = r.isSocket.bind(r), this.isSymbolicLink = r.isSymbolicLink.bind(r);
  }
};
function ma(t, e) {
  return new da(t, e);
}
zt.createDirentFromStats = ma;
var Y = {};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.convertPosixPathToPattern = Y.convertWindowsPathToPattern = Y.convertPathToPattern = Y.escapePosixPath = Y.escapeWindowsPath = Y.escape = Y.removeLeadingDotSegment = Y.makeAbsolute = Y.unixify = void 0;
const ha = st, ga = L, Fn = ha.platform() === "win32", xa = 2, ya = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\()|\\(?![!()*+?@[\]{|}]))/g, _a = /(\\?)([()[\]{}]|^!|[!+@](?=\())/g, va = /^\\\\([.?])/, Sa = /\\(?![!()+@[\]{}])/g;
function ba(t) {
  return t.replace(/\\/g, "/");
}
Y.unixify = ba;
function Ta(t, e) {
  return ga.resolve(t, e);
}
Y.makeAbsolute = Ta;
function wa(t) {
  if (t.charAt(0) === ".") {
    const e = t.charAt(1);
    if (e === "/" || e === "\\")
      return t.slice(xa);
  }
  return t;
}
Y.removeLeadingDotSegment = wa;
Y.escape = Fn ? Qr : Jr;
function Qr(t) {
  return t.replace(_a, "\\$2");
}
Y.escapeWindowsPath = Qr;
function Jr(t) {
  return t.replace(ya, "\\$2");
}
Y.escapePosixPath = Jr;
Y.convertPathToPattern = Fn ? Ln : Bn;
function Ln(t) {
  return Qr(t).replace(va, "//$1").replace(Sa, "/");
}
Y.convertWindowsPathToPattern = Ln;
function Bn(t) {
  return Jr(t);
}
Y.convertPosixPathToPattern = Bn;
var w = {};
/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var Aa = function(e) {
  if (typeof e != "string" || e === "")
    return !1;
  for (var r; r = /(\\).|([@?!+*]\(.*\))/g.exec(e); ) {
    if (r[2]) return !0;
    e = e.slice(r.index + r[0].length);
  }
  return !1;
};
/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var Ea = Aa, $n = { "{": "}", "(": ")", "[": "]" }, Ra = function(t) {
  if (t[0] === "!")
    return !0;
  for (var e = 0, r = -2, i = -2, n = -2, s = -2, a = -2; e < t.length; ) {
    if (t[e] === "*" || t[e + 1] === "?" && /[\].+)]/.test(t[e]) || i !== -1 && t[e] === "[" && t[e + 1] !== "]" && (i < e && (i = t.indexOf("]", e)), i > e && (a === -1 || a > i || (a = t.indexOf("\\", e), a === -1 || a > i))) || n !== -1 && t[e] === "{" && t[e + 1] !== "}" && (n = t.indexOf("}", e), n > e && (a = t.indexOf("\\", e), a === -1 || a > n)) || s !== -1 && t[e] === "(" && t[e + 1] === "?" && /[:!=]/.test(t[e + 2]) && t[e + 3] !== ")" && (s = t.indexOf(")", e), s > e && (a = t.indexOf("\\", e), a === -1 || a > s)) || r !== -1 && t[e] === "(" && t[e + 1] !== "|" && (r < e && (r = t.indexOf("|", e)), r !== -1 && t[r + 1] !== ")" && (s = t.indexOf(")", r), s > r && (a = t.indexOf("\\", r), a === -1 || a > s))))
      return !0;
    if (t[e] === "\\") {
      var o = t[e + 1];
      e += 2;
      var c = $n[o];
      if (c) {
        var p = t.indexOf(c, e);
        p !== -1 && (e = p + 1);
      }
      if (t[e] === "!")
        return !0;
    } else
      e++;
  }
  return !1;
}, ka = function(t) {
  if (t[0] === "!")
    return !0;
  for (var e = 0; e < t.length; ) {
    if (/[*?{}()[\]]/.test(t[e]))
      return !0;
    if (t[e] === "\\") {
      var r = t[e + 1];
      e += 2;
      var i = $n[r];
      if (i) {
        var n = t.indexOf(i, e);
        n !== -1 && (e = n + 1);
      }
      if (t[e] === "!")
        return !0;
    } else
      e++;
  }
  return !1;
}, Ca = function(e, r) {
  if (typeof e != "string" || e === "")
    return !1;
  if (Ea(e))
    return !0;
  var i = Ra;
  return r && r.strict === !1 && (i = ka), i(e);
}, Ia = Ca, Pa = L.posix.dirname, Oa = st.platform() === "win32", nr = "/", Ma = /\\/g, Da = /[\{\[].*[\}\]]$/, Fa = /(^|[^\\])([\{\[]|\([^\)]+$)/, La = /\\([\!\*\?\|\[\]\(\)\{\}])/g, Ba = function(e, r) {
  var i = Object.assign({ flipBackslashes: !0 }, r);
  i.flipBackslashes && Oa && e.indexOf(nr) < 0 && (e = e.replace(Ma, nr)), Da.test(e) && (e += nr), e += "a";
  do
    e = Pa(e);
  while (Ia(e) || Fa.test(e));
  return e.replace(La, "$1");
}, Ht = {};
(function(t) {
  t.isInteger = (e) => typeof e == "number" ? Number.isInteger(e) : typeof e == "string" && e.trim() !== "" ? Number.isInteger(Number(e)) : !1, t.find = (e, r) => e.nodes.find((i) => i.type === r), t.exceedsLimit = (e, r, i = 1, n) => n === !1 || !t.isInteger(e) || !t.isInteger(r) ? !1 : (Number(r) - Number(e)) / Number(i) >= n, t.escapeNode = (e, r = 0, i) => {
    const n = e.nodes[r];
    n && (i && n.type === i || n.type === "open" || n.type === "close") && n.escaped !== !0 && (n.value = "\\" + n.value, n.escaped = !0);
  }, t.encloseBrace = (e) => e.type !== "brace" || e.commas >> 0 + e.ranges >> 0 ? !1 : (e.invalid = !0, !0), t.isInvalidBrace = (e) => e.type !== "brace" ? !1 : e.invalid === !0 || e.dollar ? !0 : !(e.commas >> 0 + e.ranges >> 0) || e.open !== !0 || e.close !== !0 ? (e.invalid = !0, !0) : !1, t.isOpenOrClose = (e) => e.type === "open" || e.type === "close" ? !0 : e.open === !0 || e.close === !0, t.reduce = (e) => e.reduce((r, i) => (i.type === "text" && r.push(i.value), i.type === "range" && (i.type = "text"), r), []), t.flatten = (...e) => {
    const r = [], i = (n) => {
      for (let s = 0; s < n.length; s++) {
        const a = n[s];
        if (Array.isArray(a)) {
          i(a);
          continue;
        }
        a !== void 0 && r.push(a);
      }
      return r;
    };
    return i(e), r;
  };
})(Ht);
const Di = Ht;
var ei = (t, e = {}) => {
  const r = (i, n = {}) => {
    const s = e.escapeInvalid && Di.isInvalidBrace(n), a = i.invalid === !0 && e.escapeInvalid === !0;
    let o = "";
    if (i.value)
      return (s || a) && Di.isOpenOrClose(i) ? "\\" + i.value : i.value;
    if (i.value)
      return i.value;
    if (i.nodes)
      for (const c of i.nodes)
        o += r(c);
    return o;
  };
  return r(t);
};
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */
var $a = function(t) {
  return typeof t == "number" ? t - t === 0 : typeof t == "string" && t.trim() !== "" ? Number.isFinite ? Number.isFinite(+t) : isFinite(+t) : !1;
};
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */
const Fi = $a, je = (t, e, r) => {
  if (Fi(t) === !1)
    throw new TypeError("toRegexRange: expected the first argument to be a number");
  if (e === void 0 || t === e)
    return String(t);
  if (Fi(e) === !1)
    throw new TypeError("toRegexRange: expected the second argument to be a number.");
  let i = { relaxZeros: !0, ...r };
  typeof i.strictZeros == "boolean" && (i.relaxZeros = i.strictZeros === !1);
  let n = String(i.relaxZeros), s = String(i.shorthand), a = String(i.capture), o = String(i.wrap), c = t + ":" + e + "=" + n + s + a + o;
  if (je.cache.hasOwnProperty(c))
    return je.cache[c].result;
  let p = Math.min(t, e), l = Math.max(t, e);
  if (Math.abs(p - l) === 1) {
    let x = t + "|" + e;
    return i.capture ? `(${x})` : i.wrap === !1 ? x : `(?:${x})`;
  }
  let f = zi(t) || zi(e), u = { min: t, max: e, a: p, b: l }, y = [], d = [];
  if (f && (u.isPadded = f, u.maxLen = String(u.max).length), p < 0) {
    let x = l < 0 ? Math.abs(l) : 1;
    d = Li(x, Math.abs(p), u, i), p = u.a = 0;
  }
  return l >= 0 && (y = Li(p, l, u, i)), u.negatives = d, u.positives = y, u.result = Na(d, y), i.capture === !0 ? u.result = `(${u.result})` : i.wrap !== !1 && y.length + d.length > 1 && (u.result = `(?:${u.result})`), je.cache[c] = u, u.result;
};
function Na(t, e, r) {
  let i = sr(t, e, "-", !1) || [], n = sr(e, t, "", !1) || [], s = sr(t, e, "-?", !0) || [];
  return i.concat(s).concat(n).join("|");
}
function Ua(t, e) {
  let r = 1, i = 1, n = $i(t, r), s = /* @__PURE__ */ new Set([e]);
  for (; t <= n && n <= e; )
    s.add(n), r += 1, n = $i(t, r);
  for (n = Ni(e + 1, i) - 1; t < n && n <= e; )
    s.add(n), i += 1, n = Ni(e + 1, i) - 1;
  return s = [...s], s.sort(Ga), s;
}
function za(t, e, r) {
  if (t === e)
    return { pattern: t, count: [], digits: 0 };
  let i = Ha(t, e), n = i.length, s = "", a = 0;
  for (let o = 0; o < n; o++) {
    let [c, p] = i[o];
    c === p ? s += c : c !== "0" || p !== "9" ? s += ja(c, p) : a++;
  }
  return a && (s += r.shorthand === !0 ? "\\d" : "[0-9]"), { pattern: s, count: [a], digits: n };
}
function Li(t, e, r, i) {
  let n = Ua(t, e), s = [], a = t, o;
  for (let c = 0; c < n.length; c++) {
    let p = n[c], l = za(String(a), String(p), i), f = "";
    if (!r.isPadded && o && o.pattern === l.pattern) {
      o.count.length > 1 && o.count.pop(), o.count.push(l.count[0]), o.string = o.pattern + Ui(o.count), a = p + 1;
      continue;
    }
    r.isPadded && (f = Xa(p, r, i)), l.string = f + l.pattern + Ui(l.count), s.push(l), a = p + 1, o = l;
  }
  return s;
}
function sr(t, e, r, i, n) {
  let s = [];
  for (let a of t) {
    let { string: o } = a;
    !i && !Bi(e, "string", o) && s.push(r + o), i && Bi(e, "string", o) && s.push(r + o);
  }
  return s;
}
function Ha(t, e) {
  let r = [];
  for (let i = 0; i < t.length; i++) r.push([t[i], e[i]]);
  return r;
}
function Ga(t, e) {
  return t > e ? 1 : e > t ? -1 : 0;
}
function Bi(t, e, r) {
  return t.some((i) => i[e] === r);
}
function $i(t, e) {
  return Number(String(t).slice(0, -e) + "9".repeat(e));
}
function Ni(t, e) {
  return t - t % Math.pow(10, e);
}
function Ui(t) {
  let [e = 0, r = ""] = t;
  return r || e > 1 ? `{${e + (r ? "," + r : "")}}` : "";
}
function ja(t, e, r) {
  return `[${t}${e - t === 1 ? "" : "-"}${e}]`;
}
function zi(t) {
  return /^-?(0+)\d/.test(t);
}
function Xa(t, e, r) {
  if (!e.isPadded)
    return t;
  let i = Math.abs(e.maxLen - String(t).length), n = r.relaxZeros !== !1;
  switch (i) {
    case 0:
      return "";
    case 1:
      return n ? "0?" : "0";
    case 2:
      return n ? "0{0,2}" : "00";
    default:
      return n ? `0{0,${i}}` : `0{${i}}`;
  }
}
je.cache = {};
je.clearCache = () => je.cache = {};
var Wa = je;
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */
const qa = Yr, Nn = Wa, Hi = (t) => t !== null && typeof t == "object" && !Array.isArray(t), Va = (t) => (e) => t === !0 ? Number(e) : String(e), ar = (t) => typeof t == "number" || typeof t == "string" && t !== "", it = (t) => Number.isInteger(+t), or = (t) => {
  let e = `${t}`, r = -1;
  if (e[0] === "-" && (e = e.slice(1)), e === "0") return !1;
  for (; e[++r] === "0"; ) ;
  return r > 0;
}, Ka = (t, e, r) => typeof t == "string" || typeof e == "string" ? !0 : r.stringify === !0, Ya = (t, e, r) => {
  if (e > 0) {
    let i = t[0] === "-" ? "-" : "";
    i && (t = t.slice(1)), t = i + t.padStart(i ? e - 1 : e, "0");
  }
  return r === !1 ? String(t) : t;
}, It = (t, e) => {
  let r = t[0] === "-" ? "-" : "";
  for (r && (t = t.slice(1), e--); t.length < e; ) t = "0" + t;
  return r ? "-" + t : t;
}, Za = (t, e, r) => {
  t.negatives.sort((o, c) => o < c ? -1 : o > c ? 1 : 0), t.positives.sort((o, c) => o < c ? -1 : o > c ? 1 : 0);
  let i = e.capture ? "" : "?:", n = "", s = "", a;
  return t.positives.length && (n = t.positives.map((o) => It(String(o), r)).join("|")), t.negatives.length && (s = `-(${i}${t.negatives.map((o) => It(String(o), r)).join("|")})`), n && s ? a = `${n}|${s}` : a = n || s, e.wrap ? `(${i}${a})` : a;
}, Un = (t, e, r, i) => {
  if (r)
    return Nn(t, e, { wrap: !1, ...i });
  let n = String.fromCharCode(t);
  if (t === e) return n;
  let s = String.fromCharCode(e);
  return `[${n}-${s}]`;
}, zn = (t, e, r) => {
  if (Array.isArray(t)) {
    let i = r.wrap === !0, n = r.capture ? "" : "?:";
    return i ? `(${n}${t.join("|")})` : t.join("|");
  }
  return Nn(t, e, r);
}, Hn = (...t) => new RangeError("Invalid range arguments: " + qa.inspect(...t)), Gn = (t, e, r) => {
  if (r.strictRanges === !0) throw Hn([t, e]);
  return [];
}, Qa = (t, e) => {
  if (e.strictRanges === !0)
    throw new TypeError(`Expected step "${t}" to be a number`);
  return [];
}, Ja = (t, e, r = 1, i = {}) => {
  let n = Number(t), s = Number(e);
  if (!Number.isInteger(n) || !Number.isInteger(s)) {
    if (i.strictRanges === !0) throw Hn([t, e]);
    return [];
  }
  n === 0 && (n = 0), s === 0 && (s = 0);
  let a = n > s, o = String(t), c = String(e), p = String(r);
  r = Math.max(Math.abs(r), 1);
  let l = or(o) || or(c) || or(p), f = l ? Math.max(o.length, c.length, p.length) : 0, u = l === !1 && Ka(t, e, i) === !1, y = i.transform || Va(u);
  if (i.toRegex && r === 1)
    return Un(It(t, f), It(e, f), !0, i);
  let d = { negatives: [], positives: [] }, x = (F) => d[F < 0 ? "negatives" : "positives"].push(Math.abs(F)), b = [], T = 0;
  for (; a ? n >= s : n <= s; )
    i.toRegex === !0 && r > 1 ? x(n) : b.push(Ya(y(n, T), f, u)), n = a ? n - r : n + r, T++;
  return i.toRegex === !0 ? r > 1 ? Za(d, i, f) : zn(b, null, { wrap: !1, ...i }) : b;
}, eo = (t, e, r = 1, i = {}) => {
  if (!it(t) && t.length > 1 || !it(e) && e.length > 1)
    return Gn(t, e, i);
  let n = i.transform || ((u) => String.fromCharCode(u)), s = `${t}`.charCodeAt(0), a = `${e}`.charCodeAt(0), o = s > a, c = Math.min(s, a), p = Math.max(s, a);
  if (i.toRegex && r === 1)
    return Un(c, p, !1, i);
  let l = [], f = 0;
  for (; o ? s >= a : s <= a; )
    l.push(n(s, f)), s = o ? s - r : s + r, f++;
  return i.toRegex === !0 ? zn(l, null, { wrap: !1, options: i }) : l;
}, Rt = (t, e, r, i = {}) => {
  if (e == null && ar(t))
    return [t];
  if (!ar(t) || !ar(e))
    return Gn(t, e, i);
  if (typeof r == "function")
    return Rt(t, e, 1, { transform: r });
  if (Hi(r))
    return Rt(t, e, 0, r);
  let n = { ...i };
  return n.capture === !0 && (n.wrap = !0), r = r || n.step || 1, it(r) ? it(t) && it(e) ? Ja(t, e, r, n) : eo(t, e, Math.max(Math.abs(r), 1), n) : r != null && !Hi(r) ? Qa(r, n) : Rt(t, e, 1, r);
};
var jn = Rt;
const to = jn, Gi = Ht, ro = (t, e = {}) => {
  const r = (i, n = {}) => {
    const s = Gi.isInvalidBrace(n), a = i.invalid === !0 && e.escapeInvalid === !0, o = s === !0 || a === !0, c = e.escapeInvalid === !0 ? "\\" : "";
    let p = "";
    if (i.isOpen === !0)
      return c + i.value;
    if (i.isClose === !0)
      return console.log("node.isClose", c, i.value), c + i.value;
    if (i.type === "open")
      return o ? c + i.value : "(";
    if (i.type === "close")
      return o ? c + i.value : ")";
    if (i.type === "comma")
      return i.prev.type === "comma" ? "" : o ? i.value : "|";
    if (i.value)
      return i.value;
    if (i.nodes && i.ranges > 0) {
      const l = Gi.reduce(i.nodes), f = to(...l, { ...e, wrap: !1, toRegex: !0, strictZeros: !0 });
      if (f.length !== 0)
        return l.length > 1 && f.length > 1 ? `(${f})` : f;
    }
    if (i.nodes)
      for (const l of i.nodes)
        p += r(l, i);
    return p;
  };
  return r(t);
};
var io = ro;
const no = jn, ji = ei, Ve = Ht, He = (t = "", e = "", r = !1) => {
  const i = [];
  if (t = [].concat(t), e = [].concat(e), !e.length) return t;
  if (!t.length)
    return r ? Ve.flatten(e).map((n) => `{${n}}`) : e;
  for (const n of t)
    if (Array.isArray(n))
      for (const s of n)
        i.push(He(s, e, r));
    else
      for (let s of e)
        r === !0 && typeof s == "string" && (s = `{${s}}`), i.push(Array.isArray(s) ? He(n, s, r) : n + s);
  return Ve.flatten(i);
}, so = (t, e = {}) => {
  const r = e.rangeLimit === void 0 ? 1e3 : e.rangeLimit, i = (n, s = {}) => {
    n.queue = [];
    let a = s, o = s.queue;
    for (; a.type !== "brace" && a.type !== "root" && a.parent; )
      a = a.parent, o = a.queue;
    if (n.invalid || n.dollar) {
      o.push(He(o.pop(), ji(n, e)));
      return;
    }
    if (n.type === "brace" && n.invalid !== !0 && n.nodes.length === 2) {
      o.push(He(o.pop(), ["{}"]));
      return;
    }
    if (n.nodes && n.ranges > 0) {
      const f = Ve.reduce(n.nodes);
      if (Ve.exceedsLimit(...f, e.step, r))
        throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
      let u = no(...f, e);
      u.length === 0 && (u = ji(n, e)), o.push(He(o.pop(), u)), n.nodes = [];
      return;
    }
    const c = Ve.encloseBrace(n);
    let p = n.queue, l = n;
    for (; l.type !== "brace" && l.type !== "root" && l.parent; )
      l = l.parent, p = l.queue;
    for (let f = 0; f < n.nodes.length; f++) {
      const u = n.nodes[f];
      if (u.type === "comma" && n.type === "brace") {
        f === 1 && p.push(""), p.push("");
        continue;
      }
      if (u.type === "close") {
        o.push(He(o.pop(), p, c));
        continue;
      }
      if (u.value && u.type !== "open") {
        p.push(He(p.pop(), u.value));
        continue;
      }
      u.nodes && i(u, n);
    }
    return p;
  };
  return Ve.flatten(i(t));
};
var ao = so, oo = {
  MAX_LENGTH: 1e4,
  CHAR_LEFT_PARENTHESES: "(",
  /* ( */
  CHAR_RIGHT_PARENTHESES: ")",
  /* ) */
  CHAR_BACKSLASH: "\\",
  /* \ */
  CHAR_BACKTICK: "`",
  /* ` */
  CHAR_COMMA: ",",
  /* , */
  CHAR_DOT: ".",
  /* . */
  CHAR_DOUBLE_QUOTE: '"',
  /* " */
  CHAR_LEFT_CURLY_BRACE: "{",
  /* { */
  CHAR_LEFT_SQUARE_BRACKET: "[",
  /* [ */
  CHAR_NO_BREAK_SPACE: " ",
  /* \u00A0 */
  CHAR_RIGHT_CURLY_BRACE: "}",
  /* } */
  CHAR_RIGHT_SQUARE_BRACKET: "]",
  /* ] */
  CHAR_SINGLE_QUOTE: "'",
  /* ' */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
  /* \uFEFF */
};
const co = ei, {
  MAX_LENGTH: Xi,
  CHAR_BACKSLASH: cr,
  /* \ */
  CHAR_BACKTICK: uo,
  /* ` */
  CHAR_COMMA: lo,
  /* , */
  CHAR_DOT: fo,
  /* . */
  CHAR_LEFT_PARENTHESES: po,
  /* ( */
  CHAR_RIGHT_PARENTHESES: mo,
  /* ) */
  CHAR_LEFT_CURLY_BRACE: ho,
  /* { */
  CHAR_RIGHT_CURLY_BRACE: go,
  /* } */
  CHAR_LEFT_SQUARE_BRACKET: Wi,
  /* [ */
  CHAR_RIGHT_SQUARE_BRACKET: qi,
  /* ] */
  CHAR_DOUBLE_QUOTE: xo,
  /* " */
  CHAR_SINGLE_QUOTE: yo,
  /* ' */
  CHAR_NO_BREAK_SPACE: _o,
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: vo
} = oo, So = (t, e = {}) => {
  if (typeof t != "string")
    throw new TypeError("Expected a string");
  const r = e || {}, i = typeof r.maxLength == "number" ? Math.min(Xi, r.maxLength) : Xi;
  if (t.length > i)
    throw new SyntaxError(`Input length (${t.length}), exceeds max characters (${i})`);
  const n = { type: "root", input: t, nodes: [] }, s = [n];
  let a = n, o = n, c = 0;
  const p = t.length;
  let l = 0, f = 0, u;
  const y = () => t[l++], d = (x) => {
    if (x.type === "text" && o.type === "dot" && (o.type = "text"), o && o.type === "text" && x.type === "text") {
      o.value += x.value;
      return;
    }
    return a.nodes.push(x), x.parent = a, x.prev = o, o = x, x;
  };
  for (d({ type: "bos" }); l < p; )
    if (a = s[s.length - 1], u = y(), !(u === vo || u === _o)) {
      if (u === cr) {
        d({ type: "text", value: (e.keepEscaping ? u : "") + y() });
        continue;
      }
      if (u === qi) {
        d({ type: "text", value: "\\" + u });
        continue;
      }
      if (u === Wi) {
        c++;
        let x;
        for (; l < p && (x = y()); ) {
          if (u += x, x === Wi) {
            c++;
            continue;
          }
          if (x === cr) {
            u += y();
            continue;
          }
          if (x === qi && (c--, c === 0))
            break;
        }
        d({ type: "text", value: u });
        continue;
      }
      if (u === po) {
        a = d({ type: "paren", nodes: [] }), s.push(a), d({ type: "text", value: u });
        continue;
      }
      if (u === mo) {
        if (a.type !== "paren") {
          d({ type: "text", value: u });
          continue;
        }
        a = s.pop(), d({ type: "text", value: u }), a = s[s.length - 1];
        continue;
      }
      if (u === xo || u === yo || u === uo) {
        const x = u;
        let b;
        for (e.keepQuotes !== !0 && (u = ""); l < p && (b = y()); ) {
          if (b === cr) {
            u += b + y();
            continue;
          }
          if (b === x) {
            e.keepQuotes === !0 && (u += b);
            break;
          }
          u += b;
        }
        d({ type: "text", value: u });
        continue;
      }
      if (u === ho) {
        f++;
        const b = {
          type: "brace",
          open: !0,
          close: !1,
          dollar: o.value && o.value.slice(-1) === "$" || a.dollar === !0,
          depth: f,
          commas: 0,
          ranges: 0,
          nodes: []
        };
        a = d(b), s.push(a), d({ type: "open", value: u });
        continue;
      }
      if (u === go) {
        if (a.type !== "brace") {
          d({ type: "text", value: u });
          continue;
        }
        const x = "close";
        a = s.pop(), a.close = !0, d({ type: x, value: u }), f--, a = s[s.length - 1];
        continue;
      }
      if (u === lo && f > 0) {
        if (a.ranges > 0) {
          a.ranges = 0;
          const x = a.nodes.shift();
          a.nodes = [x, { type: "text", value: co(a) }];
        }
        d({ type: "comma", value: u }), a.commas++;
        continue;
      }
      if (u === fo && f > 0 && a.commas === 0) {
        const x = a.nodes;
        if (f === 0 || x.length === 0) {
          d({ type: "text", value: u });
          continue;
        }
        if (o.type === "dot") {
          if (a.range = [], o.value += u, o.type = "range", a.nodes.length !== 3 && a.nodes.length !== 5) {
            a.invalid = !0, a.ranges = 0, o.type = "text";
            continue;
          }
          a.ranges++, a.args = [];
          continue;
        }
        if (o.type === "range") {
          x.pop();
          const b = x[x.length - 1];
          b.value += o.value + u, o = b, a.ranges--;
          continue;
        }
        d({ type: "dot", value: u });
        continue;
      }
      d({ type: "text", value: u });
    }
  do
    if (a = s.pop(), a.type !== "root") {
      a.nodes.forEach((T) => {
        T.nodes || (T.type === "open" && (T.isOpen = !0), T.type === "close" && (T.isClose = !0), T.nodes || (T.type = "text"), T.invalid = !0);
      });
      const x = s[s.length - 1], b = x.nodes.indexOf(a);
      x.nodes.splice(b, 1, ...a.nodes);
    }
  while (s.length > 0);
  return d({ type: "eos" }), n;
};
var bo = So;
const Vi = ei, To = io, wo = ao, Ao = bo, le = (t, e = {}) => {
  let r = [];
  if (Array.isArray(t))
    for (const i of t) {
      const n = le.create(i, e);
      Array.isArray(n) ? r.push(...n) : r.push(n);
    }
  else
    r = [].concat(le.create(t, e));
  return e && e.expand === !0 && e.nodupes === !0 && (r = [...new Set(r)]), r;
};
le.parse = (t, e = {}) => Ao(t, e);
le.stringify = (t, e = {}) => Vi(typeof t == "string" ? le.parse(t, e) : t, e);
le.compile = (t, e = {}) => (typeof t == "string" && (t = le.parse(t, e)), To(t, e));
le.expand = (t, e = {}) => {
  typeof t == "string" && (t = le.parse(t, e));
  let r = wo(t, e);
  return e.noempty === !0 && (r = r.filter(Boolean)), e.nodupes === !0 && (r = [...new Set(r)]), r;
};
le.create = (t, e = {}) => t === "" || t.length < 3 ? [t] : e.expand !== !0 ? le.compile(t, e) : le.expand(t, e);
var Eo = le, at = {};
const Ro = L, Te = "\\\\/", Ki = `[^${Te}]`, Re = "\\.", ko = "\\+", Co = "\\?", Gt = "\\/", Io = "(?=.)", Xn = "[^/]", ti = `(?:${Gt}|$)`, Wn = `(?:^|${Gt})`, ri = `${Re}{1,2}${ti}`, Po = `(?!${Re})`, Oo = `(?!${Wn}${ri})`, Mo = `(?!${Re}{0,1}${ti})`, Do = `(?!${ri})`, Fo = `[^.${Gt}]`, Lo = `${Xn}*?`, qn = {
  DOT_LITERAL: Re,
  PLUS_LITERAL: ko,
  QMARK_LITERAL: Co,
  SLASH_LITERAL: Gt,
  ONE_CHAR: Io,
  QMARK: Xn,
  END_ANCHOR: ti,
  DOTS_SLASH: ri,
  NO_DOT: Po,
  NO_DOTS: Oo,
  NO_DOT_SLASH: Mo,
  NO_DOTS_SLASH: Do,
  QMARK_NO_DOT: Fo,
  STAR: Lo,
  START_ANCHOR: Wn
}, Bo = {
  ...qn,
  SLASH_LITERAL: `[${Te}]`,
  QMARK: Ki,
  STAR: `${Ki}*?`,
  DOTS_SLASH: `${Re}{1,2}(?:[${Te}]|$)`,
  NO_DOT: `(?!${Re})`,
  NO_DOTS: `(?!(?:^|[${Te}])${Re}{1,2}(?:[${Te}]|$))`,
  NO_DOT_SLASH: `(?!${Re}{0,1}(?:[${Te}]|$))`,
  NO_DOTS_SLASH: `(?!${Re}{1,2}(?:[${Te}]|$))`,
  QMARK_NO_DOT: `[^.${Te}]`,
  START_ANCHOR: `(?:^|[${Te}])`,
  END_ANCHOR: `(?:[${Te}]|$)`
}, $o = {
  alnum: "a-zA-Z0-9",
  alpha: "a-zA-Z",
  ascii: "\\x00-\\x7F",
  blank: " \\t",
  cntrl: "\\x00-\\x1F\\x7F",
  digit: "0-9",
  graph: "\\x21-\\x7E",
  lower: "a-z",
  print: "\\x20-\\x7E ",
  punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
  space: " \\t\\r\\n\\v\\f",
  upper: "A-Z",
  word: "A-Za-z0-9_",
  xdigit: "A-Fa-f0-9"
};
var jt = {
  MAX_LENGTH: 1024 * 64,
  POSIX_REGEX_SOURCE: $o,
  // regular expressions
  REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
  REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
  REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
  REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
  REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
  REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
  // Replace globs with equivalent patterns to reduce parsing time.
  REPLACEMENTS: {
    "***": "*",
    "**/**": "**",
    "**/**/**": "**"
  },
  // Digits
  CHAR_0: 48,
  /* 0 */
  CHAR_9: 57,
  /* 9 */
  // Alphabet chars.
  CHAR_UPPERCASE_A: 65,
  /* A */
  CHAR_LOWERCASE_A: 97,
  /* a */
  CHAR_UPPERCASE_Z: 90,
  /* Z */
  CHAR_LOWERCASE_Z: 122,
  /* z */
  CHAR_LEFT_PARENTHESES: 40,
  /* ( */
  CHAR_RIGHT_PARENTHESES: 41,
  /* ) */
  CHAR_ASTERISK: 42,
  /* * */
  // Non-alphabetic chars.
  CHAR_AMPERSAND: 38,
  /* & */
  CHAR_AT: 64,
  /* @ */
  CHAR_BACKWARD_SLASH: 92,
  /* \ */
  CHAR_CARRIAGE_RETURN: 13,
  /* \r */
  CHAR_CIRCUMFLEX_ACCENT: 94,
  /* ^ */
  CHAR_COLON: 58,
  /* : */
  CHAR_COMMA: 44,
  /* , */
  CHAR_DOT: 46,
  /* . */
  CHAR_DOUBLE_QUOTE: 34,
  /* " */
  CHAR_EQUAL: 61,
  /* = */
  CHAR_EXCLAMATION_MARK: 33,
  /* ! */
  CHAR_FORM_FEED: 12,
  /* \f */
  CHAR_FORWARD_SLASH: 47,
  /* / */
  CHAR_GRAVE_ACCENT: 96,
  /* ` */
  CHAR_HASH: 35,
  /* # */
  CHAR_HYPHEN_MINUS: 45,
  /* - */
  CHAR_LEFT_ANGLE_BRACKET: 60,
  /* < */
  CHAR_LEFT_CURLY_BRACE: 123,
  /* { */
  CHAR_LEFT_SQUARE_BRACKET: 91,
  /* [ */
  CHAR_LINE_FEED: 10,
  /* \n */
  CHAR_NO_BREAK_SPACE: 160,
  /* \u00A0 */
  CHAR_PERCENT: 37,
  /* % */
  CHAR_PLUS: 43,
  /* + */
  CHAR_QUESTION_MARK: 63,
  /* ? */
  CHAR_RIGHT_ANGLE_BRACKET: 62,
  /* > */
  CHAR_RIGHT_CURLY_BRACE: 125,
  /* } */
  CHAR_RIGHT_SQUARE_BRACKET: 93,
  /* ] */
  CHAR_SEMICOLON: 59,
  /* ; */
  CHAR_SINGLE_QUOTE: 39,
  /* ' */
  CHAR_SPACE: 32,
  /*   */
  CHAR_TAB: 9,
  /* \t */
  CHAR_UNDERSCORE: 95,
  /* _ */
  CHAR_VERTICAL_LINE: 124,
  /* | */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
  /* \uFEFF */
  SEP: Ro.sep,
  /**
   * Create EXTGLOB_CHARS
   */
  extglobChars(t) {
    return {
      "!": { type: "negate", open: "(?:(?!(?:", close: `))${t.STAR})` },
      "?": { type: "qmark", open: "(?:", close: ")?" },
      "+": { type: "plus", open: "(?:", close: ")+" },
      "*": { type: "star", open: "(?:", close: ")*" },
      "@": { type: "at", open: "(?:", close: ")" }
    };
  },
  /**
   * Create GLOB_CHARS
   */
  globChars(t) {
    return t === !0 ? Bo : qn;
  }
};
(function(t) {
  const e = L, r = process.platform === "win32", {
    REGEX_BACKSLASH: i,
    REGEX_REMOVE_BACKSLASH: n,
    REGEX_SPECIAL_CHARS: s,
    REGEX_SPECIAL_CHARS_GLOBAL: a
  } = jt;
  t.isObject = (o) => o !== null && typeof o == "object" && !Array.isArray(o), t.hasRegexChars = (o) => s.test(o), t.isRegexChar = (o) => o.length === 1 && t.hasRegexChars(o), t.escapeRegex = (o) => o.replace(a, "\\$1"), t.toPosixSlashes = (o) => o.replace(i, "/"), t.removeBackslashes = (o) => o.replace(n, (c) => c === "\\" ? "" : c), t.supportsLookbehinds = () => {
    const o = process.version.slice(1).split(".").map(Number);
    return o.length === 3 && o[0] >= 9 || o[0] === 8 && o[1] >= 10;
  }, t.isWindows = (o) => o && typeof o.windows == "boolean" ? o.windows : r === !0 || e.sep === "\\", t.escapeLast = (o, c, p) => {
    const l = o.lastIndexOf(c, p);
    return l === -1 ? o : o[l - 1] === "\\" ? t.escapeLast(o, c, l - 1) : `${o.slice(0, l)}\\${o.slice(l)}`;
  }, t.removePrefix = (o, c = {}) => {
    let p = o;
    return p.startsWith("./") && (p = p.slice(2), c.prefix = "./"), p;
  }, t.wrapOutput = (o, c = {}, p = {}) => {
    const l = p.contains ? "" : "^", f = p.contains ? "" : "$";
    let u = `${l}(?:${o})${f}`;
    return c.negated === !0 && (u = `(?:^(?!${u}).*$)`), u;
  };
})(at);
const Yi = at, {
  CHAR_ASTERISK: ur,
  /* * */
  CHAR_AT: No,
  /* @ */
  CHAR_BACKWARD_SLASH: tt,
  /* \ */
  CHAR_COMMA: Uo,
  /* , */
  CHAR_DOT: lr,
  /* . */
  CHAR_EXCLAMATION_MARK: fr,
  /* ! */
  CHAR_FORWARD_SLASH: Vn,
  /* / */
  CHAR_LEFT_CURLY_BRACE: pr,
  /* { */
  CHAR_LEFT_PARENTHESES: dr,
  /* ( */
  CHAR_LEFT_SQUARE_BRACKET: zo,
  /* [ */
  CHAR_PLUS: Ho,
  /* + */
  CHAR_QUESTION_MARK: Zi,
  /* ? */
  CHAR_RIGHT_CURLY_BRACE: Go,
  /* } */
  CHAR_RIGHT_PARENTHESES: Qi,
  /* ) */
  CHAR_RIGHT_SQUARE_BRACKET: jo
  /* ] */
} = jt, Ji = (t) => t === Vn || t === tt, en = (t) => {
  t.isPrefix !== !0 && (t.depth = t.isGlobstar ? 1 / 0 : 1);
}, Xo = (t, e) => {
  const r = e || {}, i = t.length - 1, n = r.parts === !0 || r.scanToEnd === !0, s = [], a = [], o = [];
  let c = t, p = -1, l = 0, f = 0, u = !1, y = !1, d = !1, x = !1, b = !1, T = !1, F = !1, C = !1, V = !1, E = !1, B = 0, R, A, O = { value: "", depth: 0, isGlob: !1 };
  const X = () => p >= i, g = () => c.charCodeAt(p + 1), $ = () => (R = A, c.charCodeAt(++p));
  for (; p < i; ) {
    A = $();
    let K;
    if (A === tt) {
      F = O.backslashes = !0, A = $(), A === pr && (T = !0);
      continue;
    }
    if (T === !0 || A === pr) {
      for (B++; X() !== !0 && (A = $()); ) {
        if (A === tt) {
          F = O.backslashes = !0, $();
          continue;
        }
        if (A === pr) {
          B++;
          continue;
        }
        if (T !== !0 && A === lr && (A = $()) === lr) {
          if (u = O.isBrace = !0, d = O.isGlob = !0, E = !0, n === !0)
            continue;
          break;
        }
        if (T !== !0 && A === Uo) {
          if (u = O.isBrace = !0, d = O.isGlob = !0, E = !0, n === !0)
            continue;
          break;
        }
        if (A === Go && (B--, B === 0)) {
          T = !1, u = O.isBrace = !0, E = !0;
          break;
        }
      }
      if (n === !0)
        continue;
      break;
    }
    if (A === Vn) {
      if (s.push(p), a.push(O), O = { value: "", depth: 0, isGlob: !1 }, E === !0) continue;
      if (R === lr && p === l + 1) {
        l += 2;
        continue;
      }
      f = p + 1;
      continue;
    }
    if (r.noext !== !0 && (A === Ho || A === No || A === ur || A === Zi || A === fr) === !0 && g() === dr) {
      if (d = O.isGlob = !0, x = O.isExtglob = !0, E = !0, A === fr && p === l && (V = !0), n === !0) {
        for (; X() !== !0 && (A = $()); ) {
          if (A === tt) {
            F = O.backslashes = !0, A = $();
            continue;
          }
          if (A === Qi) {
            d = O.isGlob = !0, E = !0;
            break;
          }
        }
        continue;
      }
      break;
    }
    if (A === ur) {
      if (R === ur && (b = O.isGlobstar = !0), d = O.isGlob = !0, E = !0, n === !0)
        continue;
      break;
    }
    if (A === Zi) {
      if (d = O.isGlob = !0, E = !0, n === !0)
        continue;
      break;
    }
    if (A === zo) {
      for (; X() !== !0 && (K = $()); ) {
        if (K === tt) {
          F = O.backslashes = !0, $();
          continue;
        }
        if (K === jo) {
          y = O.isBracket = !0, d = O.isGlob = !0, E = !0;
          break;
        }
      }
      if (n === !0)
        continue;
      break;
    }
    if (r.nonegate !== !0 && A === fr && p === l) {
      C = O.negated = !0, l++;
      continue;
    }
    if (r.noparen !== !0 && A === dr) {
      if (d = O.isGlob = !0, n === !0) {
        for (; X() !== !0 && (A = $()); ) {
          if (A === dr) {
            F = O.backslashes = !0, A = $();
            continue;
          }
          if (A === Qi) {
            E = !0;
            break;
          }
        }
        continue;
      }
      break;
    }
    if (d === !0) {
      if (E = !0, n === !0)
        continue;
      break;
    }
  }
  r.noext === !0 && (x = !1, d = !1);
  let N = c, ve = "", h = "";
  l > 0 && (ve = c.slice(0, l), c = c.slice(l), f -= l), N && d === !0 && f > 0 ? (N = c.slice(0, f), h = c.slice(f)) : d === !0 ? (N = "", h = c) : N = c, N && N !== "" && N !== "/" && N !== c && Ji(N.charCodeAt(N.length - 1)) && (N = N.slice(0, -1)), r.unescape === !0 && (h && (h = Yi.removeBackslashes(h)), N && F === !0 && (N = Yi.removeBackslashes(N)));
  const m = {
    prefix: ve,
    input: t,
    start: l,
    base: N,
    glob: h,
    isBrace: u,
    isBracket: y,
    isGlob: d,
    isExtglob: x,
    isGlobstar: b,
    negated: C,
    negatedExtglob: V
  };
  if (r.tokens === !0 && (m.maxDepth = 0, Ji(A) || a.push(O), m.tokens = a), r.parts === !0 || r.tokens === !0) {
    let K;
    for (let D = 0; D < s.length; D++) {
      const Z = K ? K + 1 : l, pe = s[D], te = t.slice(Z, pe);
      r.tokens && (D === 0 && l !== 0 ? (a[D].isPrefix = !0, a[D].value = ve) : a[D].value = te, en(a[D]), m.maxDepth += a[D].depth), (D !== 0 || te !== "") && o.push(te), K = pe;
    }
    if (K && K + 1 < t.length) {
      const D = t.slice(K + 1);
      o.push(D), r.tokens && (a[a.length - 1].value = D, en(a[a.length - 1]), m.maxDepth += a[a.length - 1].depth);
    }
    m.slashes = s, m.parts = o;
  }
  return m;
};
var Wo = Xo;
const Pt = jt, ae = at, {
  MAX_LENGTH: Ot,
  POSIX_REGEX_SOURCE: qo,
  REGEX_NON_SPECIAL_CHARS: Vo,
  REGEX_SPECIAL_CHARS_BACKREF: Ko,
  REPLACEMENTS: Kn
} = Pt, Yo = (t, e) => {
  if (typeof e.expandRange == "function")
    return e.expandRange(...t, e);
  t.sort();
  const r = `[${t.join("-")}]`;
  try {
    new RegExp(r);
  } catch {
    return t.map((n) => ae.escapeRegex(n)).join("..");
  }
  return r;
}, We = (t, e) => `Missing ${t}: "${e}" - use "\\\\${e}" to match literal characters`, ii = (t, e) => {
  if (typeof t != "string")
    throw new TypeError("Expected a string");
  t = Kn[t] || t;
  const r = { ...e }, i = typeof r.maxLength == "number" ? Math.min(Ot, r.maxLength) : Ot;
  let n = t.length;
  if (n > i)
    throw new SyntaxError(`Input length: ${n}, exceeds maximum allowed length: ${i}`);
  const s = { type: "bos", value: "", output: r.prepend || "" }, a = [s], o = r.capture ? "" : "?:", c = ae.isWindows(e), p = Pt.globChars(c), l = Pt.extglobChars(p), {
    DOT_LITERAL: f,
    PLUS_LITERAL: u,
    SLASH_LITERAL: y,
    ONE_CHAR: d,
    DOTS_SLASH: x,
    NO_DOT: b,
    NO_DOT_SLASH: T,
    NO_DOTS_SLASH: F,
    QMARK: C,
    QMARK_NO_DOT: V,
    STAR: E,
    START_ANCHOR: B
  } = p, R = (S) => `(${o}(?:(?!${B}${S.dot ? x : f}).)*?)`, A = r.dot ? "" : b, O = r.dot ? C : V;
  let X = r.bash === !0 ? R(r) : E;
  r.capture && (X = `(${X})`), typeof r.noext == "boolean" && (r.noextglob = r.noext);
  const g = {
    input: t,
    index: -1,
    start: 0,
    dot: r.dot === !0,
    consumed: "",
    output: "",
    prefix: "",
    backtrack: !1,
    negated: !1,
    brackets: 0,
    braces: 0,
    parens: 0,
    quotes: 0,
    globstar: !1,
    tokens: a
  };
  t = ae.removePrefix(t, g), n = t.length;
  const $ = [], N = [], ve = [];
  let h = s, m;
  const K = () => g.index === n - 1, D = g.peek = (S = 1) => t[g.index + S], Z = g.advance = () => t[++g.index] || "", pe = () => t.slice(g.index + 1), te = (S = "", U = 0) => {
    g.consumed += S, g.index += U;
  }, ke = (S) => {
    g.output += S.output != null ? S.output : S.value, te(S.value);
  }, Ce = () => {
    let S = 1;
    for (; D() === "!" && (D(2) !== "(" || D(3) === "?"); )
      Z(), g.start++, S++;
    return S % 2 === 0 ? !1 : (g.negated = !0, g.start++, !0);
  }, Ne = (S) => {
    g[S]++, ve.push(S);
  }, ne = (S) => {
    g[S]--, ve.pop();
  }, P = (S) => {
    if (h.type === "globstar") {
      const U = g.braces > 0 && (S.type === "comma" || S.type === "brace"), _ = S.extglob === !0 || $.length && (S.type === "pipe" || S.type === "paren");
      S.type !== "slash" && S.type !== "paren" && !U && !_ && (g.output = g.output.slice(0, -h.output.length), h.type = "star", h.value = "*", h.output = X, g.output += h.output);
    }
    if ($.length && S.type !== "paren" && ($[$.length - 1].inner += S.value), (S.value || S.output) && ke(S), h && h.type === "text" && S.type === "text") {
      h.value += S.value, h.output = (h.output || "") + S.value;
      return;
    }
    S.prev = h, a.push(S), h = S;
  }, Ie = (S, U) => {
    const _ = { ...l[U], conditions: 1, inner: "" };
    _.prev = h, _.parens = g.parens, _.output = g.output;
    const I = (r.capture ? "(" : "") + _.open;
    Ne("parens"), P({ type: S, value: U, output: g.output ? "" : d }), P({ type: "paren", extglob: !0, value: Z(), output: I }), $.push(_);
  }, ht = (S) => {
    let U = S.close + (r.capture ? ")" : ""), _;
    if (S.type === "negate") {
      let I = X;
      if (S.inner && S.inner.length > 1 && S.inner.includes("/") && (I = R(r)), (I !== X || K() || /^\)+$/.test(pe())) && (U = S.close = `)$))${I}`), S.inner.includes("*") && (_ = pe()) && /^\.[^\\/.]+$/.test(_)) {
        const H = ii(_, { ...e, fastpaths: !1 }).output;
        U = S.close = `)${H})${I})`;
      }
      S.prev.type === "bos" && (g.negatedExtglob = !0);
    }
    P({ type: "paren", extglob: !0, value: m, output: U }), ne("parens");
  };
  if (r.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(t)) {
    let S = !1, U = t.replace(Ko, (_, I, H, re, Q, rr) => re === "\\" ? (S = !0, _) : re === "?" ? I ? I + re + (Q ? C.repeat(Q.length) : "") : rr === 0 ? O + (Q ? C.repeat(Q.length) : "") : C.repeat(H.length) : re === "." ? f.repeat(H.length) : re === "*" ? I ? I + re + (Q ? X : "") : X : I ? _ : `\\${_}`);
    return S === !0 && (r.unescape === !0 ? U = U.replace(/\\/g, "") : U = U.replace(/\\+/g, (_) => _.length % 2 === 0 ? "\\\\" : _ ? "\\" : "")), U === t && r.contains === !0 ? (g.output = t, g) : (g.output = ae.wrapOutput(U, g, e), g);
  }
  for (; !K(); ) {
    if (m = Z(), m === "\0")
      continue;
    if (m === "\\") {
      const _ = D();
      if (_ === "/" && r.bash !== !0 || _ === "." || _ === ";")
        continue;
      if (!_) {
        m += "\\", P({ type: "text", value: m });
        continue;
      }
      const I = /^\\+/.exec(pe());
      let H = 0;
      if (I && I[0].length > 2 && (H = I[0].length, g.index += H, H % 2 !== 0 && (m += "\\")), r.unescape === !0 ? m = Z() : m += Z(), g.brackets === 0) {
        P({ type: "text", value: m });
        continue;
      }
    }
    if (g.brackets > 0 && (m !== "]" || h.value === "[" || h.value === "[^")) {
      if (r.posix !== !1 && m === ":") {
        const _ = h.value.slice(1);
        if (_.includes("[") && (h.posix = !0, _.includes(":"))) {
          const I = h.value.lastIndexOf("["), H = h.value.slice(0, I), re = h.value.slice(I + 2), Q = qo[re];
          if (Q) {
            h.value = H + Q, g.backtrack = !0, Z(), !s.output && a.indexOf(h) === 1 && (s.output = d);
            continue;
          }
        }
      }
      (m === "[" && D() !== ":" || m === "-" && D() === "]") && (m = `\\${m}`), m === "]" && (h.value === "[" || h.value === "[^") && (m = `\\${m}`), r.posix === !0 && m === "!" && h.value === "[" && (m = "^"), h.value += m, ke({ value: m });
      continue;
    }
    if (g.quotes === 1 && m !== '"') {
      m = ae.escapeRegex(m), h.value += m, ke({ value: m });
      continue;
    }
    if (m === '"') {
      g.quotes = g.quotes === 1 ? 0 : 1, r.keepQuotes === !0 && P({ type: "text", value: m });
      continue;
    }
    if (m === "(") {
      Ne("parens"), P({ type: "paren", value: m });
      continue;
    }
    if (m === ")") {
      if (g.parens === 0 && r.strictBrackets === !0)
        throw new SyntaxError(We("opening", "("));
      const _ = $[$.length - 1];
      if (_ && g.parens === _.parens + 1) {
        ht($.pop());
        continue;
      }
      P({ type: "paren", value: m, output: g.parens ? ")" : "\\)" }), ne("parens");
      continue;
    }
    if (m === "[") {
      if (r.nobracket === !0 || !pe().includes("]")) {
        if (r.nobracket !== !0 && r.strictBrackets === !0)
          throw new SyntaxError(We("closing", "]"));
        m = `\\${m}`;
      } else
        Ne("brackets");
      P({ type: "bracket", value: m });
      continue;
    }
    if (m === "]") {
      if (r.nobracket === !0 || h && h.type === "bracket" && h.value.length === 1) {
        P({ type: "text", value: m, output: `\\${m}` });
        continue;
      }
      if (g.brackets === 0) {
        if (r.strictBrackets === !0)
          throw new SyntaxError(We("opening", "["));
        P({ type: "text", value: m, output: `\\${m}` });
        continue;
      }
      ne("brackets");
      const _ = h.value.slice(1);
      if (h.posix !== !0 && _[0] === "^" && !_.includes("/") && (m = `/${m}`), h.value += m, ke({ value: m }), r.literalBrackets === !1 || ae.hasRegexChars(_))
        continue;
      const I = ae.escapeRegex(h.value);
      if (g.output = g.output.slice(0, -h.value.length), r.literalBrackets === !0) {
        g.output += I, h.value = I;
        continue;
      }
      h.value = `(${o}${I}|${h.value})`, g.output += h.value;
      continue;
    }
    if (m === "{" && r.nobrace !== !0) {
      Ne("braces");
      const _ = {
        type: "brace",
        value: m,
        output: "(",
        outputIndex: g.output.length,
        tokensIndex: g.tokens.length
      };
      N.push(_), P(_);
      continue;
    }
    if (m === "}") {
      const _ = N[N.length - 1];
      if (r.nobrace === !0 || !_) {
        P({ type: "text", value: m, output: m });
        continue;
      }
      let I = ")";
      if (_.dots === !0) {
        const H = a.slice(), re = [];
        for (let Q = H.length - 1; Q >= 0 && (a.pop(), H[Q].type !== "brace"); Q--)
          H[Q].type !== "dots" && re.unshift(H[Q].value);
        I = Yo(re, r), g.backtrack = !0;
      }
      if (_.comma !== !0 && _.dots !== !0) {
        const H = g.output.slice(0, _.outputIndex), re = g.tokens.slice(_.tokensIndex);
        _.value = _.output = "\\{", m = I = "\\}", g.output = H;
        for (const Q of re)
          g.output += Q.output || Q.value;
      }
      P({ type: "brace", value: m, output: I }), ne("braces"), N.pop();
      continue;
    }
    if (m === "|") {
      $.length > 0 && $[$.length - 1].conditions++, P({ type: "text", value: m });
      continue;
    }
    if (m === ",") {
      let _ = m;
      const I = N[N.length - 1];
      I && ve[ve.length - 1] === "braces" && (I.comma = !0, _ = "|"), P({ type: "comma", value: m, output: _ });
      continue;
    }
    if (m === "/") {
      if (h.type === "dot" && g.index === g.start + 1) {
        g.start = g.index + 1, g.consumed = "", g.output = "", a.pop(), h = s;
        continue;
      }
      P({ type: "slash", value: m, output: y });
      continue;
    }
    if (m === ".") {
      if (g.braces > 0 && h.type === "dot") {
        h.value === "." && (h.output = f);
        const _ = N[N.length - 1];
        h.type = "dots", h.output += m, h.value += m, _.dots = !0;
        continue;
      }
      if (g.braces + g.parens === 0 && h.type !== "bos" && h.type !== "slash") {
        P({ type: "text", value: m, output: f });
        continue;
      }
      P({ type: "dot", value: m, output: f });
      continue;
    }
    if (m === "?") {
      if (!(h && h.value === "(") && r.noextglob !== !0 && D() === "(" && D(2) !== "?") {
        Ie("qmark", m);
        continue;
      }
      if (h && h.type === "paren") {
        const I = D();
        let H = m;
        if (I === "<" && !ae.supportsLookbehinds())
          throw new Error("Node.js v10 or higher is required for regex lookbehinds");
        (h.value === "(" && !/[!=<:]/.test(I) || I === "<" && !/<([!=]|\w+>)/.test(pe())) && (H = `\\${m}`), P({ type: "text", value: m, output: H });
        continue;
      }
      if (r.dot !== !0 && (h.type === "slash" || h.type === "bos")) {
        P({ type: "qmark", value: m, output: V });
        continue;
      }
      P({ type: "qmark", value: m, output: C });
      continue;
    }
    if (m === "!") {
      if (r.noextglob !== !0 && D() === "(" && (D(2) !== "?" || !/[!=<:]/.test(D(3)))) {
        Ie("negate", m);
        continue;
      }
      if (r.nonegate !== !0 && g.index === 0) {
        Ce();
        continue;
      }
    }
    if (m === "+") {
      if (r.noextglob !== !0 && D() === "(" && D(2) !== "?") {
        Ie("plus", m);
        continue;
      }
      if (h && h.value === "(" || r.regex === !1) {
        P({ type: "plus", value: m, output: u });
        continue;
      }
      if (h && (h.type === "bracket" || h.type === "paren" || h.type === "brace") || g.parens > 0) {
        P({ type: "plus", value: m });
        continue;
      }
      P({ type: "plus", value: u });
      continue;
    }
    if (m === "@") {
      if (r.noextglob !== !0 && D() === "(" && D(2) !== "?") {
        P({ type: "at", extglob: !0, value: m, output: "" });
        continue;
      }
      P({ type: "text", value: m });
      continue;
    }
    if (m !== "*") {
      (m === "$" || m === "^") && (m = `\\${m}`);
      const _ = Vo.exec(pe());
      _ && (m += _[0], g.index += _[0].length), P({ type: "text", value: m });
      continue;
    }
    if (h && (h.type === "globstar" || h.star === !0)) {
      h.type = "star", h.star = !0, h.value += m, h.output = X, g.backtrack = !0, g.globstar = !0, te(m);
      continue;
    }
    let S = pe();
    if (r.noextglob !== !0 && /^\([^?]/.test(S)) {
      Ie("star", m);
      continue;
    }
    if (h.type === "star") {
      if (r.noglobstar === !0) {
        te(m);
        continue;
      }
      const _ = h.prev, I = _.prev, H = _.type === "slash" || _.type === "bos", re = I && (I.type === "star" || I.type === "globstar");
      if (r.bash === !0 && (!H || S[0] && S[0] !== "/")) {
        P({ type: "star", value: m, output: "" });
        continue;
      }
      const Q = g.braces > 0 && (_.type === "comma" || _.type === "brace"), rr = $.length && (_.type === "pipe" || _.type === "paren");
      if (!H && _.type !== "paren" && !Q && !rr) {
        P({ type: "star", value: m, output: "" });
        continue;
      }
      for (; S.slice(0, 3) === "/**"; ) {
        const gt = t[g.index + 4];
        if (gt && gt !== "/")
          break;
        S = S.slice(3), te("/**", 3);
      }
      if (_.type === "bos" && K()) {
        h.type = "globstar", h.value += m, h.output = R(r), g.output = h.output, g.globstar = !0, te(m);
        continue;
      }
      if (_.type === "slash" && _.prev.type !== "bos" && !re && K()) {
        g.output = g.output.slice(0, -(_.output + h.output).length), _.output = `(?:${_.output}`, h.type = "globstar", h.output = R(r) + (r.strictSlashes ? ")" : "|$)"), h.value += m, g.globstar = !0, g.output += _.output + h.output, te(m);
        continue;
      }
      if (_.type === "slash" && _.prev.type !== "bos" && S[0] === "/") {
        const gt = S[1] !== void 0 ? "|$" : "";
        g.output = g.output.slice(0, -(_.output + h.output).length), _.output = `(?:${_.output}`, h.type = "globstar", h.output = `${R(r)}${y}|${y}${gt})`, h.value += m, g.output += _.output + h.output, g.globstar = !0, te(m + Z()), P({ type: "slash", value: "/", output: "" });
        continue;
      }
      if (_.type === "bos" && S[0] === "/") {
        h.type = "globstar", h.value += m, h.output = `(?:^|${y}|${R(r)}${y})`, g.output = h.output, g.globstar = !0, te(m + Z()), P({ type: "slash", value: "/", output: "" });
        continue;
      }
      g.output = g.output.slice(0, -h.output.length), h.type = "globstar", h.output = R(r), h.value += m, g.output += h.output, g.globstar = !0, te(m);
      continue;
    }
    const U = { type: "star", value: m, output: X };
    if (r.bash === !0) {
      U.output = ".*?", (h.type === "bos" || h.type === "slash") && (U.output = A + U.output), P(U);
      continue;
    }
    if (h && (h.type === "bracket" || h.type === "paren") && r.regex === !0) {
      U.output = m, P(U);
      continue;
    }
    (g.index === g.start || h.type === "slash" || h.type === "dot") && (h.type === "dot" ? (g.output += T, h.output += T) : r.dot === !0 ? (g.output += F, h.output += F) : (g.output += A, h.output += A), D() !== "*" && (g.output += d, h.output += d)), P(U);
  }
  for (; g.brackets > 0; ) {
    if (r.strictBrackets === !0) throw new SyntaxError(We("closing", "]"));
    g.output = ae.escapeLast(g.output, "["), ne("brackets");
  }
  for (; g.parens > 0; ) {
    if (r.strictBrackets === !0) throw new SyntaxError(We("closing", ")"));
    g.output = ae.escapeLast(g.output, "("), ne("parens");
  }
  for (; g.braces > 0; ) {
    if (r.strictBrackets === !0) throw new SyntaxError(We("closing", "}"));
    g.output = ae.escapeLast(g.output, "{"), ne("braces");
  }
  if (r.strictSlashes !== !0 && (h.type === "star" || h.type === "bracket") && P({ type: "maybe_slash", value: "", output: `${y}?` }), g.backtrack === !0) {
    g.output = "";
    for (const S of g.tokens)
      g.output += S.output != null ? S.output : S.value, S.suffix && (g.output += S.suffix);
  }
  return g;
};
ii.fastpaths = (t, e) => {
  const r = { ...e }, i = typeof r.maxLength == "number" ? Math.min(Ot, r.maxLength) : Ot, n = t.length;
  if (n > i)
    throw new SyntaxError(`Input length: ${n}, exceeds maximum allowed length: ${i}`);
  t = Kn[t] || t;
  const s = ae.isWindows(e), {
    DOT_LITERAL: a,
    SLASH_LITERAL: o,
    ONE_CHAR: c,
    DOTS_SLASH: p,
    NO_DOT: l,
    NO_DOTS: f,
    NO_DOTS_SLASH: u,
    STAR: y,
    START_ANCHOR: d
  } = Pt.globChars(s), x = r.dot ? f : l, b = r.dot ? u : l, T = r.capture ? "" : "?:", F = { negated: !1, prefix: "" };
  let C = r.bash === !0 ? ".*?" : y;
  r.capture && (C = `(${C})`);
  const V = (A) => A.noglobstar === !0 ? C : `(${T}(?:(?!${d}${A.dot ? p : a}).)*?)`, E = (A) => {
    switch (A) {
      case "*":
        return `${x}${c}${C}`;
      case ".*":
        return `${a}${c}${C}`;
      case "*.*":
        return `${x}${C}${a}${c}${C}`;
      case "*/*":
        return `${x}${C}${o}${c}${b}${C}`;
      case "**":
        return x + V(r);
      case "**/*":
        return `(?:${x}${V(r)}${o})?${b}${c}${C}`;
      case "**/*.*":
        return `(?:${x}${V(r)}${o})?${b}${C}${a}${c}${C}`;
      case "**/.*":
        return `(?:${x}${V(r)}${o})?${a}${c}${C}`;
      default: {
        const O = /^(.*?)\.(\w+)$/.exec(A);
        if (!O) return;
        const X = E(O[1]);
        return X ? X + a + O[2] : void 0;
      }
    }
  }, B = ae.removePrefix(t, F);
  let R = E(B);
  return R && r.strictSlashes !== !0 && (R += `${o}?`), R;
};
var Zo = ii;
const Qo = L, Jo = Wo, Rr = Zo, ni = at, ec = jt, tc = (t) => t && typeof t == "object" && !Array.isArray(t), q = (t, e, r = !1) => {
  if (Array.isArray(t)) {
    const l = t.map((u) => q(u, e, r));
    return (u) => {
      for (const y of l) {
        const d = y(u);
        if (d) return d;
      }
      return !1;
    };
  }
  const i = tc(t) && t.tokens && t.input;
  if (t === "" || typeof t != "string" && !i)
    throw new TypeError("Expected pattern to be a non-empty string");
  const n = e || {}, s = ni.isWindows(e), a = i ? q.compileRe(t, e) : q.makeRe(t, e, !1, !0), o = a.state;
  delete a.state;
  let c = () => !1;
  if (n.ignore) {
    const l = { ...e, ignore: null, onMatch: null, onResult: null };
    c = q(n.ignore, l, r);
  }
  const p = (l, f = !1) => {
    const { isMatch: u, match: y, output: d } = q.test(l, a, e, { glob: t, posix: s }), x = { glob: t, state: o, regex: a, posix: s, input: l, output: d, match: y, isMatch: u };
    return typeof n.onResult == "function" && n.onResult(x), u === !1 ? (x.isMatch = !1, f ? x : !1) : c(l) ? (typeof n.onIgnore == "function" && n.onIgnore(x), x.isMatch = !1, f ? x : !1) : (typeof n.onMatch == "function" && n.onMatch(x), f ? x : !0);
  };
  return r && (p.state = o), p;
};
q.test = (t, e, r, { glob: i, posix: n } = {}) => {
  if (typeof t != "string")
    throw new TypeError("Expected input to be a string");
  if (t === "")
    return { isMatch: !1, output: "" };
  const s = r || {}, a = s.format || (n ? ni.toPosixSlashes : null);
  let o = t === i, c = o && a ? a(t) : t;
  return o === !1 && (c = a ? a(t) : t, o = c === i), (o === !1 || s.capture === !0) && (s.matchBase === !0 || s.basename === !0 ? o = q.matchBase(t, e, r, n) : o = e.exec(c)), { isMatch: !!o, match: o, output: c };
};
q.matchBase = (t, e, r, i = ni.isWindows(r)) => (e instanceof RegExp ? e : q.makeRe(e, r)).test(Qo.basename(t));
q.isMatch = (t, e, r) => q(e, r)(t);
q.parse = (t, e) => Array.isArray(t) ? t.map((r) => q.parse(r, e)) : Rr(t, { ...e, fastpaths: !1 });
q.scan = (t, e) => Jo(t, e);
q.compileRe = (t, e, r = !1, i = !1) => {
  if (r === !0)
    return t.output;
  const n = e || {}, s = n.contains ? "" : "^", a = n.contains ? "" : "$";
  let o = `${s}(?:${t.output})${a}`;
  t && t.negated === !0 && (o = `^(?!${o}).*$`);
  const c = q.toRegex(o, e);
  return i === !0 && (c.state = t), c;
};
q.makeRe = (t, e = {}, r = !1, i = !1) => {
  if (!t || typeof t != "string")
    throw new TypeError("Expected a non-empty string");
  let n = { negated: !1, fastpaths: !0 };
  return e.fastpaths !== !1 && (t[0] === "." || t[0] === "*") && (n.output = Rr.fastpaths(t, e)), n.output || (n = Rr(t, e)), q.compileRe(n, e, r, i);
};
q.toRegex = (t, e) => {
  try {
    const r = e || {};
    return new RegExp(t, r.flags || (r.nocase ? "i" : ""));
  } catch (r) {
    if (e && e.debug === !0) throw r;
    return /$^/;
  }
};
q.constants = ec;
var rc = q, ic = rc;
const Yn = Yr, Zn = Eo, Ae = ic, kr = at, tn = (t) => t === "" || t === "./", Qn = (t) => {
  const e = t.indexOf("{");
  return e > -1 && t.indexOf("}", e) > -1;
}, j = (t, e, r) => {
  e = [].concat(e), t = [].concat(t);
  let i = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), a = 0, o = (l) => {
    s.add(l.output), r && r.onResult && r.onResult(l);
  };
  for (let l = 0; l < e.length; l++) {
    let f = Ae(String(e[l]), { ...r, onResult: o }, !0), u = f.state.negated || f.state.negatedExtglob;
    u && a++;
    for (let y of t) {
      let d = f(y, !0);
      (u ? !d.isMatch : d.isMatch) && (u ? i.add(d.output) : (i.delete(d.output), n.add(d.output)));
    }
  }
  let p = (a === e.length ? [...s] : [...n]).filter((l) => !i.has(l));
  if (r && p.length === 0) {
    if (r.failglob === !0)
      throw new Error(`No matches found for "${e.join(", ")}"`);
    if (r.nonull === !0 || r.nullglob === !0)
      return r.unescape ? e.map((l) => l.replace(/\\/g, "")) : e;
  }
  return p;
};
j.match = j;
j.matcher = (t, e) => Ae(t, e);
j.isMatch = (t, e, r) => Ae(e, r)(t);
j.any = j.isMatch;
j.not = (t, e, r = {}) => {
  e = [].concat(e).map(String);
  let i = /* @__PURE__ */ new Set(), n = [], s = (o) => {
    r.onResult && r.onResult(o), n.push(o.output);
  }, a = new Set(j(t, e, { ...r, onResult: s }));
  for (let o of n)
    a.has(o) || i.add(o);
  return [...i];
};
j.contains = (t, e, r) => {
  if (typeof t != "string")
    throw new TypeError(`Expected a string: "${Yn.inspect(t)}"`);
  if (Array.isArray(e))
    return e.some((i) => j.contains(t, i, r));
  if (typeof e == "string") {
    if (tn(t) || tn(e))
      return !1;
    if (t.includes(e) || t.startsWith("./") && t.slice(2).includes(e))
      return !0;
  }
  return j.isMatch(t, e, { ...r, contains: !0 });
};
j.matchKeys = (t, e, r) => {
  if (!kr.isObject(t))
    throw new TypeError("Expected the first argument to be an object");
  let i = j(Object.keys(t), e, r), n = {};
  for (let s of i) n[s] = t[s];
  return n;
};
j.some = (t, e, r) => {
  let i = [].concat(t);
  for (let n of [].concat(e)) {
    let s = Ae(String(n), r);
    if (i.some((a) => s(a)))
      return !0;
  }
  return !1;
};
j.every = (t, e, r) => {
  let i = [].concat(t);
  for (let n of [].concat(e)) {
    let s = Ae(String(n), r);
    if (!i.every((a) => s(a)))
      return !1;
  }
  return !0;
};
j.all = (t, e, r) => {
  if (typeof t != "string")
    throw new TypeError(`Expected a string: "${Yn.inspect(t)}"`);
  return [].concat(e).every((i) => Ae(i, r)(t));
};
j.capture = (t, e, r) => {
  let i = kr.isWindows(r), s = Ae.makeRe(String(t), { ...r, capture: !0 }).exec(i ? kr.toPosixSlashes(e) : e);
  if (s)
    return s.slice(1).map((a) => a === void 0 ? "" : a);
};
j.makeRe = (...t) => Ae.makeRe(...t);
j.scan = (...t) => Ae.scan(...t);
j.parse = (t, e) => {
  let r = [];
  for (let i of [].concat(t || []))
    for (let n of Zn(String(i), e))
      r.push(Ae.parse(n, e));
  return r;
};
j.braces = (t, e) => {
  if (typeof t != "string") throw new TypeError("Expected a string");
  return e && e.nobrace === !0 || !Qn(t) ? [t] : Zn(t, e);
};
j.braceExpand = (t, e) => {
  if (typeof t != "string") throw new TypeError("Expected a string");
  return j.braces(t, { ...e, expand: !0 });
};
j.hasBraces = Qn;
var nc = j;
Object.defineProperty(w, "__esModule", { value: !0 });
w.isAbsolute = w.partitionAbsoluteAndRelative = w.removeDuplicateSlashes = w.matchAny = w.convertPatternsToRe = w.makeRe = w.getPatternParts = w.expandBraceExpansion = w.expandPatternsWithBraceExpansion = w.isAffectDepthOfReadingPattern = w.endsWithSlashGlobStar = w.hasGlobStar = w.getBaseDirectory = w.isPatternRelatedToParentDirectory = w.getPatternsOutsideCurrentDirectory = w.getPatternsInsideCurrentDirectory = w.getPositivePatterns = w.getNegativePatterns = w.isPositivePattern = w.isNegativePattern = w.convertToNegativePattern = w.convertToPositivePattern = w.isDynamicPattern = w.isStaticPattern = void 0;
const Jn = L, sc = Ba, si = nc, es = "**", ac = "\\", oc = /[*?]|^!/, cc = /\[[^[]*]/, uc = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/, lc = /[!*+?@]\([^(]*\)/, fc = /,|\.\./, pc = /(?!^)\/{2,}/g;
function ts(t, e = {}) {
  return !rs(t, e);
}
w.isStaticPattern = ts;
function rs(t, e = {}) {
  return t === "" ? !1 : !!(e.caseSensitiveMatch === !1 || t.includes(ac) || oc.test(t) || cc.test(t) || uc.test(t) || e.extglob !== !1 && lc.test(t) || e.braceExpansion !== !1 && dc(t));
}
w.isDynamicPattern = rs;
function dc(t) {
  const e = t.indexOf("{");
  if (e === -1)
    return !1;
  const r = t.indexOf("}", e + 1);
  if (r === -1)
    return !1;
  const i = t.slice(e, r);
  return fc.test(i);
}
function mc(t) {
  return Xt(t) ? t.slice(1) : t;
}
w.convertToPositivePattern = mc;
function hc(t) {
  return "!" + t;
}
w.convertToNegativePattern = hc;
function Xt(t) {
  return t.startsWith("!") && t[1] !== "(";
}
w.isNegativePattern = Xt;
function is(t) {
  return !Xt(t);
}
w.isPositivePattern = is;
function gc(t) {
  return t.filter(Xt);
}
w.getNegativePatterns = gc;
function xc(t) {
  return t.filter(is);
}
w.getPositivePatterns = xc;
function yc(t) {
  return t.filter((e) => !ai(e));
}
w.getPatternsInsideCurrentDirectory = yc;
function _c(t) {
  return t.filter(ai);
}
w.getPatternsOutsideCurrentDirectory = _c;
function ai(t) {
  return t.startsWith("..") || t.startsWith("./..");
}
w.isPatternRelatedToParentDirectory = ai;
function vc(t) {
  return sc(t, { flipBackslashes: !1 });
}
w.getBaseDirectory = vc;
function Sc(t) {
  return t.includes(es);
}
w.hasGlobStar = Sc;
function ns(t) {
  return t.endsWith("/" + es);
}
w.endsWithSlashGlobStar = ns;
function bc(t) {
  const e = Jn.basename(t);
  return ns(t) || ts(e);
}
w.isAffectDepthOfReadingPattern = bc;
function Tc(t) {
  return t.reduce((e, r) => e.concat(ss(r)), []);
}
w.expandPatternsWithBraceExpansion = Tc;
function ss(t) {
  const e = si.braces(t, { expand: !0, nodupes: !0, keepEscaping: !0 });
  return e.sort((r, i) => r.length - i.length), e.filter((r) => r !== "");
}
w.expandBraceExpansion = ss;
function wc(t, e) {
  let { parts: r } = si.scan(t, Object.assign(Object.assign({}, e), { parts: !0 }));
  return r.length === 0 && (r = [t]), r[0].startsWith("/") && (r[0] = r[0].slice(1), r.unshift("")), r;
}
w.getPatternParts = wc;
function as(t, e) {
  return si.makeRe(t, e);
}
w.makeRe = as;
function Ac(t, e) {
  return t.map((r) => as(r, e));
}
w.convertPatternsToRe = Ac;
function Ec(t, e) {
  return e.some((r) => r.test(t));
}
w.matchAny = Ec;
function Rc(t) {
  return t.replace(pc, "/");
}
w.removeDuplicateSlashes = Rc;
function kc(t) {
  const e = [], r = [];
  for (const i of t)
    os(i) ? e.push(i) : r.push(i);
  return [e, r];
}
w.partitionAbsoluteAndRelative = kc;
function os(t) {
  return Jn.isAbsolute(t);
}
w.isAbsolute = os;
var Wt = {};
const Cc = Nt, cs = Cc.PassThrough, Ic = Array.prototype.slice;
var Pc = Oc;
function Oc() {
  const t = [], e = Ic.call(arguments);
  let r = !1, i = e[e.length - 1];
  i && !Array.isArray(i) && i.pipe == null ? e.pop() : i = {};
  const n = i.end !== !1, s = i.pipeError === !0;
  i.objectMode == null && (i.objectMode = !0), i.highWaterMark == null && (i.highWaterMark = 64 * 1024);
  const a = cs(i);
  function o() {
    for (let l = 0, f = arguments.length; l < f; l++)
      t.push(us(arguments[l], i));
    return c(), this;
  }
  function c() {
    if (r)
      return;
    r = !0;
    let l = t.shift();
    if (!l) {
      process.nextTick(p);
      return;
    }
    Array.isArray(l) || (l = [l]);
    let f = l.length + 1;
    function u() {
      --f > 0 || (r = !1, c());
    }
    function y(d) {
      function x() {
        d.removeListener("merge2UnpipeEnd", x), d.removeListener("end", x), s && d.removeListener("error", b), u();
      }
      function b(T) {
        a.emit("error", T);
      }
      if (d._readableState.endEmitted)
        return u();
      d.on("merge2UnpipeEnd", x), d.on("end", x), s && d.on("error", b), d.pipe(a, { end: !1 }), d.resume();
    }
    for (let d = 0; d < l.length; d++)
      y(l[d]);
    u();
  }
  function p() {
    r = !1, a.emit("queueDrain"), n && a.end();
  }
  return a.setMaxListeners(0), a.add = o, a.on("unpipe", function(l) {
    l.emit("merge2UnpipeEnd");
  }), e.length && o.apply(null, e), a;
}
function us(t, e) {
  if (Array.isArray(t))
    for (let r = 0, i = t.length; r < i; r++)
      t[r] = us(t[r], e);
  else {
    if (!t._readableState && t.pipe && (t = t.pipe(cs(e))), !t._readableState || !t.pause || !t.pipe)
      throw new Error("Only readable stream can be merged.");
    t.pause();
  }
  return t;
}
Object.defineProperty(Wt, "__esModule", { value: !0 });
Wt.merge = void 0;
const Mc = Pc;
function Dc(t) {
  const e = Mc(t);
  return t.forEach((r) => {
    r.once("error", (i) => e.emit("error", i));
  }), e.once("close", () => rn(t)), e.once("end", () => rn(t)), e;
}
Wt.merge = Dc;
function rn(t) {
  t.forEach((e) => e.emit("close"));
}
var Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
Qe.isEmpty = Qe.isString = void 0;
function Fc(t) {
  return typeof t == "string";
}
Qe.isString = Fc;
function Lc(t) {
  return t === "";
}
Qe.isEmpty = Lc;
Object.defineProperty(W, "__esModule", { value: !0 });
W.string = W.stream = W.pattern = W.path = W.fs = W.errno = W.array = void 0;
const Bc = Ze;
W.array = Bc;
const $c = Ut;
W.errno = $c;
const Nc = zt;
W.fs = Nc;
const Uc = Y;
W.path = Uc;
const zc = w;
W.pattern = zc;
const Hc = Wt;
W.stream = Hc;
const Gc = Qe;
W.string = Gc;
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.convertPatternGroupToTask = ee.convertPatternGroupsToTasks = ee.groupPatternsByBaseDirectory = ee.getNegativePatternsAsPositive = ee.getPositivePatterns = ee.convertPatternsToTasks = ee.generate = void 0;
const _e = W;
function jc(t, e) {
  const r = nn(t, e), i = nn(e.ignore, e), n = ls(r), s = fs(r, i), a = n.filter((l) => _e.pattern.isStaticPattern(l, e)), o = n.filter((l) => _e.pattern.isDynamicPattern(l, e)), c = Cr(
    a,
    s,
    /* dynamic */
    !1
  ), p = Cr(
    o,
    s,
    /* dynamic */
    !0
  );
  return c.concat(p);
}
ee.generate = jc;
function nn(t, e) {
  let r = t;
  return e.braceExpansion && (r = _e.pattern.expandPatternsWithBraceExpansion(r)), e.baseNameMatch && (r = r.map((i) => i.includes("/") ? i : `**/${i}`)), r.map((i) => _e.pattern.removeDuplicateSlashes(i));
}
function Cr(t, e, r) {
  const i = [], n = _e.pattern.getPatternsOutsideCurrentDirectory(t), s = _e.pattern.getPatternsInsideCurrentDirectory(t), a = Ir(n), o = Ir(s);
  return i.push(...Pr(a, e, r)), "." in o ? i.push(oi(".", s, e, r)) : i.push(...Pr(o, e, r)), i;
}
ee.convertPatternsToTasks = Cr;
function ls(t) {
  return _e.pattern.getPositivePatterns(t);
}
ee.getPositivePatterns = ls;
function fs(t, e) {
  return _e.pattern.getNegativePatterns(t).concat(e).map(_e.pattern.convertToPositivePattern);
}
ee.getNegativePatternsAsPositive = fs;
function Ir(t) {
  const e = {};
  return t.reduce((r, i) => {
    const n = _e.pattern.getBaseDirectory(i);
    return n in r ? r[n].push(i) : r[n] = [i], r;
  }, e);
}
ee.groupPatternsByBaseDirectory = Ir;
function Pr(t, e, r) {
  return Object.keys(t).map((i) => oi(i, t[i], e, r));
}
ee.convertPatternGroupsToTasks = Pr;
function oi(t, e, r, i) {
  return {
    dynamic: i,
    positive: e,
    negative: r,
    base: t,
    patterns: [].concat(e, r.map(_e.pattern.convertToNegativePattern))
  };
}
ee.convertPatternGroupToTask = oi;
var ci = {}, ui = {}, he = {}, li = {}, qt = {}, we = {}, Le = {}, fe = {}, Vt = {};
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.read = void 0;
function Xc(t, e, r) {
  e.fs.lstat(t, (i, n) => {
    if (i !== null) {
      sn(r, i);
      return;
    }
    if (!n.isSymbolicLink() || !e.followSymbolicLink) {
      mr(r, n);
      return;
    }
    e.fs.stat(t, (s, a) => {
      if (s !== null) {
        if (e.throwErrorOnBrokenSymbolicLink) {
          sn(r, s);
          return;
        }
        mr(r, n);
        return;
      }
      e.markSymbolicLink && (a.isSymbolicLink = () => !0), mr(r, a);
    });
  });
}
Vt.read = Xc;
function sn(t, e) {
  t(e);
}
function mr(t, e) {
  t(null, e);
}
var Kt = {};
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.read = void 0;
function Wc(t, e) {
  const r = e.fs.lstatSync(t);
  if (!r.isSymbolicLink() || !e.followSymbolicLink)
    return r;
  try {
    const i = e.fs.statSync(t);
    return e.markSymbolicLink && (i.isSymbolicLink = () => !0), i;
  } catch (i) {
    if (!e.throwErrorOnBrokenSymbolicLink)
      return r;
    throw i;
  }
}
Kt.read = Wc;
var fi = {}, ps = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.createFileSystemAdapter = t.FILE_SYSTEM_ADAPTER = void 0;
  const e = Zr;
  t.FILE_SYSTEM_ADAPTER = {
    lstat: e.lstat,
    stat: e.stat,
    lstatSync: e.lstatSync,
    statSync: e.statSync
  };
  function r(i) {
    return i === void 0 ? t.FILE_SYSTEM_ADAPTER : Object.assign(Object.assign({}, t.FILE_SYSTEM_ADAPTER), i);
  }
  t.createFileSystemAdapter = r;
})(ps);
Object.defineProperty(fi, "__esModule", { value: !0 });
const qc = ps;
let Vc = class {
  constructor(e = {}) {
    this._options = e, this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, !0), this.fs = qc.createFileSystemAdapter(this._options.fs), this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, !1), this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, !0);
  }
  _getValue(e, r) {
    return e ?? r;
  }
};
fi.default = Vc;
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.statSync = fe.stat = fe.Settings = void 0;
const an = Vt, Kc = Kt, Or = fi;
fe.Settings = Or.default;
function Yc(t, e, r) {
  if (typeof e == "function") {
    an.read(t, Mr(), e);
    return;
  }
  an.read(t, Mr(e), r);
}
fe.stat = Yc;
function Zc(t, e) {
  const r = Mr(e);
  return Kc.read(t, r);
}
fe.statSync = Zc;
function Mr(t = {}) {
  return t instanceof Or.default ? t : new Or.default(t);
}
/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
let on;
var Qc = typeof queueMicrotask == "function" ? queueMicrotask.bind(typeof window < "u" ? window : ua) : (t) => (on || (on = Promise.resolve())).then(t).catch((e) => setTimeout(() => {
  throw e;
}, 0));
/*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Jc = tu;
const eu = Qc;
function tu(t, e) {
  let r, i, n, s = !0;
  Array.isArray(t) ? (r = [], i = t.length) : (n = Object.keys(t), r = {}, i = n.length);
  function a(c) {
    function p() {
      e && e(c, r), e = null;
    }
    s ? eu(p) : p();
  }
  function o(c, p, l) {
    r[c] = l, (--i === 0 || p) && a(p);
  }
  i ? n ? n.forEach(function(c) {
    t[c](function(p, l) {
      o(c, p, l);
    });
  }) : t.forEach(function(c, p) {
    c(function(l, f) {
      o(p, l, f);
    });
  }) : a(null), s = !1;
}
var ot = {};
Object.defineProperty(ot, "__esModule", { value: !0 });
ot.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
const Mt = process.versions.node.split(".");
if (Mt[0] === void 0 || Mt[1] === void 0)
  throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);
const ds = Number.parseInt(Mt[0], 10), ru = Number.parseInt(Mt[1], 10), ms = 10, iu = 10, nu = ds > ms, su = ds === ms && ru >= iu;
ot.IS_SUPPORT_READDIR_WITH_FILE_TYPES = nu || su;
var ct = {}, Yt = {};
Object.defineProperty(Yt, "__esModule", { value: !0 });
Yt.createDirentFromStats = void 0;
class au {
  constructor(e, r) {
    this.name = e, this.isBlockDevice = r.isBlockDevice.bind(r), this.isCharacterDevice = r.isCharacterDevice.bind(r), this.isDirectory = r.isDirectory.bind(r), this.isFIFO = r.isFIFO.bind(r), this.isFile = r.isFile.bind(r), this.isSocket = r.isSocket.bind(r), this.isSymbolicLink = r.isSymbolicLink.bind(r);
  }
}
function ou(t, e) {
  return new au(t, e);
}
Yt.createDirentFromStats = ou;
Object.defineProperty(ct, "__esModule", { value: !0 });
ct.fs = void 0;
const cu = Yt;
ct.fs = cu;
var ut = {};
Object.defineProperty(ut, "__esModule", { value: !0 });
ut.joinPathSegments = void 0;
function uu(t, e, r) {
  return t.endsWith(r) ? t + e : t + r + e;
}
ut.joinPathSegments = uu;
Object.defineProperty(Le, "__esModule", { value: !0 });
Le.readdir = Le.readdirWithFileTypes = Le.read = void 0;
const lu = fe, hs = Jc, fu = ot, gs = ct, xs = ut;
function pu(t, e, r) {
  if (!e.stats && fu.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
    ys(t, e, r);
    return;
  }
  _s(t, e, r);
}
Le.read = pu;
function ys(t, e, r) {
  e.fs.readdir(t, { withFileTypes: !0 }, (i, n) => {
    if (i !== null) {
      Dt(r, i);
      return;
    }
    const s = n.map((o) => ({
      dirent: o,
      name: o.name,
      path: xs.joinPathSegments(t, o.name, e.pathSegmentSeparator)
    }));
    if (!e.followSymbolicLinks) {
      Dr(r, s);
      return;
    }
    const a = s.map((o) => du(o, e));
    hs(a, (o, c) => {
      if (o !== null) {
        Dt(r, o);
        return;
      }
      Dr(r, c);
    });
  });
}
Le.readdirWithFileTypes = ys;
function du(t, e) {
  return (r) => {
    if (!t.dirent.isSymbolicLink()) {
      r(null, t);
      return;
    }
    e.fs.stat(t.path, (i, n) => {
      if (i !== null) {
        if (e.throwErrorOnBrokenSymbolicLink) {
          r(i);
          return;
        }
        r(null, t);
        return;
      }
      t.dirent = gs.fs.createDirentFromStats(t.name, n), r(null, t);
    });
  };
}
function _s(t, e, r) {
  e.fs.readdir(t, (i, n) => {
    if (i !== null) {
      Dt(r, i);
      return;
    }
    const s = n.map((a) => {
      const o = xs.joinPathSegments(t, a, e.pathSegmentSeparator);
      return (c) => {
        lu.stat(o, e.fsStatSettings, (p, l) => {
          if (p !== null) {
            c(p);
            return;
          }
          const f = {
            name: a,
            path: o,
            dirent: gs.fs.createDirentFromStats(a, l)
          };
          e.stats && (f.stats = l), c(null, f);
        });
      };
    });
    hs(s, (a, o) => {
      if (a !== null) {
        Dt(r, a);
        return;
      }
      Dr(r, o);
    });
  });
}
Le.readdir = _s;
function Dt(t, e) {
  t(e);
}
function Dr(t, e) {
  t(null, e);
}
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.readdir = Be.readdirWithFileTypes = Be.read = void 0;
const mu = fe, hu = ot, vs = ct, Ss = ut;
function gu(t, e) {
  return !e.stats && hu.IS_SUPPORT_READDIR_WITH_FILE_TYPES ? bs(t, e) : Ts(t, e);
}
Be.read = gu;
function bs(t, e) {
  return e.fs.readdirSync(t, { withFileTypes: !0 }).map((i) => {
    const n = {
      dirent: i,
      name: i.name,
      path: Ss.joinPathSegments(t, i.name, e.pathSegmentSeparator)
    };
    if (n.dirent.isSymbolicLink() && e.followSymbolicLinks)
      try {
        const s = e.fs.statSync(n.path);
        n.dirent = vs.fs.createDirentFromStats(n.name, s);
      } catch (s) {
        if (e.throwErrorOnBrokenSymbolicLink)
          throw s;
      }
    return n;
  });
}
Be.readdirWithFileTypes = bs;
function Ts(t, e) {
  return e.fs.readdirSync(t).map((i) => {
    const n = Ss.joinPathSegments(t, i, e.pathSegmentSeparator), s = mu.statSync(n, e.fsStatSettings), a = {
      name: i,
      path: n,
      dirent: vs.fs.createDirentFromStats(i, s)
    };
    return e.stats && (a.stats = s), a;
  });
}
Be.readdir = Ts;
var pi = {}, ws = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.createFileSystemAdapter = t.FILE_SYSTEM_ADAPTER = void 0;
  const e = Zr;
  t.FILE_SYSTEM_ADAPTER = {
    lstat: e.lstat,
    stat: e.stat,
    lstatSync: e.lstatSync,
    statSync: e.statSync,
    readdir: e.readdir,
    readdirSync: e.readdirSync
  };
  function r(i) {
    return i === void 0 ? t.FILE_SYSTEM_ADAPTER : Object.assign(Object.assign({}, t.FILE_SYSTEM_ADAPTER), i);
  }
  t.createFileSystemAdapter = r;
})(ws);
Object.defineProperty(pi, "__esModule", { value: !0 });
const xu = L, yu = fe, _u = ws;
let vu = class {
  constructor(e = {}) {
    this._options = e, this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, !1), this.fs = _u.createFileSystemAdapter(this._options.fs), this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, xu.sep), this.stats = this._getValue(this._options.stats, !1), this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, !0), this.fsStatSettings = new yu.Settings({
      followSymbolicLink: this.followSymbolicLinks,
      fs: this.fs,
      throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
    });
  }
  _getValue(e, r) {
    return e ?? r;
  }
};
pi.default = vu;
Object.defineProperty(we, "__esModule", { value: !0 });
we.Settings = we.scandirSync = we.scandir = void 0;
const cn = Le, Su = Be, Fr = pi;
we.Settings = Fr.default;
function bu(t, e, r) {
  if (typeof e == "function") {
    cn.read(t, Lr(), e);
    return;
  }
  cn.read(t, Lr(e), r);
}
we.scandir = bu;
function Tu(t, e) {
  const r = Lr(e);
  return Su.read(t, r);
}
we.scandirSync = Tu;
function Lr(t = {}) {
  return t instanceof Fr.default ? t : new Fr.default(t);
}
var di = { exports: {} };
function wu(t) {
  var e = new t(), r = e;
  function i() {
    var s = e;
    return s.next ? e = s.next : (e = new t(), r = e), s.next = null, s;
  }
  function n(s) {
    r.next = s, r = s;
  }
  return {
    get: i,
    release: n
  };
}
var Au = wu, Eu = Au;
function As(t, e, r) {
  if (typeof t == "function" && (r = e, e = t, t = null), !(r >= 1))
    throw new Error("fastqueue concurrency must be equal to or greater than 1");
  var i = Eu(Ru), n = null, s = null, a = 0, o = null, c = {
    push: x,
    drain: me,
    saturated: me,
    pause: l,
    paused: !1,
    get concurrency() {
      return r;
    },
    set concurrency(E) {
      if (!(E >= 1))
        throw new Error("fastqueue concurrency must be equal to or greater than 1");
      if (r = E, !c.paused)
        for (; n && a < r; )
          a++, T();
    },
    running: p,
    resume: y,
    idle: d,
    length: f,
    getQueue: u,
    unshift: b,
    empty: me,
    kill: F,
    killAndDrain: C,
    error: V
  };
  return c;
  function p() {
    return a;
  }
  function l() {
    c.paused = !0;
  }
  function f() {
    for (var E = n, B = 0; E; )
      E = E.next, B++;
    return B;
  }
  function u() {
    for (var E = n, B = []; E; )
      B.push(E.value), E = E.next;
    return B;
  }
  function y() {
    if (c.paused) {
      if (c.paused = !1, n === null) {
        a++, T();
        return;
      }
      for (; n && a < r; )
        a++, T();
    }
  }
  function d() {
    return a === 0 && c.length() === 0;
  }
  function x(E, B) {
    var R = i.get();
    R.context = t, R.release = T, R.value = E, R.callback = B || me, R.errorHandler = o, a >= r || c.paused ? s ? (s.next = R, s = R) : (n = R, s = R, c.saturated()) : (a++, e.call(t, R.value, R.worked));
  }
  function b(E, B) {
    var R = i.get();
    R.context = t, R.release = T, R.value = E, R.callback = B || me, R.errorHandler = o, a >= r || c.paused ? n ? (R.next = n, n = R) : (n = R, s = R, c.saturated()) : (a++, e.call(t, R.value, R.worked));
  }
  function T(E) {
    E && i.release(E);
    var B = n;
    B && a <= r ? c.paused ? a-- : (s === n && (s = null), n = B.next, B.next = null, e.call(t, B.value, B.worked), s === null && c.empty()) : --a === 0 && c.drain();
  }
  function F() {
    n = null, s = null, c.drain = me;
  }
  function C() {
    n = null, s = null, c.drain(), c.drain = me;
  }
  function V(E) {
    o = E;
  }
}
function me() {
}
function Ru() {
  this.value = null, this.callback = me, this.next = null, this.release = me, this.context = null, this.errorHandler = null;
  var t = this;
  this.worked = function(r, i) {
    var n = t.callback, s = t.errorHandler, a = t.value;
    t.value = null, t.callback = me, t.errorHandler && s(r, a), n.call(t.context, r, i), t.release(t);
  };
}
function ku(t, e, r) {
  typeof t == "function" && (r = e, e = t, t = null);
  function i(l, f) {
    e.call(this, l).then(function(u) {
      f(null, u);
    }, f);
  }
  var n = As(t, i, r), s = n.push, a = n.unshift;
  return n.push = o, n.unshift = c, n.drained = p, n;
  function o(l) {
    var f = new Promise(function(u, y) {
      s(l, function(d, x) {
        if (d) {
          y(d);
          return;
        }
        u(x);
      });
    });
    return f.catch(me), f;
  }
  function c(l) {
    var f = new Promise(function(u, y) {
      a(l, function(d, x) {
        if (d) {
          y(d);
          return;
        }
        u(x);
      });
    });
    return f.catch(me), f;
  }
  function p() {
    var l = new Promise(function(f) {
      process.nextTick(function() {
        if (n.idle())
          f();
        else {
          var u = n.drain;
          n.drain = function() {
            typeof u == "function" && u(), f(), n.drain = u;
          };
        }
      });
    });
    return l;
  }
}
di.exports = As;
di.exports.promise = ku;
var Cu = di.exports, ge = {};
Object.defineProperty(ge, "__esModule", { value: !0 });
ge.joinPathSegments = ge.replacePathSegmentSeparator = ge.isAppliedFilter = ge.isFatalError = void 0;
function Iu(t, e) {
  return t.errorFilter === null ? !0 : !t.errorFilter(e);
}
ge.isFatalError = Iu;
function Pu(t, e) {
  return t === null || t(e);
}
ge.isAppliedFilter = Pu;
function Ou(t, e) {
  return t.split(/[/\\]/).join(e);
}
ge.replacePathSegmentSeparator = Ou;
function Mu(t, e, r) {
  return t === "" ? e : t.endsWith(r) ? t + e : t + r + e;
}
ge.joinPathSegments = Mu;
var Zt = {};
Object.defineProperty(Zt, "__esModule", { value: !0 });
const Du = ge;
let Fu = class {
  constructor(e, r) {
    this._root = e, this._settings = r, this._root = Du.replacePathSegmentSeparator(e, r.pathSegmentSeparator);
  }
};
Zt.default = Fu;
Object.defineProperty(qt, "__esModule", { value: !0 });
const Lu = aa, Bu = we, $u = Cu, xt = ge, Nu = Zt;
class Uu extends Nu.default {
  constructor(e, r) {
    super(e, r), this._settings = r, this._scandir = Bu.scandir, this._emitter = new Lu.EventEmitter(), this._queue = $u(this._worker.bind(this), this._settings.concurrency), this._isFatalError = !1, this._isDestroyed = !1, this._queue.drain = () => {
      this._isFatalError || this._emitter.emit("end");
    };
  }
  read() {
    return this._isFatalError = !1, this._isDestroyed = !1, setImmediate(() => {
      this._pushToQueue(this._root, this._settings.basePath);
    }), this._emitter;
  }
  get isDestroyed() {
    return this._isDestroyed;
  }
  destroy() {
    if (this._isDestroyed)
      throw new Error("The reader is already destroyed");
    this._isDestroyed = !0, this._queue.killAndDrain();
  }
  onEntry(e) {
    this._emitter.on("entry", e);
  }
  onError(e) {
    this._emitter.once("error", e);
  }
  onEnd(e) {
    this._emitter.once("end", e);
  }
  _pushToQueue(e, r) {
    const i = { directory: e, base: r };
    this._queue.push(i, (n) => {
      n !== null && this._handleError(n);
    });
  }
  _worker(e, r) {
    this._scandir(e.directory, this._settings.fsScandirSettings, (i, n) => {
      if (i !== null) {
        r(i, void 0);
        return;
      }
      for (const s of n)
        this._handleEntry(s, e.base);
      r(null, void 0);
    });
  }
  _handleError(e) {
    this._isDestroyed || !xt.isFatalError(this._settings, e) || (this._isFatalError = !0, this._isDestroyed = !0, this._emitter.emit("error", e));
  }
  _handleEntry(e, r) {
    if (this._isDestroyed || this._isFatalError)
      return;
    const i = e.path;
    r !== void 0 && (e.path = xt.joinPathSegments(r, e.name, this._settings.pathSegmentSeparator)), xt.isAppliedFilter(this._settings.entryFilter, e) && this._emitEntry(e), e.dirent.isDirectory() && xt.isAppliedFilter(this._settings.deepFilter, e) && this._pushToQueue(i, r === void 0 ? void 0 : e.path);
  }
  _emitEntry(e) {
    this._emitter.emit("entry", e);
  }
}
qt.default = Uu;
Object.defineProperty(li, "__esModule", { value: !0 });
const zu = qt;
class Hu {
  constructor(e, r) {
    this._root = e, this._settings = r, this._reader = new zu.default(this._root, this._settings), this._storage = [];
  }
  read(e) {
    this._reader.onError((r) => {
      Gu(e, r);
    }), this._reader.onEntry((r) => {
      this._storage.push(r);
    }), this._reader.onEnd(() => {
      ju(e, this._storage);
    }), this._reader.read();
  }
}
li.default = Hu;
function Gu(t, e) {
  t(e);
}
function ju(t, e) {
  t(null, e);
}
var mi = {};
Object.defineProperty(mi, "__esModule", { value: !0 });
const Xu = Nt, Wu = qt;
class qu {
  constructor(e, r) {
    this._root = e, this._settings = r, this._reader = new Wu.default(this._root, this._settings), this._stream = new Xu.Readable({
      objectMode: !0,
      read: () => {
      },
      destroy: () => {
        this._reader.isDestroyed || this._reader.destroy();
      }
    });
  }
  read() {
    return this._reader.onError((e) => {
      this._stream.emit("error", e);
    }), this._reader.onEntry((e) => {
      this._stream.push(e);
    }), this._reader.onEnd(() => {
      this._stream.push(null);
    }), this._reader.read(), this._stream;
  }
}
mi.default = qu;
var hi = {}, gi = {};
Object.defineProperty(gi, "__esModule", { value: !0 });
const Vu = we, yt = ge, Ku = Zt;
class Yu extends Ku.default {
  constructor() {
    super(...arguments), this._scandir = Vu.scandirSync, this._storage = [], this._queue = /* @__PURE__ */ new Set();
  }
  read() {
    return this._pushToQueue(this._root, this._settings.basePath), this._handleQueue(), this._storage;
  }
  _pushToQueue(e, r) {
    this._queue.add({ directory: e, base: r });
  }
  _handleQueue() {
    for (const e of this._queue.values())
      this._handleDirectory(e.directory, e.base);
  }
  _handleDirectory(e, r) {
    try {
      const i = this._scandir(e, this._settings.fsScandirSettings);
      for (const n of i)
        this._handleEntry(n, r);
    } catch (i) {
      this._handleError(i);
    }
  }
  _handleError(e) {
    if (yt.isFatalError(this._settings, e))
      throw e;
  }
  _handleEntry(e, r) {
    const i = e.path;
    r !== void 0 && (e.path = yt.joinPathSegments(r, e.name, this._settings.pathSegmentSeparator)), yt.isAppliedFilter(this._settings.entryFilter, e) && this._pushToStorage(e), e.dirent.isDirectory() && yt.isAppliedFilter(this._settings.deepFilter, e) && this._pushToQueue(i, r === void 0 ? void 0 : e.path);
  }
  _pushToStorage(e) {
    this._storage.push(e);
  }
}
gi.default = Yu;
Object.defineProperty(hi, "__esModule", { value: !0 });
const Zu = gi;
class Qu {
  constructor(e, r) {
    this._root = e, this._settings = r, this._reader = new Zu.default(this._root, this._settings);
  }
  read() {
    return this._reader.read();
  }
}
hi.default = Qu;
var xi = {};
Object.defineProperty(xi, "__esModule", { value: !0 });
const Ju = L, el = we;
class tl {
  constructor(e = {}) {
    this._options = e, this.basePath = this._getValue(this._options.basePath, void 0), this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY), this.deepFilter = this._getValue(this._options.deepFilter, null), this.entryFilter = this._getValue(this._options.entryFilter, null), this.errorFilter = this._getValue(this._options.errorFilter, null), this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, Ju.sep), this.fsScandirSettings = new el.Settings({
      followSymbolicLinks: this._options.followSymbolicLinks,
      fs: this._options.fs,
      pathSegmentSeparator: this._options.pathSegmentSeparator,
      stats: this._options.stats,
      throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
    });
  }
  _getValue(e, r) {
    return e ?? r;
  }
}
xi.default = tl;
Object.defineProperty(he, "__esModule", { value: !0 });
he.Settings = he.walkStream = he.walkSync = he.walk = void 0;
const un = li, rl = mi, il = hi, Br = xi;
he.Settings = Br.default;
function nl(t, e, r) {
  if (typeof e == "function") {
    new un.default(t, Ft()).read(e);
    return;
  }
  new un.default(t, Ft(e)).read(r);
}
he.walk = nl;
function sl(t, e) {
  const r = Ft(e);
  return new il.default(t, r).read();
}
he.walkSync = sl;
function al(t, e) {
  const r = Ft(e);
  return new rl.default(t, r).read();
}
he.walkStream = al;
function Ft(t = {}) {
  return t instanceof Br.default ? t : new Br.default(t);
}
var lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
const ol = L, cl = fe, ln = W;
class ul {
  constructor(e) {
    this._settings = e, this._fsStatSettings = new cl.Settings({
      followSymbolicLink: this._settings.followSymbolicLinks,
      fs: this._settings.fs,
      throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
    });
  }
  _getFullEntryPath(e) {
    return ol.resolve(this._settings.cwd, e);
  }
  _makeEntry(e, r) {
    const i = {
      name: r,
      path: r,
      dirent: ln.fs.createDirentFromStats(r, e)
    };
    return this._settings.stats && (i.stats = e), i;
  }
  _isFatalError(e) {
    return !ln.errno.isEnoentCodeError(e) && !this._settings.suppressErrors;
  }
}
lt.default = ul;
var Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
const ll = Nt, fl = fe, pl = he, dl = lt;
class ml extends dl.default {
  constructor() {
    super(...arguments), this._walkStream = pl.walkStream, this._stat = fl.stat;
  }
  dynamic(e, r) {
    return this._walkStream(e, r);
  }
  static(e, r) {
    const i = e.map(this._getFullEntryPath, this), n = new ll.PassThrough({ objectMode: !0 });
    n._write = (s, a, o) => this._getEntry(i[s], e[s], r).then((c) => {
      c !== null && r.entryFilter(c) && n.push(c), s === i.length - 1 && n.end(), o();
    }).catch(o);
    for (let s = 0; s < i.length; s++)
      n.write(s);
    return n;
  }
  _getEntry(e, r, i) {
    return this._getStat(e).then((n) => this._makeEntry(n, r)).catch((n) => {
      if (i.errorFilter(n))
        return null;
      throw n;
    });
  }
  _getStat(e) {
    return new Promise((r, i) => {
      this._stat(e, this._fsStatSettings, (n, s) => n === null ? r(s) : i(n));
    });
  }
}
Qt.default = ml;
Object.defineProperty(ui, "__esModule", { value: !0 });
const hl = he, gl = lt, xl = Qt;
class yl extends gl.default {
  constructor() {
    super(...arguments), this._walkAsync = hl.walk, this._readerStream = new xl.default(this._settings);
  }
  dynamic(e, r) {
    return new Promise((i, n) => {
      this._walkAsync(e, r, (s, a) => {
        s === null ? i(a) : n(s);
      });
    });
  }
  async static(e, r) {
    const i = [], n = this._readerStream.static(e, r);
    return new Promise((s, a) => {
      n.once("error", a), n.on("data", (o) => i.push(o)), n.once("end", () => s(i));
    });
  }
}
ui.default = yl;
var ft = {}, yi = {}, _i = {}, vi = {};
Object.defineProperty(vi, "__esModule", { value: !0 });
const et = W;
class _l {
  constructor(e, r, i) {
    this._patterns = e, this._settings = r, this._micromatchOptions = i, this._storage = [], this._fillStorage();
  }
  _fillStorage() {
    for (const e of this._patterns) {
      const r = this._getPatternSegments(e), i = this._splitSegmentsIntoSections(r);
      this._storage.push({
        complete: i.length <= 1,
        pattern: e,
        segments: r,
        sections: i
      });
    }
  }
  _getPatternSegments(e) {
    return et.pattern.getPatternParts(e, this._micromatchOptions).map((i) => et.pattern.isDynamicPattern(i, this._settings) ? {
      dynamic: !0,
      pattern: i,
      patternRe: et.pattern.makeRe(i, this._micromatchOptions)
    } : {
      dynamic: !1,
      pattern: i
    });
  }
  _splitSegmentsIntoSections(e) {
    return et.array.splitWhen(e, (r) => r.dynamic && et.pattern.hasGlobStar(r.pattern));
  }
}
vi.default = _l;
Object.defineProperty(_i, "__esModule", { value: !0 });
const vl = vi;
class Sl extends vl.default {
  match(e) {
    const r = e.split("/"), i = r.length, n = this._storage.filter((s) => !s.complete || s.segments.length > i);
    for (const s of n) {
      const a = s.sections[0];
      if (!s.complete && i > a.length || r.every((c, p) => {
        const l = s.segments[p];
        return !!(l.dynamic && l.patternRe.test(c) || !l.dynamic && l.pattern === c);
      }))
        return !0;
    }
    return !1;
  }
}
_i.default = Sl;
Object.defineProperty(yi, "__esModule", { value: !0 });
const _t = W, bl = _i;
class Tl {
  constructor(e, r) {
    this._settings = e, this._micromatchOptions = r;
  }
  getFilter(e, r, i) {
    const n = this._getMatcher(r), s = this._getNegativePatternsRe(i);
    return (a) => this._filter(e, a, n, s);
  }
  _getMatcher(e) {
    return new bl.default(e, this._settings, this._micromatchOptions);
  }
  _getNegativePatternsRe(e) {
    const r = e.filter(_t.pattern.isAffectDepthOfReadingPattern);
    return _t.pattern.convertPatternsToRe(r, this._micromatchOptions);
  }
  _filter(e, r, i, n) {
    if (this._isSkippedByDeep(e, r.path) || this._isSkippedSymbolicLink(r))
      return !1;
    const s = _t.path.removeLeadingDotSegment(r.path);
    return this._isSkippedByPositivePatterns(s, i) ? !1 : this._isSkippedByNegativePatterns(s, n);
  }
  _isSkippedByDeep(e, r) {
    return this._settings.deep === 1 / 0 ? !1 : this._getEntryLevel(e, r) >= this._settings.deep;
  }
  _getEntryLevel(e, r) {
    const i = r.split("/").length;
    if (e === "")
      return i;
    const n = e.split("/").length;
    return i - n;
  }
  _isSkippedSymbolicLink(e) {
    return !this._settings.followSymbolicLinks && e.dirent.isSymbolicLink();
  }
  _isSkippedByPositivePatterns(e, r) {
    return !this._settings.baseNameMatch && !r.match(e);
  }
  _isSkippedByNegativePatterns(e, r) {
    return !_t.pattern.matchAny(e, r);
  }
}
yi.default = Tl;
var Si = {};
Object.defineProperty(Si, "__esModule", { value: !0 });
const Pe = W;
class wl {
  constructor(e, r) {
    this._settings = e, this._micromatchOptions = r, this.index = /* @__PURE__ */ new Map();
  }
  getFilter(e, r) {
    const [i, n] = Pe.pattern.partitionAbsoluteAndRelative(r), s = {
      positive: {
        all: Pe.pattern.convertPatternsToRe(e, this._micromatchOptions)
      },
      negative: {
        absolute: Pe.pattern.convertPatternsToRe(i, Object.assign(Object.assign({}, this._micromatchOptions), { dot: !0 })),
        relative: Pe.pattern.convertPatternsToRe(n, Object.assign(Object.assign({}, this._micromatchOptions), { dot: !0 }))
      }
    };
    return (a) => this._filter(a, s);
  }
  _filter(e, r) {
    const i = Pe.path.removeLeadingDotSegment(e.path);
    if (this._settings.unique && this._isDuplicateEntry(i) || this._onlyFileFilter(e) || this._onlyDirectoryFilter(e))
      return !1;
    const n = this._isMatchToPatternsSet(i, r, e.dirent.isDirectory());
    return this._settings.unique && n && this._createIndexRecord(i), n;
  }
  _isDuplicateEntry(e) {
    return this.index.has(e);
  }
  _createIndexRecord(e) {
    this.index.set(e, void 0);
  }
  _onlyFileFilter(e) {
    return this._settings.onlyFiles && !e.dirent.isFile();
  }
  _onlyDirectoryFilter(e) {
    return this._settings.onlyDirectories && !e.dirent.isDirectory();
  }
  _isMatchToPatternsSet(e, r, i) {
    return !(!this._isMatchToPatterns(e, r.positive.all, i) || this._isMatchToPatterns(e, r.negative.relative, i) || this._isMatchToAbsoluteNegative(e, r.negative.absolute, i));
  }
  _isMatchToAbsoluteNegative(e, r, i) {
    if (r.length === 0)
      return !1;
    const n = Pe.path.makeAbsolute(this._settings.cwd, e);
    return this._isMatchToPatterns(n, r, i);
  }
  _isMatchToPatterns(e, r, i) {
    if (r.length === 0)
      return !1;
    const n = Pe.pattern.matchAny(e, r);
    return !n && i ? Pe.pattern.matchAny(e + "/", r) : n;
  }
}
Si.default = wl;
var bi = {};
Object.defineProperty(bi, "__esModule", { value: !0 });
const Al = W;
class El {
  constructor(e) {
    this._settings = e;
  }
  getFilter() {
    return (e) => this._isNonFatalError(e);
  }
  _isNonFatalError(e) {
    return Al.errno.isEnoentCodeError(e) || this._settings.suppressErrors;
  }
}
bi.default = El;
var Ti = {};
Object.defineProperty(Ti, "__esModule", { value: !0 });
const fn = W;
class Rl {
  constructor(e) {
    this._settings = e;
  }
  getTransformer() {
    return (e) => this._transform(e);
  }
  _transform(e) {
    let r = e.path;
    return this._settings.absolute && (r = fn.path.makeAbsolute(this._settings.cwd, r), r = fn.path.unixify(r)), this._settings.markDirectories && e.dirent.isDirectory() && (r += "/"), this._settings.objectMode ? Object.assign(Object.assign({}, e), { path: r }) : r;
  }
}
Ti.default = Rl;
Object.defineProperty(ft, "__esModule", { value: !0 });
const kl = L, Cl = yi, Il = Si, Pl = bi, Ol = Ti;
class Ml {
  constructor(e) {
    this._settings = e, this.errorFilter = new Pl.default(this._settings), this.entryFilter = new Il.default(this._settings, this._getMicromatchOptions()), this.deepFilter = new Cl.default(this._settings, this._getMicromatchOptions()), this.entryTransformer = new Ol.default(this._settings);
  }
  _getRootDirectory(e) {
    return kl.resolve(this._settings.cwd, e.base);
  }
  _getReaderOptions(e) {
    const r = e.base === "." ? "" : e.base;
    return {
      basePath: r,
      pathSegmentSeparator: "/",
      concurrency: this._settings.concurrency,
      deepFilter: this.deepFilter.getFilter(r, e.positive, e.negative),
      entryFilter: this.entryFilter.getFilter(e.positive, e.negative),
      errorFilter: this.errorFilter.getFilter(),
      followSymbolicLinks: this._settings.followSymbolicLinks,
      fs: this._settings.fs,
      stats: this._settings.stats,
      throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
      transform: this.entryTransformer.getTransformer()
    };
  }
  _getMicromatchOptions() {
    return {
      dot: this._settings.dot,
      matchBase: this._settings.baseNameMatch,
      nobrace: !this._settings.braceExpansion,
      nocase: !this._settings.caseSensitiveMatch,
      noext: !this._settings.extglob,
      noglobstar: !this._settings.globstar,
      posix: !0,
      strictSlashes: !1
    };
  }
}
ft.default = Ml;
Object.defineProperty(ci, "__esModule", { value: !0 });
const Dl = ui, Fl = ft;
class Ll extends Fl.default {
  constructor() {
    super(...arguments), this._reader = new Dl.default(this._settings);
  }
  async read(e) {
    const r = this._getRootDirectory(e), i = this._getReaderOptions(e);
    return (await this.api(r, e, i)).map((s) => i.transform(s));
  }
  api(e, r, i) {
    return r.dynamic ? this._reader.dynamic(e, i) : this._reader.static(r.patterns, i);
  }
}
ci.default = Ll;
var wi = {};
Object.defineProperty(wi, "__esModule", { value: !0 });
const Bl = Nt, $l = Qt, Nl = ft;
class Ul extends Nl.default {
  constructor() {
    super(...arguments), this._reader = new $l.default(this._settings);
  }
  read(e) {
    const r = this._getRootDirectory(e), i = this._getReaderOptions(e), n = this.api(r, e, i), s = new Bl.Readable({ objectMode: !0, read: () => {
    } });
    return n.once("error", (a) => s.emit("error", a)).on("data", (a) => s.emit("data", i.transform(a))).once("end", () => s.emit("end")), s.once("close", () => n.destroy()), s;
  }
  api(e, r, i) {
    return r.dynamic ? this._reader.dynamic(e, i) : this._reader.static(r.patterns, i);
  }
}
wi.default = Ul;
var Ai = {}, Ei = {};
Object.defineProperty(Ei, "__esModule", { value: !0 });
const zl = fe, Hl = he, Gl = lt;
class jl extends Gl.default {
  constructor() {
    super(...arguments), this._walkSync = Hl.walkSync, this._statSync = zl.statSync;
  }
  dynamic(e, r) {
    return this._walkSync(e, r);
  }
  static(e, r) {
    const i = [];
    for (const n of e) {
      const s = this._getFullEntryPath(n), a = this._getEntry(s, n, r);
      a === null || !r.entryFilter(a) || i.push(a);
    }
    return i;
  }
  _getEntry(e, r, i) {
    try {
      const n = this._getStat(e);
      return this._makeEntry(n, r);
    } catch (n) {
      if (i.errorFilter(n))
        return null;
      throw n;
    }
  }
  _getStat(e) {
    return this._statSync(e, this._fsStatSettings);
  }
}
Ei.default = jl;
Object.defineProperty(Ai, "__esModule", { value: !0 });
const Xl = Ei, Wl = ft;
class ql extends Wl.default {
  constructor() {
    super(...arguments), this._reader = new Xl.default(this._settings);
  }
  read(e) {
    const r = this._getRootDirectory(e), i = this._getReaderOptions(e);
    return this.api(r, e, i).map(i.transform);
  }
  api(e, r, i) {
    return r.dynamic ? this._reader.dynamic(e, i) : this._reader.static(r.patterns, i);
  }
}
Ai.default = ql;
var Es = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
  const e = Zr, i = Math.max(st.cpus().length, 1);
  t.DEFAULT_FILE_SYSTEM_ADAPTER = {
    lstat: e.lstat,
    lstatSync: e.lstatSync,
    stat: e.stat,
    statSync: e.statSync,
    readdir: e.readdir,
    readdirSync: e.readdirSync
  };
  class n {
    constructor(a = {}) {
      this._options = a, this.absolute = this._getValue(this._options.absolute, !1), this.baseNameMatch = this._getValue(this._options.baseNameMatch, !1), this.braceExpansion = this._getValue(this._options.braceExpansion, !0), this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, !0), this.concurrency = this._getValue(this._options.concurrency, i), this.cwd = this._getValue(this._options.cwd, process.cwd()), this.deep = this._getValue(this._options.deep, 1 / 0), this.dot = this._getValue(this._options.dot, !1), this.extglob = this._getValue(this._options.extglob, !0), this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, !0), this.fs = this._getFileSystemMethods(this._options.fs), this.globstar = this._getValue(this._options.globstar, !0), this.ignore = this._getValue(this._options.ignore, []), this.markDirectories = this._getValue(this._options.markDirectories, !1), this.objectMode = this._getValue(this._options.objectMode, !1), this.onlyDirectories = this._getValue(this._options.onlyDirectories, !1), this.onlyFiles = this._getValue(this._options.onlyFiles, !0), this.stats = this._getValue(this._options.stats, !1), this.suppressErrors = this._getValue(this._options.suppressErrors, !1), this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, !1), this.unique = this._getValue(this._options.unique, !0), this.onlyDirectories && (this.onlyFiles = !1), this.stats && (this.objectMode = !0), this.ignore = [].concat(this.ignore);
    }
    _getValue(a, o) {
      return a === void 0 ? o : a;
    }
    _getFileSystemMethods(a = {}) {
      return Object.assign(Object.assign({}, t.DEFAULT_FILE_SYSTEM_ADAPTER), a);
    }
  }
  t.default = n;
})(Es);
const Rs = ee, Vl = ci, Kl = wi, Yl = Ai, $r = Es, de = W;
async function Nr(t, e) {
  ye(t);
  const r = Ur(t, Vl.default, e), i = await Promise.all(r);
  return de.array.flatten(i);
}
(function(t) {
  t.glob = t, t.globSync = e, t.globStream = r, t.async = t;
  function e(o, c) {
    ye(o);
    const p = Ur(o, Yl.default, c);
    return de.array.flatten(p);
  }
  t.sync = e;
  function r(o, c) {
    ye(o);
    const p = Ur(o, Kl.default, c);
    return de.stream.merge(p);
  }
  t.stream = r;
  function i(o, c) {
    ye(o);
    const p = [].concat(o), l = new $r.default(c);
    return Rs.generate(p, l);
  }
  t.generateTasks = i;
  function n(o, c) {
    ye(o);
    const p = new $r.default(c);
    return de.pattern.isDynamicPattern(o, p);
  }
  t.isDynamicPattern = n;
  function s(o) {
    return ye(o), de.path.escape(o);
  }
  t.escapePath = s;
  function a(o) {
    return ye(o), de.path.convertPathToPattern(o);
  }
  t.convertPathToPattern = a, function(o) {
    function c(l) {
      return ye(l), de.path.escapePosixPath(l);
    }
    o.escapePath = c;
    function p(l) {
      return ye(l), de.path.convertPosixPathToPattern(l);
    }
    o.convertPathToPattern = p;
  }(t.posix || (t.posix = {})), function(o) {
    function c(l) {
      return ye(l), de.path.escapeWindowsPath(l);
    }
    o.escapePath = c;
    function p(l) {
      return ye(l), de.path.convertWindowsPathToPattern(l);
    }
    o.convertPathToPattern = p;
  }(t.win32 || (t.win32 = {}));
})(Nr || (Nr = {}));
function Ur(t, e, r) {
  const i = [].concat(t), n = new $r.default(r), s = Rs.generate(i, n), a = new e(n);
  return s.map(a.read, a);
}
function ye(t) {
  if (![].concat(t).every((i) => de.string.isString(i) && !de.string.isEmpty(i)))
    throw new TypeError("Patterns must be a string (non empty) or an array of strings");
}
var Zl = Nr;
const pn = /* @__PURE__ */ Dn(Zl), Ql = [
  "**/AppData/**",
  "**/Application Data/**",
  "**/Cookies/**",
  "**/Local Settings/**",
  "**/Configuración local/**",
  "**/System Volume Information/**",
  "**/Windows/**",
  "**/Program Files/**",
  "**/Program Files (x86)/**",
  "**/node_modules/**"
];
async function Jl() {
  try {
    const e = await (await import("./index-CWCpg4-Z.js").then((i) => i.i).then(
      (i) => i.default ?? i
    )).list(), r = [];
    for (const i of e)
      for (const n of i.mountpoints || [])
        r.push((n.path || "").replace(/\\/g, "/"));
    return r;
  } catch {
    return [];
  }
}
function hr(t) {
  return t ? L.resolve(t).replace(/\\/g, "/") : null;
}
async function gr(t) {
  try {
    return (await On.stat(t)).isDirectory();
  } catch {
    return !1;
  }
}
async function ef({
  extraFolders: t = [],
  extensions: e = ["mp3"],
  deep: r = 8,
  ignore: i = []
} = {}) {
  const n = /* @__PURE__ */ new Set();
  let s = null;
  try {
    const u = await import("electron").then((y) => y.default ?? y);
    u && u.app && typeof u.app.getPath == "function" && (s = u.app.getPath("music"));
  } catch {
    s = null;
  }
  const a = st.homedir(), o = /* @__PURE__ */ new Set();
  s && o.add(s), o.add(L.join(a, "Music")), o.add(L.join(a, "Downloads")), o.add(L.join(a, "Desktop")), o.add(L.join(a, "Documents")), o.add(
    L.join(process.env.PUBLIC || "C:/Users/Public", "Music")
  );
  for (const u of t || [])
    typeof u == "string" && u.trim() && o.add(u);
  const c = await Jl();
  for (const u of c)
    o.add(L.join(u, "Music")), o.add(L.join(u, "Public", "Music")), o.add(L.join(u, "Users"));
  const p = [];
  for (const u of Array.from(o)) {
    const y = hr(u);
    if (!y) continue;
    const d = y.replace(/\//g, L.sep);
    await gr(d) && p.push(y);
  }
  if (p.length === 0) {
    const u = hr(a);
    u && await gr(u.replace(/\//g, L.sep)) && p.push(u);
  }
  const l = e.length > 1 ? `{${e.join(",")}}` : e[0], f = {
    absolute: !0,
    onlyFiles: !0,
    dot: !1,
    ignore: [...Ql, ...i],
    deep: r
  };
  for (const u of p)
    try {
      if (/\/Users$/i.test(u)) {
        const d = u.replace(/\//g, L.sep);
        let x = [];
        try {
          x = (await On.readdir(d, { withFileTypes: !0 })).filter((T) => T.isDirectory()).map((T) => T.name);
        } catch {
          x = [];
        }
        for (const b of x) {
          const T = hr(
            L.join(d, b, "Music")
          ), F = T.replace(
            /\//g,
            L.sep
          );
          if (!await gr(F)) continue;
          (await pn(`**/*.${l}`, {
            ...f,
            cwd: T || ""
          })).forEach((V) => n.add(V));
        }
        continue;
      }
      (await pn(`**/*.${l}`, {
        ...f,
        cwd: u
      })).forEach((d) => n.add(d));
    } catch {
      continue;
    }
  return Array.from(n).sort();
}
const tf = "End-Of-Stream";
class ie extends Error {
  constructor() {
    super(tf), this.name = "EndOfStreamError";
  }
}
class rf extends Error {
  constructor(e = "The operation was aborted") {
    super(e), this.name = "AbortError";
  }
}
class ks {
  constructor() {
    this.endOfStream = !1, this.interrupted = !1, this.peekQueue = [];
  }
  async peek(e, r = !1) {
    const i = await this.read(e, r);
    return this.peekQueue.push(e.subarray(0, i)), i;
  }
  async read(e, r = !1) {
    if (e.length === 0)
      return 0;
    let i = this.readFromPeekBuffer(e);
    if (this.endOfStream || (i += await this.readRemainderFromStream(e.subarray(i), r)), i === 0 && !r)
      throw new ie();
    return i;
  }
  /**
   * Read chunk from stream
   * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
   * @returns Number of bytes read
   */
  readFromPeekBuffer(e) {
    let r = e.length, i = 0;
    for (; this.peekQueue.length > 0 && r > 0; ) {
      const n = this.peekQueue.pop();
      if (!n)
        throw new Error("peekData should be defined");
      const s = Math.min(n.length, r);
      e.set(n.subarray(0, s), i), i += s, r -= s, s < n.length && this.peekQueue.push(n.subarray(s));
    }
    return i;
  }
  async readRemainderFromStream(e, r) {
    let i = 0;
    for (; i < e.length && !this.endOfStream; ) {
      if (this.interrupted)
        throw new rf();
      const n = await this.readFromStream(e.subarray(i), r);
      if (n === 0)
        break;
      i += n;
    }
    if (!r && i < e.length)
      throw new ie();
    return i;
  }
}
class nf extends ks {
  constructor(e) {
    super(), this.reader = e;
  }
  async abort() {
    return this.close();
  }
  async close() {
    this.reader.releaseLock();
  }
}
class sf extends nf {
  /**
   * Read from stream
   * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
   * @param mayBeLess - If true, may fill the buffer partially
   * @protected Bytes read
   */
  async readFromStream(e, r) {
    if (e.length === 0)
      return 0;
    const i = await this.reader.read(new Uint8Array(e.length), { min: r ? void 0 : e.length });
    return i.done && (this.endOfStream = i.done), i.value ? (e.set(i.value), i.value.length) : 0;
  }
}
class dn extends ks {
  constructor(e) {
    super(), this.reader = e, this.buffer = null;
  }
  /**
   * Copy chunk to target, and store the remainder in this.buffer
   */
  writeChunk(e, r) {
    const i = Math.min(r.length, e.length);
    return e.set(r.subarray(0, i)), i < r.length ? this.buffer = r.subarray(i) : this.buffer = null, i;
  }
  /**
   * Read from stream
   * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
   * @param mayBeLess - If true, may fill the buffer partially
   * @protected Bytes read
   */
  async readFromStream(e, r) {
    if (e.length === 0)
      return 0;
    let i = 0;
    for (this.buffer && (i += this.writeChunk(e, this.buffer)); i < e.length && !this.endOfStream; ) {
      const n = await this.reader.read();
      if (n.done) {
        this.endOfStream = !0;
        break;
      }
      n.value && (i += this.writeChunk(e.subarray(i), n.value));
    }
    if (!r && i === 0 && this.endOfStream)
      throw new ie();
    return i;
  }
  abort() {
    return this.interrupted = !0, this.reader.cancel();
  }
  async close() {
    await this.abort(), this.reader.releaseLock();
  }
}
function af(t) {
  try {
    const e = t.getReader({ mode: "byob" });
    return e instanceof ReadableStreamDefaultReader ? new dn(e) : new sf(e);
  } catch (e) {
    if (e instanceof TypeError)
      return new dn(t.getReader());
    throw e;
  }
}
class Ri {
  /**
   * Constructor
   * @param options Tokenizer options
   * @protected
   */
  constructor(e) {
    this.numBuffer = new Uint8Array(8), this.position = 0, this.onClose = e == null ? void 0 : e.onClose, e != null && e.abortSignal && e.abortSignal.addEventListener("abort", () => {
      this.abort();
    });
  }
  /**
   * Read a token from the tokenizer-stream
   * @param token - The token to read
   * @param position - If provided, the desired position in the tokenizer-stream
   * @returns Promise with token data
   */
  async readToken(e, r = this.position) {
    const i = new Uint8Array(e.len);
    if (await this.readBuffer(i, { position: r }) < e.len)
      throw new ie();
    return e.get(i, 0);
  }
  /**
   * Peek a token from the tokenizer-stream.
   * @param token - Token to peek from the tokenizer-stream.
   * @param position - Offset where to begin reading within the file. If position is null, data will be read from the current file position.
   * @returns Promise with token data
   */
  async peekToken(e, r = this.position) {
    const i = new Uint8Array(e.len);
    if (await this.peekBuffer(i, { position: r }) < e.len)
      throw new ie();
    return e.get(i, 0);
  }
  /**
   * Read a numeric token from the stream
   * @param token - Numeric token
   * @returns Promise with number
   */
  async readNumber(e) {
    if (await this.readBuffer(this.numBuffer, { length: e.len }) < e.len)
      throw new ie();
    return e.get(this.numBuffer, 0);
  }
  /**
   * Read a numeric token from the stream
   * @param token - Numeric token
   * @returns Promise with number
   */
  async peekNumber(e) {
    if (await this.peekBuffer(this.numBuffer, { length: e.len }) < e.len)
      throw new ie();
    return e.get(this.numBuffer, 0);
  }
  /**
   * Ignore number of bytes, advances the pointer in under tokenizer-stream.
   * @param length - Number of bytes to ignore
   * @return resolves the number of bytes ignored, equals length if this available, otherwise the number of bytes available
   */
  async ignore(e) {
    if (this.fileInfo.size !== void 0) {
      const r = this.fileInfo.size - this.position;
      if (e > r)
        return this.position += r, r;
    }
    return this.position += e, e;
  }
  async close() {
    var e;
    await this.abort(), await ((e = this.onClose) == null ? void 0 : e.call(this));
  }
  normalizeOptions(e, r) {
    if (!this.supportsRandomAccess() && r && r.position !== void 0 && r.position < this.position)
      throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
    return {
      mayBeLess: !1,
      offset: 0,
      length: e.length,
      position: this.position,
      ...r
    };
  }
  abort() {
    return Promise.resolve();
  }
}
const of = 256e3;
class cf extends Ri {
  /**
   * Constructor
   * @param streamReader stream-reader to read from
   * @param options Tokenizer options
   */
  constructor(e, r) {
    super(r), this.streamReader = e, this.fileInfo = (r == null ? void 0 : r.fileInfo) ?? {};
  }
  /**
   * Read buffer from tokenizer
   * @param uint8Array - Target Uint8Array to fill with data read from the tokenizer-stream
   * @param options - Read behaviour options
   * @returns Promise with number of bytes read
   */
  async readBuffer(e, r) {
    const i = this.normalizeOptions(e, r), n = i.position - this.position;
    if (n > 0)
      return await this.ignore(n), this.readBuffer(e, r);
    if (n < 0)
      throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
    if (i.length === 0)
      return 0;
    const s = await this.streamReader.read(e.subarray(0, i.length), i.mayBeLess);
    if (this.position += s, (!r || !r.mayBeLess) && s < i.length)
      throw new ie();
    return s;
  }
  /**
   * Peek (read ahead) buffer from tokenizer
   * @param uint8Array - Uint8Array (or Buffer) to write data to
   * @param options - Read behaviour options
   * @returns Promise with number of bytes peeked
   */
  async peekBuffer(e, r) {
    const i = this.normalizeOptions(e, r);
    let n = 0;
    if (i.position) {
      const s = i.position - this.position;
      if (s > 0) {
        const a = new Uint8Array(i.length + s);
        return n = await this.peekBuffer(a, { mayBeLess: i.mayBeLess }), e.set(a.subarray(s)), n - s;
      }
      if (s < 0)
        throw new Error("Cannot peek from a negative offset in a stream");
    }
    if (i.length > 0) {
      try {
        n = await this.streamReader.peek(e.subarray(0, i.length), i.mayBeLess);
      } catch (s) {
        if (r != null && r.mayBeLess && s instanceof ie)
          return 0;
        throw s;
      }
      if (!i.mayBeLess && n < i.length)
        throw new ie();
    }
    return n;
  }
  async ignore(e) {
    const r = Math.min(of, e), i = new Uint8Array(r);
    let n = 0;
    for (; n < e; ) {
      const s = e - n, a = await this.readBuffer(i, { length: Math.min(r, s) });
      if (a < 0)
        return a;
      n += a;
    }
    return n;
  }
  abort() {
    return this.streamReader.abort();
  }
  async close() {
    return this.streamReader.close();
  }
  supportsRandomAccess() {
    return !1;
  }
}
class uf extends Ri {
  /**
   * Construct BufferTokenizer
   * @param uint8Array - Uint8Array to tokenize
   * @param options Tokenizer options
   */
  constructor(e, r) {
    super(r), this.uint8Array = e, this.fileInfo = { ...(r == null ? void 0 : r.fileInfo) ?? {}, size: e.length };
  }
  /**
   * Read buffer from tokenizer
   * @param uint8Array - Uint8Array to tokenize
   * @param options - Read behaviour options
   * @returns {Promise<number>}
   */
  async readBuffer(e, r) {
    r != null && r.position && (this.position = r.position);
    const i = await this.peekBuffer(e, r);
    return this.position += i, i;
  }
  /**
   * Peek (read ahead) buffer from tokenizer
   * @param uint8Array
   * @param options - Read behaviour options
   * @returns {Promise<number>}
   */
  async peekBuffer(e, r) {
    const i = this.normalizeOptions(e, r), n = Math.min(this.uint8Array.length - i.position, i.length);
    if (!i.mayBeLess && n < i.length)
      throw new ie();
    return e.set(this.uint8Array.subarray(i.position, i.position + n)), n;
  }
  close() {
    return super.close();
  }
  supportsRandomAccess() {
    return !0;
  }
  setPosition(e) {
    this.position = e;
  }
}
function lf(t, e) {
  const r = af(t), i = e ?? {}, n = i.onClose;
  return i.onClose = async () => {
    if (await r.close(), n)
      return n();
  }, new cf(r, i);
}
function zr(t, e) {
  return new uf(t, e);
}
class ki extends Ri {
  /**
   * Create tokenizer from provided file path
   * @param sourceFilePath File path
   */
  static async fromFile(e) {
    const r = await oa(e, "r"), i = await r.stat();
    return new ki(r, { fileInfo: { path: e, size: i.size } });
  }
  constructor(e, r) {
    super(r), this.fileHandle = e, this.fileInfo = r.fileInfo;
  }
  /**
   * Read buffer from file
   * @param uint8Array - Uint8Array to write result to
   * @param options - Read behaviour options
   * @returns Promise number of bytes read
   */
  async readBuffer(e, r) {
    const i = this.normalizeOptions(e, r);
    if (this.position = i.position, i.length === 0)
      return 0;
    const n = await this.fileHandle.read(e, 0, i.length, i.position);
    if (this.position += n.bytesRead, n.bytesRead < i.length && (!r || !r.mayBeLess))
      throw new ie();
    return n.bytesRead;
  }
  /**
   * Peek buffer from file
   * @param uint8Array - Uint8Array (or Buffer) to write data to
   * @param options - Read behaviour options
   * @returns Promise number of bytes read
   */
  async peekBuffer(e, r) {
    const i = this.normalizeOptions(e, r), n = await this.fileHandle.read(e, 0, i.length, i.position);
    if (!i.mayBeLess && n.bytesRead < i.length)
      throw new ie();
    return n.bytesRead;
  }
  async close() {
    return await this.fileHandle.close(), super.close();
  }
  setPosition(e) {
    this.position = e;
  }
  supportsRandomAccess() {
    return !0;
  }
}
const ff = ki.fromFile;
var Hr = { exports: {} }, vt = { exports: {} }, xr, mn;
function pf() {
  if (mn) return xr;
  mn = 1;
  var t = 1e3, e = t * 60, r = e * 60, i = r * 24, n = i * 7, s = i * 365.25;
  xr = function(l, f) {
    f = f || {};
    var u = typeof l;
    if (u === "string" && l.length > 0)
      return a(l);
    if (u === "number" && isFinite(l))
      return f.long ? c(l) : o(l);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(l)
    );
  };
  function a(l) {
    if (l = String(l), !(l.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        l
      );
      if (f) {
        var u = parseFloat(f[1]), y = (f[2] || "ms").toLowerCase();
        switch (y) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return u * s;
          case "weeks":
          case "week":
          case "w":
            return u * n;
          case "days":
          case "day":
          case "d":
            return u * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return u * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return u * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return u * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return u;
          default:
            return;
        }
      }
    }
  }
  function o(l) {
    var f = Math.abs(l);
    return f >= i ? Math.round(l / i) + "d" : f >= r ? Math.round(l / r) + "h" : f >= e ? Math.round(l / e) + "m" : f >= t ? Math.round(l / t) + "s" : l + "ms";
  }
  function c(l) {
    var f = Math.abs(l);
    return f >= i ? p(l, f, i, "day") : f >= r ? p(l, f, r, "hour") : f >= e ? p(l, f, e, "minute") : f >= t ? p(l, f, t, "second") : l + " ms";
  }
  function p(l, f, u, y) {
    var d = f >= u * 1.5;
    return Math.round(l / u) + " " + y + (d ? "s" : "");
  }
  return xr;
}
var yr, hn;
function Cs() {
  if (hn) return yr;
  hn = 1;
  function t(e) {
    i.debug = i, i.default = i, i.coerce = p, i.disable = o, i.enable = s, i.enabled = c, i.humanize = pf(), i.destroy = l, Object.keys(e).forEach((f) => {
      i[f] = e[f];
    }), i.names = [], i.skips = [], i.formatters = {};
    function r(f) {
      let u = 0;
      for (let y = 0; y < f.length; y++)
        u = (u << 5) - u + f.charCodeAt(y), u |= 0;
      return i.colors[Math.abs(u) % i.colors.length];
    }
    i.selectColor = r;
    function i(f) {
      let u, y = null, d, x;
      function b(...T) {
        if (!b.enabled)
          return;
        const F = b, C = Number(/* @__PURE__ */ new Date()), V = C - (u || C);
        F.diff = V, F.prev = u, F.curr = C, u = C, T[0] = i.coerce(T[0]), typeof T[0] != "string" && T.unshift("%O");
        let E = 0;
        T[0] = T[0].replace(/%([a-zA-Z%])/g, (R, A) => {
          if (R === "%%")
            return "%";
          E++;
          const O = i.formatters[A];
          if (typeof O == "function") {
            const X = T[E];
            R = O.call(F, X), T.splice(E, 1), E--;
          }
          return R;
        }), i.formatArgs.call(F, T), (F.log || i.log).apply(F, T);
      }
      return b.namespace = f, b.useColors = i.useColors(), b.color = i.selectColor(f), b.extend = n, b.destroy = i.destroy, Object.defineProperty(b, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => y !== null ? y : (d !== i.namespaces && (d = i.namespaces, x = i.enabled(f)), x),
        set: (T) => {
          y = T;
        }
      }), typeof i.init == "function" && i.init(b), b;
    }
    function n(f, u) {
      const y = i(this.namespace + (typeof u > "u" ? ":" : u) + f);
      return y.log = this.log, y;
    }
    function s(f) {
      i.save(f), i.namespaces = f, i.names = [], i.skips = [];
      const u = (typeof f == "string" ? f : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const y of u)
        y[0] === "-" ? i.skips.push(y.slice(1)) : i.names.push(y);
    }
    function a(f, u) {
      let y = 0, d = 0, x = -1, b = 0;
      for (; y < f.length; )
        if (d < u.length && (u[d] === f[y] || u[d] === "*"))
          u[d] === "*" ? (x = d, b = y, d++) : (y++, d++);
        else if (x !== -1)
          d = x + 1, b++, y = b;
        else
          return !1;
      for (; d < u.length && u[d] === "*"; )
        d++;
      return d === u.length;
    }
    function o() {
      const f = [
        ...i.names,
        ...i.skips.map((u) => "-" + u)
      ].join(",");
      return i.enable(""), f;
    }
    function c(f) {
      for (const u of i.skips)
        if (a(f, u))
          return !1;
      for (const u of i.names)
        if (a(f, u))
          return !0;
      return !1;
    }
    function p(f) {
      return f instanceof Error ? f.stack || f.message : f;
    }
    function l() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return i.enable(i.load()), i;
  }
  return yr = t, yr;
}
var gn;
function df() {
  return gn || (gn = 1, function(t, e) {
    e.formatArgs = i, e.save = n, e.load = s, e.useColors = r, e.storage = a(), e.destroy = /* @__PURE__ */ (() => {
      let c = !1;
      return () => {
        c || (c = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), e.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function r() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let c;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (c = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(c[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function i(c) {
      if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
        return;
      const p = "color: " + this.color;
      c.splice(1, 0, p, "color: inherit");
      let l = 0, f = 0;
      c[0].replace(/%[a-zA-Z%]/g, (u) => {
        u !== "%%" && (l++, u === "%c" && (f = l));
      }), c.splice(f, 0, p);
    }
    e.log = console.debug || console.log || (() => {
    });
    function n(c) {
      try {
        c ? e.storage.setItem("debug", c) : e.storage.removeItem("debug");
      } catch {
      }
    }
    function s() {
      let c;
      try {
        c = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
      } catch {
      }
      return !c && typeof process < "u" && "env" in process && (c = process.env.DEBUG), c;
    }
    function a() {
      try {
        return localStorage;
      } catch {
      }
    }
    t.exports = Cs()(e);
    const { formatters: o } = t.exports;
    o.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (p) {
        return "[UnexpectedJSONParseError]: " + p.message;
      }
    };
  }(vt, vt.exports)), vt.exports;
}
var St = { exports: {} }, _r, xn;
function mf() {
  return xn || (xn = 1, _r = (t, e = process.argv) => {
    const r = t.startsWith("-") ? "" : t.length === 1 ? "-" : "--", i = e.indexOf(r + t), n = e.indexOf("--");
    return i !== -1 && (n === -1 || i < n);
  }), _r;
}
var vr, yn;
function hf() {
  if (yn) return vr;
  yn = 1;
  const t = st, e = Mn, r = mf(), { env: i } = process;
  let n;
  r("no-color") || r("no-colors") || r("color=false") || r("color=never") ? n = 0 : (r("color") || r("colors") || r("color=true") || r("color=always")) && (n = 1), "FORCE_COLOR" in i && (i.FORCE_COLOR === "true" ? n = 1 : i.FORCE_COLOR === "false" ? n = 0 : n = i.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(i.FORCE_COLOR, 10), 3));
  function s(c) {
    return c === 0 ? !1 : {
      level: c,
      hasBasic: !0,
      has256: c >= 2,
      has16m: c >= 3
    };
  }
  function a(c, p) {
    if (n === 0)
      return 0;
    if (r("color=16m") || r("color=full") || r("color=truecolor"))
      return 3;
    if (r("color=256"))
      return 2;
    if (c && !p && n === void 0)
      return 0;
    const l = n || 0;
    if (i.TERM === "dumb")
      return l;
    if (process.platform === "win32") {
      const f = t.release().split(".");
      return Number(f[0]) >= 10 && Number(f[2]) >= 10586 ? Number(f[2]) >= 14931 ? 3 : 2 : 1;
    }
    if ("CI" in i)
      return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((f) => f in i) || i.CI_NAME === "codeship" ? 1 : l;
    if ("TEAMCITY_VERSION" in i)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(i.TEAMCITY_VERSION) ? 1 : 0;
    if (i.COLORTERM === "truecolor")
      return 3;
    if ("TERM_PROGRAM" in i) {
      const f = parseInt((i.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (i.TERM_PROGRAM) {
        case "iTerm.app":
          return f >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(i.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(i.TERM) || "COLORTERM" in i ? 1 : l;
  }
  function o(c) {
    const p = a(c, c && c.isTTY);
    return s(p);
  }
  return vr = {
    supportsColor: o,
    stdout: s(a(!0, e.isatty(1))),
    stderr: s(a(!0, e.isatty(2)))
  }, vr;
}
var _n;
function gf() {
  return _n || (_n = 1, function(t, e) {
    const r = Mn, i = Yr;
    e.init = l, e.log = o, e.formatArgs = s, e.save = c, e.load = p, e.useColors = n, e.destroy = i.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    ), e.colors = [6, 2, 3, 4, 5, 1];
    try {
      const u = hf();
      u && (u.stderr || u).level >= 2 && (e.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221
      ]);
    } catch {
    }
    e.inspectOpts = Object.keys(process.env).filter((u) => /^debug_/i.test(u)).reduce((u, y) => {
      const d = y.substring(6).toLowerCase().replace(/_([a-z])/g, (b, T) => T.toUpperCase());
      let x = process.env[y];
      return /^(yes|on|true|enabled)$/i.test(x) ? x = !0 : /^(no|off|false|disabled)$/i.test(x) ? x = !1 : x === "null" ? x = null : x = Number(x), u[d] = x, u;
    }, {});
    function n() {
      return "colors" in e.inspectOpts ? !!e.inspectOpts.colors : r.isatty(process.stderr.fd);
    }
    function s(u) {
      const { namespace: y, useColors: d } = this;
      if (d) {
        const x = this.color, b = "\x1B[3" + (x < 8 ? x : "8;5;" + x), T = `  ${b};1m${y} \x1B[0m`;
        u[0] = T + u[0].split(`
`).join(`
` + T), u.push(b + "m+" + t.exports.humanize(this.diff) + "\x1B[0m");
      } else
        u[0] = a() + y + " " + u[0];
    }
    function a() {
      return e.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function o(...u) {
      return process.stderr.write(i.formatWithOptions(e.inspectOpts, ...u) + `
`);
    }
    function c(u) {
      u ? process.env.DEBUG = u : delete process.env.DEBUG;
    }
    function p() {
      return process.env.DEBUG;
    }
    function l(u) {
      u.inspectOpts = {};
      const y = Object.keys(e.inspectOpts);
      for (let d = 0; d < y.length; d++)
        u.inspectOpts[y[d]] = e.inspectOpts[y[d]];
    }
    t.exports = Cs()(e);
    const { formatters: f } = t.exports;
    f.o = function(u) {
      return this.inspectOpts.colors = this.useColors, i.inspect(u, this.inspectOpts).split(`
`).map((y) => y.trim()).join(" ");
    }, f.O = function(u) {
      return this.inspectOpts.colors = this.useColors, i.inspect(u, this.inspectOpts);
    };
  }(St, St.exports)), St.exports;
}
typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? Hr.exports = df() : Hr.exports = gf();
var xf = Hr.exports;
const Je = /* @__PURE__ */ Dn(xf);
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Jt = function(t, e, r, i, n) {
  var s, a, o = n * 8 - i - 1, c = (1 << o) - 1, p = c >> 1, l = -7, f = r ? n - 1 : 0, u = r ? -1 : 1, y = t[e + f];
  for (f += u, s = y & (1 << -l) - 1, y >>= -l, l += o; l > 0; s = s * 256 + t[e + f], f += u, l -= 8)
    ;
  for (a = s & (1 << -l) - 1, s >>= -l, l += i; l > 0; a = a * 256 + t[e + f], f += u, l -= 8)
    ;
  if (s === 0)
    s = 1 - p;
  else {
    if (s === c)
      return a ? NaN : (y ? -1 : 1) * (1 / 0);
    a = a + Math.pow(2, i), s = s - p;
  }
  return (y ? -1 : 1) * a * Math.pow(2, s - i);
}, er = function(t, e, r, i, n, s) {
  var a, o, c, p = s * 8 - n - 1, l = (1 << p) - 1, f = l >> 1, u = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = i ? 0 : s - 1, d = i ? 1 : -1, x = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, a = l) : (a = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), a + f >= 1 ? e += u / c : e += u * Math.pow(2, 1 - f), e * c >= 2 && (a++, c /= 2), a + f >= l ? (o = 0, a = l) : a + f >= 1 ? (o = (e * c - 1) * Math.pow(2, n), a = a + f) : (o = e * Math.pow(2, f - 1) * Math.pow(2, n), a = 0)); n >= 8; t[r + y] = o & 255, y += d, o /= 256, n -= 8)
    ;
  for (a = a << n | o, p += n; p > 0; t[r + y] = a & 255, y += d, a /= 256, p -= 8)
    ;
  t[r + y - d] |= x * 128;
};
const Gr = {
  128: "€",
  130: "‚",
  131: "ƒ",
  132: "„",
  133: "…",
  134: "†",
  135: "‡",
  136: "ˆ",
  137: "‰",
  138: "Š",
  139: "‹",
  140: "Œ",
  142: "Ž",
  145: "‘",
  146: "’",
  147: "“",
  148: "”",
  149: "•",
  150: "–",
  151: "—",
  152: "˜",
  153: "™",
  154: "š",
  155: "›",
  156: "œ",
  158: "ž",
  159: "Ÿ"
};
for (const [t, e] of Object.entries(Gr))
  ;
function yf(t, e = "utf-8") {
  switch (e.toLowerCase()) {
    case "utf-8":
    case "utf8":
      return typeof globalThis.TextDecoder < "u" ? new globalThis.TextDecoder("utf-8").decode(t) : _f(t);
    case "utf-16le":
      return vf(t);
    case "ascii":
      return Sf(t);
    case "latin1":
    case "iso-8859-1":
      return bf(t);
    case "windows-1252":
      return Tf(t);
    default:
      throw new RangeError(`Encoding '${e}' not supported`);
  }
}
function _f(t) {
  let e = "", r = 0;
  for (; r < t.length; ) {
    const i = t[r++];
    if (i < 128)
      e += String.fromCharCode(i);
    else if (i < 224) {
      const n = t[r++] & 63;
      e += String.fromCharCode((i & 31) << 6 | n);
    } else if (i < 240) {
      const n = t[r++] & 63, s = t[r++] & 63;
      e += String.fromCharCode((i & 15) << 12 | n << 6 | s);
    } else {
      const n = t[r++] & 63, s = t[r++] & 63, a = t[r++] & 63;
      let o = (i & 7) << 18 | n << 12 | s << 6 | a;
      o -= 65536, e += String.fromCharCode(55296 + (o >> 10 & 1023), 56320 + (o & 1023));
    }
  }
  return e;
}
function vf(t) {
  let e = "";
  for (let r = 0; r < t.length; r += 2)
    e += String.fromCharCode(t[r] | t[r + 1] << 8);
  return e;
}
function Sf(t) {
  return String.fromCharCode(...t.map((e) => e & 127));
}
function bf(t) {
  return String.fromCharCode(...t);
}
function Tf(t) {
  let e = "";
  for (const r of t)
    r >= 128 && r <= 159 && Gr[r] ? e += Gr[r] : e += String.fromCharCode(r);
  return e;
}
function k(t) {
  return new DataView(t.buffer, t.byteOffset);
}
const Xe = {
  len: 1,
  get(t, e) {
    return k(t).getUint8(e);
  },
  put(t, e, r) {
    return k(t).setUint8(e, r), e + 1;
  }
}, z = {
  len: 2,
  get(t, e) {
    return k(t).getUint16(e, !0);
  },
  put(t, e, r) {
    return k(t).setUint16(e, r, !0), e + 2;
  }
}, Ge = {
  len: 2,
  get(t, e) {
    return k(t).getUint16(e);
  },
  put(t, e, r) {
    return k(t).setUint16(e, r), e + 2;
  }
}, Is = {
  len: 3,
  get(t, e) {
    const r = k(t);
    return r.getUint8(e) + (r.getUint16(e + 1, !0) << 8);
  },
  put(t, e, r) {
    const i = k(t);
    return i.setUint8(e, r & 255), i.setUint16(e + 1, r >> 8, !0), e + 3;
  }
}, Ps = {
  len: 3,
  get(t, e) {
    const r = k(t);
    return (r.getUint16(e) << 8) + r.getUint8(e + 2);
  },
  put(t, e, r) {
    const i = k(t);
    return i.setUint16(e, r >> 8), i.setUint8(e + 2, r & 255), e + 3;
  }
}, M = {
  len: 4,
  get(t, e) {
    return k(t).getUint32(e, !0);
  },
  put(t, e, r) {
    return k(t).setUint32(e, r, !0), e + 4;
  }
}, Lt = {
  len: 4,
  get(t, e) {
    return k(t).getUint32(e);
  },
  put(t, e, r) {
    return k(t).setUint32(e, r), e + 4;
  }
}, jr = {
  len: 1,
  get(t, e) {
    return k(t).getInt8(e);
  },
  put(t, e, r) {
    return k(t).setInt8(e, r), e + 1;
  }
}, wf = {
  len: 2,
  get(t, e) {
    return k(t).getInt16(e);
  },
  put(t, e, r) {
    return k(t).setInt16(e, r), e + 2;
  }
}, Af = {
  len: 2,
  get(t, e) {
    return k(t).getInt16(e, !0);
  },
  put(t, e, r) {
    return k(t).setInt16(e, r, !0), e + 2;
  }
}, Ef = {
  len: 3,
  get(t, e) {
    const r = Is.get(t, e);
    return r > 8388607 ? r - 16777216 : r;
  },
  put(t, e, r) {
    const i = k(t);
    return i.setUint8(e, r & 255), i.setUint16(e + 1, r >> 8, !0), e + 3;
  }
}, Rf = {
  len: 3,
  get(t, e) {
    const r = Ps.get(t, e);
    return r > 8388607 ? r - 16777216 : r;
  },
  put(t, e, r) {
    const i = k(t);
    return i.setUint16(e, r >> 8), i.setUint8(e + 2, r & 255), e + 3;
  }
}, Os = {
  len: 4,
  get(t, e) {
    return k(t).getInt32(e);
  },
  put(t, e, r) {
    return k(t).setInt32(e, r), e + 4;
  }
}, kf = {
  len: 4,
  get(t, e) {
    return k(t).getInt32(e, !0);
  },
  put(t, e, r) {
    return k(t).setInt32(e, r, !0), e + 4;
  }
}, Ms = {
  len: 8,
  get(t, e) {
    return k(t).getBigUint64(e, !0);
  },
  put(t, e, r) {
    return k(t).setBigUint64(e, r, !0), e + 8;
  }
}, Cf = {
  len: 8,
  get(t, e) {
    return k(t).getBigInt64(e, !0);
  },
  put(t, e, r) {
    return k(t).setBigInt64(e, r, !0), e + 8;
  }
}, If = {
  len: 8,
  get(t, e) {
    return k(t).getBigUint64(e);
  },
  put(t, e, r) {
    return k(t).setBigUint64(e, r), e + 8;
  }
}, Pf = {
  len: 8,
  get(t, e) {
    return k(t).getBigInt64(e);
  },
  put(t, e, r) {
    return k(t).setBigInt64(e, r), e + 8;
  }
}, Of = {
  len: 2,
  get(t, e) {
    return Jt(t, e, !1, 10, this.len);
  },
  put(t, e, r) {
    return er(t, r, e, !1, 10, this.len), e + this.len;
  }
}, Mf = {
  len: 2,
  get(t, e) {
    return Jt(t, e, !0, 10, this.len);
  },
  put(t, e, r) {
    return er(t, r, e, !0, 10, this.len), e + this.len;
  }
}, Df = {
  len: 4,
  get(t, e) {
    return k(t).getFloat32(e);
  },
  put(t, e, r) {
    return k(t).setFloat32(e, r), e + 4;
  }
}, Ff = {
  len: 4,
  get(t, e) {
    return k(t).getFloat32(e, !0);
  },
  put(t, e, r) {
    return k(t).setFloat32(e, r, !0), e + 4;
  }
}, Lf = {
  len: 8,
  get(t, e) {
    return k(t).getFloat64(e);
  },
  put(t, e, r) {
    return k(t).setFloat64(e, r), e + 8;
  }
}, Bf = {
  len: 8,
  get(t, e) {
    return k(t).getFloat64(e, !0);
  },
  put(t, e, r) {
    return k(t).setFloat64(e, r, !0), e + 8;
  }
}, $f = {
  len: 10,
  get(t, e) {
    return Jt(t, e, !1, 63, this.len);
  },
  put(t, e, r) {
    return er(t, r, e, !1, 63, this.len), e + this.len;
  }
}, Nf = {
  len: 10,
  get(t, e) {
    return Jt(t, e, !0, 63, this.len);
  },
  put(t, e, r) {
    return er(t, r, e, !0, 63, this.len), e + this.len;
  }
};
class Uf {
  /**
   * @param len number of bytes to ignore
   */
  constructor(e) {
    this.len = e;
  }
  // ToDo: don't read, but skip data
  get(e, r) {
  }
}
class Ds {
  constructor(e) {
    this.len = e;
  }
  get(e, r) {
    return e.subarray(r, r + this.len);
  }
}
class J {
  constructor(e, r) {
    this.len = e, this.encoding = r;
  }
  get(e, r = 0) {
    const i = e.subarray(r, r + this.len);
    return yf(i, this.encoding);
  }
}
class zf extends J {
  constructor(e) {
    super(e, "windows-1252");
  }
}
const Rm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnsiStringType: zf,
  Float16_BE: Of,
  Float16_LE: Mf,
  Float32_BE: Df,
  Float32_LE: Ff,
  Float64_BE: Lf,
  Float64_LE: Bf,
  Float80_BE: $f,
  Float80_LE: Nf,
  INT16_BE: wf,
  INT16_LE: Af,
  INT24_BE: Rf,
  INT24_LE: Ef,
  INT32_BE: Os,
  INT32_LE: kf,
  INT64_BE: Pf,
  INT64_LE: Cf,
  INT8: jr,
  IgnoreType: Uf,
  StringType: J,
  UINT16_BE: Ge,
  UINT16_LE: z,
  UINT24_BE: Ps,
  UINT24_LE: Is,
  UINT32_BE: Lt,
  UINT32_LE: M,
  UINT64_BE: If,
  UINT64_LE: Ms,
  UINT8: Xe,
  Uint8ArrayType: Ds
}, Symbol.toStringTag, { value: "Module" }));
var Hf = ca("/"), Gf;
try {
  Gf = Hf("worker_threads").Worker;
} catch {
}
var ce = Uint8Array, Ke = Uint16Array, jf = Int32Array, Fs = new ce([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), Ls = new ce([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Xf = new ce([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Bs = function(t, e) {
  for (var r = new Ke(31), i = 0; i < 31; ++i)
    r[i] = e += 1 << t[i - 1];
  for (var n = new jf(r[30]), i = 1; i < 30; ++i)
    for (var s = r[i]; s < r[i + 1]; ++s)
      n[s] = s - r[i] << 5 | i;
  return { b: r, r: n };
}, $s = Bs(Fs, 2), Ns = $s.b, Wf = $s.r;
Ns[28] = 258, Wf[258] = 28;
var qf = Bs(Ls, 0), Vf = qf.b, Xr = new Ke(32768);
for (var G = 0; G < 32768; ++G) {
  var Oe = (G & 43690) >> 1 | (G & 21845) << 1;
  Oe = (Oe & 52428) >> 2 | (Oe & 13107) << 2, Oe = (Oe & 61680) >> 4 | (Oe & 3855) << 4, Xr[G] = ((Oe & 65280) >> 8 | (Oe & 255) << 8) >> 1;
}
var nt = function(t, e, r) {
  for (var i = t.length, n = 0, s = new Ke(e); n < i; ++n)
    t[n] && ++s[t[n] - 1];
  var a = new Ke(e);
  for (n = 1; n < e; ++n)
    a[n] = a[n - 1] + s[n - 1] << 1;
  var o;
  if (r) {
    o = new Ke(1 << e);
    var c = 15 - e;
    for (n = 0; n < i; ++n)
      if (t[n])
        for (var p = n << 4 | t[n], l = e - t[n], f = a[t[n] - 1]++ << l, u = f | (1 << l) - 1; f <= u; ++f)
          o[Xr[f] >> c] = p;
  } else
    for (o = new Ke(i), n = 0; n < i; ++n)
      t[n] && (o[n] = Xr[a[t[n] - 1]++] >> 15 - t[n]);
  return o;
}, pt = new ce(288);
for (var G = 0; G < 144; ++G)
  pt[G] = 8;
for (var G = 144; G < 256; ++G)
  pt[G] = 9;
for (var G = 256; G < 280; ++G)
  pt[G] = 7;
for (var G = 280; G < 288; ++G)
  pt[G] = 8;
var Us = new ce(32);
for (var G = 0; G < 32; ++G)
  Us[G] = 5;
var Kf = /* @__PURE__ */ nt(pt, 9, 1), Yf = /* @__PURE__ */ nt(Us, 5, 1), Sr = function(t) {
  for (var e = t[0], r = 1; r < t.length; ++r)
    t[r] > e && (e = t[r]);
  return e;
}, xe = function(t, e, r) {
  var i = e / 8 | 0;
  return (t[i] | t[i + 1] << 8) >> (e & 7) & r;
}, br = function(t, e) {
  var r = e / 8 | 0;
  return (t[r] | t[r + 1] << 8 | t[r + 2] << 16) >> (e & 7);
}, Zf = function(t) {
  return (t + 7) / 8 | 0;
}, Qf = function(t, e, r) {
  return (r == null || r > t.length) && (r = t.length), new ce(t.subarray(e, r));
}, Jf = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], oe = function(t, e, r) {
  var i = new Error(e || Jf[t]);
  if (i.code = t, Error.captureStackTrace && Error.captureStackTrace(i, oe), !r)
    throw i;
  return i;
}, Ci = function(t, e, r, i) {
  var n = t.length, s = 0;
  if (!n || e.f && !e.l)
    return r || new ce(0);
  var a = !r, o = a || e.i != 2, c = e.i;
  a && (r = new ce(n * 3));
  var p = function(_) {
    var I = r.length;
    if (_ > I) {
      var H = new ce(Math.max(I * 2, _));
      H.set(r), r = H;
    }
  }, l = e.f || 0, f = e.p || 0, u = e.b || 0, y = e.l, d = e.d, x = e.m, b = e.n, T = n * 8;
  do {
    if (!y) {
      l = xe(t, f, 1);
      var F = xe(t, f + 1, 3);
      if (f += 3, F)
        if (F == 1)
          y = Kf, d = Yf, x = 9, b = 5;
        else if (F == 2) {
          var B = xe(t, f, 31) + 257, R = xe(t, f + 10, 15) + 4, A = B + xe(t, f + 5, 31) + 1;
          f += 14;
          for (var O = new ce(A), X = new ce(19), g = 0; g < R; ++g)
            X[Xf[g]] = xe(t, f + g * 3, 7);
          f += R * 3;
          for (var $ = Sr(X), N = (1 << $) - 1, ve = nt(X, $, 1), g = 0; g < A; ) {
            var h = ve[xe(t, f, N)];
            f += h & 15;
            var C = h >> 4;
            if (C < 16)
              O[g++] = C;
            else {
              var m = 0, K = 0;
              for (C == 16 ? (K = 3 + xe(t, f, 3), f += 2, m = O[g - 1]) : C == 17 ? (K = 3 + xe(t, f, 7), f += 3) : C == 18 && (K = 11 + xe(t, f, 127), f += 7); K--; )
                O[g++] = m;
            }
          }
          var D = O.subarray(0, B), Z = O.subarray(B);
          x = Sr(D), b = Sr(Z), y = nt(D, x, 1), d = nt(Z, b, 1);
        } else
          oe(1);
      else {
        var C = Zf(f) + 4, V = t[C - 4] | t[C - 3] << 8, E = C + V;
        if (E > n) {
          c && oe(0);
          break;
        }
        o && p(u + V), r.set(t.subarray(C, E), u), e.b = u += V, e.p = f = E * 8, e.f = l;
        continue;
      }
      if (f > T) {
        c && oe(0);
        break;
      }
    }
    o && p(u + 131072);
    for (var pe = (1 << x) - 1, te = (1 << b) - 1, ke = f; ; ke = f) {
      var m = y[br(t, f) & pe], Ce = m >> 4;
      if (f += m & 15, f > T) {
        c && oe(0);
        break;
      }
      if (m || oe(2), Ce < 256)
        r[u++] = Ce;
      else if (Ce == 256) {
        ke = f, y = null;
        break;
      } else {
        var Ne = Ce - 254;
        if (Ce > 264) {
          var g = Ce - 257, ne = Fs[g];
          Ne = xe(t, f, (1 << ne) - 1) + Ns[g], f += ne;
        }
        var P = d[br(t, f) & te], Ie = P >> 4;
        P || oe(3), f += P & 15;
        var Z = Vf[Ie];
        if (Ie > 3) {
          var ne = Ls[Ie];
          Z += br(t, f) & (1 << ne) - 1, f += ne;
        }
        if (f > T) {
          c && oe(0);
          break;
        }
        o && p(u + 131072);
        var ht = u + Ne;
        if (u < Z) {
          var S = s - Z, U = Math.min(Z, ht);
          for (S + u < 0 && oe(3); u < U; ++u)
            r[u] = i[S + u];
        }
        for (; u < ht; ++u)
          r[u] = r[u - Z];
      }
    }
    e.l = y, e.p = ke, e.b = u, e.f = l, y && (l = 1, e.m = x, e.d = d, e.n = b);
  } while (!l);
  return u != r.length && a ? Qf(r, 0, u) : r.subarray(0, u);
}, ep = /* @__PURE__ */ new ce(0), tp = function(t) {
  (t[0] != 31 || t[1] != 139 || t[2] != 8) && oe(6, "invalid gzip data");
  var e = t[3], r = 10;
  e & 4 && (r += (t[10] | t[11] << 8) + 2);
  for (var i = (e >> 3 & 1) + (e >> 4 & 1); i > 0; i -= !t[r++])
    ;
  return r + (e & 2);
}, rp = function(t) {
  var e = t.length;
  return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0;
}, ip = function(t, e) {
  return ((t[0] & 15) != 8 || t[0] >> 4 > 7 || (t[0] << 8 | t[1]) % 31) && oe(6, "invalid zlib data"), (t[1] >> 5 & 1) == 1 && oe(6, "invalid zlib data: " + (t[1] & 32 ? "need" : "unexpected") + " dictionary"), (t[1] >> 3 & 4) + 2;
};
function np(t, e) {
  return Ci(t, { i: 2 }, e, e);
}
function sp(t, e) {
  var r = tp(t);
  return r + 8 > t.length && oe(6, "invalid gzip data"), Ci(t.subarray(r, -8), { i: 2 }, new ce(rp(t)), e);
}
function ap(t, e) {
  return Ci(t.subarray(ip(t), -4), { i: 2 }, e, e);
}
function op(t, e) {
  return t[0] == 31 && t[1] == 139 && t[2] == 8 ? sp(t, e) : (t[0] & 15) != 8 || t[0] >> 4 > 7 || (t[0] << 8 | t[1]) % 31 ? np(t, e) : ap(t, e);
}
var cp = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), up = 0;
try {
  cp.decode(ep, { stream: !0 }), up = 1;
} catch {
}
const Ye = {
  LocalFileHeader: 67324752,
  DataDescriptor: 134695760,
  CentralFileHeader: 33639248,
  EndOfCentralDirectory: 101010256
}, vn = {
  get(t) {
    return z.get(t, 6), {
      signature: M.get(t, 0),
      compressedSize: M.get(t, 8),
      uncompressedSize: M.get(t, 12)
    };
  },
  len: 16
}, lp = {
  get(t) {
    const e = z.get(t, 6);
    return {
      signature: M.get(t, 0),
      minVersion: z.get(t, 4),
      dataDescriptor: !!(e & 8),
      compressedMethod: z.get(t, 8),
      compressedSize: M.get(t, 18),
      uncompressedSize: M.get(t, 22),
      filenameLength: z.get(t, 26),
      extraFieldLength: z.get(t, 28),
      filename: null
    };
  },
  len: 30
}, fp = {
  get(t) {
    return {
      signature: M.get(t, 0),
      nrOfThisDisk: z.get(t, 4),
      nrOfThisDiskWithTheStart: z.get(t, 6),
      nrOfEntriesOnThisDisk: z.get(t, 8),
      nrOfEntriesOfSize: z.get(t, 10),
      sizeOfCd: M.get(t, 12),
      offsetOfStartOfCd: M.get(t, 16),
      zipFileCommentLength: z.get(t, 20)
    };
  },
  len: 22
}, pp = {
  get(t) {
    const e = z.get(t, 8);
    return {
      signature: M.get(t, 0),
      minVersion: z.get(t, 6),
      dataDescriptor: !!(e & 8),
      compressedMethod: z.get(t, 10),
      compressedSize: M.get(t, 20),
      uncompressedSize: M.get(t, 24),
      filenameLength: z.get(t, 28),
      extraFieldLength: z.get(t, 30),
      fileCommentLength: z.get(t, 32),
      relativeOffsetOfLocalHeader: M.get(t, 42),
      filename: null
    };
  },
  len: 46
};
function zs(t) {
  const e = new Uint8Array(M.len);
  return M.put(e, 0, t), e;
}
const Se = Je("tokenizer:inflate"), Tr = 256 * 1024, dp = zs(Ye.DataDescriptor), bt = zs(Ye.EndOfCentralDirectory);
class mp {
  constructor(e) {
    this.tokenizer = e, this.syncBuffer = new Uint8Array(Tr);
  }
  async isZip() {
    return await this.peekSignature() === Ye.LocalFileHeader;
  }
  peekSignature() {
    return this.tokenizer.peekToken(M);
  }
  async findEndOfCentralDirectoryLocator() {
    const e = this.tokenizer, r = Math.min(16 * 1024, e.fileInfo.size), i = this.syncBuffer.subarray(0, r);
    await this.tokenizer.readBuffer(i, { position: e.fileInfo.size - r });
    for (let n = i.length - 4; n >= 0; n--)
      if (i[n] === bt[0] && i[n + 1] === bt[1] && i[n + 2] === bt[2] && i[n + 3] === bt[3])
        return e.fileInfo.size - r + n;
    return -1;
  }
  async readCentralDirectory() {
    if (!this.tokenizer.supportsRandomAccess()) {
      Se("Cannot reading central-directory without random-read support");
      return;
    }
    Se("Reading central-directory...");
    const e = this.tokenizer.position, r = await this.findEndOfCentralDirectoryLocator();
    if (r > 0) {
      Se("Central-directory 32-bit signature found");
      const i = await this.tokenizer.readToken(fp, r), n = [];
      this.tokenizer.setPosition(i.offsetOfStartOfCd);
      for (let s = 0; s < i.nrOfEntriesOfSize; ++s) {
        const a = await this.tokenizer.readToken(pp);
        if (a.signature !== Ye.CentralFileHeader)
          throw new Error("Expected Central-File-Header signature");
        a.filename = await this.tokenizer.readToken(new J(a.filenameLength, "utf-8")), await this.tokenizer.ignore(a.extraFieldLength), await this.tokenizer.ignore(a.fileCommentLength), n.push(a), Se(`Add central-directory file-entry: n=${s + 1}/${n.length}: filename=${n[s].filename}`);
      }
      return this.tokenizer.setPosition(e), n;
    }
    this.tokenizer.setPosition(e);
  }
  async unzip(e) {
    const r = await this.readCentralDirectory();
    if (r)
      return this.iterateOverCentralDirectory(r, e);
    let i = !1;
    do {
      const n = await this.readLocalFileHeader();
      if (!n)
        break;
      const s = e(n);
      i = !!s.stop;
      let a;
      if (await this.tokenizer.ignore(n.extraFieldLength), n.dataDescriptor && n.compressedSize === 0) {
        const o = [];
        let c = Tr;
        Se("Compressed-file-size unknown, scanning for next data-descriptor-signature....");
        let p = -1;
        for (; p < 0 && c === Tr; ) {
          c = await this.tokenizer.peekBuffer(this.syncBuffer, { mayBeLess: !0 }), p = hp(this.syncBuffer.subarray(0, c), dp);
          const l = p >= 0 ? p : c;
          if (s.handler) {
            const f = new Uint8Array(l);
            await this.tokenizer.readBuffer(f), o.push(f);
          } else
            await this.tokenizer.ignore(l);
        }
        Se(`Found data-descriptor-signature at pos=${this.tokenizer.position}`), s.handler && await this.inflate(n, gp(o), s.handler);
      } else
        s.handler ? (Se(`Reading compressed-file-data: ${n.compressedSize} bytes`), a = new Uint8Array(n.compressedSize), await this.tokenizer.readBuffer(a), await this.inflate(n, a, s.handler)) : (Se(`Ignoring compressed-file-data: ${n.compressedSize} bytes`), await this.tokenizer.ignore(n.compressedSize));
      if (Se(`Reading data-descriptor at pos=${this.tokenizer.position}`), n.dataDescriptor && (await this.tokenizer.readToken(vn)).signature !== 134695760)
        throw new Error(`Expected data-descriptor-signature at position ${this.tokenizer.position - vn.len}`);
    } while (!i);
  }
  async iterateOverCentralDirectory(e, r) {
    for (const i of e) {
      const n = r(i);
      if (n.handler) {
        this.tokenizer.setPosition(i.relativeOffsetOfLocalHeader);
        const s = await this.readLocalFileHeader();
        if (s) {
          await this.tokenizer.ignore(s.extraFieldLength);
          const a = new Uint8Array(i.compressedSize);
          await this.tokenizer.readBuffer(a), await this.inflate(s, a, n.handler);
        }
      }
      if (n.stop)
        break;
    }
  }
  inflate(e, r, i) {
    if (e.compressedMethod === 0)
      return i(r);
    Se(`Decompress filename=${e.filename}, compressed-size=${r.length}`);
    const n = op(r);
    return i(n);
  }
  async readLocalFileHeader() {
    const e = await this.tokenizer.peekToken(M);
    if (e === Ye.LocalFileHeader) {
      const r = await this.tokenizer.readToken(lp);
      return r.filename = await this.tokenizer.readToken(new J(r.filenameLength, "utf-8")), r;
    }
    if (e === Ye.CentralFileHeader)
      return !1;
    throw e === 3759263696 ? new Error("Encrypted ZIP") : new Error("Unexpected signature");
  }
}
function hp(t, e) {
  const r = t.length, i = e.length;
  if (i > r)
    return -1;
  for (let n = 0; n <= r - i; n++) {
    let s = !0;
    for (let a = 0; a < i; a++)
      if (t[n + a] !== e[a]) {
        s = !1;
        break;
      }
    if (s)
      return n;
  }
  return -1;
}
function gp(t) {
  const e = t.reduce((n, s) => n + s.length, 0), r = new Uint8Array(e);
  let i = 0;
  for (const n of t)
    r.set(n, i), i += n.length;
  return r;
}
const xp = Object.prototype.toString, yp = "[object Uint8Array]";
function _p(t, e, r) {
  return t ? t.constructor === e ? !0 : xp.call(t) === r : !1;
}
function vp(t) {
  return _p(t, Uint8Array, yp);
}
function Sp(t) {
  if (!vp(t))
    throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof t}\``);
}
new globalThis.TextDecoder("utf8");
function bp(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected \`string\`, got \`${typeof t}\``);
}
new globalThis.TextEncoder();
const Tp = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function km(t) {
  Sp(t);
  let e = "";
  for (let r = 0; r < t.length; r++)
    e += Tp[t[r]];
  return e;
}
const Sn = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};
function Cm(t) {
  if (bp(t), t.length % 2 !== 0)
    throw new Error("Invalid Hex string length.");
  const e = t.length / 2, r = new Uint8Array(e);
  for (let i = 0; i < e; i++) {
    const n = Sn[t[i * 2]], s = Sn[t[i * 2 + 1]];
    if (n === void 0 || s === void 0)
      throw new Error(`Invalid Hex character encountered at position ${i * 2}`);
    r[i] = n << 4 | s;
  }
  return r;
}
function bn(t) {
  const { byteLength: e } = t;
  if (e === 6)
    return t.getUint16(0) * 2 ** 32 + t.getUint32(2);
  if (e === 5)
    return t.getUint8(0) * 2 ** 32 + t.getUint32(1);
  if (e === 4)
    return t.getUint32(0);
  if (e === 3)
    return t.getUint8(0) * 2 ** 16 + t.getUint16(1);
  if (e === 2)
    return t.getUint16(0);
  if (e === 1)
    return t.getUint8(0);
}
function wp(t) {
  return [...t].map((e) => e.charCodeAt(0));
}
function Ap(t, e = 0) {
  const r = Number.parseInt(new J(6).get(t, 148).replace(/\0.*$/, "").trim(), 8);
  if (Number.isNaN(r))
    return !1;
  let i = 8 * 32;
  for (let n = e; n < e + 148; n++)
    i += t[n];
  for (let n = e + 156; n < e + 512; n++)
    i += t[n];
  return r === i;
}
const Ep = {
  get: (t, e) => t[e + 3] & 127 | t[e + 2] << 7 | t[e + 1] << 14 | t[e] << 21,
  len: 4
}, Rp = [
  "jpg",
  "png",
  "apng",
  "gif",
  "webp",
  "flif",
  "xcf",
  "cr2",
  "cr3",
  "orf",
  "arw",
  "dng",
  "nef",
  "rw2",
  "raf",
  "tif",
  "bmp",
  "icns",
  "jxr",
  "psd",
  "indd",
  "zip",
  "tar",
  "rar",
  "gz",
  "bz2",
  "7z",
  "dmg",
  "mp4",
  "mid",
  "mkv",
  "webm",
  "mov",
  "avi",
  "mpg",
  "mp2",
  "mp3",
  "m4a",
  "oga",
  "ogg",
  "ogv",
  "opus",
  "flac",
  "wav",
  "spx",
  "amr",
  "pdf",
  "epub",
  "elf",
  "macho",
  "exe",
  "swf",
  "rtf",
  "wasm",
  "woff",
  "woff2",
  "eot",
  "ttf",
  "otf",
  "ttc",
  "ico",
  "flv",
  "ps",
  "xz",
  "sqlite",
  "nes",
  "crx",
  "xpi",
  "cab",
  "deb",
  "ar",
  "rpm",
  "Z",
  "lz",
  "cfb",
  "mxf",
  "mts",
  "blend",
  "bpg",
  "docx",
  "pptx",
  "xlsx",
  "3gp",
  "3g2",
  "j2c",
  "jp2",
  "jpm",
  "jpx",
  "mj2",
  "aif",
  "qcp",
  "odt",
  "ods",
  "odp",
  "xml",
  "mobi",
  "heic",
  "cur",
  "ktx",
  "ape",
  "wv",
  "dcm",
  "ics",
  "glb",
  "pcap",
  "dsf",
  "lnk",
  "alias",
  "voc",
  "ac3",
  "m4v",
  "m4p",
  "m4b",
  "f4v",
  "f4p",
  "f4b",
  "f4a",
  "mie",
  "asf",
  "ogm",
  "ogx",
  "mpc",
  "arrow",
  "shp",
  "aac",
  "mp1",
  "it",
  "s3m",
  "xm",
  "skp",
  "avif",
  "eps",
  "lzh",
  "pgp",
  "asar",
  "stl",
  "chm",
  "3mf",
  "zst",
  "jxl",
  "vcf",
  "jls",
  "pst",
  "dwg",
  "parquet",
  "class",
  "arj",
  "cpio",
  "ace",
  "avro",
  "icc",
  "fbx",
  "vsdx",
  "vtt",
  "apk",
  "drc",
  "lz4",
  "potx",
  "xltx",
  "dotx",
  "xltm",
  "ott",
  "ots",
  "otp",
  "odg",
  "otg",
  "xlsm",
  "docm",
  "dotm",
  "potm",
  "pptm",
  "jar",
  "rm",
  "ppsm",
  "ppsx"
], kp = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/flif",
  "image/x-xcf",
  "image/x-canon-cr2",
  "image/x-canon-cr3",
  "image/tiff",
  "image/bmp",
  "image/vnd.ms-photo",
  "image/vnd.adobe.photoshop",
  "application/x-indesign",
  "application/epub+zip",
  "application/x-xpinstall",
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
  "application/vnd.oasis.opendocument.text",
  "application/vnd.oasis.opendocument.spreadsheet",
  "application/vnd.oasis.opendocument.presentation",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
  "application/zip",
  "application/x-tar",
  "application/x-rar-compressed",
  "application/gzip",
  "application/x-bzip2",
  "application/x-7z-compressed",
  "application/x-apple-diskimage",
  "application/vnd.apache.arrow.file",
  "video/mp4",
  "audio/midi",
  "video/matroska",
  "video/webm",
  "video/quicktime",
  "video/vnd.avi",
  "audio/wav",
  "audio/qcelp",
  "audio/x-ms-asf",
  "video/x-ms-asf",
  "application/vnd.ms-asf",
  "video/mpeg",
  "video/3gpp",
  "audio/mpeg",
  "audio/mp4",
  // RFC 4337
  "video/ogg",
  "audio/ogg",
  "audio/ogg; codecs=opus",
  "application/ogg",
  "audio/flac",
  "audio/ape",
  "audio/wavpack",
  "audio/amr",
  "application/pdf",
  "application/x-elf",
  "application/x-mach-binary",
  "application/x-msdownload",
  "application/x-shockwave-flash",
  "application/rtf",
  "application/wasm",
  "font/woff",
  "font/woff2",
  "application/vnd.ms-fontobject",
  "font/ttf",
  "font/otf",
  "font/collection",
  "image/x-icon",
  "video/x-flv",
  "application/postscript",
  "application/eps",
  "application/x-xz",
  "application/x-sqlite3",
  "application/x-nintendo-nes-rom",
  "application/x-google-chrome-extension",
  "application/vnd.ms-cab-compressed",
  "application/x-deb",
  "application/x-unix-archive",
  "application/x-rpm",
  "application/x-compress",
  "application/x-lzip",
  "application/x-cfb",
  "application/x-mie",
  "application/mxf",
  "video/mp2t",
  "application/x-blender",
  "image/bpg",
  "image/j2c",
  "image/jp2",
  "image/jpx",
  "image/jpm",
  "image/mj2",
  "audio/aiff",
  "application/xml",
  "application/x-mobipocket-ebook",
  "image/heif",
  "image/heif-sequence",
  "image/heic",
  "image/heic-sequence",
  "image/icns",
  "image/ktx",
  "application/dicom",
  "audio/x-musepack",
  "text/calendar",
  "text/vcard",
  "text/vtt",
  "model/gltf-binary",
  "application/vnd.tcpdump.pcap",
  "audio/x-dsf",
  // Non-standard
  "application/x.ms.shortcut",
  // Invented by us
  "application/x.apple.alias",
  // Invented by us
  "audio/x-voc",
  "audio/vnd.dolby.dd-raw",
  "audio/x-m4a",
  "image/apng",
  "image/x-olympus-orf",
  "image/x-sony-arw",
  "image/x-adobe-dng",
  "image/x-nikon-nef",
  "image/x-panasonic-rw2",
  "image/x-fujifilm-raf",
  "video/x-m4v",
  "video/3gpp2",
  "application/x-esri-shape",
  "audio/aac",
  "audio/x-it",
  "audio/x-s3m",
  "audio/x-xm",
  "video/MP1S",
  "video/MP2P",
  "application/vnd.sketchup.skp",
  "image/avif",
  "application/x-lzh-compressed",
  "application/pgp-encrypted",
  "application/x-asar",
  "model/stl",
  "application/vnd.ms-htmlhelp",
  "model/3mf",
  "image/jxl",
  "application/zstd",
  "image/jls",
  "application/vnd.ms-outlook",
  "image/vnd.dwg",
  "application/vnd.apache.parquet",
  "application/java-vm",
  "application/x-arj",
  "application/x-cpio",
  "application/x-ace-compressed",
  "application/avro",
  "application/vnd.iccprofile",
  "application/x.autodesk.fbx",
  // Invented by us
  "application/vnd.visio",
  "application/vnd.android.package-archive",
  "application/vnd.google.draco",
  // Invented by us
  "application/x-lz4",
  // Invented by us
  "application/vnd.openxmlformats-officedocument.presentationml.template",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  "application/vnd.ms-excel.template.macroenabled.12",
  "application/vnd.oasis.opendocument.text-template",
  "application/vnd.oasis.opendocument.spreadsheet-template",
  "application/vnd.oasis.opendocument.presentation-template",
  "application/vnd.oasis.opendocument.graphics",
  "application/vnd.oasis.opendocument.graphics-template",
  "application/vnd.ms-excel.sheet.macroenabled.12",
  "application/vnd.ms-word.document.macroenabled.12",
  "application/vnd.ms-word.template.macroenabled.12",
  "application/vnd.ms-powerpoint.template.macroenabled.12",
  "application/vnd.ms-powerpoint.presentation.macroenabled.12",
  "application/java-archive",
  "application/vnd.rn-realmedia"
], wr = 4100;
async function Hs(t, e) {
  return new Cp(e).fromBuffer(t);
}
function Ar(t) {
  switch (t = t.toLowerCase(), t) {
    case "application/epub+zip":
      return {
        ext: "epub",
        mime: t
      };
    case "application/vnd.oasis.opendocument.text":
      return {
        ext: "odt",
        mime: t
      };
    case "application/vnd.oasis.opendocument.text-template":
      return {
        ext: "ott",
        mime: t
      };
    case "application/vnd.oasis.opendocument.spreadsheet":
      return {
        ext: "ods",
        mime: t
      };
    case "application/vnd.oasis.opendocument.spreadsheet-template":
      return {
        ext: "ots",
        mime: t
      };
    case "application/vnd.oasis.opendocument.presentation":
      return {
        ext: "odp",
        mime: t
      };
    case "application/vnd.oasis.opendocument.presentation-template":
      return {
        ext: "otp",
        mime: t
      };
    case "application/vnd.oasis.opendocument.graphics":
      return {
        ext: "odg",
        mime: t
      };
    case "application/vnd.oasis.opendocument.graphics-template":
      return {
        ext: "otg",
        mime: t
      };
    case "application/vnd.openxmlformats-officedocument.presentationml.slideshow":
      return {
        ext: "ppsx",
        mime: t
      };
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return {
        ext: "xlsx",
        mime: t
      };
    case "application/vnd.ms-excel.sheet.macroenabled":
      return {
        ext: "xlsm",
        mime: "application/vnd.ms-excel.sheet.macroenabled.12"
      };
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.template":
      return {
        ext: "xltx",
        mime: t
      };
    case "application/vnd.ms-excel.template.macroenabled":
      return {
        ext: "xltm",
        mime: "application/vnd.ms-excel.template.macroenabled.12"
      };
    case "application/vnd.ms-powerpoint.slideshow.macroenabled":
      return {
        ext: "ppsm",
        mime: "application/vnd.ms-powerpoint.slideshow.macroenabled.12"
      };
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return {
        ext: "docx",
        mime: t
      };
    case "application/vnd.ms-word.document.macroenabled":
      return {
        ext: "docm",
        mime: "application/vnd.ms-word.document.macroenabled.12"
      };
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
      return {
        ext: "dotx",
        mime: t
      };
    case "application/vnd.ms-word.template.macroenabledtemplate":
      return {
        ext: "dotm",
        mime: "application/vnd.ms-word.template.macroenabled.12"
      };
    case "application/vnd.openxmlformats-officedocument.presentationml.template":
      return {
        ext: "potx",
        mime: t
      };
    case "application/vnd.ms-powerpoint.template.macroenabled":
      return {
        ext: "potm",
        mime: "application/vnd.ms-powerpoint.template.macroenabled.12"
      };
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return {
        ext: "pptx",
        mime: t
      };
    case "application/vnd.ms-powerpoint.presentation.macroenabled":
      return {
        ext: "pptm",
        mime: "application/vnd.ms-powerpoint.presentation.macroenabled.12"
      };
    case "application/vnd.ms-visio.drawing":
      return {
        ext: "vsdx",
        mime: "application/vnd.visio"
      };
    case "application/vnd.ms-package.3dmanufacturing-3dmodel+xml":
      return {
        ext: "3mf",
        mime: "model/3mf"
      };
  }
}
function be(t, e, r) {
  r = {
    offset: 0,
    ...r
  };
  for (const [i, n] of e.entries())
    if (r.mask) {
      if (n !== (r.mask[i] & t[i + r.offset]))
        return !1;
    } else if (n !== t[i + r.offset])
      return !1;
  return !0;
}
class Cp {
  constructor(e) {
    // Detections with a high degree of certainty in identifying the correct file type
    ir(this, "detectConfident", async (e) => {
      if (this.buffer = new Uint8Array(wr), e.fileInfo.size === void 0 && (e.fileInfo.size = Number.MAX_SAFE_INTEGER), this.tokenizer = e, await e.peekBuffer(this.buffer, { length: 12, mayBeLess: !0 }), this.check([66, 77]))
        return {
          ext: "bmp",
          mime: "image/bmp"
        };
      if (this.check([11, 119]))
        return {
          ext: "ac3",
          mime: "audio/vnd.dolby.dd-raw"
        };
      if (this.check([120, 1]))
        return {
          ext: "dmg",
          mime: "application/x-apple-diskimage"
        };
      if (this.check([77, 90]))
        return {
          ext: "exe",
          mime: "application/x-msdownload"
        };
      if (this.check([37, 33]))
        return await e.peekBuffer(this.buffer, { length: 24, mayBeLess: !0 }), this.checkString("PS-Adobe-", { offset: 2 }) && this.checkString(" EPSF-", { offset: 14 }) ? {
          ext: "eps",
          mime: "application/eps"
        } : {
          ext: "ps",
          mime: "application/postscript"
        };
      if (this.check([31, 160]) || this.check([31, 157]))
        return {
          ext: "Z",
          mime: "application/x-compress"
        };
      if (this.check([199, 113]))
        return {
          ext: "cpio",
          mime: "application/x-cpio"
        };
      if (this.check([96, 234]))
        return {
          ext: "arj",
          mime: "application/x-arj"
        };
      if (this.check([239, 187, 191]))
        return this.tokenizer.ignore(3), this.detectConfident(e);
      if (this.check([71, 73, 70]))
        return {
          ext: "gif",
          mime: "image/gif"
        };
      if (this.check([73, 73, 188]))
        return {
          ext: "jxr",
          mime: "image/vnd.ms-photo"
        };
      if (this.check([31, 139, 8]))
        return {
          ext: "gz",
          mime: "application/gzip"
        };
      if (this.check([66, 90, 104]))
        return {
          ext: "bz2",
          mime: "application/x-bzip2"
        };
      if (this.checkString("ID3")) {
        await e.ignore(6);
        const r = await e.readToken(Ep);
        return e.position + r > e.fileInfo.size ? {
          ext: "mp3",
          mime: "audio/mpeg"
        } : (await e.ignore(r), this.fromTokenizer(e));
      }
      if (this.checkString("MP+"))
        return {
          ext: "mpc",
          mime: "audio/x-musepack"
        };
      if ((this.buffer[0] === 67 || this.buffer[0] === 70) && this.check([87, 83], { offset: 1 }))
        return {
          ext: "swf",
          mime: "application/x-shockwave-flash"
        };
      if (this.check([255, 216, 255]))
        return this.check([247], { offset: 3 }) ? {
          ext: "jls",
          mime: "image/jls"
        } : {
          ext: "jpg",
          mime: "image/jpeg"
        };
      if (this.check([79, 98, 106, 1]))
        return {
          ext: "avro",
          mime: "application/avro"
        };
      if (this.checkString("FLIF"))
        return {
          ext: "flif",
          mime: "image/flif"
        };
      if (this.checkString("8BPS"))
        return {
          ext: "psd",
          mime: "image/vnd.adobe.photoshop"
        };
      if (this.checkString("MPCK"))
        return {
          ext: "mpc",
          mime: "audio/x-musepack"
        };
      if (this.checkString("FORM"))
        return {
          ext: "aif",
          mime: "audio/aiff"
        };
      if (this.checkString("icns", { offset: 0 }))
        return {
          ext: "icns",
          mime: "image/icns"
        };
      if (this.check([80, 75, 3, 4])) {
        let r;
        return await new mp(e).unzip((i) => {
          switch (i.filename) {
            case "META-INF/mozilla.rsa":
              return r = {
                ext: "xpi",
                mime: "application/x-xpinstall"
              }, {
                stop: !0
              };
            case "META-INF/MANIFEST.MF":
              return r = {
                ext: "jar",
                mime: "application/java-archive"
              }, {
                stop: !0
              };
            case "mimetype":
              return {
                async handler(n) {
                  const s = new TextDecoder("utf-8").decode(n).trim();
                  r = Ar(s);
                },
                stop: !0
              };
            case "[Content_Types].xml":
              return {
                async handler(n) {
                  let s = new TextDecoder("utf-8").decode(n);
                  const a = s.indexOf('.main+xml"');
                  if (a === -1) {
                    const o = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml";
                    s.includes(`ContentType="${o}"`) && (r = Ar(o));
                  } else {
                    s = s.slice(0, Math.max(0, a));
                    const o = s.lastIndexOf('"'), c = s.slice(Math.max(0, o + 1));
                    r = Ar(c);
                  }
                },
                stop: !0
              };
            default:
              return /classes\d*\.dex/.test(i.filename) ? (r = {
                ext: "apk",
                mime: "application/vnd.android.package-archive"
              }, { stop: !0 }) : {};
          }
        }), r ?? {
          ext: "zip",
          mime: "application/zip"
        };
      }
      if (this.checkString("OggS")) {
        await e.ignore(28);
        const r = new Uint8Array(8);
        return await e.readBuffer(r), be(r, [79, 112, 117, 115, 72, 101, 97, 100]) ? {
          ext: "opus",
          mime: "audio/ogg; codecs=opus"
        } : be(r, [128, 116, 104, 101, 111, 114, 97]) ? {
          ext: "ogv",
          mime: "video/ogg"
        } : be(r, [1, 118, 105, 100, 101, 111, 0]) ? {
          ext: "ogm",
          mime: "video/ogg"
        } : be(r, [127, 70, 76, 65, 67]) ? {
          ext: "oga",
          mime: "audio/ogg"
        } : be(r, [83, 112, 101, 101, 120, 32, 32]) ? {
          ext: "spx",
          mime: "audio/ogg"
        } : be(r, [1, 118, 111, 114, 98, 105, 115]) ? {
          ext: "ogg",
          mime: "audio/ogg"
        } : {
          ext: "ogx",
          mime: "application/ogg"
        };
      }
      if (this.check([80, 75]) && (this.buffer[2] === 3 || this.buffer[2] === 5 || this.buffer[2] === 7) && (this.buffer[3] === 4 || this.buffer[3] === 6 || this.buffer[3] === 8))
        return {
          ext: "zip",
          mime: "application/zip"
        };
      if (this.checkString("MThd"))
        return {
          ext: "mid",
          mime: "audio/midi"
        };
      if (this.checkString("wOFF") && (this.check([0, 1, 0, 0], { offset: 4 }) || this.checkString("OTTO", { offset: 4 })))
        return {
          ext: "woff",
          mime: "font/woff"
        };
      if (this.checkString("wOF2") && (this.check([0, 1, 0, 0], { offset: 4 }) || this.checkString("OTTO", { offset: 4 })))
        return {
          ext: "woff2",
          mime: "font/woff2"
        };
      if (this.check([212, 195, 178, 161]) || this.check([161, 178, 195, 212]))
        return {
          ext: "pcap",
          mime: "application/vnd.tcpdump.pcap"
        };
      if (this.checkString("DSD "))
        return {
          ext: "dsf",
          mime: "audio/x-dsf"
          // Non-standard
        };
      if (this.checkString("LZIP"))
        return {
          ext: "lz",
          mime: "application/x-lzip"
        };
      if (this.checkString("fLaC"))
        return {
          ext: "flac",
          mime: "audio/flac"
        };
      if (this.check([66, 80, 71, 251]))
        return {
          ext: "bpg",
          mime: "image/bpg"
        };
      if (this.checkString("wvpk"))
        return {
          ext: "wv",
          mime: "audio/wavpack"
        };
      if (this.checkString("%PDF"))
        return {
          ext: "pdf",
          mime: "application/pdf"
        };
      if (this.check([0, 97, 115, 109]))
        return {
          ext: "wasm",
          mime: "application/wasm"
        };
      if (this.check([73, 73])) {
        const r = await this.readTiffHeader(!1);
        if (r)
          return r;
      }
      if (this.check([77, 77])) {
        const r = await this.readTiffHeader(!0);
        if (r)
          return r;
      }
      if (this.checkString("MAC "))
        return {
          ext: "ape",
          mime: "audio/ape"
        };
      if (this.check([26, 69, 223, 163])) {
        async function r() {
          const o = await e.peekNumber(Xe);
          let c = 128, p = 0;
          for (; !(o & c) && c !== 0; )
            ++p, c >>= 1;
          const l = new Uint8Array(p + 1);
          return await e.readBuffer(l), l;
        }
        async function i() {
          const o = await r(), c = await r();
          c[0] ^= 128 >> c.length - 1;
          const p = Math.min(6, c.length), l = new DataView(o.buffer), f = new DataView(c.buffer, c.length - p, p);
          return {
            id: bn(l),
            len: bn(f)
          };
        }
        async function n(o) {
          for (; o > 0; ) {
            const c = await i();
            if (c.id === 17026)
              return (await e.readToken(new J(c.len))).replaceAll(/\00.*$/g, "");
            await e.ignore(c.len), --o;
          }
        }
        const s = await i();
        switch (await n(s.len)) {
          case "webm":
            return {
              ext: "webm",
              mime: "video/webm"
            };
          case "matroska":
            return {
              ext: "mkv",
              mime: "video/matroska"
            };
          default:
            return;
        }
      }
      if (this.checkString("SQLi"))
        return {
          ext: "sqlite",
          mime: "application/x-sqlite3"
        };
      if (this.check([78, 69, 83, 26]))
        return {
          ext: "nes",
          mime: "application/x-nintendo-nes-rom"
        };
      if (this.checkString("Cr24"))
        return {
          ext: "crx",
          mime: "application/x-google-chrome-extension"
        };
      if (this.checkString("MSCF") || this.checkString("ISc("))
        return {
          ext: "cab",
          mime: "application/vnd.ms-cab-compressed"
        };
      if (this.check([237, 171, 238, 219]))
        return {
          ext: "rpm",
          mime: "application/x-rpm"
        };
      if (this.check([197, 208, 211, 198]))
        return {
          ext: "eps",
          mime: "application/eps"
        };
      if (this.check([40, 181, 47, 253]))
        return {
          ext: "zst",
          mime: "application/zstd"
        };
      if (this.check([127, 69, 76, 70]))
        return {
          ext: "elf",
          mime: "application/x-elf"
        };
      if (this.check([33, 66, 68, 78]))
        return {
          ext: "pst",
          mime: "application/vnd.ms-outlook"
        };
      if (this.checkString("PAR1") || this.checkString("PARE"))
        return {
          ext: "parquet",
          mime: "application/vnd.apache.parquet"
        };
      if (this.checkString("ttcf"))
        return {
          ext: "ttc",
          mime: "font/collection"
        };
      if (this.check([207, 250, 237, 254]))
        return {
          ext: "macho",
          mime: "application/x-mach-binary"
        };
      if (this.check([4, 34, 77, 24]))
        return {
          ext: "lz4",
          mime: "application/x-lz4"
          // Invented by us
        };
      if (this.check([79, 84, 84, 79, 0]))
        return {
          ext: "otf",
          mime: "font/otf"
        };
      if (this.checkString("#!AMR"))
        return {
          ext: "amr",
          mime: "audio/amr"
        };
      if (this.checkString("{\\rtf"))
        return {
          ext: "rtf",
          mime: "application/rtf"
        };
      if (this.check([70, 76, 86, 1]))
        return {
          ext: "flv",
          mime: "video/x-flv"
        };
      if (this.checkString("IMPM"))
        return {
          ext: "it",
          mime: "audio/x-it"
        };
      if (this.checkString("-lh0-", { offset: 2 }) || this.checkString("-lh1-", { offset: 2 }) || this.checkString("-lh2-", { offset: 2 }) || this.checkString("-lh3-", { offset: 2 }) || this.checkString("-lh4-", { offset: 2 }) || this.checkString("-lh5-", { offset: 2 }) || this.checkString("-lh6-", { offset: 2 }) || this.checkString("-lh7-", { offset: 2 }) || this.checkString("-lzs-", { offset: 2 }) || this.checkString("-lz4-", { offset: 2 }) || this.checkString("-lz5-", { offset: 2 }) || this.checkString("-lhd-", { offset: 2 }))
        return {
          ext: "lzh",
          mime: "application/x-lzh-compressed"
        };
      if (this.check([0, 0, 1, 186])) {
        if (this.check([33], { offset: 4, mask: [241] }))
          return {
            ext: "mpg",
            // May also be .ps, .mpeg
            mime: "video/MP1S"
          };
        if (this.check([68], { offset: 4, mask: [196] }))
          return {
            ext: "mpg",
            // May also be .mpg, .m2p, .vob or .sub
            mime: "video/MP2P"
          };
      }
      if (this.checkString("ITSF"))
        return {
          ext: "chm",
          mime: "application/vnd.ms-htmlhelp"
        };
      if (this.check([202, 254, 186, 190]))
        return {
          ext: "class",
          mime: "application/java-vm"
        };
      if (this.checkString(".RMF"))
        return {
          ext: "rm",
          mime: "application/vnd.rn-realmedia"
        };
      if (this.checkString("DRACO"))
        return {
          ext: "drc",
          mime: "application/vnd.google.draco"
          // Invented by us
        };
      if (this.check([253, 55, 122, 88, 90, 0]))
        return {
          ext: "xz",
          mime: "application/x-xz"
        };
      if (this.checkString("<?xml "))
        return {
          ext: "xml",
          mime: "application/xml"
        };
      if (this.check([55, 122, 188, 175, 39, 28]))
        return {
          ext: "7z",
          mime: "application/x-7z-compressed"
        };
      if (this.check([82, 97, 114, 33, 26, 7]) && (this.buffer[6] === 0 || this.buffer[6] === 1))
        return {
          ext: "rar",
          mime: "application/x-rar-compressed"
        };
      if (this.checkString("solid "))
        return {
          ext: "stl",
          mime: "model/stl"
        };
      if (this.checkString("AC")) {
        const r = new J(4, "latin1").get(this.buffer, 2);
        if (r.match("^d*") && r >= 1e3 && r <= 1050)
          return {
            ext: "dwg",
            mime: "image/vnd.dwg"
          };
      }
      if (this.checkString("070707"))
        return {
          ext: "cpio",
          mime: "application/x-cpio"
        };
      if (this.checkString("BLENDER"))
        return {
          ext: "blend",
          mime: "application/x-blender"
        };
      if (this.checkString("!<arch>"))
        return await e.ignore(8), await e.readToken(new J(13, "ascii")) === "debian-binary" ? {
          ext: "deb",
          mime: "application/x-deb"
        } : {
          ext: "ar",
          mime: "application/x-unix-archive"
        };
      if (this.checkString("WEBVTT") && // One of LF, CR, tab, space, or end of file must follow "WEBVTT" per the spec (see `fixture/fixture-vtt-*.vtt` for examples). Note that `\0` is technically the null character (there is no such thing as an EOF character). However, checking for `\0` gives us the same result as checking for the end of the stream.
      [`
`, "\r", "	", " ", "\0"].some((r) => this.checkString(r, { offset: 6 })))
        return {
          ext: "vtt",
          mime: "text/vtt"
        };
      if (this.check([137, 80, 78, 71, 13, 10, 26, 10])) {
        await e.ignore(8);
        async function r() {
          return {
            length: await e.readToken(Os),
            type: await e.readToken(new J(4, "latin1"))
          };
        }
        do {
          const i = await r();
          if (i.length < 0)
            return;
          switch (i.type) {
            case "IDAT":
              return {
                ext: "png",
                mime: "image/png"
              };
            case "acTL":
              return {
                ext: "apng",
                mime: "image/apng"
              };
            default:
              await e.ignore(i.length + 4);
          }
        } while (e.position + 8 < e.fileInfo.size);
        return {
          ext: "png",
          mime: "image/png"
        };
      }
      if (this.check([65, 82, 82, 79, 87, 49, 0, 0]))
        return {
          ext: "arrow",
          mime: "application/vnd.apache.arrow.file"
        };
      if (this.check([103, 108, 84, 70, 2, 0, 0, 0]))
        return {
          ext: "glb",
          mime: "model/gltf-binary"
        };
      if (this.check([102, 114, 101, 101], { offset: 4 }) || this.check([109, 100, 97, 116], { offset: 4 }) || this.check([109, 111, 111, 118], { offset: 4 }) || this.check([119, 105, 100, 101], { offset: 4 }))
        return {
          ext: "mov",
          mime: "video/quicktime"
        };
      if (this.check([73, 73, 82, 79, 8, 0, 0, 0, 24]))
        return {
          ext: "orf",
          mime: "image/x-olympus-orf"
        };
      if (this.checkString("gimp xcf "))
        return {
          ext: "xcf",
          mime: "image/x-xcf"
        };
      if (this.checkString("ftyp", { offset: 4 }) && this.buffer[8] & 96) {
        const r = new J(4, "latin1").get(this.buffer, 8).replace("\0", " ").trim();
        switch (r) {
          case "avif":
          case "avis":
            return { ext: "avif", mime: "image/avif" };
          case "mif1":
            return { ext: "heic", mime: "image/heif" };
          case "msf1":
            return { ext: "heic", mime: "image/heif-sequence" };
          case "heic":
          case "heix":
            return { ext: "heic", mime: "image/heic" };
          case "hevc":
          case "hevx":
            return { ext: "heic", mime: "image/heic-sequence" };
          case "qt":
            return { ext: "mov", mime: "video/quicktime" };
          case "M4V":
          case "M4VH":
          case "M4VP":
            return { ext: "m4v", mime: "video/x-m4v" };
          case "M4P":
            return { ext: "m4p", mime: "video/mp4" };
          case "M4B":
            return { ext: "m4b", mime: "audio/mp4" };
          case "M4A":
            return { ext: "m4a", mime: "audio/x-m4a" };
          case "F4V":
            return { ext: "f4v", mime: "video/mp4" };
          case "F4P":
            return { ext: "f4p", mime: "video/mp4" };
          case "F4A":
            return { ext: "f4a", mime: "audio/mp4" };
          case "F4B":
            return { ext: "f4b", mime: "audio/mp4" };
          case "crx":
            return { ext: "cr3", mime: "image/x-canon-cr3" };
          default:
            return r.startsWith("3g") ? r.startsWith("3g2") ? { ext: "3g2", mime: "video/3gpp2" } : { ext: "3gp", mime: "video/3gpp" } : { ext: "mp4", mime: "video/mp4" };
        }
      }
      if (this.check([82, 73, 70, 70])) {
        if (this.checkString("WEBP", { offset: 8 }))
          return {
            ext: "webp",
            mime: "image/webp"
          };
        if (this.check([65, 86, 73], { offset: 8 }))
          return {
            ext: "avi",
            mime: "video/vnd.avi"
          };
        if (this.check([87, 65, 86, 69], { offset: 8 }))
          return {
            ext: "wav",
            mime: "audio/wav"
          };
        if (this.check([81, 76, 67, 77], { offset: 8 }))
          return {
            ext: "qcp",
            mime: "audio/qcelp"
          };
      }
      if (this.check([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216]))
        return {
          ext: "rw2",
          mime: "image/x-panasonic-rw2"
        };
      if (this.check([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
        async function r() {
          const i = new Uint8Array(16);
          return await e.readBuffer(i), {
            id: i,
            size: Number(await e.readToken(Ms))
          };
        }
        for (await e.ignore(30); e.position + 24 < e.fileInfo.size; ) {
          const i = await r();
          let n = i.size - 24;
          if (be(i.id, [145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101])) {
            const s = new Uint8Array(16);
            if (n -= await e.readBuffer(s), be(s, [64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43]))
              return {
                ext: "asf",
                mime: "audio/x-ms-asf"
              };
            if (be(s, [192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43]))
              return {
                ext: "asf",
                mime: "video/x-ms-asf"
              };
            break;
          }
          await e.ignore(n);
        }
        return {
          ext: "asf",
          mime: "application/vnd.ms-asf"
        };
      }
      if (this.check([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]))
        return {
          ext: "ktx",
          mime: "image/ktx"
        };
      if ((this.check([126, 16, 4]) || this.check([126, 24, 4])) && this.check([48, 77, 73, 69], { offset: 4 }))
        return {
          ext: "mie",
          mime: "application/x-mie"
        };
      if (this.check([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 }))
        return {
          ext: "shp",
          mime: "application/x-esri-shape"
        };
      if (this.check([255, 79, 255, 81]))
        return {
          ext: "j2c",
          mime: "image/j2c"
        };
      if (this.check([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10]))
        switch (await e.ignore(20), await e.readToken(new J(4, "ascii"))) {
          case "jp2 ":
            return {
              ext: "jp2",
              mime: "image/jp2"
            };
          case "jpx ":
            return {
              ext: "jpx",
              mime: "image/jpx"
            };
          case "jpm ":
            return {
              ext: "jpm",
              mime: "image/jpm"
            };
          case "mjp2":
            return {
              ext: "mj2",
              mime: "image/mj2"
            };
          default:
            return;
        }
      if (this.check([255, 10]) || this.check([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10]))
        return {
          ext: "jxl",
          mime: "image/jxl"
        };
      if (this.check([254, 255]))
        return this.check([0, 60, 0, 63, 0, 120, 0, 109, 0, 108], { offset: 2 }) ? {
          ext: "xml",
          mime: "application/xml"
        } : void 0;
      if (this.check([208, 207, 17, 224, 161, 177, 26, 225]))
        return {
          ext: "cfb",
          mime: "application/x-cfb"
        };
      if (await e.peekBuffer(this.buffer, { length: Math.min(256, e.fileInfo.size), mayBeLess: !0 }), this.check([97, 99, 115, 112], { offset: 36 }))
        return {
          ext: "icc",
          mime: "application/vnd.iccprofile"
        };
      if (this.checkString("**ACE", { offset: 7 }) && this.checkString("**", { offset: 12 }))
        return {
          ext: "ace",
          mime: "application/x-ace-compressed"
        };
      if (this.checkString("BEGIN:")) {
        if (this.checkString("VCARD", { offset: 6 }))
          return {
            ext: "vcf",
            mime: "text/vcard"
          };
        if (this.checkString("VCALENDAR", { offset: 6 }))
          return {
            ext: "ics",
            mime: "text/calendar"
          };
      }
      if (this.checkString("FUJIFILMCCD-RAW"))
        return {
          ext: "raf",
          mime: "image/x-fujifilm-raf"
        };
      if (this.checkString("Extended Module:"))
        return {
          ext: "xm",
          mime: "audio/x-xm"
        };
      if (this.checkString("Creative Voice File"))
        return {
          ext: "voc",
          mime: "audio/x-voc"
        };
      if (this.check([4, 0, 0, 0]) && this.buffer.length >= 16) {
        const r = new DataView(this.buffer.buffer).getUint32(12, !0);
        if (r > 12 && this.buffer.length >= r + 16)
          try {
            const i = new TextDecoder().decode(this.buffer.subarray(16, r + 16));
            if (JSON.parse(i).files)
              return {
                ext: "asar",
                mime: "application/x-asar"
              };
          } catch {
          }
      }
      if (this.check([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2]))
        return {
          ext: "mxf",
          mime: "application/mxf"
        };
      if (this.checkString("SCRM", { offset: 44 }))
        return {
          ext: "s3m",
          mime: "audio/x-s3m"
        };
      if (this.check([71]) && this.check([71], { offset: 188 }))
        return {
          ext: "mts",
          mime: "video/mp2t"
        };
      if (this.check([71], { offset: 4 }) && this.check([71], { offset: 196 }))
        return {
          ext: "mts",
          mime: "video/mp2t"
        };
      if (this.check([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 }))
        return {
          ext: "mobi",
          mime: "application/x-mobipocket-ebook"
        };
      if (this.check([68, 73, 67, 77], { offset: 128 }))
        return {
          ext: "dcm",
          mime: "application/dicom"
        };
      if (this.check([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70]))
        return {
          ext: "lnk",
          mime: "application/x.ms.shortcut"
          // Invented by us
        };
      if (this.check([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0]))
        return {
          ext: "alias",
          mime: "application/x.apple.alias"
          // Invented by us
        };
      if (this.checkString("Kaydara FBX Binary  \0"))
        return {
          ext: "fbx",
          mime: "application/x.autodesk.fbx"
          // Invented by us
        };
      if (this.check([76, 80], { offset: 34 }) && (this.check([0, 0, 1], { offset: 8 }) || this.check([1, 0, 2], { offset: 8 }) || this.check([2, 0, 2], { offset: 8 })))
        return {
          ext: "eot",
          mime: "application/vnd.ms-fontobject"
        };
      if (this.check([6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29]))
        return {
          ext: "indd",
          mime: "application/x-indesign"
        };
      if (await e.peekBuffer(this.buffer, { length: Math.min(512, e.fileInfo.size), mayBeLess: !0 }), this.checkString("ustar", { offset: 257 }) && (this.checkString("\0", { offset: 262 }) || this.checkString(" ", { offset: 262 })) || this.check([0, 0, 0, 0, 0, 0], { offset: 257 }) && Ap(this.buffer))
        return {
          ext: "tar",
          mime: "application/x-tar"
        };
      if (this.check([255, 254]))
        return this.check([60, 0, 63, 0, 120, 0, 109, 0, 108, 0], { offset: 2 }) ? {
          ext: "xml",
          mime: "application/xml"
        } : this.check([255, 14, 83, 0, 107, 0, 101, 0, 116, 0, 99, 0, 104, 0, 85, 0, 112, 0, 32, 0, 77, 0, 111, 0, 100, 0, 101, 0, 108, 0], { offset: 2 }) ? {
          ext: "skp",
          mime: "application/vnd.sketchup.skp"
        } : void 0;
      if (this.checkString("-----BEGIN PGP MESSAGE-----"))
        return {
          ext: "pgp",
          mime: "application/pgp-encrypted"
        };
    });
    // Detections with limited supporting data, resulting in a higher likelihood of false positives
    ir(this, "detectImprecise", async (e) => {
      if (this.buffer = new Uint8Array(wr), await e.peekBuffer(this.buffer, { length: Math.min(8, e.fileInfo.size), mayBeLess: !0 }), this.check([0, 0, 1, 186]) || this.check([0, 0, 1, 179]))
        return {
          ext: "mpg",
          mime: "video/mpeg"
        };
      if (this.check([0, 1, 0, 0, 0]))
        return {
          ext: "ttf",
          mime: "font/ttf"
        };
      if (this.check([0, 0, 1, 0]))
        return {
          ext: "ico",
          mime: "image/x-icon"
        };
      if (this.check([0, 0, 2, 0]))
        return {
          ext: "cur",
          mime: "image/x-icon"
        };
      if (await e.peekBuffer(this.buffer, { length: Math.min(2 + this.options.mpegOffsetTolerance, e.fileInfo.size), mayBeLess: !0 }), this.buffer.length >= 2 + this.options.mpegOffsetTolerance)
        for (let r = 0; r <= this.options.mpegOffsetTolerance; ++r) {
          const i = this.scanMpeg(r);
          if (i)
            return i;
        }
    });
    this.options = {
      mpegOffsetTolerance: 0,
      ...e
    }, this.detectors = [
      ...(e == null ? void 0 : e.customDetectors) ?? [],
      { id: "core", detect: this.detectConfident },
      { id: "core.imprecise", detect: this.detectImprecise }
    ], this.tokenizerOptions = {
      abortSignal: e == null ? void 0 : e.signal
    };
  }
  async fromTokenizer(e) {
    const r = e.position;
    for (const i of this.detectors) {
      const n = await i.detect(e);
      if (n)
        return n;
      if (r !== e.position)
        return;
    }
  }
  async fromBuffer(e) {
    if (!(e instanceof Uint8Array || e instanceof ArrayBuffer))
      throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof e}\``);
    const r = e instanceof Uint8Array ? e : new Uint8Array(e);
    if ((r == null ? void 0 : r.length) > 1)
      return this.fromTokenizer(zr(r, this.tokenizerOptions));
  }
  async fromBlob(e) {
    return this.fromStream(e.stream());
  }
  async fromStream(e) {
    const r = await lf(e, this.tokenizerOptions);
    try {
      return await this.fromTokenizer(r);
    } finally {
      await r.close();
    }
  }
  async toDetectionStream(e, r) {
    const { sampleSize: i = wr } = r;
    let n, s;
    const a = e.getReader({ mode: "byob" });
    try {
      const { value: p, done: l } = await a.read(new Uint8Array(i));
      if (s = p, !l && p)
        try {
          n = await this.fromBuffer(p.subarray(0, i));
        } catch (f) {
          if (!(f instanceof ie))
            throw f;
          n = void 0;
        }
      s = p;
    } finally {
      a.releaseLock();
    }
    const o = new TransformStream({
      async start(p) {
        p.enqueue(s);
      },
      transform(p, l) {
        l.enqueue(p);
      }
    }), c = e.pipeThrough(o);
    return c.fileType = n, c;
  }
  check(e, r) {
    return be(this.buffer, e, r);
  }
  checkString(e, r) {
    return this.check(wp(e), r);
  }
  async readTiffTag(e) {
    const r = await this.tokenizer.readToken(e ? Ge : z);
    switch (this.tokenizer.ignore(10), r) {
      case 50341:
        return {
          ext: "arw",
          mime: "image/x-sony-arw"
        };
      case 50706:
        return {
          ext: "dng",
          mime: "image/x-adobe-dng"
        };
    }
  }
  async readTiffIFD(e) {
    const r = await this.tokenizer.readToken(e ? Ge : z);
    for (let i = 0; i < r; ++i) {
      const n = await this.readTiffTag(e);
      if (n)
        return n;
    }
  }
  async readTiffHeader(e) {
    const r = (e ? Ge : z).get(this.buffer, 2), i = (e ? Lt : M).get(this.buffer, 4);
    if (r === 42) {
      if (i >= 6) {
        if (this.checkString("CR", { offset: 8 }))
          return {
            ext: "cr2",
            mime: "image/x-canon-cr2"
          };
        if (i >= 8) {
          const s = (e ? Ge : z).get(this.buffer, 8), a = (e ? Ge : z).get(this.buffer, 10);
          if (s === 28 && a === 254 || s === 31 && a === 11)
            return {
              ext: "nef",
              mime: "image/x-nikon-nef"
            };
        }
      }
      return await this.tokenizer.ignore(i), await this.readTiffIFD(e) ?? {
        ext: "tif",
        mime: "image/tiff"
      };
    }
    if (r === 43)
      return {
        ext: "tif",
        mime: "image/tiff"
      };
  }
  /**
  	Scan check MPEG 1 or 2 Layer 3 header, or 'layer 0' for ADTS (MPEG sync-word 0xFFE).
  
  	@param offset - Offset to scan for sync-preamble.
  	@returns {{ext: string, mime: string}}
  	*/
  scanMpeg(e) {
    if (this.check([255, 224], { offset: e, mask: [255, 224] })) {
      if (this.check([16], { offset: e + 1, mask: [22] }))
        return this.check([8], { offset: e + 1, mask: [8] }) ? {
          ext: "aac",
          mime: "audio/aac"
        } : {
          ext: "aac",
          mime: "audio/aac"
        };
      if (this.check([2], { offset: e + 1, mask: [6] }))
        return {
          ext: "mp3",
          mime: "audio/mpeg"
        };
      if (this.check([4], { offset: e + 1, mask: [6] }))
        return {
          ext: "mp2",
          mime: "audio/mpeg"
        };
      if (this.check([6], { offset: e + 1, mask: [6] }))
        return {
          ext: "mp1",
          mime: "audio/mpeg"
        };
    }
  }
}
new Set(Rp);
new Set(kp);
var Ii = {};
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var Tn = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g, Ip = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/, Gs = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, Pp = /\\([\u000b\u0020-\u00ff])/g, Op = /([\\"])/g, js = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
Ii.format = Mp;
Ii.parse = Dp;
function Mp(t) {
  if (!t || typeof t != "object")
    throw new TypeError("argument obj is required");
  var e = t.parameters, r = t.type;
  if (!r || !js.test(r))
    throw new TypeError("invalid type");
  var i = r;
  if (e && typeof e == "object")
    for (var n, s = Object.keys(e).sort(), a = 0; a < s.length; a++) {
      if (n = s[a], !Gs.test(n))
        throw new TypeError("invalid parameter name");
      i += "; " + n + "=" + Lp(e[n]);
    }
  return i;
}
function Dp(t) {
  if (!t)
    throw new TypeError("argument string is required");
  var e = typeof t == "object" ? Fp(t) : t;
  if (typeof e != "string")
    throw new TypeError("argument string is required to be a string");
  var r = e.indexOf(";"), i = r !== -1 ? e.slice(0, r).trim() : e.trim();
  if (!js.test(i))
    throw new TypeError("invalid media type");
  var n = new Bp(i.toLowerCase());
  if (r !== -1) {
    var s, a, o;
    for (Tn.lastIndex = r; a = Tn.exec(e); ) {
      if (a.index !== r)
        throw new TypeError("invalid parameter format");
      r += a[0].length, s = a[1].toLowerCase(), o = a[2], o.charCodeAt(0) === 34 && (o = o.slice(1, -1), o.indexOf("\\") !== -1 && (o = o.replace(Pp, "$1"))), n.parameters[s] = o;
    }
    if (r !== e.length)
      throw new TypeError("invalid parameter format");
  }
  return n;
}
function Fp(t) {
  var e;
  if (typeof t.getHeader == "function" ? e = t.getHeader("content-type") : typeof t.headers == "object" && (e = t.headers && t.headers["content-type"]), typeof e != "string")
    throw new TypeError("content-type header is missing from object");
  return e;
}
function Lp(t) {
  var e = String(t);
  if (Gs.test(e))
    return e;
  if (e.length > 0 && !Ip.test(e))
    throw new TypeError("invalid parameter value");
  return '"' + e.replace(Op, "\\$1") + '"';
}
function Bp(t) {
  this.parameters = /* @__PURE__ */ Object.create(null), this.type = t;
}
/*!
 * media-typer
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */
var $p = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/, Np = Up;
function Up(t) {
  if (!t)
    throw new TypeError("argument string is required");
  if (typeof t != "string")
    throw new TypeError("argument string is required to be a string");
  var e = $p.exec(t.toLowerCase());
  if (!e)
    throw new TypeError("invalid media type");
  var r = e[1], i = e[2], n, s = i.lastIndexOf("+");
  return s !== -1 && (n = i.substr(s + 1), i = i.substr(0, s)), new zp(r, i, n);
}
function zp(t, e, r) {
  this.type = t, this.subtype = e, this.suffix = r;
}
const Im = {
  10: "shot",
  20: "scene",
  30: "track",
  40: "part",
  50: "album",
  60: "edition",
  70: "collection"
}, Ee = {
  video: 1,
  audio: 2,
  complex: 3,
  logo: 4,
  subtitle: 17,
  button: 18,
  control: 32
}, Hp = {
  [Ee.video]: "video",
  [Ee.audio]: "audio",
  [Ee.complex]: "complex",
  [Ee.logo]: "logo",
  [Ee.subtitle]: "subtitle",
  [Ee.button]: "button",
  [Ee.control]: "control"
}, dt = (t) => class extends Error {
  constructor(r) {
    super(r), this.name = t;
  }
};
class Xs extends dt("CouldNotDetermineFileTypeError") {
}
class Ws extends dt("UnsupportedFileTypeError") {
}
class Gp extends dt("UnexpectedFileContentError") {
  constructor(e, r) {
    super(r), this.fileType = e;
  }
  // Override toString to include file type information.
  toString() {
    return `${this.name} (FileType: ${this.fileType}): ${this.message}`;
  }
}
class Pi extends dt("FieldDecodingError") {
}
class qs extends dt("InternalParserError") {
}
const jp = (t) => class extends Gp {
  constructor(e) {
    super(t, e);
  }
};
function rt(t, e, r) {
  return (t[e] & 1 << r) !== 0;
}
function wn(t, e, r, i) {
  let n = e;
  if (i === "utf-16le") {
    for (; t[n] !== 0 || t[n + 1] !== 0; ) {
      if (n >= r)
        return r;
      n += 2;
    }
    return n;
  }
  for (; t[n] !== 0; ) {
    if (n >= r)
      return r;
    n++;
  }
  return n;
}
function Xp(t) {
  const e = t.indexOf("\0");
  return e === -1 ? t : t.substr(0, e);
}
function Wp(t) {
  const e = t.length;
  if (e & 1)
    throw new Pi("Buffer length must be even");
  for (let r = 0; r < e; r += 2) {
    const i = t[r];
    t[r] = t[r + 1], t[r + 1] = i;
  }
  return t;
}
function Wr(t, e) {
  if (t[0] === 255 && t[1] === 254)
    return Wr(t.subarray(2), e);
  if (e === "utf-16le" && t[0] === 254 && t[1] === 255) {
    if (t.length & 1)
      throw new Pi("Expected even number of octets for 16-bit unicode string");
    return Wr(Wp(t), e);
  }
  return new J(t.length, e).get(t, 0);
}
function Om(t) {
  return t = t.replace(/^\x00+/g, ""), t = t.replace(/\x00+$/g, ""), t;
}
function Vs(t, e, r, i) {
  const n = e + ~~(r / 8), s = r % 8;
  let a = t[n];
  a &= 255 >> s;
  const o = 8 - s, c = i - o;
  return c < 0 ? a >>= 8 - s - i : c > 0 && (a <<= c, a |= Vs(t, e, r + o, c)), a;
}
function Mm(t, e, r) {
  return Vs(t, e, r, 1) === 1;
}
function qp(t) {
  const e = [];
  for (let r = 0, i = t.length; r < i; r++) {
    const n = Number(t.charCodeAt(r)).toString(16);
    e.push(n.length === 1 ? `0${n}` : n);
  }
  return e.join(" ");
}
function Vp(t) {
  return 10 * Math.log10(t);
}
function Kp(t) {
  return 10 ** (t / 10);
}
function Yp(t) {
  const e = t.split(" ").map((r) => r.trim().toLowerCase());
  if (e.length >= 1) {
    const r = Number.parseFloat(e[0]);
    return e.length === 2 && e[1] === "db" ? {
      dB: r,
      ratio: Kp(r)
    } : {
      dB: Vp(r),
      ratio: r
    };
  }
}
const Dm = {
  0: "Other",
  1: "32x32 pixels 'file icon' (PNG only)",
  2: "Other file icon",
  3: "Cover (front)",
  4: "Cover (back)",
  5: "Leaflet page",
  6: "Media (e.g. label side of CD)",
  7: "Lead artist/lead performer/soloist",
  8: "Artist/performer",
  9: "Conductor",
  10: "Band/Orchestra",
  11: "Composer",
  12: "Lyricist/text writer",
  13: "Recording Location",
  14: "During recording",
  15: "During performance",
  16: "Movie/video screen capture",
  17: "A bright coloured fish",
  18: "Illustration",
  19: "Band/artist logotype",
  20: "Publisher/Studio logotype"
}, Zp = {
  lyrics: 1
}, Qp = {
  milliseconds: 2
}, Jp = {
  get: (t, e) => t[e + 3] & 127 | t[e + 2] << 7 | t[e + 1] << 14 | t[e] << 21,
  len: 4
}, Fm = {
  len: 10,
  get: (t, e) => ({
    // ID3v2/file identifier   "ID3"
    fileIdentifier: new J(3, "ascii").get(t, e),
    // ID3v2 versionIndex
    version: {
      major: jr.get(t, e + 3),
      revision: jr.get(t, e + 4)
    },
    // ID3v2 flags
    flags: {
      // Unsynchronisation
      unsynchronisation: rt(t, e + 5, 7),
      // Extended header
      isExtendedHeader: rt(t, e + 5, 6),
      // Experimental indicator
      expIndicator: rt(t, e + 5, 5),
      footer: rt(t, e + 5, 4)
    },
    size: Jp.get(t, e + 6)
  })
}, Lm = {
  len: 10,
  get: (t, e) => ({
    // Extended header size
    size: Lt.get(t, e),
    // Extended Flags
    extendedFlags: Ge.get(t, e + 4),
    // Size of padding
    sizeOfPadding: Lt.get(t, e + 6),
    // CRC data present
    crcDataPresent: rt(t, e + 4, 31)
  })
}, ed = {
  len: 1,
  get: (t, e) => {
    switch (t[e]) {
      case 0:
        return { encoding: "latin1" };
      case 1:
        return { encoding: "utf-16le", bom: !0 };
      case 2:
        return { encoding: "utf-16le", bom: !1 };
      case 3:
        return { encoding: "utf8", bom: !1 };
      default:
        return { encoding: "utf8", bom: !1 };
    }
  }
}, td = {
  len: 4,
  get: (t, e) => ({
    encoding: ed.get(t, e),
    language: new J(3, "latin1").get(t, e + 1)
  })
}, Bm = {
  len: 6,
  get: (t, e) => {
    const r = td.get(t, e);
    return {
      encoding: r.encoding,
      language: r.language,
      timeStampFormat: Xe.get(t, e + 4),
      contentType: Xe.get(t, e + 5)
    };
  }
}, v = {
  multiple: !1
}, Bt = {
  year: v,
  track: v,
  disk: v,
  title: v,
  artist: v,
  artists: { multiple: !0, unique: !0 },
  albumartist: v,
  album: v,
  date: v,
  originaldate: v,
  originalyear: v,
  releasedate: v,
  comment: { multiple: !0, unique: !1 },
  genre: { multiple: !0, unique: !0 },
  picture: { multiple: !0, unique: !0 },
  composer: { multiple: !0, unique: !0 },
  lyrics: { multiple: !0, unique: !1 },
  albumsort: { multiple: !1, unique: !0 },
  titlesort: { multiple: !1, unique: !0 },
  work: { multiple: !1, unique: !0 },
  artistsort: { multiple: !1, unique: !0 },
  albumartistsort: { multiple: !1, unique: !0 },
  composersort: { multiple: !1, unique: !0 },
  lyricist: { multiple: !0, unique: !0 },
  writer: { multiple: !0, unique: !0 },
  conductor: { multiple: !0, unique: !0 },
  remixer: { multiple: !0, unique: !0 },
  arranger: { multiple: !0, unique: !0 },
  engineer: { multiple: !0, unique: !0 },
  producer: { multiple: !0, unique: !0 },
  technician: { multiple: !0, unique: !0 },
  djmixer: { multiple: !0, unique: !0 },
  mixer: { multiple: !0, unique: !0 },
  label: { multiple: !0, unique: !0 },
  grouping: v,
  subtitle: { multiple: !0 },
  discsubtitle: v,
  totaltracks: v,
  totaldiscs: v,
  compilation: v,
  rating: { multiple: !0 },
  bpm: v,
  mood: v,
  media: v,
  catalognumber: { multiple: !0, unique: !0 },
  tvShow: v,
  tvShowSort: v,
  tvSeason: v,
  tvEpisode: v,
  tvEpisodeId: v,
  tvNetwork: v,
  podcast: v,
  podcasturl: v,
  releasestatus: v,
  releasetype: { multiple: !0 },
  releasecountry: v,
  script: v,
  language: v,
  copyright: v,
  license: v,
  encodedby: v,
  encodersettings: v,
  gapless: v,
  barcode: v,
  isrc: { multiple: !0 },
  asin: v,
  musicbrainz_recordingid: v,
  musicbrainz_trackid: v,
  musicbrainz_albumid: v,
  musicbrainz_artistid: { multiple: !0 },
  musicbrainz_albumartistid: { multiple: !0 },
  musicbrainz_releasegroupid: v,
  musicbrainz_workid: v,
  musicbrainz_trmid: v,
  musicbrainz_discid: v,
  acoustid_id: v,
  acoustid_fingerprint: v,
  musicip_puid: v,
  musicip_fingerprint: v,
  website: v,
  "performer:instrument": { multiple: !0, unique: !0 },
  averageLevel: v,
  peakLevel: v,
  notes: { multiple: !0, unique: !1 },
  key: v,
  originalalbum: v,
  originalartist: v,
  discogs_artist_id: { multiple: !0, unique: !0 },
  discogs_release_id: v,
  discogs_label_id: v,
  discogs_master_release_id: v,
  discogs_votes: v,
  discogs_rating: v,
  replaygain_track_peak: v,
  replaygain_track_gain: v,
  replaygain_album_peak: v,
  replaygain_album_gain: v,
  replaygain_track_minmax: v,
  replaygain_album_minmax: v,
  replaygain_undo: v,
  description: { multiple: !0 },
  longDescription: v,
  category: { multiple: !0 },
  hdVideo: v,
  keywords: { multiple: !0 },
  movement: v,
  movementIndex: v,
  movementTotal: v,
  podcastId: v,
  showMovement: v,
  stik: v
};
function rd(t) {
  return Bt[t] && !Bt[t].multiple;
}
function id(t) {
  return !Bt[t].multiple || Bt[t].unique || !1;
}
class ue {
  static toIntOrNull(e) {
    const r = Number.parseInt(e, 10);
    return Number.isNaN(r) ? null : r;
  }
  // TODO: a string of 1of1 would fail to be converted
  // converts 1/10 to no : 1, of : 10
  // or 1 to no : 1, of : 0
  static normalizeTrack(e) {
    const r = e.toString().split("/");
    return {
      no: Number.parseInt(r[0], 10) || null,
      of: Number.parseInt(r[1], 10) || null
    };
  }
  constructor(e, r) {
    this.tagTypes = e, this.tagMap = r;
  }
  /**
   * Process and set common tags
   * write common tags to
   * @param tag Native tag
   * @param warnings Register warnings
   * @return common name
   */
  mapGenericTag(e, r) {
    e = { id: e.id, value: e.value }, this.postMap(e, r);
    const i = this.getCommonName(e.id);
    return i ? { id: i, value: e.value } : null;
  }
  /**
   * Convert native tag key to common tag key
   * @param tag Native header tag
   * @return common tag name (alias)
   */
  getCommonName(e) {
    return this.tagMap[e];
  }
  /**
   * Handle post mapping exceptions / correction
   * @param tag Tag e.g. {"©alb", "Buena Vista Social Club")
   * @param warnings Used to register warnings
   */
  postMap(e, r) {
  }
}
ue.maxRatingScore = 1;
const nd = {
  title: "title",
  artist: "artist",
  album: "album",
  year: "year",
  comment: "comment",
  track: "track",
  genre: "genre"
};
class sd extends ue {
  constructor() {
    super(["ID3v1"], nd);
  }
}
class mt extends ue {
  constructor(e, r) {
    const i = {};
    for (const n of Object.keys(r))
      i[n.toUpperCase()] = r[n];
    super(e, i);
  }
  /**
   * @tag  Native header tag
   * @return common tag name (alias)
   */
  getCommonName(e) {
    return this.tagMap[e.toUpperCase()];
  }
}
const ad = {
  // id3v2.3
  TIT2: "title",
  TPE1: "artist",
  "TXXX:Artists": "artists",
  TPE2: "albumartist",
  TALB: "album",
  TDRV: "date",
  // [ 'date', 'year' ] ToDo: improve 'year' mapping
  /**
   * Original release year
   */
  TORY: "originalyear",
  TPOS: "disk",
  TCON: "genre",
  APIC: "picture",
  TCOM: "composer",
  USLT: "lyrics",
  TSOA: "albumsort",
  TSOT: "titlesort",
  TOAL: "originalalbum",
  TSOP: "artistsort",
  TSO2: "albumartistsort",
  TSOC: "composersort",
  TEXT: "lyricist",
  "TXXX:Writer": "writer",
  TPE3: "conductor",
  // 'IPLS:instrument': 'performer:instrument', // ToDo
  TPE4: "remixer",
  "IPLS:arranger": "arranger",
  "IPLS:engineer": "engineer",
  "IPLS:producer": "producer",
  "IPLS:DJ-mix": "djmixer",
  "IPLS:mix": "mixer",
  TPUB: "label",
  TIT1: "grouping",
  TIT3: "subtitle",
  TRCK: "track",
  TCMP: "compilation",
  POPM: "rating",
  TBPM: "bpm",
  TMED: "media",
  "TXXX:CATALOGNUMBER": "catalognumber",
  "TXXX:MusicBrainz Album Status": "releasestatus",
  "TXXX:MusicBrainz Album Type": "releasetype",
  /**
   * Release country as documented: https://picard.musicbrainz.org/docs/mappings/#cite_note-0
   */
  "TXXX:MusicBrainz Album Release Country": "releasecountry",
  /**
   * Release country as implemented // ToDo: report
   */
  "TXXX:RELEASECOUNTRY": "releasecountry",
  "TXXX:SCRIPT": "script",
  TLAN: "language",
  TCOP: "copyright",
  WCOP: "license",
  TENC: "encodedby",
  TSSE: "encodersettings",
  "TXXX:BARCODE": "barcode",
  "TXXX:ISRC": "isrc",
  TSRC: "isrc",
  "TXXX:ASIN": "asin",
  "TXXX:originalyear": "originalyear",
  "UFID:http://musicbrainz.org": "musicbrainz_recordingid",
  "TXXX:MusicBrainz Release Track Id": "musicbrainz_trackid",
  "TXXX:MusicBrainz Album Id": "musicbrainz_albumid",
  "TXXX:MusicBrainz Artist Id": "musicbrainz_artistid",
  "TXXX:MusicBrainz Album Artist Id": "musicbrainz_albumartistid",
  "TXXX:MusicBrainz Release Group Id": "musicbrainz_releasegroupid",
  "TXXX:MusicBrainz Work Id": "musicbrainz_workid",
  "TXXX:MusicBrainz TRM Id": "musicbrainz_trmid",
  "TXXX:MusicBrainz Disc Id": "musicbrainz_discid",
  "TXXX:ACOUSTID_ID": "acoustid_id",
  "TXXX:Acoustid Id": "acoustid_id",
  "TXXX:Acoustid Fingerprint": "acoustid_fingerprint",
  "TXXX:MusicIP PUID": "musicip_puid",
  "TXXX:MusicMagic Fingerprint": "musicip_fingerprint",
  WOAR: "website",
  // id3v2.4
  // ToDo: In same sequence as defined at http://id3.org/id3v2.4.0-frames
  TDRC: "date",
  // date YYYY-MM-DD
  TYER: "year",
  TDOR: "originaldate",
  // 'TMCL:instrument': 'performer:instrument',
  "TIPL:arranger": "arranger",
  "TIPL:engineer": "engineer",
  "TIPL:producer": "producer",
  "TIPL:DJ-mix": "djmixer",
  "TIPL:mix": "mixer",
  TMOO: "mood",
  // additional mappings:
  SYLT: "lyrics",
  TSST: "discsubtitle",
  TKEY: "key",
  COMM: "comment",
  TOPE: "originalartist",
  // Windows Media Player
  "PRIV:AverageLevel": "averageLevel",
  "PRIV:PeakLevel": "peakLevel",
  // Discogs
  "TXXX:DISCOGS_ARTIST_ID": "discogs_artist_id",
  "TXXX:DISCOGS_ARTISTS": "artists",
  "TXXX:DISCOGS_ARTIST_NAME": "artists",
  "TXXX:DISCOGS_ALBUM_ARTISTS": "albumartist",
  "TXXX:DISCOGS_CATALOG": "catalognumber",
  "TXXX:DISCOGS_COUNTRY": "releasecountry",
  "TXXX:DISCOGS_DATE": "originaldate",
  "TXXX:DISCOGS_LABEL": "label",
  "TXXX:DISCOGS_LABEL_ID": "discogs_label_id",
  "TXXX:DISCOGS_MASTER_RELEASE_ID": "discogs_master_release_id",
  "TXXX:DISCOGS_RATING": "discogs_rating",
  "TXXX:DISCOGS_RELEASED": "date",
  "TXXX:DISCOGS_RELEASE_ID": "discogs_release_id",
  "TXXX:DISCOGS_VOTES": "discogs_votes",
  "TXXX:CATALOGID": "catalognumber",
  "TXXX:STYLE": "genre",
  "TXXX:REPLAYGAIN_TRACK_PEAK": "replaygain_track_peak",
  "TXXX:REPLAYGAIN_TRACK_GAIN": "replaygain_track_gain",
  "TXXX:REPLAYGAIN_ALBUM_PEAK": "replaygain_album_peak",
  "TXXX:REPLAYGAIN_ALBUM_GAIN": "replaygain_album_gain",
  "TXXX:MP3GAIN_MINMAX": "replaygain_track_minmax",
  "TXXX:MP3GAIN_ALBUM_MINMAX": "replaygain_album_minmax",
  "TXXX:MP3GAIN_UNDO": "replaygain_undo",
  MVNM: "movement",
  MVIN: "movementIndex",
  PCST: "podcast",
  TCAT: "category",
  TDES: "description",
  TDRL: "releasedate",
  TGID: "podcastId",
  TKWD: "keywords",
  WFED: "podcasturl",
  GRP1: "grouping"
};
class Oi extends mt {
  static toRating(e) {
    return {
      source: e.email,
      rating: e.rating > 0 ? (e.rating - 1) / 254 * ue.maxRatingScore : void 0
    };
  }
  constructor() {
    super(["ID3v2.3", "ID3v2.4"], ad);
  }
  /**
   * Handle post mapping exceptions / correction
   * @param tag to post map
   * @param warnings Wil be used to register (collect) warnings
   */
  postMap(e, r) {
    switch (e.id) {
      case "UFID":
        {
          const i = e.value;
          i.owner_identifier === "http://musicbrainz.org" && (e.id += `:${i.owner_identifier}`, e.value = Wr(i.identifier, "latin1"));
        }
        break;
      case "PRIV":
        {
          const i = e.value;
          switch (i.owner_identifier) {
            case "AverageLevel":
            case "PeakValue":
              e.id += `:${i.owner_identifier}`, e.value = i.data.length === 4 ? M.get(i.data, 0) : null, e.value === null && r.addWarning("Failed to parse PRIV:PeakValue");
              break;
            default:
              r.addWarning(`Unknown PRIV owner-identifier: ${i.data}`);
          }
        }
        break;
      case "POPM":
        e.value = Oi.toRating(e.value);
        break;
    }
  }
}
const od = {
  Title: "title",
  Author: "artist",
  "WM/AlbumArtist": "albumartist",
  "WM/AlbumTitle": "album",
  "WM/Year": "date",
  // changed to 'year' to 'date' based on Picard mappings; ToDo: check me
  "WM/OriginalReleaseTime": "originaldate",
  "WM/OriginalReleaseYear": "originalyear",
  Description: "comment",
  "WM/TrackNumber": "track",
  "WM/PartOfSet": "disk",
  "WM/Genre": "genre",
  "WM/Composer": "composer",
  "WM/Lyrics": "lyrics",
  "WM/AlbumSortOrder": "albumsort",
  "WM/TitleSortOrder": "titlesort",
  "WM/ArtistSortOrder": "artistsort",
  "WM/AlbumArtistSortOrder": "albumartistsort",
  "WM/ComposerSortOrder": "composersort",
  "WM/Writer": "lyricist",
  "WM/Conductor": "conductor",
  "WM/ModifiedBy": "remixer",
  "WM/Engineer": "engineer",
  "WM/Producer": "producer",
  "WM/DJMixer": "djmixer",
  "WM/Mixer": "mixer",
  "WM/Publisher": "label",
  "WM/ContentGroupDescription": "grouping",
  "WM/SubTitle": "subtitle",
  "WM/SetSubTitle": "discsubtitle",
  // 'WM/PartOfSet': 'totaldiscs',
  "WM/IsCompilation": "compilation",
  "WM/SharedUserRating": "rating",
  "WM/BeatsPerMinute": "bpm",
  "WM/Mood": "mood",
  "WM/Media": "media",
  "WM/CatalogNo": "catalognumber",
  "MusicBrainz/Album Status": "releasestatus",
  "MusicBrainz/Album Type": "releasetype",
  "MusicBrainz/Album Release Country": "releasecountry",
  "WM/Script": "script",
  "WM/Language": "language",
  Copyright: "copyright",
  LICENSE: "license",
  "WM/EncodedBy": "encodedby",
  "WM/EncodingSettings": "encodersettings",
  "WM/Barcode": "barcode",
  "WM/ISRC": "isrc",
  "MusicBrainz/Track Id": "musicbrainz_recordingid",
  "MusicBrainz/Release Track Id": "musicbrainz_trackid",
  "MusicBrainz/Album Id": "musicbrainz_albumid",
  "MusicBrainz/Artist Id": "musicbrainz_artistid",
  "MusicBrainz/Album Artist Id": "musicbrainz_albumartistid",
  "MusicBrainz/Release Group Id": "musicbrainz_releasegroupid",
  "MusicBrainz/Work Id": "musicbrainz_workid",
  "MusicBrainz/TRM Id": "musicbrainz_trmid",
  "MusicBrainz/Disc Id": "musicbrainz_discid",
  "Acoustid/Id": "acoustid_id",
  "Acoustid/Fingerprint": "acoustid_fingerprint",
  "MusicIP/PUID": "musicip_puid",
  "WM/ARTISTS": "artists",
  "WM/InitialKey": "key",
  ASIN: "asin",
  "WM/Work": "work",
  "WM/AuthorURL": "website",
  "WM/Picture": "picture"
};
class Mi extends ue {
  static toRating(e) {
    return {
      rating: Number.parseFloat(e + 1) / 5
    };
  }
  constructor() {
    super(["asf"], od);
  }
  postMap(e) {
    switch (e.id) {
      case "WM/SharedUserRating": {
        const r = e.id.split(":");
        e.value = Mi.toRating(e.value), e.id = r[0];
        break;
      }
    }
  }
}
const cd = {
  TT2: "title",
  TP1: "artist",
  TP2: "albumartist",
  TAL: "album",
  TYE: "year",
  COM: "comment",
  TRK: "track",
  TPA: "disk",
  TCO: "genre",
  PIC: "picture",
  TCM: "composer",
  TOR: "originaldate",
  TOT: "originalalbum",
  TXT: "lyricist",
  TP3: "conductor",
  TPB: "label",
  TT1: "grouping",
  TT3: "subtitle",
  TLA: "language",
  TCR: "copyright",
  WCP: "license",
  TEN: "encodedby",
  TSS: "encodersettings",
  WAR: "website",
  PCS: "podcast",
  TCP: "compilation",
  TDR: "date",
  TS2: "albumartistsort",
  TSA: "albumsort",
  TSC: "composersort",
  TSP: "artistsort",
  TST: "titlesort",
  WFD: "podcasturl",
  TBP: "bpm"
};
class ud extends mt {
  constructor() {
    super(["ID3v2.2"], cd);
  }
}
const ld = {
  Title: "title",
  Artist: "artist",
  Artists: "artists",
  "Album Artist": "albumartist",
  Album: "album",
  Year: "date",
  Originalyear: "originalyear",
  Originaldate: "originaldate",
  Releasedate: "releasedate",
  Comment: "comment",
  Track: "track",
  Disc: "disk",
  DISCNUMBER: "disk",
  // ToDo: backwards compatibility', valid tag?
  Genre: "genre",
  "Cover Art (Front)": "picture",
  "Cover Art (Back)": "picture",
  Composer: "composer",
  Lyrics: "lyrics",
  ALBUMSORT: "albumsort",
  TITLESORT: "titlesort",
  WORK: "work",
  ARTISTSORT: "artistsort",
  ALBUMARTISTSORT: "albumartistsort",
  COMPOSERSORT: "composersort",
  Lyricist: "lyricist",
  Writer: "writer",
  Conductor: "conductor",
  // 'Performer=artist (instrument)': 'performer:instrument',
  MixArtist: "remixer",
  Arranger: "arranger",
  Engineer: "engineer",
  Producer: "producer",
  DJMixer: "djmixer",
  Mixer: "mixer",
  Label: "label",
  Grouping: "grouping",
  Subtitle: "subtitle",
  DiscSubtitle: "discsubtitle",
  Compilation: "compilation",
  BPM: "bpm",
  Mood: "mood",
  Media: "media",
  CatalogNumber: "catalognumber",
  MUSICBRAINZ_ALBUMSTATUS: "releasestatus",
  MUSICBRAINZ_ALBUMTYPE: "releasetype",
  RELEASECOUNTRY: "releasecountry",
  Script: "script",
  Language: "language",
  Copyright: "copyright",
  LICENSE: "license",
  EncodedBy: "encodedby",
  EncoderSettings: "encodersettings",
  Barcode: "barcode",
  ISRC: "isrc",
  ASIN: "asin",
  musicbrainz_trackid: "musicbrainz_recordingid",
  musicbrainz_releasetrackid: "musicbrainz_trackid",
  MUSICBRAINZ_ALBUMID: "musicbrainz_albumid",
  MUSICBRAINZ_ARTISTID: "musicbrainz_artistid",
  MUSICBRAINZ_ALBUMARTISTID: "musicbrainz_albumartistid",
  MUSICBRAINZ_RELEASEGROUPID: "musicbrainz_releasegroupid",
  MUSICBRAINZ_WORKID: "musicbrainz_workid",
  MUSICBRAINZ_TRMID: "musicbrainz_trmid",
  MUSICBRAINZ_DISCID: "musicbrainz_discid",
  Acoustid_Id: "acoustid_id",
  ACOUSTID_FINGERPRINT: "acoustid_fingerprint",
  MUSICIP_PUID: "musicip_puid",
  Weblink: "website",
  REPLAYGAIN_TRACK_GAIN: "replaygain_track_gain",
  REPLAYGAIN_TRACK_PEAK: "replaygain_track_peak",
  MP3GAIN_MINMAX: "replaygain_track_minmax",
  MP3GAIN_UNDO: "replaygain_undo"
};
class fd extends mt {
  constructor() {
    super(["APEv2"], ld);
  }
}
const pd = {
  "©nam": "title",
  "©ART": "artist",
  aART: "albumartist",
  /**
   * ToDo: Album artist seems to be stored here while Picard documentation says: aART
   */
  "----:com.apple.iTunes:Band": "albumartist",
  "©alb": "album",
  "©day": "date",
  "©cmt": "comment",
  "©com": "comment",
  trkn: "track",
  disk: "disk",
  "©gen": "genre",
  covr: "picture",
  "©wrt": "composer",
  "©lyr": "lyrics",
  soal: "albumsort",
  sonm: "titlesort",
  soar: "artistsort",
  soaa: "albumartistsort",
  soco: "composersort",
  "----:com.apple.iTunes:LYRICIST": "lyricist",
  "----:com.apple.iTunes:CONDUCTOR": "conductor",
  "----:com.apple.iTunes:REMIXER": "remixer",
  "----:com.apple.iTunes:ENGINEER": "engineer",
  "----:com.apple.iTunes:PRODUCER": "producer",
  "----:com.apple.iTunes:DJMIXER": "djmixer",
  "----:com.apple.iTunes:MIXER": "mixer",
  "----:com.apple.iTunes:LABEL": "label",
  "©grp": "grouping",
  "----:com.apple.iTunes:SUBTITLE": "subtitle",
  "----:com.apple.iTunes:DISCSUBTITLE": "discsubtitle",
  cpil: "compilation",
  tmpo: "bpm",
  "----:com.apple.iTunes:MOOD": "mood",
  "----:com.apple.iTunes:MEDIA": "media",
  "----:com.apple.iTunes:CATALOGNUMBER": "catalognumber",
  tvsh: "tvShow",
  tvsn: "tvSeason",
  tves: "tvEpisode",
  sosn: "tvShowSort",
  tven: "tvEpisodeId",
  tvnn: "tvNetwork",
  pcst: "podcast",
  purl: "podcasturl",
  "----:com.apple.iTunes:MusicBrainz Album Status": "releasestatus",
  "----:com.apple.iTunes:MusicBrainz Album Type": "releasetype",
  "----:com.apple.iTunes:MusicBrainz Album Release Country": "releasecountry",
  "----:com.apple.iTunes:SCRIPT": "script",
  "----:com.apple.iTunes:LANGUAGE": "language",
  cprt: "copyright",
  "©cpy": "copyright",
  "----:com.apple.iTunes:LICENSE": "license",
  "©too": "encodedby",
  pgap: "gapless",
  "----:com.apple.iTunes:BARCODE": "barcode",
  "----:com.apple.iTunes:ISRC": "isrc",
  "----:com.apple.iTunes:ASIN": "asin",
  "----:com.apple.iTunes:NOTES": "comment",
  "----:com.apple.iTunes:MusicBrainz Track Id": "musicbrainz_recordingid",
  "----:com.apple.iTunes:MusicBrainz Release Track Id": "musicbrainz_trackid",
  "----:com.apple.iTunes:MusicBrainz Album Id": "musicbrainz_albumid",
  "----:com.apple.iTunes:MusicBrainz Artist Id": "musicbrainz_artistid",
  "----:com.apple.iTunes:MusicBrainz Album Artist Id": "musicbrainz_albumartistid",
  "----:com.apple.iTunes:MusicBrainz Release Group Id": "musicbrainz_releasegroupid",
  "----:com.apple.iTunes:MusicBrainz Work Id": "musicbrainz_workid",
  "----:com.apple.iTunes:MusicBrainz TRM Id": "musicbrainz_trmid",
  "----:com.apple.iTunes:MusicBrainz Disc Id": "musicbrainz_discid",
  "----:com.apple.iTunes:Acoustid Id": "acoustid_id",
  "----:com.apple.iTunes:Acoustid Fingerprint": "acoustid_fingerprint",
  "----:com.apple.iTunes:MusicIP PUID": "musicip_puid",
  "----:com.apple.iTunes:fingerprint": "musicip_fingerprint",
  "----:com.apple.iTunes:replaygain_track_gain": "replaygain_track_gain",
  "----:com.apple.iTunes:replaygain_track_peak": "replaygain_track_peak",
  "----:com.apple.iTunes:replaygain_album_gain": "replaygain_album_gain",
  "----:com.apple.iTunes:replaygain_album_peak": "replaygain_album_peak",
  "----:com.apple.iTunes:replaygain_track_minmax": "replaygain_track_minmax",
  "----:com.apple.iTunes:replaygain_album_minmax": "replaygain_album_minmax",
  "----:com.apple.iTunes:replaygain_undo": "replaygain_undo",
  // Additional mappings:
  gnre: "genre",
  // ToDo: check mapping
  "----:com.apple.iTunes:ALBUMARTISTSORT": "albumartistsort",
  "----:com.apple.iTunes:ARTISTS": "artists",
  "----:com.apple.iTunes:ORIGINALDATE": "originaldate",
  "----:com.apple.iTunes:ORIGINALYEAR": "originalyear",
  "----:com.apple.iTunes:RELEASEDATE": "releasedate",
  // '----:com.apple.iTunes:PERFORMER': 'performer'
  desc: "description",
  ldes: "longDescription",
  "©mvn": "movement",
  "©mvi": "movementIndex",
  "©mvc": "movementTotal",
  "©wrk": "work",
  catg: "category",
  egid: "podcastId",
  hdvd: "hdVideo",
  keyw: "keywords",
  shwm: "showMovement",
  stik: "stik",
  rate: "rating"
}, dd = "iTunes";
class An extends mt {
  constructor() {
    super([dd], pd);
  }
  postMap(e, r) {
    switch (e.id) {
      case "rate":
        e.value = {
          source: void 0,
          rating: Number.parseFloat(e.value) / 100
        };
        break;
    }
  }
}
const md = {
  TITLE: "title",
  ARTIST: "artist",
  ARTISTS: "artists",
  ALBUMARTIST: "albumartist",
  "ALBUM ARTIST": "albumartist",
  ALBUM: "album",
  DATE: "date",
  ORIGINALDATE: "originaldate",
  ORIGINALYEAR: "originalyear",
  RELEASEDATE: "releasedate",
  COMMENT: "comment",
  TRACKNUMBER: "track",
  DISCNUMBER: "disk",
  GENRE: "genre",
  METADATA_BLOCK_PICTURE: "picture",
  COMPOSER: "composer",
  LYRICS: "lyrics",
  ALBUMSORT: "albumsort",
  TITLESORT: "titlesort",
  WORK: "work",
  ARTISTSORT: "artistsort",
  ALBUMARTISTSORT: "albumartistsort",
  COMPOSERSORT: "composersort",
  LYRICIST: "lyricist",
  WRITER: "writer",
  CONDUCTOR: "conductor",
  // 'PERFORMER=artist (instrument)': 'performer:instrument', // ToDo
  REMIXER: "remixer",
  ARRANGER: "arranger",
  ENGINEER: "engineer",
  PRODUCER: "producer",
  DJMIXER: "djmixer",
  MIXER: "mixer",
  LABEL: "label",
  GROUPING: "grouping",
  SUBTITLE: "subtitle",
  DISCSUBTITLE: "discsubtitle",
  TRACKTOTAL: "totaltracks",
  DISCTOTAL: "totaldiscs",
  COMPILATION: "compilation",
  RATING: "rating",
  BPM: "bpm",
  KEY: "key",
  MOOD: "mood",
  MEDIA: "media",
  CATALOGNUMBER: "catalognumber",
  RELEASESTATUS: "releasestatus",
  RELEASETYPE: "releasetype",
  RELEASECOUNTRY: "releasecountry",
  SCRIPT: "script",
  LANGUAGE: "language",
  COPYRIGHT: "copyright",
  LICENSE: "license",
  ENCODEDBY: "encodedby",
  ENCODERSETTINGS: "encodersettings",
  BARCODE: "barcode",
  ISRC: "isrc",
  ASIN: "asin",
  MUSICBRAINZ_TRACKID: "musicbrainz_recordingid",
  MUSICBRAINZ_RELEASETRACKID: "musicbrainz_trackid",
  MUSICBRAINZ_ALBUMID: "musicbrainz_albumid",
  MUSICBRAINZ_ARTISTID: "musicbrainz_artistid",
  MUSICBRAINZ_ALBUMARTISTID: "musicbrainz_albumartistid",
  MUSICBRAINZ_RELEASEGROUPID: "musicbrainz_releasegroupid",
  MUSICBRAINZ_WORKID: "musicbrainz_workid",
  MUSICBRAINZ_TRMID: "musicbrainz_trmid",
  MUSICBRAINZ_DISCID: "musicbrainz_discid",
  ACOUSTID_ID: "acoustid_id",
  ACOUSTID_ID_FINGERPRINT: "acoustid_fingerprint",
  MUSICIP_PUID: "musicip_puid",
  // 'FINGERPRINT=MusicMagic Fingerprint {fingerprint}': 'musicip_fingerprint', // ToDo
  WEBSITE: "website",
  NOTES: "notes",
  TOTALTRACKS: "totaltracks",
  TOTALDISCS: "totaldiscs",
  // Discogs
  DISCOGS_ARTIST_ID: "discogs_artist_id",
  DISCOGS_ARTISTS: "artists",
  DISCOGS_ARTIST_NAME: "artists",
  DISCOGS_ALBUM_ARTISTS: "albumartist",
  DISCOGS_CATALOG: "catalognumber",
  DISCOGS_COUNTRY: "releasecountry",
  DISCOGS_DATE: "originaldate",
  DISCOGS_LABEL: "label",
  DISCOGS_LABEL_ID: "discogs_label_id",
  DISCOGS_MASTER_RELEASE_ID: "discogs_master_release_id",
  DISCOGS_RATING: "discogs_rating",
  DISCOGS_RELEASED: "date",
  DISCOGS_RELEASE_ID: "discogs_release_id",
  DISCOGS_VOTES: "discogs_votes",
  CATALOGID: "catalognumber",
  STYLE: "genre",
  //
  REPLAYGAIN_TRACK_GAIN: "replaygain_track_gain",
  REPLAYGAIN_TRACK_PEAK: "replaygain_track_peak",
  REPLAYGAIN_ALBUM_GAIN: "replaygain_album_gain",
  REPLAYGAIN_ALBUM_PEAK: "replaygain_album_peak",
  // To Sure if these (REPLAYGAIN_MINMAX, REPLAYGAIN_ALBUM_MINMAX & REPLAYGAIN_UNDO) are used for Vorbis:
  REPLAYGAIN_MINMAX: "replaygain_track_minmax",
  REPLAYGAIN_ALBUM_MINMAX: "replaygain_album_minmax",
  REPLAYGAIN_UNDO: "replaygain_undo"
};
class $t extends ue {
  static toRating(e, r, i) {
    return {
      source: e ? e.toLowerCase() : void 0,
      rating: Number.parseFloat(r) / i * ue.maxRatingScore
    };
  }
  constructor() {
    super(["vorbis"], md);
  }
  postMap(e) {
    if (e.id === "RATING")
      e.value = $t.toRating(void 0, e.value, 100);
    else if (e.id.indexOf("RATING:") === 0) {
      const r = e.id.split(":");
      e.value = $t.toRating(r[1], e.value, 1), e.id = r[0];
    }
  }
}
const hd = {
  IART: "artist",
  // Artist
  ICRD: "date",
  // DateCreated
  INAM: "title",
  // Title
  TITL: "title",
  IPRD: "album",
  // Product
  ITRK: "track",
  IPRT: "track",
  // Additional tag for track index
  COMM: "comment",
  // Comments
  ICMT: "comment",
  // Country
  ICNT: "releasecountry",
  GNRE: "genre",
  // Genre
  IWRI: "writer",
  // WrittenBy
  RATE: "rating",
  YEAR: "year",
  ISFT: "encodedby",
  // Software
  CODE: "encodedby",
  // EncodedBy
  TURL: "website",
  // URL,
  IGNR: "genre",
  // Genre
  IENG: "engineer",
  // Engineer
  ITCH: "technician",
  // Technician
  IMED: "media",
  // Original Media
  IRPD: "album"
  // Product, where the file was intended for
};
class gd extends ue {
  constructor() {
    super(["exif"], hd);
  }
}
const xd = {
  "segment:title": "title",
  "album:ARTIST": "albumartist",
  "album:ARTISTSORT": "albumartistsort",
  "album:TITLE": "album",
  "album:DATE_RECORDED": "originaldate",
  "album:DATE_RELEASED": "releasedate",
  "album:PART_NUMBER": "disk",
  "album:TOTAL_PARTS": "totaltracks",
  "track:ARTIST": "artist",
  "track:ARTISTSORT": "artistsort",
  "track:TITLE": "title",
  "track:PART_NUMBER": "track",
  "track:MUSICBRAINZ_TRACKID": "musicbrainz_recordingid",
  "track:MUSICBRAINZ_ALBUMID": "musicbrainz_albumid",
  "track:MUSICBRAINZ_ARTISTID": "musicbrainz_artistid",
  "track:PUBLISHER": "label",
  "track:GENRE": "genre",
  "track:ENCODER": "encodedby",
  "track:ENCODER_OPTIONS": "encodersettings",
  "edition:TOTAL_PARTS": "totaldiscs",
  picture: "picture"
};
class yd extends mt {
  constructor() {
    super(["matroska"], xd);
  }
}
const _d = {
  NAME: "title",
  AUTH: "artist",
  "(c) ": "copyright",
  ANNO: "comment"
};
class vd extends ue {
  constructor() {
    super(["AIFF"], _d);
  }
}
class Sd {
  constructor() {
    this.tagMappers = {}, [
      new sd(),
      new ud(),
      new Oi(),
      new An(),
      new An(),
      new $t(),
      new fd(),
      new Mi(),
      new gd(),
      new yd(),
      new vd()
    ].forEach((e) => {
      this.registerTagMapper(e);
    });
  }
  /**
   * Convert native to generic (common) tags
   * @param tagType Originating tag format
   * @param tag     Native tag to map to a generic tag id
   * @param warnings
   * @return Generic tag result (output of this function)
   */
  mapTag(e, r, i) {
    if (this.tagMappers[e])
      return this.tagMappers[e].mapGenericTag(r, i);
    throw new qs(`No generic tag mapper defined for tag-format: ${e}`);
  }
  registerTagMapper(e) {
    for (const r of e.tagTypes)
      this.tagMappers[r] = e;
  }
}
function bd(t) {
  const e = t.split(`
`), r = [], i = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
  for (const n of e) {
    const s = n.match(i);
    if (s) {
      const a = Number.parseInt(s[1], 10), o = Number.parseInt(s[2], 10), c = s[3];
      let p;
      c.length === 3 ? p = Number.parseInt(c, 10) : p = Number.parseInt(c, 10) * 10;
      const l = (a * 60 + o) * 1e3 + p, f = n.replace(i, "").trim();
      r.push({ timestamp: l, text: f });
    }
  }
  return {
    contentType: Zp.lyrics,
    timeStampFormat: Qp.milliseconds,
    syncText: r
  };
}
const Ue = Je("music-metadata:collector"), Td = ["matroska", "APEv2", "vorbis", "ID3v2.4", "ID3v2.3", "ID3v2.2", "exif", "asf", "iTunes", "AIFF", "ID3v1"];
class wd {
  constructor(e) {
    this.format = {
      tagTypes: [],
      trackInfo: []
    }, this.native = {}, this.common = {
      track: { no: null, of: null },
      disk: { no: null, of: null },
      movementIndex: { no: null, of: null }
    }, this.quality = {
      warnings: []
    }, this.commonOrigin = {}, this.originPriority = {}, this.tagMapper = new Sd(), this.opts = e;
    let r = 1;
    for (const i of Td)
      this.originPriority[i] = r++;
    this.originPriority.artificial = 500, this.originPriority.id3v1 = 600;
  }
  /**
   * @returns {boolean} true if one or more tags have been found
   */
  hasAny() {
    return Object.keys(this.native).length > 0;
  }
  addStreamInfo(e) {
    Ue(`streamInfo: type=${e.type ? Hp[e.type] : "?"}, codec=${e.codecName}`), this.format.trackInfo.push(e);
  }
  setFormat(e, r) {
    var i;
    Ue(`format: ${e} = ${r}`), this.format[e] = r, (i = this.opts) != null && i.observer && this.opts.observer({ metadata: this, tag: { type: "format", id: e, value: r } });
  }
  setAudioOnly() {
    this.setFormat("hasAudio", !0), this.setFormat("hasVideo", !1);
  }
  async addTag(e, r, i) {
    Ue(`tag ${e}.${r} = ${i}`), this.native[e] || (this.format.tagTypes.push(e), this.native[e] = []), this.native[e].push({ id: r, value: i }), await this.toCommon(e, r, i);
  }
  addWarning(e) {
    this.quality.warnings.push({ message: e });
  }
  async postMap(e, r) {
    switch (r.id) {
      case "artist":
        if (this.commonOrigin.artist === this.originPriority[e])
          return this.postMap("artificial", { id: "artists", value: r.value });
        this.common.artists || this.setGenericTag("artificial", { id: "artists", value: r.value });
        break;
      case "artists":
        if ((!this.common.artist || this.commonOrigin.artist === this.originPriority.artificial) && (!this.common.artists || this.common.artists.indexOf(r.value) === -1)) {
          const i = (this.common.artists || []).concat([r.value]), s = { id: "artist", value: Ad(i) };
          this.setGenericTag("artificial", s);
        }
        break;
      case "picture":
        return this.postFixPicture(r.value).then((i) => {
          i !== null && (r.value = i, this.setGenericTag(e, r));
        });
      case "totaltracks":
        this.common.track.of = ue.toIntOrNull(r.value);
        return;
      case "totaldiscs":
        this.common.disk.of = ue.toIntOrNull(r.value);
        return;
      case "movementTotal":
        this.common.movementIndex.of = ue.toIntOrNull(r.value);
        return;
      case "track":
      case "disk":
      case "movementIndex": {
        const i = this.common[r.id].of;
        this.common[r.id] = ue.normalizeTrack(r.value), this.common[r.id].of = i ?? this.common[r.id].of;
        return;
      }
      case "bpm":
      case "year":
      case "originalyear":
        r.value = Number.parseInt(r.value, 10);
        break;
      case "date": {
        const i = Number.parseInt(r.value.substr(0, 4), 10);
        Number.isNaN(i) || (this.common.year = i);
        break;
      }
      case "discogs_label_id":
      case "discogs_release_id":
      case "discogs_master_release_id":
      case "discogs_artist_id":
      case "discogs_votes":
        r.value = typeof r.value == "string" ? Number.parseInt(r.value, 10) : r.value;
        break;
      case "replaygain_track_gain":
      case "replaygain_track_peak":
      case "replaygain_album_gain":
      case "replaygain_album_peak":
        r.value = Yp(r.value);
        break;
      case "replaygain_track_minmax":
        r.value = r.value.split(",").map((i) => Number.parseInt(i, 10));
        break;
      case "replaygain_undo": {
        const i = r.value.split(",").map((n) => Number.parseInt(n, 10));
        r.value = {
          leftChannel: i[0],
          rightChannel: i[1]
        };
        break;
      }
      case "gapless":
      case "compilation":
      case "podcast":
      case "showMovement":
        r.value = r.value === "1" || r.value === 1;
        break;
      case "isrc": {
        const i = this.common[r.id];
        if (i && i.indexOf(r.value) !== -1)
          return;
        break;
      }
      case "comment":
        typeof r.value == "string" && (r.value = { text: r.value }), r.value.descriptor === "iTunPGAP" && this.setGenericTag(e, { id: "gapless", value: r.value.text === "1" });
        break;
      case "lyrics":
        typeof r.value == "string" && (r.value = bd(r.value));
        break;
    }
    r.value !== null && this.setGenericTag(e, r);
  }
  /**
   * Convert native tags to common tags
   * @returns {IAudioMetadata} Native + common tags
   */
  toCommonMetadata() {
    return {
      format: this.format,
      native: this.native,
      quality: this.quality,
      common: this.common
    };
  }
  /**
   * Fix some common issues with picture object
   * @param picture Picture
   */
  async postFixPicture(e) {
    if (e.data && e.data.length > 0) {
      if (!e.format) {
        const r = await Hs(Uint8Array.from(e.data));
        if (r)
          e.format = r.mime;
        else
          return null;
      }
      switch (e.format = e.format.toLocaleLowerCase(), e.format) {
        case "image/jpg":
          e.format = "image/jpeg";
      }
      return e;
    }
    return this.addWarning("Empty picture tag found"), null;
  }
  /**
   * Convert native tag to common tags
   */
  async toCommon(e, r, i) {
    const n = { id: r, value: i }, s = this.tagMapper.mapTag(e, n, this);
    s && await this.postMap(e, s);
  }
  /**
   * Set generic tag
   */
  setGenericTag(e, r) {
    var s;
    Ue(`common.${r.id} = ${r.value}`);
    const i = this.commonOrigin[r.id] || 1e3, n = this.originPriority[e];
    if (rd(r.id))
      if (n <= i)
        this.common[r.id] = r.value, this.commonOrigin[r.id] = n;
      else
        return Ue(`Ignore native tag (singleton): ${e}.${r.id} = ${r.value}`);
    else if (n === i)
      !id(r.id) || this.common[r.id].indexOf(r.value) === -1 ? this.common[r.id].push(r.value) : Ue(`Ignore duplicate value: ${e}.${r.id} = ${r.value}`);
    else if (n < i)
      this.common[r.id] = [r.value], this.commonOrigin[r.id] = n;
    else
      return Ue(`Ignore native tag (list): ${e}.${r.id} = ${r.value}`);
    (s = this.opts) != null && s.observer && this.opts.observer({ metadata: this, tag: { type: "common", id: r.id, value: r.value } });
  }
}
function Ad(t) {
  return t.length > 2 ? `${t.slice(0, t.length - 1).join(", ")} & ${t[t.length - 1]}` : t.join(" & ");
}
const Ed = {
  parserType: "mpeg",
  extensions: [".mp2", ".mp3", ".m2a", ".aac", "aacp"],
  mimeTypes: ["audio/mpeg", "audio/mp3", "audio/aacs", "audio/aacp"],
  async load() {
    return (await import("./MpegParser-CPrhEYWD.js")).MpegParser;
  }
}, Rd = {
  parserType: "apev2",
  extensions: [".ape"],
  mimeTypes: ["audio/ape", "audio/monkeys-audio"],
  async load() {
    return (await Promise.resolve().then(() => rm)).APEv2Parser;
  }
}, kd = {
  parserType: "asf",
  extensions: [".asf"],
  mimeTypes: ["audio/ms-wma", "video/ms-wmv", "audio/ms-asf", "video/ms-asf", "application/vnd.ms-asf"],
  async load() {
    return (await import("./AsfParser-DsnuckqI.js")).AsfParser;
  }
}, Cd = {
  parserType: "dsdiff",
  extensions: [".dff"],
  mimeTypes: ["audio/dsf", "audio/dsd"],
  async load() {
    return (await import("./DsdiffParser-CXwAidhB.js")).DsdiffParser;
  }
}, Id = {
  parserType: "aiff",
  extensions: [".aif", "aiff", "aifc"],
  mimeTypes: ["audio/aiff", "audio/aif", "audio/aifc", "application/aiff"],
  async load() {
    return (await import("./AiffParser-Dk18CfSn.js")).AIFFParser;
  }
}, Pd = {
  parserType: "dsf",
  extensions: [".dsf"],
  mimeTypes: ["audio/dsf"],
  async load() {
    return (await import("./DsfParser-DcnoTO8a.js")).DsfParser;
  }
}, Od = {
  parserType: "flac",
  extensions: [".flac"],
  mimeTypes: ["audio/flac"],
  async load() {
    return (await import("./FlacParser-CwZ2Vxh0.js").then((t) => t.d)).FlacParser;
  }
}, Md = {
  parserType: "matroska",
  extensions: [".mka", ".mkv", ".mk3d", ".mks", "webm"],
  mimeTypes: ["audio/matroska", "video/matroska", "audio/webm", "video/webm"],
  async load() {
    return (await import("./MatroskaParser-NaOHvinS.js")).MatroskaParser;
  }
}, Dd = {
  parserType: "mp4",
  extensions: [".mp4", ".m4a", ".m4b", ".m4pa", "m4v", "m4r", "3gp"],
  mimeTypes: ["audio/mp4", "audio/m4a", "video/m4v", "video/mp4"],
  async load() {
    return (await import("./MP4Parser-1uWLKz6_.js")).MP4Parser;
  }
}, Fd = {
  parserType: "musepack",
  extensions: [".mpc"],
  mimeTypes: ["audio/musepack"],
  async load() {
    return (await import("./MusepackParser-965Uo4xE.js")).MusepackParser;
  }
}, Ld = {
  parserType: "ogg",
  extensions: [".ogg", ".ogv", ".oga", ".ogm", ".ogx", ".opus", ".spx"],
  mimeTypes: ["audio/ogg", "audio/opus", "audio/speex", "video/ogg"],
  // RFC 7845, RFC 6716, RFC 5574
  async load() {
    return (await import("./OggParser-DTzocent.js")).OggParser;
  }
}, Bd = {
  parserType: "wavpack",
  extensions: [".wv", ".wvp"],
  mimeTypes: ["audio/wavpack"],
  async load() {
    return (await import("./WavPackParser-B7vK1lxC.js")).WavPackParser;
  }
}, $d = {
  parserType: "riff",
  extensions: [".wav", "wave", ".bwf"],
  mimeTypes: ["audio/vnd.wave", "audio/wav", "audio/wave"],
  async load() {
    return (await import("./WaveParser-BKHEMGgM.js")).WaveParser;
  }
}, ze = Je("music-metadata:parser:factory");
function Nd(t) {
  const e = Ii.parse(t), r = Np(e.type);
  return {
    type: r.type,
    subtype: r.subtype,
    suffix: r.suffix,
    parameters: e.parameters
  };
}
class Ud {
  constructor() {
    this.parsers = [], [
      Od,
      Ed,
      Rd,
      Dd,
      Md,
      $d,
      Ld,
      kd,
      Id,
      Bd,
      Fd,
      Pd,
      Cd
    ].forEach((e) => {
      this.registerParser(e);
    });
  }
  registerParser(e) {
    this.parsers.push(e);
  }
  async parse(e, r, i) {
    if (e.supportsRandomAccess() ? (ze("tokenizer supports random-access, scanning for appending headers"), await am(e, i)) : ze("tokenizer does not support random-access, cannot scan for appending headers"), !r) {
      const o = new Uint8Array(4100);
      if (e.fileInfo.mimeType && (r = this.findLoaderForContentType(e.fileInfo.mimeType)), !r && e.fileInfo.path && (r = this.findLoaderForExtension(e.fileInfo.path)), !r) {
        ze("Guess parser on content..."), await e.peekBuffer(o, { mayBeLess: !0 });
        const c = await Hs(o, { mpegOffsetTolerance: 10 });
        if (!c || !c.mime)
          throw new Xs("Failed to determine audio format");
        if (ze(`Guessed file type is mime=${c.mime}, extension=${c.ext}`), r = this.findLoaderForContentType(c.mime), !r)
          throw new Ws(`Guessed MIME-type not supported: ${c.mime}`);
      }
    }
    ze(`Loading ${r.parserType} parser...`);
    const n = new wd(i), s = await r.load(), a = new s(n, e, i ?? {});
    return ze(`Parser ${r.parserType} loaded`), await a.parse(), n.format.trackInfo && (n.format.hasAudio === void 0 && n.setFormat("hasAudio", !!n.format.trackInfo.find((o) => o.type === Ee.audio)), n.format.hasVideo === void 0 && n.setFormat("hasVideo", !!n.format.trackInfo.find((o) => o.type === Ee.video))), n.toCommonMetadata();
  }
  /**
   * @param filePath - Path, filename or extension to audio file
   * @return Parser submodule name
   */
  findLoaderForExtension(e) {
    if (!e)
      return;
    const r = zd(e).toLocaleLowerCase() || e;
    return this.parsers.find((i) => i.extensions.indexOf(r) !== -1);
  }
  findLoaderForContentType(e) {
    let r;
    if (!e)
      return;
    try {
      r = Nd(e);
    } catch {
      ze(`Invalid HTTP Content-Type header value: ${e}`);
      return;
    }
    const i = r.subtype.indexOf("x-") === 0 ? r.subtype.substring(2) : r.subtype;
    return this.parsers.find((n) => n.mimeTypes.find((s) => s.indexOf(`${r.type}/${i}`) !== -1));
  }
  getSupportedMimeTypes() {
    const e = /* @__PURE__ */ new Set();
    return this.parsers.forEach((r) => {
      r.mimeTypes.forEach((i) => {
        e.add(i), e.add(i.replace("/", "/x-"));
      });
    }), Array.from(e);
  }
}
function zd(t) {
  const e = t.lastIndexOf(".");
  return e === -1 ? "" : t.slice(e);
}
class Ks {
  /**
   * Initialize parser with output (metadata), input (tokenizer) & parsing options (options).
   * @param {INativeMetadataCollector} metadata Output
   * @param {ITokenizer} tokenizer Input
   * @param {IOptions} options Parsing options
   */
  constructor(e, r, i) {
    this.metadata = e, this.tokenizer = r, this.options = i;
  }
}
const qr = {
  128: "€",
  130: "‚",
  131: "ƒ",
  132: "„",
  133: "…",
  134: "†",
  135: "‡",
  136: "ˆ",
  137: "‰",
  138: "Š",
  139: "‹",
  140: "Œ",
  142: "Ž",
  145: "‘",
  146: "’",
  147: "“",
  148: "”",
  149: "•",
  150: "–",
  151: "—",
  152: "˜",
  153: "™",
  154: "š",
  155: "›",
  156: "œ",
  158: "ž",
  159: "Ÿ"
}, Vr = {};
for (const [t, e] of Object.entries(qr))
  Vr[e] = Number.parseInt(t);
function tr(t, e = "utf-8") {
  switch (e.toLowerCase()) {
    case "utf-8":
    case "utf8":
      return typeof globalThis.TextDecoder < "u" ? new globalThis.TextDecoder("utf-8").decode(t) : Gd(t);
    case "utf-16le":
      return jd(t);
    case "ascii":
      return Xd(t);
    case "latin1":
    case "iso-8859-1":
      return Wd(t);
    case "windows-1252":
      return qd(t);
    default:
      throw new RangeError(`Encoding '${e}' not supported`);
  }
}
function Hd(t = "", e = "utf-8") {
  switch (e.toLowerCase()) {
    case "utf-8":
    case "utf8":
      return typeof globalThis.TextEncoder < "u" ? new globalThis.TextEncoder().encode(t) : Vd(t);
    case "utf-16le":
      return Kd(t);
    case "ascii":
      return Yd(t);
    case "latin1":
    case "iso-8859-1":
      return Zd(t);
    case "windows-1252":
      return Qd(t);
    default:
      throw new RangeError(`Encoding '${e}' not supported`);
  }
}
function Gd(t) {
  let e = "", r = 0;
  for (; r < t.length; ) {
    const i = t[r++];
    if (i < 128)
      e += String.fromCharCode(i);
    else if (i < 224) {
      const n = t[r++] & 63;
      e += String.fromCharCode((i & 31) << 6 | n);
    } else if (i < 240) {
      const n = t[r++] & 63, s = t[r++] & 63;
      e += String.fromCharCode((i & 15) << 12 | n << 6 | s);
    } else {
      const n = t[r++] & 63, s = t[r++] & 63, a = t[r++] & 63;
      let o = (i & 7) << 18 | n << 12 | s << 6 | a;
      o -= 65536, e += String.fromCharCode(55296 + (o >> 10 & 1023), 56320 + (o & 1023));
    }
  }
  return e;
}
function jd(t) {
  let e = "";
  for (let r = 0; r < t.length; r += 2)
    e += String.fromCharCode(t[r] | t[r + 1] << 8);
  return e;
}
function Xd(t) {
  return String.fromCharCode(...t.map((e) => e & 127));
}
function Wd(t) {
  return String.fromCharCode(...t);
}
function qd(t) {
  let e = "";
  for (const r of t)
    r >= 128 && r <= 159 && qr[r] ? e += qr[r] : e += String.fromCharCode(r);
  return e;
}
function Vd(t) {
  const e = [];
  for (let r = 0; r < t.length; r++) {
    const i = t.charCodeAt(r);
    i < 128 ? e.push(i) : i < 2048 ? e.push(192 | i >> 6, 128 | i & 63) : i < 65536 ? e.push(224 | i >> 12, 128 | i >> 6 & 63, 128 | i & 63) : e.push(240 | i >> 18, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | i & 63);
  }
  return new Uint8Array(e);
}
function Kd(t) {
  const e = new Uint8Array(t.length * 2);
  for (let r = 0; r < t.length; r++) {
    const i = t.charCodeAt(r);
    e[r * 2] = i & 255, e[r * 2 + 1] = i >> 8;
  }
  return e;
}
function Yd(t) {
  return new Uint8Array([...t].map((e) => e.charCodeAt(0) & 127));
}
function Zd(t) {
  return new Uint8Array([...t].map((e) => e.charCodeAt(0) & 255));
}
function Qd(t) {
  return new Uint8Array([...t].map((e) => {
    const r = e.charCodeAt(0);
    return r <= 255 ? r : Vr[e] !== void 0 ? Vr[e] : 63;
  }));
}
const Jd = /^[\x21-\x7e©][\x20-\x7e\x00()]{3}/, Ys = {
  len: 4,
  get: (t, e) => {
    const r = tr(t.slice(e, e + Ys.len), "latin1");
    if (!r.match(Jd))
      throw new Pi(`FourCC contains invalid characters: ${qp(r)} "${r}"`);
    return r;
  },
  put: (t, e, r) => {
    const i = Hd(r, "latin1");
    if (i.length !== 4)
      throw new qs("Invalid length");
    return t.set(i, e), e + 4;
  }
}, Tt = {
  text_utf8: 0,
  binary: 1,
  external_info: 2,
  reserved: 3
}, En = {
  len: 52,
  get: (t, e) => ({
    // should equal 'MAC '
    ID: Ys.get(t, e),
    // versionIndex number * 1000 (3.81 = 3810) (remember that 4-byte alignment causes this to take 4-bytes)
    version: M.get(t, e + 4) / 1e3,
    // the number of descriptor bytes (allows later expansion of this header)
    descriptorBytes: M.get(t, e + 8),
    // the number of header APE_HEADER bytes
    headerBytes: M.get(t, e + 12),
    // the number of header APE_HEADER bytes
    seekTableBytes: M.get(t, e + 16),
    // the number of header data bytes (from original file)
    headerDataBytes: M.get(t, e + 20),
    // the number of bytes of APE frame data
    apeFrameDataBytes: M.get(t, e + 24),
    // the high order number of APE frame data bytes
    apeFrameDataBytesHigh: M.get(t, e + 28),
    // the terminating data of the file (not including tag data)
    terminatingDataBytes: M.get(t, e + 32),
    // the MD5 hash of the file (see notes for usage... it's a little tricky)
    fileMD5: new Ds(16).get(t, e + 36)
  })
}, em = {
  len: 24,
  get: (t, e) => ({
    // the compression level (see defines I.E. COMPRESSION_LEVEL_FAST)
    compressionLevel: z.get(t, e),
    // any format flags (for future use)
    formatFlags: z.get(t, e + 2),
    // the number of audio blocks in one frame
    blocksPerFrame: M.get(t, e + 4),
    // the number of audio blocks in the final frame
    finalFrameBlocks: M.get(t, e + 8),
    // the total number of frames
    totalFrames: M.get(t, e + 12),
    // the bits per sample (typically 16)
    bitsPerSample: z.get(t, e + 16),
    // the number of channels (1 or 2)
    channel: z.get(t, e + 18),
    // the sample rate (typically 44100)
    sampleRate: M.get(t, e + 20)
  })
}, se = {
  len: 32,
  get: (t, e) => ({
    // should equal 'APETAGEX'
    ID: new J(8, "ascii").get(t, e),
    // equals CURRENT_APE_TAG_VERSION
    version: M.get(t, e + 8),
    // the complete size of the tag, including this footer (excludes header)
    size: M.get(t, e + 12),
    // the number of fields in the tag
    fields: M.get(t, e + 16),
    // reserved for later use (must be zero),
    flags: Zs(M.get(t, e + 20))
  })
}, Er = {
  len: 8,
  get: (t, e) => ({
    // Length of assigned value in bytes
    size: M.get(t, e),
    // reserved for later use (must be zero),
    flags: Zs(M.get(t, e + 4))
  })
};
function Zs(t) {
  return {
    containsHeader: wt(t, 31),
    containsFooter: wt(t, 30),
    isHeader: wt(t, 29),
    readOnly: wt(t, 0),
    dataType: (t & 6) >> 1
  };
}
function wt(t, e) {
  return (t & 1 << e) !== 0;
}
const Me = Je("music-metadata:parser:APEv2"), Rn = "APEv2", kn = "APETAGEX";
class kt extends jp("APEv2") {
}
function tm(t, e, r) {
  return new $e(t, e, r).tryParseApeHeader();
}
class $e extends Ks {
  constructor() {
    super(...arguments), this.ape = {};
  }
  /**
   * Calculate the media file duration
   * @param ah ApeHeader
   * @return {number} duration in seconds
   */
  static calculateDuration(e) {
    let r = e.totalFrames > 1 ? e.blocksPerFrame * (e.totalFrames - 1) : 0;
    return r += e.finalFrameBlocks, r / e.sampleRate;
  }
  /**
   * Calculates the APEv1 / APEv2 first field offset
   * @param tokenizer
   * @param offset
   */
  static async findApeFooterOffset(e, r) {
    const i = new Uint8Array(se.len), n = e.position;
    if (r <= se.len) {
      Me(`Offset is too small to read APE footer: offset=${r}`);
      return;
    }
    if (r > se.len) {
      await e.readBuffer(i, { position: r - se.len }), e.setPosition(n);
      const s = se.get(i, 0);
      if (s.ID === "APETAGEX")
        return s.flags.isHeader ? Me(`APE Header found at offset=${r - se.len}`) : (Me(`APE Footer found at offset=${r - se.len}`), r -= s.size), { footer: s, offset: r };
    }
  }
  static parseTagFooter(e, r, i) {
    const n = se.get(r, r.length - se.len);
    if (n.ID !== kn)
      throw new kt("Unexpected APEv2 Footer ID preamble value");
    return zr(r), new $e(e, zr(r), i).parseTags(n);
  }
  /**
   * Parse APEv1 / APEv2 header if header signature found
   */
  async tryParseApeHeader() {
    if (this.tokenizer.fileInfo.size && this.tokenizer.fileInfo.size - this.tokenizer.position < se.len) {
      Me("No APEv2 header found, end-of-file reached");
      return;
    }
    const e = await this.tokenizer.peekToken(se);
    if (e.ID === kn)
      return await this.tokenizer.ignore(se.len), this.parseTags(e);
    if (Me(`APEv2 header not found at offset=${this.tokenizer.position}`), this.tokenizer.fileInfo.size) {
      const r = this.tokenizer.fileInfo.size - this.tokenizer.position, i = new Uint8Array(r);
      return await this.tokenizer.readBuffer(i), $e.parseTagFooter(this.metadata, i, this.options);
    }
  }
  async parse() {
    const e = await this.tokenizer.readToken(En);
    if (e.ID !== "MAC ")
      throw new kt("Unexpected descriptor ID");
    this.ape.descriptor = e;
    const r = e.descriptorBytes - En.len, i = await (r > 0 ? this.parseDescriptorExpansion(r) : this.parseHeader());
    return this.metadata.setAudioOnly(), await this.tokenizer.ignore(i.forwardBytes), this.tryParseApeHeader();
  }
  async parseTags(e) {
    const r = new Uint8Array(256);
    let i = e.size - se.len;
    Me(`Parse APE tags at offset=${this.tokenizer.position}, size=${i}`);
    for (let n = 0; n < e.fields; n++) {
      if (i < Er.len) {
        this.metadata.addWarning(`APEv2 Tag-header: ${e.fields - n} items remaining, but no more tag data to read.`);
        break;
      }
      const s = await this.tokenizer.readToken(Er);
      i -= Er.len + s.size, await this.tokenizer.peekBuffer(r, { length: Math.min(r.length, i) });
      let a = wn(r, 0, r.length);
      const o = await this.tokenizer.readToken(new J(a, "ascii"));
      switch (await this.tokenizer.ignore(1), i -= o.length + 1, s.flags.dataType) {
        case Tt.text_utf8: {
          const p = (await this.tokenizer.readToken(new J(s.size, "utf8"))).split(/\x00/g);
          await Promise.all(p.map((l) => this.metadata.addTag(Rn, o, l)));
          break;
        }
        case Tt.binary:
          if (this.options.skipCovers)
            await this.tokenizer.ignore(s.size);
          else {
            const c = new Uint8Array(s.size);
            await this.tokenizer.readBuffer(c), a = wn(c, 0, c.length);
            const p = tr(c.slice(0, a), "utf-8"), l = c.slice(a + 1);
            await this.metadata.addTag(Rn, o, {
              description: p,
              data: l
            });
          }
          break;
        case Tt.external_info:
          Me(`Ignore external info ${o}`), await this.tokenizer.ignore(s.size);
          break;
        case Tt.reserved:
          Me(`Ignore external info ${o}`), this.metadata.addWarning(`APEv2 header declares a reserved datatype for "${o}"`), await this.tokenizer.ignore(s.size);
          break;
      }
    }
  }
  async parseDescriptorExpansion(e) {
    return await this.tokenizer.ignore(e), this.parseHeader();
  }
  async parseHeader() {
    const e = await this.tokenizer.readToken(em);
    if (this.metadata.setFormat("lossless", !0), this.metadata.setFormat("container", "Monkey's Audio"), this.metadata.setFormat("bitsPerSample", e.bitsPerSample), this.metadata.setFormat("sampleRate", e.sampleRate), this.metadata.setFormat("numberOfChannels", e.channel), this.metadata.setFormat("duration", $e.calculateDuration(e)), !this.ape.descriptor)
      throw new kt("Missing APE descriptor");
    return {
      forwardBytes: this.ape.descriptor.seekTableBytes + this.ape.descriptor.headerDataBytes + this.ape.descriptor.apeFrameDataBytes + this.ape.descriptor.terminatingDataBytes
    };
  }
}
const rm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  APEv2Parser: $e,
  ApeContentError: kt,
  tryParseApeHeader: tm
}, Symbol.toStringTag, { value: "Module" })), At = Je("music-metadata:parser:ID3v1"), Cn = [
  "Blues",
  "Classic Rock",
  "Country",
  "Dance",
  "Disco",
  "Funk",
  "Grunge",
  "Hip-Hop",
  "Jazz",
  "Metal",
  "New Age",
  "Oldies",
  "Other",
  "Pop",
  "R&B",
  "Rap",
  "Reggae",
  "Rock",
  "Techno",
  "Industrial",
  "Alternative",
  "Ska",
  "Death Metal",
  "Pranks",
  "Soundtrack",
  "Euro-Techno",
  "Ambient",
  "Trip-Hop",
  "Vocal",
  "Jazz+Funk",
  "Fusion",
  "Trance",
  "Classical",
  "Instrumental",
  "Acid",
  "House",
  "Game",
  "Sound Clip",
  "Gospel",
  "Noise",
  "Alt. Rock",
  "Bass",
  "Soul",
  "Punk",
  "Space",
  "Meditative",
  "Instrumental Pop",
  "Instrumental Rock",
  "Ethnic",
  "Gothic",
  "Darkwave",
  "Techno-Industrial",
  "Electronic",
  "Pop-Folk",
  "Eurodance",
  "Dream",
  "Southern Rock",
  "Comedy",
  "Cult",
  "Gangsta Rap",
  "Top 40",
  "Christian Rap",
  "Pop/Funk",
  "Jungle",
  "Native American",
  "Cabaret",
  "New Wave",
  "Psychedelic",
  "Rave",
  "Showtunes",
  "Trailer",
  "Lo-Fi",
  "Tribal",
  "Acid Punk",
  "Acid Jazz",
  "Polka",
  "Retro",
  "Musical",
  "Rock & Roll",
  "Hard Rock",
  "Folk",
  "Folk/Rock",
  "National Folk",
  "Swing",
  "Fast-Fusion",
  "Bebob",
  "Latin",
  "Revival",
  "Celtic",
  "Bluegrass",
  "Avantgarde",
  "Gothic Rock",
  "Progressive Rock",
  "Psychedelic Rock",
  "Symphonic Rock",
  "Slow Rock",
  "Big Band",
  "Chorus",
  "Easy Listening",
  "Acoustic",
  "Humour",
  "Speech",
  "Chanson",
  "Opera",
  "Chamber Music",
  "Sonata",
  "Symphony",
  "Booty Bass",
  "Primus",
  "Porn Groove",
  "Satire",
  "Slow Jam",
  "Club",
  "Tango",
  "Samba",
  "Folklore",
  "Ballad",
  "Power Ballad",
  "Rhythmic Soul",
  "Freestyle",
  "Duet",
  "Punk Rock",
  "Drum Solo",
  "A Cappella",
  "Euro-House",
  "Dance Hall",
  "Goa",
  "Drum & Bass",
  "Club-House",
  "Hardcore",
  "Terror",
  "Indie",
  "BritPop",
  "Negerpunk",
  "Polsk Punk",
  "Beat",
  "Christian Gangsta Rap",
  "Heavy Metal",
  "Black Metal",
  "Crossover",
  "Contemporary Christian",
  "Christian Rock",
  "Merengue",
  "Salsa",
  "Thrash Metal",
  "Anime",
  "JPop",
  "Synthpop",
  "Abstract",
  "Art Rock",
  "Baroque",
  "Bhangra",
  "Big Beat",
  "Breakbeat",
  "Chillout",
  "Downtempo",
  "Dub",
  "EBM",
  "Eclectic",
  "Electro",
  "Electroclash",
  "Emo",
  "Experimental",
  "Garage",
  "Global",
  "IDM",
  "Illbient",
  "Industro-Goth",
  "Jam Band",
  "Krautrock",
  "Leftfield",
  "Lounge",
  "Math Rock",
  "New Romantic",
  "Nu-Breakz",
  "Post-Punk",
  "Post-Rock",
  "Psytrance",
  "Shoegaze",
  "Space Rock",
  "Trop Rock",
  "World Music",
  "Neoclassical",
  "Audiobook",
  "Audio Theatre",
  "Neue Deutsche Welle",
  "Podcast",
  "Indie Rock",
  "G-Funk",
  "Dubstep",
  "Garage Rock",
  "Psybient"
], Et = {
  len: 128,
  /**
   * @param buf Buffer possibly holding the 128 bytes ID3v1.1 metadata header
   * @param off Offset in buffer in bytes
   * @returns ID3v1.1 header if first 3 bytes equals 'TAG', otherwise null is returned
   */
  get: (t, e) => {
    const r = new qe(3).get(t, e);
    return r === "TAG" ? {
      header: r,
      title: new qe(30).get(t, e + 3),
      artist: new qe(30).get(t, e + 33),
      album: new qe(30).get(t, e + 63),
      year: new qe(4).get(t, e + 93),
      comment: new qe(28).get(t, e + 97),
      // ID3v1.1 separator for track
      zeroByte: Xe.get(t, e + 127),
      // track: ID3v1.1 field added by Michael Mutschler
      track: Xe.get(t, e + 126),
      genre: Xe.get(t, e + 127)
    } : null;
  }
};
class qe {
  constructor(e) {
    this.len = e, this.stringType = new J(e, "latin1");
  }
  get(e, r) {
    let i = this.stringType.get(e, r);
    return i = Xp(i), i = i.trim(), i.length > 0 ? i : void 0;
  }
}
class Qs extends Ks {
  constructor(e, r, i) {
    super(e, r, i), this.apeHeader = i.apeHeader;
  }
  static getGenre(e) {
    if (e < Cn.length)
      return Cn[e];
  }
  async parse() {
    if (!this.tokenizer.fileInfo.size) {
      At("Skip checking for ID3v1 because the file-size is unknown");
      return;
    }
    this.apeHeader && (this.tokenizer.ignore(this.apeHeader.offset - this.tokenizer.position), await new $e(this.metadata, this.tokenizer, this.options).parseTags(this.apeHeader.footer));
    const e = this.tokenizer.fileInfo.size - Et.len;
    if (this.tokenizer.position > e) {
      At("Already consumed the last 128 bytes");
      return;
    }
    const r = await this.tokenizer.readToken(Et, e);
    if (r) {
      At("ID3v1 header found at: pos=%s", this.tokenizer.fileInfo.size - Et.len);
      const i = ["title", "artist", "album", "comment", "track", "year"];
      for (const s of i)
        r[s] && r[s] !== "" && await this.addTag(s, r[s]);
      const n = Qs.getGenre(r.genre);
      n && await this.addTag("genre", n);
    } else
      At("ID3v1 header not found at: pos=%s", this.tokenizer.fileInfo.size - Et.len);
  }
  async addTag(e, r) {
    await this.metadata.addTag("ID3v1", e, r);
  }
}
async function im(t) {
  if (t.fileInfo.size >= 128) {
    const e = new Uint8Array(3), r = t.position;
    return await t.readBuffer(e, { position: t.fileInfo.size - 128 }), t.setPosition(r), tr(e, "latin1") === "TAG";
  }
  return !1;
}
const nm = "LYRICS200";
async function sm(t) {
  const e = t.fileInfo.size;
  if (e >= 143) {
    const r = new Uint8Array(15), i = t.position;
    await t.readBuffer(r, { position: e - 143 }), t.setPosition(i);
    const n = tr(r, "latin1");
    if (n.slice(6) === nm)
      return Number.parseInt(n.slice(0, 6), 10) + 15;
  }
  return 0;
}
async function am(t, e = {}) {
  let r = t.fileInfo.size;
  if (await im(t)) {
    r -= 128;
    const i = await sm(t);
    r -= i;
  }
  e.apeHeader = await $e.findApeFooterOffset(t, r);
}
const In = Je("music-metadata:parser");
async function om(t, e = {}) {
  In(`parseFile: ${t}`);
  const r = await ff(t), i = new Ud();
  try {
    const n = i.findLoaderForExtension(t);
    n || In("Parser could not be determined by file extension");
    try {
      return await i.parse(r, n, e);
    } catch (s) {
      throw (s instanceof Xs || s instanceof Ws) && (s.message += `: ${t}`), s;
    }
  } finally {
    await r.close();
  }
}
async function cm(t) {
  const e = [];
  for (const r of t)
    try {
      const i = await om(r);
      e.push({
        title: i.common.title || L.basename(r, L.extname(r)),
        artist: i.common.artist || "Desconocido",
        album: i.common.album || "Desconocido",
        year: i.common.year || "N/A",
        duration: i.format.duration || 0,
        folder: L.dirname(r),
        path: r
      });
    } catch (i) {
      console.error(`Error leyendo metadata de: ${r}`, i.message), e.push({
        title: L.basename(r, L.extname(r)),
        artist: "Desconocido",
        album: "Desconocido",
        year: "N/A",
        duration: 0,
        folder: L.dirname(r),
        path: r
      });
    }
  return e;
}
const Js = Fe.dirname(sa(import.meta.url));
process.env.APP_ROOT = Fe.join(Js, "..");
const Kr = process.env.VITE_DEV_SERVER_URL, $m = Fe.join(process.env.APP_ROOT, "dist-electron"), ea = Fe.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = Kr ? Fe.join(process.env.APP_ROOT, "public") : ea;
let De;
function ta() {
  De = new Pn({
    icon: Fe.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    width: 370,
    height: 310,
    transparent: !0,
    resizable: !1,
    frame: !1,
    // alwaysOnTop: true,
    webPreferences: {
      preload: Fe.join(Js, "preload.mjs"),
      nodeIntegration: !0,
      webSecurity: !1
    }
  }), De.webContents.on("did-finish-load", () => {
    De == null || De.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), Kr ? De.loadURL(Kr) : De.loadFile(Fe.join(ea, "index.html"));
}
na.on("get-musics", async (t, e) => {
  try {
    const r = await ef({
      extraFolders: (e == null ? void 0 : e.extraFolders) || []
    }), i = await cm(r);
    t.reply("musics", { success: !0, musics: i });
  } catch (r) {
    t.reply("musics", { success: !1, error: String(r) });
  }
});
Ct.on("window-all-closed", () => {
  process.platform !== "darwin" && (Ct.quit(), De = null);
});
Ct.on("activate", () => {
  Pn.getAllWindows().length === 0 && ta();
});
Ct.whenReady().then(ta);
export {
  Dm as A,
  Ks as B,
  Ps as C,
  Rm as D,
  ie as E,
  Ys as F,
  tr as G,
  Cn as H,
  wf as I,
  tm as J,
  Xp as K,
  Fm as L,
  Qs as M,
  Is as N,
  ed as O,
  wn as P,
  td as Q,
  Bm as R,
  J as S,
  Ee as T,
  Lt as U,
  Lm as V,
  Jp as W,
  Kr as X,
  $m as Y,
  ea as Z,
  Ge as a,
  Xe as b,
  Je as c,
  Ds as d,
  Wr as e,
  M as f,
  Vs as g,
  Cm as h,
  Mm as i,
  Ms as j,
  z as k,
  rt as l,
  jp as m,
  Pf as n,
  zr as o,
  Cf as p,
  kf as q,
  Lf as r,
  Om as s,
  Df as t,
  km as u,
  If as v,
  Im as w,
  Os as x,
  Rf as y,
  jr as z
};
