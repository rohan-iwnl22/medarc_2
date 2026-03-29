/**
 * AboutPage.jsx
 * Updated with real MedArc Clinical Research content
 */

import React from "react";
import {
  Microscope,
  Users,
  ShieldCheck,
  Target,
  Award,
  FlaskConical,
} from "lucide-react";

import {
  Button,
  SectionHeader,
  StatCard,
  CheckItem,
  TagLabel,
} from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Core Strengths ──────────────────────────────── */
const VALUES = [
  {
    icon: Microscope,
    title: "Scientific Excellence",
    desc: "Strong expertise in clinical research processes and regulatory frameworks.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Exceptionally qualified professionals with hands-on clinical trial experience.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    desc: "Strict adherence to ICH-GCP, ethical guidelines, and global standards.",
  },
  {
    icon: FlaskConical,
    title: "End-to-End Support",
    desc: "Complete trial support from feasibility to study close-out.",
  },
];

/* ═══════════════════════════════════════════════════ */
export default function AboutPage() {
  const storyRef = useReveal();

  return (
    <>
      {/* ══ HERO ═════════════════════════════════════ */}
      <section className="pt-32 pb-16 text-center bg-[#f7f6f4] border-b border-stone-100">
        <div className="container-site">
          <TagLabel>About MedArc</TagLabel>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mt-4 mb-4 leading-tight max-w-3xl mx-auto">
            Advancing Clinical Research Through{" "}
            <span className="text-gradient">Integrity & Excellence</span>
          </h1>

          <p className="text-stone-500 max-w-3xl mx-auto leading-relaxed mb-8">
            MedArc Clinical Research is a professional clinical research support
            organization committed to delivering high-quality services in
            clinical trials and research management. We support investigators,
            hospitals, sponsors, and CROs in conducting ethical, compliant, and
            efficient clinical studies.
          </p>

          <Button to="/contact" variant="accent">
            Partner With Us
          </Button>
        </div>
      </section>

      {/* ══ OVERVIEW ════════════════════════════════ */}
      <section className="section-pad">
        <div className="container-site">
          <div ref={storyRef} className="reveal max-w-4xl mx-auto text-center">
            <SectionHeader
              label="Who We Are"
              title="Clinical Research Support You Can Trust"
              subtitle="Delivering reliable, compliant, and efficient clinical trial execution."
              className="mb-8"
            />

            <p className="text-stone-500 leading-relaxed mb-4">
              We specialize in clinical research management and regulatory
              support for pharmaceutical, biotechnology, and medical device
              research. Our team works closely with investigators and
              institutions to ensure studies are conducted according to
              regulatory guidelines, Good Clinical Practice (GCP), and ethical
              standards.
            </p>

            <p className="text-stone-500 leading-relaxed">
              MedArc Clinical Research bridges investigators with sponsors and
              CROs, delivering end-to-end clinical trial support from site
              feasibility to study close-out while ensuring quality, compliance,
              and efficient study execution.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SERVICES OVERVIEW ═══════════════════════ */}
      <section className="section-pad bg-[#f7f6f4]">
        <div className="container-site">
          <SectionHeader
            label="Our Capabilities"
            title="End-to-End Clinical Trial Support"
            subtitle="Comprehensive services covering every stage of clinical research."
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Site Selection & Feasibility",
              "Regulatory & Ethics Support",
              "Study Start-Up Services",
              "Clinical Trial Management",
              "Study Close-Out & Documentation",
            ].map((item) => (
              <div key={item} className="card">
                <CheckItem>{item}</CheckItem>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY MEDARC ═════════════════════════════ */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeader
            label="Why MedArc"
            title="Driven by Quality, Compliance & Efficiency"
            className="mb-12"
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                  <Icon size={18} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 text-sm">
                    {title}
                  </h3>
                  <p className="text-xs text-stone-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra highlights */}
          <div className="mt-10 space-y-2">
            {[
              "Rich experience in Phase I–IV clinical trials",
              "High client retention due to responsiveness & performance",
              "Cost-effective solutions with uncompromised quality",
            ].map((point) => (
              <CheckItem key={point}>{point}</CheckItem>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MISSION & VISION ═══════════════════════ */}
      <section className="section-pad bg-navy-900">
        <div className="container-site grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Target className="text-primary-400" />
              <h3 className="text-white font-semibold">Our Mission</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              To charter new frontiers of medical and pharmaceutical science by
              delivering high-quality, professional clinical research site
              management services.
            </p>
          </div>

          {/* Vision */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Award className="text-primary-400" />
              <h3 className="text-white font-semibold">Our Vision</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              To establish MedArc as India’s trail-blazing Site Management CRO,
              building a network of highly qualified professionals and
              maintaining the highest standards of quality in clinical trials.
            </p>
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════ */}
      <section className="py-20 text-center">
        <div className="container-site">
          <h2 className="section-title mb-3">
            Ready to collaborate with MedArc?
          </h2>

          <p className="text-stone-500 mb-8 max-w-md mx-auto">
            Connect with us to explore how we can support your clinical research
            and regulatory requirements.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/contact">Contact Us</Button>
            <Button to="/services" variant="outline">
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
