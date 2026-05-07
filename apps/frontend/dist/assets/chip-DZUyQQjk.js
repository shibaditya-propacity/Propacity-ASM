var ge = (t) => {
  throw TypeError(t);
};
var q = (t, e, s) => e.has(t) || ge("Cannot " + s);
var i = (t, e, s) => (
    q(t, e, "read from private field"),
    s ? s.call(t) : e.get(t)
  ),
  b = (t, e, s) =>
    e.has(t)
      ? ge("Cannot add the same private member more than once")
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, s),
  u = (t, e, s, r) => (
    q(t, e, "write to private field"),
    r ? r.call(t, s) : e.set(t, s),
    s
  ),
  d = (t, e, s) => (q(t, e, "access private method"), s);
import {
  z as Ne,
  B as xe,
  D as R,
  E as ee,
  F as H,
  G as te,
  H as se,
  I as ve,
  J as Te,
  K as J,
  M as Me,
  N as _e,
  O as ye,
  P as Ce,
  r as C,
  Q as Oe,
  k as Qe,
  c as ue,
  T as ke,
  j as c,
  u as Fe,
} from "./index-DFd5EwAv.js";
var x,
  a,
  z,
  g,
  M,
  F,
  w,
  I,
  W,
  U,
  D,
  _,
  Q,
  j,
  P,
  o,
  A,
  ie,
  re,
  ae,
  ne,
  oe,
  le,
  he,
  Ie,
  we,
  Ue =
    ((we = class extends Ne {
      constructor(e, s) {
        super();
        b(this, o);
        b(this, x);
        b(this, a);
        b(this, z);
        b(this, g);
        b(this, M);
        b(this, F);
        b(this, w);
        b(this, I);
        b(this, W);
        b(this, U);
        b(this, D);
        b(this, _);
        b(this, Q);
        b(this, j);
        b(this, P, new Set());
        ((this.options = s),
          u(this, x, e),
          u(this, I, null),
          u(this, w, xe()),
          this.bindMethods(),
          this.setOptions(s));
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (i(this, a).addObserver(this),
          Re(i(this, a), this.options)
            ? d(this, o, A).call(this)
            : this.updateResult(),
          d(this, o, ne).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return ce(i(this, a), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return ce(i(this, a), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        ((this.listeners = new Set()),
          d(this, o, oe).call(this),
          d(this, o, le).call(this),
          i(this, a).removeObserver(this));
      }
      setOptions(e) {
        const s = this.options,
          r = i(this, a);
        if (
          ((this.options = i(this, x).defaultQueryOptions(e)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof R(this.options.enabled, i(this, a)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean",
          );
        (d(this, o, he).call(this),
          i(this, a).setOptions(this.options),
          s._defaulted &&
            !ee(this.options, s) &&
            i(this, x)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: i(this, a),
                observer: this,
              }));
        const n = this.hasListeners();
        (n && Se(i(this, a), r, this.options, s) && d(this, o, A).call(this),
          this.updateResult(),
          n &&
            (i(this, a) !== r ||
              R(this.options.enabled, i(this, a)) !==
                R(s.enabled, i(this, a)) ||
              H(this.options.staleTime, i(this, a)) !==
                H(s.staleTime, i(this, a))) &&
            d(this, o, ie).call(this));
        const l = d(this, o, re).call(this);
        n &&
          (i(this, a) !== r ||
            R(this.options.enabled, i(this, a)) !== R(s.enabled, i(this, a)) ||
            l !== i(this, j)) &&
          d(this, o, ae).call(this, l);
      }
      getOptimisticResult(e) {
        const s = i(this, x).getQueryCache().build(i(this, x), e),
          r = this.createResult(s, e);
        return (
          Pe(this, r) &&
            (u(this, g, r),
            u(this, F, this.options),
            u(this, M, i(this, a).state)),
          r
        );
      }
      getCurrentResult() {
        return i(this, g);
      }
      trackResult(e, s) {
        return new Proxy(e, {
          get: (r, n) => (
            this.trackProp(n),
            s == null || s(n),
            n === "promise" &&
              (this.trackProp("data"),
              !this.options.experimental_prefetchInRender &&
                i(this, w).status === "pending" &&
                i(this, w).reject(
                  new Error(
                    "experimental_prefetchInRender feature flag is not enabled",
                  ),
                )),
            Reflect.get(r, n)
          ),
        });
      }
      trackProp(e) {
        i(this, P).add(e);
      }
      getCurrentQuery() {
        return i(this, a);
      }
      refetch({ ...e } = {}) {
        return this.fetch({ ...e });
      }
      fetchOptimistic(e) {
        const s = i(this, x).defaultQueryOptions(e),
          r = i(this, x).getQueryCache().build(i(this, x), s);
        return r.fetch().then(() => this.createResult(r, s));
      }
      fetch(e) {
        return d(this, o, A)
          .call(this, { ...e, cancelRefetch: e.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), i(this, g)));
      }
      createResult(e, s) {
        var be;
        const r = i(this, a),
          n = this.options,
          l = i(this, g),
          h = i(this, M),
          S = i(this, F),
          m = e !== r ? e.state : i(this, z),
          { state: E } = e;
        let f = { ...E },
          N = !1,
          p;
        if (s._optimisticResults) {
          const y = this.hasListeners(),
            B = !y && Re(e, s),
            V = y && Se(e, r, s, n);
          ((B || V) && (f = { ...f, ..._e(E.data, e.options) }),
            s._optimisticResults === "isRestoring" && (f.fetchStatus = "idle"));
        }
        let { error: T, errorUpdatedAt: L, status: v } = f;
        p = f.data;
        let K = !1;
        if (s.placeholderData !== void 0 && p === void 0 && v === "pending") {
          let y;
          (l != null &&
          l.isPlaceholderData &&
          s.placeholderData === (S == null ? void 0 : S.placeholderData)
            ? ((y = l.data), (K = !0))
            : (y =
                typeof s.placeholderData == "function"
                  ? s.placeholderData(
                      (be = i(this, D)) == null ? void 0 : be.state.data,
                      i(this, D),
                    )
                  : s.placeholderData),
            y !== void 0 &&
              ((v = "success"),
              (p = ye(l == null ? void 0 : l.data, y, s)),
              (N = !0)));
        }
        if (s.select && p !== void 0 && !K)
          if (
            l &&
            p === (h == null ? void 0 : h.data) &&
            s.select === i(this, W)
          )
            p = i(this, U);
          else
            try {
              (u(this, W, s.select),
                (p = s.select(p)),
                (p = ye(l == null ? void 0 : l.data, p, s)),
                u(this, U, p),
                u(this, I, null));
            } catch (y) {
              u(this, I, y);
            }
        i(this, I) &&
          ((T = i(this, I)), (p = i(this, U)), (L = Date.now()), (v = "error"));
        const X = f.fetchStatus === "fetching",
          Y = v === "pending",
          Z = v === "error",
          fe = Y && X,
          pe = p !== void 0,
          O = {
            status: v,
            fetchStatus: f.fetchStatus,
            isPending: Y,
            isSuccess: v === "success",
            isError: Z,
            isInitialLoading: fe,
            isLoading: fe,
            data: p,
            dataUpdatedAt: f.dataUpdatedAt,
            error: T,
            errorUpdatedAt: L,
            failureCount: f.fetchFailureCount,
            failureReason: f.fetchFailureReason,
            errorUpdateCount: f.errorUpdateCount,
            isFetched: e.isFetched(),
            isFetchedAfterMount:
              f.dataUpdateCount > m.dataUpdateCount ||
              f.errorUpdateCount > m.errorUpdateCount,
            isFetching: X,
            isRefetching: X && !Y,
            isLoadingError: Z && !pe,
            isPaused: f.fetchStatus === "paused",
            isPlaceholderData: N,
            isRefetchError: Z && pe,
            isStale: de(e, s),
            refetch: this.refetch,
            promise: i(this, w),
            isEnabled: R(s.enabled, e) !== !1,
          };
        if (this.options.experimental_prefetchInRender) {
          const y = O.data !== void 0,
            B = O.status === "error" && !y,
            V = (G) => {
              B ? G.reject(O.error) : y && G.resolve(O.data);
            },
            me = () => {
              const G = u(this, w, (O.promise = xe()));
              V(G);
            },
            $ = i(this, w);
          switch ($.status) {
            case "pending":
              e.queryHash === r.queryHash && V($);
              break;
            case "fulfilled":
              (B || O.data !== $.value) && me();
              break;
            case "rejected":
              (!B || O.error !== $.reason) && me();
              break;
          }
        }
        return O;
      }
      updateResult() {
        const e = i(this, g),
          s = this.createResult(i(this, a), this.options);
        if (
          (u(this, M, i(this, a).state),
          u(this, F, this.options),
          i(this, M).data !== void 0 && u(this, D, i(this, a)),
          ee(s, e))
        )
          return;
        u(this, g, s);
        const r = () => {
          if (!e) return !0;
          const { notifyOnChangeProps: n } = this.options,
            l = typeof n == "function" ? n() : n;
          if (l === "all" || (!l && !i(this, P).size)) return !0;
          const h = new Set(l ?? i(this, P));
          return (
            this.options.throwOnError && h.add("error"),
            Object.keys(i(this, g)).some((S) => {
              const k = S;
              return i(this, g)[k] !== e[k] && h.has(k);
            })
          );
        };
        d(this, o, Ie).call(this, { listeners: r() });
      }
      onQueryUpdate() {
        (this.updateResult(), this.hasListeners() && d(this, o, ne).call(this));
      }
    }),
    (x = new WeakMap()),
    (a = new WeakMap()),
    (z = new WeakMap()),
    (g = new WeakMap()),
    (M = new WeakMap()),
    (F = new WeakMap()),
    (w = new WeakMap()),
    (I = new WeakMap()),
    (W = new WeakMap()),
    (U = new WeakMap()),
    (D = new WeakMap()),
    (_ = new WeakMap()),
    (Q = new WeakMap()),
    (j = new WeakMap()),
    (P = new WeakMap()),
    (o = new WeakSet()),
    (A = function (e) {
      d(this, o, he).call(this);
      let s = i(this, a).fetch(this.options, e);
      return ((e != null && e.throwOnError) || (s = s.catch(te)), s);
    }),
    (ie = function () {
      d(this, o, oe).call(this);
      const e = H(this.options.staleTime, i(this, a));
      if (se.isServer() || i(this, g).isStale || !ve(e)) return;
      const r = Te(i(this, g).dataUpdatedAt, e) + 1;
      u(
        this,
        _,
        J.setTimeout(() => {
          i(this, g).isStale || this.updateResult();
        }, r),
      );
    }),
    (re = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(i(this, a))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (ae = function (e) {
      (d(this, o, le).call(this),
        u(this, j, e),
        !(
          se.isServer() ||
          R(this.options.enabled, i(this, a)) === !1 ||
          !ve(i(this, j)) ||
          i(this, j) === 0
        ) &&
          u(
            this,
            Q,
            J.setInterval(
              () => {
                (this.options.refetchIntervalInBackground || Me.isFocused()) &&
                  d(this, o, A).call(this);
              },
              i(this, j),
            ),
          ));
    }),
    (ne = function () {
      (d(this, o, ie).call(this),
        d(this, o, ae).call(this, d(this, o, re).call(this)));
    }),
    (oe = function () {
      i(this, _) !== void 0 && (J.clearTimeout(i(this, _)), u(this, _, void 0));
    }),
    (le = function () {
      i(this, Q) !== void 0 &&
        (J.clearInterval(i(this, Q)), u(this, Q, void 0));
    }),
    (he = function () {
      const e = i(this, x).getQueryCache().build(i(this, x), this.options);
      if (e === i(this, a)) return;
      const s = i(this, a);
      (u(this, a, e),
        u(this, z, e.state),
        this.hasListeners() &&
          (s == null || s.removeObserver(this), e.addObserver(this)));
    }),
    (Ie = function (e) {
      Ce.batch(() => {
        (e.listeners &&
          this.listeners.forEach((s) => {
            s(i(this, g));
          }),
          i(this, x)
            .getQueryCache()
            .notify({ query: i(this, a), type: "observerResultsUpdated" }));
      });
    }),
    we);
function De(t, e) {
  return (
    R(e.enabled, t) !== !1 &&
    t.state.data === void 0 &&
    !(t.state.status === "error" && R(e.retryOnMount, t) === !1)
  );
}
function Re(t, e) {
  return De(t, e) || (t.state.data !== void 0 && ce(t, e, e.refetchOnMount));
}
function ce(t, e, s) {
  if (R(e.enabled, t) !== !1 && H(e.staleTime, t) !== "static") {
    const r = typeof s == "function" ? s(t) : s;
    return r === "always" || (r !== !1 && de(t, e));
  }
  return !1;
}
function Se(t, e, s, r) {
  return (
    (t !== e || R(r.enabled, t) === !1) &&
    (!s.suspense || t.state.status !== "error") &&
    de(t, s)
  );
}
function de(t, e) {
  return R(e.enabled, t) !== !1 && t.isStaleByTime(H(e.staleTime, t));
}
function Pe(t, e) {
  return !ee(t.getCurrentResult(), e);
}
var je = C.createContext(!1),
  Le = () => C.useContext(je);
je.Provider;
function Be() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t,
  };
}
var Ae = C.createContext(Be()),
  He = () => C.useContext(Ae),
  ze = (t, e, s) => {
    const r =
      s != null && s.state.error && typeof t.throwOnError == "function"
        ? Oe(t.throwOnError, [s.state.error, s])
        : t.throwOnError;
    (t.suspense || t.experimental_prefetchInRender || r) &&
      (e.isReset() || (t.retryOnMount = !1));
  },
  We = (t) => {
    C.useEffect(() => {
      t.clearReset();
    }, [t]);
  },
  Ke = ({
    result: t,
    errorResetBoundary: e,
    throwOnError: s,
    query: r,
    suspense: n,
  }) =>
    t.isError &&
    !e.isReset() &&
    !t.isFetching &&
    r &&
    ((n && t.data === void 0) || Oe(s, [t.error, r])),
  Ve = (t) => {
    if (t.suspense) {
      const s = (n) => (n === "static" ? n : Math.max(n ?? 1e3, 1e3)),
        r = t.staleTime;
      ((t.staleTime = typeof r == "function" ? (...n) => s(r(...n)) : s(r)),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
    }
  },
  $e = (t, e) => t.isLoading && t.isFetching && !e,
  Ge = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending,
  Ee = (t, e, s) =>
    e.fetchOptimistic(t).catch(() => {
      s.clearReset();
    });
function Je(t, e, s) {
  var N, p, T, L;
  const r = Le(),
    n = He(),
    l = Qe(),
    h = l.defaultQueryOptions(t);
  (p =
    (N = l.getDefaultOptions().queries) == null
      ? void 0
      : N._experimental_beforeQuery) == null || p.call(N, h);
  const S = l.getQueryCache().get(h.queryHash);
  ((h._optimisticResults = r ? "isRestoring" : "optimistic"),
    Ve(h),
    ze(h, n, S),
    We(n));
  const k = !l.getQueryCache().get(h.queryHash),
    [m] = C.useState(() => new e(l, h)),
    E = m.getOptimisticResult(h),
    f = !r && t.subscribed !== !1;
  if (
    (C.useSyncExternalStore(
      C.useCallback(
        (v) => {
          const K = f ? m.subscribe(Ce.batchCalls(v)) : te;
          return (m.updateResult(), K);
        },
        [m, f],
      ),
      () => m.getCurrentResult(),
      () => m.getCurrentResult(),
    ),
    C.useEffect(() => {
      m.setOptions(h);
    }, [h, m]),
    Ge(h, E))
  )
    throw Ee(h, m, n);
  if (
    Ke({
      result: E,
      errorResetBoundary: n,
      throwOnError: h.throwOnError,
      query: S,
      suspense: h.suspense,
    })
  )
    throw E.error;
  if (
    ((L =
      (T = l.getDefaultOptions().queries) == null
        ? void 0
        : T._experimental_afterQuery) == null || L.call(T, h, E),
    h.experimental_prefetchInRender && !se.isServer() && $e(E, r))
  ) {
    const v = k ? Ee(h, m, n) : S == null ? void 0 : S.promise;
    v == null ||
      v.catch(te).finally(() => {
        m.updateResult();
      });
  }
  return h.notifyOnChangeProps ? E : m.trackResult(E);
}
function it(t, e) {
  return Je(t, Ue);
}
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xe = ue("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ye = ue("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ze = ue("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
function rt({ error: t, onRetry: e }) {
  const s =
    t instanceof ke || t instanceof Error ? t.message : "Something went wrong.";
  return c.jsxs("div", {
    className:
      "flex flex-col items-center justify-center gap-4 p-12 text-center",
    children: [
      c.jsx(Ye, { className: "w-10 h-10 text-red-400" }),
      c.jsxs("div", {
        children: [
          c.jsx("div", {
            className: "text-sm font-semibold text-slate-900",
            children: "Failed to load",
          }),
          c.jsx("div", {
            className: "text-xs text-slate-500 mt-1",
            children: s,
          }),
        ],
      }),
      e &&
        c.jsx("button", {
          onClick: e,
          className: "btn-primary text-xs",
          children: "Retry",
        }),
    ],
  });
}
function at({ title: t, subtitle: e, actions: s }) {
  var n, l;
  const { user: r } = Fe();
  return c.jsxs("header", {
    className:
      "h-16 bg-white border-b border-slate-200/80 flex items-center px-6 gap-4 shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)]",
    children: [
      c.jsxs("div", {
        className: "flex-1 min-w-0",
        children: [
          c.jsx("h1", {
            className:
              "font-heading text-lg font-bold text-slate-900 leading-tight truncate",
            children: t,
          }),
          e &&
            c.jsx("p", {
              className: "text-xs text-slate-500 truncate mt-0.5",
              children: e,
            }),
        ],
      }),
      c.jsxs("button", {
        className:
          "relative hidden md:flex items-center gap-2.5 h-9 pl-3.5 pr-3 rounded-full border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 transition-colors w-56 text-slate-400 shadow-sm",
        children: [
          c.jsx(Ze, { className: "w-3.5 h-3.5 shrink-0" }),
          c.jsx("span", {
            className: "flex-1 text-left text-xs text-slate-400",
            children: "Search…",
          }),
          c.jsx("kbd", {
            className:
              "hidden sm:inline text-[10px] font-mono border border-slate-200 rounded-md px-1.5 py-0.5 bg-white text-slate-400",
            children: "⌘K",
          }),
        ],
      }),
      s,
      c.jsxs("button", {
        "aria-label": "Notifications",
        className:
          "relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors",
        children: [
          c.jsx(Xe, { className: "w-4 h-4" }),
          c.jsx("span", {
            className:
              "absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-500 border-2 border-white",
          }),
        ],
      }),
      c.jsxs("div", {
        className: "flex items-center gap-2.5",
        children: [
          c.jsx("div", {
            className:
              "w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-xs font-bold text-white shrink-0",
            children:
              ((l =
                (n = r == null ? void 0 : r.name) == null ? void 0 : n[0]) ==
              null
                ? void 0
                : l.toUpperCase()) ?? "U",
          }),
          c.jsxs("div", {
            className: "hidden sm:block min-w-0",
            children: [
              c.jsx("p", {
                className:
                  "text-xs font-semibold text-slate-800 truncate leading-tight",
                children: r == null ? void 0 : r.name,
              }),
              c.jsx("p", {
                className: "text-[10px] text-slate-400 truncate leading-tight",
                children: r == null ? void 0 : r.role,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const qe = {
  slate: {
    pill: "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200",
    dot: "bg-slate-400",
  },
  emerald: {
    pill: "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200",
    dot: "bg-emerald-500",
  },
  amber: {
    pill: "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200",
    dot: "bg-amber-500",
  },
  red: {
    pill: "bg-red-50 text-red-600 ring-1 ring-inset ring-red-200",
    dot: "bg-red-500",
  },
  blue: {
    pill: "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200",
    dot: "bg-blue-500",
  },
  violet: {
    pill: "bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-200",
    dot: "bg-violet-500",
  },
};
function nt({ children: t, tone: e = "slate", dot: s }) {
  const { pill: r, dot: n } = qe[e];
  return c.jsxs("span", {
    className: `inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold ${r}`,
    children: [
      s &&
        c.jsx("span", { className: `h-1.5 w-1.5 rounded-full shrink-0 ${n}` }),
      t,
    ],
  });
}
export { nt as C, rt as E, Ze as S, at as T, it as u };
