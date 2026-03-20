"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "아마존 제품 런칭 (인증 완료 기준)", value: "평균 1개월" },
  { label: "아마존 평균 매출 성장률", value: "1,500%+" },
  { label: "Kglowing과 함께한 브랜드 수", value: "100+" },
  { label: "수출바우처 수행기관 만족도", value: "9.9" },
];

const items = [
  {
    tagline: "GLOBAL BRAND ACCELERATOR",
    title: "글로벌 브랜드 성장을 위한\n액셀레이팅 솔루션",
    description:
      "국내 브랜드의 글로벌 브랜드 도약을 위해 글로벌 진출 제품 인허가부터 아마존 등 글로벌 유통 플랫폼 입점 및 운영, 현지 마케팅 및 물류까지 원스톱으로 지원합니다.",
    image: "/images/about/img01_1280.png",
    imageAlt: "아마존 로고가 표시된 글로벌 지구본",
  },
  {
    tagline: "GLOBAL ECOMMERCE",
    title: "아마존부터 틱톡까지\n국내외 모든 이커머스 연결",
    description:
      "아마존과 틱톡 등 국내 외 모든 채널을 연결해 브랜드가 글로벌 이커머스 시장에서 빠르고 안정적으로 성장하도록 지원합니다.",
    image: "/images/about/img02_1280.png",
    imageAlt:
      "Kglowing을 중심으로 Amazon, TikTok, Walmart 등 글로벌 이커머스 플랫폼 연결 다이어그램",
  },
  {
    tagline: "YOUR GLOBAL TEAM",
    title: "당신의 글로벌 비지니스를 위한\n든든한 팀",
    description:
      "해외팀이 따로 없어도 걱정 마세요. 케이글로잉이 브랜드의 글로벌 진출 전략부터 현지 마케팅, 운영까지 전 과정을 함께 고민하며 책임지겠습니다.",
    image: "/images/about/img05_1280.png",
    imageAlt: "미국, 유럽, 중동, 한국, 호주 등 글로벌 팀 네트워크 지도",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-zinc-950 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 섹션별 교차 레이아웃 */}
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {items.map((item, index) => {
            const content = (
              <motion.div
                key={item.tagline}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col gap-8 md:gap-12 items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* 이미지 */}
                <div className="w-full md:w-1/2 shrink-0">
                  <motion.div
                    className="relative mx-auto max-w-sm md:max-w-none"
                    animate={
                      index === 0
                        ? { scale: [1, 1.05, 1] }
                        : undefined
                    }
                    transition={
                      index === 0
                        ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        : undefined
                    }
                  >
                    {/* 두 번째 이미지 글로우 효과 */}
                    {index === 1 && (
                      <motion.div
                        className="absolute -inset-4 rounded-full blur-2xl bg-cyan-500/20"
                        animate={{
                          opacity: [0.3, 0.7, 0.3],
                          scale: [0.95, 1.05, 0.95],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={640}
                      height={640}
                      className="relative w-full h-auto"
                      priority={index === 0}
                    />
                  </motion.div>
                </div>

                {/* 텍스트 */}
                <div className="w-full md:w-1/2">
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
                    {item.tagline}
                  </p>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-tight whitespace-pre-line text-white">
                    {item.title}
                  </h2>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );

            {/* 1번 아이템 + Stats를 하나의 그룹으로 묶어 space-y가 그룹 단위로 적용되게 함 */}
            if (index === 0) {
              return (
                <div key={item.tagline} className="space-y-8 md:space-y-12">
                  {content}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                  >
                    {stats.map((stat, statIndex) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: statIndex * 0.1 }}
                        className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 md:p-6 text-center"
                      >
                        <p className="w-fit mx-auto bg-linear-to-r from-[#00ffdc] to-[#00a1ff] bg-clip-text text-transparent font-bold text-2xl md:text-3xl leading-tight">
                          {stat.value}
                        </p>
                        <p className="text-zinc-400 text-xs mt-2 leading-snug">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              );
            }

            return content;
          })}
        </div>


      </div>
    </section>
  );
}
