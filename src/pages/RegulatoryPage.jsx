/**
 * RegulatoryPage.jsx
 * Updated with Regulatory + Medical Writing Services - Alternating Layout with Images
 */

import React from "react";
import {
  FileText,
  Globe2,
  ShieldCheck,
  FlaskConical,
  Layers,
  PenTool,
  CheckCircle,
  TrendingUp,
  Briefcase,
} from "lucide-react";

import { Button, SectionHeader, CheckItem } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── New Sections with alternating layout support ────────────────────────────── */
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
    imageAlt: "Global Regulatory Submissions Pre-Approval",
  },
  {
    icon: Layers,
    title: "Life Cycle Management: Post-Approval",
    desc: "Ensuring your products remain compliant, updated, and market-ready with expert authoring and review of supporting data in accordance with Health Authority regulations.",
    items: [
      "Global Regulatory Submission for post approval changes across international markets",
      "EU: Regulatory Submission for variations (Type IA/IAIN, Type IB, Type II and Extension Applications)",
      "US: Regulatory Submission for Changes Being Effective (0, 30), Prior Approval Supplement, Annual Reports",
      "Regulatory oversight of change control to support end-to-end lifecycle compliance",
      "Development Safety Update Report (DSUR), Periodic Safety Update Report (PSUR), Periodic Benefit-Risk Evaluation Report (PBRER)",
      "Post-Approval Commitment Submissions",
      "General Correspondences",
      "Submission Management: Aggregate Report Scheduling",
    ],
    image: "https://ik.imagekit.io/umm5llpkg/MedArc/RA-Life%20Cycle.png",
    imageAlt: "Life Cycle Management Post-Approval",
  },
  {
    icon: FlaskConical,
    title: "CMC Writing Services",
    desc: "Transforming complex CMC requirements into globally compliant submissions",
    items: [
      "End-to-end CMC strategy & dossier development in line with global Health Authority requirements",
      "CMC change control review and regulatory assessment",
      "Expert Module 3 (CTD/eCTD) authoring for smooth regulatory review",
      "Experience with diverse medicinal products & dosage forms",
      "Strong Drug Substance & Product documentation",
      "High-quality QOS & technical summaries",
      "Seamless global CMC submissions",
    ],
    image: "https://ik.imagekit.io/umm5llpkg/MedArc/RA-CMC.png",
    imageAlt: "CMC Writing Services",
  },
  {
    icon: PenTool,
    title: "Medical Writing Services",
    desc: "Comprehensive medical writing support for clinical research, regulatory submissions, and study documentation.",
    items: [
      "Protocol and CSR writing",
      "IB preparation",
      "Phase I – IV studies report summary writing",
      "IND amendments, CTA updates",
      "Preparation of Informed Consent Documents (ICDs) in English with translation support (Marathi, Hindi)",
      "Design of Case Report Forms (CRFs) and study manuals",
    ],
    image:
      "https://ik.imagekit.io/umm5llpkg/MedArc/Medical%20Writing%20Services.png",
    imageAlt: "Medical Writing Services",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance & Global Guidelines",
    desc: "Ensuring regulatory submissions meet the highest global guidelines through precise dossier development and regulatory assessment, fully aligned with international standards.",
    items: [
      "Global compliance aligned with top health authority standards",
      "Template-driven dossier preparation for diverse submissions",
      "Strategic roadmaps tailored to regulatory review processes",
      "Adherence to ICH, 21 CFR, MAPPs, EU, US, and global regulations",
      "Translating complex regulatory guidelines into seamless compliance",
      "High-quality submissions that are compliant, efficient, and market-ready",
    ],
    image:
      "https://ik.imagekit.io/umm5llpkg/MedArc/RA-global%20gudline%20and%20complaince.png",
    imageAlt: "Regulatory Compliance & Global Guidelines",
  },
  {
    icon: Briefcase,
    title: "Specialized Assignment",
    desc: "Transforming regulatory challenges into streamlined, compliant solutions through tailored regulatory solutions and strategic global submissions.",
    items: [
      "Conduct gap analysis and dossier inspection while managing submissions to additional Health Authorities",
      "Perform comprehensive dossier review and LCM assessment with strategic regulatory roadmap development for ownership transfer products",
      "Implement process optimization and lean methodologies for regulatory submissions",
      "Ensure efficiency, minimized timelines, and streamlined efforts across all regulatory activities",
    ],
    image:
      "https://ik.imagekit.io/umm5llpkg/MedArc/RA%20specilized%20assiment.png",
    imageAlt: "Specialized Assignment Services",
  },
];

/* ── Alternating Section Component ── */
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
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 last:mb-0">
      {/* Image - Left on even, Right on odd */}
      <div className={`order-1 ${isEven ? "md:order-1" : "md:order-2"}`}>
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto rounded-2xl shadow-lg border border-stone-100"
        />
      </div>

      {/* Content */}
      <div className={`order-2 ${isEven ? "md:order-2" : "md:order-1"}`}>
        <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
          <Icon size={24} className="text-primary-500" />
        </div>

        <h3 className="font-display font-semibold text-2xl text-stone-900 mb-3">
          {title}
        </h3>

        <p className="text-stone-500 mb-5 leading-relaxed">{desc}</p>

        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-stone-700">
              <CheckCircle
                size={18}
                className="text-primary-500 shrink-0 mt-0.5"
              />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════ */
export default function RegulatoryPage() {
  const sectionRef = useReveal();

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 bg-[#f7f6f4] border-b border-stone-100">
        <div className="container-site text-center">
          <div className="mb-8 max-w-full mx-auto rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://ik.imagekit.io/umm5llpkg/MedArc/Regulatory-requirements.webp"
              alt="Clinical Research Banner"
              className="w-full h-full"
            />
          </div>
          <span className="tag-label mb-4 inline-block">
            Regulatory Affairs
          </span>

          <h1 className="text-primary-500 section-title max-w-3xl mx-auto mb-4">
            Regulatory Affairs & Medical Writing Services
          </h1>

          <p className="text-stone-500 max-w-3xl mx-auto leading-relaxed">
            MedArc Clinical Research offers comprehensive regulatory affairs and
            medical writing services to support global product development and
            lifecycle management. Our team brings strong expertise in regulatory
            strategy, dossier preparation, submission management, and clinical
            documentation across the United States, Europe, and international
            markets.
          </p>
        </div>
      </section>

      {/* MAIN SECTIONS - Alternating Layout */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div ref={sectionRef} className="reveal">
            <SectionHeader
              // label="Our Capabilities"
              title="Comprehensive Regulatory & Medical Writing Support"
              // subtitle="End-to-end services covering global submissions, lifecycle management, CMC writing, medical writing, compliance, and specialized regulatory assignments."
              className="mb-14"
            />
          </div>

          <div className="space-y-16 md:space-y-20">
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
          <h2 className="section-title-light mb-3 max-w-xl mx-auto">
            Need regulatory or medical writing support?
          </h2>

          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Partner with MedArc Clinical Research for expert regulatory
            strategy, documentation, submissions, and high-quality medical
            writing services across global markets.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="accent">
              Contact Our Experts
            </Button>
            <Button to="/services" variant="ghost">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
