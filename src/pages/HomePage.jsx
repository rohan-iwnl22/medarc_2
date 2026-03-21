/**
 * HomePage.jsx
 * Landing page sections:
 *  1. Hero (dark navy, wave animation)
 *  2. Trust logos
 *  3. Core services trio
 *  4. Why Partner with MedArc
 *  5. CTA banner
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

/* ── Data ─────────────────────────────────────────── */
const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Trials Completed" },
  { value: "100%", label: "Regulatory Track" },
];

const SERVICES = [
  {
    icon: FlaskConical,
    title: "Clinical Trial Management",
    desc: "We provide comprehensive clinical trial management services, ensuring effective coordination between investigators, sponsors, and CROs. Our team supports study conduct, patient recruitment coordination, documentation management, and adherence to study protocols and regulatory standards.",
    cta: "Learn more",
    to: "/services",
  },
  {
    icon: FileCheck2,
    title: "Study Start-Up Services",
    desc: "We provide comprehensive clinical trial management services, ensuring effective coordination between investigators, sponsors, and CROs. Our team supports study conduct, patient recruitment coordination, documentation management, and adherence to study protocols and regulatory standards.",
    cta: "Learn more",
    to: "/regulatory",
  },
  {
    icon: BarChart3,
    title: "Study Close-Out & Documentation",
    desc: "MedArc Clinical Research assists in the proper closure of clinical trials by ensuring completion of essential documentation, regulatory compliance, data reconciliation, and archiving of study records in accordance with regulatory requirements and Good Clinical Practice guidelines.",
    cta: "Learn more",
    to: "/services",
  },
];

const WHY_ITEMS = [
  {
    icon: FlaskConical,
    title: "Scientific Excellence",
    desc: "Driven by strong research methodology and clinical expertise.",
  },
  {
    icon: Globe2,
    title: "Ethical Standards",
    desc: "Committed to Good Clinical Practice (GCP) and ethical research conduct.",
  },
  {
    icon: Cpu,
    title: "Efficient Execution",
    desc: "Streamlined processes ensuring timely and reliable study delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    desc: "Strict adherence to global regulatory guidelines and quality standards.",
  },
];

const LOGOS = ["AWS", "IBM", "Google", "Salesforce", "Oracle"];

/* ═══════════════════════════════════════════════════ */
export default function HomePage() {
  const heroRef = useReveal(0.05);
  const servicesRef = useReveal();
  const whyRef = useReveal();

  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════ */}
      <section className="relative min-h-screen bg-navy-900 flex items-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="container-site relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div ref={heroRef} className="reveal">
              <span className="inline-block text-xs font-mono font-semibold uppercase tracking-widest text-primary-400 border border-primary-700 rounded-full px-3 py-1 mb-6">
                Clinical Research Support Organization
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6">
                Advancing Clinical Research with{" "}
                <span className="text-gradient">Integrity & Excellence</span>
              </h1>

              {/* Updated Content */}
              <p className="text-base text-white/60 leading-relaxed mb-6 max-w-xl">
                MedArc Clinical Research is a professional clinical research
                support organization committed to delivering high-quality
                services in clinical trials and research management. Our
                organization focuses on supporting investigators, hospitals, and
                sponsors in conducting ethical, compliant, and efficient
                clinical studies.
              </p>

              <p className="text-base text-white/60 leading-relaxed mb-6 max-w-xl">
                We specialize in providing clinical research management and
                regulatory support for pharmaceutical, biotechnology, and
                medical device research. Our team works closely with
                investigators and institutions to ensure studies are conducted
                according to regulatory guidelines, Good Clinical Practice
                (GCP), and ethical standards.
              </p>

              <p className="text-base text-white/60 leading-relaxed mb-8 max-w-xl">
                At MedArc Clinical Research, we believe in integrity, scientific
                excellence, regulatory compliance, and efficient project
                execution—helping our partners successfully conduct clinical
                research that advances healthcare and medical innovation.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button to="/services">Explore Services</Button>
                <Button to="/contact" variant="ghost">
                  Contact Us
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/10">
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

            {/* Right */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-navy-800 p-10">
                <FlaskConical
                  size={64}
                  className="text-primary-400 opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. TRUST LOGOS ═══════════════════════════ */}
      {/* <section className="py-10 border-b border-stone-100">
        <div className="container-site text-center">
          <p className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-6">
            Trusted by research professionals
          </p>
          <div className="flex flex-wrap justify-center gap-10 opacity-40">
            {LOGOS.map((name) => (
              <span key={name} className="font-bold text-lg text-stone-700">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══ 3. SERVICES ═════════════════════════════ */}
      <section className="section-pad bg-stone-50">
        <div className="container-site">
          <div ref={servicesRef} className="reveal">
            <SectionHeader
              label="Core Services"
              title="Comprehensive Clinical Research Solutions"
              subtitle="Supporting clinical studies with precision, compliance, and expertise."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="card">
                  <Icon className="mb-3 text-primary-500" />
                  <h3 className="font-semibold">{svc.title}</h3>
                  <p className="text-sm text-stone-500">{svc.desc}</p>
                  <Link
                    to={svc.to}
                    className="text-primary-600 text-sm inline-flex items-center mt-2"
                  >
                    {svc.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 4. WHY PARTNER ═══════════════════════════ */}
      <section className="section-pad">
        <div className="container-site grid lg:grid-cols-2 gap-14">
          <div ref={whyRef} className="reveal">
            <h2 className="section-title mb-4">Why Choose MedArc?</h2>
            <p className="text-stone-500 mb-8">
              We ensure ethical, compliant, and efficient research execution
              with strong scientific and regulatory expertise.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {WHY_ITEMS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="text-primary-500" />
                  <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <p className="text-xs text-stone-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5. CTA ══════════════════════════════════ */}
      <section className="py-20 bg-navy-900 text-center">
        <h2 className="text-white text-3xl mb-4">
          Ready to start your clinical research journey?
        </h2>
        <p className="text-white/60 mb-6">
          Partner with MedArc Clinical Research for quality, compliance, and
          excellence.
        </p>
        <Button to="/contact">Get Started</Button>
      </section>
    </>
  );
}
