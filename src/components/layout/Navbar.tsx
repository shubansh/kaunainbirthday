"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "#home" },
  { name: "Journey", href: "#journey" },
  { name: "Gallery", href: "#gallery" },
  { name: "Memories", href: "#memories" },
  { name: "Family", href: "#family" },
  { name: "Cake", href: "#cake" },
  { name: "Gifts", href: "#gifts" },
  { name: "Letter", href: "#letter" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4",
          scrolled ? "bg-white/40 backdrop-blur-xl border-b border-white/20 shadow-sm" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" onClick={(e) => scrollTo(e, "#home")} className="flex items-center gap-2 group">
            <Crown className="w-6 h-6 text-brand-rose-gold group-hover:scale-110 transition-transform" />
            <span className="font-playfair font-semibold text-lg text-brand-text tracking-wide">
              Kaunain's Birthday
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="font-inter text-sm text-brand-subtext hover:text-brand-rose-gold transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-rose-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brand-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-30 bg-brand-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-16"
          >
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="font-playfair text-2xl text-brand-text hover:text-brand-rose-gold transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
