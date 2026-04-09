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
  Target,
  Microscope,
  Globe,
} from "lucide-react";

import { Button, SectionHeader } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

const BannerURL = "https://i.postimg.cc/MHTjvf5d/home-banner.png";

const PILLARS = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To deliver excellence in clinical research through high-quality Site Management (SMO) services for clinical trials. We are equally committed to enabling global healthcare innovation through strategically managed regulatory submission services worldwide.",
  },
  {
    icon: Microscope,
    title: "Clinical Trial Management",
    desc: "Empowering your clinical development journey with speed and precision, unlocking the full potential of your assets and enhancing enterprise value.",
  },
  {
    icon: Globe,
    title: "Regulatory: Global Regulatory Submissions",
    desc: "Comprehensive regulatory and CMC support with global submissions to health authorities across therapeutic areas and product types.",
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

  const cloned = [
    ...THERAPEUTIC_AREAS.slice(-visibleCount),
    ...THERAPEUTIC_AREAS,
    ...THERAPEUTIC_AREAS.slice(0, visibleCount),
  ];

  const total = THERAPEUTIC_AREAS.length;
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
  const dotIndex = ((current % total) + total) % total;

  return (
    <div className="relative">
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
                <div className="w-full aspect-square bg-stone-50 overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-200"
        >
          <ChevronLeft size={20} />
        </button>

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
  const pillarsRef = useReveal();

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
            <h1 className="section-title mb-4 text-primary-600">
              MedArc Clinical Research
            </h1>

            <p className="text-gray-700 mb-4 leading-relaxed">
              MedArc Clinical Research Organization provides comprehensive Site
              Management services for clinical studies across India, ensuring
              seamless, high-quality, and rigorously compliant clinical trial
              management.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              In parallel, the organization offers comprehensive, strategically
              guided, and rigorously compliant global regulatory submission
              services to health authorities worldwide.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Our services are designed to support organizations across Life
              Sciences, Pharmaceuticals, Biologics, Medical Devices, Ayurvedic
              and Consumer Products Sectors, delivering tailored solutions
              aligned with their clinical and regulatory requirements.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Every initiative we undertake is governed by strong ethical
              principles and strict compliance with global regulatory
              requirements, including ICH Guidelines, regional regulatory
              authorities, and international regulatory standards, ensuring
              robust data integrity, accuracy, and reliability throughout the
              lifecycle.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              By choosing MedArc Clinical Research, you align with a
              results-driven team passionately committed to precision,
              professionalism, and transformative excellence — empowering
              meaningful and lasting progress in the ever-evolving landscape of
              clinical research and global regulatory submissions.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PILLARS ═══════════════════ */}
      <section className="section-pad bg-[#f7f6f4]">
        <div className="container-site">
          {/* Intro text */}
          <div
            ref={pillarsRef}
            className="reveal text-center max-w-3xl mx-auto mb-14"
          >
            <p className="text-lg text-stone-600 leading-relaxed">
              A unified and trusted partner for best-in-class clinical trial
              management services, while also delivering specialized expertise
              in global regulatory submissions to support successful approvals
              worldwide.
            </p>
          </div>

          {/* Three boxes */}
          {/* Three boxes */}
          <div className="grid md:grid-cols-3 gap-8">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 hover:border-primary-200 flex flex-col justify-between group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <Icon className="text-primary-500 w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-stone-900 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-stone-600 leading-relaxed text-sm">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Arrow (FIXED & VISIBLE) */}
                  {/* <div className="mt-6 flex justify-end">
                    <ArrowRight className="w-5 h-5 text-primary-500 group-hover:translate-x-1 transition-transform duration-200" />
                  </div> */}
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
