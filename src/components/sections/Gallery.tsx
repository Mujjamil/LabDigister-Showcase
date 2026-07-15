"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/animations";
import { X, ZoomIn, LayoutGrid, Smartphone, Monitor, FileText } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

type GalleryCategory = "All" | "Android" | "Dashboard" | "Reports";

const galleryItems: {
  id: number;
  category: Exclude<GalleryCategory, "All">;
  title: string;
  description: string;
  span?: string;
  color: string;
  mockContent: string;
}[] = [
  { id: 1, category: "Dashboard", title: "Overview Dashboard", description: "Real-time plant overview with KPIs and charts", span: "col-span-2 row-span-2", color: "#00C853", mockContent: "Dashboard Overview" },
  { id: 2, category: "Android", title: "AI Analysis Screen", description: "Live AI processing view with element detection", span: "", color: "#00897B", mockContent: "AI Analysis" },
  { id: 3, category: "Android", title: "Projects List", description: "All digitization projects at a glance", span: "", color: "#00A846", mockContent: "Projects View" },
  { id: 4, category: "Reports", title: "Valve List Report", description: "Auto-generated structured valve registry", span: "col-span-2", color: "#00C853", mockContent: "Valve Report" },
  { id: 5, category: "Dashboard", title: "Analytics View", description: "Deep dive into digitization metrics", span: "", color: "#00897B", mockContent: "Analytics" },
  { id: 6, category: "Android", title: "Upload Interface", description: "Capture and upload engineering drawings", span: "", color: "#00C853", mockContent: "Upload Screen" },
  { id: 7, category: "Reports", title: "Instrument Index", description: "Complete instrument tag registry", span: "", color: "#00A846", mockContent: "Instrument Index" },
  { id: 8, category: "Dashboard", title: "Team Management", description: "Role and permission management interface", span: "", color: "#00C853", mockContent: "Team View" },
  { id: 9, category: "Reports", title: "Line List Export", description: "Pipe run specifications and attributes", span: "", color: "#00897B", mockContent: "Line List" },
];

const categories: GalleryCategory[] = ["All", "Android", "Dashboard", "Reports"];
const categoryIcons: Record<GalleryCategory, React.ReactNode> = {
  All: <LayoutGrid size={14} />,
  Android: <Smartphone size={14} />,
  Dashboard: <Monitor size={14} />,
  Reports: <FileText size={14} />,
};

function GalleryCard({ item, onClick }: { item: typeof galleryItems[0]; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      className={`relative rounded-2xl border border-black/[0.07] bg-white overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all group ${item.span || ""}`}
      style={{ minHeight: 180 }}
    >
      {/* Mock content */}
      <div className="absolute inset-0 flex flex-col" style={{ background: `linear-gradient(135deg, ${item.color}05 0%, rgba(0,0,0,0) 60%)` }}>
        <div className="flex items-center gap-2 p-3 border-b border-black/[0.05] bg-white">
          <div className="flex gap-1">
            {["#FF5F57","#FFBD2E","#28C840"].map((c,i)=>(
              <div key={i} className="w-2 h-2 rounded-full" style={{background:c,opacity:0.8}} />
            ))}
          </div>
          <div className="flex-1 h-2.5 bg-black/[0.05] rounded-sm ml-2" />
        </div>
        <div className="flex-1 p-3 flex flex-col gap-2">
          <div className="h-3 bg-black/[0.06] rounded w-2/3" />
          <div className="h-2 bg-black/[0.04] rounded w-full" />
          <div className="h-2 bg-black/[0.04] rounded w-4/5" />
          <div className="grid grid-cols-3 gap-2 mt-2">
            {[1,2,3].map(i=>(
              <div key={i} className="h-8 rounded-lg border border-black/[0.05]" style={{background:`${item.color}08`}} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-2.5 text-center text-[10px] font-bold tracking-wider uppercase"
          style={{ color: item.color, background: `${item.color}08` }}>
          {item.mockContent}
        </div>
      </div>

      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)" }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center border shadow-sm"
              style={{ borderColor: `${item.color}40`, background: `${item.color}10` }}>
              <ZoomIn size={18} style={{ color: item.color }} />
            </div>
            <div className="text-center px-4">
              <div className="text-sm font-bold text-[#0D0D0D]" style={{fontFamily:"var(--font-manrope)"}}>{item.title}</div>
              <div className="text-[11px] text-[#9CA3AF] mt-1">{item.description}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="text-[9px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider"
          style={{ color: item.color, borderColor: `${item.color}30`, background: "white" }}>
          {item.category}
        </span>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);
  const filtered = active === "All" ? galleryItems : galleryItems.filter(i => i.category === active);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-[#F8F9FC]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Screenshot Gallery"
          title="See It in"
          titleHighlight="Action"
          subtitle="Explore the LabDigitizer interface across Android and Web — hover any screenshot to expand it."
        />

        {/* Filter */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-2 mt-10 mb-12"
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              variants={fadeUp}
              onClick={() => setActive(cat)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                active === cat
                  ? "bg-[#00C853] text-white shadow-lg shadow-[#00C853]/20"
                  : "border border-black/[0.08] text-[#5A6478] bg-white hover:border-black/[0.15] hover:text-[#0D0D0D] shadow-sm"
              }`}
            >
              {categoryIcons[cat]}
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[180px] gap-4"
          >
            {filtered.map(item => (
              <GalleryCard key={item.id} item={item} onClick={() => setSelected(item)} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(16px)" }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl border border-black/[0.1] bg-white shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-black/[0.07]">
                <div>
                  <h3 className="font-bold text-[#0D0D0D]" style={{ fontFamily: "var(--font-manrope)", color: selected.color }}>
                    {selected.title}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">{selected.description}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 rounded-full bg-black/[0.05] flex items-center justify-center text-[#9CA3AF] hover:text-[#0D0D0D] hover:bg-black/[0.08] transition-colors"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-8"
                style={{ height: 280, background: `linear-gradient(135deg, ${selected.color}05 0%, white)` }}>
                <div className="text-2xl font-bold mb-2" style={{ color: selected.color, fontFamily: "var(--font-manrope)" }}>
                  {selected.mockContent}
                </div>
                <p className="text-sm text-[#9CA3AF]">{selected.description}</p>
                <div className="grid grid-cols-3 gap-3 w-full mt-4">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="h-12 rounded-xl border border-black/[0.07] bg-[#F8F9FC]" />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
