/**
 * RegulatoryPage.jsx
 * Sections:
 *  1. Hero with submission status card
 *  2. Supported regulatory frameworks grid
 *  3. Regulatory Pathway Timeline
 *  4. Regulatory Insights + FAQ
 *  5. CTA
 */

import React, { useState } from "react";
import { Flag, Globe2, ShieldCheck, Microscope, ChevronDown, Download, ArrowRight } from "lucide-react";
import { Button, SectionHeader, CheckItem } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Frameworks ───────────────────────────────────── */
const FRAMEWORKS = [
  {
    icon:  Flag,
    title: "FDA (US)",
    desc:  "Expertise in IND, NDA, SLA submissions, 510(k) clearances, and PMA applications for the US market.",
  },
  {
    icon:  Globe2,
    title: "EMA (Europe)",
    desc:  "Navigation of Centralised, Decentralised, and Mutual Recognition procedures, plus EU MDR/IVDR compliance.",
  },
  {
    icon:  ShieldCheck,
    title: "ISO Standards",
    desc:  "Implementation and auditing for ISO 13485 (Medical Devices) and ISO 14155 (Clinical Investigation).",
  },
  {
    icon:  Microscope,
    title: "APAC Region",
    desc:  "Regulatory strategy for PMDA (Japan), NMPA (China), TGA (Australia), and other key Asian markets.",
  },
  {
    icon:  ShieldCheck,
    title: "GCP/GLP/GMP",
    desc:  "Comprehensive Good Clinical, Laboratory, and Manufacturing Practice auditing and quality assurance.",
  },
];

/* ── Timeline steps ───────────────────────────────── */
const TIMELINE = [
  {
    num:     "01",
    title:   "Gap Analysis & Strategy",
    desc:    "Comprehensive review of existing data, identification of regulatory requirements, and assessment of a tailored submission roadmap.",
    items:   ["Product classification", "Predicate device identification", "Pathway selection"],
    active:  false,
    left:    true,
  },
  {
    num:     "02",
    title:   "Agency Engagement",
    desc:    "Proactive communication with regulatory bodies to align on expectations, clinical study design, and endpoints before trials commence.",
    items:   ["Pre-IND / Pre-Sub meetings", "Protocol review", "Ethics committee submissions"],
    active:  false,
    left:    false,
  },
  {
    num:     "03",
    title:   "Dossier Preparation",
    desc:    "Rigorous compilation, medical writing, and formatting of submission documents ensuring strict adherence to eCTD or local formats.",
    items:   [],
    active:  true,
    left:    true,
    current: true,
  },
  {
    num:     "04",
    title:   "Submission & Defense",
    desc:    "Filing of the application and management of agency queries, deficiency letters, and panel interactions.",
    items:   [],
    active:  false,
    left:    false,
    dimmed:  true,
  },
];

/* ── Insights ─────────────────────────────────────── */
const INSIGHTS = [
  { type: "Whitepaper", title: "Navigating EU MDR Transition", size: "3.1 MB" },
  { type: "Checklist",  title: "FDA 510(k) Pre-Submission Prep", size: "514 KB" },
  { type: "Guide",      title: "ISO 13485:2016 Audit Readiness", size: "2.4 MB" },
];

/* ── FAQ ──────────────────────────────────────────── */
const FAQS = [
  {
    q: "How long does an FDA 510(k) clearance typically take?",
    a: "Standard review is 90 days; Substantially Equivalent decisions often arrive within 3–6 months depending on device complexity and submission completeness.",
  },
  {
    q: "Do you support decentralized clinical trials (DCTs) regulatory compliance?",
    a: "Yes. Regulatory bodies are rapidly evolving their guidance on DCTs. We provide specific expertise on data privacy (GDPR/HIPAA), remote monitoring compliance, eConsent validation, and direct-to-subject logistics regulations across different jurisdictions.",
  },
  {
    q: "What is the difference between EU MDR and IVDR?",
    a: "EU MDR (2017/745) applies to medical devices, while EU IVDR (2017/746) governs in-vitro diagnostic devices. Both impose stricter clinical evidence and post-market surveillance requirements than their predecessors.",
  },
  {
    q: "Can you act as our US Agent or EU Authorised Representative?",
    a: "Yes — MedArc offers both US Agent services for non-US manufacturers submitting to the FDA, and EU Authorised Representative services for companies outside the EU/EEA placing products on the European market.",
  },
];

/* ─────────────────────────────────────────────────── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left text-sm font-semibold text-stone-800 hover:text-primary-600 transition-colors"
        aria-expanded={open}
      >
        {q}
        <ChevronDown
          size={16}
          className={`shrink-0 ml-4 text-stone-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-4" : "max-h-0"}`}>
        <p className="text-sm text-stone-500 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════ */
export default function RegulatoryPage() {
  const frameworkRef = useReveal();
  const timelineRef  = useReveal();

  return (
    <>
      {/* ══ HERO ═════════════════════════════════════ */}
      <section className="pt-32 pb-20 bg-stone-50 border-b border-stone-100 overflow-hidden">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Copy */}
            <div>
              <span className="tag-label mb-4 inline-block">Global Compliance</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
                Navigate complex{" "}
                <span className="text-gradient">regulatory pathways</span>
              </h1>
              <p className="text-stone-500 leading-relaxed mb-8 max-w-lg">
                Expert guidance through FDA, EMA, and global regulatory frameworks. We minimise risk
                and accelerate your path to market with proven compliance strategies.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button to="/contact" icon>Discuss Your Pathway</Button>
                <Button variant="outline">
                  <Download size={15} /> Download Overview
                </Button>
              </div>
            </div>

            {/* Submission status card */}
            <div className="bg-accent-400/10 border border-accent-300/30 rounded-3xl p-6 max-w-sm ml-auto">
              <div className="bg-white rounded-2xl p-5 shadow-card">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-primary-50 flex items-center justify-center">
                      <Flag size={14} className="text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-stone-800">Submission Status</p>
                      <p className="text-[10px] text-stone-400">FDA 510(k) Review</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold bg-green-50 text-green-600 border border-green-100 rounded-full px-2 py-0.5">
                    On Track
                  </span>
                </div>
                {/* Progress items */}
                {[
                  { label: "Phase 1: Pre-Sub", pct: 100, color: "bg-primary-500" },
                  { label: "Phase 2: Data Collation", pct: 68, color: "bg-accent-500" },
                ].map(({ label, pct, color }) => (
                  <div key={label} className="mb-3 last:mb-0">
                    <div className="flex justify-between text-xs text-stone-600 mb-1">
                      <span>{label}</span>
                      <span className="font-mono text-stone-800 font-semibold">{pct}%</span>
                    </div>
                    <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${color} rounded-full`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FRAMEWORKS ═══════════════════════════════ */}
      <section className="section-pad">
        <div className="container-site">
          <div ref={frameworkRef} className="reveal">
            <SectionHeader
              label="Global Expertise"
              title="Supported Regulatory Frameworks"
              subtitle="Comprehensive support across major global jurisdictions, ensuring your clinical trials meet all local and international standards."
              className="mb-14"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FRAMEWORKS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card group hover:border-primary-200">
                <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-500 transition-colors">
                  <Icon size={18} className="text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-stone-900 mb-1">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-3">{desc}</p>
                <button className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 hover:gap-2 transition-all">
                  Learn more <ArrowRight size={12} />
                </button>
              </div>
            ))}

            {/* Regional guidance CTA card */}
            <div className="card bg-navy-900 border-navy-800 text-white flex flex-col justify-between">
              <div>
                <h3 className="font-display font-semibold mb-2">Need specific regional guidance?</h3>
                <p className="text-sm text-white/60">Our global network covers over 50+ countries.</p>
              </div>
              <Button to="/contact" variant="ghost" className="mt-4 justify-center text-sm">
                Contact our experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TIMELINE ═════════════════════════════════ */}
      <section className="section-pad bg-stone-50">
        <div className="container-site">
          <div ref={timelineRef} className="reveal mb-12">
            <p className="section-label">The Journey</p>
            <h2 className="section-title max-w-sm">Regulatory Pathway Timeline</h2>
            <p className="text-stone-500 mt-2 max-w-md">
              A structured approach to navigating compliance, from initial strategy to post-market surveillance.
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Centre line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2" aria-hidden="true" />

            {TIMELINE.map((step) => (
              <div
                key={step.num}
                className={`relative grid md:grid-cols-2 gap-8 mb-10 ${step.dimmed ? "opacity-40" : ""}`}
              >
                {/* Left side */}
                <div className={step.left ? "md:text-right" : "md:col-start-2"}>
                  {step.left && (
                    <div className={`card ${step.current ? "border-primary-200 bg-primary-50/50" : ""}`}>
                      <h3 className="font-display font-semibold text-stone-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-stone-500">{step.desc}</p>
                      {step.items.length === 0 && step.current && (
                        <>
                          <div className="mt-3 h-1 bg-stone-200 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-accent-500 rounded-full" />
                          </div>
                          <p className="text-[10px] text-stone-400 mt-1 font-mono">Document compilation in progress…</p>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Connector dot */}
                <div
                  className={`absolute left-1/2 top-4 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold border-2 z-10 ${
                    step.current
                      ? "bg-accent-500 border-accent-500 text-white"
                      : "bg-white border-stone-300 text-stone-500"
                  }`}
                >
                  {step.num}
                </div>

                {/* Right side */}
                <div className={!step.left ? "" : "md:col-start-2"}>
                  {!step.left && (
                    <div className="card">
                      <h3 className="font-display font-semibold text-stone-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-stone-500">{step.desc}</p>
                      {step.items.length > 0 && (
                        <ul className="mt-3 space-y-1">
                          {step.items.map((it) => (
                            <CheckItem key={it}>{it}</CheckItem>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INSIGHTS + FAQ ═══════════════════════════ */}
      <section className="section-pad">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Insights */}
            <div>
              <h2 className="section-title mb-6">Regulatory Insights</h2>
              <div className="space-y-4">
                {INSIGHTS.map((doc) => (
                  <div key={doc.title} className="flex items-center gap-4 p-4 rounded-xl border border-stone-100 hover:border-primary-200 hover:bg-primary-50/30 transition-all group">
                    <div className="w-10 h-12 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                      <Download size={16} className="text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-mono text-primary-600 uppercase tracking-widest">{doc.type}</span>
                      <p className="text-sm font-semibold text-stone-800 leading-tight">{doc.title}</p>
                    </div>
                    <button className="text-xs text-stone-400 group-hover:text-primary-600 flex items-center gap-1 transition-colors">
                      <Download size={12} /> {doc.size}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="section-title mb-6">Frequently Asked Questions</h2>
              <div className="space-y-1">
                {FAQS.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════ */}
      <section className="py-20 bg-navy-900">
        <div className="container-site text-center">
          <h2 className="section-title-light mb-3 max-w-xl mx-auto">
            Ready to chart your regulatory course?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Complex regulations shouldn't delay life-saving innovations. Partner with MedArc to
            streamline your pathway to approval.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="accent" icon>Discuss a Pathway</Button>
            <Button to="/about" variant="ghost">View Case Studies</Button>
          </div>
          <p className="text-[11px] text-white/30 mt-8 max-w-lg mx-auto">
            Compliance disclaimer: The regulatory information provided is for general informational purposes and does not constitute legal or regulatory advice.
            Regulatory requirements are subject to change; regulatory submissions and timelines are illustrative only.
          </p>
        </div>
      </section>
    </>
  );
}
