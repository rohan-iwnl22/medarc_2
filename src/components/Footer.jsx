/**
 * Footer.jsx
 * Site-wide footer with improved balanced layout.
 */

import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Twitter } from "lucide-react";
import LocMap from "./LocMap";

/* ── Column data ─────────────────────────────────── */
const COMPANY_LINKS = [
  { label: "NDCT", to: "https://cdsco.gov.in/opencms/opencms/en/Home/" },
  {
    label: "ICH GCP",
    to: "https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf",
  },
  { label: "Clinical Trails Gov", to: "https://clinicaltrials.gov/" },
  {
    label: "Clinical Trails India",
    to: "https://ctri.nic.in/Clinicaltrials/login.php",
  },
  { label: "ICMR", to: "https://www.icmr.gov.in/" },
  { label: "Career", to: "/contact" },
  { label: "Gallery", to: "#" },
];

const SERVICE_LINKS = [
  { label: "Clinical Operations", to: "/services" },
  { label: "Regulatory Affairs", to: "/regulatory" },
  { label: "Medical Writing", to: "/services" },
  { label: "GCP Guidance", to: "/services" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
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

            <div className="flex items-center gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-colors"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>

          {/* Useful Links (FIXED) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-white/40 mb-4">
              Useful Links
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    target="_blank"
                    className="text-sm text-white/70 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
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

          {/* Contact */}
          <div className="lg:col-span-1">
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

          {/* Map */}
          <div className="lg:col-span-1">
            <LocMap />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {year} MedArc Clinical Research. All rights reserved.</span>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white/70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
