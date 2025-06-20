import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const taglines = [
  "Welcome to my portfolio — exploring tech, creativity, and impact.",
  "Building with code, design, and curiosity.",
  "Let's create something amazing together!"
];

const Welcome = () => {
  const navigate = useNavigate();
  const [displayed, setDisplayed] = useState("");
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [starfieldFade, setStarfieldFade] = useState(false);
  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    setFadeIn(true);
    if (charIdx < taglines[taglineIdx].length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + taglines[taglineIdx][charIdx]);
        setCharIdx((prev) => prev + 1);
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      // Pause, then cycle to next tagline
      const pause = setTimeout(() => {
        setDisplayed("");
        setCharIdx(0);
        setTaglineIdx((prev) => (prev + 1) % taglines.length);
      }, 1800);
      return () => clearTimeout(pause);
    }
  }, [charIdx, taglineIdx]);

  // Animated floating shapes
  const shapes = Array.from({ length: 8 });

  // Starfield warp effect
  useEffect(() => {
    if (!showTransition) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId;
    let stars = [];
    const numStars = 220;
    const center = { x: width / 2, y: height / 2 };
    // Star object: {x, y, z, prevX, prevY}
    function resetStar(star) {
      star.x = (Math.random() - 0.5) * width * 1.2;
      star.y = (Math.random() - 0.5) * height * 1.2;
      star.z = Math.random() * width;
      star.prevX = null;
      star.prevY = null;
    }
    function createStars() {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        const star = {};
        resetStar(star);
        stars.push(star);
      }
    }
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createStars();
    }
    resize();
    window.addEventListener("resize", resize);
    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars) {
        // Save previous position
        star.prevX = star.screenX;
        star.prevY = star.screenY;
        // Move star forward (warp speed)
        star.z -= 12; // slower for longer duration
        if (star.z <= 0.1) resetStar(star);
        // Project 3D to 2D
        const k = 128 / star.z;
        star.screenX = Math.round(center.x + star.x * k);
        star.screenY = Math.round(center.y + star.y * k);
        // Draw streak
        if (
          star.prevX !== null &&
          star.prevY !== null &&
          star.screenX > 0 &&
          star.screenX < width &&
          star.screenY > 0 &&
          star.screenY < height
        ) {
          ctx.strokeStyle = "rgba(255,255,255,0.85)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(star.prevX, star.prevY);
          ctx.lineTo(star.screenX, star.screenY);
          ctx.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    }
    draw();
    // Clean up
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [showTransition]);

  // Handle space warp transition
  const handleEnter = () => {
    setFadeOut(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    setTimeout(() => {
      setShowTransition(true);
      setTimeout(() => {
        setStarfieldFade(true);
        setTimeout(() => {
          navigate("/home");
        }, 1000); // fade out starfield (slightly longer)
      }, 4500); // warp duration increased to 4.5s
    }, 400); // Fade out content, then start warp
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1333] via-[#2d1a4d] to-[#915EFF] relative overflow-hidden">
      {/* Animated floating shapes */}
      {shapes.map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full opacity-30 blur-2xl pointer-events-none animate-float${i % 4 + 1}`}
          style={{
            width: `${80 + (i % 3) * 40}px`,
            height: `${80 + (i % 2) * 60}px`,
            background: i % 2 === 0 ? "#915EFF" : "#E1306C",
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            zIndex: 1,
          }}
        />
      ))}
      <div className={`z-10 flex flex-col items-center justify-center transition-opacity duration-700 ${fadeIn && !fadeOut ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg text-center">
          Manav Arya Singh
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-10 text-center max-w-xl min-h-[2.5em]">
          {displayed}
          <span className="inline-block w-2 h-6 align-middle bg-white animate-pulse ml-1" style={{ borderRadius: 2 }} />
        </p>
        <button
          onClick={handleEnter}
          className="px-8 py-4 bg-[#915EFF] text-white text-lg font-bold rounded-full shadow-lg hover:bg-pink-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300 animate-bounce-on-hover"
        >
          Enter Portfolio
        </button>
      </div>
      {/* Space warp starfield transition overlay */}
      {showTransition && (
        <div className={`fixed inset-0 w-full h-full z-50 pointer-events-none transition-opacity duration-700 ${starfieldFade ? "opacity-0" : "opacity-100"}`}>
          <canvas ref={canvasRef} className="w-full h-full" style={{ background: "#0a0822" }} />
        </div>
      )}
      {/* Space warp sound */}
      <audio ref={audioRef} src="/warp-sound.mp3" preload="auto" />
      <style>{`
        .animate-bounce-on-hover:hover {
          animation: bounce 0.5s;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0) scale(1.05); }
          50% { transform: translateY(-8px) scale(1.12); }
        }
        @keyframes float1 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes float2 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(30px) scale(0.95); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes float3 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.08); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes float4 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(0.92); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-float1 { animation: float1 7s ease-in-out infinite; }
        .animate-float2 { animation: float2 9s ease-in-out infinite; }
        .animate-float3 { animation: float3 6s ease-in-out infinite; }
        .animate-float4 { animation: float4 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Welcome; 