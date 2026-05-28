"use client";
import { motion } from "framer-motion";

const COURSES = [
  {
    title: "مسترکلاس Next.js 16",
    level: "پیشرفته",
    duration: "۲۰ ساعت",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
    price: "۴,۵۰۰,۰۰۰ تومان"
  },
  {
    title: "دوره جامع Tailwind CSS v4",
    level: "متوسط",
    duration: "۱۲ ساعت",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800",
    price: "۲,۸۰۰,۰۰۰ تومان"
  },
  {
    title: "هوش مصنوعی در فرانت‌اند",
    level: "تخصصی",
    duration: "۱۵ ساعت",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
    price: "۵,۲۰۰,۰۰۰ تومان"
  }
];

export default function FeaturedCourses() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="text-right">
            <h2 className="text-4xl font-bold mb-4">دوره‌های ویژه</h2>
            <p className="text-slate-400">مسیر حرفه‌ای شدن را از اینجا شروع کنید</p>
          </div>
          <button className="hidden md:block px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all">
            مشاهده همه دوره‌ها
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#0f172a] rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8 text-right">
                <div className="flex flex-row-reverse justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20">
                    {course.level}
                  </span>
                  <span className="text-slate-500 text-xs">{course.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-6 group-hover:text-cyan-400 transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex flex-row-reverse justify-between items-center pt-6 border-t border-white/5">
                  <span className="text-lg font-bold text-slate-200">{course.price}</span>
                  <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    ←
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
