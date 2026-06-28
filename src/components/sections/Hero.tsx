"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Crown, Heart, Sparkles } from "lucide-react";
import { CONFIG } from "@/config/birthday";
import GlassImage from "@/components/ui/GlassImage";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[120vh] flex items-center justify-center pt-20 overflow-hidden z-10 perspective-1000"
    >
      {/* Background Magic Elements specifically for Hero */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-96 h-48 bg-white/20 blur-[60px] rounded-full animate-float" />
        <div className="absolute bottom-40 right-20 w-[500px] h-[300px] bg-brand-pink/30 blur-[80px] rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-brand-light-gold/30 rounded-full blur-[40px] animate-pulse-glow" />
        <div className="absolute top-2/3 right-1/3 w-40 h-40 bg-brand-lavender/40 rounded-full blur-[50px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Text Content */}
        <motion.div 
          style={{ opacity: opacityText }}
          className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/30 border border-white/50 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.5)] mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-rose-gold animate-spin-slow" />
            <span className="text-brand-rose-gold text-xs font-bold uppercase tracking-[0.3em]">
              {CONFIG.birthdayDate} • A Magical Celebration
            </span>
            <Sparkles className="w-4 h-4 text-brand-rose-gold animate-spin-slow" />
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
             animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
             transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
             className="relative"
          >
            <h1 className="font-great-vibes text-7xl md:text-9xl mb-2 leading-[1.1] pb-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-rose-gold via-[#e8a3b1] to-[#b87685] drop-shadow-sm">
              {CONFIG.hero.title}
            </h1>
            <h2 className="font-playfair text-4xl md:text-6xl text-brand-text mb-6 font-bold tracking-wide relative inline-block">
              {CONFIG.hero.subtitle}
              <motion.div 
                className="absolute -inset-2 bg-brand-rose-gold/10 blur-xl -z-10 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="font-inter text-brand-subtext text-xl max-w-lg mb-10 leading-relaxed font-light"
          >
            {CONFIG.hero.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex items-center gap-6"
          >
            <button className="relative overflow-hidden group px-10 py-5 rounded-full bg-gradient-to-r from-brand-rose-gold to-[#d994a4] text-white font-poppins font-medium tracking-wide shadow-[0_8px_30px_rgba(183,110,121,0.4)] hover:shadow-[0_8px_40px_rgba(183,110,121,0.6)] hover:-translate-y-1 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Explore Memories <Heart className="w-4 h-4 fill-white" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>

            <button className="relative group w-16 h-16 flex items-center justify-center rounded-full bg-white/40 border border-white/60 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:scale-110 transition-all duration-300">
              <Play className="w-6 h-6 text-brand-rose-gold fill-brand-rose-gold group-hover:text-[#c47783] transition-colors ml-1" />
              <div className="absolute inset-0 rounded-full border border-brand-rose-gold/30 scale-150 opacity-0 group-hover:animate-ping" />
            </button>
          </motion.div>
        </motion.div>

        {/* Image / Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, delay: 1.5, type: "spring", bounce: 0.4 }}
          className="order-1 lg:order-2 flex justify-center relative perspective-1000"
        >
          {/* Glowing Crown Above Photo */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-16 z-20"
          >
            <Crown className="w-20 h-20 text-[#f6d365] drop-shadow-[0_0_15px_rgba(246,211,101,0.8)]" />
          </motion.div>

          {/* Polaroid Frame */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative p-4 md:p-6 pb-20 md:pb-24 bg-white/90 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50 rotate-3 hover:rotate-0 hover:scale-[1.02] hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(255,182,193,0.3)] transition-all duration-500 w-[90%] md:w-[110%] max-w-lg z-10 group"
          >
            <GlassImage 
              src={CONFIG.hero.image}
              alt="Hero Portrait"
              width={600}
              height={800}
              containerClassName="aspect-[3/4] w-full rounded-lg shadow-inner group"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="font-great-vibes text-4xl text-brand-text/90 tracking-wide">
                Our Princess ❤️
              </span>
            </div>
            
            {/* Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 text-5xl filter drop-shadow-md"
            >
              🦋
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, -10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -left-8 text-6xl filter drop-shadow-md"
            >
              🌸
            </motion.div>
          </motion.div>
          
          {/* Giant Back glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-pink/30 blur-[100px] -z-10 rounded-full animate-pulse-glow" />
        </motion.div>

      </div>
    </section>
  );
}
