"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CONFIG } from "@/config/birthday";
import GlassImage from "@/components/ui/GlassImage";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" ref={containerRef} className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-brand-rose-gold to-[#c47783] mb-4 drop-shadow-sm">
            A Magical Journey
          </h2>
          <p className="font-inter text-brand-subtext text-lg">{CONFIG.age} beautiful years of growth, love, and memories.</p>
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto">
          {/* The Glowing Curved Path (SVG) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[4px] bg-white/40 rounded-full md:hidden" />
          
          <svg className="hidden md:block absolute top-20 left-0 w-full h-[700px] pointer-events-none overflow-visible" preserveAspectRatio="none">
            <motion.path
              d="M 50,50 Q 250,200 500,100 T 900,250 T 1200,100"
              fill="transparent"
              strokeWidth="4"
              stroke="rgba(255,255,255,0.4)"
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              d="M 50,50 Q 250,200 500,100 T 900,250 T 1200,100"
              fill="transparent"
              strokeWidth="6"
              stroke="#B76E79"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
              className="drop-shadow-[0_0_15px_rgba(183,110,121,0.8)]"
            />
          </svg>

          {/* Milestones */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative z-10 space-y-24 md:space-y-0 h-full md:min-h-[500px]">
            {CONFIG.timeline.map((m, index) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex flex-col items-center group w-48 md:w-56"
                style={{ 
                  marginTop: typeof window !== 'undefined' && window.innerWidth > 768 ? m.yOffset + 50 : 0
                }}
              >
                {/* Image Bubble */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-white shadow-[0_10px_25px_rgba(183,110,121,0.2)] z-20 relative group-hover:scale-110 transition-transform duration-500">
                    <GlassImage 
                      src={m.image} 
                      alt={m.title} 
                      width={128} 
                      height={128} 
                      containerClassName="w-full h-full rounded-full"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  {/* Floating Icon */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-xl z-30 group-hover:rotate-12 transition-transform">
                    {m.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center glass-card p-5 w-full opacity-90 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                  <span className="text-xs font-bold text-brand-rose-gold uppercase tracking-widest block mb-2">{m.date}</span>
                  <h4 className="font-playfair font-bold text-brand-text text-xl mb-2">{m.title}</h4>
                  <p className="font-inter text-sm text-brand-subtext leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
