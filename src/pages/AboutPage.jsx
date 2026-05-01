import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import useReveal from "../hooks/useReveal.js";

const BannerURL = "https://i.postimg.cc/MHTjvf5d/home-banner.png";
const BannerURL2 = "https://ik.imagekit.io/umm5llpkg/MedArc/updatd%20banner.png";

const PILLARS1 = [
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/our%20mission.jpeg",
    title: "Our Mission",
    desc:
      "To deliver excellence in clinical research through high-quality Site Management (SMO) services for clinical trials. We are equally committed to enabling global healthcare innovation through strategically managed regulatory submission services worldwide.",
  },
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/our%20vision.jpeg",
    title: "Our Vision",
    desc:
      "To become a comprehensive and trusted partner delivering excellence in clinical trial management services and specialized global regulatory solutions for successful approvals worldwide.",
  },
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/our%20experience.jpeg",
    title: "Our Experience",
    desc:
      "With leadership bringing substantial expertise in Clinical Operations and Global Regulatory Affairs, and a team of committed professionals, we consistently deliver high-quality, compliant, and reliable clinical and regulatory services.",
  },
];

const PILLARS2 = [
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/clincal%20research.jpeg",
    title: "Clinical Trial Management",
    desc:
      "Empowering your clinical development journey with speed and precision, unlocking the full potential of your assets and enhancing enterprise value.",
  },
  {
    iconLink: "https://ik.imagekit.io/umm5llpkg/MedArc/regualtory.jpeg",
    title: "Regulatory: Global Regulatory Submissions",
    desc:
      "We provide comprehensive regulatory writing and pharmaceutical regulatory support, enabling the preparation of high-quality documents for global submissions. With a deep understanding of evolving guidelines, we assist sponsors in managing complex data and developing clear, concise, and compliant documentation. Our emphasis on accuracy and consistency helps reduce regulatory risks and ensures smooth and timely approvals.",
  },
];

const THERAPEUTIC_AREAS = [
  { name: "Neurology", img: "https://ik.imagekit.io/umm5llpkg/MedArc/neuro.png" },
  { name: "Oncology", img: "https://ik.imagekit.io/umm5llpkg/MedArc/onco.png" },
  { name: "Endocrinology", img: "https://ik.imagekit.io/umm5llpkg/MedArc/endo.png" },
  { name: "Cardiology", img: "https://ik.imagekit.io/umm5llpkg/MedArc/cardio.png" },
  { name: "Infectious Disease", img: "https://ik.imagekit.io/umm5llpkg/MedArc/infec.png" },
  { name: "Gastroenterology", img: "https://ik.imagekit.io/umm5llpkg/MedArc/gastro.png" },
  { name: "Gynaecology", img: "https://ik.imagekit.io/umm5llpkg/MedArc/gynao.png" },
  { name: "Haematology", img: "https://ik.imagekit.io/umm5llpkg/MedArc/haemo.png" },
  { name: "Critical Care", img: "https://ik.imagekit.io/umm5llpkg/MedArc/cric%20care.png" },
  { name: "Paediatrics", img: "https://ik.imagekit.io/umm5llpkg/MedArc/paedra.png" },
  { name: "ENT", img: "https://ik.imagekit.io/umm5llpkg/MedArc/ENT.png" },
  { name: "Surgery", img: "https://ik.imagekit.io/umm5llpkg/MedArc/surgery.png" },
  { name: "Orthopaedics & Rheumatology", img: "https://ik.imagekit.io/umm5llpkg/MedArc/ortho.png" },
  { name: "Nephrology", img: "https://ik.imagekit.io/umm5llpkg/MedArc/nephro.png" },
  { name: "Metabolic Disease", img: "https://ik.imagekit.io/umm5llpkg/MedArc/metabolic%20disease.png" },
  { name: "Pulmonology", img: "https://ik.imagekit.io/umm5llpkg/MedArc/pulmno.png" },
  { name: "Dental", img: "https://ik.imagekit.io/umm5llpkg/MedArc/dental.png" },
  { name: "Medical Device", img: "https://ik.imagekit.io/umm5llpkg/MedArc/medica.png" },
];

function TherapeuticCarousel() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 768) setVisibleCount(2);
      else if (w < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setCurrent(0);
    setIsTransitioning(false);
    const id = window.requestAnimationFrame(() => setIsTransitioning(true));
    return () => window.cancelAnimationFrame(id);
  }, [visibleCount]);

  const total = THERAPEUTIC_AREAS.length;
  const cloned = [
    ...THERAPEUTIC_AREAS.slice(-visibleCount),
    ...THERAPEUTIC_AREAS,
    ...THERAPEUTIC_AREAS.slice(0, visibleCount),
  ];

  const cardWidthPct = 100 / visibleCount;
  const offset = visibleCount;
  const translateX = (offset + current) * cardWidthPct;
  const dotIndex = ((current % total) + total) % total;

  const goTo = (idx) => setCurrent(idx);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const handleTransitionEnd = () => {
    if (current < 0) setCurrent(total - 1);
    if (current >= total) setCurrent(0);
  };

  return (
    <div className="relative px-1 sm:px-2 md:px-0">
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${translateX}%)`,
            transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {cloned.map(({ name, img }, idx) => (
            <div key={`${name}-${idx}`} style={{ minWidth: `${cardWidthPct}%` }} className="px-1 sm:px-2 md:px-3">
              <div className="group overflow-hidden rounded-xl border border-stone-100 bg-white transition-all duration-300 hover:border-primary-200 hover:shadow-lg">
                <div className="aspect-square w-full overflow-hidden bg-stone-50">
                  <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 sm:mt-6 sm:gap-3 md:mt-8">
        <button
          onClick={prev}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-stone-200 text-stone-500 transition-all duration-200 hover:border-primary-500 hover:bg-primary-500 hover:text-white sm:h-9 sm:w-9 md:h-10 md:w-10"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="flex max-w-[180px] flex-wrap justify-center gap-1 sm:max-w-[220px] md:max-w-[260px]">
          {THERAPEUTIC_AREAS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === dotIndex
                  ? "h-1.5 w-3 bg-primary-500 sm:h-2 sm:w-4 md:h-2 md:w-5"
                  : "h-1.5 w-1.5 bg-stone-200 hover:bg-stone-300 sm:h-2 sm:w-2 md:h-2.5 md:w-2.5"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-stone-200 text-stone-500 transition-all duration-200 hover:border-primary-500 hover:bg-primary-500 hover:text-white sm:h-9 sm:w-9 md:h-10 md:w-10"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
}

function InfoCard({ pillar }) {
  return (
    <div className="group flex flex-col rounded-xl border border-stone-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-md sm:rounded-2xl sm:p-6 md:p-8">
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary-50 sm:h-14 sm:w-14 sm:rounded-xl md:h-16 md:w-16">
          <img src={pillar.iconLink} alt={pillar.title} className="h-full w-full object-cover" loading="lazy" />
        </div>

        <h3 className="text-lg font-semibold leading-snug text-stone-900 sm:text-xl md:text-2xl">{pillar.title}</h3>
        <p className="text-sm leading-relaxed text-stone-600 sm:text-base">{pillar.desc}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const heroRef = useReveal();
  const pillarsRef = useReveal();
  const secondBannerRef = useRef(null);

  return (
    <>
      <section className="w-full">
        <img src={BannerURL} alt="MedArc Clinical Research Banner" className="h-auto w-full object-cover" />
      </section>

      <section className="relative w-full" ref={secondBannerRef}>
        <div className="relative w-full overflow-hidden">
          <img
            src={BannerURL2}
            alt="MedArc Clinical Research"
            className="h-[420px] w-full object-cover sm:h-[520px] md:h-[620px] lg:h-[720px]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/35 sm:bg-gradient-to-r" />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-12 xl:px-16">
              <div className="mx-auto max-w-7xl">
                <div ref={heroRef} className="reveal w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                  <h1 className="mb-3 text-2xl font-bold leading-tight text-white drop-shadow-lg sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
                    Who We Are
                  </h1>

                  <div className="space-y-2 text-white drop-shadow-md sm:space-y-3 md:space-y-4">
                    <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                      MedArc Clinical Research Organization provides comprehensive Site Management services for clinical studies across India, ensuring seamless, high-quality, and rigorously compliant clinical trial management.
                    </p>
                    <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                      In parallel, the organization offers comprehensive, strategically guided, and rigorously compliant global regulatory submission services to health authorities worldwide.
                    </p>
                    <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                      Our services are designed to support organizations across Life Sciences, Pharmaceuticals, Biologics, Medical Devices, Ayurvedic and Consumer Products Sectors, delivering tailored solutions aligned with their clinical and regulatory requirements.
                    </p>
                    <p className="hidden text-sm leading-relaxed sm:block sm:text-base md:text-lg">
                      Every initiative we undertake is governed by strong ethical principles and strict compliance with global regulatory requirements, including ICH Guidelines, regional regulatory authorities, and international regulatory standards, ensuring robust data integrity, accuracy, and reliability throughout the lifecycle.
                    </p>
                    <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                      By choosing MedArc Clinical Research, you align with a results-driven team passionately committed to precision, professionalism, and transformative excellence — empowering meaningful and lasting progress in the ever-evolving landscape of clinical research and global regulatory submissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f4] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container-site px-4 sm:px-6 md:px-8">
          <div className="mb-8 text-center sm:mb-12 md:mb-14">
            <h2 className="mb-2 px-2 text-xl font-bold uppercase tracking-wide text-primary-500 sm:mb-3 sm:text-2xl md:text-3xl sm:tracking-widest">
              THE FOUNDATION OF OUR WORK
            </h2>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-5 sm:mb-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 md:mb-20">
            {PILLARS1.map((pillar, idx) => (
              <InfoCard key={idx} pillar={pillar} />
            ))}
          </div>

          <div ref={pillarsRef} className="reveal mx-auto mb-10 max-w-4xl px-2 text-center sm:mb-14 md:mb-16">
            <h2 className="mb-3 text-xl font-bold uppercase tracking-wide text-primary-500 sm:mb-4 sm:text-2xl md:text-3xl sm:tracking-widest">
              WHAT WE DO
            </h2>
            <p className="text-base leading-relaxed text-stone-600 sm:text-lg md:text-xl">
              A unified and trusted partner for best-in-class clinical trial management services, while also delivering specialized expertise in global regulatory submissions to support successful approvals worldwide.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
            {PILLARS2.map((pillar, idx) => (
              <InfoCard key={idx} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container-site px-4 sm:px-6 md:px-8">
          <div className="mb-8 text-center sm:mb-12 md:mb-14">
            <h2 className="text-xl font-bold uppercase tracking-wide text-primary-500 sm:text-2xl md:text-3xl sm:tracking-widest">
              Therapeutic Areas
            </h2>
          </div>
          <TherapeuticCarousel />
        </div>
      </section>
    </>
  );
}
