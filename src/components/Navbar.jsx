import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const LogoURL = "https://i.postimg.cc/15qwdk59/med-Arc-Logo.jpg";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    children: [
      { label: "Clinical Trial Management", to: "/services" },
      {
        label: "Regulatory Affairs: Global Regulatory Submissions",
        to: "/regulatory",
      },
      { label: "Ethics Committee Services", to: "/iec" },
    ],
  },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-sm">
      <div className="container-site">
        <div className="flex items-center justify-between h-[72px]">
          {/* LOGO - NOW ON LEFT */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 overflow-hidden rounded-xl border">
              {!logoError ? (
                <img
                  src={LogoURL}
                  alt="logo"
                  className="w-full h-full object-cover"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span>MA</span>
              )}
            </div>
            <div className="text-left text-xl">
              <div className="text-[#61ab9b]">MedArc</div>
              <div className="text-xs opacity-60">Clinical Research</div>
            </div>
          </Link>

          {/* DESKTOP NAV - NOW ON RIGHT */}
          <nav className="hidden md:flex items-center gap-4">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium">
                    {link.label}
                    <ChevronDown size={14} />
                  </button>

                  <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-xl w-64 right-0">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-3 hover:bg-gray-100 text-sm"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 text-sm font-medium hover:text-[#61ab9b] transition"
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          {/* MOBILE BUTTON - REMAINS ON RIGHT */}
          <button
            className="md:hidden px-3 py-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        } bg-white border-t`}
      >
        <nav className="flex flex-col p-4 space-y-2 max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === link.label ? null : link.label,
                    )
                  }
                  className="w-full flex justify-between items-center py-2 font-medium"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition ${
                      mobileExpanded === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN */}
                <div
                  className={`pl-4 transition-all ${
                    mobileExpanded === link.label ? "block" : "hidden"
                  }`}
                >
                  {link.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 text-sm text-gray-600 hover:text-black"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="py-2 font-medium"
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
