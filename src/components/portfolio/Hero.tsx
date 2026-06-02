import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Calendar, Download, Mail, Sparkles } from "lucide-react";

const roles = [
  "Salesforce Consultant",
  "Agentforce Specialist",
  "Data Cloud Consultant",
  "AI Solutions Engineer",
  "Integration Expert",
  "Solution Architect",
];

const stats = [
  { v: "5+", l: "Years Experience" },
  { v: "8", l: "Certifications" },
  { v: "50+", l: "Solutions Delivered" },
  { v: "30%+", l: "Efficiency Gains" },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-28 pb-16">
      {/* Rotating globe / orb & Photo Circle */}
      <div className="pointer-events-none absolute right-[50px] top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="relative h-[560px] w-[560px]">
          <div className="absolute inset-0 rounded-full border border-[#00D4FF]/20 animate-spin-slow" />
          <div
            className="absolute inset-8 rounded-full border border-[#7B61FF]/20"
            style={{ animation: "spin-slow 40s linear infinite reverse" }}
          />
          <div className="absolute inset-20 rounded-full border border-[#00FFB2]/20 animate-spin-slow" />
          <div
            className="absolute inset-0 rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, rgba(0,212,255,0.5), rgba(123,97,255,0.3) 40%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          {/* Photo Circle */}
          <div className="absolute left-1/2 top-1/2 z-20 h-56 w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-[#00D4FF] shadow-[0_0_40px_rgba(0,212,255,0.6)] transition-all duration-100 hover:scale-105 hover:border-[#00FFB2] hover:shadow-[0_0_60px_rgba(0,255,178,0.8)]">
            <img 
              src="profile.png" 
              alt="Manoj Kumar Sikhakolli" 
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* orbiting dots */}
          {[0, 1, 2, 3, 4].map((d) => (
            <div
              key={d}
              className="absolute top-1/2 left-1/2"
              style={{
                ["--orbit-r" as string]: `${180 + d * 40}px`,
                animation: `orbit ${10 + d * 4}s linear infinite`,
              }}
            >
              <div
                className="h-3 w-3 rounded-full"
                style={{
                  background: d % 2 ? "#7B61FF" : "#00D4FF",
                  boxShadow: "0 0 16px currentColor",
                  color: d % 2 ? "#7B61FF" : "#00D4FF",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Photo Circle - Adjusted position */}
      <div className="pointer-events-none absolute left-1/2 top-32 z-30 -translate-x-1/2 lg:hidden">
        <div className="h-32 w-32 overflow-hidden rounded-full border-3 border-[#00D4FF] shadow-[0_0_30px_rgba(0,212,255,0.6)]">
          <img 
            src="profile.png" 
            alt="Manoj Kumar Sikhakolli" 
            className="h-full w-full object-cover translate-y-0"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/80 transition-all duration-100 hover:bg-white/10 hover:scale-105 mt-24 lg:mt-0"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#00FFB2] opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-[#00FFB2]" />
          </span>
          Available for senior Salesforce roles · Hyderabad / Remote
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="font-display mt-6 text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-[88px] transition-all duration-100 hover:text-white/95"
        >
          <a href="https://www.linkedin.com/in/manoj1252" target="_blank" rel="noreferrer" className="hover:opacity-90 transition-opacity">
            Manoj Kumar
            <br />
            <span className="text-gradient transition-all duration-500 hover:scale-[1.02] inline-block">Sikhakolli</span>
          </a>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-5 flex h-12 items-center gap-3 text-lg text-white/80 md:text-xl"
        >
          <Sparkles className="h-4 w-4 text-[#00D4FF] transition-transform duration-100 hover:rotate-12 hover:scale-125" />
          <div className="relative h-full w-full overflow-hidden">
            {roles.map((r, idx) => (
              <motion.div
                key={r}
                animate={{
                  y: `${(idx - i) * 100}%`,
                  opacity: idx === i ? 1 : 0.3,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 whitespace-nowrap font-medium text-white flex items-center"
              >
                {r}
              </motion.div>
            ))}
            <span className="invisible flex items-center h-full">{roles[0]}</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
        >
          Senior Salesforce Consultant at <span className="text-white font-medium">Deloitte</span> building
          enterprise-grade solutions across Sales, Service, Experience &amp; Data Cloud — with deep
          focus on <span className="text-[#00FFB2] font-medium">Agentforce</span>, AI automation and complex
          integrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="/Manoj_Kumar_Sikhakolli_Resume.pdf"
            download="Manoj_Kumar_Sikhakolli_Resume.pdf"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] px-5 py-3 text-sm font-semibold text-[#050816] shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-100 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,212,255,0.7)]"
          >
            <Download className="h-4 w-4 transition-transform duration-100 group-hover:-translate-y-1" /> Download Resume
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-5 py-3 text-sm font-semibold text-white transition-all duration-100 hover:bg-white/15 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            View Projects <ArrowDown className="h-4 w-4 -rotate-45 transition-transform duration-100 hover:-translate-y-1" />
          </a>
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-white transition-all duration-100 hover:bg-white/15 hover:scale-105"
          >
            <Calendar className="h-4 w-4 transition-transform duration-100 hover:rotate-12" /> Schedule Discussion
          </a>
          <a
            href="mailto:s.manojkumar447@gmail.com"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-white transition-all duration-100 hover:bg-white/15 hover:scale-105"
          >
            <Mail className="h-4 w-4 transition-transform duration-100 hover:scale-125" /> Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s, idx) => (
            <motion.div
              key={s.l}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl px-4 py-4 transition-all duration-100 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
            >
              <div className="font-display text-2xl font-bold text-gradient-primary md:text-3xl">
                {s.v}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-white/55">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </div>
    </section>
  );
}