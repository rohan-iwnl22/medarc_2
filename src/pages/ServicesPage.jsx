/**
 * ServicesPage.jsx
 * Sections:
 *  1. Page hero header
 *  2. Three main services (alternating layout)
 *  3. How We Work With You (4-step process)
 *  4. CTA banner
 */

import React from "react";
import { Scale, ClipboardList, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button, SectionHeader, CheckItem } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Data ─────────────────────────────────────────── */
const SERVICES = [
  {
    id:      "regulatory",
    icon:    Scale,
    title:   "Regulatory Strategy",
    desc:    "Navigate complex global regulatory landscapes with confidence. Our experts develop tailored strategies to expedite approvals and minimise compliance risks across FDA, EMA, and other international agencies.",
    items:   [
      "Pre-IND and scientific advice meetings",
      "Orphan drug and fast-track designations",
      "Global regulatory pathway optimisation",
    ],
    cta:     "Explore Regulatory Services",
    to:      "/regulatory",
    imgBg:   "from-blue-50 to-primary-50",
    reverse: false,
  },
  {
    id:      "trials",
    icon:    ClipboardList,
    title:   "Clinical Trial Management",
    desc:    "End-to-end execution of Phase I–IV trials. We ensure patient safety, data integrity, and strict adherence to timelines while managing complex multi-site, global studies.",
    items:   [
      "Protocol development and feasibility",
      "Site selection and patient recruitment",
      "Clinical monitoring and site management",
    ],
    cta:     "Explore Clinical Operations",
    to:      "/contact",
    imgBg:   "from-stone-50 to-primary-50",
    reverse: true,
  },
  {
    id:      "quality",
    icon:    ShieldCheck,
    title:   "Compliance & Quality",
    desc:    "Maintain impeccable standards with our rigorous quality assurance programs. We safeguard your data and processes to ensure constant audit-readiness and GCP adherence.",
    items:   [
      "GCP/GLP/GMP compliance auditing",
      "Standard Operating Procedure (SOP) development",
      "Inspection readiness and mock audits",
    ],
    cta:     "Explore Quality Services",
    to:      "/contact",
    imgBg:   "from-accent-50/30 to-stone-50",
    reverse: false,
  },
];

const STEPS = [
  {
    num:   "1",
    title: "Discovery",
    desc:  "Initial consultation to understand your protocol, timelines, and specific objectives.",
  },
  {
    num:   "2",
    title: "Strategy & Proposal",
    desc:  "Detailed project plan, resource allocation, and transparent pricing structure.",
  },
  {
    num:   "3",
    title: "Execution",
    desc:  "Dedicated team mobilisation and active management of trial operations.",
  },
  {
    num:   "4",
    title: "Delivery & Reporting",
    desc:  "Continuous data delivery, milestone reporting, and final submission support.",
    active: true,
  },
];

/* ═══════════════════════════════════════════════════ */
export default function ServicesPage() {
  const stepsRef = useReveal();

  return (
    <>
      {/* ══ PAGE HERO ════════════════════════════════ */}
      <section className="pt-32 pb-16 bg-stone-50 border-b border-stone-100">
        <div className="container-site text-center">
          <span className="tag-label mb-4 inline-block">What We Do</span>
          <h1 className="section-title max-w-2xl mx-auto mb-4">
            Comprehensive Research Solutions
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            From initial protocol design to final regulatory approval, MedArc provides
            end-to-end clinical research services tailored to your specific therapeutic
            area and study requirements.
          </p>
        </div>
      </section>

      {/* ══ SERVICE SECTIONS ═════════════════════════ */}
      {SERVICES.map((svc) => {
        const Icon = svc.icon;
        return (
          <section key={svc.id} className="section-pad border-b border-stone-100 last:border-none">
            <div className="container-site">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${svc.reverse ? "lg:flex-row-reverse" : ""}`}>

                {/* Copy side */}
                <div className={svc.reverse ? "lg:order-2" : ""}>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-primary-500" />
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-3">
                    {svc.title}
                  </h2>
                  <p className="text-stone-500 leading-relaxed mb-5">{svc.desc}</p>

                  <ul className="space-y-2 mb-7">
                    {svc.items.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>

                  <Button to={svc.to} variant="outline" icon>{svc.cta}</Button>
                </div>

                {/* Image side */}
                <div className={`rounded-2xl overflow-hidden aspect-video bg-gradient-to-br ${svc.imgBg} flex items-center justify-center ${svc.reverse ? "lg:order-1" : ""}`}>
                  <Icon size={72} className="text-primary-200" />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ══ HOW WE WORK ══════════════════════════════ */}
      <section className="section-pad bg-navy-900">
        <div className="container-site">
          <div ref={stepsRef} className="reveal">
            <SectionHeader
              label="Our Process"
              title="How We Work With You"
              subtitle="Our proven engagement model ensures alignment, transparency, and efficiency from day one."
              theme="light"
              className="mb-16"
            />
          </div>

          {/* Stepper */}
          <div className="relative">
            {/* Connector line */}
            <div
              className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {STEPS.map((step, i) => (
                <div key={step.num} className="relative flex flex-col items-center text-center md:items-center">
                  {/* Number bubble */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-mono font-bold mb-4 z-10 border-2 transition-colors ${
                      step.active
                        ? "bg-accent-500 border-accent-500 text-white"
                        : "bg-navy-800 border-white/20 text-white/60"
                    }`}
                  >
                    {step.num}
                  </div>
                  <h3 className="font-display font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════ */}
      <section className="py-20">
        <div className="container-site">
          <div className="bg-stone-50 border border-stone-100 rounded-3xl p-10 md:p-14 text-center shadow-card">
            <h2 className="section-title mb-3">Ready to advance your clinical program?</h2>
            <p className="text-stone-500 mb-8 max-w-md mx-auto">
              Connect with our experts to discuss your upcoming study and learn how
              MedArc can accelerate your path to market.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button to="/contact" icon>Request a Consultation</Button>
              <Button variant="outline">Download Services Brochure</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
