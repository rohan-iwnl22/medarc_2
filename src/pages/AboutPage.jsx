/**
 * AboutPage.jsx
 * Sections:
 *  1. Hero — heading + stats
 *  2. Our Story + values grid
 *  3. Leadership team
 *  4. Approach + certifications (dark)
 *  5. Trust logos
 *  6. CTA
 */

import React from "react";
import {
  Microscope, Users, Globe2, ShieldCheck,
  Target, Lightbulb, Award,
} from "lucide-react";
import { Button, SectionHeader, StatCard, CheckItem, TagLabel } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

/* ── Stats ─────────────────────────────────────────── */
const STATS = [
  { value: "15+",  label: "Years Experience" },
  { value: "500+", label: "Trials Completed" },
  { value: "50+",  label: "Countries Active" },
  { value: "98%",  label: "Client Retention" },
];

/* ── Values ────────────────────────────────────────── */
const VALUES = [
  {
    icon:  Microscope,
    title: "Scientific Integrity",
    desc:  "We uphold the highest standards of scientific rigour and ethical conduct in every study we manage.",
  },
  {
    icon:  Users,
    title: "Patient-Centricity",
    desc:  "Patient safety and well-being are at the core of our operations and decision-making processes.",
  },
  {
    icon:  Lightbulb,
    title: "Agile Innovation",
    desc:  "We continuously adapt and integrate new technologies to optimise trial efficiency and data quality.",
  },
  {
    icon:  Globe2,
    title: "Global Collaboration",
    desc:  "We foster seamless teamwork across borders to deliver cohesive international research programs.",
  },
];

/* ── Leadership ────────────────────────────────────── */
const LEADERS = [
  {
    name:  "Dr. Robert Chen",
    role:  "Chief Executive Officer",
    bio:   "Former FDA reviewer with 20+ years in clinical trial design and execution.",
    initials: "RC",
  },
  {
    name:  "Sarah Jenkins, MD",
    role:  "Chief Medical Officer",
    bio:   "Oncology specialist leading our therapeutic strategy and medical monitoring team.",
    initials: "SJ",
  },
  {
    name:  "Michael O'Connor",
    role:  "VP, Regulatory Affairs",
    bio:   "Expert in global regulatory submissions and agency negotiations across US and EU.",
    initials: "MO",
  },
  {
    name:  "Elena Rostova",
    role:  "VP, Clinical Operations",
    bio:   "Oversees global site management, patient recruitment, and trial execution protocols.",
    initials: "ER",
  },
];

/* ── Certifications ────────────────────────────────── */
const CERTS = [
  { label: "ISO 9001:2015",  sub: "Quality Management" },
  { label: "ISO 27001",      sub: "Information Security" },
  { label: "GCP Compliant",  sub: "Good Clinical Practice" },
  { label: "GDPR/HIPAA",     sub: "Data Privacy Verified" },
];

const PARTNER_LOGOS = ["AWS", "IBM", "Google", "Salesforce", "Oracle"];

/* ═══════════════════════════════════════════════════ */
export default function AboutPage() {
  const storyRef    = useReveal();
  const leaderRef   = useReveal();
  const approachRef = useReveal();

  return (
    <>
      {/* ══ HERO ═════════════════════════════════════ */}
      <section className="pt-32 pb-16 text-center bg-stone-50 border-b border-stone-100">
        <div className="container-site">
          <TagLabel>Our Company</TagLabel>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mt-4 mb-4 leading-tight max-w-2xl mx-auto">
            Advancing Medical Research{" "}
            <span className="text-gradient">Through Precision</span>
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed mb-8">
            MedArc is a global clinical research organization dedicated to accelerating the
            development of life-saving medical innovations through rigorous science, ethical
            practices, and regulatory excellence.
          </p>
          <Button to="/contact" variant="accent" icon>Partner With Us</Button>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-10 border-t border-stone-200 max-w-2xl mx-auto">
            {STATS.map((s) => <StatCard key={s.label} value={s.value} label={s.label} />)}
          </div>
        </div>
      </section>

      {/* ══ OUR STORY ════════════════════════════════ */}
      <section className="section-pad">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Story text */}
            <div ref={storyRef} className="reveal">
              <p className="section-label">Our Story</p>
              <h2 className="section-title mb-4">
                Founded on a commitment to clinical excellence
              </h2>
              <p className="text-stone-500 leading-relaxed mb-4">
                MedArc was established in 2008 by a group of clinical researchers and regulatory experts
                who saw a need for a more agile, scientifically rigorous approach to trial management.
                We believed that by combining deep therapeutic expertise with innovative technology,
                we could significantly reduce the time and cost of bringing new therapies to market.
              </p>
              <p className="text-stone-500 leading-relaxed mb-6">
                Today, we are a trusted partner to pharmaceutical, biotechnology, and medical device
                companies worldwide, guiding them through complex clinical and regulatory landscapes
                with unwavering integrity and precision.
              </p>

              {/* Mission + Vision */}
              <div className="space-y-4">
                {[
                  {
                    color: "bg-primary-500",
                    label: "Our Mission",
                    text:  "To accelerate medical innovation by providing uncompromised clinical research and regulatory services.",
                  },
                  {
                    color: "bg-accent-500",
                    label: "Our Vision",
                    text:  "To be the global standard for excellence in clinical trial execution and patient safety.",
                  },
                ].map(({ color, label, text }) => (
                  <div key={label} className="flex gap-3">
                    <div className={`w-1.5 shrink-0 rounded-full mt-1 ${color}`} style={{ minHeight: "2.5rem" }} />
                    <div>
                      <p className="text-sm font-semibold text-stone-800">{label}</p>
                      <p className="text-sm text-stone-500 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="card hover:border-primary-200 group">
                  <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-500 transition-colors">
                    <Icon size={17} className="text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-stone-900 text-sm mb-1">{title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ LEADERSHIP ═══════════════════════════════ */}
      <section className="section-pad bg-stone-50">
        <div className="container-site">
          <div ref={leaderRef} className="reveal">
            <SectionHeader
              label="Leadership"
              title="Meet the experts behind MedArc"
              subtitle="Our executive team brings decades of combined experience in clinical research, regulatory affairs, and therapeutic development."
              className="mb-14"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {LEADERS.map((person) => (
              <div key={person.name} className="text-center group">
                {/* Avatar */}
                <div className="w-28 h-28 mx-auto rounded-2xl bg-stone-200 flex items-center justify-center mb-4 group-hover:shadow-card-lg transition-shadow overflow-hidden">
                  <span className="font-display text-2xl font-bold text-stone-500">
                    {person.initials}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-stone-900 text-sm leading-tight">{person.name}</h3>
                <p className="text-xs text-primary-600 font-medium mt-0.5 mb-1">{person.role}</p>
                <p className="text-xs text-stone-400 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ APPROACH + CERTS ═════════════════════════ */}
      <section className="section-pad bg-navy-900">
        <div className="container-site">
          <div ref={approachRef} className="reveal">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              {/* Approach */}
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-primary-300 mb-2">
                  Our Approach
                </p>
                <h2 className="section-title-light mb-4">
                  Data-driven precision at every phase
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  We differentiate ourselves through a proactive, risk-based approach to clinical research.
                  By integrating advanced data analytics early in the planning phase, we identify potential
                  bottlenecks before they impact timelines.
                </p>
                <ul className="space-y-2">
                  {[
                    "Proprietary site selection algorithms ensuring high enrollment rates.",
                    "Real-time data monitoring for proactive quality assurance.",
                    "Integrated regulatory strategy from day one to ensure compliance.",
                  ].map((item) => (
                    <CheckItem key={item} theme="light">{item}</CheckItem>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="font-display font-semibold text-white mb-5">
                  Credentials &amp; Certifications
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {CERTS.map(({ label, sub }) => (
                    <div key={label} className="card-dark flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center shrink-0">
                        <Award size={15} className="text-primary-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white leading-tight">{label}</p>
                        <p className="text-[10px] text-white/40">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUST LOGOS ══════════════════════════════ */}
      <section className="py-12 border-b border-stone-100">
        <div className="container-site">
          <p className="text-center text-xs font-mono text-stone-400 uppercase tracking-widest mb-6">
            Trusted by leading life science organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale">
            {PARTNER_LOGOS.map((name) => (
              <span key={name} className="font-display font-bold text-lg text-stone-700 tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════ */}
      <section className="py-20">
        <div className="container-site text-center">
          <h2 className="section-title mb-3 max-w-xl mx-auto">
            Ready to advance your clinical research?
          </h2>
          <p className="text-stone-500 mb-8 max-w-md mx-auto">
            Connect with our experts to discuss how MedArc can support your next clinical trial or
            regulatory submission.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/contact" icon>Contact Our Team</Button>
            <Button to="/services" variant="outline">View Our Services</Button>
          </div>
        </div>
      </section>
    </>
  );
}
