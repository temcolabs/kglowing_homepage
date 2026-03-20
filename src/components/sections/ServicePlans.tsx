"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const plans = [
  {
    icon: "/images/service-plans/icon_starter.png",
    name: "Starter",
    subtitle: "아마존 진출을 위한 기본 구축 패키지",
    description:
      "아마존 입점을 처음 시작하는 브랜드를 위한 필수 세팅 서비스입니다. 계정 개설부터 상품 등록, 물류 준비까지 초기 런칭에 필요한 전 과정을 지원합니다.",
    target: "신규 셀러 / 글로벌 진출 준비 단계",
    features: [
      "계정 생성 및 결제/세금 세팅",
      "아마존 브랜드 레지스트리 등록 지원",
      "카테고리 승인 및 리스팅 권한 확보",
      "상품 상세페이지 기획 및 제작 (기본 콘텐츠)",
      "키워드 리서치 및 초기 SEO 세팅",
      "FBA 입고 및 물류 프로세스 가이드",
      "브랜드 스토어 기본 구축",
    ],
  },
  {
    icon: "/images/service-plans/icon_growth.png",
    name: "Growth",
    subtitle: "아마존 매출 성장 패키지",
    description:
      "아마존 운영 경험이 있는 셀러를 대상으로, 광고/재고/고객관리까지 포함한 통합 운영 서비스를 제공합니다. 필요시 리브랜딩 단계부터 다시 진행합니다.",
    target: "운영 중 셀러 / 매출 성장 단계",
    features: [
      "Amazon Ads 전략 수립 및 운영 (SP/SB 중심)",
      "키워드 및 캠페인 성과 최적화",
      "재고 관리 및 리필 전략 설계",
      "고객 응대(CS) 및 리뷰 관리",
      "경쟁사 및 시장 데이터 분석",
      "월간 성과 리포트 및 개선 전략 제안",
      "계정 헬스 및 정책 이슈 관리",
    ],
  },
  {
    icon: "/images/service-plans/icon_3.png",
    name: "수출바우처",
    subtitle: "수출바우처 활용 아마존 진출 패키지",
    description:
      "수출바우처를 활용하여 아마존 진출 혹은 아마존 매출 성장 확대에 필요한 모든 서비스를 제공합니다.",
    target: "수출바우처 선정 대상 브랜드",
    features: [
      "계정 세팅, 브랜드 등록, 카테고리 승인 지원",
      "상세페이지, A+ 콘텐츠, 브랜드 스토어 제작",
      "키워드 리서치 및 SEO 최적화",
      "Amazon Ads 운영 및 성과 개선",
      "재고 관리 및 FBA 물류 운영",
      "CS, 리뷰 관리 및 계정 이슈 대응",
      "데이터 분석 및 성장 전략 수립",
    ],
  },
];

export default function ServicePlans() {
  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="service-plans" className="py-12 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            SERVICE PLANS
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Kglowing Service Plans
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            브랜드사의 글로벌 시장 진출 성숙도에 따라 맞춤형 서비스를 제공합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 flex flex-col h-full"
            >
              {/* Logo 영역 */}
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-5">
                <Image src={plan.icon} alt={plan.name} width={28} height={28} />
              </div>

              <p className="text-xl font-bold text-foreground mb-1">{plan.name}</p>
              <p className="text-primary text-sm font-medium mb-4">{plan.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {plan.description}
              </p>

              {/* 추천 대상 */}
              <div className="bg-zinc-800 rounded-lg px-4 py-2 mb-5">
                <span className="text-xs font-semibold text-muted-foreground">추천 대상: </span>
                <span className="text-xs text-foreground">{plan.target}</span>
              </div>

              {/* 기능 목록 */}
              <ul className="space-y-2 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-primary font-bold mt-0.5 shrink-0">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={handleContact}
                className="w-full h-12 leading-12 px-10 rounded-[30px] font-semibold text-base cursor-pointer flex items-center justify-center gap-2 no-underline"
                style={{
                  background: "linear-gradient(#111, #111) padding-box, linear-gradient(to right, #00e5bd80, #00a1ff80) border-box",
                  WebkitBackgroundClip: "padding-box, border-box",
                  backgroundClip: "padding-box, border-box",
                  border: "1px solid transparent",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(94deg, #00f1c7 -13.42%, #004dff 129.54%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  문의하기
                </span>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
