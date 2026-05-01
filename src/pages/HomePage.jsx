/**
 * HomePage.jsx
 * FULL MOBILE FIXED VERSION
 * Banner + Overlay + Text + Section spacing corrected
 * Copy-Paste Ready
 */

import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import useReveal from "../hooks/useReveal.js";

const BannerURL = "https://i.postimg.cc/MHTjvf5d/home-banner.png";

const BannerURL2 =
  "https://ik.imagekit.io/umm5llpkg/MedArc/updatd%20banner.png";

/* -------------------------------- DATA -------------------------------- */

const PILLARS1 = [
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/our%20mission.jpeg",
    title: "Our Mission",
    desc: "To deliver excellence in clinical research through high-quality Site Management services and trusted global regulatory submission support.",
  },
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/our%20vision.jpeg",
    title: "Our Vision",
    desc: "To become a comprehensive and trusted partner in clinical trials and global regulatory solutions.",
  },
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/our%20experience.jpeg",
    title: "Our Experience",
    desc: "Backed by deep expertise in Clinical Operations and Regulatory Affairs with a committed professional team.",
  },
];

const PILLARS2 = [
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/clincal%20research.jpeg",
    title: "Clinical Trial Management",
    desc: "Accelerating clinical development with precision and operational excellence.",
  },
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/regualtory.jpeg",
    title: "Global Regulatory Submissions",
    desc: "End-to-end regulatory writing and submission support for faster approvals.",
  },
];

const THERAPEUTIC_AREAS = [
  {
    name: "Neurology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/neuro.png",
  },
  { name: "Oncology", img: "https://ik.imagekit.io/umm5llpkg/MedArc/onco.png" },
  {
    name: "Cardiology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/cardio.png",
  },
  {
    name: "Endocrinology",
    img: "https://ik.imagekit.io/umm5llpkg/MedArc/endo.png",
  },
];

/* ------------------------ MOBILE RESPONSIVE CAROUSEL ------------------------ */

function TherapeuticCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? THERAPEUTIC_AREAS.length - 1 : prev - 1,
    );

  const next = () =>
    setCurrent((prev) =>
      prev === THERAPEUTIC_AREAS.length - 1 ? 0 : prev + 1,
    );

  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden border">
        <img
          src={THERAPEUTIC_AREAS[current].img}
          alt={THERAPEUTIC_AREAS[current].name}
          className="w-full h-72 object-cover"
        />

        <div className="p-4 text-center font-semibold text-lg">
          {THERAPEUTIC_AREAS[current].name}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-5">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border flex items-center justify-center"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border flex items-center justify-center"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------- MAIN PAGE ------------------------------- */

export default function HomePage() {
  const heroRef = useReveal();
  const pillarsRef = useReveal();
  const secondBannerRef = useRef(null);

  return (
    <>
      {/* TOP LOGO BANNER FIXED */}
      <section className="w-full overflow-hidden">
        <img
          src={BannerURL}
          alt="Banner"
          className="w-full h-[180px] sm:h-[260px] md:h-auto object-cover object-center"
        />
      </section>

      {/* WHO WE ARE SECTION FIXED */}
      <section ref={secondBannerRef} className="relative overflow-hidden">
        <div className="relative h-[560px] sm:h-[650px] md:h-[720px] w-full">
          <img
            src={BannerURL2}
            alt="Who We Are"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-5 sm:px-8 md:px-12">
              <div ref={heroRef} className="max-w-xl text-white">
                <h1 className="text-3xl sm:text-5xl font-bold mb-5">
                  Who We Are
                </h1>

                <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
                  <p>
                    MedArc Clinical Research Organization provides comprehensive
                    Site Management services for clinical studies across India.
                  </p>

                  <p>
                    We also offer global regulatory submission services to
                    health authorities worldwide.
                  </p>

                  <p>
                    Our services support Pharmaceuticals, Biologics, Medical
                    Devices, Ayurvedic and Consumer Products sectors.
                  </p>

                  <p className="hidden sm:block">
                    Every initiative follows strong ethical principles, global
                    compliance standards, and robust data integrity.
                  </p>

                  <p>
                    By choosing MedArc, you align with a results-driven team
                    committed to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATION SECTION */}
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
              <div key={i} className="bg-[#f7f6f4] rounded-2xl p-6">
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
