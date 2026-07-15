"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/animations";
import { Scan, Database, Cpu } from "lucide-react";
import Image from "next/image";

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Column: Text & List */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2
                className="text-3xl font-extrabold text-[#0D0D0D] tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                The Specimen-to-Silicon <br />
                Pipeline
              </h2>
              <p className="text-sm text-[#5A6478] leading-relaxed mt-3">
                Our proprietary workflow ensures zero-loss data translation, from physical biological structures to neural weights in milliseconds.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              {[
                {
                  icon: <Scan size={16} className="text-[#00A846]" />,
                  title: "Volumetric Digitization",
                  desc: "Sub-micron scanning of biological tissues using multi-modal sensor arrays.",
                },
                {
                  icon: <Database size={16} className="text-[#00897B]" />,
                  title: "Neural Mapping",
                  desc: "Proprietary GNN (Graph Neural Network) mapping structure to auto-detect tag relationships.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-[#F8F9FC] transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#F8F9FC] border border-black/[0.05] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0D0D0D]">{item.title}</h3>
                    <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Middle Column: Scanning Image (Robotic Arm) */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden border border-black/[0.08] bg-[#F8F9FC] shadow-sm">
              <Image
                src="/images/pipeline_robot.png"
                alt="Robotic Specimen Scan Pipeline"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: L-1 Tensor Card */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[280px] p-8 rounded-3xl border border-black/[0.07] bg-[#F8F9FC] flex flex-col items-center text-center shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.05] flex items-center justify-center shadow-sm">
                <Cpu size={24} className="text-[#00A846]" />
              </div>
              <span className="text-[10px] text-[#9CA3AF] font-bold tracking-wider uppercase mt-6">Core Processor</span>
              <h3 className="text-lg font-extrabold text-[#0D0D0D] mt-1" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                L-1 Tensor
              </h3>
              <p className="text-xs text-[#5A6478] mt-2 leading-relaxed">
                Dedicated hardware-accelerated GNN pipeline processing thousands of nodes/second.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
