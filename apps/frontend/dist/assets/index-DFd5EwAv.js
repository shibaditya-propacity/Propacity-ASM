const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/growth-dashboard.page-uS4jAtoO.js",
      "assets/chip-DZUyQQjk.js",
      "assets/message-square-DLt6chiz.js",
      "assets/use-workshops-BbgTvgRk.js",
      "assets/workshop-status-badge-liLd4QTz.js",
      "assets/progress-bar-BRrdAyBl.js",
      "assets/format-C87nH917.js",
      "assets/en-US-D2VrG88w.js",
      "assets/use-prospects-2wn24cWt.js",
      "assets/prospect-stage-badge-Ct33_wOa.js",
      "assets/growth-workshops.page-Ba2QkOGL.js",
      "assets/growth-workshop-detail.page-DjaFKRVR.js",
      "assets/empty-state-D65d0flt.js",
      "assets/prospect.schema-uVEiduuJ.js",
      "assets/arrow-left-oXnvVzLc.js",
      "assets/growth-prospects.page-DXfD4O4L.js",
      "assets/growth-prospect-detail.page-BJThbLhq.js",
      "assets/growth-brand-audits.page-CKVgE5U9.js",
      "assets/audit-status-badge-C_K2AbwB.js",
      "assets/growth-brand-audit-detail.page-DXk-t-t3.js",
      "assets/chevron-down-qwNovDle.js",
      "assets/signin.page-BMwRvM31.js",
      "assets/password-input-BeMH8qwj.js",
      "assets/signup.page-D_VVIbZL.js",
    ]),
) => i.map((i) => d[i]);
var Mp = (e) => {
  throw TypeError(e);
};
var fc = (e, t, n) => t.has(e) || Mp("Cannot " + n);
var D = (e, t, n) => (
    fc(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  me = (e, t, n) =>
    t.has(e)
      ? Mp("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  se = (e, t, n, r) => (
    fc(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  Ge = (e, t, n) => (fc(e, t, "access private method"), n);
var nl = (e, t, n, r) => ({
  set _(i) {
    se(e, t, i, n);
  },
  get _() {
    return D(e, t, r);
  },
});
function gv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var SM =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function vv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xv = { exports: {} },
  Lu = {},
  wv = { exports: {} },
  xe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jo = Symbol.for("react.element"),
  oS = Symbol.for("react.portal"),
  lS = Symbol.for("react.fragment"),
  uS = Symbol.for("react.strict_mode"),
  cS = Symbol.for("react.profiler"),
  dS = Symbol.for("react.provider"),
  fS = Symbol.for("react.context"),
  hS = Symbol.for("react.forward_ref"),
  pS = Symbol.for("react.suspense"),
  mS = Symbol.for("react.memo"),
  yS = Symbol.for("react.lazy"),
  Lp = Symbol.iterator;
function gS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lp && e[Lp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kv = Object.assign,
  _v = {};
function sa(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = _v),
    (this.updater = n || Sv));
}
sa.prototype.isReactComponent = {};
sa.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sa.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Cv() {}
Cv.prototype = sa.prototype;
function jf(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = _v),
    (this.updater = n || Sv));
}
var Vf = (jf.prototype = new Cv());
Vf.constructor = jf;
kv(Vf, sa.prototype);
Vf.isPureReactComponent = !0;
var Op = Array.isArray,
  Pv = Object.prototype.hasOwnProperty,
  Ff = { current: null },
  Ev = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tv(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Pv.call(t, r) && !Ev.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var l = Array(o), u = 0; u < o; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
  return {
    $$typeof: jo,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: Ff.current,
  };
}
function vS(e, t) {
  return {
    $$typeof: jo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function If(e) {
  return typeof e == "object" && e !== null && e.$$typeof === jo;
}
function xS(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Np = /\/+/g;
function hc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? xS("" + e.key)
    : t.toString(36);
}
function Tl(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case jo:
          case oS:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + hc(a, 0) : r),
      Op(i)
        ? ((n = ""),
          e != null && (n = e.replace(Np, "$&/") + "/"),
          Tl(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (If(i) &&
            (i = vS(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Np, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Op(e)))
    for (var o = 0; o < e.length; o++) {
      s = e[o];
      var l = r + hc(s, o);
      a += Tl(s, t, n, l, i);
    }
  else if (((l = gS(e)), typeof l == "function"))
    for (e = l.call(e), o = 0; !(s = e.next()).done; )
      ((s = s.value), (l = r + hc(s, o++)), (a += Tl(s, t, n, l, i)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return a;
}
function rl(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Tl(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function wS(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Bt = { current: null },
  Rl = { transition: null },
  SS = {
    ReactCurrentDispatcher: Bt,
    ReactCurrentBatchConfig: Rl,
    ReactCurrentOwner: Ff,
  };
function Rv() {
  throw Error("act(...) is not supported in production builds of React.");
}
xe.Children = {
  map: rl,
  forEach: function (e, t, n) {
    rl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      rl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      rl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!If(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
xe.Component = sa;
xe.Fragment = lS;
xe.Profiler = cS;
xe.PureComponent = jf;
xe.StrictMode = uS;
xe.Suspense = pS;
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = SS;
xe.act = Rv;
xe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = kv({}, e.props),
    i = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = Ff.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (l in t)
      Pv.call(t, l) &&
        !Ev.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && o !== void 0 ? o[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    o = Array(l);
    for (var u = 0; u < l; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: jo, type: e.type, key: i, ref: s, props: r, _owner: a };
};
xe.createContext = function (e) {
  return (
    (e = {
      $$typeof: fS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dS, _context: e }),
    (e.Consumer = e)
  );
};
xe.createElement = Tv;
xe.createFactory = function (e) {
  var t = Tv.bind(null, e);
  return ((t.type = e), t);
};
xe.createRef = function () {
  return { current: null };
};
xe.forwardRef = function (e) {
  return { $$typeof: hS, render: e };
};
xe.isValidElement = If;
xe.lazy = function (e) {
  return { $$typeof: yS, _payload: { _status: -1, _result: e }, _init: wS };
};
xe.memo = function (e, t) {
  return { $$typeof: mS, type: e, compare: t === void 0 ? null : t };
};
xe.startTransition = function (e) {
  var t = Rl.transition;
  Rl.transition = {};
  try {
    e();
  } finally {
    Rl.transition = t;
  }
};
xe.unstable_act = Rv;
xe.useCallback = function (e, t) {
  return Bt.current.useCallback(e, t);
};
xe.useContext = function (e) {
  return Bt.current.useContext(e);
};
xe.useDebugValue = function () {};
xe.useDeferredValue = function (e) {
  return Bt.current.useDeferredValue(e);
};
xe.useEffect = function (e, t) {
  return Bt.current.useEffect(e, t);
};
xe.useId = function () {
  return Bt.current.useId();
};
xe.useImperativeHandle = function (e, t, n) {
  return Bt.current.useImperativeHandle(e, t, n);
};
xe.useInsertionEffect = function (e, t) {
  return Bt.current.useInsertionEffect(e, t);
};
xe.useLayoutEffect = function (e, t) {
  return Bt.current.useLayoutEffect(e, t);
};
xe.useMemo = function (e, t) {
  return Bt.current.useMemo(e, t);
};
xe.useReducer = function (e, t, n) {
  return Bt.current.useReducer(e, t, n);
};
xe.useRef = function (e) {
  return Bt.current.useRef(e);
};
xe.useState = function (e) {
  return Bt.current.useState(e);
};
xe.useSyncExternalStore = function (e, t, n) {
  return Bt.current.useSyncExternalStore(e, t, n);
};
xe.useTransition = function () {
  return Bt.current.useTransition();
};
xe.version = "18.3.1";
wv.exports = xe;
var _ = wv.exports;
const St = vv(_),
  kS = gv({ __proto__: null, default: St }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _S = _,
  CS = Symbol.for("react.element"),
  PS = Symbol.for("react.fragment"),
  ES = Object.prototype.hasOwnProperty,
  TS = _S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  RS = { key: !0, ref: !0, __self: !0, __source: !0 };
function Av(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref));
  for (r in t) ES.call(t, r) && !RS.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: CS,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: TS.current,
  };
}
Lu.Fragment = PS;
Lu.jsx = Av;
Lu.jsxs = Av;
xv.exports = Lu;
var E = xv.exports,
  ad = {},
  bv = { exports: {} },
  un = {},
  Dv = { exports: {} },
  Mv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, te) {
    var ie = N.length;
    N.push(te);
    e: for (; 0 < ie; ) {
      var Ee = (ie - 1) >>> 1,
        Te = N[Ee];
      if (0 < i(Te, te)) ((N[Ee] = te), (N[ie] = Te), (ie = Ee));
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var te = N[0],
      ie = N.pop();
    if (ie !== te) {
      N[0] = ie;
      e: for (var Ee = 0, Te = N.length, Vt = Te >>> 1; Ee < Vt; ) {
        var Et = 2 * (Ee + 1) - 1,
          dt = N[Et],
          ft = Et + 1,
          gt = N[ft];
        if (0 > i(dt, ie))
          ft < Te && 0 > i(gt, dt)
            ? ((N[Ee] = gt), (N[ft] = ie), (Ee = ft))
            : ((N[Ee] = dt), (N[Et] = ie), (Ee = Et));
        else if (ft < Te && 0 > i(gt, ie))
          ((N[Ee] = gt), (N[ft] = ie), (Ee = ft));
        else break e;
      }
    }
    return te;
  }
  function i(N, te) {
    var ie = N.sortIndex - te.sortIndex;
    return ie !== 0 ? ie : N.id - te.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    p = !1,
    v = !1,
    g = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(N) {
    for (var te = n(u); te !== null; ) {
      if (te.callback === null) r(u);
      else if (te.startTime <= N)
        (r(u), (te.sortIndex = te.expirationTime), t(l, te));
      else break;
      te = n(u);
    }
  }
  function w(N) {
    if (((g = !1), y(N), !v))
      if (n(l) !== null) ((v = !0), nt(C));
      else {
        var te = n(u);
        te !== null && we(w, te.startTime - N);
      }
  }
  function C(N, te) {
    ((v = !1), g && ((g = !1), m(A), (A = -1)), (p = !0));
    var ie = f;
    try {
      for (
        y(te), d = n(l);
        d !== null && (!(d.expirationTime > te) || (N && !ue()));
      ) {
        var Ee = d.callback;
        if (typeof Ee == "function") {
          ((d.callback = null), (f = d.priorityLevel));
          var Te = Ee(d.expirationTime <= te);
          ((te = e.unstable_now()),
            typeof Te == "function" ? (d.callback = Te) : d === n(l) && r(l),
            y(te));
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Vt = !0;
      else {
        var Et = n(u);
        (Et !== null && we(w, Et.startTime - te), (Vt = !1));
      }
      return Vt;
    } finally {
      ((d = null), (f = ie), (p = !1));
    }
  }
  var L = !1,
    S = null,
    A = -1,
    F = 5,
    O = -1;
  function ue() {
    return !(e.unstable_now() - O < F);
  }
  function G() {
    if (S !== null) {
      var N = e.unstable_now();
      O = N;
      var te = !0;
      try {
        te = S(!0, N);
      } finally {
        te ? ae() : ((L = !1), (S = null));
      }
    } else L = !1;
  }
  var ae;
  if (typeof h == "function")
    ae = function () {
      h(G);
    };
  else if (typeof MessageChannel < "u") {
    var le = new MessageChannel(),
      Ae = le.port2;
    ((le.port1.onmessage = G),
      (ae = function () {
        Ae.postMessage(null);
      }));
  } else
    ae = function () {
      P(G, 0);
    };
  function nt(N) {
    ((S = N), L || ((L = !0), ae()));
  }
  function we(N, te) {
    A = P(function () {
      N(e.unstable_now());
    }, te);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || p || ((v = !0), nt(C));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (F = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (N) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = f;
      }
      var ie = f;
      f = te;
      try {
        return N();
      } finally {
        f = ie;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, te) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var ie = f;
      f = N;
      try {
        return te();
      } finally {
        f = ie;
      }
    }),
    (e.unstable_scheduleCallback = function (N, te, ie) {
      var Ee = e.unstable_now();
      switch (
        (typeof ie == "object" && ie !== null
          ? ((ie = ie.delay),
            (ie = typeof ie == "number" && 0 < ie ? Ee + ie : Ee))
          : (ie = Ee),
        N)
      ) {
        case 1:
          var Te = -1;
          break;
        case 2:
          Te = 250;
          break;
        case 5:
          Te = 1073741823;
          break;
        case 4:
          Te = 1e4;
          break;
        default:
          Te = 5e3;
      }
      return (
        (Te = ie + Te),
        (N = {
          id: c++,
          callback: te,
          priorityLevel: N,
          startTime: ie,
          expirationTime: Te,
          sortIndex: -1,
        }),
        ie > Ee
          ? ((N.sortIndex = ie),
            t(u, N),
            n(l) === null &&
              N === n(u) &&
              (g ? (m(A), (A = -1)) : (g = !0), we(w, ie - Ee)))
          : ((N.sortIndex = Te), t(l, N), v || p || ((v = !0), nt(C))),
        N
      );
    }),
    (e.unstable_shouldYield = ue),
    (e.unstable_wrapCallback = function (N) {
      var te = f;
      return function () {
        var ie = f;
        f = te;
        try {
          return N.apply(this, arguments);
        } finally {
          f = ie;
        }
      };
    }));
})(Mv);
Dv.exports = Mv;
var AS = Dv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bS = _,
  an = AS;
function V(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Lv = new Set(),
  io = {};
function Ki(e, t) {
  (Bs(e, t), Bs(e + "Capture", t));
}
function Bs(e, t) {
  for (io[e] = t, e = 0; e < t.length; e++) Lv.add(t[e]);
}
var pr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  od = Object.prototype.hasOwnProperty,
  DS =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  jp = {},
  Vp = {};
function MS(e) {
  return od.call(Vp, e)
    ? !0
    : od.call(jp, e)
      ? !1
      : DS.test(e)
        ? (Vp[e] = !0)
        : ((jp[e] = !0), !1);
}
function LS(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function OS(e, t, n, r) {
  if (t === null || typeof t > "u" || LS(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $t(e, t, n, r, i, s, a) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a));
}
var Pt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Pt[e] = new $t(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Pt[t] = new $t(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Pt[e] = new $t(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Pt[e] = new $t(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Pt[e] = new $t(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Pt[e] = new $t(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Pt[e] = new $t(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Pt[e] = new $t(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Pt[e] = new $t(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Uf = /[\-:]([a-z])/g;
function zf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Uf, zf);
    Pt[t] = new $t(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Uf, zf);
    Pt[t] = new $t(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Uf, zf);
  Pt[t] = new $t(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Pt[e] = new $t(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pt.xlinkHref = new $t(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Pt[e] = new $t(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bf(e, t, n, r) {
  var i = Pt.hasOwnProperty(t) ? Pt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (OS(t, n, i, r) && (n = null),
    r || i === null
      ? MS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Sr = bS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  il = Symbol.for("react.element"),
  cs = Symbol.for("react.portal"),
  ds = Symbol.for("react.fragment"),
  $f = Symbol.for("react.strict_mode"),
  ld = Symbol.for("react.profiler"),
  Ov = Symbol.for("react.provider"),
  Nv = Symbol.for("react.context"),
  Wf = Symbol.for("react.forward_ref"),
  ud = Symbol.for("react.suspense"),
  cd = Symbol.for("react.suspense_list"),
  Hf = Symbol.for("react.memo"),
  Ar = Symbol.for("react.lazy"),
  jv = Symbol.for("react.offscreen"),
  Fp = Symbol.iterator;
function xa(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fp && e[Fp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ke = Object.assign,
  pc;
function La(e) {
  if (pc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      pc = (t && t[1]) || "";
    }
  return (
    `
` +
    pc +
    e
  );
}
var mc = !1;
function yc(e, t) {
  if (!e || mc) return "";
  mc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          a = i.length - 1,
          o = s.length - 1;
        1 <= a && 0 <= o && i[a] !== s[o];
      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (i[a] !== s[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || i[a] !== s[o])) {
                var l =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    ((mc = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? La(e) : "";
}
function NS(e) {
  switch (e.tag) {
    case 5:
      return La(e.type);
    case 16:
      return La("Lazy");
    case 13:
      return La("Suspense");
    case 19:
      return La("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = yc(e.type, !1)), e);
    case 11:
      return ((e = yc(e.type.render, !1)), e);
    case 1:
      return ((e = yc(e.type, !0)), e);
    default:
      return "";
  }
}
function dd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ds:
      return "Fragment";
    case cs:
      return "Portal";
    case ld:
      return "Profiler";
    case $f:
      return "StrictMode";
    case ud:
      return "Suspense";
    case cd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Nv:
        return (e.displayName || "Context") + ".Consumer";
      case Ov:
        return (e._context.displayName || "Context") + ".Provider";
      case Wf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Hf:
        return (
          (t = e.displayName || null),
          t !== null ? t : dd(e.type) || "Memo"
        );
      case Ar:
        ((t = e._payload), (e = e._init));
        try {
          return dd(e(t));
        } catch {}
    }
  return null;
}
function jS(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return dd(t);
    case 8:
      return t === $f ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Jr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Vv(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function VS(e) {
  var t = Vv(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          ((r = "" + a), s.call(this, a));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function sl(e) {
  e._valueTracker || (e._valueTracker = VS(e));
}
function Fv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Vv(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fd(e, t) {
  var n = t.checked;
  return Ke({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ip(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Jr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Iv(e, t) {
  ((t = t.checked), t != null && Bf(e, "checked", t, !1));
}
function hd(e, t) {
  Iv(e, t);
  var n = Jr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? pd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && pd(e, t.type, Jr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Up(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function pd(e, t, n) {
  (t !== "number" || Wl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Oa = Array.isArray;
function Ts(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Jr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function md(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return Ke({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function zp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(V(92));
      if (Oa(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Jr(n) };
}
function Uv(e, t) {
  var n = Jr(t.value),
    r = Jr(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Bp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? zv(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var al,
  Bv = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        al = al || document.createElement("div"),
          al.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = al.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function so(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $a = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  FS = ["Webkit", "ms", "Moz", "O"];
Object.keys($a).forEach(function (e) {
  FS.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($a[t] = $a[e]));
  });
});
function $v(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($a.hasOwnProperty(e) && $a[e])
      ? ("" + t).trim()
      : t + "px";
}
function Wv(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = $v(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var IS = Ke(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function gd(e, t) {
  if (t) {
    if (IS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function vd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var xd = null;
function Kf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var wd = null,
  Rs = null,
  As = null;
function $p(e) {
  if ((e = Io(e))) {
    if (typeof wd != "function") throw Error(V(280));
    var t = e.stateNode;
    t && ((t = Fu(t)), wd(e.stateNode, e.type, t));
  }
}
function Hv(e) {
  Rs ? (As ? As.push(e) : (As = [e])) : (Rs = e);
}
function Kv() {
  if (Rs) {
    var e = Rs,
      t = As;
    if (((As = Rs = null), $p(e), t)) for (e = 0; e < t.length; e++) $p(t[e]);
  }
}
function Zv(e, t) {
  return e(t);
}
function Qv() {}
var gc = !1;
function Gv(e, t, n) {
  if (gc) return e(t, n);
  gc = !0;
  try {
    return Zv(e, t, n);
  } finally {
    ((gc = !1), (Rs !== null || As !== null) && (Qv(), Kv()));
  }
}
function ao(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(V(231, t, typeof n));
  return n;
}
var Sd = !1;
if (pr)
  try {
    var wa = {};
    (Object.defineProperty(wa, "passive", {
      get: function () {
        Sd = !0;
      },
    }),
      window.addEventListener("test", wa, wa),
      window.removeEventListener("test", wa, wa));
  } catch {
    Sd = !1;
  }
function US(e, t, n, r, i, s, a, o, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Wa = !1,
  Hl = null,
  Kl = !1,
  kd = null,
  zS = {
    onError: function (e) {
      ((Wa = !0), (Hl = e));
    },
  };
function BS(e, t, n, r, i, s, a, o, l) {
  ((Wa = !1), (Hl = null), US.apply(zS, arguments));
}
function $S(e, t, n, r, i, s, a, o, l) {
  if ((BS.apply(this, arguments), Wa)) {
    if (Wa) {
      var u = Hl;
      ((Wa = !1), (Hl = null));
    } else throw Error(V(198));
    Kl || ((Kl = !0), (kd = u));
  }
}
function Zi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function qv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wp(e) {
  if (Zi(e) !== e) throw Error(V(188));
}
function WS(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Zi(e)), t === null)) throw Error(V(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return (Wp(i), e);
        if (s === r) return (Wp(i), t);
        s = s.sibling;
      }
      throw Error(V(188));
    }
    if (n.return !== r.return) ((n = i), (r = s));
    else {
      for (var a = !1, o = i.child; o; ) {
        if (o === n) {
          ((a = !0), (n = i), (r = s));
          break;
        }
        if (o === r) {
          ((a = !0), (r = i), (n = s));
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = s.child; o; ) {
          if (o === n) {
            ((a = !0), (n = s), (r = i));
            break;
          }
          if (o === r) {
            ((a = !0), (r = s), (n = i));
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(V(189));
      }
    }
    if (n.alternate !== r) throw Error(V(190));
  }
  if (n.tag !== 3) throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function Yv(e) {
  return ((e = WS(e)), e !== null ? Xv(e) : null);
}
function Xv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Xv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jv = an.unstable_scheduleCallback,
  Hp = an.unstable_cancelCallback,
  HS = an.unstable_shouldYield,
  KS = an.unstable_requestPaint,
  tt = an.unstable_now,
  ZS = an.unstable_getCurrentPriorityLevel,
  Zf = an.unstable_ImmediatePriority,
  e0 = an.unstable_UserBlockingPriority,
  Zl = an.unstable_NormalPriority,
  QS = an.unstable_LowPriority,
  t0 = an.unstable_IdlePriority,
  Ou = null,
  Zn = null;
function GS(e) {
  if (Zn && typeof Zn.onCommitFiberRoot == "function")
    try {
      Zn.onCommitFiberRoot(Ou, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ln = Math.clz32 ? Math.clz32 : XS,
  qS = Math.log,
  YS = Math.LN2;
function XS(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((qS(e) / YS) | 0)) | 0);
}
var ol = 64,
  ll = 4194304;
function Na(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~i;
    o !== 0 ? (r = Na(o)) : ((s &= a), s !== 0 && (r = Na(s)));
  } else ((a = n & ~i), a !== 0 ? (r = Na(a)) : s !== 0 && (r = Na(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Ln(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function JS(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ek(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var a = 31 - Ln(s),
      o = 1 << a,
      l = i[a];
    (l === -1
      ? (!(o & n) || o & r) && (i[a] = JS(o, t))
      : l <= t && (e.expiredLanes |= o),
      (s &= ~o));
  }
}
function _d(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function n0() {
  var e = ol;
  return ((ol <<= 1), !(ol & 4194240) && (ol = 64), e);
}
function vc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vo(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ln(t)),
    (e[t] = n));
}
function tk(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ln(n),
      s = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s));
  }
}
function Qf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ln(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var De = 0;
function r0(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var i0,
  Gf,
  s0,
  a0,
  o0,
  Cd = !1,
  ul = [],
  Wr = null,
  Hr = null,
  Kr = null,
  oo = new Map(),
  lo = new Map(),
  Mr = [],
  nk =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Kp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wr = null;
      break;
    case "dragenter":
    case "dragleave":
      Hr = null;
      break;
    case "mouseover":
    case "mouseout":
      Kr = null;
      break;
    case "pointerover":
    case "pointerout":
      oo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      lo.delete(t.pointerId);
  }
}
function Sa(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Io(t)), t !== null && Gf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function rk(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((Wr = Sa(Wr, e, t, n, r, i)), !0);
    case "dragenter":
      return ((Hr = Sa(Hr, e, t, n, r, i)), !0);
    case "mouseover":
      return ((Kr = Sa(Kr, e, t, n, r, i)), !0);
    case "pointerover":
      var s = i.pointerId;
      return (oo.set(s, Sa(oo.get(s) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        lo.set(s, Sa(lo.get(s) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function l0(e) {
  var t = wi(e.target);
  if (t !== null) {
    var n = Zi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = qv(n)), t !== null)) {
          ((e.blockedOn = t),
            o0(e.priority, function () {
              s0(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Al(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Pd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((xd = r), n.target.dispatchEvent(r), (xd = null));
    } else return ((t = Io(n)), t !== null && Gf(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Zp(e, t, n) {
  Al(e) && n.delete(t);
}
function ik() {
  ((Cd = !1),
    Wr !== null && Al(Wr) && (Wr = null),
    Hr !== null && Al(Hr) && (Hr = null),
    Kr !== null && Al(Kr) && (Kr = null),
    oo.forEach(Zp),
    lo.forEach(Zp));
}
function ka(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Cd ||
      ((Cd = !0),
      an.unstable_scheduleCallback(an.unstable_NormalPriority, ik)));
}
function uo(e) {
  function t(i) {
    return ka(i, e);
  }
  if (0 < ul.length) {
    ka(ul[0], e);
    for (var n = 1; n < ul.length; n++) {
      var r = ul[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wr !== null && ka(Wr, e),
      Hr !== null && ka(Hr, e),
      Kr !== null && ka(Kr, e),
      oo.forEach(t),
      lo.forEach(t),
      n = 0;
    n < Mr.length;
    n++
  )
    ((r = Mr[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Mr.length && ((n = Mr[0]), n.blockedOn === null); )
    (l0(n), n.blockedOn === null && Mr.shift());
}
var bs = Sr.ReactCurrentBatchConfig,
  Gl = !0;
function sk(e, t, n, r) {
  var i = De,
    s = bs.transition;
  bs.transition = null;
  try {
    ((De = 1), qf(e, t, n, r));
  } finally {
    ((De = i), (bs.transition = s));
  }
}
function ak(e, t, n, r) {
  var i = De,
    s = bs.transition;
  bs.transition = null;
  try {
    ((De = 4), qf(e, t, n, r));
  } finally {
    ((De = i), (bs.transition = s));
  }
}
function qf(e, t, n, r) {
  if (Gl) {
    var i = Pd(e, t, n, r);
    if (i === null) (Rc(e, t, r, ql, n), Kp(e, r));
    else if (rk(i, e, t, n, r)) r.stopPropagation();
    else if ((Kp(e, r), t & 4 && -1 < nk.indexOf(e))) {
      for (; i !== null; ) {
        var s = Io(i);
        if (
          (s !== null && i0(s),
          (s = Pd(e, t, n, r)),
          s === null && Rc(e, t, r, ql, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Rc(e, t, r, null, n);
  }
}
var ql = null;
function Pd(e, t, n, r) {
  if (((ql = null), (e = Kf(r)), (e = wi(e)), e !== null))
    if (((t = Zi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = qv(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ql = e), null);
}
function u0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ZS()) {
        case Zf:
          return 1;
        case e0:
          return 4;
        case Zl:
        case QS:
          return 16;
        case t0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zr = null,
  Yf = null,
  bl = null;
function c0() {
  if (bl) return bl;
  var e,
    t = Yf,
    n = t.length,
    r,
    i = "value" in zr ? zr.value : zr.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[s - r]; r++);
  return (bl = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Dl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function cl() {
  return !0;
}
function Qp() {
  return !1;
}
function cn(e) {
  function t(n, r, i, s, a) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null));
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(s) : s[o]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? cl
        : Qp),
      (this.isPropagationStopped = Qp),
      this
    );
  }
  return (
    Ke(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = cl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = cl));
      },
      persist: function () {},
      isPersistent: cl,
    }),
    t
  );
}
var aa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xf = cn(aa),
  Fo = Ke({}, aa, { view: 0, detail: 0 }),
  ok = cn(Fo),
  xc,
  wc,
  _a,
  Nu = Ke({}, Fo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Jf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _a &&
            (_a && e.type === "mousemove"
              ? ((xc = e.screenX - _a.screenX), (wc = e.screenY - _a.screenY))
              : (wc = xc = 0),
            (_a = e)),
          xc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : wc;
    },
  }),
  Gp = cn(Nu),
  lk = Ke({}, Nu, { dataTransfer: 0 }),
  uk = cn(lk),
  ck = Ke({}, Fo, { relatedTarget: 0 }),
  Sc = cn(ck),
  dk = Ke({}, aa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fk = cn(dk),
  hk = Ke({}, aa, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pk = cn(hk),
  mk = Ke({}, aa, { data: 0 }),
  qp = cn(mk),
  yk = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  gk = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  vk = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function xk(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vk[e]) ? !!t[e] : !1;
}
function Jf() {
  return xk;
}
var wk = Ke({}, Fo, {
    key: function (e) {
      if (e.key) {
        var t = yk[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Dl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? gk[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Jf,
    charCode: function (e) {
      return e.type === "keypress" ? Dl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Dl(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Sk = cn(wk),
  kk = Ke({}, Nu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Yp = cn(kk),
  _k = Ke({}, Fo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jf,
  }),
  Ck = cn(_k),
  Pk = Ke({}, aa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ek = cn(Pk),
  Tk = Ke({}, Nu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Rk = cn(Tk),
  Ak = [9, 13, 27, 32],
  eh = pr && "CompositionEvent" in window,
  Ha = null;
pr && "documentMode" in document && (Ha = document.documentMode);
var bk = pr && "TextEvent" in window && !Ha,
  d0 = pr && (!eh || (Ha && 8 < Ha && 11 >= Ha)),
  Xp = " ",
  Jp = !1;
function f0(e, t) {
  switch (e) {
    case "keyup":
      return Ak.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function h0(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var fs = !1;
function Dk(e, t) {
  switch (e) {
    case "compositionend":
      return h0(t);
    case "keypress":
      return t.which !== 32 ? null : ((Jp = !0), Xp);
    case "textInput":
      return ((e = t.data), e === Xp && Jp ? null : e);
    default:
      return null;
  }
}
function Mk(e, t) {
  if (fs)
    return e === "compositionend" || (!eh && f0(e, t))
      ? ((e = c0()), (bl = Yf = zr = null), (fs = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return d0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Lk = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function em(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Lk[e.type] : t === "textarea";
}
function p0(e, t, n, r) {
  (Hv(r),
    (t = Yl(t, "onChange")),
    0 < t.length &&
      ((n = new Xf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Ka = null,
  co = null;
function Ok(e) {
  P0(e, 0);
}
function ju(e) {
  var t = ms(e);
  if (Fv(t)) return e;
}
function Nk(e, t) {
  if (e === "change") return t;
}
var m0 = !1;
if (pr) {
  var kc;
  if (pr) {
    var _c = "oninput" in document;
    if (!_c) {
      var tm = document.createElement("div");
      (tm.setAttribute("oninput", "return;"),
        (_c = typeof tm.oninput == "function"));
    }
    kc = _c;
  } else kc = !1;
  m0 = kc && (!document.documentMode || 9 < document.documentMode);
}
function nm() {
  Ka && (Ka.detachEvent("onpropertychange", y0), (co = Ka = null));
}
function y0(e) {
  if (e.propertyName === "value" && ju(co)) {
    var t = [];
    (p0(t, co, e, Kf(e)), Gv(Ok, t));
  }
}
function jk(e, t, n) {
  e === "focusin"
    ? (nm(), (Ka = t), (co = n), Ka.attachEvent("onpropertychange", y0))
    : e === "focusout" && nm();
}
function Vk(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ju(co);
}
function Fk(e, t) {
  if (e === "click") return ju(t);
}
function Ik(e, t) {
  if (e === "input" || e === "change") return ju(t);
}
function Uk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Nn = typeof Object.is == "function" ? Object.is : Uk;
function fo(e, t) {
  if (Nn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!od.call(t, i) || !Nn(e[i], t[i])) return !1;
  }
  return !0;
}
function rm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function im(e, t) {
  var n = rm(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = rm(n);
  }
}
function g0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? g0(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function v0() {
  for (var e = window, t = Wl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wl(e.document);
  }
  return t;
}
function th(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function zk(e) {
  var t = v0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    g0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && th(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        ((r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = im(n, s)));
        var a = im(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Bk = pr && "documentMode" in document && 11 >= document.documentMode,
  hs = null,
  Ed = null,
  Za = null,
  Td = !1;
function sm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Td ||
    hs == null ||
    hs !== Wl(r) ||
    ((r = hs),
    "selectionStart" in r && th(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Za && fo(Za, r)) ||
      ((Za = r),
      (r = Yl(Ed, "onSelect")),
      0 < r.length &&
        ((t = new Xf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = hs))));
}
function dl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ps = {
    animationend: dl("Animation", "AnimationEnd"),
    animationiteration: dl("Animation", "AnimationIteration"),
    animationstart: dl("Animation", "AnimationStart"),
    transitionend: dl("Transition", "TransitionEnd"),
  },
  Cc = {},
  x0 = {};
pr &&
  ((x0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ps.animationend.animation,
    delete ps.animationiteration.animation,
    delete ps.animationstart.animation),
  "TransitionEvent" in window || delete ps.transitionend.transition);
function Vu(e) {
  if (Cc[e]) return Cc[e];
  if (!ps[e]) return e;
  var t = ps[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in x0) return (Cc[e] = t[n]);
  return e;
}
var w0 = Vu("animationend"),
  S0 = Vu("animationiteration"),
  k0 = Vu("animationstart"),
  _0 = Vu("transitionend"),
  C0 = new Map(),
  am =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function si(e, t) {
  (C0.set(e, t), Ki(t, [e]));
}
for (var Pc = 0; Pc < am.length; Pc++) {
  var Ec = am[Pc],
    $k = Ec.toLowerCase(),
    Wk = Ec[0].toUpperCase() + Ec.slice(1);
  si($k, "on" + Wk);
}
si(w0, "onAnimationEnd");
si(S0, "onAnimationIteration");
si(k0, "onAnimationStart");
si("dblclick", "onDoubleClick");
si("focusin", "onFocus");
si("focusout", "onBlur");
si(_0, "onTransitionEnd");
Bs("onMouseEnter", ["mouseout", "mouseover"]);
Bs("onMouseLeave", ["mouseout", "mouseover"]);
Bs("onPointerEnter", ["pointerout", "pointerover"]);
Bs("onPointerLeave", ["pointerout", "pointerover"]);
Ki(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Ki(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Ki("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ki(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Ki(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Ki(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ja =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Hk = new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));
function om(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), $S(r, t, void 0, e), (e.currentTarget = null));
}
function P0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var o = r[a],
            l = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), l !== s && i.isPropagationStopped())) break e;
          (om(i, o, u), (s = l));
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((o = r[a]),
            (l = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          (om(i, o, u), (s = l));
        }
    }
  }
  if (Kl) throw ((e = kd), (Kl = !1), (kd = null), e);
}
function je(e, t) {
  var n = t[Md];
  n === void 0 && (n = t[Md] = new Set());
  var r = e + "__bubble";
  n.has(r) || (E0(t, e, 2, !1), n.add(r));
}
function Tc(e, t, n) {
  var r = 0;
  (t && (r |= 4), E0(n, e, r, t));
}
var fl = "_reactListening" + Math.random().toString(36).slice(2);
function ho(e) {
  if (!e[fl]) {
    ((e[fl] = !0),
      Lv.forEach(function (n) {
        n !== "selectionchange" && (Hk.has(n) || Tc(n, !1, e), Tc(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fl] || ((t[fl] = !0), Tc("selectionchange", !1, t));
  }
}
function E0(e, t, n, r) {
  switch (u0(t)) {
    case 1:
      var i = sk;
      break;
    case 4:
      i = ak;
      break;
    default:
      i = qf;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !Sd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function Rc(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var o = r.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = wi(o)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = s = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  Gv(function () {
    var u = s,
      c = Kf(n),
      d = [];
    e: {
      var f = C0.get(e);
      if (f !== void 0) {
        var p = Xf,
          v = e;
        switch (e) {
          case "keypress":
            if (Dl(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = Sk;
            break;
          case "focusin":
            ((v = "focus"), (p = Sc));
            break;
          case "focusout":
            ((v = "blur"), (p = Sc));
            break;
          case "beforeblur":
          case "afterblur":
            p = Sc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Gp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = uk;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = Ck;
            break;
          case w0:
          case S0:
          case k0:
            p = fk;
            break;
          case _0:
            p = Ek;
            break;
          case "scroll":
            p = ok;
            break;
          case "wheel":
            p = Rk;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = pk;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Yp;
        }
        var g = (t & 4) !== 0,
          P = !g && e === "scroll",
          m = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var w = y.stateNode;
          if (
            (y.tag === 5 &&
              w !== null &&
              ((y = w),
              m !== null && ((w = ao(h, m)), w != null && g.push(po(h, w, y)))),
            P)
          )
            break;
          h = h.return;
        }
        0 < g.length &&
          ((f = new p(f, v, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            n !== xd &&
            (v = n.relatedTarget || n.fromElement) &&
            (wi(v) || v[mr]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          p
            ? ((v = n.relatedTarget || n.toElement),
              (p = u),
              (v = v ? wi(v) : null),
              v !== null &&
                ((P = Zi(v)), v !== P || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((p = null), (v = u)),
          p !== v)
        ) {
          if (
            ((g = Gp),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Yp),
              (w = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (P = p == null ? f : ms(p)),
            (y = v == null ? f : ms(v)),
            (f = new g(w, h + "leave", p, n, c)),
            (f.target = P),
            (f.relatedTarget = y),
            (w = null),
            wi(c) === u &&
              ((g = new g(m, h + "enter", v, n, c)),
              (g.target = y),
              (g.relatedTarget = P),
              (w = g)),
            (P = w),
            p && v)
          )
            t: {
              for (g = p, m = v, h = 0, y = g; y; y = is(y)) h++;
              for (y = 0, w = m; w; w = is(w)) y++;
              for (; 0 < h - y; ) ((g = is(g)), h--);
              for (; 0 < y - h; ) ((m = is(m)), y--);
              for (; h--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                ((g = is(g)), (m = is(m)));
              }
              g = null;
            }
          else g = null;
          (p !== null && lm(d, f, p, g, !1),
            v !== null && P !== null && lm(d, P, v, g, !0));
        }
      }
      e: {
        if (
          ((f = u ? ms(u) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var C = Nk;
        else if (em(f))
          if (m0) C = Ik;
          else {
            C = Vk;
            var L = jk;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = Fk);
        if (C && (C = C(e, u))) {
          p0(d, C, n, c);
          break e;
        }
        (L && L(e, f, u),
          e === "focusout" &&
            (L = f._wrapperState) &&
            L.controlled &&
            f.type === "number" &&
            pd(f, "number", f.value));
      }
      switch (((L = u ? ms(u) : window), e)) {
        case "focusin":
          (em(L) || L.contentEditable === "true") &&
            ((hs = L), (Ed = u), (Za = null));
          break;
        case "focusout":
          Za = Ed = hs = null;
          break;
        case "mousedown":
          Td = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Td = !1), sm(d, n, c));
          break;
        case "selectionchange":
          if (Bk) break;
        case "keydown":
        case "keyup":
          sm(d, n, c);
      }
      var S;
      if (eh)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        fs
          ? f0(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      (A &&
        (d0 &&
          n.locale !== "ko" &&
          (fs || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && fs && (S = c0())
            : ((zr = c),
              (Yf = "value" in zr ? zr.value : zr.textContent),
              (fs = !0))),
        (L = Yl(u, A)),
        0 < L.length &&
          ((A = new qp(A, e, null, n, c)),
          d.push({ event: A, listeners: L }),
          S ? (A.data = S) : ((S = h0(n)), S !== null && (A.data = S)))),
        (S = bk ? Dk(e, n) : Mk(e, n)) &&
          ((u = Yl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new qp("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = S))));
    }
    P0(d, t);
  });
}
function po(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    (i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = ao(e, n)),
      s != null && r.unshift(po(e, s, i)),
      (s = ao(e, t)),
      s != null && r.push(po(e, s, i))),
      (e = e.return));
  }
  return r;
}
function is(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function lm(e, t, n, r, i) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n,
      l = o.alternate,
      u = o.stateNode;
    if (l !== null && l === r) break;
    (o.tag === 5 &&
      u !== null &&
      ((o = u),
      i
        ? ((l = ao(n, s)), l != null && a.unshift(po(n, l, o)))
        : i || ((l = ao(n, s)), l != null && a.push(po(n, l, o)))),
      (n = n.return));
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Kk = /\r\n?/g,
  Zk = /\u0000|\uFFFD/g;
function um(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Kk,
      `
`,
    )
    .replace(Zk, "");
}
function hl(e, t, n) {
  if (((t = um(t)), um(e) !== t && n)) throw Error(V(425));
}
function Xl() {}
var Rd = null,
  Ad = null;
function bd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Dd = typeof setTimeout == "function" ? setTimeout : void 0,
  Qk = typeof clearTimeout == "function" ? clearTimeout : void 0,
  cm = typeof Promise == "function" ? Promise : void 0,
  Gk =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof cm < "u"
        ? function (e) {
            return cm.resolve(null).then(e).catch(qk);
          }
        : Dd;
function qk(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ac(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), uo(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  uo(t);
}
function Zr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function dm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var oa = Math.random().toString(36).slice(2),
  Kn = "__reactFiber$" + oa,
  mo = "__reactProps$" + oa,
  mr = "__reactContainer$" + oa,
  Md = "__reactEvents$" + oa,
  Yk = "__reactListeners$" + oa,
  Xk = "__reactHandles$" + oa;
function wi(e) {
  var t = e[Kn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mr] || n[Kn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = dm(e); e !== null; ) {
          if ((n = e[Kn])) return n;
          e = dm(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Io(e) {
  return (
    (e = e[Kn] || e[mr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ms(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function Fu(e) {
  return e[mo] || null;
}
var Ld = [],
  ys = -1;
function ai(e) {
  return { current: e };
}
function Fe(e) {
  0 > ys || ((e.current = Ld[ys]), (Ld[ys] = null), ys--);
}
function Ne(e, t) {
  (ys++, (Ld[ys] = e.current), (e.current = t));
}
var ei = {},
  jt = ai(ei),
  Qt = ai(!1),
  Ni = ei;
function $s(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ei;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Gt(e) {
  return ((e = e.childContextTypes), e != null);
}
function Jl() {
  (Fe(Qt), Fe(jt));
}
function fm(e, t, n) {
  if (jt.current !== ei) throw Error(V(168));
  (Ne(jt, t), Ne(Qt, n));
}
function T0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(V(108, jS(e) || "Unknown", i));
  return Ke({}, n, r);
}
function eu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ei),
    (Ni = jt.current),
    Ne(jt, e),
    Ne(Qt, Qt.current),
    !0
  );
}
function hm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  (n
    ? ((e = T0(e, t, Ni)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Fe(Qt),
      Fe(jt),
      Ne(jt, e))
    : Fe(Qt),
    Ne(Qt, n));
}
var nr = null,
  Iu = !1,
  bc = !1;
function R0(e) {
  nr === null ? (nr = [e]) : nr.push(e);
}
function Jk(e) {
  ((Iu = !0), R0(e));
}
function oi() {
  if (!bc && nr !== null) {
    bc = !0;
    var e = 0,
      t = De;
    try {
      var n = nr;
      for (De = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((nr = null), (Iu = !1));
    } catch (i) {
      throw (nr !== null && (nr = nr.slice(e + 1)), Jv(Zf, oi), i);
    } finally {
      ((De = t), (bc = !1));
    }
  }
  return null;
}
var gs = [],
  vs = 0,
  tu = null,
  nu = 0,
  mn = [],
  yn = 0,
  ji = null,
  ar = 1,
  or = "";
function hi(e, t) {
  ((gs[vs++] = nu), (gs[vs++] = tu), (tu = e), (nu = t));
}
function A0(e, t, n) {
  ((mn[yn++] = ar), (mn[yn++] = or), (mn[yn++] = ji), (ji = e));
  var r = ar;
  e = or;
  var i = 32 - Ln(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var s = 32 - Ln(t) + i;
  if (30 < s) {
    var a = i - (i % 5);
    ((s = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (ar = (1 << (32 - Ln(t) + i)) | (n << i) | r),
      (or = s + e));
  } else ((ar = (1 << s) | (n << i) | r), (or = e));
}
function nh(e) {
  e.return !== null && (hi(e, 1), A0(e, 1, 0));
}
function rh(e) {
  for (; e === tu; )
    ((tu = gs[--vs]), (gs[vs] = null), (nu = gs[--vs]), (gs[vs] = null));
  for (; e === ji; )
    ((ji = mn[--yn]),
      (mn[yn] = null),
      (or = mn[--yn]),
      (mn[yn] = null),
      (ar = mn[--yn]),
      (mn[yn] = null));
}
var rn = null,
  nn = null,
  Be = !1,
  Dn = null;
function b0(e, t) {
  var n = vn(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function pm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (rn = e), (nn = Zr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (rn = e), (nn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ji !== null ? { id: ar, overflow: or } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = vn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (rn = e),
            (nn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Od(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Nd(e) {
  if (Be) {
    var t = nn;
    if (t) {
      var n = t;
      if (!pm(e, t)) {
        if (Od(e)) throw Error(V(418));
        t = Zr(n.nextSibling);
        var r = rn;
        t && pm(e, t)
          ? b0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Be = !1), (rn = e));
      }
    } else {
      if (Od(e)) throw Error(V(418));
      ((e.flags = (e.flags & -4097) | 2), (Be = !1), (rn = e));
    }
  }
}
function mm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  rn = e;
}
function pl(e) {
  if (e !== rn) return !1;
  if (!Be) return (mm(e), (Be = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !bd(e.type, e.memoizedProps))),
    t && (t = nn))
  ) {
    if (Od(e)) throw (D0(), Error(V(418)));
    for (; t; ) (b0(e, t), (t = Zr(t.nextSibling)));
  }
  if ((mm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nn = Zr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      nn = null;
    }
  } else nn = rn ? Zr(e.stateNode.nextSibling) : null;
  return !0;
}
function D0() {
  for (var e = nn; e; ) e = Zr(e.nextSibling);
}
function Ws() {
  ((nn = rn = null), (Be = !1));
}
function ih(e) {
  Dn === null ? (Dn = [e]) : Dn.push(e);
}
var e_ = Sr.ReactCurrentBatchConfig;
function Ca(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(V(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(V(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var o = i.refs;
            a === null ? delete o[s] : (o[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(V(284));
    if (!n._owner) throw Error(V(290, e));
  }
  return e;
}
function ml(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      V(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function ym(e) {
  var t = e._init;
  return t(e._payload);
}
function M0(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) (t(m, h), (h = h.sibling));
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      (h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling));
    return m;
  }
  function i(m, h) {
    return ((m = Yr(m, h)), (m.index = 0), (m.sibling = null), m);
  }
  function s(m, h, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function a(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function o(m, h, y, w) {
    return h === null || h.tag !== 6
      ? ((h = Vc(y, m.mode, w)), (h.return = m), h)
      : ((h = i(h, y)), (h.return = m), h);
  }
  function l(m, h, y, w) {
    var C = y.type;
    return C === ds
      ? c(m, h, y.props.children, w, y.key)
      : h !== null &&
          (h.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Ar &&
              ym(C) === h.type))
        ? ((w = i(h, y.props)), (w.ref = Ca(m, h, y)), (w.return = m), w)
        : ((w = Fl(y.type, y.key, y.props, null, m.mode, w)),
          (w.ref = Ca(m, h, y)),
          (w.return = m),
          w);
  }
  function u(m, h, y, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = Fc(y, m.mode, w)), (h.return = m), h)
      : ((h = i(h, y.children || [])), (h.return = m), h);
  }
  function c(m, h, y, w, C) {
    return h === null || h.tag !== 7
      ? ((h = Li(y, m.mode, w, C)), (h.return = m), h)
      : ((h = i(h, y)), (h.return = m), h);
  }
  function d(m, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return ((h = Vc("" + h, m.mode, y)), (h.return = m), h);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case il:
          return (
            (y = Fl(h.type, h.key, h.props, null, m.mode, y)),
            (y.ref = Ca(m, null, h)),
            (y.return = m),
            y
          );
        case cs:
          return ((h = Fc(h, m.mode, y)), (h.return = m), h);
        case Ar:
          var w = h._init;
          return d(m, w(h._payload), y);
      }
      if (Oa(h) || xa(h))
        return ((h = Li(h, m.mode, y, null)), (h.return = m), h);
      ml(m, h);
    }
    return null;
  }
  function f(m, h, y, w) {
    var C = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : o(m, h, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case il:
          return y.key === C ? l(m, h, y, w) : null;
        case cs:
          return y.key === C ? u(m, h, y, w) : null;
        case Ar:
          return ((C = y._init), f(m, h, C(y._payload), w));
      }
      if (Oa(y) || xa(y)) return C !== null ? null : c(m, h, y, w, null);
      ml(m, y);
    }
    return null;
  }
  function p(m, h, y, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return ((m = m.get(y) || null), o(h, m, "" + w, C));
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case il:
          return (
            (m = m.get(w.key === null ? y : w.key) || null),
            l(h, m, w, C)
          );
        case cs:
          return (
            (m = m.get(w.key === null ? y : w.key) || null),
            u(h, m, w, C)
          );
        case Ar:
          var L = w._init;
          return p(m, h, y, L(w._payload), C);
      }
      if (Oa(w) || xa(w)) return ((m = m.get(y) || null), c(h, m, w, C, null));
      ml(h, w);
    }
    return null;
  }
  function v(m, h, y, w) {
    for (
      var C = null, L = null, S = h, A = (h = 0), F = null;
      S !== null && A < y.length;
      A++
    ) {
      S.index > A ? ((F = S), (S = null)) : (F = S.sibling);
      var O = f(m, S, y[A], w);
      if (O === null) {
        S === null && (S = F);
        break;
      }
      (e && S && O.alternate === null && t(m, S),
        (h = s(O, h, A)),
        L === null ? (C = O) : (L.sibling = O),
        (L = O),
        (S = F));
    }
    if (A === y.length) return (n(m, S), Be && hi(m, A), C);
    if (S === null) {
      for (; A < y.length; A++)
        ((S = d(m, y[A], w)),
          S !== null &&
            ((h = s(S, h, A)),
            L === null ? (C = S) : (L.sibling = S),
            (L = S)));
      return (Be && hi(m, A), C);
    }
    for (S = r(m, S); A < y.length; A++)
      ((F = p(S, m, A, y[A], w)),
        F !== null &&
          (e && F.alternate !== null && S.delete(F.key === null ? A : F.key),
          (h = s(F, h, A)),
          L === null ? (C = F) : (L.sibling = F),
          (L = F)));
    return (
      e &&
        S.forEach(function (ue) {
          return t(m, ue);
        }),
      Be && hi(m, A),
      C
    );
  }
  function g(m, h, y, w) {
    var C = xa(y);
    if (typeof C != "function") throw Error(V(150));
    if (((y = C.call(y)), y == null)) throw Error(V(151));
    for (
      var L = (C = null), S = h, A = (h = 0), F = null, O = y.next();
      S !== null && !O.done;
      A++, O = y.next()
    ) {
      S.index > A ? ((F = S), (S = null)) : (F = S.sibling);
      var ue = f(m, S, O.value, w);
      if (ue === null) {
        S === null && (S = F);
        break;
      }
      (e && S && ue.alternate === null && t(m, S),
        (h = s(ue, h, A)),
        L === null ? (C = ue) : (L.sibling = ue),
        (L = ue),
        (S = F));
    }
    if (O.done) return (n(m, S), Be && hi(m, A), C);
    if (S === null) {
      for (; !O.done; A++, O = y.next())
        ((O = d(m, O.value, w)),
          O !== null &&
            ((h = s(O, h, A)),
            L === null ? (C = O) : (L.sibling = O),
            (L = O)));
      return (Be && hi(m, A), C);
    }
    for (S = r(m, S); !O.done; A++, O = y.next())
      ((O = p(S, m, A, O.value, w)),
        O !== null &&
          (e && O.alternate !== null && S.delete(O.key === null ? A : O.key),
          (h = s(O, h, A)),
          L === null ? (C = O) : (L.sibling = O),
          (L = O)));
    return (
      e &&
        S.forEach(function (G) {
          return t(m, G);
        }),
      Be && hi(m, A),
      C
    );
  }
  function P(m, h, y, w) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ds &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case il:
          e: {
            for (var C = y.key, L = h; L !== null; ) {
              if (L.key === C) {
                if (((C = y.type), C === ds)) {
                  if (L.tag === 7) {
                    (n(m, L.sibling),
                      (h = i(L, y.props.children)),
                      (h.return = m),
                      (m = h));
                    break e;
                  }
                } else if (
                  L.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Ar &&
                    ym(C) === L.type)
                ) {
                  (n(m, L.sibling),
                    (h = i(L, y.props)),
                    (h.ref = Ca(m, L, y)),
                    (h.return = m),
                    (m = h));
                  break e;
                }
                n(m, L);
                break;
              } else t(m, L);
              L = L.sibling;
            }
            y.type === ds
              ? ((h = Li(y.props.children, m.mode, w, y.key)),
                (h.return = m),
                (m = h))
              : ((w = Fl(y.type, y.key, y.props, null, m.mode, w)),
                (w.ref = Ca(m, h, y)),
                (w.return = m),
                (m = w));
          }
          return a(m);
        case cs:
          e: {
            for (L = y.key; h !== null; ) {
              if (h.key === L)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  (n(m, h.sibling),
                    (h = i(h, y.children || [])),
                    (h.return = m),
                    (m = h));
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            ((h = Fc(y, m.mode, w)), (h.return = m), (m = h));
          }
          return a(m);
        case Ar:
          return ((L = y._init), P(m, h, L(y._payload), w));
      }
      if (Oa(y)) return v(m, h, y, w);
      if (xa(y)) return g(m, h, y, w);
      ml(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, y)), (h.return = m), (m = h))
          : (n(m, h), (h = Vc(y, m.mode, w)), (h.return = m), (m = h)),
        a(m))
      : n(m, h);
  }
  return P;
}
var Hs = M0(!0),
  L0 = M0(!1),
  ru = ai(null),
  iu = null,
  xs = null,
  sh = null;
function ah() {
  sh = xs = iu = null;
}
function oh(e) {
  var t = ru.current;
  (Fe(ru), (e._currentValue = t));
}
function jd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ds(e, t) {
  ((iu = e),
    (sh = xs = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Zt = !0), (e.firstContext = null)));
}
function wn(e) {
  var t = e._currentValue;
  if (sh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), xs === null)) {
      if (iu === null) throw Error(V(308));
      ((xs = e), (iu.dependencies = { lanes: 0, firstContext: e }));
    } else xs = xs.next = e;
  return t;
}
var Si = null;
function lh(e) {
  Si === null ? (Si = [e]) : Si.push(e);
}
function O0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), lh(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    yr(e, r)
  );
}
function yr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var br = !1;
function uh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function N0(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function ur(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ke & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      yr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), lh(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    yr(e, n)
  );
}
function Ml(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Qf(e, n));
  }
}
function gm(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (i = s = a) : (s = s.next = a), (n = n.next));
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function su(e, t, n, r) {
  var i = e.updateQueue;
  br = !1;
  var s = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var l = o,
      u = l.next;
    ((l.next = null), a === null ? (s = u) : (a.next = u), (a = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (o = c.lastBaseUpdate),
      o !== a &&
        (o === null ? (c.firstBaseUpdate = u) : (o.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    ((a = 0), (c = u = l = null), (o = s));
    do {
      var f = o.lane,
        p = o.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var v = e,
            g = o;
          switch (((f = t), (p = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                d = v.call(p, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (f = typeof v == "function" ? v.call(p, d, f) : v),
                f == null)
              )
                break e;
              d = Ke({}, d, f);
              break e;
            case 2:
              br = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [o]) : f.push(o));
      } else
        ((p = {
          eventTime: p,
          lane: f,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
          (a |= f));
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        ((f = o),
          (o = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((a |= i.lane), (i = i.next));
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ((Fi |= a), (e.lanes = a), (e.memoizedState = d));
  }
}
function vm(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(V(191, i));
        i.call(r);
      }
    }
}
var Uo = {},
  Qn = ai(Uo),
  yo = ai(Uo),
  go = ai(Uo);
function ki(e) {
  if (e === Uo) throw Error(V(174));
  return e;
}
function ch(e, t) {
  switch ((Ne(go, t), Ne(yo, e), Ne(Qn, Uo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yd(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = yd(t, e)));
  }
  (Fe(Qn), Ne(Qn, t));
}
function Ks() {
  (Fe(Qn), Fe(yo), Fe(go));
}
function j0(e) {
  ki(go.current);
  var t = ki(Qn.current),
    n = yd(t, e.type);
  t !== n && (Ne(yo, e), Ne(Qn, n));
}
function dh(e) {
  yo.current === e && (Fe(Qn), Fe(yo));
}
var $e = ai(0);
function au(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Dc = [];
function fh() {
  for (var e = 0; e < Dc.length; e++)
    Dc[e]._workInProgressVersionPrimary = null;
  Dc.length = 0;
}
var Ll = Sr.ReactCurrentDispatcher,
  Mc = Sr.ReactCurrentBatchConfig,
  Vi = 0,
  He = null,
  ut = null,
  mt = null,
  ou = !1,
  Qa = !1,
  vo = 0,
  t_ = 0;
function Tt() {
  throw Error(V(321));
}
function hh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Nn(e[n], t[n])) return !1;
  return !0;
}
function ph(e, t, n, r, i, s) {
  if (
    ((Vi = s),
    (He = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ll.current = e === null || e.memoizedState === null ? s_ : a_),
    (e = n(r, i)),
    Qa)
  ) {
    s = 0;
    do {
      if (((Qa = !1), (vo = 0), 25 <= s)) throw Error(V(301));
      ((s += 1),
        (mt = ut = null),
        (t.updateQueue = null),
        (Ll.current = o_),
        (e = n(r, i)));
    } while (Qa);
  }
  if (
    ((Ll.current = lu),
    (t = ut !== null && ut.next !== null),
    (Vi = 0),
    (mt = ut = He = null),
    (ou = !1),
    t)
  )
    throw Error(V(300));
  return e;
}
function mh() {
  var e = vo !== 0;
  return ((vo = 0), e);
}
function Un() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (mt === null ? (He.memoizedState = mt = e) : (mt = mt.next = e), mt);
}
function Sn() {
  if (ut === null) {
    var e = He.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ut.next;
  var t = mt === null ? He.memoizedState : mt.next;
  if (t !== null) ((mt = t), (ut = e));
  else {
    if (e === null) throw Error(V(310));
    ((ut = e),
      (e = {
        memoizedState: ut.memoizedState,
        baseState: ut.baseState,
        baseQueue: ut.baseQueue,
        queue: ut.queue,
        next: null,
      }),
      mt === null ? (He.memoizedState = mt = e) : (mt = mt.next = e));
  }
  return mt;
}
function xo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Lc(e) {
  var t = Sn(),
    n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = ut,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var a = i.next;
      ((i.next = s.next), (s.next = a));
    }
    ((r.baseQueue = i = s), (n.pending = null));
  }
  if (i !== null) {
    ((s = i.next), (r = r.baseState));
    var o = (a = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((Vi & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((o = l = d), (a = r)) : (l = l.next = d),
          (He.lanes |= c),
          (Fi |= c));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (l === null ? (a = r) : (l.next = o),
      Nn(r, t.memoizedState) || (Zt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((s = i.lane), (He.lanes |= s), (Fi |= s), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Oc(e) {
  var t = Sn(),
    n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do ((s = e(s, a.action)), (a = a.next));
    while (a !== i);
    (Nn(s, t.memoizedState) || (Zt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function V0() {}
function F0(e, t) {
  var n = He,
    r = Sn(),
    i = t(),
    s = !Nn(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Zt = !0)),
    (r = r.queue),
    yh(z0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (mt !== null && mt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      wo(9, U0.bind(null, n, r, i, t), void 0, null),
      yt === null)
    )
      throw Error(V(349));
    Vi & 30 || I0(n, t, i);
  }
  return i;
}
function I0(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = He.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (He.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function U0(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), B0(t) && $0(e));
}
function z0(e, t, n) {
  return n(function () {
    B0(t) && $0(e);
  });
}
function B0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Nn(e, n);
  } catch {
    return !0;
  }
}
function $0(e) {
  var t = yr(e, 1);
  t !== null && On(t, e, 1, -1);
}
function xm(e) {
  var t = Un();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = i_.bind(null, He, e)),
    [t.memoizedState, e]
  );
}
function wo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = He.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (He.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function W0() {
  return Sn().memoizedState;
}
function Ol(e, t, n, r) {
  var i = Un();
  ((He.flags |= e),
    (i.memoizedState = wo(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Uu(e, t, n, r) {
  var i = Sn();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ut !== null) {
    var a = ut.memoizedState;
    if (((s = a.destroy), r !== null && hh(r, a.deps))) {
      i.memoizedState = wo(t, n, s, r);
      return;
    }
  }
  ((He.flags |= e), (i.memoizedState = wo(1 | t, n, s, r)));
}
function wm(e, t) {
  return Ol(8390656, 8, e, t);
}
function yh(e, t) {
  return Uu(2048, 8, e, t);
}
function H0(e, t) {
  return Uu(4, 2, e, t);
}
function K0(e, t) {
  return Uu(4, 4, e, t);
}
function Z0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Q0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Uu(4, 4, Z0.bind(null, t, e), n)
  );
}
function gh() {}
function G0(e, t) {
  var n = Sn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function q0(e, t) {
  var n = Sn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Y0(e, t, n) {
  return Vi & 21
    ? (Nn(n, t) || ((n = n0()), (He.lanes |= n), (Fi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Zt = !0)), (e.memoizedState = n));
}
function n_(e, t) {
  var n = De;
  ((De = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Mc.transition;
  Mc.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((De = n), (Mc.transition = r));
  }
}
function X0() {
  return Sn().memoizedState;
}
function r_(e, t, n) {
  var r = qr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    J0(e))
  )
    ex(t, n);
  else if (((n = O0(e, t, n, r)), n !== null)) {
    var i = zt();
    (On(n, e, r, i), tx(n, t, r));
  }
}
function i_(e, t, n) {
  var r = qr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (J0(e)) ex(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = s(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = o), Nn(o, a))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), lh(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = O0(e, t, i, r)),
      n !== null && ((i = zt()), On(n, e, r, i), tx(n, t, r)));
  }
}
function J0(e) {
  var t = e.alternate;
  return e === He || (t !== null && t === He);
}
function ex(e, t) {
  Qa = ou = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function tx(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Qf(e, n));
  }
}
var lu = {
    readContext: wn,
    useCallback: Tt,
    useContext: Tt,
    useEffect: Tt,
    useImperativeHandle: Tt,
    useInsertionEffect: Tt,
    useLayoutEffect: Tt,
    useMemo: Tt,
    useReducer: Tt,
    useRef: Tt,
    useState: Tt,
    useDebugValue: Tt,
    useDeferredValue: Tt,
    useTransition: Tt,
    useMutableSource: Tt,
    useSyncExternalStore: Tt,
    useId: Tt,
    unstable_isNewReconciler: !1,
  },
  s_ = {
    readContext: wn,
    useCallback: function (e, t) {
      return ((Un().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: wn,
    useEffect: wm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ol(4194308, 4, Z0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ol(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ol(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Un();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Un();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = r_.bind(null, He, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Un();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: xm,
    useDebugValue: gh,
    useDeferredValue: function (e) {
      return (Un().memoizedState = e);
    },
    useTransition: function () {
      var e = xm(!1),
        t = e[0];
      return ((e = n_.bind(null, e[1])), (Un().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = He,
        i = Un();
      if (Be) {
        if (n === void 0) throw Error(V(407));
        n = n();
      } else {
        if (((n = t()), yt === null)) throw Error(V(349));
        Vi & 30 || I0(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        wm(z0.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        wo(9, U0.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Un(),
        t = yt.identifierPrefix;
      if (Be) {
        var n = or,
          r = ar;
        ((n = (r & ~(1 << (32 - Ln(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = t_++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  a_ = {
    readContext: wn,
    useCallback: G0,
    useContext: wn,
    useEffect: yh,
    useImperativeHandle: Q0,
    useInsertionEffect: H0,
    useLayoutEffect: K0,
    useMemo: q0,
    useReducer: Lc,
    useRef: W0,
    useState: function () {
      return Lc(xo);
    },
    useDebugValue: gh,
    useDeferredValue: function (e) {
      var t = Sn();
      return Y0(t, ut.memoizedState, e);
    },
    useTransition: function () {
      var e = Lc(xo)[0],
        t = Sn().memoizedState;
      return [e, t];
    },
    useMutableSource: V0,
    useSyncExternalStore: F0,
    useId: X0,
    unstable_isNewReconciler: !1,
  },
  o_ = {
    readContext: wn,
    useCallback: G0,
    useContext: wn,
    useEffect: yh,
    useImperativeHandle: Q0,
    useInsertionEffect: H0,
    useLayoutEffect: K0,
    useMemo: q0,
    useReducer: Oc,
    useRef: W0,
    useState: function () {
      return Oc(xo);
    },
    useDebugValue: gh,
    useDeferredValue: function (e) {
      var t = Sn();
      return ut === null ? (t.memoizedState = e) : Y0(t, ut.memoizedState, e);
    },
    useTransition: function () {
      var e = Oc(xo)[0],
        t = Sn().memoizedState;
      return [e, t];
    },
    useMutableSource: V0,
    useSyncExternalStore: F0,
    useId: X0,
    unstable_isNewReconciler: !1,
  };
function Tn(e, t) {
  if (e && e.defaultProps) {
    ((t = Ke({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Vd(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ke({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var zu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Zi(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = zt(),
      i = qr(e),
      s = ur(r, i);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Qr(e, s, i)),
      t !== null && (On(t, e, i, r), Ml(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = zt(),
      i = qr(e),
      s = ur(r, i);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Qr(e, s, i)),
      t !== null && (On(t, e, i, r), Ml(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = zt(),
      r = qr(e),
      i = ur(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = Qr(e, i, r)),
      t !== null && (On(t, e, r, n), Ml(t, e, r)));
  },
};
function Sm(e, t, n, r, i, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !fo(n, r) || !fo(i, s)
        : !0
  );
}
function nx(e, t, n) {
  var r = !1,
    i = ei,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = wn(s))
      : ((i = Gt(t) ? Ni : jt.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? $s(e, i) : ei)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function km(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zu.enqueueReplaceState(t, t.state, null));
}
function Fd(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), uh(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (i.context = wn(s))
    : ((s = Gt(t) ? Ni : jt.current), (i.context = $s(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Vd(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && zu.enqueueReplaceState(i, i.state, null),
      su(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function Zs(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += NS(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Nc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Id(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var l_ = typeof WeakMap == "function" ? WeakMap : Map;
function rx(e, t, n) {
  ((n = ur(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (cu || ((cu = !0), (Gd = r)), Id(e, t));
    }),
    n
  );
}
function ix(e, t, n) {
  ((n = ur(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Id(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (Id(e, t),
          typeof r != "function" &&
            (Gr === null ? (Gr = new Set([this])) : Gr.add(this)));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function _m(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new l_();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = k_.bind(null, e, t, n)), t.then(e, e));
}
function Cm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Pm(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ur(-1, 1)), (t.tag = 2), Qr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var u_ = Sr.ReactCurrentOwner,
  Zt = !1;
function It(e, t, n, r) {
  t.child = e === null ? L0(t, null, n, r) : Hs(t, e.child, n, r);
}
function Em(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Ds(t, i),
    (r = ph(e, t, n, r, s, i)),
    (n = mh()),
    e !== null && !Zt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        gr(e, t, i))
      : (Be && n && nh(t), (t.flags |= 1), It(e, t, r, i), t.child)
  );
}
function Tm(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Ph(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), sx(e, t, s, r, i))
      : ((e = Fl(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : fo), n(a, r) && e.ref === t.ref)
    )
      return gr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Yr(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sx(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (fo(s, r) && e.ref === t.ref)
      if (((Zt = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Zt = !0);
      else return ((t.lanes = e.lanes), gr(e, t, i));
  }
  return Ud(e, t, n, r, i);
}
function ax(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ne(Ss, Jt),
        (Jt |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ne(Ss, Jt),
          (Jt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Ne(Ss, Jt),
        (Jt |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ne(Ss, Jt),
      (Jt |= r));
  return (It(e, t, i, n), t.child);
}
function ox(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ud(e, t, n, r, i) {
  var s = Gt(n) ? Ni : jt.current;
  return (
    (s = $s(t, s)),
    Ds(t, i),
    (n = ph(e, t, n, r, s, i)),
    (r = mh()),
    e !== null && !Zt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        gr(e, t, i))
      : (Be && r && nh(t), (t.flags |= 1), It(e, t, n, i), t.child)
  );
}
function Rm(e, t, n, r, i) {
  if (Gt(n)) {
    var s = !0;
    eu(t);
  } else s = !1;
  if ((Ds(t, i), t.stateNode === null))
    (Nl(e, t), nx(t, n, r), Fd(t, n, r, i), (r = !0));
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = wn(u))
      : ((u = Gt(n) ? Ni : jt.current), (u = $s(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    (d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== r || l !== u) && km(t, a, r, u)),
      (br = !1));
    var f = t.memoizedState;
    ((a.state = f),
      su(t, r, a, i),
      (l = t.memoizedState),
      o !== r || f !== l || Qt.current || br
        ? (typeof c == "function" && (Vd(t, n, c, r), (l = t.memoizedState)),
          (o = br || Sm(t, n, o, r, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = o))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((a = t.stateNode),
      N0(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : Tn(t.type, o)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = wn(l))
        : ((l = Gt(n) ? Ni : jt.current), (l = $s(t, l))));
    var p = n.getDerivedStateFromProps;
    ((c =
      typeof p == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== d || f !== l) && km(t, a, r, l)),
      (br = !1),
      (f = t.memoizedState),
      (a.state = f),
      su(t, r, a, i));
    var v = t.memoizedState;
    o !== d || f !== v || Qt.current || br
      ? (typeof p == "function" && (Vd(t, n, p, r), (v = t.memoizedState)),
        (u = br || Sm(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, v, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, v, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (a.props = r),
        (a.state = v),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return zd(e, t, n, r, s, i);
}
function zd(e, t, n, r, i, s) {
  ox(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return (i && hm(t, n, !1), gr(e, t, s));
  ((r = t.stateNode), (u_.current = t));
  var o =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Hs(t, e.child, null, s)), (t.child = Hs(t, null, o, s)))
      : It(e, t, o, s),
    (t.memoizedState = r.state),
    i && hm(t, n, !0),
    t.child
  );
}
function lx(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? fm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && fm(e, t.context, !1),
    ch(e, t.containerInfo));
}
function Am(e, t, n, r, i) {
  return (Ws(), ih(i), (t.flags |= 256), It(e, t, n, r), t.child);
}
var Bd = { dehydrated: null, treeContext: null, retryLane: 0 };
function $d(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ux(e, t, n) {
  var r = t.pendingProps,
    i = $e.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Ne($e, i & 1),
    e === null)
  )
    return (
      Nd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = Wu(a, r, 0, null)),
              (e = Li(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = $d(n)),
              (t.memoizedState = Bd),
              e)
            : vh(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return c_(e, t, a, r, o, i, n);
  if (s) {
    ((s = r.fallback), (a = t.mode), (i = e.child), (o = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Yr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (s = Yr(o, s)) : ((s = Li(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? $d(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bd),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Yr(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function vh(e, t) {
  return (
    (t = Wu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yl(e, t, n, r) {
  return (
    r !== null && ih(r),
    Hs(t, e.child, null, n),
    (e = vh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function c_(e, t, n, r, i, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Nc(Error(V(422)))), yl(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = Wu({ mode: "visible", children: r.children }, i, 0, null)),
          (s = Li(s, i, a, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Hs(t, e.child, null, a),
          (t.child.memoizedState = $d(a)),
          (t.memoizedState = Bd),
          s);
  if (!(t.mode & 1)) return yl(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var o = r.dgst;
    return (
      (r = o),
      (s = Error(V(419))),
      (r = Nc(s, r, void 0)),
      yl(e, t, a, r)
    );
  }
  if (((o = (a & e.childLanes) !== 0), Zt || o)) {
    if (((r = yt), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), yr(e, i), On(r, e, i, -1)));
    }
    return (Ch(), (r = Nc(Error(V(421)))), yl(e, t, a, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = __.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (nn = Zr(i.nextSibling)),
      (rn = t),
      (Be = !0),
      (Dn = null),
      e !== null &&
        ((mn[yn++] = ar),
        (mn[yn++] = or),
        (mn[yn++] = ji),
        (ar = e.id),
        (or = e.overflow),
        (ji = t)),
      (t = vh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), jd(e.return, t, n));
}
function jc(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function cx(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((It(e, t, r.children, n), (r = $e.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bm(e, n, t);
        else if (e.tag === 19) bm(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((Ne($e, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && au(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          jc(t, !1, i, n, s));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && au(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        jc(t, !0, n, null, s);
        break;
      case "together":
        jc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Nl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function gr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Fi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Yr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Yr(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function d_(e, t, n) {
  switch (t.tag) {
    case 3:
      (lx(t), Ws());
      break;
    case 5:
      j0(t);
      break;
    case 1:
      Gt(t.type) && eu(t);
      break;
    case 4:
      ch(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (Ne(ru, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ne($e, $e.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? ux(e, t, n)
            : (Ne($e, $e.current & 1),
              (e = gr(e, t, n)),
              e !== null ? e.sibling : null);
      Ne($e, $e.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return cx(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Ne($e, $e.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), ax(e, t, n));
  }
  return gr(e, t, n);
}
var dx, Wd, fx, hx;
dx = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Wd = function () {};
fx = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), ki(Qn.current));
    var s = null;
    switch (n) {
      case "input":
        ((i = fd(e, i)), (r = fd(e, r)), (s = []));
        break;
      case "select":
        ((i = Ke({}, i, { value: void 0 })),
          (r = Ke({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((i = md(e, i)), (r = md(e, r)), (s = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Xl);
    }
    gd(n, r);
    var a;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var o = i[u];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (io.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((o = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== o && (l != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                o[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else (n || (s || (s = []), s.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (o = o ? o.__html : void 0),
              l != null && o !== l && (s = s || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (s = s || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (io.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && je("scroll", e),
                    s || o === l || (s = []))
                  : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
hx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pa(e, t) {
  if (!Be)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Rt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function f_(e, t, n) {
  var r = t.pendingProps;
  switch ((rh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Rt(t), null);
    case 1:
      return (Gt(t.type) && Jl(), Rt(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Ks(),
        Fe(Qt),
        Fe(jt),
        fh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Dn !== null && (Xd(Dn), (Dn = null)))),
        Wd(e, t),
        Rt(t),
        null
      );
    case 5:
      dh(t);
      var i = ki(go.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (fx(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return (Rt(t), null);
        }
        if (((e = ki(Qn.current)), pl(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[Kn] = t), (r[mo] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (je("cancel", r), je("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              je("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ja.length; i++) je(ja[i], r);
              break;
            case "source":
              je("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (je("error", r), je("load", r));
              break;
            case "details":
              je("toggle", r);
              break;
            case "input":
              (Ip(r, s), je("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                je("invalid", r));
              break;
            case "textarea":
              (zp(r, s), je("invalid", r));
          }
          (gd(n, s), (i = null));
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var o = s[a];
              a === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (s.suppressHydrationWarning !== !0 &&
                      hl(r.textContent, o, e),
                    (i = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (s.suppressHydrationWarning !== !0 &&
                      hl(r.textContent, o, e),
                    (i = ["children", "" + o]))
                : io.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  je("scroll", r);
            }
          switch (n) {
            case "input":
              (sl(r), Up(r, s, !0));
              break;
            case "textarea":
              (sl(r), Bp(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Xl);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = zv(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Kn] = t),
            (e[mo] = r),
            dx(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((a = vd(n, r)), n)) {
              case "dialog":
                (je("cancel", e), je("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (je("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < ja.length; i++) je(ja[i], e);
                i = r;
                break;
              case "source":
                (je("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (je("error", e), je("load", e), (i = r));
                break;
              case "details":
                (je("toggle", e), (i = r));
                break;
              case "input":
                (Ip(e, r), (i = fd(e, r)), je("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ke({}, r, { value: void 0 })),
                  je("invalid", e));
                break;
              case "textarea":
                (zp(e, r), (i = md(e, r)), je("invalid", e));
                break;
              default:
                i = r;
            }
            (gd(n, i), (o = i));
            for (s in o)
              if (o.hasOwnProperty(s)) {
                var l = o[s];
                s === "style"
                  ? Wv(e, l)
                  : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Bv(e, l))
                    : s === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && so(e, l)
                        : typeof l == "number" && so(e, "" + l)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (io.hasOwnProperty(s)
                          ? l != null && s === "onScroll" && je("scroll", e)
                          : l != null && Bf(e, s, l, a));
              }
            switch (n) {
              case "input":
                (sl(e), Up(e, r, !1));
                break;
              case "textarea":
                (sl(e), Bp(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jr(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Ts(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Ts(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Xl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Rt(t), null);
    case 6:
      if (e && t.stateNode != null) hx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (((n = ki(go.current)), ki(Qn.current), pl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Kn] = t),
            (s = r.nodeValue !== n) && ((e = rn), e !== null))
          )
            switch (e.tag) {
              case 3:
                hl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Kn] = t),
            (t.stateNode = r));
      }
      return (Rt(t), null);
    case 13:
      if (
        (Fe($e),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Be && nn !== null && t.mode & 1 && !(t.flags & 128))
          (D0(), Ws(), (t.flags |= 98560), (s = !1));
        else if (((s = pl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(V(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(V(317));
            s[Kn] = t;
          } else
            (Ws(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Rt(t), (s = !1));
        } else (Dn !== null && (Xd(Dn), (Dn = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $e.current & 1 ? ct === 0 && (ct = 3) : Ch())),
          t.updateQueue !== null && (t.flags |= 4),
          Rt(t),
          null);
    case 4:
      return (
        Ks(),
        Wd(e, t),
        e === null && ho(t.stateNode.containerInfo),
        Rt(t),
        null
      );
    case 10:
      return (oh(t.type._context), Rt(t), null);
    case 17:
      return (Gt(t.type) && Jl(), Rt(t), null);
    case 19:
      if ((Fe($e), (s = t.memoizedState), s === null)) return (Rt(t), null);
      if (((r = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (r) Pa(s, !1);
        else {
          if (ct !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = au(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Pa(s, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (Ne($e, ($e.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            tt() > Qs &&
            ((t.flags |= 128), (r = !0), Pa(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = au(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pa(s, !0),
              s.tail === null && s.tailMode === "hidden" && !a.alternate && !Be)
            )
              return (Rt(t), null);
          } else
            2 * tt() - s.renderingStartTime > Qs &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pa(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = s.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = tt()),
          (t.sibling = null),
          (n = $e.current),
          Ne($e, r ? (n & 1) | 2 : n & 1),
          t)
        : (Rt(t), null);
    case 22:
    case 23:
      return (
        _h(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Jt & 1073741824 && (Rt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Rt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function h_(e, t) {
  switch ((rh(t), t.tag)) {
    case 1:
      return (
        Gt(t.type) && Jl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ks(),
        Fe(Qt),
        Fe(jt),
        fh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (dh(t), null);
    case 13:
      if (
        (Fe($e), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(V(340));
        Ws();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (Fe($e), null);
    case 4:
      return (Ks(), null);
    case 10:
      return (oh(t.type._context), null);
    case 22:
    case 23:
      return (_h(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var gl = !1,
  Lt = !1,
  p_ = typeof WeakSet == "function" ? WeakSet : Set,
  Q = null;
function ws(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Xe(e, t, r);
      }
    else n.current = null;
}
function Hd(e, t, n) {
  try {
    n();
  } catch (r) {
    Xe(e, t, r);
  }
}
var Dm = !1;
function m_(e, t) {
  if (((Rd = Gl), (e = v0()), th(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (i !== 0 && d.nodeType !== 3) || (o = a + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (p = d.firstChild) !== null;
            )
              ((f = d), (d = p));
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (o = a),
                f === s && ++c === r && (l = a),
                (p = d.nextSibling) !== null)
              )
                break;
              ((d = f), (f = d.parentNode));
            }
            d = p;
          }
          n = o === -1 || l === -1 ? null : { start: o, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ad = { focusedElem: e, selectionRange: n }, Gl = !1, Q = t; Q !== null; )
    if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (Q = e));
    else
      for (; Q !== null; ) {
        t = Q;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    P = v.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Tn(t.type, g),
                      P,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(V(163));
            }
        } catch (w) {
          Xe(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (Q = e));
          break;
        }
        Q = t.return;
      }
  return ((v = Dm), (Dm = !1), v);
}
function Ga(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        ((i.destroy = void 0), s !== void 0 && Hd(t, n, s));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Bu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Kd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function px(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), px(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Kn], delete t[mo], delete t[Md], delete t[Yk], delete t[Xk])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function mx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || mx(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Xl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zd(e, t, n), e = e.sibling; e !== null; )
      (Zd(e, t, n), (e = e.sibling));
}
function Qd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qd(e, t, n), e = e.sibling; e !== null; )
      (Qd(e, t, n), (e = e.sibling));
}
var wt = null,
  An = !1;
function Pr(e, t, n) {
  for (n = n.child; n !== null; ) (yx(e, t, n), (n = n.sibling));
}
function yx(e, t, n) {
  if (Zn && typeof Zn.onCommitFiberUnmount == "function")
    try {
      Zn.onCommitFiberUnmount(Ou, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Lt || ws(n, t);
    case 6:
      var r = wt,
        i = An;
      ((wt = null),
        Pr(e, t, n),
        (wt = r),
        (An = i),
        wt !== null &&
          (An
            ? ((e = wt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : wt.removeChild(n.stateNode)));
      break;
    case 18:
      wt !== null &&
        (An
          ? ((e = wt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ac(e.parentNode, n)
              : e.nodeType === 1 && Ac(e, n),
            uo(e))
          : Ac(wt, n.stateNode));
      break;
    case 4:
      ((r = wt),
        (i = An),
        (wt = n.stateNode.containerInfo),
        (An = !0),
        Pr(e, t, n),
        (wt = r),
        (An = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Lt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            a = s.destroy;
          ((s = s.tag),
            a !== void 0 && (s & 2 || s & 4) && Hd(n, t, a),
            (i = i.next));
        } while (i !== r);
      }
      Pr(e, t, n);
      break;
    case 1:
      if (
        !Lt &&
        (ws(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (o) {
          Xe(n, t, o);
        }
      Pr(e, t, n);
      break;
    case 21:
      Pr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Lt = (r = Lt) || n.memoizedState !== null), Pr(e, t, n), (Lt = r))
        : Pr(e, t, n);
      break;
    default:
      Pr(e, t, n);
  }
}
function Lm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new p_()),
      t.forEach(function (r) {
        var i = C_.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Cn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              ((wt = o.stateNode), (An = !1));
              break e;
            case 3:
              ((wt = o.stateNode.containerInfo), (An = !0));
              break e;
            case 4:
              ((wt = o.stateNode.containerInfo), (An = !0));
              break e;
          }
          o = o.return;
        }
        if (wt === null) throw Error(V(160));
        (yx(s, a, i), (wt = null), (An = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        Xe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (gx(t, e), (t = t.sibling));
}
function gx(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Cn(t, e), In(e), r & 4)) {
        try {
          (Ga(3, e, e.return), Bu(3, e));
        } catch (g) {
          Xe(e, e.return, g);
        }
        try {
          Ga(5, e, e.return);
        } catch (g) {
          Xe(e, e.return, g);
        }
      }
      break;
    case 1:
      (Cn(t, e), In(e), r & 512 && n !== null && ws(n, n.return));
      break;
    case 5:
      if (
        (Cn(t, e),
        In(e),
        r & 512 && n !== null && ws(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          so(i, "");
        } catch (g) {
          Xe(e, e.return, g);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          o = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (o === "input" && s.type === "radio" && s.name != null && Iv(i, s),
              vd(o, a));
            var u = vd(o, s);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? Wv(i, d)
                : c === "dangerouslySetInnerHTML"
                  ? Bv(i, d)
                  : c === "children"
                    ? so(i, d)
                    : Bf(i, c, d, u);
            }
            switch (o) {
              case "input":
                hd(i, s);
                break;
              case "textarea":
                Uv(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var p = s.value;
                p != null
                  ? Ts(i, !!s.multiple, p, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Ts(i, !!s.multiple, s.defaultValue, !0)
                      : Ts(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[mo] = s;
          } catch (g) {
            Xe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Cn(t, e), In(e), r & 4)) {
        if (e.stateNode === null) throw Error(V(162));
        ((i = e.stateNode), (s = e.memoizedProps));
        try {
          i.nodeValue = s;
        } catch (g) {
          Xe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Cn(t, e), In(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          uo(t.containerInfo);
        } catch (g) {
          Xe(e, e.return, g);
        }
      break;
    case 4:
      (Cn(t, e), In(e));
      break;
    case 13:
      (Cn(t, e),
        In(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Sh = tt())),
        r & 4 && Lm(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Lt = (u = Lt) || c), Cn(t, e), (Lt = u)) : Cn(t, e),
        In(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (Q = e, c = e.child; c !== null; ) {
            for (d = Q = c; Q !== null; ) {
              switch (((f = Q), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ga(4, f, f.return);
                  break;
                case 1:
                  ws(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (g) {
                      Xe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ws(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Nm(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (Q = p)) : Nm(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                ((i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((o = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (o.style.display = $v("display", a))));
              } catch (g) {
                Xe(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                Xe(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ((d.child.return = d), (d = d.child));
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            (c === d && (c = null), (d = d.return));
          }
          (c === d && (c = null),
            (d.sibling.return = d.return),
            (d = d.sibling));
        }
      }
      break;
    case 19:
      (Cn(t, e), In(e), r & 4 && Lm(e));
      break;
    case 21:
      break;
    default:
      (Cn(t, e), In(e));
  }
}
function In(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (so(i, ""), (r.flags &= -33));
          var s = Mm(e);
          Qd(e, s, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            o = Mm(e);
          Zd(e, o, a);
          break;
        default:
          throw Error(V(161));
      }
    } catch (l) {
      Xe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function y_(e, t, n) {
  ((Q = e), vx(e));
}
function vx(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Q !== null; ) {
    var i = Q,
      s = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || gl;
      if (!a) {
        var o = i.alternate,
          l = (o !== null && o.memoizedState !== null) || Lt;
        o = gl;
        var u = Lt;
        if (((gl = a), (Lt = l) && !u))
          for (Q = i; Q !== null; )
            ((a = Q),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? jm(i)
                : l !== null
                  ? ((l.return = a), (Q = l))
                  : jm(i));
        for (; s !== null; ) ((Q = s), vx(s), (s = s.sibling));
        ((Q = i), (gl = o), (Lt = u));
      }
      Om(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (Q = s)) : Om(e);
  }
}
function Om(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Lt || Bu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Lt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Tn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && vm(t, s, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                vm(t, a, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && uo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(V(163));
          }
        Lt || (t.flags & 512 && Kd(t));
      } catch (f) {
        Xe(t, t.return, f);
      }
    }
    if (t === e) {
      Q = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (Q = n));
      break;
    }
    Q = t.return;
  }
}
function Nm(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t === e) {
      Q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (Q = n));
      break;
    }
    Q = t.return;
  }
}
function jm(e) {
  for (; Q !== null; ) {
    var t = Q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bu(4, t);
          } catch (l) {
            Xe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Xe(t, i, l);
            }
          }
          var s = t.return;
          try {
            Kd(t);
          } catch (l) {
            Xe(t, s, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Kd(t);
          } catch (l) {
            Xe(t, a, l);
          }
      }
    } catch (l) {
      Xe(t, t.return, l);
    }
    if (t === e) {
      Q = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      ((o.return = t.return), (Q = o));
      break;
    }
    Q = t.return;
  }
}
var g_ = Math.ceil,
  uu = Sr.ReactCurrentDispatcher,
  xh = Sr.ReactCurrentOwner,
  xn = Sr.ReactCurrentBatchConfig,
  ke = 0,
  yt = null,
  lt = null,
  Ct = 0,
  Jt = 0,
  Ss = ai(0),
  ct = 0,
  So = null,
  Fi = 0,
  $u = 0,
  wh = 0,
  qa = null,
  Kt = null,
  Sh = 0,
  Qs = 1 / 0,
  tr = null,
  cu = !1,
  Gd = null,
  Gr = null,
  vl = !1,
  Br = null,
  du = 0,
  Ya = 0,
  qd = null,
  jl = -1,
  Vl = 0;
function zt() {
  return ke & 6 ? tt() : jl !== -1 ? jl : (jl = tt());
}
function qr(e) {
  return e.mode & 1
    ? ke & 2 && Ct !== 0
      ? Ct & -Ct
      : e_.transition !== null
        ? (Vl === 0 && (Vl = n0()), Vl)
        : ((e = De),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : u0(e.type))),
          e)
    : 1;
}
function On(e, t, n, r) {
  if (50 < Ya) throw ((Ya = 0), (qd = null), Error(V(185)));
  (Vo(e, n, r),
    (!(ke & 2) || e !== yt) &&
      (e === yt && (!(ke & 2) && ($u |= n), ct === 4 && Lr(e, Ct)),
      qt(e, r),
      n === 1 && ke === 0 && !(t.mode & 1) && ((Qs = tt() + 500), Iu && oi())));
}
function qt(e, t) {
  var n = e.callbackNode;
  ek(e, t);
  var r = Ql(e, e === yt ? Ct : 0);
  if (r === 0)
    (n !== null && Hp(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Hp(n), t === 1))
      (e.tag === 0 ? Jk(Vm.bind(null, e)) : R0(Vm.bind(null, e)),
        Gk(function () {
          !(ke & 6) && oi();
        }),
        (n = null));
    else {
      switch (r0(r)) {
        case 1:
          n = Zf;
          break;
        case 4:
          n = e0;
          break;
        case 16:
          n = Zl;
          break;
        case 536870912:
          n = t0;
          break;
        default:
          n = Zl;
      }
      n = Ex(n, xx.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function xx(e, t) {
  if (((jl = -1), (Vl = 0), ke & 6)) throw Error(V(327));
  var n = e.callbackNode;
  if (Ms() && e.callbackNode !== n) return null;
  var r = Ql(e, e === yt ? Ct : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fu(e, r);
  else {
    t = r;
    var i = ke;
    ke |= 2;
    var s = Sx();
    (yt !== e || Ct !== t) && ((tr = null), (Qs = tt() + 500), Mi(e, t));
    do
      try {
        w_();
        break;
      } catch (o) {
        wx(e, o);
      }
    while (!0);
    (ah(),
      (uu.current = s),
      (ke = i),
      lt !== null ? (t = 0) : ((yt = null), (Ct = 0), (t = ct)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = _d(e)), i !== 0 && ((r = i), (t = Yd(e, i)))), t === 1)
    )
      throw ((n = So), Mi(e, 0), Lr(e, r), qt(e, tt()), n);
    if (t === 6) Lr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !v_(i) &&
          ((t = fu(e, r)),
          t === 2 && ((s = _d(e)), s !== 0 && ((r = s), (t = Yd(e, s)))),
          t === 1))
      )
        throw ((n = So), Mi(e, 0), Lr(e, r), qt(e, tt()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          pi(e, Kt, tr);
          break;
        case 3:
          if (
            (Lr(e, r), (r & 130023424) === r && ((t = Sh + 500 - tt()), 10 < t))
          ) {
            if (Ql(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (zt(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = Dd(pi.bind(null, e, Kt, tr), t);
            break;
          }
          pi(e, Kt, tr);
          break;
        case 4:
          if ((Lr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - Ln(r);
            ((s = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~s));
          }
          if (
            ((r = i),
            (r = tt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * g_(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Dd(pi.bind(null, e, Kt, tr), r);
            break;
          }
          pi(e, Kt, tr);
          break;
        case 5:
          pi(e, Kt, tr);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return (qt(e, tt()), e.callbackNode === n ? xx.bind(null, e) : null);
}
function Yd(e, t) {
  var n = qa;
  return (
    e.current.memoizedState.isDehydrated && (Mi(e, t).flags |= 256),
    (e = fu(e, t)),
    e !== 2 && ((t = Kt), (Kt = n), t !== null && Xd(t)),
    e
  );
}
function Xd(e) {
  Kt === null ? (Kt = e) : Kt.push.apply(Kt, e);
}
function v_(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Nn(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Lr(e, t) {
  for (
    t &= ~wh,
      t &= ~$u,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ln(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Vm(e) {
  if (ke & 6) throw Error(V(327));
  Ms();
  var t = Ql(e, 0);
  if (!(t & 1)) return (qt(e, tt()), null);
  var n = fu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _d(e);
    r !== 0 && ((t = r), (n = Yd(e, r)));
  }
  if (n === 1) throw ((n = So), Mi(e, 0), Lr(e, t), qt(e, tt()), n);
  if (n === 6) throw Error(V(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    pi(e, Kt, tr),
    qt(e, tt()),
    null
  );
}
function kh(e, t) {
  var n = ke;
  ke |= 1;
  try {
    return e(t);
  } finally {
    ((ke = n), ke === 0 && ((Qs = tt() + 500), Iu && oi()));
  }
}
function Ii(e) {
  Br !== null && Br.tag === 0 && !(ke & 6) && Ms();
  var t = ke;
  ke |= 1;
  var n = xn.transition,
    r = De;
  try {
    if (((xn.transition = null), (De = 1), e)) return e();
  } finally {
    ((De = r), (xn.transition = n), (ke = t), !(ke & 6) && oi());
  }
}
function _h() {
  ((Jt = Ss.current), Fe(Ss));
}
function Mi(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Qk(n)), lt !== null))
    for (n = lt.return; n !== null; ) {
      var r = n;
      switch ((rh(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Jl());
          break;
        case 3:
          (Ks(), Fe(Qt), Fe(jt), fh());
          break;
        case 5:
          dh(r);
          break;
        case 4:
          Ks();
          break;
        case 13:
          Fe($e);
          break;
        case 19:
          Fe($e);
          break;
        case 10:
          oh(r.type._context);
          break;
        case 22:
        case 23:
          _h();
      }
      n = n.return;
    }
  if (
    ((yt = e),
    (lt = e = Yr(e.current, null)),
    (Ct = Jt = t),
    (ct = 0),
    (So = null),
    (wh = $u = Fi = 0),
    (Kt = qa = null),
    Si !== null)
  ) {
    for (t = 0; t < Si.length; t++)
      if (((n = Si[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          ((s.next = i), (r.next = a));
        }
        n.pending = r;
      }
    Si = null;
  }
  return e;
}
function wx(e, t) {
  do {
    var n = lt;
    try {
      if ((ah(), (Ll.current = lu), ou)) {
        for (var r = He.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        ou = !1;
      }
      if (
        ((Vi = 0),
        (mt = ut = He = null),
        (Qa = !1),
        (vo = 0),
        (xh.current = null),
        n === null || n.return === null)
      ) {
        ((ct = 1), (So = t), (lt = null));
        break;
      }
      e: {
        var s = e,
          a = n.return,
          o = n,
          l = t;
        if (
          ((t = Ct),
          (o.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = o,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Cm(a);
          if (p !== null) {
            ((p.flags &= -257),
              Pm(p, a, o, s, t),
              p.mode & 1 && _m(s, u, t),
              (t = p),
              (l = u));
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              (g.add(l), (t.updateQueue = g));
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (_m(s, u, t), Ch());
              break e;
            }
            l = Error(V(426));
          }
        } else if (Be && o.mode & 1) {
          var P = Cm(a);
          if (P !== null) {
            (!(P.flags & 65536) && (P.flags |= 256),
              Pm(P, a, o, s, t),
              ih(Zs(l, o)));
            break e;
          }
        }
        ((s = l = Zs(l, o)),
          ct !== 4 && (ct = 2),
          qa === null ? (qa = [s]) : qa.push(s),
          (s = a));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var m = rx(s, l, t);
              gm(s, m);
              break e;
            case 1:
              o = l;
              var h = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Gr === null || !Gr.has(y))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var w = ix(s, o, t);
                gm(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      _x(n);
    } catch (C) {
      ((t = C), lt === n && n !== null && (lt = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Sx() {
  var e = uu.current;
  return ((uu.current = lu), e === null ? lu : e);
}
function Ch() {
  ((ct === 0 || ct === 3 || ct === 2) && (ct = 4),
    yt === null || (!(Fi & 268435455) && !($u & 268435455)) || Lr(yt, Ct));
}
function fu(e, t) {
  var n = ke;
  ke |= 2;
  var r = Sx();
  (yt !== e || Ct !== t) && ((tr = null), Mi(e, t));
  do
    try {
      x_();
      break;
    } catch (i) {
      wx(e, i);
    }
  while (!0);
  if ((ah(), (ke = n), (uu.current = r), lt !== null)) throw Error(V(261));
  return ((yt = null), (Ct = 0), ct);
}
function x_() {
  for (; lt !== null; ) kx(lt);
}
function w_() {
  for (; lt !== null && !HS(); ) kx(lt);
}
function kx(e) {
  var t = Px(e.alternate, e, Jt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? _x(e) : (lt = t),
    (xh.current = null));
}
function _x(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = h_(n, t)), n !== null)) {
        ((n.flags &= 32767), (lt = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ct = 6), (lt = null));
        return;
      }
    } else if (((n = f_(n, t, Jt)), n !== null)) {
      lt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      lt = t;
      return;
    }
    lt = t = e;
  } while (t !== null);
  ct === 0 && (ct = 5);
}
function pi(e, t, n) {
  var r = De,
    i = xn.transition;
  try {
    ((xn.transition = null), (De = 1), S_(e, t, n, r));
  } finally {
    ((xn.transition = i), (De = r));
  }
  return null;
}
function S_(e, t, n, r) {
  do Ms();
  while (Br !== null);
  if (ke & 6) throw Error(V(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(V(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (tk(e, s),
    e === yt && ((lt = yt = null), (Ct = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vl ||
      ((vl = !0),
      Ex(Zl, function () {
        return (Ms(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = xn.transition), (xn.transition = null));
    var a = De;
    De = 1;
    var o = ke;
    ((ke |= 4),
      (xh.current = null),
      m_(e, n),
      gx(n, e),
      zk(Ad),
      (Gl = !!Rd),
      (Ad = Rd = null),
      (e.current = n),
      y_(n),
      KS(),
      (ke = o),
      (De = a),
      (xn.transition = s));
  } else e.current = n;
  if (
    (vl && ((vl = !1), (Br = e), (du = i)),
    (s = e.pendingLanes),
    s === 0 && (Gr = null),
    GS(n.stateNode),
    qt(e, tt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (cu) throw ((cu = !1), (e = Gd), (Gd = null), e);
  return (
    du & 1 && e.tag !== 0 && Ms(),
    (s = e.pendingLanes),
    s & 1 ? (e === qd ? Ya++ : ((Ya = 0), (qd = e))) : (Ya = 0),
    oi(),
    null
  );
}
function Ms() {
  if (Br !== null) {
    var e = r0(du),
      t = xn.transition,
      n = De;
    try {
      if (((xn.transition = null), (De = 16 > e ? 16 : e), Br === null))
        var r = !1;
      else {
        if (((e = Br), (Br = null), (du = 0), ke & 6)) throw Error(V(331));
        var i = ke;
        for (ke |= 4, Q = e.current; Q !== null; ) {
          var s = Q,
            a = s.child;
          if (Q.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var l = 0; l < o.length; l++) {
                var u = o[l];
                for (Q = u; Q !== null; ) {
                  var c = Q;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ga(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) ((d.return = c), (Q = d));
                  else
                    for (; Q !== null; ) {
                      c = Q;
                      var f = c.sibling,
                        p = c.return;
                      if ((px(c), c === u)) {
                        Q = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = p), (Q = f));
                        break;
                      }
                      Q = p;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var P = g.sibling;
                    ((g.sibling = null), (g = P));
                  } while (g !== null);
                }
              }
              Q = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) ((a.return = s), (Q = a));
          else
            e: for (; Q !== null; ) {
              if (((s = Q), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ga(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                ((m.return = s.return), (Q = m));
                break e;
              }
              Q = s.return;
            }
        }
        var h = e.current;
        for (Q = h; Q !== null; ) {
          a = Q;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) ((y.return = a), (Q = y));
          else
            e: for (a = h; Q !== null; ) {
              if (((o = Q), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bu(9, o);
                  }
                } catch (C) {
                  Xe(o, o.return, C);
                }
              if (o === a) {
                Q = null;
                break e;
              }
              var w = o.sibling;
              if (w !== null) {
                ((w.return = o.return), (Q = w));
                break e;
              }
              Q = o.return;
            }
        }
        if (
          ((ke = i), oi(), Zn && typeof Zn.onPostCommitFiberRoot == "function")
        )
          try {
            Zn.onPostCommitFiberRoot(Ou, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((De = n), (xn.transition = t));
    }
  }
  return !1;
}
function Fm(e, t, n) {
  ((t = Zs(n, t)),
    (t = rx(e, t, 1)),
    (e = Qr(e, t, 1)),
    (t = zt()),
    e !== null && (Vo(e, 1, t), qt(e, t)));
}
function Xe(e, t, n) {
  if (e.tag === 3) Fm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Gr === null || !Gr.has(r)))
        ) {
          ((e = Zs(n, e)),
            (e = ix(t, e, 1)),
            (t = Qr(t, e, 1)),
            (e = zt()),
            t !== null && (Vo(t, 1, e), qt(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function k_(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = zt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    yt === e &&
      (Ct & n) === n &&
      (ct === 4 || (ct === 3 && (Ct & 130023424) === Ct && 500 > tt() - Sh)
        ? Mi(e, 0)
        : (wh |= n)),
    qt(e, t));
}
function Cx(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ll), (ll <<= 1), !(ll & 130023424) && (ll = 4194304))
      : (t = 1));
  var n = zt();
  ((e = yr(e, t)), e !== null && (Vo(e, t, n), qt(e, n)));
}
function __(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Cx(e, n));
}
function C_(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(V(314));
  }
  (r !== null && r.delete(t), Cx(e, n));
}
var Px;
Px = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qt.current) Zt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Zt = !1), d_(e, t, n));
      Zt = !!(e.flags & 131072);
    }
  else ((Zt = !1), Be && t.flags & 1048576 && A0(t, nu, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Nl(e, t), (e = t.pendingProps));
      var i = $s(t, jt.current);
      (Ds(t, n), (i = ph(null, t, r, e, i, n)));
      var s = mh();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Gt(r) ? ((s = !0), eu(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            uh(t),
            (i.updater = zu),
            (t.stateNode = i),
            (i._reactInternals = t),
            Fd(t, r, e, n),
            (t = zd(null, t, r, !0, s, n)))
          : ((t.tag = 0), Be && s && nh(t), It(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Nl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = E_(r)),
          (e = Tn(r, e)),
          i)
        ) {
          case 0:
            t = Ud(null, t, r, e, n);
            break e;
          case 1:
            t = Rm(null, t, r, e, n);
            break e;
          case 11:
            t = Em(null, t, r, e, n);
            break e;
          case 14:
            t = Tm(null, t, r, Tn(r.type, e), n);
            break e;
        }
        throw Error(V(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Tn(r, i)),
        Ud(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Tn(r, i)),
        Rm(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((lx(t), e === null)) throw Error(V(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          N0(e, t),
          su(t, r, null, n));
        var a = t.memoizedState;
        if (((r = a.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((i = Zs(Error(V(423)), t)), (t = Am(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = Zs(Error(V(424)), t)), (t = Am(e, t, r, n, i)));
            break e;
          } else
            for (
              nn = Zr(t.stateNode.containerInfo.firstChild),
                rn = t,
                Be = !0,
                Dn = null,
                n = L0(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Ws(), r === i)) {
            t = gr(e, t, n);
            break e;
          }
          It(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        j0(t),
        e === null && Nd(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = i.children),
        bd(r, i) ? (a = null) : s !== null && bd(r, s) && (t.flags |= 32),
        ox(e, t),
        It(e, t, a, n),
        t.child
      );
    case 6:
      return (e === null && Nd(t), null);
    case 13:
      return ux(e, t, n);
    case 4:
      return (
        ch(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Hs(t, null, r, n)) : It(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Tn(r, i)),
        Em(e, t, r, i, n)
      );
    case 7:
      return (It(e, t, t.pendingProps, n), t.child);
    case 8:
      return (It(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (It(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (a = i.value),
          Ne(ru, r._currentValue),
          (r._currentValue = a),
          s !== null)
        )
          if (Nn(s.value, a)) {
            if (s.children === i.children && !Qt.current) {
              t = gr(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var o = s.dependencies;
              if (o !== null) {
                a = s.child;
                for (var l = o.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      ((l = ur(-1, n & -n)), (l.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      jd(s.return, n, t),
                      (o.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(V(341));
                ((a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  jd(a, n, t),
                  (a = s.sibling));
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    ((s.return = a.return), (a = s));
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        (It(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Ds(t, n),
        (i = wn(i)),
        (r = r(i)),
        (t.flags |= 1),
        It(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Tn(r, t.pendingProps)),
        (i = Tn(r.type, i)),
        Tm(e, t, r, i, n)
      );
    case 15:
      return sx(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Tn(r, i)),
        Nl(e, t),
        (t.tag = 1),
        Gt(r) ? ((e = !0), eu(t)) : (e = !1),
        Ds(t, n),
        nx(t, r, i),
        Fd(t, r, i, n),
        zd(null, t, r, !0, e, n)
      );
    case 19:
      return cx(e, t, n);
    case 22:
      return ax(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function Ex(e, t) {
  return Jv(e, t);
}
function P_(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function vn(e, t, n, r) {
  return new P_(e, t, n, r);
}
function Ph(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function E_(e) {
  if (typeof e == "function") return Ph(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Wf)) return 11;
    if (e === Hf) return 14;
  }
  return 2;
}
function Yr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = vn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Fl(e, t, n, r, i, s) {
  var a = 2;
  if (((r = e), typeof e == "function")) Ph(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case ds:
        return Li(n.children, i, s, t);
      case $f:
        ((a = 8), (i |= 8));
        break;
      case ld:
        return (
          (e = vn(12, n, t, i | 2)),
          (e.elementType = ld),
          (e.lanes = s),
          e
        );
      case ud:
        return ((e = vn(13, n, t, i)), (e.elementType = ud), (e.lanes = s), e);
      case cd:
        return ((e = vn(19, n, t, i)), (e.elementType = cd), (e.lanes = s), e);
      case jv:
        return Wu(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ov:
              a = 10;
              break e;
            case Nv:
              a = 9;
              break e;
            case Wf:
              a = 11;
              break e;
            case Hf:
              a = 14;
              break e;
            case Ar:
              ((a = 16), (r = null));
              break e;
          }
        throw Error(V(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = vn(a, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function Li(e, t, n, r) {
  return ((e = vn(7, e, r, t)), (e.lanes = n), e);
}
function Wu(e, t, n, r) {
  return (
    (e = vn(22, e, r, t)),
    (e.elementType = jv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Vc(e, t, n) {
  return ((e = vn(6, e, null, t)), (e.lanes = n), e);
}
function Fc(e, t, n) {
  return (
    (t = vn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function T_(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = vc(0)),
    (this.expirationTimes = vc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = vc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function Eh(e, t, n, r, i, s, a, o, l) {
  return (
    (e = new T_(e, t, n, o, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = vn(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uh(s),
    e
  );
}
function R_(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: cs,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Tx(e) {
  if (!e) return ei;
  e = e._reactInternals;
  e: {
    if (Zi(e) !== e || e.tag !== 1) throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Gt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Gt(n)) return T0(e, n, t);
  }
  return t;
}
function Rx(e, t, n, r, i, s, a, o, l) {
  return (
    (e = Eh(n, r, !0, e, i, s, a, o, l)),
    (e.context = Tx(null)),
    (n = e.current),
    (r = zt()),
    (i = qr(n)),
    (s = ur(r, i)),
    (s.callback = t ?? null),
    Qr(n, s, i),
    (e.current.lanes = i),
    Vo(e, i, r),
    qt(e, r),
    e
  );
}
function Hu(e, t, n, r) {
  var i = t.current,
    s = zt(),
    a = qr(i);
  return (
    (n = Tx(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ur(s, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qr(i, t, a)),
    e !== null && (On(e, i, a, s), Ml(e, i, a)),
    a
  );
}
function hu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Im(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Th(e, t) {
  (Im(e, t), (e = e.alternate) && Im(e, t));
}
function A_() {
  return null;
}
var Ax =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Rh(e) {
  this._internalRoot = e;
}
Ku.prototype.render = Rh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  Hu(e, t, null, null);
};
Ku.prototype.unmount = Rh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Ii(function () {
      Hu(null, e, null, null);
    }),
      (t[mr] = null));
  }
};
function Ku(e) {
  this._internalRoot = e;
}
Ku.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = a0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mr.length && t !== 0 && t < Mr[n].priority; n++);
    (Mr.splice(n, 0, e), n === 0 && l0(e));
  }
};
function Ah(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Um() {}
function b_(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = hu(a);
        s.call(u);
      };
    }
    var a = Rx(t, r, e, 0, null, !1, !1, "", Um);
    return (
      (e._reactRootContainer = a),
      (e[mr] = a.current),
      ho(e.nodeType === 8 ? e.parentNode : e),
      Ii(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var u = hu(l);
      o.call(u);
    };
  }
  var l = Eh(e, 0, !1, null, null, !1, !1, "", Um);
  return (
    (e._reactRootContainer = l),
    (e[mr] = l.current),
    ho(e.nodeType === 8 ? e.parentNode : e),
    Ii(function () {
      Hu(t, l, n, r);
    }),
    l
  );
}
function Qu(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof i == "function") {
      var o = i;
      i = function () {
        var l = hu(a);
        o.call(l);
      };
    }
    Hu(t, a, e, i);
  } else a = b_(n, t, e, i, r);
  return hu(a);
}
i0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Na(t.pendingLanes);
        n !== 0 &&
          (Qf(t, n | 1), qt(t, tt()), !(ke & 6) && ((Qs = tt() + 500), oi()));
      }
      break;
    case 13:
      (Ii(function () {
        var r = yr(e, 1);
        if (r !== null) {
          var i = zt();
          On(r, e, 1, i);
        }
      }),
        Th(e, 1));
  }
};
Gf = function (e) {
  if (e.tag === 13) {
    var t = yr(e, 134217728);
    if (t !== null) {
      var n = zt();
      On(t, e, 134217728, n);
    }
    Th(e, 134217728);
  }
};
s0 = function (e) {
  if (e.tag === 13) {
    var t = qr(e),
      n = yr(e, t);
    if (n !== null) {
      var r = zt();
      On(n, e, t, r);
    }
    Th(e, t);
  }
};
a0 = function () {
  return De;
};
o0 = function (e, t) {
  var n = De;
  try {
    return ((De = e), t());
  } finally {
    De = n;
  }
};
wd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((hd(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Fu(r);
            if (!i) throw Error(V(90));
            (Fv(r), hd(r, i));
          }
        }
      }
      break;
    case "textarea":
      Uv(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Ts(e, !!n.multiple, t, !1));
  }
};
Zv = kh;
Qv = Ii;
var D_ = { usingClientEntryPoint: !1, Events: [Io, ms, Fu, Hv, Kv, kh] },
  Ea = {
    findFiberByHostInstance: wi,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  M_ = {
    bundleType: Ea.bundleType,
    version: Ea.version,
    rendererPackageName: Ea.rendererPackageName,
    rendererConfig: Ea.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Yv(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Ea.findFiberByHostInstance || A_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xl.isDisabled && xl.supportsFiber)
    try {
      ((Ou = xl.inject(M_)), (Zn = xl));
    } catch {}
}
un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D_;
un.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ah(t)) throw Error(V(200));
  return R_(e, t, null, n);
};
un.createRoot = function (e, t) {
  if (!Ah(e)) throw Error(V(299));
  var n = !1,
    r = "",
    i = Ax;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Eh(e, 1, !1, null, null, n, !1, r, i)),
    (e[mr] = t.current),
    ho(e.nodeType === 8 ? e.parentNode : e),
    new Rh(t)
  );
};
un.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(V(188))
      : ((e = Object.keys(e).join(",")), Error(V(268, e)));
  return ((e = Yv(t)), (e = e === null ? null : e.stateNode), e);
};
un.flushSync = function (e) {
  return Ii(e);
};
un.hydrate = function (e, t, n) {
  if (!Zu(t)) throw Error(V(200));
  return Qu(null, e, t, !0, n);
};
un.hydrateRoot = function (e, t, n) {
  if (!Ah(e)) throw Error(V(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    a = Ax;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Rx(t, null, e, 1, n ?? null, i, !1, s, a)),
    (e[mr] = t.current),
    ho(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new Ku(t);
};
un.render = function (e, t, n) {
  if (!Zu(t)) throw Error(V(200));
  return Qu(null, e, t, !1, n);
};
un.unmountComponentAtNode = function (e) {
  if (!Zu(e)) throw Error(V(40));
  return e._reactRootContainer
    ? (Ii(function () {
        Qu(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[mr] = null));
        });
      }),
      !0)
    : !1;
};
un.unstable_batchedUpdates = kh;
un.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Zu(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return Qu(e, t, n, !1, r);
};
un.version = "18.3.1-next-f1338f8080-20240426";
function bx() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bx);
    } catch (e) {
      console.error(e);
    }
}
(bx(), (bv.exports = un));
var bh = bv.exports;
const L_ = vv(bh),
  O_ = gv({ __proto__: null, default: L_ }, [bh]);
var zm = bh;
((ad.createRoot = zm.createRoot), (ad.hydrateRoot = zm.hydrateRoot));
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ve() {
  return (
    (Ve = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ve.apply(this, arguments)
  );
}
var at;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(at || (at = {}));
const Bm = "popstate";
function N_(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: a, hash: o } = r.location;
    return ko(
      "",
      { pathname: s, search: a, hash: o },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : zi(i);
  }
  return V_(t, n, null, e);
}
function ye(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ui(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function j_() {
  return Math.random().toString(36).substr(2, 8);
}
function $m(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ko(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ve(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? li(t) : t,
      { state: n, key: (t && t.key) || r || j_() },
    )
  );
}
function zi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function li(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function V_(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    a = i.history,
    o = at.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), a.replaceState(Ve({}, a.state, { idx: u }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    o = at.Pop;
    let P = c(),
      m = P == null ? null : P - u;
    ((u = P), l && l({ action: o, location: g.location, delta: m }));
  }
  function f(P, m) {
    o = at.Push;
    let h = ko(g.location, P, m);
    u = c() + 1;
    let y = $m(h, u),
      w = g.createHref(h);
    try {
      a.pushState(y, "", w);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(w);
    }
    s && l && l({ action: o, location: g.location, delta: 1 });
  }
  function p(P, m) {
    o = at.Replace;
    let h = ko(g.location, P, m);
    u = c();
    let y = $m(h, u),
      w = g.createHref(h);
    (a.replaceState(y, "", w),
      s && l && l({ action: o, location: g.location, delta: 0 }));
  }
  function v(P) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof P == "string" ? P : zi(P);
    return (
      (h = h.replace(/ $/, "%20")),
      ye(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          h,
      ),
      new URL(h, m)
    );
  }
  let g = {
    get action() {
      return o;
    },
    get location() {
      return e(i, a);
    },
    listen(P) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Bm, d),
        (l = P),
        () => {
          (i.removeEventListener(Bm, d), (l = null));
        }
      );
    },
    createHref(P) {
      return t(i, P);
    },
    createURL: v,
    encodeLocation(P) {
      let m = v(P);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: p,
    go(P) {
      return a.go(P);
    },
  };
  return g;
}
var be;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(be || (be = {}));
const F_ = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function I_(e) {
  return e.index === !0;
}
function pu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, s) => {
      let a = [...n, String(s)],
        o = typeof i.id == "string" ? i.id : a.join("-");
      if (
        (ye(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route",
        ),
        ye(
          !r[o],
          'Found a route id collision on id "' +
            o +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        I_(i))
      ) {
        let l = Ve({}, i, t(i), { id: o });
        return ((r[o] = l), l);
      } else {
        let l = Ve({}, i, t(i), { id: o, children: void 0 });
        return (
          (r[o] = l),
          i.children && (l.children = pu(i.children, t, a, r)),
          l
        );
      }
    })
  );
}
function vi(e, t, n) {
  return (n === void 0 && (n = "/"), Il(e, t, n, !1));
}
function Il(e, t, n, r) {
  let i = typeof t == "string" ? li(t) : t,
    s = vr(i.pathname || "/", n);
  if (s == null) return null;
  let a = Dx(e);
  z_(a);
  let o = null;
  for (let l = 0; o == null && l < a.length; ++l) {
    let u = X_(s);
    o = q_(a[l], u, r);
  }
  return o;
}
function U_(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Dx(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let i = (s, a, o) => {
    let l = {
      relativePath: o === void 0 ? s.path || "" : o,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (ye(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = cr([r, l.relativePath]),
      c = n.concat(l);
    (s.children &&
      s.children.length > 0 &&
      (ye(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Dx(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: Q_(u, s.index), routesMeta: c }));
  };
  return (
    e.forEach((s, a) => {
      var o;
      if (s.path === "" || !((o = s.path) != null && o.includes("?"))) i(s, a);
      else for (let l of Mx(s.path)) i(s, a, l);
    }),
    t
  );
}
function Mx(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let a = Mx(r.join("/")),
    o = [];
  return (
    o.push(...a.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && o.push(...a),
    o.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function z_(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : G_(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const B_ = /^:[\w-]+$/,
  $_ = 3,
  W_ = 2,
  H_ = 1,
  K_ = 10,
  Z_ = -2,
  Wm = (e) => e === "*";
function Q_(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Wm) && (r += Z_),
    t && (r += W_),
    n
      .filter((i) => !Wm(i))
      .reduce((i, s) => i + (B_.test(s) ? $_ : s === "" ? H_ : K_), r)
  );
}
function G_(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function q_(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    a = [];
  for (let o = 0; o < r.length; ++o) {
    let l = r[o],
      u = o === r.length - 1,
      c = s === "/" ? t : t.slice(s.length) || "/",
      d = mu(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = mu(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c,
        )),
      !d)
    )
      return null;
    (Object.assign(i, d.params),
      a.push({
        params: i,
        pathname: cr([s, d.pathname]),
        pathnameBase: nC(cr([s, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (s = cr([s, d.pathnameBase])));
  }
  return a;
}
function mu(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Y_(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    a = s.replace(/(.)\/+$/, "$1"),
    o = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: p } = c;
      if (f === "*") {
        let g = o[d] || "";
        a = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const v = o[d];
      return (
        p && !v ? (u[f] = void 0) : (u[f] = (v || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e,
  };
}
function Y_(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ui(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, o, l) => (
            r.push({ paramName: o, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function X_(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Ui(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function vr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const J_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  eC = (e) => J_.test(e);
function tC(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: i = "",
    } = typeof e == "string" ? li(e) : e,
    s;
  if (n)
    if (eC(n)) s = n;
    else {
      if (n.includes("//")) {
        let a = n;
        ((n = n.replace(/\/\/+/g, "/")),
          Ui(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (a + " -> " + n),
          ));
      }
      n.startsWith("/") ? (s = Hm(n.substring(1), "/")) : (s = Hm(n, t));
    }
  else s = t;
  return { pathname: s, search: rC(r), hash: iC(i) };
}
function Hm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ic(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Lx(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Gu(e, t) {
  let n = Lx(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function qu(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = li(e))
    : ((i = Ve({}, e)),
      ye(
        !i.pathname || !i.pathname.includes("?"),
        Ic("?", "pathname", "search", i),
      ),
      ye(
        !i.pathname || !i.pathname.includes("#"),
        Ic("#", "pathname", "hash", i),
      ),
      ye(!i.search || !i.search.includes("#"), Ic("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    a = s ? "/" : i.pathname,
    o;
  if (a == null) o = n;
  else {
    let d = t.length - 1;
    if (!r && a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; ) (f.shift(), (d -= 1));
      i.pathname = f.join("/");
    }
    o = d >= 0 ? t[d] : "/";
  }
  let l = tC(i, o),
    u = a && a !== "/" && a.endsWith("/"),
    c = (s || a === ".") && n.endsWith("/");
  return (!l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l);
}
const cr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  nC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  rC = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  iC = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  sC = function (t, n) {
    n === void 0 && (n = 302);
    let r = n;
    typeof r == "number"
      ? (r = { status: r })
      : typeof r.status > "u" && (r.status = 302);
    let i = new Headers(r.headers);
    return (
      i.set("Location", t),
      new Response(null, Ve({}, r, { headers: i }))
    );
  };
class yu {
  constructor(t, n, r, i) {
    (i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r));
  }
}
function _o(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Ox = ["post", "put", "patch", "delete"],
  aC = new Set(Ox),
  oC = ["get", ...Ox],
  lC = new Set(oC),
  uC = new Set([301, 302, 303, 307, 308]),
  cC = new Set([307, 308]),
  Uc = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  dC = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ta = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Dh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  fC = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Nx = "remix-router-transitions";
function hC(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  ye(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let k = e.detectErrorBoundary;
    i = (T) => ({ hasErrorBoundary: k(T) });
  } else i = fC;
  let s = {},
    a = pu(e.routes, i, void 0, s),
    o,
    l = e.basename || "/",
    u = e.dataStrategy || gC,
    c = e.patchRoutesOnNavigation,
    d = Ve(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    f = null,
    p = new Set(),
    v = null,
    g = null,
    P = null,
    m = e.hydrationData != null,
    h = vi(a, e.history.location, l),
    y = !1,
    w = null;
  if (h == null && !c) {
    let k = Ht(404, { pathname: e.history.location.pathname }),
      { matches: T, route: M } = ny(a);
    ((h = T), (w = { [M.id]: k }));
  }
  h &&
    !e.hydrationData &&
    Xo(h, a, e.history.location.pathname).active &&
    (h = null);
  let C;
  if (h)
    if (h.some((k) => k.route.lazy)) C = !1;
    else if (!h.some((k) => k.route.loader)) C = !0;
    else if (d.v7_partialHydration) {
      let k = e.hydrationData ? e.hydrationData.loaderData : null,
        T = e.hydrationData ? e.hydrationData.errors : null;
      if (T) {
        let M = h.findIndex((j) => T[j.route.id] !== void 0);
        C = h.slice(0, M + 1).every((j) => !ef(j.route, k, T));
      } else C = h.every((M) => !ef(M.route, k, T));
    } else C = e.hydrationData != null;
  else if (((C = !1), (h = []), d.v7_partialHydration)) {
    let k = Xo(null, a, e.history.location.pathname);
    k.active && k.matches && ((y = !0), (h = k.matches));
  }
  let L,
    S = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: h,
      initialized: C,
      navigation: Uc,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || w,
      fetchers: new Map(),
      blockers: new Map(),
    },
    A = at.Pop,
    F = !1,
    O,
    ue = !1,
    G = new Map(),
    ae = null,
    le = !1,
    Ae = !1,
    nt = [],
    we = new Set(),
    N = new Map(),
    te = 0,
    ie = -1,
    Ee = new Map(),
    Te = new Set(),
    Vt = new Map(),
    Et = new Map(),
    dt = new Set(),
    ft = new Map(),
    gt = new Map(),
    qi;
  function Qo() {
    if (
      ((f = e.history.listen((k) => {
        let { action: T, location: M, delta: j } = k;
        if (qi) {
          (qi(), (qi = void 0));
          return;
        }
        Ui(
          gt.size === 0 || j != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let W = pa({
          currentLocation: S.location,
          nextLocation: M,
          historyAction: T,
        });
        if (W && j != null) {
          let re = new Promise((de) => {
            qi = de;
          });
          (e.history.go(j * -1),
            Ji(W, {
              state: "blocked",
              location: M,
              proceed() {
                (Ji(W, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: M,
                }),
                  re.then(() => e.history.go(j)));
              },
              reset() {
                let de = new Map(S.blockers);
                (de.set(W, Ta), ht({ blockers: de }));
              },
            }));
          return;
        }
        return Vn(T, M);
      })),
      n)
    ) {
      DC(t, G);
      let k = () => MC(t, G);
      (t.addEventListener("pagehide", k),
        (ae = () => t.removeEventListener("pagehide", k)));
    }
    return (
      S.initialized || Vn(at.Pop, S.location, { initialHydration: !0 }),
      L
    );
  }
  function ac() {
    (f && f(),
      ae && ae(),
      p.clear(),
      O && O.abort(),
      S.fetchers.forEach((k, T) => ce(T)),
      S.blockers.forEach((k, T) => Xi(T)));
  }
  function da(k) {
    return (p.add(k), () => p.delete(k));
  }
  function ht(k, T) {
    (T === void 0 && (T = {}), (S = Ve({}, S, k)));
    let M = [],
      j = [];
    (d.v7_fetcherPersist &&
      S.fetchers.forEach((W, re) => {
        W.state === "idle" && (dt.has(re) ? j.push(re) : M.push(re));
      }),
      dt.forEach((W) => {
        !S.fetchers.has(W) && !N.has(W) && j.push(W);
      }),
      [...p].forEach((W) =>
        W(S, {
          deletedFetchers: j,
          viewTransitionOpts: T.viewTransitionOpts,
          flushSync: T.flushSync === !0,
        }),
      ),
      d.v7_fetcherPersist
        ? (M.forEach((W) => S.fetchers.delete(W)), j.forEach((W) => ce(W)))
        : j.forEach((W) => dt.delete(W)));
  }
  function jn(k, T, M) {
    var j, W;
    let { flushSync: re } = M === void 0 ? {} : M,
      de =
        S.actionData != null &&
        S.navigation.formMethod != null &&
        bn(S.navigation.formMethod) &&
        S.navigation.state === "loading" &&
        ((j = k.state) == null ? void 0 : j._isRedirect) !== !0,
      Y;
    T.actionData
      ? Object.keys(T.actionData).length > 0
        ? (Y = T.actionData)
        : (Y = null)
      : de
        ? (Y = S.actionData)
        : (Y = null);
    let J = T.loaderData
        ? ey(S.loaderData, T.loaderData, T.matches || [], T.errors)
        : S.loaderData,
      q = S.blockers;
    q.size > 0 && ((q = new Map(q)), q.forEach((Se, xt) => q.set(xt, Ta)));
    let ne =
      F === !0 ||
      (S.navigation.formMethod != null &&
        bn(S.navigation.formMethod) &&
        ((W = k.state) == null ? void 0 : W._isRedirect) !== !0);
    (o && ((a = o), (o = void 0)),
      le ||
        A === at.Pop ||
        (A === at.Push
          ? e.history.push(k, k.state)
          : A === at.Replace && e.history.replace(k, k.state)));
    let pe;
    if (A === at.Pop) {
      let Se = G.get(S.location.pathname);
      Se && Se.has(k.pathname)
        ? (pe = { currentLocation: S.location, nextLocation: k })
        : G.has(k.pathname) &&
          (pe = { currentLocation: k, nextLocation: S.location });
    } else if (ue) {
      let Se = G.get(S.location.pathname);
      (Se
        ? Se.add(k.pathname)
        : ((Se = new Set([k.pathname])), G.set(S.location.pathname, Se)),
        (pe = { currentLocation: S.location, nextLocation: k }));
    }
    (ht(
      Ve({}, T, {
        actionData: Y,
        loaderData: J,
        historyAction: A,
        location: k,
        initialized: !0,
        navigation: Uc,
        revalidation: "idle",
        restoreScrollPosition: bp(k, T.matches || S.matches),
        preventScrollReset: ne,
        blockers: q,
      }),
      { viewTransitionOpts: pe, flushSync: re === !0 },
    ),
      (A = at.Pop),
      (F = !1),
      (ue = !1),
      (le = !1),
      (Ae = !1),
      (nt = []));
  }
  async function Yi(k, T) {
    if (typeof k == "number") {
      e.history.go(k);
      return;
    }
    let M = Jd(
        S.location,
        S.matches,
        l,
        d.v7_prependBasename,
        k,
        d.v7_relativeSplatPath,
        T == null ? void 0 : T.fromRouteId,
        T == null ? void 0 : T.relative,
      ),
      {
        path: j,
        submission: W,
        error: re,
      } = Km(d.v7_normalizeFormMethod, !1, M, T),
      de = S.location,
      Y = ko(S.location, j, T && T.state);
    Y = Ve({}, Y, e.history.encodeLocation(Y));
    let J = T && T.replace != null ? T.replace : void 0,
      q = at.Push;
    J === !0
      ? (q = at.Replace)
      : J === !1 ||
        (W != null &&
          bn(W.formMethod) &&
          W.formAction === S.location.pathname + S.location.search &&
          (q = at.Replace));
    let ne =
        T && "preventScrollReset" in T ? T.preventScrollReset === !0 : void 0,
      pe = (T && T.flushSync) === !0,
      Se = pa({ currentLocation: de, nextLocation: Y, historyAction: q });
    if (Se) {
      Ji(Se, {
        state: "blocked",
        location: Y,
        proceed() {
          (Ji(Se, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: Y,
          }),
            Yi(k, T));
        },
        reset() {
          let xt = new Map(S.blockers);
          (xt.set(Se, Ta), ht({ blockers: xt }));
        },
      });
      return;
    }
    return await Vn(q, Y, {
      submission: W,
      pendingError: re,
      preventScrollReset: ne,
      replace: T && T.replace,
      enableViewTransition: T && T.viewTransition,
      flushSync: pe,
    });
  }
  function oc() {
    if (
      ($(),
      ht({ revalidation: "loading" }),
      S.navigation.state !== "submitting")
    ) {
      if (S.navigation.state === "idle") {
        Vn(S.historyAction, S.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Vn(A || S.historyAction, S.navigation.location, {
        overrideNavigation: S.navigation,
        enableViewTransition: ue === !0,
      });
    }
  }
  async function Vn(k, T, M) {
    (O && O.abort(),
      (O = null),
      (A = k),
      (le = (M && M.startUninterruptedRevalidation) === !0),
      rS(S.location, S.matches),
      (F = (M && M.preventScrollReset) === !0),
      (ue = (M && M.enableViewTransition) === !0));
    let j = o || a,
      W = M && M.overrideNavigation,
      re =
        M != null &&
        M.initialHydration &&
        S.matches &&
        S.matches.length > 0 &&
        !y
          ? S.matches
          : vi(j, T, l),
      de = (M && M.flushSync) === !0;
    if (
      re &&
      S.initialized &&
      !Ae &&
      _C(S.location, T) &&
      !(M && M.submission && bn(M.submission.formMethod))
    ) {
      jn(T, { matches: re }, { flushSync: de });
      return;
    }
    let Y = Xo(re, j, T.pathname);
    if ((Y.active && Y.matches && (re = Y.matches), !re)) {
      let { error: Le, notFoundMatches: Re, route: Ze } = ma(T.pathname);
      jn(
        T,
        { matches: Re, loaderData: {}, errors: { [Ze.id]: Le } },
        { flushSync: de },
      );
      return;
    }
    O = new AbortController();
    let J = ss(e.history, T, O.signal, M && M.submission),
      q;
    if (M && M.pendingError)
      q = [xi(re).route.id, { type: be.error, error: M.pendingError }];
    else if (M && M.submission && bn(M.submission.formMethod)) {
      let Le = await lc(J, T, M.submission, re, Y.active, {
        replace: M.replace,
        flushSync: de,
      });
      if (Le.shortCircuited) return;
      if (Le.pendingActionResult) {
        let [Re, Ze] = Le.pendingActionResult;
        if (tn(Ze) && _o(Ze.error) && Ze.error.status === 404) {
          ((O = null),
            jn(T, {
              matches: Le.matches,
              loaderData: {},
              errors: { [Re]: Ze.error },
            }));
          return;
        }
      }
      ((re = Le.matches || re),
        (q = Le.pendingActionResult),
        (W = zc(T, M.submission)),
        (de = !1),
        (Y.active = !1),
        (J = ss(e.history, J.url, J.signal)));
    }
    let {
      shortCircuited: ne,
      matches: pe,
      loaderData: Se,
      errors: xt,
    } = await Go(
      J,
      T,
      re,
      Y.active,
      W,
      M && M.submission,
      M && M.fetcherSubmission,
      M && M.replace,
      M && M.initialHydration === !0,
      de,
      q,
    );
    ne ||
      ((O = null),
      jn(T, Ve({ matches: pe || re }, ty(q), { loaderData: Se, errors: xt })));
  }
  async function lc(k, T, M, j, W, re) {
    (re === void 0 && (re = {}), $());
    let de = AC(T, M);
    if ((ht({ navigation: de }, { flushSync: re.flushSync === !0 }), W)) {
      let q = await Jo(j, T.pathname, k.signal);
      if (q.type === "aborted") return { shortCircuited: !0 };
      if (q.type === "error") {
        let ne = xi(q.partialMatches).route.id;
        return {
          matches: q.partialMatches,
          pendingActionResult: [ne, { type: be.error, error: q.error }],
        };
      } else if (q.matches) j = q.matches;
      else {
        let { notFoundMatches: ne, error: pe, route: Se } = ma(T.pathname);
        return {
          matches: ne,
          pendingActionResult: [Se.id, { type: be.error, error: pe }],
        };
      }
    }
    let Y,
      J = Va(j, T);
    if (!J.route.action && !J.route.lazy)
      Y = {
        type: be.error,
        error: Ht(405, {
          method: k.method,
          pathname: T.pathname,
          routeId: J.route.id,
        }),
      };
    else if (
      ((Y = (await R("action", S, k, [J], j, null))[J.route.id]),
      k.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (_i(Y)) {
      let q;
      return (
        re && re.replace != null
          ? (q = re.replace)
          : (q =
              Ym(
                Y.response.headers.get("Location"),
                new URL(k.url),
                l,
                e.history,
              ) ===
              S.location.pathname + S.location.search),
        await x(k, Y, !0, { submission: M, replace: q }),
        { shortCircuited: !0 }
      );
    }
    if ($r(Y)) throw Ht(400, { type: "defer-action" });
    if (tn(Y)) {
      let q = xi(j, J.route.id);
      return (
        (re && re.replace) !== !0 && (A = at.Push),
        { matches: j, pendingActionResult: [q.route.id, Y] }
      );
    }
    return { matches: j, pendingActionResult: [J.route.id, Y] };
  }
  async function Go(k, T, M, j, W, re, de, Y, J, q, ne) {
    let pe = W || zc(T, re),
      Se = re || de || iy(pe),
      xt = !le && (!d.v7_partialHydration || !J);
    if (j) {
      if (xt) {
        let Qe = fa(ne);
        ht(Ve({ navigation: pe }, Qe !== void 0 ? { actionData: Qe } : {}), {
          flushSync: q,
        });
      }
      let Ce = await Jo(M, T.pathname, k.signal);
      if (Ce.type === "aborted") return { shortCircuited: !0 };
      if (Ce.type === "error") {
        let Qe = xi(Ce.partialMatches).route.id;
        return {
          matches: Ce.partialMatches,
          loaderData: {},
          errors: { [Qe]: Ce.error },
        };
      } else if (Ce.matches) M = Ce.matches;
      else {
        let { error: Qe, notFoundMatches: ns, route: va } = ma(T.pathname);
        return { matches: ns, loaderData: {}, errors: { [va.id]: Qe } };
      }
    }
    let Le = o || a,
      [Re, Ze] = Qm(
        e.history,
        S,
        M,
        Se,
        T,
        d.v7_partialHydration && J === !0,
        d.v7_skipActionErrorRevalidation,
        Ae,
        nt,
        we,
        dt,
        Vt,
        Te,
        Le,
        l,
        ne,
      );
    if (
      (es(
        (Ce) =>
          !(M && M.some((Qe) => Qe.route.id === Ce)) ||
          (Re && Re.some((Qe) => Qe.route.id === Ce)),
      ),
      (ie = ++te),
      Re.length === 0 && Ze.length === 0)
    ) {
      let Ce = vt();
      return (
        jn(
          T,
          Ve(
            {
              matches: M,
              loaderData: {},
              errors: ne && tn(ne[1]) ? { [ne[0]]: ne[1].error } : null,
            },
            ty(ne),
            Ce ? { fetchers: new Map(S.fetchers) } : {},
          ),
          { flushSync: q },
        ),
        { shortCircuited: !0 }
      );
    }
    if (xt) {
      let Ce = {};
      if (!j) {
        Ce.navigation = pe;
        let Qe = fa(ne);
        Qe !== void 0 && (Ce.actionData = Qe);
      }
      (Ze.length > 0 && (Ce.fetchers = uc(Ze)), ht(Ce, { flushSync: q }));
    }
    Ze.forEach((Ce) => {
      (Ue(Ce.key), Ce.controller && N.set(Ce.key, Ce.controller));
    });
    let ts = () => Ze.forEach((Ce) => Ue(Ce.key));
    O && O.signal.addEventListener("abort", ts);
    let { loaderResults: ya, fetcherResults: Jn } = await b(S, M, Re, Ze, k);
    if (k.signal.aborted) return { shortCircuited: !0 };
    (O && O.signal.removeEventListener("abort", ts),
      Ze.forEach((Ce) => N.delete(Ce.key)));
    let Fn = wl(ya);
    if (Fn)
      return (
        await x(k, Fn.result, !0, { replace: Y }),
        { shortCircuited: !0 }
      );
    if (((Fn = wl(Jn)), Fn))
      return (
        Te.add(Fn.key),
        await x(k, Fn.result, !0, { replace: Y }),
        { shortCircuited: !0 }
      );
    let { loaderData: dc, errors: ga } = Jm(S, M, ya, ne, Ze, Jn, ft);
    (ft.forEach((Ce, Qe) => {
      Ce.subscribe((ns) => {
        (ns || Ce.done) && ft.delete(Qe);
      });
    }),
      d.v7_partialHydration && J && S.errors && (ga = Ve({}, S.errors, ga)));
    let ci = vt(),
      el = Yo(ie),
      tl = ci || el || Ze.length > 0;
    return Ve(
      { matches: M, loaderData: dc, errors: ga },
      tl ? { fetchers: new Map(S.fetchers) } : {},
    );
  }
  function fa(k) {
    if (k && !tn(k[1])) return { [k[0]]: k[1].data };
    if (S.actionData)
      return Object.keys(S.actionData).length === 0 ? null : S.actionData;
  }
  function uc(k) {
    return (
      k.forEach((T) => {
        let M = S.fetchers.get(T.key),
          j = Ra(void 0, M ? M.data : void 0);
        S.fetchers.set(T.key, j);
      }),
      new Map(S.fetchers)
    );
  }
  function cc(k, T, M, j) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    Ue(k);
    let W = (j && j.flushSync) === !0,
      re = o || a,
      de = Jd(
        S.location,
        S.matches,
        l,
        d.v7_prependBasename,
        M,
        d.v7_relativeSplatPath,
        T,
        j == null ? void 0 : j.relative,
      ),
      Y = vi(re, de, l),
      J = Xo(Y, re, de);
    if ((J.active && J.matches && (Y = J.matches), !Y)) {
      I(k, T, Ht(404, { pathname: de }), { flushSync: W });
      return;
    }
    let {
      path: q,
      submission: ne,
      error: pe,
    } = Km(d.v7_normalizeFormMethod, !0, de, j);
    if (pe) {
      I(k, T, pe, { flushSync: W });
      return;
    }
    let Se = Va(Y, q),
      xt = (j && j.preventScrollReset) === !0;
    if (ne && bn(ne.formMethod)) {
      Rp(k, T, q, Se, Y, J.active, W, xt, ne);
      return;
    }
    (Vt.set(k, { routeId: T, path: q }),
      qo(k, T, q, Se, Y, J.active, W, xt, ne));
  }
  async function Rp(k, T, M, j, W, re, de, Y, J) {
    ($(), Vt.delete(k));
    function q(rt) {
      if (!rt.route.action && !rt.route.lazy) {
        let rs = Ht(405, { method: J.formMethod, pathname: M, routeId: T });
        return (I(k, T, rs, { flushSync: de }), !0);
      }
      return !1;
    }
    if (!re && q(j)) return;
    let ne = S.fetchers.get(k);
    B(k, bC(J, ne), { flushSync: de });
    let pe = new AbortController(),
      Se = ss(e.history, M, pe.signal, J);
    if (re) {
      let rt = await Jo(W, new URL(Se.url).pathname, Se.signal, k);
      if (rt.type === "aborted") return;
      if (rt.type === "error") {
        I(k, T, rt.error, { flushSync: de });
        return;
      } else if (rt.matches) {
        if (((W = rt.matches), (j = Va(W, M)), q(j))) return;
      } else {
        I(k, T, Ht(404, { pathname: M }), { flushSync: de });
        return;
      }
    }
    N.set(k, pe);
    let xt = te,
      Re = (await R("action", S, Se, [j], W, k))[j.route.id];
    if (Se.signal.aborted) {
      N.get(k) === pe && N.delete(k);
      return;
    }
    if (d.v7_fetcherPersist && dt.has(k)) {
      if (_i(Re) || tn(Re)) {
        B(k, Er(void 0));
        return;
      }
    } else {
      if (_i(Re))
        if ((N.delete(k), ie > xt)) {
          B(k, Er(void 0));
          return;
        } else
          return (
            Te.add(k),
            B(k, Ra(J)),
            x(Se, Re, !1, { fetcherSubmission: J, preventScrollReset: Y })
          );
      if (tn(Re)) {
        I(k, T, Re.error);
        return;
      }
    }
    if ($r(Re)) throw Ht(400, { type: "defer-action" });
    let Ze = S.navigation.location || S.location,
      ts = ss(e.history, Ze, pe.signal),
      ya = o || a,
      Jn =
        S.navigation.state !== "idle"
          ? vi(ya, S.navigation.location, l)
          : S.matches;
    ye(Jn, "Didn't find any matches after fetcher action");
    let Fn = ++te;
    Ee.set(k, Fn);
    let dc = Ra(J, Re.data);
    S.fetchers.set(k, dc);
    let [ga, ci] = Qm(
      e.history,
      S,
      Jn,
      J,
      Ze,
      !1,
      d.v7_skipActionErrorRevalidation,
      Ae,
      nt,
      we,
      dt,
      Vt,
      Te,
      ya,
      l,
      [j.route.id, Re],
    );
    (ci
      .filter((rt) => rt.key !== k)
      .forEach((rt) => {
        let rs = rt.key,
          Dp = S.fetchers.get(rs),
          aS = Ra(void 0, Dp ? Dp.data : void 0);
        (S.fetchers.set(rs, aS),
          Ue(rs),
          rt.controller && N.set(rs, rt.controller));
      }),
      ht({ fetchers: new Map(S.fetchers) }));
    let el = () => ci.forEach((rt) => Ue(rt.key));
    pe.signal.addEventListener("abort", el);
    let { loaderResults: tl, fetcherResults: Ce } = await b(S, Jn, ga, ci, ts);
    if (pe.signal.aborted) return;
    (pe.signal.removeEventListener("abort", el),
      Ee.delete(k),
      N.delete(k),
      ci.forEach((rt) => N.delete(rt.key)));
    let Qe = wl(tl);
    if (Qe) return x(ts, Qe.result, !1, { preventScrollReset: Y });
    if (((Qe = wl(Ce)), Qe))
      return (Te.add(Qe.key), x(ts, Qe.result, !1, { preventScrollReset: Y }));
    let { loaderData: ns, errors: va } = Jm(S, Jn, tl, void 0, ci, Ce, ft);
    if (S.fetchers.has(k)) {
      let rt = Er(Re.data);
      S.fetchers.set(k, rt);
    }
    (Yo(Fn),
      S.navigation.state === "loading" && Fn > ie
        ? (ye(A, "Expected pending action"),
          O && O.abort(),
          jn(S.navigation.location, {
            matches: Jn,
            loaderData: ns,
            errors: va,
            fetchers: new Map(S.fetchers),
          }))
        : (ht({
            errors: va,
            loaderData: ey(S.loaderData, ns, Jn, va),
            fetchers: new Map(S.fetchers),
          }),
          (Ae = !1)));
  }
  async function qo(k, T, M, j, W, re, de, Y, J) {
    let q = S.fetchers.get(k);
    B(k, Ra(J, q ? q.data : void 0), { flushSync: de });
    let ne = new AbortController(),
      pe = ss(e.history, M, ne.signal);
    if (re) {
      let Re = await Jo(W, new URL(pe.url).pathname, pe.signal, k);
      if (Re.type === "aborted") return;
      if (Re.type === "error") {
        I(k, T, Re.error, { flushSync: de });
        return;
      } else if (Re.matches) ((W = Re.matches), (j = Va(W, M)));
      else {
        I(k, T, Ht(404, { pathname: M }), { flushSync: de });
        return;
      }
    }
    N.set(k, ne);
    let Se = te,
      Le = (await R("loader", S, pe, [j], W, k))[j.route.id];
    if (
      ($r(Le) && (Le = (await Mh(Le, pe.signal, !0)) || Le),
      N.get(k) === ne && N.delete(k),
      !pe.signal.aborted)
    ) {
      if (dt.has(k)) {
        B(k, Er(void 0));
        return;
      }
      if (_i(Le))
        if (ie > Se) {
          B(k, Er(void 0));
          return;
        } else {
          (Te.add(k), await x(pe, Le, !1, { preventScrollReset: Y }));
          return;
        }
      if (tn(Le)) {
        I(k, T, Le.error);
        return;
      }
      (ye(!$r(Le), "Unhandled fetcher deferred data"), B(k, Er(Le.data)));
    }
  }
  async function x(k, T, M, j) {
    let {
      submission: W,
      fetcherSubmission: re,
      preventScrollReset: de,
      replace: Y,
    } = j === void 0 ? {} : j;
    T.response.headers.has("X-Remix-Revalidate") && (Ae = !0);
    let J = T.response.headers.get("Location");
    (ye(J, "Expected a Location header on the redirect Response"),
      (J = Ym(J, new URL(k.url), l, e.history)));
    let q = ko(S.location, J, { _isRedirect: !0 });
    if (n) {
      let Re = !1;
      if (T.response.headers.has("X-Remix-Reload-Document")) Re = !0;
      else if (Dh.test(J)) {
        const Ze = e.history.createURL(J);
        Re = Ze.origin !== t.location.origin || vr(Ze.pathname, l) == null;
      }
      if (Re) {
        Y ? t.location.replace(J) : t.location.assign(J);
        return;
      }
    }
    O = null;
    let ne =
        Y === !0 || T.response.headers.has("X-Remix-Replace")
          ? at.Replace
          : at.Push,
      { formMethod: pe, formAction: Se, formEncType: xt } = S.navigation;
    !W && !re && pe && Se && xt && (W = iy(S.navigation));
    let Le = W || re;
    if (cC.has(T.response.status) && Le && bn(Le.formMethod))
      await Vn(ne, q, {
        submission: Ve({}, Le, { formAction: J }),
        preventScrollReset: de || F,
        enableViewTransition: M ? ue : void 0,
      });
    else {
      let Re = zc(q, W);
      await Vn(ne, q, {
        overrideNavigation: Re,
        fetcherSubmission: re,
        preventScrollReset: de || F,
        enableViewTransition: M ? ue : void 0,
      });
    }
  }
  async function R(k, T, M, j, W, re) {
    let de,
      Y = {};
    try {
      de = await vC(u, k, T, M, j, W, re, s, i);
    } catch (J) {
      return (
        j.forEach((q) => {
          Y[q.route.id] = { type: be.error, error: J };
        }),
        Y
      );
    }
    for (let [J, q] of Object.entries(de))
      if (CC(q)) {
        let ne = q.result;
        Y[J] = {
          type: be.redirect,
          response: SC(ne, M, J, W, l, d.v7_relativeSplatPath),
        };
      } else Y[J] = await wC(q);
    return Y;
  }
  async function b(k, T, M, j, W) {
    let re = k.matches,
      de = R("loader", k, W, M, T, null),
      Y = Promise.all(
        j.map(async (ne) => {
          if (ne.matches && ne.match && ne.controller) {
            let Se = (
              await R(
                "loader",
                k,
                ss(e.history, ne.path, ne.controller.signal),
                [ne.match],
                ne.matches,
                ne.key,
              )
            )[ne.match.route.id];
            return { [ne.key]: Se };
          } else
            return Promise.resolve({
              [ne.key]: {
                type: be.error,
                error: Ht(404, { pathname: ne.path }),
              },
            });
        }),
      ),
      J = await de,
      q = (await Y).reduce((ne, pe) => Object.assign(ne, pe), {});
    return (
      await Promise.all([TC(T, J, W.signal, re, k.loaderData), RC(T, q, j)]),
      { loaderResults: J, fetcherResults: q }
    );
  }
  function $() {
    ((Ae = !0),
      nt.push(...es()),
      Vt.forEach((k, T) => {
        (N.has(T) && we.add(T), Ue(T));
      }));
  }
  function B(k, T, M) {
    (M === void 0 && (M = {}),
      S.fetchers.set(k, T),
      ht(
        { fetchers: new Map(S.fetchers) },
        { flushSync: (M && M.flushSync) === !0 },
      ));
  }
  function I(k, T, M, j) {
    j === void 0 && (j = {});
    let W = xi(S.matches, T);
    (ce(k),
      ht(
        { errors: { [W.route.id]: M }, fetchers: new Map(S.fetchers) },
        { flushSync: (j && j.flushSync) === !0 },
      ));
  }
  function H(k) {
    return (
      Et.set(k, (Et.get(k) || 0) + 1),
      dt.has(k) && dt.delete(k),
      S.fetchers.get(k) || dC
    );
  }
  function ce(k) {
    let T = S.fetchers.get(k);
    (N.has(k) && !(T && T.state === "loading" && Ee.has(k)) && Ue(k),
      Vt.delete(k),
      Ee.delete(k),
      Te.delete(k),
      d.v7_fetcherPersist && dt.delete(k),
      we.delete(k),
      S.fetchers.delete(k));
  }
  function ve(k) {
    let T = (Et.get(k) || 0) - 1;
    (T <= 0
      ? (Et.delete(k), dt.add(k), d.v7_fetcherPersist || ce(k))
      : Et.set(k, T),
      ht({ fetchers: new Map(S.fetchers) }));
  }
  function Ue(k) {
    let T = N.get(k);
    T && (T.abort(), N.delete(k));
  }
  function Xt(k) {
    for (let T of k) {
      let M = H(T),
        j = Er(M.data);
      S.fetchers.set(T, j);
    }
  }
  function vt() {
    let k = [],
      T = !1;
    for (let M of Te) {
      let j = S.fetchers.get(M);
      (ye(j, "Expected fetcher: " + M),
        j.state === "loading" && (Te.delete(M), k.push(M), (T = !0)));
    }
    return (Xt(k), T);
  }
  function Yo(k) {
    let T = [];
    for (let [M, j] of Ee)
      if (j < k) {
        let W = S.fetchers.get(M);
        (ye(W, "Expected fetcher: " + M),
          W.state === "loading" && (Ue(M), Ee.delete(M), T.push(M)));
      }
    return (Xt(T), T.length > 0);
  }
  function ha(k, T) {
    let M = S.blockers.get(k) || Ta;
    return (gt.get(k) !== T && gt.set(k, T), M);
  }
  function Xi(k) {
    (S.blockers.delete(k), gt.delete(k));
  }
  function Ji(k, T) {
    let M = S.blockers.get(k) || Ta;
    ye(
      (M.state === "unblocked" && T.state === "blocked") ||
        (M.state === "blocked" && T.state === "blocked") ||
        (M.state === "blocked" && T.state === "proceeding") ||
        (M.state === "blocked" && T.state === "unblocked") ||
        (M.state === "proceeding" && T.state === "unblocked"),
      "Invalid blocker state transition: " + M.state + " -> " + T.state,
    );
    let j = new Map(S.blockers);
    (j.set(k, T), ht({ blockers: j }));
  }
  function pa(k) {
    let { currentLocation: T, nextLocation: M, historyAction: j } = k;
    if (gt.size === 0) return;
    gt.size > 1 && Ui(!1, "A router only supports one blocker at a time");
    let W = Array.from(gt.entries()),
      [re, de] = W[W.length - 1],
      Y = S.blockers.get(re);
    if (
      !(Y && Y.state === "proceeding") &&
      de({ currentLocation: T, nextLocation: M, historyAction: j })
    )
      return re;
  }
  function ma(k) {
    let T = Ht(404, { pathname: k }),
      M = o || a,
      { matches: j, route: W } = ny(M);
    return (es(), { notFoundMatches: j, route: W, error: T });
  }
  function es(k) {
    let T = [];
    return (
      ft.forEach((M, j) => {
        (!k || k(j)) && (M.cancel(), T.push(j), ft.delete(j));
      }),
      T
    );
  }
  function nS(k, T, M) {
    if (((v = k), (P = T), (g = M || null), !m && S.navigation === Uc)) {
      m = !0;
      let j = bp(S.location, S.matches);
      j != null && ht({ restoreScrollPosition: j });
    }
    return () => {
      ((v = null), (P = null), (g = null));
    };
  }
  function Ap(k, T) {
    return (
      (g &&
        g(
          k,
          T.map((j) => U_(j, S.loaderData)),
        )) ||
      k.key
    );
  }
  function rS(k, T) {
    if (v && P) {
      let M = Ap(k, T);
      v[M] = P();
    }
  }
  function bp(k, T) {
    if (v) {
      let M = Ap(k, T),
        j = v[M];
      if (typeof j == "number") return j;
    }
    return null;
  }
  function Xo(k, T, M) {
    if (c)
      if (k) {
        if (Object.keys(k[0].params).length > 0)
          return { active: !0, matches: Il(T, M, l, !0) };
      } else return { active: !0, matches: Il(T, M, l, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Jo(k, T, M, j) {
    if (!c) return { type: "success", matches: k };
    let W = k;
    for (;;) {
      let re = o == null,
        de = o || a,
        Y = s;
      try {
        await c({
          signal: M,
          path: T,
          matches: W,
          fetcherKey: j,
          patch: (ne, pe) => {
            M.aborted || qm(ne, pe, de, Y, i);
          },
        });
      } catch (ne) {
        return { type: "error", error: ne, partialMatches: W };
      } finally {
        re && !M.aborted && (a = [...a]);
      }
      if (M.aborted) return { type: "aborted" };
      let J = vi(de, T, l);
      if (J) return { type: "success", matches: J };
      let q = Il(de, T, l, !0);
      if (
        !q ||
        (W.length === q.length &&
          W.every((ne, pe) => ne.route.id === q[pe].route.id))
      )
        return { type: "success", matches: null };
      W = q;
    }
  }
  function iS(k) {
    ((s = {}), (o = pu(k, i, void 0, s)));
  }
  function sS(k, T) {
    let M = o == null;
    (qm(k, T, o || a, s, i), M && ((a = [...a]), ht({})));
  }
  return (
    (L = {
      get basename() {
        return l;
      },
      get future() {
        return d;
      },
      get state() {
        return S;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: Qo,
      subscribe: da,
      enableScrollRestoration: nS,
      navigate: Yi,
      fetch: cc,
      revalidate: oc,
      createHref: (k) => e.history.createHref(k),
      encodeLocation: (k) => e.history.encodeLocation(k),
      getFetcher: H,
      deleteFetcher: ve,
      dispose: ac,
      getBlocker: ha,
      deleteBlocker: Xi,
      patchRoutes: sS,
      _internalFetchControllers: N,
      _internalActiveDeferreds: ft,
      _internalSetRoutes: iS,
    }),
    L
  );
}
function pC(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Jd(e, t, n, r, i, s, a, o) {
  let l, u;
  if (a) {
    l = [];
    for (let d of t)
      if ((l.push(d), d.route.id === a)) {
        u = d;
        break;
      }
  } else ((l = t), (u = t[t.length - 1]));
  let c = qu(i || ".", Gu(l, s), vr(e.pathname, n) || e.pathname, o === "path");
  if (
    (i == null && ((c.search = e.search), (c.hash = e.hash)),
    (i == null || i === "" || i === ".") && u)
  ) {
    let d = Lh(c.search);
    if (u.route.index && !d)
      c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
    else if (!u.route.index && d) {
      let f = new URLSearchParams(c.search),
        p = f.getAll("index");
      (f.delete("index"),
        p.filter((g) => g).forEach((g) => f.append("index", g)));
      let v = f.toString();
      c.search = v ? "?" + v : "";
    }
  }
  return (
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : cr([n, c.pathname])),
    zi(c)
  );
}
function Km(e, t, n, r) {
  if (!r || !pC(r)) return { path: n };
  if (r.formMethod && !EC(r.formMethod))
    return { path: n, error: Ht(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: Ht(400, { type: "invalid-body" }) }),
    s = r.formMethod || "get",
    a = e ? s.toUpperCase() : s.toLowerCase(),
    o = Fx(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!bn(a)) return i();
      let f =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((p, v) => {
                let [g, P] = v;
                return (
                  "" +
                  p +
                  g +
                  "=" +
                  P +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: o,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: f,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!bn(a)) return i();
      try {
        let f = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: o,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  ye(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let l, u;
  if (r.formData) ((l = tf(r.formData)), (u = r.formData));
  else if (r.body instanceof FormData) ((l = tf(r.body)), (u = r.body));
  else if (r.body instanceof URLSearchParams) ((l = r.body), (u = Xm(l)));
  else if (r.body == null) ((l = new URLSearchParams()), (u = new FormData()));
  else
    try {
      ((l = new URLSearchParams(r.body)), (u = Xm(l)));
    } catch {
      return i();
    }
  let c = {
    formMethod: a,
    formAction: o,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (bn(c.formMethod)) return { path: n, submission: c };
  let d = li(n);
  return (
    t && d.search && Lh(d.search) && l.append("index", ""),
    (d.search = "?" + l),
    { path: zi(d), submission: c }
  );
}
function Zm(e, t, n) {
  n === void 0 && (n = !1);
  let r = e.findIndex((i) => i.route.id === t);
  return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function Qm(e, t, n, r, i, s, a, o, l, u, c, d, f, p, v, g) {
  let P = g ? (tn(g[1]) ? g[1].error : g[1].data) : void 0,
    m = e.createURL(t.location),
    h = e.createURL(i),
    y = n;
  s && t.errors
    ? (y = Zm(n, Object.keys(t.errors)[0], !0))
    : g && tn(g[1]) && (y = Zm(n, g[0]));
  let w = g ? g[1].statusCode : void 0,
    C = a && w && w >= 400,
    L = y.filter((A, F) => {
      let { route: O } = A;
      if (O.lazy) return !0;
      if (O.loader == null) return !1;
      if (s) return ef(O, t.loaderData, t.errors);
      if (
        mC(t.loaderData, t.matches[F], A) ||
        l.some((ae) => ae === A.route.id)
      )
        return !0;
      let ue = t.matches[F],
        G = A;
      return Gm(
        A,
        Ve(
          {
            currentUrl: m,
            currentParams: ue.params,
            nextUrl: h,
            nextParams: G.params,
          },
          r,
          {
            actionResult: P,
            actionStatus: w,
            defaultShouldRevalidate: C
              ? !1
              : o ||
                m.pathname + m.search === h.pathname + h.search ||
                m.search !== h.search ||
                jx(ue, G),
          },
        ),
      );
    }),
    S = [];
  return (
    d.forEach((A, F) => {
      if (s || !n.some((le) => le.route.id === A.routeId) || c.has(F)) return;
      let O = vi(p, A.path, v);
      if (!O) {
        S.push({
          key: F,
          routeId: A.routeId,
          path: A.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let ue = t.fetchers.get(F),
        G = Va(O, A.path),
        ae = !1;
      (f.has(F)
        ? (ae = !1)
        : u.has(F)
          ? (u.delete(F), (ae = !0))
          : ue && ue.state !== "idle" && ue.data === void 0
            ? (ae = o)
            : (ae = Gm(
                G,
                Ve(
                  {
                    currentUrl: m,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: h,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: P,
                    actionStatus: w,
                    defaultShouldRevalidate: C ? !1 : o,
                  },
                ),
              )),
        ae &&
          S.push({
            key: F,
            routeId: A.routeId,
            path: A.path,
            matches: O,
            match: G,
            controller: new AbortController(),
          }));
    }),
    [L, S]
  );
}
function ef(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && t[e.id] !== void 0,
    i = n != null && n[e.id] !== void 0;
  return !r && i
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
      ? !0
      : !r && !i;
}
function mC(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function jx(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Gm(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function qm(e, t, n, r, i) {
  var s;
  let a;
  if (e) {
    let u = r[e];
    (ye(u, "No route found to patch children into: routeId = " + e),
      u.children || (u.children = []),
      (a = u.children));
  } else a = n;
  let o = t.filter((u) => !a.some((c) => Vx(u, c))),
    l = pu(
      o,
      i,
      [e || "_", "patch", String(((s = a) == null ? void 0 : s.length) || "0")],
      r,
    );
  a.push(...l);
}
function Vx(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
        e.path === t.path &&
        e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((n, r) => {
            var i;
            return (i = t.children) == null ? void 0 : i.some((s) => Vx(n, s));
          })
      : !1;
}
async function yC(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  ye(i, "No route found in manifest");
  let s = {};
  for (let a in r) {
    let l = i[a] !== void 0 && a !== "hasErrorBoundary";
    (Ui(
      !l,
      'Route "' +
        i.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.'),
    ),
      !l && !F_.has(a) && (s[a] = r[a]));
  }
  (Object.assign(i, s), Object.assign(i, Ve({}, t(i), { lazy: void 0 })));
}
async function gC(e) {
  let { matches: t } = e,
    n = t.filter((i) => i.shouldLoad);
  return (await Promise.all(n.map((i) => i.resolve()))).reduce(
    (i, s, a) => Object.assign(i, { [n[a].route.id]: s }),
    {},
  );
}
async function vC(e, t, n, r, i, s, a, o, l, u) {
  let c = s.map((p) => (p.route.lazy ? yC(p.route, l, o) : void 0)),
    d = s.map((p, v) => {
      let g = c[v],
        P = i.some((h) => h.route.id === p.route.id);
      return Ve({}, p, {
        shouldLoad: P,
        resolve: async (h) => (
          h &&
            r.method === "GET" &&
            (p.route.lazy || p.route.loader) &&
            (P = !0),
          P
            ? xC(t, r, p, g, h, u)
            : Promise.resolve({ type: be.data, result: void 0 })
        ),
      });
    }),
    f = await e({
      matches: d,
      request: r,
      params: s[0].params,
      fetcherKey: a,
      context: u,
    });
  try {
    await Promise.all(c);
  } catch {}
  return f;
}
async function xC(e, t, n, r, i, s) {
  let a,
    o,
    l = (u) => {
      let c,
        d = new Promise((v, g) => (c = g));
      ((o = () => c()), t.signal.addEventListener("abort", o));
      let f = (v) =>
          typeof u != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]"),
                ),
              )
            : u(
                { request: t, params: n.params, context: s },
                ...(v !== void 0 ? [v] : []),
              ),
        p = (async () => {
          try {
            return { type: "data", result: await (i ? i((g) => f(g)) : f()) };
          } catch (v) {
            return { type: "error", result: v };
          }
        })();
      return Promise.race([p, d]);
    };
  try {
    let u = n.route[e];
    if (r)
      if (u) {
        let c,
          [d] = await Promise.all([
            l(u).catch((f) => {
              c = f;
            }),
            r,
          ]);
        if (c !== void 0) throw c;
        a = d;
      } else if ((await r, (u = n.route[e]), u)) a = await l(u);
      else if (e === "action") {
        let c = new URL(t.url),
          d = c.pathname + c.search;
        throw Ht(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: be.data, result: void 0 };
    else if (u) a = await l(u);
    else {
      let c = new URL(t.url),
        d = c.pathname + c.search;
      throw Ht(404, { pathname: d });
    }
    ye(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (u) {
    return { type: be.error, result: u };
  } finally {
    o && t.signal.removeEventListener("abort", o);
  }
  return a;
}
async function wC(e) {
  let { result: t, type: n } = e;
  if (Ix(t)) {
    let d;
    try {
      let f = t.headers.get("Content-Type");
      f && /\bapplication\/json\b/.test(f)
        ? t.body == null
          ? (d = null)
          : (d = await t.json())
        : (d = await t.text());
    } catch (f) {
      return { type: be.error, error: f };
    }
    return n === be.error
      ? {
          type: be.error,
          error: new yu(t.status, t.statusText, d),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: be.data, data: d, statusCode: t.status, headers: t.headers };
  }
  if (n === be.error) {
    if (ry(t)) {
      var r, i;
      if (t.data instanceof Error) {
        var s, a;
        return {
          type: be.error,
          error: t.data,
          statusCode: (s = t.init) == null ? void 0 : s.status,
          headers:
            (a = t.init) != null && a.headers
              ? new Headers(t.init.headers)
              : void 0,
        };
      }
      return {
        type: be.error,
        error: new yu(
          ((r = t.init) == null ? void 0 : r.status) || 500,
          void 0,
          t.data,
        ),
        statusCode: _o(t) ? t.status : void 0,
        headers:
          (i = t.init) != null && i.headers
            ? new Headers(t.init.headers)
            : void 0,
      };
    }
    return { type: be.error, error: t, statusCode: _o(t) ? t.status : void 0 };
  }
  if (PC(t)) {
    var o, l;
    return {
      type: be.deferred,
      deferredData: t,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers:
        ((l = t.init) == null ? void 0 : l.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (ry(t)) {
    var u, c;
    return {
      type: be.data,
      data: t.data,
      statusCode: (u = t.init) == null ? void 0 : u.status,
      headers:
        (c = t.init) != null && c.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: be.data, data: t };
}
function SC(e, t, n, r, i, s) {
  let a = e.headers.get("Location");
  if (
    (ye(
      a,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Dh.test(a))
  ) {
    let o = r.slice(0, r.findIndex((l) => l.route.id === n) + 1);
    ((a = Jd(new URL(t.url), o, i, !0, a, s)), e.headers.set("Location", a));
  }
  return e;
}
function Ym(e, t, n, r) {
  let i = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    "javascript:",
  ];
  if (Dh.test(e)) {
    let s = e,
      a = s.startsWith("//") ? new URL(t.protocol + s) : new URL(s);
    if (i.includes(a.protocol)) throw new Error("Invalid redirect location");
    let o = vr(a.pathname, n) != null;
    if (a.origin === t.origin && o) return a.pathname + a.search + a.hash;
  }
  try {
    let s = r.createURL(e);
    if (i.includes(s.protocol)) throw new Error("Invalid redirect location");
  } catch {}
  return e;
}
function ss(e, t, n, r) {
  let i = e.createURL(Fx(t)).toString(),
    s = { signal: n };
  if (r && bn(r.formMethod)) {
    let { formMethod: a, formEncType: o } = r;
    ((s.method = a.toUpperCase()),
      o === "application/json"
        ? ((s.headers = new Headers({ "Content-Type": o })),
          (s.body = JSON.stringify(r.json)))
        : o === "text/plain"
          ? (s.body = r.text)
          : o === "application/x-www-form-urlencoded" && r.formData
            ? (s.body = tf(r.formData))
            : (s.body = r.formData));
  }
  return new Request(i, s);
}
function tf(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Xm(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function kC(e, t, n, r, i) {
  let s = {},
    a = null,
    o,
    l = !1,
    u = {},
    c = n && tn(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((d) => {
      if (!(d.route.id in t)) return;
      let f = d.route.id,
        p = t[f];
      if (
        (ye(!_i(p), "Cannot handle redirect results in processLoaderData"),
        tn(p))
      ) {
        let v = p.error;
        (c !== void 0 && ((v = c), (c = void 0)), (a = a || {}));
        {
          let g = xi(e, f);
          a[g.route.id] == null && (a[g.route.id] = v);
        }
        ((s[f] = void 0),
          l || ((l = !0), (o = _o(p.error) ? p.error.status : 500)),
          p.headers && (u[f] = p.headers));
      } else
        $r(p)
          ? (r.set(f, p.deferredData),
            (s[f] = p.deferredData.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !l &&
              (o = p.statusCode),
            p.headers && (u[f] = p.headers))
          : ((s[f] = p.data),
            p.statusCode && p.statusCode !== 200 && !l && (o = p.statusCode),
            p.headers && (u[f] = p.headers));
    }),
    c !== void 0 && n && ((a = { [n[0]]: c }), (s[n[0]] = void 0)),
    { loaderData: s, errors: a, statusCode: o || 200, loaderHeaders: u }
  );
}
function Jm(e, t, n, r, i, s, a) {
  let { loaderData: o, errors: l } = kC(t, n, r, a);
  return (
    i.forEach((u) => {
      let { key: c, match: d, controller: f } = u,
        p = s[c];
      if (
        (ye(p, "Did not find corresponding fetcher result"),
        !(f && f.signal.aborted))
      )
        if (tn(p)) {
          let v = xi(e.matches, d == null ? void 0 : d.route.id);
          ((l && l[v.route.id]) || (l = Ve({}, l, { [v.route.id]: p.error })),
            e.fetchers.delete(c));
        } else if (_i(p)) ye(!1, "Unhandled fetcher revalidation redirect");
        else if ($r(p)) ye(!1, "Unhandled fetcher deferred data");
        else {
          let v = Er(p.data);
          e.fetchers.set(c, v);
        }
    }),
    { loaderData: o, errors: l }
  );
}
function ey(e, t, n, r) {
  let i = Ve({}, t);
  for (let s of n) {
    let a = s.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (i[a] = t[a])
        : e[a] !== void 0 && s.route.loader && (i[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return i;
}
function ty(e) {
  return e
    ? tn(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function xi(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function ny(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Ht(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: i,
      type: s,
      message: a,
    } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        i && n && r
          ? (l =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : s === "defer-action"
            ? (l = "defer() is not supported in actions")
            : s === "invalid-body" && (l = "Unable to encode submission body"))
      : e === 403
        ? ((o = "Forbidden"),
          (l = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((o = "Not Found"), (l = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((o = "Method Not Allowed"),
            i && n && r
              ? (l =
                  "You made a " +
                  i.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new yu(e || 500, o, new Error(l), !0)
  );
}
function wl(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, i] = t[n];
    if (_i(i)) return { key: r, result: i };
  }
}
function Fx(e) {
  let t = typeof e == "string" ? li(e) : e;
  return zi(Ve({}, t, { hash: "" }));
}
function _C(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function CC(e) {
  return Ix(e.result) && uC.has(e.result.status);
}
function $r(e) {
  return e.type === be.deferred;
}
function tn(e) {
  return e.type === be.error;
}
function _i(e) {
  return (e && e.type) === be.redirect;
}
function ry(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function PC(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Ix(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function EC(e) {
  return lC.has(e.toLowerCase());
}
function bn(e) {
  return aC.has(e.toLowerCase());
}
async function TC(e, t, n, r, i) {
  let s = Object.entries(t);
  for (let a = 0; a < s.length; a++) {
    let [o, l] = s[a],
      u = e.find((f) => (f == null ? void 0 : f.route.id) === o);
    if (!u) continue;
    let c = r.find((f) => f.route.id === u.route.id),
      d = c != null && !jx(c, u) && (i && i[u.route.id]) !== void 0;
    $r(l) &&
      d &&
      (await Mh(l, n, !1).then((f) => {
        f && (t[o] = f);
      }));
  }
}
async function RC(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: i, routeId: s, controller: a } = n[r],
      o = t[i];
    e.find((u) => (u == null ? void 0 : u.route.id) === s) &&
      $r(o) &&
      (ye(
        a,
        "Expected an AbortController for revalidating fetcher deferred result",
      ),
      await Mh(o, a.signal, !0).then((u) => {
        u && (t[i] = u);
      }));
  }
}
async function Mh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: be.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: be.error, error: i };
      }
    return { type: be.data, data: e.deferredData.data };
  }
}
function Lh(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Va(e, t) {
  let n = typeof t == "string" ? li(t).search : t.search;
  if (e[e.length - 1].route.index && Lh(n || "")) return e[e.length - 1];
  let r = Lx(e);
  return r[r.length - 1];
}
function iy(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: s,
    json: a,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (s != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: s,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function zc(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function AC(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ra(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function bC(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Er(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function DC(e, t) {
  try {
    let n = e.sessionStorage.getItem(Nx);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, s] of Object.entries(r || {}))
        s && Array.isArray(s) && t.set(i, new Set(s || []));
    }
  } catch {}
}
function MC(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(Nx, JSON.stringify(n));
    } catch (r) {
      Ui(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gu() {
  return (
    (gu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gu.apply(this, arguments)
  );
}
const zo = _.createContext(null),
  Oh = _.createContext(null),
  kr = _.createContext(null),
  Nh = _.createContext(null),
  Xn = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ux = _.createContext(null);
function LC(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  la() || ye(!1);
  let { basename: r, navigator: i } = _.useContext(kr),
    { hash: s, pathname: a, search: o } = Xu(e, { relative: n }),
    l = a;
  return (
    r !== "/" && (l = a === "/" ? r : cr([r, a])),
    i.createHref({ pathname: l, search: o, hash: s })
  );
}
function la() {
  return _.useContext(Nh) != null;
}
function Qi() {
  return (la() || ye(!1), _.useContext(Nh).location);
}
function zx(e) {
  _.useContext(kr).static || _.useLayoutEffect(e);
}
function Yu() {
  let { isDataRoute: e } = _.useContext(Xn);
  return e ? ZC() : OC();
}
function OC() {
  la() || ye(!1);
  let e = _.useContext(zo),
    { basename: t, future: n, navigator: r } = _.useContext(kr),
    { matches: i } = _.useContext(Xn),
    { pathname: s } = Qi(),
    a = JSON.stringify(Gu(i, n.v7_relativeSplatPath)),
    o = _.useRef(!1);
  return (
    zx(() => {
      o.current = !0;
    }),
    _.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !o.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = qu(u, JSON.parse(a), s, c.relative === "path");
        (e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : cr([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c));
      },
      [t, r, a, s, e],
    )
  );
}
const NC = _.createContext(null);
function jC(e) {
  let t = _.useContext(Xn).outlet;
  return t && _.createElement(NC.Provider, { value: e }, t);
}
function kM() {
  let { matches: e } = _.useContext(Xn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Xu(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = _.useContext(kr),
    { matches: i } = _.useContext(Xn),
    { pathname: s } = Qi(),
    a = JSON.stringify(Gu(i, r.v7_relativeSplatPath));
  return _.useMemo(() => qu(e, JSON.parse(a), s, n === "path"), [e, a, s, n]);
}
function VC(e, t, n, r) {
  la() || ye(!1);
  let { navigator: i } = _.useContext(kr),
    { matches: s } = _.useContext(Xn),
    a = s[s.length - 1],
    o = a ? a.params : {};
  a && a.pathname;
  let l = a ? a.pathnameBase : "/";
  a && a.route;
  let u = Qi(),
    c;
  c = u;
  let d = c.pathname || "/",
    f = d;
  if (l !== "/") {
    let g = l.replace(/^\//, "").split("/");
    f = "/" + d.replace(/^\//, "").split("/").slice(g.length).join("/");
  }
  let p = vi(e, { pathname: f });
  return BC(
    p &&
      p.map((g) =>
        Object.assign({}, g, {
          params: Object.assign({}, o, g.params),
          pathname: cr([
            l,
            i.encodeLocation
              ? i.encodeLocation(g.pathname).pathname
              : g.pathname,
          ]),
          pathnameBase:
            g.pathnameBase === "/"
              ? l
              : cr([
                  l,
                  i.encodeLocation
                    ? i.encodeLocation(g.pathnameBase).pathname
                    : g.pathnameBase,
                ]),
        }),
      ),
    s,
    n,
    r,
  );
}
function FC() {
  let e = KC(),
    t = _o(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? _.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const IC = _.createElement(FC, null);
class UC extends _.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          Xn.Provider,
          { value: this.props.routeContext },
          _.createElement(Ux.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function zC(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = _.useContext(zo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(Xn.Provider, { value: t }, r)
  );
}
function BC(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let a = e,
    o = (i = n) == null ? void 0 : i.errors;
  if (o != null) {
    let c = a.findIndex(
      (d) => d.route.id && (o == null ? void 0 : o[d.route.id]) !== void 0,
    );
    (c >= 0 || ye(!1), (a = a.slice(0, Math.min(a.length, c + 1))));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let d = a[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: p } = n,
          v =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!p || p[d.route.id] === void 0);
        if (d.route.lazy || v) {
          ((l = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]));
          break;
        }
      }
    }
  return a.reduceRight((c, d, f) => {
    let p,
      v = !1,
      g = null,
      P = null;
    n &&
      ((p = o && d.route.id ? o[d.route.id] : void 0),
      (g = d.route.errorElement || IC),
      l &&
        (u < 0 && f === 0
          ? (QC("route-fallback"), (v = !0), (P = null))
          : u === f &&
            ((v = !0), (P = d.route.hydrateFallbackElement || null))));
    let m = t.concat(a.slice(0, f + 1)),
      h = () => {
        let y;
        return (
          p
            ? (y = g)
            : v
              ? (y = P)
              : d.route.Component
                ? (y = _.createElement(d.route.Component, null))
                : d.route.element
                  ? (y = d.route.element)
                  : (y = c),
          _.createElement(zC, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? _.createElement(UC, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: p,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Bx = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Bx || {}),
  $x = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })($x || {});
function $C(e) {
  let t = _.useContext(zo);
  return (t || ye(!1), t);
}
function WC(e) {
  let t = _.useContext(Oh);
  return (t || ye(!1), t);
}
function HC(e) {
  let t = _.useContext(Xn);
  return (t || ye(!1), t);
}
function Wx(e) {
  let t = HC(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || ye(!1), n.route.id);
}
function KC() {
  var e;
  let t = _.useContext(Ux),
    n = WC(),
    r = Wx();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ZC() {
  let { router: e } = $C(Bx.UseNavigateStable),
    t = Wx($x.UseNavigateStable),
    n = _.useRef(!1);
  return (
    zx(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (i, s) {
        (s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, gu({ fromRouteId: t }, s))));
      },
      [e, t],
    )
  );
}
const sy = {};
function QC(e, t, n) {
  sy[e] || (sy[e] = !0);
}
function GC(e, t) {
  (e == null || e.v7_startTransition,
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 &&
      (!t || t.v7_relativeSplatPath),
    t &&
      (t.v7_fetcherPersist,
      t.v7_normalizeFormMethod,
      t.v7_partialHydration,
      t.v7_skipActionErrorRevalidation));
}
function ay(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  la() || ye(!1);
  let { future: s, static: a } = _.useContext(kr),
    { matches: o } = _.useContext(Xn),
    { pathname: l } = Qi(),
    u = Yu(),
    c = qu(t, Gu(o, s.v7_relativeSplatPath), l, i === "path"),
    d = JSON.stringify(c);
  return (
    _.useEffect(
      () => u(JSON.parse(d), { replace: n, state: r, relative: i }),
      [u, d, i, n, r],
    ),
    null
  );
}
function qC(e) {
  return jC(e.context);
}
function YC(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = at.Pop,
    navigator: s,
    static: a = !1,
    future: o,
  } = e;
  la() && ye(!1);
  let l = t.replace(/^\/*/, "/"),
    u = _.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: a,
        future: gu({ v7_relativeSplatPath: !1 }, o),
      }),
      [l, o, s, a],
    );
  typeof r == "string" && (r = li(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: p = null,
      key: v = "default",
    } = r,
    g = _.useMemo(() => {
      let P = vr(c, l);
      return P == null
        ? null
        : {
            location: { pathname: P, search: d, hash: f, state: p, key: v },
            navigationType: i,
          };
    }, [l, c, d, f, p, v, i]);
  return g == null
    ? null
    : _.createElement(
        kr.Provider,
        { value: u },
        _.createElement(Nh.Provider, { children: n, value: g }),
      );
}
new Promise(() => {});
function XC(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: _.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: _.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: _.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gs() {
  return (
    (Gs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gs.apply(this, arguments)
  );
}
function Hx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    ((i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]));
  return n;
}
function JC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function eP(e, t) {
  return e.button === 0 && (!t || t === "_self") && !JC(e);
}
function nf(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((i) => [n, i]) : [[n, r]]);
          }, []),
    )
  );
}
function tP(e, t) {
  let n = nf(e);
  return (
    t &&
      t.forEach((r, i) => {
        n.has(i) ||
          t.getAll(i).forEach((s) => {
            n.append(i, s);
          });
      }),
    n
  );
}
const nP = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  rP = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  iP = "6";
try {
  window.__reactRouterVersion = iP;
} catch {}
function sP(e, t) {
  return hC({
    basename: void 0,
    future: Gs({}, void 0, { v7_prependBasename: !0 }),
    history: N_({ window: void 0 }),
    hydrationData: aP(),
    routes: e,
    mapRouteProperties: XC,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function aP() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return (t && t.errors && (t = Gs({}, t, { errors: oP(t.errors) })), t);
}
function oP(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new yu(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let s = window[i.__subType];
        if (typeof s == "function")
          try {
            let a = new s(i.message);
            ((a.stack = ""), (n[r] = a));
          } catch {}
      }
      if (n[r] == null) {
        let s = new Error(i.message);
        ((s.stack = ""), (n[r] = s));
      }
    } else n[r] = i;
  return n;
}
const Kx = _.createContext({ isTransitioning: !1 }),
  lP = _.createContext(new Map()),
  uP = "startTransition",
  oy = kS[uP],
  cP = "flushSync",
  ly = O_[cP];
function dP(e) {
  oy ? oy(e) : e();
}
function Aa(e) {
  ly ? ly(e) : e();
}
class fP {
  constructor() {
    ((this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        ((this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          }));
      })));
  }
}
function hP(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, s] = _.useState(n.state),
    [a, o] = _.useState(),
    [l, u] = _.useState({ isTransitioning: !1 }),
    [c, d] = _.useState(),
    [f, p] = _.useState(),
    [v, g] = _.useState(),
    P = _.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    h = _.useCallback(
      (A) => {
        m ? dP(A) : A();
      },
      [m],
    ),
    y = _.useCallback(
      (A, F) => {
        let { deletedFetchers: O, flushSync: ue, viewTransitionOpts: G } = F;
        (A.fetchers.forEach((le, Ae) => {
          le.data !== void 0 && P.current.set(Ae, le.data);
        }),
          O.forEach((le) => P.current.delete(le)));
        let ae =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!G || ae) {
          ue ? Aa(() => s(A)) : h(() => s(A));
          return;
        }
        if (ue) {
          Aa(() => {
            (f && (c && c.resolve(), f.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: G.currentLocation,
                nextLocation: G.nextLocation,
              }));
          });
          let le = n.window.document.startViewTransition(() => {
            Aa(() => s(A));
          });
          (le.finished.finally(() => {
            Aa(() => {
              (d(void 0), p(void 0), o(void 0), u({ isTransitioning: !1 }));
            });
          }),
            Aa(() => p(le)));
          return;
        }
        f
          ? (c && c.resolve(),
            f.skipTransition(),
            g({
              state: A,
              currentLocation: G.currentLocation,
              nextLocation: G.nextLocation,
            }))
          : (o(A),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: G.currentLocation,
              nextLocation: G.nextLocation,
            }));
      },
      [n.window, f, c, P, h],
    );
  (_.useLayoutEffect(() => n.subscribe(y), [n, y]),
    _.useEffect(() => {
      l.isTransitioning && !l.flushSync && d(new fP());
    }, [l]),
    _.useEffect(() => {
      if (c && a && n.window) {
        let A = a,
          F = c.promise,
          O = n.window.document.startViewTransition(async () => {
            (h(() => s(A)), await F);
          });
        (O.finished.finally(() => {
          (d(void 0), p(void 0), o(void 0), u({ isTransitioning: !1 }));
        }),
          p(O));
      }
    }, [h, a, c, n.window]),
    _.useEffect(() => {
      c && a && i.location.key === a.location.key && c.resolve();
    }, [c, f, i.location, a]),
    _.useEffect(() => {
      !l.isTransitioning &&
        v &&
        (o(v.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: v.currentLocation,
          nextLocation: v.nextLocation,
        }),
        g(void 0));
    }, [l.isTransitioning, v]),
    _.useEffect(() => {}, []));
  let w = _.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (A) => n.navigate(A),
        push: (A, F, O) =>
          n.navigate(A, {
            state: F,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (A, F, O) =>
          n.navigate(A, {
            replace: !0,
            state: F,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [n],
    ),
    C = n.basename || "/",
    L = _.useMemo(
      () => ({ router: n, navigator: w, static: !1, basename: C }),
      [n, w, C],
    ),
    S = _.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath],
    );
  return (
    _.useEffect(() => GC(r, n.future), [r, n.future]),
    _.createElement(
      _.Fragment,
      null,
      _.createElement(
        zo.Provider,
        { value: L },
        _.createElement(
          Oh.Provider,
          { value: i },
          _.createElement(
            lP.Provider,
            { value: P.current },
            _.createElement(
              Kx.Provider,
              { value: l },
              _.createElement(
                YC,
                {
                  basename: C,
                  location: i.location,
                  navigationType: i.historyAction,
                  navigator: w,
                  future: S,
                },
                i.initialized || n.future.v7_partialHydration
                  ? _.createElement(pP, {
                      routes: n.routes,
                      future: n.future,
                      state: i,
                    })
                  : t,
              ),
            ),
          ),
        ),
      ),
      null,
    )
  );
}
const pP = _.memo(mP);
function mP(e) {
  let { routes: t, future: n, state: r } = e;
  return VC(t, void 0, r, n);
}
const yP =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  gP = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  vP = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: a,
        state: o,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: d,
      } = t,
      f = Hx(t, nP),
      { basename: p } = _.useContext(kr),
      v,
      g = !1;
    if (typeof u == "string" && gP.test(u) && ((v = u), yP))
      try {
        let y = new URL(window.location.href),
          w = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          C = vr(w.pathname, p);
        w.origin === y.origin && C != null
          ? (u = C + w.search + w.hash)
          : (g = !0);
      } catch {}
    let P = LC(u, { relative: i }),
      m = SP(u, {
        replace: a,
        state: o,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: d,
      });
    function h(y) {
      (r && r(y), y.defaultPrevented || m(y));
    }
    return _.createElement(
      "a",
      Gs({}, f, { href: v || P, onClick: g || s ? r : h, ref: n, target: l }),
    );
  }),
  xP = _.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: a = !1,
        style: o,
        to: l,
        viewTransition: u,
        children: c,
      } = t,
      d = Hx(t, rP),
      f = Xu(l, { relative: d.relative }),
      p = Qi(),
      v = _.useContext(Oh),
      { navigator: g, basename: P } = _.useContext(kr),
      m = v != null && kP(f) && u === !0,
      h = g.encodeLocation ? g.encodeLocation(f).pathname : f.pathname,
      y = p.pathname,
      w =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null;
    (i ||
      ((y = y.toLowerCase()),
      (w = w ? w.toLowerCase() : null),
      (h = h.toLowerCase())),
      w && P && (w = vr(w, P) || w));
    const C = h !== "/" && h.endsWith("/") ? h.length - 1 : h.length;
    let L = y === h || (!a && y.startsWith(h) && y.charAt(C) === "/"),
      S =
        w != null &&
        (w === h || (!a && w.startsWith(h) && w.charAt(h.length) === "/")),
      A = { isActive: L, isPending: S, isTransitioning: m },
      F = L ? r : void 0,
      O;
    typeof s == "function"
      ? (O = s(A))
      : (O = [
          s,
          L ? "active" : null,
          S ? "pending" : null,
          m ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let ue = typeof o == "function" ? o(A) : o;
    return _.createElement(
      vP,
      Gs({}, d, {
        "aria-current": F,
        className: O,
        ref: n,
        style: ue,
        to: l,
        viewTransition: u,
      }),
      typeof c == "function" ? c(A) : c,
    );
  });
var rf;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(rf || (rf = {}));
var uy;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(uy || (uy = {}));
function wP(e) {
  let t = _.useContext(zo);
  return (t || ye(!1), t);
}
function SP(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: a,
      viewTransition: o,
    } = t === void 0 ? {} : t,
    l = Yu(),
    u = Qi(),
    c = Xu(e, { relative: a });
  return _.useCallback(
    (d) => {
      if (eP(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : zi(u) === zi(c);
        l(e, {
          replace: f,
          state: i,
          preventScrollReset: s,
          relative: a,
          viewTransition: o,
        });
      }
    },
    [u, l, c, r, i, n, e, s, a, o],
  );
}
function _M(e) {
  let t = _.useRef(nf(e)),
    n = _.useRef(!1),
    r = Qi(),
    i = _.useMemo(() => tP(r.search, n.current ? null : t.current), [r.search]),
    s = Yu(),
    a = _.useCallback(
      (o, l) => {
        const u = nf(typeof o == "function" ? o(i) : o);
        ((n.current = !0), s("?" + u, l));
      },
      [s, i],
    );
  return [i, a];
}
function kP(e, t) {
  t === void 0 && (t = {});
  let n = _.useContext(Kx);
  n == null && ye(!1);
  let { basename: r } = wP(rf.useViewTransitionState),
    i = Xu(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let s = vr(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    a = vr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return mu(i.pathname, a) != null || mu(i.pathname, s) != null;
}
var Bo = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Ei,
  Or,
  Ls,
  ov,
  _P =
    ((ov = class extends Bo {
      constructor() {
        super();
        me(this, Ei);
        me(this, Or);
        me(this, Ls);
        se(this, Ls, (t) => {
          if (typeof window < "u" && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        D(this, Or) || this.setEventListener(D(this, Ls));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = D(this, Or)) == null || t.call(this), se(this, Or, void 0));
      }
      setEventListener(t) {
        var n;
        (se(this, Ls, t),
          (n = D(this, Or)) == null || n.call(this),
          se(
            this,
            Or,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        D(this, Ei) !== t && (se(this, Ei, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof D(this, Ei) == "boolean"
          ? D(this, Ei)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Ei = new WeakMap()),
    (Or = new WeakMap()),
    (Ls = new WeakMap()),
    ov),
  Zx = new _P(),
  CP = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  Nr,
  Nf,
  lv,
  PP =
    ((lv = class {
      constructor() {
        me(this, Nr, CP);
        me(this, Nf, !1);
      }
      setTimeoutProvider(e) {
        se(this, Nr, e);
      }
      setTimeout(e, t) {
        return D(this, Nr).setTimeout(e, t);
      }
      clearTimeout(e) {
        D(this, Nr).clearTimeout(e);
      }
      setInterval(e, t) {
        return D(this, Nr).setInterval(e, t);
      }
      clearInterval(e) {
        D(this, Nr).clearInterval(e);
      }
    }),
    (Nr = new WeakMap()),
    (Nf = new WeakMap()),
    lv),
  sf = new PP();
function EP(e) {
  setTimeout(e, 0);
}
var TP = typeof window > "u" || "Deno" in globalThis;
function pn() {}
function RP(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function AP(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function bP(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function af(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function DP(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cy(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: s,
    queryKey: a,
    stale: o,
  } = e;
  if (a) {
    if (r) {
      if (t.queryHash !== jh(a, t.options)) return !1;
    } else if (!Co(t.queryKey, a)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof o == "boolean" && t.isStale() !== o) ||
    (i && i !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function dy(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Bi(t.options.mutationKey) !== Bi(s)) return !1;
    } else if (!Co(t.options.mutationKey, s)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function jh(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Bi)(e);
}
function Bi(e) {
  return JSON.stringify(e, (t, n) =>
    of(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n,
  );
}
function Co(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => Co(e[n], t[n]))
        : !1;
}
var MP = Object.prototype.hasOwnProperty;
function Qx(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  const r = fy(e) && fy(t);
  if (!r && !(of(e) && of(t))) return t;
  const s = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    l = r ? new Array(o) : {};
  let u = 0;
  for (let c = 0; c < o; c++) {
    const d = r ? c : a[c],
      f = e[d],
      p = t[d];
    if (f === p) {
      ((l[d] = f), (r ? c < s : MP.call(e, d)) && u++);
      continue;
    }
    if (
      f === null ||
      p === null ||
      typeof f != "object" ||
      typeof p != "object"
    ) {
      l[d] = p;
      continue;
    }
    const v = Qx(f, p, n + 1);
    ((l[d] = v), v === f && u++);
  }
  return s === o && u === s ? e : l;
}
function LP(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function fy(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function of(e) {
  if (!hy(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !hy(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function hy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function OP(e) {
  return new Promise((t) => {
    sf.setTimeout(t, e);
  });
}
function NP(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? Qx(e, t)
      : t;
}
function jP(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function VP(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Vh = Symbol();
function Gx(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Vh
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function FP(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function IP(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        i ?? (i = t()),
        r ||
          ((r = !0),
          i.aborted ? n() : i.addEventListener("abort", n, { once: !0 })),
        i
      ),
    }),
    e
  );
}
var qx = (() => {
  let e = () => TP;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function UP() {
  let e, t;
  const n = new Promise((i, s) => {
    ((e = i), (t = s));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(i) {
    (Object.assign(n, i), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (i) => {
      (r({ status: "fulfilled", value: i }), e(i));
    }),
    (n.reject = (i) => {
      (r({ status: "rejected", reason: i }), t(i));
    }),
    n
  );
}
var zP = EP;
function BP() {
  let e = [],
    t = 0,
    n = (o) => {
      o();
    },
    r = (o) => {
      o();
    },
    i = zP;
  const s = (o) => {
      t
        ? e.push(o)
        : i(() => {
            n(o);
          });
    },
    a = () => {
      const o = e;
      ((e = []),
        o.length &&
          i(() => {
            r(() => {
              o.forEach((l) => {
                n(l);
              });
            });
          }));
    };
  return {
    batch: (o) => {
      let l;
      t++;
      try {
        l = o();
      } finally {
        (t--, t || a());
      }
      return l;
    },
    batchCalls:
      (o) =>
      (...l) => {
        s(() => {
          o(...l);
        });
      },
    schedule: s,
    setNotifyFunction: (o) => {
      n = o;
    },
    setBatchNotifyFunction: (o) => {
      r = o;
    },
    setScheduler: (o) => {
      i = o;
    },
  };
}
var _t = BP(),
  Os,
  jr,
  Ns,
  uv,
  $P =
    ((uv = class extends Bo {
      constructor() {
        super();
        me(this, Os, !0);
        me(this, jr);
        me(this, Ns);
        se(this, Ns, (t) => {
          if (typeof window < "u" && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        D(this, jr) || this.setEventListener(D(this, Ns));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = D(this, jr)) == null || t.call(this), se(this, jr, void 0));
      }
      setEventListener(t) {
        var n;
        (se(this, Ns, t),
          (n = D(this, jr)) == null || n.call(this),
          se(this, jr, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        D(this, Os) !== t &&
          (se(this, Os, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return D(this, Os);
      }
    }),
    (Os = new WeakMap()),
    (jr = new WeakMap()),
    (Ns = new WeakMap()),
    uv),
  vu = new $P();
function WP(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Yx(e) {
  return (e ?? "online") === "online" ? vu.isOnline() : !0;
}
var lf = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function Xx(e) {
  let t = !1,
    n = 0,
    r;
  const i = UP(),
    s = () => i.status !== "pending",
    a = (g) => {
      var P;
      if (!s()) {
        const m = new lf(g);
        (f(m), (P = e.onCancel) == null || P.call(e, m));
      }
    },
    o = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      Zx.isFocused() &&
      (e.networkMode === "always" || vu.isOnline()) &&
      e.canRun(),
    c = () => Yx(e.networkMode) && e.canRun(),
    d = (g) => {
      s() || (r == null || r(), i.resolve(g));
    },
    f = (g) => {
      s() || (r == null || r(), i.reject(g));
    },
    p = () =>
      new Promise((g) => {
        var P;
        ((r = (m) => {
          (s() || u()) && g(m);
        }),
          (P = e.onPause) == null || P.call(e));
      }).then(() => {
        var g;
        ((r = void 0), s() || (g = e.onContinue) == null || g.call(e));
      }),
    v = () => {
      if (s()) return;
      let g;
      const P = n === 0 ? e.initialPromise : void 0;
      try {
        g = P ?? e.fn();
      } catch (m) {
        g = Promise.reject(m);
      }
      Promise.resolve(g)
        .then(d)
        .catch((m) => {
          var L;
          if (s()) return;
          const h = e.retry ?? (qx.isServer() ? 0 : 3),
            y = e.retryDelay ?? WP,
            w = typeof y == "function" ? y(n, m) : y,
            C =
              h === !0 ||
              (typeof h == "number" && n < h) ||
              (typeof h == "function" && h(n, m));
          if (t || !C) {
            f(m);
            return;
          }
          (n++,
            (L = e.onFail) == null || L.call(e, n, m),
            OP(w)
              .then(() => (u() ? void 0 : p()))
              .then(() => {
                t ? f(m) : v();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: a,
    continue: () => (r == null || r(), i),
    cancelRetry: o,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? v() : p().then(v), i),
  };
}
var Ti,
  cv,
  Jx =
    ((cv = class {
      constructor() {
        me(this, Ti);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          AP(this.gcTime) &&
            se(
              this,
              Ti,
              sf.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (qx.isServer() ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        D(this, Ti) !== void 0 &&
          (sf.clearTimeout(D(this, Ti)), se(this, Ti, void 0));
      }
    }),
    (Ti = new WeakMap()),
    cv);
function HP(e) {
  return {
    onFetch: (t, n) => {
      var c, d, f, p, v;
      const r = t.options,
        i =
          (f =
            (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : f.direction,
        s = ((p = t.state.data) == null ? void 0 : p.pages) || [],
        a = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
      let o = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let g = !1;
        const P = (y) => {
            IP(
              y,
              () => t.signal,
              () => (g = !0),
            );
          },
          m = Gx(t.options, t.fetchOptions),
          h = async (y, w, C) => {
            if (g) return Promise.reject(t.signal.reason);
            if (w == null && y.pages.length) return Promise.resolve(y);
            const S = (() => {
                const ue = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: w,
                  direction: C ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (P(ue), ue);
              })(),
              A = await m(S),
              { maxPages: F } = t.options,
              O = C ? VP : jP;
            return {
              pages: O(y.pages, A, F),
              pageParams: O(y.pageParams, w, F),
            };
          };
        if (i && s.length) {
          const y = i === "backward",
            w = y ? KP : py,
            C = { pages: s, pageParams: a },
            L = w(r, C);
          o = await h(C, L, y);
        } else {
          const y = e ?? s.length;
          do {
            const w = l === 0 ? (a[0] ?? r.initialPageParam) : py(r, o);
            if (l > 0 && w == null) break;
            ((o = await h(o, w)), l++);
          } while (l < y);
        }
        return o;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, P;
            return (P = (g = t.options).persister) == null
              ? void 0
              : P.call(
                  g,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function py(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function KP(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var js,
  Ri,
  Vs,
  hn,
  Ai,
  pt,
  Lo,
  bi,
  en,
  ew,
  er,
  dv,
  ZP =
    ((dv = class extends Jx {
      constructor(t) {
        super();
        me(this, en);
        me(this, js);
        me(this, Ri);
        me(this, Vs);
        me(this, hn);
        me(this, Ai);
        me(this, pt);
        me(this, Lo);
        me(this, bi);
        (se(this, bi, !1),
          se(this, Lo, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          se(this, Ai, t.client),
          se(this, hn, D(this, Ai).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          se(this, Ri, yy(this.options)),
          (this.state = t.state ?? D(this, Ri)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get queryType() {
        return D(this, js);
      }
      get promise() {
        var t;
        return (t = D(this, pt)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        if (
          ((this.options = { ...D(this, Lo), ...t }),
          t != null && t._type && se(this, js, t._type),
          this.updateGcTime(this.options.gcTime),
          this.state && this.state.data === void 0)
        ) {
          const n = yy(this.options);
          n.data !== void 0 &&
            (this.setState(my(n.data, n.dataUpdatedAt)), se(this, Ri, n));
        }
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          D(this, hn).remove(this);
      }
      setData(t, n) {
        const r = NP(this.state.data, t, this.options);
        return (
          Ge(this, en, er).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t) {
        Ge(this, en, er).call(this, { type: "setState", state: t });
      }
      cancel(t) {
        var r, i;
        const n = (r = D(this, pt)) == null ? void 0 : r.promise;
        return (
          (i = D(this, pt)) == null || i.cancel(t),
          n ? n.then(pn).catch(pn) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      get resetState() {
        return D(this, Ri);
      }
      reset() {
        (this.destroy(), this.setState(this.resetState));
      }
      isActive() {
        return this.observers.some((t) => DP(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Vh || !this.isFetched();
      }
      isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => af(t.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !bP(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = D(this, pt)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = D(this, pt)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          D(this, hn).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (D(this, pt) &&
              (D(this, bi) || Ge(this, en, ew).call(this)
                ? D(this, pt).cancel({ revert: !0 })
                : D(this, pt).cancelRetry()),
            this.scheduleGc()),
          D(this, hn).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Ge(this, en, er).call(this, { type: "invalidate" });
      }
      async fetch(t, n) {
        var u, c, d, f, p, v, g, P, m, h, y;
        if (
          this.state.fetchStatus !== "idle" &&
          ((u = D(this, pt)) == null ? void 0 : u.status()) !== "rejected"
        ) {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (D(this, pt))
            return (D(this, pt).continueRetry(), D(this, pt).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const w = this.observers.find((C) => C.options.queryFn);
          w && this.setOptions(w.options);
        }
        const r = new AbortController(),
          i = (w) => {
            Object.defineProperty(w, "signal", {
              enumerable: !0,
              get: () => (se(this, bi, !0), r.signal),
            });
          },
          s = () => {
            const w = Gx(this.options, n),
              L = (() => {
                const S = {
                  client: D(this, Ai),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (i(S), S);
              })();
            return (
              se(this, bi, !1),
              this.options.persister ? this.options.persister(w, L, this) : w(L)
            );
          },
          o = (() => {
            const w = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: D(this, Ai),
              state: this.state,
              fetchFn: s,
            };
            return (i(w), w);
          })(),
          l =
            D(this, js) === "infinite"
              ? HP(this.options.pages)
              : this.options.behavior;
        (l == null || l.onFetch(o, this),
          se(this, Vs, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = o.fetchOptions) == null ? void 0 : c.meta)) &&
            Ge(this, en, er).call(this, {
              type: "fetch",
              meta: (d = o.fetchOptions) == null ? void 0 : d.meta,
            }),
          se(
            this,
            pt,
            Xx({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: o.fetchFn,
              onCancel: (w) => {
                (w instanceof lf &&
                  w.revert &&
                  this.setState({ ...D(this, Vs), fetchStatus: "idle" }),
                  r.abort());
              },
              onFail: (w, C) => {
                Ge(this, en, er).call(this, {
                  type: "failed",
                  failureCount: w,
                  error: C,
                });
              },
              onPause: () => {
                Ge(this, en, er).call(this, { type: "pause" });
              },
              onContinue: () => {
                Ge(this, en, er).call(this, { type: "continue" });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            }),
          ));
        try {
          const w = await D(this, pt).start();
          if (w === void 0)
            throw new Error(`${this.queryHash} data is undefined`);
          return (
            this.setData(w),
            (p = (f = D(this, hn).config).onSuccess) == null ||
              p.call(f, w, this),
            (g = (v = D(this, hn).config).onSettled) == null ||
              g.call(v, w, this.state.error, this),
            w
          );
        } catch (w) {
          if (w instanceof lf) {
            if (w.silent) return D(this, pt).promise;
            if (w.revert) {
              if (this.state.data === void 0) throw w;
              return this.state.data;
            }
          }
          throw (
            Ge(this, en, er).call(this, { type: "error", error: w }),
            (m = (P = D(this, hn).config).onError) == null ||
              m.call(P, w, this),
            (y = (h = D(this, hn).config).onSettled) == null ||
              y.call(h, this.state.data, w, this),
            w
          );
        } finally {
          this.scheduleGc();
        }
      }
    }),
    (js = new WeakMap()),
    (Ri = new WeakMap()),
    (Vs = new WeakMap()),
    (hn = new WeakMap()),
    (Ai = new WeakMap()),
    (pt = new WeakMap()),
    (Lo = new WeakMap()),
    (bi = new WeakMap()),
    (en = new WeakSet()),
    (ew = function () {
      return (
        this.state.fetchStatus === "paused" && this.state.status === "pending"
      );
    }),
    (er = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...QP(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            const i = {
              ...r,
              ...my(t.data, t.dataUpdatedAt),
              dataUpdateCount: r.dataUpdateCount + 1,
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return (se(this, Vs, t.manual ? i : void 0), i);
          case "error":
            const s = t.error;
            return {
              ...r,
              error: s,
              errorUpdateCount: r.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: r.fetchFailureCount + 1,
              fetchFailureReason: s,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        _t.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            D(this, hn).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    dv);
function QP(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Yx(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function my(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function yy(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Oo,
  $n,
  At,
  Di,
  Wn,
  Tr,
  fv,
  GP =
    ((fv = class extends Jx {
      constructor(t) {
        super();
        me(this, Wn);
        me(this, Oo);
        me(this, $n);
        me(this, At);
        me(this, Di);
        (se(this, Oo, t.client),
          (this.mutationId = t.mutationId),
          se(this, At, t.mutationCache),
          se(this, $n, []),
          (this.state = t.state || tw()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        D(this, $n).includes(t) ||
          (D(this, $n).push(t),
          this.clearGcTimeout(),
          D(this, At).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (se(
          this,
          $n,
          D(this, $n).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          D(this, At).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        D(this, $n).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : D(this, At).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = D(this, Di)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var a, o, l, u, c, d, f, p, v, g, P, m, h, y, w, C, L, S;
        const n = () => {
            Ge(this, Wn, Tr).call(this, { type: "continue" });
          },
          r = {
            client: D(this, Oo),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey,
          };
        se(
          this,
          Di,
          Xx({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t, r)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, F) => {
              Ge(this, Wn, Tr).call(this, {
                type: "failed",
                failureCount: A,
                error: F,
              });
            },
            onPause: () => {
              Ge(this, Wn, Tr).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => D(this, At).canRun(this),
          }),
        );
        const i = this.state.status === "pending",
          s = !D(this, Di).canStart();
        try {
          if (i) n();
          else {
            (Ge(this, Wn, Tr).call(this, {
              type: "pending",
              variables: t,
              isPaused: s,
            }),
              D(this, At).config.onMutate &&
                (await D(this, At).config.onMutate(t, this, r)));
            const F = await ((o = (a = this.options).onMutate) == null
              ? void 0
              : o.call(a, t, r));
            F !== this.state.context &&
              Ge(this, Wn, Tr).call(this, {
                type: "pending",
                context: F,
                variables: t,
                isPaused: s,
              });
          }
          const A = await D(this, Di).start();
          return (
            await ((u = (l = D(this, At).config).onSuccess) == null
              ? void 0
              : u.call(l, A, t, this.state.context, this, r)),
            await ((d = (c = this.options).onSuccess) == null
              ? void 0
              : d.call(c, A, t, this.state.context, r)),
            await ((p = (f = D(this, At).config).onSettled) == null
              ? void 0
              : p.call(
                  f,
                  A,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  r,
                )),
            await ((g = (v = this.options).onSettled) == null
              ? void 0
              : g.call(v, A, null, t, this.state.context, r)),
            Ge(this, Wn, Tr).call(this, { type: "success", data: A }),
            A
          );
        } catch (A) {
          try {
            await ((m = (P = D(this, At).config).onError) == null
              ? void 0
              : m.call(P, A, t, this.state.context, this, r));
          } catch (F) {
            Promise.reject(F);
          }
          try {
            await ((y = (h = this.options).onError) == null
              ? void 0
              : y.call(h, A, t, this.state.context, r));
          } catch (F) {
            Promise.reject(F);
          }
          try {
            await ((C = (w = D(this, At).config).onSettled) == null
              ? void 0
              : C.call(
                  w,
                  void 0,
                  A,
                  this.state.variables,
                  this.state.context,
                  this,
                  r,
                ));
          } catch (F) {
            Promise.reject(F);
          }
          try {
            await ((S = (L = this.options).onSettled) == null
              ? void 0
              : S.call(L, void 0, A, t, this.state.context, r));
          } catch (F) {
            Promise.reject(F);
          }
          throw (Ge(this, Wn, Tr).call(this, { type: "error", error: A }), A);
        } finally {
          D(this, At).runNext(this);
        }
      }
    }),
    (Oo = new WeakMap()),
    ($n = new WeakMap()),
    (At = new WeakMap()),
    (Di = new WeakMap()),
    (Wn = new WeakSet()),
    (Tr = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        _t.batch(() => {
          (D(this, $n).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            D(this, At).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    fv);
function tw() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var rr,
  Rn,
  No,
  hv,
  qP =
    ((hv = class extends Bo {
      constructor(t = {}) {
        super();
        me(this, rr);
        me(this, Rn);
        me(this, No);
        ((this.config = t),
          se(this, rr, new Set()),
          se(this, Rn, new Map()),
          se(this, No, 0));
      }
      build(t, n, r) {
        const i = new GP({
          client: t,
          mutationCache: this,
          mutationId: ++nl(this, No)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(i), i);
      }
      add(t) {
        D(this, rr).add(t);
        const n = Sl(t);
        if (typeof n == "string") {
          const r = D(this, Rn).get(n);
          r ? r.push(t) : D(this, Rn).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (D(this, rr).delete(t)) {
          const n = Sl(t);
          if (typeof n == "string") {
            const r = D(this, Rn).get(n);
            if (r)
              if (r.length > 1) {
                const i = r.indexOf(t);
                i !== -1 && r.splice(i, 1);
              } else r[0] === t && D(this, Rn).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Sl(t);
        if (typeof n == "string") {
          const r = D(this, Rn).get(n),
            i =
              r == null ? void 0 : r.find((s) => s.state.status === "pending");
          return !i || i === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Sl(t);
        if (typeof n == "string") {
          const i =
            (r = D(this, Rn).get(n)) == null
              ? void 0
              : r.find((s) => s !== t && s.state.isPaused);
          return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        _t.batch(() => {
          (D(this, rr).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            D(this, rr).clear(),
            D(this, Rn).clear());
        });
      }
      getAll() {
        return Array.from(D(this, rr));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => dy(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => dy(t, n));
      }
      notify(t) {
        _t.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return _t.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(pn))),
        );
      }
    }),
    (rr = new WeakMap()),
    (Rn = new WeakMap()),
    (No = new WeakMap()),
    hv);
function Sl(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
var ir,
  Vr,
  Wt,
  sr,
  hr,
  Ul,
  uf,
  pv,
  YP =
    ((pv = class extends Bo {
      constructor(n, r) {
        super();
        me(this, hr);
        me(this, ir);
        me(this, Vr);
        me(this, Wt);
        me(this, sr);
        (se(this, ir, n),
          this.setOptions(r),
          this.bindMethods(),
          Ge(this, hr, Ul).call(this));
      }
      bindMethods() {
        ((this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this)));
      }
      setOptions(n) {
        var i;
        const r = this.options;
        ((this.options = D(this, ir).defaultMutationOptions(n)),
          LP(this.options, r) ||
            D(this, ir)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: D(this, Wt),
                observer: this,
              }),
          r != null &&
          r.mutationKey &&
          this.options.mutationKey &&
          Bi(r.mutationKey) !== Bi(this.options.mutationKey)
            ? this.reset()
            : ((i = D(this, Wt)) == null ? void 0 : i.state.status) ===
                "pending" && D(this, Wt).setOptions(this.options));
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() ||
          (n = D(this, Wt)) == null ||
          n.removeObserver(this);
      }
      onMutationUpdate(n) {
        (Ge(this, hr, Ul).call(this), Ge(this, hr, uf).call(this, n));
      }
      getCurrentResult() {
        return D(this, Vr);
      }
      reset() {
        var n;
        ((n = D(this, Wt)) == null || n.removeObserver(this),
          se(this, Wt, void 0),
          Ge(this, hr, Ul).call(this),
          Ge(this, hr, uf).call(this));
      }
      mutate(n, r) {
        var i;
        return (
          se(this, sr, r),
          (i = D(this, Wt)) == null || i.removeObserver(this),
          se(
            this,
            Wt,
            D(this, ir).getMutationCache().build(D(this, ir), this.options),
          ),
          D(this, Wt).addObserver(this),
          D(this, Wt).execute(n)
        );
      }
    }),
    (ir = new WeakMap()),
    (Vr = new WeakMap()),
    (Wt = new WeakMap()),
    (sr = new WeakMap()),
    (hr = new WeakSet()),
    (Ul = function () {
      var r;
      const n = ((r = D(this, Wt)) == null ? void 0 : r.state) ?? tw();
      se(this, Vr, {
        ...n,
        isPending: n.status === "pending",
        isSuccess: n.status === "success",
        isError: n.status === "error",
        isIdle: n.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (uf = function (n) {
      _t.batch(() => {
        var r, i, s, a, o, l, u, c;
        if (D(this, sr) && this.hasListeners()) {
          const d = D(this, Vr).variables,
            f = D(this, Vr).context,
            p = {
              client: D(this, ir),
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
          if ((n == null ? void 0 : n.type) === "success") {
            try {
              (i = (r = D(this, sr)).onSuccess) == null ||
                i.call(r, n.data, d, f, p);
            } catch (v) {
              Promise.reject(v);
            }
            try {
              (a = (s = D(this, sr)).onSettled) == null ||
                a.call(s, n.data, null, d, f, p);
            } catch (v) {
              Promise.reject(v);
            }
          } else if ((n == null ? void 0 : n.type) === "error") {
            try {
              (l = (o = D(this, sr)).onError) == null ||
                l.call(o, n.error, d, f, p);
            } catch (v) {
              Promise.reject(v);
            }
            try {
              (c = (u = D(this, sr)).onSettled) == null ||
                c.call(u, void 0, n.error, d, f, p);
            } catch (v) {
              Promise.reject(v);
            }
          }
        }
        this.listeners.forEach((d) => {
          d(D(this, Vr));
        });
      });
    }),
    pv),
  Hn,
  mv,
  XP =
    ((mv = class extends Bo {
      constructor(t = {}) {
        super();
        me(this, Hn);
        ((this.config = t), se(this, Hn, new Map()));
      }
      build(t, n, r) {
        const i = n.queryKey,
          s = n.queryHash ?? jh(i, n);
        let a = this.get(s);
        return (
          a ||
            ((a = new ZP({
              client: t,
              queryKey: i,
              queryHash: s,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(a)),
          a
        );
      }
      add(t) {
        D(this, Hn).has(t.queryHash) ||
          (D(this, Hn).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = D(this, Hn).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && D(this, Hn).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        _t.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return D(this, Hn).get(t);
      }
      getAll() {
        return [...D(this, Hn).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => cy(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => cy(t, r)) : n;
      }
      notify(t) {
        _t.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        _t.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        _t.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Hn = new WeakMap()),
    mv),
  qe,
  Fr,
  Ir,
  Fs,
  Is,
  Ur,
  Us,
  zs,
  yv,
  JP =
    ((yv = class {
      constructor(e = {}) {
        me(this, qe);
        me(this, Fr);
        me(this, Ir);
        me(this, Fs);
        me(this, Is);
        me(this, Ur);
        me(this, Us);
        me(this, zs);
        (se(this, qe, e.queryCache || new XP()),
          se(this, Fr, e.mutationCache || new qP()),
          se(this, Ir, e.defaultOptions || {}),
          se(this, Fs, new Map()),
          se(this, Is, new Map()),
          se(this, Ur, 0));
      }
      mount() {
        (nl(this, Ur)._++,
          D(this, Ur) === 1 &&
            (se(
              this,
              Us,
              Zx.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), D(this, qe).onFocus());
              }),
            ),
            se(
              this,
              zs,
              vu.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), D(this, qe).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (nl(this, Ur)._--,
          D(this, Ur) === 0 &&
            ((e = D(this, Us)) == null || e.call(this),
            se(this, Us, void 0),
            (t = D(this, zs)) == null || t.call(this),
            se(this, zs, void 0)));
      }
      isFetching(e) {
        return D(this, qe).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return D(this, Fr).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = D(this, qe).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = D(this, qe).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(af(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return D(this, qe)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          i = D(this, qe).get(r.queryHash),
          s = i == null ? void 0 : i.state.data,
          a = RP(t, s);
        if (a !== void 0)
          return D(this, qe)
            .build(this, r)
            .setData(a, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return _t.batch(() =>
          D(this, qe)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = D(this, qe).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = D(this, qe);
        _t.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = D(this, qe);
        return _t.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = _t.batch(() =>
            D(this, qe)
              .findAll(e)
              .map((i) => i.cancel(n)),
          );
        return Promise.all(r).then(pn).catch(pn);
      }
      invalidateQueries(e, t = {}) {
        return _t.batch(
          () => (
            D(this, qe)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = _t.batch(() =>
            D(this, qe)
              .findAll(e)
              .filter((i) => !i.isDisabled() && !i.isStatic())
              .map((i) => {
                let s = i.fetch(void 0, n);
                return (
                  n.throwOnError || (s = s.catch(pn)),
                  i.state.fetchStatus === "paused" ? Promise.resolve() : s
                );
              }),
          );
        return Promise.all(r).then(pn);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = D(this, qe).build(this, t);
        return n.isStaleByTime(af(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(pn).catch(pn);
      }
      fetchInfiniteQuery(e) {
        return ((e._type = "infinite"), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(pn).catch(pn);
      }
      ensureInfiniteQueryData(e) {
        return ((e._type = "infinite"), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return vu.isOnline()
          ? D(this, Fr).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return D(this, qe);
      }
      getMutationCache() {
        return D(this, Fr);
      }
      getDefaultOptions() {
        return D(this, Ir);
      }
      setDefaultOptions(e) {
        se(this, Ir, e);
      }
      setQueryDefaults(e, t) {
        D(this, Fs).set(Bi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...D(this, Fs).values()],
          n = {};
        return (
          t.forEach((r) => {
            Co(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        D(this, Is).set(Bi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...D(this, Is).values()],
          n = {};
        return (
          t.forEach((r) => {
            Co(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...D(this, Ir).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = jh(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Vh && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...D(this, Ir).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (D(this, qe).clear(), D(this, Fr).clear());
      }
    }),
    (qe = new WeakMap()),
    (Fr = new WeakMap()),
    (Ir = new WeakMap()),
    (Fs = new WeakMap()),
    (Is = new WeakMap()),
    (Ur = new WeakMap()),
    (Us = new WeakMap()),
    (zs = new WeakMap()),
    yv),
  nw = _.createContext(void 0),
  rw = (e) => {
    const t = _.useContext(nw);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  eE = ({ client: e, children: t }) => (
    _.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    E.jsx(nw.Provider, { value: e, children: t })
  );
function tE(e, t) {
  const n = rw(),
    [r] = _.useState(() => new YP(n, e));
  _.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  const i = _.useSyncExternalStore(
      _.useCallback((a) => r.subscribe(_t.batchCalls(a)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult(),
    ),
    s = _.useCallback(
      (a, o) => {
        r.mutate(a, o).catch(pn);
      },
      [r],
    );
  if (i.error && FP(r.options.throwOnError, [i.error])) throw i.error;
  return { ...i, mutate: s, mutateAsync: i.mutate };
}
const Po = "asm_auth_token",
  Eo = "asm_auth_user";
function Fh() {
  return localStorage.getItem(Po) ?? sessionStorage.getItem(Po);
}
function nE(e, t) {
  (t ? localStorage : sessionStorage).setItem(Po, e);
}
function rE() {
  (localStorage.removeItem(Po),
    localStorage.removeItem(Eo),
    sessionStorage.removeItem(Po),
    sessionStorage.removeItem(Eo));
}
function iE(e, t) {
  (t ? localStorage : sessionStorage).setItem(Eo, JSON.stringify(e));
}
function sE() {
  const e = localStorage.getItem(Eo) ?? sessionStorage.getItem(Eo);
  if (!e) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
const aE = "http://localhost:3000/api/v1";
class iw extends Error {
  constructor(t, n, r, i) {
    (super(n), (this.code = t), (this.statusCode = r), (this.details = i));
  }
}
async function kl(e, t, n = {}) {
  var a, o, l;
  let r = `${aE}${t}`;
  if (n.params) {
    const u = Object.entries(n.params)
      .filter(([, c]) => c !== void 0)
      .map(
        ([c, d]) => `${encodeURIComponent(c)}=${encodeURIComponent(String(d))}`,
      )
      .join("&");
    u && (r += `?${u}`);
  }
  const i = await fetch(r, {
      method: e,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Fh() ?? "dev-stub-token"}`,
      },
      ...(n.body !== void 0 && { body: JSON.stringify(n.body) }),
    }),
    s = await i.json();
  if (!s.ok || !i.ok)
    throw new iw(
      ((a = s.error) == null ? void 0 : a.code) ?? "UNKNOWN",
      ((o = s.error) == null ? void 0 : o.message) ?? "An error occurred",
      i.status,
      (l = s.error) == null ? void 0 : l.details,
    );
  return s.data;
}
const oE = {
    get: (e, t) => kl("GET", e, { params: t }),
    post: (e, t) => kl("POST", e, { body: t }),
    patch: (e, t) => kl("PATCH", e, { body: t }),
    delete: (e) => kl("DELETE", e),
  },
  lE = new JP({
    defaultOptions: {
      queries: {
        staleTime: 3e4,
        gcTime: 5 * 6e4,
        retry: (e, t) =>
          t instanceof iw && [400, 401, 403, 404, 422].includes(t.statusCode)
            ? !1
            : e < 2,
        refetchOnWindowFocus: !0,
      },
      mutations: { retry: !1 },
    },
  }),
  sw = _.createContext(null);
function uE() {
  if (!Fh()) return null;
  const e = sE();
  return e
    ? { id: "stub-user-id", name: e.name, email: e.email, role: e.role }
    : null;
}
function cE({ children: e }) {
  const [t, n] = _.useState(uE),
    r = _.useCallback((s, a, o, l, u) => {
      (nE(l, u),
        iE({ name: s, email: a, role: o }, u),
        n({ id: "stub-user-id", name: s, email: a, role: o }));
    }, []),
    i = _.useCallback(() => {
      (rE(), n(null));
    }, []);
  return E.jsx(sw.Provider, {
    value: { user: t, isAuthenticated: t !== null, login: r, logout: i },
    children: e,
  });
}
function dE() {
  const e = _.useContext(sw);
  if (!e) throw new Error("useAuthContext must be used inside <AuthProvider>");
  return e;
}
const fE = "modulepreload",
  hE = function (e) {
    return "/" + e;
  },
  gy = {},
  _r = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        o =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      i = Promise.allSettled(
        n.map((l) => {
          if (((l = hE(l)), l in gy)) return;
          gy[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = u ? "stylesheet" : fE),
            u || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = l),
            o && d.setAttribute("nonce", o),
            document.head.appendChild(d),
            u)
          )
            return new Promise((f, p) => {
              (d.addEventListener("load", f),
                d.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${l}`)),
                ));
            });
        }),
      );
    }
    function s(a) {
      const o = new Event("vite:preloadError", { cancelable: !0 });
      if (((o.payload = a), window.dispatchEvent(o), !o.defaultPrevented))
        throw a;
    }
    return i.then((a) => {
      for (const o of a || []) o.status === "rejected" && s(o.reason);
      return t().catch(s);
    });
  },
  Ih = _.createContext({});
function Uh(e) {
  const t = _.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Ju = _.createContext(null),
  zh = _.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class pE extends _.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      ((r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function mE({ children: e, isPresent: t }) {
  const n = _.useId(),
    r = _.useRef(null),
    i = _.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = _.useContext(zh);
  return (
    _.useInsertionEffect(() => {
      const { width: a, height: o, top: l, left: u } = i.current;
      if (t || !r.current || !a || !o) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        s && (c.nonce = s),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    E.jsx(pE, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: _.cloneElement(e, { ref: r }),
    })
  );
}
const yE = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: a,
}) => {
  const o = Uh(gE),
    l = _.useId(),
    u = _.useCallback(
      (d) => {
        o.set(d, !0);
        for (const f of o.values()) if (!f) return;
        r && r();
      },
      [o, r],
    ),
    c = _.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (d) => (o.set(d, !1), () => o.delete(d)),
      }),
      s ? [Math.random(), u] : [n, u],
    );
  return (
    _.useMemo(() => {
      o.forEach((d, f) => o.set(f, !1));
    }, [n]),
    _.useEffect(() => {
      !n && !o.size && r && r();
    }, [n]),
    a === "popLayout" && (e = E.jsx(mE, { isPresent: n, children: e })),
    E.jsx(Ju.Provider, { value: c, children: e })
  );
};
function gE() {
  return new Map();
}
function aw(e = !0) {
  const t = _.useContext(Ju);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = _.useId();
  _.useEffect(() => {
    e && i(s);
  }, [e]);
  const a = _.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, a] : [!0];
}
const _l = (e) => e.key || "";
function vy(e) {
  const t = [];
  return (
    _.Children.forEach(e, (n) => {
      _.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Bh = typeof window < "u",
  ow = Bh ? _.useLayoutEffect : _.useEffect,
  mi = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: a = !1,
  }) => {
    const [o, l] = aw(a),
      u = _.useMemo(() => vy(e), [e]),
      c = a && !o ? [] : u.map(_l),
      d = _.useRef(!0),
      f = _.useRef(u),
      p = Uh(() => new Map()),
      [v, g] = _.useState(u),
      [P, m] = _.useState(u);
    ow(() => {
      ((d.current = !1), (f.current = u));
      for (let w = 0; w < P.length; w++) {
        const C = _l(P[w]);
        c.includes(C) ? p.delete(C) : p.get(C) !== !0 && p.set(C, !1);
      }
    }, [P, c.length, c.join("-")]);
    const h = [];
    if (u !== v) {
      let w = [...u];
      for (let C = 0; C < P.length; C++) {
        const L = P[C],
          S = _l(L);
        c.includes(S) || (w.splice(C, 0, L), h.push(L));
      }
      (s === "wait" && h.length && (w = h), m(vy(w)), g(u));
      return;
    }
    const { forceRender: y } = _.useContext(Ih);
    return E.jsx(E.Fragment, {
      children: P.map((w) => {
        const C = _l(w),
          L = a && !o ? !1 : u === P || c.includes(C),
          S = () => {
            if (p.has(C)) p.set(C, !0);
            else return;
            let A = !0;
            (p.forEach((F) => {
              F || (A = !1);
            }),
              A &&
                (y == null || y(),
                m(f.current),
                a && (l == null || l()),
                r && r()));
          };
        return E.jsx(
          yE,
          {
            isPresent: L,
            initial: !d.current || n ? void 0 : !1,
            custom: L ? void 0 : t,
            presenceAffectsLayout: i,
            mode: s,
            onExitComplete: L ? void 0 : S,
            children: w,
          },
          C,
        );
      }),
    });
  },
  sn = (e) => e;
let lw = sn;
function $h(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const qs = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  dr = (e) => e * 1e3,
  fr = (e) => e / 1e3,
  vE = { useManualTiming: !1 };
function xE(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 };
  function o(u) {
    (s.has(u) && (l.schedule(u), e()), u(a));
  }
  const l = {
    schedule: (u, c = !1, d = !1) => {
      const p = d && r ? t : n;
      return (c && s.add(u), p.has(u) || p.add(u), u);
    },
    cancel: (u) => {
      (n.delete(u), s.delete(u));
    },
    process: (u) => {
      if (((a = u), r)) {
        i = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(o),
        t.clear(),
        (r = !1),
        i && ((i = !1), l.process(u)));
    },
  };
  return l;
}
const Cl = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  wE = 40;
function uw(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    a = Cl.reduce((m, h) => ((m[h] = xE(s)), m), {}),
    {
      read: o,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: d,
      postRender: f,
    } = a,
    p = () => {
      const m = performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, wE), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        o.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(p)));
    },
    v = () => {
      ((n = !0), (r = !0), i.isProcessing || e(p));
    };
  return {
    schedule: Cl.reduce((m, h) => {
      const y = a[h];
      return (
        (m[h] = (w, C = !1, L = !1) => (n || v(), y.schedule(w, C, L))),
        m
      );
    }, {}),
    cancel: (m) => {
      for (let h = 0; h < Cl.length; h++) a[Cl[h]].cancel(m);
    },
    state: i,
    steps: a,
  };
}
const {
    schedule: Ie,
    cancel: ti,
    state: kt,
    steps: Bc,
  } = uw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : sn, !0),
  cw = _.createContext({ strict: !1 }),
  xy = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ys = {};
for (const e in xy) Ys[e] = { isEnabled: (t) => xy[e].some((n) => !!t[n]) };
function SE(e) {
  for (const t in e) Ys[t] = { ...Ys[t], ...e[t] };
}
const kE = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function xu(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    kE.has(e)
  );
}
let dw = (e) => !xu(e);
function _E(e) {
  e && (dw = (t) => (t.startsWith("on") ? !xu(t) : e(t)));
}
try {
  _E(require("@emotion/is-prop-valid").default);
} catch {}
function CE(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((dw(i) ||
        (n === !0 && xu(i)) ||
        (!t && !xu(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function PE(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const ec = _.createContext({});
function To(e) {
  return typeof e == "string" || Array.isArray(e);
}
function tc(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Wh = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Hh = ["initial", ...Wh];
function nc(e) {
  return tc(e.animate) || Hh.some((t) => To(e[t]));
}
function fw(e) {
  return !!(nc(e) || e.variants);
}
function EE(e, t) {
  if (nc(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || To(n) ? n : void 0,
      animate: To(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function TE(e) {
  const { initial: t, animate: n } = EE(e, _.useContext(ec));
  return _.useMemo(() => ({ initial: t, animate: n }), [wy(t), wy(n)]);
}
function wy(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const RE = Symbol.for("motionComponentSymbol");
function ks(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function AE(e, t, n) {
  return _.useCallback(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : ks(n) && (n.current = r)));
    },
    [t],
  );
}
const Kh = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  bE = "framerAppearId",
  hw = "data-" + Kh(bE),
  { schedule: Zh } = uw(queueMicrotask, !1),
  pw = _.createContext({});
function DE(e, t, n, r, i) {
  var s, a;
  const { visualElement: o } = _.useContext(ec),
    l = _.useContext(cw),
    u = _.useContext(Ju),
    c = _.useContext(zh).reducedMotion,
    d = _.useRef(null);
  ((r = r || l.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      })));
  const f = d.current,
    p = _.useContext(pw);
  f &&
    !f.projection &&
    i &&
    (f.type === "html" || f.type === "svg") &&
    ME(d.current, n, i, p);
  const v = _.useRef(!1);
  _.useInsertionEffect(() => {
    f && v.current && f.update(n, u);
  });
  const g = n[hw],
    P = _.useRef(
      !!g &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, g)
        ) &&
        ((a = window.MotionHasOptimisedAnimation) === null || a === void 0
          ? void 0
          : a.call(window, g)),
    );
  return (
    ow(() => {
      f &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        Zh.render(f.render),
        P.current && f.animationState && f.animationState.animateChanges());
    }),
    _.useEffect(() => {
      f &&
        (!P.current && f.animationState && f.animationState.animateChanges(),
        P.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null ||
              m === void 0 ||
              m.call(window, g);
          }),
          (P.current = !1)));
    }),
    f
  );
}
function ME(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: a,
    dragConstraints: o,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : mw(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!a || (o && ks(o)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function mw(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : mw(e.parent);
}
function LE({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var s, a;
  e && SE(e);
  function o(u, c) {
    let d;
    const f = { ..._.useContext(zh), ...u, layoutId: OE(u) },
      { isStatic: p } = f,
      v = TE(u),
      g = r(u, p);
    if (!p && Bh) {
      NE();
      const P = jE(f);
      ((d = P.MeasureLayout),
        (v.visualElement = DE(i, g, f, t, P.ProjectionNode)));
    }
    return E.jsxs(ec.Provider, {
      value: v,
      children: [
        d && v.visualElement
          ? E.jsx(d, { visualElement: v.visualElement, ...f })
          : null,
        n(i, u, AE(g, v.visualElement, c), g, p, v.visualElement),
      ],
    });
  }
  o.displayName = `motion.${typeof i == "string" ? i : `create(${(a = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && a !== void 0 ? a : ""})`}`;
  const l = _.forwardRef(o);
  return ((l[RE] = i), l);
}
function OE({ layoutId: e }) {
  const t = _.useContext(Ih).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function NE(e, t) {
  _.useContext(cw).strict;
}
function jE(e) {
  const { drag: t, layout: n } = Ys;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const VE = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Qh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(VE.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Sy(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Gh(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Sy(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Sy(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const cf = (e) => Array.isArray(e),
  FE = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  IE = (e) => (cf(e) ? e[e.length - 1] || 0 : e),
  Nt = (e) => !!(e && e.getVelocity);
function zl(e) {
  const t = Nt(e) ? e.get() : e;
  return FE(t) ? t.toValue() : t;
}
function UE(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  s,
) {
  const a = { latestValues: zE(r, i, s, e), renderState: t() };
  return (
    n &&
      ((a.onMount = (o) => n({ props: r, current: o, ...a })),
      (a.onUpdate = (o) => n(o))),
    a
  );
}
const yw = (e) => (t, n) => {
  const r = _.useContext(ec),
    i = _.useContext(Ju),
    s = () => UE(e, t, r, i);
  return n ? s() : Uh(s);
};
function zE(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const f in s) i[f] = zl(s[f]);
  let { initial: a, animate: o } = e;
  const l = nc(e),
    u = fw(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), o === void 0 && (o = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? o : a;
  if (d && typeof d != "boolean" && !tc(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let p = 0; p < f.length; p++) {
      const v = Gh(e, f[p]);
      if (v) {
        const { transitionEnd: g, transition: P, ...m } = v;
        for (const h in m) {
          let y = m[h];
          if (Array.isArray(y)) {
            const w = c ? y.length - 1 : 0;
            y = y[w];
          }
          y !== null && (i[h] = y);
        }
        for (const h in g) i[h] = g[h];
      }
    }
  }
  return i;
}
const ua = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Gi = new Set(ua),
  gw = (e) => (t) => typeof t == "string" && t.startsWith(e),
  vw = gw("--"),
  BE = gw("var(--"),
  qh = (e) => (BE(e) ? $E.test(e.split("/*")[0].trim()) : !1),
  $E =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  xw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  xr = (e, t, n) => (n > t ? t : n < e ? e : n),
  ca = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ro = { ...ca, transform: (e) => xr(0, 1, e) },
  Pl = { ...ca, default: 1 },
  $o = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Rr = $o("deg"),
  Gn = $o("%"),
  oe = $o("px"),
  WE = $o("vh"),
  HE = $o("vw"),
  ky = {
    ...Gn,
    parse: (e) => Gn.parse(e) / 100,
    transform: (e) => Gn.transform(e * 100),
  },
  KE = {
    borderWidth: oe,
    borderTopWidth: oe,
    borderRightWidth: oe,
    borderBottomWidth: oe,
    borderLeftWidth: oe,
    borderRadius: oe,
    radius: oe,
    borderTopLeftRadius: oe,
    borderTopRightRadius: oe,
    borderBottomRightRadius: oe,
    borderBottomLeftRadius: oe,
    width: oe,
    maxWidth: oe,
    height: oe,
    maxHeight: oe,
    top: oe,
    right: oe,
    bottom: oe,
    left: oe,
    padding: oe,
    paddingTop: oe,
    paddingRight: oe,
    paddingBottom: oe,
    paddingLeft: oe,
    margin: oe,
    marginTop: oe,
    marginRight: oe,
    marginBottom: oe,
    marginLeft: oe,
    backgroundPositionX: oe,
    backgroundPositionY: oe,
  },
  ZE = {
    rotate: Rr,
    rotateX: Rr,
    rotateY: Rr,
    rotateZ: Rr,
    scale: Pl,
    scaleX: Pl,
    scaleY: Pl,
    scaleZ: Pl,
    skew: Rr,
    skewX: Rr,
    skewY: Rr,
    distance: oe,
    translateX: oe,
    translateY: oe,
    translateZ: oe,
    x: oe,
    y: oe,
    z: oe,
    perspective: oe,
    transformPerspective: oe,
    opacity: Ro,
    originX: ky,
    originY: ky,
    originZ: oe,
  },
  _y = { ...ca, transform: Math.round },
  Yh = {
    ...KE,
    ...ZE,
    zIndex: _y,
    size: oe,
    fillOpacity: Ro,
    strokeOpacity: Ro,
    numOctaves: _y,
  },
  QE = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  GE = ua.length;
function qE(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < GE; s++) {
    const a = ua[s],
      o = e[a];
    if (o === void 0) continue;
    let l = !0;
    if (
      (typeof o == "number"
        ? (l = o === (a.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(o) === 0),
      !l || n)
    ) {
      const u = xw(o, Yh[a]);
      if (!l) {
        i = !1;
        const c = QE[a] || a;
        r += `${c}(${u}) `;
      }
      n && (t[a] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r);
}
function Xh(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let a = !1,
    o = !1;
  for (const l in t) {
    const u = t[l];
    if (Gi.has(l)) {
      a = !0;
      continue;
    } else if (vw(l)) {
      i[l] = u;
      continue;
    } else {
      const c = xw(u, Yh[l]);
      l.startsWith("origin") ? ((o = !0), (s[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (a || n
        ? (r.transform = qE(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    o)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const YE = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  XE = { offset: "strokeDashoffset", array: "strokeDasharray" };
function JE(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? YE : XE;
  e[s.offset] = oe.transform(-r);
  const a = oe.transform(t),
    o = oe.transform(n);
  e[s.array] = `${a} ${o}`;
}
function Cy(e, t, n) {
  return typeof e == "string" ? e : oe.transform(t + n * e);
}
function eT(e, t, n) {
  const r = Cy(t, e.x, e.width),
    i = Cy(n, e.y, e.height);
  return `${r} ${i}`;
}
function Jh(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: a,
    pathSpacing: o = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
) {
  if ((Xh(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: f, style: p, dimensions: v } = e;
  (f.transform && (v && (p.transform = f.transform), delete f.transform),
    v &&
      (i !== void 0 || s !== void 0 || p.transform) &&
      (p.transformOrigin = eT(
        v,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5,
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    a !== void 0 && JE(f, a, o, l, !1));
}
const ep = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  ww = () => ({ ...ep(), attrs: {} }),
  tp = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Sw(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const kw = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function _w(e, t, n, r) {
  Sw(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(kw.has(i) ? i : Kh(i), t.attrs[i]);
}
const wu = {};
function tT(e) {
  Object.assign(wu, e);
}
function Cw(e, { layout: t, layoutId: n }) {
  return (
    Gi.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!wu[e] || e === "opacity"))
  );
}
function np(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const a in i)
    (Nt(i[a]) ||
      (t.style && Nt(t.style[a])) ||
      Cw(a, e) ||
      ((r = n == null ? void 0 : n.getValue(a)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[a] = i[a]);
  return s;
}
function Pw(e, t, n) {
  const r = np(e, t, n);
  for (const i in e)
    if (Nt(e[i]) || Nt(t[i])) {
      const s =
        ua.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function nT(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Py = ["x", "y", "width", "height", "cx", "cy", "r"],
  rT = {
    useVisualState: yw({
      scrapeMotionValuesFromProps: Pw,
      createRenderState: ww,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let s = !!e.drag;
        if (!s) {
          for (const o in i)
            if (Gi.has(o)) {
              s = !0;
              break;
            }
        }
        if (!s) return;
        let a = !t;
        if (t)
          for (let o = 0; o < Py.length; o++) {
            const l = Py[o];
            e[l] !== t[l] && (a = !0);
          }
        a &&
          Ie.read(() => {
            (nT(n, r),
              Ie.render(() => {
                (Jh(r, i, tp(n.tagName), e.transformTemplate), _w(n, r));
              }));
          });
      },
    }),
  },
  iT = {
    useVisualState: yw({
      scrapeMotionValuesFromProps: np,
      createRenderState: ep,
    }),
  };
function Ew(e, t, n) {
  for (const r in t) !Nt(t[r]) && !Cw(r, n) && (e[r] = t[r]);
}
function sT({ transformTemplate: e }, t) {
  return _.useMemo(() => {
    const n = ep();
    return (Xh(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function aT(e, t) {
  const n = e.style || {},
    r = {};
  return (Ew(r, n, e), Object.assign(r, sT(e, t)), r);
}
function oT(e, t) {
  const n = {},
    r = aT(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function lT(e, t, n, r) {
  const i = _.useMemo(() => {
    const s = ww();
    return (
      Jh(s, t, tp(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    (Ew(s, e.style, e), (i.style = { ...s, ...i.style }));
  }
  return i;
}
function uT(e = !1) {
  return (n, r, i, { latestValues: s }, a) => {
    const l = (Qh(n) ? lT : oT)(r, s, a, n),
      u = CE(r, typeof n == "string", e),
      c = n !== _.Fragment ? { ...u, ...l, ref: i } : {},
      { children: d } = r,
      f = _.useMemo(() => (Nt(d) ? d.get() : d), [d]);
    return _.createElement(n, { ...c, children: f });
  };
}
function cT(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const a = {
      ...(Qh(r) ? rT : iT),
      preloadedFeatures: e,
      useRender: uT(i),
      createVisualElement: t,
      Component: r,
    };
    return LE(a);
  };
}
function Tw(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function rc(e, t, n) {
  const r = e.getProps();
  return Gh(r, t, n !== void 0 ? n : r.custom, e);
}
const dT = $h(() => window.ScrollTimeline !== void 0);
class fT {
  constructor(t) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean)));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t)),
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (dT() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, s) => {
        (i && i(), this.animations[s].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class hT extends fT {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function rp(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const df = 2e4;
function Rw(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < df; ) ((t += n), (r = e.next(t)));
  return t >= df ? 1 / 0 : t;
}
function ip(e) {
  return typeof e == "function";
}
function Ey(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
const sp = (e) => Array.isArray(e) && typeof e[0] == "number",
  pT = { linearEasing: void 0 };
function mT(e, t) {
  const n = $h(e);
  return () => {
    var r;
    return (r = pT[t]) !== null && r !== void 0 ? r : n();
  };
}
const Su = mT(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Aw = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(qs(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function bw(e) {
  return !!(
    (typeof e == "function" && Su()) ||
    !e ||
    (typeof e == "string" && (e in ff || Su())) ||
    sp(e) ||
    (Array.isArray(e) && e.every(bw))
  );
}
const Fa = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  ff = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Fa([0, 0.65, 0.55, 1]),
    circOut: Fa([0.55, 0, 1, 0.45]),
    backIn: Fa([0.31, 0.01, 0.66, -0.59]),
    backOut: Fa([0.33, 1.53, 0.69, 0.99]),
  };
function Dw(e, t) {
  if (e)
    return typeof e == "function" && Su()
      ? Aw(e, t)
      : sp(e)
        ? Fa(e)
        : Array.isArray(e)
          ? e.map((n) => Dw(n, t) || ff.easeOut)
          : ff[e];
}
const Pn = { x: !1, y: !1 };
function Mw() {
  return Pn.x || Pn.y;
}
function yT(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function Lw(e, t) {
  const n = yT(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Ty(e) {
  return (t) => {
    t.pointerType === "touch" || Mw() || e(t);
  };
}
function gT(e, t, n = {}) {
  const [r, i, s] = Lw(e, n),
    a = Ty((o) => {
      const { target: l } = o,
        u = t(o);
      if (typeof u != "function" || !l) return;
      const c = Ty((d) => {
        (u(d), l.removeEventListener("pointerleave", c));
      });
      l.addEventListener("pointerleave", c, i);
    });
  return (
    r.forEach((o) => {
      o.addEventListener("pointerenter", a, i);
    }),
    s
  );
}
const Ow = (e, t) => (t ? (e === t ? !0 : Ow(e, t.parentElement)) : !1),
  ap = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  vT = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function xT(e) {
  return vT.has(e.tagName) || e.tabIndex !== -1;
}
const Ia = new WeakSet();
function Ry(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function $c(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const wT = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Ry(() => {
    if (Ia.has(n)) return;
    $c(n, "down");
    const i = Ry(() => {
        $c(n, "up");
      }),
      s = () => $c(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function Ay(e) {
  return ap(e) && !Mw();
}
function ST(e, t, n = {}) {
  const [r, i, s] = Lw(e, n),
    a = (o) => {
      const l = o.currentTarget;
      if (!Ay(o) || Ia.has(l)) return;
      Ia.add(l);
      const u = t(o),
        c = (p, v) => {
          (window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            !(!Ay(p) || !Ia.has(l)) &&
              (Ia.delete(l), typeof u == "function" && u(p, { success: v })));
        },
        d = (p) => {
          c(p, n.useGlobalTarget || Ow(l, p.target));
        },
        f = (p) => {
          c(p, !1);
        };
      (window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i));
    };
  return (
    r.forEach((o) => {
      (!xT(o) && o.getAttribute("tabindex") === null && (o.tabIndex = 0),
        (n.useGlobalTarget ? window : o).addEventListener("pointerdown", a, i),
        o.addEventListener("focus", (u) => wT(u, i), i));
    }),
    s
  );
}
function kT(e) {
  return e === "x" || e === "y"
    ? Pn[e]
      ? null
      : ((Pn[e] = !0),
        () => {
          Pn[e] = !1;
        })
    : Pn.x || Pn.y
      ? null
      : ((Pn.x = Pn.y = !0),
        () => {
          Pn.x = Pn.y = !1;
        });
}
const Nw = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ua,
]);
let Bl;
function _T() {
  Bl = void 0;
}
const qn = {
  now: () => (
    Bl === void 0 &&
      qn.set(
        kt.isProcessing || vE.useManualTiming
          ? kt.timestamp
          : performance.now(),
      ),
    Bl
  ),
  set: (e) => {
    ((Bl = e), queueMicrotask(_T));
  },
};
function op(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function lp(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class up {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (op(this.subscriptions, t), () => lp(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const a = this.subscriptions[s];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function jw(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const by = 30,
  CT = (e) => !isNaN(parseFloat(e));
class PT {
  constructor(t, n = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = qn.now();
        (this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = qn.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = CT(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new up());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            Ie.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = qn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > by
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, by);
    return jw(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Ao(e, t) {
  return new PT(e, t);
}
function ET(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ao(n));
}
function TT(e, t) {
  const n = rc(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const a in s) {
    const o = IE(s[a]);
    ET(e, a, o);
  }
}
function RT(e) {
  return !!(Nt(e) && e.add);
}
function hf(e, t) {
  const n = e.getValue("willChange");
  if (RT(n)) return n.add(t);
}
function Vw(e) {
  return e.props[hw];
}
const Fw = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  AT = 1e-7,
  bT = 12;
function DT(e, t, n, r, i) {
  let s,
    a,
    o = 0;
  do ((a = t + (n - t) / 2), (s = Fw(a, r, i) - e), s > 0 ? (n = a) : (t = a));
  while (Math.abs(s) > AT && ++o < bT);
  return a;
}
function Wo(e, t, n, r) {
  if (e === t && n === r) return sn;
  const i = (s) => DT(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Fw(i(s), t, r));
}
const Iw = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Uw = (e) => (t) => 1 - e(1 - t),
  zw = Wo(0.33, 1.53, 0.69, 0.99),
  cp = Uw(zw),
  Bw = Iw(cp),
  $w = (e) =>
    (e *= 2) < 1 ? 0.5 * cp(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  dp = (e) => 1 - Math.sin(Math.acos(e)),
  Ww = Uw(dp),
  Hw = Iw(dp),
  Kw = (e) => /^0[^.\s]+$/u.test(e);
function MT(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Kw(e)
      : !0;
}
const Xa = (e) => Math.round(e * 1e5) / 1e5,
  fp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function LT(e) {
  return e == null;
}
const OT =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  hp = (e, t) => (n) =>
    !!(
      (typeof n == "string" && OT.test(n) && n.startsWith(e)) ||
      (t && !LT(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Zw = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, a, o] = r.match(fp);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(a),
      alpha: o !== void 0 ? parseFloat(o) : 1,
    };
  },
  NT = (e) => xr(0, 255, e),
  Wc = { ...ca, transform: (e) => Math.round(NT(e)) },
  Ci = {
    test: hp("rgb", "red"),
    parse: Zw("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Wc.transform(e) +
      ", " +
      Wc.transform(t) +
      ", " +
      Wc.transform(n) +
      ", " +
      Xa(Ro.transform(r)) +
      ")",
  };
function jT(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const pf = { test: hp("#"), parse: jT, transform: Ci.transform },
  _s = {
    test: hp("hsl", "hue"),
    parse: Zw("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Gn.transform(Xa(t)) +
      ", " +
      Gn.transform(Xa(n)) +
      ", " +
      Xa(Ro.transform(r)) +
      ")",
  },
  Dt = {
    test: (e) => Ci.test(e) || pf.test(e) || _s.test(e),
    parse: (e) =>
      Ci.test(e) ? Ci.parse(e) : _s.test(e) ? _s.parse(e) : pf.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Ci.transform(e)
          : _s.transform(e),
  },
  VT =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function FT(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(fp)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(VT)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Qw = "number",
  Gw = "color",
  IT = "var",
  UT = "var(",
  Dy = "${}",
  zT =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function bo(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const o = t
    .replace(
      zT,
      (l) => (
        Dt.test(l)
          ? (r.color.push(s), i.push(Gw), n.push(Dt.parse(l)))
          : l.startsWith(UT)
            ? (r.var.push(s), i.push(IT), n.push(l))
            : (r.number.push(s), i.push(Qw), n.push(parseFloat(l))),
        ++s,
        Dy
      ),
    )
    .split(Dy);
  return { values: n, split: o, indexes: r, types: i };
}
function qw(e) {
  return bo(e).values;
}
function Yw(e) {
  const { split: t, types: n } = bo(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let a = 0; a < r; a++)
      if (((s += t[a]), i[a] !== void 0)) {
        const o = n[a];
        o === Qw
          ? (s += Xa(i[a]))
          : o === Gw
            ? (s += Dt.transform(i[a]))
            : (s += i[a]);
      }
    return s;
  };
}
const BT = (e) => (typeof e == "number" ? 0 : e);
function $T(e) {
  const t = qw(e);
  return Yw(e)(t.map(BT));
}
const ni = {
    test: FT,
    parse: qw,
    createTransformer: Yw,
    getAnimatableNone: $T,
  },
  WT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function HT(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(fp) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = WT.has(t) ? 1 : 0;
  return (r !== n && (s *= 100), t + "(" + s + i + ")");
}
const KT = /\b([a-z-]*)\(.*?\)/gu,
  mf = {
    ...ni,
    getAnimatableNone: (e) => {
      const t = e.match(KT);
      return t ? t.map(HT).join(" ") : e;
    },
  },
  ZT = {
    ...Yh,
    color: Dt,
    backgroundColor: Dt,
    outlineColor: Dt,
    fill: Dt,
    stroke: Dt,
    borderColor: Dt,
    borderTopColor: Dt,
    borderRightColor: Dt,
    borderBottomColor: Dt,
    borderLeftColor: Dt,
    filter: mf,
    WebkitFilter: mf,
  },
  pp = (e) => ZT[e];
function Xw(e, t) {
  let n = pp(e);
  return (
    n !== mf && (n = ni),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const QT = new Set(["auto", "none", "0"]);
function GT(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    (typeof s == "string" && !QT.has(s) && bo(s).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const s of t) e[s] = Xw(n, i);
}
const My = (e) => e === ca || e === oe,
  Ly = (e, t) => parseFloat(e.split(", ")[t]),
  Oy =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Ly(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Ly(s[1], e) : 0;
      }
    },
  qT = new Set(["x", "y", "z"]),
  YT = ua.filter((e) => !qT.has(e));
function XT(e) {
  const t = [];
  return (
    YT.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Xs = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Oy(4, 13),
  y: Oy(5, 14),
};
Xs.translateX = Xs.x;
Xs.translateY = Xs.y;
const Oi = new Set();
let yf = !1,
  gf = !1;
function Jw() {
  if (gf) {
    const e = Array.from(Oi).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = XT(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, a]) => {
            var o;
            (o = r.getValue(s)) === null || o === void 0 || o.set(a);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((gf = !1), (yf = !1), Oi.forEach((e) => e.complete()), Oi.clear());
}
function e1() {
  Oi.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (gf = !0));
  });
}
function JT() {
  (e1(), Jw());
}
class mp {
  constructor(t, n, r, i, s, a = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = a));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (Oi.add(this),
          yf || ((yf = !0), Ie.read(e1), Ie.resolveKeyframes(Jw)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const a = i == null ? void 0 : i.get(),
            o = t[t.length - 1];
          if (a !== void 0) t[0] = a;
          else if (r && n) {
            const l = r.readValue(n, o);
            l != null && (t[0] = l);
          }
          (t[0] === void 0 && (t[0] = o), i && a === void 0 && i.set(t[0]));
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Oi.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Oi.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const t1 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  eR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function tR(e) {
  const t = eR.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function n1(e, t, n = 1) {
  const [r, i] = tR(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const a = s.trim();
    return t1(a) ? parseFloat(a) : a;
  }
  return qh(i) ? n1(i, t, n + 1) : i;
}
const r1 = (e) => (t) => t.test(e),
  nR = { test: (e) => e === "auto", parse: (e) => e },
  i1 = [ca, oe, Gn, Rr, HE, WE, nR],
  Ny = (e) => i1.find(r1(e));
class s1 extends mp {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), qh(u))) {
        const c = n1(u, n.current);
        (c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u));
      }
    }
    if ((this.resolveNoneKeyframes(), !Nw.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      a = Ny(i),
      o = Ny(s);
    if (a !== o)
      if (My(a) && My(o))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) MT(t[i]) && r.push(i);
    r.length && GT(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Xs[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const a = i.length - 1,
      o = i[a];
    ((i[a] = Xs[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
const jy = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (ni.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function rR(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function iR(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    a = jy(i, t),
    o = jy(s, t);
  return !a || !o ? !1 : rR(e) || ((n === "spring" || ip(n)) && r);
}
const sR = (e) => e !== null;
function ic(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(sR),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const aR = 40;
class a1 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: a = "loop",
    ...o
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = qn.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: a,
        ...o,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > aR
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (
      !this._resolved && !this.hasAttemptedResolve && JT(),
      this._resolved
    );
  }
  onKeyframesResolved(t, n) {
    ((this.resolvedAt = qn.now()), (this.hasAttemptedResolve = !0));
    const {
      name: r,
      type: i,
      velocity: s,
      delay: a,
      onComplete: o,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !iR(t, r, i, s))
      if (a) this.options.duration = 0;
      else {
        (l && l(ic(t, this.options, n)),
          o && o(),
          this.resolveFinishedPromise());
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const We = (e, t, n) => e + (t - e) * n;
function Hc(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function oR({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    s = 0,
    a = 0;
  if (!t) i = s = a = n;
  else {
    const o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - o;
    ((i = Hc(l, o, e + 1 / 3)), (s = Hc(l, o, e)), (a = Hc(l, o, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
function ku(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Kc = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  lR = [pf, Ci, _s],
  uR = (e) => lR.find((t) => t.test(e));
function Vy(e) {
  const t = uR(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === _s && (n = oR(n)), n);
}
const Fy = (e, t) => {
    const n = Vy(e),
      r = Vy(t);
    if (!n || !r) return ku(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Kc(n.red, r.red, s)),
      (i.green = Kc(n.green, r.green, s)),
      (i.blue = Kc(n.blue, r.blue, s)),
      (i.alpha = We(n.alpha, r.alpha, s)),
      Ci.transform(i)
    );
  },
  cR = (e, t) => (n) => t(e(n)),
  Ho = (...e) => e.reduce(cR),
  vf = new Set(["none", "hidden"]);
function dR(e, t) {
  return vf.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function fR(e, t) {
  return (n) => We(e, t, n);
}
function yp(e) {
  return typeof e == "number"
    ? fR
    : typeof e == "string"
      ? qh(e)
        ? ku
        : Dt.test(e)
          ? Fy
          : mR
      : Array.isArray(e)
        ? o1
        : typeof e == "object"
          ? Dt.test(e)
            ? Fy
            : hR
          : ku;
}
function o1(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, a) => yp(s)(s, t[a]));
  return (s) => {
    for (let a = 0; a < r; a++) n[a] = i[a](s);
    return n;
  };
}
function hR(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = yp(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function pR(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const a = t.types[s],
      o = e.indexes[a][i[a]],
      l = (n = e.values[o]) !== null && n !== void 0 ? n : 0;
    ((r[s] = l), i[a]++);
  }
  return r;
}
const mR = (e, t) => {
  const n = ni.createTransformer(t),
    r = bo(e),
    i = bo(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (vf.has(e) && !i.values.length) || (vf.has(t) && !r.values.length)
      ? dR(e, t)
      : Ho(o1(pR(r, i), i.values), n)
    : ku(e, t);
};
function l1(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? We(e, t, n)
    : yp(e)(e, t);
}
const yR = 5;
function u1(e, t, n) {
  const r = Math.max(t - yR, 0);
  return jw(n - e(r), t - r);
}
const Ye = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Zc = 0.001;
function gR({
  duration: e = Ye.duration,
  bounce: t = Ye.bounce,
  velocity: n = Ye.velocity,
  mass: r = Ye.mass,
}) {
  let i,
    s,
    a = 1 - t;
  ((a = xr(Ye.minDamping, Ye.maxDamping, a)),
    (e = xr(Ye.minDuration, Ye.maxDuration, fr(e))),
    a < 1
      ? ((i = (u) => {
          const c = u * a,
            d = c * e,
            f = c - n,
            p = xf(u, a),
            v = Math.exp(-d);
          return Zc - (f / p) * v;
        }),
        (s = (u) => {
          const d = u * a * e,
            f = d * n + n,
            p = Math.pow(a, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            g = xf(Math.pow(u, 2), a);
          return ((-i(u) + Zc > 0 ? -1 : 1) * ((f - p) * v)) / g;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Zc + c * d;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        })));
  const o = 5 / e,
    l = xR(i, s, o);
  if (((e = dr(e)), isNaN(l)))
    return { stiffness: Ye.stiffness, damping: Ye.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e };
  }
}
const vR = 12;
function xR(e, t, n) {
  let r = n;
  for (let i = 1; i < vR; i++) r = r - e(r) / t(r);
  return r;
}
function xf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const wR = ["duration", "bounce"],
  SR = ["stiffness", "damping", "mass"];
function Iy(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function kR(e) {
  let t = {
    velocity: Ye.velocity,
    stiffness: Ye.stiffness,
    damping: Ye.damping,
    mass: Ye.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Iy(e, SR) && Iy(e, wR))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * xr(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Ye.mass, stiffness: i, damping: s };
    } else {
      const n = gR(e);
      ((t = { ...t, ...n, mass: Ye.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function c1(e = Ye.visualDuration, t = Ye.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    a = n.keyframes[n.keyframes.length - 1],
    o = { done: !1, value: s },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = kR({ ...n, velocity: -fr(n.velocity || 0) }),
    v = f || 0,
    g = u / (2 * Math.sqrt(l * c)),
    P = a - s,
    m = fr(Math.sqrt(l / c)),
    h = Math.abs(P) < 5;
  (r || (r = h ? Ye.restSpeed.granular : Ye.restSpeed.default),
    i || (i = h ? Ye.restDelta.granular : Ye.restDelta.default));
  let y;
  if (g < 1) {
    const C = xf(m, g);
    y = (L) => {
      const S = Math.exp(-g * m * L);
      return (
        a - S * (((v + g * m * P) / C) * Math.sin(C * L) + P * Math.cos(C * L))
      );
    };
  } else if (g === 1) y = (C) => a - Math.exp(-m * C) * (P + (v + m * P) * C);
  else {
    const C = m * Math.sqrt(g * g - 1);
    y = (L) => {
      const S = Math.exp(-g * m * L),
        A = Math.min(C * L, 300);
      return (
        a - (S * ((v + g * m * P) * Math.sinh(A) + C * P * Math.cosh(A))) / C
      );
    };
  }
  const w = {
    calculatedDuration: (p && d) || null,
    next: (C) => {
      const L = y(C);
      if (p) o.done = C >= d;
      else {
        let S = 0;
        g < 1 && (S = C === 0 ? dr(v) : u1(y, C, L));
        const A = Math.abs(S) <= r,
          F = Math.abs(a - L) <= i;
        o.done = A && F;
      }
      return ((o.value = o.done ? a : L), o);
    },
    toString: () => {
      const C = Math.min(Rw(w), df),
        L = Aw((S) => w.next(C * S).value, C, 30);
      return C + "ms " + L;
    },
  };
  return w;
}
function Uy({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: a,
  min: o,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    p = (A) => (o !== void 0 && A < o) || (l !== void 0 && A > l),
    v = (A) =>
      o === void 0
        ? l
        : l === void 0 || Math.abs(o - A) < Math.abs(l - A)
          ? o
          : l;
  let g = n * t;
  const P = d + g,
    m = a === void 0 ? P : a(P);
  m !== P && (g = m - d);
  const h = (A) => -g * Math.exp(-A / r),
    y = (A) => m + h(A),
    w = (A) => {
      const F = h(A),
        O = y(A);
      ((f.done = Math.abs(F) <= u), (f.value = f.done ? m : O));
    };
  let C, L;
  const S = (A) => {
    p(f.value) &&
      ((C = A),
      (L = c1({
        keyframes: [f.value, v(f.value)],
        velocity: u1(y, A, f.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    S(0),
    {
      calculatedDuration: null,
      next: (A) => {
        let F = !1;
        return (
          !L && C === void 0 && ((F = !0), w(A), S(A)),
          C !== void 0 && A >= C ? L.next(A - C) : (!F && w(A), f)
        );
      },
    }
  );
}
const _R = Wo(0.42, 0, 1, 1),
  CR = Wo(0, 0, 0.58, 1),
  d1 = Wo(0.42, 0, 0.58, 1),
  PR = (e) => Array.isArray(e) && typeof e[0] != "number",
  ER = {
    linear: sn,
    easeIn: _R,
    easeInOut: d1,
    easeOut: CR,
    circIn: dp,
    circInOut: Hw,
    circOut: Ww,
    backIn: cp,
    backInOut: Bw,
    backOut: zw,
    anticipate: $w,
  },
  zy = (e) => {
    if (sp(e)) {
      lw(e.length === 4);
      const [t, n, r, i] = e;
      return Wo(t, n, r, i);
    } else if (typeof e == "string") return ER[e];
    return e;
  };
function TR(e, t, n) {
  const r = [],
    i = n || l1,
    s = e.length - 1;
  for (let a = 0; a < s; a++) {
    let o = i(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || sn : t;
      o = Ho(l, o);
    }
    r.push(o);
  }
  return r;
}
function RR(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((lw(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const a = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = TR(t, r, i),
    l = o.length,
    u = (c) => {
      if (a && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = qs(e[d], e[d + 1], c);
      return o[d](f);
    };
  return n ? (c) => u(xr(e[0], e[s - 1], c)) : u;
}
function AR(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = qs(0, t, r);
    e.push(We(n, 1, i));
  }
}
function bR(e) {
  const t = [0];
  return (AR(t, e.length - 1), t);
}
function DR(e, t) {
  return e.map((n) => n * t);
}
function MR(e, t) {
  return e.map(() => t || d1).splice(0, e.length - 1);
}
function _u({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = PR(r) ? r.map(zy) : zy(r),
    s = { done: !1, value: t[0] },
    a = DR(n && n.length === t.length ? n : bR(t), e),
    o = RR(a, t, { ease: Array.isArray(i) ? i : MR(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = o(l)), (s.done = l >= e), s),
  };
}
const LR = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Ie.update(t, !0),
      stop: () => ti(t),
      now: () => (kt.isProcessing ? kt.timestamp : qn.now()),
    };
  },
  OR = { decay: Uy, inertia: Uy, tween: _u, keyframes: _u, spring: c1 },
  NR = (e) => e / 100;
class gp extends a1 {
  constructor(t) {
    (super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      }));
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      a = (i == null ? void 0 : i.KeyframeResolver) || mp,
      o = (l, u) => this.onKeyframesResolved(l, u);
    ((this.resolver = new a(s, o, n, r, i)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        ));
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: a = 0,
      } = this.options,
      o = ip(n) ? n : OR[n] || _u;
    let l, u;
    o !== _u &&
      typeof t[0] != "number" &&
      ((l = Ho(NR, l1(t[0], t[1]))), (t = [0, 100]));
    const c = o({ ...this.options, keyframes: t });
    (s === "mirror" &&
      (u = o({ ...this.options, keyframes: [...t].reverse(), velocity: -a })),
      c.calculatedDuration === null && (c.calculatedDuration = Rw(c)));
    const { calculatedDuration: d } = c,
      f = d + i,
      p = f * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: p,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: A } = this.options;
      return { done: !0, value: A[A.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: a,
      mapPercentToKeyframes: o,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: f,
      repeat: p,
      repeatType: v,
      repeatDelay: g,
      onUpdate: P,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed));
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? m < 0 : m > c;
    ((this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c));
    let y = this.currentTime,
      w = s;
    if (p) {
      const A = Math.min(this.currentTime, c) / d;
      let F = Math.floor(A),
        O = A % 1;
      (!O && A >= 1 && (O = 1),
        O === 1 && F--,
        (F = Math.min(F, p + 1)),
        !!(F % 2) &&
          (v === "reverse"
            ? ((O = 1 - O), g && (O -= g / d))
            : v === "mirror" && (w = a)),
        (y = xr(0, 1, O) * d));
    }
    const C = h ? { done: !1, value: l[0] } : w.next(y);
    o && (C.value = o(C.value));
    let { done: L } = C;
    !h &&
      u !== null &&
      (L = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const S =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && L));
    return (
      S && i !== void 0 && (C.value = ic(l, this.options, i)),
      P && P(C.value),
      S && this.finish(),
      C
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? fr(t.calculatedDuration) : 0;
  }
  get time() {
    return fr(this.currentTime);
  }
  set time(t) {
    ((t = dr(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = fr(this.currentTime)));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = LR, onPlay: n, startTime: r } = this.options;
    (this.driver || (this.driver = t((s) => this.tick(s))), n && n());
    const i = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = i)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime =
        (t = this.currentTime) !== null && t !== void 0 ? t : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    (this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel());
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
}
const jR = new Set(["opacity", "clipPath", "filter", "transform"]);
function VR(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: a = "loop",
    ease: o = "easeInOut",
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Dw(o, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
const FR = $h(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Cu = 10,
  IR = 2e4;
function UR(e) {
  return ip(e.type) || e.type === "spring" || !bw(e.ease);
}
function zR(e, t) {
  const n = new gp({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < IR; ) ((r = n.sample(s)), i.push(r.value), (s += Cu));
  return { times: void 0, keyframes: i, duration: s - Cu, ease: "linear" };
}
const f1 = { anticipate: $w, backInOut: Bw, circInOut: Hw };
function BR(e) {
  return e in f1;
}
class By extends a1 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    ((this.resolver = new s1(
      s,
      (a, o) => this.onKeyframesResolved(a, o),
      n,
      r,
      i,
    )),
      this.resolver.scheduleResolve());
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: i,
      ease: s,
      type: a,
      motionValue: o,
      name: l,
      startTime: u,
    } = this.options;
    if (!o.owner || !o.owner.current) return !1;
    if (
      (typeof s == "string" && Su() && BR(s) && (s = f1[s]), UR(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: f,
          motionValue: p,
          element: v,
          ...g
        } = this.options,
        P = zR(t, g);
      ((t = P.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = P.duration),
        (i = P.times),
        (s = P.ease),
        (a = "keyframes"));
    }
    const c = VR(o.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: i,
      ease: s,
    });
    return (
      (c.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Ey(c, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: d } = this.options;
            (o.set(ic(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise());
          }),
      { animation: c, duration: r, times: i, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return fr(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return fr(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = dr(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return sn;
      const { animation: r } = n;
      Ey(r, t);
    }
    return sn;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    (n.playState === "finished" && this.updateFinishedPromise(), n.play());
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: a,
      times: o,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: f,
          ...p
        } = this.options,
        v = new gp({
          ...p,
          keyframes: r,
          duration: i,
          type: s,
          ease: a,
          times: o,
          isGenerator: !0,
        }),
        g = dr(this.time);
      u.setWithVelocity(v.sample(g - Cu).value, v.sample(g).value, Cu);
    }
    const { onStop: l } = this.options;
    (l && l(), this.cancel());
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: a,
      type: o,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return (
      FR() &&
      r &&
      jR.has(r) &&
      !l &&
      !u &&
      !i &&
      s !== "mirror" &&
      a !== 0 &&
      o !== "inertia"
    );
  }
}
const $R = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  WR = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  HR = { type: "keyframes", duration: 0.8 },
  KR = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ZR = (e, { keyframes: t }) =>
    t.length > 2
      ? HR
      : Gi.has(e)
        ? e.startsWith("scale")
          ? WR(t[1])
          : $R
        : KR;
function QR({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: a,
  repeatDelay: o,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const vp =
  (e, t, n, r = {}, i, s) =>
  (a) => {
    const o = rp(r, e) || {},
      l = o.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - dr(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...o,
      delay: -u,
      onUpdate: (f) => {
        (t.set(f), o.onUpdate && o.onUpdate(f));
      },
      onComplete: () => {
        (a(), o.onComplete && o.onComplete());
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    (QR(o) || (c = { ...c, ...ZR(e, c) }),
      c.duration && (c.duration = dr(c.duration)),
      c.repeatDelay && (c.repeatDelay = dr(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !s && t.get() !== void 0)
    ) {
      const f = ic(c.keyframes, o);
      if (f !== void 0)
        return (
          Ie.update(() => {
            (c.onUpdate(f), c.onComplete());
          }),
          new hT([])
        );
    }
    return !s && By.supports(c) ? new By(c) : new gp(c);
  };
function GR({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function h1(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...l } = t;
  r && (a = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in l) {
    const f = e.getValue(
        d,
        (s = e.latestValues[d]) !== null && s !== void 0 ? s : null,
      ),
      p = l[d];
    if (p === void 0 || (c && GR(c, d))) continue;
    const v = { delay: n, ...rp(a || {}, d) };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const m = Vw(e);
      if (m) {
        const h = window.MotionHandoffAnimation(m, d, Ie);
        h !== null && ((v.startTime = h), (g = !0));
      }
    }
    (hf(e, d),
      f.start(
        vp(d, f, p, e.shouldReduceMotion && Nw.has(d) ? { type: !1 } : v, e, g),
      ));
    const P = f.animation;
    P && u.push(P);
  }
  return (
    o &&
      Promise.all(u).then(() => {
        Ie.update(() => {
          o && TT(e, o);
        });
      }),
    u
  );
}
function wf(e, t, n = {}) {
  var r;
  const i = rc(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const a = i ? () => Promise.all(h1(e, i, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = s;
            return qR(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [a, o] : [o, a];
    return u().then(() => c());
  } else return Promise.all([a(), o(n.delay)]);
}
function qR(e, t, n = 0, r = 0, i = 1, s) {
  const a = [],
    o = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => o - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(YR)
      .forEach((u, c) => {
        (u.notify("AnimationStart", t),
          a.push(
            wf(u, t, { ...s, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(a)
  );
}
function YR(e, t) {
  return e.sortNodePosition(t);
}
function XR(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => wf(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = wf(e, t, n);
  else {
    const i = typeof t == "function" ? rc(e, t, n.custom) : t;
    r = Promise.all(h1(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const JR = Hh.length;
function p1(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? p1(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < JR; n++) {
    const r = Hh[n],
      i = e.props[r];
    (To(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const eA = [...Wh].reverse(),
  tA = Wh.length;
function nA(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => XR(e, n, r)));
}
function rA(e) {
  let t = nA(e),
    n = $y(),
    r = !0;
  const i = (l) => (u, c) => {
    var d;
    const f = rc(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0,
    );
    if (f) {
      const { transition: p, transitionEnd: v, ...g } = f;
      u = { ...u, ...g, ...v };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function a(l) {
    const { props: u } = e,
      c = p1(e.parent) || {},
      d = [],
      f = new Set();
    let p = {},
      v = 1 / 0;
    for (let P = 0; P < tA; P++) {
      const m = eA[P],
        h = n[m],
        y = u[m] !== void 0 ? u[m] : c[m],
        w = To(y),
        C = m === l ? h.isActive : null;
      C === !1 && (v = P);
      let L = y === c[m] && y !== u[m] && w;
      if (
        (L && r && e.manuallyAnimateOnMount && (L = !1),
        (h.protectedKeys = { ...p }),
        (!h.isActive && C === null) ||
          (!y && !h.prevProp) ||
          tc(y) ||
          typeof y == "boolean")
      )
        continue;
      const S = iA(h.prevProp, y);
      let A = S || (m === l && h.isActive && !L && w) || (P > v && w),
        F = !1;
      const O = Array.isArray(y) ? y : [y];
      let ue = O.reduce(i(m), {});
      C === !1 && (ue = {});
      const { prevResolvedValues: G = {} } = h,
        ae = { ...G, ...ue },
        le = (we) => {
          ((A = !0),
            f.has(we) && ((F = !0), f.delete(we)),
            (h.needsAnimating[we] = !0));
          const N = e.getValue(we);
          N && (N.liveStyle = !1);
        };
      for (const we in ae) {
        const N = ue[we],
          te = G[we];
        if (p.hasOwnProperty(we)) continue;
        let ie = !1;
        (cf(N) && cf(te) ? (ie = !Tw(N, te)) : (ie = N !== te),
          ie
            ? N != null
              ? le(we)
              : f.add(we)
            : N !== void 0 && f.has(we)
              ? le(we)
              : (h.protectedKeys[we] = !0));
      }
      ((h.prevProp = y),
        (h.prevResolvedValues = ue),
        h.isActive && (p = { ...p, ...ue }),
        r && e.blockInitialAnimation && (A = !1),
        A &&
          (!(L && S) || F) &&
          d.push(...O.map((we) => ({ animation: we, options: { type: m } }))));
    }
    if (f.size) {
      const P = {};
      (f.forEach((m) => {
        const h = e.getBaseTarget(m),
          y = e.getValue(m);
        (y && (y.liveStyle = !0), (P[m] = h ?? null));
      }),
        d.push({ animation: P }));
    }
    let g = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (g = !1),
      (r = !1),
      g ? t(d) : Promise.resolve()
    );
  }
  function o(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    ((c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var p;
        return (p = f.animationState) === null || p === void 0
          ? void 0
          : p.setActive(l, u);
      }),
      (n[l].isActive = u));
    const d = a(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: o,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      ((n = $y()), (r = !0));
    },
  };
}
function iA(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Tw(t, e) : !1;
}
function di(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function $y() {
  return {
    animate: di(!0),
    whileInView: di(),
    whileHover: di(),
    whileTap: di(),
    whileDrag: di(),
    whileFocus: di(),
    exit: di(),
  };
}
class ui {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class sA extends ui {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = rA(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    tc(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this));
  }
}
let aA = 0;
class oA extends ui {
  constructor() {
    (super(...arguments), (this.id = aA++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const lA = { animation: { Feature: sA }, exit: { Feature: oA } };
function Do(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function Ko(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const uA = (e) => (t) => ap(t) && e(t, Ko(t));
function Ja(e, t, n, r) {
  return Do(e, t, uA(n), r);
}
const Wy = (e, t) => Math.abs(e - t);
function cA(e, t) {
  const n = Wy(e.x, t.x),
    r = Wy(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class m1 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Gc(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          p = cA(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !p) return;
        const { point: v } = d,
          { timestamp: g } = kt;
        this.history.push({ ...v, timestamp: g });
        const { onStart: P, onMove: m } = this.handlers;
        (f ||
          (P && P(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d));
      }),
      (this.handlePointerMove = (d, f) => {
        ((this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Qc(f, this.transformPagePoint)),
          Ie.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: p, onSessionEnd: v, resumeAnimation: g } = this.handlers;
        if (
          (this.dragSnapToOrigin && g && g(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const P = Gc(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Qc(f, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && p && p(d, P), v && v(d, P));
      }),
      !ap(t))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window));
    const a = Ko(t),
      o = Qc(a, this.transformPagePoint),
      { point: l } = o,
      { timestamp: u } = kt;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    (c && c(t, Gc(o, this.history)),
      (this.removeListeners = Ho(
        Ja(this.contextWindow, "pointermove", this.handlePointerMove),
        Ja(this.contextWindow, "pointerup", this.handlePointerUp),
        Ja(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), ti(this.updatePoint));
  }
}
function Qc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Hy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Gc({ point: e }, t) {
  return {
    point: e,
    delta: Hy(e, y1(t)),
    offset: Hy(e, dA(t)),
    velocity: fA(t, 0.1),
  };
}
function dA(e) {
  return e[0];
}
function y1(e) {
  return e[e.length - 1];
}
function fA(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = y1(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > dr(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = fr(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const a = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return (a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a);
}
const g1 = 1e-4,
  hA = 1 - g1,
  pA = 1 + g1,
  v1 = 0.01,
  mA = 0 - v1,
  yA = 0 + v1;
function on(e) {
  return e.max - e.min;
}
function gA(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Ky(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = We(t.min, t.max, e.origin)),
    (e.scale = on(n) / on(t)),
    (e.translate = We(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= hA && e.scale <= pA) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= mA && e.translate <= yA) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function eo(e, t, n, r) {
  (Ky(e.x, t.x, n.x, r ? r.originX : void 0),
    Ky(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Zy(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + on(t)));
}
function vA(e, t, n) {
  (Zy(e.x, t.x, n.x), Zy(e.y, t.y, n.y));
}
function Qy(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + on(t)));
}
function to(e, t, n) {
  (Qy(e.x, t.x, n.x), Qy(e.y, t.y, n.y));
}
function xA(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? We(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? We(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Gy(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function wA(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Gy(e.x, n, i), y: Gy(e.y, t, r) };
}
function qy(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function SA(e, t) {
  return { x: qy(e.x, t.x), y: qy(e.y, t.y) };
}
function kA(e, t) {
  let n = 0.5;
  const r = on(e),
    i = on(t);
  return (
    i > r
      ? (n = qs(t.min, t.max - r, e.min))
      : r > i && (n = qs(e.min, e.max - i, t.min)),
    xr(0, 1, n)
  );
}
function _A(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Sf = 0.35;
function CA(e = Sf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Sf),
    { x: Yy(e, "left", "right"), y: Yy(e, "top", "bottom") }
  );
}
function Yy(e, t, n) {
  return { min: Xy(e, t), max: Xy(e, n) };
}
function Xy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Jy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Cs = () => ({ x: Jy(), y: Jy() }),
  eg = () => ({ min: 0, max: 0 }),
  et = () => ({ x: eg(), y: eg() });
function fn(e) {
  return [e("x"), e("y")];
}
function x1({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function PA({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function EA(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function qc(e) {
  return e === void 0 || e === 1;
}
function kf({ scale: e, scaleX: t, scaleY: n }) {
  return !qc(e) || !qc(t) || !qc(n);
}
function yi(e) {
  return (
    kf(e) ||
    w1(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function w1(e) {
  return tg(e.x) || tg(e.y);
}
function tg(e) {
  return e && e !== "0%";
}
function Pu(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function ng(e, t, n, r, i) {
  return (i !== void 0 && (e = Pu(e, i, r)), Pu(e, n, r) + t);
}
function _f(e, t = 0, n = 1, r, i) {
  ((e.min = ng(e.min, t, n, r, i)), (e.max = ng(e.max, t, n, r, i)));
}
function S1(e, { x: t, y: n }) {
  (_f(e.x, t.translate, t.scale, t.originPoint),
    _f(e.y, n.translate, n.scale, n.originPoint));
}
const rg = 0.999999999999,
  ig = 1.0000000000001;
function TA(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, a;
  for (let o = 0; o < i; o++) {
    ((s = n[o]), (a = s.projectionDelta));
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Es(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), S1(e, a)),
      r && yi(s.latestValues) && Es(e, s.latestValues));
  }
  (t.x < ig && t.x > rg && (t.x = 1), t.y < ig && t.y > rg && (t.y = 1));
}
function Ps(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function sg(e, t, n, r, i = 0.5) {
  const s = We(e.min, e.max, i);
  _f(e, t, n, s, r);
}
function Es(e, t) {
  (sg(e.x, t.x, t.scaleX, t.scale, t.originX),
    sg(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function k1(e, t) {
  return x1(EA(e.getBoundingClientRect(), t));
}
function RA(e, t, n) {
  const r = k1(e, n),
    { scroll: i } = t;
  return (i && (Ps(r.x, i.offset.x), Ps(r.y, i.offset.y)), r);
}
const _1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  AA = new WeakMap();
class bA {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = et()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        (d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ko(c).point));
      },
      s = (c, d) => {
        const { drag: f, dragPropagation: p, onDragStart: v } = this.getProps();
        if (
          f &&
          !p &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = kT(f)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          fn((P) => {
            let m = this.getAxisMotionValue(P).get() || 0;
            if (Gn.test(m)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const y = h.layout.layoutBox[P];
                y && (m = on(y) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[P] = m;
          }),
          v && Ie.postRender(() => v(c, d)),
          hf(this.visualElement, "transform"));
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      a = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: p,
          onDirectionLock: v,
          onDrag: g,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: P } = d;
        if (p && this.currentDirection === null) {
          ((this.currentDirection = DA(P)),
            this.currentDirection !== null && v && v(this.currentDirection));
          return;
        }
        (this.updateAxis("x", d.point, P),
          this.updateAxis("y", d.point, P),
          this.visualElement.render(),
          g && g(c, d));
      },
      o = (c, d) => this.stop(c, d),
      l = () =>
        fn((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new m1(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: a,
        onSessionEnd: o,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: _1(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && Ie.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !El(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (a = xA(a, this.constraints[t], this.elastic[t])),
      s.set(a));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      s = this.constraints;
    (n && ks(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = wA(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = CA(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        fn((a) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(a) &&
            (this.constraints[a] = _A(i.layoutBox[a], this.constraints[a]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ks(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = RA(r, i.root, this.visualElement.getTransformPagePoint());
    let a = SA(i.layout.layoutBox, s);
    if (n) {
      const o = n(PA(a));
      ((this.hasMutatedConstraints = !!o), o && (a = x1(o)));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: a,
        onDragTransitionEnd: o,
      } = this.getProps(),
      l = this.constraints || {},
      u = fn((c) => {
        if (!El(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        a && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          p = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(o);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      hf(this.visualElement, t),
      r.start(vp(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    fn((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    fn((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    fn((n) => {
      const { drag: r } = this.getProps();
      if (!El(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: a, max: o } = i.layout.layoutBox[n];
        s.set(t[n] - We(a, o, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!ks(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    fn((a) => {
      const o = this.getAxisMotionValue(a);
      if (o && this.constraints !== !1) {
        const l = o.get();
        i[a] = kA({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      fn((a) => {
        if (!El(a, t, null)) return;
        const o = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        o.set(We(l, u, i[a]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    AA.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Ja(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        ks(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      Ie.read(r));
    const a = Do(window, "resize", () => this.scalePositionWithinConstraints()),
      o = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (fn((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (a(), n(), s(), o && o());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: a = Sf,
        dragMomentum: o = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: a,
      dragMomentum: o,
    };
  }
}
function El(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function DA(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class MA extends ui {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = sn),
      (this.removeListeners = sn),
      (this.controls = new bA(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || sn));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const ag = (e) => (t, n) => {
  e && Ie.postRender(() => e(t, n));
};
class LA extends ui {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = sn));
  }
  onPointerDown(t) {
    this.session = new m1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: _1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: ag(t),
      onStart: ag(n),
      onMove: r,
      onEnd: (s, a) => {
        (delete this.session, i && Ie.postRender(() => i(s, a)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ja(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const $l = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function og(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ba = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (oe.test(e)) e = parseFloat(e);
        else return e;
      const n = og(e, t.target.x),
        r = og(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  OA = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = ni.parse(e);
      if (i.length > 5) return r;
      const s = ni.createTransformer(e),
        a = typeof i[0] != "number" ? 1 : 0,
        o = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + a] /= o), (i[1 + a] /= l));
      const u = We(o, l, 0.5);
      return (
        typeof i[2 + a] == "number" && (i[2 + a] /= u),
        typeof i[3 + a] == "number" && (i[3 + a] /= u),
        s(i)
      );
    },
  };
class NA extends _.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    (tT(jA),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      ($l.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? a.promote()
            : a.relegate() ||
              Ie.postRender(() => {
                const o = a.getStack();
                (!o || !o.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Zh.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function C1(e) {
  const [t, n] = aw(),
    r = _.useContext(Ih);
  return E.jsx(NA, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: _.useContext(pw),
    isPresent: t,
    safeToRemove: n,
  });
}
const jA = {
  borderRadius: {
    ...ba,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: ba,
  borderTopRightRadius: ba,
  borderBottomLeftRadius: ba,
  borderBottomRightRadius: ba,
  boxShadow: OA,
};
function VA(e, t, n) {
  const r = Nt(e) ? e : Ao(e);
  return (r.start(vp("", r, t, n)), r.animation);
}
function FA(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const IA = (e, t) => e.depth - t.depth;
class UA {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (op(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (lp(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(IA),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function zA(e, t) {
  const n = qn.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (ti(r), e(s - t));
    };
  return (Ie.read(r, !0), () => ti(r));
}
const P1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  BA = P1.length,
  lg = (e) => (typeof e == "string" ? parseFloat(e) : e),
  ug = (e) => typeof e == "number" || oe.test(e);
function $A(e, t, n, r, i, s) {
  i
    ? ((e.opacity = We(0, n.opacity !== void 0 ? n.opacity : 1, WA(r))),
      (e.opacityExit = We(t.opacity !== void 0 ? t.opacity : 1, 0, HA(r))))
    : s &&
      (e.opacity = We(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let a = 0; a < BA; a++) {
    const o = `border${P1[a]}Radius`;
    let l = cg(t, o),
      u = cg(n, o);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || ug(l) === ug(u)
        ? ((e[o] = Math.max(We(lg(l), lg(u), r), 0)),
          (Gn.test(u) || Gn.test(l)) && (e[o] += "%"))
        : (e[o] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = We(t.rotate || 0, n.rotate || 0, r));
}
function cg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const WA = E1(0, 0.5, Ww),
  HA = E1(0.5, 0.95, sn);
function E1(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(qs(e, t, r)));
}
function dg(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function dn(e, t) {
  (dg(e.x, t.x), dg(e.y, t.y));
}
function fg(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function hg(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Pu(e, 1 / n, r)),
    i !== void 0 && (e = Pu(e, 1 / i, r)),
    e
  );
}
function KA(e, t = 0, n = 1, r = 0.5, i, s = e, a = e) {
  if (
    (Gn.test(t) &&
      ((t = parseFloat(t)), (t = We(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let o = We(s.min, s.max, r);
  (e === s && (o -= t),
    (e.min = hg(e.min, t, n, o, i)),
    (e.max = hg(e.max, t, n, o, i)));
}
function pg(e, t, [n, r, i], s, a) {
  KA(e, t[n], t[r], t[i], t.scale, s, a);
}
const ZA = ["x", "scaleX", "originX"],
  QA = ["y", "scaleY", "originY"];
function mg(e, t, n, r) {
  (pg(e.x, t, ZA, n ? n.x : void 0, r ? r.x : void 0),
    pg(e.y, t, QA, n ? n.y : void 0, r ? r.y : void 0));
}
function yg(e) {
  return e.translate === 0 && e.scale === 1;
}
function T1(e) {
  return yg(e.x) && yg(e.y);
}
function gg(e, t) {
  return e.min === t.min && e.max === t.max;
}
function GA(e, t) {
  return gg(e.x, t.x) && gg(e.y, t.y);
}
function vg(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function R1(e, t) {
  return vg(e.x, t.x) && vg(e.y, t.y);
}
function xg(e) {
  return on(e.x) / on(e.y);
}
function wg(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class qA {
  constructor() {
    this.members = [];
  }
  add(t) {
    (op(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (lp(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function YA(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    a = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || a) && (r = `translate3d(${i}px, ${s}px, ${a}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: p,
      skewY: v,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      p && (r += `skewX(${p}deg) `),
      v && (r += `skewY(${v}deg) `));
  }
  const o = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((o !== 1 || l !== 1) && (r += `scale(${o}, ${l})`), r || "none");
}
const gi = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Ua = typeof window < "u" && window.MotionDebug !== void 0,
  Yc = ["", "X", "Y", "Z"],
  XA = { visibility: "hidden" },
  Sg = 1e3;
let JA = 0;
function Xc(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function A1(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Vw(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ie, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && A1(r);
}
function b1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(a = {}, o = t == null ? void 0 : t()) {
      ((this.id = JA++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            Ua &&
              (gi.totalNodes =
                gi.resolvedTargetDeltas =
                gi.recalculatedProjection =
                  0),
            this.nodes.forEach(nb),
            this.nodes.forEach(ob),
            this.nodes.forEach(lb),
            this.nodes.forEach(rb),
            Ua && window.MotionDebug.record(gi));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = o ? o.root || o : this),
        (this.path = o ? [...o.path, o] : []),
        (this.parent = o),
        (this.depth = o ? o.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new UA());
    }
    addEventListener(a, o) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new up()),
        this.eventHandlers.get(a).add(o)
      );
    }
    notifyListeners(a, ...o) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...o);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, o = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = FA(a)), (this.instance = a));
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        o && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          ((this.root.updateBlockedByResize = !0),
            d && d(),
            (d = zA(f, 250)),
            $l.hasAnimatedSinceResize &&
              (($l.hasAnimatedSinceResize = !1), this.nodes.forEach(_g)));
        });
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: p,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const g =
                  this.options.transition || c.getDefaultTransition() || hb,
                { onLayoutAnimationStart: P, onLayoutAnimationComplete: m } =
                  c.getProps(),
                h = !this.targetLayout || !R1(this.targetLayout, v) || p,
                y = !f && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (f && (h || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, y));
                const w = { ...rp(g, "layout"), onPlay: P, onComplete: m };
                ((c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w));
              } else
                (f || _g(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = v;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const a = this.getStack();
      (a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        ti(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(ub),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          A1(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        ((d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1));
      }
      const { layoutId: o, layout: l } = this.options;
      if (o === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(kg));
        return;
      }
      (this.isUpdating || this.nodes.forEach(sb),
        (this.isUpdating = !1),
        this.nodes.forEach(ab),
        this.nodes.forEach(eb),
        this.nodes.forEach(tb),
        this.clearAllSnapshots());
      const o = qn.now();
      ((kt.delta = xr(0, 1e3 / 60, o - kt.timestamp)),
        (kt.timestamp = o),
        (kt.isProcessing = !0),
        Bc.update.process(kt),
        Bc.preRender.process(kt),
        Bc.render.process(kt),
        (kt.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Zh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(ib), this.sharedNodes.forEach(cb));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ie.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ie.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = et()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: o } = this.options;
      o &&
        o.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0,
        );
    }
    updateScroll(a = "measure") {
      let o = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === a &&
          (o = !1),
        o)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: a,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const a =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        o = this.projectionDelta && !T1(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (o || yi(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const o = this.measurePageBox();
      let l = this.removeElementScroll(o);
      return (
        a && (l = this.removeTransform(l)),
        pb(l),
        {
          animationId: this.root.animationId,
          measuredBox: o,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var a;
      const { visualElement: o } = this.options;
      if (!o) return et();
      const l = o.measureViewportBox();
      if (
        !(
          ((a = this.scroll) === null || a === void 0 ? void 0 : a.wasRoot) ||
          this.path.some(mb)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Ps(l.x, c.offset.x), Ps(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(a) {
      var o;
      const l = et();
      if (
        (dn(l, a), !((o = this.scroll) === null || o === void 0) && o.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && dn(l, a), Ps(l.x, d.offset.x), Ps(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(a, o = !1) {
      const l = et();
      dn(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        (!o &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Es(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          yi(c.latestValues) && Es(l, c.latestValues));
      }
      return (yi(this.latestValues) && Es(l, this.latestValues), l);
    }
    removeTransform(a) {
      const o = et();
      dn(o, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !yi(u.latestValues)) continue;
        kf(u.latestValues) && u.updateSnapshot();
        const c = et(),
          d = u.measurePageBox();
        (dn(c, d),
          mg(o, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c));
      }
      return (yi(this.latestValues) && mg(o, this.latestValues), o);
    }
    setTargetDelta(a) {
      ((this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== kt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var o;
      const l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = kt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = et()),
              (this.relativeTargetOrigin = et()),
              to(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox,
              ),
              dn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = et()), (this.targetWithTransforms = et())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                vA(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : dn(this.target, this.layout.layoutBox),
                  S1(this.target, this.targetDelta))
                : dn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = et()),
                (this.relativeTargetOrigin = et()),
                to(this.relativeTargetOrigin, this.target, p.target),
                dn(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ua && gi.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          kf(this.parent.latestValues) ||
          w1(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const o = this.getLead(),
        l = !!this.resumingFrom || this !== o;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === kt.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      dn(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        p = this.treeScale.y;
      (TA(this.layoutCorrected, this.treeScale, this.path, l),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = et())));
      const { target: v } = o;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (fg(this.prevProjectionDelta.x, this.projectionDelta.x),
          fg(this.prevProjectionDelta.y, this.projectionDelta.y)),
        eo(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== p ||
          !wg(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !wg(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        Ua && gi.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      var o;
      if (
        ((o = this.options.visualElement) === null ||
          o === void 0 ||
          o.scheduleRender(),
        a)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Cs()),
        (this.projectionDelta = Cs()),
        (this.projectionDeltaWithTransform = Cs()));
    }
    setAnimationOrigin(a, o = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Cs();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !o));
      const f = et(),
        p = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        g = p !== v,
        P = this.getStack(),
        m = !P || P.members.length <= 1,
        h = !!(g && !m && this.options.crossfade === !0 && !this.path.some(fb));
      this.animationProgress = 0;
      let y;
      ((this.mixTargetDelta = (w) => {
        const C = w / 1e3;
        (Cg(d.x, a.x, C),
          Cg(d.y, a.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (to(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            db(this.relativeTarget, this.relativeTargetOrigin, f, C),
            y && GA(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = et()),
            dn(y, this.relativeTarget)),
          g &&
            ((this.animationValues = c), $A(c, u, this.latestValues, C, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(a) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (ti(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ie.update(() => {
          (($l.hasAnimatedSinceResize = !0),
            (this.currentAnimation = VA(0, Sg, {
              ...a,
              onUpdate: (o) => {
                (this.mixTargetDelta(o), a.onUpdate && a.onUpdate(o));
              },
              onComplete: () => {
                (a.onComplete && a.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      (a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Sg),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: o,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!o || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          D1(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || et();
          const d = on(this.layout.layoutBox.x);
          ((l.x.min = a.target.x.min), (l.x.max = l.x.min + d));
          const f = on(this.layout.layoutBox.y);
          ((l.y.min = a.target.y.min), (l.y.max = l.y.min + f));
        }
        (dn(o, l),
          Es(o, c),
          eo(this.projectionDeltaWithTransform, this.layoutCorrected, o, c));
      }
    }
    registerSharedNode(a, o) {
      (this.sharedNodes.has(a) || this.sharedNodes.set(a, new qA()),
        this.sharedNodes.get(a).add(o));
      const u = o.options.initialPromotionConfig;
      o.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(o)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: o, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        o && this.setOptions({ transition: o }));
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let o = !1;
      const { latestValues: l } = a;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (o = !0),
        !o)
      )
        return;
      const u = {};
      l.z && Xc("z", a, u, this.animationValues);
      for (let c = 0; c < Yc.length; c++)
        (Xc(`rotate${Yc[c]}`, a, u, this.animationValues),
          Xc(`skew${Yc[c]}`, a, u, this.animationValues));
      a.render();
      for (const c in u)
        (a.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var o, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return XA;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = zl(a == null ? void 0 : a.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = zl(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !yi(this.latestValues) &&
            ((g.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const f = d.animationValues || d.latestValues;
      (this.applyTransformsToTarget(),
        (u.transform = YA(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f,
        )),
        c && (u.transform = c(f, u.transform)));
      const { x: p, y: v } = this.projectionDelta;
      ((u.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (o = f.opacity) !== null && o !== void 0
                      ? o
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0));
      for (const g in wu) {
        if (f[g] === void 0) continue;
        const { correct: P, applyTo: m } = wu[g],
          h = u.transform === "none" ? f[g] : P(f[g], d);
        if (m) {
          const y = m.length;
          for (let w = 0; w < y; w++) u[m[w]] = h;
        } else u[g] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? zl(a == null ? void 0 : a.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((a) => {
        var o;
        return (o = a.currentAnimation) === null || o === void 0
          ? void 0
          : o.stop();
      }),
        this.root.nodes.forEach(kg),
        this.root.sharedNodes.clear());
    }
  };
}
function eb(e) {
  e.updateLayout();
}
function tb(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      a = n.source !== e.layout.source;
    s === "size"
      ? fn((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            p = on(f);
          ((f.min = r[d].min), (f.max = f.min + p));
        })
      : D1(s, n.layoutBox, r) &&
        fn((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            p = on(r[d]);
          ((f.max = f.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + p)));
        });
    const o = Cs();
    eo(o, r, n.layoutBox);
    const l = Cs();
    a ? eo(l, e.applyTransform(i, !0), n.measuredBox) : eo(l, r, n.layoutBox);
    const u = !T1(o);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const v = et();
          to(v, n.layoutBox, f.layoutBox);
          const g = et();
          (to(g, r, p.layoutBox),
            R1(v, g) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: o,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function nb(e) {
  (Ua && gi.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function rb(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function ib(e) {
  e.clearSnapshot();
}
function kg(e) {
  e.clearMeasurements();
}
function sb(e) {
  e.isLayoutDirty = !1;
}
function ab(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function _g(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function ob(e) {
  e.resolveTargetDelta();
}
function lb(e) {
  e.calcProjection();
}
function ub(e) {
  e.resetSkewAndRotation();
}
function cb(e) {
  e.removeLeadSnapshot();
}
function Cg(e, t, n) {
  ((e.translate = We(t.translate, 0, n)),
    (e.scale = We(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Pg(e, t, n, r) {
  ((e.min = We(t.min, n.min, r)), (e.max = We(t.max, n.max, r)));
}
function db(e, t, n, r) {
  (Pg(e.x, t.x, n.x, r), Pg(e.y, t.y, n.y, r));
}
function fb(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const hb = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Eg = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Tg = Eg("applewebkit/") && !Eg("chrome/") ? Math.round : sn;
function Rg(e) {
  ((e.min = Tg(e.min)), (e.max = Tg(e.max)));
}
function pb(e) {
  (Rg(e.x), Rg(e.y));
}
function D1(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !gA(xg(t), xg(n), 0.2))
  );
}
function mb(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const yb = b1({
    attachResizeListener: (e, t) => Do(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Jc = { current: void 0 },
  M1 = b1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Jc.current) {
        const e = new yb({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Jc.current = e));
      }
      return Jc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  gb = {
    pan: { Feature: LA },
    drag: { Feature: MA, ProjectionNode: M1, MeasureLayout: C1 },
  };
function Ag(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && Ie.postRender(() => s(t, Ko(t)));
}
class vb extends ui {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = gT(
        t,
        (n) => (Ag(this.node, n, "Start"), (r) => Ag(this.node, r, "End")),
      ));
  }
  unmount() {}
}
class xb extends ui {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ho(
      Do(this.node.current, "focus", () => this.onFocus()),
      Do(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function bg(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && Ie.postRender(() => s(t, Ko(t)));
}
class wb extends ui {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = ST(
        t,
        (n) => (
          bg(this.node, n, "Start"),
          (r, { success: i }) => bg(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Cf = new WeakMap(),
  ed = new WeakMap(),
  Sb = (e) => {
    const t = Cf.get(e.target);
    t && t(e);
  },
  kb = (e) => {
    e.forEach(Sb);
  };
function _b({ root: e, ...t }) {
  const n = e || document;
  ed.has(n) || ed.set(n, {});
  const r = ed.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(kb, { root: e, ...t })),
    r[i]
  );
}
function Cb(e, t, n) {
  const r = _b(t);
  return (
    Cf.set(e, n),
    r.observe(e),
    () => {
      (Cf.delete(e), r.unobserve(e));
    }
  );
}
const Pb = { some: 0, all: 1 };
class Eb extends ui {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Pb[i],
      },
      o = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return Cb(this.node.current, a, o);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Tb(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Tb({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Rb = {
    inView: { Feature: Eb },
    tap: { Feature: wb },
    focus: { Feature: xb },
    hover: { Feature: vb },
  },
  Ab = { layout: { ProjectionNode: M1, MeasureLayout: C1 } },
  Pf = { current: null },
  L1 = { current: !1 };
function bb() {
  if (((L1.current = !0), !!Bh))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Pf.current = e.matches);
      (e.addListener(t), t());
    } else Pf.current = !1;
}
const Db = [...i1, Dt, ni],
  Mb = (e) => Db.find(r1(e)),
  Dg = new WeakMap();
function Lb(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (Nt(i)) e.addValue(r, i);
    else if (Nt(s)) e.addValue(r, Ao(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const a = e.getValue(r);
        a.liveStyle === !0 ? a.jump(i) : a.hasAnimated || a.set(i);
      } else {
        const a = e.getStaticValue(r);
        e.addValue(r, Ao(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Mg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class Ob {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: a,
    },
    o = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = mp),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const p = qn.now();
        this.renderScheduledAt < p &&
          ((this.renderScheduledAt = p), Ie.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: u, onUpdate: c } = a;
    ((this.onUpdate = c),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = o),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = nc(n)),
      (this.isVariantNode = fw(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const p in f) {
      const v = f[p];
      l[p] !== void 0 && Nt(v) && v.set(l[p], !1);
    }
  }
  mount(t) {
    ((this.current = t),
      Dg.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      L1.current || bb(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Pf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (Dg.delete(this.current),
      this.projection && this.projection.unmount(),
      ti(this.notifyUpdate),
      ti(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Gi.has(t),
      i = n.on("change", (o) => {
        ((this.latestValues[t] = o),
          this.props.onUpdate && Ie.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let a;
    (window.MotionCheckAppearSync &&
      (a = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), s(), a && a(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ys) {
      const n = Ys[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : et();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < Mg.length; r++) {
      const i = Mg[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        a = t[s];
      a && (this.propEventSubscriptions[i] = this.on(i, a));
    }
    ((this.prevMotionValues = Lb(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this));
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Ao(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (t1(i) || Kw(i))
          ? (i = parseFloat(i))
          : !Mb(i) && ni.test(n) && (i = Xw(t, n)),
        this.setBaseTarget(t, Nt(i) ? i.get() : i)),
      Nt(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const a = Gh(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      a && (i = a[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Nt(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new up()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class O1 extends Ob {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = s1));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Nt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Nb(e) {
  return window.getComputedStyle(e);
}
class jb extends O1 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Sw));
  }
  readValueFromInstance(t, n) {
    if (Gi.has(n)) {
      const r = pp(n);
      return (r && r.default) || 0;
    } else {
      const r = Nb(t),
        i = (vw(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return k1(t, n);
  }
  build(t, n, r) {
    Xh(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return np(t, n, r);
  }
}
class Vb extends O1 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = et));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Gi.has(n)) {
      const r = pp(n);
      return (r && r.default) || 0;
    }
    return ((n = kw.has(n) ? n : Kh(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Pw(t, n, r);
  }
  build(t, n, r) {
    Jh(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    _w(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = tp(t.tagName)), super.mount(t));
  }
}
const Fb = (e, t) =>
    Qh(e) ? new Vb(t) : new jb(t, { allowProjection: e !== _.Fragment }),
  Ib = cT({ ...lA, ...Rb, ...gb, ...Ab }, Fb),
  Mt = PE(Ib);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ub = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  N1 = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var zb = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bb = _.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: s,
      iconNode: a,
      ...o
    },
    l,
  ) =>
    _.createElement(
      "svg",
      {
        ref: l,
        ...zb,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: N1("lucide", i),
        ...o,
      },
      [
        ...a.map(([u, c]) => _.createElement(u, c)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kn = (e, t) => {
  const n = _.forwardRef(({ className: r, ...i }, s) =>
    _.createElement(Bb, {
      ref: s,
      iconNode: t,
      className: N1(`lucide-${Ub(e)}`, r),
      ...i,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $b = kn("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wb = kn("CalendarCheck", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hb = kn("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kb = kn("CalendarPlus", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "path",
    {
      d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
      key: "3spt84",
    },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zb = kn("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qb = kn("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gb = kn("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qb = kn("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  [
    "rect",
    { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
  ],
  [
    "rect",
    { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
  ],
  [
    "rect",
    { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
  ],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yb = kn("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xb = kn("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jb = kn("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j1 = kn("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var Zo = (e) => e.type === "checkbox",
  Pi = (e) => e instanceof Date,
  Ut = (e) => e == null;
const V1 = (e) => typeof e == "object";
var Je = (e) => !Ut(e) && !Array.isArray(e) && V1(e) && !Pi(e),
  eD = (e) =>
    Je(e) && e.target ? (Zo(e.target) ? e.target.checked : e.target.value) : e,
  tD = (e, t) =>
    t
      .split(".")
      .some((n, r, i) => !isNaN(Number(n)) && e.has(i.slice(0, r).join("."))),
  nD = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return Je(t) && t.hasOwnProperty("isPrototypeOf");
  },
  xp =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function it(e) {
  if (e instanceof Date) return new Date(e);
  const t = typeof FileList < "u" && e instanceof FileList;
  if (xp && (e instanceof Blob || t)) return e;
  const n = Array.isArray(e);
  if (!n && !(Je(e) && nD(e))) return e;
  const r = n ? [] : Object.create(Object.getPrototypeOf(e));
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) && (r[i] = it(e[i]));
  return r;
}
var sc = (e) => /^\w*$/.test(e),
  ze = (e) => e === void 0,
  wp = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Sp = (e) => wp(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  Z = (e, t, n) => {
    if (!t || !Je(e)) return n;
    const i = (sc(t) ? [t] : Sp(t)).reduce(
      (s, a) => (Ut(s) ? void 0 : s[a]),
      e,
    );
    return ze(i) || i === e ? (ze(e[t]) ? n : e[t]) : i;
  },
  zn = (e) => typeof e == "boolean",
  gn = (e) => typeof e == "function",
  Me = (e, t, n) => {
    let r = -1;
    const i = sc(t) ? [t] : Sp(t),
      s = i.length,
      a = s - 1;
    for (; ++r < s; ) {
      const o = i[r];
      let l = n;
      if (r !== a) {
        const u = e[o];
        l = Je(u) || Array.isArray(u) ? u : isNaN(+i[r + 1]) ? {} : [];
      }
      if (o === "__proto__" || o === "constructor" || o === "prototype") return;
      ((e[o] = l), (e = e[o]));
    }
  };
const as = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    SUBMIT: "submit",
    TRIGGER: "trigger",
    VALID: "valid",
  },
  Mn = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  En = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  td = "form",
  F1 = "root",
  rD = St.createContext(null);
rD.displayName = "HookFormControlContext";
var iD = (e, t, n, r = !0) => {
  const i = {};
  for (const s in e)
    Object.defineProperty(i, s, {
      get: () => {
        const a = s;
        return (
          t._proxyFormState[a] !== Mn.all &&
            (t._proxyFormState[a] = !r || Mn.all),
          e[a]
        );
      },
    });
  return i;
};
const sD = typeof window < "u" ? St.useLayoutEffect : St.useEffect;
var Ot = (e) => typeof e == "string",
  aD = (e, t, n, r, i) =>
    Ot(e)
      ? (r && t.watch.add(e), Z(n, e, i))
      : Array.isArray(e)
        ? e.map((s) => (r && t.watch.add(s), Z(n, s)))
        : (r && (t.watchAll = !0), n),
  Ef = (e) => Ut(e) || !V1(e);
function Bn(e, t, n = new WeakSet()) {
  if (e === t) return !0;
  if (Ef(e) || Ef(t)) return Object.is(e, t);
  if (Pi(e) && Pi(t)) return Object.is(e.getTime(), t.getTime());
  const r = Object.keys(e),
    i = Object.keys(t);
  if (r.length !== i.length) return !1;
  if (n.has(e) || n.has(t)) return !0;
  (n.add(e), n.add(t));
  for (const s of r) {
    const a = e[s];
    if (!(s in t)) return !1;
    if (s !== "ref") {
      const o = t[s];
      if (
        (Pi(a) && Pi(o)) ||
        ((Je(a) || Array.isArray(a)) && (Je(o) || Array.isArray(o)))
          ? !Bn(a, o, n)
          : !Object.is(a, o)
      )
        return !1;
    }
  }
  return !0;
}
const oD = St.createContext(null);
oD.displayName = "HookFormContext";
var I1 = (e, t, n, r, i) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: i || !0 },
        }
      : {},
  no = (e) => (Array.isArray(e) ? e : [e]),
  Lg = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (i) => {
        for (const s of e) s.next && s.next(i);
      },
      subscribe: (i) => (
        e.push(i),
        {
          unsubscribe: () => {
            e = e.filter((s) => s !== i);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  };
function U1(e, t) {
  const n = {};
  for (const r in e)
    if (e.hasOwnProperty(r)) {
      const i = e[r],
        s = t[r];
      if (i && Je(i) && s) {
        const a = U1(i, s);
        Je(a) && (n[r] = a);
      } else e[r] && (n[r] = s);
    }
  return n;
}
var bt = (e) => Je(e) && !Object.keys(e).length,
  kp = (e) => e.type === "file",
  Eu = (e) => {
    if (!xp) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  z1 = (e) => e.type === "select-multiple",
  _p = (e) => e.type === "radio",
  lD = (e) => _p(e) || Zo(e),
  nd = (e) => Eu(e) && e.isConnected;
function uD(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) {
    if (Ut(e)) {
      e = void 0;
      break;
    }
    ((e = e[t[r]]), r++);
  }
  return e;
}
function cD(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !ze(e[t])) return !1;
  return !0;
}
function st(e, t) {
  if (Ot(t) && Object.prototype.hasOwnProperty.call(e, t))
    return (delete e[t], e);
  const n = Array.isArray(t) ? t : sc(t) ? [t] : Sp(t),
    r = n.length === 1 ? e : uD(e, n),
    i = n.length - 1,
    s = n[i];
  return (
    r && delete r[s],
    i !== 0 &&
      ((Je(r) && bt(r)) || (Array.isArray(r) && cD(r))) &&
      st(e, n.slice(0, -1)),
    e
  );
}
var dD = (e) => {
  for (const t in e) if (gn(e[t])) return !0;
  return !1;
};
function B1(e) {
  return Array.isArray(e) || (Je(e) && !dD(e));
}
function Tf(e, t = {}) {
  for (const n in e) {
    const r = e[n];
    B1(r)
      ? ((t[n] = Array.isArray(r) ? [] : {}), Tf(r, t[n]))
      : ze(r) || (t[n] = !0);
  }
  return t;
}
function Rf(e) {
  if (e !== !1) {
    if (e === !0) return !0;
    if (Array.isArray(e)) {
      const t = e.map((n) => Rf(n));
      return t.some((n) => n !== void 0) ? t : void 0;
    }
    if (Je(e)) {
      const t = {};
      for (const n in e) {
        const r = Rf(e[n]);
        ze(r) || (t[n] = r);
      }
      return Object.keys(t).length ? t : void 0;
    }
  }
}
function za(e, t, n) {
  n || (n = Tf(t));
  for (const r in e) {
    const i = e[r];
    if (B1(i))
      ze(t) || Ef(n[r])
        ? (n[r] = Tf(i, Array.isArray(i) ? [] : {}))
        : za(i, Ut(t) ? {} : t[r], n[r]);
    else {
      const s = t[r];
      n[r] = !Bn(i, s);
    }
  }
  return Rf(n) || {};
}
const Og = { value: !1, isValid: !1 },
  Ng = { value: !0, isValid: !0 };
var $1 = (e) => {
    if (Array.isArray(e)) {
      if (e.length > 1) {
        const t = e
          .filter((n) => n && n.checked && !n.disabled)
          .map((n) => n.value);
        return { value: t, isValid: !!t.length };
      }
      return e[0].checked && !e[0].disabled
        ? e[0].attributes && !ze(e[0].attributes.value)
          ? ze(e[0].value) || e[0].value === ""
            ? Ng
            : { value: e[0].value, isValid: !0 }
          : Ng
        : Og;
    }
    return Og;
  },
  W1 = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    ze(e)
      ? e
      : t
        ? e === ""
          ? NaN
          : e && +e
        : n && Ot(e)
          ? new Date(e)
          : r
            ? r(e)
            : e;
const jg = { isValid: !1, value: null };
var H1 = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        jg,
      )
    : jg;
function Vg(e) {
  const t = e.ref;
  return kp(t)
    ? t.files
    : _p(t)
      ? H1(e.refs).value
      : z1(t)
        ? [...t.selectedOptions].map(({ value: n }) => n)
        : Zo(t)
          ? $1(e.refs).value
          : W1(ze(t.value) ? e.ref.value : t.value, e);
}
var fD = (e, t, n, r) => {
    const i = {};
    for (const s of e) {
      const a = Z(t, s);
      a && Me(i, s, a._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: i,
      shouldUseNativeValidation: r,
    };
  },
  Tu = (e) => e instanceof RegExp,
  Da = (e) =>
    ze(e)
      ? e
      : Tu(e)
        ? e.source
        : Je(e)
          ? Tu(e.value)
            ? e.value.source
            : e.value
          : e,
  Fg = (e) => ({
    isOnSubmit: !e || e === Mn.onSubmit,
    isOnBlur: e === Mn.onBlur,
    isOnChange: e === Mn.onChange,
    isOnAll: e === Mn.all,
    isOnTouch: e === Mn.onTouched,
  });
const Ig = "AsyncFunction";
var hD = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (gn(e.validate) && e.validate.constructor.name === Ig) ||
      (Je(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === Ig))
    ),
  pD = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate),
  Ug = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)),
      ));
const ro = (e, t, n, r) => {
  for (const i of n || Object.keys(e)) {
    const s = Z(e, i);
    if (s) {
      const { _f: a, ...o } = s;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], i) && !r) return !0;
        if (a.ref && t(a.ref, a.name) && !r) return !0;
        if (ro(o, t)) break;
      } else if (Je(o) && ro(o, t)) break;
    }
  }
};
function zg(e, t, n) {
  const r = Z(e, n);
  if (r || sc(n)) return { error: r, name: n };
  const i = n.split(".");
  for (; i.length; ) {
    const s = i.join("."),
      a = Z(t, s),
      o = Z(e, s);
    if (a && !Array.isArray(a) && n !== s) return { name: n };
    if (o && o.type) return { name: s, error: o };
    if (o && o.root && o.root.type) return { name: `${s}.root`, error: o.root };
    i.pop();
  }
  return { name: n };
}
var mD = (e, t, n, r) => {
    n(e);
    const { name: i, ...s } = e;
    return (
      bt(s) ||
      (r && Object.keys(s).length >= Object.keys(t).length) ||
      Object.keys(s).find((a) => t[a] === (!r || Mn.all))
    );
  },
  yD = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    no(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r))),
  gD = (e, t, n, r, i) =>
    i.isOnAll
      ? !1
      : !n && i.isOnTouch
        ? !(t || e)
        : (n ? r.isOnBlur : i.isOnBlur)
          ? !e
          : (n ? r.isOnChange : i.isOnChange)
            ? e
            : !0,
  vD = (e, t) => !wp(Z(e, t)).length && st(e, t),
  xD = (e, t, n) => {
    const r = no(Z(e, n));
    return (Me(r, F1, t[n]), Me(e, n, r), e);
  };
function Bg(e, t, n = "validate") {
  if (Ot(e) || (Array.isArray(e) && e.every(Ot)) || (zn(e) && !e))
    return { type: n, message: Ot(e) ? e : "", ref: t };
}
var os = (e) => (Je(e) && !Tu(e) ? e : { value: e, message: "" }),
  $g = async (e, t, n, r, i, s) => {
    const {
        ref: a,
        refs: o,
        required: l,
        maxLength: u,
        minLength: c,
        min: d,
        max: f,
        pattern: p,
        validate: v,
        name: g,
        valueAsNumber: P,
        mount: m,
      } = e._f,
      h = Z(n, g);
    if (!m || t.has(g)) return {};
    const y = o ? o[0] : a,
      w = (G) => {
        i &&
          y.reportValidity &&
          (y.setCustomValidity(zn(G) ? "" : G || ""), y.reportValidity());
      },
      C = {},
      L = _p(a),
      S = Zo(a),
      A = L || S,
      F =
        ((P || kp(a)) && ze(a.value) && ze(h)) ||
        (Eu(a) && a.value === "") ||
        h === "" ||
        (Array.isArray(h) && !h.length) ||
        (P && typeof h == "number" && isNaN(h)),
      O = I1.bind(null, g, r, C),
      ue = (G, ae, le, Ae = En.maxLength, nt = En.minLength) => {
        const we = G ? ae : le;
        C[g] = {
          type: G ? Ae : nt,
          message: we,
          ref: a,
          ...O(G ? Ae : nt, we),
        };
      };
    if (
      s
        ? !Array.isArray(h) || !h.length
        : l &&
          ((!A && (F || Ut(h))) ||
            (zn(h) && !h) ||
            (S && !$1(o).isValid) ||
            (L && !H1(o).isValid))
    ) {
      const { value: G, message: ae } = Ot(l)
        ? { value: !!l, message: l }
        : os(l);
      if (
        G &&
        ((C[g] = {
          type: En.required,
          message: ae,
          ref: y,
          ...O(En.required, ae),
        }),
        !r)
      )
        return (w(ae), C);
    }
    if (!F && (!Ut(d) || !Ut(f))) {
      let G, ae;
      const le = os(f),
        Ae = os(d);
      if (!Ut(h) && !isNaN(h)) {
        const nt = a.valueAsNumber || (h && +h);
        (Ut(le.value) || (G = nt > le.value),
          Ut(Ae.value) || (ae = nt < Ae.value));
      } else {
        const nt = a.valueAsDate || new Date(h),
          we = (ie) => new Date(new Date().toDateString() + " " + ie),
          N = a.type == "time",
          te = a.type == "week";
        (Ot(le.value) &&
          h &&
          (G = N
            ? we(h) > we(le.value)
            : te
              ? h > le.value
              : nt > new Date(le.value)),
          Ot(Ae.value) &&
            h &&
            (ae = N
              ? we(h) < we(Ae.value)
              : te
                ? h < Ae.value
                : nt < new Date(Ae.value)));
      }
      if ((G || ae) && (ue(!!G, le.message, Ae.message, En.max, En.min), !r))
        return (w(C[g].message), C);
    }
    if ((u || c) && !F && (Ot(h) || (s && Array.isArray(h)))) {
      const G = os(u),
        ae = os(c),
        le = !Ut(G.value) && h.length > +G.value,
        Ae = !Ut(ae.value) && h.length < +ae.value;
      if ((le || Ae) && (ue(le, G.message, ae.message), !r))
        return (w(C[g].message), C);
    }
    if (p && !F && Ot(h)) {
      const { value: G, message: ae } = os(p);
      if (
        Tu(G) &&
        !h.match(G) &&
        ((C[g] = {
          type: En.pattern,
          message: ae,
          ref: a,
          ...O(En.pattern, ae),
        }),
        !r)
      )
        return (w(ae), C);
    }
    if (v) {
      if (gn(v)) {
        const G = await v(h, n),
          ae = Bg(G, y);
        if (ae && ((C[g] = { ...ae, ...O(En.validate, ae.message) }), !r))
          return (w(ae.message), C);
      } else if (Je(v)) {
        let G = {};
        for (const ae in v) {
          if (!bt(G) && !r) break;
          const le = Bg(await v[ae](h, n), y, ae);
          le &&
            ((G = { ...le, ...O(ae, le.message) }),
            w(le.message),
            r && (C[g] = G));
        }
        if (!bt(G) && ((C[g] = { ref: y, ...G }), !r)) return C;
      }
    }
    return (w(!0), C);
  };
const wD = {
    mode: Mn.onSubmit,
    reValidateMode: Mn.onChange,
    shouldFocusError: !0,
  },
  K1 = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
  };
function SD(e = {}) {
  let t = { ...wD, ...e },
    n = {
      ...it(K1),
      isLoading: gn(t.defaultValues),
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    i =
      Je(t.defaultValues) || Je(t.values)
        ? it(t.defaultValues || t.values) || {}
        : {},
    s = t.shouldUnregister ? {} : it(i),
    a = { action: !1, mount: !1, watch: !1, keepIsValid: !1 },
    o = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
      registerName: new Set(),
    },
    l,
    u = 0;
  const c = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    d = { ...c };
  let f = { ...d };
  const p = { array: Lg(), state: Lg() },
    v = t.criteriaMode === Mn.all,
    g = (x) => (R) => {
      (clearTimeout(u), (u = setTimeout(x, R)));
    },
    P = async (x) => {
      if (!a.keepIsValid && !t.disabled && (d.isValid || f.isValid || x)) {
        let R;
        (t.resolver
          ? ((R = bt((await F()).errors)), m())
          : (R = await G({
              fields: r,
              onlyCheckValid: !0,
              eventType: as.VALID,
            })),
          R !== n.isValid && p.state.next({ isValid: R }));
      }
    },
    m = (x, R) => {
      !t.disabled &&
        (d.isValidating ||
          d.validatingFields ||
          f.isValidating ||
          f.validatingFields) &&
        ((x || Array.from(o.mount)).forEach((b) => {
          b && (R ? Me(n.validatingFields, b, R) : st(n.validatingFields, b));
        }),
        p.state.next({
          validatingFields: n.validatingFields,
          isValidating: !bt(n.validatingFields),
        }));
    },
    h = () => {
      n.dirtyFields = za(i, s);
    },
    y = (x, R = [], b, $, B = !0, I = !0) => {
      if ($ && b && !t.disabled) {
        if (((a.action = !0), I && Array.isArray(Z(r, x)))) {
          const H = b(Z(r, x), $.argA, $.argB);
          B && Me(r, x, H);
        }
        if (I && Array.isArray(Z(n.errors, x))) {
          const H = b(Z(n.errors, x), $.argA, $.argB);
          (B && Me(n.errors, x, H), vD(n.errors, x));
        }
        if (
          (d.touchedFields || f.touchedFields) &&
          I &&
          Array.isArray(Z(n.touchedFields, x))
        ) {
          const H = b(Z(n.touchedFields, x), $.argA, $.argB);
          B && Me(n.touchedFields, x, H);
        }
        ((d.dirtyFields || f.dirtyFields) && h(),
          p.state.next({
            name: x,
            isDirty: le(x, R),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          }));
      } else Me(s, x, R);
    },
    w = (x, R) => {
      (Me(n.errors, x, R), p.state.next({ errors: n.errors }));
    },
    C = (x) => {
      ((n.errors = x), p.state.next({ errors: n.errors, isValid: !1 }));
    },
    L = (x, R, b, $) => {
      const B = Z(r, x);
      if (B) {
        const I = ze(Z(s, x)),
          H = Z(s, x, ze(b) ? Z(i, x) : b);
        (ze(H) || ($ && $.defaultChecked) || R
          ? Me(s, x, R ? H : Vg(B._f))
          : we(x, H),
          a.mount &&
            !a.action &&
            (P(),
            I &&
              n.isDirty &&
              (d.isDirty || f.isDirty) &&
              (le() || ((n.isDirty = !1), p.state.next({ ...n })))));
      }
    },
    S = (x, R, b, $, B) => {
      let I = !1,
        H = !1;
      const ce = { name: x };
      if (!t.disabled) {
        if (!b || $) {
          (d.isDirty || f.isDirty) &&
            ((H = n.isDirty),
            (n.isDirty = ce.isDirty = le()),
            (I = H !== ce.isDirty));
          const ve = Bn(Z(i, x), R);
          ((H = !!Z(n.dirtyFields, x)),
            ve ? st(n.dirtyFields, x) : Me(n.dirtyFields, x, !0),
            (ce.dirtyFields = n.dirtyFields),
            (I = I || ((d.dirtyFields || f.dirtyFields) && H !== !ve)));
        }
        if (b) {
          const ve = Z(n.touchedFields, x);
          ve ||
            (Me(n.touchedFields, x, b),
            (ce.touchedFields = n.touchedFields),
            (I = I || ((d.touchedFields || f.touchedFields) && ve !== b)));
        }
        I && B && p.state.next(ce);
      }
      return I ? ce : {};
    },
    A = (x, R, b, $) => {
      const B = Z(n.errors, x),
        I = (d.isValid || f.isValid) && zn(R) && n.isValid !== R;
      if (
        (t.delayError && b
          ? ((l = g(() => w(x, b))), l(t.delayError))
          : (clearTimeout(u),
            (l = null),
            b ? Me(n.errors, x, b) : st(n.errors, x)),
        (b ? !Bn(B, b) : B) || !bt($) || I)
      ) {
        const H = {
          ...$,
          ...(I && zn(R) ? { isValid: R } : {}),
          errors: n.errors,
          name: x,
        };
        ((n = { ...n, ...H }), p.state.next(H));
      }
    },
    F = async (x) => (
      m(x, !0),
      await t.resolver(
        s,
        t.context,
        fD(x || o.mount, r, t.criteriaMode, t.shouldUseNativeValidation),
      )
    ),
    O = async (x) => {
      const { errors: R } = await F(x);
      if ((m(x), x))
        for (const b of x) {
          const $ = Z(R, b);
          $ ? Me(n.errors, b, $) : st(n.errors, b);
        }
      else n.errors = R;
      return R;
    },
    ue = async ({ name: x, eventType: R }) => {
      if (e.validate) {
        const b = await e.validate({
          formValues: s,
          formState: n,
          name: x,
          eventType: R,
        });
        if (Je(b))
          for (const $ in b)
            b[$] &&
              gt(`${td}.${$}`, {
                message: Ot(b.message) ? b.message : "",
                type: En.validate,
              });
        else
          Ot(b) || !b
            ? gt(td, { message: b || "", type: En.validate })
            : ft(td);
        return b;
      }
      return !0;
    },
    G = async ({
      fields: x,
      onlyCheckValid: R,
      name: b,
      eventType: $,
      context: B = { valid: !0, runRootValidation: !1 },
    }) => {
      if (
        e.validate &&
        ((B.runRootValidation = !0),
        !(await ue({ name: b, eventType: $ })) && ((B.valid = !1), R))
      )
        return B.valid;
      for (const I in x) {
        const H = x[I];
        if (H) {
          const { _f: ce, ...ve } = H;
          if (ce) {
            const Ue = o.array.has(ce.name),
              Xt = H._f && hD(H._f);
            Xt && d.validatingFields && m([ce.name], !0);
            const vt = await $g(
              H,
              o.disabled,
              s,
              v,
              t.shouldUseNativeValidation && !R,
              Ue,
            );
            if (
              (Xt && d.validatingFields && m([ce.name]),
              (vt[ce.name] && ((B.valid = !1), R)) ||
                (!R &&
                  (Z(vt, ce.name)
                    ? Ue
                      ? xD(n.errors, vt, ce.name)
                      : Me(n.errors, ce.name, vt[ce.name])
                    : st(n.errors, ce.name)),
                e.shouldUseNativeValidation && vt[ce.name]))
            )
              break;
          }
          !bt(ve) &&
            (await G({
              context: B,
              onlyCheckValid: R,
              fields: ve,
              name: I,
              eventType: $,
            }));
        }
      }
      return B.valid;
    },
    ae = () => {
      for (const x of o.unMount) {
        const R = Z(r, x);
        R &&
          (R._f.refs ? R._f.refs.every((b) => !nd(b)) : !nd(R._f.ref)) &&
          da(x);
      }
      o.unMount = new Set();
    },
    le = (x, R) => !t.disabled && (x && R && Me(s, x, R), !Bn(Et(), i)),
    Ae = (x, R, b) =>
      aD(x, o, { ...(a.mount ? s : ze(R) ? i : Ot(x) ? { [x]: R } : R) }, b, R),
    nt = (x) =>
      wp(Z(a.mount ? s : i, x, t.shouldUnregister ? Z(i, x, []) : [])),
    we = (x, R, b = {}) => {
      const $ = Z(r, x);
      let B = R;
      if ($) {
        const I = $._f;
        I &&
          (!I.disabled && Me(s, x, W1(R, I)),
          (B = Eu(I.ref) && Ut(R) ? "" : R),
          z1(I.ref)
            ? [...I.ref.options].forEach(
                (H) => (H.selected = B.includes(H.value)),
              )
            : I.refs
              ? Zo(I.ref)
                ? I.refs.forEach((H) => {
                    (!H.defaultChecked || !H.disabled) &&
                      (Array.isArray(B)
                        ? (H.checked = !!B.find((ce) => ce === H.value))
                        : (H.checked = B === H.value || !!B));
                  })
                : I.refs.forEach((H) => (H.checked = H.value === B))
              : kp(I.ref)
                ? (I.ref.value = "")
                : ((I.ref.value = B),
                  I.ref.type || p.state.next({ name: x, values: it(s) })));
      }
      ((b.shouldDirty || b.shouldTouch) &&
        S(x, B, b.shouldTouch, b.shouldDirty, !0),
        b.shouldValidate && Vt(x));
    },
    N = (x, R, b) => {
      for (const $ in R) {
        if (!R.hasOwnProperty($)) return;
        const B = R[$],
          I = x + "." + $,
          H = Z(r, I);
        (o.array.has(x) || Je(B) || (H && !H._f)) && !Pi(B)
          ? N(I, B, b)
          : we(I, B, b);
      }
    },
    te = (x, R, b = {}) => {
      const $ = Z(r, x),
        B = o.array.has(x),
        I = it(R),
        H = Z(s, x),
        ce = Bn(H, I);
      if ((Me(s, x, I), B))
        (p.array.next({ name: x, values: it(s) }),
          (d.isDirty || d.dirtyFields || f.isDirty || f.dirtyFields) &&
            b.shouldDirty &&
            (h(),
            p.state.next({
              name: x,
              dirtyFields: n.dirtyFields,
              isDirty: le(x, I),
            })));
      else {
        const ve = (Array.isArray(I) && !I.length) || bt(I);
        !$ || $._f || Ut(I) || ve ? we(x, I, b) : N(x, I, b);
      }
      if (!ce) {
        const ve = Ug(x, o);
        p.state.next({
          ...(ve && n),
          name: a.mount || ve ? x : void 0,
          values: it(s),
        });
      }
    },
    ie = (x) => {
      const R = gn(x) ? x(s) : x;
      Bn(s, R) || ((s = { ...s, ...R }), p.state.next({ ...n, values: s }));
    },
    Ee = async (x) => {
      a.mount = !0;
      const R = x.target;
      let b = R.name,
        $ = !0;
      const B = Z(r, b),
        I = (ve) => {
          $ =
            Number.isNaN(ve) ||
            (Pi(ve) && isNaN(ve.getTime())) ||
            Bn(ve, Z(s, b, ve));
        },
        H = Fg(t.mode),
        ce = Fg(t.reValidateMode);
      if (B) {
        let ve, Ue;
        const Xt = R.type ? Vg(B._f) : eD(x),
          vt = x.type === as.BLUR || x.type === as.FOCUS_OUT,
          Yo =
            (!pD(B._f) &&
              !e.validate &&
              !t.resolver &&
              !Z(n.errors, b) &&
              !B._f.deps) ||
            gD(vt, Z(n.touchedFields, b), n.isSubmitted, ce, H),
          ha = Ug(b, o, vt);
        (Me(s, b, Xt),
          vt
            ? (!R || !R.readOnly) && (B._f.onBlur && B._f.onBlur(x), l && l(0))
            : B._f.onChange && B._f.onChange(x));
        const Xi = S(b, Xt, vt),
          Ji = !bt(Xi) || ha;
        if ((!vt && p.state.next({ name: b, type: x.type, values: it(s) }), Yo))
          return (
            (d.isValid || f.isValid) &&
              (t.mode === "onBlur" ? vt && P() : vt || P()),
            Ji && p.state.next({ name: b, ...(ha ? {} : Xi) })
          );
        if (
          (!t.resolver &&
            e.validate &&
            (await ue({ name: b, eventType: x.type })),
          !vt && ha && p.state.next({ ...n }),
          t.resolver)
        ) {
          const { errors: pa } = await F([b]);
          if ((m([b]), I(Xt), $)) {
            const ma = zg(n.errors, r, b),
              es = zg(pa, r, ma.name || b);
            ((ve = es.error), (b = es.name), (Ue = bt(pa)));
          }
        } else
          (m([b], !0),
            (ve = (await $g(B, o.disabled, s, v, t.shouldUseNativeValidation))[
              b
            ]),
            m([b]),
            I(Xt),
            $ &&
              (ve
                ? (Ue = !1)
                : (d.isValid || f.isValid) &&
                  (Ue = await G({
                    fields: r,
                    onlyCheckValid: !0,
                    name: b,
                    eventType: x.type,
                  }))));
        $ &&
          (B._f.deps &&
            (!Array.isArray(B._f.deps) || B._f.deps.length > 0) &&
            Vt(B._f.deps),
          A(b, Ue, ve, Xi));
      }
    },
    Te = (x, R) => {
      if (Z(n.errors, R) && x.focus) return (x.focus(), 1);
    },
    Vt = async (x, R = {}) => {
      let b, $;
      const B = no(x);
      if (t.resolver) {
        const I = await O(ze(x) ? x : B);
        ((b = bt(I)), ($ = x ? !B.some((H) => Z(I, H)) : b));
      } else
        x
          ? (($ = (
              await Promise.all(
                B.map(async (I) => {
                  const H = Z(r, I);
                  return await G({
                    fields: H && H._f ? { [I]: H } : H,
                    eventType: as.TRIGGER,
                  });
                }),
              )
            ).every(Boolean)),
            !(!$ && !n.isValid) && P())
          : ($ = b = await G({ fields: r, name: x, eventType: as.TRIGGER }));
      return (
        p.state.next({
          ...(!Ot(x) || ((d.isValid || f.isValid) && b !== n.isValid)
            ? {}
            : { name: x }),
          ...(t.resolver || !x ? { isValid: b } : {}),
          errors: n.errors,
        }),
        R.shouldFocus && !$ && ro(r, Te, x ? B : o.mount),
        $
      );
    },
    Et = (x, R) => {
      let b = { ...(a.mount ? s : i) };
      return (
        R && (b = U1(R.dirtyFields ? n.dirtyFields : n.touchedFields, b)),
        ze(x) ? b : Ot(x) ? Z(b, x) : x.map(($) => Z(b, $))
      );
    },
    dt = (x, R) => ({
      invalid: !!Z((R || n).errors, x),
      isDirty: !!Z((R || n).dirtyFields, x),
      error: Z((R || n).errors, x),
      isValidating: !!Z(n.validatingFields, x),
      isTouched: !!Z((R || n).touchedFields, x),
    }),
    ft = (x) => {
      const R = x ? no(x) : void 0;
      (R == null || R.forEach((b) => st(n.errors, b)),
        R
          ? R.forEach((b) => {
              p.state.next({ name: b, errors: n.errors });
            })
          : p.state.next({ errors: {} }));
    },
    gt = (x, R, b) => {
      const $ = (Z(r, x, { _f: {} })._f || {}).ref,
        B = Z(n.errors, x) || {},
        { ref: I, message: H, type: ce, ...ve } = B;
      (Me(n.errors, x, { ...ve, ...R, ref: $ }),
        p.state.next({ name: x, errors: n.errors, isValid: !1 }),
        b && b.shouldFocus && $ && $.focus && $.focus());
    },
    qi = (x, R) =>
      gn(x)
        ? p.state.subscribe({
            next: (b) => "values" in b && x(b.values || Ae(void 0, R), b),
          })
        : Ae(x, R, !0),
    Qo = (x) =>
      p.state.subscribe({
        next: (R) => {
          if (
            yD(x.name, R.name, x.exact) &&
            mD(R, x.formState || d, cc, x.reRenderRoot)
          ) {
            const b = { ...s };
            x.callback({ values: b, ...n, ...R, defaultValues: i });
          }
        },
      }).unsubscribe,
    ac = (x) => (
      (a.mount = !0),
      (f = { ...f, ...x.formState }),
      Qo({ ...x, formState: { ...c, ...x.formState } })
    ),
    da = (x, R = {}) => {
      for (const b of x ? no(x) : o.mount)
        (o.mount.delete(b),
          o.array.delete(b),
          R.keepValue || (st(r, b), st(s, b)),
          !R.keepError && st(n.errors, b),
          !R.keepDirty && st(n.dirtyFields, b),
          !R.keepTouched && st(n.touchedFields, b),
          !R.keepIsValidating && st(n.validatingFields, b),
          !t.shouldUnregister && !R.keepDefaultValue && st(i, b));
      (p.state.next({ values: it(s) }),
        p.state.next({ ...n, ...(R.keepDirty ? { isDirty: le() } : {}) }),
        !R.keepIsValid && P());
    },
    ht = ({ disabled: x, name: R }) => {
      if ((zn(x) && a.mount) || x || o.disabled.has(R)) {
        const B = o.disabled.has(R) !== !!x;
        (x ? o.disabled.add(R) : o.disabled.delete(R),
          B && a.mount && !a.action && P());
      }
    },
    jn = (x, R = {}) => {
      let b = Z(r, x);
      const $ = zn(R.disabled) || zn(t.disabled),
        B = !o.registerName.has(x) && b && b._f && !b._f.mount;
      return (
        Me(r, x, {
          ...(b || {}),
          _f: {
            ...(b && b._f ? b._f : { ref: { name: x } }),
            name: x,
            mount: !0,
            ...R,
          },
        }),
        o.mount.add(x),
        b && !B
          ? ht({ disabled: zn(R.disabled) ? R.disabled : t.disabled, name: x })
          : L(x, !0, R.value),
        {
          ...($ ? { disabled: R.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!R.required,
                min: Da(R.min),
                max: Da(R.max),
                minLength: Da(R.minLength),
                maxLength: Da(R.maxLength),
                pattern: Da(R.pattern),
              }
            : {}),
          name: x,
          onChange: Ee,
          onBlur: Ee,
          ref: (I) => {
            if (I) {
              (o.registerName.add(x),
                jn(x, R),
                o.registerName.delete(x),
                (b = Z(r, x)));
              const H =
                  (ze(I.value) &&
                    I.querySelectorAll &&
                    I.querySelectorAll("input,select,textarea")[0]) ||
                  I,
                ce = lD(H),
                ve = b._f.refs || [];
              if (ce ? ve.find((Ue) => Ue === H) : H === b._f.ref) return;
              (Me(r, x, {
                _f: {
                  ...b._f,
                  ...(ce
                    ? {
                        refs: [
                          ...ve.filter(nd),
                          H,
                          ...(Array.isArray(Z(i, x)) ? [{}] : []),
                        ],
                        ref: { type: H.type, name: x },
                      }
                    : { ref: H }),
                },
              }),
                L(x, !1, void 0, H));
            } else
              ((b = Z(r, x, {})),
                b._f && (b._f.mount = !1),
                (t.shouldUnregister || R.shouldUnregister) &&
                  !(tD(o.array, x) && a.action) &&
                  o.unMount.add(x));
          },
        }
      );
    },
    Yi = () => t.shouldFocusError && ro(r, Te, o.mount),
    oc = (x) => {
      zn(x) &&
        (p.state.next({ disabled: x }),
        ro(
          r,
          (R, b) => {
            const $ = Z(r, b);
            $ &&
              ((R.disabled = $._f.disabled || x),
              Array.isArray($._f.refs) &&
                $._f.refs.forEach((B) => {
                  B.disabled = $._f.disabled || x;
                }));
          },
          0,
          !1,
        ));
    },
    Vn = (x, R) => async (b) => {
      let $;
      b && (b.preventDefault && b.preventDefault(), b.persist && b.persist());
      let B = it(s);
      if ((p.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: I, values: H } = await F();
        (m(), (n.errors = I), (B = it(H)));
      } else await G({ fields: r, eventType: as.SUBMIT });
      if (o.disabled.size) for (const I of o.disabled) st(B, I);
      if ((st(n.errors, F1), bt(n.errors))) {
        p.state.next({ errors: {} });
        try {
          await x(B, b);
        } catch (I) {
          $ = I;
        }
      } else (R && (await R({ ...n.errors }, b)), Yi(), setTimeout(Yi));
      if (
        (p.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: bt(n.errors) && !$,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        $)
      )
        throw $;
    },
    lc = (x, R = {}) => {
      Z(r, x) &&
        (ze(R.defaultValue)
          ? te(x, it(Z(i, x)))
          : (te(x, R.defaultValue), Me(i, x, it(R.defaultValue))),
        R.keepTouched || st(n.touchedFields, x),
        R.keepDirty ||
          (st(n.dirtyFields, x),
          (n.isDirty = R.defaultValue ? le(x, it(Z(i, x))) : le())),
        R.keepError || (st(n.errors, x), d.isValid && P()),
        p.state.next({ ...n }));
    },
    Go = (x, R = {}) => {
      const b = x ? it(x) : i,
        $ = it(b),
        B = bt(x),
        I = B ? i : $;
      if ((R.keepDefaultValues || (i = b), !R.keepValues)) {
        if (R.keepDirtyValues) {
          const H = new Set([...o.mount, ...Object.keys(za(i, s))]);
          for (const ce of Array.from(H)) {
            const ve = Z(n.dirtyFields, ce),
              Ue = Z(s, ce),
              Xt = Z(I, ce);
            ve && !ze(Ue) ? Me(I, ce, Ue) : !ve && !ze(Xt) && te(ce, Xt);
          }
        } else {
          if (xp && ze(x))
            for (const H of o.mount) {
              const ce = Z(r, H);
              if (ce && ce._f) {
                const ve = Array.isArray(ce._f.refs)
                  ? ce._f.refs[0]
                  : ce._f.ref;
                if (Eu(ve)) {
                  const Ue = ve.closest("form");
                  if (Ue) {
                    Ue.reset();
                    break;
                  }
                }
              }
            }
          if (R.keepFieldsRef) for (const H of o.mount) te(H, Z(I, H));
          else r = {};
        }
        ((s = t.shouldUnregister ? (R.keepDefaultValues ? it(i) : {}) : it(I)),
          p.array.next({ values: { ...I } }),
          p.state.next({ values: { ...I } }));
      }
      ((o = {
        mount: R.keepDirtyValues ? o.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        registerName: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (a.mount =
          !d.isValid ||
          !!R.keepIsValid ||
          !!R.keepDirtyValues ||
          (!t.shouldUnregister && !bt(I))),
        (a.watch = !!t.shouldUnregister),
        (a.keepIsValid = !!R.keepIsValid),
        (a.action = !1),
        R.keepErrors || (n.errors = {}),
        p.state.next({
          submitCount: R.keepSubmitCount ? n.submitCount : 0,
          isDirty: B
            ? !1
            : R.keepDirty
              ? n.isDirty
              : !!(R.keepDefaultValues && !Bn(x, i)),
          isSubmitted: R.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: B
            ? {}
            : R.keepDirtyValues
              ? R.keepDefaultValues && s
                ? za(i, s)
                : n.dirtyFields
              : R.keepDefaultValues && x
                ? za(i, x)
                : R.keepDirty
                  ? n.dirtyFields
                  : {},
          touchedFields: R.keepTouched ? n.touchedFields : {},
          errors: R.keepErrors ? n.errors : {},
          isSubmitSuccessful: R.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
          defaultValues: i,
        }));
    },
    fa = (x, R) => Go(gn(x) ? x(s) : x, { ...t.resetOptions, ...R }),
    uc = (x, R = {}) => {
      const b = Z(r, x),
        $ = b && b._f;
      if ($) {
        const B = $.refs ? $.refs[0] : $.ref;
        B.focus &&
          setTimeout(() => {
            (B.focus(), R.shouldSelect && gn(B.select) && B.select());
          });
      }
    },
    cc = (x) => {
      n = { ...n, ...x };
    },
    qo = {
      control: {
        register: jn,
        unregister: da,
        getFieldState: dt,
        handleSubmit: Vn,
        setError: gt,
        _subscribe: Qo,
        _runSchema: F,
        _updateIsValidating: m,
        _focusError: Yi,
        _getWatch: Ae,
        _getDirty: le,
        _setValid: P,
        _setFieldArray: y,
        _setDisabledField: ht,
        _setErrors: C,
        _getFieldArray: nt,
        _reset: Go,
        _resetDefaultValues: () =>
          gn(t.defaultValues) &&
          t.defaultValues().then((x) => {
            (fa(x, t.resetOptions), p.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: ae,
        _disableForm: oc,
        _subjects: p,
        _proxyFormState: d,
        get _fields() {
          return r;
        },
        get _formValues() {
          return s;
        },
        get _state() {
          return a;
        },
        set _state(x) {
          a = x;
        },
        get _defaultValues() {
          return i;
        },
        get _names() {
          return o;
        },
        set _names(x) {
          o = x;
        },
        get _formState() {
          return n;
        },
        get _options() {
          return t;
        },
        set _options(x) {
          t = { ...t, ...x };
        },
      },
      subscribe: ac,
      trigger: Vt,
      register: jn,
      handleSubmit: Vn,
      watch: qi,
      setValue: te,
      setValues: ie,
      getValues: Et,
      reset: fa,
      resetField: lc,
      clearErrors: ft,
      unregister: da,
      setError: gt,
      setFocus: uc,
      getFieldState: dt,
    };
  return { ...qo, formControl: qo };
}
function kD(e = {}) {
  const t = St.useRef(void 0),
    n = St.useRef(void 0),
    [r, i] = St.useState(() => ({
      ...it(K1),
      isLoading: gn(e.defaultValues),
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: gn(e.defaultValues) ? void 0 : e.defaultValues,
    }));
  if (!t.current)
    if (e.formControl)
      ((t.current = { ...e.formControl, formState: r }),
        e.defaultValues &&
          !gn(e.defaultValues) &&
          e.formControl.reset(e.defaultValues, e.resetOptions));
    else {
      const { formControl: a, ...o } = SD(e);
      t.current = { ...o, formState: r };
    }
  const s = t.current.control;
  return (
    (s._options = e),
    sD(() => {
      const a = s._subscribe({
        formState: s._proxyFormState,
        callback: () => i({ ...s._formState }),
        reRenderRoot: !0,
      });
      return (
        i((o) => ({ ...o, isReady: !0 })),
        (s._formState.isReady = !0),
        a
      );
    }, [s]),
    St.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]),
    St.useEffect(() => {
      (e.mode && (s._options.mode = e.mode),
        e.reValidateMode && (s._options.reValidateMode = e.reValidateMode));
    }, [s, e.mode, e.reValidateMode]),
    St.useEffect(() => {
      e.errors && (s._setErrors(e.errors), s._focusError());
    }, [s, e.errors]),
    St.useEffect(() => {
      e.shouldUnregister && s._subjects.state.next({ values: s._getWatch() });
    }, [s, e.shouldUnregister]),
    St.useEffect(() => {
      if (s._proxyFormState.isDirty) {
        const a = s._getDirty();
        a !== r.isDirty && s._subjects.state.next({ isDirty: a });
      }
    }, [s, r.isDirty]),
    St.useEffect(() => {
      var a;
      e.values && !Bn(e.values, n.current)
        ? (s._reset(e.values, {
            keepFieldsRef: !0,
            ...s._options.resetOptions,
          }),
          (!((a = s._options.resetOptions) === null || a === void 0) &&
            a.keepIsValid) ||
            s._setValid(),
          (n.current = e.values),
          i((o) => ({ ...o })))
        : s._resetDefaultValues();
    }, [s, e.values]),
    St.useEffect(() => {
      (s._state.mount || (s._setValid(), (s._state.mount = !0)),
        s._state.watch &&
          ((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
        s._removeUnmounted());
    }),
    (t.current.formState = St.useMemo(() => iD(r, s), [s, r])),
    t.current
  );
}
const Wg = (e, t, n) => {
    if (e && "reportValidity" in e) {
      const r = Z(n, t);
      (e.setCustomValidity((r && r.message) || ""), e.reportValidity());
    }
  },
  Z1 = (e, t) => {
    for (const n in t.fields) {
      const r = t.fields[n];
      r && r.ref && "reportValidity" in r.ref
        ? Wg(r.ref, n, e)
        : r.refs && r.refs.forEach((i) => Wg(i, n, e));
    }
  },
  _D = (e, t) => {
    t.shouldUseNativeValidation && Z1(e, t);
    const n = {};
    for (const r in e) {
      const i = Z(t.fields, r),
        s = Object.assign(e[r] || {}, { ref: i && i.ref });
      if (CD(t.names || Object.keys(e), r)) {
        const a = Object.assign({}, Z(n, r));
        (Me(a, "root", s), Me(n, r, a));
      } else Me(n, r, s);
    }
    return n;
  },
  CD = (e, t) => e.some((n) => n.startsWith(t + "."));
var PD = function (e, t) {
    for (var n = {}; e.length; ) {
      var r = e[0],
        i = r.code,
        s = r.message,
        a = r.path.join(".");
      if (!n[a])
        if ("unionErrors" in r) {
          var o = r.unionErrors[0].errors[0];
          n[a] = { message: o.message, type: o.code };
        } else n[a] = { message: s, type: i };
      if (
        ("unionErrors" in r &&
          r.unionErrors.forEach(function (c) {
            return c.errors.forEach(function (d) {
              return e.push(d);
            });
          }),
        t)
      ) {
        var l = n[a].types,
          u = l && l[r.code];
        n[a] = I1(a, t, n, i, u ? [].concat(u, r.message) : r.message);
      }
      e.shift();
    }
    return n;
  },
  ED = function (e, t, n) {
    return (
      n === void 0 && (n = {}),
      function (r, i, s) {
        try {
          return Promise.resolve(
            (function (a, o) {
              try {
                var l = Promise.resolve(
                  e[n.mode === "sync" ? "parse" : "parseAsync"](r, t),
                ).then(function (u) {
                  return (
                    s.shouldUseNativeValidation && Z1({}, s),
                    { errors: {}, values: n.raw ? r : u }
                  );
                });
              } catch (u) {
                return o(u);
              }
              return l && l.then ? l.then(void 0, o) : l;
            })(0, function (a) {
              if (
                (function (o) {
                  return Array.isArray(o == null ? void 0 : o.errors);
                })(a)
              )
                return {
                  values: {},
                  errors: _D(
                    PD(
                      a.errors,
                      !s.shouldUseNativeValidation && s.criteriaMode === "all",
                    ),
                    s,
                  ),
                };
              throw a;
            }),
          );
        } catch (a) {
          return Promise.reject(a);
        }
      }
    );
  },
  Pe;
(function (e) {
  e.assertEqual = (i) => {};
  function t(i) {}
  e.assertIs = t;
  function n(i) {
    throw new Error();
  }
  ((e.assertNever = n),
    (e.arrayToEnum = (i) => {
      const s = {};
      for (const a of i) s[a] = a;
      return s;
    }),
    (e.getValidEnumValues = (i) => {
      const s = e.objectKeys(i).filter((o) => typeof i[i[o]] != "number"),
        a = {};
      for (const o of s) a[o] = i[o];
      return e.objectValues(a);
    }),
    (e.objectValues = (i) =>
      e.objectKeys(i).map(function (s) {
        return i[s];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (i) => Object.keys(i)
        : (i) => {
            const s = [];
            for (const a in i)
              Object.prototype.hasOwnProperty.call(i, a) && s.push(a);
            return s;
          }),
    (e.find = (i, s) => {
      for (const a of i) if (s(a)) return a;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (i) => Number.isInteger(i)
        : (i) =>
            typeof i == "number" && Number.isFinite(i) && Math.floor(i) === i));
  function r(i, s = " | ") {
    return i.map((a) => (typeof a == "string" ? `'${a}'` : a)).join(s);
  }
  ((e.joinValues = r),
    (e.jsonStringifyReplacer = (i, s) =>
      typeof s == "bigint" ? s.toString() : s));
})(Pe || (Pe = {}));
var Hg;
(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(Hg || (Hg = {}));
const X = Pe.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  Dr = (e) => {
    switch (typeof e) {
      case "undefined":
        return X.undefined;
      case "string":
        return X.string;
      case "number":
        return Number.isNaN(e) ? X.nan : X.number;
      case "boolean":
        return X.boolean;
      case "function":
        return X.function;
      case "bigint":
        return X.bigint;
      case "symbol":
        return X.symbol;
      case "object":
        return Array.isArray(e)
          ? X.array
          : e === null
            ? X.null
            : e.then &&
                typeof e.then == "function" &&
                e.catch &&
                typeof e.catch == "function"
              ? X.promise
              : typeof Map < "u" && e instanceof Map
                ? X.map
                : typeof Set < "u" && e instanceof Set
                  ? X.set
                  : typeof Date < "u" && e instanceof Date
                    ? X.date
                    : X.object;
      default:
        return X.unknown;
    }
  },
  z = Pe.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]);
class wr extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    (super(),
      (this.issues = []),
      (this.addIssue = (r) => {
        this.issues = [...this.issues, r];
      }),
      (this.addIssues = (r = []) => {
        this.issues = [...this.issues, ...r];
      }));
    const n = new.target.prototype;
    (Object.setPrototypeOf
      ? Object.setPrototypeOf(this, n)
      : (this.__proto__ = n),
      (this.name = "ZodError"),
      (this.issues = t));
  }
  format(t) {
    const n =
        t ||
        function (s) {
          return s.message;
        },
      r = { _errors: [] },
      i = (s) => {
        for (const a of s.issues)
          if (a.code === "invalid_union") a.unionErrors.map(i);
          else if (a.code === "invalid_return_type") i(a.returnTypeError);
          else if (a.code === "invalid_arguments") i(a.argumentsError);
          else if (a.path.length === 0) r._errors.push(n(a));
          else {
            let o = r,
              l = 0;
            for (; l < a.path.length; ) {
              const u = a.path[l];
              (l === a.path.length - 1
                ? ((o[u] = o[u] || { _errors: [] }), o[u]._errors.push(n(a)))
                : (o[u] = o[u] || { _errors: [] }),
                (o = o[u]),
                l++);
            }
          }
      };
    return (i(this), r);
  }
  static assert(t) {
    if (!(t instanceof wr)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Pe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {},
      r = [];
    for (const i of this.issues)
      if (i.path.length > 0) {
        const s = i.path[0];
        ((n[s] = n[s] || []), n[s].push(t(i)));
      } else r.push(t(i));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
wr.create = (e) => new wr(e);
const Af = (e, t) => {
  let n;
  switch (e.code) {
    case z.invalid_type:
      e.received === X.undefined
        ? (n = "Required")
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case z.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Pe.jsonStringifyReplacer)}`;
      break;
    case z.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Pe.joinValues(e.keys, ", ")}`;
      break;
    case z.invalid_union:
      n = "Invalid input";
      break;
    case z.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Pe.joinValues(e.options)}`;
      break;
    case z.invalid_enum_value:
      n = `Invalid enum value. Expected ${Pe.joinValues(e.options)}, received '${e.received}'`;
      break;
    case z.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case z.invalid_return_type:
      n = "Invalid function return type";
      break;
    case z.invalid_date:
      n = "Invalid date";
      break;
    case z.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
            ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
            : "endsWith" in e.validation
              ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
              : Pe.assertNever(e.validation)
        : e.validation !== "regex"
          ? (n = `Invalid ${e.validation}`)
          : (n = "Invalid");
      break;
    case z.too_small:
      e.type === "array"
        ? (n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`)
        : e.type === "string"
          ? (n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`)
          : e.type === "number"
            ? (n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`)
            : e.type === "bigint"
              ? (n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`)
              : e.type === "date"
                ? (n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`)
                : (n = "Invalid input");
      break;
    case z.too_big:
      e.type === "array"
        ? (n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`)
        : e.type === "string"
          ? (n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`)
          : e.type === "number"
            ? (n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
            : e.type === "bigint"
              ? (n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
              : e.type === "date"
                ? (n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`)
                : (n = "Invalid input");
      break;
    case z.custom:
      n = "Invalid input";
      break;
    case z.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case z.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case z.not_finite:
      n = "Number must be finite";
      break;
    default:
      ((n = t.defaultError), Pe.assertNever(e));
  }
  return { message: n };
};
let TD = Af;
function RD() {
  return TD;
}
const AD = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: i } = e,
    s = [...n, ...(i.path || [])],
    a = { ...i, path: s };
  if (i.message !== void 0) return { ...i, path: s, message: i.message };
  let o = "";
  const l = r
    .filter((u) => !!u)
    .slice()
    .reverse();
  for (const u of l) o = u(a, { data: t, defaultError: o }).message;
  return { ...i, path: s, message: o };
};
function K(e, t) {
  const n = RD(),
    r = AD({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === Af ? void 0 : Af,
      ].filter((i) => !!i),
    });
  e.common.issues.push(r);
}
class ln {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const i of n) {
      if (i.status === "aborted") return fe;
      (i.status === "dirty" && t.dirty(), r.push(i.value));
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const i of n) {
      const s = await i.key,
        a = await i.value;
      r.push({ key: s, value: a });
    }
    return ln.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const i of n) {
      const { key: s, value: a } = i;
      if (s.status === "aborted" || a.status === "aborted") return fe;
      (s.status === "dirty" && t.dirty(),
        a.status === "dirty" && t.dirty(),
        s.value !== "__proto__" &&
          (typeof a.value < "u" || i.alwaysSet) &&
          (r[s.value] = a.value));
    }
    return { status: t.value, value: r };
  }
}
const fe = Object.freeze({ status: "aborted" }),
  Ba = (e) => ({ status: "dirty", value: e }),
  _n = (e) => ({ status: "valid", value: e }),
  Kg = (e) => e.status === "aborted",
  Zg = (e) => e.status === "dirty",
  Js = (e) => e.status === "valid",
  Ru = (e) => typeof Promise < "u" && e instanceof Promise;
var ee;
(function (e) {
  ((e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == "string" ? t : t == null ? void 0 : t.message));
})(ee || (ee = {}));
class ri {
  constructor(t, n, r, i) {
    ((this._cachedPath = []),
      (this.parent = t),
      (this.data = n),
      (this._path = r),
      (this._key = i));
  }
  get path() {
    return (
      this._cachedPath.length ||
        (Array.isArray(this._key)
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Qg = (e, t) => {
  if (Js(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new wr(e.common.issues);
      return ((this._error = n), this._error);
    },
  };
};
function ge(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: i,
  } = e;
  if (t && (n || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return t
    ? { errorMap: t, description: i }
    : {
        errorMap: (a, o) => {
          const { message: l } = e;
          return a.code === "invalid_enum_value"
            ? { message: l ?? o.defaultError }
            : typeof o.data > "u"
              ? { message: l ?? r ?? o.defaultError }
              : a.code !== "invalid_type"
                ? { message: o.defaultError }
                : { message: l ?? n ?? o.defaultError };
        },
        description: i,
      };
}
class _e {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Dr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: Dr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new ln(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Dr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Ru(n)) throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    const r = {
        common: {
          issues: [],
          async: (n == null ? void 0 : n.async) ?? !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Dr(t),
      },
      i = this._parseSync({ data: t, path: r.path, parent: r });
    return Qg(r, i);
  }
  "~validate"(t) {
    var r, i;
    const n = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Dr(t),
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: t, path: [], parent: n });
        return Js(s) ? { value: s.value } : { issues: n.common.issues };
      } catch (s) {
        ((i =
          (r = s == null ? void 0 : s.message) == null
            ? void 0
            : r.toLowerCase()) != null &&
          i.includes("encountered") &&
          (this["~standard"].async = !0),
          (n.common = { issues: [], async: !0 }));
      }
    return this._parseAsync({ data: t, path: [], parent: n }).then((s) =>
      Js(s) ? { value: s.value } : { issues: n.common.issues },
    );
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Dr(t),
      },
      i = this._parse({ data: t, path: r.path, parent: r }),
      s = await (Ru(i) ? i : Promise.resolve(i));
    return Qg(r, s);
  }
  refine(t, n) {
    const r = (i) =>
      typeof n == "string" || typeof n > "u"
        ? { message: n }
        : typeof n == "function"
          ? n(i)
          : n;
    return this._refinement((i, s) => {
      const a = t(i),
        o = () => s.addIssue({ code: z.custom, ...r(i) });
      return typeof Promise < "u" && a instanceof Promise
        ? a.then((l) => (l ? !0 : (o(), !1)))
        : a
          ? !0
          : (o(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, i) =>
      t(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n), !1),
    );
  }
  _refinement(t) {
    return new na({
      schema: this,
      typeName: he.ZodEffects,
      effect: { type: "refinement", refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    ((this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (n) => this["~validate"](n),
      }));
  }
  optional() {
    return Xr.create(this, this._def);
  }
  nullable() {
    return ra.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Yn.create(this);
  }
  promise() {
    return Mu.create(this, this._def);
  }
  or(t) {
    return bu.create([this, t], this._def);
  }
  and(t) {
    return Du.create(this, t, this._def);
  }
  transform(t) {
    return new na({
      ...ge(this._def),
      schema: this,
      typeName: he.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Mf({
      ...ge(this._def),
      innerType: this,
      defaultValue: n,
      typeName: he.ZodDefault,
    });
  }
  brand() {
    return new XD({ typeName: he.ZodBranded, type: this, ...ge(this._def) });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Lf({
      ...ge(this._def),
      innerType: this,
      catchValue: n,
      typeName: he.ZodCatch,
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({ ...this._def, description: t });
  }
  pipe(t) {
    return Cp.create(this, t);
  }
  readonly() {
    return Of.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const bD = /^c[^\s-]{8,}$/i,
  DD = /^[0-9a-z]+$/,
  MD = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  LD =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  OD = /^[a-z0-9_-]{21}$/i,
  ND = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  jD =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  VD =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  FD = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let rd;
const ID =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  UD =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  zD =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  BD =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  $D = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  WD = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Q1 =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  HD = new RegExp(`^${Q1}$`);
function G1(e) {
  let t = "[0-5]\\d";
  e.precision
    ? (t = `${t}\\.\\d{${e.precision}}`)
    : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function KD(e) {
  return new RegExp(`^${G1(e)}$`);
}
function ZD(e) {
  let t = `${Q1}T${G1(e)}`;
  const n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function QD(e, t) {
  return !!(
    ((t === "v4" || !t) && ID.test(e)) ||
    ((t === "v6" || !t) && zD.test(e))
  );
}
function GD(e, t) {
  if (!ND.test(e)) return !1;
  try {
    const [n] = e.split(".");
    if (!n) return !1;
    const r = n
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(n.length + ((4 - (n.length % 4)) % 4), "="),
      i = JSON.parse(atob(r));
    return !(
      typeof i != "object" ||
      i === null ||
      ("typ" in i && (i == null ? void 0 : i.typ) !== "JWT") ||
      !i.alg ||
      (t && i.alg !== t)
    );
  } catch {
    return !1;
  }
}
function qD(e, t) {
  return !!(
    ((t === "v4" || !t) && UD.test(e)) ||
    ((t === "v6" || !t) && BD.test(e))
  );
}
class lr extends _e {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== X.string)
    ) {
      const s = this._getOrReturnCtx(t);
      return (
        K(s, {
          code: z.invalid_type,
          expected: X.string,
          received: s.parsedType,
        }),
        fe
      );
    }
    const r = new ln();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value &&
          ((i = this._getOrReturnCtx(t, i)),
          K(i, {
            code: z.too_small,
            minimum: s.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "max")
        t.data.length > s.value &&
          ((i = this._getOrReturnCtx(t, i)),
          K(i, {
            code: z.too_big,
            maximum: s.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "length") {
        const a = t.data.length > s.value,
          o = t.data.length < s.value;
        (a || o) &&
          ((i = this._getOrReturnCtx(t, i)),
          a
            ? K(i, {
                code: z.too_big,
                maximum: s.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: s.message,
              })
            : o &&
              K(i, {
                code: z.too_small,
                minimum: s.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: s.message,
              }),
          r.dirty());
      } else if (s.kind === "email")
        VD.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          K(i, {
            validation: "email",
            code: z.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "emoji")
        (rd || (rd = new RegExp(FD, "u")),
          rd.test(t.data) ||
            ((i = this._getOrReturnCtx(t, i)),
            K(i, {
              validation: "emoji",
              code: z.invalid_string,
              message: s.message,
            }),
            r.dirty()));
      else if (s.kind === "uuid")
        LD.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          K(i, {
            validation: "uuid",
            code: z.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "nanoid")
        OD.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          K(i, {
            validation: "nanoid",
            code: z.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "cuid")
        bD.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          K(i, {
            validation: "cuid",
            code: z.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "cuid2")
        DD.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          K(i, {
            validation: "cuid2",
            code: z.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "ulid")
        MD.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          K(i, {
            validation: "ulid",
            code: z.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          ((i = this._getOrReturnCtx(t, i)),
            K(i, {
              validation: "url",
              code: z.invalid_string,
              message: s.message,
            }),
            r.dirty());
        }
      else
        s.kind === "regex"
          ? ((s.regex.lastIndex = 0),
            s.regex.test(t.data) ||
              ((i = this._getOrReturnCtx(t, i)),
              K(i, {
                validation: "regex",
                code: z.invalid_string,
                message: s.message,
              }),
              r.dirty()))
          : s.kind === "trim"
            ? (t.data = t.data.trim())
            : s.kind === "includes"
              ? t.data.includes(s.value, s.position) ||
                ((i = this._getOrReturnCtx(t, i)),
                K(i, {
                  code: z.invalid_string,
                  validation: { includes: s.value, position: s.position },
                  message: s.message,
                }),
                r.dirty())
              : s.kind === "toLowerCase"
                ? (t.data = t.data.toLowerCase())
                : s.kind === "toUpperCase"
                  ? (t.data = t.data.toUpperCase())
                  : s.kind === "startsWith"
                    ? t.data.startsWith(s.value) ||
                      ((i = this._getOrReturnCtx(t, i)),
                      K(i, {
                        code: z.invalid_string,
                        validation: { startsWith: s.value },
                        message: s.message,
                      }),
                      r.dirty())
                    : s.kind === "endsWith"
                      ? t.data.endsWith(s.value) ||
                        ((i = this._getOrReturnCtx(t, i)),
                        K(i, {
                          code: z.invalid_string,
                          validation: { endsWith: s.value },
                          message: s.message,
                        }),
                        r.dirty())
                      : s.kind === "datetime"
                        ? ZD(s).test(t.data) ||
                          ((i = this._getOrReturnCtx(t, i)),
                          K(i, {
                            code: z.invalid_string,
                            validation: "datetime",
                            message: s.message,
                          }),
                          r.dirty())
                        : s.kind === "date"
                          ? HD.test(t.data) ||
                            ((i = this._getOrReturnCtx(t, i)),
                            K(i, {
                              code: z.invalid_string,
                              validation: "date",
                              message: s.message,
                            }),
                            r.dirty())
                          : s.kind === "time"
                            ? KD(s).test(t.data) ||
                              ((i = this._getOrReturnCtx(t, i)),
                              K(i, {
                                code: z.invalid_string,
                                validation: "time",
                                message: s.message,
                              }),
                              r.dirty())
                            : s.kind === "duration"
                              ? jD.test(t.data) ||
                                ((i = this._getOrReturnCtx(t, i)),
                                K(i, {
                                  validation: "duration",
                                  code: z.invalid_string,
                                  message: s.message,
                                }),
                                r.dirty())
                              : s.kind === "ip"
                                ? QD(t.data, s.version) ||
                                  ((i = this._getOrReturnCtx(t, i)),
                                  K(i, {
                                    validation: "ip",
                                    code: z.invalid_string,
                                    message: s.message,
                                  }),
                                  r.dirty())
                                : s.kind === "jwt"
                                  ? GD(t.data, s.alg) ||
                                    ((i = this._getOrReturnCtx(t, i)),
                                    K(i, {
                                      validation: "jwt",
                                      code: z.invalid_string,
                                      message: s.message,
                                    }),
                                    r.dirty())
                                  : s.kind === "cidr"
                                    ? qD(t.data, s.version) ||
                                      ((i = this._getOrReturnCtx(t, i)),
                                      K(i, {
                                        validation: "cidr",
                                        code: z.invalid_string,
                                        message: s.message,
                                      }),
                                      r.dirty())
                                    : s.kind === "base64"
                                      ? $D.test(t.data) ||
                                        ((i = this._getOrReturnCtx(t, i)),
                                        K(i, {
                                          validation: "base64",
                                          code: z.invalid_string,
                                          message: s.message,
                                        }),
                                        r.dirty())
                                      : s.kind === "base64url"
                                        ? WD.test(t.data) ||
                                          ((i = this._getOrReturnCtx(t, i)),
                                          K(i, {
                                            validation: "base64url",
                                            code: z.invalid_string,
                                            message: s.message,
                                          }),
                                          r.dirty())
                                        : Pe.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((i) => t.test(i), {
      validation: n,
      code: z.invalid_string,
      ...ee.errToObj(r),
    });
  }
  _addCheck(t) {
    return new lr({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...ee.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...ee.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...ee.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...ee.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...ee.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...ee.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...ee.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...ee.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...ee.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: "base64url", ...ee.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...ee.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...ee.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...ee.errToObj(t) });
  }
  datetime(t) {
    return typeof t == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: t,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
                ? void 0
                : t.precision,
          offset: (t == null ? void 0 : t.offset) ?? !1,
          local: (t == null ? void 0 : t.local) ?? !1,
          ...ee.errToObj(t == null ? void 0 : t.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string"
      ? this._addCheck({ kind: "time", precision: null, message: t })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
                ? void 0
                : t.precision,
          ...ee.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...ee.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({ kind: "regex", regex: t, ...ee.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...ee.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: "startsWith", value: t, ...ee.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: "endsWith", value: t, ...ee.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t, ...ee.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t, ...ee.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: "length", value: t, ...ee.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, ee.errToObj(t));
  }
  trim() {
    return new lr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new lr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new lr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
lr.create = (e) =>
  new lr({
    checks: [],
    typeName: he.ZodString,
    coerce: (e == null ? void 0 : e.coerce) ?? !1,
    ...ge(e),
  });
function YD(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    i = n > r ? n : r,
    s = Number.parseInt(e.toFixed(i).replace(".", "")),
    a = Number.parseInt(t.toFixed(i).replace(".", ""));
  return (s % a) / 10 ** i;
}
class $i extends _e {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== X.number)
    ) {
      const s = this._getOrReturnCtx(t);
      return (
        K(s, {
          code: z.invalid_type,
          expected: X.number,
          received: s.parsedType,
        }),
        fe
      );
    }
    let r;
    const i = new ln();
    for (const s of this._def.checks)
      s.kind === "int"
        ? Pe.isInteger(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: z.invalid_type,
            expected: "integer",
            received: "float",
            message: s.message,
          }),
          i.dirty())
        : s.kind === "min"
          ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
            ((r = this._getOrReturnCtx(t, r)),
            K(r, {
              code: z.too_small,
              minimum: s.value,
              type: "number",
              inclusive: s.inclusive,
              exact: !1,
              message: s.message,
            }),
            i.dirty())
          : s.kind === "max"
            ? (s.inclusive ? t.data > s.value : t.data >= s.value) &&
              ((r = this._getOrReturnCtx(t, r)),
              K(r, {
                code: z.too_big,
                maximum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message,
              }),
              i.dirty())
            : s.kind === "multipleOf"
              ? YD(t.data, s.value) !== 0 &&
                ((r = this._getOrReturnCtx(t, r)),
                K(r, {
                  code: z.not_multiple_of,
                  multipleOf: s.value,
                  message: s.message,
                }),
                i.dirty())
              : s.kind === "finite"
                ? Number.isFinite(t.data) ||
                  ((r = this._getOrReturnCtx(t, r)),
                  K(r, { code: z.not_finite, message: s.message }),
                  i.dirty())
                : Pe.assertNever(s);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, ee.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, ee.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, ee.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, ee.toString(n));
  }
  setLimit(t, n, r, i) {
    return new $i({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: ee.toString(i) },
      ],
    });
  }
  _addCheck(t) {
    return new $i({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: ee.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ee.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ee.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ee.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ee.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: ee.toString(n),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: ee.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ee.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ee.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) =>
        t.kind === "int" || (t.kind === "multipleOf" && Pe.isInteger(t.value)),
    );
  }
  get isFinite() {
    let t = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min"
        ? (n === null || r.value > n) && (n = r.value)
        : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
$i.create = (e) =>
  new $i({
    checks: [],
    typeName: he.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ge(e),
  });
class Wi extends _e {
  constructor() {
    (super(...arguments), (this.min = this.gte), (this.max = this.lte));
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== X.bigint) return this._getInvalidInput(t);
    let r;
    const i = new ln();
    for (const s of this._def.checks)
      s.kind === "min"
        ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: z.too_small,
            type: "bigint",
            minimum: s.value,
            inclusive: s.inclusive,
            message: s.message,
          }),
          i.dirty())
        : s.kind === "max"
          ? (s.inclusive ? t.data > s.value : t.data >= s.value) &&
            ((r = this._getOrReturnCtx(t, r)),
            K(r, {
              code: z.too_big,
              type: "bigint",
              maximum: s.value,
              inclusive: s.inclusive,
              message: s.message,
            }),
            i.dirty())
          : s.kind === "multipleOf"
            ? t.data % s.value !== BigInt(0) &&
              ((r = this._getOrReturnCtx(t, r)),
              K(r, {
                code: z.not_multiple_of,
                multipleOf: s.value,
                message: s.message,
              }),
              i.dirty())
            : Pe.assertNever(s);
    return { status: i.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return (
      K(n, {
        code: z.invalid_type,
        expected: X.bigint,
        received: n.parsedType,
      }),
      fe
    );
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, ee.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, ee.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, ee.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, ee.toString(n));
  }
  setLimit(t, n, r, i) {
    return new Wi({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: ee.toString(i) },
      ],
    });
  }
  _addCheck(t) {
    return new Wi({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: ee.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ee.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ee.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ee.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: ee.toString(n),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Wi.create = (e) =>
  new Wi({
    checks: [],
    typeName: he.ZodBigInt,
    coerce: (e == null ? void 0 : e.coerce) ?? !1,
    ...ge(e),
  });
class Au extends _e {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== X.boolean)
    ) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: z.invalid_type,
          expected: X.boolean,
          received: r.parsedType,
        }),
        fe
      );
    }
    return _n(t.data);
  }
}
Au.create = (e) =>
  new Au({
    typeName: he.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ge(e),
  });
class ea extends _e {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== X.date)
    ) {
      const s = this._getOrReturnCtx(t);
      return (
        K(s, {
          code: z.invalid_type,
          expected: X.date,
          received: s.parsedType,
        }),
        fe
      );
    }
    if (Number.isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return (K(s, { code: z.invalid_date }), fe);
    }
    const r = new ln();
    let i;
    for (const s of this._def.checks)
      s.kind === "min"
        ? t.data.getTime() < s.value &&
          ((i = this._getOrReturnCtx(t, i)),
          K(i, {
            code: z.too_small,
            message: s.message,
            inclusive: !0,
            exact: !1,
            minimum: s.value,
            type: "date",
          }),
          r.dirty())
        : s.kind === "max"
          ? t.data.getTime() > s.value &&
            ((i = this._getOrReturnCtx(t, i)),
            K(i, {
              code: z.too_big,
              message: s.message,
              inclusive: !0,
              exact: !1,
              maximum: s.value,
              type: "date",
            }),
            r.dirty())
          : Pe.assertNever(s);
    return { status: r.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new ea({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: ee.toString(n),
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: ee.toString(n),
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
ea.create = (e) =>
  new ea({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: he.ZodDate,
    ...ge(e),
  });
class Gg extends _e {
  _parse(t) {
    if (this._getType(t) !== X.symbol) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: z.invalid_type,
          expected: X.symbol,
          received: r.parsedType,
        }),
        fe
      );
    }
    return _n(t.data);
  }
}
Gg.create = (e) => new Gg({ typeName: he.ZodSymbol, ...ge(e) });
class qg extends _e {
  _parse(t) {
    if (this._getType(t) !== X.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: z.invalid_type,
          expected: X.undefined,
          received: r.parsedType,
        }),
        fe
      );
    }
    return _n(t.data);
  }
}
qg.create = (e) => new qg({ typeName: he.ZodUndefined, ...ge(e) });
class Yg extends _e {
  _parse(t) {
    if (this._getType(t) !== X.null) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: z.invalid_type,
          expected: X.null,
          received: r.parsedType,
        }),
        fe
      );
    }
    return _n(t.data);
  }
}
Yg.create = (e) => new Yg({ typeName: he.ZodNull, ...ge(e) });
class Xg extends _e {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(t) {
    return _n(t.data);
  }
}
Xg.create = (e) => new Xg({ typeName: he.ZodAny, ...ge(e) });
class Jg extends _e {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(t) {
    return _n(t.data);
  }
}
Jg.create = (e) => new Jg({ typeName: he.ZodUnknown, ...ge(e) });
class ii extends _e {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return (
      K(n, { code: z.invalid_type, expected: X.never, received: n.parsedType }),
      fe
    );
  }
}
ii.create = (e) => new ii({ typeName: he.ZodNever, ...ge(e) });
class ev extends _e {
  _parse(t) {
    if (this._getType(t) !== X.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: z.invalid_type,
          expected: X.void,
          received: r.parsedType,
        }),
        fe
      );
    }
    return _n(t.data);
  }
}
ev.create = (e) => new ev({ typeName: he.ZodVoid, ...ge(e) });
class Yn extends _e {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      i = this._def;
    if (n.parsedType !== X.array)
      return (
        K(n, {
          code: z.invalid_type,
          expected: X.array,
          received: n.parsedType,
        }),
        fe
      );
    if (i.exactLength !== null) {
      const a = n.data.length > i.exactLength.value,
        o = n.data.length < i.exactLength.value;
      (a || o) &&
        (K(n, {
          code: a ? z.too_big : z.too_small,
          minimum: o ? i.exactLength.value : void 0,
          maximum: a ? i.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: i.exactLength.message,
        }),
        r.dirty());
    }
    if (
      (i.minLength !== null &&
        n.data.length < i.minLength.value &&
        (K(n, {
          code: z.too_small,
          minimum: i.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: i.minLength.message,
        }),
        r.dirty()),
      i.maxLength !== null &&
        n.data.length > i.maxLength.value &&
        (K(n, {
          code: z.too_big,
          maximum: i.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: i.maxLength.message,
        }),
        r.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((a, o) => i.type._parseAsync(new ri(n, a, n.path, o))),
      ).then((a) => ln.mergeArray(r, a));
    const s = [...n.data].map((a, o) =>
      i.type._parseSync(new ri(n, a, n.path, o)),
    );
    return ln.mergeArray(r, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Yn({
      ...this._def,
      minLength: { value: t, message: ee.toString(n) },
    });
  }
  max(t, n) {
    return new Yn({
      ...this._def,
      maxLength: { value: t, message: ee.toString(n) },
    });
  }
  length(t, n) {
    return new Yn({
      ...this._def,
      exactLength: { value: t, message: ee.toString(n) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Yn.create = (e, t) =>
  new Yn({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: he.ZodArray,
    ...ge(t),
  });
function ls(e) {
  if (e instanceof ot) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Xr.create(ls(r));
    }
    return new ot({ ...e._def, shape: () => t });
  } else
    return e instanceof Yn
      ? new Yn({ ...e._def, type: ls(e.element) })
      : e instanceof Xr
        ? Xr.create(ls(e.unwrap()))
        : e instanceof ra
          ? ra.create(ls(e.unwrap()))
          : e instanceof Hi
            ? Hi.create(e.items.map((t) => ls(t)))
            : e;
}
class ot extends _e {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = Pe.objectKeys(t);
    return ((this._cached = { shape: t, keys: n }), this._cached);
  }
  _parse(t) {
    if (this._getType(t) !== X.object) {
      const u = this._getOrReturnCtx(t);
      return (
        K(u, {
          code: z.invalid_type,
          expected: X.object,
          received: u.parsedType,
        }),
        fe
      );
    }
    const { status: r, ctx: i } = this._processInputParams(t),
      { shape: s, keys: a } = this._getCached(),
      o = [];
    if (
      !(this._def.catchall instanceof ii && this._def.unknownKeys === "strip")
    )
      for (const u in i.data) a.includes(u) || o.push(u);
    const l = [];
    for (const u of a) {
      const c = s[u],
        d = i.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: c._parse(new ri(i, d, i.path, u)),
        alwaysSet: u in i.data,
      });
    }
    if (this._def.catchall instanceof ii) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const c of o)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: i.data[c] },
          });
      else if (u === "strict")
        o.length > 0 &&
          (K(i, { code: z.unrecognized_keys, keys: o }), r.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const c of o) {
        const d = i.data[c];
        l.push({
          key: { status: "valid", value: c },
          value: u._parse(new ri(i, d, i.path, c)),
          alwaysSet: c in i.data,
        });
      }
    }
    return i.common.async
      ? Promise.resolve()
          .then(async () => {
            const u = [];
            for (const c of l) {
              const d = await c.key,
                f = await c.value;
              u.push({ key: d, value: f, alwaysSet: c.alwaysSet });
            }
            return u;
          })
          .then((u) => ln.mergeObjectSync(r, u))
      : ln.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      ee.errToObj,
      new ot({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (n, r) => {
                var s, a;
                const i =
                  ((a = (s = this._def).errorMap) == null
                    ? void 0
                    : a.call(s, n, r).message) ?? r.defaultError;
                return n.code === "unrecognized_keys"
                  ? { message: ee.errToObj(t).message ?? i }
                  : { message: i };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new ot({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new ot({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new ot({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new ot({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: he.ZodObject,
    });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new ot({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    for (const r of Pe.objectKeys(t))
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    return new ot({ ...this._def, shape: () => n });
  }
  omit(t) {
    const n = {};
    for (const r of Pe.objectKeys(this.shape)) t[r] || (n[r] = this.shape[r]);
    return new ot({ ...this._def, shape: () => n });
  }
  deepPartial() {
    return ls(this);
  }
  partial(t) {
    const n = {};
    for (const r of Pe.objectKeys(this.shape)) {
      const i = this.shape[r];
      t && !t[r] ? (n[r] = i) : (n[r] = i.optional());
    }
    return new ot({ ...this._def, shape: () => n });
  }
  required(t) {
    const n = {};
    for (const r of Pe.objectKeys(this.shape))
      if (t && !t[r]) n[r] = this.shape[r];
      else {
        let s = this.shape[r];
        for (; s instanceof Xr; ) s = s._def.innerType;
        n[r] = s;
      }
    return new ot({ ...this._def, shape: () => n });
  }
  keyof() {
    return q1(Pe.objectKeys(this.shape));
  }
}
ot.create = (e, t) =>
  new ot({
    shape: () => e,
    unknownKeys: "strip",
    catchall: ii.create(),
    typeName: he.ZodObject,
    ...ge(t),
  });
ot.strictCreate = (e, t) =>
  new ot({
    shape: () => e,
    unknownKeys: "strict",
    catchall: ii.create(),
    typeName: he.ZodObject,
    ...ge(t),
  });
ot.lazycreate = (e, t) =>
  new ot({
    shape: e,
    unknownKeys: "strip",
    catchall: ii.create(),
    typeName: he.ZodObject,
    ...ge(t),
  });
class bu extends _e {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options;
    function i(s) {
      for (const o of s) if (o.result.status === "valid") return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return (n.common.issues.push(...o.ctx.common.issues), o.result);
      const a = s.map((o) => new wr(o.ctx.common.issues));
      return (K(n, { code: z.invalid_union, unionErrors: a }), fe);
    }
    if (n.common.async)
      return Promise.all(
        r.map(async (s) => {
          const a = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return {
            result: await s._parseAsync({
              data: n.data,
              path: n.path,
              parent: a,
            }),
            ctx: a,
          };
        }),
      ).then(i);
    {
      let s;
      const a = [];
      for (const l of r) {
        const u = { ...n, common: { ...n.common, issues: [] }, parent: null },
          c = l._parseSync({ data: n.data, path: n.path, parent: u });
        if (c.status === "valid") return c;
        (c.status === "dirty" && !s && (s = { result: c, ctx: u }),
          u.common.issues.length && a.push(u.common.issues));
      }
      if (s) return (n.common.issues.push(...s.ctx.common.issues), s.result);
      const o = a.map((l) => new wr(l));
      return (K(n, { code: z.invalid_union, unionErrors: o }), fe);
    }
  }
  get options() {
    return this._def.options;
  }
}
bu.create = (e, t) => new bu({ options: e, typeName: he.ZodUnion, ...ge(t) });
function bf(e, t) {
  const n = Dr(e),
    r = Dr(t);
  if (e === t) return { valid: !0, data: e };
  if (n === X.object && r === X.object) {
    const i = Pe.objectKeys(t),
      s = Pe.objectKeys(e).filter((o) => i.indexOf(o) !== -1),
      a = { ...e, ...t };
    for (const o of s) {
      const l = bf(e[o], t[o]);
      if (!l.valid) return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (n === X.array && r === X.array) {
    if (e.length !== t.length) return { valid: !1 };
    const i = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s],
        o = t[s],
        l = bf(a, o);
      if (!l.valid) return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else
    return n === X.date && r === X.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class Du extends _e {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      i = (s, a) => {
        if (Kg(s) || Kg(a)) return fe;
        const o = bf(s.value, a.value);
        return o.valid
          ? ((Zg(s) || Zg(a)) && n.dirty(), { status: n.value, value: o.data })
          : (K(r, { code: z.invalid_intersection_types }), fe);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          }),
        ]).then(([s, a]) => i(s, a))
      : i(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r }),
        );
  }
}
Du.create = (e, t, n) =>
  new Du({ left: e, right: t, typeName: he.ZodIntersection, ...ge(n) });
class Hi extends _e {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== X.array)
      return (
        K(r, {
          code: z.invalid_type,
          expected: X.array,
          received: r.parsedType,
        }),
        fe
      );
    if (r.data.length < this._def.items.length)
      return (
        K(r, {
          code: z.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        fe
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (K(r, {
        code: z.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    const s = [...r.data]
      .map((a, o) => {
        const l = this._def.items[o] || this._def.rest;
        return l ? l._parse(new ri(r, a, r.path, o)) : null;
      })
      .filter((a) => !!a);
    return r.common.async
      ? Promise.all(s).then((a) => ln.mergeArray(n, a))
      : ln.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Hi({ ...this._def, rest: t });
  }
}
Hi.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Hi({ items: e, typeName: he.ZodTuple, rest: null, ...ge(t) });
};
class tv extends _e {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== X.map)
      return (
        K(r, { code: z.invalid_type, expected: X.map, received: r.parsedType }),
        fe
      );
    const i = this._def.keyType,
      s = this._def.valueType,
      a = [...r.data.entries()].map(([o, l], u) => ({
        key: i._parse(new ri(r, o, r.path, [u, "key"])),
        value: s._parse(new ri(r, l, r.path, [u, "value"])),
      }));
    if (r.common.async) {
      const o = new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const u = await l.key,
            c = await l.value;
          if (u.status === "aborted" || c.status === "aborted") return fe;
          ((u.status === "dirty" || c.status === "dirty") && n.dirty(),
            o.set(u.value, c.value));
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = new Map();
      for (const l of a) {
        const u = l.key,
          c = l.value;
        if (u.status === "aborted" || c.status === "aborted") return fe;
        ((u.status === "dirty" || c.status === "dirty") && n.dirty(),
          o.set(u.value, c.value));
      }
      return { status: n.value, value: o };
    }
  }
}
tv.create = (e, t, n) =>
  new tv({ valueType: t, keyType: e, typeName: he.ZodMap, ...ge(n) });
class Mo extends _e {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== X.set)
      return (
        K(r, { code: z.invalid_type, expected: X.set, received: r.parsedType }),
        fe
      );
    const i = this._def;
    (i.minSize !== null &&
      r.data.size < i.minSize.value &&
      (K(r, {
        code: z.too_small,
        minimum: i.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: i.minSize.message,
      }),
      n.dirty()),
      i.maxSize !== null &&
        r.data.size > i.maxSize.value &&
        (K(r, {
          code: z.too_big,
          maximum: i.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: i.maxSize.message,
        }),
        n.dirty()));
    const s = this._def.valueType;
    function a(l) {
      const u = new Set();
      for (const c of l) {
        if (c.status === "aborted") return fe;
        (c.status === "dirty" && n.dirty(), u.add(c.value));
      }
      return { status: n.value, value: u };
    }
    const o = [...r.data.values()].map((l, u) =>
      s._parse(new ri(r, l, r.path, u)),
    );
    return r.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(t, n) {
    return new Mo({
      ...this._def,
      minSize: { value: t, message: ee.toString(n) },
    });
  }
  max(t, n) {
    return new Mo({
      ...this._def,
      maxSize: { value: t, message: ee.toString(n) },
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Mo.create = (e, t) =>
  new Mo({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: he.ZodSet,
    ...ge(t),
  });
class nv extends _e {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
nv.create = (e, t) => new nv({ getter: e, typeName: he.ZodLazy, ...ge(t) });
class Df extends _e {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return (
        K(n, {
          received: n.data,
          code: z.invalid_literal,
          expected: this._def.value,
        }),
        fe
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Df.create = (e, t) => new Df({ value: e, typeName: he.ZodLiteral, ...ge(t) });
function q1(e, t) {
  return new ta({ values: e, typeName: he.ZodEnum, ...ge(t) });
}
class ta extends _e {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        K(n, {
          expected: Pe.joinValues(r),
          received: n.parsedType,
          code: z.invalid_type,
        }),
        fe
      );
    }
    if (
      (this._cache || (this._cache = new Set(this._def.values)),
      !this._cache.has(t.data))
    ) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        K(n, { received: n.data, code: z.invalid_enum_value, options: r }),
        fe
      );
    }
    return _n(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return ta.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return ta.create(
      this.options.filter((r) => !t.includes(r)),
      { ...this._def, ...n },
    );
  }
}
ta.create = q1;
class rv extends _e {
  _parse(t) {
    const n = Pe.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== X.string && r.parsedType !== X.number) {
      const i = Pe.objectValues(n);
      return (
        K(r, {
          expected: Pe.joinValues(i),
          received: r.parsedType,
          code: z.invalid_type,
        }),
        fe
      );
    }
    if (
      (this._cache ||
        (this._cache = new Set(Pe.getValidEnumValues(this._def.values))),
      !this._cache.has(t.data))
    ) {
      const i = Pe.objectValues(n);
      return (
        K(r, { received: r.data, code: z.invalid_enum_value, options: i }),
        fe
      );
    }
    return _n(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
rv.create = (e, t) =>
  new rv({ values: e, typeName: he.ZodNativeEnum, ...ge(t) });
class Mu extends _e {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== X.promise && n.common.async === !1)
      return (
        K(n, {
          code: z.invalid_type,
          expected: X.promise,
          received: n.parsedType,
        }),
        fe
      );
    const r = n.parsedType === X.promise ? n.data : Promise.resolve(n.data);
    return _n(
      r.then((i) =>
        this._def.type.parseAsync(i, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        }),
      ),
    );
  }
}
Mu.create = (e, t) => new Mu({ type: e, typeName: he.ZodPromise, ...ge(t) });
class na extends _e {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === he.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      i = this._def.effect || null,
      s = {
        addIssue: (a) => {
          (K(r, a), a.fatal ? n.abort() : n.dirty());
        },
        get path() {
          return r.path;
        },
      };
    if (((s.addIssue = s.addIssue.bind(s)), i.type === "preprocess")) {
      const a = i.transform(r.data, s);
      if (r.common.async)
        return Promise.resolve(a).then(async (o) => {
          if (n.value === "aborted") return fe;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: r.path,
            parent: r,
          });
          return l.status === "aborted"
            ? fe
            : l.status === "dirty" || n.value === "dirty"
              ? Ba(l.value)
              : l;
        });
      {
        if (n.value === "aborted") return fe;
        const o = this._def.schema._parseSync({
          data: a,
          path: r.path,
          parent: r,
        });
        return o.status === "aborted"
          ? fe
          : o.status === "dirty" || n.value === "dirty"
            ? Ba(o.value)
            : o;
      }
    }
    if (i.type === "refinement") {
      const a = (o) => {
        const l = i.refinement(o, s);
        if (r.common.async) return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return o;
      };
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return o.status === "aborted"
          ? fe
          : (o.status === "dirty" && n.dirty(),
            a(o.value),
            { status: n.value, value: o.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((o) =>
            o.status === "aborted"
              ? fe
              : (o.status === "dirty" && n.dirty(),
                a(o.value).then(() => ({ status: n.value, value: o.value }))),
          );
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        if (!Js(a)) return fe;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: n.value, value: o };
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((a) =>
            Js(a)
              ? Promise.resolve(i.transform(a.value, s)).then((o) => ({
                  status: n.value,
                  value: o,
                }))
              : fe,
          );
    Pe.assertNever(i);
  }
}
na.create = (e, t, n) =>
  new na({ schema: e, typeName: he.ZodEffects, effect: t, ...ge(n) });
na.createWithPreprocess = (e, t, n) =>
  new na({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: he.ZodEffects,
    ...ge(n),
  });
class Xr extends _e {
  _parse(t) {
    return this._getType(t) === X.undefined
      ? _n(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Xr.create = (e, t) =>
  new Xr({ innerType: e, typeName: he.ZodOptional, ...ge(t) });
class ra extends _e {
  _parse(t) {
    return this._getType(t) === X.null
      ? _n(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ra.create = (e, t) =>
  new ra({ innerType: e, typeName: he.ZodNullable, ...ge(t) });
class Mf extends _e {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return (
      n.parsedType === X.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Mf.create = (e, t) =>
  new Mf({
    innerType: e,
    typeName: he.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...ge(t),
  });
class Lf extends _e {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = { ...n, common: { ...n.common, issues: [] } },
      i = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return Ru(i)
      ? i.then((s) => ({
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new wr(r.common.issues);
                  },
                  input: r.data,
                }),
        }))
      : {
          status: "valid",
          value:
            i.status === "valid"
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new wr(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Lf.create = (e, t) =>
  new Lf({
    innerType: e,
    typeName: he.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...ge(t),
  });
class iv extends _e {
  _parse(t) {
    if (this._getType(t) !== X.nan) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, { code: z.invalid_type, expected: X.nan, received: r.parsedType }),
        fe
      );
    }
    return { status: "valid", value: t.data };
  }
}
iv.create = (e) => new iv({ typeName: he.ZodNaN, ...ge(e) });
class XD extends _e {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class Cp extends _e {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return s.status === "aborted"
          ? fe
          : s.status === "dirty"
            ? (n.dirty(), Ba(s.value))
            : this._def.out._parseAsync({
                data: s.value,
                path: r.path,
                parent: r,
              });
      })();
    {
      const i = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r,
      });
      return i.status === "aborted"
        ? fe
        : i.status === "dirty"
          ? (n.dirty(), { status: "dirty", value: i.value })
          : this._def.out._parseSync({
              data: i.value,
              path: r.path,
              parent: r,
            });
    }
  }
  static create(t, n) {
    return new Cp({ in: t, out: n, typeName: he.ZodPipeline });
  }
}
class Of extends _e {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      r = (i) => (Js(i) && (i.value = Object.freeze(i.value)), i);
    return Ru(n) ? n.then((i) => r(i)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Of.create = (e, t) =>
  new Of({ innerType: e, typeName: he.ZodReadonly, ...ge(t) });
var he;
(function (e) {
  ((e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"),
    (e.ZodReadonly = "ZodReadonly"));
})(he || (he = {}));
const U = lr.create,
  Oe = $i.create;
Wi.create;
const id = Au.create;
ea.create;
ii.create;
const us = Yn.create,
  Yt = ot.create;
bu.create;
Du.create;
Hi.create;
const JD = Df.create,
  Cr = ta.create;
Mu.create;
Xr.create;
ra.create;
const ia = {
    string: (e) => lr.create({ ...e, coerce: !0 }),
    number: (e) => $i.create({ ...e, coerce: !0 }),
    boolean: (e) => Au.create({ ...e, coerce: !0 }),
    bigint: (e) => Wi.create({ ...e, coerce: !0 }),
    date: (e) => ea.create({ ...e, coerce: !0 }),
  },
  Pp = Cr(["Upcoming", "Live", "Completed", "Cancelled"]),
  Y1 = Cr(["Online", "In-person"]),
  X1 = Yt({
    title: U().min(1).max(200),
    description: U().max(2e3).optional(),
    format: Y1,
    city: U().max(100).optional(),
    venue: U().max(200).optional(),
    date: U().regex(/^\d{4}-\d{2}-\d{2}$/),
    time: U().max(50).optional(),
    capacity: Oe().int().min(1).max(1e4),
    ticketPrice: Oe().int().min(0),
    adSpend: Oe().int().min(0).default(0),
    cpRegistration: Oe().int().min(0).default(0),
    speaker: U().max(200).optional(),
    registrationLink: U().url().optional().or(JD("")),
    tags: U().max(500).optional(),
    notes: U().max(2e3).optional(),
    audienceSegment: U().max(200).optional(),
    campaignBudget: Oe().int().min(0).default(0),
    expectedCPR: Oe().int().min(0).default(0),
  });
X1.partial().extend({
  status: Pp.optional(),
  registered: Oe().int().min(0).optional(),
  attended: Oe().int().min(0).optional(),
});
Yt({
  id: U(),
  tenantId: U(),
  title: U(),
  description: U().nullable(),
  format: Y1,
  city: U().nullable(),
  venue: U().nullable(),
  date: U(),
  time: U().nullable(),
  capacity: Oe(),
  ticketPrice: Oe(),
  registered: Oe(),
  attended: Oe(),
  adSpend: Oe(),
  cpRegistration: Oe(),
  speaker: U().nullable(),
  registrationLink: U().nullable(),
  tags: U().nullable(),
  notes: U().nullable(),
  audienceSegment: U().nullable(),
  campaignBudget: Oe(),
  expectedCPR: Oe(),
  status: Pp,
  createdByName: U().nullable(),
  createdAt: U(),
  updatedAt: U(),
});
Yt({
  status: Pp.optional(),
  search: U().optional(),
  limit: ia.number().int().min(1).max(100).default(50),
  offset: ia.number().int().min(0).default(0),
});
const Ep = Cr([
    "Registered",
    "Attended",
    "Segmented · Agency",
    "Segmented · Transaction",
    "Session Scheduled",
    "Audited",
    "Proposal Sent",
    "In Discussion",
    "Won",
    "Lost",
  ]),
  Tp = Cr(["Agency", "Transaction", "Both", "Unclear"]),
  eM = Cr([
    "Meta · Lead Gen",
    "Meta · Workshop ad",
    "LinkedIn Sponsored",
    "Referral",
    "Email",
    "Walk-in",
  ]),
  EM = Yt({
    workshopId: U(),
    name: U().min(1).max(200),
    designation: U().max(200).optional(),
    company: U().min(1).max(200),
    city: U().max(100).optional(),
    scale: Cr(["Small", "Mid", "Large"]).optional(),
    phone: U().max(20).optional(),
    email: U().email().optional(),
    source: eM.optional(),
    notes: U().max(2e3).optional(),
    ownerPm: U().max(200).optional(),
  }),
  TM = Yt({ stage: Ep, notes: U().max(2e3).optional() });
Yt({
  name: U().min(1).max(200).optional(),
  designation: U().max(200).optional(),
  company: U().max(200).optional(),
  city: U().max(100).optional(),
  scale: Cr(["Small", "Mid", "Large"]).optional(),
  phone: U().max(20).optional(),
  email: U().email().optional(),
  classification: Tp.optional(),
  fitScore: Oe().int().min(0).max(100).optional(),
  estimatedDealSize: Oe().int().min(0).optional(),
  notes: U().max(2e3).optional(),
  ownerPm: U().max(200).optional(),
  oneOnOneAt: U().optional(),
});
Yt({
  id: U(),
  tenantId: U(),
  workshopId: U(),
  name: U(),
  designation: U().nullable(),
  company: U(),
  city: U().nullable(),
  scale: U().nullable(),
  phone: U().nullable(),
  email: U().nullable(),
  source: U().nullable(),
  classification: Tp.nullable(),
  stage: Ep,
  fitScore: Oe().nullable(),
  estimatedDealSize: Oe().nullable(),
  attended: id(),
  registeredAt: U(),
  oneOnOneAt: U().nullable(),
  notes: U().nullable(),
  lastActivity: U(),
  ownerPm: U().nullable(),
  hasAudit: id(),
  hasProposal: id(),
  createdAt: U(),
  updatedAt: U(),
});
Yt({
  workshopId: U().optional(),
  stage: Ep.optional(),
  classification: Tp.optional(),
  search: U().optional(),
  limit: ia.number().int().min(1).max(100).default(50),
  offset: ia.number().int().min(0).default(0),
});
const J1 = Cr(["Pending", "In Progress", "Reviewed", "Shared", "Converted"]),
  eS = Cr([
    "Website",
    "SEO",
    "Ad Performance",
    "Social",
    "Funnel",
    "Brand Positioning",
    "Competitor Analysis",
  ]);
Yt({
  prospectId: U(),
  type: eS.default("Brand Positioning"),
  notes: U().max(2e3).optional(),
});
const tM = Yt({
    name: U(),
    score: Oe().int().min(0).max(100),
    weight: Oe().int().min(0).max(100),
    findings: us(U()),
    opportunity: U(),
    estimatedImpact: U(),
  }),
  nM = Yt({
    metric: U(),
    them: U(),
    cohortAvg: U(),
    topPerformer: U(),
    gapPct: Oe(),
  });
Yt({
  id: U(),
  tenantId: U(),
  prospectId: U(),
  type: eS,
  status: J1,
  generatedAt: U().nullable(),
  generatedBy: U().nullable(),
  overallScore: Oe().nullable(),
  dimensions: us(tM),
  benchmarks: us(nM),
  topThreeOpportunities: us(
    Yt({ title: U(), description: U(), estimatedUplift: U() }),
  ),
  estimatedAnnualUpliftLeads: Oe().nullable(),
  estimatedAnnualUpliftRevenue: Oe().nullable(),
  competitorsAnalysed: us(U()),
  dataSources: us(U()),
  notes: U().nullable(),
  createdAt: U(),
  updatedAt: U(),
});
Yt({
  prospectId: U().optional(),
  status: J1.optional(),
  limit: ia.number().int().min(1).max(100).default(50),
  offset: ia.number().int().min(0).default(0),
});
const Ft = {
  all: ["growth"],
  workshopsList: () => [...Ft.all, "workshops"],
  prospectsList: () => [...Ft.all, "prospects"],
  brandAuditsList: () => [...Ft.all, "brand-audits"],
  workshops: (e) => [...Ft.all, "workshops", e],
  workshop: (e) => [...Ft.all, "workshops", e],
  prospects: (e) => [...Ft.all, "prospects", e],
  prospect: (e) => [...Ft.all, "prospects", e],
  prospectActivities: (e) => [...Ft.all, "prospects", e, "activities"],
  prospectBrandAudit: (e) => [...Ft.all, "prospects", e, "brand-audit"],
  brandAudits: (e) => [...Ft.all, "brand-audits", e],
  brandAudit: (e) => [...Ft.all, "brand-audits", e],
  fullAuditByProspect: (e) => [...Ft.all, "full-audit-by-prospect", e],
  fullAudits: (e) => [...Ft.all, "full-audits", e],
  fullAudit: (e) => [...Ft.all, "full-audits", e],
};
function rM() {
  const e = rw();
  return tE({
    mutationFn: (t) => oE.post("/growth/workshops", t),
    onSuccess: () => {
      e.invalidateQueries({ queryKey: Ft.workshopsList() });
    },
  });
}
function iM({ onSuccess: e, bare: t }) {
  const { mutate: n, isPending: r, error: i } = rM(),
    [s, a] = _.useState(null);
  _.useEffect(() => {
    if (!s) return;
    const d = setTimeout(() => {
      (a(null), e == null || e());
    }, 2200);
    return () => clearTimeout(d);
  }, [s, e]);
  const {
    register: o,
    handleSubmit: l,
    formState: { errors: u },
  } = kD({
    resolver: ED(X1),
    defaultValues: {
      adSpend: 0,
      cpRegistration: 0,
      campaignBudget: 0,
      expectedCPR: 0,
    },
  });
  function c(d) {
    n(d, { onSuccess: () => a(d.title) });
  }
  return s !== null
    ? E.jsxs(Mt.div, {
        initial: { opacity: 0, scale: 0.92, y: 12 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        className:
          "flex flex-col items-center justify-center gap-5 py-14 px-6 text-center",
        children: [
          E.jsxs("div", {
            className: "relative flex items-center justify-center",
            children: [
              E.jsx(Mt.div, {
                initial: { scale: 0.6, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: {
                  delay: 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                },
                className:
                  "w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center",
                children: E.jsx(Mt.div, {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: {
                    delay: 0.25,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 260,
                  },
                  children: E.jsx(Gb, {
                    className: "w-10 h-10 text-emerald-500",
                    strokeWidth: 1.8,
                  }),
                }),
              }),
              E.jsx(Mt.div, {
                initial: { scale: 0.8, opacity: 0.6 },
                animate: { scale: 1.6, opacity: 0 },
                transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
                className: "absolute w-20 h-20 rounded-full bg-emerald-400",
              }),
            ],
          }),
          E.jsxs("div", {
            className: "space-y-1.5",
            children: [
              E.jsx(Mt.h3, {
                initial: { opacity: 0, y: 6 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3, duration: 0.35 },
                className: "text-lg font-bold text-slate-900",
                children: "Workshop Scheduled!",
              }),
              E.jsxs(Mt.p, {
                initial: { opacity: 0, y: 6 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4, duration: 0.35 },
                className: "text-sm text-slate-500 max-w-xs leading-relaxed",
                children: [
                  E.jsx("span", {
                    className: "font-semibold text-slate-700",
                    children: s,
                  }),
                  " ",
                  "has been added to your workshop schedule.",
                ],
              }),
            ],
          }),
          E.jsxs(Mt.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.6 },
            className:
              "flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium",
            children: [
              E.jsx(Wb, { className: "w-3.5 h-3.5" }),
              "Closing in a moment…",
            ],
          }),
        ],
      })
    : E.jsxs("form", {
        onSubmit: l(c),
        className: t ? "space-y-4" : "card card-pad space-y-4",
        children: [
          E.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
              E.jsxs("div", {
                className: "md:col-span-2",
                children: [
                  E.jsxs("label", {
                    className: "block text-xs font-medium text-slate-700 mb-1",
                    children: [
                      "Title ",
                      E.jsx("span", {
                        className: "text-red-500",
                        children: "*",
                      }),
                    ],
                  }),
                  E.jsx("input", {
                    ...o("title"),
                    className: "input w-full",
                    placeholder: "Workshop title",
                  }),
                  u.title &&
                    E.jsx("p", {
                      className: "text-xs text-red-500 mt-1",
                      children: u.title.message,
                    }),
                ],
              }),
              E.jsxs("div", {
                children: [
                  E.jsxs("label", {
                    className: "block text-xs font-medium text-slate-700 mb-1",
                    children: [
                      "Format ",
                      E.jsx("span", {
                        className: "text-red-500",
                        children: "*",
                      }),
                    ],
                  }),
                  E.jsxs("select", {
                    ...o("format"),
                    className: "input w-full",
                    children: [
                      E.jsx("option", { value: "", children: "Select format" }),
                      E.jsx("option", { value: "Online", children: "Online" }),
                      E.jsx("option", {
                        value: "In-person",
                        children: "In-person",
                      }),
                    ],
                  }),
                  u.format &&
                    E.jsx("p", {
                      className: "text-xs text-red-500 mt-1",
                      children: u.format.message,
                    }),
                ],
              }),
              E.jsxs("div", {
                children: [
                  E.jsxs("label", {
                    className: "block text-xs font-medium text-slate-700 mb-1",
                    children: [
                      "Date ",
                      E.jsx("span", {
                        className: "text-red-500",
                        children: "*",
                      }),
                    ],
                  }),
                  E.jsx("input", {
                    ...o("date"),
                    type: "date",
                    className: "input w-full",
                  }),
                  u.date &&
                    E.jsx("p", {
                      className: "text-xs text-red-500 mt-1",
                      children: u.date.message,
                    }),
                ],
              }),
              E.jsxs("div", {
                children: [
                  E.jsx("label", {
                    className: "block text-xs font-medium text-slate-700 mb-1",
                    children: "Time",
                  }),
                  E.jsx("input", {
                    ...o("time"),
                    className: "input w-full",
                    placeholder: "e.g. 10:00 AM",
                  }),
                ],
              }),
              E.jsxs("div", {
                children: [
                  E.jsx("label", {
                    className: "block text-xs font-medium text-slate-700 mb-1",
                    children: "City",
                  }),
                  E.jsx("input", {
                    ...o("city"),
                    className: "input w-full",
                    placeholder: "City",
                  }),
                ],
              }),
              E.jsxs("div", {
                children: [
                  E.jsx("label", {
                    className: "block text-xs font-medium text-slate-700 mb-1",
                    children: "Venue",
                  }),
                  E.jsx("input", {
                    ...o("venue"),
                    className: "input w-full",
                    placeholder: "Venue name",
                  }),
                ],
              }),
              E.jsxs("div", {
                children: [
                  E.jsxs("label", {
                    className: "block text-xs font-medium text-slate-700 mb-1",
                    children: [
                      "Capacity ",
                      E.jsx("span", {
                        className: "text-red-500",
                        children: "*",
                      }),
                    ],
                  }),
                  E.jsx("input", {
                    ...o("capacity", { valueAsNumber: !0 }),
                    type: "number",
                    min: 1,
                    className: "input w-full",
                    placeholder: "100",
                  }),
                  u.capacity &&
                    E.jsx("p", {
                      className: "text-xs text-red-500 mt-1",
                      children: u.capacity.message,
                    }),
                ],
              }),
              E.jsxs("div", {
                children: [
                  E.jsxs("label", {
                    className: "block text-xs font-medium text-slate-700 mb-1",
                    children: [
                      "Ticket Price (₹) ",
                      E.jsx("span", {
                        className: "text-red-500",
                        children: "*",
                      }),
                    ],
                  }),
                  E.jsx("input", {
                    ...o("ticketPrice", { valueAsNumber: !0 }),
                    type: "number",
                    min: 0,
                    className: "input w-full",
                    placeholder: "0",
                  }),
                  u.ticketPrice &&
                    E.jsx("p", {
                      className: "text-xs text-red-500 mt-1",
                      children: u.ticketPrice.message,
                    }),
                ],
              }),
              E.jsxs("div", {
                children: [
                  E.jsx("label", {
                    className: "block text-xs font-medium text-slate-700 mb-1",
                    children: "Ad Spend (₹)",
                  }),
                  E.jsx("input", {
                    ...o("adSpend", { valueAsNumber: !0 }),
                    type: "number",
                    min: 0,
                    className: "input w-full",
                    placeholder: "0",
                  }),
                ],
              }),
              E.jsxs("div", {
                children: [
                  E.jsx("label", {
                    className: "block text-xs font-medium text-slate-700 mb-1",
                    children: "Speaker",
                  }),
                  E.jsx("input", {
                    ...o("speaker"),
                    className: "input w-full",
                    placeholder: "Speaker name",
                  }),
                ],
              }),
              E.jsxs("div", {
                className: "md:col-span-2",
                children: [
                  E.jsx("label", {
                    className: "block text-xs font-medium text-slate-700 mb-1",
                    children: "Notes",
                  }),
                  E.jsx("textarea", {
                    ...o("notes"),
                    className: "input w-full min-h-[80px]",
                    placeholder: "Any notes...",
                  }),
                ],
              }),
            ],
          }),
          i &&
            E.jsx("p", {
              className: "text-xs text-red-500",
              children:
                i instanceof Error ? i.message : "Failed to create workshop",
            }),
          E.jsx("div", {
            className: "flex justify-end",
            children: E.jsx("button", {
              type: "submit",
              disabled: r,
              className: "btn btn-primary",
              children: r ? "Creating..." : "Create Workshop",
            }),
          }),
        ],
      });
}
const sM = [
    { to: "/growth", label: "Dashboard", end: !0, Icon: qb },
    { to: "/growth/workshops", label: "Workshops", end: !1, Icon: Hb },
    { to: "/growth/prospects", label: "Prospects", end: !1, Icon: Jb },
    { to: "/growth/brand-audits", label: "Brand Audits", end: !1, Icon: $b },
  ],
  tS = "sidebar-collapsed",
  Ma = 240,
  sv = 64;
function aM() {
  try {
    return localStorage.getItem(tS) === "true";
  } catch {
    return !1;
  }
}
function av({
  collapsed: e,
  onToggleCollapse: t,
  canScheduleWorkshop: n,
  onScheduleClick: r,
  onLogout: i,
  userName: s,
  userRole: a,
  onClose: o,
}) {
  var l;
  return E.jsxs("div", {
    className: "flex flex-col h-full",
    children: [
      E.jsxs("div", {
        className:
          "h-16 flex items-center border-b border-white/10 shrink-0 overflow-hidden px-4",
        children: [
          E.jsxs("div", {
            className: "flex items-center gap-2.5 min-w-0 flex-1",
            children: [
              E.jsx("div", {
                className:
                  "w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center shrink-0 text-white font-bold text-xs shadow-[0_0_12px_rgba(45,63,231,0.5)]",
                children: "P",
              }),
              E.jsx(mi, {
                initial: !1,
                children:
                  !e &&
                  E.jsx(
                    Mt.span,
                    {
                      initial: { opacity: 0, width: 0 },
                      animate: { opacity: 1, width: "auto" },
                      exit: { opacity: 0, width: 0 },
                      transition: { duration: 0.2, ease: "easeInOut" },
                      className:
                        "font-heading font-bold text-white text-sm tracking-tight whitespace-nowrap overflow-hidden",
                      children: "PROPACITY ASM",
                    },
                    "logo-text",
                  ),
              }),
            ],
          }),
          o &&
            E.jsx("button", {
              onClick: o,
              "aria-label": "Close sidebar",
              className:
                "text-slate-400 hover:text-white transition-colors ml-2 shrink-0",
              children: E.jsx(j1, { className: "w-4 h-4" }),
            }),
        ],
      }),
      n &&
        E.jsx("div", {
          className: "p-3 border-b border-white/10 shrink-0",
          children: E.jsxs("button", {
            onClick: r,
            title: e ? "Schedule a Workshop" : void 0,
            className: `w-full flex items-center justify-center gap-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold transition-all duration-200 shadow-[0_0_18px_rgba(45,63,231,0.35)] hover:shadow-[0_0_28px_rgba(45,63,231,0.55)] ${e ? "h-9 px-0" : "h-9 px-3"}`,
            children: [
              E.jsx(Kb, { className: "w-4 h-4 shrink-0" }),
              E.jsx(mi, {
                initial: !1,
                children:
                  !e &&
                  E.jsx(
                    Mt.span,
                    {
                      initial: { opacity: 0, width: 0 },
                      animate: { opacity: 1, width: "auto" },
                      exit: { opacity: 0, width: 0 },
                      transition: { duration: 0.18, ease: "easeInOut" },
                      className: "whitespace-nowrap overflow-hidden",
                      children: "Schedule a Workshop",
                    },
                    "cta-text",
                  ),
              }),
            ],
          }),
        }),
      E.jsxs("nav", {
        className: "flex-1 p-3 flex flex-col",
        style: { overflow: e ? "visible" : "auto" },
        children: [
          E.jsx(mi, {
            initial: !1,
            children:
              !e &&
              E.jsx(
                Mt.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  transition: { duration: 0.18, ease: "easeInOut" },
                  className:
                    "px-2 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1 whitespace-nowrap overflow-hidden",
                  children: "Growth",
                },
                "section-label",
              ),
          }),
          E.jsx("ul", {
            className: "space-y-0.5 flex-1",
            children: sM.map(({ to: u, label: c, end: d, Icon: f }) =>
              E.jsxs(
                "li",
                {
                  className: "relative group",
                  children: [
                    E.jsxs(xP, {
                      to: u,
                      end: d,
                      className: ({
                        isActive: p,
                      }) => `flex items-center gap-3 rounded-lg text-sm transition-colors duration-150 overflow-hidden
                  ${e ? "px-0 py-2.5 justify-center" : "px-3 py-2.5"}
                  ${p ? "bg-[rgba(45,63,231,0.15)] text-white font-medium border-l-[3px] border-[#2D3FE7] pl-[calc(0.75rem-3px)]" : "text-slate-400 hover:text-white hover:bg-[rgba(255,255,255,0.05)] border-l-[3px] border-transparent"}`,
                      children: [
                        E.jsx(f, { className: "w-4 h-4 shrink-0" }),
                        E.jsx(mi, {
                          initial: !1,
                          children:
                            !e &&
                            E.jsx(
                              Mt.span,
                              {
                                initial: { opacity: 0, width: 0 },
                                animate: { opacity: 1, width: "auto" },
                                exit: { opacity: 0, width: 0 },
                                transition: {
                                  duration: 0.18,
                                  ease: "easeInOut",
                                },
                                className: "whitespace-nowrap overflow-hidden",
                                children: c,
                              },
                              `nav-${c}`,
                            ),
                        }),
                      ],
                    }),
                    e &&
                      E.jsxs("div", {
                        className: `absolute left-full top-1/2 -translate-y-1/2 ml-3 z-50
                    px-2.5 py-1.5 bg-slate-800 border border-white/10 text-white text-xs font-medium rounded-lg
                    whitespace-nowrap pointer-events-none shadow-xl
                    opacity-0 group-hover:opacity-100 transition-opacity duration-150`,
                        children: [
                          c,
                          E.jsx("span", {
                            className:
                              "absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-800",
                          }),
                        ],
                      }),
                  ],
                },
                u,
              ),
            ),
          }),
          t &&
            E.jsx("button", {
              onClick: t,
              title: e ? "Expand sidebar" : "Collapse sidebar",
              className:
                "flex items-center justify-center w-full h-8 rounded-xl text-slate-600 hover:text-white hover:bg-white/6 transition-colors mt-2",
              children: e
                ? E.jsx(Qb, { className: "w-4 h-4" })
                : E.jsx(Zb, { className: "w-4 h-4" }),
            }),
        ],
      }),
      E.jsx("div", {
        className: "border-t border-white/10 p-3 shrink-0",
        children: E.jsxs("div", {
          className: `flex items-center gap-2.5 ${e ? "justify-center" : ""}`,
          children: [
            E.jsx("div", {
              title: e ? `${s ?? "User"} · ${a ?? ""}` : void 0,
              className:
                "w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-xs font-bold text-brand-300 shrink-0 cursor-default",
              children:
                ((l = s == null ? void 0 : s[0]) == null
                  ? void 0
                  : l.toUpperCase()) ?? "U",
            }),
            E.jsx(mi, {
              initial: !1,
              children:
                !e &&
                E.jsxs(
                  Mt.div,
                  {
                    initial: { opacity: 0, width: 0 },
                    animate: { opacity: 1, width: "auto" },
                    exit: { opacity: 0, width: 0 },
                    transition: { duration: 0.18, ease: "easeInOut" },
                    className: "flex-1 min-w-0 overflow-hidden",
                    children: [
                      E.jsx("p", {
                        className: "text-xs font-semibold text-white truncate",
                        children: s,
                      }),
                      E.jsx("p", {
                        className: "text-[10px] text-white/40 truncate mt-0.5",
                        children: a,
                      }),
                    ],
                  },
                  "user-info",
                ),
            }),
            E.jsx(mi, {
              initial: !1,
              children:
                !e &&
                E.jsx(
                  Mt.button,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.15 },
                    onClick: i,
                    "aria-label": "Sign out",
                    className:
                      "text-slate-600 hover:text-white transition-colors shrink-0 p-1 rounded-lg hover:bg-white/6",
                    children: E.jsx(Yb, { className: "w-3.5 h-3.5" }),
                  },
                  "logout-btn",
                ),
            }),
          ],
        }),
      }),
    ],
  });
}
function oM() {
  const [e, t] = _.useState(aM),
    [n, r] = _.useState(!1),
    [i, s] = _.useState(!1),
    { user: a, logout: o } = dE(),
    l = Yu(),
    u = (a == null ? void 0 : a.role) !== "Developer";
  function c() {
    t((p) => {
      const v = !p;
      try {
        localStorage.setItem(tS, String(v));
      } catch {}
      return v;
    });
  }
  function d() {
    (o(), l("/signin", { replace: !0 }));
  }
  (_.useEffect(() => {
    r(!1);
  }, [l]),
    _.useEffect(
      () => (
        n
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [n],
    ));
  const f = {
    canScheduleWorkshop: u,
    onScheduleClick: () => {
      (s(!0), r(!1));
    },
    onLogout: d,
    userName: a == null ? void 0 : a.name,
    userRole: a == null ? void 0 : a.role,
  };
  return E.jsxs("div", {
    className: "flex h-screen bg-[#F4F6FB]",
    children: [
      E.jsx(Mt.aside, {
        animate: { width: e ? sv : Ma },
        transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
        className:
          "hidden md:flex shrink-0 flex-col bg-[#0F172A] z-20 overflow-visible",
        style: { minWidth: e ? sv : Ma },
        children: E.jsx(av, { collapsed: e, onToggleCollapse: c, ...f }),
      }),
      E.jsx("button", {
        onClick: () => r(!0),
        "aria-label": "Open sidebar",
        className:
          "md:hidden fixed top-3 left-3 z-30 w-9 h-9 flex items-center justify-center rounded-lg bg-[#0F172A] text-white shadow-lg",
        children: E.jsx(Xb, { className: "w-4 h-4" }),
      }),
      E.jsx(mi, {
        children:
          n &&
          E.jsxs(E.Fragment, {
            children: [
              E.jsx(
                Mt.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.2 },
                  className:
                    "md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",
                  onClick: () => r(!1),
                },
                "backdrop",
              ),
              E.jsx(
                Mt.aside,
                {
                  initial: { x: -Ma },
                  animate: { x: 0 },
                  exit: { x: -Ma },
                  transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
                  className:
                    "md:hidden fixed inset-y-0 left-0 z-50 flex flex-col bg-[#0F172A]",
                  style: { width: Ma },
                  children: E.jsx(av, {
                    collapsed: !1,
                    onClose: () => r(!1),
                    ...f,
                  }),
                },
                "drawer",
              ),
            ],
          }),
      }),
      E.jsx("main", {
        className: "flex flex-col flex-1 min-w-0 overflow-hidden",
        children: E.jsx(qC, {}),
      }),
      u &&
        i &&
        E.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm",
          onClick: (p) => {
            p.target === p.currentTarget && s(!1);
          },
          children: E.jsxs("div", {
            className:
              "bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col",
            children: [
              E.jsxs("div", {
                className:
                  "flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0",
                children: [
                  E.jsxs("div", {
                    className: "flex items-center gap-2.5",
                    children: [
                      E.jsx("img", {
                        src: "/propacity-logo.png",
                        alt: "Propacity",
                        width: 22,
                        height: 22,
                        className: "rounded-md object-contain",
                      }),
                      E.jsx("h2", {
                        className:
                          "font-heading text-base font-bold text-slate-900",
                        children: "Schedule a Workshop",
                      }),
                    ],
                  }),
                  E.jsx("button", {
                    onClick: () => s(!1),
                    "aria-label": "Close",
                    className:
                      "text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-100",
                    children: E.jsx(j1, { className: "w-4 h-4" }),
                  }),
                ],
              }),
              E.jsx("div", {
                className: "overflow-y-auto p-6",
                children: E.jsx(iM, { bare: !0, onSuccess: () => s(!1) }),
              }),
            ],
          }),
        }),
    ],
  });
}
function sd({ className: e = "" }) {
  return E.jsx("div", { className: `animate-pulse bg-slate-200 rounded ${e}` });
}
function fi() {
  return E.jsxs("div", {
    className: "p-6 space-y-4",
    children: [
      E.jsx("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
        children: Array.from({ length: 4 }).map((e, t) =>
          E.jsx(sd, { className: "h-24 w-full" }, t),
        ),
      }),
      E.jsx(sd, { className: "h-48 w-full" }),
      E.jsx(sd, { className: "h-64 w-full" }),
    ],
  });
}
const lM = _.lazy(() =>
    _r(
      () => import("./growth-dashboard.page-uS4jAtoO.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    ),
  ),
  uM = _.lazy(() =>
    _r(
      () => import("./growth-workshops.page-Ba2QkOGL.js"),
      __vite__mapDeps([10, 1, 3, 4, 5, 6, 7]),
    ),
  ),
  cM = _.lazy(() =>
    _r(
      () => import("./growth-workshop-detail.page-DjaFKRVR.js"),
      __vite__mapDeps([11, 1, 12, 8, 9, 7, 13, 4, 14, 6]),
    ),
  ),
  dM = _.lazy(() =>
    _r(
      () => import("./growth-prospects.page-DXfD4O4L.js"),
      __vite__mapDeps([15, 1, 12, 8, 9, 7]),
    ),
  ),
  fM = _.lazy(() =>
    _r(
      () => import("./growth-prospect-detail.page-BJThbLhq.js"),
      __vite__mapDeps([16, 1, 9, 13, 7, 2, 6, 5, 14]),
    ),
  ),
  hM = _.lazy(() =>
    _r(
      () => import("./growth-brand-audits.page-CKVgE5U9.js"),
      __vite__mapDeps([17, 1, 12, 18]),
    ),
  ),
  pM = _.lazy(() =>
    _r(
      () => import("./growth-brand-audit-detail.page-DXk-t-t3.js"),
      __vite__mapDeps([19, 1, 18, 20, 14]),
    ),
  ),
  mM = {
    path: "growth",
    children: [
      {
        index: !0,
        element: E.jsx(_.Suspense, {
          fallback: E.jsx(fi, {}),
          children: E.jsx(lM, {}),
        }),
      },
      {
        path: "workshops",
        element: E.jsx(_.Suspense, {
          fallback: E.jsx(fi, {}),
          children: E.jsx(uM, {}),
        }),
      },
      {
        path: "workshops/:workshopId",
        element: E.jsx(_.Suspense, {
          fallback: E.jsx(fi, {}),
          children: E.jsx(cM, {}),
        }),
      },
      {
        path: "prospects",
        element: E.jsx(_.Suspense, {
          fallback: E.jsx(fi, {}),
          children: E.jsx(dM, {}),
        }),
      },
      {
        path: "prospects/:prospectId",
        element: E.jsx(_.Suspense, {
          fallback: E.jsx(fi, {}),
          children: E.jsx(fM, {}),
        }),
      },
      {
        path: "brand-audits",
        element: E.jsx(_.Suspense, {
          fallback: E.jsx(fi, {}),
          children: E.jsx(hM, {}),
        }),
      },
      {
        path: "brand-audits/:auditId",
        element: E.jsx(_.Suspense, {
          fallback: E.jsx(fi, {}),
          children: E.jsx(pM, {}),
        }),
      },
    ],
  };
function yM() {
  if (!Fh()) throw sC("/signin");
  return null;
}
const gM = _.lazy(() =>
    _r(() => import("./signin.page-BMwRvM31.js"), __vite__mapDeps([21, 22])),
  ),
  vM = _.lazy(() =>
    _r(
      () => import("./signup.page-D_VVIbZL.js"),
      __vite__mapDeps([23, 22, 20]),
    ),
  ),
  xM = sP([
    { path: "/signin", element: E.jsx(gM, {}) },
    { path: "/signup", element: E.jsx(vM, {}) },
    { path: "/login", element: E.jsx(ay, { to: "/signin", replace: !0 }) },
    {
      path: "/",
      element: E.jsx(oM, {}),
      loader: yM,
      children: [
        { index: !0, element: E.jsx(ay, { to: "/growth", replace: !0 }) },
        mM,
      ],
    },
  ]);
ad.createRoot(document.getElementById("root")).render(
  E.jsx(St.StrictMode, {
    children: E.jsx(cE, {
      children: E.jsx(eE, {
        client: lE,
        children: E.jsx(_.Suspense, { children: E.jsx(hP, { router: xM }) }),
      }),
    }),
  }),
);
export {
  mi as A,
  UP as B,
  Gb as C,
  DP as D,
  LP as E,
  af as F,
  pn as G,
  qx as H,
  AP as I,
  bP as J,
  sf as K,
  vP as L,
  Zx as M,
  QP as N,
  NP as O,
  _t as P,
  FP as Q,
  St as R,
  sd as S,
  iw as T,
  Jb as U,
  j1 as X,
  _r as _,
  Yu as a,
  SM as b,
  kn as c,
  Hb as d,
  _M as e,
  fi as f,
  vv as g,
  oE as h,
  Ft as i,
  E as j,
  rw as k,
  tE as l,
  Mt as m,
  kD as n,
  EM as o,
  kM as p,
  TM as q,
  _ as r,
  Yt as s,
  ED as t,
  dE as u,
  U as v,
  Cr as w,
  Fh as x,
  Qb as y,
  Bo as z,
};
