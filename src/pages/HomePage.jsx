/**
 * HomePage.jsx
 * Revamped: clean hero + proper spacing + visible stats
 */

import React from "react";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  FileCheck2,
  BarChart3,
  ShieldCheck,
  Globe2,
  Cpu,
  ArrowRight,
} from "lucide-react";

import { Button, SectionHeader, StatCard } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Data ───────────────────────── */
const STATS = [
  { value: "2023", label: "Established" },
  { value: "Phase I–IV", label: "Trial Support" },
  { value: "100%", label: "GCP Compliance" },
  { value: "High", label: "Client Retention" },
];

const SERVICES = [
  {
    icon: FlaskConical,
    title: "Clinical Trial Management",
    desc: "End-to-end clinical trial support ensuring coordination, compliance, and patient safety.",
    to: "/services",
  },
  {
    icon: FileCheck2,
    title: "Study Start-Up Services",
    desc: "Efficient study initiation including regulatory approvals and site activation.",
    to: "/regulatory",
  },
  {
    icon: BarChart3,
    title: "Study Close-Out",
    desc: "Accurate documentation, compliance, and proper trial closure.",
    to: "/services",
  },
];

const WHY_ITEMS = [
  {
    icon: FlaskConical,
    title: "Scientific Excellence",
  },
  {
    icon: Globe2,
    title: "Ethical Standards",
  },
  {
    icon: Cpu,
    title: "Efficient Execution",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
  },
];

/* ═════════════════════════════════ */
export default function HomePage() {
  const heroRef = useReveal();
  const servicesRef = useReveal();

  return (
    <>
      {/* ══ HERO ═════════════════════ */}
      <section className="relative min-h-screen bg-navy-900 flex items-center overflow-hidden pt-16">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 blur-3xl rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 blur-3xl rounded-full" />
        </div>

        <div className="container-site relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div ref={heroRef} className="max-w-xl">
              <span className="text-xs uppercase tracking-widest text-primary-400 border border-primary-700 px-3 py-1 rounded-full mb-6 inline-block">
                Clinical Research Support Organization
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Advancing Clinical Research with{" "}
                <span className="text-gradient">Integrity & Excellence</span>
              </h1>

              {/* CLEAN TEXT */}
              <p className="text-white/70 mb-6 leading-relaxed">
                MedArc Clinical Research supports investigators, hospitals, and
                sponsors in conducting ethical, compliant, and efficient
                clinical studies.
              </p>

              {/* BULLET STYLE */}
              <ul className="text-white/60 text-sm space-y-2 mb-8">
                <li>• Clinical trial management & regulatory support</li>
                <li>• Strong adherence to GCP & ethical standards</li>
                <li>• Supporting pharma, biotech & medical devices</li>
              </ul>

              <div className="flex gap-3">
                <Button to="/services">Explore Services</Button>
                <Button to="/contact" variant="ghost">
                  Contact Us
                </Button>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="hidden lg:flex justify-center">
              <div className="bg-navy-800 border border-white/10 p-12 rounded-2xl">
                <FlaskConical size={70} className="text-primary-400" />
              </div>
            </div>
          </div>

          {/* STATS — FIXED */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-white/10 pt-10 max-w-4xl mx-auto">
            {STATS.map((s) => (
              <StatCard
                key={s.label}
                value={s.value}
                label={s.label}
                theme="light"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ═══════════════ */}
      <section className="section-pad bg-stone-50">
        <div className="container-site">
          <div ref={servicesRef}>
            <SectionHeader
              label="Core Services"
              title="Clinical Research Solutions"
              subtitle="Delivering quality, compliance, and efficiency."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div className="card hover:border-primary-200">
                  <Icon className="text-primary-500 mb-3" />
                  <h3 className="font-semibold mb-1">{svc.title}</h3>
                  <p className="text-sm text-stone-500 mb-3">{svc.desc}</p>
                  <Link
                    to={svc.to}
                    className="text-primary-600 text-sm inline-flex items-center gap-1"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ WHY ═══════════════════ */}
      <section className="section-pad">
        <div className="container-site text-center max-w-3xl">
          <h2 className="section-title mb-4">Why Choose MedArc?</h2>
          <p className="text-stone-500 mb-10">
            Built on scientific integrity, compliance, and efficient execution.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {WHY_ITEMS.map(({ icon: Icon, title }) => (
              <div className="flex flex-col items-center text-center">
                <Icon className="text-primary-500 mb-2" />
                <p className="text-sm font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════ */}
      <section className="py-20 bg-navy-900 text-center">
        <h2 className="text-white text-3xl mb-4">
          Ready to start your clinical research journey?
        </h2>
        <p className="text-white/60 mb-6">
          Partner with MedArc for quality, compliance, and excellence.
        </p>
        <Button to="/contact">Get Started</Button>
      </section>
    </>
  );
}
