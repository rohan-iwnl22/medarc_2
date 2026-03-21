/**
 * ServicesPage.jsx
 * Updated with real MedArc Clinical Research services
 */

import React from "react";
import {
  Search,
  Scale,
  Rocket,
  ClipboardList,
  FileCheck2,
  CheckCircle2,
} from "lucide-react";

import { Button, SectionHeader, CheckItem } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Updated Services Data ───────────────────────── */
const SERVICES = [
  {
    id: "feasibility",
    icon: Search,
    title: "Site Selection & Feasibility",
    desc: "We support sponsors and CROs in identifying qualified investigators and suitable clinical trial sites through comprehensive feasibility assessments.",
    items: [
      "Site capability and infrastructure evaluation",
      "Patient population assessment",
      "Investigator experience review",
      "Feasibility reporting and recommendations",
    ],
    reverse: false,
  },
  {
    id: "regulatory",
    icon: Scale,
    title: "Regulatory & Ethics Support",
    desc: "Our regulatory experts assist in navigating complex clinical research frameworks and ensure compliance with global standards.",
    items: [
      "Ethics committee submissions",
      "Regulatory documentation support",
      "ICH-GCP compliance",
      "National & international regulatory adherence",
    ],
    reverse: true,
  },
  {
    id: "startup",
    icon: Rocket,
    title: "Study Start-Up Services",
    desc: "We accelerate trial initiation with efficient start-up processes ensuring timely study activation.",
    items: [
      "Site initiation support",
      "Investigator coordination",
      "Essential document preparation",
      "Study activation & approvals",
    ],
    reverse: false,
  },
  {
    id: "management",
    icon: ClipboardList,
    title: "Clinical Trial Management",
    desc: "Comprehensive coordination between investigators, sponsors, and CROs to ensure smooth trial execution.",
    items: [
      "Study conduct support",
      "Patient recruitment coordination",
      "Protocol adherence",
      "Documentation and monitoring support",
    ],
    reverse: true,
  },
  {
    id: "closeout",
    icon: FileCheck2,
    title: "Study Close-Out & Documentation",
    desc: "We ensure proper trial closure with complete documentation, compliance, and archiving as per regulatory requirements.",
    items: [
      "Regulatory compliance verification",
      "Data reconciliation",
      "Essential document completion",
      "Archiving as per GCP guidelines",
    ],
    reverse: false,
  },
];

/* ── Process Steps (unchanged) ───────────────────── */
const STEPS = [
  {
    num: "1",
    title: "Discovery",
    desc: "Understanding your study requirements, objectives, and timelines.",
  },
  {
    num: "2",
    title: "Planning",
    desc: "Developing strategy, feasibility, and regulatory roadmap.",
  },
  {
    num: "3",
    title: "Execution",
    desc: "Managing trial operations, coordination, and compliance.",
  },
  {
    num: "4",
    title: "Delivery",
    desc: "Final reporting, documentation, and study closure.",
    active: true,
  },
];

/* ═══════════════════════════════════════════════════ */
export default function ServicesPage() {
  const stepsRef = useReveal();

  return (
    <>
      {/* ══ HERO ═══════════════════════════════════ */}
      <section className="pt-32 pb-16 bg-stone-50 border-b border-stone-100">
        <div className="container-site text-center">
          <span className="tag-label mb-4 inline-block">Our Services</span>

          <h1 className="section-title max-w-2xl mx-auto mb-4">
            End-to-End Clinical Trial Support
          </h1>

          <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
            MedArc Clinical Research bridges investigators with sponsors and
            CROs, delivering complete clinical trial support from site
            feasibility to study close-out while ensuring quality, compliance,
            and efficient execution.
          </p>
        </div>
      </section>

      {/* ══ SERVICES ═══════════════════════════════ */}
      {SERVICES.map((svc) => {
        const Icon = svc.icon;

        return (
          <section
            key={svc.id}
            className="section-pad border-b border-stone-100 last:border-none"
          >
            <div className="container-site">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  svc.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* LEFT CONTENT */}
                <div className={svc.reverse ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-primary-500" />
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 mb-3">
                    {svc.title}
                  </h2>

                  <p className="text-stone-500 leading-relaxed mb-5">
                    {svc.desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {svc.items.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>
                </div>

                {/* RIGHT VISUAL */}
                <div
                  className={`rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-primary-50 to-stone-100 flex items-center justify-center ${
                    svc.reverse ? "lg:order-1" : ""
                  }`}
                >
                  <Icon size={72} className="text-primary-200" />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ══ PROCESS ════════════════════════════════ */}
      <section className="section-pad bg-navy-900">
        <div className="container-site">
          <div ref={stepsRef} className="reveal">
            <SectionHeader
              label="Our Process"
              title="How We Work With You"
              subtitle="A structured and efficient approach ensuring compliance, quality, and timely execution."
              theme="light"
              className="mb-16"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    step.active
                      ? "bg-accent-500 text-white"
                      : "bg-navy-800 text-white/60"
                  }`}
                >
                  {step.num}
                </div>
                <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                <p className="text-white/50 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════ */}
      <section className="py-20">
        <div className="container-site text-center">
          <h2 className="section-title mb-3">
            Ready to start your clinical research study?
          </h2>
          <p className="text-stone-500 mb-8 max-w-md mx-auto">
            Partner with MedArc Clinical Research for reliable, compliant, and
            efficient clinical trial execution.
          </p>

          <Button to="/contact">Contact Our Team</Button>
        </div>
      </section>
    </>
  );
}
