"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CONFIG } from "@/config/birthday";
import GlassImage from "@/components/ui/GlassImage";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" ref={containerRef} className="pt-20 pb-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Adjusted Spacing for Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-brand-rose-gold mb-4 drop-shadow-sm">
            A Magical Journey
          </h2>
          <p className="font-inter text-brand-subtext text-lg tracking-wide uppercase">{CONFIG.age} beautiful years of growth, love, and memories.</p>
        </motion.div>

        <div className="relative w-full max-w-6xl mx-auto">
          {/* Mobile Path */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-brand-rose-gold/40 to-transparent rounded-full md:hidden" />
          
          {/* Perfect CSS Grid alignment ensures the SVG naturally passes through every image center */}
          <svg 
            className="hidden md:block absolute top-0 left-0 w-full h-[300px] pointer-events-none overflow-visible" 
            preserveAspectRatio="none" 
            viewBox="0 0 1000 300"
          >
            <defs>
              <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B76E79" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#B76E79" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#B76E79" stopOpacity="0.2" />
              </linearGradient>
              <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Background Track */}
            <motion.path
              d="M 100,132 C 200,132 200,182 300,182 C 400,182 400,102 500,102 C 600,102 600,192 700,192 C 800,192 800,112 900,112"
              fill="transparent"
              strokeWidth="1.5"
              stroke="rgba(183,110,121,0.15)"
              vectorEffect="non-scaling-stroke"
            />
            {/* Animated Glow Track */}
            <motion.path
              d="M 100,132 C 200,132 200,182 300,182 C 400,182 400,102 500,102 C 600,102 600,192 700,192 C 800,192 800,112 900,112"
              fill="transparent"
              strokeWidth="3.5"
              stroke="url(#timeline-gradient)"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
              filter="url(#soft-glow)"
            />
          </svg>

          {/* Milestones Grid (5 items perfectly spaced) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10 h-full">
            {CONFIG.timeline.map((m, index) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="relative flex flex-col items-center group w-full"
                style={{ 
                  marginTop: isDesktop ? m.yOffset + 60 : 0
                }}
              >
                {/* Premium Image Bubble */}
                <div className="relative mb-6 md:mb-8 transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full p-[6px] bg-white/90 backdrop-blur-md shadow-[0_8px_25px_rgba(183,110,121,0.12)] ring-1 ring-brand-rose-gold/20 z-20 relative group-hover:shadow-[0_15px_35px_rgba(183,110,121,0.25)] transition-shadow duration-500">
                    <GlassImage 
                      src={m.image} 
                      alt={m.title} 
                      fill
                      sizes="(max-width: 768px) 128px, 144px"
                      containerClassName="w-full h-full rounded-full bg-white overflow-hidden border border-white/50"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Subtle Minimal Decorative Badge */}
                  <div className="absolute top-2 right-2 md:top-3 md:right-3 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-brand-rose-gold ring-[3px] ring-white shadow-sm z-30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                {/* Luxurious Glass Card */}
                <div className="text-center glass-card p-6 md:p-8 w-full max-w-[280px] rounded-[24px] bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] opacity-95 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 group-hover:shadow-[0_12px_30px_rgba(183,110,121,0.06)]">
                  <span className="text-[10px] md:text-xs font-bold text-brand-rose-gold uppercase tracking-[0.25em] block mb-2 md:mb-3">{m.date}</span>
                  <h4 className="font-playfair font-bold text-brand-text text-xl md:text-2xl mb-2 md:mb-3 leading-tight">{m.title}</h4>
                  <p className="font-inter text-brand-subtext leading-relaxed text-xs md:text-sm">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
