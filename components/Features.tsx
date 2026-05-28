"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Rocket, Shield, Zap } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  { title: "کدنویسی تمیز", desc: "آموزش طبق آخرین استانداردهای جهانی و Clean Code", icon: Code2, color: "text-blue-400" },
  { title: "هوش مصنوعی", desc: "ادغام ابزارهای AI در فرآیند توسعه نرم‌افزار", icon: Cpu, color: "text-violet-400" },
  { title: "پروژه‌های واقعی", desc: "کار روی پروژه‌های عملی که در بازار کار ارزش دارند", icon: Rocket, color: "text-cyan-400" },
  { title: "امنیت داده", desc: "آموزش اصول امنیت و مقابله با حملات سایبری", icon: Shield, color: "text-emerald-400" },
  { title: "استقرار سریع", desc: "یادگیری CI/CD و متدولوژی‌های مدرن Deployment", icon: Zap, color: "text-amber-400" },
  { title: "جامعه جهانی", desc: "اتصال به شبکه‌ای از برنامه‌نویسان حرفه‌ای", icon: Globe, color: "text-rose-400" },
];

export default function Features() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">چرا آکادمی تحلیل‌گر؟</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">ما فقط کدنویسی یاد نمی‌دهیم، ما مسیر حرفه‌ای شدن را برای شما ترسیم می‌کنیم.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-card group p-10 rounded-[2.5rem] hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-white/20 relative overflow-hidden">
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <f.icon className={f.color} size={30} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
