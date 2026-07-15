"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const companies = [
  "Chevron", "Shell", "BASF", "Siemens", "ABB",
  "Honeywell", "ExxonMobil", "Bechtel", "Fluor", "Worley",
  "TotalEnergies", "Reliance Industries", "ONGC", "SABIC", "Air Liquide",
  "Dow Chemical", "Neste", "Linde", "Baker Hughes", "Schlumberger",
];

export default function Trusted() {
  const doubled = [...companies, ...companies];

  return (
    <section className="relative py-20 border-y border-black/[0.06] overflow-hidden bg-white">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm font-medium tracking-widest uppercase text-[#C0C4CC]"
        >
          Trusted by industrial leaders worldwide
        </motion.p>
      </div>

      {/* Marquee row 1 */}
      <div className="flex overflow-hidden mb-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-5 flex-shrink-0"
        >
          {doubled.map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-black/[0.07] bg-[#F8F9FC] flex-shrink-0 hover:border-[#00C853]/25 hover:bg-[#00C853]/[0.04] transition-all group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-[#00C853]/30 group-hover:bg-[#00C853] transition-colors" />
              <span className="text-[#C0C4CC] text-sm font-medium whitespace-nowrap group-hover:text-[#5A6478] transition-colors">
                {company}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee row 2 (reversed) */}
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-5 flex-shrink-0"
        >
          {[...doubled].reverse().map((company, i) => (
            <div
              key={`${company}-rev-${i}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-black/[0.07] bg-[#F8F9FC] flex-shrink-0 hover:border-[#00897B]/25 hover:bg-[#00897B]/[0.04] transition-all group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-[#00897B]/25 group-hover:bg-[#00897B] transition-colors" />
              <span className="text-[#C0C4CC] text-sm font-medium whitespace-nowrap group-hover:text-[#5A6478] transition-colors">
                {company}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
