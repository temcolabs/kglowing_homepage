"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const accountServices = [
  {
    icon: "🏪",
    title: "계정 설정 및 컴플라이언스",
    description:
      "아마존 셀러 계정 개설부터 정책 준수까지, 안정적인 계정 운영 기반을 구축합니다.",
  },
  {
    icon: "💰",
    title: "Amazon PPC 계정 관리",
    description:
      "Sponsored Products, Brands, Display 광고를 통합 관리하여 광고 효율을 극대화합니다.",
  },
  {
    icon: "📋",
    title: "카탈로그 및 리스팅 관리",
    description:
      "상품 등록, 콘텐츠 최적화, A+ 페이지 제작으로 상품 경쟁력을 높입니다.",
  },
  {
    icon: "📣",
    title: "광고 및 프로모션 지원",
    description:
      "딜, 쿠폰, 라이트닝 딜 등 프로모션 전략을 기획하고 실행합니다.",
  },
  {
    icon: "📊",
    title: "성과 모니터링 및 이슈 해결",
    description:
      "계정 건전성 지표를 상시 모니터링하고 문제 발생 시 신속히 대응합니다.",
  },
  {
    icon: "📈",
    title: "리포팅 및 성장 분석",
    description:
      "매출, 광고, 재고 데이터를 분석해 맞춤 리포트와 성장 인사이트를 제공합니다.",
  },
];

const adServices = [
  {
    icon: "🎯",
    title: "Amazon PPC 관리 서비스",
    description:
      "캠페인 구조 설계부터 입찰가 최적화까지, 데이터 기반으로 PPC 성과를 극대화합니다.",
  },
  {
    icon: "🔑",
    title: "키워드 및 상품 타겟팅",
    description:
      "고전환 키워드 발굴과 경쟁사 상품 타겟팅으로 노출과 매출을 동시에 높입니다.",
  },
  {
    icon: "📡",
    title: "Amazon DSP 광고",
    description:
      "아마존 내·외부 디스플레이 광고로 잠재 고객에게 브랜드를 폭넓게 노출합니다.",
  },
  {
    icon: "🔍",
    title: "광고 감사 및 최적화",
    description:
      "기존 광고 계정을 전수 분석하여 낭비를 줄이고 ROAS를 개선합니다.",
  },
  {
    icon: "🏬",
    title: "브랜드 스토어 및 스폰서 브랜드",
    description:
      "브랜드 스토어 제작과 Sponsored Brands 캠페인으로 브랜드 인지도를 강화합니다.",
  },
  {
    icon: "📉",
    title: "PPC 소프트웨어 및 리포팅",
    description:
      "최신 광고 툴과 정기 리포팅 시스템으로 광고 운영 효율을 지속적으로 관리합니다.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

function ServiceCard({
  icon,
  title,
  description,
  index,
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
    >
      <div className="text-3xl shrink-0">{icon}</div>
      <div>
        <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function AmazonDetail() {
  return (
    <>
      {/* 아마존 계정 관리 섹션 */}
      <section className="py-16 md:py-28 lg:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Account Management"
            title="아마존 계정, 처음부터 끝까지 함께합니다"
            description="계정 설정부터 성과 분석까지 아마존 운영의 모든 과정을 Kglowing이 전문적으로 대행합니다."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {accountServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 광고 서비스 섹션 */}
      <section className="py-16 md:py-28 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Advertising"
            title={
              <>
                SMARTER ADS.{" "}
                <span className="text-accent">STRONGER SALES.</span>
              </>
            }
            description="전략적인 아마존 광고 운영으로 더 많은 고객에게 도달하고 매출을 끌어올립니다."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {adServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
