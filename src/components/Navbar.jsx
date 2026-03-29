/**
 * Navbar.jsx
 * Adaptive: detects background behind navbar and switches theme accordingly
 */

import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  FileCheck,
  FlaskConical,
  Scale,
} from "lucide-react";

const LogoURL = "https://i.postimg.cc/15qwdk59/med-Arc-Logo.jpg";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    children: [
      {
        label: "For Sponsors / CROs & Investigators",
        to: "/services",
        Icon: FlaskConical,
      },
      {
        label: "Regulatory Affairs & Medical Writing",
        to: "/regulatory",
        Icon: FileCheck,
      },
      {
        label: "Ethics Committee Establishment & Guidance",
        to: "/iec",
        Icon: Scale,
      },
    ],
  },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function DropdownMenu({ items, isOpen, dark, onClose }) {
  return (
    <div
      className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-80 rounded-xl overflow-hidden shadow-xl border transition-all duration-200 ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      } ${
        dark
          ? "bg-stone-900 border-white/10 shadow-black/40"
          : "bg-white border-stone-100 shadow-stone-200/60"
      }`}
    >
      {items.map((child) => {
        const Icon = child.Icon;
        return (
          <NavLink
            key={child.to}
            to={child.to}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-3.5 text-sm font-medium transition-colors border-b last:border-b-0 ${
                dark
                  ? `border-white/8 ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`
                  : `border-stone-50 ${
                      isActive
                        ? "bg-primary-50 text-primary-600"
                        : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                    }`
              }`
            }
          >
            <span
              className={`flex items-center justify-center w-7 h-7 rounded-lg shrink-0 ${
                dark ? "bg-white/10" : "bg-primary-50"
              }`}
            >
              <Icon
                size={13}
                className={dark ? "text-white/70" : "text-primary-500"}
              />
            </span>
            {child.label}
          </NavLink>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [logoError, setLogoError] = useState(false);
  const [dark, setDark] = useState(false);
  const closeTimer = useRef(null);
  const observerRef = useRef(null);

  // Detect background color of the element currently behind the navbar
  useEffect(() => {
    const NAVBAR_HEIGHT = 72;

    const checkBackground = () => {
      // Get the element at the center of the navbar bottom edge
      const el = document.elementFromPoint(
        window.innerWidth / 2,
        NAVBAR_HEIGHT + 1,
      );
      if (!el) return;

      // Walk up the DOM to find the first element with a non-transparent bg
      let target = el;
      while (target && target !== document.body) {
        const bg = window.getComputedStyle(target).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
          // Parse RGB to determine luminance
          const match = bg.match(/\d+/g);
          if (match) {
            const [r, g, b] = match.map(Number);
            // Relative luminance formula
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            setDark(luminance < 0.5);
          }
          return;
        }
        target = target.parentElement;
      }
      // Default: light
      setDark(false);
    };

    checkBackground();
    window.addEventListener("scroll", checkBackground, { passive: true });
    window.addEventListener("resize", checkBackground);

    return () => {
      window.removeEventListener("scroll", checkBackground);
      window.removeEventListener("resize", checkBackground);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        dark
          ? "bg-stone-900/75 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm"
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-[72px]">
          {/* ── LOGO ──────────────────────── */}
          <Link
            to="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="MedArc home"
          >
            <div
              className={`relative flex items-center justify-center rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.03] ${
                dark
                  ? "bg-white shadow-md shadow-black/30 ring-1 ring-white/20"
                  : "bg-white ring-1 ring-stone-200 shadow-sm"
              }`}
              style={{ width: 48, height: 48 }}
            >
              {!logoError ? (
                <img
                  src={LogoURL}
                  alt="MedArc"
                  className="w-full h-full object-cover"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-primary-600 font-bold text-base tracking-tight">
                  MA
                </span>
              )}
            </div>

            <div className="flex flex-col leading-none gap-0.5">
              <span
                className={`text-[17px] font-semibold tracking-tight transition-colors duration-300 ${
                  dark ? "text-white" : "text-stone-900"
                }`}
              >
                MedArc
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.18em] font-medium transition-colors duration-300 ${
                  dark ? "text-white/50" : "text-stone-400"
                }`}
              >
                Clinical Research
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ───────────────── */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      dark
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`opacity-60 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <DropdownMenu
                    items={link.children}
                    isOpen={openDropdown === link.label}
                    dark={dark}
                    onClose={() => setOpenDropdown(null)}
                  />
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      dark
                        ? isActive
                          ? "text-white bg-white/15"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                        : isActive
                          ? "text-primary-600 bg-primary-50"
                          : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          {/* ── CTA + MOBILE TOGGLE ───────── */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className={`hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                dark
                  ? "bg-white text-stone-900 hover:bg-stone-100"
                  : "bg-primary-600 text-white hover:bg-primary-700"
              }`}
            >
              Get in Touch
            </Link>

            <button
              className={`md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors ${
                dark
                  ? "text-white hover:bg-white/10"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ───────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[480px]" : "max-h-0"
        } ${
          dark
            ? "bg-stone-900/95 backdrop-blur-xl border-t border-white/10"
            : "bg-white border-t border-stone-100"
        }`}
      >
        <nav className="container-site py-3 flex flex-col">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() =>
                    setMobileExpanded((p) =>
                      p === link.label ? null : link.label,
                    )
                  }
                  className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    dark
                      ? "text-white/80 hover:bg-white/10"
                      : "text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`opacity-50 transition-transform duration-200 ${
                      mobileExpanded === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileExpanded === link.label ? "max-h-56" : "max-h-0"
                  }`}
                >
                  {link.children.map((child) => {
                    const Icon = child.Icon;
                    return (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 pl-6 pr-3 py-2.5 text-sm transition-colors ${
                            dark
                              ? isActive
                                ? "text-white"
                                : "text-white/60 hover:text-white"
                              : isActive
                                ? "text-primary-600"
                                : "text-stone-500 hover:text-stone-800"
                          }`
                        }
                      >
                        <Icon size={13} />
                        {child.label}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    dark
                      ? isActive
                        ? "text-white bg-white/15"
                        : "text-white/80 hover:bg-white/10"
                      : isActive
                        ? "text-primary-600 bg-primary-50"
                        : "text-stone-700 hover:bg-stone-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}

          <div className="pt-3 pb-2 mt-1 border-t border-stone-100/20">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={`block text-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                dark
                  ? "bg-white text-stone-900 hover:bg-stone-100"
                  : "bg-primary-600 text-white hover:bg-primary-700"
              }`}
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
