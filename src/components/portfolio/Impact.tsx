import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section, SectionHeader } from "./Section";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const kpis = [
  { v: 5, suffix: "+", l: "Years of Experience", c: "#00D4FF" },
  { v: 8, suffix: "", l: "Salesforce Certifications", c: "#7B61FF" },
  { v: 50, suffix: "+", l: "Enterprise Solutions", c: "#00FFB2" },
  { v: 30, suffix: "%", l: "Support Case Reduction", c: "#FFD166" },
  { v: 40, suffix: "%", l: "Productivity Improvement", c: "#FF6B9D" },
  { v: 1000, suffix: "+", l: "Users Impacted", c: "#00D4FF" },
];

export function Impact() {
  return (
    <Section id="impact">
      <SectionHeader
        eyebrow="Impact Dashboard"
        title={<>Metrics that <span className="text-gradient">move businesses</span></>}
        description="A snapshot of outcomes delivered across enterprise Salesforce engagements."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kpis.map((k, i) => (
          <motion.div
            key={k.l}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl glass p-6 transition-all duration-100 hover:shadow-[0_0_50px_rgba(0,212,255,0.15)]"
          >
            <motion.div
              className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-30 blur-2xl transition-all duration-100 group-hover:scale-125 group-hover:opacity-50"
              style={{ background: k.c }}
            />
            <div className="relative">
              <div className="font-display text-5xl font-bold text-white md:text-6xl transition-all duration-100 group-hover:scale-105">
                <Counter to={k.v} suffix={k.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium text-white/70">{k.l}</div>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(k.v, 100)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.06 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${k.c}, ${k.c}aa)` }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}