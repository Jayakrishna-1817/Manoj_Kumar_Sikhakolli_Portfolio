import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const orbits = [
  { r: 110, dur: 28, color: "#00D4FF", items: ["Apex", "LWC", "SOQL", "Flows", "Batch", "SOSL"] },
  { r: 180, dur: 40, color: "#7B61FF", items: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Data Cloud"] },
  { r: 250, dur: 55, color: "#00FFB2", items: ["Agentforce", "Einstein AI", "Prompt Templates", "Chatbots"] },
  { r: 320, dur: 70, color: "#FFD166", items: ["REST APIs", "SOAP APIs", "Integrations", "Architecture"] },
];

export function SkillsGalaxy() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills Galaxy"
        title={<>An ecosystem of <span className="text-gradient">capabilities</span></>}
        description="A multi-layered orbit of Salesforce expertise — platform craft, business clouds, AI and integration."
      />

      <div className="relative mx-auto hidden h-[720px] w-full max-w-[720px] md:block">
        {/* center */}
        <motion.div 
          className="absolute top-1/2 left-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-[#00D4FF] to-[#7B61FF] text-center font-display font-bold text-[#050816] shadow-[0_0_60px_rgba(0,212,255,0.6)]"
          whileHover={{ scale: 1.1, boxShadow: "0 0 80px rgba(0,212,255,0.8)" }}
          transition={{ duration: 0.1 }}
        >
          <div>
            <div className="text-lg leading-none">Salesforce</div>
            <div className="text-[10px] font-medium tracking-wider opacity-80">CORE</div>
          </div>
        </motion.div>

        {orbits.map((o, oi) => (
          <div
            key={oi}
            className="absolute top-1/2 left-1/2 rounded-full border pointer-events-none"
            style={{
              width: o.r * 2,
              height: o.r * 2,
              marginLeft: -o.r,
              marginTop: -o.r,
              borderColor: `${o.color}33`,
            }}
          >
            {o.items.map((label, i) => {
              const angle = (i / o.items.length) * 360;
              return (
                <div
                  key={label}
                  className="absolute top-1/2 left-1/2 pointer-events-auto"
                  style={{
                    animation: `spin-slow ${o.dur}s linear infinite`,
                    transformOrigin: "0 0",
                  }}
                >
                  <div
                    style={{
                      transform: `rotate(${angle}deg) translateX(${o.r}px) rotate(-${angle}deg)`,
                    }}
                  >
                    <motion.div
                      className="-translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md cursor-pointer"
                      style={{
                        background: `${o.color}22`,
                        border: `1px solid ${o.color}55`,
                        boxShadow: `0 0 20px ${o.color}33`,
                      }}
                      whileHover={{ 
                        scale: 1.25, 
                        background: `${o.color}44`,
                        boxShadow: `0 0 35px ${o.color}66`,
                        zIndex: 50
                      }}
                      transition={{ duration: 0.1 }}
                    >
                      {label}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Mobile fallback */}
      <div className="space-y-5 md:hidden">
        {orbits.map((o, oi) => (
          <div key={oi}>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: o.color }}>
              Layer {oi + 1}
            </div>
            <div className="flex flex-wrap gap-2">
              {o.items.map((it) => (
                <motion.span
                  key={it}
                  className="rounded-full px-3 py-1.5 text-xs text-white cursor-pointer"
                  style={{
                    background: `${o.color}22`,
                    border: `1px solid ${o.color}55`,
                  }}
                  whileHover={{ scale: 1.1, background: `${o.color}44`, boxShadow: `0 0 20px ${o.color}55` }}
                  transition={{ duration: 0.1 }}
                >
                  {it}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}