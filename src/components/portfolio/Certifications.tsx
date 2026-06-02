import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const certs = [
  { 
    t: "Platform Developer I", 
    c: "#00D4FF", 
    img: "/cert-platform-developer.png" // Replace with your actual image
  },
  { 
    t: "JavaScript Developer I", 
    c: "#FFD166", 
    img: "/cert-javascript-developer.png" // Replace with your actual image
  },
  { 
    t: "Sales Cloud Consultant", 
    c: "#00FFB2", 
    img: "/cert-sales-cloud.png" // Replace with your actual image
  },
  { 
    t: "Service Cloud Consultant", 
    c: "#FF6B9D", 
    img: "/cert-service-cloud.png" // Replace with your actual image
  },
  { 
    t: "Salesforce Administrator", 
    c: "#00D4FF", 
    img: "/cert-admin.png" // Replace with your actual image
  },
  { 
    t: "AI Specialist", 
    c: "#7B61FF", 
    img: "/cert-ai-specialist.png" // Replace with your actual image
  },
  { 
    t: "AI Associate", 
    c: "#7B61FF", 
    img: "/cert-ai-associate.png" // Replace with your actual image
  },
  { 
    t: "Data Cloud Consultant", 
    c: "#00FFB2", 
    img: "/cert-data-cloud.png" // Replace with your actual image
  },
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
            className="group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-100 hover:shadow-[0_0_50px_rgba(0,212,255,0.15)]"
            style={{ perspective: 800 }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-100 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${c.c}44, transparent 70%)`,
              }}
            />
            <div className="flex h-full flex-col justify-between gap-4">
              {/* Top: Certification Image */}
              <div className="w-full">
                <div className="aspect-[4/3] overflow-hidden rounded-xl border-2" style={{ borderColor: c.c }}>
                  <img 
                    src={c.img} 
                    alt={c.t} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Bottom: Certification Name */}
              <div className="mt-auto">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-1">
                  Salesforce Certified
                </div>
                <div className="font-display text-base font-semibold leading-tight text-white">
                  {c.t}
                </div>
              </div>

              <div
                className="mt-2 h-px w-full transition-all duration-100 group-hover:h-1.5"
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