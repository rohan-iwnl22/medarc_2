/**
 * RegulatoryPage.jsx
 * Updated with real MedArc Regulatory Services content
 */

import React from "react";
import {
  FileText,
  Globe2,
  ShieldCheck,
  FlaskConical,
  Layers,
} from "lucide-react";

import { Button, SectionHeader, CheckItem } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Updated Sections ────────────────────────────── */
const SECTIONS = [
  {
    icon: FileText,
    title: "Global Regulatory Submissions & Lifecycle Management",
    desc: "Comprehensive support for pre- and post-market regulatory activities across US, Europe, and global markets.",
    items: [
      "Preparation of (A)NDA & MAA dossiers in CTD/eCTD format",
      "Lifecycle management (CBE, PAS, Annual Reports)",
      "Post-approval variations (Type I & Type II)",
      "Conversion of NDA/IND dossiers into CTD/eCTD",
      "Regulatory strategy for OTC & prescription products",
    ],
  },
  {
    icon: FlaskConical,
    title: "CMC & Dosage Form Expertise",
    desc: "Strong expertise in Chemistry, Manufacturing & Controls (CMC) across diverse pharmaceutical dosage forms.",
    items: [
      "Solid oral dosage forms",
      "Liquid oral formulations",
      "Sterile dry powders & lyophilized products",
      "Injectable formulations (SDV & MDV)",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance & Global Guidelines",
    desc: "Ensuring full compliance with global regulatory frameworks and evolving industry standards.",
    items: [
      "US FDA & European regulatory frameworks",
      "ICH guidelines compliance",
      "cGMP adherence",
      "Global regulatory trends & updates",
    ],
  },
  {
    icon: Layers,
    title: "Product Lifecycle & Regulatory Maintenance",
    desc: "End-to-end regulatory support throughout the product lifecycle.",
    items: [
      "Maintenance of NDA, ANDA & MAA applications",
      "Labeling review & compliance",
      "CMC review & regulatory intelligence",
      "Global product registration & updates",
    ],
  },
  {
    icon: Globe2,
    title: "FDA Compliance & Registration Support",
    desc: "Complete support for FDA regulatory compliance and submission processes.",
    items: [
      "Drug establishment registration",
      "NDC labeler code applications",
      "Product listing & labeling compliance",
      "FDA Electronic Submissions Gateway (ESG) coordination",
    ],
  },
];

/* ═══════════════════════════════════════════════════ */
export default function RegulatoryPage() {
  const sectionRef = useReveal();

  return (
    <>
      {/* ══ HERO ═══════════════════════════════════ */}
      <section className="pt-32 pb-16 bg-stone-50 border-b border-stone-100">
        <div className="container-site text-center">
          <span className="tag-label mb-4 inline-block">
            Regulatory Affairs
          </span>

          <h1 className="section-title max-w-3xl mx-auto mb-4">
            Regulatory Affairs & Medical Writing Services
          </h1>

          <p className="text-stone-500 max-w-3xl mx-auto leading-relaxed">
            MedArc Clinical Research offers comprehensive regulatory affairs and
            medical writing services to support global product development and
            lifecycle management. Our team brings strong expertise in regulatory
            strategy, dossier preparation, and submission management across the
            United States, Europe, and international markets.
          </p>
        </div>
      </section>

      {/* ══ INTRO HIGHLIGHT ═════════════════════════ */}
      <section className="section-pad">
        <div className="container-site">
          <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 md:p-8">
            <p className="text-stone-700 leading-relaxed">
              We provide specialized support in regulatory documentation,
              clinical and non-clinical literature searches, product research,
              Structured Product Labeling (SPL), FDA Electronic Submissions
              Gateway (ESG), Certificate of Pharmaceutical Product (CPP), and
              Site Master File (SMF) preparation.
            </p>
          </div>
        </div>
      </section>

      {/* ══ MAIN SECTIONS ═══════════════════════════ */}
      <section className="section-pad bg-stone-50">
        <div className="container-site">
          <div ref={sectionRef} className="reveal">
            <SectionHeader
              label="Our Capabilities"
              title="Comprehensive Regulatory Support"
              subtitle="End-to-end regulatory services covering submissions, compliance, lifecycle management, and FDA support."
              className="mb-14"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTIONS.map(({ icon: Icon, title, desc, items }) => (
              <div key={title} className="card">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary-500" />
                </div>

                <h3 className="font-display font-semibold text-stone-900 mb-2">
                  {title}
                </h3>

                <p className="text-sm text-stone-500 mb-4 leading-relaxed">
                  {desc}
                </p>

                <ul className="space-y-1">
                  {items.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════ */}
      <section className="py-20 bg-navy-900 text-center">
        <div className="container-site">
          <h2 className="section-title-light mb-3 max-w-xl mx-auto">
            Need regulatory support for your product?
          </h2>

          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Partner with MedArc Clinical Research for reliable regulatory
            strategy, documentation, and submission support across global
            markets.
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
