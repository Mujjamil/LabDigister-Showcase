"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 bg-[#006020] relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center gap-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Ready to Digitize your Plant?
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/80 text-sm max-w-xl leading-relaxed">
            Join the world&apos;s leading engineering teams in the first truly digital plant ecosystem. 
            Automate manual work and unlock plant intelligence instantly.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#006020] font-bold text-sm hover:bg-white/90 transition-colors shadow-lg shadow-black/10"
            >
              Schedule a Demo
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/30 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-colors"
            >
              Contact Enterprise
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
