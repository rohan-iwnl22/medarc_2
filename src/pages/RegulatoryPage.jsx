/**
 * RegulatoryPage.jsx
 * FULL MOBILE BANNER FIXED VERSION - IMPROVED HEADER LAYOUT
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
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button, SectionHeader } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Banner ── */
// const BannerURL = "https://ik.imagekit.io/umm5llpkg/MedArc/banner.png";
const BannerURL = "https://ik.imagekit.io/umm5llpkg/MedArc/bner.png";

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
    desc: "Ensuring your products remain compliant, updated, and market-ready with expert authoring and review of supporting data in accordance with Health Authority regulations.",
    items: [
      "Global Regulatory Submission for post approval changes",
      "EU: Regulatory Submission for variations (Type IA/IAIN, Type IB, Type II and Extension Applications)",
      "US: Regulatory Submission for Changes Being Effective (0, 30), Prior Approval Supplement, Annual Reports",
      "Regulatory oversight of change control to support end-to-end lifecycle compliance",
      "Development Safety Update Report (DSUR), Periodic Safety Update Report (PSUR), Periodic Benefit-Risk Evaluation Report (PBRER)",
      "Post-Approval Commitment Submissions",
      "General Correspondences",
      "Submission Management: Aggregate Report Scheduling",
    ],
    image: "https://ik.imagekit.io/umm5llpkg/MedArc/RA-Life%20Cycle.png",
    imageAlt: "Life Cycle Management",
  },
  {
    icon: FlaskConical,
    title: "CMC Writing Services",
    desc: "Transforming complex CMC requirements into globally compliant submissions.",
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
    imageAlt: "CMC Writing",
  },
  {
    icon: PenTool,
    title: "Medical Writing Services",
    desc: "Comprehensive medical writing support for clinical research, regulatory submissions, and study documentation.",
    items: [
      "Protocol & CSR writing",
      "IB preparation",
      "Phase I – IV studies report summery writing",
      "IND amendments, CTA updates",
      "Preparation of Informed Consent Documents (ICDs) in English with translation support (Marathi, Hindi)",
      "Design of Case Report Forms (CRFs) and study manuals",
    ],
    image:
      "https://ik.imagekit.io/umm5llpkg/MedArc/Medical%20Writing%20Services.png",
    imageAlt: "Medical Writing",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance & Guidelines",
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
    imageAlt: "Compliance",
  },
  {
    icon: Briefcase,
    title: "Specialized Assignment",
    desc: "Transforming regulatory challenges into streamlined, compliant solutions through tailored regulatory solutions and strategic global submissions.",
    items: [
      "Conduct gap analysis and dossier inspection while managing submissions to additional Health Authorities ",
      "Perform comprehensive dossier review and LCM assessment with strategic regulatory roadmap development for ownership transfer products",
      "Implement process optimization and lean methodologies for regulatory submissions",
      "Ensure efficiency, minimized timelines, and streamlined efforts across all regulatory activities",
    ],
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
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container-site px-4 sm:px-6 md:px-8">
          {/* Main intro section with improved header integration */}
          <div ref={sectionRef} className="mb-12 md:mb-16">
            {/* Hero Title - brings focus immediately */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-500 mb-4">
                Regulatory Affairs: Global Regulatory Submission
              </h1>
            </div>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-4xl mx-auto text-center">
              MedArc Clinical Research Organization offers comprehensive,
              end-to-end global regulatory submission along with CMC writing and
              medical writing services to support global product development and
              lifecycle management. Our expertise spans regulatory strategy,
              dossier preparation, submission management, and clinical
              documentation across the United States, Europe, ROW and other
              international markets. We provide full-spectrum regulatory and CMC
              support, including global submissions to health authorities across
              diverse therapeutic areas and product types, ensuring compliance,
              quality, and successful regulatory outcomes
            </p>
          </div>

          {/* Integrated header - now serves as a bridge to the detailed sections */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500">
              Comprehensive Regulatory Support
            </h2>
          </div>

          {/* Alternating Sections */}
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

      {/* IMPROVED CTA SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-site px-4 xs:px-5 sm:px-6 md:px-8 py-16 md:py-24 lg:py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Supporting Your Global Regulatory Submission
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with MedArc Clinical Research Organization for expert
              Regulatory Strategy, Regulatory Assessment, High-Quality Standard
              Regulatory Writing and Submission Services across global market
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                to="/contact"
                className="group bg-white text-primary-700 hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3 text-base font-semibold"
              >
                Contact Our Expert
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* <Button
                to="/services"
                variant="outline"
                className="group border-white text-white hover:bg-white hover:text-primary-700 transition-all duration-300 px-8 py-3 text-base font-semibold"
              >
                Explore Our Services
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
