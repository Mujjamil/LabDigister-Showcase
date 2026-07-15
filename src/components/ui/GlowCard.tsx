"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({ children, className, glowColor = "#00C853" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-black/[0.07] bg-white cursor-default h-full",
        "shadow-[0_2px_12px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      {/* Mouse-follow glow (subtle on light) */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300 rounded-full"
        style={{
          width: 280,
          height: 280,
          left: glowPos.x - 140,
          top: glowPos.y - 140,
          background: `radial-gradient(circle, ${glowColor}12 0%, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {/* Border tint on hover */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `linear-gradient(135deg, ${glowColor}06 0%, transparent 50%)`,
          border: `1px solid ${glowColor}20`,
        }}
      />
      {/* Inner container with padding and flex */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
