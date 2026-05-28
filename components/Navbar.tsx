"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "خانه", href: "/" },
    { name: "دوره‌ها", href: "#" },
    { name: "مقالات", href: "/" },
    { name: "درباره ما", href: "#" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}>
        <div className="container mx-auto px-6">
          <div className={`glass-card rounded-[2rem] px-8 py-4 flex items-center justify-between border-white/5 transition-all ${
            isScrolled ? "bg-black/40 backdrop-blur-2xl border-white/10" : "bg-transparent"
          }`}>
            <Link href="/" className="text-2xl font-black italic tracking-tighter">
              ANALYZER<span className="text-cyan-500">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-500 transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden md:block px-6 py-2.5 rounded-xl bg-white text-black font-bold text-sm hover:scale-105 transition-transform">
                ورود / ثبت‌نام
              </button>
              <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[200] bg-[#030712] p-10 flex flex-col"
          >
            <button className="self-end mb-12 text-slate-400" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-bold hover:text-cyan-500 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <button className="w-full py-5 rounded-2xl bg-cyan-500 text-black font-black text-xl">ورود به پنل</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
