"use client";
import { motion } from "framer-motion";

export default function Hero3D() {
  return (
    <section className="relative pt-20 pb-10 overflow-hidden text-center">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6 inline-block">
            نسخه ۱۶ Next.js آماده است
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            توسعه فرانت‌اند، <br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">با استانداردهای آژانس</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            ما در آکادمی تحلیل‌گر، پیچیدگی‌های مدرن وب را به ابزارهای ساده و قدرتمند برای شما تبدیل می‌کنیم.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition">شروع یادگیری</button>
            <button className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">مشاهده دوره‌ها</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
