"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Database, Cpu, Layers, Terminal as TermIcon } from "lucide-react";

const nodes = [
  { icon: <Database size={18} />, label: "Ingestion Layer" },
  { icon: <Cpu size={18} />, label: "Processing Core" },
  { icon: <Layers size={18} />, label: "Vector Synthesis" },
  { icon: <TermIcon size={18} />, label: "Neural API" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="pt-24 pb-32 bg-[#F8F9FC] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2
            className="text-3xl font-extrabold text-[#0D0D0D] tracking-tight"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            The Neural Architecture
          </h2>
          <p className="text-xs text-[#9CA3AF] tracking-widest uppercase font-semibold mt-3">
            Engineered for absolute fidelity, our architecture scales with the complexity of industrial plant data.
          </p>
        </div>

        {/* Nodes Row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center mb-16"
        >
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              <div className="w-14 h-14 rounded-full border border-black/[0.08] bg-white flex items-center justify-center shadow-sm group-hover:border-[#00C853]/35 group-hover:bg-[#00C853]/[0.02] transition-all">
                <div className="text-[#5A6478] group-hover:text-[#00A846] transition-colors">
                  {node.icon}
                </div>
              </div>
              <span className="text-xs font-bold text-[#5A6478] group-hover:text-[#0D0D0D] transition-colors">
                {node.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Terminal Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto rounded-2xl border border-black/[0.07] shadow-sm p-6 text-left mb-16"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="flex items-center gap-2 mb-4 border-b border-black/[0.05] pb-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <span className="text-[10px] text-[#9CA3AF] font-mono ml-2">System Terminal v2.0</span>
          </div>

          <div className="font-mono text-[10px] text-[#5A6478] space-y-2 leading-relaxed">
            <p className="text-[#00A846] font-semibold">{`> Initializing Plant Digitization Core... OK`}</p>
            <p>{`> Loading drawing: PID_reactor_unit_3.pdf [3.4MB]`}</p>
            <p>{`> Calibrating multi-modal vision grid... OK`}</p>
            <p className="text-[#00897B]">{`> Mapping elements to GNN pipeline: [||||||||||] 100%`}</p>
            <p>{`> Extracted tags: 124 valves, 89 instruments, 234 lines`}</p>
            <p className="text-[#00A846] font-bold">{`> Export ready: excel, json, pdf. Status: Success`}</p>
          </div>
        </motion.div>

        {/* Spacious spacer */}
        <div className="h-24" />
      </div>
    </section>
  );
}
