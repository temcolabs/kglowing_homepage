"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  light?: boolean;
  compact?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  light = false,
  compact = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`text-center ${compact ? "mb-8 md:mb-10 lg:mb-12" : "mb-12 md:mb-16 lg:mb-20"}`}
    >
      {subtitle && (
        <span className={`text-sm font-semibold tracking-widest uppercase ${light ? "text-blue-300" : "text-primary"}`}>
          {subtitle}
        </span>
      )}
      <h2
        className={`font-bold mt-2 mb-3 ${compact ? "text-xl md:text-2xl lg:text-3xl leading-snug" : "text-2xl md:text-3xl lg:text-4xl mb-4"} ${light ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mx-auto ${compact ? "max-w-3xl text-sm md:text-base leading-relaxed" : "max-w-2xl text-base md:text-lg leading-relaxed"} ${light ? "text-gray-300" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
