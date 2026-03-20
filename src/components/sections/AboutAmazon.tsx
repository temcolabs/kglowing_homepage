"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const whyCards = [
  {
    title: "Amazon 중심 글로벌 확장 전략",
    description:
      "Amazon을 중심으로 TikTok 등 외부 채널까지 연결하여 브랜드의 글로벌 성장을 위한 통합 전략을 설계합니다.",
  },
  {
    title: "데이터 기반 성과 중심 운영",
    description:
      "운영과 광고를 데이터 기반으로 관리하며, 성과 지표를 중심으로 지속적인 개선과 최적화를 진행합니다.",
  },
  {
    title: "전략부터 실행까지 통합 지원",
    description:
      "입점, 콘텐츠, 광고, 물류까지 전 영역을 하나의 흐름으로 운영하여 불필요한 커뮤니케이션과 리소스를 줄입니다.",
  },
  {
    title: "다양한 카테고리 운영 경험",
    description:
      "K-Beauty, 식품, 라이프스타일 등 다양한 산업에서의 경험을 바탕으로 시장에 맞는 실행 전략을 제공합니다.",
  },
];

export default function AboutAmazon() {
  return (
    <section id="about-amazon" className="py-12 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 섹션 헤더 */}
        <SectionTitle
          subtitle="WHY KGLOWING?"
          title="왜 한국의 주요 브랜드사에서 케이글로잉을 선택해주시나요?"
        />

        {/* 상단: 소개 + 이미지 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-5">
              아마존,
              <br />
              전문가들과 이커머스 No.1
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              아마존 출신 이커머스 전문가와 함께 북미부터 유럽, 중동 호주까지 빠르게 시장을 확장해 보세요.
              글로벌 시장에서 폭발적인 성장을 이끄는 가장 효과적인 플랫폼, 아마존이 그 시작점입니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-video relative rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/about-amazon/img04_1280.png"
              alt="아마존 글로벌 셀링"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* 4개 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {whyCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 md:p-8"
            >
              <h4 className="font-bold text-base sm:text-lg text-foreground mb-3">
                {card.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
