"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  once = true,
}: Props) {
  const v: Variants = {
    hidden: { opacity: 0, y, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
    },
  };

  return (
    <motion.div
      className={className}
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
