/**
 * Navbar.jsx
 * Premium Glass Navbar (Improved Logo Visibility + Better UI)
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
        label: "For Sponsers / CROs & Investigators",
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
        to: "/ethics",
        Icon: Scale,
      },
    ],
  },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function DropdownMenu({ children, scrolled, isOpen }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl overflow-hidden shadow-2xl border transition-all duration-300 ${
        isOpen
          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
          : "opacity-0 scale-95 pointer-events-none -translate-y-2"
      } ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-white/10"
          : "bg-white border-stone-200"
      }`}
      style={{ transformOrigin: "top center", width: "max-content" }}
    >
      {children}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const toggleMobileExpanded = (label) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/50 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10"
          : "bg-white/95 backdrop-blur-md border-b border-stone-200"
      }`}
    >
      <div className="container-site">
        {/* Increased height for premium look */}
        <div className="flex items-center justify-between h-20 md:grid md:grid-cols-3">
          {/* LOGO */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center gap-3 group">
              {/* Glass Logo Badge */}
              <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-sm border border-white/40 transition-all duration-300 group-hover:shadow-md">
                <img
                  src={LogoURL}
                  alt="MedArc Logo"
                  className="h-14 w-auto object-contain"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>

              {/* Brand Name */}
              <span
                className={`font-display font-semibold text-xl tracking-tight transition-all duration-300 ${
                  scrolled ? "text-white" : "text-stone-900"
                }`}
              >
                MedArc
              </span>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex justify-center items-center">
            <div className="flex items-center gap-10">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 ${
                        scrolled
                          ? "text-white/80 hover:text-white"
                          : "text-stone-700 hover:text-primary-600"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <DropdownMenu
                      scrolled={scrolled}
                      isOpen={openDropdown === link.label}
                    >
                      {link.children.map((child) => {
                        const Icon = child.Icon;
                        return (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            onClick={() => setOpenDropdown(null)}
                            className={({ isActive }) =>
                              `flex items-center gap-3 px-5 py-3 text-sm transition-colors ${
                                scrolled
                                  ? isActive
                                    ? "text-white bg-white/15"
                                    : "text-white/80 hover:bg-white/10"
                                  : isActive
                                    ? "text-primary-600 bg-primary-50"
                                    : "text-stone-700 hover:bg-stone-50"
                              }`
                            }
                          >
                            <Icon size={14} />
                            {child.label}
                          </NavLink>
                        );
                      })}
                    </DropdownMenu>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-all duration-200 ${
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
                ),
              )}
            </div>
          </nav>

          {/* MOBILE BUTTON */}
          <div className="flex justify-end md:hidden">
            <button
              className={`p-2 rounded-lg ${
                scrolled
                  ? "text-white hover:bg-white/10"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden ${
          scrolled
            ? "bg-black/50 backdrop-blur-xl text-white"
            : "bg-white text-stone-900"
        }`}
      >
        <nav className="container-site py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => toggleMobileExpanded(link.label)}
                  className="w-full flex justify-between px-4 py-3 text-sm"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`${
                      mobileExpanded === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all ${
                    mobileExpanded === link.label ? "max-h-56" : "max-h-0"
                  } overflow-hidden`}
                >
                  {link.children.map((child) => {
                    const Icon = child.Icon;
                    return (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-6 py-2 text-sm"
                      >
                        <Icon size={14} />
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
                className="px-4 py-3 text-sm"
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
