"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Brain, Cloud, WifiOff, Lock, BarChart2, FileDown, HardDrive, Search, Bell, FolderOpen, Users, Factory } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const features = [
  { icon: <Brain size={22} />, title: "AI Processing", description: "Proprietary AI model trained on thousands of P&IDs with 99.2% element detection accuracy.", color: "#00C853", badge: "Core" },
  { icon: <Cloud size={22} />, title: "Cloud Sync", description: "Real-time synchronization across all devices and team members. Your data is always up-to-date.", color: "#00897B", badge: "Always-on" },
  { icon: <WifiOff size={22} />, title: "Offline Support", description: "Capture and digitize in remote locations without internet. Auto-sync when connectivity is restored.", color: "#00A846", badge: "Field-ready" },
  { icon: <Lock size={22} />, title: "Authentication", description: "Enterprise-grade SSO, MFA, and role-based access control. LDAP and OAuth2 integrations.", color: "#00C853", badge: "Secure" },
  { icon: <BarChart2 size={22} />, title: "Advanced Analytics", description: "Dashboards tracking digitization progress, team productivity, and data quality metrics.", color: "#00897B", badge: "Insights" },
  { icon: <FileDown size={22} />, title: "Flexible Export", description: "Export to Excel, PDF, JSON, CSV or push to CMMS, ERP, and engineering databases via API.", color: "#00A846", badge: "Interoperable" },
  { icon: <HardDrive size={22} />, title: "Secure Storage", description: "AES-256 encrypted cloud storage with geo-redundant backups. Full audit trail for every change.", color: "#00C853", badge: "Enterprise" },
  { icon: <Search size={22} />, title: "Fast Search", description: "Full-text search across all plant elements, tags, documents, and attributes. Find anything instantly.", color: "#00897B", badge: "Instant" },
  { icon: <Bell size={22} />, title: "Smart Notifications", description: "Real-time alerts for AI completion, review requests, export readiness, and collaboration events.", color: "#00A846", badge: "Proactive" },
  { icon: <FolderOpen size={22} />, title: "Project Management", description: "Organize plants, units, and drawings into hierarchical projects with milestones and tracking.", color: "#00C853", badge: "Structured" },
  { icon: <Users size={22} />, title: "Role Management", description: "Granular permissions for Admins, Engineers, Reviewers, and Viewers. Full audit logs.", color: "#00897B", badge: "Team" },
  { icon: <Factory size={22} />, title: "Industrial Ready", description: "Designed for chemical plants, power stations, refineries, and heavy manufacturing environments.", color: "#00A846", badge: "Production" },
];

export default function Features() {
  return (
    <section id="features" className="section-padding relative overflow-hidden bg-[#F8F9FC]">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-[#00C853]/[0.03] blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-[#00897B]/[0.02] blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Features"
          title="Everything You Need to"
          titleHighlight="Digitize at Scale"
          subtitle="Twelve powerful capabilities working together to make industrial plant digitization effortless, accurate, and enterprise-ready."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeUp} className="h-full">
              <GlowCard glowColor={feature.color}>
                <div className="flex items-start justify-between mb-5 w-full">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0"
                    style={{ color: feature.color, background: `${feature.color}10`, borderColor: `${feature.color}20` }}
                  >
                    {feature.icon}
                  </div>
                  <span className="text-[9px] px-2.5 py-0.5 rounded-full border font-bold tracking-wider uppercase"
                    style={{ color: feature.color, borderColor: `${feature.color}25`, background: `${feature.color}08` }}>
                    {feature.badge}
                  </span>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-base font-bold text-[#0D0D0D]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{feature.description}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
