import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const jobs = [
  {
    company: "Deloitte",
    role: "Salesforce Consultant",
    period: "Jan 2024 – Present",
    color: "#00D4FF",
    points: [
      "Architecting enterprise Salesforce solutions for global clients",
      "Leading Agentforce implementation & AI-powered service workflows",
      "Data Cloud projects: unifying data across Sales, Service & Marketing",
      "Integrating Salesforce with mission-critical enterprise systems",
    ],
  },
  {
    company: "Prudent Global Tech Solutions",
    role: "Salesforce Developer",
    period: "Aug 2022 – Jan 2024",
    color: "#7B61FF",
    points: [
      "Custom Apex, LWC and Flow development across multiple clouds",
      "Designed and shipped REST / SOAP API integrations",
      "Built reusable automation frameworks reducing dev time by 40%",
    ],
  },
  {
    company: "Wipro",
    role: "Project Engineer",
    period: "Dec 2020 – Aug 2022",
    color: "#00FFB2",
    points: [
      "Client delivery across enterprise development projects",
      "System integrations and data pipeline implementations",
      "Foundation in software engineering & enterprise delivery",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Experience Timeline"
        title={<>Building <span className="text-gradient">at scale</span></>}
        description="From Wipro to Deloitte — a focused trajectory through enterprise Salesforce delivery, integration architecture and AI."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF] via-[#7B61FF] to-[#00FFB2] md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {jobs.map((j, i) => (
            <motion.div
              key={j.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              {/* Dot */}
              <motion.div
                className="absolute left-4 top-3 z-10 grid h-3 w-3 -translate-x-1/2 place-items-center md:left-1/2"
                style={{ background: j.color, borderRadius: "9999px", boxShadow: `0 0 20px ${j.color}` }}
                whileHover={{ scale: 1.8, boxShadow: `0 0 30px ${j.color}` }}
                transition={{ duration: 0.1 }}
              />

              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-white/70 transition-all duration-100 hover:bg-white/10 hover:scale-105">
                  <Briefcase className="h-3.5 w-3.5" /> {j.period}
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">{j.company}</h3>
                <p className="text-sm font-medium" style={{ color: j.color }}>
                  {j.role}
                </p>
              </div>

              <div className="mt-4 pl-12 md:mt-0 md:pl-12">
                <div className="rounded-2xl glass p-5 transition-all duration-100 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]">
                  <ul className="space-y-2">
                    {j.points.map((p, idx) => (
                      <motion.li 
                        key={p} 
                        className="flex items-start gap-3 text-sm text-white/75"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.1 }}
                      >
                        <span
                          className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ background: j.color }}
                        />
                        {p}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}