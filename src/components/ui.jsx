/**
 * ui.jsx
 * Small, reusable UI primitives used across multiple pages.
 * Keeping them here avoids repetition and ensures visual consistency.
 */

import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

/* ── Button ──────────────────────────────────────── */
/**
 * @param {"primary"|"outline"|"accent"|"ghost"} variant
 * @param {string}  to      — internal route (renders <Link>)
 * @param {string}  href    — external URL (renders <a>)
 * @param {boolean} icon    — show trailing arrow icon
 */
export function Button({
  variant = "primary",
  to,
  href,
  icon = false,
  className = "",
  children,
  ...rest
}) {
  const cls =
    {
      primary: "btn-primary",
      outline: "btn-outline",
      accent: "btn-accent",
      ghost: "btn-ghost",
    }[variant] ?? "btn-primary";

  // ✅ ADD THIS BASE FIX
  const base = "inline-flex items-center justify-center text-center";

  const finalClass = `${base} ${cls} ${className}`;

  const inner = (
    <>
      {children}
      {icon && <ArrowRight size={16} />}
    </>
  );

  if (to)
    return (
      <Link to={to} className={finalClass} {...rest}>
        {inner}
      </Link>
    );

  if (href)
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={finalClass}
        {...rest}
      >
        {inner}
      </a>
    );

  return (
    <button className={finalClass} {...rest}>
      {inner}
    </button>
  );
}

/* ── SectionHeader ───────────────────────────────── */
/**
 * Renders a centered section label + title + optional sub-copy.
 * @param {string}  label    — small mono tag above heading
 * @param {string}  title    — main heading text
 * @param {string}  subtitle — optional descriptive line
 * @param {"light"|"dark"} theme
 */
export function SectionHeader({
  label,
  title,
  subtitle,
  theme = "dark",
  className = "",
}) {
  const titleCls = theme === "light" ? "section-title-light" : "section-title";
  const subCls = theme === "light" ? "text-white/60" : "text-stone-500";
  const labelCls =
    theme === "light"
      ? "text-xs font-mono font-semibold uppercase tracking-widest text-primary-300 mb-2"
      : "section-label";

  return (
    <div className={`text-center max-w-2xl mx-auto ${className}`}>
      {label && <p className={labelCls}>{label}</p>}
      <h2 className={titleCls}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${subCls}`}>{subtitle}</p>
      )}
    </div>
  );
}

/* ── StatCard ────────────────────────────────────── */
/**
 * A single KPI number + label.
 */
export function StatCard({ value, label, theme = "dark" }) {
  const valueCls = theme === "light" ? "text-white" : "text-stone-900";
  const labelCls = theme === "light" ? "text-white/60" : "text-stone-500";
  return (
    <div className="text-center">
      <p className={`font-display text-3xl md:text-4xl font-bold ${valueCls}`}>
        {value}
      </p>
      <p className={`text-sm mt-1 ${labelCls}`}>{label}</p>
    </div>
  );
}

/* ── CheckItem ───────────────────────────────────── */
/**
 * Bullet point with a teal check icon.
 */
export function CheckItem({ children, theme = "dark" }) {
  return (
    <li className="check-item">
      <CheckCircle2
        size={16}
        className={`shrink-0 mt-0.5 ${theme === "light" ? "text-primary-300" : "text-primary-500"}`}
      />
      <span className={theme === "light" ? "text-white/80" : "text-stone-600"}>
        {children}
      </span>
    </li>
  );
}

/* ── TagLabel ────────────────────────────────────── */
export function TagLabel({ children }) {
  return <span className="tag-label">{children}</span>;
}

/* ── Divider ─────────────────────────────────────── */
export function Divider({ className = "" }) {
  return <hr className={`border-stone-200 ${className}`} />;
}
