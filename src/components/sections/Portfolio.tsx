"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const packages = [
  {
    tier: "Basic",
    title: "스타터 패키지",
    description: "아마존 입점을 시작하는 브랜드를 위한 기본 패키지",
    features: [
      "아마존 계정 셋업",
      "상품 리스팅 등록 (5개)",
      "기본 키워드 리서치",
      "월간 리포트",
    ],
  },
  {
    tier: "Standard",
    title: "그로스 패키지",
    description: "매출 성장을 가속화하려는 브랜드를 위한 표준 패키지",
    features: [
      "스타터 패키지 전체 포함",
      "PPC 광고 운영",
      "상품 리스팅 최적화",
      "경쟁사 분석 리포트",
      "재고 관리 지원",
    ],
    popular: true,
  },
  {
    tier: "Premium",
    title: "프리미엄 패키지",
    description: "아마존 시장을 선도하려는 브랜드를 위한 올인원 패키지",
    features: [
      "그로스 패키지 전체 포함",
      "브랜드 스토어 구축",
      "DSP 광고 운영",
      "A+ 콘텐츠 제작",
      "전담 매니저 배정",
      "주간 전략 미팅",
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Packages"
          title="서비스 패키지"
          description="브랜드의 성장 단계에 맞는 최적의 패키지를 선택하세요."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                pkg.popular
                  ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl scale-[1.02]"
                  : "bg-muted text-foreground"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}

              <div className="mb-6">
                <span
                  className={`text-sm font-semibold ${pkg.popular ? "text-blue-200" : "text-primary"}`}
                >
                  {pkg.tier}
                </span>
                <h3 className="text-2xl font-bold mt-1">{pkg.title}</h3>
                <p
                  className={`text-sm mt-2 ${pkg.popular ? "text-blue-100" : "text-muted-foreground"}`}
                >
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className={pkg.popular ? "text-blue-200" : "text-primary"}>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className={`w-full py-3 rounded-lg font-semibold transition-all cursor-pointer ${
                  pkg.popular
                    ? "bg-white text-blue-700 hover:bg-blue-50"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                상담 신청
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
