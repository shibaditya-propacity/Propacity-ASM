import {
  c as pa,
  b as Vn,
  g as fe,
  r as R,
  R as $,
  _ as _y,
  j as I,
  m as ct,
  A as Ay,
  U as Jp,
  d as Qp,
  S as st,
  L as Yn,
} from "./index-lPmb1MQk.js";
import { T as Py, E as $y } from "./chip-TP8sKoPN.js";
import { M as eh } from "./message-square-DsIKx4zZ.js";
import { u as Ty, C as jy, W as Ey } from "./use-workshops-B9FOnRlE.js";
import { u as My, P as Cy } from "./use-prospects-CjolvR4W.js";
import { A as ao } from "./en-US-Dc-C28vX.js";
import "./workshop-status-badge-D6bULriC.js";
import "./progress-bar-aDGUIu-U.js";
import "./format-BYjKddXJ.js";
import "./prospect-stage-badge-DZEP1A3d.js";
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iy = pa("Flame", [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49",
    },
  ],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ny = pa("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const th = pa("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  [
    "path",
    {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
      key: "1nw9bq",
    },
  ],
  [
    "path",
    {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
      key: "1np0yb",
    },
  ],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fs = pa("UsersRound", [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }],
]);
function rh(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (r = rh(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function ee() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
    (e = arguments[r]) && (t = rh(e)) && (n && (n += " "), (n += t));
  return n;
}
var ky = Array.isArray,
  ke = ky,
  Dy = typeof Vn == "object" && Vn && Vn.Object === Object && Vn,
  nh = Dy,
  By = nh,
  Ry = typeof self == "object" && self && self.Object === Object && self,
  Ly = By || Ry || Function("return this")(),
  ot = Ly,
  Fy = ot,
  Uy = Fy.Symbol,
  Un = Uy,
  ps = Un,
  ih = Object.prototype,
  Wy = ih.hasOwnProperty,
  zy = ih.toString,
  Hr = ps ? ps.toStringTag : void 0;
function Hy(e) {
  var t = Wy.call(e, Hr),
    r = e[Hr];
  try {
    e[Hr] = void 0;
    var n = !0;
  } catch {}
  var i = zy.call(e);
  return (n && (t ? (e[Hr] = r) : delete e[Hr]), i);
}
var qy = Hy,
  Gy = Object.prototype,
  Ky = Gy.toString;
function Xy(e) {
  return Ky.call(e);
}
var Vy = Xy,
  hs = Un,
  Yy = qy,
  Zy = Vy,
  Jy = "[object Null]",
  Qy = "[object Undefined]",
  ds = hs ? hs.toStringTag : void 0;
function em(e) {
  return e == null
    ? e === void 0
      ? Qy
      : Jy
    : ds && ds in Object(e)
      ? Yy(e)
      : Zy(e);
}
var mt = em;
function tm(e) {
  return e != null && typeof e == "object";
}
var gt = tm,
  rm = mt,
  nm = gt,
  im = "[object Symbol]";
function am(e) {
  return typeof e == "symbol" || (nm(e) && rm(e) == im);
}
var Cr = am,
  om = ke,
  um = Cr,
  cm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  sm = /^\w*$/;
function lm(e, t) {
  if (om(e)) return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || um(e)
    ? !0
    : sm.test(e) || !cm.test(e) || (t != null && e in Object(t));
}
var ac = lm;
function fm(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var At = fm;
const Ir = fe(At);
var pm = mt,
  hm = At,
  dm = "[object AsyncFunction]",
  vm = "[object Function]",
  ym = "[object GeneratorFunction]",
  mm = "[object Proxy]";
function gm(e) {
  if (!hm(e)) return !1;
  var t = pm(e);
  return t == vm || t == ym || t == dm || t == mm;
}
var oc = gm;
const Z = fe(oc);
var bm = ot,
  xm = bm["__core-js_shared__"],
  wm = xm,
  oo = wm,
  vs = (function () {
    var e = /[^.]+$/.exec((oo && oo.keys && oo.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function Om(e) {
  return !!vs && vs in e;
}
var Sm = Om,
  _m = Function.prototype,
  Am = _m.toString;
function Pm(e) {
  if (e != null) {
    try {
      return Am.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var ah = Pm,
  $m = oc,
  Tm = Sm,
  jm = At,
  Em = ah,
  Mm = /[\\^$.*+?()[\]{}|]/g,
  Cm = /^\[object .+?Constructor\]$/,
  Im = Function.prototype,
  Nm = Object.prototype,
  km = Im.toString,
  Dm = Nm.hasOwnProperty,
  Bm = RegExp(
    "^" +
      km
        .call(Dm)
        .replace(Mm, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?",
        ) +
      "$",
  );
function Rm(e) {
  if (!jm(e) || Tm(e)) return !1;
  var t = $m(e) ? Bm : Cm;
  return t.test(Em(e));
}
var Lm = Rm;
function Fm(e, t) {
  return e == null ? void 0 : e[t];
}
var Um = Fm,
  Wm = Lm,
  zm = Um;
function Hm(e, t) {
  var r = zm(e, t);
  return Wm(r) ? r : void 0;
}
var Xt = Hm,
  qm = Xt,
  Gm = qm(Object, "create"),
  ha = Gm,
  ys = ha;
function Km() {
  ((this.__data__ = ys ? ys(null) : {}), (this.size = 0));
}
var Xm = Km;
function Vm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return ((this.size -= t ? 1 : 0), t);
}
var Ym = Vm,
  Zm = ha,
  Jm = "__lodash_hash_undefined__",
  Qm = Object.prototype,
  eg = Qm.hasOwnProperty;
function tg(e) {
  var t = this.__data__;
  if (Zm) {
    var r = t[e];
    return r === Jm ? void 0 : r;
  }
  return eg.call(t, e) ? t[e] : void 0;
}
var rg = tg,
  ng = ha,
  ig = Object.prototype,
  ag = ig.hasOwnProperty;
function og(e) {
  var t = this.__data__;
  return ng ? t[e] !== void 0 : ag.call(t, e);
}
var ug = og,
  cg = ha,
  sg = "__lodash_hash_undefined__";
function lg(e, t) {
  var r = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = cg && t === void 0 ? sg : t),
    this
  );
}
var fg = lg,
  pg = Xm,
  hg = Ym,
  dg = rg,
  vg = ug,
  yg = fg;
function Nr(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Nr.prototype.clear = pg;
Nr.prototype.delete = hg;
Nr.prototype.get = dg;
Nr.prototype.has = vg;
Nr.prototype.set = yg;
var mg = Nr;
function gg() {
  ((this.__data__ = []), (this.size = 0));
}
var bg = gg;
function xg(e, t) {
  return e === t || (e !== e && t !== t);
}
var uc = xg,
  wg = uc;
function Og(e, t) {
  for (var r = e.length; r--; ) if (wg(e[r][0], t)) return r;
  return -1;
}
var da = Og,
  Sg = da,
  _g = Array.prototype,
  Ag = _g.splice;
function Pg(e) {
  var t = this.__data__,
    r = Sg(t, e);
  if (r < 0) return !1;
  var n = t.length - 1;
  return (r == n ? t.pop() : Ag.call(t, r, 1), --this.size, !0);
}
var $g = Pg,
  Tg = da;
function jg(e) {
  var t = this.__data__,
    r = Tg(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Eg = jg,
  Mg = da;
function Cg(e) {
  return Mg(this.__data__, e) > -1;
}
var Ig = Cg,
  Ng = da;
function kg(e, t) {
  var r = this.__data__,
    n = Ng(r, e);
  return (n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this);
}
var Dg = kg,
  Bg = bg,
  Rg = $g,
  Lg = Eg,
  Fg = Ig,
  Ug = Dg;
function kr(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
kr.prototype.clear = Bg;
kr.prototype.delete = Rg;
kr.prototype.get = Lg;
kr.prototype.has = Fg;
kr.prototype.set = Ug;
var va = kr,
  Wg = Xt,
  zg = ot,
  Hg = Wg(zg, "Map"),
  cc = Hg,
  ms = mg,
  qg = va,
  Gg = cc;
function Kg() {
  ((this.size = 0),
    (this.__data__ = {
      hash: new ms(),
      map: new (Gg || qg)(),
      string: new ms(),
    }));
}
var Xg = Kg;
function Vg(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var Yg = Vg,
  Zg = Yg;
function Jg(e, t) {
  var r = e.__data__;
  return Zg(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ya = Jg,
  Qg = ya;
function eb(e) {
  var t = Qg(this, e).delete(e);
  return ((this.size -= t ? 1 : 0), t);
}
var tb = eb,
  rb = ya;
function nb(e) {
  return rb(this, e).get(e);
}
var ib = nb,
  ab = ya;
function ob(e) {
  return ab(this, e).has(e);
}
var ub = ob,
  cb = ya;
function sb(e, t) {
  var r = cb(this, e),
    n = r.size;
  return (r.set(e, t), (this.size += r.size == n ? 0 : 1), this);
}
var lb = sb,
  fb = Xg,
  pb = tb,
  hb = ib,
  db = ub,
  vb = lb;
function Dr(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Dr.prototype.clear = fb;
Dr.prototype.delete = pb;
Dr.prototype.get = hb;
Dr.prototype.has = db;
Dr.prototype.set = vb;
var sc = Dr,
  oh = sc,
  yb = "Expected a function";
function lc(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(yb);
  var r = function () {
    var n = arguments,
      i = t ? t.apply(this, n) : n[0],
      a = r.cache;
    if (a.has(i)) return a.get(i);
    var o = e.apply(this, n);
    return ((r.cache = a.set(i, o) || a), o);
  };
  return ((r.cache = new (lc.Cache || oh)()), r);
}
lc.Cache = oh;
var uh = lc;
const mb = fe(uh);
var gb = uh,
  bb = 500;
function xb(e) {
  var t = gb(e, function (n) {
      return (r.size === bb && r.clear(), n);
    }),
    r = t.cache;
  return t;
}
var wb = xb,
  Ob = wb,
  Sb =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  _b = /\\(\\)?/g,
  Ab = Ob(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(Sb, function (r, n, i, a) {
        t.push(i ? a.replace(_b, "$1") : n || r);
      }),
      t
    );
  }),
  Pb = Ab;
function $b(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var fc = $b,
  gs = Un,
  Tb = fc,
  jb = ke,
  Eb = Cr,
  bs = gs ? gs.prototype : void 0,
  xs = bs ? bs.toString : void 0;
function ch(e) {
  if (typeof e == "string") return e;
  if (jb(e)) return Tb(e, ch) + "";
  if (Eb(e)) return xs ? xs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Mb = ch,
  Cb = Mb;
function Ib(e) {
  return e == null ? "" : Cb(e);
}
var sh = Ib,
  Nb = ke,
  kb = ac,
  Db = Pb,
  Bb = sh;
function Rb(e, t) {
  return Nb(e) ? e : kb(e, t) ? [e] : Db(Bb(e));
}
var lh = Rb,
  Lb = Cr;
function Fb(e) {
  if (typeof e == "string" || Lb(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var ma = Fb,
  Ub = lh,
  Wb = ma;
function zb(e, t) {
  t = Ub(t, e);
  for (var r = 0, n = t.length; e != null && r < n; ) e = e[Wb(t[r++])];
  return r && r == n ? e : void 0;
}
var pc = zb,
  Hb = pc;
function qb(e, t, r) {
  var n = e == null ? void 0 : Hb(e, t);
  return n === void 0 ? r : n;
}
var fh = qb;
const He = fe(fh);
function Gb(e) {
  return e == null;
}
var Kb = Gb;
const te = fe(Kb);
var Xb = mt,
  Vb = ke,
  Yb = gt,
  Zb = "[object String]";
function Jb(e) {
  return typeof e == "string" || (!Vb(e) && Yb(e) && Xb(e) == Zb);
}
var Qb = Jb;
const Ht = fe(Qb);
var ph = { exports: {} },
  ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hc = Symbol.for("react.element"),
  dc = Symbol.for("react.portal"),
  ga = Symbol.for("react.fragment"),
  ba = Symbol.for("react.strict_mode"),
  xa = Symbol.for("react.profiler"),
  wa = Symbol.for("react.provider"),
  Oa = Symbol.for("react.context"),
  e0 = Symbol.for("react.server_context"),
  Sa = Symbol.for("react.forward_ref"),
  _a = Symbol.for("react.suspense"),
  Aa = Symbol.for("react.suspense_list"),
  Pa = Symbol.for("react.memo"),
  $a = Symbol.for("react.lazy"),
  t0 = Symbol.for("react.offscreen"),
  hh;
hh = Symbol.for("react.module.reference");
function Ge(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case hc:
        switch (((e = e.type), e)) {
          case ga:
          case xa:
          case ba:
          case _a:
          case Aa:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case e0:
              case Oa:
              case Sa:
              case $a:
              case Pa:
              case wa:
                return e;
              default:
                return t;
            }
        }
      case dc:
        return t;
    }
  }
}
ie.ContextConsumer = Oa;
ie.ContextProvider = wa;
ie.Element = hc;
ie.ForwardRef = Sa;
ie.Fragment = ga;
ie.Lazy = $a;
ie.Memo = Pa;
ie.Portal = dc;
ie.Profiler = xa;
ie.StrictMode = ba;
ie.Suspense = _a;
ie.SuspenseList = Aa;
ie.isAsyncMode = function () {
  return !1;
};
ie.isConcurrentMode = function () {
  return !1;
};
ie.isContextConsumer = function (e) {
  return Ge(e) === Oa;
};
ie.isContextProvider = function (e) {
  return Ge(e) === wa;
};
ie.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === hc;
};
ie.isForwardRef = function (e) {
  return Ge(e) === Sa;
};
ie.isFragment = function (e) {
  return Ge(e) === ga;
};
ie.isLazy = function (e) {
  return Ge(e) === $a;
};
ie.isMemo = function (e) {
  return Ge(e) === Pa;
};
ie.isPortal = function (e) {
  return Ge(e) === dc;
};
ie.isProfiler = function (e) {
  return Ge(e) === xa;
};
ie.isStrictMode = function (e) {
  return Ge(e) === ba;
};
ie.isSuspense = function (e) {
  return Ge(e) === _a;
};
ie.isSuspenseList = function (e) {
  return Ge(e) === Aa;
};
ie.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ga ||
    e === xa ||
    e === ba ||
    e === _a ||
    e === Aa ||
    e === t0 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === $a ||
        e.$$typeof === Pa ||
        e.$$typeof === wa ||
        e.$$typeof === Oa ||
        e.$$typeof === Sa ||
        e.$$typeof === hh ||
        e.getModuleId !== void 0))
  );
};
ie.typeOf = Ge;
ph.exports = ie;
var r0 = ph.exports,
  n0 = mt,
  i0 = gt,
  a0 = "[object Number]";
function o0(e) {
  return typeof e == "number" || (i0(e) && n0(e) == a0);
}
var dh = o0;
const u0 = fe(dh);
var c0 = dh;
function s0(e) {
  return c0(e) && e != +e;
}
var l0 = s0;
const Wn = fe(l0);
var Ze = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1;
  },
  Dt = function (t) {
    return Ht(t) && t.indexOf("%") === t.length - 1;
  },
  F = function (t) {
    return u0(t) && !Wn(t);
  },
  f0 = function (t) {
    return te(t);
  },
  Oe = function (t) {
    return F(t) || Ht(t);
  },
  p0 = 0,
  Ta = function (t) {
    var r = ++p0;
    return "".concat(t || "").concat(r);
  },
  qt = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!F(t) && !Ht(t)) return n;
    var a;
    if (Dt(t)) {
      var o = t.indexOf("%");
      a = (r * parseFloat(t.slice(0, o))) / 100;
    } else a = +t;
    return (Wn(a) && (a = n), i && a > r && (a = r), a);
  },
  nr = function (t) {
    if (!t) return null;
    var r = Object.keys(t);
    return r && r.length ? t[r[0]] : null;
  },
  h0 = function (t) {
    if (!Array.isArray(t)) return !1;
    for (var r = t.length, n = {}, i = 0; i < r; i++)
      if (!n[t[i]]) n[t[i]] = !0;
      else return !0;
    return !1;
  },
  er = function (t, r) {
    return F(t) && F(r)
      ? function (n) {
          return t + n * (r - t);
        }
      : function () {
          return r;
        };
  };
function Bo(e, t, r) {
  return !e || !e.length
    ? null
    : e.find(function (n) {
        return n && (typeof t == "function" ? t(n) : He(n, t)) === r;
      });
}
var d0 = function (t, r) {
  return F(t) && F(r)
    ? t - r
    : Ht(t) && Ht(r)
      ? t.localeCompare(r)
      : t instanceof Date && r instanceof Date
        ? t.getTime() - r.getTime()
        : String(t).localeCompare(String(r));
};
function ur(e, t) {
  for (var r in e)
    if (
      {}.hasOwnProperty.call(e, r) &&
      (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])
    )
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Ro(e) {
  "@babel/helpers - typeof";
  return (
    (Ro =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ro(e)
  );
}
var v0 = ["viewBox", "children"],
  y0 = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  ws = ["points", "pathLength"],
  uo = { svg: v0, polygon: ws, polyline: ws },
  vc = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  hi = function (t, r) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var n = t;
    if ((R.isValidElement(t) && (n = t.props), !Ir(n))) return null;
    var i = {};
    return (
      Object.keys(n).forEach(function (a) {
        vc.includes(a) &&
          (i[a] =
            r ||
            function (o) {
              return n[a](n, o);
            });
      }),
      i
    );
  },
  m0 = function (t, r, n) {
    return function (i) {
      return (t(r, n, i), null);
    };
  },
  di = function (t, r, n) {
    if (!Ir(t) || Ro(t) !== "object") return null;
    var i = null;
    return (
      Object.keys(t).forEach(function (a) {
        var o = t[a];
        vc.includes(a) &&
          typeof o == "function" &&
          (i || (i = {}), (i[a] = m0(o, r, n)));
      }),
      i
    );
  },
  g0 = ["children"],
  b0 = ["children"];
function Os(e, t) {
  if (e == null) return {};
  var r = x0(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function x0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Ss = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    contextmenu: "onContextMenu",
    dblclick: "onDoubleClick",
  },
  pt = function (t) {
    return typeof t == "string"
      ? t
      : t
        ? t.displayName || t.name || "Component"
        : "";
  },
  _s = null,
  co = null,
  yc = function e(t) {
    if (t === _s && Array.isArray(co)) return co;
    var r = [];
    return (
      R.Children.forEach(t, function (n) {
        te(n) ||
          (r0.isFragment(n) ? (r = r.concat(e(n.props.children))) : r.push(n));
      }),
      (co = r),
      (_s = t),
      r
    );
  };
function Je(e, t) {
  var r = [],
    n = [];
  return (
    Array.isArray(t)
      ? (n = t.map(function (i) {
          return pt(i);
        }))
      : (n = [pt(t)]),
    yc(e).forEach(function (i) {
      var a = He(i, "type.displayName") || He(i, "type.name");
      n.indexOf(a) !== -1 && r.push(i);
    }),
    r
  );
}
function Re(e, t) {
  var r = Je(e, t);
  return r && r[0];
}
var As = function (t) {
    if (!t || !t.props) return !1;
    var r = t.props,
      n = r.width,
      i = r.height;
    return !(!F(n) || n <= 0 || !F(i) || i <= 0);
  },
  w0 = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ],
  O0 = function (t) {
    return t && t.type && Ht(t.type) && w0.indexOf(t.type) >= 0;
  },
  S0 = function (t, r, n, i) {
    var a,
      o = (a = uo == null ? void 0 : uo[i]) !== null && a !== void 0 ? a : [];
    return (
      r.startsWith("data-") ||
      (!Z(t) && ((i && o.includes(r)) || y0.includes(r))) ||
      (n && vc.includes(r))
    );
  },
  ne = function (t, r, n) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var i = t;
    if ((R.isValidElement(t) && (i = t.props), !Ir(i))) return null;
    var a = {};
    return (
      Object.keys(i).forEach(function (o) {
        var u;
        S0((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) &&
          (a[o] = i[o]);
      }),
      a
    );
  },
  Lo = function e(t, r) {
    if (t === r) return !0;
    var n = R.Children.count(t);
    if (n !== R.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1)
      return Ps(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
    for (var i = 0; i < n; i++) {
      var a = t[i],
        o = r[i];
      if (Array.isArray(a) || Array.isArray(o)) {
        if (!e(a, o)) return !1;
      } else if (!Ps(a, o)) return !1;
    }
    return !0;
  },
  Ps = function (t, r) {
    if (te(t) && te(r)) return !0;
    if (!te(t) && !te(r)) {
      var n = t.props || {},
        i = n.children,
        a = Os(n, g0),
        o = r.props || {},
        u = o.children,
        c = Os(o, b0);
      return i && u ? ur(a, c) && Lo(i, u) : !i && !u ? ur(a, c) : !1;
    }
    return !1;
  },
  $s = function (t, r) {
    var n = [],
      i = {};
    return (
      yc(t).forEach(function (a, o) {
        if (O0(a)) n.push(a);
        else if (a) {
          var u = pt(a.type),
            c = r[u] || {},
            s = c.handler,
            f = c.once;
          if (s && (!f || !i[u])) {
            var l = s(a, u, o);
            (n.push(l), (i[u] = !0));
          }
        }
      }),
      n
    );
  },
  _0 = function (t) {
    var r = t && t.type;
    return r && Ss[r] ? Ss[r] : null;
  },
  A0 = function (t, r) {
    return yc(r).indexOf(t);
  },
  P0 = [
    "children",
    "width",
    "height",
    "viewBox",
    "className",
    "style",
    "title",
    "desc",
  ];
function Fo() {
  return (
    (Fo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Fo.apply(this, arguments)
  );
}
function $0(e, t) {
  if (e == null) return {};
  var r = T0(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function T0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Uo(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    i = e.viewBox,
    a = e.className,
    o = e.style,
    u = e.title,
    c = e.desc,
    s = $0(e, P0),
    f = i || { width: r, height: n, x: 0, y: 0 },
    l = ee("recharts-surface", a);
  return $.createElement(
    "svg",
    Fo({}, ne(s, !0, "svg"), {
      className: l,
      width: r,
      height: n,
      style: o,
      viewBox: ""
        .concat(f.x, " ")
        .concat(f.y, " ")
        .concat(f.width, " ")
        .concat(f.height),
    }),
    $.createElement("title", null, u),
    $.createElement("desc", null, c),
    t,
  );
}
var j0 = ["children", "className"];
function Wo() {
  return (
    (Wo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Wo.apply(this, arguments)
  );
}
function E0(e, t) {
  if (e == null) return {};
  var r = M0(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function M0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Ae = $.forwardRef(function (e, t) {
    var r = e.children,
      n = e.className,
      i = E0(e, j0),
      a = ee("recharts-layer", n);
    return $.createElement("g", Wo({ className: a }, ne(i, !0), { ref: t }), r);
  }),
  Ft = function (t, r) {
    for (
      var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2;
      a < n;
      a++
    )
      i[a - 2] = arguments[a];
  };
function C0(e, t, r) {
  var n = -1,
    i = e.length;
  (t < 0 && (t = -t > i ? 0 : i + t),
    (r = r > i ? i : r),
    r < 0 && (r += i),
    (i = t > r ? 0 : (r - t) >>> 0),
    (t >>>= 0));
  for (var a = Array(i); ++n < i; ) a[n] = e[n + t];
  return a;
}
var I0 = C0,
  N0 = I0;
function k0(e, t, r) {
  var n = e.length;
  return ((r = r === void 0 ? n : r), !t && r >= n ? e : N0(e, t, r));
}
var D0 = k0,
  B0 = "\\ud800-\\udfff",
  R0 = "\\u0300-\\u036f",
  L0 = "\\ufe20-\\ufe2f",
  F0 = "\\u20d0-\\u20ff",
  U0 = R0 + L0 + F0,
  W0 = "\\ufe0e\\ufe0f",
  z0 = "\\u200d",
  H0 = RegExp("[" + z0 + B0 + U0 + W0 + "]");
function q0(e) {
  return H0.test(e);
}
var vh = q0;
function G0(e) {
  return e.split("");
}
var K0 = G0,
  yh = "\\ud800-\\udfff",
  X0 = "\\u0300-\\u036f",
  V0 = "\\ufe20-\\ufe2f",
  Y0 = "\\u20d0-\\u20ff",
  Z0 = X0 + V0 + Y0,
  J0 = "\\ufe0e\\ufe0f",
  Q0 = "[" + yh + "]",
  zo = "[" + Z0 + "]",
  Ho = "\\ud83c[\\udffb-\\udfff]",
  ex = "(?:" + zo + "|" + Ho + ")",
  mh = "[^" + yh + "]",
  gh = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  bh = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  tx = "\\u200d",
  xh = ex + "?",
  wh = "[" + J0 + "]?",
  rx = "(?:" + tx + "(?:" + [mh, gh, bh].join("|") + ")" + wh + xh + ")*",
  nx = wh + xh + rx,
  ix = "(?:" + [mh + zo + "?", zo, gh, bh, Q0].join("|") + ")",
  ax = RegExp(Ho + "(?=" + Ho + ")|" + ix + nx, "g");
function ox(e) {
  return e.match(ax) || [];
}
var ux = ox,
  cx = K0,
  sx = vh,
  lx = ux;
function fx(e) {
  return sx(e) ? lx(e) : cx(e);
}
var px = fx,
  hx = D0,
  dx = vh,
  vx = px,
  yx = sh;
function mx(e) {
  return function (t) {
    t = yx(t);
    var r = dx(t) ? vx(t) : void 0,
      n = r ? r[0] : t.charAt(0),
      i = r ? hx(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var gx = mx,
  bx = gx,
  xx = bx("toUpperCase"),
  wx = xx;
const ja = fe(wx);
function ue(e) {
  return function () {
    return e;
  };
}
const Oh = Math.cos,
  vi = Math.sin,
  Qe = Math.sqrt,
  yi = Math.PI,
  Ea = 2 * yi,
  qo = Math.PI,
  Go = 2 * qo,
  It = 1e-6,
  Ox = Go - It;
function Sh(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
}
function Sx(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Sh;
  const r = 10 ** t;
  return function (n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class _x {
  constructor(t) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? Sh : Sx(t)));
  }
  moveTo(t, r) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${(this._x1 = +n)},${(this._y1 = +i)}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this
      ._append`C${+t},${+r},${+n},${+i},${(this._x1 = +a)},${(this._y1 = +o)}`;
  }
  arcTo(t, r, n, i, a) {
    if (((t = +t), (r = +r), (n = +n), (i = +i), (a = +a), a < 0))
      throw new Error(`negative radius: ${a}`);
    let o = this._x1,
      u = this._y1,
      c = n - t,
      s = i - r,
      f = o - t,
      l = u - r,
      p = f * f + l * l;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = r)}`;
    else if (p > It)
      if (!(Math.abs(l * c - s * f) > It) || !a)
        this._append`L${(this._x1 = t)},${(this._y1 = r)}`;
      else {
        let h = n - o,
          m = i - u,
          v = c * c + s * s,
          d = h * h + m * m,
          b = Math.sqrt(v),
          x = Math.sqrt(p),
          w = a * Math.tan((qo - Math.acos((v + p - d) / (2 * b * x))) / 2),
          O = w / x,
          y = w / b;
        (Math.abs(O - 1) > It && this._append`L${t + O * f},${r + O * l}`,
          this
            ._append`A${a},${a},0,0,${+(l * h > f * m)},${(this._x1 = t + y * c)},${(this._y1 = r + y * s)}`);
      }
  }
  arc(t, r, n, i, a, o) {
    if (((t = +t), (r = +r), (n = +n), (o = !!o), n < 0))
      throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i),
      c = n * Math.sin(i),
      s = t + u,
      f = r + c,
      l = 1 ^ o,
      p = o ? i - a : a - i;
    (this._x1 === null
      ? this._append`M${s},${f}`
      : (Math.abs(this._x1 - s) > It || Math.abs(this._y1 - f) > It) &&
        this._append`L${s},${f}`,
      n &&
        (p < 0 && (p = (p % Go) + Go),
        p > Ox
          ? this
              ._append`A${n},${n},0,1,${l},${t - u},${r - c}A${n},${n},0,1,${l},${(this._x1 = s)},${(this._y1 = f)}`
          : p > It &&
            this
              ._append`A${n},${n},0,${+(p >= qo)},${l},${(this._x1 = t + n * Math.cos(a))},${(this._y1 = r + n * Math.sin(a))}`));
  }
  rect(t, r, n, i) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}h${(n = +n)}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function mc(e) {
  let t = 3;
  return (
    (e.digits = function (r) {
      if (!arguments.length) return t;
      if (r == null) t = null;
      else {
        const n = Math.floor(r);
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
        t = n;
      }
      return e;
    }),
    () => new _x(t)
  );
}
function gc(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function _h(e) {
  this._context = e;
}
_h.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function Ma(e) {
  return new _h(e);
}
function Ah(e) {
  return e[0];
}
function Ph(e) {
  return e[1];
}
function $h(e, t) {
  var r = ue(!0),
    n = null,
    i = Ma,
    a = null,
    o = mc(u);
  ((e = typeof e == "function" ? e : e === void 0 ? Ah : ue(e)),
    (t = typeof t == "function" ? t : t === void 0 ? Ph : ue(t)));
  function u(c) {
    var s,
      f = (c = gc(c)).length,
      l,
      p = !1,
      h;
    for (n == null && (a = i((h = o()))), s = 0; s <= f; ++s)
      (!(s < f && r((l = c[s]), s, c)) === p &&
        ((p = !p) ? a.lineStart() : a.lineEnd()),
        p && a.point(+e(l, s, c), +t(l, s, c)));
    if (h) return ((a = null), h + "" || null);
  }
  return (
    (u.x = function (c) {
      return arguments.length
        ? ((e = typeof c == "function" ? c : ue(+c)), u)
        : e;
    }),
    (u.y = function (c) {
      return arguments.length
        ? ((t = typeof c == "function" ? c : ue(+c)), u)
        : t;
    }),
    (u.defined = function (c) {
      return arguments.length
        ? ((r = typeof c == "function" ? c : ue(!!c)), u)
        : r;
    }),
    (u.curve = function (c) {
      return arguments.length ? ((i = c), n != null && (a = i(n)), u) : i;
    }),
    (u.context = function (c) {
      return arguments.length
        ? (c == null ? (n = a = null) : (a = i((n = c))), u)
        : n;
    }),
    u
  );
}
function Zn(e, t, r) {
  var n = null,
    i = ue(!0),
    a = null,
    o = Ma,
    u = null,
    c = mc(s);
  ((e = typeof e == "function" ? e : e === void 0 ? Ah : ue(+e)),
    (t = typeof t == "function" ? t : ue(t === void 0 ? 0 : +t)),
    (r = typeof r == "function" ? r : r === void 0 ? Ph : ue(+r)));
  function s(l) {
    var p,
      h,
      m,
      v = (l = gc(l)).length,
      d,
      b = !1,
      x,
      w = new Array(v),
      O = new Array(v);
    for (a == null && (u = o((x = c()))), p = 0; p <= v; ++p) {
      if (!(p < v && i((d = l[p]), p, l)) === b)
        if ((b = !b)) ((h = p), u.areaStart(), u.lineStart());
        else {
          for (u.lineEnd(), u.lineStart(), m = p - 1; m >= h; --m)
            u.point(w[m], O[m]);
          (u.lineEnd(), u.areaEnd());
        }
      b &&
        ((w[p] = +e(d, p, l)),
        (O[p] = +t(d, p, l)),
        u.point(n ? +n(d, p, l) : w[p], r ? +r(d, p, l) : O[p]));
    }
    if (x) return ((u = null), x + "" || null);
  }
  function f() {
    return $h().defined(i).curve(o).context(a);
  }
  return (
    (s.x = function (l) {
      return arguments.length
        ? ((e = typeof l == "function" ? l : ue(+l)), (n = null), s)
        : e;
    }),
    (s.x0 = function (l) {
      return arguments.length
        ? ((e = typeof l == "function" ? l : ue(+l)), s)
        : e;
    }),
    (s.x1 = function (l) {
      return arguments.length
        ? ((n = l == null ? null : typeof l == "function" ? l : ue(+l)), s)
        : n;
    }),
    (s.y = function (l) {
      return arguments.length
        ? ((t = typeof l == "function" ? l : ue(+l)), (r = null), s)
        : t;
    }),
    (s.y0 = function (l) {
      return arguments.length
        ? ((t = typeof l == "function" ? l : ue(+l)), s)
        : t;
    }),
    (s.y1 = function (l) {
      return arguments.length
        ? ((r = l == null ? null : typeof l == "function" ? l : ue(+l)), s)
        : r;
    }),
    (s.lineX0 = s.lineY0 =
      function () {
        return f().x(e).y(t);
      }),
    (s.lineY1 = function () {
      return f().x(e).y(r);
    }),
    (s.lineX1 = function () {
      return f().x(n).y(t);
    }),
    (s.defined = function (l) {
      return arguments.length
        ? ((i = typeof l == "function" ? l : ue(!!l)), s)
        : i;
    }),
    (s.curve = function (l) {
      return arguments.length ? ((o = l), a != null && (u = o(a)), s) : o;
    }),
    (s.context = function (l) {
      return arguments.length
        ? (l == null ? (a = u = null) : (u = o((a = l))), s)
        : a;
    }),
    s
  );
}
class Th {
  constructor(t, r) {
    ((this._context = t), (this._x = r));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(t, r) {
    switch (((t = +t), (r = +r), this._point)) {
      case 0: {
        ((this._point = 1),
          this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r));
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              r,
              t,
              r,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + r) / 2),
              t,
              this._y0,
              t,
              r,
            );
        break;
      }
    }
    ((this._x0 = t), (this._y0 = r));
  }
}
function Ax(e) {
  return new Th(e, !0);
}
function Px(e) {
  return new Th(e, !1);
}
const bc = {
    draw(e, t) {
      const r = Qe(t / yi);
      (e.moveTo(r, 0), e.arc(0, 0, r, 0, Ea));
    },
  },
  $x = {
    draw(e, t) {
      const r = Qe(t / 5) / 2;
      (e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath());
    },
  },
  jh = Qe(1 / 3),
  Tx = jh * 2,
  jx = {
    draw(e, t) {
      const r = Qe(t / Tx),
        n = r * jh;
      (e.moveTo(0, -r),
        e.lineTo(n, 0),
        e.lineTo(0, r),
        e.lineTo(-n, 0),
        e.closePath());
    },
  },
  Ex = {
    draw(e, t) {
      const r = Qe(t),
        n = -r / 2;
      e.rect(n, n, r, r);
    },
  },
  Mx = 0.8908130915292852,
  Eh = vi(yi / 10) / vi((7 * yi) / 10),
  Cx = vi(Ea / 10) * Eh,
  Ix = -Oh(Ea / 10) * Eh,
  Nx = {
    draw(e, t) {
      const r = Qe(t * Mx),
        n = Cx * r,
        i = Ix * r;
      (e.moveTo(0, -r), e.lineTo(n, i));
      for (let a = 1; a < 5; ++a) {
        const o = (Ea * a) / 5,
          u = Oh(o),
          c = vi(o);
        (e.lineTo(c * r, -u * r), e.lineTo(u * n - c * i, c * n + u * i));
      }
      e.closePath();
    },
  },
  so = Qe(3),
  kx = {
    draw(e, t) {
      const r = -Qe(t / (so * 3));
      (e.moveTo(0, r * 2),
        e.lineTo(-so * r, -r),
        e.lineTo(so * r, -r),
        e.closePath());
    },
  },
  Fe = -0.5,
  Ue = Qe(3) / 2,
  Ko = 1 / Qe(12),
  Dx = (Ko / 2 + 1) * 3,
  Bx = {
    draw(e, t) {
      const r = Qe(t / Dx),
        n = r / 2,
        i = r * Ko,
        a = n,
        o = r * Ko + r,
        u = -a,
        c = o;
      (e.moveTo(n, i),
        e.lineTo(a, o),
        e.lineTo(u, c),
        e.lineTo(Fe * n - Ue * i, Ue * n + Fe * i),
        e.lineTo(Fe * a - Ue * o, Ue * a + Fe * o),
        e.lineTo(Fe * u - Ue * c, Ue * u + Fe * c),
        e.lineTo(Fe * n + Ue * i, Fe * i - Ue * n),
        e.lineTo(Fe * a + Ue * o, Fe * o - Ue * a),
        e.lineTo(Fe * u + Ue * c, Fe * c - Ue * u),
        e.closePath());
    },
  };
function Rx(e, t) {
  let r = null,
    n = mc(i);
  ((e = typeof e == "function" ? e : ue(e || bc)),
    (t = typeof t == "function" ? t : ue(t === void 0 ? 64 : +t)));
  function i() {
    let a;
    if (
      (r || (r = a = n()),
      e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
      a)
    )
      return ((r = null), a + "" || null);
  }
  return (
    (i.type = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : ue(a)), i)
        : e;
    }),
    (i.size = function (a) {
      return arguments.length
        ? ((t = typeof a == "function" ? a : ue(+a)), i)
        : t;
    }),
    (i.context = function (a) {
      return arguments.length ? ((r = a ?? null), i) : r;
    }),
    i
  );
}
function mi() {}
function gi(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6,
  );
}
function Mh(e) {
  this._context = e;
}
Mh.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        gi(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          ));
      default:
        gi(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Lx(e) {
  return new Mh(e);
}
function Ch(e) {
  this._context = e;
}
Ch.prototype = {
  areaStart: mi,
  areaEnd: mi,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        (this._context.moveTo(this._x2, this._y2), this._context.closePath());
        break;
      }
      case 2: {
        (this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath());
        break;
      }
      case 3: {
        (this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4));
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), (this._x2 = e), (this._y2 = t));
        break;
      case 1:
        ((this._point = 2), (this._x3 = e), (this._y3 = t));
        break;
      case 2:
        ((this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          ));
        break;
      default:
        gi(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Fx(e) {
  return new Ch(e);
}
function Ih(e) {
  this._context = e;
}
Ih.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        gi(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Ux(e) {
  return new Ih(e);
}
function Nh(e) {
  this._context = e;
}
Nh.prototype = {
  areaStart: mi,
  areaEnd: mi,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    ((e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t)));
  },
};
function Wx(e) {
  return new Nh(e);
}
function Ts(e) {
  return e < 0 ? -1 : 1;
}
function js(e, t, r) {
  var n = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
    o = (r - e._y1) / (i || (n < 0 && -0)),
    u = (a * i + o * n) / (n + i);
  return (
    (Ts(a) + Ts(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0
  );
}
function Es(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function lo(e, t, r) {
  var n = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function bi(e) {
  this._context = e;
}
bi.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        lo(this, this._t0, Es(this, this._t0));
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          ((this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t));
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          ((this._point = 3), lo(this, Es(this, (r = js(this, e, t))), r));
          break;
        default:
          lo(this, this._t0, (r = js(this, e, t)));
          break;
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = r));
    }
  },
};
function kh(e) {
  this._context = new Dh(e);
}
(kh.prototype = Object.create(bi.prototype)).point = function (e, t) {
  bi.prototype.point.call(this, t, e);
};
function Dh(e) {
  this._context = e;
}
Dh.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  },
};
function zx(e) {
  return new bi(e);
}
function Hx(e) {
  return new kh(e);
}
function Bh(e) {
  this._context = e;
}
Bh.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = []), (this._y = []));
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        r === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Ms(e), i = Ms(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(
            n[0][a],
            i[0][a],
            n[1][a],
            i[1][a],
            e[o],
            t[o],
          );
    ((this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null));
  },
  point: function (e, t) {
    (this._x.push(+e), this._y.push(+t));
  },
};
function Ms(e) {
  var t,
    r = e.length - 1,
    n,
    i = new Array(r),
    a = new Array(r),
    o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    ((i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]));
  for (
    i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1;
    t < r;
    ++t
  )
    ((n = i[t] / a[t - 1]), (a[t] -= n), (o[t] -= n * o[t - 1]));
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function qx(e) {
  return new Bh(e);
}
function Ca(e, t) {
  ((this._context = e), (this._t = t));
}
Ca.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = this._y = NaN), (this._point = 0));
  },
  lineEnd: function () {
    (0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line)));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          (this._context.lineTo(r, this._y), this._context.lineTo(r, t));
        }
        break;
      }
    }
    ((this._x = e), (this._y = t));
  },
};
function Gx(e) {
  return new Ca(e, 0.5);
}
function Kx(e) {
  return new Ca(e, 0);
}
function Xx(e) {
  return new Ca(e, 1);
}
function fr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Xo(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function Vx(e, t) {
  return e[t];
}
function Yx(e) {
  const t = [];
  return ((t.key = e), t);
}
function Zx() {
  var e = ue([]),
    t = Xo,
    r = fr,
    n = Vx;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), Yx),
      u,
      c = o.length,
      s = -1,
      f;
    for (const l of a)
      for (u = 0, ++s; u < c; ++u)
        (o[u][s] = [0, +n(l, o[u].key, s, a)]).data = l;
    for (u = 0, f = gc(t(o)); u < c; ++u) o[f[u]].index = u;
    return (r(o, f), o);
  }
  return (
    (i.keys = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : ue(Array.from(a))), i)
        : e;
    }),
    (i.value = function (a) {
      return arguments.length
        ? ((n = typeof a == "function" ? a : ue(+a)), i)
        : n;
    }),
    (i.order = function (a) {
      return arguments.length
        ? ((t =
            a == null ? Xo : typeof a == "function" ? a : ue(Array.from(a))),
          i)
        : t;
    }),
    (i.offset = function (a) {
      return arguments.length ? ((r = a ?? fr), i) : r;
    }),
    i
  );
}
function Jx(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    fr(e, t);
  }
}
function Qx(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    fr(e, t);
  }
}
function ew(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, c = 0, s = 0; u < o; ++u) {
        for (
          var f = e[t[u]],
            l = f[n][1] || 0,
            p = f[n - 1][1] || 0,
            h = (l - p) / 2,
            m = 0;
          m < u;
          ++m
        ) {
          var v = e[t[m]],
            d = v[n][1] || 0,
            b = v[n - 1][1] || 0;
          h += d - b;
        }
        ((c += l), (s += h * l));
      }
      ((i[n - 1][1] += i[n - 1][0] = r), c && (r -= s / c));
    }
    ((i[n - 1][1] += i[n - 1][0] = r), fr(e, t));
  }
}
function on(e) {
  "@babel/helpers - typeof";
  return (
    (on =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    on(e)
  );
}
var tw = ["type", "size", "sizeType"];
function Vo() {
  return (
    (Vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Vo.apply(this, arguments)
  );
}
function Cs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cs(Object(r), !0).forEach(function (n) {
          rw(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cs(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function rw(e, t, r) {
  return (
    (t = nw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function nw(e) {
  var t = iw(e, "string");
  return on(t) == "symbol" ? t : t + "";
}
function iw(e, t) {
  if (on(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (on(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function aw(e, t) {
  if (e == null) return {};
  var r = ow(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function ow(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Rh = {
    symbolCircle: bc,
    symbolCross: $x,
    symbolDiamond: jx,
    symbolSquare: Ex,
    symbolStar: Nx,
    symbolTriangle: kx,
    symbolWye: Bx,
  },
  uw = Math.PI / 180,
  cw = function (t) {
    var r = "symbol".concat(ja(t));
    return Rh[r] || bc;
  },
  sw = function (t, r, n) {
    if (r === "area") return t;
    switch (n) {
      case "cross":
        return (5 * t * t) / 9;
      case "diamond":
        return (0.5 * t * t) / Math.sqrt(3);
      case "square":
        return t * t;
      case "star": {
        var i = 18 * uw;
        return (
          1.25 *
          t *
          t *
          (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
        );
      }
      case "triangle":
        return (Math.sqrt(3) * t * t) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
      default:
        return (Math.PI * t * t) / 4;
    }
  },
  lw = function (t, r) {
    Rh["symbol".concat(ja(t))] = r;
  },
  xc = function (t) {
    var r = t.type,
      n = r === void 0 ? "circle" : r,
      i = t.size,
      a = i === void 0 ? 64 : i,
      o = t.sizeType,
      u = o === void 0 ? "area" : o,
      c = aw(t, tw),
      s = Is(Is({}, c), {}, { type: n, size: a, sizeType: u }),
      f = function () {
        var d = cw(n),
          b = Rx()
            .type(d)
            .size(sw(a, u, n));
        return b();
      },
      l = s.className,
      p = s.cx,
      h = s.cy,
      m = ne(s, !0);
    return p === +p && h === +h && a === +a
      ? $.createElement(
          "path",
          Vo({}, m, {
            className: ee("recharts-symbols", l),
            transform: "translate(".concat(p, ", ").concat(h, ")"),
            d: f(),
          }),
        )
      : null;
  };
xc.registerSymbol = lw;
function pr(e) {
  "@babel/helpers - typeof";
  return (
    (pr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    pr(e)
  );
}
function Yo() {
  return (
    (Yo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Yo.apply(this, arguments)
  );
}
function Ns(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function fw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ns(Object(r), !0).forEach(function (n) {
          un(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ns(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function pw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Fh(n.key), n));
  }
}
function dw(e, t, r) {
  return (
    t && hw(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function vw(e, t, r) {
  return (
    (t = xi(t)),
    yw(
      e,
      Lh() ? Reflect.construct(t, r || [], xi(e).constructor) : t.apply(e, r),
    )
  );
}
function yw(e, t) {
  if (t && (pr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return mw(e);
}
function mw(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Lh() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Lh = function () {
    return !!e;
  })();
}
function xi(e) {
  return (
    (xi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    xi(e)
  );
}
function gw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Zo(e, t));
}
function Zo(e, t) {
  return (
    (Zo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Zo(e, t)
  );
}
function un(e, t, r) {
  return (
    (t = Fh(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Fh(e) {
  var t = bw(e, "string");
  return pr(t) == "symbol" ? t : t + "";
}
function bw(e, t) {
  if (pr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var We = 32,
  wc = (function (e) {
    function t() {
      return (pw(this, t), vw(this, t, arguments));
    }
    return (
      gw(t, e),
      dw(t, [
        {
          key: "renderIcon",
          value: function (n) {
            var i = this.props.inactiveColor,
              a = We / 2,
              o = We / 6,
              u = We / 3,
              c = n.inactive ? i : n.color;
            if (n.type === "plainline")
              return $.createElement("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: c,
                strokeDasharray: n.payload.strokeDasharray,
                x1: 0,
                y1: a,
                x2: We,
                y2: a,
                className: "recharts-legend-icon",
              });
            if (n.type === "line")
              return $.createElement("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: c,
                d: "M0,"
                  .concat(a, "h")
                  .concat(
                    u,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(2 * u, ",")
                  .concat(
                    a,
                    `
            H`,
                  )
                  .concat(We, "M")
                  .concat(2 * u, ",")
                  .concat(
                    a,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(u, ",")
                  .concat(a),
                className: "recharts-legend-icon",
              });
            if (n.type === "rect")
              return $.createElement("path", {
                stroke: "none",
                fill: c,
                d: "M0,"
                  .concat(We / 8, "h")
                  .concat(We, "v")
                  .concat((We * 3) / 4, "h")
                  .concat(-We, "z"),
                className: "recharts-legend-icon",
              });
            if ($.isValidElement(n.legendIcon)) {
              var s = fw({}, n);
              return (delete s.legendIcon, $.cloneElement(n.legendIcon, s));
            }
            return $.createElement(xc, {
              fill: c,
              cx: a,
              cy: a,
              size: We,
              sizeType: "diameter",
              type: n.type,
            });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var n = this,
              i = this.props,
              a = i.payload,
              o = i.iconSize,
              u = i.layout,
              c = i.formatter,
              s = i.inactiveColor,
              f = { x: 0, y: 0, width: We, height: We },
              l = {
                display: u === "horizontal" ? "inline-block" : "block",
                marginRight: 10,
              },
              p = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4,
              };
            return a.map(function (h, m) {
              var v = h.formatter || c,
                d = ee(
                  un(
                    un(
                      { "recharts-legend-item": !0 },
                      "legend-item-".concat(m),
                      !0,
                    ),
                    "inactive",
                    h.inactive,
                  ),
                );
              if (h.type === "none") return null;
              var b = Z(h.value) ? null : h.value;
              Ft(
                !Z(h.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
              );
              var x = h.inactive ? s : h.color;
              return $.createElement(
                "li",
                Yo(
                  { className: d, style: l, key: "legend-item-".concat(m) },
                  di(n.props, h, m),
                ),
                $.createElement(
                  Uo,
                  { width: o, height: o, viewBox: f, style: p },
                  n.renderIcon(h),
                ),
                $.createElement(
                  "span",
                  {
                    className: "recharts-legend-item-text",
                    style: { color: x },
                  },
                  v ? v(b, h, m) : b,
                ),
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.payload,
              a = n.layout,
              o = n.align;
            if (!i || !i.length) return null;
            var u = {
              padding: 0,
              margin: 0,
              textAlign: a === "horizontal" ? o : "left",
            };
            return $.createElement(
              "ul",
              { className: "recharts-default-legend", style: u },
              this.renderItems(),
            );
          },
        },
      ])
    );
  })(R.PureComponent);
un(wc, "displayName", "Legend");
un(wc, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc",
});
var xw = va;
function ww() {
  ((this.__data__ = new xw()), (this.size = 0));
}
var Ow = ww;
function Sw(e) {
  var t = this.__data__,
    r = t.delete(e);
  return ((this.size = t.size), r);
}
var _w = Sw;
function Aw(e) {
  return this.__data__.get(e);
}
var Pw = Aw;
function $w(e) {
  return this.__data__.has(e);
}
var Tw = $w,
  jw = va,
  Ew = cc,
  Mw = sc,
  Cw = 200;
function Iw(e, t) {
  var r = this.__data__;
  if (r instanceof jw) {
    var n = r.__data__;
    if (!Ew || n.length < Cw - 1)
      return (n.push([e, t]), (this.size = ++r.size), this);
    r = this.__data__ = new Mw(n);
  }
  return (r.set(e, t), (this.size = r.size), this);
}
var Nw = Iw,
  kw = va,
  Dw = Ow,
  Bw = _w,
  Rw = Pw,
  Lw = Tw,
  Fw = Nw;
function Br(e) {
  var t = (this.__data__ = new kw(e));
  this.size = t.size;
}
Br.prototype.clear = Dw;
Br.prototype.delete = Bw;
Br.prototype.get = Rw;
Br.prototype.has = Lw;
Br.prototype.set = Fw;
var Uh = Br,
  Uw = "__lodash_hash_undefined__";
function Ww(e) {
  return (this.__data__.set(e, Uw), this);
}
var zw = Ww;
function Hw(e) {
  return this.__data__.has(e);
}
var qw = Hw,
  Gw = sc,
  Kw = zw,
  Xw = qw;
function wi(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.__data__ = new Gw(); ++t < r; ) this.add(e[t]);
}
wi.prototype.add = wi.prototype.push = Kw;
wi.prototype.has = Xw;
var Wh = wi;
function Vw(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e)) return !0;
  return !1;
}
var zh = Vw;
function Yw(e, t) {
  return e.has(t);
}
var Hh = Yw,
  Zw = Wh,
  Jw = zh,
  Qw = Hh,
  e1 = 1,
  t1 = 2;
function r1(e, t, r, n, i, a) {
  var o = r & e1,
    u = e.length,
    c = t.length;
  if (u != c && !(o && c > u)) return !1;
  var s = a.get(e),
    f = a.get(t);
  if (s && f) return s == t && f == e;
  var l = -1,
    p = !0,
    h = r & t1 ? new Zw() : void 0;
  for (a.set(e, t), a.set(t, e); ++l < u; ) {
    var m = e[l],
      v = t[l];
    if (n) var d = o ? n(v, m, l, t, e, a) : n(m, v, l, e, t, a);
    if (d !== void 0) {
      if (d) continue;
      p = !1;
      break;
    }
    if (h) {
      if (
        !Jw(t, function (b, x) {
          if (!Qw(h, x) && (m === b || i(m, b, r, n, a))) return h.push(x);
        })
      ) {
        p = !1;
        break;
      }
    } else if (!(m === v || i(m, v, r, n, a))) {
      p = !1;
      break;
    }
  }
  return (a.delete(e), a.delete(t), p);
}
var qh = r1,
  n1 = ot,
  i1 = n1.Uint8Array,
  a1 = i1;
function o1(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n, i) {
      r[++t] = [i, n];
    }),
    r
  );
}
var u1 = o1;
function c1(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n) {
      r[++t] = n;
    }),
    r
  );
}
var Oc = c1,
  ks = Un,
  Ds = a1,
  s1 = uc,
  l1 = qh,
  f1 = u1,
  p1 = Oc,
  h1 = 1,
  d1 = 2,
  v1 = "[object Boolean]",
  y1 = "[object Date]",
  m1 = "[object Error]",
  g1 = "[object Map]",
  b1 = "[object Number]",
  x1 = "[object RegExp]",
  w1 = "[object Set]",
  O1 = "[object String]",
  S1 = "[object Symbol]",
  _1 = "[object ArrayBuffer]",
  A1 = "[object DataView]",
  Bs = ks ? ks.prototype : void 0,
  fo = Bs ? Bs.valueOf : void 0;
function P1(e, t, r, n, i, a, o) {
  switch (r) {
    case A1:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      ((e = e.buffer), (t = t.buffer));
    case _1:
      return !(e.byteLength != t.byteLength || !a(new Ds(e), new Ds(t)));
    case v1:
    case y1:
    case b1:
      return s1(+e, +t);
    case m1:
      return e.name == t.name && e.message == t.message;
    case x1:
    case O1:
      return e == t + "";
    case g1:
      var u = f1;
    case w1:
      var c = n & h1;
      if ((u || (u = p1), e.size != t.size && !c)) return !1;
      var s = o.get(e);
      if (s) return s == t;
      ((n |= d1), o.set(e, t));
      var f = l1(u(e), u(t), n, i, a, o);
      return (o.delete(e), f);
    case S1:
      if (fo) return fo.call(e) == fo.call(t);
  }
  return !1;
}
var $1 = P1;
function T1(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
  return e;
}
var Gh = T1,
  j1 = Gh,
  E1 = ke;
function M1(e, t, r) {
  var n = t(e);
  return E1(e) ? n : j1(n, r(e));
}
var C1 = M1;
function I1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var N1 = I1;
function k1() {
  return [];
}
var D1 = k1,
  B1 = N1,
  R1 = D1,
  L1 = Object.prototype,
  F1 = L1.propertyIsEnumerable,
  Rs = Object.getOwnPropertySymbols,
  U1 = Rs
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            B1(Rs(e), function (t) {
              return F1.call(e, t);
            }));
      }
    : R1,
  W1 = U1;
function z1(e, t) {
  for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
  return n;
}
var H1 = z1,
  q1 = mt,
  G1 = gt,
  K1 = "[object Arguments]";
function X1(e) {
  return G1(e) && q1(e) == K1;
}
var V1 = X1,
  Ls = V1,
  Y1 = gt,
  Kh = Object.prototype,
  Z1 = Kh.hasOwnProperty,
  J1 = Kh.propertyIsEnumerable,
  Q1 = Ls(
    (function () {
      return arguments;
    })(),
  )
    ? Ls
    : function (e) {
        return Y1(e) && Z1.call(e, "callee") && !J1.call(e, "callee");
      },
  Sc = Q1,
  Oi = { exports: {} };
function eO() {
  return !1;
}
var tO = eO;
Oi.exports;
(function (e, t) {
  var r = ot,
    n = tO,
    i = t && !t.nodeType && t,
    a = i && !0 && e && !e.nodeType && e,
    o = a && a.exports === i,
    u = o ? r.Buffer : void 0,
    c = u ? u.isBuffer : void 0,
    s = c || n;
  e.exports = s;
})(Oi, Oi.exports);
var Xh = Oi.exports,
  rO = 9007199254740991,
  nO = /^(?:0|[1-9]\d*)$/;
function iO(e, t) {
  var r = typeof e;
  return (
    (t = t ?? rO),
    !!t &&
      (r == "number" || (r != "symbol" && nO.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var _c = iO,
  aO = 9007199254740991;
function oO(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= aO;
}
var Ac = oO,
  uO = mt,
  cO = Ac,
  sO = gt,
  lO = "[object Arguments]",
  fO = "[object Array]",
  pO = "[object Boolean]",
  hO = "[object Date]",
  dO = "[object Error]",
  vO = "[object Function]",
  yO = "[object Map]",
  mO = "[object Number]",
  gO = "[object Object]",
  bO = "[object RegExp]",
  xO = "[object Set]",
  wO = "[object String]",
  OO = "[object WeakMap]",
  SO = "[object ArrayBuffer]",
  _O = "[object DataView]",
  AO = "[object Float32Array]",
  PO = "[object Float64Array]",
  $O = "[object Int8Array]",
  TO = "[object Int16Array]",
  jO = "[object Int32Array]",
  EO = "[object Uint8Array]",
  MO = "[object Uint8ClampedArray]",
  CO = "[object Uint16Array]",
  IO = "[object Uint32Array]",
  se = {};
se[AO] =
  se[PO] =
  se[$O] =
  se[TO] =
  se[jO] =
  se[EO] =
  se[MO] =
  se[CO] =
  se[IO] =
    !0;
se[lO] =
  se[fO] =
  se[SO] =
  se[pO] =
  se[_O] =
  se[hO] =
  se[dO] =
  se[vO] =
  se[yO] =
  se[mO] =
  se[gO] =
  se[bO] =
  se[xO] =
  se[wO] =
  se[OO] =
    !1;
function NO(e) {
  return sO(e) && cO(e.length) && !!se[uO(e)];
}
var kO = NO;
function DO(e) {
  return function (t) {
    return e(t);
  };
}
var Vh = DO,
  Si = { exports: {} };
Si.exports;
(function (e, t) {
  var r = nh,
    n = t && !t.nodeType && t,
    i = n && !0 && e && !e.nodeType && e,
    a = i && i.exports === n,
    o = a && r.process,
    u = (function () {
      try {
        var c = i && i.require && i.require("util").types;
        return c || (o && o.binding && o.binding("util"));
      } catch {}
    })();
  e.exports = u;
})(Si, Si.exports);
var BO = Si.exports,
  RO = kO,
  LO = Vh,
  Fs = BO,
  Us = Fs && Fs.isTypedArray,
  FO = Us ? LO(Us) : RO,
  Yh = FO,
  UO = H1,
  WO = Sc,
  zO = ke,
  HO = Xh,
  qO = _c,
  GO = Yh,
  KO = Object.prototype,
  XO = KO.hasOwnProperty;
function VO(e, t) {
  var r = zO(e),
    n = !r && WO(e),
    i = !r && !n && HO(e),
    a = !r && !n && !i && GO(e),
    o = r || n || i || a,
    u = o ? UO(e.length, String) : [],
    c = u.length;
  for (var s in e)
    (t || XO.call(e, s)) &&
      !(
        o &&
        (s == "length" ||
          (i && (s == "offset" || s == "parent")) ||
          (a && (s == "buffer" || s == "byteLength" || s == "byteOffset")) ||
          qO(s, c))
      ) &&
      u.push(s);
  return u;
}
var YO = VO,
  ZO = Object.prototype;
function JO(e) {
  var t = e && e.constructor,
    r = (typeof t == "function" && t.prototype) || ZO;
  return e === r;
}
var QO = JO;
function eS(e, t) {
  return function (r) {
    return e(t(r));
  };
}
var Zh = eS,
  tS = Zh,
  rS = tS(Object.keys, Object),
  nS = rS,
  iS = QO,
  aS = nS,
  oS = Object.prototype,
  uS = oS.hasOwnProperty;
function cS(e) {
  if (!iS(e)) return aS(e);
  var t = [];
  for (var r in Object(e)) uS.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var sS = cS,
  lS = oc,
  fS = Ac;
function pS(e) {
  return e != null && fS(e.length) && !lS(e);
}
var Ia = pS,
  hS = YO,
  dS = sS,
  vS = Ia;
function yS(e) {
  return vS(e) ? hS(e) : dS(e);
}
var Pc = yS,
  mS = C1,
  gS = W1,
  bS = Pc;
function xS(e) {
  return mS(e, bS, gS);
}
var wS = xS,
  Ws = wS,
  OS = 1,
  SS = Object.prototype,
  _S = SS.hasOwnProperty;
function AS(e, t, r, n, i, a) {
  var o = r & OS,
    u = Ws(e),
    c = u.length,
    s = Ws(t),
    f = s.length;
  if (c != f && !o) return !1;
  for (var l = c; l--; ) {
    var p = u[l];
    if (!(o ? p in t : _S.call(t, p))) return !1;
  }
  var h = a.get(e),
    m = a.get(t);
  if (h && m) return h == t && m == e;
  var v = !0;
  (a.set(e, t), a.set(t, e));
  for (var d = o; ++l < c; ) {
    p = u[l];
    var b = e[p],
      x = t[p];
    if (n) var w = o ? n(x, b, p, t, e, a) : n(b, x, p, e, t, a);
    if (!(w === void 0 ? b === x || i(b, x, r, n, a) : w)) {
      v = !1;
      break;
    }
    d || (d = p == "constructor");
  }
  if (v && !d) {
    var O = e.constructor,
      y = t.constructor;
    O != y &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof O == "function" &&
        O instanceof O &&
        typeof y == "function" &&
        y instanceof y
      ) &&
      (v = !1);
  }
  return (a.delete(e), a.delete(t), v);
}
var PS = AS,
  $S = Xt,
  TS = ot,
  jS = $S(TS, "DataView"),
  ES = jS,
  MS = Xt,
  CS = ot,
  IS = MS(CS, "Promise"),
  NS = IS,
  kS = Xt,
  DS = ot,
  BS = kS(DS, "Set"),
  Jh = BS,
  RS = Xt,
  LS = ot,
  FS = RS(LS, "WeakMap"),
  US = FS,
  Jo = ES,
  Qo = cc,
  eu = NS,
  tu = Jh,
  ru = US,
  Qh = mt,
  Rr = ah,
  zs = "[object Map]",
  WS = "[object Object]",
  Hs = "[object Promise]",
  qs = "[object Set]",
  Gs = "[object WeakMap]",
  Ks = "[object DataView]",
  zS = Rr(Jo),
  HS = Rr(Qo),
  qS = Rr(eu),
  GS = Rr(tu),
  KS = Rr(ru),
  Nt = Qh;
((Jo && Nt(new Jo(new ArrayBuffer(1))) != Ks) ||
  (Qo && Nt(new Qo()) != zs) ||
  (eu && Nt(eu.resolve()) != Hs) ||
  (tu && Nt(new tu()) != qs) ||
  (ru && Nt(new ru()) != Gs)) &&
  (Nt = function (e) {
    var t = Qh(e),
      r = t == WS ? e.constructor : void 0,
      n = r ? Rr(r) : "";
    if (n)
      switch (n) {
        case zS:
          return Ks;
        case HS:
          return zs;
        case qS:
          return Hs;
        case GS:
          return qs;
        case KS:
          return Gs;
      }
    return t;
  });
var XS = Nt,
  po = Uh,
  VS = qh,
  YS = $1,
  ZS = PS,
  Xs = XS,
  Vs = ke,
  Ys = Xh,
  JS = Yh,
  QS = 1,
  Zs = "[object Arguments]",
  Js = "[object Array]",
  Jn = "[object Object]",
  e_ = Object.prototype,
  Qs = e_.hasOwnProperty;
function t_(e, t, r, n, i, a) {
  var o = Vs(e),
    u = Vs(t),
    c = o ? Js : Xs(e),
    s = u ? Js : Xs(t);
  ((c = c == Zs ? Jn : c), (s = s == Zs ? Jn : s));
  var f = c == Jn,
    l = s == Jn,
    p = c == s;
  if (p && Ys(e)) {
    if (!Ys(t)) return !1;
    ((o = !0), (f = !1));
  }
  if (p && !f)
    return (
      a || (a = new po()),
      o || JS(e) ? VS(e, t, r, n, i, a) : YS(e, t, c, r, n, i, a)
    );
  if (!(r & QS)) {
    var h = f && Qs.call(e, "__wrapped__"),
      m = l && Qs.call(t, "__wrapped__");
    if (h || m) {
      var v = h ? e.value() : e,
        d = m ? t.value() : t;
      return (a || (a = new po()), i(v, d, r, n, a));
    }
  }
  return p ? (a || (a = new po()), ZS(e, t, r, n, i, a)) : !1;
}
var r_ = t_,
  n_ = r_,
  el = gt;
function ed(e, t, r, n, i) {
  return e === t
    ? !0
    : e == null || t == null || (!el(e) && !el(t))
      ? e !== e && t !== t
      : n_(e, t, r, n, ed, i);
}
var $c = ed,
  i_ = Uh,
  a_ = $c,
  o_ = 1,
  u_ = 2;
function c_(e, t, r, n) {
  var i = r.length,
    a = i,
    o = !n;
  if (e == null) return !a;
  for (e = Object(e); i--; ) {
    var u = r[i];
    if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
  }
  for (; ++i < a; ) {
    u = r[i];
    var c = u[0],
      s = e[c],
      f = u[1];
    if (o && u[2]) {
      if (s === void 0 && !(c in e)) return !1;
    } else {
      var l = new i_();
      if (n) var p = n(s, f, c, e, t, l);
      if (!(p === void 0 ? a_(f, s, o_ | u_, n, l) : p)) return !1;
    }
  }
  return !0;
}
var s_ = c_,
  l_ = At;
function f_(e) {
  return e === e && !l_(e);
}
var td = f_,
  p_ = td,
  h_ = Pc;
function d_(e) {
  for (var t = h_(e), r = t.length; r--; ) {
    var n = t[r],
      i = e[n];
    t[r] = [n, i, p_(i)];
  }
  return t;
}
var v_ = d_;
function y_(e, t) {
  return function (r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var rd = y_,
  m_ = s_,
  g_ = v_,
  b_ = rd;
function x_(e) {
  var t = g_(e);
  return t.length == 1 && t[0][2]
    ? b_(t[0][0], t[0][1])
    : function (r) {
        return r === e || m_(r, e, t);
      };
}
var w_ = x_;
function O_(e, t) {
  return e != null && t in Object(e);
}
var S_ = O_,
  __ = lh,
  A_ = Sc,
  P_ = ke,
  $_ = _c,
  T_ = Ac,
  j_ = ma;
function E_(e, t, r) {
  t = __(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = j_(t[n]);
    if (!(a = e != null && r(e, o))) break;
    e = e[o];
  }
  return a || ++n != i
    ? a
    : ((i = e == null ? 0 : e.length),
      !!i && T_(i) && $_(o, i) && (P_(e) || A_(e)));
}
var M_ = E_,
  C_ = S_,
  I_ = M_;
function N_(e, t) {
  return e != null && I_(e, t, C_);
}
var k_ = N_,
  D_ = $c,
  B_ = fh,
  R_ = k_,
  L_ = ac,
  F_ = td,
  U_ = rd,
  W_ = ma,
  z_ = 1,
  H_ = 2;
function q_(e, t) {
  return L_(e) && F_(t)
    ? U_(W_(e), t)
    : function (r) {
        var n = B_(r, e);
        return n === void 0 && n === t ? R_(r, e) : D_(t, n, z_ | H_);
      };
}
var G_ = q_;
function K_(e) {
  return e;
}
var Lr = K_;
function X_(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var V_ = X_,
  Y_ = pc;
function Z_(e) {
  return function (t) {
    return Y_(t, e);
  };
}
var J_ = Z_,
  Q_ = V_,
  eA = J_,
  tA = ac,
  rA = ma;
function nA(e) {
  return tA(e) ? Q_(rA(e)) : eA(e);
}
var iA = nA,
  aA = w_,
  oA = G_,
  uA = Lr,
  cA = ke,
  sA = iA;
function lA(e) {
  return typeof e == "function"
    ? e
    : e == null
      ? uA
      : typeof e == "object"
        ? cA(e)
          ? oA(e[0], e[1])
          : aA(e)
        : sA(e);
}
var Fr = lA;
function fA(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e)) return a;
  return -1;
}
var pA = fA;
function hA(e) {
  return e !== e;
}
var dA = hA;
function vA(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n;
  return -1;
}
var yA = vA,
  mA = pA,
  gA = dA,
  bA = yA;
function xA(e, t, r) {
  return t === t ? bA(e, t, r) : mA(e, gA, r);
}
var wA = xA,
  OA = wA;
function SA(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && OA(e, t, 0) > -1;
}
var _A = SA;
function AA(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n])) return !0;
  return !1;
}
var PA = AA;
function $A() {}
var TA = $A,
  ho = Jh,
  jA = TA,
  EA = Oc,
  MA = 1 / 0,
  CA =
    ho && 1 / EA(new ho([, -0]))[1] == MA
      ? function (e) {
          return new ho(e);
        }
      : jA,
  IA = CA,
  NA = Wh,
  kA = _A,
  DA = PA,
  BA = Hh,
  RA = IA,
  LA = Oc,
  FA = 200;
function UA(e, t, r) {
  var n = -1,
    i = kA,
    a = e.length,
    o = !0,
    u = [],
    c = u;
  if (r) ((o = !1), (i = DA));
  else if (a >= FA) {
    var s = t ? null : RA(e);
    if (s) return LA(s);
    ((o = !1), (i = BA), (c = new NA()));
  } else c = t ? [] : u;
  e: for (; ++n < a; ) {
    var f = e[n],
      l = t ? t(f) : f;
    if (((f = r || f !== 0 ? f : 0), o && l === l)) {
      for (var p = c.length; p--; ) if (c[p] === l) continue e;
      (t && c.push(l), u.push(f));
    } else i(c, l, r) || (c !== u && c.push(l), u.push(f));
  }
  return u;
}
var WA = UA,
  zA = Fr,
  HA = WA;
function qA(e, t) {
  return e && e.length ? HA(e, zA(t)) : [];
}
var GA = qA;
const tl = fe(GA);
function nd(e, t, r) {
  return t === !0 ? tl(e, r) : Z(t) ? tl(e, t) : e;
}
function hr(e) {
  "@babel/helpers - typeof";
  return (
    (hr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    hr(e)
  );
}
var KA = ["ref"];
function rl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rl(Object(r), !0).forEach(function (n) {
          Na(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function XA(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ad(n.key), n));
  }
}
function VA(e, t, r) {
  return (
    t && nl(e.prototype, t),
    r && nl(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function YA(e, t, r) {
  return (
    (t = _i(t)),
    ZA(
      e,
      id() ? Reflect.construct(t, r || [], _i(e).constructor) : t.apply(e, r),
    )
  );
}
function ZA(e, t) {
  if (t && (hr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return JA(e);
}
function JA(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function id() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (id = function () {
    return !!e;
  })();
}
function _i(e) {
  return (
    (_i = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    _i(e)
  );
}
function QA(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && nu(e, t));
}
function nu(e, t) {
  return (
    (nu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    nu(e, t)
  );
}
function Na(e, t, r) {
  return (
    (t = ad(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ad(e) {
  var t = eP(e, "string");
  return hr(t) == "symbol" ? t : t + "";
}
function eP(e, t) {
  if (hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function tP(e, t) {
  if (e == null) return {};
  var r = rP(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function rP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function nP(e) {
  return e.value;
}
function iP(e, t) {
  if ($.isValidElement(e)) return $.cloneElement(e, t);
  if (typeof e == "function") return $.createElement(e, t);
  t.ref;
  var r = tP(t, KA);
  return $.createElement(wc, r);
}
var il = 1,
  cr = (function (e) {
    function t() {
      var r;
      XA(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return (
        (r = YA(this, t, [].concat(i))),
        Na(r, "lastBoundingBox", { width: -1, height: -1 }),
        r
      );
    }
    return (
      QA(t, e),
      VA(
        t,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var n = this.wrapperNode.getBoundingClientRect();
                return (
                  (n.height = this.wrapperNode.offsetHeight),
                  (n.width = this.wrapperNode.offsetWidth),
                  n
                );
              }
              return null;
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var n = this.props.onBBoxUpdate,
                i = this.getBBox();
              i
                ? (Math.abs(i.width - this.lastBoundingBox.width) > il ||
                    Math.abs(i.height - this.lastBoundingBox.height) > il) &&
                  ((this.lastBoundingBox.width = i.width),
                  (this.lastBoundingBox.height = i.height),
                  n && n(i))
                : (this.lastBoundingBox.width !== -1 ||
                    this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  n && n(null));
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              return this.lastBoundingBox.width >= 0 &&
                this.lastBoundingBox.height >= 0
                ? ut({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            },
          },
          {
            key: "getDefaultPosition",
            value: function (n) {
              var i = this.props,
                a = i.layout,
                o = i.align,
                u = i.verticalAlign,
                c = i.margin,
                s = i.chartWidth,
                f = i.chartHeight,
                l,
                p;
              if (
                !n ||
                ((n.left === void 0 || n.left === null) &&
                  (n.right === void 0 || n.right === null))
              )
                if (o === "center" && a === "vertical") {
                  var h = this.getBBoxSnapshot();
                  l = { left: ((s || 0) - h.width) / 2 };
                } else
                  l =
                    o === "right"
                      ? { right: (c && c.right) || 0 }
                      : { left: (c && c.left) || 0 };
              if (
                !n ||
                ((n.top === void 0 || n.top === null) &&
                  (n.bottom === void 0 || n.bottom === null))
              )
                if (u === "middle") {
                  var m = this.getBBoxSnapshot();
                  p = { top: ((f || 0) - m.height) / 2 };
                } else
                  p =
                    u === "bottom"
                      ? { bottom: (c && c.bottom) || 0 }
                      : { top: (c && c.top) || 0 };
              return ut(ut({}, l), p);
            },
          },
          {
            key: "render",
            value: function () {
              var n = this,
                i = this.props,
                a = i.content,
                o = i.width,
                u = i.height,
                c = i.wrapperStyle,
                s = i.payloadUniqBy,
                f = i.payload,
                l = ut(
                  ut(
                    {
                      position: "absolute",
                      width: o || "auto",
                      height: u || "auto",
                    },
                    this.getDefaultPosition(c),
                  ),
                  c,
                );
              return $.createElement(
                "div",
                {
                  className: "recharts-legend-wrapper",
                  style: l,
                  ref: function (h) {
                    n.wrapperNode = h;
                  },
                },
                iP(a, ut(ut({}, this.props), {}, { payload: nd(f, s, nP) })),
              );
            },
          },
        ],
        [
          {
            key: "getWithHeight",
            value: function (n, i) {
              var a = ut(ut({}, this.defaultProps), n.props),
                o = a.layout;
              return o === "vertical" && F(n.props.height)
                ? { height: n.props.height }
                : o === "horizontal"
                  ? { width: n.props.width || i }
                  : null;
            },
          },
        ],
      )
    );
  })(R.PureComponent);
Na(cr, "displayName", "Legend");
Na(cr, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom",
});
var al = Un,
  aP = Sc,
  oP = ke,
  ol = al ? al.isConcatSpreadable : void 0;
function uP(e) {
  return oP(e) || aP(e) || !!(ol && e && e[ol]);
}
var cP = uP,
  sP = Gh,
  lP = cP;
function od(e, t, r, n, i) {
  var a = -1,
    o = e.length;
  for (r || (r = lP), i || (i = []); ++a < o; ) {
    var u = e[a];
    t > 0 && r(u)
      ? t > 1
        ? od(u, t - 1, r, n, i)
        : sP(i, u)
      : n || (i[i.length] = u);
  }
  return i;
}
var ud = od;
function fP(e) {
  return function (t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), u = o.length; u--; ) {
      var c = o[e ? u : ++i];
      if (r(a[c], c, a) === !1) break;
    }
    return t;
  };
}
var pP = fP,
  hP = pP,
  dP = hP(),
  vP = dP,
  yP = vP,
  mP = Pc;
function gP(e, t) {
  return e && yP(e, t, mP);
}
var cd = gP,
  bP = Ia;
function xP(e, t) {
  return function (r, n) {
    if (r == null) return r;
    if (!bP(r)) return e(r, n);
    for (
      var i = r.length, a = t ? i : -1, o = Object(r);
      (t ? a-- : ++a < i) && n(o[a], a, o) !== !1;
    );
    return r;
  };
}
var wP = xP,
  OP = cd,
  SP = wP,
  _P = SP(OP),
  Tc = _P,
  AP = Tc,
  PP = Ia;
function $P(e, t) {
  var r = -1,
    n = PP(e) ? Array(e.length) : [];
  return (
    AP(e, function (i, a, o) {
      n[++r] = t(i, a, o);
    }),
    n
  );
}
var sd = $P;
function TP(e, t) {
  var r = e.length;
  for (e.sort(t); r--; ) e[r] = e[r].value;
  return e;
}
var jP = TP,
  ul = Cr;
function EP(e, t) {
  if (e !== t) {
    var r = e !== void 0,
      n = e === null,
      i = e === e,
      a = ul(e),
      o = t !== void 0,
      u = t === null,
      c = t === t,
      s = ul(t);
    if (
      (!u && !s && !a && e > t) ||
      (a && o && c && !u && !s) ||
      (n && o && c) ||
      (!r && c) ||
      !i
    )
      return 1;
    if (
      (!n && !a && !s && e < t) ||
      (s && r && i && !n && !a) ||
      (u && r && i) ||
      (!o && i) ||
      !c
    )
      return -1;
  }
  return 0;
}
var MP = EP,
  CP = MP;
function IP(e, t, r) {
  for (
    var n = -1, i = e.criteria, a = t.criteria, o = i.length, u = r.length;
    ++n < o;
  ) {
    var c = CP(i[n], a[n]);
    if (c) {
      if (n >= u) return c;
      var s = r[n];
      return c * (s == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var NP = IP,
  vo = fc,
  kP = pc,
  DP = Fr,
  BP = sd,
  RP = jP,
  LP = Vh,
  FP = NP,
  UP = Lr,
  WP = ke;
function zP(e, t, r) {
  t.length
    ? (t = vo(t, function (a) {
        return WP(a)
          ? function (o) {
              return kP(o, a.length === 1 ? a[0] : a);
            }
          : a;
      }))
    : (t = [UP]);
  var n = -1;
  t = vo(t, LP(DP));
  var i = BP(e, function (a, o, u) {
    var c = vo(t, function (s) {
      return s(a);
    });
    return { criteria: c, index: ++n, value: a };
  });
  return RP(i, function (a, o) {
    return FP(a, o, r);
  });
}
var HP = zP;
function qP(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var GP = qP,
  KP = GP,
  cl = Math.max;
function XP(e, t, r) {
  return (
    (t = cl(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var n = arguments, i = -1, a = cl(n.length - t, 0), o = Array(a);
        ++i < a;
      )
        o[i] = n[t + i];
      i = -1;
      for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
      return ((u[t] = r(o)), KP(e, this, u));
    }
  );
}
var VP = XP;
function YP(e) {
  return function () {
    return e;
  };
}
var ZP = YP,
  JP = Xt,
  QP = (function () {
    try {
      var e = JP(Object, "defineProperty");
      return (e({}, "", {}), e);
    } catch {}
  })(),
  ld = QP,
  e$ = ZP,
  sl = ld,
  t$ = Lr,
  r$ = sl
    ? function (e, t) {
        return sl(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: e$(t),
          writable: !0,
        });
      }
    : t$,
  n$ = r$,
  i$ = 800,
  a$ = 16,
  o$ = Date.now;
function u$(e) {
  var t = 0,
    r = 0;
  return function () {
    var n = o$(),
      i = a$ - (n - r);
    if (((r = n), i > 0)) {
      if (++t >= i$) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var c$ = u$,
  s$ = n$,
  l$ = c$,
  f$ = l$(s$),
  p$ = f$,
  h$ = Lr,
  d$ = VP,
  v$ = p$;
function y$(e, t) {
  return v$(d$(e, t, h$), e + "");
}
var m$ = y$,
  g$ = uc,
  b$ = Ia,
  x$ = _c,
  w$ = At;
function O$(e, t, r) {
  if (!w$(r)) return !1;
  var n = typeof t;
  return (n == "number" ? b$(r) && x$(t, r.length) : n == "string" && t in r)
    ? g$(r[t], e)
    : !1;
}
var ka = O$,
  S$ = ud,
  _$ = HP,
  A$ = m$,
  ll = ka,
  P$ = A$(function (e, t) {
    if (e == null) return [];
    var r = t.length;
    return (
      r > 1 && ll(e, t[0], t[1])
        ? (t = [])
        : r > 2 && ll(t[0], t[1], t[2]) && (t = [t[0]]),
      _$(e, S$(t, 1), [])
    );
  }),
  $$ = P$;
const jc = fe($$);
function cn(e) {
  "@babel/helpers - typeof";
  return (
    (cn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    cn(e)
  );
}
function iu() {
  return (
    (iu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    iu.apply(this, arguments)
  );
}
function T$(e, t) {
  return C$(e) || M$(e, t) || E$(e, t) || j$();
}
function j$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function E$(e, t) {
  if (e) {
    if (typeof e == "string") return fl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return fl(e, t);
  }
}
function fl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function M$(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function C$(e) {
  if (Array.isArray(e)) return e;
}
function pl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function yo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pl(Object(r), !0).forEach(function (n) {
          I$(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function I$(e, t, r) {
  return (
    (t = N$(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function N$(e) {
  var t = k$(e, "string");
  return cn(t) == "symbol" ? t : t + "";
}
function k$(e, t) {
  if (cn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (cn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function D$(e) {
  return Array.isArray(e) && Oe(e[0]) && Oe(e[1]) ? e.join(" ~ ") : e;
}
var B$ = function (t) {
  var r = t.separator,
    n = r === void 0 ? " : " : r,
    i = t.contentStyle,
    a = i === void 0 ? {} : i,
    o = t.itemStyle,
    u = o === void 0 ? {} : o,
    c = t.labelStyle,
    s = c === void 0 ? {} : c,
    f = t.payload,
    l = t.formatter,
    p = t.itemSorter,
    h = t.wrapperClassName,
    m = t.labelClassName,
    v = t.label,
    d = t.labelFormatter,
    b = t.accessibilityLayer,
    x = b === void 0 ? !1 : b,
    w = function () {
      if (f && f.length) {
        var P = { padding: 0, margin: 0 },
          N = (p ? jc(f, p) : f).map(function (M, E) {
            if (M.type === "none") return null;
            var k = yo(
                {
                  display: "block",
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: M.color || "#000",
                },
                u,
              ),
              B = M.formatter || l || D$,
              L = M.value,
              U = M.name,
              q = L,
              K = U;
            if (B && q != null && K != null) {
              var z = B(L, U, M, E, f);
              if (Array.isArray(z)) {
                var X = T$(z, 2);
                ((q = X[0]), (K = X[1]));
              } else q = z;
            }
            return $.createElement(
              "li",
              {
                className: "recharts-tooltip-item",
                key: "tooltip-item-".concat(E),
                style: k,
              },
              Oe(K)
                ? $.createElement(
                    "span",
                    { className: "recharts-tooltip-item-name" },
                    K,
                  )
                : null,
              Oe(K)
                ? $.createElement(
                    "span",
                    { className: "recharts-tooltip-item-separator" },
                    n,
                  )
                : null,
              $.createElement(
                "span",
                { className: "recharts-tooltip-item-value" },
                q,
              ),
              $.createElement(
                "span",
                { className: "recharts-tooltip-item-unit" },
                M.unit || "",
              ),
            );
          });
        return $.createElement(
          "ul",
          { className: "recharts-tooltip-item-list", style: P },
          N,
        );
      }
      return null;
    },
    O = yo(
      {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      a,
    ),
    y = yo({ margin: 0 }, s),
    g = !te(v),
    S = g ? v : "",
    _ = ee("recharts-default-tooltip", h),
    A = ee("recharts-tooltip-label", m);
  g && d && f !== void 0 && f !== null && (S = d(v, f));
  var C = x ? { role: "status", "aria-live": "assertive" } : {};
  return $.createElement(
    "div",
    iu({ className: _, style: O }, C),
    $.createElement(
      "p",
      { className: A, style: y },
      $.isValidElement(S) ? S : "".concat(S),
    ),
    w(),
  );
};
function sn(e) {
  "@babel/helpers - typeof";
  return (
    (sn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    sn(e)
  );
}
function Qn(e, t, r) {
  return (
    (t = R$(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function R$(e) {
  var t = L$(e, "string");
  return sn(t) == "symbol" ? t : t + "";
}
function L$(e, t) {
  if (sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qr = "recharts-tooltip-wrapper",
  F$ = { visibility: "hidden" };
function U$(e) {
  var t = e.coordinate,
    r = e.translateX,
    n = e.translateY;
  return ee(
    qr,
    Qn(
      Qn(
        Qn(
          Qn({}, "".concat(qr, "-right"), F(r) && t && F(t.x) && r >= t.x),
          "".concat(qr, "-left"),
          F(r) && t && F(t.x) && r < t.x,
        ),
        "".concat(qr, "-bottom"),
        F(n) && t && F(t.y) && n >= t.y,
      ),
      "".concat(qr, "-top"),
      F(n) && t && F(t.y) && n < t.y,
    ),
  );
}
function hl(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.key,
    i = e.offsetTopLeft,
    a = e.position,
    o = e.reverseDirection,
    u = e.tooltipDimension,
    c = e.viewBox,
    s = e.viewBoxDimension;
  if (a && F(a[n])) return a[n];
  var f = r[n] - u - i,
    l = r[n] + i;
  if (t[n]) return o[n] ? f : l;
  if (o[n]) {
    var p = f,
      h = c[n];
    return p < h ? Math.max(l, c[n]) : Math.max(f, c[n]);
  }
  var m = l + u,
    v = c[n] + s;
  return m > v ? Math.max(f, c[n]) : Math.max(l, c[n]);
}
function W$(e) {
  var t = e.translateX,
    r = e.translateY,
    n = e.useTranslate3d;
  return {
    transform: n
      ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
      : "translate(".concat(t, "px, ").concat(r, "px)"),
  };
}
function z$(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.offsetTopLeft,
    i = e.position,
    a = e.reverseDirection,
    o = e.tooltipBox,
    u = e.useTranslate3d,
    c = e.viewBox,
    s,
    f,
    l;
  return (
    o.height > 0 && o.width > 0 && r
      ? ((f = hl({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "x",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: c,
          viewBoxDimension: c.width,
        })),
        (l = hl({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "y",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: c,
          viewBoxDimension: c.height,
        })),
        (s = W$({ translateX: f, translateY: l, useTranslate3d: u })))
      : (s = F$),
    {
      cssProperties: s,
      cssClasses: U$({ translateX: f, translateY: l, coordinate: r }),
    }
  );
}
function dr(e) {
  "@babel/helpers - typeof";
  return (
    (dr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    dr(e)
  );
}
function dl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function vl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dl(Object(r), !0).forEach(function (n) {
          ou(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : dl(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function H$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function q$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, pd(n.key), n));
  }
}
function G$(e, t, r) {
  return (
    t && q$(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function K$(e, t, r) {
  return (
    (t = Ai(t)),
    X$(
      e,
      fd() ? Reflect.construct(t, r || [], Ai(e).constructor) : t.apply(e, r),
    )
  );
}
function X$(e, t) {
  if (t && (dr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return V$(e);
}
function V$(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function fd() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (fd = function () {
    return !!e;
  })();
}
function Ai(e) {
  return (
    (Ai = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ai(e)
  );
}
function Y$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && au(e, t));
}
function au(e, t) {
  return (
    (au = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    au(e, t)
  );
}
function ou(e, t, r) {
  return (
    (t = pd(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function pd(e) {
  var t = Z$(e, "string");
  return dr(t) == "symbol" ? t : t + "";
}
function Z$(e, t) {
  if (dr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var yl = 1,
  J$ = (function (e) {
    function t() {
      var r;
      H$(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return (
        (r = K$(this, t, [].concat(i))),
        ou(r, "state", {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        ou(r, "handleKeyDown", function (o) {
          if (o.key === "Escape") {
            var u, c, s, f;
            r.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  (u =
                    (c = r.props.coordinate) === null || c === void 0
                      ? void 0
                      : c.x) !== null && u !== void 0
                    ? u
                    : 0,
                y:
                  (s =
                    (f = r.props.coordinate) === null || f === void 0
                      ? void 0
                      : f.y) !== null && s !== void 0
                    ? s
                    : 0,
              },
            });
          }
        }),
        r
      );
    }
    return (
      Y$(t, e),
      G$(t, [
        {
          key: "updateBBox",
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var n = this.wrapperNode.getBoundingClientRect();
              (Math.abs(n.width - this.state.lastBoundingBox.width) > yl ||
                Math.abs(n.height - this.state.lastBoundingBox.height) > yl) &&
                this.setState({
                  lastBoundingBox: { width: n.width, height: n.height },
                });
            } else
              (this.state.lastBoundingBox.width !== -1 ||
                this.state.lastBoundingBox.height !== -1) &&
                this.setState({ lastBoundingBox: { width: -1, height: -1 } });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            (document.addEventListener("keydown", this.handleKeyDown),
              this.updateBBox());
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("keydown", this.handleKeyDown);
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            var n, i;
            (this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((n = this.props.coordinate) === null || n === void 0
                  ? void 0
                  : n.x) !== this.state.dismissedAtCoordinate.x ||
                  ((i = this.props.coordinate) === null || i === void 0
                    ? void 0
                    : i.y) !== this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1));
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.active,
              o = i.allowEscapeViewBox,
              u = i.animationDuration,
              c = i.animationEasing,
              s = i.children,
              f = i.coordinate,
              l = i.hasPayload,
              p = i.isAnimationActive,
              h = i.offset,
              m = i.position,
              v = i.reverseDirection,
              d = i.useTranslate3d,
              b = i.viewBox,
              x = i.wrapperStyle,
              w = z$({
                allowEscapeViewBox: o,
                coordinate: f,
                offsetTopLeft: h,
                position: m,
                reverseDirection: v,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: d,
                viewBox: b,
              }),
              O = w.cssClasses,
              y = w.cssProperties,
              g = vl(
                vl(
                  {
                    transition:
                      p && a ? "transform ".concat(u, "ms ").concat(c) : void 0,
                  },
                  y,
                ),
                {},
                {
                  pointerEvents: "none",
                  visibility:
                    !this.state.dismissed && a && l ? "visible" : "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                x,
              );
            return $.createElement(
              "div",
              {
                tabIndex: -1,
                className: O,
                style: g,
                ref: function (_) {
                  n.wrapperNode = _;
                },
              },
              s,
            );
          },
        },
      ])
    );
  })(R.PureComponent),
  Q$ = function () {
    return !(
      typeof window < "u" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  zn = { isSsr: Q$() };
function vr(e) {
  "@babel/helpers - typeof";
  return (
    (vr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    vr(e)
  );
}
function ml(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function gl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ml(Object(r), !0).forEach(function (n) {
          Ec(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ml(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function eT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, dd(n.key), n));
  }
}
function rT(e, t, r) {
  return (
    t && tT(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function nT(e, t, r) {
  return (
    (t = Pi(t)),
    iT(
      e,
      hd() ? Reflect.construct(t, r || [], Pi(e).constructor) : t.apply(e, r),
    )
  );
}
function iT(e, t) {
  if (t && (vr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return aT(e);
}
function aT(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function hd() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (hd = function () {
    return !!e;
  })();
}
function Pi(e) {
  return (
    (Pi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Pi(e)
  );
}
function oT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && uu(e, t));
}
function uu(e, t) {
  return (
    (uu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    uu(e, t)
  );
}
function Ec(e, t, r) {
  return (
    (t = dd(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function dd(e) {
  var t = uT(e, "string");
  return vr(t) == "symbol" ? t : t + "";
}
function uT(e, t) {
  if (vr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function cT(e) {
  return e.dataKey;
}
function sT(e, t) {
  return $.isValidElement(e)
    ? $.cloneElement(e, t)
    : typeof e == "function"
      ? $.createElement(e, t)
      : $.createElement(B$, t);
}
var et = (function (e) {
  function t() {
    return (eT(this, t), nT(this, t, arguments));
  }
  return (
    oT(t, e),
    rT(t, [
      {
        key: "render",
        value: function () {
          var n = this,
            i = this.props,
            a = i.active,
            o = i.allowEscapeViewBox,
            u = i.animationDuration,
            c = i.animationEasing,
            s = i.content,
            f = i.coordinate,
            l = i.filterNull,
            p = i.isAnimationActive,
            h = i.offset,
            m = i.payload,
            v = i.payloadUniqBy,
            d = i.position,
            b = i.reverseDirection,
            x = i.useTranslate3d,
            w = i.viewBox,
            O = i.wrapperStyle,
            y = m ?? [];
          l &&
            y.length &&
            (y = nd(
              m.filter(function (S) {
                return (
                  S.value != null && (S.hide !== !0 || n.props.includeHidden)
                );
              }),
              v,
              cT,
            ));
          var g = y.length > 0;
          return $.createElement(
            J$,
            {
              allowEscapeViewBox: o,
              animationDuration: u,
              animationEasing: c,
              isAnimationActive: p,
              active: a,
              coordinate: f,
              hasPayload: g,
              offset: h,
              position: d,
              reverseDirection: b,
              useTranslate3d: x,
              viewBox: w,
              wrapperStyle: O,
            },
            sT(s, gl(gl({}, this.props), {}, { payload: y })),
          );
        },
      },
    ])
  );
})(R.PureComponent);
Ec(et, "displayName", "Tooltip");
Ec(et, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: { x: 0, y: 0 },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !zn.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: { x: !1, y: !1 },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: { x: 0, y: 0, height: 0, width: 0 },
  wrapperStyle: {},
});
var lT = ot,
  fT = function () {
    return lT.Date.now();
  },
  pT = fT,
  hT = /\s/;
function dT(e) {
  for (var t = e.length; t-- && hT.test(e.charAt(t)); );
  return t;
}
var vT = dT,
  yT = vT,
  mT = /^\s+/;
function gT(e) {
  return e && e.slice(0, yT(e) + 1).replace(mT, "");
}
var bT = gT,
  xT = bT,
  bl = At,
  wT = Cr,
  xl = NaN,
  OT = /^[-+]0x[0-9a-f]+$/i,
  ST = /^0b[01]+$/i,
  _T = /^0o[0-7]+$/i,
  AT = parseInt;
function PT(e) {
  if (typeof e == "number") return e;
  if (wT(e)) return xl;
  if (bl(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = bl(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = xT(e);
  var r = ST.test(e);
  return r || _T.test(e) ? AT(e.slice(2), r ? 2 : 8) : OT.test(e) ? xl : +e;
}
var vd = PT,
  $T = At,
  mo = pT,
  wl = vd,
  TT = "Expected a function",
  jT = Math.max,
  ET = Math.min;
function MT(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    c,
    s = 0,
    f = !1,
    l = !1,
    p = !0;
  if (typeof e != "function") throw new TypeError(TT);
  ((t = wl(t) || 0),
    $T(r) &&
      ((f = !!r.leading),
      (l = "maxWait" in r),
      (a = l ? jT(wl(r.maxWait) || 0, t) : a),
      (p = "trailing" in r ? !!r.trailing : p)));
  function h(g) {
    var S = n,
      _ = i;
    return ((n = i = void 0), (s = g), (o = e.apply(_, S)), o);
  }
  function m(g) {
    return ((s = g), (u = setTimeout(b, t)), f ? h(g) : o);
  }
  function v(g) {
    var S = g - c,
      _ = g - s,
      A = t - S;
    return l ? ET(A, a - _) : A;
  }
  function d(g) {
    var S = g - c,
      _ = g - s;
    return c === void 0 || S >= t || S < 0 || (l && _ >= a);
  }
  function b() {
    var g = mo();
    if (d(g)) return x(g);
    u = setTimeout(b, v(g));
  }
  function x(g) {
    return ((u = void 0), p && n ? h(g) : ((n = i = void 0), o));
  }
  function w() {
    (u !== void 0 && clearTimeout(u), (s = 0), (n = c = i = u = void 0));
  }
  function O() {
    return u === void 0 ? o : x(mo());
  }
  function y() {
    var g = mo(),
      S = d(g);
    if (((n = arguments), (i = this), (c = g), S)) {
      if (u === void 0) return m(c);
      if (l) return (clearTimeout(u), (u = setTimeout(b, t)), h(c));
    }
    return (u === void 0 && (u = setTimeout(b, t)), o);
  }
  return ((y.cancel = w), (y.flush = O), y);
}
var CT = MT,
  IT = CT,
  NT = At,
  kT = "Expected a function";
function DT(e, t, r) {
  var n = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(kT);
  return (
    NT(r) &&
      ((n = "leading" in r ? !!r.leading : n),
      (i = "trailing" in r ? !!r.trailing : i)),
    IT(e, t, { leading: n, maxWait: t, trailing: i })
  );
}
var BT = DT;
const yd = fe(BT);
function ln(e) {
  "@babel/helpers - typeof";
  return (
    (ln =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ln(e)
  );
}
function Ol(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ol(Object(r), !0).forEach(function (n) {
          RT(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ol(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function RT(e, t, r) {
  return (
    (t = LT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function LT(e) {
  var t = FT(e, "string");
  return ln(t) == "symbol" ? t : t + "";
}
function FT(e, t) {
  if (ln(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ln(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UT(e, t) {
  return qT(e) || HT(e, t) || zT(e, t) || WT();
}
function WT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zT(e, t) {
  if (e) {
    if (typeof e == "string") return Sl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Sl(e, t);
  }
}
function Sl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function HT(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function qT(e) {
  if (Array.isArray(e)) return e;
}
var GT = R.forwardRef(function (e, t) {
    var r = e.aspect,
      n = e.initialDimension,
      i = n === void 0 ? { width: -1, height: -1 } : n,
      a = e.width,
      o = a === void 0 ? "100%" : a,
      u = e.height,
      c = u === void 0 ? "100%" : u,
      s = e.minWidth,
      f = s === void 0 ? 0 : s,
      l = e.minHeight,
      p = e.maxHeight,
      h = e.children,
      m = e.debounce,
      v = m === void 0 ? 0 : m,
      d = e.id,
      b = e.className,
      x = e.onResize,
      w = e.style,
      O = w === void 0 ? {} : w,
      y = R.useRef(null),
      g = R.useRef();
    ((g.current = x),
      R.useImperativeHandle(t, function () {
        return Object.defineProperty(y.current, "current", {
          get: function () {
            return (
              console.warn(
                "The usage of ref.current.current is deprecated and will no longer be supported.",
              ),
              y.current
            );
          },
          configurable: !0,
        });
      }));
    var S = R.useState({ containerWidth: i.width, containerHeight: i.height }),
      _ = UT(S, 2),
      A = _[0],
      C = _[1],
      j = R.useCallback(function (N, M) {
        C(function (E) {
          var k = Math.round(N),
            B = Math.round(M);
          return E.containerWidth === k && E.containerHeight === B
            ? E
            : { containerWidth: k, containerHeight: B };
        });
      }, []);
    R.useEffect(
      function () {
        var N = function (U) {
          var q,
            K = U[0].contentRect,
            z = K.width,
            X = K.height;
          (j(z, X),
            (q = g.current) === null || q === void 0 || q.call(g, z, X));
        };
        v > 0 && (N = yd(N, v, { trailing: !0, leading: !1 }));
        var M = new ResizeObserver(N),
          E = y.current.getBoundingClientRect(),
          k = E.width,
          B = E.height;
        return (
          j(k, B),
          M.observe(y.current),
          function () {
            M.disconnect();
          }
        );
      },
      [j, v],
    );
    var P = R.useMemo(
      function () {
        var N = A.containerWidth,
          M = A.containerHeight;
        if (N < 0 || M < 0) return null;
        (Ft(
          Dt(o) || Dt(c),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          o,
          c,
        ),
          Ft(!r || r > 0, "The aspect(%s) must be greater than zero.", r));
        var E = Dt(o) ? N : o,
          k = Dt(c) ? M : c;
        (r &&
          r > 0 &&
          (E ? (k = E / r) : k && (E = k * r), p && k > p && (k = p)),
          Ft(
            E > 0 || k > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            E,
            k,
            o,
            c,
            f,
            l,
            r,
          ));
        var B = !Array.isArray(h) && pt(h.type).endsWith("Chart");
        return $.Children.map(h, function (L) {
          return $.isValidElement(L)
            ? R.cloneElement(
                L,
                ei(
                  { width: E, height: k },
                  B
                    ? {
                        style: ei(
                          {
                            height: "100%",
                            width: "100%",
                            maxHeight: k,
                            maxWidth: E,
                          },
                          L.props.style,
                        ),
                      }
                    : {},
                ),
              )
            : L;
        });
      },
      [r, h, c, p, l, f, A, o],
    );
    return $.createElement(
      "div",
      {
        id: d ? "".concat(d) : void 0,
        className: ee("recharts-responsive-container", b),
        style: ei(
          ei({}, O),
          {},
          { width: o, height: c, minWidth: f, minHeight: l, maxHeight: p },
        ),
        ref: y,
      },
      P,
    );
  }),
  Mc = function (t) {
    return null;
  };
Mc.displayName = "Cell";
function fn(e) {
  "@babel/helpers - typeof";
  return (
    (fn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    fn(e)
  );
}
function _l(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function cu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _l(Object(r), !0).forEach(function (n) {
          KT(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _l(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function KT(e, t, r) {
  return (
    (t = XT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function XT(e) {
  var t = VT(e, "string");
  return fn(t) == "symbol" ? t : t + "";
}
function VT(e, t) {
  if (fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tr = { widthCache: {}, cacheCount: 0 },
  YT = 2e3,
  ZT = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  Al = "recharts_measurement_span";
function JT(e) {
  var t = cu({}, e);
  return (
    Object.keys(t).forEach(function (r) {
      t[r] || delete t[r];
    }),
    t
  );
}
var tn = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || zn.isSsr) return { width: 0, height: 0 };
    var n = JT(r),
      i = JSON.stringify({ text: t, copyStyle: n });
    if (tr.widthCache[i]) return tr.widthCache[i];
    try {
      var a = document.getElementById(Al);
      a ||
        ((a = document.createElement("span")),
        a.setAttribute("id", Al),
        a.setAttribute("aria-hidden", "true"),
        document.body.appendChild(a));
      var o = cu(cu({}, ZT), n);
      (Object.assign(a.style, o), (a.textContent = "".concat(t)));
      var u = a.getBoundingClientRect(),
        c = { width: u.width, height: u.height };
      return (
        (tr.widthCache[i] = c),
        ++tr.cacheCount > YT && ((tr.cacheCount = 0), (tr.widthCache = {})),
        c
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  QT = function (t) {
    return {
      top: t.top + window.scrollY - document.documentElement.clientTop,
      left: t.left + window.scrollX - document.documentElement.clientLeft,
    };
  };
function pn(e) {
  "@babel/helpers - typeof";
  return (
    (pn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    pn(e)
  );
}
function $i(e, t) {
  return nj(e) || rj(e, t) || tj(e, t) || ej();
}
function ej() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tj(e, t) {
  if (e) {
    if (typeof e == "string") return Pl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Pl(e, t);
  }
}
function Pl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function rj(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function nj(e) {
  if (Array.isArray(e)) return e;
}
function ij(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $l(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, oj(n.key), n));
  }
}
function aj(e, t, r) {
  return (
    t && $l(e.prototype, t),
    r && $l(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function oj(e) {
  var t = uj(e, "string");
  return pn(t) == "symbol" ? t : t + "";
}
function uj(e, t) {
  if (pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Tl = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  jl = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  cj = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  sj = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  md = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  lj = Object.keys(md),
  ir = "NaN";
function fj(e, t) {
  return e * md[t];
}
var ti = (function () {
  function e(t, r) {
    (ij(this, e),
      (this.num = t),
      (this.unit = r),
      (this.num = t),
      (this.unit = r),
      Number.isNaN(t) && (this.unit = ""),
      r !== "" && !cj.test(r) && ((this.num = NaN), (this.unit = "")),
      lj.includes(r) && ((this.num = fj(t, r)), (this.unit = "px")));
  }
  return aj(
    e,
    [
      {
        key: "add",
        value: function (r) {
          return this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num + r.num, this.unit);
        },
      },
      {
        key: "subtract",
        value: function (r) {
          return this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num - r.num, this.unit);
        },
      },
      {
        key: "multiply",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num * r.num, this.unit || r.unit);
        },
      },
      {
        key: "divide",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num / r.num, this.unit || r.unit);
        },
      },
      {
        key: "toString",
        value: function () {
          return "".concat(this.num).concat(this.unit);
        },
      },
      {
        key: "isNaN",
        value: function () {
          return Number.isNaN(this.num);
        },
      },
    ],
    [
      {
        key: "parse",
        value: function (r) {
          var n,
            i = (n = sj.exec(r)) !== null && n !== void 0 ? n : [],
            a = $i(i, 3),
            o = a[1],
            u = a[2];
          return new e(parseFloat(o), u ?? "");
        },
      },
    ],
  );
})();
function gd(e) {
  if (e.includes(ir)) return ir;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r,
      n = (r = Tl.exec(t)) !== null && r !== void 0 ? r : [],
      i = $i(n, 4),
      a = i[1],
      o = i[2],
      u = i[3],
      c = ti.parse(a ?? ""),
      s = ti.parse(u ?? ""),
      f = o === "*" ? c.multiply(s) : c.divide(s);
    if (f.isNaN()) return ir;
    t = t.replace(Tl, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l,
      p = (l = jl.exec(t)) !== null && l !== void 0 ? l : [],
      h = $i(p, 4),
      m = h[1],
      v = h[2],
      d = h[3],
      b = ti.parse(m ?? ""),
      x = ti.parse(d ?? ""),
      w = v === "+" ? b.add(x) : b.subtract(x);
    if (w.isNaN()) return ir;
    t = t.replace(jl, w.toString());
  }
  return t;
}
var El = /\(([^()]*)\)/;
function pj(e) {
  for (var t = e; t.includes("("); ) {
    var r = El.exec(t),
      n = $i(r, 2),
      i = n[1];
    t = t.replace(El, gd(i));
  }
  return t;
}
function hj(e) {
  var t = e.replace(/\s+/g, "");
  return ((t = pj(t)), (t = gd(t)), t);
}
function dj(e) {
  try {
    return hj(e);
  } catch {
    return ir;
  }
}
function go(e) {
  var t = dj(e.slice(5, -1));
  return t === ir ? "" : t;
}
var vj = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  yj = ["dx", "dy", "angle", "className", "breakAll"];
function su() {
  return (
    (su = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    su.apply(this, arguments)
  );
}
function Ml(e, t) {
  if (e == null) return {};
  var r = mj(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function mj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Cl(e, t) {
  return wj(e) || xj(e, t) || bj(e, t) || gj();
}
function gj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bj(e, t) {
  if (e) {
    if (typeof e == "string") return Il(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Il(e, t);
  }
}
function Il(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xj(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function wj(e) {
  if (Array.isArray(e)) return e;
}
var bd = /[ \f\n\r\t\v\u2028\u2029]+/,
  xd = function (t) {
    var r = t.children,
      n = t.breakAll,
      i = t.style;
    try {
      var a = [];
      te(r) ||
        (n ? (a = r.toString().split("")) : (a = r.toString().split(bd)));
      var o = a.map(function (c) {
          return { word: c, width: tn(c, i).width };
        }),
        u = n ? 0 : tn(" ", i).width;
      return { wordsWithComputedWidth: o, spaceWidth: u };
    } catch {
      return null;
    }
  },
  Oj = function (t, r, n, i, a) {
    var o = t.maxLines,
      u = t.children,
      c = t.style,
      s = t.breakAll,
      f = F(o),
      l = u,
      p = function () {
        var E =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return E.reduce(function (k, B) {
          var L = B.word,
            U = B.width,
            q = k[k.length - 1];
          if (q && (i == null || a || q.width + U + n < Number(i)))
            (q.words.push(L), (q.width += U + n));
          else {
            var K = { words: [L], width: U };
            k.push(K);
          }
          return k;
        }, []);
      },
      h = p(r),
      m = function (E) {
        return E.reduce(function (k, B) {
          return k.width > B.width ? k : B;
        });
      };
    if (!f) return h;
    for (
      var v = "…",
        d = function (E) {
          var k = l.slice(0, E),
            B = xd({
              breakAll: s,
              style: c,
              children: k + v,
            }).wordsWithComputedWidth,
            L = p(B),
            U = L.length > o || m(L).width > Number(i);
          return [U, L];
        },
        b = 0,
        x = l.length - 1,
        w = 0,
        O;
      b <= x && w <= l.length - 1;
    ) {
      var y = Math.floor((b + x) / 2),
        g = y - 1,
        S = d(g),
        _ = Cl(S, 2),
        A = _[0],
        C = _[1],
        j = d(y),
        P = Cl(j, 1),
        N = P[0];
      if ((!A && !N && (b = y + 1), A && N && (x = y - 1), !A && N)) {
        O = C;
        break;
      }
      w++;
    }
    return O || h;
  },
  Nl = function (t) {
    var r = te(t) ? [] : t.toString().split(bd);
    return [{ words: r }];
  },
  Sj = function (t) {
    var r = t.width,
      n = t.scaleToFit,
      i = t.children,
      a = t.style,
      o = t.breakAll,
      u = t.maxLines;
    if ((r || n) && !zn.isSsr) {
      var c,
        s,
        f = xd({ breakAll: o, children: i, style: a });
      if (f) {
        var l = f.wordsWithComputedWidth,
          p = f.spaceWidth;
        ((c = l), (s = p));
      } else return Nl(i);
      return Oj(
        { breakAll: o, children: i, maxLines: u, style: a },
        c,
        s,
        r,
        n,
      );
    }
    return Nl(i);
  },
  kl = "#808080",
  Ti = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.lineHeight,
      u = o === void 0 ? "1em" : o,
      c = t.capHeight,
      s = c === void 0 ? "0.71em" : c,
      f = t.scaleToFit,
      l = f === void 0 ? !1 : f,
      p = t.textAnchor,
      h = p === void 0 ? "start" : p,
      m = t.verticalAnchor,
      v = m === void 0 ? "end" : m,
      d = t.fill,
      b = d === void 0 ? kl : d,
      x = Ml(t, vj),
      w = R.useMemo(
        function () {
          return Sj({
            breakAll: x.breakAll,
            children: x.children,
            maxLines: x.maxLines,
            scaleToFit: l,
            style: x.style,
            width: x.width,
          });
        },
        [x.breakAll, x.children, x.maxLines, l, x.style, x.width],
      ),
      O = x.dx,
      y = x.dy,
      g = x.angle,
      S = x.className,
      _ = x.breakAll,
      A = Ml(x, yj);
    if (!Oe(n) || !Oe(a)) return null;
    var C = n + (F(O) ? O : 0),
      j = a + (F(y) ? y : 0),
      P;
    switch (v) {
      case "start":
        P = go("calc(".concat(s, ")"));
        break;
      case "middle":
        P = go(
          "calc("
            .concat((w.length - 1) / 2, " * -")
            .concat(u, " + (")
            .concat(s, " / 2))"),
        );
        break;
      default:
        P = go("calc(".concat(w.length - 1, " * -").concat(u, ")"));
        break;
    }
    var N = [];
    if (l) {
      var M = w[0].width,
        E = x.width;
      N.push("scale(".concat((F(E) ? E / M : 1) / M, ")"));
    }
    return (
      g && N.push("rotate(".concat(g, ", ").concat(C, ", ").concat(j, ")")),
      N.length && (A.transform = N.join(" ")),
      $.createElement(
        "text",
        su({}, ne(A, !0), {
          x: C,
          y: j,
          className: ee("recharts-text", S),
          textAnchor: h,
          fill: b.includes("url") ? kl : b,
        }),
        w.map(function (k, B) {
          var L = k.words.join(_ ? "" : " ");
          return $.createElement(
            "tspan",
            { x: C, dy: B === 0 ? P : u, key: "".concat(L, "-").concat(B) },
            L,
          );
        }),
      )
    );
  };
function St(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}
function _j(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}
function Cc(e) {
  let t, r, n;
  e.length !== 2
    ? ((t = St), (r = (u, c) => St(e(u), c)), (n = (u, c) => e(u) - c))
    : ((t = e === St || e === _j ? e : Aj), (r = e), (n = e));
  function i(u, c, s = 0, f = u.length) {
    if (s < f) {
      if (t(c, c) !== 0) return f;
      do {
        const l = (s + f) >>> 1;
        r(u[l], c) < 0 ? (s = l + 1) : (f = l);
      } while (s < f);
    }
    return s;
  }
  function a(u, c, s = 0, f = u.length) {
    if (s < f) {
      if (t(c, c) !== 0) return f;
      do {
        const l = (s + f) >>> 1;
        r(u[l], c) <= 0 ? (s = l + 1) : (f = l);
      } while (s < f);
    }
    return s;
  }
  function o(u, c, s = 0, f = u.length) {
    const l = i(u, c, s, f - 1);
    return l > s && n(u[l - 1], c) > -n(u[l], c) ? l - 1 : l;
  }
  return { left: i, center: o, right: a };
}
function Aj() {
  return 0;
}
function wd(e) {
  return e === null ? NaN : +e;
}
function* Pj(e, t) {
  for (let r of e) r != null && (r = +r) >= r && (yield r);
}
const $j = Cc(St),
  Hn = $j.right;
Cc(wd).center;
class Dl extends Map {
  constructor(t, r = Ej) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: r },
      }),
      t != null)
    )
      for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Bl(this, t));
  }
  has(t) {
    return super.has(Bl(this, t));
  }
  set(t, r) {
    return super.set(Tj(this, t), r);
  }
  delete(t) {
    return super.delete(jj(this, t));
  }
}
function Bl({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function Tj({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function jj({ _intern: e, _key: t }, r) {
  const n = t(r);
  return (e.has(n) && ((r = e.get(n)), e.delete(n)), r);
}
function Ej(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function Mj(e = St) {
  if (e === St) return Od;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Od(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : e > t ? 1 : 0)
  );
}
const Cj = Math.sqrt(50),
  Ij = Math.sqrt(10),
  Nj = Math.sqrt(2);
function ji(e, t, r) {
  const n = (t - e) / Math.max(0, r),
    i = Math.floor(Math.log10(n)),
    a = n / Math.pow(10, i),
    o = a >= Cj ? 10 : a >= Ij ? 5 : a >= Nj ? 2 : 1;
  let u, c, s;
  return (
    i < 0
      ? ((s = Math.pow(10, -i) / o),
        (u = Math.round(e * s)),
        (c = Math.round(t * s)),
        u / s < e && ++u,
        c / s > t && --c,
        (s = -s))
      : ((s = Math.pow(10, i) * o),
        (u = Math.round(e / s)),
        (c = Math.round(t / s)),
        u * s < e && ++u,
        c * s > t && --c),
    c < u && 0.5 <= r && r < 2 ? ji(e, t, r * 2) : [u, c, s]
  );
}
function lu(e, t, r) {
  if (((t = +t), (e = +e), (r = +r), !(r > 0))) return [];
  if (e === t) return [e];
  const n = t < e,
    [i, a, o] = n ? ji(t, e, r) : ji(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1,
    c = new Array(u);
  if (n)
    if (o < 0) for (let s = 0; s < u; ++s) c[s] = (a - s) / -o;
    else for (let s = 0; s < u; ++s) c[s] = (a - s) * o;
  else if (o < 0) for (let s = 0; s < u; ++s) c[s] = (i + s) / -o;
  else for (let s = 0; s < u; ++s) c[s] = (i + s) * o;
  return c;
}
function fu(e, t, r) {
  return ((t = +t), (e = +e), (r = +r), ji(e, t, r)[2]);
}
function pu(e, t, r) {
  ((t = +t), (e = +e), (r = +r));
  const n = t < e,
    i = n ? fu(t, e, r) : fu(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Rl(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function Ll(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function Sd(e, t, r = 0, n = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (r = Math.floor(Math.max(0, r))),
    (n = Math.floor(Math.min(e.length - 1, n))),
    !(r <= t && t <= n))
  )
    return e;
  for (i = i === void 0 ? Od : Mj(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1,
        s = t - r + 1,
        f = Math.log(c),
        l = 0.5 * Math.exp((2 * f) / 3),
        p = 0.5 * Math.sqrt((f * l * (c - l)) / c) * (s - c / 2 < 0 ? -1 : 1),
        h = Math.max(r, Math.floor(t - (s * l) / c + p)),
        m = Math.min(n, Math.floor(t + ((c - s) * l) / c + p));
      Sd(e, t, h, m, i);
    }
    const a = e[t];
    let o = r,
      u = n;
    for (Gr(e, r, t), i(e[n], a) > 0 && Gr(e, r, n); o < u; ) {
      for (Gr(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    (i(e[r], a) === 0 ? Gr(e, r, u) : (++u, Gr(e, u, n)),
      u <= t && (r = u + 1),
      t <= u && (n = u - 1));
  }
  return e;
}
function Gr(e, t, r) {
  const n = e[t];
  ((e[t] = e[r]), (e[r] = n));
}
function kj(e, t, r) {
  if (((e = Float64Array.from(Pj(e))), !(!(n = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || n < 2) return Ll(e);
    if (t >= 1) return Rl(e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = Rl(Sd(e, a).subarray(0, a + 1)),
      u = Ll(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function Dj(e, t, r = wd) {
  if (!(!(n = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = +r(e[a], a, e),
      u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function Bj(e, t, r) {
  ((e = +e),
    (t = +t),
    (r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r));
  for (
    var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i);
    ++n < i;
  )
    a[n] = e + n * r;
  return a;
}
function Ke(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function bt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      (this.domain(e),
        typeof t == "function" ? this.interpolator(t) : this.range(t));
      break;
    }
  }
  return this;
}
const hu = Symbol("implicit");
function Ic() {
  var e = new Dl(),
    t = [],
    r = [],
    n = hu;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== hu) return n;
      e.set(a, (o = t.push(a) - 1));
    }
    return r[o % r.length];
  }
  return (
    (i.domain = function (a) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new Dl()));
      for (const o of a) e.has(o) || e.set(o, t.push(o) - 1);
      return i;
    }),
    (i.range = function (a) {
      return arguments.length ? ((r = Array.from(a)), i) : r.slice();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return Ic(t, r).unknown(n);
    }),
    Ke.apply(i, arguments),
    i
  );
}
function hn() {
  var e = Ic().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    i = 1,
    a,
    o,
    u = !1,
    c = 0,
    s = 0,
    f = 0.5;
  delete e.unknown;
  function l() {
    var p = t().length,
      h = i < n,
      m = h ? i : n,
      v = h ? n : i;
    ((a = (v - m) / Math.max(1, p - c + s * 2)),
      u && (a = Math.floor(a)),
      (m += (v - m - a * (p - c)) * f),
      (o = a * (1 - c)),
      u && ((m = Math.round(m)), (o = Math.round(o))));
    var d = Bj(p).map(function (b) {
      return m + a * b;
    });
    return r(h ? d.reverse() : d);
  }
  return (
    (e.domain = function (p) {
      return arguments.length ? (t(p), l()) : t();
    }),
    (e.range = function (p) {
      return arguments.length
        ? (([n, i] = p), (n = +n), (i = +i), l())
        : [n, i];
    }),
    (e.rangeRound = function (p) {
      return (([n, i] = p), (n = +n), (i = +i), (u = !0), l());
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (p) {
      return arguments.length ? ((u = !!p), l()) : u;
    }),
    (e.padding = function (p) {
      return arguments.length ? ((c = Math.min(1, (s = +p))), l()) : c;
    }),
    (e.paddingInner = function (p) {
      return arguments.length ? ((c = Math.min(1, p)), l()) : c;
    }),
    (e.paddingOuter = function (p) {
      return arguments.length ? ((s = +p), l()) : s;
    }),
    (e.align = function (p) {
      return arguments.length ? ((f = Math.max(0, Math.min(1, p))), l()) : f;
    }),
    (e.copy = function () {
      return hn(t(), [n, i]).round(u).paddingInner(c).paddingOuter(s).align(f);
    }),
    Ke.apply(l(), arguments)
  );
}
function _d(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return _d(t());
    }),
    e
  );
}
function rn() {
  return _d(hn.apply(null, arguments).paddingInner(1));
}
function Nc(e, t, r) {
  ((e.prototype = t.prototype = r), (r.constructor = e));
}
function Ad(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function qn() {}
var dn = 0.7,
  Ei = 1 / dn,
  sr = "\\s*([+-]?\\d+)\\s*",
  vn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  Rj = /^#([0-9a-f]{3,8})$/,
  Lj = new RegExp(`^rgb\\(${sr},${sr},${sr}\\)$`),
  Fj = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`),
  Uj = new RegExp(`^rgba\\(${sr},${sr},${sr},${vn}\\)$`),
  Wj = new RegExp(`^rgba\\(${rt},${rt},${rt},${vn}\\)$`),
  zj = new RegExp(`^hsl\\(${vn},${rt},${rt}\\)$`),
  Hj = new RegExp(`^hsla\\(${vn},${rt},${rt},${vn}\\)$`),
  Fl = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Nc(qn, yn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ul,
  formatHex: Ul,
  formatHex8: qj,
  formatHsl: Gj,
  formatRgb: Wl,
  toString: Wl,
});
function Ul() {
  return this.rgb().formatHex();
}
function qj() {
  return this.rgb().formatHex8();
}
function Gj() {
  return Pd(this).formatHsl();
}
function Wl() {
  return this.rgb().formatRgb();
}
function yn(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = Rj.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? zl(t)
          : r === 3
            ? new Ne(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : r === 8
              ? ri(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : r === 4
                ? ri(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = Lj.exec(e))
        ? new Ne(t[1], t[2], t[3], 1)
        : (t = Fj.exec(e))
          ? new Ne(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = Uj.exec(e))
            ? ri(t[1], t[2], t[3], t[4])
            : (t = Wj.exec(e))
              ? ri(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = zj.exec(e))
                ? Gl(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = Hj.exec(e))
                  ? Gl(t[1], t[2] / 100, t[3] / 100, t[4])
                  : Fl.hasOwnProperty(e)
                    ? zl(Fl[e])
                    : e === "transparent"
                      ? new Ne(NaN, NaN, NaN, 0)
                      : null
  );
}
function zl(e) {
  return new Ne((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function ri(e, t, r, n) {
  return (n <= 0 && (e = t = r = NaN), new Ne(e, t, r, n));
}
function Kj(e) {
  return (
    e instanceof qn || (e = yn(e)),
    e ? ((e = e.rgb()), new Ne(e.r, e.g, e.b, e.opacity)) : new Ne()
  );
}
function du(e, t, r, n) {
  return arguments.length === 1 ? Kj(e) : new Ne(e, t, r, n ?? 1);
}
function Ne(e, t, r, n) {
  ((this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n));
}
Nc(
  Ne,
  du,
  Ad(qn, {
    brighter(e) {
      return (
        (e = e == null ? Ei : Math.pow(Ei, e)),
        new Ne(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? dn : Math.pow(dn, e)),
        new Ne(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Ne(Ut(this.r), Ut(this.g), Ut(this.b), Mi(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: Hl,
    formatHex: Hl,
    formatHex8: Xj,
    formatRgb: ql,
    toString: ql,
  }),
);
function Hl() {
  return `#${Bt(this.r)}${Bt(this.g)}${Bt(this.b)}`;
}
function Xj() {
  return `#${Bt(this.r)}${Bt(this.g)}${Bt(this.b)}${Bt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ql() {
  const e = Mi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ut(this.r)}, ${Ut(this.g)}, ${Ut(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Mi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ut(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Bt(e) {
  return ((e = Ut(e)), (e < 16 ? "0" : "") + e.toString(16));
}
function Gl(e, t, r, n) {
  return (
    n <= 0
      ? (e = t = r = NaN)
      : r <= 0 || r >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new Ye(e, t, r, n)
  );
}
function Pd(e) {
  if (e instanceof Ye) return new Ye(e.h, e.s, e.l, e.opacity);
  if ((e instanceof qn || (e = yn(e)), !e)) return new Ye();
  if (e instanceof Ye) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    i = Math.min(t, r, n),
    a = Math.max(t, r, n),
    o = NaN,
    u = a - i,
    c = (a + i) / 2;
  return (
    u
      ? (t === a
          ? (o = (r - n) / u + (r < n) * 6)
          : r === a
            ? (o = (n - t) / u + 2)
            : (o = (t - r) / u + 4),
        (u /= c < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (u = c > 0 && c < 1 ? 0 : o),
    new Ye(o, u, c, e.opacity)
  );
}
function Vj(e, t, r, n) {
  return arguments.length === 1 ? Pd(e) : new Ye(e, t, r, n ?? 1);
}
function Ye(e, t, r, n) {
  ((this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n));
}
Nc(
  Ye,
  Vj,
  Ad(qn, {
    brighter(e) {
      return (
        (e = e == null ? Ei : Math.pow(Ei, e)),
        new Ye(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? dn : Math.pow(dn, e)),
        new Ye(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        i = 2 * r - n;
      return new Ne(
        bo(e >= 240 ? e - 240 : e + 120, i, n),
        bo(e, i, n),
        bo(e < 120 ? e + 240 : e - 120, i, n),
        this.opacity,
      );
    },
    clamp() {
      return new Ye(Kl(this.h), ni(this.s), ni(this.l), Mi(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = Mi(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${Kl(this.h)}, ${ni(this.s) * 100}%, ${ni(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function Kl(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function ni(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function bo(e, t, r) {
  return (
    (e < 60
      ? t + ((r - t) * e) / 60
      : e < 180
        ? r
        : e < 240
          ? t + ((r - t) * (240 - e)) / 60
          : t) * 255
  );
}
const kc = (e) => () => e;
function Yj(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function Zj(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}
function Jj(e) {
  return (e = +e) == 1
    ? $d
    : function (t, r) {
        return r - t ? Zj(t, r, e) : kc(isNaN(t) ? r : t);
      };
}
function $d(e, t) {
  var r = t - e;
  return r ? Yj(e, r) : kc(isNaN(e) ? t : e);
}
const Xl = (function e(t) {
  var r = Jj(t);
  function n(i, a) {
    var o = r((i = du(i)).r, (a = du(a)).r),
      u = r(i.g, a.g),
      c = r(i.b, a.b),
      s = $d(i.opacity, a.opacity);
    return function (f) {
      return (
        (i.r = o(f)),
        (i.g = u(f)),
        (i.b = c(f)),
        (i.opacity = s(f)),
        i + ""
      );
    };
  }
  return ((n.gamma = e), n);
})(1);
function Qj(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function eE(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function tE(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    i = new Array(n),
    a = new Array(r),
    o;
  for (o = 0; o < n; ++o) i[o] = Ur(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function (u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function rE(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return (r.setTime(e * (1 - n) + t * n), r);
    }
  );
}
function Ci(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function nE(e, t) {
  var r = {},
    n = {},
    i;
  ((e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {}));
  for (i in t) i in e ? (r[i] = Ur(e[i], t[i])) : (n[i] = t[i]);
  return function (a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var vu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  xo = new RegExp(vu.source, "g");
function iE(e) {
  return function () {
    return e;
  };
}
function aE(e) {
  return function (t) {
    return e(t) + "";
  };
}
function oE(e, t) {
  var r = (vu.lastIndex = xo.lastIndex = 0),
    n,
    i,
    a,
    o = -1,
    u = [],
    c = [];
  for (e = e + "", t = t + ""; (n = vu.exec(e)) && (i = xo.exec(t)); )
    ((a = i.index) > r &&
      ((a = t.slice(r, a)), u[o] ? (u[o] += a) : (u[++o] = a)),
      (n = n[0]) === (i = i[0])
        ? u[o]
          ? (u[o] += i)
          : (u[++o] = i)
        : ((u[++o] = null), c.push({ i: o, x: Ci(n, i) })),
      (r = xo.lastIndex));
  return (
    r < t.length && ((a = t.slice(r)), u[o] ? (u[o] += a) : (u[++o] = a)),
    u.length < 2
      ? c[0]
        ? aE(c[0].x)
        : iE(t)
      : ((t = c.length),
        function (s) {
          for (var f = 0, l; f < t; ++f) u[(l = c[f]).i] = l.x(s);
          return u.join("");
        })
  );
}
function Ur(e, t) {
  var r = typeof t,
    n;
  return t == null || r === "boolean"
    ? kc(t)
    : (r === "number"
        ? Ci
        : r === "string"
          ? (n = yn(t))
            ? ((t = n), Xl)
            : oE
          : t instanceof yn
            ? Xl
            : t instanceof Date
              ? rE
              : eE(t)
                ? Qj
                : Array.isArray(t)
                  ? tE
                  : (typeof t.valueOf != "function" &&
                        typeof t.toString != "function") ||
                      isNaN(t)
                    ? nE
                    : Ci)(e, t);
}
function Dc(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function uE(e, t) {
  t === void 0 && ((t = e), (e = Ur));
  for (
    var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n);
    r < n;
  )
    a[r] = e(i, (i = t[++r]));
  return function (o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
    return a[u](o - u);
  };
}
function cE(e) {
  return function () {
    return e;
  };
}
function Ii(e) {
  return +e;
}
var Vl = [0, 1];
function Me(e) {
  return e;
}
function yu(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : cE(isNaN(t) ? NaN : 0.5);
}
function sE(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function lE(e, t, r) {
  var n = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < n ? ((n = yu(i, n)), (a = r(o, a))) : ((n = yu(n, i)), (a = r(a, o))),
    function (u) {
      return a(n(u));
    }
  );
}
function fE(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    i = new Array(n),
    a = new Array(n),
    o = -1;
  for (
    e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < n;
  )
    ((i[o] = yu(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1])));
  return function (u) {
    var c = Hn(e, u, 1, n) - 1;
    return a[c](i[c](u));
  };
}
function Gn(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Da() {
  var e = Vl,
    t = Vl,
    r = Ur,
    n,
    i,
    a,
    o = Me,
    u,
    c,
    s;
  function f() {
    var p = Math.min(e.length, t.length);
    return (
      o !== Me && (o = sE(e[0], e[p - 1])),
      (u = p > 2 ? fE : lE),
      (c = s = null),
      l
    );
  }
  function l(p) {
    return p == null || isNaN((p = +p))
      ? a
      : (c || (c = u(e.map(n), t, r)))(n(o(p)));
  }
  return (
    (l.invert = function (p) {
      return o(i((s || (s = u(t, e.map(n), Ci)))(p)));
    }),
    (l.domain = function (p) {
      return arguments.length ? ((e = Array.from(p, Ii)), f()) : e.slice();
    }),
    (l.range = function (p) {
      return arguments.length ? ((t = Array.from(p)), f()) : t.slice();
    }),
    (l.rangeRound = function (p) {
      return ((t = Array.from(p)), (r = Dc), f());
    }),
    (l.clamp = function (p) {
      return arguments.length ? ((o = p ? !0 : Me), f()) : o !== Me;
    }),
    (l.interpolate = function (p) {
      return arguments.length ? ((r = p), f()) : r;
    }),
    (l.unknown = function (p) {
      return arguments.length ? ((a = p), l) : a;
    }),
    function (p, h) {
      return ((n = p), (i = h), f());
    }
  );
}
function Bc() {
  return Da()(Me, Me);
}
function pE(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function Ni(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"),
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function yr(e) {
  return ((e = Ni(Math.abs(e))), e ? e[1] : NaN);
}
function hE(e, t) {
  return function (r, n) {
    for (
      var i = r.length, a = [], o = 0, u = e[0], c = 0;
      i > 0 &&
      u > 0 &&
      (c + u + 1 > n && (u = Math.max(1, n - c)),
      a.push(r.substring((i -= u), i + u)),
      !((c += u + 1) > n));
    )
      u = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function dE(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var vE =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function mn(e) {
  if (!(t = vE.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Rc({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
mn.prototype = Rc.prototype;
function Rc(e) {
  ((this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + ""));
}
Rc.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function yE(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        (n === 0 && (n = r), (i = r));
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var ki;
function mE(e, t) {
  var r = Ni(e, t);
  if (!r) return ((ki = void 0), e.toPrecision(t));
  var n = r[0],
    i = r[1],
    a = i - (ki = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = n.length;
  return a === o
    ? n
    : a > o
      ? n + new Array(a - o + 1).join("0")
      : a > 0
        ? n.slice(0, a) + "." + n.slice(a)
        : "0." + new Array(1 - a).join("0") + Ni(e, Math.max(0, t + a - 1))[0];
}
function Yl(e, t) {
  var r = Ni(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + n
    : n.length > i + 1
      ? n.slice(0, i + 1) + "." + n.slice(i + 1)
      : n + new Array(i - n.length + 2).join("0");
}
const Zl = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: pE,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Yl(e * 100, t),
  r: Yl,
  s: mE,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function Jl(e) {
  return e;
}
var Ql = Array.prototype.map,
  ef = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function gE(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? Jl
        : hE(Ql.call(e.grouping, Number), e.thousands + ""),
    r = e.currency === void 0 ? "" : e.currency[0] + "",
    n = e.currency === void 0 ? "" : e.currency[1] + "",
    i = e.decimal === void 0 ? "." : e.decimal + "",
    a = e.numerals === void 0 ? Jl : dE(Ql.call(e.numerals, String)),
    o = e.percent === void 0 ? "%" : e.percent + "",
    u = e.minus === void 0 ? "−" : e.minus + "",
    c = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(l, p) {
    l = mn(l);
    var h = l.fill,
      m = l.align,
      v = l.sign,
      d = l.symbol,
      b = l.zero,
      x = l.width,
      w = l.comma,
      O = l.precision,
      y = l.trim,
      g = l.type;
    (g === "n"
      ? ((w = !0), (g = "g"))
      : Zl[g] || (O === void 0 && (O = 12), (y = !0), (g = "g")),
      (b || (h === "0" && m === "=")) && ((b = !0), (h = "0"), (m = "=")));
    var S =
        (p && p.prefix !== void 0 ? p.prefix : "") +
        (d === "$"
          ? r
          : d === "#" && /[boxX]/.test(g)
            ? "0" + g.toLowerCase()
            : ""),
      _ =
        (d === "$" ? n : /[%p]/.test(g) ? o : "") +
        (p && p.suffix !== void 0 ? p.suffix : ""),
      A = Zl[g],
      C = /[defgprs%]/.test(g);
    O =
      O === void 0
        ? 6
        : /[gprs]/.test(g)
          ? Math.max(1, Math.min(21, O))
          : Math.max(0, Math.min(20, O));
    function j(P) {
      var N = S,
        M = _,
        E,
        k,
        B;
      if (g === "c") ((M = A(P) + M), (P = ""));
      else {
        P = +P;
        var L = P < 0 || 1 / P < 0;
        if (
          ((P = isNaN(P) ? c : A(Math.abs(P), O)),
          y && (P = yE(P)),
          L && +P == 0 && v !== "+" && (L = !1),
          (N = (L ? (v === "(" ? v : u) : v === "-" || v === "(" ? "" : v) + N),
          (M =
            (g === "s" && !isNaN(P) && ki !== void 0 ? ef[8 + ki / 3] : "") +
            M +
            (L && v === "(" ? ")" : "")),
          C)
        ) {
          for (E = -1, k = P.length; ++E < k; )
            if (((B = P.charCodeAt(E)), 48 > B || B > 57)) {
              ((M = (B === 46 ? i + P.slice(E + 1) : P.slice(E)) + M),
                (P = P.slice(0, E)));
              break;
            }
        }
      }
      w && !b && (P = t(P, 1 / 0));
      var U = N.length + P.length + M.length,
        q = U < x ? new Array(x - U + 1).join(h) : "";
      switch (
        (w && b && ((P = t(q + P, q.length ? x - M.length : 1 / 0)), (q = "")),
        m)
      ) {
        case "<":
          P = N + P + M + q;
          break;
        case "=":
          P = N + q + P + M;
          break;
        case "^":
          P = q.slice(0, (U = q.length >> 1)) + N + P + M + q.slice(U);
          break;
        default:
          P = q + N + P + M;
          break;
      }
      return a(P);
    }
    return (
      (j.toString = function () {
        return l + "";
      }),
      j
    );
  }
  function f(l, p) {
    var h = Math.max(-8, Math.min(8, Math.floor(yr(p) / 3))) * 3,
      m = Math.pow(10, -h),
      v = s(((l = mn(l)), (l.type = "f"), l), { suffix: ef[8 + h / 3] });
    return function (d) {
      return v(m * d);
    };
  }
  return { format: s, formatPrefix: f };
}
var ii, Lc, Td;
bE({ thousands: ",", grouping: [3], currency: ["$", ""] });
function bE(e) {
  return ((ii = gE(e)), (Lc = ii.format), (Td = ii.formatPrefix), ii);
}
function xE(e) {
  return Math.max(0, -yr(Math.abs(e)));
}
function wE(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(yr(t) / 3))) * 3 - yr(Math.abs(e)),
  );
}
function OE(e, t) {
  return (
    (e = Math.abs(e)),
    (t = Math.abs(t) - e),
    Math.max(0, yr(t) - yr(e)) + 1
  );
}
function jd(e, t, r, n) {
  var i = pu(e, t, r),
    a;
  switch (((n = mn(n ?? ",f")), n.type)) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        n.precision == null && !isNaN((a = wE(i, o))) && (n.precision = a),
        Td(n, o)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null &&
        !isNaN((a = OE(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null &&
        !isNaN((a = xE(i))) &&
        (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Lc(n);
}
function Pt(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return lu(n[0], n[n.length - 1], r ?? 10);
    }),
    (e.tickFormat = function (r, n) {
      var i = t();
      return jd(i[0], i[i.length - 1], r ?? 10, n);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var n = t(),
        i = 0,
        a = n.length - 1,
        o = n[i],
        u = n[a],
        c,
        s,
        f = 10;
      for (
        u < o && ((s = o), (o = u), (u = s), (s = i), (i = a), (a = s));
        f-- > 0;
      ) {
        if (((s = fu(o, u, r)), s === c)) return ((n[i] = o), (n[a] = u), t(n));
        if (s > 0) ((o = Math.floor(o / s) * s), (u = Math.ceil(u / s) * s));
        else if (s < 0)
          ((o = Math.ceil(o * s) / s), (u = Math.floor(u * s) / s));
        else break;
        c = s;
      }
      return e;
    }),
    e
  );
}
function Di() {
  var e = Bc();
  return (
    (e.copy = function () {
      return Gn(e, Di());
    }),
    Ke.apply(e, arguments),
    Pt(e)
  );
}
function Ed(e) {
  var t;
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, Ii)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return Ed(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, Ii) : [0, 1]),
    Pt(r)
  );
}
function Md(e, t) {
  e = e.slice();
  var r = 0,
    n = e.length - 1,
    i = e[r],
    a = e[n],
    o;
  return (
    a < i && ((o = r), (r = n), (n = o), (o = i), (i = a), (a = o)),
    (e[r] = t.floor(i)),
    (e[n] = t.ceil(a)),
    e
  );
}
function tf(e) {
  return Math.log(e);
}
function rf(e) {
  return Math.exp(e);
}
function SE(e) {
  return -Math.log(-e);
}
function _E(e) {
  return -Math.exp(-e);
}
function AE(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function PE(e) {
  return e === 10 ? AE : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function $E(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function nf(e) {
  return (t, r) => -e(-t, r);
}
function Fc(e) {
  const t = e(tf, rf),
    r = t.domain;
  let n = 10,
    i,
    a;
  function o() {
    return (
      (i = $E(n)),
      (a = PE(n)),
      r()[0] < 0 ? ((i = nf(i)), (a = nf(a)), e(SE, _E)) : e(tf, rf),
      t
    );
  }
  return (
    (t.base = function (u) {
      return arguments.length ? ((n = +u), o()) : n;
    }),
    (t.domain = function (u) {
      return arguments.length ? (r(u), o()) : r();
    }),
    (t.ticks = (u) => {
      const c = r();
      let s = c[0],
        f = c[c.length - 1];
      const l = f < s;
      l && ([s, f] = [f, s]);
      let p = i(s),
        h = i(f),
        m,
        v;
      const d = u == null ? 10 : +u;
      let b = [];
      if (!(n % 1) && h - p < d) {
        if (((p = Math.floor(p)), (h = Math.ceil(h)), s > 0)) {
          for (; p <= h; ++p)
            for (m = 1; m < n; ++m)
              if (((v = p < 0 ? m / a(-p) : m * a(p)), !(v < s))) {
                if (v > f) break;
                b.push(v);
              }
        } else
          for (; p <= h; ++p)
            for (m = n - 1; m >= 1; --m)
              if (((v = p > 0 ? m / a(-p) : m * a(p)), !(v < s))) {
                if (v > f) break;
                b.push(v);
              }
        b.length * 2 < d && (b = lu(s, f, d));
      } else b = lu(p, h, Math.min(h - p, d)).map(a);
      return l ? b.reverse() : b;
    }),
    (t.tickFormat = (u, c) => {
      if (
        (u == null && (u = 10),
        c == null && (c = n === 10 ? "s" : ","),
        typeof c != "function" &&
          (!(n % 1) && (c = mn(c)).precision == null && (c.trim = !0),
          (c = Lc(c))),
        u === 1 / 0)
      )
        return c;
      const s = Math.max(1, (n * u) / t.ticks().length);
      return (f) => {
        let l = f / a(Math.round(i(f)));
        return (l * n < n - 0.5 && (l *= n), l <= s ? c(f) : "");
      };
    }),
    (t.nice = () =>
      r(
        Md(r(), {
          floor: (u) => a(Math.floor(i(u))),
          ceil: (u) => a(Math.ceil(i(u))),
        }),
      )),
    t
  );
}
function Cd() {
  const e = Fc(Da()).domain([1, 10]);
  return (
    (e.copy = () => Gn(e, Cd()).base(e.base())),
    Ke.apply(e, arguments),
    e
  );
}
function af(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function of(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Uc(e) {
  var t = 1,
    r = e(af(t), of(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(af((t = +n)), of(t)) : t;
    }),
    Pt(r)
  );
}
function Id() {
  var e = Uc(Da());
  return (
    (e.copy = function () {
      return Gn(e, Id()).constant(e.constant());
    }),
    Ke.apply(e, arguments)
  );
}
function uf(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function TE(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function jE(e) {
  return e < 0 ? -e * e : e * e;
}
function Wc(e) {
  var t = e(Me, Me),
    r = 1;
  function n() {
    return r === 1 ? e(Me, Me) : r === 0.5 ? e(TE, jE) : e(uf(r), uf(1 / r));
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((r = +i), n()) : r;
    }),
    Pt(t)
  );
}
function zc() {
  var e = Wc(Da());
  return (
    (e.copy = function () {
      return Gn(e, zc()).exponent(e.exponent());
    }),
    Ke.apply(e, arguments),
    e
  );
}
function EE() {
  return zc.apply(null, arguments).exponent(0.5);
}
function cf(e) {
  return Math.sign(e) * e * e;
}
function ME(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Nd() {
  var e = Bc(),
    t = [0, 1],
    r = !1,
    n;
  function i(a) {
    var o = ME(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return (
    (i.invert = function (a) {
      return e.invert(cf(a));
    }),
    (i.domain = function (a) {
      return arguments.length ? (e.domain(a), i) : e.domain();
    }),
    (i.range = function (a) {
      return arguments.length
        ? (e.range((t = Array.from(a, Ii)).map(cf)), i)
        : t.slice();
    }),
    (i.rangeRound = function (a) {
      return i.range(a).round(!0);
    }),
    (i.round = function (a) {
      return arguments.length ? ((r = !!a), i) : r;
    }),
    (i.clamp = function (a) {
      return arguments.length ? (e.clamp(a), i) : e.clamp();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return Nd(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    Ke.apply(i, arguments),
    Pt(i)
  );
}
function kd() {
  var e = [],
    t = [],
    r = [],
    n;
  function i() {
    var o = 0,
      u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = Dj(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN((o = +o)) ? n : t[Hn(r, o)];
  }
  return (
    (a.invertExtent = function (o) {
      var u = t.indexOf(o);
      return u < 0
        ? [NaN, NaN]
        : [u > 0 ? r[u - 1] : e[0], u < r.length ? r[u] : e[e.length - 1]];
    }),
    (a.domain = function (o) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let u of o) u != null && !isNaN((u = +u)) && e.push(u);
      return (e.sort(St), i());
    }),
    (a.range = function (o) {
      return arguments.length ? ((t = Array.from(o)), i()) : t.slice();
    }),
    (a.unknown = function (o) {
      return arguments.length ? ((n = o), a) : n;
    }),
    (a.quantiles = function () {
      return r.slice();
    }),
    (a.copy = function () {
      return kd().domain(e).range(t).unknown(n);
    }),
    Ke.apply(a, arguments)
  );
}
function Dd() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    i = [0, 1],
    a;
  function o(c) {
    return c != null && c <= c ? i[Hn(n, c, 0, r)] : a;
  }
  function u() {
    var c = -1;
    for (n = new Array(r); ++c < r; )
      n[c] = ((c + 1) * t - (c - r) * e) / (r + 1);
    return o;
  }
  return (
    (o.domain = function (c) {
      return arguments.length
        ? (([e, t] = c), (e = +e), (t = +t), u())
        : [e, t];
    }),
    (o.range = function (c) {
      return arguments.length
        ? ((r = (i = Array.from(c)).length - 1), u())
        : i.slice();
    }),
    (o.invertExtent = function (c) {
      var s = i.indexOf(c);
      return s < 0
        ? [NaN, NaN]
        : s < 1
          ? [e, n[0]]
          : s >= r
            ? [n[r - 1], t]
            : [n[s - 1], n[s]];
    }),
    (o.unknown = function (c) {
      return (arguments.length && (a = c), o);
    }),
    (o.thresholds = function () {
      return n.slice();
    }),
    (o.copy = function () {
      return Dd().domain([e, t]).range(i).unknown(a);
    }),
    Ke.apply(Pt(o), arguments)
  );
}
function Bd() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;
  function i(a) {
    return a != null && a <= a ? t[Hn(e, a, 0, n)] : r;
  }
  return (
    (i.domain = function (a) {
      return arguments.length
        ? ((e = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (a) {
      return arguments.length
        ? ((t = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (a) {
      var o = t.indexOf(a);
      return [e[o - 1], e[o]];
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r;
    }),
    (i.copy = function () {
      return Bd().domain(e).range(t).unknown(r);
    }),
    Ke.apply(i, arguments)
  );
}
const wo = new Date(),
  Oo = new Date();
function Se(e, t, r, n) {
  function i(a) {
    return (e((a = arguments.length === 0 ? new Date() : new Date(+a))), a);
  }
  return (
    (i.floor = (a) => (e((a = new Date(+a))), a)),
    (i.ceil = (a) => (e((a = new Date(a - 1))), t(a, 1), e(a), a)),
    (i.round = (a) => {
      const o = i(a),
        u = i.ceil(a);
      return a - o < u - a ? o : u;
    }),
    (i.offset = (a, o) => (
      t((a = new Date(+a)), o == null ? 1 : Math.floor(o)),
      a
    )),
    (i.range = (a, o, u) => {
      const c = [];
      if (
        ((a = i.ceil(a)),
        (u = u == null ? 1 : Math.floor(u)),
        !(a < o) || !(u > 0))
      )
        return c;
      let s;
      do (c.push((s = new Date(+a))), t(a, u), e(a));
      while (s < a && a < o);
      return c;
    }),
    (i.filter = (a) =>
      Se(
        (o) => {
          if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
        },
        (o, u) => {
          if (o >= o)
            if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); );
            else for (; --u >= 0; ) for (; t(o, 1), !a(o); );
        },
      )),
    r &&
      ((i.count = (a, o) => (
        wo.setTime(+a),
        Oo.setTime(+o),
        e(wo),
        e(Oo),
        Math.floor(r(wo, Oo))
      )),
      (i.every = (a) => (
        (a = Math.floor(a)),
        !isFinite(a) || !(a > 0)
          ? null
          : a > 1
            ? i.filter(
                n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0,
              )
            : i
      ))),
    i
  );
}
const Bi = Se(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
Bi.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? Se(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, r) => {
            t.setTime(+t + r * e);
          },
          (t, r) => (r - t) / e,
        )
      : Bi
);
Bi.range;
const lt = 1e3,
  ze = lt * 60,
  ft = ze * 60,
  dt = ft * 24,
  Hc = dt * 7,
  sf = dt * 30,
  So = dt * 365,
  Rt = Se(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * lt);
    },
    (e, t) => (t - e) / lt,
    (e) => e.getUTCSeconds(),
  );
Rt.range;
const qc = Se(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * lt);
  },
  (e, t) => {
    e.setTime(+e + t * ze);
  },
  (e, t) => (t - e) / ze,
  (e) => e.getMinutes(),
);
qc.range;
const Gc = Se(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * ze);
  },
  (e, t) => (t - e) / ze,
  (e) => e.getUTCMinutes(),
);
Gc.range;
const Kc = Se(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * lt - e.getMinutes() * ze,
    );
  },
  (e, t) => {
    e.setTime(+e + t * ft);
  },
  (e, t) => (t - e) / ft,
  (e) => e.getHours(),
);
Kc.range;
const Xc = Se(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * ft);
  },
  (e, t) => (t - e) / ft,
  (e) => e.getUTCHours(),
);
Xc.range;
const Kn = Se(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ze) / dt,
  (e) => e.getDate() - 1,
);
Kn.range;
const Ba = Se(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / dt,
  (e) => e.getUTCDate() - 1,
);
Ba.range;
const Rd = Se(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / dt,
  (e) => Math.floor(e / dt),
);
Rd.range;
function Vt(e) {
  return Se(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setDate(t.getDate() + r * 7);
    },
    (t, r) =>
      (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * ze) / Hc,
  );
}
const Ra = Vt(0),
  Ri = Vt(1),
  CE = Vt(2),
  IE = Vt(3),
  mr = Vt(4),
  NE = Vt(5),
  kE = Vt(6);
Ra.range;
Ri.range;
CE.range;
IE.range;
mr.range;
NE.range;
kE.range;
function Yt(e) {
  return Se(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    (t, r) => (r - t) / Hc,
  );
}
const La = Yt(0),
  Li = Yt(1),
  DE = Yt(2),
  BE = Yt(3),
  gr = Yt(4),
  RE = Yt(5),
  LE = Yt(6);
La.range;
Li.range;
DE.range;
BE.range;
gr.range;
RE.range;
LE.range;
const Vc = Se(
  (e) => {
    (e.setDate(1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
Vc.range;
const Yc = Se(
  (e) => {
    (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
Yc.range;
const vt = Se(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
vt.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Se(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setFullYear(t.getFullYear() + r * e);
        },
      );
vt.range;
const yt = Se(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
yt.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Se(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        },
      );
yt.range;
function Ld(e, t, r, n, i, a) {
  const o = [
    [Rt, 1, lt],
    [Rt, 5, 5 * lt],
    [Rt, 15, 15 * lt],
    [Rt, 30, 30 * lt],
    [a, 1, ze],
    [a, 5, 5 * ze],
    [a, 15, 15 * ze],
    [a, 30, 30 * ze],
    [i, 1, ft],
    [i, 3, 3 * ft],
    [i, 6, 6 * ft],
    [i, 12, 12 * ft],
    [n, 1, dt],
    [n, 2, 2 * dt],
    [r, 1, Hc],
    [t, 1, sf],
    [t, 3, 3 * sf],
    [e, 1, So],
  ];
  function u(s, f, l) {
    const p = f < s;
    p && ([s, f] = [f, s]);
    const h = l && typeof l.range == "function" ? l : c(s, f, l),
      m = h ? h.range(s, +f + 1) : [];
    return p ? m.reverse() : m;
  }
  function c(s, f, l) {
    const p = Math.abs(f - s) / l,
      h = Cc(([, , d]) => d).right(o, p);
    if (h === o.length) return e.every(pu(s / So, f / So, l));
    if (h === 0) return Bi.every(Math.max(pu(s, f, l), 1));
    const [m, v] = o[p / o[h - 1][2] < o[h][2] / p ? h - 1 : h];
    return m.every(v);
  }
  return [u, c];
}
const [FE, UE] = Ld(yt, Yc, La, Rd, Xc, Gc),
  [WE, zE] = Ld(vt, Vc, Ra, Kn, Kc, qc);
function _o(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ao(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Kr(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function HE(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    u = e.months,
    c = e.shortMonths,
    s = Xr(i),
    f = Vr(i),
    l = Xr(a),
    p = Vr(a),
    h = Xr(o),
    m = Vr(o),
    v = Xr(u),
    d = Vr(u),
    b = Xr(c),
    x = Vr(c),
    w = {
      a: B,
      A: L,
      b: U,
      B: q,
      c: null,
      d: vf,
      e: vf,
      f: hM,
      g: SM,
      G: AM,
      H: lM,
      I: fM,
      j: pM,
      L: Fd,
      m: dM,
      M: vM,
      p: K,
      q: z,
      Q: gf,
      s: bf,
      S: yM,
      u: mM,
      U: gM,
      V: bM,
      w: xM,
      W: wM,
      x: null,
      X: null,
      y: OM,
      Y: _M,
      Z: PM,
      "%": mf,
    },
    O = {
      a: X,
      A: ce,
      b: ve,
      B: De,
      c: null,
      d: yf,
      e: yf,
      f: EM,
      g: FM,
      G: WM,
      H: $M,
      I: TM,
      j: jM,
      L: Wd,
      m: MM,
      M: CM,
      p: jt,
      q: Ce,
      Q: gf,
      s: bf,
      S: IM,
      u: NM,
      U: kM,
      V: DM,
      w: BM,
      W: RM,
      x: null,
      X: null,
      y: LM,
      Y: UM,
      Z: zM,
      "%": mf,
    },
    y = {
      a: C,
      A: j,
      b: P,
      B: N,
      c: M,
      d: hf,
      e: hf,
      f: oM,
      g: pf,
      G: ff,
      H: df,
      I: df,
      j: rM,
      L: aM,
      m: tM,
      M: nM,
      p: A,
      q: eM,
      Q: cM,
      s: sM,
      S: iM,
      u: VE,
      U: YE,
      V: ZE,
      w: XE,
      W: JE,
      x: E,
      X: k,
      y: pf,
      Y: ff,
      Z: QE,
      "%": uM,
    };
  ((w.x = g(r, w)),
    (w.X = g(n, w)),
    (w.c = g(t, w)),
    (O.x = g(r, O)),
    (O.X = g(n, O)),
    (O.c = g(t, O)));
  function g(W, V) {
    return function (Y) {
      var D = [],
        he = -1,
        J = 0,
        ge = W.length,
        be,
        Ie,
        xt;
      for (Y instanceof Date || (Y = new Date(+Y)); ++he < ge; )
        W.charCodeAt(he) === 37 &&
          (D.push(W.slice(J, he)),
          (Ie = lf[(be = W.charAt(++he))]) != null
            ? (be = W.charAt(++he))
            : (Ie = be === "e" ? " " : "0"),
          (xt = V[be]) && (be = xt(Y, Ie)),
          D.push(be),
          (J = he + 1));
      return (D.push(W.slice(J, he)), D.join(""));
    };
  }
  function S(W, V) {
    return function (Y) {
      var D = Kr(1900, void 0, 1),
        he = _(D, W, (Y += ""), 0),
        J,
        ge;
      if (he != Y.length) return null;
      if ("Q" in D) return new Date(D.Q);
      if ("s" in D) return new Date(D.s * 1e3 + ("L" in D ? D.L : 0));
      if (
        (V && !("Z" in D) && (D.Z = 0),
        "p" in D && (D.H = (D.H % 12) + D.p * 12),
        D.m === void 0 && (D.m = "q" in D ? D.q : 0),
        "V" in D)
      ) {
        if (D.V < 1 || D.V > 53) return null;
        ("w" in D || (D.w = 1),
          "Z" in D
            ? ((J = Ao(Kr(D.y, 0, 1))),
              (ge = J.getUTCDay()),
              (J = ge > 4 || ge === 0 ? Li.ceil(J) : Li(J)),
              (J = Ba.offset(J, (D.V - 1) * 7)),
              (D.y = J.getUTCFullYear()),
              (D.m = J.getUTCMonth()),
              (D.d = J.getUTCDate() + ((D.w + 6) % 7)))
            : ((J = _o(Kr(D.y, 0, 1))),
              (ge = J.getDay()),
              (J = ge > 4 || ge === 0 ? Ri.ceil(J) : Ri(J)),
              (J = Kn.offset(J, (D.V - 1) * 7)),
              (D.y = J.getFullYear()),
              (D.m = J.getMonth()),
              (D.d = J.getDate() + ((D.w + 6) % 7))));
      } else
        ("W" in D || "U" in D) &&
          ("w" in D || (D.w = "u" in D ? D.u % 7 : "W" in D ? 1 : 0),
          (ge =
            "Z" in D
              ? Ao(Kr(D.y, 0, 1)).getUTCDay()
              : _o(Kr(D.y, 0, 1)).getDay()),
          (D.m = 0),
          (D.d =
            "W" in D
              ? ((D.w + 6) % 7) + D.W * 7 - ((ge + 5) % 7)
              : D.w + D.U * 7 - ((ge + 6) % 7)));
      return "Z" in D
        ? ((D.H += (D.Z / 100) | 0), (D.M += D.Z % 100), Ao(D))
        : _o(D);
    };
  }
  function _(W, V, Y, D) {
    for (var he = 0, J = V.length, ge = Y.length, be, Ie; he < J; ) {
      if (D >= ge) return -1;
      if (((be = V.charCodeAt(he++)), be === 37)) {
        if (
          ((be = V.charAt(he++)),
          (Ie = y[be in lf ? V.charAt(he++) : be]),
          !Ie || (D = Ie(W, Y, D)) < 0)
        )
          return -1;
      } else if (be != Y.charCodeAt(D++)) return -1;
    }
    return D;
  }
  function A(W, V, Y) {
    var D = s.exec(V.slice(Y));
    return D ? ((W.p = f.get(D[0].toLowerCase())), Y + D[0].length) : -1;
  }
  function C(W, V, Y) {
    var D = h.exec(V.slice(Y));
    return D ? ((W.w = m.get(D[0].toLowerCase())), Y + D[0].length) : -1;
  }
  function j(W, V, Y) {
    var D = l.exec(V.slice(Y));
    return D ? ((W.w = p.get(D[0].toLowerCase())), Y + D[0].length) : -1;
  }
  function P(W, V, Y) {
    var D = b.exec(V.slice(Y));
    return D ? ((W.m = x.get(D[0].toLowerCase())), Y + D[0].length) : -1;
  }
  function N(W, V, Y) {
    var D = v.exec(V.slice(Y));
    return D ? ((W.m = d.get(D[0].toLowerCase())), Y + D[0].length) : -1;
  }
  function M(W, V, Y) {
    return _(W, t, V, Y);
  }
  function E(W, V, Y) {
    return _(W, r, V, Y);
  }
  function k(W, V, Y) {
    return _(W, n, V, Y);
  }
  function B(W) {
    return o[W.getDay()];
  }
  function L(W) {
    return a[W.getDay()];
  }
  function U(W) {
    return c[W.getMonth()];
  }
  function q(W) {
    return u[W.getMonth()];
  }
  function K(W) {
    return i[+(W.getHours() >= 12)];
  }
  function z(W) {
    return 1 + ~~(W.getMonth() / 3);
  }
  function X(W) {
    return o[W.getUTCDay()];
  }
  function ce(W) {
    return a[W.getUTCDay()];
  }
  function ve(W) {
    return c[W.getUTCMonth()];
  }
  function De(W) {
    return u[W.getUTCMonth()];
  }
  function jt(W) {
    return i[+(W.getUTCHours() >= 12)];
  }
  function Ce(W) {
    return 1 + ~~(W.getUTCMonth() / 3);
  }
  return {
    format: function (W) {
      var V = g((W += ""), w);
      return (
        (V.toString = function () {
          return W;
        }),
        V
      );
    },
    parse: function (W) {
      var V = S((W += ""), !1);
      return (
        (V.toString = function () {
          return W;
        }),
        V
      );
    },
    utcFormat: function (W) {
      var V = g((W += ""), O);
      return (
        (V.toString = function () {
          return W;
        }),
        V
      );
    },
    utcParse: function (W) {
      var V = S((W += ""), !0);
      return (
        (V.toString = function () {
          return W;
        }),
        V
      );
    },
  };
}
var lf = { "-": "", _: " ", 0: "0" },
  Pe = /^\s*\d+/,
  qE = /^%/,
  GE = /[\\^$*+?|[\]().{}]/g;
function Q(e, t, r) {
  var n = e < 0 ? "-" : "",
    i = (n ? -e : e) + "",
    a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function KE(e) {
  return e.replace(GE, "\\$&");
}
function Xr(e) {
  return new RegExp("^(?:" + e.map(KE).join("|") + ")", "i");
}
function Vr(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function XE(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function VE(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function YE(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function ZE(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function JE(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function ff(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function pf(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function QE(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n
    ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
    : -1;
}
function eM(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function tM(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function hf(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function rM(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function df(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function nM(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function iM(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function aM(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function oM(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function uM(e, t, r) {
  var n = qE.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function cM(e, t, r) {
  var n = Pe.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function sM(e, t, r) {
  var n = Pe.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function vf(e, t) {
  return Q(e.getDate(), t, 2);
}
function lM(e, t) {
  return Q(e.getHours(), t, 2);
}
function fM(e, t) {
  return Q(e.getHours() % 12 || 12, t, 2);
}
function pM(e, t) {
  return Q(1 + Kn.count(vt(e), e), t, 3);
}
function Fd(e, t) {
  return Q(e.getMilliseconds(), t, 3);
}
function hM(e, t) {
  return Fd(e, t) + "000";
}
function dM(e, t) {
  return Q(e.getMonth() + 1, t, 2);
}
function vM(e, t) {
  return Q(e.getMinutes(), t, 2);
}
function yM(e, t) {
  return Q(e.getSeconds(), t, 2);
}
function mM(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function gM(e, t) {
  return Q(Ra.count(vt(e) - 1, e), t, 2);
}
function Ud(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? mr(e) : mr.ceil(e);
}
function bM(e, t) {
  return ((e = Ud(e)), Q(mr.count(vt(e), e) + (vt(e).getDay() === 4), t, 2));
}
function xM(e) {
  return e.getDay();
}
function wM(e, t) {
  return Q(Ri.count(vt(e) - 1, e), t, 2);
}
function OM(e, t) {
  return Q(e.getFullYear() % 100, t, 2);
}
function SM(e, t) {
  return ((e = Ud(e)), Q(e.getFullYear() % 100, t, 2));
}
function _M(e, t) {
  return Q(e.getFullYear() % 1e4, t, 4);
}
function AM(e, t) {
  var r = e.getDay();
  return (
    (e = r >= 4 || r === 0 ? mr(e) : mr.ceil(e)),
    Q(e.getFullYear() % 1e4, t, 4)
  );
}
function PM(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? "-" : ((t *= -1), "+")) +
    Q((t / 60) | 0, "0", 2) +
    Q(t % 60, "0", 2)
  );
}
function yf(e, t) {
  return Q(e.getUTCDate(), t, 2);
}
function $M(e, t) {
  return Q(e.getUTCHours(), t, 2);
}
function TM(e, t) {
  return Q(e.getUTCHours() % 12 || 12, t, 2);
}
function jM(e, t) {
  return Q(1 + Ba.count(yt(e), e), t, 3);
}
function Wd(e, t) {
  return Q(e.getUTCMilliseconds(), t, 3);
}
function EM(e, t) {
  return Wd(e, t) + "000";
}
function MM(e, t) {
  return Q(e.getUTCMonth() + 1, t, 2);
}
function CM(e, t) {
  return Q(e.getUTCMinutes(), t, 2);
}
function IM(e, t) {
  return Q(e.getUTCSeconds(), t, 2);
}
function NM(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function kM(e, t) {
  return Q(La.count(yt(e) - 1, e), t, 2);
}
function zd(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? gr(e) : gr.ceil(e);
}
function DM(e, t) {
  return ((e = zd(e)), Q(gr.count(yt(e), e) + (yt(e).getUTCDay() === 4), t, 2));
}
function BM(e) {
  return e.getUTCDay();
}
function RM(e, t) {
  return Q(Li.count(yt(e) - 1, e), t, 2);
}
function LM(e, t) {
  return Q(e.getUTCFullYear() % 100, t, 2);
}
function FM(e, t) {
  return ((e = zd(e)), Q(e.getUTCFullYear() % 100, t, 2));
}
function UM(e, t) {
  return Q(e.getUTCFullYear() % 1e4, t, 4);
}
function WM(e, t) {
  var r = e.getUTCDay();
  return (
    (e = r >= 4 || r === 0 ? gr(e) : gr.ceil(e)),
    Q(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function zM() {
  return "+0000";
}
function mf() {
  return "%";
}
function gf(e) {
  return +e;
}
function bf(e) {
  return Math.floor(+e / 1e3);
}
var rr, Hd, qd;
HM({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});
function HM(e) {
  return (
    (rr = HE(e)),
    (Hd = rr.format),
    rr.parse,
    (qd = rr.utcFormat),
    rr.utcParse,
    rr
  );
}
function qM(e) {
  return new Date(e);
}
function GM(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Zc(e, t, r, n, i, a, o, u, c, s) {
  var f = Bc(),
    l = f.invert,
    p = f.domain,
    h = s(".%L"),
    m = s(":%S"),
    v = s("%I:%M"),
    d = s("%I %p"),
    b = s("%a %d"),
    x = s("%b %d"),
    w = s("%B"),
    O = s("%Y");
  function y(g) {
    return (
      c(g) < g
        ? h
        : u(g) < g
          ? m
          : o(g) < g
            ? v
            : a(g) < g
              ? d
              : n(g) < g
                ? i(g) < g
                  ? b
                  : x
                : r(g) < g
                  ? w
                  : O
    )(g);
  }
  return (
    (f.invert = function (g) {
      return new Date(l(g));
    }),
    (f.domain = function (g) {
      return arguments.length ? p(Array.from(g, GM)) : p().map(qM);
    }),
    (f.ticks = function (g) {
      var S = p();
      return e(S[0], S[S.length - 1], g ?? 10);
    }),
    (f.tickFormat = function (g, S) {
      return S == null ? y : s(S);
    }),
    (f.nice = function (g) {
      var S = p();
      return (
        (!g || typeof g.range != "function") &&
          (g = t(S[0], S[S.length - 1], g ?? 10)),
        g ? p(Md(S, g)) : f
      );
    }),
    (f.copy = function () {
      return Gn(f, Zc(e, t, r, n, i, a, o, u, c, s));
    }),
    f
  );
}
function KM() {
  return Ke.apply(
    Zc(WE, zE, vt, Vc, Ra, Kn, Kc, qc, Rt, Hd).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function XM() {
  return Ke.apply(
    Zc(FE, UE, yt, Yc, La, Ba, Xc, Gc, Rt, qd).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Fa() {
  var e = 0,
    t = 1,
    r,
    n,
    i,
    a,
    o = Me,
    u = !1,
    c;
  function s(l) {
    return l == null || isNaN((l = +l))
      ? c
      : o(
          i === 0
            ? 0.5
            : ((l = (a(l) - r) * i), u ? Math.max(0, Math.min(1, l)) : l),
        );
  }
  ((s.domain = function (l) {
    return arguments.length
      ? (([e, t] = l),
        (r = a((e = +e))),
        (n = a((t = +t))),
        (i = r === n ? 0 : 1 / (n - r)),
        s)
      : [e, t];
  }),
    (s.clamp = function (l) {
      return arguments.length ? ((u = !!l), s) : u;
    }),
    (s.interpolator = function (l) {
      return arguments.length ? ((o = l), s) : o;
    }));
  function f(l) {
    return function (p) {
      var h, m;
      return arguments.length ? (([h, m] = p), (o = l(h, m)), s) : [o(0), o(1)];
    };
  }
  return (
    (s.range = f(Ur)),
    (s.rangeRound = f(Dc)),
    (s.unknown = function (l) {
      return arguments.length ? ((c = l), s) : c;
    }),
    function (l) {
      return (
        (a = l),
        (r = l(e)),
        (n = l(t)),
        (i = r === n ? 0 : 1 / (n - r)),
        s
      );
    }
  );
}
function $t(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Gd() {
  var e = Pt(Fa()(Me));
  return (
    (e.copy = function () {
      return $t(e, Gd());
    }),
    bt.apply(e, arguments)
  );
}
function Kd() {
  var e = Fc(Fa()).domain([1, 10]);
  return (
    (e.copy = function () {
      return $t(e, Kd()).base(e.base());
    }),
    bt.apply(e, arguments)
  );
}
function Xd() {
  var e = Uc(Fa());
  return (
    (e.copy = function () {
      return $t(e, Xd()).constant(e.constant());
    }),
    bt.apply(e, arguments)
  );
}
function Jc() {
  var e = Wc(Fa());
  return (
    (e.copy = function () {
      return $t(e, Jc()).exponent(e.exponent());
    }),
    bt.apply(e, arguments)
  );
}
function VM() {
  return Jc.apply(null, arguments).exponent(0.5);
}
function Vd() {
  var e = [],
    t = Me;
  function r(n) {
    if (n != null && !isNaN((n = +n)))
      return t((Hn(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let i of n) i != null && !isNaN((i = +i)) && e.push(i);
      return (e.sort(St), r);
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, i) => t(i / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (i, a) => kj(e, a / n));
    }),
    (r.copy = function () {
      return Vd(t).domain(e);
    }),
    bt.apply(r, arguments)
  );
}
function Ua() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    i,
    a,
    o,
    u,
    c,
    s = Me,
    f,
    l = !1,
    p;
  function h(v) {
    return isNaN((v = +v))
      ? p
      : ((v = 0.5 + ((v = +f(v)) - a) * (n * v < n * a ? u : c)),
        s(l ? Math.max(0, Math.min(1, v)) : v));
  }
  ((h.domain = function (v) {
    return arguments.length
      ? (([e, t, r] = v),
        (i = f((e = +e))),
        (a = f((t = +t))),
        (o = f((r = +r))),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        h)
      : [e, t, r];
  }),
    (h.clamp = function (v) {
      return arguments.length ? ((l = !!v), h) : l;
    }),
    (h.interpolator = function (v) {
      return arguments.length ? ((s = v), h) : s;
    }));
  function m(v) {
    return function (d) {
      var b, x, w;
      return arguments.length
        ? (([b, x, w] = d), (s = uE(v, [b, x, w])), h)
        : [s(0), s(0.5), s(1)];
    };
  }
  return (
    (h.range = m(Ur)),
    (h.rangeRound = m(Dc)),
    (h.unknown = function (v) {
      return arguments.length ? ((p = v), h) : p;
    }),
    function (v) {
      return (
        (f = v),
        (i = v(e)),
        (a = v(t)),
        (o = v(r)),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        h
      );
    }
  );
}
function Yd() {
  var e = Pt(Ua()(Me));
  return (
    (e.copy = function () {
      return $t(e, Yd());
    }),
    bt.apply(e, arguments)
  );
}
function Zd() {
  var e = Fc(Ua()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return $t(e, Zd()).base(e.base());
    }),
    bt.apply(e, arguments)
  );
}
function Jd() {
  var e = Uc(Ua());
  return (
    (e.copy = function () {
      return $t(e, Jd()).constant(e.constant());
    }),
    bt.apply(e, arguments)
  );
}
function Qc() {
  var e = Wc(Ua());
  return (
    (e.copy = function () {
      return $t(e, Qc()).exponent(e.exponent());
    }),
    bt.apply(e, arguments)
  );
}
function YM() {
  return Qc.apply(null, arguments).exponent(0.5);
}
const xf = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: hn,
      scaleDiverging: Yd,
      scaleDivergingLog: Zd,
      scaleDivergingPow: Qc,
      scaleDivergingSqrt: YM,
      scaleDivergingSymlog: Jd,
      scaleIdentity: Ed,
      scaleImplicit: hu,
      scaleLinear: Di,
      scaleLog: Cd,
      scaleOrdinal: Ic,
      scalePoint: rn,
      scalePow: zc,
      scaleQuantile: kd,
      scaleQuantize: Dd,
      scaleRadial: Nd,
      scaleSequential: Gd,
      scaleSequentialLog: Kd,
      scaleSequentialPow: Jc,
      scaleSequentialQuantile: Vd,
      scaleSequentialSqrt: VM,
      scaleSequentialSymlog: Xd,
      scaleSqrt: EE,
      scaleSymlog: Id,
      scaleThreshold: Bd,
      scaleTime: KM,
      scaleUtc: XM,
      tickFormat: jd,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var ZM = Cr;
function JM(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n],
      o = t(a);
    if (o != null && (u === void 0 ? o === o && !ZM(o) : r(o, u)))
      var u = o,
        c = a;
  }
  return c;
}
var Qd = JM;
function QM(e, t) {
  return e > t;
}
var eC = QM,
  tC = Qd,
  rC = eC,
  nC = Lr;
function iC(e) {
  return e && e.length ? tC(e, nC, rC) : void 0;
}
var aC = iC;
const Wa = fe(aC);
function oC(e, t) {
  return e < t;
}
var uC = oC,
  cC = Qd,
  sC = uC,
  lC = Lr;
function fC(e) {
  return e && e.length ? cC(e, lC, sC) : void 0;
}
var pC = fC;
const za = fe(pC);
var hC = fc,
  dC = Fr,
  vC = sd,
  yC = ke;
function mC(e, t) {
  var r = yC(e) ? hC : vC;
  return r(e, dC(t));
}
var gC = mC,
  bC = ud,
  xC = gC;
function wC(e, t) {
  return bC(xC(e, t), 1);
}
var OC = wC;
const SC = fe(OC);
var _C = $c;
function AC(e, t) {
  return _C(e, t);
}
var PC = AC;
const es = fe(PC);
var Wr = 1e9,
  $C = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  rs,
  pe = !0,
  qe = "[DecimalError] ",
  Wt = qe + "Invalid argument: ",
  ts = qe + "Exponent out of range: ",
  zr = Math.floor,
  kt = Math.pow,
  TC = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Le,
  _e = 1e7,
  le = 7,
  ev = 9007199254740991,
  Fi = zr(ev / le),
  H = {};
H.absoluteValue = H.abs = function () {
  var e = new this.constructor(this);
  return (e.s && (e.s = 1), e);
};
H.comparedTo = H.cmp = function (e) {
  var t,
    r,
    n,
    i,
    a = this;
  if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
  if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1;
};
H.decimalPlaces = H.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * le;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
H.dividedBy = H.div = function (e) {
  return ht(this, new this.constructor(e));
};
H.dividedToIntegerBy = H.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return oe(ht(t, new r(e), 0, 1), r.precision);
};
H.equals = H.eq = function (e) {
  return !this.cmp(e);
};
H.exponent = function () {
  return me(this);
};
H.greaterThan = H.gt = function (e) {
  return this.cmp(e) > 0;
};
H.greaterThanOrEqualTo = H.gte = function (e) {
  return this.cmp(e) >= 0;
};
H.isInteger = H.isint = function () {
  return this.e > this.d.length - 2;
};
H.isNegative = H.isneg = function () {
  return this.s < 0;
};
H.isPositive = H.ispos = function () {
  return this.s > 0;
};
H.isZero = function () {
  return this.s === 0;
};
H.lessThan = H.lt = function (e) {
  return this.cmp(e) < 0;
};
H.lessThanOrEqualTo = H.lte = function (e) {
  return this.cmp(e) < 1;
};
H.logarithm = H.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision,
    a = i + 5;
  if (e === void 0) e = new n(10);
  else if (((e = new n(e)), e.s < 1 || e.eq(Le))) throw Error(qe + "NaN");
  if (r.s < 1) throw Error(qe + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Le)
    ? new n(0)
    : ((pe = !1), (t = ht(gn(r, a), gn(e, a), a)), (pe = !0), oe(t, i));
};
H.minus = H.sub = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)),
    t.s == e.s ? nv(t, e) : tv(t, ((e.s = -e.s), e))
  );
};
H.modulo = H.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision;
  if (((e = new n(e)), !e.s)) throw Error(qe + "NaN");
  return r.s
    ? ((pe = !1), (t = ht(r, e, 0, 1).times(e)), (pe = !0), r.minus(t))
    : oe(new n(r), i);
};
H.naturalExponential = H.exp = function () {
  return rv(this);
};
H.naturalLogarithm = H.ln = function () {
  return gn(this);
};
H.negated = H.neg = function () {
  var e = new this.constructor(this);
  return ((e.s = -e.s || 0), e);
};
H.plus = H.add = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)),
    t.s == e.s ? tv(t, e) : nv(t, ((e.s = -e.s), e))
  );
};
H.precision = H.sd = function (e) {
  var t,
    r,
    n,
    i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Wt + e);
  if (
    ((t = me(i) + 1), (n = i.d.length - 1), (r = n * le + 1), (n = i.d[n]), n)
  ) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
H.squareRoot = H.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    c = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new c(0);
    throw Error(qe + "NaN");
  }
  for (
    e = me(u),
      pe = !1,
      i = Math.sqrt(+u),
      i == 0 || i == 1 / 0
        ? ((t = tt(u.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (i = Math.sqrt(t)),
          (e = zr((e + 1) / 2) - (e < 0 || e % 2)),
          i == 1 / 0
            ? (t = "5e" + e)
            : ((t = i.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (n = new c(t)))
        : (n = new c(i.toString())),
      r = c.precision,
      i = o = r + 3;
    ;
  )
    if (
      ((a = n),
      (n = a.plus(ht(u, a, o + 2)).times(0.5)),
      tt(a.d).slice(0, o) === (t = tt(n.d)).slice(0, o))
    ) {
      if (((t = t.slice(o - 3, o + 1)), i == o && t == "4999")) {
        if ((oe(a, r + 1, 0), a.times(a).eq(u))) {
          n = a;
          break;
        }
      } else if (t != "9999") break;
      o += 4;
    }
  return ((pe = !0), oe(n, r));
};
H.times = H.mul = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u,
    c,
    s,
    f = this,
    l = f.constructor,
    p = f.d,
    h = (e = new l(e)).d;
  if (!f.s || !e.s) return new l(0);
  for (
    e.s *= f.s,
      r = f.e + e.e,
      c = p.length,
      s = h.length,
      c < s && ((a = p), (p = h), (h = a), (o = c), (c = s), (s = o)),
      a = [],
      o = c + s,
      n = o;
    n--;
  )
    a.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = c + n; i > n; )
      ((u = a[i] + h[n] * p[i - n - 1] + t),
        (a[i--] = (u % _e) | 0),
        (t = (u / _e) | 0));
    a[i] = ((a[i] + t) % _e) | 0;
  }
  for (; !a[--o]; ) a.pop();
  return (
    t ? ++r : a.shift(),
    (e.d = a),
    (e.e = r),
    pe ? oe(e, l.precision) : e
  );
};
H.toDecimalPlaces = H.todp = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (it(e, 0, Wr),
        t === void 0 ? (t = n.rounding) : it(t, 0, 8),
        oe(r, e + me(r) + 1, t))
  );
};
H.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = Gt(n, !0))
      : (it(e, 0, Wr),
        t === void 0 ? (t = i.rounding) : it(t, 0, 8),
        (n = oe(new i(n), e + 1, t)),
        (r = Gt(n, !0, e + 1))),
    r
  );
};
H.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return e === void 0
    ? Gt(i)
    : (it(e, 0, Wr),
      t === void 0 ? (t = a.rounding) : it(t, 0, 8),
      (n = oe(new a(i), e + me(i) + 1, t)),
      (r = Gt(n.abs(), !1, e + me(n) + 1)),
      i.isneg() && !i.isZero() ? "-" + r : r);
};
H.toInteger = H.toint = function () {
  var e = this,
    t = e.constructor;
  return oe(new t(e), me(e) + 1, t.rounding);
};
H.toNumber = function () {
  return +this;
};
H.toPower = H.pow = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    c = u.constructor,
    s = 12,
    f = +(e = new c(e));
  if (!e.s) return new c(Le);
  if (((u = new c(u)), !u.s)) {
    if (e.s < 1) throw Error(qe + "Infinity");
    return u;
  }
  if (u.eq(Le)) return u;
  if (((n = c.precision), e.eq(Le))) return oe(u, n);
  if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (a = u.s), o)) {
    if ((r = f < 0 ? -f : f) <= ev) {
      for (
        i = new c(Le), t = Math.ceil(n / le + 4), pe = !1;
        r % 2 && ((i = i.times(u)), Of(i.d, t)), (r = zr(r / 2)), r !== 0;
      )
        ((u = u.times(u)), Of(u.d, t));
      return ((pe = !0), e.s < 0 ? new c(Le).div(i) : oe(i, n));
    }
  } else if (a < 0) throw Error(qe + "NaN");
  return (
    (a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (u.s = 1),
    (pe = !1),
    (i = e.times(gn(u, n + s))),
    (pe = !0),
    (i = rv(i)),
    (i.s = a),
    i
  );
};
H.toPrecision = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return (
    e === void 0
      ? ((r = me(i)), (n = Gt(i, r <= a.toExpNeg || r >= a.toExpPos)))
      : (it(e, 1, Wr),
        t === void 0 ? (t = a.rounding) : it(t, 0, 8),
        (i = oe(new a(i), e, t)),
        (r = me(i)),
        (n = Gt(i, e <= r || r <= a.toExpNeg, e))),
    n
  );
};
H.toSignificantDigits = H.tosd = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (it(e, 1, Wr), t === void 0 ? (t = n.rounding) : it(t, 0, 8)),
    oe(new n(r), e, t)
  );
};
H.toString =
  H.valueOf =
  H.val =
  H.toJSON =
  H[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = me(e),
        r = e.constructor;
      return Gt(e, t <= r.toExpNeg || t >= r.toExpPos);
    };
function tv(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    c,
    s,
    f = e.constructor,
    l = f.precision;
  if (!e.s || !t.s) return (t.s || (t = new f(e)), pe ? oe(t, l) : t);
  if (
    ((c = e.d),
    (s = t.d),
    (o = e.e),
    (i = t.e),
    (c = c.slice()),
    (a = o - i),
    a)
  ) {
    for (
      a < 0
        ? ((n = c), (a = -a), (u = s.length))
        : ((n = s), (i = o), (u = c.length)),
        o = Math.ceil(l / le),
        u = o > u ? o + 1 : u + 1,
        a > u && ((a = u), (n.length = 1)),
        n.reverse();
      a--;
    )
      n.push(0);
    n.reverse();
  }
  for (
    u = c.length,
      a = s.length,
      u - a < 0 && ((a = u), (n = s), (s = c), (c = n)),
      r = 0;
    a;
  )
    ((r = ((c[--a] = c[a] + s[a] + r) / _e) | 0), (c[a] %= _e));
  for (r && (c.unshift(r), ++i), u = c.length; c[--u] == 0; ) c.pop();
  return ((t.d = c), (t.e = i), pe ? oe(t, l) : t);
}
function it(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Wt + e);
}
function tt(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    a = "",
    o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      ((n = e[t] + ""), (r = le - n.length), r && (a += wt(r)), (a += n));
    ((o = e[t]), (n = o + ""), (r = le - n.length), r && (a += wt(r)));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var ht = (function () {
  function e(n, i) {
    var a,
      o = 0,
      u = n.length;
    for (n = n.slice(); u--; )
      ((a = n[u] * i + o), (n[u] = (a % _e) | 0), (o = (a / _e) | 0));
    return (o && n.unshift(o), n);
  }
  function t(n, i, a, o) {
    var u, c;
    if (a != o) c = a > o ? 1 : -1;
    else
      for (u = c = 0; u < a; u++)
        if (n[u] != i[u]) {
          c = n[u] > i[u] ? 1 : -1;
          break;
        }
    return c;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      ((n[a] -= o), (o = n[a] < i[a] ? 1 : 0), (n[a] = o * _e + n[a] - i[a]));
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, a, o) {
    var u,
      c,
      s,
      f,
      l,
      p,
      h,
      m,
      v,
      d,
      b,
      x,
      w,
      O,
      y,
      g,
      S,
      _,
      A = n.constructor,
      C = n.s == i.s ? 1 : -1,
      j = n.d,
      P = i.d;
    if (!n.s) return new A(n);
    if (!i.s) throw Error(qe + "Division by zero");
    for (
      c = n.e - i.e,
        S = P.length,
        y = j.length,
        h = new A(C),
        m = h.d = [],
        s = 0;
      P[s] == (j[s] || 0);
    )
      ++s;
    if (
      (P[s] > (j[s] || 0) && --c,
      a == null
        ? (x = a = A.precision)
        : o
          ? (x = a + (me(n) - me(i)) + 1)
          : (x = a),
      x < 0)
    )
      return new A(0);
    if (((x = (x / le + 2) | 0), (s = 0), S == 1))
      for (f = 0, P = P[0], x++; (s < y || f) && x--; s++)
        ((w = f * _e + (j[s] || 0)), (m[s] = (w / P) | 0), (f = (w % P) | 0));
    else {
      for (
        f = (_e / (P[0] + 1)) | 0,
          f > 1 &&
            ((P = e(P, f)), (j = e(j, f)), (S = P.length), (y = j.length)),
          O = S,
          v = j.slice(0, S),
          d = v.length;
        d < S;
      )
        v[d++] = 0;
      ((_ = P.slice()), _.unshift(0), (g = P[0]), P[1] >= _e / 2 && ++g);
      do
        ((f = 0),
          (u = t(P, v, S, d)),
          u < 0
            ? ((b = v[0]),
              S != d && (b = b * _e + (v[1] || 0)),
              (f = (b / g) | 0),
              f > 1
                ? (f >= _e && (f = _e - 1),
                  (l = e(P, f)),
                  (p = l.length),
                  (d = v.length),
                  (u = t(l, v, p, d)),
                  u == 1 && (f--, r(l, S < p ? _ : P, p)))
                : (f == 0 && (u = f = 1), (l = P.slice())),
              (p = l.length),
              p < d && l.unshift(0),
              r(v, l, d),
              u == -1 &&
                ((d = v.length),
                (u = t(P, v, S, d)),
                u < 1 && (f++, r(v, S < d ? _ : P, d))),
              (d = v.length))
            : u === 0 && (f++, (v = [0])),
          (m[s++] = f),
          u && v[0] ? (v[d++] = j[O] || 0) : ((v = [j[O]]), (d = 1)));
      while ((O++ < y || v[0] !== void 0) && x--);
    }
    return (m[0] || m.shift(), (h.e = c), oe(h, o ? a + me(h) + 1 : a));
  };
})();
function rv(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    c = 0,
    s = 0,
    f = e.constructor,
    l = f.precision;
  if (me(e) > 16) throw Error(ts + me(e));
  if (!e.s) return new f(Le);
  for (pe = !1, u = l, o = new f(0.03125); e.abs().gte(0.1); )
    ((e = e.times(o)), (s += 5));
  for (
    n = ((Math.log(kt(2, s)) / Math.LN10) * 2 + 5) | 0,
      u += n,
      r = i = a = new f(Le),
      f.precision = u;
    ;
  ) {
    if (
      ((i = oe(i.times(e), u)),
      (r = r.times(++c)),
      (o = a.plus(ht(i, r, u))),
      tt(o.d).slice(0, u) === tt(a.d).slice(0, u))
    ) {
      for (; s--; ) a = oe(a.times(a), u);
      return ((f.precision = l), t == null ? ((pe = !0), oe(a, l)) : a);
    }
    a = o;
  }
}
function me(e) {
  for (var t = e.e * le, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Po(e, t, r) {
  if (t > e.LN10.sd())
    throw (
      (pe = !0),
      r && (e.precision = r),
      Error(qe + "LN10 precision limit exceeded")
    );
  return oe(new e(e.LN10), t);
}
function wt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function gn(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    c,
    s,
    f,
    l = 1,
    p = 10,
    h = e,
    m = h.d,
    v = h.constructor,
    d = v.precision;
  if (h.s < 1) throw Error(qe + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Le)) return new v(0);
  if ((t == null ? ((pe = !1), (s = d)) : (s = t), h.eq(10)))
    return (t == null && (pe = !0), Po(v, s));
  if (
    ((s += p),
    (v.precision = s),
    (r = tt(m)),
    (n = r.charAt(0)),
    (a = me(h)),
    Math.abs(a) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      ((h = h.times(e)), (r = tt(h.d)), (n = r.charAt(0)), l++);
    ((a = me(h)),
      n > 1 ? ((h = new v("0." + r)), a++) : (h = new v(n + "." + r.slice(1))));
  } else
    return (
      (c = Po(v, s + 2, d).times(a + "")),
      (h = gn(new v(n + "." + r.slice(1)), s - p).plus(c)),
      (v.precision = d),
      t == null ? ((pe = !0), oe(h, d)) : h
    );
  for (
    u = o = h = ht(h.minus(Le), h.plus(Le), s), f = oe(h.times(h), s), i = 3;
    ;
  ) {
    if (
      ((o = oe(o.times(f), s)),
      (c = u.plus(ht(o, new v(i), s))),
      tt(c.d).slice(0, s) === tt(u.d).slice(0, s))
    )
      return (
        (u = u.times(2)),
        a !== 0 && (u = u.plus(Po(v, s + 2, d).times(a + ""))),
        (u = ht(u, new v(l), s)),
        (v.precision = d),
        t == null ? ((pe = !0), oe(u, d)) : u
      );
    ((u = c), (i += 2));
  }
}
function wf(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
  )
    ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (r = r - n - 1),
      (e.e = zr(r / le)),
      (e.d = []),
      (n = (r + 1) % le),
      r < 0 && (n += le),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= le; n < i; )
        e.d.push(+t.slice(n, (n += le)));
      ((t = t.slice(n)), (n = le - t.length));
    } else n -= i;
    for (; n--; ) t += "0";
    if ((e.d.push(+t), pe && (e.e > Fi || e.e < -Fi))) throw Error(ts + r);
  } else ((e.s = 0), (e.e = 0), (e.d = [0]));
  return e;
}
function oe(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    c,
    s,
    f,
    l = e.d;
  for (o = 1, a = l[0]; a >= 10; a /= 10) o++;
  if (((n = t - o), n < 0)) ((n += le), (i = t), (s = l[(f = 0)]));
  else {
    if (((f = Math.ceil((n + 1) / le)), (a = l.length), f >= a)) return e;
    for (s = a = l[f], o = 1; a >= 10; a /= 10) o++;
    ((n %= le), (i = n - le + o));
  }
  if (
    (r !== void 0 &&
      ((a = kt(10, o - i - 1)),
      (u = ((s / a) % 10) | 0),
      (c = t < 0 || l[f + 1] !== void 0 || s % a),
      (c =
        r < 4
          ? (u || c) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                c ||
                (r == 6 &&
                  ((n > 0 ? (i > 0 ? s / kt(10, o - i) : 0) : l[f - 1]) % 10) &
                    1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !l[0])
  )
    return (
      c
        ? ((a = me(e)),
          (l.length = 1),
          (t = t - a - 1),
          (l[0] = kt(10, (le - (t % le)) % le)),
          (e.e = zr(-t / le) || 0))
        : ((l.length = 1), (l[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((l.length = f), (a = 1), f--)
      : ((l.length = f + 1),
        (a = kt(10, le - n)),
        (l[f] = i > 0 ? (((s / kt(10, o - i)) % kt(10, i)) | 0) * a : 0)),
    c)
  )
    for (;;)
      if (f == 0) {
        (l[0] += a) == _e && ((l[0] = 1), ++e.e);
        break;
      } else {
        if (((l[f] += a), l[f] != _e)) break;
        ((l[f--] = 0), (a = 1));
      }
  for (n = l.length; l[--n] === 0; ) l.pop();
  if (pe && (e.e > Fi || e.e < -Fi)) throw Error(ts + me(e));
  return e;
}
function nv(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    c,
    s,
    f,
    l,
    p = e.constructor,
    h = p.precision;
  if (!e.s || !t.s)
    return (t.s ? (t.s = -t.s) : (t = new p(e)), pe ? oe(t, h) : t);
  if (
    ((c = e.d),
    (l = t.d),
    (n = t.e),
    (s = e.e),
    (c = c.slice()),
    (o = s - n),
    o)
  ) {
    for (
      f = o < 0,
        f
          ? ((r = c), (o = -o), (u = l.length))
          : ((r = l), (n = s), (u = c.length)),
        i = Math.max(Math.ceil(h / le), u) + 2,
        o > i && ((o = i), (r.length = 1)),
        r.reverse(),
        i = o;
      i--;
    )
      r.push(0);
    r.reverse();
  } else {
    for (i = c.length, u = l.length, f = i < u, f && (u = i), i = 0; i < u; i++)
      if (c[i] != l[i]) {
        f = c[i] < l[i];
        break;
      }
    o = 0;
  }
  for (
    f && ((r = c), (c = l), (l = r), (t.s = -t.s)),
      u = c.length,
      i = l.length - u;
    i > 0;
    --i
  )
    c[u++] = 0;
  for (i = l.length; i > o; ) {
    if (c[--i] < l[i]) {
      for (a = i; a && c[--a] === 0; ) c[a] = _e - 1;
      (--c[a], (c[i] += _e));
    }
    c[i] -= l[i];
  }
  for (; c[--u] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? ((t.d = c), (t.e = n), pe ? oe(t, h) : t) : new p(0);
}
function Gt(e, t, r) {
  var n,
    i = me(e),
    a = tt(e.d),
    o = a.length;
  return (
    t
      ? (r && (n = r - o) > 0
          ? (a = a.charAt(0) + "." + a.slice(1) + wt(n))
          : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
        (a = a + (i < 0 ? "e" : "e+") + i))
      : i < 0
        ? ((a = "0." + wt(-i - 1) + a), r && (n = r - o) > 0 && (a += wt(n)))
        : i >= o
          ? ((a += wt(i + 1 - o)),
            r && (n = r - i - 1) > 0 && (a = a + "." + wt(n)))
          : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
            r && (n = r - o) > 0 && (i + 1 === o && (a += "."), (a += wt(n)))),
    e.s < 0 ? "-" + a : a
  );
}
function Of(e, t) {
  if (e.length > t) return ((e.length = t), !0);
}
function iv(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (((o.constructor = i), a instanceof i)) {
      ((o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a));
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(Wt + a);
      if (a > 0) o.s = 1;
      else if (a < 0) ((a = -a), (o.s = -1));
      else {
        ((o.s = 0), (o.e = 0), (o.d = [0]));
        return;
      }
      if (a === ~~a && a < 1e7) {
        ((o.e = 0), (o.d = [a]));
        return;
      }
      return wf(o, a.toString());
    } else if (typeof a != "string") throw Error(Wt + a);
    if (
      (a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (o.s = -1)) : (o.s = 1),
      TC.test(a))
    )
      wf(o, a);
    else throw Error(Wt + a);
  }
  if (
    ((i.prototype = H),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = iv),
    (i.config = i.set = jC),
    e === void 0 && (e = {}),
    e)
  )
    for (
      n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0;
      t < n.length;
    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return (i.config(e), i);
}
function jC(e) {
  if (!e || typeof e != "object") throw Error(qe + "Object expected");
  var t,
    r,
    n,
    i = [
      "precision",
      1,
      Wr,
      "rounding",
      0,
      8,
      "toExpNeg",
      -1 / 0,
      0,
      "toExpPos",
      0,
      1 / 0,
    ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[(r = i[t])]) !== void 0)
      if (zr(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Wt + r + ": " + n);
  if ((n = e[(r = "LN10")]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Wt + r + ": " + n);
  return this;
}
var rs = iv($C);
Le = new rs(1);
const ae = rs;
function EC(e) {
  return NC(e) || IC(e) || CC(e) || MC();
}
function MC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CC(e, t) {
  if (e) {
    if (typeof e == "string") return mu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return mu(e, t);
  }
}
function IC(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function NC(e) {
  if (Array.isArray(e)) return mu(e);
}
function mu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var kC = function (t) {
    return t;
  },
  av = {},
  ov = function (t) {
    return t === av;
  },
  Sf = function (t) {
    return function r() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          ov(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : t.apply(void 0, arguments);
    };
  },
  DC = function e(t, r) {
    return t === 1
      ? r
      : Sf(function () {
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          var o = i.filter(function (u) {
            return u !== av;
          }).length;
          return o >= t
            ? r.apply(void 0, i)
            : e(
                t - o,
                Sf(function () {
                  for (
                    var u = arguments.length, c = new Array(u), s = 0;
                    s < u;
                    s++
                  )
                    c[s] = arguments[s];
                  var f = i.map(function (l) {
                    return ov(l) ? c.shift() : l;
                  });
                  return r.apply(void 0, EC(f).concat(c));
                }),
              );
        });
  },
  Ha = function (t) {
    return DC(t.length, t);
  },
  gu = function (t, r) {
    for (var n = [], i = t; i < r; ++i) n[i - t] = i;
    return n;
  },
  BC = Ha(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r];
          })
          .map(e);
  }),
  RC = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    if (!r.length) return kC;
    var i = r.reverse(),
      a = i[0],
      o = i.slice(1);
    return function () {
      return o.reduce(
        function (u, c) {
          return c(u);
        },
        a.apply(void 0, arguments),
      );
    };
  },
  bu = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
  },
  uv = function (t) {
    var r = null,
      n = null;
    return function () {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return (
        (r &&
          a.every(function (u, c) {
            return u === r[c];
          })) ||
          ((r = a), (n = t.apply(void 0, a))),
        n
      );
    };
  };
function LC(e) {
  var t;
  return (
    e === 0
      ? (t = 1)
      : (t = Math.floor(new ae(e).abs().log(10).toNumber()) + 1),
    t
  );
}
function FC(e, t, r) {
  for (var n = new ae(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    (a.push(n.toNumber()), (n = n.add(r)), i++);
  return a;
}
var UC = Ha(function (e, t, r) {
    var n = +e,
      i = +t;
    return n + r * (i - n);
  }),
  WC = Ha(function (e, t, r) {
    var n = t - +e;
    return ((n = n || 1 / 0), (r - e) / n);
  }),
  zC = Ha(function (e, t, r) {
    var n = t - +e;
    return ((n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n)));
  });
const qa = {
  rangeStep: FC,
  getDigitCount: LC,
  interpolateNumber: UC,
  uninterpolateNumber: WC,
  uninterpolateTruncation: zC,
};
function xu(e) {
  return GC(e) || qC(e) || cv(e) || HC();
}
function HC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qC(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function GC(e) {
  if (Array.isArray(e)) return wu(e);
}
function bn(e, t) {
  return VC(e) || XC(e, t) || cv(e, t) || KC();
}
function KC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cv(e, t) {
  if (e) {
    if (typeof e == "string") return wu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return wu(e, t);
  }
}
function wu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function XC(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (c) {
      ((i = !0), (a = c));
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function VC(e) {
  if (Array.isArray(e)) return e;
}
function sv(e) {
  var t = bn(e, 2),
    r = t[0],
    n = t[1],
    i = r,
    a = n;
  return (r > n && ((i = n), (a = r)), [i, a]);
}
function lv(e, t, r) {
  if (e.lte(0)) return new ae(0);
  var n = qa.getDigitCount(e.toNumber()),
    i = new ae(10).pow(n),
    a = e.div(i),
    o = n !== 1 ? 0.05 : 0.1,
    u = new ae(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
    c = u.mul(i);
  return t ? c : new ae(Math.ceil(c));
}
function YC(e, t, r) {
  var n = 1,
    i = new ae(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1
      ? ((n = new ae(10).pow(qa.getDigitCount(e) - 1)),
        (i = new ae(Math.floor(i.div(n).toNumber())).mul(n)))
      : a > 1 && (i = new ae(Math.floor(e)));
  } else
    e === 0
      ? (i = new ae(Math.floor((t - 1) / 2)))
      : r || (i = new ae(Math.floor(e)));
  var o = Math.floor((t - 1) / 2),
    u = RC(
      BC(function (c) {
        return i.add(new ae(c - o).mul(n)).toNumber();
      }),
      gu,
    );
  return u(0, t);
}
function fv(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return { step: new ae(0), tickMin: new ae(0), tickMax: new ae(0) };
  var a = lv(new ae(t).sub(e).div(r - 1), n, i),
    o;
  e <= 0 && t >= 0
    ? (o = new ae(0))
    : ((o = new ae(e).add(t).div(2)), (o = o.sub(new ae(o).mod(a))));
  var u = Math.ceil(o.sub(e).div(a).toNumber()),
    c = Math.ceil(new ae(t).sub(o).div(a).toNumber()),
    s = u + c + 1;
  return s > r
    ? fv(e, t, r, n, i + 1)
    : (s < r && ((c = t > 0 ? c + (r - s) : c), (u = t > 0 ? u : u + (r - s))),
      {
        step: a,
        tickMin: o.sub(new ae(u).mul(a)),
        tickMax: o.add(new ae(c).mul(a)),
      });
}
function ZC(e) {
  var t = bn(e, 2),
    r = t[0],
    n = t[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    u = sv([r, n]),
    c = bn(u, 2),
    s = c[0],
    f = c[1];
  if (s === -1 / 0 || f === 1 / 0) {
    var l =
      f === 1 / 0
        ? [s].concat(
            xu(
              gu(0, i - 1).map(function () {
                return 1 / 0;
              }),
            ),
          )
        : [].concat(
            xu(
              gu(0, i - 1).map(function () {
                return -1 / 0;
              }),
            ),
            [f],
          );
    return r > n ? bu(l) : l;
  }
  if (s === f) return YC(s, i, a);
  var p = fv(s, f, o, a),
    h = p.step,
    m = p.tickMin,
    v = p.tickMax,
    d = qa.rangeStep(m, v.add(new ae(0.1).mul(h)), h);
  return r > n ? bu(d) : d;
}
function JC(e, t) {
  var r = bn(e, 2),
    n = r[0],
    i = r[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = sv([n, i]),
    u = bn(o, 2),
    c = u[0],
    s = u[1];
  if (c === -1 / 0 || s === 1 / 0) return [n, i];
  if (c === s) return [c];
  var f = Math.max(t, 2),
    l = lv(new ae(s).sub(c).div(f - 1), a, 0),
    p = [].concat(
      xu(qa.rangeStep(new ae(c), new ae(s).sub(new ae(0.99).mul(l)), l)),
      [s],
    );
  return n > i ? bu(p) : p;
}
var QC = uv(ZC),
  e2 = uv(JC),
  t2 = "Invariant failed";
function Kt(e, t) {
  throw new Error(t2);
}
var r2 = [
  "offset",
  "layout",
  "width",
  "dataKey",
  "data",
  "dataPointFormatter",
  "xAxis",
  "yAxis",
];
function br(e) {
  "@babel/helpers - typeof";
  return (
    (br =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    br(e)
  );
}
function Ui() {
  return (
    (Ui = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ui.apply(this, arguments)
  );
}
function n2(e, t) {
  return u2(e) || o2(e, t) || a2(e, t) || i2();
}
function i2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a2(e, t) {
  if (e) {
    if (typeof e == "string") return _f(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _f(e, t);
  }
}
function _f(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function o2(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function u2(e) {
  if (Array.isArray(e)) return e;
}
function c2(e, t) {
  if (e == null) return {};
  var r = s2(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function s2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function l2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function f2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, dv(n.key), n));
  }
}
function p2(e, t, r) {
  return (
    t && f2(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function h2(e, t, r) {
  return (
    (t = Wi(t)),
    d2(
      e,
      pv() ? Reflect.construct(t, r || [], Wi(e).constructor) : t.apply(e, r),
    )
  );
}
function d2(e, t) {
  if (t && (br(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return v2(e);
}
function v2(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function pv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (pv = function () {
    return !!e;
  })();
}
function Wi(e) {
  return (
    (Wi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Wi(e)
  );
}
function y2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ou(e, t));
}
function Ou(e, t) {
  return (
    (Ou = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Ou(e, t)
  );
}
function hv(e, t, r) {
  return (
    (t = dv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function dv(e) {
  var t = m2(e, "string");
  return br(t) == "symbol" ? t : t + "";
}
function m2(e, t) {
  if (br(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ga = (function (e) {
  function t() {
    return (l2(this, t), h2(this, t, arguments));
  }
  return (
    y2(t, e),
    p2(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.offset,
            a = n.layout,
            o = n.width,
            u = n.dataKey,
            c = n.data,
            s = n.dataPointFormatter,
            f = n.xAxis,
            l = n.yAxis,
            p = c2(n, r2),
            h = ne(p, !1);
          this.props.direction === "x" && f.type !== "number" && Kt();
          var m = c.map(function (v) {
            var d = s(v, u),
              b = d.x,
              x = d.y,
              w = d.value,
              O = d.errorVal;
            if (!O) return null;
            var y = [],
              g,
              S;
            if (Array.isArray(O)) {
              var _ = n2(O, 2);
              ((g = _[0]), (S = _[1]));
            } else g = S = O;
            if (a === "vertical") {
              var A = f.scale,
                C = x + i,
                j = C + o,
                P = C - o,
                N = A(w - g),
                M = A(w + S);
              (y.push({ x1: M, y1: j, x2: M, y2: P }),
                y.push({ x1: N, y1: C, x2: M, y2: C }),
                y.push({ x1: N, y1: j, x2: N, y2: P }));
            } else if (a === "horizontal") {
              var E = l.scale,
                k = b + i,
                B = k - o,
                L = k + o,
                U = E(w - g),
                q = E(w + S);
              (y.push({ x1: B, y1: q, x2: L, y2: q }),
                y.push({ x1: k, y1: U, x2: k, y2: q }),
                y.push({ x1: B, y1: U, x2: L, y2: U }));
            }
            return $.createElement(
              Ae,
              Ui(
                {
                  className: "recharts-errorBar",
                  key: "bar-".concat(
                    y.map(function (K) {
                      return ""
                        .concat(K.x1, "-")
                        .concat(K.x2, "-")
                        .concat(K.y1, "-")
                        .concat(K.y2);
                    }),
                  ),
                },
                h,
              ),
              y.map(function (K) {
                return $.createElement(
                  "line",
                  Ui({}, K, {
                    key: "line-"
                      .concat(K.x1, "-")
                      .concat(K.x2, "-")
                      .concat(K.y1, "-")
                      .concat(K.y2),
                  }),
                );
              }),
            );
          });
          return $.createElement(Ae, { className: "recharts-errorBars" }, m);
        },
      },
    ])
  );
})($.Component);
hv(Ga, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal",
});
hv(Ga, "displayName", "ErrorBar");
function xn(e) {
  "@babel/helpers - typeof";
  return (
    (xn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    xn(e)
  );
}
function Af(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Af(Object(r), !0).forEach(function (n) {
          g2(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Af(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function g2(e, t, r) {
  return (
    (t = b2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function b2(e) {
  var t = x2(e, "string");
  return xn(t) == "symbol" ? t : t + "";
}
function x2(e, t) {
  if (xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vv = function (t) {
  var r = t.children,
    n = t.formattedGraphicalItems,
    i = t.legendWidth,
    a = t.legendContent,
    o = Re(r, cr);
  if (!o) return null;
  var u = cr.defaultProps,
    c = u !== void 0 ? Ct(Ct({}, u), o.props) : {},
    s;
  return (
    o.props && o.props.payload
      ? (s = o.props && o.props.payload)
      : a === "children"
        ? (s = (n || []).reduce(function (f, l) {
            var p = l.item,
              h = l.props,
              m = h.sectors || h.data || [];
            return f.concat(
              m.map(function (v) {
                return {
                  type: o.props.iconType || p.props.legendType,
                  value: v.name,
                  color: v.fill,
                  payload: v,
                };
              }),
            );
          }, []))
        : (s = (n || []).map(function (f) {
            var l = f.item,
              p = l.type.defaultProps,
              h = p !== void 0 ? Ct(Ct({}, p), l.props) : {},
              m = h.dataKey,
              v = h.name,
              d = h.legendType,
              b = h.hide;
            return {
              inactive: b,
              dataKey: m,
              type: c.iconType || d || "square",
              color: ns(l),
              value: v || m,
              payload: h,
            };
          })),
    Ct(Ct(Ct({}, c), cr.getWithHeight(o, i)), {}, { payload: s, item: o })
  );
};
function wn(e) {
  "@babel/helpers - typeof";
  return (
    (wn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    wn(e)
  );
}
function Pf(e) {
  return _2(e) || S2(e) || O2(e) || w2();
}
function w2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function O2(e, t) {
  if (e) {
    if (typeof e == "string") return Su(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Su(e, t);
  }
}
function S2(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function _2(e) {
  if (Array.isArray(e)) return Su(e);
}
function Su(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $f(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $f(Object(r), !0).forEach(function (n) {
          lr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $f(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function lr(e, t, r) {
  return (
    (t = A2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function A2(e) {
  var t = P2(e, "string");
  return wn(t) == "symbol" ? t : t + "";
}
function P2(e, t) {
  if (wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function at(e, t, r) {
  return te(e) || te(t) ? r : Oe(t) ? He(e, t, r) : Z(t) ? t(e) : r;
}
function nn(e, t, r, n) {
  var i = SC(e, function (u) {
    return at(u, t);
  });
  if (r === "number") {
    var a = i.filter(function (u) {
      return F(u) || parseFloat(u);
    });
    return a.length ? [za(a), Wa(a)] : [1 / 0, -1 / 0];
  }
  var o = n
    ? i.filter(function (u) {
        return !te(u);
      })
    : i;
  return o.map(function (u) {
    return Oe(u) || u instanceof Date ? u : "";
  });
}
var $2 = function (t) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      i = arguments.length > 2 ? arguments[2] : void 0,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
    if (u <= 1) return 0;
    if (
      a &&
      a.axisType === "angleAxis" &&
      Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6
    )
      for (var c = a.range, s = 0; s < u; s++) {
        var f = s > 0 ? i[s - 1].coordinate : i[u - 1].coordinate,
          l = i[s].coordinate,
          p = s >= u - 1 ? i[0].coordinate : i[s + 1].coordinate,
          h = void 0;
        if (Ze(l - f) !== Ze(p - l)) {
          var m = [];
          if (Ze(p - l) === Ze(c[1] - c[0])) {
            h = p;
            var v = l + c[1] - c[0];
            ((m[0] = Math.min(v, (v + f) / 2)),
              (m[1] = Math.max(v, (v + f) / 2)));
          } else {
            h = f;
            var d = p + c[1] - c[0];
            ((m[0] = Math.min(l, (d + l) / 2)),
              (m[1] = Math.max(l, (d + l) / 2)));
          }
          var b = [Math.min(l, (h + l) / 2), Math.max(l, (h + l) / 2)];
          if ((t > b[0] && t <= b[1]) || (t >= m[0] && t <= m[1])) {
            o = i[s].index;
            break;
          }
        } else {
          var x = Math.min(f, p),
            w = Math.max(f, p);
          if (t > (x + l) / 2 && t <= (w + l) / 2) {
            o = i[s].index;
            break;
          }
        }
      }
    else
      for (var O = 0; O < u; O++)
        if (
          (O === 0 && t <= (n[O].coordinate + n[O + 1].coordinate) / 2) ||
          (O > 0 &&
            O < u - 1 &&
            t > (n[O].coordinate + n[O - 1].coordinate) / 2 &&
            t <= (n[O].coordinate + n[O + 1].coordinate) / 2) ||
          (O === u - 1 && t > (n[O].coordinate + n[O - 1].coordinate) / 2)
        ) {
          o = n[O].index;
          break;
        }
    return o;
  },
  ns = function (t) {
    var r,
      n = t,
      i = n.type.displayName,
      a =
        (r = t.type) !== null && r !== void 0 && r.defaultProps
          ? de(de({}, t.type.defaultProps), t.props)
          : t.props,
      o = a.stroke,
      u = a.fill,
      c;
    switch (i) {
      case "Line":
        c = o;
        break;
      case "Area":
      case "Radar":
        c = o && o !== "none" ? o : u;
        break;
      default:
        c = u;
        break;
    }
    return c;
  },
  T2 = function (t) {
    var r = t.barSize,
      n = t.totalSize,
      i = t.stackGroups,
      a = i === void 0 ? {} : i;
    if (!a) return {};
    for (var o = {}, u = Object.keys(a), c = 0, s = u.length; c < s; c++)
      for (
        var f = a[u[c]].stackGroups, l = Object.keys(f), p = 0, h = l.length;
        p < h;
        p++
      ) {
        var m = f[l[p]],
          v = m.items,
          d = m.cateAxisId,
          b = v.filter(function (S) {
            return pt(S.type).indexOf("Bar") >= 0;
          });
        if (b && b.length) {
          var x = b[0].type.defaultProps,
            w = x !== void 0 ? de(de({}, x), b[0].props) : b[0].props,
            O = w.barSize,
            y = w[d];
          o[y] || (o[y] = []);
          var g = te(O) ? r : O;
          o[y].push({
            item: b[0],
            stackList: b.slice(1),
            barSize: te(g) ? void 0 : qt(g, n, 0),
          });
        }
      }
    return o;
  },
  j2 = function (t) {
    var r = t.barGap,
      n = t.barCategoryGap,
      i = t.bandSize,
      a = t.sizeList,
      o = a === void 0 ? [] : a,
      u = t.maxBarSize,
      c = o.length;
    if (c < 1) return null;
    var s = qt(r, i, 0, !0),
      f,
      l = [];
    if (o[0].barSize === +o[0].barSize) {
      var p = !1,
        h = i / c,
        m = o.reduce(function (O, y) {
          return O + y.barSize || 0;
        }, 0);
      ((m += (c - 1) * s),
        m >= i && ((m -= (c - 1) * s), (s = 0)),
        m >= i && h > 0 && ((p = !0), (h *= 0.9), (m = c * h)));
      var v = ((i - m) / 2) >> 0,
        d = { offset: v - s, size: 0 };
      f = o.reduce(function (O, y) {
        var g = {
            item: y.item,
            position: {
              offset: d.offset + d.size + s,
              size: p ? h : y.barSize,
            },
          },
          S = [].concat(Pf(O), [g]);
        return (
          (d = S[S.length - 1].position),
          y.stackList &&
            y.stackList.length &&
            y.stackList.forEach(function (_) {
              S.push({ item: _, position: d });
            }),
          S
        );
      }, l);
    } else {
      var b = qt(n, i, 0, !0);
      i - 2 * b - (c - 1) * s <= 0 && (s = 0);
      var x = (i - 2 * b - (c - 1) * s) / c;
      x > 1 && (x >>= 0);
      var w = u === +u ? Math.min(x, u) : x;
      f = o.reduce(function (O, y, g) {
        var S = [].concat(Pf(O), [
          {
            item: y.item,
            position: { offset: b + (x + s) * g + (x - w) / 2, size: w },
          },
        ]);
        return (
          y.stackList &&
            y.stackList.length &&
            y.stackList.forEach(function (_) {
              S.push({ item: _, position: S[S.length - 1].position });
            }),
          S
        );
      }, l);
    }
    return f;
  },
  E2 = function (t, r, n, i) {
    var a = n.children,
      o = n.width,
      u = n.margin,
      c = o - (u.left || 0) - (u.right || 0),
      s = vv({ children: a, legendWidth: c });
    if (s) {
      var f = i || {},
        l = f.width,
        p = f.height,
        h = s.align,
        m = s.verticalAlign,
        v = s.layout;
      if (
        (v === "vertical" || (v === "horizontal" && m === "middle")) &&
        h !== "center" &&
        F(t[h])
      )
        return de(de({}, t), {}, lr({}, h, t[h] + (l || 0)));
      if (
        (v === "horizontal" || (v === "vertical" && h === "center")) &&
        m !== "middle" &&
        F(t[m])
      )
        return de(de({}, t), {}, lr({}, m, t[m] + (p || 0)));
    }
    return t;
  },
  M2 = function (t, r, n) {
    return te(r)
      ? !0
      : t === "horizontal"
        ? r === "yAxis"
        : t === "vertical" || n === "x"
          ? r === "xAxis"
          : n === "y"
            ? r === "yAxis"
            : !0;
  },
  yv = function (t, r, n, i, a) {
    var o = r.props.children,
      u = Je(o, Ga).filter(function (s) {
        return M2(i, a, s.props.direction);
      });
    if (u && u.length) {
      var c = u.map(function (s) {
        return s.props.dataKey;
      });
      return t.reduce(
        function (s, f) {
          var l = at(f, n);
          if (te(l)) return s;
          var p = Array.isArray(l) ? [za(l), Wa(l)] : [l, l],
            h = c.reduce(
              function (m, v) {
                var d = at(f, v, 0),
                  b = p[0] - Math.abs(Array.isArray(d) ? d[0] : d),
                  x = p[1] + Math.abs(Array.isArray(d) ? d[1] : d);
                return [Math.min(b, m[0]), Math.max(x, m[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(h[0], s[0]), Math.max(h[1], s[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  C2 = function (t, r, n, i, a) {
    var o = r
      .map(function (u) {
        return yv(t, u, n, a, i);
      })
      .filter(function (u) {
        return !te(u);
      });
    return o && o.length
      ? o.reduce(
          function (u, c) {
            return [Math.min(u[0], c[0]), Math.max(u[1], c[1])];
          },
          [1 / 0, -1 / 0],
        )
      : null;
  },
  mv = function (t, r, n, i, a) {
    var o = r.map(function (c) {
      var s = c.props.dataKey;
      return (n === "number" && s && yv(t, c, s, i)) || nn(t, s, n, a);
    });
    if (n === "number")
      return o.reduce(
        function (c, s) {
          return [Math.min(c[0], s[0]), Math.max(c[1], s[1])];
        },
        [1 / 0, -1 / 0],
      );
    var u = {};
    return o.reduce(function (c, s) {
      for (var f = 0, l = s.length; f < l; f++)
        u[s[f]] || ((u[s[f]] = !0), c.push(s[f]));
      return c;
    }, []);
  },
  gv = function (t, r) {
    return (
      (t === "horizontal" && r === "xAxis") ||
      (t === "vertical" && r === "yAxis") ||
      (t === "centric" && r === "angleAxis") ||
      (t === "radial" && r === "radiusAxis")
    );
  },
  Lt = function (t, r, n) {
    if (!t) return null;
    var i = t.scale,
      a = t.duplicateDomain,
      o = t.type,
      u = t.range,
      c = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2,
      s = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / c : 0;
    if (
      ((s =
        t.axisType === "angleAxis" && (u == null ? void 0 : u.length) >= 2
          ? Ze(u[0] - u[1]) * 2 * s
          : s),
      r && (t.ticks || t.niceTicks))
    ) {
      var f = (t.ticks || t.niceTicks).map(function (l) {
        var p = a ? a.indexOf(l) : l;
        return { coordinate: i(p) + s, value: l, offset: s };
      });
      return f.filter(function (l) {
        return !Wn(l.coordinate);
      });
    }
    return t.isCategorical && t.categoricalDomain
      ? t.categoricalDomain.map(function (l, p) {
          return { coordinate: i(l) + s, value: l, index: p, offset: s };
        })
      : i.ticks && !n
        ? i.ticks(t.tickCount).map(function (l) {
            return { coordinate: i(l) + s, value: l, offset: s };
          })
        : i.domain().map(function (l, p) {
            return {
              coordinate: i(l) + s,
              value: a ? a[l] : l,
              index: p,
              offset: s,
            };
          });
  },
  $o = new WeakMap(),
  ai = function (t, r) {
    if (typeof r != "function") return t;
    $o.has(t) || $o.set(t, new WeakMap());
    var n = $o.get(t);
    if (n.has(r)) return n.get(r);
    var i = function () {
      (t.apply(void 0, arguments), r.apply(void 0, arguments));
    };
    return (n.set(r, i), i);
  },
  I2 = function (t, r, n) {
    var i = t.scale,
      a = t.type,
      o = t.layout,
      u = t.axisType;
    if (i === "auto")
      return o === "radial" && u === "radiusAxis"
        ? { scale: hn(), realScaleType: "band" }
        : o === "radial" && u === "angleAxis"
          ? { scale: Di(), realScaleType: "linear" }
          : a === "category" &&
              r &&
              (r.indexOf("LineChart") >= 0 ||
                r.indexOf("AreaChart") >= 0 ||
                (r.indexOf("ComposedChart") >= 0 && !n))
            ? { scale: rn(), realScaleType: "point" }
            : a === "category"
              ? { scale: hn(), realScaleType: "band" }
              : { scale: Di(), realScaleType: "linear" };
    if (Ht(i)) {
      var c = "scale".concat(ja(i));
      return { scale: (xf[c] || rn)(), realScaleType: xf[c] ? c : "point" };
    }
    return Z(i) ? { scale: i } : { scale: rn(), realScaleType: "point" };
  },
  Tf = 1e-4,
  N2 = function (t) {
    var r = t.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        i = t.range(),
        a = Math.min(i[0], i[1]) - Tf,
        o = Math.max(i[0], i[1]) + Tf,
        u = t(r[0]),
        c = t(r[n - 1]);
      (u < a || u > o || c < a || c > o) && t.domain([r[0], r[n - 1]]);
    }
  },
  k2 = function (t, r) {
    if (!t) return null;
    for (var n = 0, i = t.length; n < i; n++)
      if (t[n].item === r) return t[n].position;
    return null;
  },
  D2 = function (t, r) {
    if (!r || r.length !== 2 || !F(r[0]) || !F(r[1])) return t;
    var n = Math.min(r[0], r[1]),
      i = Math.max(r[0], r[1]),
      a = [t[0], t[1]];
    return (
      (!F(t[0]) || t[0] < n) && (a[0] = n),
      (!F(t[1]) || t[1] > i) && (a[1] = i),
      a[0] > i && (a[0] = i),
      a[1] < n && (a[1] = n),
      a
    );
  },
  B2 = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0, u = 0; u < r; ++u) {
          var c = Wn(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
          c >= 0
            ? ((t[u][n][0] = a), (t[u][n][1] = a + c), (a = t[u][n][1]))
            : ((t[u][n][0] = o), (t[u][n][1] = o + c), (o = t[u][n][1]));
        }
  },
  R2 = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0; o < r; ++o) {
          var u = Wn(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
          u >= 0
            ? ((t[o][n][0] = a), (t[o][n][1] = a + u), (a = t[o][n][1]))
            : ((t[o][n][0] = 0), (t[o][n][1] = 0));
        }
  },
  L2 = {
    sign: B2,
    expand: Jx,
    none: fr,
    silhouette: Qx,
    wiggle: ew,
    positive: R2,
  },
  F2 = function (t, r, n) {
    var i = r.map(function (u) {
        return u.props.dataKey;
      }),
      a = L2[n],
      o = Zx()
        .keys(i)
        .value(function (u, c) {
          return +at(u, c, 0);
        })
        .order(Xo)
        .offset(a);
    return o(t);
  },
  U2 = function (t, r, n, i, a, o) {
    if (!t) return null;
    var u = o ? r.reverse() : r,
      c = {},
      s = u.reduce(function (l, p) {
        var h,
          m =
            (h = p.type) !== null && h !== void 0 && h.defaultProps
              ? de(de({}, p.type.defaultProps), p.props)
              : p.props,
          v = m.stackId,
          d = m.hide;
        if (d) return l;
        var b = m[n],
          x = l[b] || { hasStack: !1, stackGroups: {} };
        if (Oe(v)) {
          var w = x.stackGroups[v] || {
            numericAxisId: n,
            cateAxisId: i,
            items: [],
          };
          (w.items.push(p), (x.hasStack = !0), (x.stackGroups[v] = w));
        } else
          x.stackGroups[Ta("_stackId_")] = {
            numericAxisId: n,
            cateAxisId: i,
            items: [p],
          };
        return de(de({}, l), {}, lr({}, b, x));
      }, c),
      f = {};
    return Object.keys(s).reduce(function (l, p) {
      var h = s[p];
      if (h.hasStack) {
        var m = {};
        h.stackGroups = Object.keys(h.stackGroups).reduce(function (v, d) {
          var b = h.stackGroups[d];
          return de(
            de({}, v),
            {},
            lr({}, d, {
              numericAxisId: n,
              cateAxisId: i,
              items: b.items,
              stackedData: F2(t, b.items, a),
            }),
          );
        }, m);
      }
      return de(de({}, l), {}, lr({}, p, h));
    }, f);
  },
  W2 = function (t, r) {
    var n = r.realScaleType,
      i = r.type,
      a = r.tickCount,
      o = r.originalDomain,
      u = r.allowDecimals,
      c = n || r.scale;
    if (c !== "auto" && c !== "linear") return null;
    if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
      var s = t.domain();
      if (!s.length) return null;
      var f = QC(s, a, u);
      return (t.domain([za(f), Wa(f)]), { niceTicks: f });
    }
    if (a && i === "number") {
      var l = t.domain(),
        p = e2(l, a, u);
      return { niceTicks: p };
    }
    return null;
  },
  jf = function (t) {
    var r = t.axis,
      n = t.ticks,
      i = t.offset,
      a = t.bandSize,
      o = t.entry,
      u = t.index;
    if (r.type === "category") return n[u] ? n[u].coordinate + i : null;
    var c = at(o, r.dataKey, r.domain[u]);
    return te(c) ? null : r.scale(c) - a / 2 + i;
  },
  z2 = function (t) {
    var r = t.numericAxis,
      n = r.scale.domain();
    if (r.type === "number") {
      var i = Math.min(n[0], n[1]),
        a = Math.max(n[0], n[1]);
      return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
    }
    return n[0];
  },
  H2 = function (t, r) {
    var n,
      i =
        (n = t.type) !== null && n !== void 0 && n.defaultProps
          ? de(de({}, t.type.defaultProps), t.props)
          : t.props,
      a = i.stackId;
    if (Oe(a)) {
      var o = r[a];
      if (o) {
        var u = o.items.indexOf(t);
        return u >= 0 ? o.stackedData[u] : null;
      }
    }
    return null;
  },
  q2 = function (t) {
    return t.reduce(
      function (r, n) {
        return [za(n.concat([r[0]]).filter(F)), Wa(n.concat([r[1]]).filter(F))];
      },
      [1 / 0, -1 / 0],
    );
  },
  bv = function (t, r, n) {
    return Object.keys(t)
      .reduce(
        function (i, a) {
          var o = t[a],
            u = o.stackedData,
            c = u.reduce(
              function (s, f) {
                var l = q2(f.slice(r, n + 1));
                return [Math.min(s[0], l[0]), Math.max(s[1], l[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(c[0], i[0]), Math.max(c[1], i[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (i) {
        return i === 1 / 0 || i === -1 / 0 ? 0 : i;
      });
  },
  Ef = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Mf = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  _u = function (t, r, n) {
    if (Z(t)) return t(r, n);
    if (!Array.isArray(t)) return r;
    var i = [];
    if (F(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
    else if (Ef.test(t[0])) {
      var a = +Ef.exec(t[0])[1];
      i[0] = r[0] - a;
    } else Z(t[0]) ? (i[0] = t[0](r[0])) : (i[0] = r[0]);
    if (F(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
    else if (Mf.test(t[1])) {
      var o = +Mf.exec(t[1])[1];
      i[1] = r[1] + o;
    } else Z(t[1]) ? (i[1] = t[1](r[1])) : (i[1] = r[1]);
    return i;
  },
  zi = function (t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
      var i = t.scale.bandwidth();
      if (!n || i > 0) return i;
    }
    if (t && r && r.length >= 2) {
      for (
        var a = jc(r, function (l) {
            return l.coordinate;
          }),
          o = 1 / 0,
          u = 1,
          c = a.length;
        u < c;
        u++
      ) {
        var s = a[u],
          f = a[u - 1];
        o = Math.min((s.coordinate || 0) - (f.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return n ? void 0 : 0;
  },
  Cf = function (t, r, n) {
    return !t || !t.length || es(t, He(n, "type.defaultProps.domain")) ? r : t;
  },
  xv = function (t, r) {
    var n = t.type.defaultProps
        ? de(de({}, t.type.defaultProps), t.props)
        : t.props,
      i = n.dataKey,
      a = n.name,
      o = n.unit,
      u = n.formatter,
      c = n.tooltipType,
      s = n.chartType,
      f = n.hide;
    return de(
      de({}, ne(t, !1)),
      {},
      {
        dataKey: i,
        unit: o,
        formatter: u,
        name: a || i,
        color: ns(t),
        value: at(r, i),
        type: c,
        payload: r,
        chartType: s,
        hide: f,
      },
    );
  };
function On(e) {
  "@babel/helpers - typeof";
  return (
    (On =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    On(e)
  );
}
function If(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Nf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? If(Object(r), !0).forEach(function (n) {
          G2(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : If(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function G2(e, t, r) {
  return (
    (t = K2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function K2(e) {
  var t = X2(e, "string");
  return On(t) == "symbol" ? t : t + "";
}
function X2(e, t) {
  if (On(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (On(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Hi = Math.PI / 180,
  V2 = function (t) {
    return (t * 180) / Math.PI;
  },
  Te = function (t, r, n, i) {
    return { x: t + Math.cos(-Hi * i) * n, y: r + Math.sin(-Hi * i) * n };
  },
  Y2 = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
  },
  Z2 = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.cx,
      o = r.cy,
      u = Y2({ x: n, y: i }, { x: a, y: o });
    if (u <= 0) return { radius: u };
    var c = (n - a) / u,
      s = Math.acos(c);
    return (
      i > o && (s = 2 * Math.PI - s),
      { radius: u, angle: V2(s), angleInRadian: s }
    );
  },
  J2 = function (t) {
    var r = t.startAngle,
      n = t.endAngle,
      i = Math.floor(r / 360),
      a = Math.floor(n / 360),
      o = Math.min(i, a);
    return { startAngle: r - o * 360, endAngle: n - o * 360 };
  },
  Q2 = function (t, r) {
    var n = r.startAngle,
      i = r.endAngle,
      a = Math.floor(n / 360),
      o = Math.floor(i / 360),
      u = Math.min(a, o);
    return t + u * 360;
  },
  kf = function (t, r) {
    var n = t.x,
      i = t.y,
      a = Z2({ x: n, y: i }, r),
      o = a.radius,
      u = a.angle,
      c = r.innerRadius,
      s = r.outerRadius;
    if (o < c || o > s) return !1;
    if (o === 0) return !0;
    var f = J2(r),
      l = f.startAngle,
      p = f.endAngle,
      h = u,
      m;
    if (l <= p) {
      for (; h > p; ) h -= 360;
      for (; h < l; ) h += 360;
      m = h >= l && h <= p;
    } else {
      for (; h > l; ) h -= 360;
      for (; h < p; ) h += 360;
      m = h >= p && h <= l;
    }
    return m ? Nf(Nf({}, r), {}, { radius: o, angle: Q2(h, r) }) : null;
  };
function Sn(e) {
  "@babel/helpers - typeof";
  return (
    (Sn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sn(e)
  );
}
var eI = ["offset"];
function tI(e) {
  return aI(e) || iI(e) || nI(e) || rI();
}
function rI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nI(e, t) {
  if (e) {
    if (typeof e == "string") return Au(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Au(e, t);
  }
}
function iI(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function aI(e) {
  if (Array.isArray(e)) return Au(e);
}
function Au(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oI(e, t) {
  if (e == null) return {};
  var r = uI(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function uI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Df(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function we(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Df(Object(r), !0).forEach(function (n) {
          cI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Df(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cI(e, t, r) {
  return (
    (t = sI(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function sI(e) {
  var t = lI(e, "string");
  return Sn(t) == "symbol" ? t : t + "";
}
function lI(e, t) {
  if (Sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _n() {
  return (
    (_n = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _n.apply(this, arguments)
  );
}
var fI = function (t) {
    var r = t.value,
      n = t.formatter,
      i = te(t.children) ? r : t.children;
    return Z(n) ? n(i) : i;
  },
  pI = function (t, r) {
    var n = Ze(r - t),
      i = Math.min(Math.abs(r - t), 360);
    return n * i;
  },
  hI = function (t, r, n) {
    var i = t.position,
      a = t.viewBox,
      o = t.offset,
      u = t.className,
      c = a,
      s = c.cx,
      f = c.cy,
      l = c.innerRadius,
      p = c.outerRadius,
      h = c.startAngle,
      m = c.endAngle,
      v = c.clockWise,
      d = (l + p) / 2,
      b = pI(h, m),
      x = b >= 0 ? 1 : -1,
      w,
      O;
    (i === "insideStart"
      ? ((w = h + x * o), (O = v))
      : i === "insideEnd"
        ? ((w = m - x * o), (O = !v))
        : i === "end" && ((w = m + x * o), (O = v)),
      (O = b <= 0 ? O : !O));
    var y = Te(s, f, d, w),
      g = Te(s, f, d, w + (O ? 1 : -1) * 359),
      S = "M"
        .concat(y.x, ",")
        .concat(
          y.y,
          `
    A`,
        )
        .concat(d, ",")
        .concat(d, ",0,1,")
        .concat(
          O ? 0 : 1,
          `,
    `,
        )
        .concat(g.x, ",")
        .concat(g.y),
      _ = te(t.id) ? Ta("recharts-radial-line-") : t.id;
    return $.createElement(
      "text",
      _n({}, n, {
        dominantBaseline: "central",
        className: ee("recharts-radial-bar-label", u),
      }),
      $.createElement("defs", null, $.createElement("path", { id: _, d: S })),
      $.createElement("textPath", { xlinkHref: "#".concat(_) }, r),
    );
  },
  dI = function (t) {
    var r = t.viewBox,
      n = t.offset,
      i = t.position,
      a = r,
      o = a.cx,
      u = a.cy,
      c = a.innerRadius,
      s = a.outerRadius,
      f = a.startAngle,
      l = a.endAngle,
      p = (f + l) / 2;
    if (i === "outside") {
      var h = Te(o, u, s + n, p),
        m = h.x,
        v = h.y;
      return {
        x: m,
        y: v,
        textAnchor: m >= o ? "start" : "end",
        verticalAnchor: "middle",
      };
    }
    if (i === "center")
      return { x: o, y: u, textAnchor: "middle", verticalAnchor: "middle" };
    if (i === "centerTop")
      return { x: o, y: u, textAnchor: "middle", verticalAnchor: "start" };
    if (i === "centerBottom")
      return { x: o, y: u, textAnchor: "middle", verticalAnchor: "end" };
    var d = (c + s) / 2,
      b = Te(o, u, d, p),
      x = b.x,
      w = b.y;
    return { x, y: w, textAnchor: "middle", verticalAnchor: "middle" };
  },
  vI = function (t) {
    var r = t.viewBox,
      n = t.parentViewBox,
      i = t.offset,
      a = t.position,
      o = r,
      u = o.x,
      c = o.y,
      s = o.width,
      f = o.height,
      l = f >= 0 ? 1 : -1,
      p = l * i,
      h = l > 0 ? "end" : "start",
      m = l > 0 ? "start" : "end",
      v = s >= 0 ? 1 : -1,
      d = v * i,
      b = v > 0 ? "end" : "start",
      x = v > 0 ? "start" : "end";
    if (a === "top") {
      var w = {
        x: u + s / 2,
        y: c - l * i,
        textAnchor: "middle",
        verticalAnchor: h,
      };
      return we(we({}, w), n ? { height: Math.max(c - n.y, 0), width: s } : {});
    }
    if (a === "bottom") {
      var O = {
        x: u + s / 2,
        y: c + f + p,
        textAnchor: "middle",
        verticalAnchor: m,
      };
      return we(
        we({}, O),
        n ? { height: Math.max(n.y + n.height - (c + f), 0), width: s } : {},
      );
    }
    if (a === "left") {
      var y = {
        x: u - d,
        y: c + f / 2,
        textAnchor: b,
        verticalAnchor: "middle",
      };
      return we(
        we({}, y),
        n ? { width: Math.max(y.x - n.x, 0), height: f } : {},
      );
    }
    if (a === "right") {
      var g = {
        x: u + s + d,
        y: c + f / 2,
        textAnchor: x,
        verticalAnchor: "middle",
      };
      return we(
        we({}, g),
        n ? { width: Math.max(n.x + n.width - g.x, 0), height: f } : {},
      );
    }
    var S = n ? { width: s, height: f } : {};
    return a === "insideLeft"
      ? we(
          { x: u + d, y: c + f / 2, textAnchor: x, verticalAnchor: "middle" },
          S,
        )
      : a === "insideRight"
        ? we(
            {
              x: u + s - d,
              y: c + f / 2,
              textAnchor: b,
              verticalAnchor: "middle",
            },
            S,
          )
        : a === "insideTop"
          ? we(
              {
                x: u + s / 2,
                y: c + p,
                textAnchor: "middle",
                verticalAnchor: m,
              },
              S,
            )
          : a === "insideBottom"
            ? we(
                {
                  x: u + s / 2,
                  y: c + f - p,
                  textAnchor: "middle",
                  verticalAnchor: h,
                },
                S,
              )
            : a === "insideTopLeft"
              ? we({ x: u + d, y: c + p, textAnchor: x, verticalAnchor: m }, S)
              : a === "insideTopRight"
                ? we(
                    {
                      x: u + s - d,
                      y: c + p,
                      textAnchor: b,
                      verticalAnchor: m,
                    },
                    S,
                  )
                : a === "insideBottomLeft"
                  ? we(
                      {
                        x: u + d,
                        y: c + f - p,
                        textAnchor: x,
                        verticalAnchor: h,
                      },
                      S,
                    )
                  : a === "insideBottomRight"
                    ? we(
                        {
                          x: u + s - d,
                          y: c + f - p,
                          textAnchor: b,
                          verticalAnchor: h,
                        },
                        S,
                      )
                    : Ir(a) && (F(a.x) || Dt(a.x)) && (F(a.y) || Dt(a.y))
                      ? we(
                          {
                            x: u + qt(a.x, s),
                            y: c + qt(a.y, f),
                            textAnchor: "end",
                            verticalAnchor: "end",
                          },
                          S,
                        )
                      : we(
                          {
                            x: u + s / 2,
                            y: c + f / 2,
                            textAnchor: "middle",
                            verticalAnchor: "middle",
                          },
                          S,
                        );
  },
  yI = function (t) {
    return "cx" in t && F(t.cx);
  };
function Ee(e) {
  var t = e.offset,
    r = t === void 0 ? 5 : t,
    n = oI(e, eI),
    i = we({ offset: r }, n),
    a = i.viewBox,
    o = i.position,
    u = i.value,
    c = i.children,
    s = i.content,
    f = i.className,
    l = f === void 0 ? "" : f,
    p = i.textBreakAll;
  if (!a || (te(u) && te(c) && !R.isValidElement(s) && !Z(s))) return null;
  if (R.isValidElement(s)) return R.cloneElement(s, i);
  var h;
  if (Z(s)) {
    if (((h = R.createElement(s, i)), R.isValidElement(h))) return h;
  } else h = fI(i);
  var m = yI(a),
    v = ne(i, !0);
  if (m && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return hI(i, h, v);
  var d = m ? dI(i) : vI(i);
  return $.createElement(
    Ti,
    _n({ className: ee("recharts-label", l) }, v, d, { breakAll: p }),
    h,
  );
}
Ee.displayName = "Label";
var wv = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.angle,
      a = t.startAngle,
      o = t.endAngle,
      u = t.r,
      c = t.radius,
      s = t.innerRadius,
      f = t.outerRadius,
      l = t.x,
      p = t.y,
      h = t.top,
      m = t.left,
      v = t.width,
      d = t.height,
      b = t.clockWise,
      x = t.labelViewBox;
    if (x) return x;
    if (F(v) && F(d)) {
      if (F(l) && F(p)) return { x: l, y: p, width: v, height: d };
      if (F(h) && F(m)) return { x: h, y: m, width: v, height: d };
    }
    return F(l) && F(p)
      ? { x: l, y: p, width: 0, height: 0 }
      : F(r) && F(n)
        ? {
            cx: r,
            cy: n,
            startAngle: a || i || 0,
            endAngle: o || i || 0,
            innerRadius: s || 0,
            outerRadius: f || c || u || 0,
            clockWise: b,
          }
        : t.viewBox
          ? t.viewBox
          : {};
  },
  mI = function (t, r) {
    return t
      ? t === !0
        ? $.createElement(Ee, { key: "label-implicit", viewBox: r })
        : Oe(t)
          ? $.createElement(Ee, { key: "label-implicit", viewBox: r, value: t })
          : R.isValidElement(t)
            ? t.type === Ee
              ? R.cloneElement(t, { key: "label-implicit", viewBox: r })
              : $.createElement(Ee, {
                  key: "label-implicit",
                  content: t,
                  viewBox: r,
                })
            : Z(t)
              ? $.createElement(Ee, {
                  key: "label-implicit",
                  content: t,
                  viewBox: r,
                })
              : Ir(t)
                ? $.createElement(
                    Ee,
                    _n({ viewBox: r }, t, { key: "label-implicit" }),
                  )
                : null
      : null;
  },
  gI = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && n && !t.label)) return null;
    var i = t.children,
      a = wv(t),
      o = Je(i, Ee).map(function (c, s) {
        return R.cloneElement(c, { viewBox: r || a, key: "label-".concat(s) });
      });
    if (!n) return o;
    var u = mI(t.label, r || a);
    return [u].concat(tI(o));
  };
Ee.parseViewBox = wv;
Ee.renderCallByParent = gI;
function bI(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var xI = bI;
const wI = fe(xI);
function An(e) {
  "@babel/helpers - typeof";
  return (
    (An =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    An(e)
  );
}
var OI = ["valueAccessor"],
  SI = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function _I(e) {
  return TI(e) || $I(e) || PI(e) || AI();
}
function AI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PI(e, t) {
  if (e) {
    if (typeof e == "string") return Pu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Pu(e, t);
  }
}
function $I(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function TI(e) {
  if (Array.isArray(e)) return Pu(e);
}
function Pu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function qi() {
  return (
    (qi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    qi.apply(this, arguments)
  );
}
function Bf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Rf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bf(Object(r), !0).forEach(function (n) {
          jI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function jI(e, t, r) {
  return (
    (t = EI(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function EI(e) {
  var t = MI(e, "string");
  return An(t) == "symbol" ? t : t + "";
}
function MI(e, t) {
  if (An(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (An(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lf(e, t) {
  if (e == null) return {};
  var r = CI(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function CI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var II = function (t) {
  return Array.isArray(t.value) ? wI(t.value) : t.value;
};
function zt(e) {
  var t = e.valueAccessor,
    r = t === void 0 ? II : t,
    n = Lf(e, OI),
    i = n.data,
    a = n.dataKey,
    o = n.clockWise,
    u = n.id,
    c = n.textBreakAll,
    s = Lf(n, SI);
  return !i || !i.length
    ? null
    : $.createElement(
        Ae,
        { className: "recharts-label-list" },
        i.map(function (f, l) {
          var p = te(a) ? r(f, l) : at(f && f.payload, a),
            h = te(u) ? {} : { id: "".concat(u, "-").concat(l) };
          return $.createElement(
            Ee,
            qi({}, ne(f, !0), s, h, {
              parentViewBox: f.parentViewBox,
              value: p,
              textBreakAll: c,
              viewBox: Ee.parseViewBox(
                te(o) ? f : Rf(Rf({}, f), {}, { clockWise: o }),
              ),
              key: "label-".concat(l),
              index: l,
            }),
          );
        }),
      );
}
zt.displayName = "LabelList";
function NI(e, t) {
  return e
    ? e === !0
      ? $.createElement(zt, { key: "labelList-implicit", data: t })
      : $.isValidElement(e) || Z(e)
        ? $.createElement(zt, {
            key: "labelList-implicit",
            data: t,
            content: e,
          })
        : Ir(e)
          ? $.createElement(
              zt,
              qi({ data: t }, e, { key: "labelList-implicit" }),
            )
          : null
    : null;
}
function kI(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var n = e.children,
    i = Je(n, zt).map(function (o, u) {
      return R.cloneElement(o, { data: t, key: "labelList-".concat(u) });
    });
  if (!r) return i;
  var a = NI(e.label, t);
  return [a].concat(_I(i));
}
zt.renderCallByParent = kI;
function Pn(e) {
  "@babel/helpers - typeof";
  return (
    (Pn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Pn(e)
  );
}
function $u() {
  return (
    ($u = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $u.apply(this, arguments)
  );
}
function Ff(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Uf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ff(Object(r), !0).forEach(function (n) {
          DI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ff(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function DI(e, t, r) {
  return (
    (t = BI(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function BI(e) {
  var t = RI(e, "string");
  return Pn(t) == "symbol" ? t : t + "";
}
function RI(e, t) {
  if (Pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var LI = function (t, r) {
    var n = Ze(r - t),
      i = Math.min(Math.abs(r - t), 359.999);
    return n * i;
  },
  oi = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.radius,
      a = t.angle,
      o = t.sign,
      u = t.isExternal,
      c = t.cornerRadius,
      s = t.cornerIsExternal,
      f = c * (u ? 1 : -1) + i,
      l = Math.asin(c / f) / Hi,
      p = s ? a : a + o * l,
      h = Te(r, n, f, p),
      m = Te(r, n, i, p),
      v = s ? a - o * l : a,
      d = Te(r, n, f * Math.cos(l * Hi), v);
    return { center: h, circleTangency: m, lineTangency: d, theta: l };
  },
  Ov = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.startAngle,
      u = t.endAngle,
      c = LI(o, u),
      s = o + c,
      f = Te(r, n, a, o),
      l = Te(r, n, a, s),
      p = "M "
        .concat(f.x, ",")
        .concat(
          f.y,
          `
    A `,
        )
        .concat(a, ",")
        .concat(
          a,
          `,0,
    `,
        )
        .concat(+(Math.abs(c) > 180), ",")
        .concat(
          +(o > s),
          `,
    `,
        )
        .concat(l.x, ",")
        .concat(
          l.y,
          `
  `,
        );
    if (i > 0) {
      var h = Te(r, n, i, o),
        m = Te(r, n, i, s);
      p += "L "
        .concat(m.x, ",")
        .concat(
          m.y,
          `
            A `,
        )
        .concat(i, ",")
        .concat(
          i,
          `,0,
            `,
        )
        .concat(+(Math.abs(c) > 180), ",")
        .concat(
          +(o <= s),
          `,
            `,
        )
        .concat(h.x, ",")
        .concat(h.y, " Z");
    } else p += "L ".concat(r, ",").concat(n, " Z");
    return p;
  },
  FI = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.cornerRadius,
      u = t.forceCornerRadius,
      c = t.cornerIsExternal,
      s = t.startAngle,
      f = t.endAngle,
      l = Ze(f - s),
      p = oi({
        cx: r,
        cy: n,
        radius: a,
        angle: s,
        sign: l,
        cornerRadius: o,
        cornerIsExternal: c,
      }),
      h = p.circleTangency,
      m = p.lineTangency,
      v = p.theta,
      d = oi({
        cx: r,
        cy: n,
        radius: a,
        angle: f,
        sign: -l,
        cornerRadius: o,
        cornerIsExternal: c,
      }),
      b = d.circleTangency,
      x = d.lineTangency,
      w = d.theta,
      O = c ? Math.abs(s - f) : Math.abs(s - f) - v - w;
    if (O < 0)
      return u
        ? "M "
            .concat(m.x, ",")
            .concat(
              m.y,
              `
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              o * 2,
              `,0
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              -o * 2,
              `,0
      `,
            )
        : Ov({
            cx: r,
            cy: n,
            innerRadius: i,
            outerRadius: a,
            startAngle: s,
            endAngle: f,
          });
    var y = "M "
      .concat(m.x, ",")
      .concat(
        m.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(l < 0), ",")
      .concat(h.x, ",")
      .concat(
        h.y,
        `
    A`,
      )
      .concat(a, ",")
      .concat(a, ",0,")
      .concat(+(O > 180), ",")
      .concat(+(l < 0), ",")
      .concat(b.x, ",")
      .concat(
        b.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(l < 0), ",")
      .concat(x.x, ",")
      .concat(
        x.y,
        `
  `,
      );
    if (i > 0) {
      var g = oi({
          cx: r,
          cy: n,
          radius: i,
          angle: s,
          sign: l,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: c,
        }),
        S = g.circleTangency,
        _ = g.lineTangency,
        A = g.theta,
        C = oi({
          cx: r,
          cy: n,
          radius: i,
          angle: f,
          sign: -l,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: c,
        }),
        j = C.circleTangency,
        P = C.lineTangency,
        N = C.theta,
        M = c ? Math.abs(s - f) : Math.abs(s - f) - A - N;
      if (M < 0 && o === 0)
        return "".concat(y, "L").concat(r, ",").concat(n, "Z");
      y += "L"
        .concat(P.x, ",")
        .concat(
          P.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(l < 0), ",")
        .concat(j.x, ",")
        .concat(
          j.y,
          `
      A`,
        )
        .concat(i, ",")
        .concat(i, ",0,")
        .concat(+(M > 180), ",")
        .concat(+(l > 0), ",")
        .concat(S.x, ",")
        .concat(
          S.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(l < 0), ",")
        .concat(_.x, ",")
        .concat(_.y, "Z");
    } else y += "L".concat(r, ",").concat(n, "Z");
    return y;
  },
  UI = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  Sv = function (t) {
    var r = Uf(Uf({}, UI), t),
      n = r.cx,
      i = r.cy,
      a = r.innerRadius,
      o = r.outerRadius,
      u = r.cornerRadius,
      c = r.forceCornerRadius,
      s = r.cornerIsExternal,
      f = r.startAngle,
      l = r.endAngle,
      p = r.className;
    if (o < a || f === l) return null;
    var h = ee("recharts-sector", p),
      m = o - a,
      v = qt(u, m, 0, !0),
      d;
    return (
      v > 0 && Math.abs(f - l) < 360
        ? (d = FI({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            cornerRadius: Math.min(v, m / 2),
            forceCornerRadius: c,
            cornerIsExternal: s,
            startAngle: f,
            endAngle: l,
          }))
        : (d = Ov({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            startAngle: f,
            endAngle: l,
          })),
      $.createElement(
        "path",
        $u({}, ne(r, !0), { className: h, d, role: "img" }),
      )
    );
  };
function $n(e) {
  "@babel/helpers - typeof";
  return (
    ($n =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    $n(e)
  );
}
function Tu() {
  return (
    (Tu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Tu.apply(this, arguments)
  );
}
function Wf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function zf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wf(Object(r), !0).forEach(function (n) {
          WI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function WI(e, t, r) {
  return (
    (t = zI(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function zI(e) {
  var t = HI(e, "string");
  return $n(t) == "symbol" ? t : t + "";
}
function HI(e, t) {
  if ($n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Hf = {
    curveBasisClosed: Fx,
    curveBasisOpen: Ux,
    curveBasis: Lx,
    curveBumpX: Ax,
    curveBumpY: Px,
    curveLinearClosed: Wx,
    curveLinear: Ma,
    curveMonotoneX: zx,
    curveMonotoneY: Hx,
    curveNatural: qx,
    curveStep: Gx,
    curveStepAfter: Xx,
    curveStepBefore: Kx,
  },
  ui = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  Yr = function (t) {
    return t.x;
  },
  Zr = function (t) {
    return t.y;
  },
  qI = function (t, r) {
    if (Z(t)) return t;
    var n = "curve".concat(ja(t));
    return (n === "curveMonotone" || n === "curveBump") && r
      ? Hf["".concat(n).concat(r === "vertical" ? "Y" : "X")]
      : Hf[n] || Ma;
  },
  GI = function (t) {
    var r = t.type,
      n = r === void 0 ? "linear" : r,
      i = t.points,
      a = i === void 0 ? [] : i,
      o = t.baseLine,
      u = t.layout,
      c = t.connectNulls,
      s = c === void 0 ? !1 : c,
      f = qI(n, u),
      l = s
        ? a.filter(function (v) {
            return ui(v);
          })
        : a,
      p;
    if (Array.isArray(o)) {
      var h = s
          ? o.filter(function (v) {
              return ui(v);
            })
          : o,
        m = l.map(function (v, d) {
          return zf(zf({}, v), {}, { base: h[d] });
        });
      return (
        u === "vertical"
          ? (p = Zn()
              .y(Zr)
              .x1(Yr)
              .x0(function (v) {
                return v.base.x;
              }))
          : (p = Zn()
              .x(Yr)
              .y1(Zr)
              .y0(function (v) {
                return v.base.y;
              })),
        p.defined(ui).curve(f),
        p(m)
      );
    }
    return (
      u === "vertical" && F(o)
        ? (p = Zn().y(Zr).x1(Yr).x0(o))
        : F(o)
          ? (p = Zn().x(Yr).y1(Zr).y0(o))
          : (p = $h().x(Yr).y(Zr)),
      p.defined(ui).curve(f),
      p(l)
    );
  },
  qf = function (t) {
    var r = t.className,
      n = t.points,
      i = t.path,
      a = t.pathRef;
    if ((!n || !n.length) && !i) return null;
    var o = n && n.length ? GI(t) : i;
    return R.createElement(
      "path",
      Tu({}, ne(t, !1), hi(t), {
        className: ee("recharts-curve", r),
        d: o,
        ref: a,
      }),
    );
  },
  _v = { exports: {} },
  KI = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  XI = KI,
  VI = XI;
function Av() {}
function Pv() {}
Pv.resetWarningCache = Av;
var YI = function () {
  function e(n, i, a, o, u, c) {
    if (c !== VI) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Pv,
    resetWarningCache: Av,
  };
  return ((r.PropTypes = r), r);
};
_v.exports = YI();
var ZI = _v.exports;
const re = fe(ZI),
  { getOwnPropertyNames: JI, getOwnPropertySymbols: QI } = Object,
  { hasOwnProperty: eN } = Object.prototype;
function To(e, t) {
  return function (n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function ci(e) {
  return function (r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    const { cache: a } = i,
      o = a.get(r),
      u = a.get(n);
    if (o && u) return o === n && u === r;
    (a.set(r, n), a.set(n, r));
    const c = e(r, n, i);
    return (a.delete(r), a.delete(n), c);
  };
}
function tN(e) {
  return e != null ? e[Symbol.toStringTag] : void 0;
}
function Gf(e) {
  return JI(e).concat(QI(e));
}
const rN = Object.hasOwn || ((e, t) => eN.call(e, t));
function Zt(e, t) {
  return e === t || (!e && !t && e !== e && t !== t);
}
const nN = "__v",
  iN = "__o",
  aN = "_owner",
  { getOwnPropertyDescriptor: Kf, keys: Xf } = Object;
function oN(e, t) {
  return (
    e.byteLength === t.byteLength && Gi(new Uint8Array(e), new Uint8Array(t))
  );
}
function uN(e, t, r) {
  let n = e.length;
  if (t.length !== n) return !1;
  for (; n-- > 0; ) if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1;
  return !0;
}
function cN(e, t) {
  return (
    e.byteLength === t.byteLength &&
    Gi(
      new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
      new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
    )
  );
}
function sN(e, t) {
  return Zt(e.getTime(), t.getTime());
}
function lN(e, t) {
  return (
    e.name === t.name &&
    e.message === t.message &&
    e.cause === t.cause &&
    e.stack === t.stack
  );
}
function fN(e, t) {
  return e === t;
}
function Vf(e, t, r) {
  const n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  const i = new Array(n),
    a = e.entries();
  let o,
    u,
    c = 0;
  for (; (o = a.next()) && !o.done; ) {
    const s = t.entries();
    let f = !1,
      l = 0;
    for (; (u = s.next()) && !u.done; ) {
      if (i[l]) {
        l++;
        continue;
      }
      const p = o.value,
        h = u.value;
      if (
        r.equals(p[0], h[0], c, l, e, t, r) &&
        r.equals(p[1], h[1], p[0], h[0], e, t, r)
      ) {
        f = i[l] = !0;
        break;
      }
      l++;
    }
    if (!f) return !1;
    c++;
  }
  return !0;
}
const pN = Zt;
function hN(e, t, r) {
  const n = Xf(e);
  let i = n.length;
  if (Xf(t).length !== i) return !1;
  for (; i-- > 0; ) if (!$v(e, t, r, n[i])) return !1;
  return !0;
}
function Jr(e, t, r) {
  const n = Gf(e);
  let i = n.length;
  if (Gf(t).length !== i) return !1;
  let a, o, u;
  for (; i-- > 0; )
    if (
      ((a = n[i]),
      !$v(e, t, r, a) ||
        ((o = Kf(e, a)),
        (u = Kf(t, a)),
        (o || u) &&
          (!o ||
            !u ||
            o.configurable !== u.configurable ||
            o.enumerable !== u.enumerable ||
            o.writable !== u.writable)))
    )
      return !1;
  return !0;
}
function dN(e, t) {
  return Zt(e.valueOf(), t.valueOf());
}
function vN(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Yf(e, t, r) {
  const n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  const i = new Array(n),
    a = e.values();
  let o, u;
  for (; (o = a.next()) && !o.done; ) {
    const c = t.values();
    let s = !1,
      f = 0;
    for (; (u = c.next()) && !u.done; ) {
      if (!i[f] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
        s = i[f] = !0;
        break;
      }
      f++;
    }
    if (!s) return !1;
  }
  return !0;
}
function Gi(e, t) {
  let r = e.byteLength;
  if (t.byteLength !== r || e.byteOffset !== t.byteOffset) return !1;
  for (; r-- > 0; ) if (e[r] !== t[r]) return !1;
  return !0;
}
function yN(e, t) {
  return (
    e.hostname === t.hostname &&
    e.pathname === t.pathname &&
    e.protocol === t.protocol &&
    e.port === t.port &&
    e.hash === t.hash &&
    e.username === t.username &&
    e.password === t.password
  );
}
function $v(e, t, r, n) {
  return (n === aN || n === iN || n === nN) && (e.$$typeof || t.$$typeof)
    ? !0
    : rN(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
const mN = "[object ArrayBuffer]",
  gN = "[object Arguments]",
  bN = "[object Boolean]",
  xN = "[object DataView]",
  wN = "[object Date]",
  ON = "[object Error]",
  SN = "[object Map]",
  _N = "[object Number]",
  AN = "[object Object]",
  PN = "[object RegExp]",
  $N = "[object Set]",
  TN = "[object String]",
  jN = {
    "[object Int8Array]": !0,
    "[object Uint8Array]": !0,
    "[object Uint8ClampedArray]": !0,
    "[object Int16Array]": !0,
    "[object Uint16Array]": !0,
    "[object Int32Array]": !0,
    "[object Uint32Array]": !0,
    "[object Float16Array]": !0,
    "[object Float32Array]": !0,
    "[object Float64Array]": !0,
    "[object BigInt64Array]": !0,
    "[object BigUint64Array]": !0,
  },
  EN = "[object URL]",
  MN = Object.prototype.toString;
function CN({
  areArrayBuffersEqual: e,
  areArraysEqual: t,
  areDataViewsEqual: r,
  areDatesEqual: n,
  areErrorsEqual: i,
  areFunctionsEqual: a,
  areMapsEqual: o,
  areNumbersEqual: u,
  areObjectsEqual: c,
  arePrimitiveWrappersEqual: s,
  areRegExpsEqual: f,
  areSetsEqual: l,
  areTypedArraysEqual: p,
  areUrlsEqual: h,
  unknownTagComparators: m,
}) {
  return function (d, b, x) {
    if (d === b) return !0;
    if (d == null || b == null) return !1;
    const w = typeof d;
    if (w !== typeof b) return !1;
    if (w !== "object")
      return w === "number" ? u(d, b, x) : w === "function" ? a(d, b, x) : !1;
    const O = d.constructor;
    if (O !== b.constructor) return !1;
    if (O === Object) return c(d, b, x);
    if (Array.isArray(d)) return t(d, b, x);
    if (O === Date) return n(d, b, x);
    if (O === RegExp) return f(d, b, x);
    if (O === Map) return o(d, b, x);
    if (O === Set) return l(d, b, x);
    const y = MN.call(d);
    if (y === wN) return n(d, b, x);
    if (y === PN) return f(d, b, x);
    if (y === SN) return o(d, b, x);
    if (y === $N) return l(d, b, x);
    if (y === AN)
      return (
        typeof d.then != "function" && typeof b.then != "function" && c(d, b, x)
      );
    if (y === EN) return h(d, b, x);
    if (y === ON) return i(d, b, x);
    if (y === gN) return c(d, b, x);
    if (jN[y]) return p(d, b, x);
    if (y === mN) return e(d, b, x);
    if (y === xN) return r(d, b, x);
    if (y === bN || y === _N || y === TN) return s(d, b, x);
    if (m) {
      let g = m[y];
      if (!g) {
        const S = tN(d);
        S && (g = m[S]);
      }
      if (g) return g(d, b, x);
    }
    return !1;
  };
}
function IN({ circular: e, createCustomConfig: t, strict: r }) {
  let n = {
    areArrayBuffersEqual: oN,
    areArraysEqual: r ? Jr : uN,
    areDataViewsEqual: cN,
    areDatesEqual: sN,
    areErrorsEqual: lN,
    areFunctionsEqual: fN,
    areMapsEqual: r ? To(Vf, Jr) : Vf,
    areNumbersEqual: pN,
    areObjectsEqual: r ? Jr : hN,
    arePrimitiveWrappersEqual: dN,
    areRegExpsEqual: vN,
    areSetsEqual: r ? To(Yf, Jr) : Yf,
    areTypedArraysEqual: r ? To(Gi, Jr) : Gi,
    areUrlsEqual: yN,
    unknownTagComparators: void 0,
  };
  if ((t && (n = Object.assign({}, n, t(n))), e)) {
    const i = ci(n.areArraysEqual),
      a = ci(n.areMapsEqual),
      o = ci(n.areObjectsEqual),
      u = ci(n.areSetsEqual);
    n = Object.assign({}, n, {
      areArraysEqual: i,
      areMapsEqual: a,
      areObjectsEqual: o,
      areSetsEqual: u,
    });
  }
  return n;
}
function NN(e) {
  return function (t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}
function kN({
  circular: e,
  comparator: t,
  createState: r,
  equals: n,
  strict: i,
}) {
  if (r)
    return function (u, c) {
      const { cache: s = e ? new WeakMap() : void 0, meta: f } = r();
      return t(u, c, { cache: s, equals: n, meta: f, strict: i });
    };
  if (e)
    return function (u, c) {
      return t(u, c, {
        cache: new WeakMap(),
        equals: n,
        meta: void 0,
        strict: i,
      });
    };
  const a = { cache: void 0, equals: n, meta: void 0, strict: i };
  return function (u, c) {
    return t(u, c, a);
  };
}
const DN = Tt();
Tt({ strict: !0 });
Tt({ circular: !0 });
Tt({ circular: !0, strict: !0 });
Tt({ createInternalComparator: () => Zt });
Tt({ strict: !0, createInternalComparator: () => Zt });
Tt({ circular: !0, createInternalComparator: () => Zt });
Tt({ circular: !0, createInternalComparator: () => Zt, strict: !0 });
function Tt(e = {}) {
  const {
      circular: t = !1,
      createInternalComparator: r,
      createState: n,
      strict: i = !1,
    } = e,
    a = IN(e),
    o = CN(a),
    u = r ? r(o) : NN(o);
  return kN({
    circular: t,
    comparator: o,
    createState: n,
    equals: u,
    strict: i,
  });
}
function BN(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Zf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function i(a) {
      (r < 0 && (r = a), a - r > t ? (e(a), (r = -1)) : BN(i));
    };
  requestAnimationFrame(n);
}
function ju(e) {
  "@babel/helpers - typeof";
  return (
    (ju =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ju(e)
  );
}
function RN(e) {
  return WN(e) || UN(e) || FN(e) || LN();
}
function LN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FN(e, t) {
  if (e) {
    if (typeof e == "string") return Jf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Jf(e, t);
  }
}
function Jf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function UN(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function WN(e) {
  if (Array.isArray(e)) return e;
}
function zN() {
  var e = {},
    t = function () {
      return null;
    },
    r = !1,
    n = function i(a) {
      if (!r) {
        if (Array.isArray(a)) {
          if (!a.length) return;
          var o = a,
            u = RN(o),
            c = u[0],
            s = u.slice(1);
          if (typeof c == "number") {
            Zf(i.bind(null, s), c);
            return;
          }
          (i(c), Zf(i.bind(null, s)));
          return;
        }
        (ju(a) === "object" && ((e = a), t(e)), typeof a == "function" && a());
      }
    };
  return {
    stop: function () {
      r = !0;
    },
    start: function (a) {
      ((r = !1), n(a));
    },
    subscribe: function (a) {
      return (
        (t = a),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function Tn(e) {
  "@babel/helpers - typeof";
  return (
    (Tn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Tn(e)
  );
}
function Qf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ep(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qf(Object(r), !0).forEach(function (n) {
          Tv(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Qf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Tv(e, t, r) {
  return (
    (t = HN(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function HN(e) {
  var t = qN(e, "string");
  return Tn(t) === "symbol" ? t : String(t);
}
function qN(e, t) {
  if (Tn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Tn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var GN = function (t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function (n, i) {
      return n.filter(function (a) {
        return i.includes(a);
      });
    });
  },
  KN = function (t) {
    return t;
  },
  XN = function (t) {
    return t.replace(/([A-Z])/g, function (r) {
      return "-".concat(r.toLowerCase());
    });
  },
  an = function (t, r) {
    return Object.keys(r).reduce(function (n, i) {
      return ep(ep({}, n), {}, Tv({}, i, t(i, r[i])));
    }, {});
  },
  tp = function (t, r, n) {
    return t
      .map(function (i) {
        return "".concat(XN(i), " ").concat(r, "ms ").concat(n);
      })
      .join(",");
  };
function VN(e, t) {
  return JN(e) || ZN(e, t) || jv(e, t) || YN();
}
function YN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZN(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function JN(e) {
  if (Array.isArray(e)) return e;
}
function QN(e) {
  return rk(e) || tk(e) || jv(e) || ek();
}
function ek() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jv(e, t) {
  if (e) {
    if (typeof e == "string") return Eu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Eu(e, t);
  }
}
function tk(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function rk(e) {
  if (Array.isArray(e)) return Eu(e);
}
function Eu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ki = 1e-4,
  Ev = function (t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
  },
  Mv = function (t, r) {
    return t
      .map(function (n, i) {
        return n * Math.pow(r, i);
      })
      .reduce(function (n, i) {
        return n + i;
      });
  },
  rp = function (t, r) {
    return function (n) {
      var i = Ev(t, r);
      return Mv(i, n);
    };
  },
  nk = function (t, r) {
    return function (n) {
      var i = Ev(t, r),
        a = [].concat(
          QN(
            i
              .map(function (o, u) {
                return o * u;
              })
              .slice(1),
          ),
          [0],
        );
      return Mv(a, n);
    };
  },
  np = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var i = r[0],
      a = r[1],
      o = r[2],
      u = r[3];
    if (r.length === 1)
      switch (r[0]) {
        case "linear":
          ((i = 0), (a = 0), (o = 1), (u = 1));
          break;
        case "ease":
          ((i = 0.25), (a = 0.1), (o = 0.25), (u = 1));
          break;
        case "ease-in":
          ((i = 0.42), (a = 0), (o = 1), (u = 1));
          break;
        case "ease-out":
          ((i = 0.42), (a = 0), (o = 0.58), (u = 1));
          break;
        case "ease-in-out":
          ((i = 0), (a = 0), (o = 0.58), (u = 1));
          break;
        default: {
          var c = r[0].split("(");
          if (
            c[0] === "cubic-bezier" &&
            c[1].split(")")[0].split(",").length === 4
          ) {
            var s = c[1]
                .split(")")[0]
                .split(",")
                .map(function (d) {
                  return parseFloat(d);
                }),
              f = VN(s, 4);
            ((i = f[0]), (a = f[1]), (o = f[2]), (u = f[3]));
          }
        }
      }
    var l = rp(i, o),
      p = rp(a, u),
      h = nk(i, o),
      m = function (b) {
        return b > 1 ? 1 : b < 0 ? 0 : b;
      },
      v = function (b) {
        for (var x = b > 1 ? 1 : b, w = x, O = 0; O < 8; ++O) {
          var y = l(w) - x,
            g = h(w);
          if (Math.abs(y - x) < Ki || g < Ki) return p(w);
          w = m(w - y / g);
        }
        return p(w);
      };
    return ((v.isStepper = !1), v);
  },
  ik = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.stiff,
      n = r === void 0 ? 100 : r,
      i = t.damping,
      a = i === void 0 ? 8 : i,
      o = t.dt,
      u = o === void 0 ? 17 : o,
      c = function (f, l, p) {
        var h = -(f - l) * n,
          m = p * a,
          v = p + ((h - m) * u) / 1e3,
          d = (p * u) / 1e3 + f;
        return Math.abs(d - l) < Ki && Math.abs(v) < Ki ? [l, 0] : [d, v];
      };
    return ((c.isStepper = !0), (c.dt = u), c);
  },
  ak = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var i = r[0];
    if (typeof i == "string")
      switch (i) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return np(i);
        case "spring":
          return ik();
        default:
          if (i.split("(")[0] === "cubic-bezier") return np(i);
      }
    return typeof i == "function" ? i : null;
  };
function jn(e) {
  "@babel/helpers - typeof";
  return (
    (jn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jn(e)
  );
}
function ip(e) {
  return ck(e) || uk(e) || Cv(e) || ok();
}
function ok() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uk(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function ck(e) {
  if (Array.isArray(e)) return Cu(e);
}
function ap(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function $e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ap(Object(r), !0).forEach(function (n) {
          Mu(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ap(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Mu(e, t, r) {
  return (
    (t = sk(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function sk(e) {
  var t = lk(e, "string");
  return jn(t) === "symbol" ? t : String(t);
}
function lk(e, t) {
  if (jn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fk(e, t) {
  return dk(e) || hk(e, t) || Cv(e, t) || pk();
}
function pk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cv(e, t) {
  if (e) {
    if (typeof e == "string") return Cu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Cu(e, t);
  }
}
function Cu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function hk(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function dk(e) {
  if (Array.isArray(e)) return e;
}
var Xi = function (t, r, n) {
    return t + (r - t) * n;
  },
  Iu = function (t) {
    var r = t.from,
      n = t.to;
    return r !== n;
  },
  vk = function e(t, r, n) {
    var i = an(function (a, o) {
      if (Iu(o)) {
        var u = t(o.from, o.to, o.velocity),
          c = fk(u, 2),
          s = c[0],
          f = c[1];
        return $e($e({}, o), {}, { from: s, velocity: f });
      }
      return o;
    }, r);
    return n < 1
      ? an(function (a, o) {
          return Iu(o)
            ? $e(
                $e({}, o),
                {},
                {
                  velocity: Xi(o.velocity, i[a].velocity, n),
                  from: Xi(o.from, i[a].from, n),
                },
              )
            : o;
        }, r)
      : e(t, i, n - 1);
  };
const yk = function (e, t, r, n, i) {
  var a = GN(e, t),
    o = a.reduce(function (d, b) {
      return $e($e({}, d), {}, Mu({}, b, [e[b], t[b]]));
    }, {}),
    u = a.reduce(function (d, b) {
      return $e(
        $e({}, d),
        {},
        Mu({}, b, { from: e[b], velocity: 0, to: t[b] }),
      );
    }, {}),
    c = -1,
    s,
    f,
    l = function () {
      return null;
    },
    p = function () {
      return an(function (b, x) {
        return x.from;
      }, u);
    },
    h = function () {
      return !Object.values(u).filter(Iu).length;
    },
    m = function (b) {
      s || (s = b);
      var x = b - s,
        w = x / r.dt;
      ((u = vk(r, u, w)),
        i($e($e($e({}, e), t), p())),
        (s = b),
        h() || (c = requestAnimationFrame(l)));
    },
    v = function (b) {
      f || (f = b);
      var x = (b - f) / n,
        w = an(function (y, g) {
          return Xi.apply(void 0, ip(g).concat([r(x)]));
        }, o);
      if ((i($e($e($e({}, e), t), w)), x < 1)) c = requestAnimationFrame(l);
      else {
        var O = an(function (y, g) {
          return Xi.apply(void 0, ip(g).concat([r(1)]));
        }, o);
        i($e($e($e({}, e), t), O));
      }
    };
  return (
    (l = r.isStepper ? m : v),
    function () {
      return (
        requestAnimationFrame(l),
        function () {
          cancelAnimationFrame(c);
        }
      );
    }
  );
};
function xr(e) {
  "@babel/helpers - typeof";
  return (
    (xr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    xr(e)
  );
}
var mk = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "steps",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
];
function gk(e, t) {
  if (e == null) return {};
  var r = bk(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function bk(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    ((i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]));
  return r;
}
function jo(e) {
  return Sk(e) || Ok(e) || wk(e) || xk();
}
function xk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wk(e, t) {
  if (e) {
    if (typeof e == "string") return Nu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Nu(e, t);
  }
}
function Ok(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Sk(e) {
  if (Array.isArray(e)) return Nu(e);
}
function Nu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function op(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? op(Object(r), !0).forEach(function (n) {
          en(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : op(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function en(e, t, r) {
  return (
    (t = Iv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function _k(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ak(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Iv(n.key), n));
  }
}
function Pk(e, t, r) {
  return (
    t && Ak(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Iv(e) {
  var t = $k(e, "string");
  return xr(t) === "symbol" ? t : String(t);
}
function $k(e, t) {
  if (xr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ku(e, t));
}
function ku(e, t) {
  return (
    (ku = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    ku(e, t)
  );
}
function jk(e) {
  var t = Ek();
  return function () {
    var n = Vi(e),
      i;
    if (t) {
      var a = Vi(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return Du(this, i);
  };
}
function Du(e, t) {
  if (t && (xr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Bu(e);
}
function Bu(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Ek() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Vi(e) {
  return (
    (Vi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Vi(e)
  );
}
var _t = (function (e) {
  Tk(r, e);
  var t = jk(r);
  function r(n, i) {
    var a;
    (_k(this, r), (a = t.call(this, n, i)));
    var o = a.props,
      u = o.isActive,
      c = o.attributeName,
      s = o.from,
      f = o.to,
      l = o.steps,
      p = o.children,
      h = o.duration;
    if (
      ((a.handleStyleChange = a.handleStyleChange.bind(Bu(a))),
      (a.changeStyle = a.changeStyle.bind(Bu(a))),
      !u || h <= 0)
    )
      return (
        (a.state = { style: {} }),
        typeof p == "function" && (a.state = { style: f }),
        Du(a)
      );
    if (l && l.length) a.state = { style: l[0].style };
    else if (s) {
      if (typeof p == "function") return ((a.state = { style: s }), Du(a));
      a.state = { style: c ? en({}, c, s) : s };
    } else a.state = { style: {} };
    return a;
  }
  return (
    Pk(r, [
      {
        key: "componentDidMount",
        value: function () {
          var i = this.props,
            a = i.isActive,
            o = i.canBegin;
          ((this.mounted = !0), !(!a || !o) && this.runAnimation(this.props));
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i) {
          var a = this.props,
            o = a.isActive,
            u = a.canBegin,
            c = a.attributeName,
            s = a.shouldReAnimate,
            f = a.to,
            l = a.from,
            p = this.state.style;
          if (u) {
            if (!o) {
              var h = { style: c ? en({}, c, f) : f };
              this.state &&
                p &&
                ((c && p[c] !== f) || (!c && p !== f)) &&
                this.setState(h);
              return;
            }
            if (!(DN(i.to, f) && i.canBegin && i.isActive)) {
              var m = !i.canBegin || !i.isActive;
              (this.manager && this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation());
              var v = m || s ? l : i.to;
              if (this.state && p) {
                var d = { style: c ? en({}, c, v) : v };
                ((c && p[c] !== v) || (!c && p !== v)) && this.setState(d);
              }
              this.runAnimation(
                Xe(Xe({}, this.props), {}, { from: v, begin: 0 }),
              );
            }
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.mounted = !1;
          var i = this.props.onAnimationEnd;
          (this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            i && i());
        },
      },
      {
        key: "handleStyleChange",
        value: function (i) {
          this.changeStyle(i);
        },
      },
      {
        key: "changeStyle",
        value: function (i) {
          this.mounted && this.setState({ style: i });
        },
      },
      {
        key: "runJSAnimation",
        value: function (i) {
          var a = this,
            o = i.from,
            u = i.to,
            c = i.duration,
            s = i.easing,
            f = i.begin,
            l = i.onAnimationEnd,
            p = i.onAnimationStart,
            h = yk(o, u, ak(s), c, this.changeStyle),
            m = function () {
              a.stopJSAnimation = h();
            };
          this.manager.start([p, f, m, c, l]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (i) {
          var a = this,
            o = i.steps,
            u = i.begin,
            c = i.onAnimationStart,
            s = o[0],
            f = s.style,
            l = s.duration,
            p = l === void 0 ? 0 : l,
            h = function (v, d, b) {
              if (b === 0) return v;
              var x = d.duration,
                w = d.easing,
                O = w === void 0 ? "ease" : w,
                y = d.style,
                g = d.properties,
                S = d.onAnimationEnd,
                _ = b > 0 ? o[b - 1] : d,
                A = g || Object.keys(y);
              if (typeof O == "function" || O === "spring")
                return [].concat(jo(v), [
                  a.runJSAnimation.bind(a, {
                    from: _.style,
                    to: y,
                    duration: x,
                    easing: O,
                  }),
                  x,
                ]);
              var C = tp(A, x, O),
                j = Xe(Xe(Xe({}, _.style), y), {}, { transition: C });
              return [].concat(jo(v), [j, x, S]).filter(KN);
            };
          return this.manager.start(
            [c].concat(jo(o.reduce(h, [f, Math.max(p, u)])), [
              i.onAnimationEnd,
            ]),
          );
        },
      },
      {
        key: "runAnimation",
        value: function (i) {
          this.manager || (this.manager = zN());
          var a = i.begin,
            o = i.duration,
            u = i.attributeName,
            c = i.to,
            s = i.easing,
            f = i.onAnimationStart,
            l = i.onAnimationEnd,
            p = i.steps,
            h = i.children,
            m = this.manager;
          if (
            ((this.unSubscribe = m.subscribe(this.handleStyleChange)),
            typeof s == "function" || typeof h == "function" || s === "spring")
          ) {
            this.runJSAnimation(i);
            return;
          }
          if (p.length > 1) {
            this.runStepAnimation(i);
            return;
          }
          var v = u ? en({}, u, c) : c,
            d = tp(Object.keys(v), o, s);
          m.start([f, a, Xe(Xe({}, v), {}, { transition: d }), o, l]);
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.children;
          i.begin;
          var o = i.duration;
          (i.attributeName, i.easing);
          var u = i.isActive;
          (i.steps,
            i.from,
            i.to,
            i.canBegin,
            i.onAnimationEnd,
            i.shouldReAnimate,
            i.onAnimationReStart);
          var c = gk(i, mk),
            s = R.Children.count(a),
            f = this.state.style;
          if (typeof a == "function") return a(f);
          if (!u || s === 0 || o <= 0) return a;
          var l = function (h) {
            var m = h.props,
              v = m.style,
              d = v === void 0 ? {} : v,
              b = m.className,
              x = R.cloneElement(
                h,
                Xe(Xe({}, c), {}, { style: Xe(Xe({}, d), f), className: b }),
              );
            return x;
          };
          return s === 1
            ? l(R.Children.only(a))
            : $.createElement(
                "div",
                null,
                R.Children.map(a, function (p) {
                  return l(p);
                }),
              );
        },
      },
    ]),
    r
  );
})(R.PureComponent);
_t.displayName = "Animate";
_t.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
_t.propTypes = {
  from: re.oneOfType([re.object, re.string]),
  to: re.oneOfType([re.object, re.string]),
  attributeName: re.string,
  duration: re.number,
  begin: re.number,
  easing: re.oneOfType([re.string, re.func]),
  steps: re.arrayOf(
    re.shape({
      duration: re.number.isRequired,
      style: re.object.isRequired,
      easing: re.oneOfType([
        re.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
        re.func,
      ]),
      properties: re.arrayOf("string"),
      onAnimationEnd: re.func,
    }),
  ),
  children: re.oneOfType([re.node, re.func]),
  isActive: re.bool,
  canBegin: re.bool,
  onAnimationEnd: re.func,
  shouldReAnimate: re.bool,
  onAnimationStart: re.func,
  onAnimationReStart: re.func,
};
function En(e) {
  "@babel/helpers - typeof";
  return (
    (En =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    En(e)
  );
}
function Yi() {
  return (
    (Yi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Yi.apply(this, arguments)
  );
}
function Mk(e, t) {
  return kk(e) || Nk(e, t) || Ik(e, t) || Ck();
}
function Ck() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ik(e, t) {
  if (e) {
    if (typeof e == "string") return up(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return up(e, t);
  }
}
function up(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Nk(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function kk(e) {
  if (Array.isArray(e)) return e;
}
function cp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function sp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cp(Object(r), !0).forEach(function (n) {
          Dk(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : cp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Dk(e, t, r) {
  return (
    (t = Bk(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Bk(e) {
  var t = Rk(e, "string");
  return En(t) == "symbol" ? t : t + "";
}
function Rk(e, t) {
  if (En(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (En(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lp = function (t, r, n, i, a) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
      u = i >= 0 ? 1 : -1,
      c = n >= 0 ? 1 : -1,
      s = (i >= 0 && n >= 0) || (i < 0 && n < 0) ? 1 : 0,
      f;
    if (o > 0 && a instanceof Array) {
      for (var l = [0, 0, 0, 0], p = 0, h = 4; p < h; p++)
        l[p] = a[p] > o ? o : a[p];
      ((f = "M".concat(t, ",").concat(r + u * l[0])),
        l[0] > 0 &&
          (f += "A "
            .concat(l[0], ",")
            .concat(l[0], ",0,0,")
            .concat(s, ",")
            .concat(t + c * l[0], ",")
            .concat(r)),
        (f += "L ".concat(t + n - c * l[1], ",").concat(r)),
        l[1] > 0 &&
          (f += "A "
            .concat(l[1], ",")
            .concat(l[1], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(t + n, ",")
            .concat(r + u * l[1])),
        (f += "L ".concat(t + n, ",").concat(r + i - u * l[2])),
        l[2] > 0 &&
          (f += "A "
            .concat(l[2], ",")
            .concat(l[2], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(t + n - c * l[2], ",")
            .concat(r + i)),
        (f += "L ".concat(t + c * l[3], ",").concat(r + i)),
        l[3] > 0 &&
          (f += "A "
            .concat(l[3], ",")
            .concat(l[3], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(t, ",")
            .concat(r + i - u * l[3])),
        (f += "Z"));
    } else if (o > 0 && a === +a && a > 0) {
      var m = Math.min(o, a);
      f = "M "
        .concat(t, ",")
        .concat(
          r + u * m,
          `
            A `,
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(t + c * m, ",")
        .concat(
          r,
          `
            L `,
        )
        .concat(t + n - c * m, ",")
        .concat(
          r,
          `
            A `,
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(t + n, ",")
        .concat(
          r + u * m,
          `
            L `,
        )
        .concat(t + n, ",")
        .concat(
          r + i - u * m,
          `
            A `,
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(t + n - c * m, ",")
        .concat(
          r + i,
          `
            L `,
        )
        .concat(t + c * m, ",")
        .concat(
          r + i,
          `
            A `,
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(t, ",")
        .concat(r + i - u * m, " Z");
    } else
      f = "M "
        .concat(t, ",")
        .concat(r, " h ")
        .concat(n, " v ")
        .concat(i, " h ")
        .concat(-n, " Z");
    return f;
  },
  Lk = function (t, r) {
    if (!t || !r) return !1;
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y,
      u = r.width,
      c = r.height;
    if (Math.abs(u) > 0 && Math.abs(c) > 0) {
      var s = Math.min(a, a + u),
        f = Math.max(a, a + u),
        l = Math.min(o, o + c),
        p = Math.max(o, o + c);
      return n >= s && n <= f && i >= l && i <= p;
    }
    return !1;
  },
  Fk = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  is = function (t) {
    var r = sp(sp({}, Fk), t),
      n = R.useRef(),
      i = R.useState(-1),
      a = Mk(i, 2),
      o = a[0],
      u = a[1];
    R.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var O = n.current.getTotalLength();
          O && u(O);
        } catch {}
    }, []);
    var c = r.x,
      s = r.y,
      f = r.width,
      l = r.height,
      p = r.radius,
      h = r.className,
      m = r.animationEasing,
      v = r.animationDuration,
      d = r.animationBegin,
      b = r.isAnimationActive,
      x = r.isUpdateAnimationActive;
    if (c !== +c || s !== +s || f !== +f || l !== +l || f === 0 || l === 0)
      return null;
    var w = ee("recharts-rectangle", h);
    return x
      ? $.createElement(
          _t,
          {
            canBegin: o > 0,
            from: { width: f, height: l, x: c, y: s },
            to: { width: f, height: l, x: c, y: s },
            duration: v,
            animationEasing: m,
            isActive: x,
          },
          function (O) {
            var y = O.width,
              g = O.height,
              S = O.x,
              _ = O.y;
            return $.createElement(
              _t,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: d,
                duration: v,
                isActive: b,
                easing: m,
              },
              $.createElement(
                "path",
                Yi({}, ne(r, !0), {
                  className: w,
                  d: lp(S, _, y, g, p),
                  ref: n,
                }),
              ),
            );
          },
        )
      : $.createElement(
          "path",
          Yi({}, ne(r, !0), { className: w, d: lp(c, s, f, l, p) }),
        );
  };
function Ru() {
  return (
    (Ru = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ru.apply(this, arguments)
  );
}
var Nv = function (t) {
  var r = t.cx,
    n = t.cy,
    i = t.r,
    a = t.className,
    o = ee("recharts-dot", a);
  return r === +r && n === +n && i === +i
    ? R.createElement(
        "circle",
        Ru({}, ne(t, !1), hi(t), { className: o, cx: r, cy: n, r: i }),
      )
    : null;
};
function Mn(e) {
  "@babel/helpers - typeof";
  return (
    (Mn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Mn(e)
  );
}
var Uk = ["x", "y", "top", "left", "width", "height", "className"];
function Lu() {
  return (
    (Lu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Lu.apply(this, arguments)
  );
}
function fp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Wk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fp(Object(r), !0).forEach(function (n) {
          zk(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function zk(e, t, r) {
  return (
    (t = Hk(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Hk(e) {
  var t = qk(e, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function qk(e, t) {
  if (Mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gk(e, t) {
  if (e == null) return {};
  var r = Kk(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function Kk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Xk = function (t, r, n, i, a, o) {
    return "M"
      .concat(t, ",")
      .concat(a, "v")
      .concat(i, "M")
      .concat(o, ",")
      .concat(r, "h")
      .concat(n);
  },
  Vk = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.top,
      u = o === void 0 ? 0 : o,
      c = t.left,
      s = c === void 0 ? 0 : c,
      f = t.width,
      l = f === void 0 ? 0 : f,
      p = t.height,
      h = p === void 0 ? 0 : p,
      m = t.className,
      v = Gk(t, Uk),
      d = Wk({ x: n, y: a, top: u, left: s, width: l, height: h }, v);
    return !F(n) || !F(a) || !F(l) || !F(h) || !F(u) || !F(s)
      ? null
      : $.createElement(
          "path",
          Lu({}, ne(d, !0), {
            className: ee("recharts-cross", m),
            d: Xk(n, a, l, h, u, s),
          }),
        );
  },
  Yk = Zh,
  Zk = Yk(Object.getPrototypeOf, Object),
  Jk = Zk,
  Qk = mt,
  eD = Jk,
  tD = gt,
  rD = "[object Object]",
  nD = Function.prototype,
  iD = Object.prototype,
  kv = nD.toString,
  aD = iD.hasOwnProperty,
  oD = kv.call(Object);
function uD(e) {
  if (!tD(e) || Qk(e) != rD) return !1;
  var t = eD(e);
  if (t === null) return !0;
  var r = aD.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && kv.call(r) == oD;
}
var cD = uD;
const sD = fe(cD);
var lD = mt,
  fD = gt,
  pD = "[object Boolean]";
function hD(e) {
  return e === !0 || e === !1 || (fD(e) && lD(e) == pD);
}
var dD = hD;
const vD = fe(dD);
function Cn(e) {
  "@babel/helpers - typeof";
  return (
    (Cn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Cn(e)
  );
}
function Zi() {
  return (
    (Zi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Zi.apply(this, arguments)
  );
}
function yD(e, t) {
  return xD(e) || bD(e, t) || gD(e, t) || mD();
}
function mD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gD(e, t) {
  if (e) {
    if (typeof e == "string") return pp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return pp(e, t);
  }
}
function pp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bD(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function xD(e) {
  if (Array.isArray(e)) return e;
}
function hp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function dp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hp(Object(r), !0).forEach(function (n) {
          wD(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function wD(e, t, r) {
  return (
    (t = OD(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function OD(e) {
  var t = SD(e, "string");
  return Cn(t) == "symbol" ? t : t + "";
}
function SD(e, t) {
  if (Cn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Cn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vp = function (t, r, n, i, a) {
    var o = n - i,
      u;
    return (
      (u = "M ".concat(t, ",").concat(r)),
      (u += "L ".concat(t + n, ",").concat(r)),
      (u += "L ".concat(t + n - o / 2, ",").concat(r + a)),
      (u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a)),
      (u += "L ".concat(t, ",").concat(r, " Z")),
      u
    );
  },
  _D = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  AD = function (t) {
    var r = dp(dp({}, _D), t),
      n = R.useRef(),
      i = R.useState(-1),
      a = yD(i, 2),
      o = a[0],
      u = a[1];
    R.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var w = n.current.getTotalLength();
          w && u(w);
        } catch {}
    }, []);
    var c = r.x,
      s = r.y,
      f = r.upperWidth,
      l = r.lowerWidth,
      p = r.height,
      h = r.className,
      m = r.animationEasing,
      v = r.animationDuration,
      d = r.animationBegin,
      b = r.isUpdateAnimationActive;
    if (
      c !== +c ||
      s !== +s ||
      f !== +f ||
      l !== +l ||
      p !== +p ||
      (f === 0 && l === 0) ||
      p === 0
    )
      return null;
    var x = ee("recharts-trapezoid", h);
    return b
      ? $.createElement(
          _t,
          {
            canBegin: o > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: p, x: c, y: s },
            to: { upperWidth: f, lowerWidth: l, height: p, x: c, y: s },
            duration: v,
            animationEasing: m,
            isActive: b,
          },
          function (w) {
            var O = w.upperWidth,
              y = w.lowerWidth,
              g = w.height,
              S = w.x,
              _ = w.y;
            return $.createElement(
              _t,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: d,
                duration: v,
                easing: m,
              },
              $.createElement(
                "path",
                Zi({}, ne(r, !0), {
                  className: x,
                  d: vp(S, _, O, y, g),
                  ref: n,
                }),
              ),
            );
          },
        )
      : $.createElement(
          "g",
          null,
          $.createElement(
            "path",
            Zi({}, ne(r, !0), { className: x, d: vp(c, s, f, l, p) }),
          ),
        );
  },
  PD = [
    "option",
    "shapeType",
    "propTransformer",
    "activeClassName",
    "isActive",
  ];
function In(e) {
  "@babel/helpers - typeof";
  return (
    (In =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    In(e)
  );
}
function $D(e, t) {
  if (e == null) return {};
  var r = TD(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function TD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function yp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ji(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yp(Object(r), !0).forEach(function (n) {
          jD(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function jD(e, t, r) {
  return (
    (t = ED(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ED(e) {
  var t = MD(e, "string");
  return In(t) == "symbol" ? t : t + "";
}
function MD(e, t) {
  if (In(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (In(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function CD(e, t) {
  return Ji(Ji({}, t), e);
}
function ID(e, t) {
  return e === "symbols";
}
function mp(e) {
  var t = e.shapeType,
    r = e.elementProps;
  switch (t) {
    case "rectangle":
      return $.createElement(is, r);
    case "trapezoid":
      return $.createElement(AD, r);
    case "sector":
      return $.createElement(Sv, r);
    case "symbols":
      if (ID(t)) return $.createElement(xc, r);
      break;
    default:
      return null;
  }
}
function ND(e) {
  return R.isValidElement(e) ? e.props : e;
}
function kD(e) {
  var t = e.option,
    r = e.shapeType,
    n = e.propTransformer,
    i = n === void 0 ? CD : n,
    a = e.activeClassName,
    o = a === void 0 ? "recharts-active-shape" : a,
    u = e.isActive,
    c = $D(e, PD),
    s;
  if (R.isValidElement(t)) s = R.cloneElement(t, Ji(Ji({}, c), ND(t)));
  else if (Z(t)) s = t(c);
  else if (sD(t) && !vD(t)) {
    var f = i(t, c);
    s = $.createElement(mp, { shapeType: r, elementProps: f });
  } else {
    var l = c;
    s = $.createElement(mp, { shapeType: r, elementProps: l });
  }
  return u ? $.createElement(Ae, { className: o }, s) : s;
}
function Ka(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Xa(e, t) {
  return t != null && "sectors" in e.props;
}
function Nn(e, t) {
  return t != null && "points" in e.props;
}
function DD(e, t) {
  var r,
    n,
    i =
      e.x ===
        (t == null || (r = t.labelViewBox) === null || r === void 0
          ? void 0
          : r.x) || e.x === t.x,
    a =
      e.y ===
        (t == null || (n = t.labelViewBox) === null || n === void 0
          ? void 0
          : n.y) || e.y === t.y;
  return i && a;
}
function BD(e, t) {
  var r = e.endAngle === t.endAngle,
    n = e.startAngle === t.startAngle;
  return r && n;
}
function RD(e, t) {
  var r = e.x === t.x,
    n = e.y === t.y,
    i = e.z === t.z;
  return r && n && i;
}
function LD(e, t) {
  var r;
  return (Ka(e, t) ? (r = DD) : Xa(e, t) ? (r = BD) : Nn(e, t) && (r = RD), r);
}
function FD(e, t) {
  var r;
  return (
    Ka(e, t)
      ? (r = "trapezoids")
      : Xa(e, t)
        ? (r = "sectors")
        : Nn(e, t) && (r = "points"),
    r
  );
}
function UD(e, t) {
  if (Ka(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null ||
      r === void 0 ||
      (r = r[0]) === null ||
      r === void 0 ||
      (r = r.payload) === null ||
      r === void 0
      ? void 0
      : r.payload;
  }
  if (Xa(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null ||
      n === void 0 ||
      (n = n[0]) === null ||
      n === void 0 ||
      (n = n.payload) === null ||
      n === void 0
      ? void 0
      : n.payload;
  }
  return Nn(e, t) ? t.payload : {};
}
function WD(e) {
  var t = e.activeTooltipItem,
    r = e.graphicalItem,
    n = e.itemData,
    i = FD(r, t),
    a = UD(r, t),
    o = n.filter(function (c, s) {
      var f = es(a, c),
        l = r.props[i].filter(function (m) {
          var v = LD(r, t);
          return v(m, t);
        }),
        p = r.props[i].indexOf(l[l.length - 1]),
        h = s === p;
      return f && h;
    }),
    u = n.indexOf(o[o.length - 1]);
  return u;
}
var zD = Math.ceil,
  HD = Math.max;
function qD(e, t, r, n) {
  for (var i = -1, a = HD(zD((t - e) / (r || 1)), 0), o = Array(a); a--; )
    ((o[n ? a : ++i] = e), (e += r));
  return o;
}
var GD = qD,
  KD = vd,
  gp = 1 / 0,
  XD = 17976931348623157e292;
function VD(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = KD(e)), e === gp || e === -gp)) {
    var t = e < 0 ? -1 : 1;
    return t * XD;
  }
  return e === e ? e : 0;
}
var YD = VD,
  ZD = GD,
  JD = ka,
  Eo = YD;
function QD(e) {
  return function (t, r, n) {
    return (
      n && typeof n != "number" && JD(t, r, n) && (r = n = void 0),
      (t = Eo(t)),
      r === void 0 ? ((r = t), (t = 0)) : (r = Eo(r)),
      (n = n === void 0 ? (t < r ? 1 : -1) : Eo(n)),
      ZD(t, r, n, e)
    );
  };
}
var eB = QD,
  tB = eB,
  rB = tB(),
  nB = rB;
const Qi = fe(nB);
function kn(e) {
  "@babel/helpers - typeof";
  return (
    (kn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    kn(e)
  );
}
function bp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function xp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bp(Object(r), !0).forEach(function (n) {
          Dv(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Dv(e, t, r) {
  return (
    (t = iB(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function iB(e) {
  var t = aB(e, "string");
  return kn(t) == "symbol" ? t : t + "";
}
function aB(e, t) {
  if (kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var oB = ["Webkit", "Moz", "O", "ms"],
  uB = function (t, r) {
    var n = t.replace(/(\w)/, function (a) {
        return a.toUpperCase();
      }),
      i = oB.reduce(function (a, o) {
        return xp(xp({}, a), {}, Dv({}, o + n, r));
      }, {});
    return ((i[t] = r), i);
  };
function wr(e) {
  "@babel/helpers - typeof";
  return (
    (wr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    wr(e)
  );
}
function ea() {
  return (
    (ea = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ea.apply(this, arguments)
  );
}
function wp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Mo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wp(Object(r), !0).forEach(function (n) {
          Be(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Op(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Rv(n.key), n));
  }
}
function sB(e, t, r) {
  return (
    t && Op(e.prototype, t),
    r && Op(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function lB(e, t, r) {
  return (
    (t = ta(t)),
    fB(
      e,
      Bv() ? Reflect.construct(t, r || [], ta(e).constructor) : t.apply(e, r),
    )
  );
}
function fB(e, t) {
  if (t && (wr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return pB(e);
}
function pB(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Bv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Bv = function () {
    return !!e;
  })();
}
function ta(e) {
  return (
    (ta = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ta(e)
  );
}
function hB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Fu(e, t));
}
function Fu(e, t) {
  return (
    (Fu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Fu(e, t)
  );
}
function Be(e, t, r) {
  return (
    (t = Rv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Rv(e) {
  var t = dB(e, "string");
  return wr(t) == "symbol" ? t : t + "";
}
function dB(e, t) {
  if (wr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var vB = function (t) {
    var r = t.data,
      n = t.startIndex,
      i = t.endIndex,
      a = t.x,
      o = t.width,
      u = t.travellerWidth;
    if (!r || !r.length) return {};
    var c = r.length,
      s = rn()
        .domain(Qi(0, c))
        .range([a, a + o - u]),
      f = s.domain().map(function (l) {
        return s(l);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: s(n),
      endX: s(i),
      scale: s,
      scaleValues: f,
    };
  },
  Sp = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  Or = (function (e) {
    function t(r) {
      var n;
      return (
        cB(this, t),
        (n = lB(this, t, [r])),
        Be(n, "handleDrag", function (i) {
          (n.leaveTimer && (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
            n.state.isTravellerMoving
              ? n.handleTravellerMove(i)
              : n.state.isSlideMoving && n.handleSlideDrag(i));
        }),
        Be(n, "handleTouchMove", function (i) {
          i.changedTouches != null &&
            i.changedTouches.length > 0 &&
            n.handleDrag(i.changedTouches[0]);
        }),
        Be(n, "handleDragEnd", function () {
          (n.setState(
            { isTravellerMoving: !1, isSlideMoving: !1 },
            function () {
              var i = n.props,
                a = i.endIndex,
                o = i.onDragEnd,
                u = i.startIndex;
              o == null || o({ endIndex: a, startIndex: u });
            },
          ),
            n.detachDragEndListener());
        }),
        Be(n, "handleLeaveWrapper", function () {
          (n.state.isTravellerMoving || n.state.isSlideMoving) &&
            (n.leaveTimer = window.setTimeout(
              n.handleDragEnd,
              n.props.leaveTimeOut,
            ));
        }),
        Be(n, "handleEnterSlideOrTraveller", function () {
          n.setState({ isTextActive: !0 });
        }),
        Be(n, "handleLeaveSlideOrTraveller", function () {
          n.setState({ isTextActive: !1 });
        }),
        Be(n, "handleSlideDragStart", function (i) {
          var a = Sp(i) ? i.changedTouches[0] : i;
          (n.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: a.pageX,
          }),
            n.attachDragEndListener());
        }),
        (n.travellerDragStartHandlers = {
          startX: n.handleTravellerDragStart.bind(n, "startX"),
          endX: n.handleTravellerDragStart.bind(n, "endX"),
        }),
        (n.state = {}),
        n
      );
    }
    return (
      hB(t, e),
      sB(
        t,
        [
          {
            key: "componentWillUnmount",
            value: function () {
              (this.leaveTimer &&
                (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener());
            },
          },
          {
            key: "getIndex",
            value: function (n) {
              var i = n.startX,
                a = n.endX,
                o = this.state.scaleValues,
                u = this.props,
                c = u.gap,
                s = u.data,
                f = s.length - 1,
                l = Math.min(i, a),
                p = Math.max(i, a),
                h = t.getIndexInRange(o, l),
                m = t.getIndexInRange(o, p);
              return {
                startIndex: h - (h % c),
                endIndex: m === f ? f : m - (m % c),
              };
            },
          },
          {
            key: "getTextOfTick",
            value: function (n) {
              var i = this.props,
                a = i.data,
                o = i.tickFormatter,
                u = i.dataKey,
                c = at(a[n], u, n);
              return Z(o) ? o(c, n) : c;
            },
          },
          {
            key: "attachDragEndListener",
            value: function () {
              (window.addEventListener("mouseup", this.handleDragEnd, !0),
                window.addEventListener("touchend", this.handleDragEnd, !0),
                window.addEventListener("mousemove", this.handleDrag, !0));
            },
          },
          {
            key: "detachDragEndListener",
            value: function () {
              (window.removeEventListener("mouseup", this.handleDragEnd, !0),
                window.removeEventListener("touchend", this.handleDragEnd, !0),
                window.removeEventListener("mousemove", this.handleDrag, !0));
            },
          },
          {
            key: "handleSlideDrag",
            value: function (n) {
              var i = this.state,
                a = i.slideMoveStartX,
                o = i.startX,
                u = i.endX,
                c = this.props,
                s = c.x,
                f = c.width,
                l = c.travellerWidth,
                p = c.startIndex,
                h = c.endIndex,
                m = c.onChange,
                v = n.pageX - a;
              v > 0
                ? (v = Math.min(v, s + f - l - u, s + f - l - o))
                : v < 0 && (v = Math.max(v, s - o, s - u));
              var d = this.getIndex({ startX: o + v, endX: u + v });
              ((d.startIndex !== p || d.endIndex !== h) && m && m(d),
                this.setState({
                  startX: o + v,
                  endX: u + v,
                  slideMoveStartX: n.pageX,
                }));
            },
          },
          {
            key: "handleTravellerDragStart",
            value: function (n, i) {
              var a = Sp(i) ? i.changedTouches[0] : i;
              (this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: n,
                brushMoveStartX: a.pageX,
              }),
                this.attachDragEndListener());
            },
          },
          {
            key: "handleTravellerMove",
            value: function (n) {
              var i = this.state,
                a = i.brushMoveStartX,
                o = i.movingTravellerId,
                u = i.endX,
                c = i.startX,
                s = this.state[o],
                f = this.props,
                l = f.x,
                p = f.width,
                h = f.travellerWidth,
                m = f.onChange,
                v = f.gap,
                d = f.data,
                b = { startX: this.state.startX, endX: this.state.endX },
                x = n.pageX - a;
              (x > 0
                ? (x = Math.min(x, l + p - h - s))
                : x < 0 && (x = Math.max(x, l - s)),
                (b[o] = s + x));
              var w = this.getIndex(b),
                O = w.startIndex,
                y = w.endIndex,
                g = function () {
                  var _ = d.length - 1;
                  return (
                    (o === "startX" && (u > c ? O % v === 0 : y % v === 0)) ||
                    (u < c && y === _) ||
                    (o === "endX" && (u > c ? y % v === 0 : O % v === 0)) ||
                    (u > c && y === _)
                  );
                };
              this.setState(
                Be(Be({}, o, s + x), "brushMoveStartX", n.pageX),
                function () {
                  m && g() && m(w);
                },
              );
            },
          },
          {
            key: "handleTravellerMoveKeyboard",
            value: function (n, i) {
              var a = this,
                o = this.state,
                u = o.scaleValues,
                c = o.startX,
                s = o.endX,
                f = this.state[i],
                l = u.indexOf(f);
              if (l !== -1) {
                var p = l + n;
                if (!(p === -1 || p >= u.length)) {
                  var h = u[p];
                  (i === "startX" && h >= s) ||
                    (i === "endX" && h <= c) ||
                    this.setState(Be({}, i, h), function () {
                      a.props.onChange(
                        a.getIndex({
                          startX: a.state.startX,
                          endX: a.state.endX,
                        }),
                      );
                    });
                }
              }
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                c = n.fill,
                s = n.stroke;
              return $.createElement("rect", {
                stroke: s,
                fill: c,
                x: i,
                y: a,
                width: o,
                height: u,
              });
            },
          },
          {
            key: "renderPanorama",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                c = n.data,
                s = n.children,
                f = n.padding,
                l = R.Children.only(s);
              return l
                ? $.cloneElement(l, {
                    x: i,
                    y: a,
                    width: o,
                    height: u,
                    margin: f,
                    compact: !0,
                    data: c,
                  })
                : null;
            },
          },
          {
            key: "renderTravellerLayer",
            value: function (n, i) {
              var a,
                o,
                u = this,
                c = this.props,
                s = c.y,
                f = c.travellerWidth,
                l = c.height,
                p = c.traveller,
                h = c.ariaLabel,
                m = c.data,
                v = c.startIndex,
                d = c.endIndex,
                b = Math.max(n, this.props.x),
                x = Mo(
                  Mo({}, ne(this.props, !1)),
                  {},
                  { x: b, y: s, width: f, height: l },
                ),
                w =
                  h ||
                  "Min value: "
                    .concat(
                      (a = m[v]) === null || a === void 0 ? void 0 : a.name,
                      ", Max value: ",
                    )
                    .concat(
                      (o = m[d]) === null || o === void 0 ? void 0 : o.name,
                    );
              return $.createElement(
                Ae,
                {
                  tabIndex: 0,
                  role: "slider",
                  "aria-label": w,
                  "aria-valuenow": n,
                  className: "recharts-brush-traveller",
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[i],
                  onTouchStart: this.travellerDragStartHandlers[i],
                  onKeyDown: function (y) {
                    ["ArrowLeft", "ArrowRight"].includes(y.key) &&
                      (y.preventDefault(),
                      y.stopPropagation(),
                      u.handleTravellerMoveKeyboard(
                        y.key === "ArrowRight" ? 1 : -1,
                        i,
                      ));
                  },
                  onFocus: function () {
                    u.setState({ isTravellerFocused: !0 });
                  },
                  onBlur: function () {
                    u.setState({ isTravellerFocused: !1 });
                  },
                  style: { cursor: "col-resize" },
                },
                t.renderTraveller(p, x),
              );
            },
          },
          {
            key: "renderSlide",
            value: function (n, i) {
              var a = this.props,
                o = a.y,
                u = a.height,
                c = a.stroke,
                s = a.travellerWidth,
                f = Math.min(n, i) + s,
                l = Math.max(Math.abs(i - n) - s, 0);
              return $.createElement("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: "move" },
                stroke: "none",
                fill: c,
                fillOpacity: 0.2,
                x: f,
                y: o,
                width: l,
                height: u,
              });
            },
          },
          {
            key: "renderText",
            value: function () {
              var n = this.props,
                i = n.startIndex,
                a = n.endIndex,
                o = n.y,
                u = n.height,
                c = n.travellerWidth,
                s = n.stroke,
                f = this.state,
                l = f.startX,
                p = f.endX,
                h = 5,
                m = { pointerEvents: "none", fill: s };
              return $.createElement(
                Ae,
                { className: "recharts-brush-texts" },
                $.createElement(
                  Ti,
                  ea(
                    {
                      textAnchor: "end",
                      verticalAnchor: "middle",
                      x: Math.min(l, p) - h,
                      y: o + u / 2,
                    },
                    m,
                  ),
                  this.getTextOfTick(i),
                ),
                $.createElement(
                  Ti,
                  ea(
                    {
                      textAnchor: "start",
                      verticalAnchor: "middle",
                      x: Math.max(l, p) + c + h,
                      y: o + u / 2,
                    },
                    m,
                  ),
                  this.getTextOfTick(a),
                ),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var n = this.props,
                i = n.data,
                a = n.className,
                o = n.children,
                u = n.x,
                c = n.y,
                s = n.width,
                f = n.height,
                l = n.alwaysShowText,
                p = this.state,
                h = p.startX,
                m = p.endX,
                v = p.isTextActive,
                d = p.isSlideMoving,
                b = p.isTravellerMoving,
                x = p.isTravellerFocused;
              if (
                !i ||
                !i.length ||
                !F(u) ||
                !F(c) ||
                !F(s) ||
                !F(f) ||
                s <= 0 ||
                f <= 0
              )
                return null;
              var w = ee("recharts-brush", a),
                O = $.Children.count(o) === 1,
                y = uB("userSelect", "none");
              return $.createElement(
                Ae,
                {
                  className: w,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: y,
                },
                this.renderBackground(),
                O && this.renderPanorama(),
                this.renderSlide(h, m),
                this.renderTravellerLayer(h, "startX"),
                this.renderTravellerLayer(m, "endX"),
                (v || d || b || x || l) && this.renderText(),
              );
            },
          },
        ],
        [
          {
            key: "renderDefaultTraveller",
            value: function (n) {
              var i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                c = n.stroke,
                s = Math.floor(a + u / 2) - 1;
              return $.createElement(
                $.Fragment,
                null,
                $.createElement("rect", {
                  x: i,
                  y: a,
                  width: o,
                  height: u,
                  fill: c,
                  stroke: "none",
                }),
                $.createElement("line", {
                  x1: i + 1,
                  y1: s,
                  x2: i + o - 1,
                  y2: s,
                  fill: "none",
                  stroke: "#fff",
                }),
                $.createElement("line", {
                  x1: i + 1,
                  y1: s + 2,
                  x2: i + o - 1,
                  y2: s + 2,
                  fill: "none",
                  stroke: "#fff",
                }),
              );
            },
          },
          {
            key: "renderTraveller",
            value: function (n, i) {
              var a;
              return (
                $.isValidElement(n)
                  ? (a = $.cloneElement(n, i))
                  : Z(n)
                    ? (a = n(i))
                    : (a = t.renderDefaultTraveller(i)),
                a
              );
            },
          },
          {
            key: "getDerivedStateFromProps",
            value: function (n, i) {
              var a = n.data,
                o = n.width,
                u = n.x,
                c = n.travellerWidth,
                s = n.updateId,
                f = n.startIndex,
                l = n.endIndex;
              if (a !== i.prevData || s !== i.prevUpdateId)
                return Mo(
                  {
                    prevData: a,
                    prevTravellerWidth: c,
                    prevUpdateId: s,
                    prevX: u,
                    prevWidth: o,
                  },
                  a && a.length
                    ? vB({
                        data: a,
                        width: o,
                        x: u,
                        travellerWidth: c,
                        startIndex: f,
                        endIndex: l,
                      })
                    : { scale: null, scaleValues: null },
                );
              if (
                i.scale &&
                (o !== i.prevWidth ||
                  u !== i.prevX ||
                  c !== i.prevTravellerWidth)
              ) {
                i.scale.range([u, u + o - c]);
                var p = i.scale.domain().map(function (h) {
                  return i.scale(h);
                });
                return {
                  prevData: a,
                  prevTravellerWidth: c,
                  prevUpdateId: s,
                  prevX: u,
                  prevWidth: o,
                  startX: i.scale(n.startIndex),
                  endX: i.scale(n.endIndex),
                  scaleValues: p,
                };
              }
              return null;
            },
          },
          {
            key: "getIndexInRange",
            value: function (n, i) {
              for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
                var c = Math.floor((o + u) / 2);
                n[c] > i ? (u = c) : (o = c);
              }
              return i >= n[u] ? u : o;
            },
          },
        ],
      )
    );
  })(R.PureComponent);
Be(Or, "displayName", "Brush");
Be(Or, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
});
var yB = Tc;
function mB(e, t) {
  var r;
  return (
    yB(e, function (n, i, a) {
      return ((r = t(n, i, a)), !r);
    }),
    !!r
  );
}
var gB = mB,
  bB = zh,
  xB = Fr,
  wB = gB,
  OB = ke,
  SB = ka;
function _B(e, t, r) {
  var n = OB(e) ? bB : wB;
  return (r && SB(e, t, r) && (t = void 0), n(e, xB(t)));
}
var AB = _B;
const PB = fe(AB);
var nt = function (t, r) {
    var n = t.alwaysShow,
      i = t.ifOverflow;
    return (n && (i = "extendDomain"), i === r);
  },
  _p = ld;
function $B(e, t, r) {
  t == "__proto__" && _p
    ? _p(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
    : (e[t] = r);
}
var TB = $B,
  jB = TB,
  EB = cd,
  MB = Fr;
function CB(e, t) {
  var r = {};
  return (
    (t = MB(t)),
    EB(e, function (n, i, a) {
      jB(r, i, t(n, i, a));
    }),
    r
  );
}
var IB = CB;
const NB = fe(IB);
function kB(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e)) return !1;
  return !0;
}
var DB = kB,
  BB = Tc;
function RB(e, t) {
  var r = !0;
  return (
    BB(e, function (n, i, a) {
      return ((r = !!t(n, i, a)), r);
    }),
    r
  );
}
var LB = RB,
  FB = DB,
  UB = LB,
  WB = Fr,
  zB = ke,
  HB = ka;
function qB(e, t, r) {
  var n = zB(e) ? FB : UB;
  return (r && HB(e, t, r) && (t = void 0), n(e, WB(t)));
}
var GB = qB;
const KB = fe(GB);
var XB = ["x", "y"];
function Dn(e) {
  "@babel/helpers - typeof";
  return (
    (Dn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Dn(e)
  );
}
function Uu() {
  return (
    (Uu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Uu.apply(this, arguments)
  );
}
function Ap(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ap(Object(r), !0).forEach(function (n) {
          VB(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ap(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function VB(e, t, r) {
  return (
    (t = YB(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function YB(e) {
  var t = ZB(e, "string");
  return Dn(t) == "symbol" ? t : t + "";
}
function ZB(e, t) {
  if (Dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function JB(e, t) {
  if (e == null) return {};
  var r = QB(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function QB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function eR(e, t) {
  var r = e.x,
    n = e.y,
    i = JB(e, XB),
    a = "".concat(r),
    o = parseInt(a, 10),
    u = "".concat(n),
    c = parseInt(u, 10),
    s = "".concat(t.height || i.height),
    f = parseInt(s, 10),
    l = "".concat(t.width || i.width),
    p = parseInt(l, 10);
  return Qr(
    Qr(Qr(Qr(Qr({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}),
    {},
    { height: f, width: p, name: t.name, radius: t.radius },
  );
}
function Pp(e) {
  return $.createElement(
    kD,
    Uu(
      {
        shapeType: "rectangle",
        propTransformer: eR,
        activeClassName: "recharts-active-bar",
      },
      e,
    ),
  );
}
var tR = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return function (n, i) {
      if (typeof t == "number") return t;
      var a = F(n) || f0(n);
      return a ? t(n, i) : (a || Kt(), r);
    };
  },
  rR = ["value", "background"],
  Lv;
function Sr(e) {
  "@babel/helpers - typeof";
  return (
    (Sr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sr(e)
  );
}
function nR(e, t) {
  if (e == null) return {};
  var r = iR(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function iR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ra() {
  return (
    (ra = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ra.apply(this, arguments)
  );
}
function $p(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $p(Object(r), !0).forEach(function (n) {
          Ot(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $p(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function aR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Uv(n.key), n));
  }
}
function oR(e, t, r) {
  return (
    t && Tp(e.prototype, t),
    r && Tp(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function uR(e, t, r) {
  return (
    (t = na(t)),
    cR(
      e,
      Fv() ? Reflect.construct(t, r || [], na(e).constructor) : t.apply(e, r),
    )
  );
}
function cR(e, t) {
  if (t && (Sr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return sR(e);
}
function sR(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Fv() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Fv = function () {
    return !!e;
  })();
}
function na(e) {
  return (
    (na = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    na(e)
  );
}
function lR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Wu(e, t));
}
function Wu(e, t) {
  return (
    (Wu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Wu(e, t)
  );
}
function Ot(e, t, r) {
  return (
    (t = Uv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Uv(e) {
  var t = fR(e, "string");
  return Sr(t) == "symbol" ? t : t + "";
}
function fR(e, t) {
  if (Sr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Jt = (function (e) {
  function t() {
    var r;
    aR(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return (
      (r = uR(this, t, [].concat(i))),
      Ot(r, "state", { isAnimationFinished: !1 }),
      Ot(r, "id", Ta("recharts-bar-")),
      Ot(r, "handleAnimationEnd", function () {
        var o = r.props.onAnimationEnd;
        (r.setState({ isAnimationFinished: !0 }), o && o());
      }),
      Ot(r, "handleAnimationStart", function () {
        var o = r.props.onAnimationStart;
        (r.setState({ isAnimationFinished: !1 }), o && o());
      }),
      r
    );
  }
  return (
    lR(t, e),
    oR(
      t,
      [
        {
          key: "renderRectanglesStatically",
          value: function (n) {
            var i = this,
              a = this.props,
              o = a.shape,
              u = a.dataKey,
              c = a.activeIndex,
              s = a.activeBar,
              f = ne(this.props, !1);
            return (
              n &&
              n.map(function (l, p) {
                var h = p === c,
                  m = h ? s : o,
                  v = ye(
                    ye(ye({}, f), l),
                    {},
                    {
                      isActive: h,
                      option: m,
                      index: p,
                      dataKey: u,
                      onAnimationStart: i.handleAnimationStart,
                      onAnimationEnd: i.handleAnimationEnd,
                    },
                  );
                return $.createElement(
                  Ae,
                  ra(
                    { className: "recharts-bar-rectangle" },
                    di(i.props, l, p),
                    {
                      key: "rectangle-"
                        .concat(l == null ? void 0 : l.x, "-")
                        .concat(l == null ? void 0 : l.y, "-")
                        .concat(l == null ? void 0 : l.value, "-")
                        .concat(p),
                    },
                  ),
                  $.createElement(Pp, v),
                );
              })
            );
          },
        },
        {
          key: "renderRectanglesWithAnimation",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.layout,
              u = i.isAnimationActive,
              c = i.animationBegin,
              s = i.animationDuration,
              f = i.animationEasing,
              l = i.animationId,
              p = this.state.prevData;
            return $.createElement(
              _t,
              {
                begin: c,
                duration: s,
                isActive: u,
                easing: f,
                from: { t: 0 },
                to: { t: 1 },
                key: "bar-".concat(l),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (h) {
                var m = h.t,
                  v = a.map(function (d, b) {
                    var x = p && p[b];
                    if (x) {
                      var w = er(x.x, d.x),
                        O = er(x.y, d.y),
                        y = er(x.width, d.width),
                        g = er(x.height, d.height);
                      return ye(
                        ye({}, d),
                        {},
                        { x: w(m), y: O(m), width: y(m), height: g(m) },
                      );
                    }
                    if (o === "horizontal") {
                      var S = er(0, d.height),
                        _ = S(m);
                      return ye(
                        ye({}, d),
                        {},
                        { y: d.y + d.height - _, height: _ },
                      );
                    }
                    var A = er(0, d.width),
                      C = A(m);
                    return ye(ye({}, d), {}, { width: C });
                  });
                return $.createElement(
                  Ae,
                  null,
                  n.renderRectanglesStatically(v),
                );
              },
            );
          },
        },
        {
          key: "renderRectangles",
          value: function () {
            var n = this.props,
              i = n.data,
              a = n.isAnimationActive,
              o = this.state.prevData;
            return a && i && i.length && (!o || !es(o, i))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(i);
          },
        },
        {
          key: "renderBackground",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.dataKey,
              u = i.activeIndex,
              c = ne(this.props.background, !1);
            return a.map(function (s, f) {
              s.value;
              var l = s.background,
                p = nR(s, rR);
              if (!l) return null;
              var h = ye(
                ye(
                  ye(ye(ye({}, p), {}, { fill: "#eee" }, l), c),
                  di(n.props, s, f),
                ),
                {},
                {
                  onAnimationStart: n.handleAnimationStart,
                  onAnimationEnd: n.handleAnimationEnd,
                  dataKey: o,
                  index: f,
                  className: "recharts-bar-background-rectangle",
                },
              );
              return $.createElement(
                Pp,
                ra(
                  {
                    key: "background-bar-".concat(f),
                    option: n.props.background,
                    isActive: f === u,
                  },
                  h,
                ),
              );
            });
          },
        },
        {
          key: "renderErrorBar",
          value: function (n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var a = this.props,
              o = a.data,
              u = a.xAxis,
              c = a.yAxis,
              s = a.layout,
              f = a.children,
              l = Je(f, Ga);
            if (!l) return null;
            var p = s === "vertical" ? o[0].height / 2 : o[0].width / 2,
              h = function (d, b) {
                var x = Array.isArray(d.value) ? d.value[1] : d.value;
                return { x: d.x, y: d.y, value: x, errorVal: at(d, b) };
              },
              m = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
            return $.createElement(
              Ae,
              m,
              l.map(function (v) {
                return $.cloneElement(v, {
                  key: "error-bar-".concat(i, "-").concat(v.props.dataKey),
                  data: o,
                  xAxis: u,
                  yAxis: c,
                  layout: s,
                  offset: p,
                  dataPointFormatter: h,
                });
              }),
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.hide,
              a = n.data,
              o = n.className,
              u = n.xAxis,
              c = n.yAxis,
              s = n.left,
              f = n.top,
              l = n.width,
              p = n.height,
              h = n.isAnimationActive,
              m = n.background,
              v = n.id;
            if (i || !a || !a.length) return null;
            var d = this.state.isAnimationFinished,
              b = ee("recharts-bar", o),
              x = u && u.allowDataOverflow,
              w = c && c.allowDataOverflow,
              O = x || w,
              y = te(v) ? this.id : v;
            return $.createElement(
              Ae,
              { className: b },
              x || w
                ? $.createElement(
                    "defs",
                    null,
                    $.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(y) },
                      $.createElement("rect", {
                        x: x ? s : s - l / 2,
                        y: w ? f : f - p / 2,
                        width: x ? l : l * 2,
                        height: w ? p : p * 2,
                      }),
                    ),
                  )
                : null,
              $.createElement(
                Ae,
                {
                  className: "recharts-bar-rectangles",
                  clipPath: O ? "url(#clipPath-".concat(y, ")") : null,
                },
                m ? this.renderBackground() : null,
                this.renderRectangles(),
              ),
              this.renderErrorBar(O, y),
              (!h || d) && zt.renderCallByParent(this.props, a),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, i) {
            return n.animationId !== i.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curData: n.data,
                  prevData: i.curData,
                }
              : n.data !== i.curData
                ? { curData: n.data }
                : null;
          },
        },
      ],
    )
  );
})(R.PureComponent);
Lv = Jt;
Ot(Jt, "displayName", "Bar");
Ot(Jt, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !zn.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
});
Ot(Jt, "getComposedData", function (e) {
  var t = e.props,
    r = e.item,
    n = e.barPosition,
    i = e.bandSize,
    a = e.xAxis,
    o = e.yAxis,
    u = e.xAxisTicks,
    c = e.yAxisTicks,
    s = e.stackedData,
    f = e.dataStartIndex,
    l = e.displayedData,
    p = e.offset,
    h = k2(n, r);
  if (!h) return null;
  var m = t.layout,
    v = r.type.defaultProps,
    d = v !== void 0 ? ye(ye({}, v), r.props) : r.props,
    b = d.dataKey,
    x = d.children,
    w = d.minPointSize,
    O = m === "horizontal" ? o : a,
    y = s ? O.scale.domain() : null,
    g = z2({ numericAxis: O }),
    S = Je(x, Mc),
    _ = l.map(function (A, C) {
      var j, P, N, M, E, k;
      s
        ? (j = D2(s[f + C], y))
        : ((j = at(A, b)), Array.isArray(j) || (j = [g, j]));
      var B = tR(w, Lv.defaultProps.minPointSize)(j[1], C);
      if (m === "horizontal") {
        var L,
          U = [o.scale(j[0]), o.scale(j[1])],
          q = U[0],
          K = U[1];
        ((P = jf({
          axis: a,
          ticks: u,
          bandSize: i,
          offset: h.offset,
          entry: A,
          index: C,
        })),
          (N = (L = K ?? q) !== null && L !== void 0 ? L : void 0),
          (M = h.size));
        var z = q - K;
        if (
          ((E = Number.isNaN(z) ? 0 : z),
          (k = { x: P, y: o.y, width: M, height: o.height }),
          Math.abs(B) > 0 && Math.abs(E) < Math.abs(B))
        ) {
          var X = Ze(E || B) * (Math.abs(B) - Math.abs(E));
          ((N -= X), (E += X));
        }
      } else {
        var ce = [a.scale(j[0]), a.scale(j[1])],
          ve = ce[0],
          De = ce[1];
        if (
          ((P = ve),
          (N = jf({
            axis: o,
            ticks: c,
            bandSize: i,
            offset: h.offset,
            entry: A,
            index: C,
          })),
          (M = De - ve),
          (E = h.size),
          (k = { x: a.x, y: N, width: a.width, height: E }),
          Math.abs(B) > 0 && Math.abs(M) < Math.abs(B))
        ) {
          var jt = Ze(M || B) * (Math.abs(B) - Math.abs(M));
          M += jt;
        }
      }
      return ye(
        ye(
          ye({}, A),
          {},
          {
            x: P,
            y: N,
            width: M,
            height: E,
            value: s ? j : j[1],
            payload: A,
            background: k,
          },
          S && S[C] && S[C].props,
        ),
        {},
        {
          tooltipPayload: [xv(r, A)],
          tooltipPosition: { x: P + M / 2, y: N + E / 2 },
        },
      );
    });
  return ye({ data: _, layout: m }, p);
});
function Bn(e) {
  "@babel/helpers - typeof";
  return (
    (Bn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Bn(e)
  );
}
function pR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Wv(n.key), n));
  }
}
function hR(e, t, r) {
  return (
    t && jp(e.prototype, t),
    r && jp(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Ep(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ep(Object(r), !0).forEach(function (n) {
          Va(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ep(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Va(e, t, r) {
  return (
    (t = Wv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Wv(e) {
  var t = dR(e, "string");
  return Bn(t) == "symbol" ? t : t + "";
}
function dR(e, t) {
  if (Bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vR = function (t, r, n, i, a) {
    var o = t.width,
      u = t.height,
      c = t.layout,
      s = t.children,
      f = Object.keys(r),
      l = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: u - n.bottom,
        bottomMirror: u - n.bottom,
      },
      p = !!Re(s, Jt);
    return f.reduce(function (h, m) {
      var v = r[m],
        d = v.orientation,
        b = v.domain,
        x = v.padding,
        w = x === void 0 ? {} : x,
        O = v.mirror,
        y = v.reversed,
        g = "".concat(d).concat(O ? "Mirror" : ""),
        S,
        _,
        A,
        C,
        j;
      if (
        v.type === "number" &&
        (v.padding === "gap" || v.padding === "no-gap")
      ) {
        var P = b[1] - b[0],
          N = 1 / 0,
          M = v.categoricalDomain.sort(d0);
        if (
          (M.forEach(function (ce, ve) {
            ve > 0 && (N = Math.min((ce || 0) - (M[ve - 1] || 0), N));
          }),
          Number.isFinite(N))
        ) {
          var E = N / P,
            k = v.layout === "vertical" ? n.height : n.width;
          if (
            (v.padding === "gap" && (S = (E * k) / 2), v.padding === "no-gap")
          ) {
            var B = qt(t.barCategoryGap, E * k),
              L = (E * k) / 2;
            S = L - B - ((L - B) / k) * B;
          }
        }
      }
      (i === "xAxis"
        ? (_ = [
            n.left + (w.left || 0) + (S || 0),
            n.left + n.width - (w.right || 0) - (S || 0),
          ])
        : i === "yAxis"
          ? (_ =
              c === "horizontal"
                ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)]
                : [
                    n.top + (w.top || 0) + (S || 0),
                    n.top + n.height - (w.bottom || 0) - (S || 0),
                  ])
          : (_ = v.range),
        y && (_ = [_[1], _[0]]));
      var U = I2(v, a, p),
        q = U.scale,
        K = U.realScaleType;
      (q.domain(b).range(_), N2(q));
      var z = W2(q, Ve(Ve({}, v), {}, { realScaleType: K }));
      i === "xAxis"
        ? ((j = (d === "top" && !O) || (d === "bottom" && O)),
          (A = n.left),
          (C = l[g] - j * v.height))
        : i === "yAxis" &&
          ((j = (d === "left" && !O) || (d === "right" && O)),
          (A = l[g] - j * v.width),
          (C = n.top));
      var X = Ve(
        Ve(Ve({}, v), z),
        {},
        {
          realScaleType: K,
          x: A,
          y: C,
          scale: q,
          width: i === "xAxis" ? n.width : v.width,
          height: i === "yAxis" ? n.height : v.height,
        },
      );
      return (
        (X.bandSize = zi(X, z)),
        !v.hide && i === "xAxis"
          ? (l[g] += (j ? -1 : 1) * X.height)
          : v.hide || (l[g] += (j ? -1 : 1) * X.width),
        Ve(Ve({}, h), {}, Va({}, m, X))
      );
    }, {});
  },
  zv = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return {
      x: Math.min(n, a),
      y: Math.min(i, o),
      width: Math.abs(a - n),
      height: Math.abs(o - i),
    };
  },
  yR = function (t) {
    var r = t.x1,
      n = t.y1,
      i = t.x2,
      a = t.y2;
    return zv({ x: r, y: n }, { x: i, y: a });
  },
  Hv = (function () {
    function e(t) {
      (pR(this, e), (this.scale = t));
    }
    return hR(
      e,
      [
        {
          key: "domain",
          get: function () {
            return this.scale.domain;
          },
        },
        {
          key: "range",
          get: function () {
            return this.scale.range;
          },
        },
        {
          key: "rangeMin",
          get: function () {
            return this.range()[0];
          },
        },
        {
          key: "rangeMax",
          get: function () {
            return this.range()[1];
          },
        },
        {
          key: "bandwidth",
          get: function () {
            return this.scale.bandwidth;
          },
        },
        {
          key: "apply",
          value: function (r) {
            var n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              i = n.bandAware,
              a = n.position;
            if (r !== void 0) {
              if (a)
                switch (a) {
                  case "start":
                    return this.scale(r);
                  case "middle": {
                    var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(r) + o;
                  }
                  case "end": {
                    var u = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(r) + u;
                  }
                  default:
                    return this.scale(r);
                }
              if (i) {
                var c = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(r) + c;
              }
              return this.scale(r);
            }
          },
        },
        {
          key: "isInRange",
          value: function (r) {
            var n = this.range(),
              i = n[0],
              a = n[n.length - 1];
            return i <= a ? r >= i && r <= a : r >= a && r <= i;
          },
        },
      ],
      [
        {
          key: "create",
          value: function (r) {
            return new e(r);
          },
        },
      ],
    );
  })();
Va(Hv, "EPS", 1e-4);
var as = function (t) {
  var r = Object.keys(t).reduce(function (n, i) {
    return Ve(Ve({}, n), {}, Va({}, i, Hv.create(t[i])));
  }, {});
  return Ve(
    Ve({}, r),
    {},
    {
      apply: function (i) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = a.bandAware,
          u = a.position;
        return NB(i, function (c, s) {
          return r[s].apply(c, { bandAware: o, position: u });
        });
      },
      isInRange: function (i) {
        return KB(i, function (a, o) {
          return r[o].isInRange(a);
        });
      },
    },
  );
};
function mR(e) {
  return ((e % 180) + 180) % 180;
}
var gR = function (t) {
    var r = t.width,
      n = t.height,
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      a = mR(i),
      o = (a * Math.PI) / 180,
      u = Math.atan(n / r),
      c = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
    return Math.abs(c);
  },
  bR = mb(
    function (e) {
      return { x: e.left, y: e.top, width: e.width, height: e.height };
    },
    function (e) {
      return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
    },
  ),
  qv = R.createContext(void 0),
  Gv = R.createContext(void 0),
  Kv = R.createContext(void 0),
  xR = R.createContext({}),
  Xv = R.createContext(void 0),
  Vv = R.createContext(0),
  Yv = R.createContext(0),
  Mp = function (t) {
    var r = t.state,
      n = r.xAxisMap,
      i = r.yAxisMap,
      a = r.offset,
      o = t.clipPathId,
      u = t.children,
      c = t.width,
      s = t.height,
      f = bR(a);
    return $.createElement(
      qv.Provider,
      { value: n },
      $.createElement(
        Gv.Provider,
        { value: i },
        $.createElement(
          xR.Provider,
          { value: a },
          $.createElement(
            Kv.Provider,
            { value: f },
            $.createElement(
              Xv.Provider,
              { value: o },
              $.createElement(
                Vv.Provider,
                { value: s },
                $.createElement(Yv.Provider, { value: c }, u),
              ),
            ),
          ),
        ),
      ),
    );
  },
  wR = function () {
    return R.useContext(Xv);
  },
  Zv = function (t) {
    var r = R.useContext(qv);
    r == null && Kt();
    var n = r[t];
    return (n == null && Kt(), n);
  },
  Jv = function (t) {
    var r = R.useContext(Gv);
    r == null && Kt();
    var n = r[t];
    return (n == null && Kt(), n);
  },
  OR = function () {
    var t = R.useContext(Kv);
    return t;
  },
  Qv = function () {
    return R.useContext(Yv);
  },
  ey = function () {
    return R.useContext(Vv);
  };
function _r(e) {
  "@babel/helpers - typeof";
  return (
    (_r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _r(e)
  );
}
function SR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _R(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ry(n.key), n));
  }
}
function AR(e, t, r) {
  return (
    t && _R(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function PR(e, t, r) {
  return (
    (t = ia(t)),
    $R(
      e,
      ty() ? Reflect.construct(t, r || [], ia(e).constructor) : t.apply(e, r),
    )
  );
}
function $R(e, t) {
  if (t && (_r(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return TR(e);
}
function TR(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function ty() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (ty = function () {
    return !!e;
  })();
}
function ia(e) {
  return (
    (ia = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ia(e)
  );
}
function jR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && zu(e, t));
}
function zu(e, t) {
  return (
    (zu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    zu(e, t)
  );
}
function Cp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ip(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cp(Object(r), !0).forEach(function (n) {
          os(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function os(e, t, r) {
  return (
    (t = ry(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ry(e) {
  var t = ER(e, "string");
  return _r(t) == "symbol" ? t : t + "";
}
function ER(e, t) {
  if (_r(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function MR(e, t) {
  return kR(e) || NR(e, t) || IR(e, t) || CR();
}
function CR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IR(e, t) {
  if (e) {
    if (typeof e == "string") return Np(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Np(e, t);
  }
}
function Np(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function NR(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function kR(e) {
  if (Array.isArray(e)) return e;
}
function Hu() {
  return (
    (Hu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Hu.apply(this, arguments)
  );
}
var DR = function (t, r) {
    var n;
    return (
      $.isValidElement(t)
        ? (n = $.cloneElement(t, r))
        : Z(t)
          ? (n = t(r))
          : (n = $.createElement(
              "line",
              Hu({}, r, { className: "recharts-reference-line-line" }),
            )),
      n
    );
  },
  BR = function (t, r, n, i, a, o, u, c, s) {
    var f = a.x,
      l = a.y,
      p = a.width,
      h = a.height;
    if (n) {
      var m = s.y,
        v = t.y.apply(m, { position: o });
      if (nt(s, "discard") && !t.y.isInRange(v)) return null;
      var d = [
        { x: f + p, y: v },
        { x: f, y: v },
      ];
      return c === "left" ? d.reverse() : d;
    }
    if (r) {
      var b = s.x,
        x = t.x.apply(b, { position: o });
      if (nt(s, "discard") && !t.x.isInRange(x)) return null;
      var w = [
        { x, y: l + h },
        { x, y: l },
      ];
      return u === "top" ? w.reverse() : w;
    }
    if (i) {
      var O = s.segment,
        y = O.map(function (g) {
          return t.apply(g, { position: o });
        });
      return nt(s, "discard") &&
        PB(y, function (g) {
          return !t.isInRange(g);
        })
        ? null
        : y;
    }
    return null;
  };
function RR(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    i = e.xAxisId,
    a = e.yAxisId,
    o = e.shape,
    u = e.className,
    c = e.alwaysShow,
    s = wR(),
    f = Zv(i),
    l = Jv(a),
    p = OR();
  if (!s || !p) return null;
  Ft(
    c === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var h = as({ x: f.scale, y: l.scale }),
    m = Oe(t),
    v = Oe(r),
    d = n && n.length === 2,
    b = BR(h, m, v, d, p, e.position, f.orientation, l.orientation, e);
  if (!b) return null;
  var x = MR(b, 2),
    w = x[0],
    O = w.x,
    y = w.y,
    g = x[1],
    S = g.x,
    _ = g.y,
    A = nt(e, "hidden") ? "url(#".concat(s, ")") : void 0,
    C = Ip(Ip({ clipPath: A }, ne(e, !0)), {}, { x1: O, y1: y, x2: S, y2: _ });
  return $.createElement(
    Ae,
    { className: ee("recharts-reference-line", u) },
    DR(o, C),
    Ee.renderCallByParent(e, yR({ x1: O, y1: y, x2: S, y2: _ })),
  );
}
var us = (function (e) {
  function t() {
    return (SR(this, t), PR(this, t, arguments));
  }
  return (
    jR(t, e),
    AR(t, [
      {
        key: "render",
        value: function () {
          return $.createElement(RR, this.props);
        },
      },
    ])
  );
})($.Component);
os(us, "displayName", "ReferenceLine");
os(us, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
});
function qu() {
  return (
    (qu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    qu.apply(this, arguments)
  );
}
function Ar(e) {
  "@babel/helpers - typeof";
  return (
    (Ar =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ar(e)
  );
}
function kp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Dp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kp(Object(r), !0).forEach(function (n) {
          Ya(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function LR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function FR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, iy(n.key), n));
  }
}
function UR(e, t, r) {
  return (
    t && FR(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function WR(e, t, r) {
  return (
    (t = aa(t)),
    zR(
      e,
      ny() ? Reflect.construct(t, r || [], aa(e).constructor) : t.apply(e, r),
    )
  );
}
function zR(e, t) {
  if (t && (Ar(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return HR(e);
}
function HR(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function ny() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (ny = function () {
    return !!e;
  })();
}
function aa(e) {
  return (
    (aa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    aa(e)
  );
}
function qR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Gu(e, t));
}
function Gu(e, t) {
  return (
    (Gu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Gu(e, t)
  );
}
function Ya(e, t, r) {
  return (
    (t = iy(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function iy(e) {
  var t = GR(e, "string");
  return Ar(t) == "symbol" ? t : t + "";
}
function GR(e, t) {
  if (Ar(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ar(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var KR = function (t) {
    var r = t.x,
      n = t.y,
      i = t.xAxis,
      a = t.yAxis,
      o = as({ x: i.scale, y: a.scale }),
      u = o.apply({ x: r, y: n }, { bandAware: !0 });
    return nt(t, "discard") && !o.isInRange(u) ? null : u;
  },
  Za = (function (e) {
    function t() {
      return (LR(this, t), WR(this, t, arguments));
    }
    return (
      qR(t, e),
      UR(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.r,
              u = n.alwaysShow,
              c = n.clipPathId,
              s = Oe(i),
              f = Oe(a);
            if (
              (Ft(
                u === void 0,
                'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
              ),
              !s || !f)
            )
              return null;
            var l = KR(this.props);
            if (!l) return null;
            var p = l.x,
              h = l.y,
              m = this.props,
              v = m.shape,
              d = m.className,
              b = nt(this.props, "hidden") ? "url(#".concat(c, ")") : void 0,
              x = Dp(
                Dp({ clipPath: b }, ne(this.props, !0)),
                {},
                { cx: p, cy: h },
              );
            return $.createElement(
              Ae,
              { className: ee("recharts-reference-dot", d) },
              t.renderDot(v, x),
              Ee.renderCallByParent(this.props, {
                x: p - o,
                y: h - o,
                width: 2 * o,
                height: 2 * o,
              }),
            );
          },
        },
      ])
    );
  })($.Component);
Ya(Za, "displayName", "ReferenceDot");
Ya(Za, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
});
Ya(Za, "renderDot", function (e, t) {
  var r;
  return (
    $.isValidElement(e)
      ? (r = $.cloneElement(e, t))
      : Z(e)
        ? (r = e(t))
        : (r = $.createElement(
            Nv,
            qu({}, t, {
              cx: t.cx,
              cy: t.cy,
              className: "recharts-reference-dot-dot",
            }),
          )),
    r
  );
});
function Ku() {
  return (
    (Ku = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ku.apply(this, arguments)
  );
}
function Pr(e) {
  "@babel/helpers - typeof";
  return (
    (Pr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Pr(e)
  );
}
function Bp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Rp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bp(Object(r), !0).forEach(function (n) {
          Ja(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function XR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, oy(n.key), n));
  }
}
function YR(e, t, r) {
  return (
    t && VR(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ZR(e, t, r) {
  return (
    (t = oa(t)),
    JR(
      e,
      ay() ? Reflect.construct(t, r || [], oa(e).constructor) : t.apply(e, r),
    )
  );
}
function JR(e, t) {
  if (t && (Pr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return QR(e);
}
function QR(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function ay() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (ay = function () {
    return !!e;
  })();
}
function oa(e) {
  return (
    (oa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    oa(e)
  );
}
function eL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Xu(e, t));
}
function Xu(e, t) {
  return (
    (Xu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Xu(e, t)
  );
}
function Ja(e, t, r) {
  return (
    (t = oy(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function oy(e) {
  var t = tL(e, "string");
  return Pr(t) == "symbol" ? t : t + "";
}
function tL(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var rL = function (t, r, n, i, a) {
    var o = a.x1,
      u = a.x2,
      c = a.y1,
      s = a.y2,
      f = a.xAxis,
      l = a.yAxis;
    if (!f || !l) return null;
    var p = as({ x: f.scale, y: l.scale }),
      h = {
        x: t ? p.x.apply(o, { position: "start" }) : p.x.rangeMin,
        y: n ? p.y.apply(c, { position: "start" }) : p.y.rangeMin,
      },
      m = {
        x: r ? p.x.apply(u, { position: "end" }) : p.x.rangeMax,
        y: i ? p.y.apply(s, { position: "end" }) : p.y.rangeMax,
      };
    return nt(a, "discard") && (!p.isInRange(h) || !p.isInRange(m))
      ? null
      : zv(h, m);
  },
  Qa = (function (e) {
    function t() {
      return (XR(this, t), ZR(this, t, arguments));
    }
    return (
      eL(t, e),
      YR(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x1,
              a = n.x2,
              o = n.y1,
              u = n.y2,
              c = n.className,
              s = n.alwaysShow,
              f = n.clipPathId;
            Ft(
              s === void 0,
              'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
            );
            var l = Oe(i),
              p = Oe(a),
              h = Oe(o),
              m = Oe(u),
              v = this.props.shape;
            if (!l && !p && !h && !m && !v) return null;
            var d = rL(l, p, h, m, this.props);
            if (!d && !v) return null;
            var b = nt(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
            return $.createElement(
              Ae,
              { className: ee("recharts-reference-area", c) },
              t.renderRect(v, Rp(Rp({ clipPath: b }, ne(this.props, !0)), d)),
              Ee.renderCallByParent(this.props, d),
            );
          },
        },
      ])
    );
  })($.Component);
Ja(Qa, "displayName", "ReferenceArea");
Ja(Qa, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1,
});
Ja(Qa, "renderRect", function (e, t) {
  var r;
  return (
    $.isValidElement(e)
      ? (r = $.cloneElement(e, t))
      : Z(e)
        ? (r = e(t))
        : (r = $.createElement(
            is,
            Ku({}, t, { className: "recharts-reference-area-rect" }),
          )),
    r
  );
});
function uy(e, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e;
  for (var n = [], i = 0; i < e.length; i += t) n.push(e[i]);
  return n;
}
function nL(e, t, r) {
  var n = { width: e.width + t.width, height: e.height + t.height };
  return gR(n, r);
}
function iL(e, t, r) {
  var n = r === "width",
    i = e.x,
    a = e.y,
    o = e.width,
    u = e.height;
  return t === 1
    ? { start: n ? i : a, end: n ? i + o : a + u }
    : { start: n ? i + o : a + u, end: n ? i : a };
}
function ua(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i) return !1;
  var a = r();
  return e * (t - (e * a) / 2 - n) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function aL(e, t) {
  return uy(e, t + 1);
}
function oL(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = t.start,
      u = t.end,
      c = 0,
      s = 1,
      f = o,
      l = function () {
        var m = n == null ? void 0 : n[c];
        if (m === void 0) return { v: uy(n, s) };
        var v = c,
          d,
          b = function () {
            return (d === void 0 && (d = r(m, v)), d);
          },
          x = m.coordinate,
          w = c === 0 || ua(e, x, b, f, u);
        (w || ((c = 0), (f = o), (s += 1)),
          w && ((f = x + e * (b() / 2 + i)), (c += s)));
      },
      p;
    s <= a.length;
  )
    if (((p = l()), p)) return p.v;
  return [];
}
function Rn(e) {
  "@babel/helpers - typeof";
  return (
    (Rn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Rn(e)
  );
}
function Lp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lp(Object(r), !0).forEach(function (n) {
          uL(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function uL(e, t, r) {
  return (
    (t = cL(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function cL(e) {
  var t = sL(e, "string");
  return Rn(t) == "symbol" ? t : t + "";
}
function sL(e, t) {
  if (Rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lL(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = a.length,
      u = t.start,
      c = t.end,
      s = function (p) {
        var h = a[p],
          m,
          v = function () {
            return (m === void 0 && (m = r(h, p)), m);
          };
        if (p === o - 1) {
          var d = e * (h.coordinate + (e * v()) / 2 - c);
          a[p] = h = je(
            je({}, h),
            {},
            { tickCoord: d > 0 ? h.coordinate - d * e : h.coordinate },
          );
        } else a[p] = h = je(je({}, h), {}, { tickCoord: h.coordinate });
        var b = ua(e, h.tickCoord, v, u, c);
        b &&
          ((c = h.tickCoord - e * (v() / 2 + i)),
          (a[p] = je(je({}, h), {}, { isShow: !0 })));
      },
      f = o - 1;
    f >= 0;
    f--
  )
    s(f);
  return a;
}
function fL(e, t, r, n, i, a) {
  var o = (n || []).slice(),
    u = o.length,
    c = t.start,
    s = t.end;
  if (a) {
    var f = n[u - 1],
      l = r(f, u - 1),
      p = e * (f.coordinate + (e * l) / 2 - s);
    o[u - 1] = f = je(
      je({}, f),
      {},
      { tickCoord: p > 0 ? f.coordinate - p * e : f.coordinate },
    );
    var h = ua(
      e,
      f.tickCoord,
      function () {
        return l;
      },
      c,
      s,
    );
    h &&
      ((s = f.tickCoord - e * (l / 2 + i)),
      (o[u - 1] = je(je({}, f), {}, { isShow: !0 })));
  }
  for (
    var m = a ? u - 1 : u,
      v = function (x) {
        var w = o[x],
          O,
          y = function () {
            return (O === void 0 && (O = r(w, x)), O);
          };
        if (x === 0) {
          var g = e * (w.coordinate - (e * y()) / 2 - c);
          o[x] = w = je(
            je({}, w),
            {},
            { tickCoord: g < 0 ? w.coordinate - g * e : w.coordinate },
          );
        } else o[x] = w = je(je({}, w), {}, { tickCoord: w.coordinate });
        var S = ua(e, w.tickCoord, y, c, s);
        S &&
          ((c = w.tickCoord + e * (y() / 2 + i)),
          (o[x] = je(je({}, w), {}, { isShow: !0 })));
      },
      d = 0;
    d < m;
    d++
  )
    v(d);
  return o;
}
function pL(e, t, r) {
  var n = e.tick,
    i = e.ticks,
    a = e.viewBox,
    o = e.minTickGap,
    u = e.orientation,
    c = e.interval,
    s = e.tickFormatter,
    f = e.unit,
    l = e.angle;
  if (!i || !i.length || !n) return [];
  if (F(c) || zn.isSsr) return aL(i, typeof c == "number" && F(c) ? c : 0);
  var p = [],
    h = u === "top" || u === "bottom" ? "width" : "height",
    m =
      f && h === "width"
        ? tn(f, { fontSize: t, letterSpacing: r })
        : { width: 0, height: 0 },
    v = function (w, O) {
      var y = Z(s) ? s(w.value, O) : w.value;
      return h === "width"
        ? nL(tn(y, { fontSize: t, letterSpacing: r }), m, l)
        : tn(y, { fontSize: t, letterSpacing: r })[h];
    },
    d = i.length >= 2 ? Ze(i[1].coordinate - i[0].coordinate) : 1,
    b = iL(a, d, h);
  return c === "equidistantPreserveStart"
    ? oL(d, b, v, i, o)
    : (c === "preserveStart" || c === "preserveStartEnd"
        ? (p = fL(d, b, v, i, o, c === "preserveStartEnd"))
        : (p = lL(d, b, v, i, o)),
      p.filter(function (x) {
        return x.isShow;
      }));
}
var hL = ["viewBox"],
  dL = ["viewBox"],
  vL = ["ticks"];
function $r(e) {
  "@babel/helpers - typeof";
  return (
    ($r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    $r(e)
  );
}
function ar() {
  return (
    (ar = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ar.apply(this, arguments)
  );
}
function Fp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fp(Object(r), !0).forEach(function (n) {
          cs(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Fp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Co(e, t) {
  if (e == null) return {};
  var r = yL(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function yL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function mL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Up(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, sy(n.key), n));
  }
}
function gL(e, t, r) {
  return (
    t && Up(e.prototype, t),
    r && Up(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function bL(e, t, r) {
  return (
    (t = ca(t)),
    xL(
      e,
      cy() ? Reflect.construct(t, r || [], ca(e).constructor) : t.apply(e, r),
    )
  );
}
function xL(e, t) {
  if (t && ($r(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return wL(e);
}
function wL(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function cy() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (cy = function () {
    return !!e;
  })();
}
function ca(e) {
  return (
    (ca = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ca(e)
  );
}
function OL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Vu(e, t));
}
function Vu(e, t) {
  return (
    (Vu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Vu(e, t)
  );
}
function cs(e, t, r) {
  return (
    (t = sy(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function sy(e) {
  var t = SL(e, "string");
  return $r(t) == "symbol" ? t : t + "";
}
function SL(e, t) {
  if ($r(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var eo = (function (e) {
  function t(r) {
    var n;
    return (
      mL(this, t),
      (n = bL(this, t, [r])),
      (n.state = { fontSize: "", letterSpacing: "" }),
      n
    );
  }
  return (
    OL(t, e),
    gL(
      t,
      [
        {
          key: "shouldComponentUpdate",
          value: function (n, i) {
            var a = n.viewBox,
              o = Co(n, hL),
              u = this.props,
              c = u.viewBox,
              s = Co(u, dL);
            return !ur(a, c) || !ur(o, s) || !ur(i, this.state);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var n = this.layerReference;
            if (n) {
              var i = n.getElementsByClassName(
                "recharts-cartesian-axis-tick-value",
              )[0];
              i &&
                this.setState({
                  fontSize: window.getComputedStyle(i).fontSize,
                  letterSpacing: window.getComputedStyle(i).letterSpacing,
                });
            }
          },
        },
        {
          key: "getTickLineCoord",
          value: function (n) {
            var i = this.props,
              a = i.x,
              o = i.y,
              u = i.width,
              c = i.height,
              s = i.orientation,
              f = i.tickSize,
              l = i.mirror,
              p = i.tickMargin,
              h,
              m,
              v,
              d,
              b,
              x,
              w = l ? -1 : 1,
              O = n.tickSize || f,
              y = F(n.tickCoord) ? n.tickCoord : n.coordinate;
            switch (s) {
              case "top":
                ((h = m = n.coordinate),
                  (d = o + +!l * c),
                  (v = d - w * O),
                  (x = v - w * p),
                  (b = y));
                break;
              case "left":
                ((v = d = n.coordinate),
                  (m = a + +!l * u),
                  (h = m - w * O),
                  (b = h - w * p),
                  (x = y));
                break;
              case "right":
                ((v = d = n.coordinate),
                  (m = a + +l * u),
                  (h = m + w * O),
                  (b = h + w * p),
                  (x = y));
                break;
              default:
                ((h = m = n.coordinate),
                  (d = o + +l * c),
                  (v = d + w * O),
                  (x = v + w * p),
                  (b = y));
                break;
            }
            return {
              line: { x1: h, y1: v, x2: m, y2: d },
              tick: { x: b, y: x },
            };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o;
            switch (i) {
              case "left":
                o = a ? "start" : "end";
                break;
              case "right":
                o = a ? "end" : "start";
                break;
              default:
                o = "middle";
                break;
            }
            return o;
          },
        },
        {
          key: "getTickVerticalAnchor",
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o = "end";
            switch (i) {
              case "left":
              case "right":
                o = "middle";
                break;
              case "top":
                o = a ? "start" : "end";
                break;
              default:
                o = a ? "end" : "start";
                break;
            }
            return o;
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.width,
              u = n.height,
              c = n.orientation,
              s = n.mirror,
              f = n.axisLine,
              l = xe(
                xe(xe({}, ne(this.props, !1)), ne(f, !1)),
                {},
                { fill: "none" },
              );
            if (c === "top" || c === "bottom") {
              var p = +((c === "top" && !s) || (c === "bottom" && s));
              l = xe(
                xe({}, l),
                {},
                { x1: i, y1: a + p * u, x2: i + o, y2: a + p * u },
              );
            } else {
              var h = +((c === "left" && !s) || (c === "right" && s));
              l = xe(
                xe({}, l),
                {},
                { x1: i + h * o, y1: a, x2: i + h * o, y2: a + u },
              );
            }
            return $.createElement(
              "line",
              ar({}, l, {
                className: ee(
                  "recharts-cartesian-axis-line",
                  He(f, "className"),
                ),
              }),
            );
          },
        },
        {
          key: "renderTicks",
          value: function (n, i, a) {
            var o = this,
              u = this.props,
              c = u.tickLine,
              s = u.stroke,
              f = u.tick,
              l = u.tickFormatter,
              p = u.unit,
              h = pL(xe(xe({}, this.props), {}, { ticks: n }), i, a),
              m = this.getTickTextAnchor(),
              v = this.getTickVerticalAnchor(),
              d = ne(this.props, !1),
              b = ne(f, !1),
              x = xe(xe({}, d), {}, { fill: "none" }, ne(c, !1)),
              w = h.map(function (O, y) {
                var g = o.getTickLineCoord(O),
                  S = g.line,
                  _ = g.tick,
                  A = xe(
                    xe(
                      xe(
                        xe({ textAnchor: m, verticalAnchor: v }, d),
                        {},
                        { stroke: "none", fill: s },
                        b,
                      ),
                      _,
                    ),
                    {},
                    {
                      index: y,
                      payload: O,
                      visibleTicksCount: h.length,
                      tickFormatter: l,
                    },
                  );
                return $.createElement(
                  Ae,
                  ar(
                    {
                      className: "recharts-cartesian-axis-tick",
                      key: "tick-"
                        .concat(O.value, "-")
                        .concat(O.coordinate, "-")
                        .concat(O.tickCoord),
                    },
                    di(o.props, O, y),
                  ),
                  c &&
                    $.createElement(
                      "line",
                      ar({}, x, S, {
                        className: ee(
                          "recharts-cartesian-axis-tick-line",
                          He(c, "className"),
                        ),
                      }),
                    ),
                  f &&
                    t.renderTickItem(
                      f,
                      A,
                      "".concat(Z(l) ? l(O.value, y) : O.value).concat(p || ""),
                    ),
                );
              });
            return $.createElement(
              "g",
              { className: "recharts-cartesian-axis-ticks" },
              w,
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.axisLine,
              o = i.width,
              u = i.height,
              c = i.ticksGenerator,
              s = i.className,
              f = i.hide;
            if (f) return null;
            var l = this.props,
              p = l.ticks,
              h = Co(l, vL),
              m = p;
            return (
              Z(c) && (m = p && p.length > 0 ? c(this.props) : c(h)),
              o <= 0 || u <= 0 || !m || !m.length
                ? null
                : $.createElement(
                    Ae,
                    {
                      className: ee("recharts-cartesian-axis", s),
                      ref: function (d) {
                        n.layerReference = d;
                      },
                    },
                    a && this.renderAxisLine(),
                    this.renderTicks(
                      m,
                      this.state.fontSize,
                      this.state.letterSpacing,
                    ),
                    Ee.renderCallByParent(this.props),
                  )
            );
          },
        },
      ],
      [
        {
          key: "renderTickItem",
          value: function (n, i, a) {
            var o,
              u = ee(i.className, "recharts-cartesian-axis-tick-value");
            return (
              $.isValidElement(n)
                ? (o = $.cloneElement(n, xe(xe({}, i), {}, { className: u })))
                : Z(n)
                  ? (o = n(xe(xe({}, i), {}, { className: u })))
                  : (o = $.createElement(
                      Ti,
                      ar({}, i, {
                        className: "recharts-cartesian-axis-tick-value",
                      }),
                      a,
                    )),
              o
            );
          },
        },
      ],
    )
  );
})(R.Component);
cs(eo, "displayName", "CartesianAxis");
cs(eo, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
});
function Tr(e) {
  "@babel/helpers - typeof";
  return (
    (Tr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Tr(e)
  );
}
function _L(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function AL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, py(n.key), n));
  }
}
function PL(e, t, r) {
  return (
    t && AL(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function $L(e, t, r) {
  return (
    (t = sa(t)),
    TL(
      e,
      ly() ? Reflect.construct(t, r || [], sa(e).constructor) : t.apply(e, r),
    )
  );
}
function TL(e, t) {
  if (t && (Tr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return jL(e);
}
function jL(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function ly() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (ly = function () {
    return !!e;
  })();
}
function sa(e) {
  return (
    (sa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    sa(e)
  );
}
function EL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Yu(e, t));
}
function Yu(e, t) {
  return (
    (Yu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Yu(e, t)
  );
}
function fy(e, t, r) {
  return (
    (t = py(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function py(e) {
  var t = ML(e, "string");
  return Tr(t) == "symbol" ? t : t + "";
}
function ML(e, t) {
  if (Tr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Tr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Zu() {
  return (
    (Zu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Zu.apply(this, arguments)
  );
}
function CL(e) {
  var t = e.xAxisId,
    r = Qv(),
    n = ey(),
    i = Zv(t);
  return i == null
    ? null
    : R.createElement(
        eo,
        Zu({}, i, {
          className: ee(
            "recharts-".concat(i.axisType, " ").concat(i.axisType),
            i.className,
          ),
          viewBox: { x: 0, y: 0, width: r, height: n },
          ticksGenerator: function (o) {
            return Lt(o, !0);
          },
        }),
      );
}
var to = (function (e) {
  function t() {
    return (_L(this, t), $L(this, t, arguments));
  }
  return (
    EL(t, e),
    PL(t, [
      {
        key: "render",
        value: function () {
          return R.createElement(CL, this.props);
        },
      },
    ])
  );
})(R.Component);
fy(to, "displayName", "XAxis");
fy(to, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0,
});
function jr(e) {
  "@babel/helpers - typeof";
  return (
    (jr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jr(e)
  );
}
function IL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function NL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, vy(n.key), n));
  }
}
function kL(e, t, r) {
  return (
    t && NL(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function DL(e, t, r) {
  return (
    (t = la(t)),
    BL(
      e,
      hy() ? Reflect.construct(t, r || [], la(e).constructor) : t.apply(e, r),
    )
  );
}
function BL(e, t) {
  if (t && (jr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return RL(e);
}
function RL(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function hy() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (hy = function () {
    return !!e;
  })();
}
function la(e) {
  return (
    (la = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    la(e)
  );
}
function LL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ju(e, t));
}
function Ju(e, t) {
  return (
    (Ju = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Ju(e, t)
  );
}
function dy(e, t, r) {
  return (
    (t = vy(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function vy(e) {
  var t = FL(e, "string");
  return jr(t) == "symbol" ? t : t + "";
}
function FL(e, t) {
  if (jr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Qu() {
  return (
    (Qu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Qu.apply(this, arguments)
  );
}
var UL = function (t) {
    var r = t.yAxisId,
      n = Qv(),
      i = ey(),
      a = Jv(r);
    return a == null
      ? null
      : R.createElement(
          eo,
          Qu({}, a, {
            className: ee(
              "recharts-".concat(a.axisType, " ").concat(a.axisType),
              a.className,
            ),
            viewBox: { x: 0, y: 0, width: n, height: i },
            ticksGenerator: function (u) {
              return Lt(u, !0);
            },
          }),
        );
  },
  ro = (function (e) {
    function t() {
      return (IL(this, t), DL(this, t, arguments));
    }
    return (
      LL(t, e),
      kL(t, [
        {
          key: "render",
          value: function () {
            return R.createElement(UL, this.props);
          },
        },
      ])
    );
  })(R.Component);
dy(ro, "displayName", "YAxis");
dy(ro, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
});
function Wp(e) {
  return qL(e) || HL(e) || zL(e) || WL();
}
function WL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zL(e, t) {
  if (e) {
    if (typeof e == "string") return ec(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ec(e, t);
  }
}
function HL(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function qL(e) {
  if (Array.isArray(e)) return ec(e);
}
function ec(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var tc = function (t, r, n, i, a) {
    var o = Je(t, us),
      u = Je(t, Za),
      c = [].concat(Wp(o), Wp(u)),
      s = Je(t, Qa),
      f = "".concat(i, "Id"),
      l = i[0],
      p = r;
    if (
      (c.length &&
        (p = c.reduce(function (v, d) {
          if (
            d.props[f] === n &&
            nt(d.props, "extendDomain") &&
            F(d.props[l])
          ) {
            var b = d.props[l];
            return [Math.min(v[0], b), Math.max(v[1], b)];
          }
          return v;
        }, p)),
      s.length)
    ) {
      var h = "".concat(l, "1"),
        m = "".concat(l, "2");
      p = s.reduce(function (v, d) {
        if (
          d.props[f] === n &&
          nt(d.props, "extendDomain") &&
          F(d.props[h]) &&
          F(d.props[m])
        ) {
          var b = d.props[h],
            x = d.props[m];
          return [Math.min(v[0], b, x), Math.max(v[1], b, x)];
        }
        return v;
      }, p);
    }
    return (
      a &&
        a.length &&
        (p = a.reduce(function (v, d) {
          return F(d) ? [Math.min(v[0], d), Math.max(v[1], d)] : v;
        }, p)),
      p
    );
  },
  yy = { exports: {} };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    r = "~";
  function n() {}
  Object.create &&
    ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
  function i(c, s, f) {
    ((this.fn = c), (this.context = s), (this.once = f || !1));
  }
  function a(c, s, f, l, p) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var h = new i(f, l || c, p),
      m = r ? r + s : s;
    return (
      c._events[m]
        ? c._events[m].fn
          ? (c._events[m] = [c._events[m], h])
          : c._events[m].push(h)
        : ((c._events[m] = h), c._eventsCount++),
      c
    );
  }
  function o(c, s) {
    --c._eventsCount === 0 ? (c._events = new n()) : delete c._events[s];
  }
  function u() {
    ((this._events = new n()), (this._eventsCount = 0));
  }
  ((u.prototype.eventNames = function () {
    var s = [],
      f,
      l;
    if (this._eventsCount === 0) return s;
    for (l in (f = this._events)) t.call(f, l) && s.push(r ? l.slice(1) : l);
    return Object.getOwnPropertySymbols
      ? s.concat(Object.getOwnPropertySymbols(f))
      : s;
  }),
    (u.prototype.listeners = function (s) {
      var f = r ? r + s : s,
        l = this._events[f];
      if (!l) return [];
      if (l.fn) return [l.fn];
      for (var p = 0, h = l.length, m = new Array(h); p < h; p++)
        m[p] = l[p].fn;
      return m;
    }),
    (u.prototype.listenerCount = function (s) {
      var f = r ? r + s : s,
        l = this._events[f];
      return l ? (l.fn ? 1 : l.length) : 0;
    }),
    (u.prototype.emit = function (s, f, l, p, h, m) {
      var v = r ? r + s : s;
      if (!this._events[v]) return !1;
      var d = this._events[v],
        b = arguments.length,
        x,
        w;
      if (d.fn) {
        switch ((d.once && this.removeListener(s, d.fn, void 0, !0), b)) {
          case 1:
            return (d.fn.call(d.context), !0);
          case 2:
            return (d.fn.call(d.context, f), !0);
          case 3:
            return (d.fn.call(d.context, f, l), !0);
          case 4:
            return (d.fn.call(d.context, f, l, p), !0);
          case 5:
            return (d.fn.call(d.context, f, l, p, h), !0);
          case 6:
            return (d.fn.call(d.context, f, l, p, h, m), !0);
        }
        for (w = 1, x = new Array(b - 1); w < b; w++) x[w - 1] = arguments[w];
        d.fn.apply(d.context, x);
      } else {
        var O = d.length,
          y;
        for (w = 0; w < O; w++)
          switch (
            (d[w].once && this.removeListener(s, d[w].fn, void 0, !0), b)
          ) {
            case 1:
              d[w].fn.call(d[w].context);
              break;
            case 2:
              d[w].fn.call(d[w].context, f);
              break;
            case 3:
              d[w].fn.call(d[w].context, f, l);
              break;
            case 4:
              d[w].fn.call(d[w].context, f, l, p);
              break;
            default:
              if (!x)
                for (y = 1, x = new Array(b - 1); y < b; y++)
                  x[y - 1] = arguments[y];
              d[w].fn.apply(d[w].context, x);
          }
      }
      return !0;
    }),
    (u.prototype.on = function (s, f, l) {
      return a(this, s, f, l, !1);
    }),
    (u.prototype.once = function (s, f, l) {
      return a(this, s, f, l, !0);
    }),
    (u.prototype.removeListener = function (s, f, l, p) {
      var h = r ? r + s : s;
      if (!this._events[h]) return this;
      if (!f) return (o(this, h), this);
      var m = this._events[h];
      if (m.fn)
        m.fn === f && (!p || m.once) && (!l || m.context === l) && o(this, h);
      else {
        for (var v = 0, d = [], b = m.length; v < b; v++)
          (m[v].fn !== f || (p && !m[v].once) || (l && m[v].context !== l)) &&
            d.push(m[v]);
        d.length ? (this._events[h] = d.length === 1 ? d[0] : d) : o(this, h);
      }
      return this;
    }),
    (u.prototype.removeAllListeners = function (s) {
      var f;
      return (
        s
          ? ((f = r ? r + s : s), this._events[f] && o(this, f))
          : ((this._events = new n()), (this._eventsCount = 0)),
        this
      );
    }),
    (u.prototype.off = u.prototype.removeListener),
    (u.prototype.addListener = u.prototype.on),
    (u.prefixed = r),
    (u.EventEmitter = u),
    (e.exports = u));
})(yy);
var GL = yy.exports;
const KL = fe(GL);
var Io = new KL(),
  No = "recharts.syncMouseEvents";
function Ln(e) {
  "@babel/helpers - typeof";
  return (
    (Ln =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ln(e)
  );
}
function XL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, my(n.key), n));
  }
}
function YL(e, t, r) {
  return (
    t && VL(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ko(e, t, r) {
  return (
    (t = my(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function my(e) {
  var t = ZL(e, "string");
  return Ln(t) == "symbol" ? t : t + "";
}
function ZL(e, t) {
  if (Ln(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ln(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var JL = (function () {
  function e() {
    (XL(this, e),
      ko(this, "activeIndex", 0),
      ko(this, "coordinateList", []),
      ko(this, "layout", "horizontal"));
  }
  return YL(e, [
    {
      key: "setDetails",
      value: function (r) {
        var n,
          i = r.coordinateList,
          a = i === void 0 ? null : i,
          o = r.container,
          u = o === void 0 ? null : o,
          c = r.layout,
          s = c === void 0 ? null : c,
          f = r.offset,
          l = f === void 0 ? null : f,
          p = r.mouseHandlerCallback,
          h = p === void 0 ? null : p;
        ((this.coordinateList =
          (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : []),
          (this.container = u ?? this.container),
          (this.layout = s ?? this.layout),
          (this.offset = l ?? this.offset),
          (this.mouseHandlerCallback = h ?? this.mouseHandlerCallback),
          (this.activeIndex = Math.min(
            Math.max(this.activeIndex, 0),
            this.coordinateList.length - 1,
          )));
      },
    },
    {
      key: "focus",
      value: function () {
        this.spoofMouse();
      },
    },
    {
      key: "keyboardEvent",
      value: function (r) {
        if (this.coordinateList.length !== 0)
          switch (r.key) {
            case "ArrowRight": {
              if (this.layout !== "horizontal") return;
              ((this.activeIndex = Math.min(
                this.activeIndex + 1,
                this.coordinateList.length - 1,
              )),
                this.spoofMouse());
              break;
            }
            case "ArrowLeft": {
              if (this.layout !== "horizontal") return;
              ((this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                this.spoofMouse());
              break;
            }
          }
      },
    },
    {
      key: "setIndex",
      value: function (r) {
        this.activeIndex = r;
      },
    },
    {
      key: "spoofMouse",
      value: function () {
        var r, n;
        if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
          var i = this.container.getBoundingClientRect(),
            a = i.x,
            o = i.y,
            u = i.height,
            c = this.coordinateList[this.activeIndex].coordinate,
            s =
              ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0,
            f =
              ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0,
            l = a + c + s,
            p = o + this.offset.top + u / 2 + f;
          this.mouseHandlerCallback({ pageX: l, pageY: p });
        }
      },
    },
  ]);
})();
function QL(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0],
      i = e == null ? void 0 : e[1];
    if (n && i && F(n) && F(i)) return !0;
  }
  return !1;
}
function e3(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n,
  };
}
function gy(e) {
  var t = e.cx,
    r = e.cy,
    n = e.radius,
    i = e.startAngle,
    a = e.endAngle,
    o = Te(t, r, n, i),
    u = Te(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a,
  };
}
function t3(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    ((n = t.x), (a = n), (i = r.top), (o = r.top + r.height));
  else if (e === "vertical")
    ((i = t.y), (o = i), (n = r.left), (a = r.left + r.width));
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx,
        c = t.cy,
        s = t.innerRadius,
        f = t.outerRadius,
        l = t.angle,
        p = Te(u, c, s, l),
        h = Te(u, c, f, l);
      ((n = p.x), (i = p.y), (a = h.x), (o = h.y));
    } else return gy(t);
  return [
    { x: n, y: i },
    { x: a, y: o },
  ];
}
function Fn(e) {
  "@babel/helpers - typeof";
  return (
    (Fn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Fn(e)
  );
}
function zp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zp(Object(r), !0).forEach(function (n) {
          r3(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function r3(e, t, r) {
  return (
    (t = n3(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function n3(e) {
  var t = i3(e, "string");
  return Fn(t) == "symbol" ? t : t + "";
}
function i3(e, t) {
  if (Fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function a3(e) {
  var t,
    r,
    n = e.element,
    i = e.tooltipEventType,
    a = e.isActive,
    o = e.activeCoordinate,
    u = e.activePayload,
    c = e.offset,
    s = e.activeTooltipIndex,
    f = e.tooltipAxisBandSize,
    l = e.layout,
    p = e.chartName,
    h =
      (t = n.props.cursor) !== null && t !== void 0
        ? t
        : (r = n.type.defaultProps) === null || r === void 0
          ? void 0
          : r.cursor;
  if (!n || !h || !a || !o || (p !== "ScatterChart" && i !== "axis"))
    return null;
  var m,
    v = qf;
  if (p === "ScatterChart") ((m = o), (v = Vk));
  else if (p === "BarChart") ((m = e3(l, o, c, f)), (v = is));
  else if (l === "radial") {
    var d = gy(o),
      b = d.cx,
      x = d.cy,
      w = d.radius,
      O = d.startAngle,
      y = d.endAngle;
    ((m = {
      cx: b,
      cy: x,
      startAngle: O,
      endAngle: y,
      innerRadius: w,
      outerRadius: w,
    }),
      (v = Sv));
  } else ((m = { points: t3(l, o, c) }), (v = qf));
  var g = si(
    si(si(si({ stroke: "#ccc", pointerEvents: "none" }, c), m), ne(h, !1)),
    {},
    {
      payload: u,
      payloadIndex: s,
      className: ee("recharts-tooltip-cursor", h.className),
    },
  );
  return R.isValidElement(h) ? R.cloneElement(h, g) : R.createElement(v, g);
}
var o3 = ["item"],
  u3 = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc",
  ];
function Er(e) {
  "@babel/helpers - typeof";
  return (
    (Er =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Er(e)
  );
}
function or() {
  return (
    (or = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    or.apply(this, arguments)
  );
}
function Hp(e, t) {
  return l3(e) || s3(e, t) || xy(e, t) || c3();
}
function c3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s3(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      c = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          c = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!c && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function l3(e) {
  if (Array.isArray(e)) return e;
}
function qp(e, t) {
  if (e == null) return {};
  var r = f3(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function f3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function p3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function h3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, wy(n.key), n));
  }
}
function d3(e, t, r) {
  return (
    t && h3(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function v3(e, t, r) {
  return (
    (t = fa(t)),
    y3(
      e,
      by() ? Reflect.construct(t, r || [], fa(e).constructor) : t.apply(e, r),
    )
  );
}
function y3(e, t) {
  if (t && (Er(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return m3(e);
}
function m3(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function by() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (by = function () {
    return !!e;
  })();
}
function fa(e) {
  return (
    (fa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    fa(e)
  );
}
function g3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && rc(e, t));
}
function rc(e, t) {
  return (
    (rc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    rc(e, t)
  );
}
function Mr(e) {
  return w3(e) || x3(e) || xy(e) || b3();
}
function b3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xy(e, t) {
  if (e) {
    if (typeof e == "string") return nc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return nc(e, t);
  }
}
function x3(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function w3(e) {
  if (Array.isArray(e)) return nc(e);
}
function nc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Gp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gp(Object(r), !0).forEach(function (n) {
          G(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Gp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function G(e, t, r) {
  return (
    (t = wy(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function wy(e) {
  var t = O3(e, "string");
  return Er(t) == "symbol" ? t : t + "";
}
function O3(e, t) {
  if (Er(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Er(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var S3 = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
  _3 = { width: "100%", height: "100%" },
  Oy = { x: 0, y: 0 };
function li(e) {
  return e;
}
var A3 = function (t, r) {
    return r === "horizontal"
      ? t.x
      : r === "vertical"
        ? t.y
        : r === "centric"
          ? t.angle
          : t.radius;
  },
  P3 = function (t, r, n, i) {
    var a = r.find(function (f) {
      return f && f.index === n;
    });
    if (a) {
      if (t === "horizontal") return { x: a.coordinate, y: i.y };
      if (t === "vertical") return { x: i.x, y: a.coordinate };
      if (t === "centric") {
        var o = a.coordinate,
          u = i.radius;
        return T(
          T(T({}, i), Te(i.cx, i.cy, u, o)),
          {},
          { angle: o, radius: u },
        );
      }
      var c = a.coordinate,
        s = i.angle;
      return T(T(T({}, i), Te(i.cx, i.cy, c, s)), {}, { angle: s, radius: c });
    }
    return Oy;
  },
  no = function (t, r) {
    var n = r.graphicalItems,
      i = r.dataStartIndex,
      a = r.dataEndIndex,
      o = (n ?? []).reduce(function (u, c) {
        var s = c.props.data;
        return s && s.length ? [].concat(Mr(u), Mr(s)) : u;
      }, []);
    return o.length > 0
      ? o
      : t && t.length && F(i) && F(a)
        ? t.slice(i, a + 1)
        : [];
  };
function Sy(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var ic = function (t, r, n, i) {
    var a = t.graphicalItems,
      o = t.tooltipAxis,
      u = no(r, t);
    return n < 0 || !a || !a.length || n >= u.length
      ? null
      : a.reduce(function (c, s) {
          var f,
            l = (f = s.props.data) !== null && f !== void 0 ? f : r;
          l &&
            t.dataStartIndex + t.dataEndIndex !== 0 &&
            t.dataEndIndex - t.dataStartIndex >= n &&
            (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1));
          var p;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var h = l === void 0 ? u : l;
            p = Bo(h, o.dataKey, i);
          } else p = (l && l[n]) || u[n];
          return p ? [].concat(Mr(c), [xv(s, p)]) : c;
        }, []);
  },
  Kp = function (t, r, n, i) {
    var a = i || { x: t.chartX, y: t.chartY },
      o = A3(a, n),
      u = t.orderedTooltipTicks,
      c = t.tooltipAxis,
      s = t.tooltipTicks,
      f = $2(o, u, s, c);
    if (f >= 0 && s) {
      var l = s[f] && s[f].value,
        p = ic(t, r, f, l),
        h = P3(n, u, f, a);
      return {
        activeTooltipIndex: f,
        activeLabel: l,
        activePayload: p,
        activeCoordinate: h,
      };
    }
    return null;
  },
  $3 = function (t, r) {
    var n = r.axes,
      i = r.graphicalItems,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      c = r.dataStartIndex,
      s = r.dataEndIndex,
      f = t.layout,
      l = t.children,
      p = t.stackOffset,
      h = gv(f, a);
    return n.reduce(function (m, v) {
      var d,
        b =
          v.type.defaultProps !== void 0
            ? T(T({}, v.type.defaultProps), v.props)
            : v.props,
        x = b.type,
        w = b.dataKey,
        O = b.allowDataOverflow,
        y = b.allowDuplicatedCategory,
        g = b.scale,
        S = b.ticks,
        _ = b.includeHidden,
        A = b[o];
      if (m[A]) return m;
      var C = no(t.data, {
          graphicalItems: i.filter(function (z) {
            var X,
              ce =
                o in z.props
                  ? z.props[o]
                  : (X = z.type.defaultProps) === null || X === void 0
                    ? void 0
                    : X[o];
            return ce === A;
          }),
          dataStartIndex: c,
          dataEndIndex: s,
        }),
        j = C.length,
        P,
        N,
        M;
      QL(b.domain, O, x) &&
        ((P = _u(b.domain, null, O)),
        h && (x === "number" || g !== "auto") && (M = nn(C, w, "category")));
      var E = Sy(x);
      if (!P || P.length === 0) {
        var k,
          B = (k = b.domain) !== null && k !== void 0 ? k : E;
        if (w) {
          if (((P = nn(C, w, x)), x === "category" && h)) {
            var L = h0(P);
            y && L
              ? ((N = P), (P = Qi(0, j)))
              : y ||
                (P = Cf(B, P, v).reduce(function (z, X) {
                  return z.indexOf(X) >= 0 ? z : [].concat(Mr(z), [X]);
                }, []));
          } else if (x === "category")
            y
              ? (P = P.filter(function (z) {
                  return z !== "" && !te(z);
                }))
              : (P = Cf(B, P, v).reduce(function (z, X) {
                  return z.indexOf(X) >= 0 || X === "" || te(X)
                    ? z
                    : [].concat(Mr(z), [X]);
                }, []));
          else if (x === "number") {
            var U = C2(
              C,
              i.filter(function (z) {
                var X,
                  ce,
                  ve =
                    o in z.props
                      ? z.props[o]
                      : (X = z.type.defaultProps) === null || X === void 0
                        ? void 0
                        : X[o],
                  De =
                    "hide" in z.props
                      ? z.props.hide
                      : (ce = z.type.defaultProps) === null || ce === void 0
                        ? void 0
                        : ce.hide;
                return ve === A && (_ || !De);
              }),
              w,
              a,
              f,
            );
            U && (P = U);
          }
          h && (x === "number" || g !== "auto") && (M = nn(C, w, "category"));
        } else
          h
            ? (P = Qi(0, j))
            : u && u[A] && u[A].hasStack && x === "number"
              ? (P = p === "expand" ? [0, 1] : bv(u[A].stackGroups, c, s))
              : (P = mv(
                  C,
                  i.filter(function (z) {
                    var X = o in z.props ? z.props[o] : z.type.defaultProps[o],
                      ce =
                        "hide" in z.props
                          ? z.props.hide
                          : z.type.defaultProps.hide;
                    return X === A && (_ || !ce);
                  }),
                  x,
                  f,
                  !0,
                ));
        if (x === "number") ((P = tc(l, P, A, a, S)), B && (P = _u(B, P, O)));
        else if (x === "category" && B) {
          var q = B,
            K = P.every(function (z) {
              return q.indexOf(z) >= 0;
            });
          K && (P = q);
        }
      }
      return T(
        T({}, m),
        {},
        G(
          {},
          A,
          T(
            T({}, b),
            {},
            {
              axisType: a,
              domain: P,
              categoricalDomain: M,
              duplicateDomain: N,
              originalDomain: (d = b.domain) !== null && d !== void 0 ? d : E,
              isCategorical: h,
              layout: f,
            },
          ),
        ),
      );
    }, {});
  },
  T3 = function (t, r) {
    var n = r.graphicalItems,
      i = r.Axis,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      c = r.dataStartIndex,
      s = r.dataEndIndex,
      f = t.layout,
      l = t.children,
      p = no(t.data, { graphicalItems: n, dataStartIndex: c, dataEndIndex: s }),
      h = p.length,
      m = gv(f, a),
      v = -1;
    return n.reduce(function (d, b) {
      var x =
          b.type.defaultProps !== void 0
            ? T(T({}, b.type.defaultProps), b.props)
            : b.props,
        w = x[o],
        O = Sy("number");
      if (!d[w]) {
        v++;
        var y;
        return (
          m
            ? (y = Qi(0, h))
            : u && u[w] && u[w].hasStack
              ? ((y = bv(u[w].stackGroups, c, s)), (y = tc(l, y, w, a)))
              : ((y = _u(
                  O,
                  mv(
                    p,
                    n.filter(function (g) {
                      var S,
                        _,
                        A =
                          o in g.props
                            ? g.props[o]
                            : (S = g.type.defaultProps) === null || S === void 0
                              ? void 0
                              : S[o],
                        C =
                          "hide" in g.props
                            ? g.props.hide
                            : (_ = g.type.defaultProps) === null || _ === void 0
                              ? void 0
                              : _.hide;
                      return A === w && !C;
                    }),
                    "number",
                    f,
                  ),
                  i.defaultProps.allowDataOverflow,
                )),
                (y = tc(l, y, w, a))),
          T(
            T({}, d),
            {},
            G(
              {},
              w,
              T(
                T({ axisType: a }, i.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: He(S3, "".concat(a, ".").concat(v % 2), null),
                  domain: y,
                  originalDomain: O,
                  isCategorical: m,
                  layout: f,
                },
              ),
            ),
          )
        );
      }
      return d;
    }, {});
  },
  j3 = function (t, r) {
    var n = r.axisType,
      i = n === void 0 ? "xAxis" : n,
      a = r.AxisComp,
      o = r.graphicalItems,
      u = r.stackGroups,
      c = r.dataStartIndex,
      s = r.dataEndIndex,
      f = t.children,
      l = "".concat(i, "Id"),
      p = Je(f, a),
      h = {};
    return (
      p && p.length
        ? (h = $3(t, {
            axes: p,
            graphicalItems: o,
            axisType: i,
            axisIdKey: l,
            stackGroups: u,
            dataStartIndex: c,
            dataEndIndex: s,
          }))
        : o &&
          o.length &&
          (h = T3(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: l,
            stackGroups: u,
            dataStartIndex: c,
            dataEndIndex: s,
          })),
      h
    );
  },
  E3 = function (t) {
    var r = nr(t),
      n = Lt(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: jc(n, function (i) {
        return i.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: zi(r, n),
    };
  },
  Xp = function (t) {
    var r = t.children,
      n = t.defaultShowTooltip,
      i = Re(r, Or),
      a = 0,
      o = 0;
    return (
      t.data && t.data.length !== 0 && (o = t.data.length - 1),
      i &&
        i.props &&
        (i.props.startIndex >= 0 && (a = i.props.startIndex),
        i.props.endIndex >= 0 && (o = i.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: a,
        dataEndIndex: o,
        activeTooltipIndex: -1,
        isTooltipActive: !!n,
      }
    );
  },
  M3 = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (r) {
          var n = pt(r && r.type);
          return n && n.indexOf("Bar") >= 0;
        });
  },
  Vp = function (t) {
    return t === "horizontal"
      ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
      : t === "vertical"
        ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
        : t === "centric"
          ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
          : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
  },
  C3 = function (t, r) {
    var n = t.props,
      i = t.graphicalItems,
      a = t.xAxisMap,
      o = a === void 0 ? {} : a,
      u = t.yAxisMap,
      c = u === void 0 ? {} : u,
      s = n.width,
      f = n.height,
      l = n.children,
      p = n.margin || {},
      h = Re(l, Or),
      m = Re(l, cr),
      v = Object.keys(c).reduce(
        function (y, g) {
          var S = c[g],
            _ = S.orientation;
          return !S.mirror && !S.hide
            ? T(T({}, y), {}, G({}, _, y[_] + S.width))
            : y;
        },
        { left: p.left || 0, right: p.right || 0 },
      ),
      d = Object.keys(o).reduce(
        function (y, g) {
          var S = o[g],
            _ = S.orientation;
          return !S.mirror && !S.hide
            ? T(T({}, y), {}, G({}, _, He(y, "".concat(_)) + S.height))
            : y;
        },
        { top: p.top || 0, bottom: p.bottom || 0 },
      ),
      b = T(T({}, d), v),
      x = b.bottom;
    (h && (b.bottom += h.props.height || Or.defaultProps.height),
      m && r && (b = E2(b, i, n, r)));
    var w = s - b.left - b.right,
      O = f - b.top - b.bottom;
    return T(
      T({ brushBottom: x }, b),
      {},
      { width: Math.max(w, 0), height: Math.max(O, 0) },
    );
  },
  I3 = function (t, r) {
    if (r === "xAxis") return t[r].width;
    if (r === "yAxis") return t[r].height;
  },
  N3 = function (t) {
    var r = t.chartName,
      n = t.GraphicalChild,
      i = t.defaultTooltipEventType,
      a = i === void 0 ? "axis" : i,
      o = t.validateTooltipEventTypes,
      u = o === void 0 ? ["axis"] : o,
      c = t.axisComponents,
      s = t.legendContent,
      f = t.formatAxisMap,
      l = t.defaultProps,
      p = function (b, x) {
        var w = x.graphicalItems,
          O = x.stackGroups,
          y = x.offset,
          g = x.updateId,
          S = x.dataStartIndex,
          _ = x.dataEndIndex,
          A = b.barSize,
          C = b.layout,
          j = b.barGap,
          P = b.barCategoryGap,
          N = b.maxBarSize,
          M = Vp(C),
          E = M.numericAxisName,
          k = M.cateAxisName,
          B = M3(w),
          L = [];
        return (
          w.forEach(function (U, q) {
            var K = no(b.data, {
                graphicalItems: [U],
                dataStartIndex: S,
                dataEndIndex: _,
              }),
              z =
                U.type.defaultProps !== void 0
                  ? T(T({}, U.type.defaultProps), U.props)
                  : U.props,
              X = z.dataKey,
              ce = z.maxBarSize,
              ve = z["".concat(E, "Id")],
              De = z["".concat(k, "Id")],
              jt = {},
              Ce = c.reduce(function (Et, Mt) {
                var io = x["".concat(Mt.axisType, "Map")],
                  ss = z["".concat(Mt.axisType, "Id")];
                (io && io[ss]) || Mt.axisType === "zAxis" || Kt();
                var ls = io[ss];
                return T(
                  T({}, Et),
                  {},
                  G(
                    G({}, Mt.axisType, ls),
                    "".concat(Mt.axisType, "Ticks"),
                    Lt(ls),
                  ),
                );
              }, jt),
              W = Ce[k],
              V = Ce["".concat(k, "Ticks")],
              Y = O && O[ve] && O[ve].hasStack && H2(U, O[ve].stackGroups),
              D = pt(U.type).indexOf("Bar") >= 0,
              he = zi(W, V),
              J = [],
              ge =
                B && T2({ barSize: A, stackGroups: O, totalSize: I3(Ce, k) });
            if (D) {
              var be,
                Ie,
                xt = te(ce) ? N : ce,
                Qt =
                  (be =
                    (Ie = zi(W, V, !0)) !== null && Ie !== void 0 ? Ie : xt) !==
                    null && be !== void 0
                    ? be
                    : 0;
              ((J = j2({
                barGap: j,
                barCategoryGap: P,
                bandSize: Qt !== he ? Qt : he,
                sizeList: ge[De],
                maxBarSize: xt,
              })),
                Qt !== he &&
                  (J = J.map(function (Et) {
                    return T(
                      T({}, Et),
                      {},
                      {
                        position: T(
                          T({}, Et.position),
                          {},
                          { offset: Et.position.offset - Qt / 2 },
                        ),
                      },
                    );
                  })));
            }
            var Xn = U && U.type && U.type.getComposedData;
            Xn &&
              L.push({
                props: T(
                  T(
                    {},
                    Xn(
                      T(
                        T({}, Ce),
                        {},
                        {
                          displayedData: K,
                          props: b,
                          dataKey: X,
                          item: U,
                          bandSize: he,
                          barPosition: J,
                          offset: y,
                          stackedData: Y,
                          layout: C,
                          dataStartIndex: S,
                          dataEndIndex: _,
                        },
                      ),
                    ),
                  ),
                  {},
                  G(
                    G(
                      G({ key: U.key || "item-".concat(q) }, E, Ce[E]),
                      k,
                      Ce[k],
                    ),
                    "animationId",
                    g,
                  ),
                ),
                childIndex: A0(U, b.children),
                item: U,
              });
          }),
          L
        );
      },
      h = function (b, x) {
        var w = b.props,
          O = b.dataStartIndex,
          y = b.dataEndIndex,
          g = b.updateId;
        if (!As({ props: w })) return null;
        var S = w.children,
          _ = w.layout,
          A = w.stackOffset,
          C = w.data,
          j = w.reverseStackOrder,
          P = Vp(_),
          N = P.numericAxisName,
          M = P.cateAxisName,
          E = Je(S, n),
          k = U2(C, E, "".concat(N, "Id"), "".concat(M, "Id"), A, j),
          B = c.reduce(function (z, X) {
            var ce = "".concat(X.axisType, "Map");
            return T(
              T({}, z),
              {},
              G(
                {},
                ce,
                j3(
                  w,
                  T(
                    T({}, X),
                    {},
                    {
                      graphicalItems: E,
                      stackGroups: X.axisType === N && k,
                      dataStartIndex: O,
                      dataEndIndex: y,
                    },
                  ),
                ),
              ),
            );
          }, {}),
          L = C3(
            T(T({}, B), {}, { props: w, graphicalItems: E }),
            x == null ? void 0 : x.legendBBox,
          );
        Object.keys(B).forEach(function (z) {
          B[z] = f(w, B[z], L, z.replace("Map", ""), r);
        });
        var U = B["".concat(M, "Map")],
          q = E3(U),
          K = p(
            w,
            T(
              T({}, B),
              {},
              {
                dataStartIndex: O,
                dataEndIndex: y,
                updateId: g,
                graphicalItems: E,
                stackGroups: k,
                offset: L,
              },
            ),
          );
        return T(
          T(
            {
              formattedGraphicalItems: K,
              graphicalItems: E,
              offset: L,
              stackGroups: k,
            },
            q,
          ),
          B,
        );
      },
      m = (function (d) {
        function b(x) {
          var w, O, y;
          return (
            p3(this, b),
            (y = v3(this, b, [x])),
            G(y, "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
            G(y, "accessibilityManager", new JL()),
            G(y, "handleLegendBBoxUpdate", function (g) {
              if (g) {
                var S = y.state,
                  _ = S.dataStartIndex,
                  A = S.dataEndIndex,
                  C = S.updateId;
                y.setState(
                  T(
                    { legendBBox: g },
                    h(
                      {
                        props: y.props,
                        dataStartIndex: _,
                        dataEndIndex: A,
                        updateId: C,
                      },
                      T(T({}, y.state), {}, { legendBBox: g }),
                    ),
                  ),
                );
              }
            }),
            G(y, "handleReceiveSyncEvent", function (g, S, _) {
              if (y.props.syncId === g) {
                if (
                  _ === y.eventEmitterSymbol &&
                  typeof y.props.syncMethod != "function"
                )
                  return;
                y.applySyncEvent(S);
              }
            }),
            G(y, "handleBrushChange", function (g) {
              var S = g.startIndex,
                _ = g.endIndex;
              if (S !== y.state.dataStartIndex || _ !== y.state.dataEndIndex) {
                var A = y.state.updateId;
                (y.setState(function () {
                  return T(
                    { dataStartIndex: S, dataEndIndex: _ },
                    h(
                      {
                        props: y.props,
                        dataStartIndex: S,
                        dataEndIndex: _,
                        updateId: A,
                      },
                      y.state,
                    ),
                  );
                }),
                  y.triggerSyncEvent({ dataStartIndex: S, dataEndIndex: _ }));
              }
            }),
            G(y, "handleMouseEnter", function (g) {
              var S = y.getMouseInfo(g);
              if (S) {
                var _ = T(T({}, S), {}, { isTooltipActive: !0 });
                (y.setState(_), y.triggerSyncEvent(_));
                var A = y.props.onMouseEnter;
                Z(A) && A(_, g);
              }
            }),
            G(y, "triggeredAfterMouseMove", function (g) {
              var S = y.getMouseInfo(g),
                _ = S
                  ? T(T({}, S), {}, { isTooltipActive: !0 })
                  : { isTooltipActive: !1 };
              (y.setState(_), y.triggerSyncEvent(_));
              var A = y.props.onMouseMove;
              Z(A) && A(_, g);
            }),
            G(y, "handleItemMouseEnter", function (g) {
              y.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: g,
                  activePayload: g.tooltipPayload,
                  activeCoordinate: g.tooltipPosition || { x: g.cx, y: g.cy },
                };
              });
            }),
            G(y, "handleItemMouseLeave", function () {
              y.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            G(y, "handleMouseMove", function (g) {
              (g.persist(), y.throttleTriggeredAfterMouseMove(g));
            }),
            G(y, "handleMouseLeave", function (g) {
              y.throttleTriggeredAfterMouseMove.cancel();
              var S = { isTooltipActive: !1 };
              (y.setState(S), y.triggerSyncEvent(S));
              var _ = y.props.onMouseLeave;
              Z(_) && _(S, g);
            }),
            G(y, "handleOuterEvent", function (g) {
              var S = _0(g),
                _ = He(y.props, "".concat(S));
              if (S && Z(_)) {
                var A, C;
                (/.*touch.*/i.test(S)
                  ? (C = y.getMouseInfo(g.changedTouches[0]))
                  : (C = y.getMouseInfo(g)),
                  _((A = C) !== null && A !== void 0 ? A : {}, g));
              }
            }),
            G(y, "handleClick", function (g) {
              var S = y.getMouseInfo(g);
              if (S) {
                var _ = T(T({}, S), {}, { isTooltipActive: !0 });
                (y.setState(_), y.triggerSyncEvent(_));
                var A = y.props.onClick;
                Z(A) && A(_, g);
              }
            }),
            G(y, "handleMouseDown", function (g) {
              var S = y.props.onMouseDown;
              if (Z(S)) {
                var _ = y.getMouseInfo(g);
                S(_, g);
              }
            }),
            G(y, "handleMouseUp", function (g) {
              var S = y.props.onMouseUp;
              if (Z(S)) {
                var _ = y.getMouseInfo(g);
                S(_, g);
              }
            }),
            G(y, "handleTouchMove", function (g) {
              g.changedTouches != null &&
                g.changedTouches.length > 0 &&
                y.throttleTriggeredAfterMouseMove(g.changedTouches[0]);
            }),
            G(y, "handleTouchStart", function (g) {
              g.changedTouches != null &&
                g.changedTouches.length > 0 &&
                y.handleMouseDown(g.changedTouches[0]);
            }),
            G(y, "handleTouchEnd", function (g) {
              g.changedTouches != null &&
                g.changedTouches.length > 0 &&
                y.handleMouseUp(g.changedTouches[0]);
            }),
            G(y, "handleDoubleClick", function (g) {
              var S = y.props.onDoubleClick;
              if (Z(S)) {
                var _ = y.getMouseInfo(g);
                S(_, g);
              }
            }),
            G(y, "handleContextMenu", function (g) {
              var S = y.props.onContextMenu;
              if (Z(S)) {
                var _ = y.getMouseInfo(g);
                S(_, g);
              }
            }),
            G(y, "triggerSyncEvent", function (g) {
              y.props.syncId !== void 0 &&
                Io.emit(No, y.props.syncId, g, y.eventEmitterSymbol);
            }),
            G(y, "applySyncEvent", function (g) {
              var S = y.props,
                _ = S.layout,
                A = S.syncMethod,
                C = y.state.updateId,
                j = g.dataStartIndex,
                P = g.dataEndIndex;
              if (g.dataStartIndex !== void 0 || g.dataEndIndex !== void 0)
                y.setState(
                  T(
                    { dataStartIndex: j, dataEndIndex: P },
                    h(
                      {
                        props: y.props,
                        dataStartIndex: j,
                        dataEndIndex: P,
                        updateId: C,
                      },
                      y.state,
                    ),
                  ),
                );
              else if (g.activeTooltipIndex !== void 0) {
                var N = g.chartX,
                  M = g.chartY,
                  E = g.activeTooltipIndex,
                  k = y.state,
                  B = k.offset,
                  L = k.tooltipTicks;
                if (!B) return;
                if (typeof A == "function") E = A(L, g);
                else if (A === "value") {
                  E = -1;
                  for (var U = 0; U < L.length; U++)
                    if (L[U].value === g.activeLabel) {
                      E = U;
                      break;
                    }
                }
                var q = T(T({}, B), {}, { x: B.left, y: B.top }),
                  K = Math.min(N, q.x + q.width),
                  z = Math.min(M, q.y + q.height),
                  X = L[E] && L[E].value,
                  ce = ic(y.state, y.props.data, E),
                  ve = L[E]
                    ? {
                        x: _ === "horizontal" ? L[E].coordinate : K,
                        y: _ === "horizontal" ? z : L[E].coordinate,
                      }
                    : Oy;
                y.setState(
                  T(
                    T({}, g),
                    {},
                    {
                      activeLabel: X,
                      activeCoordinate: ve,
                      activePayload: ce,
                      activeTooltipIndex: E,
                    },
                  ),
                );
              } else y.setState(g);
            }),
            G(y, "renderCursor", function (g) {
              var S,
                _ = y.state,
                A = _.isTooltipActive,
                C = _.activeCoordinate,
                j = _.activePayload,
                P = _.offset,
                N = _.activeTooltipIndex,
                M = _.tooltipAxisBandSize,
                E = y.getTooltipEventType(),
                k = (S = g.props.active) !== null && S !== void 0 ? S : A,
                B = y.props.layout,
                L = g.key || "_recharts-cursor";
              return $.createElement(a3, {
                key: L,
                activeCoordinate: C,
                activePayload: j,
                activeTooltipIndex: N,
                chartName: r,
                element: g,
                isActive: k,
                layout: B,
                offset: P,
                tooltipAxisBandSize: M,
                tooltipEventType: E,
              });
            }),
            G(y, "renderPolarAxis", function (g, S, _) {
              var A = He(g, "type.axisType"),
                C = He(y.state, "".concat(A, "Map")),
                j = g.type.defaultProps,
                P = j !== void 0 ? T(T({}, j), g.props) : g.props,
                N = C && C[P["".concat(A, "Id")]];
              return R.cloneElement(
                g,
                T(
                  T({}, N),
                  {},
                  {
                    className: ee(A, N.className),
                    key: g.key || "".concat(S, "-").concat(_),
                    ticks: Lt(N, !0),
                  },
                ),
              );
            }),
            G(y, "renderPolarGrid", function (g) {
              var S = g.props,
                _ = S.radialLines,
                A = S.polarAngles,
                C = S.polarRadius,
                j = y.state,
                P = j.radiusAxisMap,
                N = j.angleAxisMap,
                M = nr(P),
                E = nr(N),
                k = E.cx,
                B = E.cy,
                L = E.innerRadius,
                U = E.outerRadius;
              return R.cloneElement(g, {
                polarAngles: Array.isArray(A)
                  ? A
                  : Lt(E, !0).map(function (q) {
                      return q.coordinate;
                    }),
                polarRadius: Array.isArray(C)
                  ? C
                  : Lt(M, !0).map(function (q) {
                      return q.coordinate;
                    }),
                cx: k,
                cy: B,
                innerRadius: L,
                outerRadius: U,
                key: g.key || "polar-grid",
                radialLines: _,
              });
            }),
            G(y, "renderLegend", function () {
              var g = y.state.formattedGraphicalItems,
                S = y.props,
                _ = S.children,
                A = S.width,
                C = S.height,
                j = y.props.margin || {},
                P = A - (j.left || 0) - (j.right || 0),
                N = vv({
                  children: _,
                  formattedGraphicalItems: g,
                  legendWidth: P,
                  legendContent: s,
                });
              if (!N) return null;
              var M = N.item,
                E = qp(N, o3);
              return R.cloneElement(
                M,
                T(
                  T({}, E),
                  {},
                  {
                    chartWidth: A,
                    chartHeight: C,
                    margin: j,
                    onBBoxUpdate: y.handleLegendBBoxUpdate,
                  },
                ),
              );
            }),
            G(y, "renderTooltip", function () {
              var g,
                S = y.props,
                _ = S.children,
                A = S.accessibilityLayer,
                C = Re(_, et);
              if (!C) return null;
              var j = y.state,
                P = j.isTooltipActive,
                N = j.activeCoordinate,
                M = j.activePayload,
                E = j.activeLabel,
                k = j.offset,
                B = (g = C.props.active) !== null && g !== void 0 ? g : P;
              return R.cloneElement(C, {
                viewBox: T(T({}, k), {}, { x: k.left, y: k.top }),
                active: B,
                label: E,
                payload: B ? M : [],
                coordinate: N,
                accessibilityLayer: A,
              });
            }),
            G(y, "renderBrush", function (g) {
              var S = y.props,
                _ = S.margin,
                A = S.data,
                C = y.state,
                j = C.offset,
                P = C.dataStartIndex,
                N = C.dataEndIndex,
                M = C.updateId;
              return R.cloneElement(g, {
                key: g.key || "_recharts-brush",
                onChange: ai(y.handleBrushChange, g.props.onChange),
                data: A,
                x: F(g.props.x) ? g.props.x : j.left,
                y: F(g.props.y)
                  ? g.props.y
                  : j.top + j.height + j.brushBottom - (_.bottom || 0),
                width: F(g.props.width) ? g.props.width : j.width,
                startIndex: P,
                endIndex: N,
                updateId: "brush-".concat(M),
              });
            }),
            G(y, "renderReferenceElement", function (g, S, _) {
              if (!g) return null;
              var A = y,
                C = A.clipPathId,
                j = y.state,
                P = j.xAxisMap,
                N = j.yAxisMap,
                M = j.offset,
                E = g.type.defaultProps || {},
                k = g.props,
                B = k.xAxisId,
                L = B === void 0 ? E.xAxisId : B,
                U = k.yAxisId,
                q = U === void 0 ? E.yAxisId : U;
              return R.cloneElement(g, {
                key: g.key || "".concat(S, "-").concat(_),
                xAxis: P[L],
                yAxis: N[q],
                viewBox: {
                  x: M.left,
                  y: M.top,
                  width: M.width,
                  height: M.height,
                },
                clipPathId: C,
              });
            }),
            G(y, "renderActivePoints", function (g) {
              var S = g.item,
                _ = g.activePoint,
                A = g.basePoint,
                C = g.childIndex,
                j = g.isRange,
                P = [],
                N = S.props.key,
                M =
                  S.item.type.defaultProps !== void 0
                    ? T(T({}, S.item.type.defaultProps), S.item.props)
                    : S.item.props,
                E = M.activeDot,
                k = M.dataKey,
                B = T(
                  T(
                    {
                      index: C,
                      dataKey: k,
                      cx: _.x,
                      cy: _.y,
                      r: 4,
                      fill: ns(S.item),
                      strokeWidth: 2,
                      stroke: "#fff",
                      payload: _.payload,
                      value: _.value,
                    },
                    ne(E, !1),
                  ),
                  hi(E),
                );
              return (
                P.push(
                  b.renderActiveDot(
                    E,
                    B,
                    "".concat(N, "-activePoint-").concat(C),
                  ),
                ),
                A
                  ? P.push(
                      b.renderActiveDot(
                        E,
                        T(T({}, B), {}, { cx: A.x, cy: A.y }),
                        "".concat(N, "-basePoint-").concat(C),
                      ),
                    )
                  : j && P.push(null),
                P
              );
            }),
            G(y, "renderGraphicChild", function (g, S, _) {
              var A = y.filterFormatItem(g, S, _);
              if (!A) return null;
              var C = y.getTooltipEventType(),
                j = y.state,
                P = j.isTooltipActive,
                N = j.tooltipAxis,
                M = j.activeTooltipIndex,
                E = j.activeLabel,
                k = y.props.children,
                B = Re(k, et),
                L = A.props,
                U = L.points,
                q = L.isRange,
                K = L.baseLine,
                z =
                  A.item.type.defaultProps !== void 0
                    ? T(T({}, A.item.type.defaultProps), A.item.props)
                    : A.item.props,
                X = z.activeDot,
                ce = z.hide,
                ve = z.activeBar,
                De = z.activeShape,
                jt = !!(!ce && P && B && (X || ve || De)),
                Ce = {};
              C !== "axis" && B && B.props.trigger === "click"
                ? (Ce = {
                    onClick: ai(y.handleItemMouseEnter, g.props.onClick),
                  })
                : C !== "axis" &&
                  (Ce = {
                    onMouseLeave: ai(
                      y.handleItemMouseLeave,
                      g.props.onMouseLeave,
                    ),
                    onMouseEnter: ai(
                      y.handleItemMouseEnter,
                      g.props.onMouseEnter,
                    ),
                  });
              var W = R.cloneElement(g, T(T({}, A.props), Ce));
              function V(Mt) {
                return typeof N.dataKey == "function"
                  ? N.dataKey(Mt.payload)
                  : null;
              }
              if (jt)
                if (M >= 0) {
                  var Y, D;
                  if (N.dataKey && !N.allowDuplicatedCategory) {
                    var he =
                      typeof N.dataKey == "function"
                        ? V
                        : "payload.".concat(N.dataKey.toString());
                    ((Y = Bo(U, he, E)), (D = q && K && Bo(K, he, E)));
                  } else
                    ((Y = U == null ? void 0 : U[M]), (D = q && K && K[M]));
                  if (De || ve) {
                    var J =
                      g.props.activeIndex !== void 0 ? g.props.activeIndex : M;
                    return [
                      R.cloneElement(
                        g,
                        T(T(T({}, A.props), Ce), {}, { activeIndex: J }),
                      ),
                      null,
                      null,
                    ];
                  }
                  if (!te(Y))
                    return [W].concat(
                      Mr(
                        y.renderActivePoints({
                          item: A,
                          activePoint: Y,
                          basePoint: D,
                          childIndex: M,
                          isRange: q,
                        }),
                      ),
                    );
                } else {
                  var ge,
                    be =
                      (ge = y.getItemByXY(y.state.activeCoordinate)) !== null &&
                      ge !== void 0
                        ? ge
                        : { graphicalItem: W },
                    Ie = be.graphicalItem,
                    xt = Ie.item,
                    Qt = xt === void 0 ? g : xt,
                    Xn = Ie.childIndex,
                    Et = T(T(T({}, A.props), Ce), {}, { activeIndex: Xn });
                  return [R.cloneElement(Qt, Et), null, null];
                }
              return q ? [W, null, null] : [W, null];
            }),
            G(y, "renderCustomized", function (g, S, _) {
              return R.cloneElement(
                g,
                T(
                  T({ key: "recharts-customized-".concat(_) }, y.props),
                  y.state,
                ),
              );
            }),
            G(y, "renderMap", {
              CartesianGrid: { handler: li, once: !0 },
              ReferenceArea: { handler: y.renderReferenceElement },
              ReferenceLine: { handler: li },
              ReferenceDot: { handler: y.renderReferenceElement },
              XAxis: { handler: li },
              YAxis: { handler: li },
              Brush: { handler: y.renderBrush, once: !0 },
              Bar: { handler: y.renderGraphicChild },
              Line: { handler: y.renderGraphicChild },
              Area: { handler: y.renderGraphicChild },
              Radar: { handler: y.renderGraphicChild },
              RadialBar: { handler: y.renderGraphicChild },
              Scatter: { handler: y.renderGraphicChild },
              Pie: { handler: y.renderGraphicChild },
              Funnel: { handler: y.renderGraphicChild },
              Tooltip: { handler: y.renderCursor, once: !0 },
              PolarGrid: { handler: y.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: y.renderPolarAxis },
              PolarRadiusAxis: { handler: y.renderPolarAxis },
              Customized: { handler: y.renderCustomized },
            }),
            (y.clipPathId = "".concat(
              (w = x.id) !== null && w !== void 0 ? w : Ta("recharts"),
              "-clip",
            )),
            (y.throttleTriggeredAfterMouseMove = yd(
              y.triggeredAfterMouseMove,
              (O = x.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60,
            )),
            (y.state = {}),
            y
          );
        }
        return (
          g3(b, d),
          d3(b, [
            {
              key: "componentDidMount",
              value: function () {
                var w, O;
                (this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left:
                        (w = this.props.margin.left) !== null && w !== void 0
                          ? w
                          : 0,
                      top:
                        (O = this.props.margin.top) !== null && O !== void 0
                          ? O
                          : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip());
              },
            },
            {
              key: "displayDefaultTooltip",
              value: function () {
                var w = this.props,
                  O = w.children,
                  y = w.data,
                  g = w.height,
                  S = w.layout,
                  _ = Re(O, et);
                if (_) {
                  var A = _.props.defaultIndex;
                  if (
                    !(
                      typeof A != "number" ||
                      A < 0 ||
                      A > this.state.tooltipTicks.length - 1
                    )
                  ) {
                    var C =
                        this.state.tooltipTicks[A] &&
                        this.state.tooltipTicks[A].value,
                      j = ic(this.state, y, A, C),
                      P = this.state.tooltipTicks[A].coordinate,
                      N = (this.state.offset.top + g) / 2,
                      M = S === "horizontal",
                      E = M ? { x: P, y: N } : { y: P, x: N },
                      k = this.state.formattedGraphicalItems.find(function (L) {
                        var U = L.item;
                        return U.type.name === "Scatter";
                      });
                    k &&
                      ((E = T(T({}, E), k.props.points[A].tooltipPosition)),
                      (j = k.props.points[A].tooltipPayload));
                    var B = {
                      activeTooltipIndex: A,
                      isTooltipActive: !0,
                      activeLabel: C,
                      activePayload: j,
                      activeCoordinate: E,
                    };
                    (this.setState(B),
                      this.renderCursor(_),
                      this.accessibilityManager.setIndex(A));
                  }
                }
              },
            },
            {
              key: "getSnapshotBeforeUpdate",
              value: function (w, O) {
                if (!this.props.accessibilityLayer) return null;
                if (
                  (this.state.tooltipTicks !== O.tooltipTicks &&
                    this.accessibilityManager.setDetails({
                      coordinateList: this.state.tooltipTicks,
                    }),
                  this.props.layout !== w.layout &&
                    this.accessibilityManager.setDetails({
                      layout: this.props.layout,
                    }),
                  this.props.margin !== w.margin)
                ) {
                  var y, g;
                  this.accessibilityManager.setDetails({
                    offset: {
                      left:
                        (y = this.props.margin.left) !== null && y !== void 0
                          ? y
                          : 0,
                      top:
                        (g = this.props.margin.top) !== null && g !== void 0
                          ? g
                          : 0,
                    },
                  });
                }
                return null;
              },
            },
            {
              key: "componentDidUpdate",
              value: function (w) {
                Lo([Re(w.children, et)], [Re(this.props.children, et)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                (this.removeListener(),
                  this.throttleTriggeredAfterMouseMove.cancel());
              },
            },
            {
              key: "getTooltipEventType",
              value: function () {
                var w = Re(this.props.children, et);
                if (w && typeof w.props.shared == "boolean") {
                  var O = w.props.shared ? "axis" : "item";
                  return u.indexOf(O) >= 0 ? O : a;
                }
                return a;
              },
            },
            {
              key: "getMouseInfo",
              value: function (w) {
                if (!this.container) return null;
                var O = this.container,
                  y = O.getBoundingClientRect(),
                  g = QT(y),
                  S = {
                    chartX: Math.round(w.pageX - g.left),
                    chartY: Math.round(w.pageY - g.top),
                  },
                  _ = y.width / O.offsetWidth || 1,
                  A = this.inRange(S.chartX, S.chartY, _);
                if (!A) return null;
                var C = this.state,
                  j = C.xAxisMap,
                  P = C.yAxisMap,
                  N = this.getTooltipEventType(),
                  M = Kp(this.state, this.props.data, this.props.layout, A);
                if (N !== "axis" && j && P) {
                  var E = nr(j).scale,
                    k = nr(P).scale,
                    B = E && E.invert ? E.invert(S.chartX) : null,
                    L = k && k.invert ? k.invert(S.chartY) : null;
                  return T(T({}, S), {}, { xValue: B, yValue: L }, M);
                }
                return M ? T(T({}, S), M) : null;
              },
            },
            {
              key: "inRange",
              value: function (w, O) {
                var y =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : 1,
                  g = this.props.layout,
                  S = w / y,
                  _ = O / y;
                if (g === "horizontal" || g === "vertical") {
                  var A = this.state.offset,
                    C =
                      S >= A.left &&
                      S <= A.left + A.width &&
                      _ >= A.top &&
                      _ <= A.top + A.height;
                  return C ? { x: S, y: _ } : null;
                }
                var j = this.state,
                  P = j.angleAxisMap,
                  N = j.radiusAxisMap;
                if (P && N) {
                  var M = nr(P);
                  return kf({ x: S, y: _ }, M);
                }
                return null;
              },
            },
            {
              key: "parseEventsOfWrapper",
              value: function () {
                var w = this.props.children,
                  O = this.getTooltipEventType(),
                  y = Re(w, et),
                  g = {};
                y &&
                  O === "axis" &&
                  (y.props.trigger === "click"
                    ? (g = { onClick: this.handleClick })
                    : (g = {
                        onMouseEnter: this.handleMouseEnter,
                        onDoubleClick: this.handleDoubleClick,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                        onContextMenu: this.handleContextMenu,
                      }));
                var S = hi(this.props, this.handleOuterEvent);
                return T(T({}, S), g);
              },
            },
            {
              key: "addListener",
              value: function () {
                Io.on(No, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "removeListener",
              value: function () {
                Io.removeListener(No, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "filterFormatItem",
              value: function (w, O, y) {
                for (
                  var g = this.state.formattedGraphicalItems,
                    S = 0,
                    _ = g.length;
                  S < _;
                  S++
                ) {
                  var A = g[S];
                  if (
                    A.item === w ||
                    A.props.key === w.key ||
                    (O === pt(A.item.type) && y === A.childIndex)
                  )
                    return A;
                }
                return null;
              },
            },
            {
              key: "renderClipPath",
              value: function () {
                var w = this.clipPathId,
                  O = this.state.offset,
                  y = O.left,
                  g = O.top,
                  S = O.height,
                  _ = O.width;
                return $.createElement(
                  "defs",
                  null,
                  $.createElement(
                    "clipPath",
                    { id: w },
                    $.createElement("rect", {
                      x: y,
                      y: g,
                      height: S,
                      width: _,
                    }),
                  ),
                );
              },
            },
            {
              key: "getXScales",
              value: function () {
                var w = this.state.xAxisMap;
                return w
                  ? Object.entries(w).reduce(function (O, y) {
                      var g = Hp(y, 2),
                        S = g[0],
                        _ = g[1];
                      return T(T({}, O), {}, G({}, S, _.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getYScales",
              value: function () {
                var w = this.state.yAxisMap;
                return w
                  ? Object.entries(w).reduce(function (O, y) {
                      var g = Hp(y, 2),
                        S = g[0],
                        _ = g[1];
                      return T(T({}, O), {}, G({}, S, _.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getXScaleByAxisId",
              value: function (w) {
                var O;
                return (O = this.state.xAxisMap) === null ||
                  O === void 0 ||
                  (O = O[w]) === null ||
                  O === void 0
                  ? void 0
                  : O.scale;
              },
            },
            {
              key: "getYScaleByAxisId",
              value: function (w) {
                var O;
                return (O = this.state.yAxisMap) === null ||
                  O === void 0 ||
                  (O = O[w]) === null ||
                  O === void 0
                  ? void 0
                  : O.scale;
              },
            },
            {
              key: "getItemByXY",
              value: function (w) {
                var O = this.state,
                  y = O.formattedGraphicalItems,
                  g = O.activeItem;
                if (y && y.length)
                  for (var S = 0, _ = y.length; S < _; S++) {
                    var A = y[S],
                      C = A.props,
                      j = A.item,
                      P =
                        j.type.defaultProps !== void 0
                          ? T(T({}, j.type.defaultProps), j.props)
                          : j.props,
                      N = pt(j.type);
                    if (N === "Bar") {
                      var M = (C.data || []).find(function (L) {
                        return Lk(w, L);
                      });
                      if (M) return { graphicalItem: A, payload: M };
                    } else if (N === "RadialBar") {
                      var E = (C.data || []).find(function (L) {
                        return kf(w, L);
                      });
                      if (E) return { graphicalItem: A, payload: E };
                    } else if (Ka(A, g) || Xa(A, g) || Nn(A, g)) {
                      var k = WD({
                          graphicalItem: A,
                          activeTooltipItem: g,
                          itemData: P.data,
                        }),
                        B = P.activeIndex === void 0 ? k : P.activeIndex;
                      return {
                        graphicalItem: T(T({}, A), {}, { childIndex: B }),
                        payload: Nn(A, g) ? P.data[k] : A.props.data[k],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var w = this;
                if (!As(this)) return null;
                var O = this.props,
                  y = O.children,
                  g = O.className,
                  S = O.width,
                  _ = O.height,
                  A = O.style,
                  C = O.compact,
                  j = O.title,
                  P = O.desc,
                  N = qp(O, u3),
                  M = ne(N, !1);
                if (C)
                  return $.createElement(
                    Mp,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    $.createElement(
                      Uo,
                      or({}, M, { width: S, height: _, title: j, desc: P }),
                      this.renderClipPath(),
                      $s(y, this.renderMap),
                    ),
                  );
                if (this.props.accessibilityLayer) {
                  var E, k;
                  ((M.tabIndex =
                    (E = this.props.tabIndex) !== null && E !== void 0 ? E : 0),
                    (M.role =
                      (k = this.props.role) !== null && k !== void 0
                        ? k
                        : "application"),
                    (M.onKeyDown = function (L) {
                      w.accessibilityManager.keyboardEvent(L);
                    }),
                    (M.onFocus = function () {
                      w.accessibilityManager.focus();
                    }));
                }
                var B = this.parseEventsOfWrapper();
                return $.createElement(
                  Mp,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  $.createElement(
                    "div",
                    or(
                      {
                        className: ee("recharts-wrapper", g),
                        style: T(
                          {
                            position: "relative",
                            cursor: "default",
                            width: S,
                            height: _,
                          },
                          A,
                        ),
                      },
                      B,
                      {
                        ref: function (U) {
                          w.container = U;
                        },
                      },
                    ),
                    $.createElement(
                      Uo,
                      or({}, M, {
                        width: S,
                        height: _,
                        title: j,
                        desc: P,
                        style: _3,
                      }),
                      this.renderClipPath(),
                      $s(y, this.renderMap),
                    ),
                    this.renderLegend(),
                    this.renderTooltip(),
                  ),
                );
              },
            },
          ])
        );
      })(R.Component);
    (G(m, "displayName", r),
      G(
        m,
        "defaultProps",
        T(
          {
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: "index",
          },
          l,
        ),
      ),
      G(m, "getDerivedStateFromProps", function (d, b) {
        var x = d.dataKey,
          w = d.data,
          O = d.children,
          y = d.width,
          g = d.height,
          S = d.layout,
          _ = d.stackOffset,
          A = d.margin,
          C = b.dataStartIndex,
          j = b.dataEndIndex;
        if (b.updateId === void 0) {
          var P = Xp(d);
          return T(
            T(
              T({}, P),
              {},
              { updateId: 0 },
              h(T(T({ props: d }, P), {}, { updateId: 0 }), b),
            ),
            {},
            {
              prevDataKey: x,
              prevData: w,
              prevWidth: y,
              prevHeight: g,
              prevLayout: S,
              prevStackOffset: _,
              prevMargin: A,
              prevChildren: O,
            },
          );
        }
        if (
          x !== b.prevDataKey ||
          w !== b.prevData ||
          y !== b.prevWidth ||
          g !== b.prevHeight ||
          S !== b.prevLayout ||
          _ !== b.prevStackOffset ||
          !ur(A, b.prevMargin)
        ) {
          var N = Xp(d),
            M = {
              chartX: b.chartX,
              chartY: b.chartY,
              isTooltipActive: b.isTooltipActive,
            },
            E = T(T({}, Kp(b, w, S)), {}, { updateId: b.updateId + 1 }),
            k = T(T(T({}, N), M), E);
          return T(
            T(T({}, k), h(T({ props: d }, k), b)),
            {},
            {
              prevDataKey: x,
              prevData: w,
              prevWidth: y,
              prevHeight: g,
              prevLayout: S,
              prevStackOffset: _,
              prevMargin: A,
              prevChildren: O,
            },
          );
        }
        if (!Lo(O, b.prevChildren)) {
          var B,
            L,
            U,
            q,
            K = Re(O, Or),
            z =
              K &&
              (B =
                (L = K.props) === null || L === void 0
                  ? void 0
                  : L.startIndex) !== null &&
              B !== void 0
                ? B
                : C,
            X =
              K &&
              (U =
                (q = K.props) === null || q === void 0
                  ? void 0
                  : q.endIndex) !== null &&
              U !== void 0
                ? U
                : j,
            ce = z !== C || X !== j,
            ve = !te(w),
            De = ve && !ce ? b.updateId : b.updateId + 1;
          return T(
            T(
              { updateId: De },
              h(
                T(
                  T({ props: d }, b),
                  {},
                  { updateId: De, dataStartIndex: z, dataEndIndex: X },
                ),
                b,
              ),
            ),
            {},
            { prevChildren: O, dataStartIndex: z, dataEndIndex: X },
          );
        }
        return null;
      }),
      G(m, "renderActiveDot", function (d, b, x) {
        var w;
        return (
          R.isValidElement(d)
            ? (w = R.cloneElement(d, b))
            : Z(d)
              ? (w = d(b))
              : (w = $.createElement(Nv, b)),
          $.createElement(Ae, { className: "recharts-active-dot", key: x }, w)
        );
      }));
    var v = R.forwardRef(function (b, x) {
      return $.createElement(m, or({}, b, { ref: x }));
    });
    return ((v.displayName = m.displayName), v);
  },
  k3 = N3({
    chartName: "BarChart",
    GraphicalChild: Jt,
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: ["axis", "item"],
    axisComponents: [
      { axisType: "xAxis", AxisComp: to },
      { axisType: "yAxis", AxisComp: ro },
    ],
    formatAxisMap: vR,
  });
function D3(e, t) {
  return e === 0 && t === 0
    ? "Your pipeline is empty. Book the first workshop."
    : e === 0 && t > 0
      ? `${t} prospect${t > 1 ? "s" : ""} in active discussion — close the gap.`
      : e === 1
        ? "First deal closed. Pipeline is warming up."
        : e <= 3
          ? `${e} deals closed. Momentum is building — keep qualifying.`
          : e <= 6
            ? `${e} deals won. Conversion rate is solid. Push harder.`
            : `${e} deals closed. This is pipeline mastery.`;
}
function fi({ icon: e, label: t, value: r, accent: n }) {
  return I.jsxs("div", {
    className: `flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/12 border border-white/20 text-white/90 backdrop-blur-sm ${n}`,
    children: [
      I.jsx(e, { className: "w-3 h-3 opacity-80" }),
      I.jsx("span", { className: "opacity-70", children: t }),
      I.jsx("span", { className: "font-bold", children: r }),
    ],
  });
}
function B3({
  wonCount: e,
  inDiscussion: t = 0,
  totalProspects: r = 0,
  upcomingWorkshops: n = 0,
}) {
  const i = D3(e, t),
    a = R.useRef(e);
  return (
    R.useEffect(() => {
      (e > a.current &&
        _y(async () => {
          const { default: o } = await import("./confetti.module-DX0toIYy.js");
          return { default: o };
        }, []).then(({ default: o }) => {
          o({
            particleCount: 140,
            spread: 85,
            origin: { y: 0.18, x: 0.7 },
            colors: ["#2D3FE7", "#7C3AED", "#10B981", "#F59E0B", "#ffffff"],
          });
        }),
        (a.current = e));
    }, [e]),
    I.jsxs(ct.div, {
      initial: { opacity: 0, y: -12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      className:
        "shrink-0 px-6 py-3 flex items-center gap-5 relative overflow-hidden",
      style: {
        background:
          "linear-gradient(105deg, #1a28a8 0%, #2D3FE7 45%, #6d28d9 100%)",
      },
      children: [
        I.jsx("div", {
          className: "absolute inset-0 pointer-events-none",
          style: {
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 16px)",
          },
        }),
        I.jsx("div", {
          className:
            "absolute right-24 top-1/2 -translate-y-1/2 w-48 h-12 rounded-full bg-white/8 blur-2xl pointer-events-none",
        }),
        I.jsxs("span", {
          className: "relative shrink-0 flex h-2 w-2",
          children: [
            I.jsx("span", {
              className:
                "animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-75",
            }),
            I.jsx("span", {
              className: "relative inline-flex rounded-full h-2 w-2 bg-white",
            }),
          ],
        }),
        I.jsx(Ay, {
          mode: "wait",
          children: I.jsx(
            ct.p,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: 10 },
              transition: { duration: 0.28, ease: "easeOut" },
              className:
                "relative text-sm text-white font-semibold truncate flex-1 min-w-0 drop-shadow-sm",
              children: i,
            },
            e,
          ),
        }),
        I.jsxs("div", {
          className: "flex items-center gap-2 shrink-0",
          children: [
            r > 0 &&
              I.jsx(fi, { icon: Jp, label: "prospects", value: r, accent: "" }),
            t > 0 &&
              I.jsx(fi, {
                icon: eh,
                label: "in discussion",
                value: t,
                accent: "",
              }),
            n > 0 &&
              I.jsx(fi, { icon: Qp, label: "upcoming", value: n, accent: "" }),
            I.jsx(fi, {
              icon: th,
              label: "won",
              value: e,
              accent: "border-amber-400/40 bg-amber-400/15",
            }),
          ],
        }),
        I.jsx(Ny, { className: "w-4 h-4 text-white/30 shrink-0" }),
      ],
    })
  );
}
const R3 = {
    Won: "#2D3FE7",
    "In Discussion": "#F59E0B",
    Lost: "#EF4444",
    New: "#8B5CF6",
    Qualified: "#10B981",
  },
  Yp = ["#2D3FE7", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444", "#06B6D4"];
function L3(e, t) {
  return R3[e] ?? Yp[t % Yp.length];
}
const F3 = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } },
  U3 = {
    hidden: { opacity: 0, y: 18, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };
function W3({ active: e, payload: t }) {
  var o;
  if (!e || !(t != null && t.length)) return null;
  const r = t[0],
    n = (o = r == null ? void 0 : r.payload) == null ? void 0 : o.stage,
    i = r == null ? void 0 : r.value,
    a = r == null ? void 0 : r.fill;
  return n == null || i == null
    ? null
    : I.jsxs("div", {
        className:
          "bg-[#0F172A] border border-white/10 rounded-xl px-3.5 py-2.5 shadow-xl",
        children: [
          I.jsx("p", {
            className:
              "text-[11px] font-semibold uppercase tracking-wider mb-0.5",
            style: { color: a ?? "#2D3FE7" },
            children: n,
          }),
          I.jsx("p", {
            className: "text-white font-bold text-lg leading-none",
            children: i,
          }),
          I.jsx("p", {
            className: "text-white/40 text-[10px] mt-0.5",
            children: i === 1 ? "prospect" : "prospects",
          }),
        ],
      });
}
function e5() {
  const e = Ty(),
    t = My(),
    r = e.data ?? [],
    n = t.data ?? [],
    i = n.filter((v) => v.stage === "Won").length,
    a = n.filter((v) => v.stage === "In Discussion").length,
    o = r.filter((v) => v.status === "Upcoming").length,
    u = n.filter((v) => v.stage === "Proposal Sent").length,
    c = n.reduce((v, d) => ((v[d.stage] = (v[d.stage] ?? 0) + 1), v), {}),
    s = Object.entries(c).map(([v, d]) => ({ stage: v, count: d })),
    f = r.slice(-5).reverse(),
    l = n.slice(0, 6),
    p = e.isLoading || t.isLoading,
    h = e.isError || t.isError,
    m = [
      {
        label: "Total Workshops",
        value: r.length,
        icon: Qp,
        gradient: "from-brand-500 to-blue-600",
        iconColor: "text-white",
        accent: "border-brand-500/20 shadow-brand-500/8",
      },
      {
        label: "Total Prospects",
        value: n.length,
        icon: Jp,
        gradient: "from-violet-500 to-purple-600",
        iconColor: "text-white",
        accent: "border-violet-500/20 shadow-violet-500/8",
      },
      {
        label: "Proposals Sent",
        value: u,
        icon: eh,
        gradient: "from-amber-500 to-orange-500",
        iconColor: "text-white",
        accent: "border-amber-500/20 shadow-amber-500/8",
      },
      {
        label: "Deals Won",
        value: i,
        icon: th,
        gradient: "from-emerald-500 to-teal-600",
        iconColor: "text-white",
        accent: "border-emerald-500/20 shadow-emerald-500/8",
      },
    ];
  return I.jsxs("div", {
    className: "flex flex-col flex-1 overflow-auto bg-[#F4F6FB]",
    children: [
      I.jsx(Py, {
        title: "Growth Dashboard",
        subtitle: "Pipeline, workshops, and prospect intelligence",
      }),
      I.jsx(B3, {
        wonCount: i,
        inDiscussion: a,
        totalProspects: n.length,
        upcomingWorkshops: o,
      }),
      h &&
        I.jsx("div", {
          className: "p-6",
          children: I.jsx($y, {
            error: e.error ?? t.error,
            onRetry: () => {
              (e.refetch(), t.refetch());
            },
          }),
        }),
      !h &&
        I.jsxs("div", {
          className: "p-6 space-y-6 flex-1",
          children: [
            p
              ? I.jsx("div", {
                  className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                  children: [0, 1, 2, 3].map((v) =>
                    I.jsxs(
                      "div",
                      {
                        className:
                          "bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3",
                        children: [
                          I.jsx(st, { className: "w-10 h-10 rounded-xl" }),
                          I.jsx(st, { className: "h-8 w-14 rounded-lg" }),
                          I.jsx(st, { className: "h-3 w-24 rounded" }),
                        ],
                      },
                      v,
                    ),
                  ),
                })
              : I.jsx(ct.div, {
                  className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                  variants: F3,
                  initial: "hidden",
                  animate: "visible",
                  children: m.map((v) => I.jsx(z3, { card: v }, v.label)),
                }),
            I.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
              children: [
                I.jsxs("section", {
                  className: "lg:col-span-2",
                  children: [
                    I.jsx(pi, { children: "Pipeline by Stage" }),
                    p
                      ? I.jsx("div", {
                          className:
                            "bg-white rounded-2xl border border-slate-200 p-6",
                          children: I.jsx(st, {
                            className: "h-44 w-full rounded-xl",
                          }),
                        })
                      : s.length === 0
                        ? I.jsx(Do, {
                            icon: I.jsx(fs, {
                              className: "w-8 h-8 text-slate-300",
                            }),
                            title: "No prospects in the pipeline",
                            description:
                              "Add prospects from a workshop to see your funnel.",
                            action: I.jsx(Yn, {
                              to: "/growth/workshops",
                              className: "btn btn-primary text-xs mt-1",
                              children: "Go to Workshops",
                            }),
                          })
                        : I.jsxs(ct.div, {
                            initial: { opacity: 0, y: 12 },
                            animate: { opacity: 1, y: 0 },
                            transition: {
                              duration: 0.4,
                              ease: [0.16, 1, 0.3, 1],
                              delay: 0.2,
                            },
                            className:
                              "bg-white rounded-2xl border border-slate-200 shadow-sm p-5",
                            children: [
                              I.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-4",
                                children: [
                                  I.jsxs("p", {
                                    className:
                                      "text-xs text-slate-500 font-medium",
                                    children: [
                                      n.length,
                                      " prospects across",
                                      " ",
                                      s.length,
                                      " stages",
                                    ],
                                  }),
                                  I.jsxs(Yn, {
                                    to: "/growth/prospects",
                                    className:
                                      "text-xs text-brand-500 hover:text-brand-600 font-semibold flex items-center gap-1",
                                    children: [
                                      "View all ",
                                      I.jsx(ao, { className: "w-3 h-3" }),
                                    ],
                                  }),
                                ],
                              }),
                              I.jsx(GT, {
                                width: "100%",
                                height: 200,
                                children: I.jsxs(k3, {
                                  data: s,
                                  layout: "vertical",
                                  margin: {
                                    top: 2,
                                    right: 20,
                                    left: 0,
                                    bottom: 2,
                                  },
                                  barCategoryGap: "28%",
                                  children: [
                                    I.jsx(to, {
                                      type: "number",
                                      allowDecimals: !1,
                                      tick: { fontSize: 11, fill: "#94a3b8" },
                                      axisLine: !1,
                                      tickLine: !1,
                                    }),
                                    I.jsx(ro, {
                                      type: "category",
                                      dataKey: "stage",
                                      width: 118,
                                      tick: {
                                        fontSize: 12,
                                        fill: "#64748b",
                                        fontWeight: 500,
                                      },
                                      axisLine: !1,
                                      tickLine: !1,
                                    }),
                                    I.jsx(et, {
                                      content: I.jsx(W3, {}),
                                      cursor: {
                                        fill: "rgba(148,163,184,0.07)",
                                      },
                                    }),
                                    I.jsx(Jt, {
                                      dataKey: "count",
                                      radius: [0, 6, 6, 0],
                                      isAnimationActive: !0,
                                      animationDuration: 700,
                                      children: s.map((v, d) =>
                                        I.jsx(
                                          Mc,
                                          { fill: L3(v.stage, d) },
                                          v.stage,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                  ],
                }),
                I.jsxs("section", {
                  children: [
                    I.jsx(pi, { children: "Conversion" }),
                    p
                      ? I.jsx("div", {
                          className:
                            "bg-white rounded-2xl border border-slate-200 p-5 space-y-3",
                          children: [0, 1, 2, 3].map((v) =>
                            I.jsx(
                              st,
                              { className: "h-10 w-full rounded-lg" },
                              v,
                            ),
                          ),
                        })
                      : I.jsxs(ct.div, {
                          initial: { opacity: 0, y: 12 },
                          animate: { opacity: 1, y: 0 },
                          transition: {
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.28,
                          },
                          className:
                            "bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3",
                          children: [
                            [
                              {
                                label: "Attended",
                                count: n.filter((v) => v.attended).length,
                                color: "bg-blue-500",
                              },
                              {
                                label: "In Discussion",
                                count: a,
                                color: "bg-amber-500",
                              },
                              {
                                label: "Proposals",
                                count: u,
                                color: "bg-violet-500",
                              },
                              {
                                label: "Won",
                                count: i,
                                color: "bg-emerald-500",
                              },
                            ].map(({ label: v, count: d, color: b }) => {
                              const x =
                                n.length > 0
                                  ? Math.round((d / n.length) * 100)
                                  : 0;
                              return I.jsxs(
                                "div",
                                {
                                  children: [
                                    I.jsxs("div", {
                                      className:
                                        "flex items-center justify-between mb-1",
                                      children: [
                                        I.jsx("span", {
                                          className:
                                            "text-[12px] font-semibold text-slate-600",
                                          children: v,
                                        }),
                                        I.jsxs("span", {
                                          className:
                                            "text-[12px] font-bold text-slate-900",
                                          children: [
                                            d,
                                            " ",
                                            I.jsxs("span", {
                                              className:
                                                "font-normal text-slate-400 text-[11px]",
                                              children: ["(", x, "%)"],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    I.jsx("div", {
                                      className:
                                        "h-1.5 bg-slate-100 rounded-full overflow-hidden",
                                      children: I.jsx(ct.div, {
                                        className: `h-full rounded-full ${b}`,
                                        initial: { width: 0 },
                                        animate: { width: `${x}%` },
                                        transition: {
                                          duration: 0.9,
                                          ease: "easeOut",
                                          delay: 0.4,
                                        },
                                      }),
                                    }),
                                  ],
                                },
                                v,
                              );
                            }),
                            I.jsxs("div", {
                              className:
                                "pt-2 border-t border-slate-100 flex items-center gap-1.5",
                              children: [
                                I.jsx(Iy, {
                                  className: "w-3.5 h-3.5 text-amber-500",
                                }),
                                I.jsx("span", {
                                  className:
                                    "text-[11px] text-slate-500 font-medium",
                                  children:
                                    n.length > 0
                                      ? `${Math.round((i / n.length) * 100)}% overall win rate`
                                      : "No prospects yet",
                                }),
                              ],
                            }),
                          ],
                        }),
                  ],
                }),
              ],
            }),
            I.jsxs("section", {
              children: [
                I.jsxs("div", {
                  className: "flex items-center justify-between mb-3",
                  children: [
                    I.jsx(pi, { children: "Recent Workshops" }),
                    I.jsxs(Yn, {
                      to: "/growth/workshops",
                      className:
                        "text-xs text-brand-500 hover:text-brand-600 font-semibold flex items-center gap-1",
                      children: [
                        "View all ",
                        I.jsx(ao, { className: "w-3 h-3" }),
                      ],
                    }),
                  ],
                }),
                p
                  ? I.jsx(Zp, { rows: 3 })
                  : f.length === 0
                    ? I.jsx(Do, {
                        icon: I.jsx(jy, {
                          className: "w-8 h-8 text-slate-300",
                        }),
                        title: "No workshops yet",
                        description:
                          "Schedule your first workshop using the sidebar button.",
                      })
                    : I.jsx(ct.div, {
                        initial: { opacity: 0, y: 12 },
                        animate: { opacity: 1, y: 0 },
                        transition: {
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.15,
                        },
                        children: I.jsx(Ey, { workshops: f }),
                      }),
              ],
            }),
            I.jsxs("section", {
              children: [
                I.jsxs("div", {
                  className: "flex items-center justify-between mb-3",
                  children: [
                    I.jsx(pi, { children: "Active Prospects" }),
                    I.jsxs(Yn, {
                      to: "/growth/prospects",
                      className:
                        "text-xs text-brand-500 hover:text-brand-600 font-semibold flex items-center gap-1",
                      children: [
                        "View all ",
                        I.jsx(ao, { className: "w-3 h-3" }),
                      ],
                    }),
                  ],
                }),
                p
                  ? I.jsx(Zp, { rows: 4 })
                  : l.length === 0
                    ? I.jsx(Do, {
                        icon: I.jsx(fs, {
                          className: "w-8 h-8 text-slate-300",
                        }),
                        title: "No prospects yet",
                        description:
                          "Prospects appear here once added from a workshop.",
                      })
                    : I.jsx(ct.div, {
                        initial: { opacity: 0, y: 12 },
                        animate: { opacity: 1, y: 0 },
                        transition: {
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.22,
                        },
                        children: I.jsx(Cy, { prospects: l }),
                      }),
              ],
            }),
          ],
        }),
    ],
  });
}
function z3({ card: e }) {
  const {
    label: t,
    value: r,
    icon: n,
    gradient: i,
    iconColor: a,
    accent: o,
  } = e;
  return I.jsxs(ct.div, {
    variants: U3,
    whileHover: { y: -3, boxShadow: "0 12px 28px rgba(0,0,0,0.09)" },
    transition: { type: "spring", stiffness: 380, damping: 30 },
    className: `bg-white rounded-2xl border shadow-sm p-5 cursor-default overflow-hidden relative ${o}`,
    children: [
      I.jsx("div", {
        className: `absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r ${i}`,
      }),
      I.jsx("div", {
        className: `w-10 h-10 rounded-xl bg-gradient-to-br ${i} flex items-center justify-center mb-3 shadow-md`,
        children: I.jsx(n, { className: `w-5 h-5 ${a}` }),
      }),
      I.jsx("div", {
        className:
          "font-heading text-[36px] font-bold text-slate-900 leading-none mb-1.5",
        children: r,
      }),
      I.jsx("p", {
        className:
          "text-[11px] font-semibold uppercase tracking-wider text-slate-400",
        children: t,
      }),
    ],
  });
}
function pi({ children: e }) {
  return I.jsxs("h2", {
    className:
      "font-heading text-[13px] font-bold text-slate-700 mb-3 flex items-center gap-2",
    children: [
      I.jsx("span", {
        className:
          "w-1 h-4 rounded-full bg-gradient-to-b from-brand-500 to-violet-500 inline-block shrink-0",
      }),
      e,
    ],
  });
}
function Do({ icon: e, title: t, description: r, action: n }) {
  return I.jsxs("div", {
    className:
      "border-2 border-dashed border-slate-200 rounded-2xl p-10 flex flex-col items-center text-center gap-2.5 bg-white/60",
    children: [
      e,
      I.jsx("p", {
        className: "text-sm font-semibold text-slate-600",
        children: t,
      }),
      I.jsx("p", {
        className: "text-xs text-slate-400 max-w-xs leading-relaxed",
        children: r,
      }),
      n,
    ],
  });
}
function Zp({ rows: e = 3 }) {
  return I.jsx("div", {
    className: "bg-white rounded-2xl border border-slate-200 overflow-hidden",
    children: Array.from({ length: e }).map((t, r) =>
      I.jsxs(
        "div",
        {
          className:
            "flex items-center gap-4 px-4 py-3.5 border-b border-slate-100 last:border-0",
          children: [
            I.jsx(st, { className: "h-8 w-8 rounded-full" }),
            I.jsx(st, { className: "h-3.5 flex-1 max-w-[180px] rounded" }),
            I.jsx(st, { className: "h-5 w-20 rounded-full ml-auto" }),
            I.jsx(st, { className: "h-3 w-16 rounded hidden sm:block" }),
          ],
        },
        r,
      ),
    ),
  });
}
export { e5 as default };
