/**
 * ContactPage.jsx
 * Contact form + sidebar info + map placeholder.
 */

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button, TagLabel } from "../components/ui.jsx";
import LocMap from "../components/LocMap.jsx";

/* ── Contact info items ───────────────────────────── */
const INFO = [
  {
    icon: MapPin,
    label: "Address",
    text: "Plot no:25, Wardhaman Nagar, Ring Road \n Kaulkhed Akola 444004",
  },
  { icon: Phone, label: "Phone", text: "+91 9359283227" },
  { icon: Mail, label: "Email", text: "latika.medarc@gmail.com" },
  { icon: Clock, label: "Hours", text: "Mon–Fri: 8 AM – 6 PM ET" },
];

/* ── Interest options for form ────────────────────── */
const INTERESTS = [
  "For CRO and Investigator",
  "Regulatory and Medical Writing",
  "Ethics Committee Establishment",
  "Other",
];

/* ═══════════════════════════════════════════════════ */
export default function ContactPage() {
  /* Form state */
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      {/* ══ PAGE HERO ════════════════════════════════ */}
      <section className="pt-32 pb-12 bg-[#f7f6f4] border-b border-stone-100">
        <div className="container-site text-center">
          <TagLabel>Get In Touch</TagLabel>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mt-4 mb-3">
            Let's discuss your <span className="text-gradient">next study</span>
          </h1>
          <p className="text-stone-500 max-w-md mx-auto">
            Whether you're planning your first-in-human trial or need regulatory
            support for a market submission, our team is ready to help.
          </p>
        </div>
      </section>

      {/* ══ FORM + SIDEBAR ═══════════════════════════ */}
      <section className="section-pad">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* ── Contact info sidebar ── */}
            <aside className="space-y-6">
              {INFO.map(({ icon: Icon, label, text }) => (
                <div key={label} className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400 mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-stone-700 whitespace-pre-line leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              {/* <div className="rounded-2xl overflow-hidden bg-stone-100 h-44 flex items-center justify-center border border-stone-200">
                <div className="text-center">
                  <MapPin l size={28} className="text-primary-400 mx-auto mb-1" />
                  <p className="text-xs text-stone-400">Cambridge, MA 02142</p>
                </div>
              </div> */}

              <div className=" flex items-center justify-center">
                <LocMap theme="light" />
              </div>
            </aside>

            {/* ── Contact form ── */}
            <div className="lg:col-span-2">
              {submitted ? (
                /* Success state */
                <div className="card h-full flex flex-col items-center justify-center text-center py-16">
                  <CheckCircle2 size={48} className="text-primary-500 mb-4" />
                  <h2 className="font-display text-2xl font-bold text-stone-900 mb-2">
                    Message Received!
                  </h2>
                  <p className="text-stone-500 max-w-sm mb-6">
                    Thank you for reaching out. A member of our team will be in
                    touch within one business day.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="card space-y-5"
                  noValidate
                >
                  <h2 className="font-display text-xl font-bold text-stone-900">
                    Request a Consultation
                  </h2>

                  {/* Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-stone-700 mb-1"
                      >
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Dr. Jane Smith"
                        className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 placeholder-stone-300 transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-semibold text-stone-700 mb-1"
                      >
                        Company / Institution
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Pharma Co."
                        className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 placeholder-stone-300 transition"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-stone-700 mb-1"
                      >
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 placeholder-stone-300 transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-stone-700 mb-1"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 placeholder-stone-300 transition"
                      />
                    </div>
                  </div>

                  {/* Area of interest */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-xs font-semibold text-stone-700 mb-1"
                    >
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-stone-700 bg-white transition"
                    >
                      <option value="">Select a service…</option>
                      {INTERESTS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-stone-700 mb-1"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, and any specific requirements…"
                      className="w-full px-3 py-2.5 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 placeholder-stone-300 resize-none transition"
                    />
                  </div>

                  {/* Privacy note */}
                  <p className="text-[11px] text-stone-400 leading-relaxed">
                    By submitting this form you agree to our{" "}
                    <span className="text-primary-500 underline cursor-pointer">
                      Privacy Policy
                    </span>
                    . Your information will never be shared with third parties.
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send size={15} />
                    )}
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
