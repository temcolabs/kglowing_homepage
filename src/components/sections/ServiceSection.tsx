"use client";

import { motion } from "framer-motion";
import type { ServiceSectionData } from "@/data/serviceSections";

interface Props {
  data: ServiceSectionData;
}

export default function ServiceSection({ data }: Props) {
  const { id, eyebrow, title, description, statsCards, blocks } = data;

  return (
    <section id={id} className="py-16 md:py-28 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14 text-center mx-auto"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            {eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5 max-w-3xl mx-auto">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
            {description}
          </p>
        </motion.div>

        {/* Stats Banner — 하나의 묶음 */}
        {statsCards && statsCards.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-900 rounded-2xl p-6 md:p-8 lg:p-10 mb-10 md:mb-14"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-700">
              {statsCards.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center text-center py-4 first:pt-0 last:pb-0 sm:py-0 sm:px-4 lg:px-6"
                >
                  {stat.value && (
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-linear-to-r from-[#00ffdc] to-[#00a1ff] bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                  )}
                  <p className="text-gray-300 text-xs sm:text-sm leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 6개 블록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card rounded-xl border border-border p-6 md:p-8"
            >
              <h3 className="font-pretendard font-medium text-base leading-[30px] text-foreground mb-3">
                {block.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {block.content}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
