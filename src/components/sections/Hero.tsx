"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, Cpu } from "lucide-react";
import { staggerContainer, fadeUp, blurReveal } from "@/lib/animations";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start bg-[#F8F9FC] pb-20 overflow-hidden"
      style={{ paddingTop: "140px" }}
    >
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#00C853]/10 text-[#00A846] border border-[#00C853]/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
          ✦ Neural/Plant Specimen Analysis
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={blurReveal}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[#0D0D0D]"
          style={{ fontFamily: "var(--font-manrope), sans-serif" }}
        >
          The Physical Lab, <br />
          <span className="text-[#00C853]">Digitized for the Future.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm md:text-base text-[#5A6478] max-w-2xl leading-relaxed mt-2"
        >
          Transform raw biological specimens and physical engineering drawings into high-fidelity datasets. 
          LabDigitizer bridges the gap between the wet-lab and the silicon-core with laboratory-grade precision.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <a
            href="#download"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#006020] text-white font-bold text-sm hover:bg-[#004D1A] transition-colors shadow-lg shadow-black/10"
          >
            Start the Pipeline
          </a>
          <a
            href="https://plantdigitizer.processplantai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-black/[0.1] bg-white text-[#0D0D0D] font-bold text-sm hover:bg-black/[0.02] hover:border-black/[0.15] transition-all shadow-sm"
          >
            See it in action
          </a>
        </motion.div>

        {/* Centered Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="relative w-full max-w-[260px] mt-16"
        >
          {/* Subtle Glow */}
          <div className="absolute inset-0 blur-3xl bg-[#00C853]/8 rounded-full scale-75 -translate-y-4" />

          <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-[#00C853] to-[#00897B] shadow-xl">
            <div className="rounded-[38px] bg-white overflow-hidden flex flex-col" style={{ height: 460 }}>
              {/* Notch */}
              <div className="flex justify-center pt-2.5 pb-1.5 flex-shrink-0">
                <div className="w-16 h-4 bg-[#F0F0F0] rounded-full flex items-center justify-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#CCC]" />
                  <div className="w-4 h-1 bg-[#DDD]" />
                </div>
              </div>

              {/* Real Phone Screen Content Image */}
              <div className="flex-1 relative w-full overflow-hidden bg-black/[0.03]">
                <Image
                  src="/images/hero_phone.png"
                  alt="LabDigitizer Mobile Interface"
                  fill
                  sizes="260px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
