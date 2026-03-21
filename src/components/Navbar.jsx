/**
 * Navbar.jsx
 * Responsive top navigation bar with mobile hamburger menu.
 * Becomes slightly opaque / adds border on scroll.
 */

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

/* Navigation items */
const NAV_LINKS = [
  { label: "Home",       to: "/" },
  { label: "Services",   to: "/services" },
  { label: "Regulatory", to: "/regulatory" },
  { label: "About Us",   to: "/about" },
  { label: "Contact",    to: "/contact" },
];

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  /* Detect scroll to add background blur */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="MedArc home">
            {/* Icon mark */}
            <span className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-sm font-mono shadow-sm group-hover:bg-primary-600 transition-colors">
              +
            </span>
            <span className="font-display font-bold text-lg text-stone-900 tracking-tight">
              MedArc
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary-600 bg-primary-50"
                      : "text-stone-600 hover:text-primary-600 hover:bg-stone-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="btn-primary text-sm py-2 px-5">
              Client Portal
              <ChevronDown size={14} className="-rotate-90" />
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-stone-100" : "max-h-0"
        } bg-white`}
      >
        <nav className="container-site py-3 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary-600 bg-primary-50"
                    : "text-stone-700 hover:bg-stone-50"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-2 justify-center text-sm"
          >
            Client Portal
          </Link>
        </nav>
      </div>
    </header>
  );
}
