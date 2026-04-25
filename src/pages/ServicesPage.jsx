/**
 * ServicesPage.jsx
 * Updated with real MedArc Clinical Research services
 */

import React from "react";
import { Search, Scale, Rocket, ClipboardList, FileCheck2 } from "lucide-react";

import { Button, SectionHeader, CheckItem } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

const URL_1 = "https://ik.imagekit.io/umm5llpkg/MedArc/Clinical_R.png";
const URL_2 =
  "https://ik.imagekit.io/umm5llpkg/MedArc/Clinical%20Resrach%20Banner.png?updatedAt=1777047508806";

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
    link: "https://ik.imagekit.io/umm5llpkg/MedArc/site_selection.png",
    reverse: false,
  },
  {
    id: "regulatory",
    icon: Scale,
    title: "Regulatory & Ethics Committee Support",
    desc: "Our regulatory experts assist in navigating complex clinical research frameworks and ensure compliance with global standards.",
    items: [
      "Ethics committee submissions",
      "Regulatory documentation support",
      "ICH-GCP compliance",
      "National & international regulatory adherence",
    ],
    link: "https://ik.imagekit.io/umm5llpkg/MedArc/regulatory.png",
    reverse: true,
  },
  {
    id: "startup",
    icon: Rocket,
    title: "Study Inititations",
    desc: "We accelerate trial initiation with efficient start-up processes ensuring timely study activation.",
    items: [
      "Site initiation support",
      "Investigator coordination",
      "Essential document preparation",
      "Study activation & approvals",
    ],
    link: "https://ik.imagekit.io/umm5llpkg/MedArc/study_start_up.png",
    reverse: false,
  },
  {
    id: "management",
    icon: ClipboardList,
    title: "Study Executions",
    desc: "Comprehensive coordination between investigators, sponsor/CROs, ethics committee, Patients and health authority to ensure smooth trial execution. ",
    items: [
      "Study Conduct Support",
      "Patient recruitment coordination",
      "Protocol adherence",
      "Documentation and monitoring support",
      "Patients visit follow-up and tracking",
      "Sample storage, IP management as per protocol requirements",
    ],
    link: "https://ik.imagekit.io/umm5llpkg/MedArc/clinical_trial_management.png",
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
    link: "https://ik.imagekit.io/umm5llpkg/MedArc/study_close_out_documentation.png",
    reverse: false,
  },
];

/* ── Process Steps ───────────────────────────────── */
const STEPS = [
  {
    num: "1",
    title: "Strategic Assessment",
    desc: "Understanding your study requirements, objectives, and timelines.",
  },
  {
    num: "2",
    title: "Planning",
    desc: "Developing strategy, feasibility, and regulatory roadmap.",
  },
  {
    num: "3",
    title: "Initiation",
    desc: "Seamless initiations with regulatory approvals and site preparedness",
  },
  {
    num: "4",
    title: "Execution",
    desc: "Managing trial operations, coordination, and compliance.",
  },
  {
    num: "5",
    title: "Delivery",
    desc: "Final reporting, documentation, and study closure.",
  },
];

/* ═══════════════════════════════════════════════════ */
export default function ServicesPage() {
  const stepsRef = useReveal();

  return (
    <>
      {/* ══ HERO ═══════════════════════════════════ */}
      <section className="pt-32 pb-16 bg-[#f7f6f4] border-b border-stone-100">
        <div className="container-site text-center">
          {/* Banner Image */}
          <div className="mb-8 max-w-full mx-auto rounded-xl overflow-hidden shadow-lg">
            <img
              src={URL_1}
              alt="Clinical Research Banner"
              className="w-full h-full"
            />
          </div>

          {/* <div className="w-full">
            <img
              src={URL_1}
              alt="MedArc Clinical Research"
              className="w-full object-cover max-h-[520px]"
            />
          </div> */}

          <h1 className="pt-5 text-primary-500 section-title max-w-2xl mx-auto mb-4">
            Clinical Trial Management
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

                {/* RIGHT VISUAL — image fills container properly */}
                <div
                  className={`rounded-xl overflow-hidden bg-stone-100 ${
                    svc.reverse ? "lg:order-1" : ""
                  }`}
                  style={{ aspectRatio: "16/11" }}
                >
                  <img
                    loading="lazy"
                    src={svc.link}
                    alt={svc.title}
                    className="w-full h-full object-cover block"
                  />
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
              title="Our Operational Framework"
              subtitle="A structured and efficient approach ensuring compliance, quality, and timely execution."
              theme="light"
              className="mb-16"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-4  gap-8">
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
