import React, { useEffect, useRef } from "react";

const NUM_PARTICLES = 40;
const TRAIL_LENGTH = 18;

const StardustCursor = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    particles.current = Array.from({ length: NUM_PARTICLES }, () => ({
      x: mouse.current.x,
      y: mouse.current.y,
      vx: 0,
      vy: 0,
      trail: Array.from({ length: TRAIL_LENGTH }, () => ({ x: mouse.current.x, y: mouse.current.y })),
      color: `hsl(${Math.random() * 60 + 220}, 100%, 85%)`,
      size: Math.random() * 2.2 + 1.2,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles.current) {
        // Move trail
        p.trail.pop();
        p.trail.unshift({ x: p.x, y: p.y });
        // Move particle
        p.vx += (mouse.current.x - p.x) * 0.08 + (Math.random() - 0.5) * 0.5;
        p.vy += (mouse.current.y - p.y) * 0.08 + (Math.random() - 0.5) * 0.5;
        p.vx *= 0.75;
        p.vy *= 0.75;
        p.x += p.vx;
        p.y += p.vy;
        // Draw trail
        for (let i = p.trail.length - 1; i > 0; i--) {
          const t = p.trail[i];
          ctx.beginPath();
          ctx.arc(t.x, t.y, p.size * (i / p.trail.length), 0, 2 * Math.PI);
          ctx.fillStyle = `${p.color.replace('85%', `${60 + i * 1.2}%`)}${Math.max(0.05, 0.18 - i * 0.008)}`;
          ctx.globalAlpha = 0.18 - i * 0.008;
          ctx.fill();
        }
        // Draw main particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();

    function handleMouse(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default StardustCursor; 