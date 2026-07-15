"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  { name: "Dr. Sarah Chen", role: "Chief Process Engineer", company: "Pacific Chemical", rating: 5, text: "LabDigitizer reduced our P&ID digitization time from 6 weeks to just 2 days. The AI accuracy is genuinely impressive — 99%+ on our complex drawings.", avatar: "SC", color: "#00C853" },
  { name: "Marcus Hoffmann", role: "Engineering Manager", company: "Rhein Power AG", rating: 5, text: "We deployed LabDigitizer across 3 power plants simultaneously. The offline mode was critical for our remote facilities. Exceptional product.", avatar: "MH", color: "#00897B" },
  { name: "Priya Nair", role: "Digital Transformation Lead", company: "Reliance Industries", rating: 5, text: "The export capabilities alone justified the investment. We now feed digitized P&ID data directly into our CMMS — something that took months manually.", avatar: "PN", color: "#00A846" },
  { name: "James O'Brien", role: "Lead Piping Engineer", company: "Bechtel Corporation", rating: 5, text: "Having used legacy digitization tools for years, LabDigitizer is a revelation. The UI is clean, the AI is fast, and the results are accurate.", avatar: "JO", color: "#00C853" },
  { name: "Aisha Diallo", role: "Operations Director", company: "TotalEnergies Upstream", rating: 5, text: "Role management is top-notch. Our engineers review, managers approve, and auditors have full read-only access. Compliance has never been easier.", avatar: "AD", color: "#00897B" },
  { name: "Rajan Mehta", role: "VP Engineering", company: "ONGC Digital", rating: 5, text: "We tried three other solutions before LabDigitizer. None came close in terms of AI accuracy, workflow integration, and mobile capability.", avatar: "RM", color: "#00A846" },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div
      className="flex-shrink-0 w-80 p-6 rounded-2xl border border-black/[0.07] bg-white relative overflow-hidden shadow-sm"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${testimonial.color}, transparent)` }} />
      <div className="absolute top-4 right-4 opacity-10" style={{ color: testimonial.color }}>
        <Quote size={32} />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={13} fill="#00C853" className="text-[#00C853]" />
        ))}
      </div>

      <p className="text-sm text-[#5A6478] leading-relaxed mb-6 relative z-10">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${testimonial.color}25, ${testimonial.color}10)`,
            border: `1px solid ${testimonial.color}30`,
            color: testimonial.color,
            fontFamily: "var(--font-manrope)",
          }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-sm font-bold text-[#0D0D0D]" style={{ fontFamily: "var(--font-manrope)" }}>
            {testimonial.name}
          </div>
          <div className="text-xs text-[#9CA3AF]">
            {testimonial.role} · {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      <div className="relative z-[5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <SectionHeader
            badge="Testimonials"
            title="Trusted by"
            titleHighlight="Engineers Worldwide"
            subtitle="Hear from the process engineers, managers, and operations leaders who rely on LabDigitizer every day."
          />
        </div>

        <div className="flex overflow-hidden mb-6">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 flex-shrink-0"
          >
            {doubled.map((t, i) => <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />)}
          </motion.div>
        </div>

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 flex-shrink-0"
          >
            {[...doubled].reverse().map((t, i) => <TestimonialCard key={`${t.name}-rev-${i}`} testimonial={t} />)}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
