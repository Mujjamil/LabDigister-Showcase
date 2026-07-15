"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeRight, scaleIn } from "@/lib/animations";
import { BarChart2, FolderOpen, FileText, Cloud, Search, FileDown, Users, Bell, Cpu } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  { icon: <BarChart2 size={16} />, label: "Analytics", color: "#00C853" },
  { icon: <FolderOpen size={16} />, label: "Projects", color: "#00897B" },
  { icon: <FileText size={16} />, label: "Reports", color: "#00A846" },
  { icon: <Cloud size={16} />, label: "Cloud Storage", color: "#00C853" },
  { icon: <Search size={16} />, label: "Search", color: "#00897B" },
  { icon: <FileDown size={16} />, label: "Export", color: "#00A846" },
  { icon: <Users size={16} />, label: "Team Management", color: "#00C853" },
  { icon: <Bell size={16} />, label: "Notifications", color: "#00897B" },
];

function LayoutIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="1" width="6" height="6" rx="1"/>
      <rect x="9" y="1" width="6" height="6" rx="1"/>
      <rect x="1" y="9" width="6" height="6" rx="1"/>
      <rect x="9" y="9" width="6" height="6" rx="1"/>
    </svg>
  );
}

function MacbookMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-0 bg-[#00C853]/[0.03] rounded-3xl blur-3xl scale-95" />
      <div className="relative">
        {/* Lid */}
        <div className="relative rounded-t-2xl rounded-b-none"
          style={{
            background: "linear-gradient(180deg, #E8E8EA 0%, #DDDDE0 100%)",
            border: "1.5px solid rgba(0,0,0,0.12)",
            borderBottom: "none",
            paddingTop: 16, paddingLeft: 12, paddingRight: 12, paddingBottom: 0,
          }}
        >
          <div className="flex justify-center mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#BBB]" />
          </div>
          {/* Screen */}
          <div className="rounded-xl overflow-hidden" style={{ background: "#F8F9FC", border: "1px solid rgba(0,0,0,0.1)", aspectRatio: "16/10" }}>
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/[0.08] bg-white">
              <div className="flex gap-1.5">
                {["#FF5F57","#FFBD2E","#28C840"].map((c,i)=>(
                  <div key={i} className="w-2.5 h-2.5 rounded-full" style={{background:c}} />
                ))}
              </div>
              <div className="flex-1 mx-4 bg-black/[0.05] rounded-md px-3 py-1 text-[10px] text-[#9CA3AF] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00C853]/50" />
                plantdigitizer.processplantai.com
              </div>
            </div>
            {/* Dashboard */}
            <div className="flex h-full" style={{maxHeight: 340}}>
              {/* Sidebar */}
              <div className="w-44 border-r border-black/[0.07] bg-white flex flex-col gap-1 p-3 flex-shrink-0">
                <div className="flex items-center gap-2 mb-4 px-2 pt-1">
                  <div className="w-6 h-6 rounded-lg bg-[#00C853]/15 border border-[#00C853]/25 flex items-center justify-center">
                    <Cpu size={10} className="text-[#00C853]" />
                  </div>
                  <span className="text-[10px] font-bold text-[#0D0D0D]" style={{fontFamily:"var(--font-manrope)"}}>LabDigitizer</span>
                </div>
                {[
                  {icon:<LayoutIcon/>,label:"Dashboard",active:true},
                  {icon:<FolderOpen size={11}/>,label:"Projects",active:false},
                  {icon:<BarChart2 size={11}/>,label:"Analytics",active:false},
                  {icon:<FileText size={11}/>,label:"Reports",active:false},
                  {icon:<Search size={11}/>,label:"Search",active:false},
                  {icon:<Users size={11}/>,label:"Team",active:false},
                  {icon:<FileDown size={11}/>,label:"Export",active:false},
                ].map(item=>(
                  <div key={item.label} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[10px] ${
                    item.active ? "bg-[#00C853]/10 text-[#00C853] border border-[#00C853]/15" : "text-[#9CA3AF] hover:text-[#5A6478]"
                  }`}>
                    <span className="w-3 flex-shrink-0">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
              {/* Main */}
              <div className="flex-1 p-4 overflow-hidden bg-[#F8F9FC]">
                <div className="text-[11px] font-bold text-[#0D0D0D] mb-3" style={{fontFamily:"var(--font-manrope)"}}>Overview</div>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[{l:"Total Projects",v:"47",c:"#00C853"},{l:"Elements",v:"124K",c:"#00897B"},{l:"AI Accuracy",v:"99.2%",c:"#00A846"},{l:"Team Members",v:"23",c:"#00C853"}].map(kpi=>(
                    <div key={kpi.l} className="bg-white border border-black/[0.07] rounded-lg p-2 shadow-sm">
                      <div className="text-xs font-bold" style={{color:kpi.c,fontFamily:"var(--font-manrope)"}}>{kpi.v}</div>
                      <div className="text-[8px] text-[#C0C4CC] mt-0.5 leading-tight">{kpi.l}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white border border-black/[0.07] rounded-xl p-3 mb-3 shadow-sm">
                  <div className="text-[9px] text-[#C0C4CC] mb-2">DIGITIZATION ACTIVITY — LAST 30 DAYS</div>
                  <div className="flex items-end gap-1 h-16">
                    {[30,50,40,70,55,80,65,90,75,85,60,95,70,88,72,92,68,82,77,95,85,90,88,95,92,88,96,93,97,99].map((h,i)=>(
                      <div key={i} className="flex-1 rounded-t-sm" style={{height:`${h}%`,background:`rgba(0,200,83,${0.2+i/60})`,minWidth:2}} />
                    ))}
                  </div>
                </div>
                <div className="bg-white border border-black/[0.07] rounded-xl p-2.5 shadow-sm">
                  <div className="text-[9px] text-[#C0C4CC] mb-2">RECENT PROJECTS</div>
                  {["Plant A — P&ID R3","Reactor Unit 3 ISO","Cooling Tower B Docs"].map((p,i)=>(
                    <div key={p} className="flex items-center gap-2 py-1.5 border-b border-black/[0.05] last:border-0">
                      <div className="w-4 h-4 rounded bg-[#00C853]/10 flex-shrink-0" />
                      <span className="text-[9px] text-[#5A6478] flex-1 truncate">{p}</span>
                      <span className="text-[8px] text-[#00C853]">{["Complete","65%","42%"][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Base */}
        <div style={{background:"linear-gradient(180deg,#D5D5D8 0%,#C8C8CC 100%)",border:"1.5px solid rgba(0,0,0,0.1)",borderTop:"none",height:12,borderRadius:"0 0 4px 4px"}} />
        <div style={{background:"linear-gradient(180deg,#C8C8CC 0%,#BEBEC2 100%)",height:20,borderRadius:"0 0 16px 16px",border:"1px solid rgba(0,0,0,0.08)",borderTop:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{width:60,height:4,background:"rgba(0,0,0,0.08)",borderRadius:4}} />
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/10 blur-xl rounded-full" />
      </div>
    </div>
  );
}

export default function WebPlatform() {
  return (
    <section id="web-platform" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Web Platform"
          title="Your Plant, On Any"
          titleHighlight="Screen"
          subtitle="The full power of LabDigitizer in your browser. Manage projects, run AI analysis, and export reports — from anywhere."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center pb-12 md:pb-16">
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="lg:col-span-3">
            <MacbookMockup />
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="lg:col-span-2 flex flex-col gap-4">
            <motion.h3 variants={fadeRight} className="text-2xl font-bold text-[#0D0D0D]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
              Everything you need,
              <br /><span className="gradient-text">beautifully organized.</span>
            </motion.h3>
            <motion.p variants={fadeRight} className="text-[#5A6478] text-sm leading-relaxed">
              The web dashboard gives your entire team real-time access to digitized plant data — with powerful search, analytics, and export capabilities.
            </motion.p>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {features.map(f => (
                <motion.div key={f.label} variants={fadeUp} whileHover={{ scale: 1.03, y: -2 }}
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-black/[0.07] bg-[#F8F9FC] hover:border-[#00C853]/20 hover:bg-white hover:shadow-sm transition-all cursor-default">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 border"
                    style={{ color: f.color, background: `${f.color}10`, borderColor: `${f.color}20` }}>
                    {f.icon}
                  </div>
                  <span className="text-xs text-[#5A6478] font-medium">{f.label}</span>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeRight} className="mt-2">
              <a href="https://plantdigitizer.processplantai.com/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-black/[0.1] bg-white text-[#0D0D0D] font-semibold text-sm hover:bg-[#F8F9FC] hover:shadow-sm transition-all">
                Open Web Platform →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
