"use client"
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between flex-row-reverse">
        <div className="text-xl font-bold">تحلیل‌گر</div>
        <div className="hidden md:flex gap-8 items-center flex-row-reverse">
          <Link href="/" className="hover:text-blue-400 transition">صفحه اصلی</Link>
          <Link href="#courses" className="hover:text-blue-400 transition">دوره‌ها</Link>
          <Link href="#about" className="hover:text-blue-400 transition">درباره ما</Link>
          <button className="bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-700 transition">ورود دانشجویان</button>
        </div>
      </div>
    </nav>
  );
}
