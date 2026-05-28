"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text =
  "در آموزشگاه تحلیل‌گر، ما آموزش فرانت‌اند و طراحی سایت را به‌صورت پروژه‌محور و کاربردی ارائه می‌کنیم تا هنرجوها بتوانند از یادگیری مفاهیم پایه تا ساخت رابط‌های حرفه‌ای و ورود به بازار کار، مسیر رشد خود را با اطمینان طی کنند.";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const filter = useTransform(progress, range, ["blur(4px)", "blur(0px)"]);

  return (
    <span className="relative mx-1 my-1 inline-block">
      <motion.span
        style={{ opacity, filter }}
        className="text-white/95"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function ScrollGlowText() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.35"],
  });

  const words = text.split(" ");

  return (
    <section
      ref={containerRef}
      dir="rtl"
      className="relative h-[160vh] bg-[#030303] px-6"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="max-w-4xl">
          <div className="mb-6 text-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
              آموزشگاه تحلیل‌گر
            </span>
          </div>

          <p className="flex flex-wrap justify-center text-center text-lg font-medium leading-9 text-white/20 sm:text-xl md:text-2xl md:leading-10">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;

              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
