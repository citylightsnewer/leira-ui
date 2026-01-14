import { jsx as e, jsxs as i, Fragment as $ } from "react/jsx-runtime";
import { forwardRef as k, useCallback as p, useEffect as w, useState as x, useRef as j } from "react";
import { Info as z, XCircle as M, AlertTriangle as A, CheckCircle as B, X as y, ChevronDown as E, ChevronLeft as C, ChevronRight as T } from "lucide-react";
function R({ children: t, className: r = "", hover: a = !1, glow: l = !1 }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: `
        bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]
        ${a ? "transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1" : ""}
        ${l ? "animate-pulse-glow" : ""}
        ${r}
      `,
      children: t
    }
  );
}
function ee({ children: t, className: r = "" }) {
  return /* @__PURE__ */ e("div", { className: `px-6 py-4 border-b border-[var(--border-color)] ${r}`, children: t });
}
function F({ children: t, className: r = "" }) {
  return /* @__PURE__ */ e("div", { className: `px-6 py-4 ${r}`, children: t });
}
function re({ children: t, className: r = "" }) {
  return /* @__PURE__ */ e("div", { className: `px-6 py-4 border-t border-[var(--border-color)] ${r}`, children: t });
}
function te({ image: t, title: r, description: a, children: l, className: s = "" }) {
  return /* @__PURE__ */ i(R, { hover: !0, className: `overflow-hidden ${s}`, children: [
    /* @__PURE__ */ i("div", { className: "relative h-48 overflow-hidden", children: [
      /* @__PURE__ */ e(
        "img",
        {
          src: t,
          alt: r,
          className: "w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        }
      ),
      /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent" })
    ] }),
    /* @__PURE__ */ i(F, { children: [
      /* @__PURE__ */ e("h3", { className: "text-lg font-semibold text-[var(--text-primary)] mb-2", children: r }),
      a && /* @__PURE__ */ e("p", { className: "text-sm text-[var(--text-secondary)]", children: a }),
      l
    ] })
  ] });
}
const L = {
  primary: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40",
  secondary: "bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] hover:bg-[var(--bg-hover)] hover:border-violet-500/50",
  outline: "bg-transparent text-violet-400 border border-violet-500/50 hover:bg-violet-500/10 hover:border-violet-400",
  ghost: "bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]",
  danger: "bg-gradient-to-r from-red-600 to-rose-600 text-white hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-500/25",
  success: "bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-500 hover:to-green-500 shadow-lg shadow-emerald-500/25"
}, V = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-4 py-2 text-sm gap-2",
  lg: "px-6 py-3 text-base gap-2.5"
};
function ae({
  children: t,
  variant: r = "primary",
  size: a = "md",
  loading: l = !1,
  icon: s,
  iconPosition: n = "left",
  className: c = "",
  disabled: o,
  ...u
}) {
  return /* @__PURE__ */ i(
    "button",
    {
      className: `
        inline-flex items-center justify-center font-medium rounded-lg
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
        active:scale-[0.98]
        ${L[r]}
        ${V[a]}
        ${c}
      `,
      disabled: o || l,
      ...u,
      children: [
        l && /* @__PURE__ */ i("svg", { className: "animate-spin h-4 w-4", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
          /* @__PURE__ */ e("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] }),
        !l && s && n === "left" && s,
        t,
        !l && s && n === "right" && s
      ]
    }
  );
}
const X = k(
  ({ label: t, error: r, hint: a, leftIcon: l, rightIcon: s, className: n = "", ...c }, o) => /* @__PURE__ */ i("div", { className: "w-full", children: [
    t && /* @__PURE__ */ e("label", { className: "block text-sm font-medium text-[var(--text-secondary)] mb-2", children: t }),
    /* @__PURE__ */ i("div", { className: "relative", children: [
      l && /* @__PURE__ */ e("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]", children: l }),
      /* @__PURE__ */ e(
        "input",
        {
          ref: o,
          className: `
              w-full px-4 py-2.5 rounded-lg
              bg-[var(--bg-secondary)] border border-[var(--border-color)]
              text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
              transition-all duration-200
              focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
              hover:border-[var(--text-muted)]
              disabled:opacity-50 disabled:cursor-not-allowed
              ${l ? "pl-10" : ""}
              ${s ? "pr-10" : ""}
              ${r ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
              ${n}
            `,
          ...c
        }
      ),
      s && /* @__PURE__ */ e("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]", children: s })
    ] }),
    r && /* @__PURE__ */ e("p", { className: "mt-1.5 text-sm text-red-400", children: r }),
    a && !r && /* @__PURE__ */ e("p", { className: "mt-1.5 text-sm text-[var(--text-muted)]", children: a })
  ] })
);
X.displayName = "Input";
const H = k(
  ({ label: t, error: r, hint: a, className: l = "", ...s }, n) => /* @__PURE__ */ i("div", { className: "w-full", children: [
    t && /* @__PURE__ */ e("label", { className: "block text-sm font-medium text-[var(--text-secondary)] mb-2", children: t }),
    /* @__PURE__ */ e(
      "textarea",
      {
        ref: n,
        className: `
            w-full px-4 py-2.5 rounded-lg resize-none
            bg-[var(--bg-secondary)] border border-[var(--border-color)]
            text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
            transition-all duration-200
            focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
            hover:border-[var(--text-muted)]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${r ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
            ${l}
          `,
        ...s
      }
    ),
    r && /* @__PURE__ */ e("p", { className: "mt-1.5 text-sm text-red-400", children: r }),
    a && !r && /* @__PURE__ */ e("p", { className: "mt-1.5 text-sm text-[var(--text-muted)]", children: a })
  ] })
);
H.displayName = "Textarea";
const q = {
  success: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    icon: B,
    iconColor: "text-emerald-400"
  },
  warning: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    icon: A,
    iconColor: "text-amber-400"
  },
  error: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    icon: M,
    iconColor: "text-red-400"
  },
  info: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: z,
    iconColor: "text-blue-400"
  }
};
function oe({
  children: t,
  variant: r = "info",
  title: a,
  dismissible: l = !1,
  onDismiss: s,
  className: n = ""
}) {
  const c = q[r], o = c.icon;
  return /* @__PURE__ */ i(
    "div",
    {
      className: `
        relative flex gap-3 p-4 rounded-lg border
        animate-slide-up
        ${c.bg} ${c.border}
        ${n}
      `,
      role: "alert",
      children: [
        /* @__PURE__ */ e(o, { className: `w-5 h-5 flex-shrink-0 mt-0.5 ${c.iconColor}` }),
        /* @__PURE__ */ i("div", { className: "flex-1 min-w-0", children: [
          a && /* @__PURE__ */ e("h4", { className: `font-medium mb-1 ${c.iconColor}`, children: a }),
          /* @__PURE__ */ e("div", { className: "text-sm text-[var(--text-secondary)]", children: t })
        ] }),
        l && s && /* @__PURE__ */ e(
          "button",
          {
            onClick: s,
            className: "flex-shrink-0 p-1 rounded hover:bg-white/10 transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]",
            children: /* @__PURE__ */ e(y, { className: "w-4 h-4" })
          }
        )
      ]
    }
  );
}
const D = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl"
};
function le({
  isOpen: t,
  onClose: r,
  children: a,
  title: l,
  size: s = "md",
  closeOnOverlay: n = !0,
  closeOnEscape: c = !0
}) {
  const o = p((u) => {
    u.key === "Escape" && c && r();
  }, [c, r]);
  return w(() => (t && (document.addEventListener("keydown", o), document.body.style.overflow = "hidden"), () => {
    document.removeEventListener("keydown", o), document.body.style.overflow = "";
  }), [t, o]), t ? /* @__PURE__ */ i("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in",
        onClick: n ? r : void 0
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: `
          relative w-full ${D[s]}
          bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]
          shadow-2xl shadow-black/50
          animate-scale-in
        `,
        children: [
          l && /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)]", children: [
            /* @__PURE__ */ e("h3", { className: "text-lg font-semibold text-[var(--text-primary)]", children: l }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: r,
                className: "p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors",
                children: /* @__PURE__ */ e(y, { className: "w-5 h-5" })
              }
            )
          ] }),
          !l && /* @__PURE__ */ e(
            "button",
            {
              onClick: r,
              className: "absolute top-4 right-4 p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors",
              children: /* @__PURE__ */ e(y, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ e("div", { className: "p-6", children: a })
        ]
      }
    )
  ] }) : null;
}
function ne({ children: t, className: r = "" }) {
  return /* @__PURE__ */ e("div", { className: `flex items-center justify-end gap-3 pt-4 mt-4 border-t border-[var(--border-color)] ${r}`, children: t });
}
const N = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12"
}, W = {
  sm: "w-1.5 h-1.5",
  md: "w-2 h-2",
  lg: "w-2.5 h-2.5",
  xl: "w-3 h-3"
};
function se({ size: t = "md", variant: r = "default", className: a = "" }) {
  return r === "dots" ? /* @__PURE__ */ e("div", { className: `flex items-center gap-1 ${a}`, children: [0, 1, 2].map((l) => /* @__PURE__ */ e(
    "div",
    {
      className: `
              ${W[t]} rounded-full bg-violet-500
              animate-pulse
            `,
      style: { animationDelay: `${l * 150}ms` }
    },
    l
  )) }) : r === "pulse" ? /* @__PURE__ */ i("div", { className: `relative ${N[t]} ${a}`, children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 rounded-full bg-violet-500/30 animate-ping" }),
    /* @__PURE__ */ e("div", { className: "absolute inset-1 rounded-full bg-violet-500" })
  ] }) : /* @__PURE__ */ i(
    "svg",
    {
      className: `animate-spin ${N[t]} ${a}`,
      viewBox: "0 0 24 24",
      fill: "none",
      children: [
        /* @__PURE__ */ e(
          "circle",
          {
            className: r === "primary" ? "opacity-25" : "opacity-10",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "3"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            className: r === "primary" ? "opacity-100 text-violet-500" : "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  );
}
const G = {
  none: "rounded-none",
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
};
function de({
  width: t,
  height: r = "1rem",
  rounded: a = "md",
  className: l = ""
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: `
        bg-[var(--bg-hover)] animate-pulse
        ${G[a]}
        ${l}
      `,
      style: {
        width: typeof t == "number" ? `${t}px` : t,
        height: typeof r == "number" ? `${r}px` : r
      }
    }
  );
}
const P = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2"
}, _ = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-[var(--bg-card)] border-x-transparent border-b-transparent",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-[var(--bg-card)] border-x-transparent border-t-transparent",
  left: "left-full top-1/2 -translate-y-1/2 border-l-[var(--bg-card)] border-y-transparent border-r-transparent",
  right: "right-full top-1/2 -translate-y-1/2 border-r-[var(--bg-card)] border-y-transparent border-l-transparent"
};
function ie({
  children: t,
  content: r,
  position: a = "top",
  delay: l = 200,
  className: s = ""
}) {
  const [n, c] = x(!1), o = j(null), u = () => {
    o.current = setTimeout(() => c(!0), l);
  }, b = () => {
    o.current && clearTimeout(o.current), c(!1);
  };
  return w(() => () => {
    o.current && clearTimeout(o.current);
  }, []), /* @__PURE__ */ i(
    "div",
    {
      className: `relative inline-block ${s}`,
      onMouseEnter: u,
      onMouseLeave: b,
      onFocus: u,
      onBlur: b,
      children: [
        t,
        n && /* @__PURE__ */ i(
          "div",
          {
            className: `
            absolute z-50 ${P[a]}
            px-3 py-1.5 text-sm text-[var(--text-primary)]
            bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)]
            shadow-lg shadow-black/20
            whitespace-nowrap
            animate-fade-in
          `,
            children: [
              r,
              /* @__PURE__ */ e(
                "div",
                {
                  className: `absolute w-0 h-0 border-4 ${_[a]}`
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function ce({
  items: t,
  defaultActiveId: r,
  onChange: a,
  variant: l = "underline",
  className: s = ""
}) {
  const [n, c] = x(r || t[0]?.id), o = (d) => {
    c(d), a?.(d);
  }, u = (d, v) => {
    const h = "relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-200", f = v ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
    switch (l) {
      case "underline":
        return `${h} ${f} ${d ? "text-violet-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-violet-500 after:rounded-full" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`;
      case "pills":
        return `${h} ${f} rounded-lg ${d ? "bg-violet-500/20 text-violet-400" : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"}`;
      case "boxed":
        return `${h} ${f} rounded-lg ${d ? "bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`;
      default:
        return h;
    }
  };
  return /* @__PURE__ */ i("div", { className: s, children: [
    /* @__PURE__ */ e("div", { className: (() => {
      switch (l) {
        case "underline":
          return "flex border-b border-[var(--border-color)]";
        case "pills":
          return "flex gap-1 p-1 bg-[var(--bg-secondary)] rounded-xl";
        case "boxed":
          return "flex gap-1 p-1 bg-[var(--bg-secondary)] rounded-xl";
        default:
          return "flex";
      }
    })(), children: t.map((d) => /* @__PURE__ */ i(
      "button",
      {
        onClick: () => !d.disabled && o(d.id),
        className: u(n === d.id, !!d.disabled),
        disabled: d.disabled,
        children: [
          d.icon,
          d.label
        ]
      },
      d.id
    )) }),
    /* @__PURE__ */ e("div", { className: "mt-4 animate-fade-in", children: t.find((d) => d.id === n)?.content })
  ] });
}
function ue({
  items: t,
  allowMultiple: r = !1,
  defaultOpenIds: a = [],
  className: l = ""
}) {
  const [s, n] = x(a), c = (o) => {
    n(
      r ? (u) => u.includes(o) ? u.filter((b) => b !== o) : [...u, o] : (u) => u.includes(o) ? [] : [o]
    );
  };
  return /* @__PURE__ */ e("div", { className: `space-y-2 ${l}`, children: t.map((o) => {
    const u = s.includes(o.id);
    return /* @__PURE__ */ i(
      "div",
      {
        className: "rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden",
        children: [
          /* @__PURE__ */ i(
            "button",
            {
              onClick: () => !o.disabled && c(o.id),
              disabled: o.disabled,
              className: `
                w-full flex items-center justify-between gap-4 px-4 py-3
                text-left font-medium transition-colors
                ${o.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[var(--bg-hover)] cursor-pointer"}
                ${u ? "text-violet-400" : "text-[var(--text-primary)]"}
              `,
              children: [
                /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
                  o.icon,
                  /* @__PURE__ */ e("span", { children: o.title })
                ] }),
                /* @__PURE__ */ e(
                  E,
                  {
                    className: `w-5 h-5 text-[var(--text-muted)] transition-transform duration-200 ${u ? "rotate-180" : ""}`
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: `
                overflow-hidden transition-all duration-300 ease-out
                ${u ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
              `,
              children: /* @__PURE__ */ e("div", { className: "px-4 pb-4 text-sm text-[var(--text-secondary)]", children: o.content })
            }
          )
        ]
      },
      o.id
    );
  }) });
}
const J = {
  default: "bg-[var(--bg-hover)] text-[var(--text-secondary)]",
  primary: "bg-violet-500/20 text-violet-400 border border-violet-500/30",
  secondary: "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30",
  success: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  warning: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  error: "bg-red-500/20 text-red-400 border border-red-500/30",
  outline: "bg-transparent text-[var(--text-secondary)] border border-[var(--border-color)]"
}, K = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-xs",
  lg: "px-3 py-1.5 text-sm"
}, Q = {
  default: "bg-[var(--text-muted)]",
  primary: "bg-violet-400",
  secondary: "bg-indigo-400",
  success: "bg-emerald-400",
  warning: "bg-amber-400",
  error: "bg-red-400",
  outline: "bg-[var(--text-secondary)]"
};
function be({
  children: t,
  variant: r = "default",
  size: a = "md",
  dot: l = !1,
  className: s = ""
}) {
  return /* @__PURE__ */ i(
    "span",
    {
      className: `
        inline-flex items-center gap-1.5 font-medium rounded-full
        ${J[r]}
        ${K[a]}
        ${s}
      `,
      children: [
        l && /* @__PURE__ */ e("span", { className: `w-1.5 h-1.5 rounded-full ${Q[r]}` }),
        t
      ]
    }
  );
}
function S({
  items: t,
  autoPlay: r = !1,
  interval: a = 5e3,
  showArrows: l = !0,
  showDots: s = !0,
  variant: n = "default",
  className: c = ""
}) {
  const [o, u] = x(0), [b, d] = x(!1), v = p(() => {
    b || (d(!0), u((m) => (m + 1) % t.length), setTimeout(() => d(!1), 500));
  }, [t.length, b]), h = p(() => {
    b || (d(!0), u((m) => (m - 1 + t.length) % t.length), setTimeout(() => d(!1), 500));
  }, [t.length, b]), f = (m) => {
    b || m === o || (d(!0), u(m), setTimeout(() => d(!1), 500));
  };
  w(() => {
    if (!r) return;
    const m = setInterval(v, a);
    return () => clearInterval(m);
  }, [r, a, v]);
  const I = () => {
    switch (n) {
      case "fade":
        return "transition-opacity duration-500";
      case "slide":
        return "transition-transform duration-500 ease-out";
      default:
        return "transition-all duration-500";
    }
  };
  return /* @__PURE__ */ i("div", { className: `relative overflow-hidden rounded-xl ${c}`, children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "flex ",
        style: n === "slide" ? { transform: `translateX(-${o * 100}%)`, transition: "transform 500ms ease-out" } : void 0,
        children: n === "slide" ? t.map((m) => /* @__PURE__ */ e("div", { className: "w-full flex-shrink-0", children: m.content }, m.id)) : /* @__PURE__ */ e("div", { className: `w-full ${I()}`, children: t[o]?.content })
      }
    ),
    l && t.length > 1 && /* @__PURE__ */ i($, { children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: h,
          className: "absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm",
          "aria-label": "Previous",
          children: /* @__PURE__ */ e(C, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: v,
          className: "absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm",
          "aria-label": "Next",
          children: /* @__PURE__ */ e(T, { className: "w-5 h-5" })
        }
      )
    ] }),
    s && t.length > 1 && /* @__PURE__ */ e("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2", children: t.map((m, g) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => f(g),
        className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${g === o ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"}`,
        "aria-label": `Go to slide ${g + 1}`
      },
      g
    )) })
  ] });
}
const U = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]"
};
function me({
  images: t,
  autoPlay: r = !0,
  interval: a = 4e3,
  showArrows: l = !0,
  showDots: s = !0,
  showCaption: n = !0,
  aspectRatio: c = "video",
  className: o = ""
}) {
  const u = t.map((b, d) => ({
    id: `img-${d}`,
    content: /* @__PURE__ */ i("div", { className: `relative ${U[c]} bg-[var(--bg-secondary)]`, children: [
      /* @__PURE__ */ e(
        "img",
        {
          src: b.src,
          alt: b.alt,
          className: "w-full h-full object-cover"
        }
      ),
      n && b.caption && /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent", children: /* @__PURE__ */ e("p", { className: "text-white text-sm", children: b.caption }) })
    ] })
  }));
  return /* @__PURE__ */ e(
    S,
    {
      items: u,
      autoPlay: r,
      interval: a,
      showArrows: l,
      showDots: s,
      variant: "slide",
      className: o
    }
  );
}
function ve({
  children: t,
  visibleCards: r = 3,
  gap: a = 16,
  showArrows: l = !0,
  className: s = ""
}) {
  const [n, c] = x(0), o = Math.max(0, t.length - r), u = () => {
    c((d) => Math.min(d + 1, o));
  }, b = () => {
    c((d) => Math.max(d - 1, 0));
  };
  return /* @__PURE__ */ i("div", { className: `relative ${s}`, children: [
    /* @__PURE__ */ e("div", { className: "overflow-hidden", children: /* @__PURE__ */ e(
      "div",
      {
        className: "flex transition-transform duration-500 ease-out",
        style: {
          transform: `translateX(-${n * (100 / r + a / r)}%)`,
          gap: `${a}px`
        },
        children: t.map((d, v) => /* @__PURE__ */ e(
          "div",
          {
            className: "flex-shrink-0",
            style: { width: `calc(${100 / r}% - ${a * (r - 1) / r}px)` },
            children: d
          },
          v
        ))
      }
    ) }),
    l && t.length > r && /* @__PURE__ */ i($, { children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: b,
          disabled: n === 0,
          className: "absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg",
          children: /* @__PURE__ */ e(C, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: u,
          disabled: n === o,
          className: "absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg",
          children: /* @__PURE__ */ e(T, { className: "w-5 h-5" })
        }
      )
    ] })
  ] });
}
function he({
  testimonials: t,
  autoPlay: r = !0,
  interval: a = 6e3,
  className: l = ""
}) {
  const s = t.map((n) => ({
    id: n.id,
    content: /* @__PURE__ */ i("div", { className: "p-8 text-center", children: [
      /* @__PURE__ */ e("div", { className: "text-4xl text-violet-400 mb-4", children: '"' }),
      /* @__PURE__ */ e("p", { className: "text-lg text-[var(--text-secondary)] mb-6 italic max-w-2xl mx-auto", children: n.content }),
      /* @__PURE__ */ i("div", { className: "flex items-center justify-center gap-3", children: [
        n.avatar ? /* @__PURE__ */ e("img", { src: n.avatar, alt: n.author, className: "w-12 h-12 rounded-full object-cover" }) : /* @__PURE__ */ e("div", { className: "w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold", children: n.author.charAt(0) }),
        /* @__PURE__ */ i("div", { className: "text-left", children: [
          /* @__PURE__ */ e("p", { className: "font-semibold text-[var(--text-primary)]", children: n.author }),
          n.role && /* @__PURE__ */ e("p", { className: "text-sm text-[var(--text-muted)]", children: n.role })
        ] })
      ] })
    ] })
  }));
  return /* @__PURE__ */ e(
    S,
    {
      items: s,
      autoPlay: r,
      interval: a,
      showArrows: !1,
      showDots: !0,
      variant: "fade",
      className: `bg-[var(--bg-card)] border border-[var(--border-color)] ${l}`
    }
  );
}
export {
  ue as Accordion,
  oe as Alert,
  be as Badge,
  ae as Button,
  R as Card,
  F as CardBody,
  ve as CardCarousel,
  re as CardFooter,
  ee as CardHeader,
  S as Carousel,
  te as ImageCard,
  me as ImageCarousel,
  X as Input,
  le as Modal,
  ne as ModalFooter,
  de as Skeleton,
  se as Spinner,
  ce as Tabs,
  he as TestimonialCarousel,
  H as Textarea,
  ie as Tooltip
};
//# sourceMappingURL=leira-ui.es.js.map
