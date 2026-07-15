"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#00C853]/25 bg-[#00C853]/[0.07] text-[#00A846]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-[#0D0D0D]"
        style={{ fontFamily: "var(--font-manrope), sans-serif" }}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "text-[#5A6478] text-lg leading-relaxed",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
