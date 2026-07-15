"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Check, X, Clock, Zap, Target, Cloud, FileText, Search, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const comparisons = [
  { feature: "Processing Time", icon: <Clock size={16} />, traditional: "4–8 weeks", labdigitizer: "Minutes", traditionalBad: true },
  { feature: "Accuracy", icon: <Target size={16} />, traditional: "60–75%", labdigitizer: "99.2%", traditionalBad: true },
  { feature: "Automation", icon: <Zap size={16} />, traditional: "Fully Manual", labdigitizer: "AI-Driven", traditionalBad: true },
  { feature: "Cloud Access", icon: <Cloud size={16} />, traditional: false, labdigitizer: true, traditionalBad: true },
  { feature: "Structured Reports", icon: <FileText size={16} />, traditional: false, labdigitizer: true, traditionalBad: true },
  { feature: "Fast Search", icon: <Search size={16} />, traditional: false, labdigitizer: true, traditionalBad: true },
  { feature: "Scalability", icon: <TrendingUp size={16} />, traditional: "Limited", labdigitizer: "Unlimited", traditionalBad: true },
];

export default function WhyChoose() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Why LabDigitizer"
          title="Traditional Methods vs"
          titleHighlight="LabDigitizer"
          subtitle="Stop spending months on manual digitization. See the difference that AI makes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="grid grid-cols-[1fr_1fr_1fr] gap-0 mb-4 px-4">
            <div className="text-xs text-[#C0C4CC] font-semibold uppercase tracking-widest">Feature</div>
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C0C4CC] uppercase tracking-widest px-3 py-1 rounded-full border border-black/[0.07] bg-[#F8F9FC]">
                <X size={12} />Traditional
              </span>
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00A846] uppercase tracking-widest px-3 py-1 rounded-full border border-[#00C853]/25 bg-[#00C853]/[0.07]">
                <Check size={12} />LabDigitizer
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col gap-2">
            {comparisons.map((row, i) => (
              <motion.div
                key={row.feature}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="grid grid-cols-[1fr_1fr_1fr] gap-0 items-center p-4 rounded-2xl border border-black/[0.06] bg-white shadow-sm hover:border-[#00C853]/15 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F9FC] border border-black/[0.07] flex items-center justify-center text-[#C0C4CC]">
                    {row.icon}
                  </div>
                  <span className="text-sm text-[#5A6478] font-medium">{row.feature}</span>
                </div>
                <div className="flex justify-center">
                  {typeof row.traditional === "boolean" ? (
                    <div className="w-7 h-7 rounded-full bg-[#F8F9FC] border border-black/[0.07] flex items-center justify-center">
                      <X size={14} className="text-[#C0C4CC]" />
                    </div>
                  ) : (
                    <span className="text-sm text-[#C0C4CC] font-medium bg-[#F8F9FC] px-3 py-1 rounded-lg border border-black/[0.06]">
                      {row.traditional}
                    </span>
                  )}
                </div>
                <div className="flex justify-center">
                  {typeof row.labdigitizer === "boolean" ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, type: "spring", stiffness: 400, damping: 20 }}
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(0,200,83,0.1)", border: "1px solid rgba(0,200,83,0.3)" }}
                    >
                      <Check size={14} className="text-[#00C853]" />
                    </motion.div>
                  ) : (
                    <span className="text-sm font-bold px-3 py-1 rounded-lg"
                      style={{ color: "#00A846", background: "rgba(0,200,83,0.08)", border: "1px solid rgba(0,200,83,0.2)" }}>
                      {row.labdigitizer}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-10 text-center">
            <p className="text-[#9CA3AF] text-sm mb-6">
              Join 50+ engineering teams already saving weeks of work with LabDigitizer
            </p>
            <a href="#download"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#00C853] text-white font-bold hover:bg-[#00A846] transition-colors shadow-lg shadow-[#00C853]/20">
              Start Digitizing Today →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
