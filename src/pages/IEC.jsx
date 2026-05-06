import React from "react";
import {
  ShieldCheck,
  Users,
  FileText,
  ClipboardList,
  CheckCircle,
} from "lucide-react";

import { Button, SectionHeader, CheckItem } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Banner ── */
const BannerURL = "https://ik.imagekit.io/umm5llpkg/MedArc/ec.png";

/* ── IEC Sections ────────────────────────────── */
const SECTIONS = [
  {
    icon: Users,
    title: "Strategic Committee Establishment",
    // desc: "Structured support for hospitals and institutions to establish compliant IECs aligned with CDSCO, DHR, and ICH-GCP guidelines.",
    items: [
      "Expert guidance on structuring the IEC to meet national regulatory composition requirements.",
      "Support in the professional identification and nomination of committee members (Chairperson, Member Secretary, layperson, etc.).",
      "Defining clear roles, responsibilities, and operational mandates for committee members.",
    ],
  },
  {
    icon: ClipboardList,
    title: "Pre-submission regulatory Support",
    // desc: "Complete assistance in regulatory account setup and preparation of essential IEC documentation and SOPs.",
    items: [
      "End-to-end assistance with account provisioning on the SUGAM portal (CDSCO) and DHR platform.",
      "Development of robust, site-specific Standard Operating Procedures (SOPs) compliant with national guidelines.",
      "Preparation of all essential regulatory documentation and comprehensive document checklists.",
    ],
  },
  {
    icon: FileText,
    title: "Submission Strategy & Regulatory Liaison",
    // desc: "End-to-end support for regulatory submissions and communication with authorities.",
    items: [
      "Full ownership of the submission lifecycle on national portals.",
      "Technical drafting and timely submission of responses to regulatory queries.",
      "Proactive follow-up with regulatory authorities to ensure application transparency and status tracking.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Sustained Operational Support",
    // desc: "Continuous support until approval and beyond for smooth IEC functioning.",
    items: [
      "Continuous advisory support throughout the approval process and beyond.",
      "Best-practice guidance for IEC meeting orchestration, agenda management, and the maintenance of accurate, audit-ready meeting records.",
    ],
  },
];

/* ═══════════════════════════════════════════════ */
const IEC = () => {
  const sectionRef = useReveal();

  return (
    <>
      {/* 🔥 HERO WITH UNIFORM FONTS */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src={BannerURL}
          alt="IEC Banner"
          className="absolute inset-0 w-full h-[850px] object-fit"
        />

        <div className="absolute inset-0">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-primary-700/60 via-primary-600/30 to-transparent" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" /> */}
        </div>
      </section>

      {/* ✅ INTRO WITH UNIFORM FONTS */}
      {/* <section className="py-12 xs:py-14 sm:py-16 md:py-20">
        <div className="container-site px-4 xs:px-5 sm:px-6 md:px-8">
          <div className="bg-primary-50 border border-primary-100 rounded-xl sm:rounded-2xl p-6 xs:p-7 sm:p-8">
            <p className="text-sm xs:text-base sm:text-base md:text-lg text-stone-700 leading-relaxed">
              We work closely with hospital management and IEC members to ensure
              a structured, compliant, and efficient setup — from initial
              planning and documentation to regulatory approvals and operational
              readiness.
            </p>
          </div>
        </div>
      </section> */}

      {/* ✅ MAIN SECTIONS WITH UNIFORM FONTS */}
      <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-[#f7f6f4]">
        <div className="container-site px-4 xs:px-5 sm:px-6 md:px-8">
          <div
            ref={sectionRef}
            className="reveal text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-primary-500 mb-4">
              Complete Ethics committee Set Up Services
            </h2>
            <p className="text-base xs:text-lg sm:text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
              We provide comprehensive support for hospitals and research
              institutions to establish and maintain an Ethics Committee (IEC)
              that is fully compliant with CDSCO and DHR regulatory mandates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 xs:gap-6 sm:gap-7 md:gap-8">
            {SECTIONS.map(({ icon: Icon, title, desc, items }) => (
              <div
                key={title}
                className="bg-white rounded-xl sm:rounded-2xl p-5 xs:p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 hover:border-primary-200"
              >
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-xl bg-primary-50 flex items-center justify-center mb-4 xs:mb-5 sm:mb-6">
                  <Icon
                    size={20}
                    className="text-primary-500 w-5 h-5 xs:w-6 xs:h-6"
                  />
                </div>

                <h3 className="text-lg xs:text-xl sm:text-xl md:text-2xl font-semibold text-stone-900 mb-2 xs:mb-3 leading-snug">
                  {title}
                </h3>

                <p className="text-sm xs:text-base sm:text-base md:text-base text-stone-600 mb-4 xs:mb-5 leading-relaxed">
                  {desc}
                </p>

                <ul className="space-y-2">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-primary-500 flex-shrink-0 mt-1"
                      />
                      <span className="text-stone-600 text-sm xs:text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IEC;
