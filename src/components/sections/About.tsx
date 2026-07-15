"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from "@/lib/animations";
import { Target, Eye, CheckCircle } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  { value: 500, suffix: "+", label: "Plants Digitized", color: "#00C853" },
  { value: 99, suffix: ".2%", label: "AI Accuracy", color: "#00897B" },
  { value: 10, suffix: "x", label: "Faster Than Manual", color: "#00A846" },
  { value: 50, suffix: "+", label: "Enterprise Clients", color: "#00C853" },
];

const benefits = [
  "Zero manual redrawing of engineering diagrams",
  "AI extracts valve tags, pipe specs, instrument data automatically",
  "Cloud-synchronized across entire engineering teams",
  "Works offline — digitize in the field without connectivity",
  "Export to Excel, PDF, JSON, and structured databases",
  "Role-based access for engineers, managers, and auditors",
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[#F8F9FC]">
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="About LabDigitizer"
          title="What Is"
          titleHighlight="LabDigitizer?"
          subtitle="The world's most advanced AI platform for industrial plant documentation — built for engineers who demand precision at scale."
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeLeft}>
              <h3
                className="text-2xl font-bold mb-4 text-[#0D0D0D]"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                The Problem We Solve
              </h3>
              <p className="text-[#5A6478] leading-relaxed">
                Industrial plants contain thousands of P&IDs, isometric drawings, and engineering
                documents — stored as static PDFs or paper drawings. Searching, updating, or
                extracting data from these is a manual nightmare that costs weeks and invites human error.
              </p>
            </motion.div>

            <motion.div variants={fadeLeft} className="flex flex-col gap-3">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#00C853] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#5A6478]">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-6"
          >
            {/* Mission Card */}
            <motion.div
              variants={fadeRight}
              className="relative p-6 rounded-2xl border border-black/[0.07] bg-white shadow-sm overflow-hidden group hover:border-[#00C853]/25 hover:shadow-md transition-all"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#00C853]/[0.04] rounded-full blur-2xl" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center">
                  <Target size={18} className="text-[#00C853]" />
                </div>
                <h4 className="font-bold text-[#0D0D0D]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                  Our Mission
                </h4>
              </div>
              <p className="text-[#5A6478] text-sm leading-relaxed relative z-10">
                To eliminate manual plant documentation by making AI-powered digitization
                accessible to every engineer — from a field tablet or a browser window.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={fadeRight}
              className="relative p-6 rounded-2xl border border-black/[0.07] bg-white shadow-sm overflow-hidden group hover:border-[#00897B]/25 hover:shadow-md transition-all"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#00897B]/[0.04] rounded-full blur-2xl" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#00897B]/10 border border-[#00897B]/20 flex items-center justify-center">
                  <Eye size={18} className="text-[#00897B]" />
                </div>
                <h4 className="font-bold text-[#0D0D0D]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                  Our Vision
                </h4>
              </div>
              <p className="text-[#5A6478] text-sm leading-relaxed relative z-10">
                A world where every industrial plant has a living, searchable, AI-maintained
                digital twin — updated in real-time as engineering changes happen.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={fadeRight} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl border border-black/[0.07] bg-white text-center shadow-sm hover:shadow-md hover:border-[#00C853]/15 transition-all"
                >
                  <div
                    className="text-3xl font-extrabold mb-1"
                    style={{ fontFamily: "var(--font-manrope), sans-serif", color: stat.color }}
                  >
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[#9CA3AF] text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
