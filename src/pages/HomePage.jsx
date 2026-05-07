/**
 * HomePage.jsx
 * FULL UPDATED VERSION
 * Changes made:
 * - Top banner (BannerURL) now uses full width with object-contain to show all text
 * - Banner fills entire screen width horizontally
 * - WHO WE ARE section: image and text side by side with reduced whitespace
 * - Removed excessive padding between image and text
 * - Full code included
 */

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Link } from "lucide-react";
import useReveal from "../hooks/useReveal.js";
import { useNavigate } from "react-router-dom";

const BannerURL = "https://ik.imagekit.io/umm5llpkg/MedArc/bnaer.png";

const BannerURL2 = "https://ik.imagekit.io/umm5llpkg/MedArc/home%20page.png";
// const Banner2VIDURL = "https://ik.imagekit.io/umm5llpkg/MedArc/whoweareVid.mp4";

/* ---------------- DATA ---------------- */

const PILLARS1 = [
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/our%20mission.jpeg",
    title: "Our Mission",
    desc: "To deliver excellence in clinical research through high-quality Site Management services and trusted global regulatory submission support.",
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
    desc: "We prioritize deep scientific understanding by fully internalizing study rationale and key endpoints, ensuring every site-level activity is precisely aligned with trial success—while driving clinical research forward with agility and precision, unlocking the true potential of your assets and elevating enterprise value, where every data point brings new hope to patients awaiting a cure.",
    naviTo: "/services",
  },
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/regualtory.jpeg",
    title: "Global Regulatory Submissions",
    desc: "We provide comprehensive regulatory writing and pharmaceutical regulatory support, enabling the preparation of high-quality documents for global submissions. With a deep understanding of evolving guidelines, we assist sponsors in managing complex data and developing clear, concise, and compliant documentation. Our emphasis on accuracy and consistency helps reduce regulatory risks and ensures smooth and timely approvals.",
    naviTo: "/regulatory",
  },
];

const THERAPEUTIC_AREAS = [
  {
    name: "Neurology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/neuro.png",
  },
  { name: "Oncology", img: "https://ik.imagekit.io/umm5llpkg/MedArc/onco.png" },
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
  { name: "ENT", img: "https://ik.imagekit.io/umm5llpkg/MedArc/ENT.png" },
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
  { name: "Dental", img: "https://ik.imagekit.io/umm5llpkg/MedArc/dental.png" },
  {
    name: "Medical Device",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/medica.png",
  },
];

/* ---------------- THERAPEUTIC CAROUSEL ---------------- */

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
              <div className="group bg-white border border-stone-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="w-full aspect-square overflow-hidden">
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
          className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-primary-500 hover:text-white transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2 flex-wrap justify-center">
          {THERAPEUTIC_AREAS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === dotIndex
                  ? "w-6 h-2 bg-primary-500"
                  : "w-2 h-2 bg-stone-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-primary-500 hover:text-white transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

/* ---------------- MAIN PAGE ---------------- */

export default function HomePage() {
  const heroRef = useReveal();
  const pillarsRef = useReveal();
  const secondBannerRef = useRef(null);

  const navigate = useNavigate();

  return (
    <>
      {/* TOP BANNER - Full width with object-contain to show all text */}
      <section className="w-full bg-stone-100">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-stone-100 overflow-hidden">
          <img src={BannerURL} alt="Banner" className="w-full object-contain" />
        </div>
      </section>

      {/* WHO WE ARE SPLIT SECTION - IMAGE LEFT, TEXT RIGHT WITH REDUCED GAP */}
      <section
        ref={secondBannerRef}
        className="bg-[#f7f6f4] py-10 sm:py-14 md:py-20"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-start gap-4 lg:gap-6">
            {/* LEFT IMAGE */}
            <div className="relative flex items-center justify-center w-full">
              <div className="w-full rounded-2xl overflow-hidden bg-black shadow-md">
                <img
                  src={BannerURL2}
                  alt="Who We Are"
                  className="w-full h-auto object-contain object-center"
                />
              </div>
            </div>

            {/* RIGHT CONTENT - REDUCED PADDING */}
            <div className="px-0 sm:px-4 lg:px-6 py-4">
              <div ref={heroRef}>
                <h2 className="text-4xl sm:text-5xl font-bold text-primary-500 mb-6">
                  WHO WE ARE
                </h2>

                <p className="text-xl">
                  MedArc Clinical Research Organization provides comprehensive
                  Site Management services for clinical studies across India,
                  ensuring seamless, high-quality, and rigorously compliant
                  clinical trial management.
                </p>
                <br />
                <p className="text-xl">
                  In parallel, the organization offers comprehensive,
                  strategically guided, and rigorously compliant global
                  regulatory submission services to health authorities
                  worldwide.
                </p>
                <br />
                <p className="text-xl">
                  Our services are designed to support organizations across Life
                  Sciences, Pharmaceuticals, Biologics, Medical Devices,
                  Ayurvedic and Consumer Products Sectors, delivering tailored
                  solutions aligned with their clinical and regulatory
                  requirements.
                </p>
                <br />
                <p className="text-xl">
                  Every initiative we undertake is governed by strong ethical
                  principles and strict compliance with global regulatory
                  requirements, including ICH Guidelines, regional regulatory
                  authorities, and international regulatory standards, ensuring
                  robust data integrity, accuracy, and reliability throughout
                  the lifecycle.
                </p>
                <br />
                <p className="text-xl">
                  By choosing MedArc Clinical Research, you align with a
                  results-driven team passionately committed to precision,
                  professionalism, and transformative excellence - empowering
                  meaningful and lasting progress in the ever-evolving landscape
                  of clinical research and global regulatory submissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATION */}
      <section className="bg-[#f7f6f4] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-primary-500 mb-10 tracking-wider">
            THE FOUNDATION OF OUR WORK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS1.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-6">
                <img
                  src={item.iconLink}
                  alt={item.title}
                  className="w-14 h-14 rounded-xl mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div ref={pillarsRef} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-4 tracking-wider">
              WHAT WE DO
            </h2>

            <p className="text-stone-600 max-w-3xl mx-auto text-base sm:text-lg">
              A trusted partner for clinical trial management and specialized
              global regulatory submissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS2.map((item, i) => (
              <div
                key={i}
                className="bg-[#f7f6f4] rounded-2xl p-6 hover:shadow-md transition-all duration-300"
              >
                <img
                  src={item.iconLink}
                  alt={item.title}
                  className="w-14 h-14 rounded-xl mb-4 object-cover"
                />

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                <p className="text-stone-600 leading-relaxed mb-4">
                  {item.desc}
                </p>

                <button
                  onClick={() => navigate(item.naviTo)}
                  className="text-primary-500 font-semibold text-sm hover:underline transition"
                >
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THERAPEUTIC AREAS */}
      <section className="py-12 sm:py-16 bg-[#f7f6f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-primary-500 mb-10 tracking-wider">
            THERAPEUTIC AREAS
          </h2>

          <TherapeuticCarousel />
        </div>
      </section>
    </>
  );
}
