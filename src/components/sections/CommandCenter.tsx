"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "@/lib/animations";
import Image from "next/image";

export default function CommandCenter() {
  return (
    <section id="command-center" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content with System Latency Progress Bar */}
          <motion.div
            variants={fadeLeft}
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
                Industrial Command Center
              </h2>
              <p className="text-sm text-[#5A6478] leading-relaxed mt-3">
                For enterprise-scale research, our desktop dashboard provides an unparalleled command and control interface. Manage thousands of concurrent digitizations with global-scale reliability.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-black/[0.06] bg-[#F8F9FC] mt-2">
              <div className="flex justify-between items-center mb-2.5 text-xs font-bold">
                <span className="text-[#5A6478]">System Latency</span>
                <span className="text-[#00A846]">12ms</span>
              </div>
              <div className="h-2 bg-black/[0.06] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "12%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-[#00A846]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Laptop mockup on desk mockup */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[480px] aspect-[16/10] rounded-3xl overflow-hidden border border-black/[0.08] bg-[#F8F9FC] shadow-sm">
              <Image
                src="/images/laptop_desk.png"
                alt="Command Center Laptop Dashboard Interface"
                fill
                sizes="480px"
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
