/**
 * ServicesPage.jsx
 * Final: Creative Hero + Original Services & Steps retained
 */

import React from "react";
import { Search, Scale, Rocket, ClipboardList, FileCheck2 } from "lucide-react";

import { Button, SectionHeader, CheckItem } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Banner ── */
// const BannerURL =
//   "https://ik.imagekit.io/umm5llpkg/MedArc/Clinical%20Resrach%20Banner.png?updatedAt=1777047508806";

// const BannerURL = "https://data-matica.com/img/ctms.jpg";

const BannerURL = "https://clinfinite.com/img/Clinical_Developmen_Solutions_Background.webp";

/* ── SERVICES (UNCHANGED) ── */
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
    desc: "Comprehensive coordination between investigators, sponsor/CROs, ethics committee, Patients and health authority to ensure smooth trial execution.",
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

/* ── STEPS (UNCHANGED) ── */
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

/* ═══════════════════════════════ */
export default function ServicesPage() {
  const stepsRef = useReveal();

  return (
    <>
      {/* 🔥 CREATIVE HERO ONLY */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <img
          src={BannerURL}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/60 to-transparent" />

        {/* Blur Decoration */}
        <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-primary-500/30 blur-3xl rounded-full" />

        {/* Content */}
        <div className="container-site relative z-10 grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Clinical Trial Management 
            </h1>

            <p className="text-white/80 mb-6 max-w-lg">
              Delivering seamless, compliant, and high-quality clinical trial
              solutions from feasibility to study close-out.
            </p>

            {/* <div className="flex gap-4 flex-wrap">
              <Button className="bg-white text-primary-700">Get Started</Button>

              <Button variant="ghost" className="text-white border-white">
                Learn More
              </Button>
            </div> */}
          </div>

          {/* RIGHT CARD */}
          {/* <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-white text-xl font-semibold mb-4">
                Key Strengths
              </h3>

              <ul className="space-y-3 text-white/80 text-sm">
                <li>✔ End-to-end clinical support</li>
                <li>✔ Regulatory compliance expertise</li>
                <li>✔ Faster study execution</li>
                <li>✔ High-quality data integrity</li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>

      {/* ✅ SERVICES (UNCHANGED) */}
      {SERVICES.map((svc) => {
        const Icon = svc.icon;

        return (
          <section
            key={svc.id}
            className="section-pad border-b border-stone-100 last:border-none"
          >
            <div className="container-site">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${svc.reverse ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={svc.reverse ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-primary-500" />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-3">
                    {svc.title}
                  </h2>

                  <p className="text-stone-500 mb-5">{svc.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {svc.items.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>
                </div>

                <div
                  className={`rounded-xl overflow-hidden ${svc.reverse ? "lg:order-1" : ""}`}
                  style={{ aspectRatio: "16/11" }}
                >
                  <img
                    src={svc.link}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ✅ STEPS (UNCHANGED) */}
      <section className="section-pad bg-navy-900">
        <div className="container-site">
          <div ref={stepsRef}>
            <SectionHeader
              title="Our Operational Framework"
              subtitle="A structured and efficient approach ensuring compliance, quality, and timely execution."
              theme="light"
              className="mb-16"
            />
          </div>

          <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-navy-800 text-white flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-white font-semibold">{step.title}</h3>
                <p className="text-white/50 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
