import { motion } from "framer-motion";
import { Bot, Brain, Database, MessageSquare, Sparkles, Zap } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const caps = [
  { icon: Bot, t: "Agentforce", d: "Production-grade autonomous agents" },
  { icon: Brain, t: "Einstein AI", d: "Predictive models inside Salesforce" },
  { icon: Sparkles, t: "Prompt Engineering", d: "Structured prompt templates & evals" },
  { icon: MessageSquare, t: "Chatbot Development", d: "Conversational service flows" },
  { icon: Zap, t: "AI Automation", d: "LLM-powered process orchestration" },
  { icon: Database, t: "Data Cloud Intelligence", d: "Unified profiles + AI segmentation" },
];

export function AILab() {
  return (
    <Section id="ai">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(123,97,255,0.25), transparent 70%)",
          }}
        />
      </div>

      <SectionHeader
        eyebrow="AI Innovation Lab"
        title={<>Building the future with <span className="text-gradient">AI</span></>}
        description="From Agentforce agents to Data Cloud intelligence — applied AI inside the Salesforce platform."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {caps.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-100 hover:shadow-[0_0_40px_rgba(123,97,255,0.15)]"
          >
            <motion.div
              className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition-all duration-100 group-hover:scale-125 group-hover:opacity-60"
              style={{ background: "#7B61FF" }}
            />
            <div className="relative flex items-start gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#7B61FF]/30 to-[#00D4FF]/20 ring-1 ring-[#7B61FF]/30 transition-all duration-100"
              >
                <c.icon className="h-5 w-5 text-[#00FFB2]" />
              </motion.div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{c.t}</h3>
                <p className="mt-1 text-sm text-white/60">{c.d}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}