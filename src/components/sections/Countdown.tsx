"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONFIG } from "@/config/birthday";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBirthday, setIsBirthday] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Parse the date from config (e.g. "1 July")
    const dateParts = CONFIG.birthdayDate.split(' ');
    const day = parseInt(dateParts[0], 10);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthIndex = monthNames.findIndex(m => m.toLowerCase() === dateParts[1]?.toLowerCase());
    
    const now = new Date();
    let targetYear = CONFIG.birthdayYear || now.getFullYear();
    const targetMonth = monthIndex !== -1 ? monthIndex : 6; 
    const targetDay = day || 1;

    // If we've passed the birthday this year, aim for next year
    if (now.getMonth() > targetMonth || (now.getMonth() === targetMonth && now.getDate() > targetDay)) {
      targetYear += 1;
    }

    const targetDate = new Date(targetYear, targetMonth, targetDay, 0, 0, 0).getTime();

    const interval = setInterval(() => {
      setMounted(true);
      const nowTime = new Date().getTime();
      const distance = targetDate - nowTime;

      if (distance < 0) {
        setIsBirthday(true);
        clearInterval(interval);
      } else {
        setIsBirthday(false);
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="font-great-vibes text-4xl md:text-5xl text-brand-text mb-4">
            Today is Your Special Day!
          </h3>
          <div className="flex justify-center gap-4 text-brand-rose-gold">
            <span className="animate-pulse">✨</span>
            <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>🌸</span>
            <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>✨</span>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isBirthday ? (
            <motion.div 
              key="countdown"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="flex justify-center gap-4 md:gap-8 flex-wrap"
            >
              {timeBlocks.map((block) => (
                <div key={block.label} className="glass-card flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32">
                  <span className="font-playfair text-3xl md:text-4xl text-brand-rose-gold font-bold mb-1">
                    {block.value.toString().padStart(2, '0')}
                  </span>
                  <span className="font-inter text-xs md:text-sm text-brand-subtext uppercase tracking-widest">
                    {block.label}
                  </span>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="birthday"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-12 text-center"
            >
              <h2 className="font-playfair text-4xl md:text-6xl font-bold gradient-text mb-4">
                🎉 Happy {CONFIG.age}th Birthday {CONFIG.name} 🎉
              </h2>
              <p className="font-inter text-brand-subtext text-lg">
                The wait is over! It&apos;s time to celebrate you.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
