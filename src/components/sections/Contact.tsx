"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from "@/lib/animations";
import { Mail, Phone, MapPin, Link2, Code2, Globe, MessageCircle, Send, MessageSquare } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const contactInfo = [
  { icon: <Mail size={18} />, label: "Email", value: "contact@processplantai.com", href: "mailto:contact@processplantai.com", color: "#00C853" },
  { icon: <Phone size={18} />, label: "Phone", value: "+1 (555) 000-1234", href: "tel:+15550001234", color: "#00897B" },
  { icon: <MapPin size={18} />, label: "Address", value: "Industrial Innovation Hub, Houston, TX 77001", href: "https://maps.google.com", color: "#00A846" },
];

const socials = [
  { icon: <Link2 size={16} />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <Code2 size={16} />, href: "https://github.com", label: "GitHub" },
  { icon: <MessageCircle size={16} />, href: "https://twitter.com", label: "Twitter" },
  { icon: <Globe size={16} />, href: "https://plantdigitizer.processplantai.com/", label: "Website" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Contact"
          title="Get in"
          titleHighlight="Touch"
          subtitle="Have questions? Want a demo? We'd love to hear from you. Our team typically responds within 24 hours."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeLeft}>
              <h3 className="text-xl font-bold mb-6 text-[#0D0D0D]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                Let&apos;s talk about
                <span className="gradient-text"> your plant</span>
              </h3>
            </motion.div>

            {contactInfo.map(item => (
              <motion.a
                key={item.label}
                variants={fadeLeft}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-black/[0.07] bg-[#F8F9FC] hover:border-[#00C853]/20 hover:bg-white hover:shadow-sm transition-all group shadow-sm"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0"
                  style={{ color: item.color, background: `${item.color}10`, borderColor: `${item.color}20` }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-[#C0C4CC] font-semibold uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-sm text-[#5A6478] group-hover:text-[#0D0D0D] transition-colors">{item.value}</div>
                </div>
              </motion.a>
            ))}

            <motion.div variants={fadeLeft} className="flex items-center gap-3 pt-2">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl border border-black/[0.08] bg-[#F8F9FC] flex items-center justify-center text-[#9CA3AF] hover:text-[#00C853] hover:border-[#00C853]/25 hover:bg-white hover:shadow-sm transition-all"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="p-8 rounded-2xl border border-black/[0.07] bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare size={18} className="text-[#00C853]" />
                <h4 className="font-bold text-[#0D0D0D]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                  Send a Message
                </h4>
              </div>

              <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-4" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "contact-name", label: "Full Name", type: "text", placeholder: "John Smith" },
                    { id: "contact-company", label: "Company", type: "text", placeholder: "ACME Corp" },
                  ].map(field => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-xs text-[#9CA3AF] font-semibold uppercase tracking-wider mb-2">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-xl border border-black/[0.08] bg-[#F8F9FC] text-[#0D0D0D] text-sm placeholder-[#C0C4CC] focus:outline-none focus:border-[#00C853]/40 focus:bg-white transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs text-[#9CA3AF] font-semibold uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="engineer@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-black/[0.08] bg-[#F8F9FC] text-[#0D0D0D] text-sm placeholder-[#C0C4CC] focus:outline-none focus:border-[#00C853]/40 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs text-[#9CA3AF] font-semibold uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    className="w-full px-4 py-3 rounded-xl border border-black/[0.08] bg-[#F8F9FC] text-[#5A6478] text-sm focus:outline-none focus:border-[#00C853]/40 transition-all"
                  >
                    <option value="">Select a topic...</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing & Plans</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs text-[#9CA3AF] font-semibold uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us about your plant digitization needs..."
                    className="w-full px-4 py-3 rounded-xl border border-black/[0.08] bg-[#F8F9FC] text-[#0D0D0D] text-sm placeholder-[#C0C4CC] focus:outline-none focus:border-[#00C853]/40 focus:bg-white transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#00C853] text-white font-bold text-sm hover:bg-[#00A846] transition-colors shadow-lg shadow-[#00C853]/20 cursor-pointer"
                  id="contact-submit-btn"
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
