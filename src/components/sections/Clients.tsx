"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/** w, h: 2x PNG 픽셀 크기 (렌더 시 1/2) */
const clients = [
  { name: "CNP Laboratory", logo: "/images/clients/v3/brand-logo-1_v3.png", w: 212, h: 26 },
  { name: "Sooryehan", logo: "/images/clients/v3/brand-logo-2_v3.png", w: 184, h: 48 },
  { name: "belif", logo: "/images/clients/v3/brand-logo-3_v3.png", w: 96, h: 32 },
  { name: "ISA KNOX", logo: "/images/clients/v3/brand-logo-4_v3.png", w: 158, h: 26 },
  { name: "THOME", logo: "/images/clients/v3/brand-logo-5_v3.png", w: 136, h: 26 },
  { name: "LADOR", logo: "/images/clients/v3/brand-logo-6_v3.png", w: 122, h: 26 },
  { name: "Glampalm", logo: "/images/clients/v3/brand-logo-7_v3.png", w: 176, h: 30 },
  { name: "Taesi.K", logo: "/images/clients/v3/brand-logo-8_v3.png", w: 128, h: 28 },
  { name: "EXOPROXYL", logo: "/images/clients/v3/brand-logo-9_v3.png", w: 174, h: 24 },
  { name: "secret Key", logo: "/images/clients/v3/brand-logo-10_v3.png", w: 158, h: 40 },
  { name: "RISKY", logo: "/images/clients/v3/brand-logo-11_v3.png", w: 94, h: 28 },
  { name: "let's kared", logo: "/images/clients/v3/brand-logo-12_v3.png", w: 88, h: 52 },
  { name: "ROATTI", logo: "/images/clients/v3/brand-logo-13_v3.png", w: 122, h: 28 },
  { name: "EDML", logo: "/images/clients/v3/brand-logo-14_v3.png", w: 142, h: 34 },
  { name: "FAU", logo: "/images/clients/v3/brand-logo-15_v3.png", w: 72, h: 32 },
  { name: "동해형제", logo: "/images/clients/v3/brand-logo-16_v3.png", w: 96, h: 96 },
  { name: "FEEV", logo: "/images/clients/v3/brand-logo-17_v3.png", w: 114, h: 22 },
  { name: "ROOTONIX", logo: "/images/clients/v3/brand-logo-18_v3.png", w: 165, h: 22 },
  { name: "Huxley", logo: "/images/clients/v3/brand-logo-19_v3.png", w: 104, h: 40 },
  { name: "UmbraPhil", logo: "/images/clients/v3/brand-logo-20_v3.png", w: 166, h: 34 },
  { name: "CLABIANE", logo: "/images/clients/v3/brand-logo-21_v3.png", w: 166, h: 24 },
  { name: "hersteller", logo: "/images/clients/v3/brand-logo-22_v3.png", w: 180, h: 34 },
  { name: "SHURINK HOME", logo: "/images/clients/v3/brand-logo-23_v3.png", w: 180, h: 48 },
  { name: "alternative stereo", logo: "/images/clients/v3/brand-logo-24_v3.png", w: 178, h: 44 },
  { name: "CELLTRION", logo: "/images/clients/v3/brand-logo-25_v3.png", w: 180, h: 46 },
  { name: "IUNIK", logo: "/images/clients/v3/brand-logo-26_v3.png", w: 140, h: 68 },
  { name: "ilso", logo: "/images/clients/v3/brand-logo-27_v3.png", w: 74, h: 36 },
  { name: "lilyeve", logo: "/images/clients/v3/brand-logo-28_v3.png", w: 128, h: 40 },
  { name: "OSULLOC", logo: "/images/clients/v3/brand-logo-29_v3.png", w: 180, h: 26 },
  { name: "LABO-H", logo: "/images/clients/v3/brand-logo-30_v3.png", w: 134, h: 24 },
  { name: "mise en scène", logo: "/images/clients/v3/brand-logo-31_v3.png", w: 180, h: 32 },
  { name: "ILLIYOON", logo: "/images/clients/v3/brand-logo-32_v3.png", w: 160, h: 24 },
];

/** 브레이크포인트별 교차 행 패턴: [짧은행, 긴행] */
const ROW_PATTERN = { sm: [3, 4], md: [4, 5], lg: [5, 6] } as const;

function buildRows(items: typeof clients, pattern: readonly [number, number]) {
  const rows: (typeof clients)[] = [];
  let idx = 0;
  let isShort = true;
  while (idx < items.length) {
    const count = isShort ? pattern[0] : pattern[1];
    rows.push(items.slice(idx, idx + count));
    idx += count;
    isShort = !isShort;
  }
  return rows;
}

export default function Clients() {
  const smRows = buildRows(clients, ROW_PATTERN.sm);
  const mdRows = buildRows(clients, ROW_PATTERN.md);
  const lgRows = buildRows(clients, ROW_PATTERN.lg);

  const renderRows = (rows: (typeof clients)[], maxPerRow: number) =>
    rows.map((row, rowIdx) => (
      <div
        key={rowIdx}
        className="flex justify-center gap-2 sm:gap-3"
      >
        {row.map((client) => (
          <div
            key={client.name}
            className="flex items-center justify-center rounded-[10px] grayscale hover:grayscale-0 transition-all duration-300"
            style={{
              width: `calc((100% - ${(maxPerRow - 1) * 12}px) / ${maxPerRow})`,
              height: 0,
              paddingBottom: `calc((100% - ${(maxPerRow - 1) * 12}px) / ${maxPerRow} * 0.48)`,
              position: "relative",
              background:
                "linear-gradient(180deg, rgba(34, 34, 34, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          >
            <div className="absolute inset-[25%] sm:inset-[12%] flex items-center justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={Math.round(client.w / 2)}
                height={Math.round(client.h / 2)}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          </div>
        ))}
      </div>
    ));

  return (
    <section id="clients" className="py-16 md:py-28 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            Clients with Kglowing
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Kglowing 과 함께하고 있는 브랜드 
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-2 sm:gap-3"
        >
          {/* 모바일: 3/4 교차 */}
          <div className="flex flex-col gap-2 sm:hidden">
            {renderRows(smRows, 4)}
          </div>
          {/* sm~md: 4/5 교차 */}
          <div className="hidden sm:flex sm:flex-col sm:gap-3 lg:hidden">
            {renderRows(mdRows, 5)}
          </div>
          {/* lg+: 5/6 교차 (원본) */}
          <div className="hidden lg:flex lg:flex-col lg:gap-3">
            {renderRows(lgRows, 6)}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
