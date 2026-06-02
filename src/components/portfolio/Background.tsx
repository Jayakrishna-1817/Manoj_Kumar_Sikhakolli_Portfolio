import { useEffect, useRef } from "react";

/**
 * Animated particle + grid + cursor glow background.
 * Fixed full-screen, pointer-events: none.
 */
export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const count = Math.min(80, Math.floor((w * h) / 22000));
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.4,
    }));

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      // draw connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140) {
            const a = 1 - Math.sqrt(d2) / 140;
            ctx.strokeStyle = `rgba(0, 212, 255, ${a * 0.18})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = "rgba(123, 97, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base color */}
      <div className="absolute inset-0" style={{ background: "#050816" }} />
      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(0,212,255,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(123,97,255,0.22), transparent 60%), radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0,255,178,0.08), transparent 70%)",
        }}
      />
      {/* particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* cursor glow */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-50 mix-blend-screen transition-transform duration-200 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.25), rgba(123,97,255,0.1) 40%, transparent 70%)",
        }}
      />
      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050816]" />
    </div>
  );
}