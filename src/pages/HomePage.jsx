/**
 * HomePage.jsx
 * Revamped: full-width hero image on top, text content below, centered buttons
 */

import React from "react";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  FileCheck2,
  BarChart3,
  ShieldCheck,
  Globe2,
  Cpu,
  ArrowRight,
} from "lucide-react";

import { Button, SectionHeader, StatCard } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

// const BannerURL = "https://i.postimg.cc/ZRph1XnG/home-banner.png";
// const BannerURL = "https://i.postimg.cc/qvLH0skj/new-Med-Arc-Logo.png";
const BannerURL = "https://i.postimg.cc/MHTjvf5d/home-banner.png";

const SERVICES = [
  {
    icon: FlaskConical,
    title: "Clinical Trial Management",
    desc: "End-to-end clinical trial support ensuring coordination, compliance, and patient safety.",
    to: "/services",
  },
  {
    icon: FileCheck2,
    title: "Study Start-Up Services",
    desc: "Efficient study initiation including regulatory approvals and site activation.",
    to: "/regulatory",
  },
  {
    icon: BarChart3,
    title: "Study Close-Out",
    desc: "Accurate documentation, compliance, and proper trial closure.",
    to: "/services",
  },
];

const WHY_ITEMS = [
  {
    icon: FlaskConical,
    title: "Scientific Excellence",
  },
  {
    icon: Globe2,
    title: "Ethical Standards",
  },
  {
    icon: Cpu,
    title: "Efficient Execution",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
  },
];

/* ═════════════════════════════════ */
export default function HomePage() {
  const heroRef = useReveal();
  const servicesRef = useReveal();

  return (
    <>
      {/* ══ HERO ═════════════════════ */}
      <section className="pt-20 pb-0 border-b border-stone-200">
        {/* Full-width Banner Image */}
        <div className="w-full">
          <img
            src={BannerURL}
            alt="MedArc Clinical Research"
            className="w-full object-cover max-h-[520px]"
          />
        </div>

        {/* Text Content Below Image */}
        <div className="container-site py-14">
          <div
            ref={heroRef}
            className="reveal max-w-4xl mx-auto flex flex-col items-center text-center"
          >
            <span className="tag-label mb-4 inline-block bg-primary-500/10 text-primary-600 border-primary-500/30">
              Site Management Organization
            </span>

            <h1 className="section-title mb-4 text-gray-900">
              MedArc Clinical Research{" "}
              <span className="text-primary-600">Pvt. Ltd.</span>
            </h1>

            <p className="text-gray-700 mb-4 leading-relaxed">
              MedArc Clinical Research Pvt. Ltd. is a distinguished and trusted
              Site Management Organization (SMO) dedicated to delivering
              unparalleled excellence in clinical trial management across India.
              Our steadfast commitment to quality is powerfully reflected in our
              rigorous adherence to the highest global industry standards and
              best practices — upheld at every critical stage of the research
              journey.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              At MedArc Clinical Research, we have meticulously developed
              comprehensive Standard Operating Procedures (SOPs) that not only
              meet but consistently surpass regulatory expectations — ensuring
              efficient, precise, and seamless execution of clinical trials
              while instilling unwavering confidence in our clients and
              partners.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              With a resolute focus on operational excellence and patient
              safety, we guarantee smooth and effective trial conduct through
              well-structured, time-tested processes and seasoned oversight.
              Every initiative we undertake is firmly guided by the highest
              ethical principles and strict compliance with all applicable
              regulatory frameworks — including ICH Guidelines — ensuring
              uncompromising data integrity, accuracy, and reliability at every
              turn.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              By choosing MedArc Clinical Research, you align with a
              results-driven team passionately committed to precision,
              professionalism, and transformative excellence — empowering
              meaningful and lasting progress in the ever-evolving landscape of
              clinical research.
            </p>

            {/* ✅ FIXED CENTERED BUTTONS */}
            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="flex justify-center w-full sm:w-auto">
                <Button to="/services" className="block text-center">
                  Explore Services
                </Button>
              </div>

              <div className="flex justify-center w-full sm:w-auto">
                <Button
                  to="/contact"
                  variant="dark"
                  className="block text-center"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ═══════════════ */}
      <section className="section-pad bg-[#f7f6f4]">
        <div className="container-site">
          <div ref={servicesRef}>
            <SectionHeader
              label="Core Services"
              title="Clinical Research Solutions"
              subtitle="Delivering quality, compliance, and efficiency."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {SERVICES.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-primary-200"
                >
                  <Icon className="text-primary-500 w-10 h-10 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {svc.desc}
                  </p>
                  <Link
                    to={svc.to}
                    className="text-primary-600 text-sm inline-flex items-center gap-1 font-medium hover:text-primary-700 transition-colors"
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ WHY ═══════════════════ */}
      <section className="section-pad bg-[#f7f6f4]">
        <div className="container-site text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose MedArc?
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Built on scientific integrity, compliance, and efficient execution.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {WHY_ITEMS.map(({ icon: Icon, title }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
                  <Icon className="text-primary-500 w-8 h-8" />
                </div>
                <p className="text-gray-700 font-semibold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════ */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-center">
        <div className="container-site">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Ready to start your clinical research journey?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Partner with MedArc for quality, compliance, and excellence.
          </p>
          <Button
            to="/contact"
            variant="primary"
            className="bg-white text-primary-700 hover:bg-gray-100"
          >
            Get Started
          </Button>
        </div>
      </section>
    </>
  );
}
