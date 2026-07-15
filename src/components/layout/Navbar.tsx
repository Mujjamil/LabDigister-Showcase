"use client";

import { useState } from "react";
import Link from "next/link";
import { Cpu } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("Platform");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F9FC]/80 backdrop-blur-md border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#00C853]/15 flex items-center justify-center border border-[#00C853]/25">
            <Cpu size={14} className="text-[#00A846]" />
          </div>
          <span className="font-bold text-[#0D0D0D] text-sm tracking-tight" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
            LabDigitizer
          </span>
        </Link>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {["Platform", "Solutions", "Research", "Pricing"].map(item => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`text-xs font-semibold relative py-1 cursor-pointer transition-colors ${
                active === item ? "text-[#00A846]" : "text-[#5A6478] hover:text-[#0D0D0D]"
              }`}
            >
              {item}
              {active === item && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00A846] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <Link href="https://plantdigitizer.processplantai.com/" className="text-xs font-bold text-[#5A6478] hover:text-[#0D0D0D] transition-colors">
            Login
          </Link>
          <Link href="#download" className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#00C853] hover:bg-[#00A846] text-white! text-xs font-bold transition-all shadow-sm" style={{ color: "#ffffff" }}>
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}
