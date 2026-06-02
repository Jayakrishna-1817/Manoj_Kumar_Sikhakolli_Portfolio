import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const flows = [
  { title: "API Mesh", nodes: ["Salesforce", "REST APIs", "External Systems"], color: "#00D4FF" },
  { title: "Unified Data", nodes: ["Salesforce", "Data Cloud", "Analytics"], color: "#7B61FF" },
  { title: "Agentic Service", nodes: ["Agentforce", "Service Cloud", "Customer Support"], color: "#00FFB2" },
  { title: "Experience Hub", nodes: ["Experience Cloud", "Enterprise Apps", "Customers"], color: "#FFD166" },
];

export function Architecture() {
  return (
    <Section id="architecture">
      <SectionHeader
        eyebrow="Enterprise Architecture"
        title={<>Designed to <span className="text-gradient">scale</span></>}
        description="Reference architectures I deliver in production — composed, observable and resilient."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {flows.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group rounded-3xl glass p-6 transition-all duration-100 hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider transition-all duration-100 group-hover:scale-110"
                style={{ background: `${f.color}22`, color: f.color }}
              >
                Pattern 0{i + 1}
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between gap-2">
              {f.nodes.map((n, ni) => (
                <div key={n} className="flex flex-1 items-center gap-2">
                  <motion.div
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="flex-1 rounded-xl border px-3 py-3 text-center text-xs font-medium text-white transition-all duration-100"
                    style={{
                      background: `${f.color}14`,
                      borderColor: `${f.color}44`,
                    }}
                  >
                    {n}
                  </motion.div>
                  {ni < f.nodes.length - 1 && (
                    <div className="relative h-px flex-shrink-0" style={{ width: 16 }}>
                      <div
                        className="absolute inset-y-0 left-0 right-0"
                        style={{
                          background: `linear-gradient(to right, ${f.color}, transparent)`,
                        }}
                      />
                      <ArrowRight
                        className="absolute -top-2 -right-1 h-4 w-4 transition-transform duration-100 group-hover:translate-x-1"
                        style={{ color: f.color }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-white/55">
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: f.color }} />
              Real-time · Event-driven · Observable
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}