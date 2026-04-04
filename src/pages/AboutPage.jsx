/**
 * AboutPage.jsx
 * Fixed: consistent section spacing + larger label and heading fonts
 */

import React from "react";
import {
  Microscope,
  Users,
  ShieldCheck,
  Target,
  Award,
  FlaskConical,
  Clock,
  Zap,
  Activity,
  DollarSign,
  FileCheck,
  Database,
} from "lucide-react";

import {
  Button,
  SectionHeader,
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

/* ── Why Choose Us ───────────────────────────────── */
const WHY_POINTS = [
  {
    icon: Users,
    title: "Experienced Team",
    desc: "10 years research industry experience",
  },
  {
    icon: Zap,
    title: "Responsive Approach",
    desc: "Quick and proactive support",
  },
  {
    icon: Award,
    title: "Quality Delivery",
    desc: "Timely and high-quality outcomes",
  },
  {
    icon: Activity,
    title: "Rapid Enrollment",
    desc: "Fast patient recruitment and strong retention",
  },
  { icon: Clock, title: "Quick Resolution", desc: "Efficient query handling" },
  { icon: Target, title: "Fast Start-Up", desc: "Expedited site initiation" },
  { icon: Zap, title: "Timely Execution", desc: "Accelerated study timelines" },
  {
    icon: Microscope,
    title: "Efficient Monitoring",
    desc: "Strong on-site oversight",
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    desc: "Optimized project budgets",
  },
  {
    icon: FlaskConical,
    title: "Therapeutic Expertise",
    desc: "Strong domain knowledge",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    desc: "Aligned with DCGI, EMA, FDA guidelines",
  },
  { icon: Database, title: "Flexible Systems", desc: "Paper & EDC experience" },
];

/* ═══════════════════════════════════════════════════ */
export default function AboutPage() {
  const storyRef = useReveal();

  return (
    <>
      {/* ══ HERO ═════════════════════════════════════ */}
      <section className="pt-36 pb-24 text-center bg-[#f7f6f4] border-b border-stone-100">
        <div className="container-site">
          {/* TAG */}
          <span className="inline-block text-xl font-semibold tracking-widest uppercase text-primary-500 mb-5">
            About MedArc
          </span>

          <h1 className="font-display text-5xl sm:text-6xl font-bold text-primary-500 mt-2 mb-6 leading-tight max-w-3xl mx-auto">
            Advancing Clinical Research Through Integrity & Excellence
          </h1>

          <p className="text-stone-500 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            MedArc Clinical Research maintains a strong network of experienced
            Principal Investigators, reputed hospitals, and research
            institutions, enabling efficient access to diverse patient
            populations. This allows us to meet protocol-specific requirements
            and support timely enrollment of eligible study participants.
          </p>
          <p className="text-stone-500 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            In India, MedArc provides comprehensive clinical trial support,
            including site management, project coordination, and strategic
            patient recruitment. Our approach combines innovative thinking,
            proactive problem-solving, and a skilled team to ensure smooth study
            execution.
          </p>
          <p className="text-stone-500 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            We emphasize transparency in all our operations, fostering trust and
            long-term partnerships with our clients. Additionally, our
            streamlined information management systems ensure timely reporting
            and provide sponsors with reliable, real-time access to critical
            study data.
          </p>

          <Button to="/contact" variant="accent">
            Partner With Us
          </Button>
        </div>
      </section>

      {/* ══ OVERVIEW ════════════════════════════════ */}
      <section className="py-28">
        <div className="container-site">
          <div ref={storyRef} className="reveal max-w-4xl mx-auto text-center">
            {/* Section label */}
            <span className="inline-block text-xl font-semibold tracking-widest uppercase text-primary-500 mb-4">
              Who We Are
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-500 mb-4 leading-tight">
              Clinical Research Support You Can Trust
            </h2>
            <p className="text-stone-400 text-lg mb-12">
              Delivering reliable, compliant, and efficient clinical trial
              execution.
            </p>

            <p className="text-stone-500 text-lg leading-relaxed mb-5">
              MedArc Clinical Research is committed to delivering reliable,
              compliant, and efficient clinical trial execution. We specialize
              in clinical research management and regulatory support for
              pharmaceuticals across all therapeutic areas, as well as
              nutraceuticals, cosmetics (consumer products), Ayurvedic studies,
              PI-initiated studies, observational studies, and medical devices.
            </p>
            <p className="text-stone-500 text-lg leading-relaxed mb-5">
              Our team works closely with investigators, institutions, sponsors,
              and CROs to ensure that studies are conducted in alignment with
              regulatory requirements and ethical standards. With a strong focus
              on quality and operational excellence, we support every stage of
              the clinical trial lifecycle.
            </p>
            <p className="text-stone-500 text-lg leading-relaxed">
              From site feasibility and study initiation to execution and
              close-out, MedArc Clinical Research provides end-to-end
              support—bridging the gap between investigators and sponsors while
              ensuring accuracy, compliance, and timely delivery of clinical
              research activities.
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ═══════════════════════════ */}
      <section className="py-28 bg-[#f7f6f4] border-y border-stone-100">
        <div className="container-site">
          {/* Section label */}
          <div className="text-center mb-14">
            <span className="inline-block text-xl font-semibold tracking-widest uppercase text-primary-500 mb-4">
              Our Strengths
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-500 mb-4 leading-tight">
              Why Choose MedArc
            </h2>
            <p className="text-stone-400 text-lg max-w-xl mx-auto">
              Delivering speed, quality, and compliance across every clinical
              study.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_POINTS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-md transition-all duration-300 flex gap-5"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-500 transition">
                  <Icon
                    size={22}
                    className="text-primary-500 group-hover:text-white transition"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-stone-900 mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY MEDARC ══════════════════════════════ */}
      <section className="py-28">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-500 mb-4">
              Why MedArc
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
              Driven by Quality, Compliance & Efficiency
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card flex gap-5">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary-50 flex items-center justify-center">
                  <Icon size={22} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 text-base mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-3">
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

      {/* ══ MISSION & VISION ════════════════════════ */}
      <section className="py-28 bg-navy-900">
        <div className="container-site grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Target size={24} className="text-primary-400" />
              <h3 className="text-white text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-white/60 text-base leading-relaxed">
              To charter new frontiers of medical and pharmaceutical science by
              delivering high-quality, professional clinical research site
              management services.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Award size={24} className="text-primary-400" />
              <h3 className="text-white text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-white/60 text-base leading-relaxed">
              To establish MedArc as India's trail-blazing Site Management CRO,
              building a network of highly qualified professionals and
              maintaining the highest standards of quality in clinical trials.
            </p>
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════ */}
      <section className="py-28 text-center">
        <div className="container-site">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4 leading-tight">
            Ready to collaborate with MedArc?
          </h2>
          <p className="text-stone-500 text-lg mb-10 max-w-md mx-auto">
            Connect with us to explore how we can support your clinical research
            and regulatory requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
