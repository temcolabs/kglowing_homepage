"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "service-account",
    title: "Amazon Account Management Service",
  },
  {
    id: "service-advertising",
    title: "Amazon Advertising Optimization Service",
  },
  {
    id: "service-logistics",
    title: "Amazon Logistics and Inventory Management Service (FBA Prep & Packing)",
  },
  {
    id: "service-content",
    title: "Enhanced Brand Content Service\n(Premium A+ Contents 제작, Cataloguing Service)",
  },
];

export default function CoreServices() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="service" className="py-16 md:py-28 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "40px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14 text-center mx-auto"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            CORE SERVICES
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5 max-w-3xl mx-auto">
            Full-Service 아마존 에이전시,<br />Kglowing의 핵심 서비스
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Kglowing은 아마존에서 성공에 필요한 상품 등록, Premium A+ Contents 이미지 제작, SEO, 광고 운영,
            재고 및 FBA 물류, 브랜드 보호, 고객 응대까지 전 과정을 통합적으로 관리합니다.
            분산된 운영을 하나로 연결해 복잡도를 낮추고, 브랜드의 노출과 매출 성장을 체계적으로 지원합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "40px" }}
              transition={{ duration: 0.5, delay: Math.floor(index / 2) * 0.15 }}
              onClick={() => handleScroll(service.id)}
              className="group text-left bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
                    0{index + 1}
                  </p>
                  <h3 className="font-bold text-base sm:text-lg text-foreground leading-snug group-hover:text-primary transition-colors whitespace-pre-line">
                    {service.title}
                  </h3>
                </div>
                <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 text-lg mt-1 shrink-0">
                  →
                </span>
              </div>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}
