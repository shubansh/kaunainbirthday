"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind } from "lucide-react";
import confetti from "canvas-confetti";
import { CONFIG } from "@/config/birthday";

export default function Cake() {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    
    // Play audio
    const audio = new Audio(CONFIG.musicUrl);
    audio.play().catch(e => console.log("Audio play failed, user interaction needed", e));

    // Confetti explosion
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: Math.random(), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  return (
    <section id="cake" className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-brand-rose-gold mb-4">
            Make A Wish
          </h2>
          <p className="font-inter text-brand-subtext text-lg">Close your eyes, make a wish, and blow out the candles.</p>
        </motion.div>

        <div className="relative inline-block mt-20">
          {/* Cake Platform Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-20 bg-brand-pink/50 blur-[30px] rounded-[100%]" />
          
          {/* Cake Illustration/Image */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
          >
            {/* We use a beautiful CSS cake approximation for maximum animation control, or an image. 
                Using CSS layers to create a premium luxury cake feel */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-r from-[#ffe4e1] to-[#ffb6c1] rounded-[100%] shadow-[0_20px_50px_rgba(255,182,193,0.5)] border-4 border-white/50 z-10" />
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[90%] h-28 bg-gradient-to-r from-[#ffb6c1] to-[#ff69b4] rounded-[100%] border-4 border-white/40 z-20" />
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[75%] h-24 bg-gradient-to-r from-[#ffc0cb] to-[#ff1493] rounded-[100%] border-4 border-white/30 z-30 flex items-center justify-center">
              <span className="font-great-vibes text-white text-5xl drop-shadow-md">15</span>
            </div>
            
            {/* Candles */}
            <div className="absolute bottom-40 left-0 right-0 h-16 flex justify-center gap-1 md:gap-2 z-40 px-8">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="relative w-2 h-12 bg-gradient-to-b from-white to-pink-200 rounded-sm shadow-sm" style={{ transform: `translateY(${Math.abs(7 - i) * 3}px)` }}>
                  {/* Flame */}
                  <AnimatePresence>
                    {!candlesBlown && (
                      <motion.div
                        exit={{ opacity: 0, scale: 0, y: -20 }}
                        className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-6 bg-gradient-to-t from-orange-400 to-yellow-200 rounded-[100%] blur-[1px] origin-bottom"
                        animate={{ 
                          scale: [1, 1.2, 0.9, 1.1, 1],
                          rotate: [0, -5, 5, -2, 0],
                        }}
                        transition={{ 
                          duration: (i % 3) * 0.2 + 0.5, 
                          repeat: Infinity,
                          repeatType: "mirror"
                        }}
                      >
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-3 bg-white rounded-full opacity-60" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Smoke */}
                  {candlesBlown && (
                    <motion.div
                      initial={{ opacity: 0, y: 0, scale: 0.5 }}
                      animate={{ opacity: [0, 0.5, 0], y: -50, scale: 2, x: (i % 2 === 0 ? 10 : -10) }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-300 rounded-full blur-[4px]"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.button
            onClick={handleBlowCandles}
            disabled={candlesBlown}
            whileHover={!candlesBlown ? { scale: 1.05 } : {}}
            whileTap={!candlesBlown ? { scale: 0.95 } : {}}
            className={`mt-16 px-10 py-5 rounded-full font-poppins font-semibold tracking-wide flex items-center justify-center gap-3 transition-all duration-500 mx-auto ${
              candlesBlown 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-brand-rose-gold to-[#c47783] text-white shadow-[0_10px_30px_rgba(183,110,121,0.4)] hover:shadow-[0_15px_40px_rgba(183,110,121,0.6)]'
            }`}
          >
            {candlesBlown ? "Wishes Sent to the Universe ✨" : (
              <>
                Blow Out Candles <Wind className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </div>
      </div>
      
      {/* Background Celebration Elements when blown */}
      <AnimatePresence>
        {candlesBlown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none -z-10 bg-brand-pink/5"
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-200/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-300/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
