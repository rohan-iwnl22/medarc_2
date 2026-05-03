/**
 * ServicesPage.jsx
 * Revamped: Uniform fonts matching HomePage
 * Creative Hero + Original Services & Steps retained
 * Fixed: Banner image responsive on mobile screens
 */

import React from "react";
import { Search, Scale, Rocket, ClipboardList, FileCheck2 } from "lucide-react";

import { Button, SectionHeader, CheckItem } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Banner ── */
const BannerURL =
  "https://clinfinite.com/img/Clinical_Developmen_Solutions_Background.webp";

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
    title: "Study Initiations",
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
  const heroRef = useReveal();
  const stepsRef = useReveal();

  return (
    <>
      {/* 🔥 CREATIVE HERO WITH RESPONSIVE BANNER - FIXED FOR MOBILE */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image - Responsive for all screen sizes */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={BannerURL}
            alt="Clinical Trial Management"
            className="w-full h-full object-cover object-center"
            style={{
              objectPosition: "center center",
            }}
          />
        </div>

        {/* Optional: Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 sm:bg-black/20 md:bg-gradient-to-r md:from-primary-900/80 md:via-primary-800/60 md:to-transparent" />

        {/* Content */}
        <div className="container-site relative z-10 px-4 xs:px-5 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT - Hero Content */}
            <div ref={heroRef} className="reveal text-white">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 xs:mb-5 sm:mb-6 leading-tight">
                Clinical Trial Management
              </h1>

              <p className="text-sm xs:text-base sm:text-base md:text-lg text-white/90 sm:text-white/80 mb-6 xs:mb-7 sm:mb-8 max-w-lg leading-relaxed">
                Delivering seamless, compliant, and high-quality clinical trial
                solutions from feasibility to study close-out.
              </p>
            </div>

            {/* RIGHT - Optional Card (Commented) */}
          </div>
        </div>
      </section>

      {/* ✅ SERVICES SECTION WITH UNIFORM FONTS */}
      {SERVICES.map((svc, idx) => {
        const Icon = svc.icon;
        const serviceRef = useReveal();

        return (
          <section
            key={svc.id}
            className={`py-12 xs:py-14 sm:py-16 md:py-20 border-b border-stone-100 last:border-none ${
              idx % 2 === 1 ? "bg-[#f7f6f4]" : "bg-white"
            }`}
          >
            <div className="container-site px-4 xs:px-5 sm:px-6 md:px-8">
              <div
                ref={serviceRef}
                className="reveal grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 items-center"
              >
                <div className={svc.reverse ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-xl bg-primary-50 flex items-center justify-center mb-4 xs:mb-5 sm:mb-6">
                    <Icon size={24} className="text-primary-500" />
                  </div>

                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mb-3 xs:mb-4 leading-snug">
                    {svc.title}
                  </h2>

                  <p className="text-sm xs:text-base sm:text-base md:text-lg text-stone-600 mb-5 xs:mb-6 leading-relaxed">
                    {svc.desc}
                  </p>

                  <ul className="space-y-2 xs:space-y-2.5 mb-6 xs:mb-7">
                    {svc.items.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>
                </div>

                <div
                  className={`rounded-xl sm:rounded-2xl overflow-hidden shadow-md ${
                    svc.reverse ? "lg:order-1" : ""
                  }`}
                  style={{ aspectRatio: "16/11" }}
                >
                  <img
                    src={svc.link}
                    alt={svc.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ✅ STEPS SECTION WITH UNIFORM FONTS */}
      <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="container-site px-4 xs:px-5 sm:px-6 md:px-8">
          <div
            ref={stepsRef}
            className="reveal text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16"
          >
            <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold tracking-wide sm:tracking-widest uppercase text-white mb-3 sm:mb-4">
              Our Operational Framework
            </h2>
            <p className="text-base xs:text-lg sm:text-lg md:text-xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
              A structured and efficient approach ensuring compliance, quality,
              and timely execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xs:gap-7 sm:gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center group">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 text-white flex items-center justify-center mx-auto mb-4 xs:mb-5 text-xl xs:text-2xl font-bold backdrop-blur-sm">
                  {step.num}
                </div>
                <h3 className="text-base xs:text-lg sm:text-lg md:text-xl font-semibold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm xs:text-base text-primary-100 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
