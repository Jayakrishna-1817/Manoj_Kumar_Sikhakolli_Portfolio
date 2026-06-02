import { motion } from "framer-motion";
import { Brain, Cloud, Code2, Workflow } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const items = [
  { icon: Cloud, t: "Full-stack Salesforce", d: "Sales, Service, Experience and Data Cloud" },
  { icon: Brain, t: "AI-first mindset", d: "Agentforce, Einstein and Prompt Engineering" },
  { icon: Workflow, t: "Intelligent automation", d: "Flows, Apex and event-driven workflows" },
  { icon: Code2, t: "Enterprise integration", d: "REST / SOAP, brokers and external systems" },
];

export function Summary() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="Executive Summary"
        title={
          <>
            Transforming businesses through{" "}
            <span className="text-gradient">Salesforce &amp; AI</span>
          </>
        }
        description="5.5+ years delivering enterprise-grade solutions across Sales Cloud, Service Cloud, Experience Cloud, Data Cloud and Agentforce — solving ambiguous problems with intelligent automation, integrations and AI-powered workflows."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-100 hover:bg-white/8 hover:shadow-[0_0_40px_rgba(0,212,255,0.2)]"
          >
            <div
              className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 transition-opacity duration-100 group-hover:opacity-100"
              style={{ background: "radial-gradient(circle, #00D4FF, transparent 70%)" }}
            />
            <div className="relative">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#7B61FF]/20 ring-1 ring-[#00D4FF]/30 transition-all duration-100 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]">
                <it.icon className="h-5 w-5 text-[#00D4FF] transition-transform duration-100 group-hover:rotate-12 group-hover:scale-125" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{it.t}</h3>
              <p className="mt-1 text-sm text-white/60">{it.d}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}