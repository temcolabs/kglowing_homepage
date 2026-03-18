"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      {subtitle && (
        <span className={`text-sm font-semibold tracking-widest uppercase ${light ? "text-blue-300" : "text-primary"}`}>
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mt-2 mb-4 ${light ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl mx-auto text-lg ${light ? "text-gray-300" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
