/**
 * RegulatoryPage.jsx
 * FULL MOBILE BANNER FIXED VERSION
 * Copy-Paste Ready
 */

import React from "react";
import {
  FileText,
  ShieldCheck,
  FlaskConical,
  Layers,
  PenTool,
  CheckCircle,
  Briefcase,
} from "lucide-react";

import { SectionHeader } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Banner ── */
const BannerURL =
  "https://ik.imagekit.io/umm5llpkg/MedArc/regulatory%20compilance.png";

/* ── Data ── */
const SECTIONS = [
  {
    icon: FileText,
    title: "Global Regulatory Submissions: Pre-Approval",
    desc: "Providing end-to-end dossier preparation, regulatory evaluation, and worldwide submissions for diverse formulations and dosage forms.",
    items: [
      "National Drug Applications (NDAs)/Biological License Applications (BLAs)",
      "Generic (ANDA/ANDS)/Biosimilar applications",
      "Marketing Authorization Applications (MAAs including National, De-Centralized and Centralized, MRP)",
      "Global Dossier Submissions",
      "Pre-approval submissions: Correspondences, Amendments etc.",
      "ROW submissions",
      "Submission Operation Management",
    ],
    image:
      "https://ik.imagekit.io/umm5llpkg/MedArc/Global%20Regulatory%20Submissions.png",
    imageAlt: "Global Regulatory Submissions",
  },
  {
    icon: Layers,
    title: "Life Cycle Management: Post-Approval",
    desc: "Ensuring your products remain compliant and market-ready.",
    items: [
      "Global Regulatory Submission for post approval changes",
      "EU Variations (Type IA/IB/II)",
      "US Supplements & Annual Reports",
      "Lifecycle compliance & oversight",
    ],
    image: "https://ik.imagekit.io/umm5llpkg/MedArc/RA-Life%20Cycle.png",
    imageAlt: "Life Cycle Management",
  },
  {
    icon: FlaskConical,
    title: "CMC Writing Services",
    desc: "Transforming complex CMC requirements into compliant submissions.",
    items: [
      "CMC strategy & dossier development",
      "Module 3 authoring",
      "Drug substance & product documentation",
      "Global submissions",
    ],
    image: "https://ik.imagekit.io/umm5llpkg/MedArc/RA-CMC.png",
    imageAlt: "CMC Writing",
  },
  {
    icon: PenTool,
    title: "Medical Writing Services",
    desc: "Comprehensive writing support for clinical and regulatory documentation.",
    items: [
      "Protocol & CSR writing",
      "IB preparation",
      "CRFs & study manuals",
      "ICD preparation",
    ],
    image:
      "https://ik.imagekit.io/umm5llpkg/MedArc/Medical%20Writing%20Services.png",
    imageAlt: "Medical Writing",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance & Guidelines",
    desc: "Ensuring global compliance across all submissions.",
    items: [
      "ICH, US FDA, EU compliance",
      "Strategic regulatory roadmap",
      "Dossier preparation",
    ],
    image:
      "https://ik.imagekit.io/umm5llpkg/MedArc/RA-global%20gudline%20and%20complaince.png",
    imageAlt: "Compliance",
  },
  {
    icon: Briefcase,
    title: "Specialized Assignment",
    desc: "Tailored regulatory solutions for complex challenges.",
    items: ["Gap analysis", "Dossier review", "Process optimization"],
    image:
      "https://ik.imagekit.io/umm5llpkg/MedArc/RA%20specilized%20assiment.png",
    imageAlt: "Specialized Assignment",
  },
];

/* ── Alternating Sections ── */
const AlternatingSection = ({
  icon: Icon,
  title,
  desc,
  items,
  image,
  imageAlt,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Image */}
      <div className={isEven ? "" : "lg:order-2"}>
        <img
          src={image}
          alt={imageAlt}
          className="w-full rounded-2xl object-cover shadow-md"
        />
      </div>

      {/* Content */}
      <div className={isEven ? "" : "lg:order-1"}>
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
          <Icon className="text-primary-500 w-6 h-6" />
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mb-4 leading-snug">
          {title}
        </h3>

        <p className="text-sm sm:text-base md:text-lg text-stone-600 mb-6 leading-relaxed">
          {desc}
        </p>

        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle
                size={18}
                className="text-primary-500 mt-1 flex-shrink-0"
              />
              <span className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ── Main Page ── */
export default function RegulatoryPage() {
  const sectionRef = useReveal();

  return (
    <>
      {/* HERO SECTION FIXED FOR MOBILE */}
      <section className="relative overflow-hidden">
        <div className="relative h-[260px] sm:h-[420px] md:h-[550px] lg:h-[80vh] w-full">
          <img
            src={BannerURL}
            alt="Regulatory Banner"
            className="
              absolute inset-0
              w-full h-full
              object-cover
              object-[78%_center]
              sm:object-center
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/55 via-primary-600/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container-site px-4 sm:px-6 md:px-8">
          <div ref={sectionRef}>
            <SectionHeader
              title="Comprehensive Regulatory Support"
              className="mb-12 md:mb-16"
            />
          </div>

          <div className="space-y-14 md:space-y-20">
            {SECTIONS.map((section, idx) => (
              <AlternatingSection
                key={section.title}
                {...section}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
