import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const leadership = [
  "Business Consulting",
  "Client Communication",
  "Stakeholder Management",
  "Technical Leadership",
  "Problem Solving",
  "System Design",
];

const reasons = [
  "Deloitte Consulting Experience",
  "5+ Years of Salesforce Delivery",
  "Agentforce Specialist",
  "AI Specialist & AI Associate",
  "Data Cloud Consultant",
  "Enterprise Integration Expert",
  "Solution Architect Mindset",
  "Strong Communication Skills",
  "8 Salesforce Certifications",
];

export function WhyMe() {
  return (
    <Section id="why">
      <SectionHeader
        eyebrow="Leadership & Why Me"
        title={<>Beyond <span className="text-gradient">development</span></>}
        description="Consulting at Deloitte means more than code — it's owning outcomes end-to-end."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl glass p-7 transition-all duration-100 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]">
          <h3 className="font-display text-xl font-semibold text-white">Leadership & Consulting</h3>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {leadership.map((l, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ x: 4, scale: 1.02 }}
                className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-3 py-2.5 text-sm text-white/85 transition-all duration-100 hover:bg-white/[0.06]"
              >
                <span className="grid h-5 w-5 place-items-center rounded-md bg-[#00D4FF]/15 text-[#00D4FF] transition-all duration-100 hover:scale-110">
                  <Check className="h-3 w-3" />
                </span>
                {l}
              </motion.div>
            ))}
          </div>
        </div>

        {/* <div className="rounded-3xl glass p-7 transition-all duration-100 hover:shadow-[0_0_40px_rgba(0,255,178,0.1)]">
          <h3 className="font-display text-xl font-semibold text-white">Why recruiters shortlist Manoj</h3>
          <div className="mt-5 space-y-2">
            {reasons.map((r, i) => (
              <motion.div
                key={r}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ x: 4, scale: 1.02 }}
                className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-2.5 text-sm text-white/90 transition-all duration-100 hover:bg-white/[0.06]"
              >
                <span className="grid h-5 w-5 place-items-center rounded-md bg-gradient-to-br from-[#00FFB2] to-[#00D4FF] text-[#050816] transition-all duration-100 hover:scale-110">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {r}
              </motion.div>
            ))}
          </div>
        </div> */}
      </div> 
    </Section>
  );
}
