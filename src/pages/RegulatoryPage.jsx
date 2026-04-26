/**
 * RegulatoryPage.jsx
 * Final: Premium Hero + All sections retained (no removals)
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

import { Button, SectionHeader } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Banner ── */
// const BannerURL =
//   "https://unsolvedlegal.com/wp-content/uploads/2026/02/legal-compliance.webp";

// const BannerURL =
//   "https://www.astrixinc.com/wp-content/uploads/2021/07/compliance3.jpg";

// const BannerURL =
//   "https://t4.ftcdn.net/jpg/04/52/11/87/360_F_452118798_xjpo2u4o06cNOLTm6IandQMspSQjRU9h.jpg";

const BannerURL =
  "https://ik.imagekit.io/umm5llpkg/MedArc/regulatory%20compilance.png";

/* ── Sections Data (UNCHANGED) ── */
const SECTIONS = [
  {
    icon: FileText,
    title: "Global Regulatory Submissions: Pre-Approval",
    desc: "Providing end-to-end dossier preparation, regulatory evaluation, and worldwide submissions for diverse formulations and dosage forms.",
    items: [
      "National Drug Applications (NDAs)/Biological License Applications (BLAs)",
      "Generic (ANDA/ANDS)/Biosimilar applications",
      "Marketing Authorization Applications (MAAs including National, De-Centralize and Centralize, MRP)",
      "Global Dossier Submissions",
      "Pre-approval submission: Correspondences, Amendments etc",
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

/* ── Alternating Section ── */
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
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className={isEven ? "" : "md:order-2"}>
        <img
          src={image}
          alt={imageAlt}
          className="w-full rounded-2xl object-cover"
        />
      </div>

      <div className={isEven ? "" : "md:order-1"}>
        <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
          <Icon className="text-primary-500" />
        </div>

        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-stone-500 mb-4">{desc}</p>

        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <CheckCircle size={18} className="text-primary-500 mt-1" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════ */
export default function RegulatoryPage() {
  const sectionRef = useReveal();

  return (
    <>
      {/* 🔥 HERO (FIXED PROPERLY) */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <img
          src={BannerURL}
          alt="Regulatory Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ✅ SOFT GRADIENT FIX */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/60 via-primary-600/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="container-site relative z-10">
          <div className="max-w-2xl text-white">
            {/* <span className="uppercase tracking-widest text-sm text-white/80 mb-4 block">
              Regulatory Affairs
            </span> */}

            {/* <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Regulatory & Medical Writing Services
            </h1>

            <p className="text-white/85 mb-8 leading-relaxed">
              Delivering global regulatory excellence with strategic
              submissions, lifecycle management, and high-quality medical
              writing support.
            </p> */}
          </div>
        </div>
      </section>

      {/* ✅ COMPREHENSIVE SECTION (RETAINED) */}
      <section className="section-pad">
        <div className="container-site">
          <div ref={sectionRef}>
            <SectionHeader
              title="Comprehensive Regulatory Support"
              className="mb-14"
            />
          </div>

          <div className="space-y-16">
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

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-center">
        <div className="container-site">
          <h2 className="section-title-light mb-3">
            Need regulatory or medical writing support?
          </h2>

          <p className="text-white/60 mb-8">
            Partner with MedArc for expert regulatory strategy and submissions.
          </p>

          <Button to="/contact" variant="accent">
            Contact Our Experts
          </Button>
        </div>
      </section>
    </>
  );
}
