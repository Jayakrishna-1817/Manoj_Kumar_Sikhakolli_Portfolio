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

export function WhyMe() {
  return (
    <Section id="why">
      <SectionHeader
        eyebrow="Leadership"
        title={
          <>
            Beyond <span className="text-gradient">development</span>
          </>
        }
        description="Consulting at Deloitte means more than code — it's owning outcomes end-to-end."
      />

      <div className="flex justify-center">
        <div className="w-full max-w-3xl rounded-3xl glass p-7 transition-all duration-100 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]">
          <h3 className="font-display text-xl font-semibold text-white">
            Leadership & Consulting
          </h3>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {leadership.map((item, i) => (
              <motion.div
                key={item}
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

                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
