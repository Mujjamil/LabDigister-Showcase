"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Upload, Brain, Layers, CheckSquare, FileDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    icon: <Camera size={22} />,
    number: "01",
    title: "Capture Drawing",
    description: "Photograph or scan your P&ID, isometric, or engineering drawing using the LabDigitizer Android app. Works with any quality of document.",
    color: "#00C853",
    tags: ["Android Camera", "Scanner", "Photo Upload"],
  },
  {
    icon: <Upload size={22} />,
    number: "02",
    title: "Upload to Platform",
    description: "Your drawing is securely uploaded to the LabDigitizer cloud platform with end-to-end encryption. Supports batch uploads for entire plant documentation.",
    color: "#00897B",
    tags: ["Encrypted Upload", "Batch Mode", "Auto-Queue"],
  },
  {
    icon: <Brain size={22} />,
    number: "03",
    title: "AI Processing",
    description: "Our proprietary AI model analyzes the drawing — detecting valves, instruments, piping, tags, line numbers, and symbols with 99.2% accuracy.",
    color: "#00A846",
    tags: ["Computer Vision", "NLP Tagging", "Symbol Recognition"],
  },
  {
    icon: <Layers size={22} />,
    number: "04",
    title: "Digitization",
    description: "Every extracted element is mapped into a structured data model — linked, searchable, and referenced. Your entire plant becomes a live knowledge graph.",
    color: "#00C853",
    tags: ["Data Structuring", "Tag Linking", "Knowledge Graph"],
  },
  {
    icon: <CheckSquare size={22} />,
    number: "05",
    title: "Validation",
    description: "Engineers review AI-extracted data through an intuitive interface. Flag, correct, and approve elements with a powerful review workflow.",
    color: "#00897B",
    tags: ["Human Review", "QA Workflow", "Audit Trail"],
  },
  {
    icon: <FileDown size={22} />,
    number: "06",
    title: "Export & Integrate",
    description: "Export your digitized plant data as Excel, PDF, JSON, or integrate directly with your existing CMMS, ERP, or engineering systems via API.",
    color: "#00A846",
    tags: ["Excel Export", "PDF Reports", "API Integration"],
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-0 md:items-center"
    >
      {/* Desktop left card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className={`hidden md:flex flex-1 pr-12 ${isLeft ? "justify-end" : "invisible"}`}
      >
        {isLeft && (
          <div
            className="inline-flex flex-col gap-3 p-6 rounded-2xl border border-black/[0.07] bg-white shadow-sm hover:shadow-md hover:border-[#00C853]/20 transition-all cursor-default text-right"
            style={{ maxWidth: 340 }}
          >
            <div className="flex items-center gap-3 justify-end">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C0C4CC]">
                Step {step.number}
              </span>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0"
                style={{ color: step.color, background: `${step.color}10`, borderColor: `${step.color}25` }}
              >
                {step.icon}
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#0D0D0D]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
              {step.title}
            </h3>
            <p className="text-sm text-[#5A6478] leading-relaxed">{step.description}</p>
            <div className="flex flex-wrap gap-2 justify-end">
              {step.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full border font-medium"
                  style={{ color: step.color, borderColor: `${step.color}25`, background: `${step.color}08` }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Center node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
        className="hidden md:flex flex-col items-center z-10 flex-shrink-0"
      >
        <div
          className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm shadow-md"
          style={{
            background: `${step.color}12`,
            borderColor: `${step.color}50`,
            color: step.color,
            boxShadow: `0 4px 16px ${step.color}18`,
          }}
        >
          {step.number}
        </div>
      </motion.div>

      {/* Desktop right card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className={`hidden md:flex flex-1 pl-12 ${!isLeft ? "justify-start" : "invisible"}`}
      >
        {!isLeft && (
          <div
            className="inline-flex flex-col gap-3 p-6 rounded-2xl border border-black/[0.07] bg-white shadow-sm hover:shadow-md hover:border-[#00C853]/20 transition-all cursor-default"
            style={{ maxWidth: 340 }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0"
                style={{ color: step.color, background: `${step.color}10`, borderColor: `${step.color}25` }}
              >
                {step.icon}
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#C0C4CC]">
                Step {step.number}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#0D0D0D]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
              {step.title}
            </h3>
            <p className="text-sm text-[#5A6478] leading-relaxed">{step.description}</p>
            <div className="flex flex-wrap gap-2">
              {step.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full border font-medium"
                  style={{ color: step.color, borderColor: `${step.color}25`, background: `${step.color}08` }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Mobile card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="md:hidden p-5 rounded-2xl border border-black/[0.07] bg-white shadow-sm"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0"
            style={{ color: step.color, background: `${step.color}10`, borderColor: `${step.color}25` }}>
            {step.icon}
          </div>
          <div>
            <span className="text-[10px] text-[#C0C4CC] uppercase tracking-wider font-bold">Step {step.number}</span>
            <h3 className="text-sm font-bold text-[#0D0D0D]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
              {step.title}
            </h3>
          </div>
        </div>
        <p className="text-xs text-[#5A6478] leading-relaxed">{step.description}</p>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="workflow" className="section-padding relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="How It Works"
          title="From Drawing to"
          titleHighlight="Digital Intelligence"
          subtitle="Six automated steps transform any engineering drawing into structured, searchable plant data in minutes."
        />

        <div className="mt-20 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-black/[0.08] to-transparent" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="hidden md:block absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#00C853] via-[#00897B] to-[#00A846] origin-top"
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
