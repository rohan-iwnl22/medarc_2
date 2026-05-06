/**
 * ServicesPage.jsx
 * Revamped: Uniform fonts matching HomePage
 * Creative Hero + Original Services & Steps retained
 * Fixed: Banner image responsive on mobile screens
 * Fixed: Images scale horizontally to show all text without distortion
 * Fixed: CheckCircle items now render properly
 */

import React from "react";
import {
  Search,
  Scale,
  Rocket,
  ClipboardList,
  FileCheck2,
  CheckCircle,
} from "lucide-react";

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
    title: "Strategic Site Selection & Feasibility",
    desc: "We identify the optimal trial landscape, balancing protocol complexity with site performance to maximize recruitment velocity and data quality..",
    items: [
      "Data-Driven Selection: Rigorous evaluation of site infrastructure, patient access, and investigator performance metrics.",
      "Feasibility Analytics: Evidence-based site mapping to accurately predict recruitment timelines and avoid enrolment bottlenecks.",
      "Investigator Alignment: Identifying and onboarding Principal Investigators with proven track records in your specific therapeutic indication.",
    ],
    // link: "https://ik.imagekit.io/umm5llpkg/MedArc/Strategic%20Site%20Selection%20&%20Feasibility.png",
    link: "https://ik.imagekit.io/umm5llpkg/MedArc/img11.png",
    reverse: false,
  },
  {
    id: "startup",
    icon: Rocket,
    title: "Accelerated Site Start-Up",
    desc: "We streamline the start-up phase to ensure your trial is activation-ready, saving you time and reducing project complexity.",
    items: [
      "Regulatory Submission Strategy: We prepare and manage all site-specific documentation and regulatory binders, ensuring accurate and timely submissions to the Ethics Committee (EC) or Institutional Review Board (IRB).",
      "Expedited Activation: We oversee the end-to-end process of essential document collection, site contract negotiations, and final study approvals to minimize delays and get your site active quickly.",
      "Site Initiation (SIV): We ensure smooth site readiness by coordinating with investigators and site staff, verifying that all study materials are in place and the team is fully trained to begin the trial.",
    ],
    // link: "https://ik.imagekit.io/umm5llpkg/MedArc/Accelerated%20Site%20Start-Up.png",
    link: "https://ik.imagekit.io/umm5llpkg/MedArc/img12.png",
    reverse: true,
  },
  {
    id: "management",
    icon: ClipboardList,
    title: "Comprehensive Study Execution & Oversight",
    desc: "We serve as the operational nexus, maintaining protocol fidelity, rigorous patient safety standards, and high-quality data collection throughout the clinical phase.",
    items: [
      "Strategic Protocol Alignment: We prioritize deep scientific understanding. By internalizing the study rationale and mastering the primary and secondary endpoints, our team ensures that all site-level activities are precisely aligned with the trial's success criteria. We don't just capture data; we understand what that data means for the trial's objectives.",
      "Rigorous Pharmacovigilance (PV) & Safety Reporting: We provide comprehensive Adverse Event (AE) and Serious Adverse Event (SAE) management in strict adherence to Regulatory guidelines. Our team facilitates the accurate assessment, documentation, and expedited reporting of all safety events to the Sponsor, Ethics Committees, and relevant regulatory authorities within mandatory submission timelines, ensuring full compliance and uncompromising patient safety.",
      "Patient-Centric Retention: Implementation of engagement strategies to maintain high recruitment levels and reduce attrition, including logistical support and patient visit tracking.",
      "Data & Logistics Integrity: Rigorous oversight of IP management, cold-chain sample storage, and real-time monitoring of source data, electronic data to minimize deviations and ensure audit-ready data integrity.",
    ],
    link: "https://ik.imagekit.io/umm5llpkg/MedArc/Comprehensive%20Study%20Execution%20&%20Oversight.png",
    reverse: false,
  },
  {
    id: "closeout",
    icon: FileCheck2,
    title: "Audit-Ready Close-Out & Archiving",
    desc: "We ensure a seamless trial close-out process, delivering a clean, fully reconciled, and inspection-ready database.",
    items: [
      "Data Reconciliation: Validating all trial records to ensure data is complete, accurate, and ready for final analysis.",
      "Regulatory Compliance: Systematic verification of the Trial Master File (TMF) and essential documents.",
      "GCP-Compliant Archiving: Secure, long-term document retention strategies tailored to satisfy all regulatory audit requirements.",
    ],
    link: "https://ik.imagekit.io/umm5llpkg/MedArc/Close-Out%20&%20Archiving.png",
    reverse: true,
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

  // Helper function to format bullet points with bold headers
  const formatBulletPoint = (text) => {
    const colonIndex = text.indexOf(":");
    if (colonIndex !== -1) {
      const header = text.substring(0, colonIndex + 1);
      const rest = text.substring(colonIndex + 1);
      return (
        <>
          <span className="font-bold text-stone-800">{header}</span>
          {rest}
        </>
      );
    }
    return text;
  };

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

      {/* ✅ SERVICES SECTION - IMAGES SCALE HORIZONTALLY TO SHOW ALL TEXT */}
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
                className="reveal grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 items-start lg:items-center"
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
                    {svc.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle
                          size={18}
                          className="text-primary-500 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-stone-600 text-sm xs:text-base leading-relaxed">
                          {formatBulletPoint(item)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Container - Full width, taller aspect ratio to show all horizontal content */}
                <div className={`${svc.reverse ? "lg:order-1" : ""}`}>
                  <div className="w-full h-[450px] rounded-xl overflow-hidden">
                    <img
                      src={svc.link}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
