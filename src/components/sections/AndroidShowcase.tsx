"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/lib/animations";
import { User, LayoutDashboard, FolderOpen, Upload, Brain, BarChart2, Settings } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Cpu, Sparkles } from "lucide-react";

const screens = [
  {
    id: "login", label: "Login", icon: <User size={14} />, color: "#00C853",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-4 px-4 pt-8 pb-4">
        <div className="w-14 h-14 rounded-2xl bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center">
          <Cpu size={24} className="text-[#00C853]" />
        </div>
        <div className="text-center">
          <div className="text-[#0D0D0D] font-bold text-base" style={{fontFamily:"var(--font-manrope)"}}>LabDigitizer</div>
          <div className="text-[#9CA3AF] text-[10px] mt-1">Sign in to continue</div>
        </div>
        <div className="w-full space-y-2.5 mt-2">
          <div className="bg-[#F8F9FC] border border-black/[0.08] rounded-xl px-3 py-2.5">
            <div className="text-[9px] text-[#C0C4CC] mb-1">EMAIL</div>
            <div className="text-[11px] text-[#5A6478]">engineer@plant.com</div>
          </div>
          <div className="bg-[#F8F9FC] border border-black/[0.08] rounded-xl px-3 py-2.5">
            <div className="text-[9px] text-[#C0C4CC] mb-1">PASSWORD</div>
            <div className="text-[11px] text-[#5A6478]">••••••••••</div>
          </div>
          <div className="bg-[#00C853] rounded-xl py-2.5 text-center text-white text-[11px] font-bold">Sign In</div>
        </div>
      </div>
    ),
  },
  {
    id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={14} />, color: "#00897B",
    content: (
      <div className="flex flex-col gap-2 px-3 pt-4 pb-2">
        <div className="text-[#0D0D0D] text-xs font-bold mb-1" style={{fontFamily:"var(--font-manrope)"}}>Dashboard</div>
        <div className="grid grid-cols-2 gap-2">
          {[{l:"Projects",v:"12",c:"#00C853"},{l:"Elements",v:"8.4k",c:"#00897B"},{l:"Accuracy",v:"99.2%",c:"#00A846"},{l:"Exports",v:"34",c:"#00C853"}].map(s=>(
            <div key={s.l} className="bg-[#F8F9FC] border border-black/[0.06] rounded-xl p-2.5">
              <div className="text-xs font-bold" style={{color:s.c,fontFamily:"var(--font-manrope)"}}>{s.v}</div>
              <div className="text-[9px] text-[#9CA3AF] mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="bg-[#F8F9FC] border border-black/[0.06] rounded-xl p-2.5">
          <div className="text-[9px] text-[#C0C4CC] mb-2">ACTIVITY</div>
          <div className="flex items-end gap-1 h-10">
            {[60,80,45,90,70,55,95].map((h,i)=>(
              <div key={i} className="flex-1 rounded-sm" style={{height:`${h}%`,background:`rgba(0,200,83,${0.25+i*0.05})`}} />
            ))}
          </div>
        </div>
        <div className="bg-[#00C853]/[0.06] border border-[#00C853]/15 rounded-xl p-2">
          <div className="text-[9px] text-[#00C853] flex items-center gap-1"><Sparkles size={9}/>AI ready</div>
        </div>
      </div>
    ),
  },
  {
    id: "projects", label: "Projects", icon: <FolderOpen size={14} />, color: "#00A846",
    content: (
      <div className="flex flex-col gap-2 px-3 pt-4 pb-2">
        <div className="text-[#0D0D0D] text-xs font-bold mb-1" style={{fontFamily:"var(--font-manrope)"}}>Projects</div>
        {[
          {name:"Plant A — P&ID",status:"Complete",prog:100,c:"#00C853"},
          {name:"Reactor Unit 3",status:"Processing",prog:65,c:"#00897B"},
          {name:"Cooling Tower B",status:"Review",prog:42,c:"#00A846"},
          {name:"Pump Station 7",status:"Uploading",prog:18,c:"#00C853"},
        ].map(p=>(
          <div key={p.name} className="bg-[#F8F9FC] border border-black/[0.05] rounded-xl p-2.5">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[10px] text-[#0D0D0D] font-medium">{p.name}</span>
              <span className="text-[8px] px-1.5 py-0.5 rounded-full" style={{color:p.c,background:`${p.c}12`}}>{p.status}</span>
            </div>
            <div className="h-1 bg-black/[0.06] rounded-full">
              <div className="h-full rounded-full" style={{width:`${p.prog}%`,background:p.c}} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "upload", label: "Upload", icon: <Upload size={14} />, color: "#00C853",
    content: (
      <div className="flex flex-col gap-3 px-3 pt-4 pb-2">
        <div className="text-[#0D0D0D] text-xs font-bold" style={{fontFamily:"var(--font-manrope)"}}>Upload Drawing</div>
        <div className="border-2 border-dashed border-[#00C853]/25 rounded-2xl p-6 flex flex-col items-center gap-2 bg-[#00C853]/[0.03]">
          <Upload size={20} className="text-[#00C853]/50" />
          <div className="text-[10px] text-[#5A6478] text-center">Tap to capture or upload drawing</div>
          <div className="text-[9px] text-[#9CA3AF]">P&ID, ISO, GAD supported</div>
        </div>
        <div className="space-y-1.5">
          <div className="text-[9px] text-[#C0C4CC] uppercase tracking-wider font-bold">Recent Uploads</div>
          {["Plant_A_PID_R3.pdf","Reactor_ISO_2024.pdf"].map(f=>(
            <div key={f} className="flex items-center gap-2 p-2 bg-[#F8F9FC] rounded-lg border border-black/[0.05]">
              <div className="w-6 h-6 bg-[#00C853]/10 rounded flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2.5 bg-[#00C853]/50 rounded-sm" />
              </div>
              <span className="text-[9px] text-[#5A6478] truncate">{f}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "ai", label: "AI Analysis", icon: <Brain size={14} />, color: "#00897B",
    content: (
      <div className="flex flex-col gap-2.5 px-3 pt-4 pb-2">
        <div className="text-[#0D0D0D] text-xs font-bold" style={{fontFamily:"var(--font-manrope)"}}>AI Analysis</div>
        <div className="bg-[#00897B]/[0.06] border border-[#00897B]/15 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <Brain size={12} className="text-[#00897B]" />
            <span className="text-[10px] text-[#00897B] font-semibold">Processing Plant_A_PID_R3</span>
          </div>
          <div className="flex gap-1 items-end h-6 mb-2">
            {[1,2,3,4,5].map(i=>(
              <motion.div key={i} animate={{scaleY:[0.3,1,0.3]}} transition={{duration:0.8,repeat:Infinity,delay:i*0.12}} className="flex-1 bg-[#00897B]/50 rounded-sm origin-bottom" />
            ))}
          </div>
          <div className="text-[9px] text-[#00897B]/70">847 elements identified...</div>
        </div>
        {[{l:"Valves detected",v:"124"},{l:"Instruments tagged",v:"89"},{l:"Pipe runs",v:"234"},{l:"Equipment items",v:"47"}].map(s=>(
          <div key={s.l} className="flex justify-between items-center p-2 bg-[#F8F9FC] rounded-lg border border-black/[0.05]">
            <span className="text-[10px] text-[#5A6478]">{s.l}</span>
            <span className="text-[10px] font-bold text-[#00897B]">{s.v}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "reports", label: "Reports", icon: <BarChart2 size={14} />, color: "#00A846",
    content: (
      <div className="flex flex-col gap-2.5 px-3 pt-4 pb-2">
        <div className="text-[#0D0D0D] text-xs font-bold" style={{fontFamily:"var(--font-manrope)"}}>Reports</div>
        <div className="bg-[#F8F9FC] border border-black/[0.05] rounded-xl p-2.5">
          <div className="text-[9px] text-[#C0C4CC] mb-2">COMPLETION RATE</div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-black/[0.06] rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-[#00A846]" style={{width:'87%'}} />
            </div>
            <span className="text-[10px] font-bold text-[#00A846]">87%</span>
          </div>
        </div>
        {[{t:"Valve List",d:"124 items • PDF",c:"#00A846"},{t:"Instrument Index",d:"89 items • Excel",c:"#00C853"},{t:"Line List",d:"234 runs • CSV",c:"#00897B"}].map(r=>(
          <div key={r.t} className="flex items-center gap-2.5 p-2.5 bg-[#F8F9FC] rounded-xl border border-black/[0.05]">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:`${r.c}10`}}>
              <BarChart2 size={12} style={{color:r.c}} />
            </div>
            <div>
              <div className="text-[10px] text-[#0D0D0D] font-medium">{r.t}</div>
              <div className="text-[9px] text-[#9CA3AF]">{r.d}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "profile", label: "Profile", icon: <Settings size={14} />, color: "#00C853",
    content: (
      <div className="flex flex-col gap-3 px-3 pt-4 pb-2">
        <div className="flex flex-col items-center gap-2 py-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00C853] to-[#00897B] flex items-center justify-center text-white font-bold text-xl">A</div>
          <div className="text-[#0D0D0D] text-xs font-bold" style={{fontFamily:"var(--font-manrope)"}}>Alex Engineer</div>
          <div className="text-[#9CA3AF] text-[9px]">Senior Process Engineer</div>
          <div className="px-2.5 py-0.5 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 text-[9px] text-[#00C853]">Pro Plan</div>
        </div>
        {["Account Settings","Notifications","Offline Data","Help & Support","Sign Out"].map((item,i)=>(
          <div key={item} className={`flex justify-between items-center p-2.5 rounded-xl border ${i===4?"text-red-500 border-red-200 bg-red-50":"text-[#5A6478] border-black/[0.06] bg-[#F8F9FC]"}`}>
            <span className="text-[10px]">{item}</span>
            <div className="w-2 h-2 border-r border-t border-current rotate-45 scale-75 opacity-40" />
          </div>
        ))}
      </div>
    ),
  },
];

function PhoneCard({ screen, index }: { screen: typeof screens[0]; index: number }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="relative shrink-0 w-[200px]"
      style={{ rotate: index % 2 === 0 ? -1.5 : 1.5 }}
    >
      <div
        className="absolute -inset-2 rounded-[44px] blur-2xl opacity-10 animate-pulse-glow"
        style={{ background: screen.color }}
      />
      <div
        className="relative rounded-[36px] p-[2px] shadow-lg bg-white"
        style={{ background: `linear-gradient(135deg, ${screen.color}80, rgba(0,0,0,0.06))` }}
      >
        <div className="rounded-[34px] bg-white overflow-hidden" style={{ height: 360 }}>
          <div className="flex justify-center pt-2 pb-1">
            <div className="w-16 h-4 bg-[#F0F0F0] rounded-full" />
          </div>
          <div className="h-full">{screen.content}</div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-4">
        <div style={{ color: screen.color }}>{screen.icon}</div>
        <span className="text-xs text-[#5A6478] font-semibold">{screen.label}</span>
      </div>
    </motion.div>
  );
}

export default function AndroidShowcase() {
  return (
    <section id="android" className="section-padding relative overflow-hidden bg-[#F8F9FC]">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00C853]/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <SectionHeader
            badge="Android Application"
            title="Powerful App,"
            titleHighlight="Built for Engineers"
            subtitle="All the power of LabDigitizer in your pocket. Capture, upload, review, and export — straight from the field."
          />
        </div>

        <div className="overflow-x-auto pb-10 px-6 lg:px-12 scrollbar-thin">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex gap-8 px-4 w-max"
          >
            {screens.map((screen, i) => (
              <PhoneCard key={screen.id} screen={screen} index={i} />
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#download" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#00C853] text-white font-bold hover:bg-[#00A846] transition-colors shadow-lg shadow-[#00C853]/20">
            <Upload size={18} />
            Download APK
          </a>
          <p className="text-[#9CA3AF] text-sm font-medium">Available for Android 8.0+</p>
        </div>
      </div>
    </section>
  );
}
