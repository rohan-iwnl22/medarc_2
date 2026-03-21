/**
 * HomePage.jsx
 * Landing page sections:
 *  1. Hero (dark navy, wave animation)
 *  2. Trust logos
 *  3. Core services trio
 *  4. Why Partner with MedArc
 *  5. Regulatory Updates & Insights (blog cards)
 *  6. CTA banner
 */

import React from "react";
import { Link } from "react-router-dom";
import {
  FlaskConical, FileCheck2, BarChart3,
  ShieldCheck, Globe2, Cpu,
  ArrowRight, ExternalLink,
} from "lucide-react";

import { Button, SectionHeader, StatCard, CheckItem } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Data ─────────────────────────────────────────── */
const STATS = [
  { value: "15+",  label: "Years Experience" },
  { value: "500+", label: "Trials Completed" },
  { value: "100%", label: "Regulatory Track" },
];

const SERVICES = [
  {
    icon: FlaskConical,
    title: "Clinical Trial Management",
    desc:  "End-to-end management of Phase I–IV trials with rigorous patient safety and data integrity protocols.",
    cta:   "Learn more",
    to:    "/services",
  },
  {
    icon: FileCheck2,
    title: "Regulatory Affairs",
    desc:  "Navigate FDA, EMA, and global regulatory frameworks efficiently with our expert submissions team.",
    cta:   "Learn more",
    to:    "/regulatory",
  },
  {
    icon: BarChart3,
    title: "Data Management & Biostatistics",
    desc:  "Collect high-quality data and deliver 21 CFR Part 11-compliant reporting to accelerate decisions.",
    cta:   "Learn more",
    to:    "/services",
  },
];

const WHY_ITEMS = [
  {
    icon: FlaskConical,
    title: "Therapeutic Expertise",
    desc:  "Deep domain knowledge in oncology, neurology, cardiology, and rare diseases.",
  },
  {
    icon: Globe2,
    title: "Global Reach, Local Knowledge",
    desc:  "Operations across 50+ countries with nuanced understanding of local requirements.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology Stack",
    desc:  "Proprietary CTMS and analytics systems to keep your trials on time and on budget.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    desc:  "ISO 9001:2015 certified. GCP compliant. Every study backed by proven QA frameworks.",
  },
];

const INSIGHTS = [
  {
    tag:   "Regulatory",
    date:  "March 12, 2024",
    title: "Navigating the New FDA Guidance on Decentralized Clinical Trials",
    excerpt: "An in-depth analysis of the latest FDA draft guidance and what it means for your upcoming DCT protocol.",
    readTime: "5 min read",
  },
  {
    tag:   "Best Practice",
    date:  "Feb 28, 2024",
    title: "Ensuring Data Integrity in Multi-Site Global Studies",
    excerpt: "Best practices for centralised and quality-controlled data monitoring to satisfy ICH E6 R3 requirements.",
    readTime: "7 min read",
  },
];

/* ── Trust logos (SVG text placeholders) ─────────── */
const LOGOS = ["AWS", "IBM", "Google", "Salesforce", "Oracle"];

/* ═══════════════════════════════════════════════════ */
export default function HomePage() {
  const heroRef     = useReveal(0.05);
  const servicesRef = useReveal();
  const whyRef      = useReveal();
  const insightsRef = useReveal();

  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════ */}
      <section className="relative min-h-screen bg-navy-900 flex items-center overflow-hidden pt-16">
        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-float" />
          {/* Diagonal grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-site relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — copy */}
            <div ref={heroRef} className="reveal">
              {/* Tag */}
              <span className="inline-block text-xs font-mono font-semibold uppercase tracking-widest text-primary-400 border border-primary-700 rounded-full px-3 py-1 mb-6">
                #1 Leading Clinical Research Organisation
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6">
                Advancing Medical Research with{" "}
                <span className="text-gradient">Precision &amp; Compliance.</span>
              </h1>

              <p className="text-base text-white/60 leading-relaxed mb-8 max-w-xl">
                MedArc provides comprehensive clinical study management, regulatory adherence,
                and research services to accelerate therapeutic development globally.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Button to="/services" icon>Explore Services</Button>
                <Button to="/contact" variant="ghost">Contact Us</Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/10">
                {STATS.map((s) => (
                  <StatCard key={s.label} value={s.value} label={s.label} theme="light" />
                ))}
              </div>
            </div>

            {/* Right — floating card */}
            <div className="relative hidden lg:flex items-center justify-center">
              {/* Main image card */}
              <div className="relative w-full max-w-sm animate-float">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-glow bg-navy-800">
                  {/* Placeholder for doctor/lab image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary-800/40 to-navy-900 flex items-center justify-center">
                    <FlaskConical size={64} className="text-primary-400 opacity-60" />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card-lg p-3 flex items-center gap-3 border border-stone-100">
                  <span className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                    <ShieldCheck size={16} className="text-primary-500" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-stone-900 leading-tight">Regulatory Excellence</p>
                    <p className="text-xs text-stone-400 leading-tight">FDA · EMA · ISO certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ══ 2. TRUST LOGOS ═══════════════════════════ */}
      <section className="py-10 border-b border-stone-100">
        <div className="container-site">
          <p className="text-center text-xs font-mono text-stone-400 uppercase tracking-widest mb-6">
            Trusted by leading pharmaceutical &amp; biotech companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-40 grayscale">
            {LOGOS.map((name) => (
              <span key={name} className="font-display font-bold text-lg text-stone-700 tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. CORE SERVICES ═════════════════════════ */}
      <section className="section-pad bg-stone-50">
        <div className="container-site">
          <div ref={servicesRef} className="reveal">
            <SectionHeader
              label="Core Capability"
              title="Comprehensive Clinical Solutions"
              subtitle="We offer the complete range of services from early-phase clinical trials to post-market surveillance with proven expertise."
              className="mb-14"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="card group cursor-pointer"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                    <Icon size={20} className="text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-stone-900 mb-2">{svc.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed mb-4">{svc.desc}</p>
                  <Link
                    to={svc.to}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 group-hover:gap-2 transition-all"
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
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — image */}
            <div className="rounded-2xl overflow-hidden bg-stone-100 aspect-video relative">
              <div className="w-full h-full bg-gradient-to-br from-primary-50 to-stone-200 flex items-center justify-center">
                <Globe2 size={80} className="text-primary-300" />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-3 shadow-card flex items-center gap-2 border border-stone-100">
                <ShieldCheck size={18} className="text-primary-500" />
                <span className="text-xs font-semibold text-stone-700">Quality Assured · GCP Compliant</span>
              </div>
            </div>

            {/* Right — copy */}
            <div ref={whyRef} className="reveal">
              <p className="section-label">Our Edge</p>
              <h2 className="section-title mb-4">Why Partner with MedArc?</h2>
              <p className="text-stone-500 mb-8 leading-relaxed">
                We combine deep clinical expertise with innovative technology to deliver
                high-quality data and help accelerate your time to market.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {WHY_ITEMS.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-primary-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800 text-sm">{title}</p>
                      <p className="text-xs text-stone-500 leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-8">
                <Button to="/about" icon>Learn About Us</Button>
                <Button to="/services" variant="outline">Our Services</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5. INSIGHTS ══════════════════════════════ */}
      <section className="section-pad bg-stone-50">
        <div className="container-site">
          <div ref={insightsRef} className="reveal">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="section-label">Regulatory Updates &amp; Insights</p>
                <h2 className="section-title max-w-sm">
                  Stay ahead of the curve.
                </h2>
              </div>
              <Link
                to="/regulatory"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                View All Articles <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {INSIGHTS.map((post) => (
              <article key={post.title} className="card group hover:scale-[1.01] transition-transform duration-200">
                {/* Placeholder image */}
                <div className="rounded-xl bg-gradient-to-br from-primary-50 to-stone-100 aspect-video mb-4 flex items-center justify-center overflow-hidden">
                  <FileCheck2 size={40} className="text-primary-300" />
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className="tag-label">{post.tag}</span>
                  <span className="text-xs text-stone-400">{post.date}</span>
                  <span className="text-xs text-stone-400 ml-auto">{post.readTime}</span>
                </div>

                <h3 className="font-display font-semibold text-stone-900 leading-snug mb-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-3">{post.excerpt}</p>

                <button className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:gap-2 transition-all">
                  Read Article <ArrowRight size={13} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. CTA BANNER ════════════════════════════ */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-site relative z-10 text-center">
          <h2 className="section-title-light max-w-2xl mx-auto mb-4">
            Ready to accelerate your clinical research?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Partner with MedArc to ensure compliance, quality, and efficiency in your next study.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="accent">Register a Protocol</Button>
            <Button to="/contact" variant="ghost">Schedule a Consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
