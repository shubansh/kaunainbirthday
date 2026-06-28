"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Wait a bit after reaching 100
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-bg bg-opacity-95 backdrop-blur-md"
        exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex flex-col items-center"
        >
          {/* Animated Crown */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6 relative"
          >
            <Crown className="w-16 h-16 text-brand-rose-gold" strokeWidth={1.5} />
            <Sparkles className="w-6 h-6 text-brand-light-gold absolute -top-2 -right-4 animate-sparkle" />
          </motion.div>

          <h1 className="font-playfair text-3xl md:text-4xl text-brand-text mb-4 text-center tracking-wide">
            Preparing Your Magical
            <br /> Birthday Experience...
          </h1>

          <div className="w-64 h-1 bg-brand-lavender rounded-full overflow-hidden mt-4 relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-brand-rose-gold"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <p className="mt-4 font-inter text-brand-subtext text-sm">
            {progress}%
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
