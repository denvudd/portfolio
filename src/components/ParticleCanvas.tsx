"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let dots: Dot[] = [];
    let W = 0, H = 0;
    let rafId: number;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const initDots = () => {
      dots = Array.from({ length: 70 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      }));
    };

    const getAccent = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim() || "#00e87a";

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const accent = getAccent();

      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = W; if (d.x > W) d.x = 0;
        if (d.y < 0) d.y = H; if (d.y > H) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.globalAlpha = 0.5;
        ctx.fill();
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = accent;
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    };

    const onResize = () => { resize(); initDots(); };
    window.addEventListener("resize", onResize);
    resize(); initDots(); draw();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", inset: 0, zIndex: 0,
        pointerEvents: "none", opacity: 0.5,
      }}
    />
  );
}
