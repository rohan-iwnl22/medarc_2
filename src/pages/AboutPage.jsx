/**
 * AboutPage.jsx
 * MedArc Clinical Research - About Us
 * Fixed navbar darkness issue
 */

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button, SectionHeader } from "../components/ui.jsx";
import useReveal from "../hooks/useReveal.js";

const bannerURL = "https://ik.imagekit.io/umm5llpkg/MedArc/img1.png";
const futureURL = "https://ik.imagekit.io/umm5llpkg/MedArc/img3.png";

const newOppURL = "https://ik.imagekit.io/umm5llpkg/MedArc/img2.png";

/* ── Why Choose MedArc ───────────────────────────── */
const WHY_CHOOSE = [
  { text: "Experienced Team: 10 years research industry experience" },
  { text: "Responsive Approach: Quick and proactive support" },
  { text: "Quality Delivery: Timely and high-quality outcomes" },
  { text: "Rapid Enrollment: Fast patient recruitment and strong retention" },
  { text: "Quick Resolution: Efficient query handling" },
  { text: "Fast Start-Up: Expedited site initiation" },
  { text: "Timely Execution: Accelerated study timelines" },
  { text: "Efficient Monitoring: Strong on-site oversight" },
  { text: "Cost Efficiency: Optimized project budgets" },
  { text: "Therapeutic Expertise: Strong domain knowledge" },
  { text: "Regulatory Compliance: aligned with DCGI, EMA, FDA guidelines" },
  { text: "Flexible Systems: Paper & EDC experience" },
];

/* ═══════════════════════════════════════════════════ */
export default function AboutPage() {
  const whyRef = useReveal();
  const heroRef = useReveal();
  const futureRef = useReveal();
  const discoverRef = useReveal();
  const commitmentRef = useReveal();

  return (
    <>
      {/* ══ BANNER - NO DARK OVERLAY ═════════════════════════════════ */}
      <section className="relative pt-20">
        {/* Banner Image - removed dark overlay that was affecting navbar */}
        <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
          <img
            src={bannerURL}
            alt="About MedArc Clinical Research"
            className="w-full h-full object-cover object-center"
          />

          {/* Banner Text Overlay - removed dark gradient, using clean text shadow only */}
          <div className="absolute inset-0 flex items-center">
            <div className="container-site px-4 xs:px-5 sm:px-6 md:px-8">
              <div ref={heroRef} className="reveal max-w-3xl">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-primary-500 mb-4 leading-tight drop-shadow-lg">
                  About US
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INTRODUCTION SECTION ═══════════════════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-site px-4 xs:px-5 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-base xs:text-lg sm:text-lg md:text-xl text-stone-600 leading-relaxed">
              MedArc Clinical Research maintains a strong network of experienced
              Principal Investigators, reputed hospitals, and research
              institutions, enabling efficient access to diverse patient
              populations. This allows us to meet protocol-specific requirements
              and support timely enrollment of eligible study participants.
            </p>
            <p className="text-base xs:text-lg sm:text-lg md:text-xl text-stone-600 leading-relaxed mt-4">
              In India, MedArc provides comprehensive clinical trial support,
              including site management, project coordination, and strategic
              patient recruitment. Our approach combines innovative thinking,
              proactive problem-solving, and a skilled team to ensure smooth
              study execution.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SHAPING THE FUTURE ════════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#f7f6f4]">
        <div className="container-site px-4 xs:px-5 sm:px-6 md:px-8">
          <div
            ref={futureRef}
            className="reveal grid lg:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            <div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-stone-900 mb-4 md:mb-6 leading-tight">
                Shaping the Future of Healthcare
              </h2>

              <p className="text-base xs:text-lg text-stone-600 leading-relaxed">
                At MedArc, we are shaping the future of healthcare through
                innovative, data-driven intelligence solutions. By bridging the
                gap between patients and treatments, we enable smarter clinical,
                regulatory, and commercial decisions—creating meaningful impact
                and improved health outcomes.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                loading="lazy"
                src={futureURL}
                alt="Shaping Healthcare Future"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ DISCOVER OPPORTUNITIES ════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-site px-4 xs:px-5 sm:px-6 md:px-8">
          <div
            ref={discoverRef}
            className="reveal grid lg:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl lg:order-1">
              <img
                loading="lazy"
                src={newOppURL}
                alt="Discover New Opportunities"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                style={{ aspectRatio: "4/3" }}
              />
            </div>

            <div className="lg:order-2">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-stone-900 mb-4 md:mb-6 leading-tight">
                Discover New Opportunities
              </h2>

              <p className="text-base xs:text-lg text-stone-600 leading-relaxed">
                We believe every dataset holds an undiscovered opportunity.
                MedArc's clinical and regulatory intelligence solutions are
                designed to help health science organizations move beyond
                routine operations — uncovering new trial possibilities,
                accelerating market access, and building the strategic
                connections that bring treatments to patients faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRANSPARENCY SECTION ════════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#f7f6f4]">
        <div className="container-site px-4 xs:px-5 sm:px-6 md:px-8">
          <div
            ref={commitmentRef}
            className="reveal max-w-4xl mx-auto text-center"
          >
            <p className="text-base xs:text-lg text-stone-600 leading-relaxed mb-4">
              We emphasize transparency in all our operations, fostering trust
              and long-term partnerships with our clients. Our streamlined
              information management systems ensure timely reporting and provide
              sponsors with reliable, real-time access to critical study data.
            </p>
            <p className="text-base xs:text-lg text-stone-600 leading-relaxed">
              MedArc Clinical Research is committed to delivering reliable,
              compliant, and efficient clinical trial execution. We specialize
              in clinical research management and regulatory support for
              pharmaceuticals across all therapeutic areas, as well as
              nutraceuticals, cosmetics, Ayurvedic studies, PI-initiated
              studies, observational studies, and medical devices.
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE MEDARC ═════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-site px-4 xs:px-5 sm:px-6 md:px-8">
          <div ref={whyRef} className="reveal text-center mb-12 md:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Why Choose MedArc
            </h2>
            <p className="text-base xs:text-lg text-primary-100 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every aspect of our
              work
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {WHY_CHOOSE.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 group"
              >
                <CheckCircle2
                  size={22}
                  className="text-primary-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                />
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
