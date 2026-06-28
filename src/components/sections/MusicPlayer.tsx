"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { CONFIG } from "@/config/birthday";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // We only mount the audio element on the client side
    audioRef.current = new Audio(CONFIG.musicUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play prevented:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-4"
    >
      <div className="flex items-center bg-white/40 backdrop-blur-md border border-white/60 p-2 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
        
        {/* Equalizer Animation */}
        <div className="flex items-center gap-1 mx-3 h-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-brand-rose-gold rounded-full"
              animate={{ 
                height: isPlaying ? [4, 16, 4, 12, 4] : 4 
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <button 
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-brand-rose-gold flex items-center justify-center text-white hover:scale-105 transition-transform shadow-md"
        >
          {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
      </div>
    </motion.div>
  );
}
