import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#impact", label: "Impact" },
  { href: "#work", label: "Work" },
  { href: "#certs", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
      >
        <div className="h-full w-full bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#00FFB2]" />
      </motion.div>

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={`fixed top-3 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
          scrolled ? "w-[min(96%,1100px)]" : "w-[min(96%,1200px)]"
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-100 ${
            scrolled ? "glass-strong shadow-[0_0_40px_rgba(0,212,255,0.15)]" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display text-sm font-semibold transition-transform duration-100 hover:scale-105">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#00D4FF] to-[#7B61FF] text-[10px] font-bold text-[#050816] transition-all duration-100 hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]">
              MK
            </span>
            <span className="hidden sm:inline">Manoj Kumar</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-white/70 transition-all duration-100 hover:bg-white/10 hover:text-white hover:scale-105"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] px-4 py-1.5 text-xs font-semibold text-[#050816] shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-100 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.7)]"
          >
            Let's talk
          </a>
        </nav>
      </motion.header>
    </>
  );
}