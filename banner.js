!(function () {
  var e,
    t,
    n,
    o,
    s,
    i,
    r = {},
    a = [],
    l = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function c(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function u(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function d(t, n, o) {
    var s,
      i,
      r,
      a = {};
    for (r in n) "key" == r ? (s = n[r]) : "ref" == r ? (i = n[r]) : (a[r] = n[r]);
    if ((arguments.length > 2 && (a.children = arguments.length > 3 ? e.call(arguments, 2) : o), "function" == typeof t && null != t.defaultProps)) for (r in t.defaultProps) void 0 === a[r] && (a[r] = t.defaultProps[r]);
    return _(t, a, s, i, null);
  }
  function _(e, o, s, i, r) {
    var a = { type: e, props: o, key: s, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++n : r };
    return null == r && null != t.vnode && t.vnode(a), a;
  }
  function p(e) {
    return e.children;
  }
  function f(e, t) {
    (this.props = e), (this.context = t);
  }
  function m(e, t) {
    if (null == t) return e.__ ? m(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? m(e) : null;
  }
  function h(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return h(e);
    }
  }
  function E(e) {
    ((!e.__d && (e.__d = !0) && o.push(e) && !g.__r++) || i !== t.debounceRendering) && ((i = t.debounceRendering) || s)(g);
  }
  function g() {
    for (var e; (g.__r = o.length);)
      (e = o.sort(function (e, t) {
        return e.__v.__b - t.__v.__b;
      })),
        (o = []),
        e.some(function (e) {
          var t, n, o, s, i, r;
          e.__d &&
            ((i = (s = (t = e).__v).__e),
              (r = t.__P) && ((n = []), ((o = c({}, s)).__v = s.__v + 1), b(r, s, o, t.__n, void 0 !== r.ownerSVGElement, null != s.__h ? [i] : null, n, null == i ? m(s) : i, s.__h), S(n, s), s.__e != i && h(s)));
        });
  }
  function C(e, t, n, o, s, i, l, c, u, d) {
    var f,
      h,
      E,
      g,
      C,
      N,
      I,
      v = (o && o.__k) || a,
      w = v.length;
    for (n.__k = [], f = 0; f < t.length; f++)
      if (
        null !=
        (g = n.__k[f] =
          null == (g = t[f]) || "boolean" == typeof g
            ? null
            : "string" == typeof g || "number" == typeof g || "bigint" == typeof g
              ? _(null, g, null, null, g)
              : Array.isArray(g)
                ? _(p, { children: g }, null, null, null)
                : g.__b > 0
                  ? _(g.type, g.props, g.key, null, g.__v)
                  : g)
      ) {
        if (((g.__ = n), (g.__b = n.__b + 1), null === (E = v[f]) || (E && g.key == E.key && g.type === E.type))) v[f] = void 0;
        else
          for (h = 0; h < w; h++) {
            if ((E = v[h]) && g.key == E.key && g.type === E.type) {
              v[h] = void 0;
              break;
            }
            E = null;
          }
        b(e, g, (E = E || r), s, i, l, c, u, d),
          (C = g.__e),
          (h = g.ref) && E.ref != h && (I || (I = []), E.ref && I.push(E.ref, null, g), I.push(h, g.__c || C, g)),
          null != C
            ? (null == N && (N = C), "function" == typeof g.type && g.__k === E.__k ? (g.__d = u = y(g, u, e)) : (u = O(e, g, E, v, C, u)), "function" == typeof n.type && (n.__d = u))
            : u && E.__e == u && u.parentNode != e && (u = m(E));
      }
    for (n.__e = N, f = w; f--;) null != v[f] && ("function" == typeof n.type && null != v[f].__e && v[f].__e == n.__d && (n.__d = m(o, f + 1)), A(v[f], v[f]));
    if (I) for (f = 0; f < I.length; f++) k(I[f], I[++f], I[++f]);
  }
  function y(e, t, n) {
    for (var o, s = e.__k, i = 0; s && i < s.length; i++) (o = s[i]) && ((o.__ = e), (t = "function" == typeof o.type ? y(o, t, n) : O(n, o, o, s, o.__e, t)));
    return t;
  }
  function O(e, t, n, o, s, i) {
    var r, a, l;
    if (void 0 !== t.__d) (r = t.__d), (t.__d = void 0);
    else if (null == n || s != i || null == s.parentNode)
      e: if (null == i || i.parentNode !== e) e.appendChild(s), (r = null);
      else {
        for (a = i, l = 0; (a = a.nextSibling) && l < o.length; l += 2) if (a == s) break e;
        e.insertBefore(s, i), (r = i);
      }
    return void 0 !== r ? r : s.nextSibling;
  }
  function N(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : (e[t] = null == n ? "" : "number" != typeof n || l.test(t) ? n : n + "px");
  }
  function I(e, t, n, o, s) {
    var i;
    e: if ("style" === t)
      if ("string" == typeof n) e.style.cssText = n;
      else {
        if (("string" == typeof o && (e.style.cssText = o = ""), o)) for (t in o) (n && t in n) || N(e.style, t, "");
        if (n) for (t in n) (o && n[t] === o[t]) || N(e.style, t, n[t]);
      }
    else if ("o" === t[0] && "n" === t[1])
      (i = t !== (t = t.replace(/Capture$/, ""))),
        (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + i] = n),
        n ? o || e.addEventListener(t, i ? w : v, i) : e.removeEventListener(t, i ? w : v, i);
    else if ("dangerouslySetInnerHTML" !== t) {
      if (s) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e)
        try {
          e[t] = null == n ? "" : n;
          break e;
        } catch (e) { }
      "function" == typeof n || (null != n && (!1 !== n || ("a" === t[0] && "r" === t[1])) ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
  }
  function v(e) {
    this.l[e.type + !1](t.event ? t.event(e) : e);
  }
  function w(e) {
    this.l[e.type + !0](t.event ? t.event(e) : e);
  }
  function b(n, o, s, i, a, l, d, _, h) {
    var E,
      g,
      y,
      O,
      N,
      v,
      w,
      b,
      S,
      k,
      A,
      T = o.type;
    if (void 0 !== o.constructor) return null;
    null != s.__h && ((h = s.__h), (_ = o.__e = s.__e), (o.__h = null), (l = [_])), (E = t.__b) && E(o);
    try {
      e: if ("function" == typeof T) {
        if (
          ((b = o.props),
            (S = (E = T.contextType) && i[E.__c]),
            (k = E ? (S ? S.props.value : E.__) : i),
            s.__c
              ? (w = (g = o.__c = s.__c).__ = g.__E)
              : ("prototype" in T && T.prototype.render ? (o.__c = g = new T(b, k)) : ((o.__c = g = new f(b, k)), (g.constructor = T), (g.render = B)),
                S && S.sub(g),
                (g.props = b),
                g.state || (g.state = {}),
                (g.context = k),
                (g.__n = i),
                (y = g.__d = !0),
                (g.__h = [])),
            null == g.__s && (g.__s = g.state),
            null != T.getDerivedStateFromProps && (g.__s == g.state && (g.__s = c({}, g.__s)), c(g.__s, T.getDerivedStateFromProps(b, g.__s))),
            (O = g.props),
            (N = g.state),
            y)
        )
          null == T.getDerivedStateFromProps && null != g.componentWillMount && g.componentWillMount(), null != g.componentDidMount && g.__h.push(g.componentDidMount);
        else {
          if (
            (null == T.getDerivedStateFromProps && b !== O && null != g.componentWillReceiveProps && g.componentWillReceiveProps(b, k),
              (!g.__e && null != g.shouldComponentUpdate && !1 === g.shouldComponentUpdate(b, g.__s, k)) || o.__v === s.__v)
          ) {
            (g.props = b),
              (g.state = g.__s),
              o.__v !== s.__v && (g.__d = !1),
              (g.__v = o),
              (o.__e = s.__e),
              (o.__k = s.__k),
              o.__k.forEach(function (e) {
                e && (e.__ = o);
              }),
              g.__h.length && d.push(g);
            break e;
          }
          null != g.componentWillUpdate && g.componentWillUpdate(b, g.__s, k),
            null != g.componentDidUpdate &&
            g.__h.push(function () {
              g.componentDidUpdate(O, N, v);
            });
        }
        (g.context = k),
          (g.props = b),
          (g.state = g.__s),
          (E = t.__r) && E(o),
          (g.__d = !1),
          (g.__v = o),
          (g.__P = n),
          (E = g.render(g.props, g.state, g.context)),
          (g.state = g.__s),
          null != g.getChildContext && (i = c(c({}, i), g.getChildContext())),
          y || null == g.getSnapshotBeforeUpdate || (v = g.getSnapshotBeforeUpdate(O, N)),
          (A = null != E && E.type === p && null == E.key ? E.props.children : E),
          C(n, Array.isArray(A) ? A : [A], o, s, i, a, l, d, _, h),
          (g.base = o.__e),
          (o.__h = null),
          g.__h.length && d.push(g),
          w && (g.__E = g.__ = null),
          (g.__e = !1);
      } else
        null == l && o.__v === s.__v
          ? ((o.__k = s.__k), (o.__e = s.__e))
          : (o.__e = (function (t, n, o, s, i, a, l, c) {
            var d,
              _,
              p,
              f = o.props,
              h = n.props,
              E = n.type,
              g = 0;
            if (("svg" === E && (i = !0), null != a))
              for (; g < a.length; g++)
                if ((d = a[g]) && (d === t || (E ? d.localName == E : 3 == d.nodeType))) {
                  (t = d), (a[g] = null);
                  break;
                }
            if (null == t) {
              if (null === E) return document.createTextNode(h);
              (t = i ? document.createElementNS("http://www.w3.org/2000/svg", E) : document.createElement(E, h.is && h)), (a = null), (c = !1);
            }
            if (null === E) f === h || (c && t.data === h) || (t.data = h);
            else {
              if (((a = a && e.call(t.childNodes)), (_ = (f = o.props || r).dangerouslySetInnerHTML), (p = h.dangerouslySetInnerHTML), !c)) {
                if (null != a) for (f = {}, g = 0; g < t.attributes.length; g++) f[t.attributes[g].name] = t.attributes[g].value;
                (p || _) && ((p && ((_ && p.__html == _.__html) || p.__html === t.innerHTML)) || (t.innerHTML = (p && p.__html) || ""));
              }
              if (
                ((function (e, t, n, o, s) {
                  var i;
                  for (i in n) "children" === i || "key" === i || i in t || I(e, i, null, n[i], o);
                  for (i in t) (s && "function" != typeof t[i]) || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || I(e, i, t[i], n[i], o);
                })(t, h, f, i, c),
                  p)
              )
                n.__k = [];
              else if (((g = n.props.children), C(t, Array.isArray(g) ? g : [g], n, o, s, i && "foreignObject" !== E, a, l, a ? a[0] : o.__k && m(o, 0), c), null != a)) for (g = a.length; g--;) null != a[g] && u(a[g]);
              c ||
                ("value" in h && void 0 !== (g = h.value) && (g !== t.value || ("progress" === E && !g)) && I(t, "value", g, f.value, !1),
                  "checked" in h && void 0 !== (g = h.checked) && g !== t.checked && I(t, "checked", g, f.checked, !1));
            }
            return t;
          })(s.__e, o, s, i, a, l, d, h));
      (E = t.diffed) && E(o);
    } catch (e) {
      (o.__v = null), (h || null != l) && ((o.__e = _), (o.__h = !!h), (l[l.indexOf(_)] = null)), t.__e(e, o, s);
    }
  }
  function S(e, n) {
    t.__c && t.__c(n, e),
      e.some(function (n) {
        try {
          (e = n.__h),
            (n.__h = []),
            e.some(function (e) {
              e.call(n);
            });
        } catch (e) {
          t.__e(e, n.__v);
        }
      });
  }
  function k(e, n, o) {
    try {
      "function" == typeof e ? e(n) : (e.current = n);
    } catch (e) {
      t.__e(e, o);
    }
  }
  function A(e, n, o) {
    var s, i;
    if ((t.unmount && t.unmount(e), (s = e.ref) && ((s.current && s.current !== e.__e) || k(s, null, n)), null != (s = e.__c))) {
      if (s.componentWillUnmount)
        try {
          s.componentWillUnmount();
        } catch (e) {
          t.__e(e, n);
        }
      s.base = s.__P = null;
    }
    if ((s = e.__k)) for (i = 0; i < s.length; i++) s[i] && A(s[i], n, "function" != typeof e.type);
    o || null == e.__e || u(e.__e), (e.__e = e.__d = void 0);
  }
  function B(e, t, n) {
    return this.constructor(e, n);
  }
  function T(n, o, s) {
    var i, a, l;
    t.__ && t.__(n, o),
      (a = (i = "function" == typeof s) ? null : (s && s.__k) || o.__k),
      (l = []),
      b(o, (n = ((!i && s) || o).__k = d(p, null, [n])), a || r, r, void 0 !== o.ownerSVGElement, !i && s ? [s] : a ? null : o.firstChild ? e.call(o.childNodes) : null, l, !i && s ? s : a ? a.__e : o.firstChild, i),
      S(l, n);
  }
  (e = a.slice),
    (t = {
      __e: function (e, t) {
        for (var n, o, s; (t = t.__);)
          if ((n = t.__c) && !n.__)
            try {
              if (((o = n.constructor) && null != o.getDerivedStateFromError && (n.setState(o.getDerivedStateFromError(e)), (s = n.__d)), null != n.componentDidCatch && (n.componentDidCatch(e), (s = n.__d)), s))
                return (n.__E = n);
            } catch (t) {
              e = t;
            }
        throw e;
      },
    }),
    (n = 0),
    (f.prototype.setState = function (e, t) {
      var n;
      (n = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = c({}, this.state))), "function" == typeof e && (e = e(c({}, n), this.props)), e && c(n, e), null != e && this.__v && (t && this.__h.push(t), E(this));
    }),
    (f.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), E(this));
    }),
    (f.prototype.render = p),
    (o = []),
    (s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (g.__r = 0);
  var R,
    P,
    K,
    x = function (e) {
      var t,
        n = e.selector,
        o = e.inline,
        s = e.clientSpecified,
        i = [],
        r = document.currentScript || (t = document.getElementsByTagName("script"))[t.length - 1];
      if (!0 === o) {
        var a = r.parentNode;
        i.push(a);
      }
      return (
        !0 !== s ||
        n ||
        (n = (function (e) {
          var t = e.attributes,
            n = null;
          return (
            Object.keys(t).forEach(function (e) {
              t.hasOwnProperty(e) && "data-mount-in" === t[e].name && (n = t[e].nodeValue);
            }),
            n
          );
        })(r)),
        n &&
        [].forEach.call(document.querySelectorAll(n), function (e) {
          i.push(e);
        }),
        i
      );
    },
    L = function (e, t, n, o, s) {
      t.forEach(function (t) {
        var i = t;
        if (!i._habitat) {
          i._habitat = !0;
          var r =
            (function (e, t) {
              void 0 === t && (t = {});
              var n = e.attributes,
                o = Object.assign({}, t);
              return (
                Object.keys(n).forEach(function (e) {
                  if (n.hasOwnProperty(e)) {
                    var t = n[e].name;
                    if (!t || "string" != typeof t) return !1;
                    var s = t.split(/(data-props?-)/).pop() || "";
                    if (
                      t !==
                      (s = s.replace(/-([a-z])/gi, function (e, t) {
                        return t.toUpperCase();
                      }))
                    ) {
                      var i = n[e].nodeValue;
                      o[s] = i;
                    }
                  }
                }),
                [].forEach.call(e.getElementsByTagName("script"), function (e) {
                  var t = {};
                  if (e.hasAttribute("type")) {
                    if ("text/props" !== e.getAttribute("type") && "application/json" !== e.getAttribute("type")) return;
                    try {
                      t = JSON.parse(e.innerHTML);
                    } catch (e) {
                      throw new Error(e);
                    }
                    Object.assign(o, t);
                  }
                }),
                o
              );
            })(t, s) || s;
          return o && (i.innerHTML = ""), T(d(e, r), i, n);
        }
      });
    },
    M = function (e) {
      var t = e;
      return {
        render: function (e) {
          void 0 === e && (e = {});
          var n = e.selector;
          void 0 === n && (n = null);
          var o = e.inline;
          void 0 === o && (o = !1);
          var s = e.clean;
          void 0 === s && (s = !1);
          var i = e.clientSpecified;
          void 0 === i && (i = !1);
          var r = e.defaultProps;
          void 0 === r && (r = {});
          var a = x({ selector: n, inline: o, clientSpecified: i }),
            l = function () {
              if (a.length > 0) {
                var e = x({ selector: n, inline: o, clientSpecified: i });
                return L(t, e, null, s, r);
              }
            };
          l(), document.addEventListener("DOMContentLoaded", l), document.addEventListener("load", l);
        },
      };
    },
    F = 0,
    z = [],
    G = t.__b,
    U = t.__r,
    Y = t.diffed,
    j = t.__c,
    D = t.unmount;
  function W(e, n) {
    t.__h && t.__h(P, e, F || n), (F = 0);
    var o = P.__H || (P.__H = { __: [], __h: [] });
    return e >= o.__.length && o.__.push({}), o.__[e];
  }
  function $(e) {
    return (F = 1), H(oe, e);
  }
  function H(e, t, n) {
    var o = W(R++, 2);
    return (
      (o.t = e),
      o.__c ||
      ((o.__ = [
        n ? n(t) : oe(void 0, t),
        function (e) {
          var t = o.t(o.__[0], e);
          o.__[0] !== t && ((o.__ = [t, o.__[1]]), o.__c.setState({}));
        },
      ]),
        (o.__c = P)),
      o.__
    );
  }
  function q(e, n) {
    var o = W(R++, 3);
    !t.__s && ne(o.__H, n) && ((o.__ = e), (o.__H = n), P.__H.__h.push(o));
  }
  function Z(e) {
    return (
      (F = 5),
      V(function () {
        return { current: e };
      }, [])
    );
  }
  function V(e, t) {
    var n = W(R++, 7);
    return ne(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
  }
  function J(e, t) {
    return (
      (F = 8),
      V(function () {
        return e;
      }, t)
    );
  }
  function Q() {
    z.forEach(function (e) {
      if (e.__P)
        try {
          e.__H.__h.forEach(ee), e.__H.__h.forEach(te), (e.__H.__h = []);
        } catch (n) {
          (e.__H.__h = []), t.__e(n, e.__v);
        }
    }),
      (z = []);
  }
  (t.__b = function (e) {
    (P = null), G && G(e);
  }),
    (t.__r = function (e) {
      U && U(e), (R = 0);
      var t = (P = e.__c).__H;
      t && (t.__h.forEach(ee), t.__h.forEach(te), (t.__h = []));
    }),
    (t.diffed = function (e) {
      Y && Y(e);
      var n = e.__c;
      n &&
        n.__H &&
        n.__H.__h.length &&
        ((1 !== z.push(n) && K === t.requestAnimationFrame) ||
          (
            (K = t.requestAnimationFrame) ||
            function (e) {
              var t,
                n = function () {
                  clearTimeout(o), X && cancelAnimationFrame(t), setTimeout(e);
                },
                o = setTimeout(n, 100);
              X && (t = requestAnimationFrame(n));
            }
          )(Q)),
        (P = null);
    }),
    (t.__c = function (e, n) {
      n.some(function (e) {
        try {
          e.__h.forEach(ee),
            (e.__h = e.__h.filter(function (e) {
              return !e.__ || te(e);
            }));
        } catch (o) {
          n.some(function (e) {
            e.__h && (e.__h = []);
          }),
            (n = []),
            t.__e(o, e.__v);
        }
      }),
        j && j(e, n);
    }),
    (t.unmount = function (e) {
      D && D(e);
      var n = e.__c;
      if (n && n.__H)
        try {
          n.__H.__.forEach(ee);
        } catch (e) {
          t.__e(e, n.__v);
        }
    });
  var X = "function" == typeof requestAnimationFrame;
  function ee(e) {
    var t = P;
    "function" == typeof e.__c && e.__c(), (P = t);
  }
  function te(e) {
    var t = P;
    (e.__c = e.__()), (P = t);
  }
  function ne(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (t, n) {
        return t !== e[n];
      })
    );
  }
  function oe(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  var se = ({ style: e, contentClass: t, children: n }) => {
    const o = Z();
    return (
      q(() => {
        o.current && T(d("body", { class: t || "" }, n), o.current.contentDocument.documentElement, o.current.contentDocument.body);
      }),
      d("iframe", { style: e, ref: o })
    );
  };
  var ie = ({ onLoad: e = () => { } }) =>
    d(p, null, d("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap", rel: "stylesheet" }), d("link", { onLoad: e, rel: "stylesheet", href: "https://platform.illow.io/banner.css" }));
  const re = (e) => (e.startsWith("http") ? e : `http://${e}`);
  var ae = ({ customization: e, linkClass: t, onCookiePolicy: n }) => {
    const { colors: o, urls: s, settings: i, t: r } = e,
      a = { color: o.buttonBackground, borderBottom: `1px solid ${o.buttonBackground}` };
    return d(
      p,
      null,
      s.privacyPolicy && "" !== s.privacyPolicy && d("a", { href: re(s.privacyPolicy), target: "_blank", class: t, style: a }, r("COOKIE-BANNER.BANNER.LINKS.PRIVACY_POLICY")),
      s.cookiePolicy && "" !== s.cookiePolicy
        ? d("a", { href: re(s.cookiePolicy), target: "_blank", class: t, style: a }, r("COOKIE-BANNER.BANNER.LINKS.COOKIE_POLICY"))
        : d("a", { onClick: n, class: t, style: a }, r("COOKIE-BANNER.BANNER.LINKS.COOKIE_POLICY")),
      s.dsrForm && "" !== s.dsrForm && i.showDSRUrl && d("a", { href: s.dsrForm, target: "_blank", class: t, style: a }, r("COOKIE-BANNER.BANNER.LINKS.DSR_FORM"))
    );
  };
  var le = function (e, t = 1) {
    let n;
    return /^#([A-Fa-f0-9]{3}){1,2}$/.test(e)
      ? ((n = e.substring(1).split("")), 3 == n.length && (n = [n[0], n[0], n[1], n[1], n[2], n[2]]), (n = "0x" + n.join("")), `rgba(${[(n >> 16) & 255, (n >> 8) & 255, 255 & n].join(",")},${t})`)
      : "rgba(0, 0, 0, 0.58)";
  };
  var ce = ({ fontColor: e, logoColor: t }) =>
    d(
      "a",
      { class: "flex items-center no-underline text-xs", href: "https://wibson.io", target: "_blank", style: { color: e } },
      "POWERED BY",
      d(
        "svg",
        { class: "mx-1.5 static", style: { fill: t, width: 90 }, viewBox: "0 0 913 252", xmlns: "http://www.w3.org/2000/svg" },
        d(
          "g",
          null,
          d("path", { d: "M107.37,167.12c-15.09-17.38-27.31-37.03-36.22-58.19-.02-.06-.1-.08-.15-.04-14.95,11.01-33.38,22.88-55.29,34.07,9.57,24.56,23.54,47.22,41.27,66.83,19.13-11.74,36.06-26.17,50.39-42.67Z" }),
          d("path", {
            d:
              "M204.81,49.1c-16.87-8.97-31.54-18.28-44.03-27.17-.07-.05-.15,0-.15,.08v2.63c0,53.12-19.41,103.51-53.25,142.47-14.33,16.5-31.25,30.93-50.39,42.67,14.44,15.97,31.34,29.92,50.39,41.21,19.05-11.28,35.95-25.24,50.39-41.21,35.61-39.39,56.12-91.1,56.12-145.7,0-6.28-3.52-12.04-9.06-14.99Z",
          }),
          d("path", {
            d:
              "M62.85,85.38c-5.68-19.48-8.73-39.88-8.73-60.73v-2.63c0-.08-.09-.13-.15-.08-12.52,8.9-27.21,18.23-44.12,27.21-5.52,2.93-8.98,8.69-8.98,14.94h0c0,18.84,2.51,37.31,7.17,55.07,0,0,0,.01,0,.02,21.69-11.09,39.96-22.85,54.82-33.77v-.03Z",
          }),
          d("path", { d: "M77.94,11.55c-.2,.16-.4,.33-.6,.5v8.6c0,35.28,10.55,79.5,30.04,108.54,19.49-29.04,30.04-73.26,30.04-108.54V12.05c-.2-.17-.4-.33-.6-.49-17.13-14.07-41.74-14.07-58.87,0Z" })
        ),
        d(
          "g",
          null,
          d("path", {
            d:
              "M285.3,44.45c0-12.73,9.96-22.41,22.69-22.41s22.69,9.68,22.69,22.41-9.96,22.41-22.69,22.41-22.69-9.68-22.69-22.41Zm7.22,43.16h30.94c1.39,0,2.52,1.13,2.52,2.52V226.2c0,1.39-1.13,2.52-2.52,2.52h-30.94c-1.39,0-2.52-1.13-2.52-2.52V90.12c0-1.39,1.13-2.52,2.52-2.52Z",
          }),
          d("path", {
            d:
              "M366.14,186.94V32.02c0-1.39,1.13-2.52,2.52-2.52h30.94c1.39,0,2.52,1.13,2.52,2.52V181.13c0,9.13,5.53,14.66,15.49,14.66h6.06c1.39,0,2.52,1.13,2.52,2.52v27.89c0,1.39-1.13,2.52-2.52,2.52h-11.32c-30.44,0-46.21-14.39-46.21-41.78Z",
          }),
          d("path", {
            d:
              "M450.29,186.94V32.02c0-1.39,1.13-2.52,2.52-2.52h30.94c1.39,0,2.52,1.13,2.52,2.52V181.13c0,9.13,5.53,14.66,15.49,14.66h6.06c1.39,0,2.52,1.13,2.52,2.52v27.89c0,1.39-1.13,2.52-2.52,2.52h-11.32c-30.43,0-46.21-14.39-46.21-41.78Z",
          }),
          d("path", {
            d:
              "M525.32,158.16c0-42.06,32.65-73.87,75.81-73.87s75.81,31.82,75.81,73.87-32.65,73.87-75.81,73.87-75.81-31.82-75.81-73.87Zm114.54,0c0-22.13-16.32-39.01-38.73-39.01s-38.74,16.88-38.74,39.01,16.6,39.01,38.74,39.01,38.73-16.88,38.73-39.01Z",
          }),
          d("path", {
            d:
              "M900.83,148.2l-28.45,78.85c-.36,1-1.31,1.66-2.37,1.66h-33.46c-1.1,0-2.07-.71-2.4-1.76l-30.43-96.19-30.43,96.19c-.33,1.05-1.3,1.76-2.4,1.76h-33.47c-1.06,0-2.01-.66-2.37-1.66l-49.09-136.08c-.59-1.64,.62-3.37,2.37-3.37h35.78c1.11,0,2.09,.72,2.41,1.78l28.51,93.95,30.15-93.98c.33-1.04,1.3-1.75,2.4-1.75h33.13c1.09,0,2.06,.71,2.4,1.75l30.15,93.98,13.83-42.89c5.71-20.23,9.47-35.84,7.63-50.03-.19-1.5,1.03-2.82,2.54-2.82h31.69c1.22,0,2.3,.87,2.49,2.08,2.55,16.11-2.12,34.64-10.61,58.51Z",
          })
        )
      )
    );
  var ue = ({ customization: e, onConfig: t, onCookiePolicy: n, onAccept: o }) => {
    const { colors: s, urls: i, settings: r, t: a } = e;
    s.buttonBackground, s.buttonBackground;
    return d(
      "div",
      { class: "hidden md:flex space-between w-10/12" },
      d(
        "div",
        { class: "flex-1" },
        d(
          "div",
          null,
          d("p", { class: "text-lg font-semibold m-0", style: { color: s.buttonBackground } }, a("COOKIE-BANNER.BANNER.TITLE")),
          d("p", { class: "my-2 text-sm", style: { color: s.font } }, a("COOKIE-BANNER.BANNER.MAIN_MESSAGE"))
        ),
        d("div", { class: "mt-3 text-sm" }, d(ae, { customization: e, linkClass: "no-underline mr-4 cursor-pointer", onCookiePolicy: n }))
      ),
      d(
        "div",
        { class: "flex flex-col m-0 mt-4 ml-10" },
        d(
          "div",
          { class: "flex" },
          d(
            "div",
            {
              class: "cursor-pointer inline-flex mr-2 items-center px-6 py-3 border border-transparent text-sm leading-4 font-black rounded-md",
              style: { backgroundColor: le(s.buttonBackground, 0.2), color: s.buttonBackground },
              onClick: t,
            },
            d("span", null, a("COOKIE-BANNER.BANNER.BUTTONS.SET_CUSTOM"))
          ),
          d(
            "div",
            {
              class: "cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-sm leading-4 font-black rounded-md shadow-sm",
              style: { backgroundColor: s.buttonBackground, color: s.background },
              onClick: o,
            },
            d("span", null, a("COOKIE-BANNER.BANNER.BUTTONS.ACCEPT_COOKIES"))
          )
        ),
        r.showPoweredBy && d("div", { class: "w-full flex justify-end mt-3" }, d(ce, { fontColor: s.font, logoColor: s.buttonBackground }))
      )
    );
  };
  var de = ({ customization: e, onConfig: t, onCookiePolicy: n, onAccept: o }) => {
    const { colors: s, urls: i, settings: r, t: a } = e;
    s.buttonBackground, s.buttonBackground;
    return d(
      "div",
      { class: "w-full flex md:hidden flex-col justify-center items-center text-center relative" },
      d("div", { class: "w-full mb-2" }, d("p", { class: "text-lg font-semibold m-0", style: { color: s.buttonBackground } }, a("COOKIE-BANNER.BANNER.TITLE"))),
      d("div", { class: "w-full mb-2" }, d("p", { class: "my-2 text-sm", style: { color: s.font } }, a("COOKIE-BANNER.BANNER.MAIN_MESSAGE"))),
      d(
        "div",
        { class: "w-full flex flex-col items-center sm:flex-row text-sm sm:justify-evenly whitespace-nowrap flex-wrap" },
        d(ae, { customization: e, linkClass: "no-underline mr-4 mb-2 sm:mb-0 cursor-pointer", onCookiePolicy: n })
      ),
      d(
        "div",
        { class: "w-full mt-6" },
        d(
          "div",
          { class: "flex justify-center md:justify-end" },
          d(
            "div",
            {
              class: "cursor-pointer inline-flex mr-2 items-center px-6 py-3 border border-transparent text-sm leading-4 font-black rounded-md",
              style: { backgroundColor: le(s.buttonBackground, 0.2), color: s.buttonBackground },
              onClick: t,
            },
            d("span", null, a("COOKIE-BANNER.BANNER.BUTTONS.SET_CUSTOM"))
          ),
          d(
            "div",
            {
              class: "cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-sm leading-4 font-black rounded-md shadow-sm",
              style: { backgroundColor: s.buttonBackground, color: s.background },
              onClick: o,
            },
            d("span", null, a("COOKIE-BANNER.BANNER.BUTTONS.ACCEPT_COOKIES"))
          )
        ),
        r.showPoweredBy && d("div", { class: "w-full flex justify-center mt-4" }, d(ce, { fontColor: s.font, logoColor: s.buttonBackground }))
      )
    );
  };
  var _e = ({ show: e, ...t }) => d("div", { class: "flex justify-center " + (e ? "" : "hidden") }, d(ue, t), d(de, t));
  var pe = ({ backgroundColor: e, color: t, onClick: n }) =>
    d(
      "div",
      { class: "cursor-pointer" },
      d(
        "div",
        { class: "flex justify-center h-7 w-7 items-center p-1 rounded-md", style: { backgroundColor: e, color: t }, onClick: n },
        d(
          "svg",
          { class: "h-4 w-4", viewBox: "0 0 352 512", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          d(
            "g",
            { id: "times-solid", "clip-path": "url(#clip0)" },
            d("path", {
              id: "Vector",
              d:
                "M242.72 256L342.79 155.93C355.07 143.65 355.07 123.74 342.79 111.45L320.55 89.21C308.27 76.93 288.36 76.93 276.07 89.21L176 189.28L75.93 89.21C63.65 76.93 43.74 76.93 31.45 89.21L9.21 111.45C-3.07 123.73 -3.07 143.64 9.21 155.93L109.28 256L9.21 356.07C-3.07 368.35 -3.07 388.26 9.21 400.55L31.45 422.79C43.73 435.07 63.65 435.07 75.93 422.79L176 322.72L276.07 422.79C288.35 435.07 308.27 435.07 320.55 422.79L342.79 400.55C355.07 388.27 355.07 368.36 342.79 356.07L242.72 256Z",
              fill: t,
            })
          ),
          d("defs", null, d("clipPath", { id: "clip0" }, d("rect", { width: "352", height: "512", fill: "white" })))
        )
      )
    );
  const fe = ({ color: e, opened: t }) =>
    d(
      "svg",
      { class: "transform h-3 w-3 mr-1 mt-1 " + (t ? "rotate-180" : ""), viewBox: "0 0 448 512", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      d("path", {
        d:
          "M207.029 381.476L12.686 187.132C3.313 177.759 3.313 162.563 12.686 153.191L35.353 130.524C44.71 121.167 59.875 121.149 69.254 130.484L224 284.505L378.745 130.484C388.124 121.149 403.289 121.167 412.646 130.524L435.313 153.191C444.686 162.564 444.686 177.76 435.313 187.132L240.971 381.476C231.598 390.848 216.402 390.848 207.029 381.476Z",
        fill: e,
      })
    ),
    me = ({ color: e, active: t, setActive: n, disabled: o }) =>
      d(
        "button",
        {
          class: "relative flex items-center h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
          style: { backgroundColor: t ? e : le(e, 0.1) },
          onClick: () => {
            o || n((e) => !e);
          },
          type: "button",
          role: "switch",
          "aria-checked": "false",
          disabled: o,
        },
        d(
          "span",
          { class: (t ? "translate-x-5" : "translate-x-0") + " pointer-events-none absolute left-0 inline-block h-5 w-5 rounded-full bg-white shadow transform-gpu ring-0 transition ease-in-out duration-200" },
          d(
            "span",
            { class: (t ? "opacity-0" : "opacity-100") + " ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity", "aria-hidden": "true" },
            d(
              "svg",
              { style: { height: 13, width: 13 }, class: "text-gray-400", fill: "none", viewBox: "0 0 12 12" },
              d("path", { d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })
            )
          ),
          d(
            "span",
            { class: (t ? "opacity-100" : "opacity-0") + " ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity", "aria-hidden": "true" },
            d(
              "svg",
              { style: { height: 13, width: 13 }, class: "text-indigo-600", fill: "currentColor", viewBox: "0 0 12 12" },
              d("path", {
                d:
                  "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z",
              })
            )
          )
        )
      );
  var he = ({ customization: e, category: t, active: n, setActive: o, disabled: s }) => {
    const [i, r] = $(!1),
      { colors: a, t: l } = e;
    return d(
      "div",
      { class: "flex items-center justify-between mt-2 flex-wrap w-full relative" },
      d(
        "span",
        { class: "flex items-center cursor-pointer", onClick: () => r((e) => !e) },
        d(fe, { color: a.font, opened: i }),
        d("span", { class: "option-label text-xs font-medium", style: { color: a.font } }, l(`COOKIE-BANNER.CONFIG.COOKIE_TYPE.${t.toUpperCase()}.LABEL`))
      ),
      d(me, { color: a.buttonBackground, active: n, setActive: o, disabled: s }),
      d("span", { class: (i ? "opacity-100" : "opacity-0 hidden") + " mt-2 option-info ease-out duration-100 text-xs", style: { color: a.font } }, l(`COOKIE-BANNER.CONFIG.COOKIE_TYPE.${t.toUpperCase()}.DESCRIPTION`))
    );
  };
  var Ee = ({ show: e, customization: t, onSubmit: n, onClose: o }) => {
    const [s, i] = $({ preferences: !1, marketing: !1, statistics: !1 }),
      { colors: r, t: a } = t;
    return d(
      "div",
      { class: "w-full max-w-md flex flex-col mx-auto items-center relative " + (e ? "" : "hidden") },
      d(
        "div",
        { class: "w-full mb-2" },
        d(
          "div",
          { class: "flex justify-between" },
          d("p", { class: "text-lg font-semibold m-0", style: { color: r.buttonBackground } }, a("COOKIE-BANNER.CONFIG.TITLE")),
          d(pe, { backgroundColor: r.buttonBackground, color: r.background, onClick: o })
        )
      ),
      d(
        "div",
        { class: "w-full flex flex-wrap" },
        d(he, { key: "necessary", customization: t, category: "necessary", active: !0, setActive: () => { }, disabled: !0 }),
        ["statistics", "preferences", "marketing"].map((e) => d(he, { key: e, customization: t, category: e, active: s[e], setActive: (t) => i((n) => ({ ...n, [e]: "function" == typeof t ? t(n[e]) : t })) }))
      ),
      d(
        "div",
        { class: "w-full mt-6" },
        d(
          "div",
          { class: "flex justify-center sm:justify-end" },
          d(
            "div",
            {
              class: "cursor-pointer inline-flex mr-2 items-center px-3 py-2 sm:px-2 lg:px-6 lg:py-3 border border-transparent text-sm leading-4 font-black rounded-md",
              style: { backgroundColor: le(r.buttonBackground, 0.2), color: r.buttonBackground },
              onClick: () => n(),
            },
            d("span", { class: "text-center" }, a("COOKIE-BANNER.CONFIG.BUTTONS.ACCEPT_ALL_COOKIES"))
          ),
          d(
            "div",
            {
              class: "cursor-pointer inline-flex items-center px-3 py-2 sm:px-2 lg:px-6 lg:py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm",
              style: { backgroundColor: r.buttonBackground, color: r.background },
              onClick: () => n(s),
            },
            d("span", { class: "text-center" }, a("COOKIE-BANNER.CONFIG.BUTTONS.SUBMIT"))
          )
        ),
        d("div", { class: "w-full flex justify-center mt-4" }, d(ce, { fontColor: r.font, logoColor: r.buttonBackground }))
      )
    );
  };
  const ge = "https://api.platform.illow.io/public";
  const Ce = ge.replace(/\/$/, ""),
    ye = (e, t, n, o) => {
      const s = t || o ? "" : "deprecated/",
        i = e(t || n || "").replace(/^\//, "");
      return `${Ce}/${s}${i}`;
    },
    Oe = async (e, t, n, o) => {
      const s = ye(e, t, n, o);
      return (await fetch(s)).json();
    };
  var Ne = ({ show: e, siteId: t, companyId: n, customization: o, onClose: s }) => {
    const { colors: i, settings: r, t: a } = o,
      [l, c] = $(""),
      u = Z({ lng: o.settings.lng }).current;
    return (
      q(
        () => (
          (l && u.lng === o.settings.lng) ||
          Oe((e) => `/policy/cookie/${e}?lng=${r.lng}`, t, n, o.previewMode).then((e) => {
            const t = e.policy.replace(/<h4/gi, '<h4 class="font-semibold my-0"').replace(/<p/gi, '<p class="mt-1 mb-4"').replace(/<li/gi, '<li class="mt-3 mb-0"').replace(/<a/gi, `<a style="color:${i.buttonBackground};"`);
            c(t);
          }),
          () => {
            u.lng = o.settings.lng;
          }
        ),
        [o.settings.lng]
      ),
      d(
        "div",
        { class: "transition-all duration-500 ease-in-out " + (e ? "" : "hidden") },
        d(
          "div",
          { class: "w-full mb-2 flex justify-between items-center" },
          d("p", { class: "text-lg font-semibold m-0", style: { color: i.buttonBackground } }, a("COOKIE-BANNER.COOKIE_POLICY.TITLE")),
          d(pe, { backgroundColor: i.buttonBackground, color: i.background, onClick: s })
        ),
        d("div", { class: "w-full h-64 overflow-scroll overflow-x-hidden text-sm", style: { color: i.font }, dangerouslySetInnerHTML: { __html: l } }),
        d("div", { class: "w-full flex justify-end mt-6 mr-4" }, d(ce, { fontColor: i.font, logoColor: i.buttonBackground }))
      )
    );
  };
  const Ie = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    ve = Ie ? 340 : 150,
    we = (e, t) => ("main" === t ? (e ? "w-full" : "w-11/12") : "w-11/12 lg:w-4/12");
  var be = ({ siteId: e, companyId: t, enablePermissions: n, customization: o, toggleBannerWidget: s }) => {
    if (!o) return d(p, null);
    const {
      colors: { background: i, font: r },
      settings: { positioning: a, fullScreen: l },
    } = o,
      [c, u] = $("main"),
      _ = Z(),
      [f, m] = $(-20),
      h = () => {
        _.current && m(_.current.clientHeight);
      };
    q(() => {
      if (_.current && _.current.clientHeight) return _.current.addEventListener("click", h), () => _.current.removeEventListener("click", h);
    }, []),
      q(() => {
        if (-20 !== f) {
          const e = setTimeout(h, 30),
            t = setTimeout(h, 200);
          return () => {
            clearTimeout(e), clearTimeout(t);
          };
        }
      }, [c]);
    const E = J(
      (e) => {
        n(e), s(!1);
      },
      [n, s]
    );
    return d(
      se,
      {
        style: { width: "100vw", height: Math.min(window.innerHeight, f + 20), zIndex: 2147483648, border: 0, position: "fixed", left: 0, ["top" === a ? "top" : "bottom"]: 0 },
        contentClass: "flex " + ("top" === a ? "items-start pt-5" : "items-end py-5"),
      },
      d(ie, { onLoad: () => m(ve) }),
      d(
        "div",
        { ref: _, class: "notranslate w-full flex justify-center" },
        d(
          "div",
          { class: `${we(l, c)} px-10 py-5 mb-1 rounded-2xl shadow-md transition-all duration-500 ease-in-out`, style: { backgroundColor: i, color: r, fontFamily: "'Inter', sans-serif" } },
          d(_e, { show: "main" === c, customization: o, onConfig: () => u("config"), onCookiePolicy: () => u("cookiePolicy"), onAccept: () => E() }),
          d(Ee, { show: "config" === c, customization: o, onSubmit: E, onClose: () => u("main") }),
          d(Ne, { show: "cookiePolicy" === c, siteId: e, companyId: t, customization: o, onClose: () => u("main") })
        )
      )
    );
  };
  var Se = ({ primaryColor: e, secondaryColor: t, size: n }) =>
    d(
      "div",
      { style: { backgroundColor: t, height: n, width: n, padding: 0.25 * n }, className: "flex justify-center items-center rounded-full shadow-lg" },
      d(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", fill: e, viewBox: "0 0 215 252" },
        d("path", { class: "b", d: "M107.5,167.12c-15.09-17.38-27.31-37.03-36.22-58.19-.02-.06-.1-.08-.15-.04-14.95,11.01-33.38,22.88-55.29,34.07,9.57,24.56,23.54,47.22,41.27,66.83,19.13-11.74,36.06-26.17,50.39-42.67Z" }),
        d("path", {
          class: "c",
          d:
            "M204.94,49.1c-16.87-8.97-31.54-18.28-44.03-27.17-.07-.05-.15,0-.15,.08v2.63c0,53.12-19.41,103.51-53.25,142.47-14.33,16.5-31.25,30.93-50.39,42.67,14.44,15.97,31.34,29.92,50.39,41.21,19.05-11.28,35.95-25.24,50.39-41.21,35.61-39.39,56.12-91.1,56.12-145.7,0-6.28-3.52-12.04-9.06-14.99Z",
        }),
        d("path", {
          class: "c",
          d:
            "M62.98,85.38c-5.68-19.48-8.73-39.88-8.73-60.73v-2.63c0-.08-.09-.13-.15-.08-12.52,8.9-27.21,18.23-44.12,27.21-5.52,2.93-8.98,8.69-8.98,14.94h0c0,18.84,2.51,37.31,7.17,55.07,0,0,0,.01,0,.02,21.69-11.09,39.96-22.85,54.82-33.77v-.03Z",
        }),
        d("path", { class: "c", d: "M78.07,11.55c-.2,.16-.4,.33-.6,.5v8.6c0,35.28,10.55,79.5,30.04,108.54,19.49-29.04,30.04-73.26,30.04-108.54V12.05c-.2-.17-.4-.33-.6-.49-17.13-14.07-41.74-14.07-58.87,0Z" })
      )
    );
  const ke = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    Ae = ke ? 60 : 70;
  var Be = ({ toggleBannerWidget: e, customization: t }) =>
    d(
      se,
      { style: { width: Ae, height: Ae, zIndex: 2147483648, border: 0, position: "fixed", left: 10, bottom: 5 }, contentClass: "flex justify-center items-center w-full" },
      d(ie, { onLoad: () => { } }),
      d(
        "div",
        { className: "transition-all duration-500 ease-in-out flex justify-center items-center inline cursor-pointer", onClick: () => e(!0) },
        d(Se, { size: Ae - 10, primaryColor: t.colors.buttonBackground, secondaryColor: t.colors.background })
      )
    );
  var Te = (e, t, n) => {
    const [o, s] = $("none"),
      i = J(
        (t) => {
          -1 !== ["banner", "circled", "none"].indexOf(t) && !1 !== e && s(t);
        },
        [s, e]
      );
    q(() => {
      !e || (!0 === t && !1 === n) ? s("none") : !1 === t ? s("banner") : !0 === n && s("circled");
    }, [e, t, n]);
    const r = J(() => {
      n && i("circled");
    }, [i, n]),
      a = J(
        (e = {}) => {
          !1 !== t || (null == e ? void 0 : e.hideBanner) ? i("none") : i("banner");
        },
        [i, t]
      ),
      l = J(() => {
        i("banner");
      }, [i]),
      c = J(
        (e = {}) => {
          !0 !== n || (null == e ? void 0 : e.hideCircled) ? i("none") : i("circled");
        },
        [i, n]
      ),
      u = J((e) => (e ? l() : c()), [l, c]);
    return (window.illow = { ...window.illow, showCircledWidget: r, hideCircledWidget: a, showBanner: l, hideBanner: c }), (window.wibson = window.illow), { selectedWidget: o, toggleBannerWidget: u, selectAppWidget: i };
  };
  const Re = {
    fullyCompliantBanner: ({ siteId: e, companyId: t, enablePermissions: n, customization: o, isWidgetReady: s, consentWasGiven: i }) => {
      const { selectedWidget: r, toggleBannerWidget: a } = Te(s, i, !!(null == o ? void 0 : o.settings.showCircledWidget));
      return "circled" === r ? d(Be, { toggleBannerWidget: a, customization: o }) : "banner" === r ? d(be, { siteId: e, companyId: t, enablePermissions: n, customization: o, toggleBannerWidget: a }) : d(p, null);
    },
    none: ({ enablePermissions: e, consentWasGiven: t, isWidgetReady: n }) => {
      if (!n) return d(p, null);
      const [o, s] = $(!1);
      return (
        q(() => {
          !0 === t || o || (e({ preferences: !0, marketing: !0, statistics: !0 }, !1), s(!0));
        }, [e, t, o]),
        d(p, null)
      );
    },
  };
  var Pe = (e) => (e && Re[e] ? Re[e] : Re.none);
  var Ke = ({ siteId: e, companyId: t, enablePermissions: n, customization: o, isWidgetReady: s, bannerType: i, consentWasGiven: r }) =>
    d(Pe(i), { siteId: e, companyId: t, enablePermissions: n, customization: o, isWidgetReady: s, consentWasGiven: r });
  const xe = document.currentScript,
    Le = () => {
      const e = document.getElementById("wibson-banner-script") || xe;
      return { scriptTag: e, urlParams: new URLSearchParams(new URL(e.src).search) };
    },
    Me = (e, t, n) => {
      const o = (n || "").replace(/(.[A-Z])/g, (e) => e[0] + "-" + e.slice(1).toLowerCase());
      const s = t.get(n) || e.getAttribute(n),
        i = t.get(o) || e.getAttribute(o),
        r = (e) => "" !== e && "undefined" !== e && null !== e;
      return r(s) ? s : r(i) ? i : void 0;
    };
  var Fe = () => {
    const [e, t] = $({ read: !1 });
    return (
      q(() => {
        if (!e.read) {
          const { scriptTag: e, urlParams: n } = Le();
          t({ siteId: Me(e, n, "siteId"), companyId: Me(e, n, "companyId"), previewMode: "true" === Me(e, n, "previewMode"), read: !0 });
        }
      }, [e.read]),
      e
    );
  };
  const ze = (e, t) => {
    const n = (function () {
      let n;
      return function () {
        const o = e();
        o != n && (t(o), (n = o));
      };
    })();
    return window.setInterval(n, 100);
  },
    Ge = (e) => window.clearInterval(e),
    Ue = async (e) =>
      new Promise((t, n) => {
        try {
          const n = window.setTimeout(() => {
            window.clearTimeout(n), t();
          }, e);
        } catch (e) {
          n(e);
        }
      }),
    Ye = window;
  function je(...e) {
    Ye.dataLayer.push(...e);
  }
  Ye.dataLayer = Ye.dataLayer || [];
  const De = () => {
    const e = /.*(GT{0,1}M{0,1}-[a-zA-Z0-9]+).*/,
      t = [...document.getElementsByTagName("script"), ...document.getElementsByTagName("noscript")];
    for (let n = 0; n < t.length; n++) {
      const o = t[n],
        s = `${o.attributes.src} ${o.innerText} ${o.innerHTML}`;
      if (s.length < 1e3) {
        const t = s.match(e) && s.replace(e, "$1");
        if (t && t.length > 0) return t;
      }
    }
  },
    We = (e, t = !0) => {
      je("consent", t ? "update" : "default", { ad_storage: e.get("marketing") ? "granted" : "denied", ads_data_redaction: e.get("marketing") ? "granted" : "denied", analytics_storage: e.get("statistics") ? "granted" : "denied" });
    };
  class $e {
    updateGoogleConsent(e = !0) {
      We(this.consentStore, e);
    }
    constructor(e) {
      (this.consentStore = e), We(e, !1), je("js", new Date());
      (async (e, t, n, o = 500, s = !0) => {
        let i,
          r = 0,
          a = 0;
        for (; !i && n && a < n;) await Ue((1 + r) * o), (i = await e()), s && r++, a++;
        i && t && t(i);
      })(De, (e) => je("config", e), 12);
    }
  }
  const He = "allow-top-navigation allow-scripts allow-same-origin allow-popups allow-pointer-lock allow-forms",
    qe = (e) => {
      if (!e["wibson-consent-tag"]) {
        const t = e.cloneNode(!0);
        t.sandbox.remove(He), (t["wibson-consent-tag"] = !0), e.parentElement.replaceChild(t, e);
      }
    },
    Ze = (e) => {
      if (e["wibson-consent-tag"]) {
        const t = e.cloneNode(!0);
        t.sandbox.add(He), (t["wibson-consent-tag"] = !1), e.parentElement.replaceChild(t, e);
      }
    };
  class Ve {
    updateIframes() {
      if (this.consentStore.get(this.iframesCategory)) {
        const e = document.getElementsByTagName("iframe");
        for (let t = 0; t < e.length; t++) Ze(e[t]);
        this.stop();
      }
    }
    stop() {
      this.intervalId && window.clearInterval(this.intervalId);
    }
    constructor(e, t = "necessary") {
      (this.consentStore = e),
        (this.iframesCategory = t),
        this.consentStore.get(this.iframesCategory) ||
        (this.intervalId = window.setInterval(() => {
          const e = document.getElementsByTagName("iframe");
          for (let t = 0; t < e.length; t++) qe(e[t]);
        }, 500));
    }
  }
  var Je = { NECESSARY: "necessary", PREFERENCES: "preferences", MARKETING: "marketing", STATISTICS: "statistics", UNCLASSIFIED: "unclassified" };
  const Qe = (e) => !!e || "" === e;
  class Xe {
    wasGiven() {
      return Qe(this.consentStr);
    }
    async storeConsent() {
      try {
        const { "wibson-consent-id": e, ...t } = this.consent,
          n = {
            id: e,
            status: ((e, t) => (e.every(([, e]) => e) ? "accepted" : e.every(([e, n]) => e === Je.NECESSARY || (t && e === Je.UNCLASSIFIED) || !n) ? "rejected" : "partial"))(Object.entries(t), this.permissive),
            categories: t,
          },
          o = await (async (e, t, n, o, s = !1) => {
            const i = ye(e, n, o),
              r = await fetch(i, { body: JSON.stringify(t), headers: { Accept: "application/json", "Content-Type": "application/json" }, method: s ? "PUT" : "POST" });
            try {
              const e = await r.json();
              return { status: r.status, body: e };
            } catch {
              return { status: r.status };
            }
          })((e) => `cookie-consent/${e}`, n, this.siteId, this.companyId, !!e);
        o.status >= 200 && o.status < 300 && this.setId(o.body.id);
      } finally {
        localStorage.setItem(this.consentKey, JSON.stringify(this.consent));
      }
    }
    get(e) {
      return this.consent[e];
    }
    setId(e) {
      this.consent["wibson-consent-id"] = e;
    }
    set(e, t) {
      this.consent[e] = t;
    }
    constructor(e, t, n = !0) {
      (this.consentKey = "wibson-consent"),
        (this.consentStr = localStorage.getItem(this.consentKey)),
        (this.consent = Qe(this.consentStr) ? JSON.parse(this.consentStr) : { "wibson-consent-id": "", [Je.NECESSARY]: !0, [Je.PREFERENCES]: !1, [Je.MARKETING]: !1, [Je.STATISTICS]: !1, [Je.UNCLASSIFIED]: n }),
        (this.siteId = e),
        (this.companyId = t),
        (this.permissive = n);
    }
  }
  class et {
    putInFreezer(e, t) {
      const n = this.freezer[e] || [];
      n.push(t), (this.freezer[e] = n);
    }
    takeCategoryOutOfFreezer(e) {
      const t = this.freezer[e] || [];
      return delete this.freezer[e], t;
    }
    constructor() {
      this.freezer = {};
    }
  }
  class tt {
    async init() {
      if (!this.categoriesByElement) {
        const e = await Oe((e) => `cookies/${e}`, this.siteId, this.companyId);
        if (null == e) throw new Error("No cookie classification");
        this.categoriesByElement = e.reduce((e, { name: t, category: n, cookie_name: o }) => ({ ...e, [o]: n && n.toLowerCase(), [t]: n && n.toLowerCase() }), {});
      }
    }
    getFuzzyCategory(e) {
      const t = Object.keys(this.categoriesByElement).find((t) => e.startsWith(t) && t.length > 2);
      return t ? this.categoriesByElement[t] : void 0;
    }
    getCategoryByElement(e) {
      return this.categoriesByElement ? this.categoriesByElement[e] || this.getFuzzyCategory(e) : void 0;
    }
    constructor(e, t) {
      (this.siteId = e), (this.companyId = t);
    }
  }
  var nt = class {
    restoreCategory(e) {
      this.cookieFreezer.takeCategoryOutOfFreezer(e).map((e) => (document.cookie = e));
      this.localStorageFreezer.takeCategoryOutOfFreezer(e).map(({ key: e, value: t }) => window.localStorage.setItem(e, t));
    }
    freezeExistingLocalStorage() {
      Object.entries(localStorage).forEach(([e, t]) => {
        if (e !== this.consentStore.consentKey) {
          const n = this.categoriesStore.getCategoryByElement(e) || Je.UNCLASSIFIED;
          this.consentStore.get(n) || (this.localStorageFreezer.putInFreezer(n, { key: e, value: t }), window.localStorage.removeItem(e));
        }
      });
    }
    freezeExistingCookies(e) {
      e.split(";")
        .filter((e) => e.length > 0)
        .forEach((e) => {
          const [t] = e
            .split(";")[0]
            .split("=")
            .map((e) => e.trim());
          const n = this.categoriesStore.getCategoryByElement(t) || Je.UNCLASSIFIED;
          this.consentStore.get(n) ||
            (this.cookieFreezer.putInFreezer(n, e.trim()),
              ((e) => {
                const t = "expires=Thu, 01 Jan 1970 00:00:00 UTC;",
                  n = window.location.host.split(".").reduce((e, t, n, o) => {
                    const s = o.slice(n, o.length).join(".");
                    return [...e, s, `.${s}`];
                  }, []);
                (document.cookie = `${e}=; ${t}`),
                  (document.cookie = `${e}=; ${t} path=${window.location.pathname};`),
                  n.forEach((n) => {
                    (document.cookie = `${e}=; ${t} domain=${n};`), (document.cookie = `${e}=; ${t} domain=${n}; path=${window.location.pathname};`);
                  });
              })(t));
        });
    }
    async init() {
      await this.categoriesStore.init();
      const e = ze(
        () => document.cookie,
        // (e) => this.freezeExistingCookies(e)
      ),
        t = ze(
          () => JSON.stringify(Object.keys(localStorage)),
          // () => this.freezeExistingLocalStorage()
        );
      this.eventListeners.push(e), this.eventListeners.push(t);
    }
    destroy() {
      this.eventListeners.map(Ge);
    }
    updateConsentForCategory(e, t) {
      const n = this.consentStore.get(e);
      this.consentStore.set(e, t);
      this.consentStore.get(e) && !n && this.restoreCategory(e);
    }
    async enablePermissions(e, t = !0) {
      (this.permissive ? [...e, { category: Je.UNCLASSIFIED, enabled: !0 }] : e).forEach(({ category: e, enabled: t }) => this.updateConsentForCategory(e, t)),
        this.googleConsentMode.updateGoogleConsent(),
        this.iframeBlocker.updateIframes(),
        t && (await this.consentStore.storeConsent());
    }
    async enableAllPermissions(e = !0) {
      return this.enablePermissions(
        [
          { category: Je.NECESSARY, enabled: !0 },
          { category: Je.PREFERENCES, enabled: !0 },
          { category: Je.MARKETING, enabled: !0 },
          { category: Je.STATISTICS, enabled: !0 },
        ],
        e
      );
    }
    consentWasGiven() {
      return this.consentStore.wasGiven();
    }
    constructor(e, t, n = !0) {
      (this.permissive = n),
        (this.consentStore = new Xe(e, t, n)),
        (this.cookieFreezer = new et()),
        (this.localStorageFreezer = new et()),
        (this.categoriesStore = new tt(e, t)),
        (this.googleConsentMode = new $e(this.consentStore)),
        (this.iframeBlocker = new Ve(this.consentStore)),
        (this.eventListeners = []);
    }
  };
  const ot = { consentManager: void 0, initStatus: "initial", lastOpStatus: "initial" },
    st = (e, t) => ({ ...e, ...t.payload });
  var it = (e, t, n) => {
    var o;
    if (e) return { isConsentManagerReady: !0, enablePermissions: () => { }, consentWasGiven: !1 };
    const [s, i] = H(st, ot);
    q(() => {
      if (!s.consentManager && "initial" === s.initStatus) {
        i({ payload: { initStatus: "loading" } });
        const e = new nt(t, n);
        e.init().then(
          () => i({ payload: { consentManager: e, initStatus: "success" } }),
          (t) => {
            i({ payload: { initStatus: "fail" } }), e.enableAllPermissions(!1), console.error(t);
          }
        );
      }
    }, [s.consentManager, s.initStatus]);
    const r = ({ preferences: e, marketing: t, statistics: n } = { preferences: !0, marketing: !0, statistics: !0 }, o = !0) =>
      ((e, t, n) => {
        e
          ? (t({ payload: { lastOpStatus: "loading" } }),
            n().then(
              () => t({ payload: { lastOpStatus: "success" } }),
              (e) => {
                t({ payload: { lastOpStatus: "fail" } }), console.error(e);
              }
            ))
          : t({ payload: { lastOpStatus: "fail" } });
      })(s.consentManager, i, () =>
        s.consentManager.enablePermissions(
          [
            { category: "necessary", enabled: !0 },
            { category: "preferences", enabled: e },
            { category: "marketing", enabled: t },
            { category: "statistics", enabled: n },
          ],
          !!o
        )
      );
    return (
      (window.illow = { ...window.illow, enablePermissions: r }),
      (window.wibson = window.illow),
      { isConsentManagerReady: "success" === s.initStatus, enablePermissions: r, consentWasGiven: "success" === s.initStatus && (null === (o = s.consentManager) || void 0 === o ? void 0 : o.consentWasGiven()) }
    );
  };
  const rt = {
    en: {
      "COOKIE-BANNER.BANNER.TITLE": "Your Cookie Preferences",
      "COOKIE-BANNER.BANNER.MAIN_MESSAGE": "We use cookies to optimize our website and collect statistic on usage.",
      "COOKIE-BANNER.BANNER.BUTTONS.ACCEPT_COOKIES": "Accept cookies",
      "COOKIE-BANNER.BANNER.BUTTONS.SET_CUSTOM": "Set custom permissions",
      "COOKIE-BANNER.BANNER.LINKS.PRIVACY_POLICY": "Privacy policy",
      "COOKIE-BANNER.BANNER.LINKS.COOKIE_POLICY": "Cookie Policy",
      "COOKIE-BANNER.BANNER.LINKS.DSR_FORM": "Request your data",
      "COOKIE-BANNER.CONFIG.TITLE": "Which cookies do you want to accept?",
      "COOKIE-BANNER.CONFIG.BUTTONS.ACCEPT_ALL_COOKIES": "Accept all cookies",
      "COOKIE-BANNER.CONFIG.BUTTONS.SUBMIT": "Submit permissions",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.NECESSARY.LABEL": "Necessary",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.NECESSARY.DESCRIPTION":
        "These are cookies that are required for the operation of our website. They include, for example, cookies that enable website visitors to log into secure areas of our website, use a shopping cart or make use of e-billing services.",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.MARKETING.LABEL": "Marketing",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.MARKETING.DESCRIPTION":
        "These cookies record users' visits to our website, the pages they have visited and the links they have followed. We will use this information to make our website and the advertising displayed on it more relevant to our website visitors interests.",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.STATISTICS.LABEL": "Statistics",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.STATISTICS.DESCRIPTION":
        "They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.PREFERENCES.LABEL": "Preferences",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.PREFERENCES.DESCRIPTION":
        "These are used to recognize users when they return to our website. This enables us to personalize our content for them and remember their preferences (for example, their choice of language or region).",
      "COOKIE-BANNER.COOKIE_POLICY.TITLE": "Cookie Policy",
    },
    es: {
      "COOKIE-BANNER.BANNER.TITLE": "Preferencias de cookies",
      "COOKIE-BANNER.BANNER.MAIN_MESSAGE": "Usamos cookies para optimizar nuestro sitio web y recopilar estadísticas sobre el uso del mismo.",
      "COOKIE-BANNER.BANNER.BUTTONS.ACCEPT_COOKIES": "Aceptar cookies",
      "COOKIE-BANNER.BANNER.BUTTONS.SET_CUSTOM": "Configurar cookies",
      "COOKIE-BANNER.BANNER.LINKS.PRIVACY_POLICY": "Política de privacidad",
      "COOKIE-BANNER.BANNER.LINKS.COOKIE_POLICY": "Política de Cookies",
      "COOKIE-BANNER.BANNER.LINKS.DSR_FORM": "Solicita tus datos",
      "COOKIE-BANNER.CONFIG.TITLE": "¿Qué cookies desea aceptar?",
      "COOKIE-BANNER.CONFIG.BUTTONS.ACCEPT_ALL_COOKIES": "Aceptar todas",
      "COOKIE-BANNER.CONFIG.BUTTONS.SUBMIT": "Guardar selección",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.NECESSARY.LABEL": "Necesarias",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.NECESSARY.DESCRIPTION":
        "Son cookies necesarias para el funcionamiento de nuestro sitio web. Incluyen, por ejemplo, cookies que permiten a los visitantes del sitio web iniciar sesión en áreas seguras de nuestro sitio web.",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.MARKETING.LABEL": "Marketing",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.MARKETING.DESCRIPTION":
        "Estas cookies registran las visitas de los usuarios a nuestro sitio web, las páginas que han visitado y los enlaces que han seguido. Usaremos esta información para hacer que nuestro sitio web y la publicidad que se muestra en él sean más relevantes para los intereses de los visitantes de nuestro sitio web.",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.STATISTICS.LABEL": "Estadísticas",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.STATISTICS.DESCRIPTION":
        "Nos permiten reconocer y contar el número de visitantes y ver cómo los visitantes se mueven por nuestro sitio web cuando lo utilizan. Esto nos ayuda a mejorar la forma en que funciona nuestro sitio web, por ejemplo, al garantizar que los usuarios encuentren lo que buscan fácilmente.",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.PREFERENCES.LABEL": "Preferencias",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.PREFERENCES.DESCRIPTION":
        "Se utilizan para reconocer a los usuarios cuando regresan a nuestro sitio web. Esto nos permite personalizar nuestro contenido para ellos y recordar sus preferencias (por ejemplo, su elección de idioma o región).",
      "COOKIE-BANNER.COOKIE_POLICY.TITLE": "Política de Cookies",
    },
    pt: {
      "COOKIE-BANNER.BANNER.TITLE": "Suas preferências de cookies",
      "COOKIE-BANNER.BANNER.MAIN_MESSAGE": "Usamos cookies para otimizar nosso site e coletar estatísticas de uso.",
      "COOKIE-BANNER.BANNER.BUTTONS.ACCEPT_COOKIES": "Aceitar cookies",
      "COOKIE-BANNER.BANNER.BUTTONS.SET_CUSTOM": "Permissões personalizadas",
      "COOKIE-BANNER.BANNER.LINKS.PRIVACY_POLICY": "Política de privacidade",
      "COOKIE-BANNER.BANNER.LINKS.COOKIE_POLICY": "Política de Cookies",
      "COOKIE-BANNER.BANNER.LINKS.DSR_FORM": "Solicite seus dados",
      "COOKIE-BANNER.CONFIG.TITLE": "Quais cookies você deseja aceitar?",
      "COOKIE-BANNER.CONFIG.BUTTONS.ACCEPT_ALL_COOKIES": "Aceitar todos os cookies",
      "COOKIE-BANNER.CONFIG.BUTTONS.SUBMIT": "Enviar permissões",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.NECESSARY.LABEL": "Necessários",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.NECESSARY.DESCRIPTION": "São os cookies necessários para o funcionamento do nosso site. Incluem, por exemplo, cookies que permitem aos visitantes navegar em áreas seguras do site.",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.MARKETING.LABEL": "Marketing",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.MARKETING.DESCRIPTION":
        "Os cookies de marketing registram de forma anônima a navegação dos usuários do nosso site. Usaremos essa informação para direcionar nossas campanhas de publicidade a pessoas com maior probabilidade de se interessarem no que temos a oferecer.",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.STATISTICS.LABEL": "Estatísticas",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.STATISTICS.DESCRIPTION":
        "Permitem reconhecer e contar o número de visitantes e ver como estes se movem pelo nosso website quando o utilizam. Isso ajuda a melhorar o funcionamento do nosso website, por exemplo, garantindo aos usuários encontrar facilmente o que estão procurando.",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.PREFERENCES.LABEL": "Preferências",
      "COOKIE-BANNER.CONFIG.COOKIE_TYPE.PREFERENCES.DESCRIPTION":
        "São utilizados para reconhecer os usuários quando estes regressam ao nosso site. Isso permite personalizar nosso conteúdo para os usuários ao recordar as suas preferências, como por exemplo, a sua escolha de idioma ou região.",
      "COOKIE-BANNER.COOKIE_POLICY.TITLE": "Política de Cookies",
    },
  },
    at = (e) => {
      const t = rt[e];
      return (e) => (t[e] ? t[e] : e);
    },
    lt = async (e, t, n, o) => {
      var s, i;
      const { scriptTag: r, urlParams: a } = Le(),
        l = o || Me(r, a, "lang") || (null === (s = navigator.language) || void 0 === s ? void 0 : s.slice(0, 2)) || (null === (i = navigator.languages[0]) || void 0 === i ? void 0 : i.slice(0, 2)) || "pt";
      if (e)
        return {
          bannerType: "fullyCompliantBanner",
          colors: { background: Me(r, a, "backgroundColor"), buttonBackground: Me(r, a, "buttonBackgroundColor"), font: Me(r, a, "fontColor") },
          urls: { privacyPolicy: Me(r, a, "privacyPolicyUrl"), dsrForm: Me(r, a, "dsrFormUrl"), cookiePolicy: Me(r, a, "cookiePolicyUrl") },
          settings: {
            showPoweredBy: "true" === Me(r, a, "showPoweredBy"),
            fullScreen: !("false" === Me(r, a, "fullScreen")),
            positioning: "bottom" === Me(r, a, "positioning") ? "bottom" : "top",
            lng: Me(r, a, "lang") || l,
            showDSRUrl: "true" === Me(r, a, "showDSRUrl"),
            showCircledWidget: "true" === Me(r, a, "showCircledWidget"),
          },
          t: at(l),
          previewMode: !0,
        };
      const c = at(l),
        u = await Oe((e) => `banner-customization/${e}?lng=${l}`, t, n);
      return { ...u.customization, bannerType: u.bannerType, t: c };
    };
  var ct = (e, t, n) => {
    const [o, s] = $({ status: "initial" });
    if (
      (q(() => {
        "initial" === o.status &&
          s(
            () => (
              lt(e, t, n).then(
                (e) => s({ customization: e, status: "success" }),
                (e) => {
                  s({ status: "fail" }), console.error(e);
                }
              ),
              { status: "loading" }
            )
          );
      }, [o.status]),
        e)
    ) {
      const e = () => {
        s({ status: "initial" });
      };
      window.illow = { ...window.illow, refreshCustomization: e };
    }
    return (
      (window.illow = {
        ...window.illow,
        setLanguage: (i) => {
          -1 !== ["en", "es", "pt"].indexOf(i) &&
            "success" === o.status &&
            i !== o.customization.settings.lng &&
            lt(e, t, n, i).then(
              (e) => s({ customization: e, status: "success" }),
              (e) => {
                s({ status: "fail" }), console.error(e);
              }
            );
        },
      }),
      (window.wibson = window.illow),
      { customization: o.customization, status: o.status, isCustomizationReady: !("success" !== o.status || !o.customization) }
    );
  };
  const ut = ({ siteId: e, companyId: t, previewMode: n }) => {
    const { isConsentManagerReady: o, consentWasGiven: s, enablePermissions: i } = it(n, e, t),
      { isCustomizationReady: r, customization: a } = ct(n, e, t),
      l = r && o;
    return d(Ke, { siteId: e, companyId: t, bannerType: null == a ? void 0 : a.bannerType, enablePermissions: i, customization: a, isWidgetReady: l, consentWasGiven: s });
  };
  var dt = () => {
    const { previewMode: e, siteId: t, companyId: n } = Fe();
    return t || n || e ? d(ut, { siteId: t, companyId: n, previewMode: e }) : d(p, null);
  };
  (() => {
    const { render: e } = M(dt),
      t = () => e({ selector: "body" });
    "loading" !== document.readyState ? t() : document.addEventListener("DOMContentLoaded", t);
  })();
})();
//# sourceMappingURL=banner.js.map
