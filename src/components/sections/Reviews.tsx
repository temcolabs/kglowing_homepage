"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    content:
      "서비스 진행하면서 브랜드에 신경 많이 써주시고 의사소통이 너무 만족스러웠습니다. 가격도 적절한것 같고 수출업무 하면서 도움이 많이 되었습니다.",
  },
  {
    content:
      "내 브랜드처럼 오너십을 가지고 업무를 진행해 주셔서 만족합니다.\n덕분에 매출 많이 상승시켰습니다.\n신경써주셔서 감사합니다.",
  },
  {
    content:
      "Kglowing 서비스 전반에 대해 매우 만족합니다.\n모든 담당자분들이 친절하게 안내해 주셔서 진행 과정이 매우 수월했습니다.\n앞으로도 신뢰하고 계속 이용할 수 있을 것 같습니다.",
  },
];

export default function Reviews() {
  return (
    <section id="success-cases" className="py-16 md:py-28 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            SUCCESS CASES
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            고객 만족이 곧 성과입니다
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Kglowing의 모든 성공 사례는 브랜드사와의 신뢰와 협업 그리고 실제 성과에서 시작됩니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 flex flex-col gap-4"
            >
              {/* 별점 */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* 내용 */}
              <p className="text-foreground text-sm leading-relaxed whitespace-pre-line flex-1">
                &ldquo;{review.content}&rdquo;
              </p>

              {/* 인증 */}
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">V</span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">Verified Customer</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
