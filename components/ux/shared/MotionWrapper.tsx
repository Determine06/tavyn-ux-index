"use client";

import { motion } from "framer-motion";

type MotionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export function MotionWrapper({ children, className }: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
