import { motion } from "framer-motion";
import { Award, Code, Database, Headphones, Zap, Users, Star } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const certs = [
  { t: "Platform Developer I", c: "#00D4FF", icon: Code },
  { t: "JavaScript Developer I", c: "#FFD166", icon: Code },
  { t: "Sales Cloud Consultant", c: "#00FFB2", icon: Users },
  { t: "Service Cloud Consultant", c: "#FF6B9D", icon: Headphones },
  { t: "Salesforce Administrator", c: "#00D4FF", icon: Zap },
  { t: "AI Specialist", c: "#7B61FF", icon: Star },
  { t: "AI Associate", c: "#7B61FF", icon: Star },
  { t: "Data Cloud Consultant", c: "#00FFB2", icon: Database },
];

export function Certifications() {
  return (
    <Section id="certs">
      <SectionHeader
        eyebrow="Certification Wall"
        title={<>Credentialed across the <span className="text-gradient">Salesforce stack</span></>}
        description="Eight Salesforce certifications spanning development, administration, consulting and AI."
      />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, rotateX: -20 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.05, rotateZ: 2 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl glass p-5 transition-all duration-100 hover:shadow-[0_0_50px_rgba(0,212,255,0.15)]"
            style={{ perspective: 800 }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-100 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${c.c}44, transparent 70%)`,
              }}
            />
            <div className="flex h-full flex-col justify-between">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                Salesforce Certified
              </div>
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="grid h-20 w-20 place-items-center rounded-xl transition-all duration-100"
                  style={{
                    background: `linear-gradient(135deg, ${c.c}, ${c.c}66)`,
                    boxShadow: `0 8px 30px ${c.c}55`,
                  }}
                >
                  <c.icon className="h-10 w-10 text-[#050816]" />
                </motion.div>
                <div className="mt-4 font-display text-base font-semibold leading-tight text-white text-center">
                  {c.t}
                </div>
              </div>
              <div
                className="mt-3 h-px w-full transition-all duration-100 group-hover:h-1.5"
                style={{
                  background: `linear-gradient(90deg, transparent, ${c.c}, transparent)`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}