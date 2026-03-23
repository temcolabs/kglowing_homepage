"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    icon: "🛒",
    title: "아마존 셀링",
    description:
      "아마존 입점 준비부터 상품 등록, 리스팅 최적화까지 셀링의 시작을 함께합니다.",
  },
  {
    icon: "📢",
    title: "아마존 마케팅",
    description:
      "PPC 광고, 브랜드 스토어 구축, 프로모션 전략 등 효과적인 마케팅을 운영합니다.",
  },
  {
    icon: "📈",
    title: "광고 관리",
    description:
      "Sponsored Products, Brands, Display 등 아마존 광고를 전문적으로 관리합니다.",
  },
  {
    icon: "📦",
    title: "물류 관리",
    description:
      "FBA 입고, 재고 관리, 국제 물류까지 원활한 물류 운영을 지원합니다.",
  },
  {
    icon: "⚡",
    title: "최적화 서비스",
    description:
      "상품 리스팅, 키워드, 가격 전략 등 판매 성과를 극대화하는 최적화를 진행합니다.",
  },
  {
    icon: "🔍",
    title: "데이터 분석",
    description:
      "매출 데이터, 경쟁 분석, 트렌드 리포트 등 데이터 기반 인사이트를 제공합니다.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-28 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Services"
          title="제공 서비스"
          description="아마존 셀링의 A to Z, Kglowing이 함께합니다."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
