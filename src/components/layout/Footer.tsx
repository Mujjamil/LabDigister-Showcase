"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FC] border-t border-black/[0.05] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <span className="text-xs font-bold text-[#0D0D0D]">LabDigitizer</span>
          <p className="text-[10px] text-[#9CA3AF] mt-1">
            © 2026 LabDigitizer. Plant data in luxury pixels.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-semibold text-[#5A6478]">
          <Link href="#" className="hover:text-[#0D0D0D] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#0D0D0D] transition-colors">Terms of Service</Link>
          <Link href="#contact" className="hover:text-[#0D0D0D] transition-colors">Contact</Link>
          <Link href="#" className="hover:text-[#0D0D0D] transition-colors">Documentation</Link>
        </div>
      </div>
    </footer>
  );
}
