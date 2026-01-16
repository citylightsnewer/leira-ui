import { jsx as e, jsxs as n, Fragment as w } from "react/jsx-runtime";
import { forwardRef as M, useCallback as g, useEffect as $, useState as h, useRef as j } from "react";
import { Info as z, XCircle as F, AlertTriangle as D, CheckCircle as L, X as y, ChevronDown as k, Menu as O, ChevronLeft as C, ChevronRight as I } from "lucide-react";
function B({ children: r, className: t = "", hover: o = !1, glow: a = !1 }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: `
        bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]
        ${o ? "transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1" : ""}
        ${a ? "animate-pulse-glow" : ""}
        ${t}
      `,
      children: r
    }
  );
}
function oe({ children: r, className: t = "" }) {
  return /* @__PURE__ */ e("div", { className: `px-6 py-4 border-b border-[var(--border-color)] ${t}`, children: r });
}
function X({ children: r, className: t = "" }) {
  return /* @__PURE__ */ e("div", { className: `px-6 py-4 ${t}`, children: r });
}
function le({ children: r, className: t = "" }) {
  return /* @__PURE__ */ e("div", { className: `px-6 py-4 border-t border-[var(--border-color)] ${t}`, children: r });
}
function ne({ image: r, title: t, description: o, children: a, className: s = "" }) {
  return /* @__PURE__ */ n(B, { hover: !0, className: `overflow-hidden ${s}`, children: [
    /* @__PURE__ */ n("div", { className: "relative h-48 overflow-hidden", children: [
      /* @__PURE__ */ e(
        "img",
        {
          src: r,
          alt: t,
          className: "w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        }
      ),
      /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent" })
    ] }),
    /* @__PURE__ */ n(X, { children: [
      /* @__PURE__ */ e("h3", { className: "text-lg font-semibold text-[var(--text-primary)] mb-2", children: t }),
      o && /* @__PURE__ */ e("p", { className: "text-sm text-[var(--text-secondary)]", children: o }),
      a
    ] })
  ] });
}
const A = {
  primary: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40",
  secondary: "bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] hover:bg-[var(--bg-hover)] hover:border-violet-500/50",
  outline: "bg-transparent text-violet-400 border border-violet-500/50 hover:bg-violet-500/10 hover:border-violet-400",
  ghost: "bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]",
  danger: "bg-gradient-to-r from-red-600 to-rose-600 text-white hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-500/25",
  success: "bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-500 hover:to-green-500 shadow-lg shadow-emerald-500/25"
}, E = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-4 py-2 text-sm gap-2",
  lg: "px-6 py-3 text-base gap-2.5"
};
function se({
  children: r,
  variant: t = "primary",
  size: o = "md",
  loading: a = !1,
  icon: s,
  iconPosition: l = "left",
  className: i = "",
  disabled: d,
  ...m
}) {
  return /* @__PURE__ */ n(
    "button",
    {
      className: `
        inline-flex items-center justify-center font-medium rounded-lg
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
        active:scale-[0.98]
        ${A[t]}
        ${E[o]}
        ${i}
      `,
      disabled: d || a,
      ...m,
      children: [
        a && /* @__PURE__ */ n("svg", { className: "animate-spin h-4 w-4", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
          /* @__PURE__ */ e("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] }),
        !a && s && l === "left" && s,
        r,
        !a && s && l === "right" && s
      ]
    }
  );
}
const R = M(
  ({ label: r, error: t, hint: o, leftIcon: a, rightIcon: s, className: l = "", ...i }, d) => /* @__PURE__ */ n("div", { className: "w-full", children: [
    r && /* @__PURE__ */ e("label", { className: "block text-sm font-medium text-[var(--text-secondary)] mb-2", children: r }),
    /* @__PURE__ */ n("div", { className: "relative", children: [
      a && /* @__PURE__ */ e("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]", children: a }),
      /* @__PURE__ */ e(
        "input",
        {
          ref: d,
          className: `
              w-full px-4 py-2.5 rounded-lg
              bg-[var(--bg-secondary)] border border-[var(--border-color)]
              text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
              transition-all duration-200
              focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
              hover:border-[var(--text-muted)]
              disabled:opacity-50 disabled:cursor-not-allowed
              ${a ? "pl-10" : ""}
              ${s ? "pr-10" : ""}
              ${t ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
              ${l}
            `,
          ...i
        }
      ),
      s && /* @__PURE__ */ e("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]", children: s })
    ] }),
    t && /* @__PURE__ */ e("p", { className: "mt-1.5 text-sm text-red-400", children: t }),
    o && !t && /* @__PURE__ */ e("p", { className: "mt-1.5 text-sm text-[var(--text-muted)]", children: o })
  ] })
);
R.displayName = "Input";
const V = M(
  ({ label: r, error: t, hint: o, className: a = "", ...s }, l) => /* @__PURE__ */ n("div", { className: "w-full", children: [
    r && /* @__PURE__ */ e("label", { className: "block text-sm font-medium text-[var(--text-secondary)] mb-2", children: r }),
    /* @__PURE__ */ e(
      "textarea",
      {
        ref: l,
        className: `
            w-full px-4 py-2.5 rounded-lg resize-none
            bg-[var(--bg-secondary)] border border-[var(--border-color)]
            text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
            transition-all duration-200
            focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
            hover:border-[var(--text-muted)]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${t ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
            ${a}
          `,
        ...s
      }
    ),
    t && /* @__PURE__ */ e("p", { className: "mt-1.5 text-sm text-red-400", children: t }),
    o && !t && /* @__PURE__ */ e("p", { className: "mt-1.5 text-sm text-[var(--text-muted)]", children: o })
  ] })
);
V.displayName = "Textarea";
const q = {
  success: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    icon: L,
    iconColor: "text-emerald-400"
  },
  warning: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    icon: D,
    iconColor: "text-amber-400"
  },
  error: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    icon: F,
    iconColor: "text-red-400"
  },
  info: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: z,
    iconColor: "text-blue-400"
  }
};
function de({
  children: r,
  variant: t = "info",
  title: o,
  dismissible: a = !1,
  onDismiss: s,
  className: l = ""
}) {
  const i = q[t], d = i.icon;
  return /* @__PURE__ */ n(
    "div",
    {
      className: `
        relative flex gap-3 p-4 rounded-lg border
        animate-slide-up
        ${i.bg} ${i.border}
        ${l}
      `,
      role: "alert",
      children: [
        /* @__PURE__ */ e(d, { className: `w-5 h-5 flex-shrink-0 mt-0.5 ${i.iconColor}` }),
        /* @__PURE__ */ n("div", { className: "flex-1 min-w-0", children: [
          o && /* @__PURE__ */ e("h4", { className: `font-medium mb-1 ${i.iconColor}`, children: o }),
          /* @__PURE__ */ e("div", { className: "text-sm text-[var(--text-secondary)]", children: r })
        ] }),
        a && s && /* @__PURE__ */ e(
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
const H = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl"
};
function ie({
  isOpen: r,
  onClose: t,
  children: o,
  title: a,
  size: s = "md",
  closeOnOverlay: l = !0,
  closeOnEscape: i = !0
}) {
  const d = g((m) => {
    m.key === "Escape" && i && t();
  }, [i, t]);
  return $(() => (r && (document.addEventListener("keydown", d), document.body.style.overflow = "hidden"), () => {
    document.removeEventListener("keydown", d), document.body.style.overflow = "";
  }), [r, d]), r ? /* @__PURE__ */ n("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in",
        onClick: l ? t : void 0
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        className: `
          relative w-full ${H[s]}
          bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]
          shadow-2xl shadow-black/50
          animate-scale-in
        `,
        children: [
          a && /* @__PURE__ */ n("div", { className: "flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)]", children: [
            /* @__PURE__ */ e("h3", { className: "text-lg font-semibold text-[var(--text-primary)]", children: a }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: t,
                className: "p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors",
                children: /* @__PURE__ */ e(y, { className: "w-5 h-5" })
              }
            )
          ] }),
          !a && /* @__PURE__ */ e(
            "button",
            {
              onClick: t,
              className: "absolute top-4 right-4 p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors",
              children: /* @__PURE__ */ e(y, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ e("div", { className: "p-6", children: o })
        ]
      }
    )
  ] }) : null;
}
function ce({ children: r, className: t = "" }) {
  return /* @__PURE__ */ e("div", { className: `flex items-center justify-end gap-3 pt-4 mt-4 border-t border-[var(--border-color)] ${t}`, children: r });
}
const S = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12"
}, Y = {
  sm: "w-1.5 h-1.5",
  md: "w-2 h-2",
  lg: "w-2.5 h-2.5",
  xl: "w-3 h-3"
};
function me({ size: r = "md", variant: t = "default", className: o = "" }) {
  return t === "dots" ? /* @__PURE__ */ e("div", { className: `flex items-center gap-1 ${o}`, children: [0, 1, 2].map((a) => /* @__PURE__ */ e(
    "div",
    {
      className: `
              ${Y[r]} rounded-full bg-violet-500
              animate-pulse
            `,
      style: { animationDelay: `${a * 150}ms` }
    },
    a
  )) }) : t === "pulse" ? /* @__PURE__ */ n("div", { className: `relative ${S[r]} ${o}`, children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 rounded-full bg-violet-500/30 animate-ping" }),
    /* @__PURE__ */ e("div", { className: "absolute inset-1 rounded-full bg-violet-500" })
  ] }) : /* @__PURE__ */ n(
    "svg",
    {
      className: `animate-spin ${S[r]} ${o}`,
      viewBox: "0 0 24 24",
      fill: "none",
      children: [
        /* @__PURE__ */ e(
          "circle",
          {
            className: t === "primary" ? "opacity-25" : "opacity-10",
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
            className: t === "primary" ? "opacity-100 text-violet-500" : "opacity-75",
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
function be({
  width: r,
  height: t = "1rem",
  rounded: o = "md",
  className: a = ""
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: `
        bg-[var(--bg-hover)] animate-pulse
        ${G[o]}
        ${a}
      `,
      style: {
        width: typeof r == "number" ? `${r}px` : r,
        height: typeof t == "number" ? `${t}px` : t
      }
    }
  );
}
const P = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2"
}, W = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-[var(--bg-card)] border-x-transparent border-b-transparent",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-[var(--bg-card)] border-x-transparent border-t-transparent",
  left: "left-full top-1/2 -translate-y-1/2 border-l-[var(--bg-card)] border-y-transparent border-r-transparent",
  right: "right-full top-1/2 -translate-y-1/2 border-r-[var(--bg-card)] border-y-transparent border-l-transparent"
};
function ue({
  children: r,
  content: t,
  position: o = "top",
  delay: a = 200,
  className: s = ""
}) {
  const [l, i] = h(!1), d = j(null), m = () => {
    d.current = setTimeout(() => i(!0), a);
  }, u = () => {
    d.current && clearTimeout(d.current), i(!1);
  };
  return $(() => () => {
    d.current && clearTimeout(d.current);
  }, []), /* @__PURE__ */ n(
    "div",
    {
      className: `relative inline-block ${s}`,
      onMouseEnter: m,
      onMouseLeave: u,
      onFocus: m,
      onBlur: u,
      children: [
        r,
        l && /* @__PURE__ */ n(
          "div",
          {
            className: `
            absolute z-50 ${P[o]}
            px-3 py-1.5 text-sm text-[var(--text-primary)]
            bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)]
            shadow-lg shadow-black/20
            whitespace-nowrap
            animate-fade-in
          `,
            children: [
              t,
              /* @__PURE__ */ e(
                "div",
                {
                  className: `absolute w-0 h-0 border-4 ${W[o]}`
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function ve({
  items: r,
  defaultActiveId: t,
  onChange: o,
  variant: a = "underline",
  className: s = ""
}) {
  const [l, i] = h(t || r[0]?.id), d = (c) => {
    i(c), o?.(c);
  }, m = (c, b) => {
    const v = "relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-200", f = b ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
    switch (a) {
      case "underline":
        return `${v} ${f} ${c ? "text-violet-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-violet-500 after:rounded-full" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`;
      case "pills":
        return `${v} ${f} rounded-lg ${c ? "bg-violet-500/20 text-violet-400" : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"}`;
      case "boxed":
        return `${v} ${f} rounded-lg ${c ? "bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`;
      default:
        return v;
    }
  };
  return /* @__PURE__ */ n("div", { className: s, children: [
    /* @__PURE__ */ e("div", { className: (() => {
      switch (a) {
        case "underline":
          return "flex border-b border-[var(--border-color)]";
        case "pills":
          return "flex gap-1 p-1 bg-[var(--bg-secondary)] rounded-xl";
        case "boxed":
          return "flex gap-1 p-1 bg-[var(--bg-secondary)] rounded-xl";
        default:
          return "flex";
      }
    })(), children: r.map((c) => /* @__PURE__ */ n(
      "button",
      {
        onClick: () => !c.disabled && d(c.id),
        className: m(l === c.id, !!c.disabled),
        disabled: c.disabled,
        children: [
          c.icon,
          c.label
        ]
      },
      c.id
    )) }),
    /* @__PURE__ */ e("div", { className: "mt-4 animate-fade-in", children: r.find((c) => c.id === l)?.content })
  ] });
}
function xe({
  items: r,
  allowMultiple: t = !1,
  defaultOpenIds: o = [],
  className: a = ""
}) {
  const [s, l] = h(o), i = (d) => {
    l(
      t ? (m) => m.includes(d) ? m.filter((u) => u !== d) : [...m, d] : (m) => m.includes(d) ? [] : [d]
    );
  };
  return /* @__PURE__ */ e("div", { className: `space-y-2 ${a}`, children: r.map((d) => {
    const m = s.includes(d.id);
    return /* @__PURE__ */ n(
      "div",
      {
        className: "rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden",
        children: [
          /* @__PURE__ */ n(
            "button",
            {
              onClick: () => !d.disabled && i(d.id),
              disabled: d.disabled,
              className: `
                w-full flex items-center justify-between gap-4 px-4 py-3
                text-left font-medium transition-colors
                ${d.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[var(--bg-hover)] cursor-pointer"}
                ${m ? "text-violet-400" : "text-[var(--text-primary)]"}
              `,
              children: [
                /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
                  d.icon,
                  /* @__PURE__ */ e("span", { children: d.title })
                ] }),
                /* @__PURE__ */ e(
                  k,
                  {
                    className: `w-5 h-5 text-[var(--text-muted)] transition-transform duration-200 ${m ? "rotate-180" : ""}`
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
                ${m ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
              `,
              children: /* @__PURE__ */ e("div", { className: "px-4 pb-4 text-sm text-[var(--text-secondary)]", children: d.content })
            }
          )
        ]
      },
      d.id
    );
  }) });
}
function he({
  logo: r,
  items: t,
  variant: o = "default",
  sticky: a = !1,
  className: s = "",
  actions: l
}) {
  const [i, d] = h(!1);
  return /* @__PURE__ */ n(w, { children: [
    /* @__PURE__ */ e(
      "nav",
      {
        className: `
          ${{
          default: "bg-[var(--bg-card)] border-b border-[var(--border-color)]",
          transparent: "bg-transparent",
          bordered: "bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl mx-4 mt-4"
        }[o]}
          ${a ? "sticky top-0 z-40" : ""}
          ${s}
        `,
        children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ n("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: r || /* @__PURE__ */ e("span", { className: "text-xl font-bold gradient-text", children: "Logo" }) }),
          /* @__PURE__ */ e("div", { className: "hidden md:flex items-center gap-1", children: t.map((u) => /* @__PURE__ */ e(_, { item: u }, u.id)) }),
          /* @__PURE__ */ n("div", { className: "flex items-center gap-4", children: [
            l && /* @__PURE__ */ e("div", { className: "hidden md:flex items-center gap-2", children: l }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => d(!i),
                className: "md:hidden p-2 rounded-lg hover:bg-[var(--bg-hover)] text-[var(--text-secondary)]",
                children: i ? /* @__PURE__ */ e(y, { className: "w-5 h-5" }) : /* @__PURE__ */ e(O, { className: "w-5 h-5" })
              }
            )
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ e(J, { items: t, isOpen: i, onClose: () => d(!1) })
  ] });
}
function _({ item: r }) {
  const [t, o] = h(!1);
  return r.children && r.children.length > 0 ? /* @__PURE__ */ n(
    "div",
    {
      className: "relative z-50",
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      children: [
        /* @__PURE__ */ n(
          "button",
          {
            className: `
            flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium
            transition-colors duration-200
            ${r.disabled ? "opacity-50 cursor-not-allowed" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"}
          `,
            disabled: r.disabled,
            children: [
              r.icon,
              r.label,
              /* @__PURE__ */ e(k, { className: `w-4 h-4 transition-transform duration-200 ${t ? "rotate-180" : ""}` })
            ]
          }
        ),
        t && /* @__PURE__ */ e("div", { className: "absolute top-full left-0 mt-1 py-2 min-w-48 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] shadow-xl animate-fade-in z-50", children: r.children.map((a) => /* @__PURE__ */ n(
          "a",
          {
            href: a.href,
            onClick: a.onClick,
            className: "flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors",
            children: [
              a.icon,
              a.label
            ]
          },
          a.id
        )) })
      ]
    }
  ) : /* @__PURE__ */ n(
    "a",
    {
      href: r.href,
      onClick: r.onClick,
      className: `
        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
        transition-colors duration-200
        ${r.disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"}
      `,
      children: [
        r.icon,
        r.label
      ]
    }
  );
}
function J({ items: r, isOpen: t, onClose: o }) {
  return t ? /* @__PURE__ */ n("div", { className: "md:hidden fixed inset-0 z-50", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-sm", onClick: o }),
    /* @__PURE__ */ n("div", { className: "absolute right-0 top-0 h-full w-64 bg-[var(--bg-card)] border-l border-[var(--border-color)] animate-slide-in-right", children: [
      /* @__PURE__ */ n("div", { className: "p-4 border-b border-[var(--border-color)] flex justify-between items-center", children: [
        /* @__PURE__ */ e("span", { className: "font-semibold text-[var(--text-primary)]", children: "Menu" }),
        /* @__PURE__ */ e("button", { onClick: o, className: "p-2 rounded-lg hover:bg-[var(--bg-hover)]", children: /* @__PURE__ */ e(y, { className: "w-5 h-5" }) })
      ] }),
      /* @__PURE__ */ e("nav", { className: "p-4 space-y-1", children: r.map((a) => /* @__PURE__ */ e(K, { item: a }, a.id)) })
    ] })
  ] }) : null;
}
function K({ item: r }) {
  const [t, o] = h(!1);
  return r.children && r.children.length > 0 ? /* @__PURE__ */ n("div", { children: [
    /* @__PURE__ */ n(
      "button",
      {
        onClick: () => o(!t),
        className: "flex items-center justify-between w-full px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]",
        children: [
          /* @__PURE__ */ n("span", { className: "flex items-center gap-3", children: [
            r.icon,
            r.label
          ] }),
          /* @__PURE__ */ e(k, { className: `w-4 h-4 transition-transform ${t ? "rotate-180" : ""}` })
        ]
      }
    ),
    t && /* @__PURE__ */ e("div", { className: "ml-4 mt-1 space-y-1", children: r.children.map((a) => /* @__PURE__ */ n(
      "a",
      {
        href: a.href,
        className: "flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]",
        children: [
          a.icon,
          a.label
        ]
      },
      a.id
    )) })
  ] }) : /* @__PURE__ */ n(
    "a",
    {
      href: r.href,
      onClick: r.onClick,
      className: "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]",
      children: [
        r.icon,
        r.label
      ]
    }
  );
}
function fe({ trigger: r, items: t, position: o = "left", className: a = "" }) {
  const [s, l] = h(!1);
  return /* @__PURE__ */ n("div", { className: `relative inline-block ${a}`, children: [
    /* @__PURE__ */ e("div", { onClick: () => l(!s), children: r }),
    s && /* @__PURE__ */ n(w, { children: [
      /* @__PURE__ */ e("div", { className: "fixed inset-0 z-40", onClick: () => l(!1) }),
      /* @__PURE__ */ e(
        "div",
        {
          className: `
              absolute z-50 mt-2 py-2 min-w-48 bg-[var(--bg-card)] rounded-xl
              border border-[var(--border-color)] shadow-xl animate-fade-in
              ${o === "right" ? "right-0" : "left-0"}
            `,
          children: t.map((i) => /* @__PURE__ */ n(
            "button",
            {
              onClick: () => {
                i.onClick?.(), l(!1);
              },
              disabled: i.disabled,
              className: `
                  flex items-center gap-3 w-full px-4 py-2 text-sm text-left
                  ${i.disabled ? "opacity-50 cursor-not-allowed text-[var(--text-muted)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"}
                `,
              children: [
                i.icon,
                i.label
              ]
            },
            i.id
          ))
        }
      )
    ] })
  ] });
}
function pe({ items: r, header: t, footer: o, collapsed: a = !1, className: s = "" }) {
  return /* @__PURE__ */ n(
    "aside",
    {
      className: `
        flex flex-col h-full bg-[var(--bg-card)] border-r border-[var(--border-color)]
        ${a ? "w-16" : "w-64"}
        transition-all duration-300
        ${s}
      `,
      children: [
        t && /* @__PURE__ */ e("div", { className: "p-4 border-b border-[var(--border-color)]", children: t }),
        /* @__PURE__ */ e("nav", { className: "flex-1 p-4 space-y-1 overflow-y-auto", children: r.map((l) => /* @__PURE__ */ n(
          "a",
          {
            href: l.href,
            onClick: l.onClick,
            className: `
              flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
              transition-colors duration-200
              ${l.disabled ? "opacity-50 cursor-not-allowed" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"}
              ${a ? "justify-center" : ""}
            `,
            title: a ? l.label : void 0,
            children: [
              l.icon,
              !a && /* @__PURE__ */ e("span", { children: l.label })
            ]
          },
          l.id
        )) }),
        o && /* @__PURE__ */ e("div", { className: "p-4 border-t border-[var(--border-color)]", children: o })
      ]
    }
  );
}
function ge({ items: r, separator: t = "/", className: o = "" }) {
  return /* @__PURE__ */ e("nav", { className: `flex items-center gap-2 text-sm ${o}`, children: r.map((a, s) => /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
    s > 0 && /* @__PURE__ */ e("span", { className: "text-[var(--text-muted)]", children: t }),
    a.href && s < r.length - 1 ? /* @__PURE__ */ e("a", { href: a.href, className: "text-[var(--text-secondary)] hover:text-violet-400 transition-colors", children: a.label }) : /* @__PURE__ */ e("span", { className: s === r.length - 1 ? "text-[var(--text-primary)] font-medium" : "text-[var(--text-secondary)]", children: a.label })
  ] }, s)) });
}
function ye({ logo: r, copyright: t, links: o = [], className: a = "" }) {
  return /* @__PURE__ */ e("footer", { className: `bg-[var(--bg-card)] border-t border-[var(--border-color)] ${a}`, children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ n("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ n("div", { className: "flex items-center gap-4", children: [
      r || /* @__PURE__ */ e("span", { className: "text-lg font-bold gradient-text", children: "Logo" }),
      t && /* @__PURE__ */ e("span", { className: "text-sm text-[var(--text-muted)]", children: t })
    ] }),
    o.length > 0 && /* @__PURE__ */ e("nav", { className: "flex flex-wrap items-center gap-6", children: o.map((s, l) => /* @__PURE__ */ e(
      "a",
      {
        href: s.href,
        className: "text-sm text-[var(--text-secondary)] hover:text-violet-400 transition-colors",
        children: s.label
      },
      l
    )) })
  ] }) }) });
}
function Ne({
  logo: r,
  description: t,
  sections: o,
  socialLinks: a = [],
  copyright: s,
  className: l = ""
}) {
  return /* @__PURE__ */ e("footer", { className: `bg-[var(--bg-card)] border-t border-[var(--border-color)] ${l}`, children: /* @__PURE__ */ n("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ n("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ n("div", { className: "lg:col-span-1", children: [
        r || /* @__PURE__ */ e("span", { className: "text-xl font-bold gradient-text", children: "Logo" }),
        t && /* @__PURE__ */ e("p", { className: "mt-4 text-sm text-[var(--text-secondary)] leading-relaxed", children: t }),
        a.length > 0 && /* @__PURE__ */ e("div", { className: "mt-6 flex items-center gap-4", children: a.map((i, d) => /* @__PURE__ */ e(
          "a",
          {
            href: i.href,
            "aria-label": i.label,
            className: "p-2 rounded-lg bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-violet-400 hover:bg-violet-500/10 transition-colors",
            children: i.icon
          },
          d
        )) })
      ] }),
      o.map((i, d) => /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--text-primary)] mb-4", children: i.title }),
        /* @__PURE__ */ e("ul", { className: "space-y-3", children: i.links.map((m, u) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
          "a",
          {
            href: m.href,
            className: "text-sm text-[var(--text-secondary)] hover:text-violet-400 transition-colors",
            children: m.label
          }
        ) }, u)) })
      ] }, d))
    ] }),
    s && /* @__PURE__ */ e("div", { className: "mt-12 pt-8 border-t border-[var(--border-color)]", children: /* @__PURE__ */ e("p", { className: "text-sm text-[var(--text-muted)] text-center", children: s }) })
  ] }) });
}
function we({
  logo: r,
  tagline: t,
  links: o = [],
  socialLinks: a = [],
  copyright: s,
  className: l = ""
}) {
  return /* @__PURE__ */ e("footer", { className: `bg-[var(--bg-card)] border-t border-[var(--border-color)] ${l}`, children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: /* @__PURE__ */ n("div", { className: "flex flex-col items-center text-center", children: [
    r || /* @__PURE__ */ e("span", { className: "text-2xl font-bold gradient-text", children: "Logo" }),
    t && /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-[var(--text-secondary)]", children: t }),
    o.length > 0 && /* @__PURE__ */ e("nav", { className: "mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4", children: o.map((i, d) => /* @__PURE__ */ e(
      "a",
      {
        href: i.href,
        className: "text-sm text-[var(--text-secondary)] hover:text-violet-400 transition-colors",
        children: i.label
      },
      d
    )) }),
    a.length > 0 && /* @__PURE__ */ e("div", { className: "mt-8 flex items-center gap-4", children: a.map((i, d) => /* @__PURE__ */ e(
      "a",
      {
        href: i.href,
        "aria-label": i.label,
        className: "p-2 rounded-lg text-[var(--text-secondary)] hover:text-violet-400 hover:bg-violet-500/10 transition-colors",
        children: i.icon
      },
      d
    )) }),
    s && /* @__PURE__ */ e("p", { className: "mt-8 text-sm text-[var(--text-muted)]", children: s })
  ] }) }) });
}
function $e({
  logo: r,
  title: t = "Suscríbete a nuestro newsletter",
  description: o = "Recibe las últimas novedades directamente en tu bandeja de entrada.",
  inputPlaceholder: a = "tu@email.com",
  buttonText: s = "Suscribirse",
  onSubmit: l,
  sections: i = [],
  copyright: d,
  className: m = ""
}) {
  const u = (c) => {
    c.preventDefault();
    const v = new FormData(c.currentTarget).get("email");
    l?.(v);
  };
  return /* @__PURE__ */ e("footer", { className: `bg-[var(--bg-card)] border-t border-[var(--border-color)] ${m}`, children: /* @__PURE__ */ n("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ n("div", { className: "max-w-2xl mx-auto text-center mb-12", children: [
      r || /* @__PURE__ */ e("span", { className: "text-xl font-bold gradient-text", children: "Logo" }),
      /* @__PURE__ */ e("h3", { className: "mt-6 text-xl font-semibold text-[var(--text-primary)]", children: t }),
      /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-[var(--text-secondary)]", children: o }),
      /* @__PURE__ */ n("form", { onSubmit: u, className: "mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "email",
            name: "email",
            placeholder: a,
            required: !0,
            className: "flex-1 px-4 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "submit",
            className: "px-6 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-500/25",
            children: s
          }
        )
      ] })
    ] }),
    i.length > 0 && /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-[var(--border-color)]", children: i.map((c, b) => /* @__PURE__ */ n("div", { children: [
      /* @__PURE__ */ e("h4", { className: "text-sm font-semibold text-[var(--text-primary)] mb-4", children: c.title }),
      /* @__PURE__ */ e("ul", { className: "space-y-3", children: c.links.map((v, f) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
        "a",
        {
          href: v.href,
          className: "text-sm text-[var(--text-secondary)] hover:text-violet-400 transition-colors",
          children: v.label
        }
      ) }, f)) })
    ] }, b)) }),
    d && /* @__PURE__ */ e("div", { className: "pt-8 border-t border-[var(--border-color)]", children: /* @__PURE__ */ e("p", { className: "text-sm text-[var(--text-muted)] text-center", children: d }) })
  ] }) });
}
const Q = {
  default: "bg-[var(--bg-hover)] text-[var(--text-secondary)]",
  primary: "bg-violet-500/20 text-violet-400 border border-violet-500/30",
  secondary: "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30",
  success: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  warning: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  error: "bg-red-500/20 text-red-400 border border-red-500/30",
  outline: "bg-transparent text-[var(--text-secondary)] border border-[var(--border-color)]"
}, U = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-xs",
  lg: "px-3 py-1.5 text-sm"
}, Z = {
  default: "bg-[var(--text-muted)]",
  primary: "bg-violet-400",
  secondary: "bg-indigo-400",
  success: "bg-emerald-400",
  warning: "bg-amber-400",
  error: "bg-red-400",
  outline: "bg-[var(--text-secondary)]"
};
function ke({
  children: r,
  variant: t = "default",
  size: o = "md",
  dot: a = !1,
  className: s = ""
}) {
  return /* @__PURE__ */ n(
    "span",
    {
      className: `
        inline-flex items-center gap-1.5 font-medium rounded-full
        ${Q[t]}
        ${U[o]}
        ${s}
      `,
      children: [
        a && /* @__PURE__ */ e("span", { className: `w-1.5 h-1.5 rounded-full ${Z[t]}` }),
        r
      ]
    }
  );
}
function T({
  items: r,
  autoPlay: t = !1,
  interval: o = 5e3,
  showArrows: a = !0,
  showDots: s = !0,
  variant: l = "default",
  className: i = ""
}) {
  const [d, m] = h(0), [u, c] = h(!1), b = g(() => {
    u || (c(!0), m((x) => (x + 1) % r.length), setTimeout(() => c(!1), 500));
  }, [r.length, u]), v = g(() => {
    u || (c(!0), m((x) => (x - 1 + r.length) % r.length), setTimeout(() => c(!1), 500));
  }, [r.length, u]), f = (x) => {
    u || x === d || (c(!0), m(x), setTimeout(() => c(!1), 500));
  };
  $(() => {
    if (!t) return;
    const x = setInterval(b, o);
    return () => clearInterval(x);
  }, [t, o, b]);
  const p = () => {
    switch (l) {
      case "fade":
        return "transition-opacity duration-500";
      case "slide":
        return "transition-transform duration-500 ease-out";
      default:
        return "transition-all duration-500";
    }
  };
  return /* @__PURE__ */ n("div", { className: `relative overflow-hidden rounded-xl ${i}`, children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "flex ",
        style: l === "slide" ? { transform: `translateX(-${d * 100}%)`, transition: "transform 500ms ease-out" } : void 0,
        children: l === "slide" ? r.map((x) => /* @__PURE__ */ e("div", { className: "w-full flex-shrink-0", children: x.content }, x.id)) : /* @__PURE__ */ e("div", { className: `w-full ${p()}`, children: r[d]?.content })
      }
    ),
    a && r.length > 1 && /* @__PURE__ */ n(w, { children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: v,
          className: "absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm",
          "aria-label": "Previous",
          children: /* @__PURE__ */ e(C, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: b,
          className: "absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm",
          "aria-label": "Next",
          children: /* @__PURE__ */ e(I, { className: "w-5 h-5" })
        }
      )
    ] }),
    s && r.length > 1 && /* @__PURE__ */ e("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2", children: r.map((x, N) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => f(N),
        className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${N === d ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"}`,
        "aria-label": `Go to slide ${N + 1}`
      },
      N
    )) })
  ] });
}
const ee = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]"
};
function Ce({
  images: r,
  autoPlay: t = !0,
  interval: o = 4e3,
  showArrows: a = !0,
  showDots: s = !0,
  showCaption: l = !0,
  aspectRatio: i = "video",
  className: d = ""
}) {
  const m = r.map((u, c) => ({
    id: `img-${c}`,
    content: /* @__PURE__ */ n("div", { className: `relative ${ee[i]} bg-[var(--bg-secondary)]`, children: [
      /* @__PURE__ */ e(
        "img",
        {
          src: u.src,
          alt: u.alt,
          className: "w-full h-full object-cover"
        }
      ),
      l && u.caption && /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent", children: /* @__PURE__ */ e("p", { className: "text-white text-sm", children: u.caption }) })
    ] })
  }));
  return /* @__PURE__ */ e(
    T,
    {
      items: m,
      autoPlay: t,
      interval: o,
      showArrows: a,
      showDots: s,
      variant: "slide",
      className: d
    }
  );
}
function Ie({
  children: r,
  visibleCards: t = 3,
  gap: o = 16,
  showArrows: a = !0,
  className: s = ""
}) {
  const [l, i] = h(0), d = Math.max(0, r.length - t), m = () => {
    i((c) => Math.min(c + 1, d));
  }, u = () => {
    i((c) => Math.max(c - 1, 0));
  };
  return /* @__PURE__ */ n("div", { className: `relative ${s}`, children: [
    /* @__PURE__ */ e("div", { className: "overflow-hidden", children: /* @__PURE__ */ e(
      "div",
      {
        className: "flex transition-transform duration-500 ease-out",
        style: {
          transform: `translateX(-${l * (100 / t + o / t)}%)`,
          gap: `${o}px`
        },
        children: r.map((c, b) => /* @__PURE__ */ e(
          "div",
          {
            className: "flex-shrink-0",
            style: { width: `calc(${100 / t}% - ${o * (t - 1) / t}px)` },
            children: c
          },
          b
        ))
      }
    ) }),
    a && r.length > t && /* @__PURE__ */ n(w, { children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: u,
          disabled: l === 0,
          className: "absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg",
          children: /* @__PURE__ */ e(C, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: m,
          disabled: l === d,
          className: "absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg",
          children: /* @__PURE__ */ e(I, { className: "w-5 h-5" })
        }
      )
    ] })
  ] });
}
function Se({
  testimonials: r,
  autoPlay: t = !0,
  interval: o = 6e3,
  className: a = ""
}) {
  const s = r.map((l) => ({
    id: l.id,
    content: /* @__PURE__ */ n("div", { className: "p-8 text-center", children: [
      /* @__PURE__ */ e("div", { className: "text-4xl text-violet-400 mb-4", children: '"' }),
      /* @__PURE__ */ e("p", { className: "text-lg text-[var(--text-secondary)] mb-6 italic max-w-2xl mx-auto", children: l.content }),
      /* @__PURE__ */ n("div", { className: "flex items-center justify-center gap-3", children: [
        l.avatar ? /* @__PURE__ */ e("img", { src: l.avatar, alt: l.author, className: "w-12 h-12 rounded-full object-cover" }) : /* @__PURE__ */ e("div", { className: "w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold", children: l.author.charAt(0) }),
        /* @__PURE__ */ n("div", { className: "text-left", children: [
          /* @__PURE__ */ e("p", { className: "font-semibold text-[var(--text-primary)]", children: l.author }),
          l.role && /* @__PURE__ */ e("p", { className: "text-sm text-[var(--text-muted)]", children: l.role })
        ] })
      ] })
    ] })
  }));
  return /* @__PURE__ */ e(
    T,
    {
      items: s,
      autoPlay: t,
      interval: o,
      showArrows: !1,
      showDots: !0,
      variant: "fade",
      className: `bg-[var(--bg-card)] border border-[var(--border-color)] ${a}`
    }
  );
}
function Me({
  images: r,
  autoPlay: t = !1,
  interval: o = 4e3,
  className: a = ""
}) {
  const [s, l] = h(0), i = (c) => {
    l(c);
  }, d = g(() => {
    l((c) => (c - 1 + r.length) % r.length);
  }, [r.length]), m = g(() => {
    l((c) => (c + 1) % r.length);
  }, [r.length]);
  $(() => {
    if (!t) return;
    const c = setInterval(m, o);
    return () => clearInterval(c);
  }, [t, o, m]);
  const u = (c) => {
    const b = c - s;
    if (b === 0)
      return {
        transform: "translateX(-50%) scale(1) rotateY(0deg)",
        zIndex: 30,
        opacity: 1,
        left: "50%"
      };
    if (b < 0 || b > r.length / 2) {
      const f = b < 0 ? b : b - r.length, p = Math.max(-2, f);
      return {
        transform: `translateX(calc(-50% + ${p * 180}px)) scale(${0.7 - Math.abs(p) * 0.1}) rotateY(35deg)`,
        zIndex: 20 - Math.abs(p),
        opacity: Math.abs(p) <= 2 ? 0.7 - Math.abs(p) * 0.2 : 0,
        left: "50%"
      };
    }
    const v = Math.min(2, b);
    return {
      transform: `translateX(calc(-50% + ${v * 180}px)) scale(${0.7 - Math.abs(v) * 0.1}) rotateY(-35deg)`,
      zIndex: 20 - Math.abs(v),
      opacity: Math.abs(v) <= 2 ? 0.7 - Math.abs(v) * 0.2 : 0,
      left: "50%"
    };
  };
  return /* @__PURE__ */ n("div", { className: `relative ${a}`, style: { perspective: "1000px" }, children: [
    /* @__PURE__ */ e("div", { className: "relative h-80 md:h-96", children: r.map((c, b) => {
      const v = u(b);
      return v.opacity > 0 ? /* @__PURE__ */ n(
        "button",
        {
          onClick: () => i(b),
          className: "absolute top-0 w-64 md:w-80 h-full rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-out cursor-pointer focus:outline-none",
          style: {
            ...v,
            transformStyle: "preserve-3d"
          },
          children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: c.src,
                alt: c.alt,
                className: "w-full h-full object-cover"
              }
            ),
            b === s && c.caption && /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent", children: /* @__PURE__ */ e("p", { className: "text-white text-sm font-medium", children: c.caption }) }),
            b !== s && /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/30" })
          ]
        },
        b
      ) : null;
    }) }),
    /* @__PURE__ */ e(
      "button",
      {
        onClick: d,
        className: "absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-violet-500/20 hover:border-violet-500/50 transition-all shadow-lg z-40",
        "aria-label": "Previous",
        children: /* @__PURE__ */ e(C, { className: "w-5 h-5" })
      }
    ),
    /* @__PURE__ */ e(
      "button",
      {
        onClick: m,
        className: "absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-violet-500/20 hover:border-violet-500/50 transition-all shadow-lg z-40",
        "aria-label": "Next",
        children: /* @__PURE__ */ e(I, { className: "w-5 h-5" })
      }
    ),
    /* @__PURE__ */ e("div", { className: "flex justify-center gap-2 mt-6", children: r.map((c, b) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => i(b),
        className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${b === s ? "bg-violet-500 w-6" : "bg-[var(--text-muted)] hover:bg-[var(--text-secondary)]"}`,
        "aria-label": `Go to slide ${b + 1}`
      },
      b
    )) })
  ] });
}
export {
  xe as Accordion,
  de as Alert,
  ke as Badge,
  ge as Breadcrumb,
  se as Button,
  B as Card,
  X as CardBody,
  Ie as CardCarousel,
  le as CardFooter,
  oe as CardHeader,
  T as Carousel,
  we as CenteredFooter,
  Me as CoverflowCarousel,
  fe as DropdownMenu,
  ne as ImageCard,
  Ce as ImageCarousel,
  R as Input,
  ie as Modal,
  ce as ModalFooter,
  Ne as MultiColumnFooter,
  he as Navbar,
  $e as NewsletterFooter,
  pe as Sidebar,
  ye as SimpleFooter,
  be as Skeleton,
  me as Spinner,
  ve as Tabs,
  Se as TestimonialCarousel,
  V as Textarea,
  ue as Tooltip
};
//# sourceMappingURL=leira-ui.es.js.map
