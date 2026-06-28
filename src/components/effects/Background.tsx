"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const NUM_SPARKLES = 40;
const NUM_HEARTS = 15;
const NUM_PETALS = 15;

export default function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate random positions
  const sparkles = Array.from({ length: NUM_SPARKLES }).map((_, i) => ({
    id: `sparkle-${i}`,
    left: `${(i * 13) % 100}%`,
    top: `${(i * 7) % 100}%`,
    size: (i % 3) + 1,
    duration: (i % 5) + 3,
    delay: (i % 5),
  }));

  const hearts = Array.from({ length: NUM_HEARTS }).map((_, i) => ({
    id: `heart-${i}`,
    left: `${(i * 29) % 100}%`,
    top: `${(i * 11) % 100}%`,
    size: (i % 8) + 8,
    duration: (i % 15) + 10,
    delay: (i % 10),
  }));

  const petals = Array.from({ length: NUM_PETALS }).map((_, i) => ({
    id: `petal-${i}`,
    left: `${(i * 7) % 100}%`,
    top: `${-10 - (i % 20)}%`, // Start above screen
    duration: (i % 20) + 15,
    delay: (i % 20),
    rotate: (i * 15) % 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-[#FFF7FB] via-[#FFEAF5] to-[#FDEEF6]">
      {/* Soft glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-pink/60 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#EADDFF]/50 blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full bg-brand-light-gold/30 blur-[100px] animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Floating Sparkles */}
      {sparkles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white blur-[0.5px]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Floating Hearts */}
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute opacity-0"
          style={{ left: h.left, top: h.top }}
          animate={{
            y: [0, -200],
            x: [0, (parseInt(h.id.replace('heart-','')) % 100) - 50],
            opacity: [0, 0.3, 0],
            scale: [0.5, 1],
            rotate: [0, (parseInt(h.id.replace('heart-','')) % 90) - 45]
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            ease: "linear",
            delay: h.delay,
          }}
        >
          <Heart className="text-[#fca5a5] fill-[#fca5a5]/20" style={{ width: h.size, height: h.size }} />
        </motion.div>
      ))}

      {/* Falling Petals (CSS/Framer motion trick) */}
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-4 h-4 rounded-tl-full rounded-br-full bg-brand-rose-gold/30 blur-[1px]"
          style={{ left: p.left, top: p.top }}
          animate={{
            y: ['0vh', '120vh'],
            x: [0, (parseInt(p.id.replace('petal-','')) * 10) % 200 - 100],
            rotate: [p.rotate, p.rotate + 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
