import React from "react";
import { ShieldCheck, Users, FileText, ClipboardList } from "lucide-react";

import { Button, SectionHeader, CheckItem } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── IEC Sections ────────────────────────────── */
const SECTIONS = [
  {
    icon: Users,
    title: "Guidance & Support for Hospitals",
    desc: "Structured support for hospitals and institutions to establish compliant IECs aligned with CDSCO, DHR, and ICH-GCP guidelines.",
    items: [
      "Step-by-step guidance for IEC establishment as per CDSCO & DHR requirements",
      "Support in identifying and nominating IEC members (Chairperson, Member Secretary, layperson, etc.)",
      "Coordination with hospital administration for infrastructure and documentation readiness",
      "Guidance on roles, responsibilities, and functioning of IEC members",
    ],
  },
  {
    icon: ClipboardList,
    title: "Account Setup & SOP Development",
    desc: "Complete assistance in regulatory account setup and preparation of essential IEC documentation and SOPs.",
    items: [
      "Account creation on SUGAM portal (CDSCO) and DHR",
      "Initial documentation support and regulatory checklist preparation",
      "Preparation of IEC SOPs as per CDSCO & DHR guidelines",
      "Development of regulatory documentation checklist",
    ],
  },
  {
    icon: FileText,
    title: "Regulatory Submission & Query Management",
    desc: "End-to-end support for regulatory submissions and communication with authorities.",
    items: [
      "Submission on SUGAM portal and DHR platform",
      "Drafting and responding to regulatory queries",
      "Follow-up with regulatory authorities",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Approval & Post-Approval Support",
    desc: "Continuous support until approval and beyond for smooth IEC functioning.",
    items: [
      "Coordination until final approval from CDSCO & DHR",
      "Guidance for IEC meeting setup and operations",
    ],
  },
];

/* ═══════════════════════════════════════════════ */
const IEC = () => {
  const sectionRef = useReveal();

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 bg-[#f7f6f4] border-b border-stone-100">
        <div className="container-site text-center">
          <span className="tag-label mb-4 inline-block">
            Ethics Committee Services
          </span>

          <h1 className="section-title max-w-3xl mx-auto mb-4">
            Institutional Ethics Committee (IEC) Establishment
          </h1>

          <p className="text-stone-500 max-w-3xl mx-auto leading-relaxed">
            MedArc Clinical Research provides end-to-end support to hospitals
            and institutions for the establishment, registration, and smooth
            functioning of Institutional and Independent Ethics Committees (IEC)
            in compliance with CDSCO, DHR, and ICH-GCP guidelines.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad">
        <div className="container-site">
          <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 md:p-8">
            <p className="text-stone-700 leading-relaxed">
              We work closely with hospital management and IEC members to ensure
              a structured, compliant, and efficient setup — from initial
              planning and documentation to regulatory approvals and operational
              readiness.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN SECTIONS */}
      <section className="section-pad bg-[#f7f6f4]">
        <div className="container-site">
          <div ref={sectionRef} className="reveal">
            <SectionHeader
              label="Our Capabilities"
              title="Complete IEC Setup & Regulatory Support"
              subtitle="End-to-end services covering IEC establishment, documentation, regulatory submissions, and post-approval support."
              className="mb-14"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-center">
        <div className="container-site">
          <h2 className="section-title-light mb-3 max-w-xl mx-auto">
            Setting up an IEC for your institution?
          </h2>

          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Partner with MedArc Clinical Research for seamless IEC
            establishment, regulatory approvals, and ongoing compliance support.
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
};

export default IEC;
