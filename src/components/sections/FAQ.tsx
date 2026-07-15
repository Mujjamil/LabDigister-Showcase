"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Plus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  { q: "What is LabDigitizer and who is it for?", a: "LabDigitizer is an AI-powered industrial plant digitization platform designed for process engineers, plant managers, and engineering consultants. It transforms paper or PDF P&IDs, isometric drawings, and engineering documents into structured, searchable digital data." },
  { q: "How accurate is the AI element detection?", a: "Our proprietary AI model achieves 99.2% accuracy on standard P&ID symbols and instrument tags. Accuracy may vary slightly for highly customized or non-standard drawing conventions, but our validation workflow allows engineers to quickly review and correct any discrepancies." },
  { q: "Do I need internet connectivity to use LabDigitizer?", a: "The Android app includes full offline mode — you can capture drawings, perform initial processing, and review results without connectivity. Data automatically syncs to the cloud when your connection is restored. The web platform requires an internet connection." },
  { q: "What file formats can I upload?", a: "LabDigitizer accepts PDF, TIFF, PNG, JPEG, and AutoCAD DWG/DXF formats. You can also capture drawings directly using your Android device's camera. Batch upload is supported for large documentation sets." },
  { q: "How does the export functionality work?", a: "Digitized data can be exported as Excel (valve lists, instrument indexes, line lists), PDF reports, CSV, and JSON. We also provide a REST API for direct integration with CMMS systems (Maximo, SAP PM), ERP platforms, and engineering databases." },
  { q: "Is my plant data secure?", a: "Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We use geo-redundant cloud storage with daily backups. Role-based access control ensures team members only see what they're authorized to. Full audit trails are maintained for compliance." },
  { q: "Can multiple team members work on the same project?", a: "Absolutely. LabDigitizer is designed for collaboration. Admins can add Engineers (upload & digitize), Reviewers (validate & approve), and Viewers (read-only access). Real-time notifications keep the entire team synchronized." },
  { q: "What devices and operating systems are supported?", a: "The Android app requires Android 8.0 (Oreo) or higher. The web platform works on all modern browsers including Chrome, Firefox, Safari, and Edge on desktop and mobile. A Play Store release is coming soon." },
  { q: "How long does AI processing take?", a: "Processing time depends on drawing complexity. A standard single-sheet P&ID is typically processed in 2–5 minutes. Complex multi-sheet drawings may take 10–20 minutes. Batch processing runs in parallel for large projects." },
  { q: "Is there a free trial or demo available?", a: "Yes — you can download the Android APK for free and explore the full feature set. Contact us via the form below for a personalized web platform demo with one of our industrial digitization specialists." },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
      isOpen ? "border-[#00C853]/25 bg-[#00C853]/[0.025] shadow-sm" : "border-black/[0.07] bg-white hover:border-black/[0.12] shadow-sm"
    }`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-sm font-semibold transition-colors pr-4 ${isOpen ? "text-[#0D0D0D]" : "text-[#5A6478] group-hover:text-[#0D0D0D]"}`}
          style={{ fontFamily: "var(--font-manrope), sans-serif" }}
        >
          {faq.q}
        </span>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
          isOpen ? "bg-[#00C853] border-[#00C853] text-white" : "border-black/[0.1] text-[#C0C4CC] group-hover:border-black/[0.2]"
        }`}>
          <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}>
            <Plus size={13} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm text-[#5A6478] leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative overflow-hidden bg-[#F8F9FC]">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked"
          titleHighlight="Questions"
          subtitle="Everything you need to know about LabDigitizer. Can't find your answer? Reach out to us below."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 flex flex-col gap-3"
        >
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeUp}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
