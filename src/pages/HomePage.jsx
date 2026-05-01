/**
 * HomePage.jsx
 * Updated: "Who We Are" content overlaid on banner's darker left side
 * Updated: Fully responsive for all endpoints (mobile, tablet, desktop)
 * Updated: Enhanced mobile experience with optimized text sizes and spacing
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

const BannerURL =
  "https://ik.imagekit.io/umm5llpkg/MedArc/updated%20banner.jpeg";

const PILLARS1 = [
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/our%20mission.jpeg",
    title: "Our Mission",
    desc: "To deliver excellence in clinical research through high-quality Site Management (SMO) services for clinical trials. We are equally committed to enabling global healthcare innovation through strategically managed regulatory submission services worldwide.",
  },
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/our%20vision.jpeg",
    title: "Our Vision",
    desc: "To become a comprehensive and trusted partner delivering excellence in clinical trial management services and specialized global regulatory solutions for successful approvals worldwide.",
  },
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/our%20experience.jpeg",
    title: "Our Experience",
    desc: "With leadership bringing substantial expertise in Clinical Operations and Global Regulatory Affairs, and a team of committed professionals, we consistently deliver high-quality, compliant, and reliable clinical and regulatory services.",
  },
];

const PILLARS2 = [
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/clincal%20research.jpeg",
    title: "Clinical Trial Management",
    desc: "Empowering your clinical development journey with speed and precision, unlocking the full potential of your assets and enhancing enterprise value.",
  },
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/regualtory.jpeg",
    title: "Regulatory: Global Regulatory Submissions",
    desc: "We provide comprehensive regulatory writing and pharmaceutical regulatory support, enabling the preparation of high-quality documents for global submissions. With a deep understanding of evolving guidelines, we assist sponsors in managing complex data and developing clear, concise, and compliant documentation. Our emphasis on accuracy and consistency helps reduce regulatory risks and ensures smooth and timely approvals.",
  },
];

const THERAPEUTIC_AREAS = [
  {
    name: "Neurology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/neuro.png",
  },
  {
    name: "Oncology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/onco.png",
  },
  {
    name: "Endocrinology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/endo.png",
  },
  {
    name: "Cardiology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/cardio.png",
  },
  {
    name: "Infectious Disease",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/infec.png",
  },
  {
    name: "Gastroenterology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/gastro.png",
  },
  {
    name: "Gynaecology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/gynao.png",
  },
  {
    name: "Haematology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/haemo.png",
  },
  {
    name: "Critical Care",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/cric%20care.png",
  },
  {
    name: "Paediatrics",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/paedra.png",
  },
  {
    name: "ENT",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/ENT.png",
  },
  {
    name: "Surgery",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/surgery.png",
  },
  {
    name: "Orthopaedics & Rheumatology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/ortho.png",
  },
  {
    name: "Nephrology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/nephro.png",
  },
  {
    name: "Metabolic Disease",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/metabolic%20disease.png",
  },
  {
    name: "Pulmonology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/pulmno.png",
  },
  {
    name: "Dental",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/dental.png",
  },
  {
    name: "Medical Device",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/medica.png",
  },
];

/* ── Infinite Carousel - Fully Responsive ───────────────────────────── */
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
      // Responsive breakpoints for carousel
      if (w < 480)
        setVisibleCount(1); // Extra small phones
      else if (w < 640)
        setVisibleCount(2); // Small phones
      else if (w < 768)
        setVisibleCount(2); // Large phones
      else if (w < 1024)
        setVisibleCount(3); // Tablets
      else setVisibleCount(4); // Desktop
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
    <div className="relative px-2 sm:px-4 md:px-0">
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
              className="px-1 sm:px-2 md:px-3"
            >
              <div className="group bg-white border border-stone-100 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all duration-300 cursor-default">
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

      {/* Carousel Controls - Responsive */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8">
        <button
          onClick={prev}
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-200 flex-shrink-0"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Pagination Dots - Responsive */}
        <div className="flex gap-1 sm:gap-1.5 flex-wrap justify-center max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-none">
          {THERAPEUTIC_AREAS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === dotIndex
                  ? "w-3 h-1.5 sm:w-4 sm:h-2 md:w-5 md:h-2 lg:w-6 lg:h-2.5 bg-primary-500"
                  : "w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-stone-200 hover:bg-stone-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-200 flex-shrink-0"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
      {/* ══ HERO WITH RESPONSIVE BANNER & OVERLAY ═════════════════════ */}
      <section className="pt-16 sm:pt-18 md:pt-20 pb-0 border-b border-stone-200">
        <div className="relative w-full">
          {/* Responsive Banner Image */}
          <img
            src={BannerURL}
            alt="MedArc Clinical Research"
            className="w-full object-cover min-h-[350px] xs:min-h-[400px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[640px] xl:max-h-[720px]"
          />

          {/* Overlay Content - Fully Responsive */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="max-w-7xl mx-auto">
                <div
                  ref={heroRef}
                  className="reveal max-w-full xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl backdrop-blur-sm bg-black/30 p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 rounded-lg sm:rounded-xl md:rounded-2xl"
                >
                  <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-white drop-shadow-lg leading-tight">
                    Who We Are
                  </h1>

                  <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 text-white drop-shadow-md">
                    <p className="leading-relaxed text-xs xs:text-sm sm:text-sm md:text-base">
                      MedArc Clinical Research Organization provides
                      comprehensive Site Management services for clinical
                      studies across India, ensuring seamless, high-quality, and
                      rigorously compliant clinical trial management.
                    </p>

                    <p className="leading-relaxed text-xs xs:text-sm sm:text-sm md:text-base">
                      In parallel, the organization offers comprehensive,
                      strategically guided, and rigorously compliant global
                      regulatory submission services to health authorities
                      worldwide.
                    </p>

                    <p className="leading-relaxed text-xs xs:text-sm sm:text-sm md:text-base">
                      Our services are designed to support organizations across
                      Life Sciences, Pharmaceuticals, Biologics, Medical
                      Devices, Ayurvedic and Consumer Products Sectors,
                      delivering tailored solutions aligned with their clinical
                      and regulatory requirements.
                    </p>

                    <p className="leading-relaxed text-xs xs:text-sm sm:text-sm md:text-base hidden sm:block">
                      Every initiative we undertake is governed by strong
                      ethical principles and strict compliance with global
                      regulatory requirements, including ICH Guidelines,
                      regional regulatory authorities, and international
                      regulatory standards, ensuring robust data integrity,
                      accuracy, and reliability throughout the lifecycle.
                    </p>

                    <p className="leading-relaxed text-xs xs:text-sm sm:text-sm md:text-base">
                      By choosing MedArc Clinical Research, you align with a
                      results-driven team passionately committed to precision,
                      professionalism, and transformative excellence —
                      empowering meaningful and lasting progress in the
                      ever-evolving landscape of clinical research and global
                      regulatory submissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PILLARS SECTION - FULLY RESPONSIVE ═══════════════════ */}
      <section className="bg-[#f7f6f4] py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="container-site px-3 xs:px-4 sm:px-6 md:px-8">
          {/* Section Header - THE FOUNDATION OF OUR WORK */}
          <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold tracking-wide sm:tracking-widest uppercase text-primary-500 mb-1 sm:mb-2 px-2">
              THE FOUNDATION OF OUR WORK
            </h2>
          </div>

          {/* PILLAR 1 - Mission, Vision, Experience - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 mb-10 xs:mb-12 sm:mb-16 md:mb-20">
            {PILLARS1.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 hover:border-primary-200 flex flex-col group"
              >
                <div className="flex flex-col gap-2.5 xs:gap-3 sm:gap-4">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl overflow-hidden bg-primary-50 flex items-center justify-center shrink-0">
                    <img
                      src={pillar.iconLink}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-base xs:text-lg sm:text-xl md:text-xl font-semibold text-stone-900 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-stone-600 leading-relaxed text-xs xs:text-sm sm:text-sm">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* WHAT WE DO - Section Header - Responsive */}
          <div
            ref={pillarsRef}
            className="reveal text-center max-w-4xl mx-auto mb-8 xs:mb-10 sm:mb-12 md:mb-14 px-2"
          >
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold tracking-wide sm:tracking-widest uppercase text-primary-500 mb-2 sm:mb-3">
              WHAT WE DO
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed">
              A unified and trusted partner for best-in-class clinical trial
              management services, while also delivering specialized expertise
              in global regulatory submissions to support successful approvals
              worldwide.
            </p>
          </div>

          {/* PILLAR 2 - Clinical Trial & Regulatory - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {PILLARS2.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 hover:border-primary-200 flex flex-col group"
              >
                <div className="flex flex-col gap-2.5 xs:gap-3 sm:gap-4">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl overflow-hidden bg-primary-50 flex items-center justify-center shrink-0">
                    <img
                      src={pillar.iconLink}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-base xs:text-lg sm:text-xl md:text-xl font-semibold text-stone-900 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-stone-600 leading-relaxed text-xs xs:text-sm sm:text-sm">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THERAPEUTIC AREAS - FULLY RESPONSIVE ══════ */}
      <section className="bg-white py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="container-site px-3 xs:px-4 sm:px-6 md:px-8">
          <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-14">
            <h2 className="text-lg xs:text-xl sm:text-2xl font-bold tracking-wide sm:tracking-widest uppercase text-primary-500 mb-1 sm:mb-2 md:mb-4">
              Therapeutic Areas
            </h2>
          </div>
          <TherapeuticCarousel />
        </div>
      </section>

      {/* ══ CTA SECTION - FULLY RESPONSIVE ═══════════════════ */}
      <section className="py-10 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-center">
        <div className="container-site px-3 xs:px-4 sm:px-6 md:px-8">
          <h2 className="text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 xs:mb-4 sm:mb-4 leading-tight px-2">
            Ready to start your clinical research journey?
          </h2>
          <p className="text-primary-100 text-sm xs:text-base sm:text-lg mb-6 xs:mb-7 sm:mb-8 max-w-2xl mx-auto px-2">
            Partner with MedArc for quality, compliance, and excellence.
          </p>
          <Button
            to="/contact"
            variant="primary"
            className="bg-white text-primary-700 hover:bg-gray-100 text-sm xs:text-base sm:text-lg px-6 xs:px-8 sm:px-10 py-2.5 xs:py-3 sm:py-3.5"
          >
            Get Started
          </Button>
        </div>
      </section>
    </>
  );
}
