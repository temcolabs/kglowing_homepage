"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "화장품 L사", chart: "/images/case-study/img_chart1.png" },
  { name: "화장품 T사", chart: "/images/case-study/img_chart2.png" },
  { name: "건기식 R사", chart: "/images/case-study/img_chart3.png" },
  { name: "애완용품 S사", chart: "/images/case-study/img_chart4.png" },
];

export default function CaseStudy2() {
  return (
    <section id="case-study-2" className="py-16 md:py-28 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14 text-center"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            ROAS CASE
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            광고 RoAS 최적화 사례
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-3"
            >
              {/* 차트 이미지 */}
              <Image
                src={brand.chart}
                alt={`${brand.name} RoAS 차트`}
                width={400}
                height={300}
                className="w-full h-auto"
              />
              {/* 브랜드명 */}
              <p className="text-center font-semibold text-foreground text-sm">
                {brand.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
