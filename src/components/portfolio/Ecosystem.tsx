import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const matrix = [
  { k: "Sales Cloud", v: 95 },
  { k: "Service Cloud", v: 92 },
  { k: "Experience Cloud", v: 88 },
  { k: "Data Cloud", v: 90 },
  { k: "Agentforce", v: 93 },
  { k: "Einstein AI", v: 85 },
  { k: "Administrator", v: 95 },
  { k: "Developer (Apex / LWC)", v: 96 },
  { k: "Consultant", v: 92 },
];

export function Ecosystem() {
  return (
    <Section id="ecosystem">
      <SectionHeader
        eyebrow="Salesforce Ecosystem"
        title={<>Full-stack <span className="text-gradient">platform mastery</span></>}
      />

      <div className="grid gap-4 md:grid-cols-3">
        {matrix.map((m, i) => (
          <motion.div
            key={m.k}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group rounded-2xl glass p-5 transition-all duration-100 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]"
          >
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-semibold text-white">{m.k}</span>
              <span className="font-display text-sm font-bold text-[#00D4FF] transition-all duration-100 group-hover:scale-110">{m.v}%</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${m.v}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#00FFB2] transition-all duration-100 group-hover:brightness-110"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}