/**
 * Footer.jsx
 * Site-wide footer with four columns: brand, company links,
 * services links, and contact info. Matches MedArc design.
 */

import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Twitter } from "lucide-react";
import LocMap from "./LocMap";

/* ── Column data ─────────────────────────────────── */
const COMPANY_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Leadership Team", to: "/about" },
  { label: "Careers", to: "/contact" },
  { label: "News & Press", to: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Clinical Operations", to: "/services" },
  { label: "Regulatory Affairs", to: "/regulatory" },
  { label: "Data Management", to: "/services" },
  { label: "Biostatistics", to: "/services" },
  { label: "Pharmacovigilance", to: "/services" },
];

const CONTACT_INFO = [
  {
    icon: MapPin,
    text: "Plot no:25, wardhaman Nagar, Ring Road Kaulkhed Akola 444004",
  },
  { icon: Phone, text: "+91-9359283227" },
  { icon: Mail, text: "latika.medarc@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      {/* ── Main columns ── */}
      <div className="container-site py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-sm font-mono">
                +
              </span>
              <span className="font-display font-bold text-lg tracking-tight">
                MedArc
              </span>
            </Link>

            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Advancing medical research through precision clinical trial
              management and rigorous regulatory compliance.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-md bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-md bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-colors"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-white/40 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              {CONTACT_INFO.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-2 text-sm text-white/70"
                >
                  <Icon
                    size={14}
                    className="mt-0.5 shrink-0 text-primary-400"
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <LocMap />
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {year} MedArc Clinical Research. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="hover:text-white/70 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
