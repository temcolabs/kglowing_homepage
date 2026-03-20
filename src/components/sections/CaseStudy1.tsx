"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CaseStudy1() {
  return (
    <section id="case-study-1" className="py-16 md:py-28 lg:py-32 bg-muted text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* 텍스트 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
              GROWTH CASE
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
              신규 입점 브랜드 C사
            </h2>

            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-2">런치 첫달 대비 6개월 후 성장률</p>
              <p className="w-fit text-5xl sm:text-6xl lg:text-7xl font-bold leading-none bg-linear-to-r from-[#00ffdc] to-[#00a1ff] bg-clip-text text-transparent">
                +13,614%
              </p>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              신규 아마존 입점 브랜드 C사의 초기 런칭부터 6개월 운영까지,
              Kglowing의 통합 전략으로 폭발적인 매출 성장을 달성했습니다.
            </p>
          </motion.div>

          {/* 차트 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Image
              src="/images/case-study/img_chart.png"
              alt="신규 입점 브랜드 C사 성장 차트"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
