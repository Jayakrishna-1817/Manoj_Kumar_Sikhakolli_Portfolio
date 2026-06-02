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
  { v: "5.5+", l: "Years Experience" },
  { v: "9", l: "Certifications" },
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
    <section id="top" className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-20 pb-16">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Mobile/Tablet: Image first, then content */}
        <div className="flex flex-col items-center gap-10 lg:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-full border border-[#00D4FF]/30 opacity-50" />
            <div className="absolute -inset-8 rounded-full border border-[#7B61FF]/20 opacity-30" />
            <div className="relative overflow-hidden rounded-full border-4 border-[#00D4FF] shadow-[0_0_50px_rgba(0,212,255,0.5)] transition-all duration-100 hover:border-[#00FFB2] hover:shadow-[0_0_70px_rgba(0,255,178,0.7)]">
              <img 
                src="profile.png" 
                alt="Manoj Kumar Sikhakolli" 
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover pt-4 pb-0"
              />
            </div>
          </motion.div>

          <div className="text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/80 transition-all duration-100 hover:bg-white/10 hover:scale-105"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#00FFB2] opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-[#00FFB2]" />
              </span>
              Available for Salesforce roles · Hyderabad / Remote
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="font-display mt-6 text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl transition-all duration-100 hover:text-white/95"
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
              transition={{ delay: 0.65 }}
              className="mt-5 flex items-center justify-center gap-3 text-lg text-white/80 md:text-xl"
            >
              <Sparkles className="h-4 w-4 text-[#00D4FF] transition-transform duration-100 hover:rotate-12 hover:scale-125 flex-shrink-0" />
              <div className="relative h-12 w-full overflow-hidden flex items-center">
                {roles.map((r, idx) => (
                  <motion.div
                    key={r}
                    animate={{
                      y: `${(idx - i) * 100}%`,
                      opacity: idx === i ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 whitespace-nowrap font-medium text-white flex items-center justify-center"
                  >
                    {r}
                  </motion.div>
                ))}
                <span className="invisible flex items-center">{roles[0]}</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-white/65 md:text-lg"
            >
              Salesforce Consultant at <span className="text-white font-medium">Deloitte</span> building
              enterprise-grade solutions across Sales, Service, Experience & Data Cloud — with deep
              focus on <span className="text-[#00FFB2] font-medium">Agentforce</span>, AI automation and complex
              integrations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              className="mt-8 flex flex-wrap gap-3 justify-center"
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
                href="https://mail.google.com/mail/?view=cm&fs=1&to=s.manojkumar447@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-white transition-all duration-100 hover:bg-white/15 hover:scale-105"
              >
                <Mail className="h-4 w-4 transition-transform duration-100 hover:scale-125" /> Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-16 grid max-w-3xl mx-auto grid-cols-2 gap-3 sm:grid-cols-4"
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
        </div>

        {/* Desktop: Content left, image right */}
        <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-16">
          {/* Left - Content */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/80 transition-all duration-100 hover:bg-white/10 hover:scale-105"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#00FFB2] opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-[#00FFB2]" />
              </span>
              Available for Salesforce roles · Hyderabad / Remote
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="font-display mt-6 text-5xl font-bold leading-[0.95] tracking-tight lg:text-[72px] transition-all duration-100 hover:text-white/95"
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
              className="mt-5 flex items-center gap-3 text-xl text-white/80"
            >
              <Sparkles className="h-4 w-4 text-[#00D4FF] transition-transform duration-100 hover:rotate-12 hover:scale-125 flex-shrink-0" />
              <div className="relative h-12 w-full overflow-hidden flex items-center">
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
                <span className="invisible flex items-center">{roles[0]}</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg"
            >
              Salesforce Consultant at <span className="text-white font-medium">Deloitte</span> building
              enterprise-grade solutions across Sales, Service, Experience & Data Cloud — with deep
              focus on <span className="text-[#00FFB2] font-medium">Agentforce</span>, AI automation and complex
              integrations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-3 justify-start"
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
                href="https://mail.google.com/mail/?view=cm&fs=1&to=s.manojkumar447@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-white transition-all duration-100 hover:bg-white/15 hover:scale-105"
              >
                <Mail className="h-4 w-4 transition-transform duration-100 hover:scale-125" /> Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right - Image */}
          <div className="flex-1 flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-full border border-[#00D4FF]/30 opacity-50" />
              <div className="absolute -inset-8 rounded-full border border-[#7B61FF]/20 opacity-30" />
              <div className="relative overflow-hidden rounded-full border-4 border-[#00D4FF] shadow-[0_0_50px_rgba(0,212,255,0.5)] transition-all duration-100 hover:border-[#00FFB2] hover:shadow-[0_0_70px_rgba(0,255,178,0.7)]">
                <img 
                  src="profile.png" 
                  alt="Manoj Kumar Sikhakolli" 
                  className="w-80 h-80 object-cover pt-6 pb-0"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Stats */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-16 grid max-w-3xl grid-cols-4 gap-3"
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
      </div>
    </section>
  );
}
