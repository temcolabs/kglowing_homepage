"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const values = [
  {
    icon: "🎯",
    title: "전문성",
    description: "아마존 마켓플레이스에 특화된 깊은 전문 지식과 풍부한 실무 경험을 보유하고 있습니다.",
  },
  {
    icon: "🤝",
    title: "파트너십",
    description: "일회성 서비스가 아닌, 브랜드와 함께 성장하는 장기적 파트너십을 추구합니다.",
  },
  {
    icon: "📊",
    title: "데이터 기반",
    description: "정확한 데이터 분석을 기반으로 최적화된 전략을 수립하고 실행합니다.",
  },
  {
    icon: "🚀",
    title: "성과 중심",
    description: "측정 가능한 성과를 목표로, 지속적인 개선과 최적화를 진행합니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="About Us"
          title="KGlowing을 소개합니다"
          description="아마존 글로벌 셀링의 전문 파트너로서, 한국 브랜드의 해외 진출을 지원합니다."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              우리의 비전
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              KGlowing은 한국 브랜드가 아마존을 통해 글로벌 시장에서 빛날 수 있도록 돕는 전문 파트너입니다.
              단순한 대행 서비스를 넘어, 브랜드의 글로벌 성장 전략을 함께 수립하고 실행합니다.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              입점 준비부터 상품 최적화, 광고 운영, 물류 관리, 데이터 분석까지 아마존 셀링의 전 과정을
              원스톱으로 지원합니다. 데이터 기반의 전략적 접근으로 브랜드의 지속 가능한 성장을 이끌어냅니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              우리의 미션
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              &quot;모든 한국 브랜드가 아마존에서 빛날 수 있도록&quot;
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              우리는 복잡한 아마존 생태계를 누구나 쉽게 활용할 수 있도록 돕고,
              각 브랜드의 고유한 강점을 글로벌 시장에서 극대화하는 것을 목표로 합니다.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-muted hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="font-bold text-lg mb-2 text-foreground">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
