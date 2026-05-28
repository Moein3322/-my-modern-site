"use client";

import { motion } from "framer-motion";

export function PrismaHero() {
  return (
    <section
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030303] px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_30%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.16),transparent_35%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
        >
          آموزش تخصصی فرانت‌اند، طراحی سایت و ورود به بازار کار
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-5xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          یادگیری حرفه‌ای
          <span className="block bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            فرانت‌اند و طراحی سایت
          </span>
          <span className="block text-white/85">
            در آموزشگاه تحلیل‌گر
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/65 sm:text-lg md:text-xl"
        >
          از یادگیری HTML ،CSS و JavaScript تا React، طراحی رابط کاربری مدرن،
          ساخت پروژه‌های واقعی و آمادگی برای ورود به بازار کار؛
          در تحلیل‌گر مسیر یادگیری را قدم‌به‌قدم، کاربردی و پروژه‌محور تجربه می‌کنید.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#pricing"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            شروع یادگیری
          </a>

          <a
            href="#features"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            مشاهده دوره‌ها
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 grid grid-cols-1 gap-4 text-right sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="text-2xl font-black text-white">پروژه‌محور</div>
            <p className="mt-2 text-sm leading-7 text-white/60">
              یادگیری با تمرین، ساخت نمونه‌کار و تجربه واقعی پیاده‌سازی رابط کاربری.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="text-2xl font-black text-white">مسیر شغلی</div>
            <p className="mt-2 text-sm leading-7 text-white/60">
              آموزش مهارت‌هایی که برای ورود به بازار کار فرانت‌اند و طراحی سایت نیاز دارید.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="text-2xl font-black text-white">محتوای پویا</div>
            <p className="mt-2 text-sm leading-7 text-white/60">
              امکان دریافت و مدیریت محتوای آموزشی از وردپرس با WPGraphQL.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
