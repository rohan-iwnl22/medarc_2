/**
 * Navbar.jsx
 * Dynamic contrast + proper glass effect (fixed readability)
 */

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LogoURL = "https://i.postimg.cc/15qwdk59/med-Arc-Logo.jpg";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Regulatory", to: "/regulatory" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/30 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10"
          : "bg-white"
      }`}
    >
      <div className="container-site">
        <div className="grid grid-cols-3 items-center h-16">
          {/* LEFT: LOGO */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={LogoURL}
                alt="MedArc Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <span
                className={`font-display font-bold text-lg transition-colors ${
                  scrolled ? "text-white" : "text-stone-900"
                }`}
              >
                MedArc
              </span>
            </Link>
          </div>

          {/* CENTER: NAV */}
          <nav className="hidden md:flex justify-center items-center">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-sm transition-all duration-200 ${
                      scrolled
                        ? isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                        : isActive
                          ? "text-primary-600"
                          : "text-stone-700 hover:text-primary-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* RIGHT: MOBILE MENU */}
          <div className="flex justify-end md:hidden">
            <button
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-white hover:bg-white/10"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        } ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl text-white"
            : "bg-white text-stone-900"
        }`}
      >
        <nav className="container-site py-3 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium ${
                  scrolled
                    ? isActive
                      ? "text-white bg-white/10"
                      : "text-white/80 hover:bg-white/10"
                    : isActive
                      ? "text-primary-600 bg-primary-50"
                      : "text-stone-700 hover:bg-stone-50"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
