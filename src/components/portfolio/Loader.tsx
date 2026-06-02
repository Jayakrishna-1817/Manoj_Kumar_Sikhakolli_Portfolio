import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 900);
    const t2 = setTimeout(() => setShow(false), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center"
          style={{ background: "#050816" }}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="relative h-32 w-32">
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i / 24) * Math.PI * 2;
                return (
                  <motion.span
                    key={i}
                    initial={{
                      x: Math.cos(angle) * 200,
                      y: Math.sin(angle) * 200,
                      opacity: 0,
                    }}
                    animate={{
                      x: Math.cos(angle) * 50,
                      y: Math.sin(angle) * 30,
                      opacity: 1,
                    }}
                    transition={{ delay: i * 0.02, duration: 0.8, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{ background: "#00D4FF", boxShadow: "0 0 12px #00D4FF" }}
                  />
                );
              })}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute inset-0 grid place-items-center"
              >
                <svg viewBox="0 0 64 40" className="h-16 w-24 drop-shadow-[0_0_20px_rgba(0,212,255,0.6)]">
                  <defs>
                    <linearGradient id="ld" x1="0" x2="1">
                      <stop offset="0" stopColor="#00D4FF" />
                      <stop offset="1" stopColor="#7B61FF" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#ld)"
                    d="M22 8a12 12 0 0 1 22 4 10 10 0 0 1 12 14 9 9 0 0 1-10 8H18a12 12 0 0 1-4-23 12 12 0 0 1 8-3z"
                  />
                </svg>
              </motion.div>
            </div>
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className="font-display text-sm tracking-[0.3em] text-white/80">
                {stage === 0 ? "WELCOME TO MY PORTFOLIO" : "MANOJ KUMAR SIKHAKOLLI"}
              </p>
              <div className="mt-3 h-px w-48 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}