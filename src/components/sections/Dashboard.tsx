"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Dashboard() {
  return (
    <section id="case-study-dashboard" className="py-16 md:py-28 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12 text-center"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            ANALYTICS DASHBOARD
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Kglowing 광고 분석 대시보드 예시
          </h2>
        </motion.div>

        {/* 대시보드 이미지 placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl border border-border overflow-hidden"
        >
          <Image
            src="/images/dashboard/img_dashboard.png"
            alt="Kglowing 광고 분석 대시보드"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}
