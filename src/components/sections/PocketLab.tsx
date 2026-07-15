"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeLeft, fadeRight } from "@/lib/animations";
import Image from "next/image";

export default function PocketLab() {
  return (
    <section id="pocket-lab" className="py-24 bg-[#F8F9FC] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image with phone mockup overlay */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative flex justify-center"
          >
            {/* Main Image container representing scientist using app */}
            <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-3xl overflow-hidden border border-black/[0.08] bg-white shadow-sm flex items-center justify-center">
              <Image
                src="/images/scientist_phone.png"
                alt="Scientist checking plant data on phone"
                fill
                sizes="400px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Content list */}
          <motion.div
            variants={fadeRight}
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
                Lab In Your Pocket
              </h2>
              <p className="text-sm text-[#5A6478] leading-relaxed mt-3">
                Access the full power of your digital twin from anywhere. Monitor real-time neural conversions, authorize sequence mutations, and collaborate with your team in a persistent, shared workspace.
              </p>
            </div>

            <div className="flex flex-col gap-3.5 mt-2">
              {[
                "Real-time status notifications",
                "Wet specimen visualization",
                "Encrypted Cloud Workspace",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00A846]/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-[#00A846]" />
                  </div>
                  <span className="text-xs font-semibold text-[#5A6478]">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
