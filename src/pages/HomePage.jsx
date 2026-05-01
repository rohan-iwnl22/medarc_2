/**
 * HomePage.jsx
 * Updated: Two banner layout - first banner at top, second banner scrolls into view
 * Updated: Removed top gap from first banner
 * Updated: Uniform font sizes across all headings and text
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

const BannerURL = "https://i.postimg.cc/MHTjvf5d/home-banner.png";
const BannerURL2 =
  "https://ik.imagekit.io/umm5llpkg/MedArc/updatd%20banner.png";

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
      if (w < 480) setVisibleCount(1);
      else if (w < 640) setVisibleCount(2);
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
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-200 flex-shrink-0"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="flex gap-1 sm:gap-1.5 flex-wrap justify-center max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-none">
          {THERAPEUTIC_AREAS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === dotIndex
                  ? "w-3 h-1.5 sm:w-4 sm:h-2 md:w-5 md:h-2 bg-primary-500"
                  : "w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-stone-200 hover:bg-stone-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-200 flex-shrink-0"
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
  const secondBannerRef = useRef(null);

  return (
    <>
      {/* ══ FIRST BANNER - TOP OF PAGE (NO TOP GAP) ═════════════════════ */}
      <section className="w-full">
        <div className="w-full">
          <img
            src={BannerURL}
            alt="MedArc Clinical Research Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* ══ SECOND BANNER WITH OVERLAY CONTENT ═════════════════════ */}
      <section className="relative w-full" ref={secondBannerRef}>
        <div className="relative w-full">
          <img
            src={BannerURL2}
            alt="MedArc Clinical Research"
            className="w-full h-auto object-cover min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
          />

          {/* Dark Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

          {/* Overlay Content - Fully Responsive */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="max-w-7xl mx-auto">
                <div
                  ref={heroRef}
                  className="reveal max-w-full xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
                >
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-white drop-shadow-lg leading-tight">
                    Who We Are
                  </h1>

                  <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 text-white drop-shadow-md">
                    <p className="leading-relaxed text-sm xs:text-base sm:text-base md:text-lg">
                      MedArc Clinical Research Organization provides
                      comprehensive Site Management services for clinical
                      studies across India, ensuring seamless, high-quality, and
                      rigorously compliant clinical trial management.
                    </p>

                    <p className="leading-relaxed text-sm xs:text-base sm:text-base md:text-lg">
                      In parallel, the organization offers comprehensive,
                      strategically guided, and rigorously compliant global
                      regulatory submission services to health authorities
                      worldwide.
                    </p>

                    <p className="leading-relaxed text-sm xs:text-base sm:text-base md:text-lg">
                      Our services are designed to support organizations across
                      Life Sciences, Pharmaceuticals, Biologics, Medical
                      Devices, Ayurvedic and Consumer Products Sectors,
                      delivering tailored solutions aligned with their clinical
                      and regulatory requirements.
                    </p>

                    <p className="leading-relaxed text-sm xs:text-base sm:text-base md:text-lg hidden sm:block">
                      Every initiative we undertake is governed by strong
                      ethical principles and strict compliance with global
                      regulatory requirements, including ICH Guidelines,
                      regional regulatory authorities, and international
                      regulatory standards, ensuring robust data integrity,
                      accuracy, and reliability throughout the lifecycle.
                    </p>

                    <p className="leading-relaxed text-sm xs:text-base sm:text-base md:text-lg">
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
      <section className="bg-[#f7f6f4] py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="container-site px-4 xs:px-5 sm:px-6 md:px-8">
          {/* Section Header - THE FOUNDATION OF OUR WORK */}
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14">
            <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold tracking-wide sm:tracking-widest uppercase text-primary-500 mb-2 sm:mb-3 px-2">
              THE FOUNDATION OF OUR WORK
            </h2>
          </div>

          {/* PILLAR 1 - Mission, Vision, Experience - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-7 md:gap-8 mb-12 xs:mb-14 sm:mb-16 md:mb-20">
            {PILLARS1.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-5 xs:p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 hover:border-primary-200 flex flex-col group"
              >
                <div className="flex flex-col gap-3 xs:gap-3.5 sm:gap-4">
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden bg-primary-50 flex items-center justify-center shrink-0">
                    <img
                      src={pillar.iconLink}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-lg xs:text-xl sm:text-xl md:text-2xl font-semibold text-stone-900 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-stone-600 leading-relaxed text-sm xs:text-base sm:text-base md:text-base">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* WHAT WE DO - Section Header - Responsive */}
          <div
            ref={pillarsRef}
            className="reveal text-center max-w-4xl mx-auto mb-10 xs:mb-12 sm:mb-14 md:mb-16 px-2"
          >
            <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold tracking-wide sm:tracking-widest uppercase text-primary-500 mb-3 sm:mb-4">
              WHAT WE DO
            </h2>
            <p className="text-base xs:text-lg sm:text-lg md:text-xl text-stone-600 leading-relaxed">
              A unified and trusted partner for best-in-class clinical trial
              management services, while also delivering specialized expertise
              in global regulatory submissions to support successful approvals
              worldwide.
            </p>
          </div>

          {/* PILLAR 2 - Clinical Trial & Regulatory - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xs:gap-6 sm:gap-7 md:gap-8 max-w-5xl mx-auto">
            {PILLARS2.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-5 xs:p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 hover:border-primary-200 flex flex-col group"
              >
                <div className="flex flex-col gap-3 xs:gap-3.5 sm:gap-4">
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden bg-primary-50 flex items-center justify-center shrink-0">
                    <img
                      src={pillar.iconLink}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-lg xs:text-xl sm:text-xl md:text-2xl font-semibold text-stone-900 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-stone-600 leading-relaxed text-sm xs:text-base sm:text-base md:text-base">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THERAPEUTIC AREAS - FULLY RESPONSIVE ══════ */}
      <section className="bg-white py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="container-site px-4 xs:px-5 sm:px-6 md:px-8">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14">
            <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold tracking-wide sm:tracking-widest uppercase text-primary-500 mb-2 sm:mb-3">
              Therapeutic Areas
            </h2>
          </div>
          <TherapeuticCarousel />
        </div>
      </section>
    </>
  );
}
