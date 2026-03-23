"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/brand-main-1.mov"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal text-white leading-tight mb-6 font-(family-name:--font-iowan-old-style)"
        >
          A Trusted Full-Service
          <br />
          Amazon Agency
          <br />
          for High Growth
          <br />
          Ecommerce Brands
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-3"
        >
          Kglowing은 아마존 성장을 가장 잘 이해하는 전문 파트너로서, 전략부터 실행까지
          <br className="hidden sm:block" />
          모든 과정을 통합적으로 지원합니다.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          글로벌 진출에 필요한 모든 전략을 토탈 올인원 솔루션으로 제공합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <button
            onClick={handleContactClick}
            className="mx-auto flex items-center justify-center w-36 sm:w-40 h-11 sm:h-12 rounded-full text-white font-semibold text-sm sm:text-base uppercase cursor-pointer border-0 appearance-none"
            style={{
              background: "linear-gradient(93deg, #00ffd2b3 -1.1%, #00a1ffb3 101.31%)",
            }}
          >
            문의하기
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-px h-8 bg-linear-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
