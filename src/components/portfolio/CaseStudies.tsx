import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const cases = [
  {
    title: "Custom Lead Conversion Engine",
    problem: "Complex multi-stage lead conversion workflow blocking sales velocity.",
    solution: "Designed a custom conversion engine with rules, dedupe and async automation.",
    impact: "32% efficiency increase",
    tech: ["Apex", "Flows", "LWC"],
    color: "#00D4FF",
  },
  {
    title: "ICM Integration",
    problem: "Manual broker commission handling caused delays and errors.",
    solution: "Built real-time bi-directional integration with the external ICM system.",
    impact: "40% productivity increase",
    tech: ["REST APIs", "Salesforce", "Apex"],
    color: "#7B61FF",
  },
  {
    title: "Events Management Platform",
    problem: "No unified way to manage enterprise events end-to-end.",
    solution: "Shipped a full event platform — registration, comms, analytics, attendee UX.",
    impact: "Higher engagement",
    tech: ["LWC", "Flows", "Experience Cloud"],
    color: "#00FFB2",
  },
  {
    title: "Agentforce Employee Agent",
    problem: "High support workload from repetitive employee queries.",
    solution: "AI-powered Agentforce assistant for query handling and case routing.",
    impact: "30% support reduction",
    tech: ["Agentforce", "Service Cloud", "Prompt Templates"],
    color: "#FFD166",
  },
];

export function CaseStudies() {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow="Featured Case Studies"
        title={<>Shipping <span className="text-gradient">measurable outcomes</span></>}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {cases.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl glass p-7 transition-all duration-100 hover:shadow-[0_0_50px_rgba(0,212,255,0.15)]"
          >
            <div
              className="absolute inset-x-0 top-0 h-px transition-all duration-100 group-hover:h-1.5"
              style={{ background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }}
            />
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-bold text-white md:text-2xl">{c.title}</h3>
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-100"
                style={{ background: `${c.color}22`, color: c.color }}
              >
                <TrendingUp className="h-3.5 w-3.5" /> {c.impact}
              </motion.div>
            </div>

            <dl className="mt-5 space-y-3 text-sm">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Problem</dt>
                <dd className="mt-1 text-white/75">{c.problem}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Solution</dt>
                <dd className="mt-1 text-white/75">{c.solution}</dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-wrap gap-2">
              {c.tech.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="rounded-full border px-2.5 py-1 text-[11px] font-medium text-white/80 transition-all duration-100"
                  style={{ borderColor: `${c.color}44`, background: `${c.color}10` }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}