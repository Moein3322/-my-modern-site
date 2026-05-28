"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150, rotate: rotate - 20 }}
            animate={{ opacity: 1, y: 0, rotate: rotate }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                style={{ width, height }}
                className="relative"
            >
                <div className={cn(
                    "absolute inset-0 rounded-full",
                    "bg-gradient-to-r to-transparent",
                    gradient,
                    "border border-white/[0.15] backdrop-blur-[2px]",
                    "shadow-2xl shadow-white/[0.05]",
                    "after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_70%)]"
                )} />
            </motion.div>
        </motion.div>
    );
}

export default function HeroSection({
    badge = "Design Collective",
    title = "Elevate Your Digital Vision",
    description = "Crafting exceptional digital experiences through innovative design and cutting-edge technology."
}) {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.15]" className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]" />
                <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.15]" className="right-[-5%] top-[70%] md:right-[0%] md:top-[75%]" />
                <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-amber-500/[0.15]" className="left-[5%] bottom-[5%] md:left-[10%] md:bottom-[10%]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
                        <Circle className="h-2 w-2 fill-indigo-500/80" />
                        <span className="text-sm text-white/60 tracking-wide">{badge}</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-7xl font-bold mb-6 text-white tracking-tight">{title}</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-base md:text-lg text-white/40 mb-8 leading-relaxed font-light">{description}</motion.p>
                </div>
            </div>
        </div>
    );
}
