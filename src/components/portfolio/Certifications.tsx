import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const certs = [
  { 
    t: "Platform Developer I", 
    c: "#00D4FF", 
    img: "PD1.jpg"
  },
  { 
    t: "JavaScript Developer I", 
    c: "#FFD166", 
    img: "JD1.jpg"
  },
  { 
    t: "Sales Cloud Consultant", 
    c: "#00FFB2", 
    img: "SCC.png"
  },
  { 
    t: "Service Cloud Consultant", 
    c: "#FF6B9D", 
    img: "SCC1.jpg"
  },
  { 
    t: "Salesforce Administrator", 
    c: "#00D4FF", 
    img: "SCS.jpg"
  },
  { 
    t: "AI Specialist", 
    c: "#7B61FF", 
    img: "AIS.jpg"
  },
  { 
    t: "AI Associate", 
    c: "#7B61FF", 
    img: "AIA.jpg"
  },
  { 
    t: "Data Cloud Consultant", 
    c: "#00FFB2", 
    img: "DCC.jpg"
  },
  { 
    t: "Revenue Cloud Consultant", 
    c: "#FF9F1C", 
    img: "RCC.png"
  },
];

export function Certifications() {
  return (
    <Section id="certs">
      <SectionHeader
        eyebrow="Certification Wall"
        title={<>Credentialed across the <span className="text-gradient">Salesforce stack</span></>}
        description="Nine Salesforce certifications spanning development, administration, consulting and AI."
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
            className="group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-100 hover:shadow-[0_0_50px_rgba(0,212,255,0.15)] flex flex-col"
            style={{ perspective: 800 }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-100 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${c.c}44, transparent 70%)`,
              }}
            />
            <div className="flex flex-col h-full justify-between gap-4 flex-grow">
              {/* Top: Certification Image Container - Fixed Height & Consistent */}
              <div className="w-full flex-shrink-0">
                <div className="w-full h-48 overflow-hidden rounded-xl border-2 flex items-center justify-center bg-white/5" style={{ borderColor: c.c }}>
                  <img 
                    src={c.img} 
                    alt={c.t} 
                    className="max-w-full max-h-full object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Bottom: Certification Name */}
              <div className="mt-auto flex-shrink-0">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-1">
                  Salesforce Certified
                </div>
                <div className="font-display text-base font-semibold leading-tight text-white">
                  {c.t}
                </div>
              </div>

              <div
                className="mt-2 h-px w-full transition-all duration-100 group-hover:h-1.5 flex-shrink-0"
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