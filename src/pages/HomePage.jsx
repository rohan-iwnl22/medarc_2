/**
 * HomePage.jsx
 * Fixed: carousel renders images, infinite loop, mobile breakpoints
 */

import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  FileCheck2,
  BarChart3,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button, SectionHeader } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

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

const THERAPEUTIC_AREAS = [
  {
    name: "Neurology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/neuro.png",
  },
  {
    name: "Oncology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/onco.png",
  },
  {
    name: "Endocrinology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/endo.png",
  },
  {
    name: "Cardiology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/cardio.png",
  },
  {
    name: "Infectious Disease",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/infec.png",
  },
  {
    name: "Gastroenterology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/gastro.png",
  },
  {
    name: "Gynaecology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/gynao.png",
  },
  {
    name: "Haematology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/haemo.png",
  },
  {
    name: "Critical Care",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/cric%20care.png",
  },
  {
    name: "Paediatrics",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/paedra.png",
  },
  {
    name: "ENT",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/ENT.png",
  },
  {
    name: "Surgery",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/surgery.png",
  },
  {
    name: "Orthopaedics & Rheumatology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/ortho.png",
  },
  {
    name: "Nephrology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/nephro.png",
  },
  {
    name: "Metabolic Disease",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/metabolic%20disease.png",
  },
  {
    name: "Pulmonology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/pulmno.png",
  },
  {
    name: "Dental",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/dental.png",
  },
  {
    name: "Medical Device",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/caroussal/medica.png",
  },
];

/* ── Infinite Carousel ───────────────────────────── */
function TherapeuticCarousel() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Clone items at start and end for infinite loop
  const cloned = [
    ...THERAPEUTIC_AREAS.slice(-visibleCount),
    ...THERAPEUTIC_AREAS,
    ...THERAPEUTIC_AREAS.slice(0, visibleCount),
  ];

  const total = THERAPEUTIC_AREAS.length;
  // Real index inside cloned array (offset by the leading clones)
  const offset = visibleCount;

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setVisibleCount(1);
      else if (w < 768) setVisibleCount(2);
      else if (w < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // When visibleCount changes, reset to beginning without animation
  useEffect(() => {
    setIsTransitioning(false);
    setCurrent(0);
  }, [visibleCount]);

  const goTo = (idx) => {
    setIsTransitioning(true);
    setCurrent(idx);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // After transition ends, silently snap if we've gone past the real items
  const handleTransitionEnd = () => {
    if (current < 0) {
      setIsTransitioning(false);
      setCurrent(total - 1);
    } else if (current >= total) {
      setIsTransitioning(false);
      setCurrent(0);
    }
  };

  const cardWidthPct = 100 / visibleCount;
  const translateX = (offset + current) * cardWidthPct;

  // Dots reflect position within real items (wrapping)
  const dotIndex = ((current % total) + total) % total;

  return (
    <div className="relative">
      {/* Track wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${translateX}%)`,
            transition: isTransitioning
              ? "transform 500ms ease-in-out"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {cloned.map(({ name, img }, idx) => (
            <div
              key={`${name}-${idx}`}
              style={{ minWidth: `${cardWidthPct}%` }}
              className="px-2 sm:px-3"
            >
              <div className="group bg-white border border-stone-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all duration-300 cursor-default">
                {/* Image */}
                <div className="w-full aspect-square bg-stone-50 overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Label */}
                {/* <div className="px-4 py-3 text-center">
                  <p className="text-stone-800 font-semibold text-sm sm:text-base leading-snug">
                    {name}
                  </p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-200"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex gap-1.5 flex-wrap justify-center max-w-[200px] sm:max-w-none">
          {THERAPEUTIC_AREAS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === dotIndex
                  ? "w-5 h-2 sm:w-6 sm:h-2.5 bg-primary-500"
                  : "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-stone-200 hover:bg-stone-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-200"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

/* ═════════════════════════════════ */
export default function HomePage() {
  const heroRef = useReveal();
  const servicesRef = useReveal();

  return (
    <>
      {/* ══ HERO ═════════════════════ */}
      <section className="pt-20 pb-0 border-b border-stone-200">
        <div className="w-full">
          <img
            src={BannerURL}
            alt="MedArc Clinical Research"
            className="w-full object-cover max-h-[520px]"
          />
        </div>

        <div className="container-site py-14">
          <div
            ref={heroRef}
            className="reveal max-w-4xl mx-auto flex flex-col items-center text-center"
          >
            <span className="tag-label mb-4 inline-block bg-primary-500/10 text-primary-600 border-primary-500/30">
              Site Management Organization
            </span>

            <h1 className="section-title mb-4 text-primary-600">
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

            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button to="/services" className="block text-center">
                Explore Services
              </Button>
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

      {/* ══ THERAPEUTIC AREAS ══════ */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="inline-block text-2xl font-semibold tracking-widest uppercase text-primary-500 mb-4">
              Therapeutic Areas
            </span>
          </div>
          <TherapeuticCarousel />
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
