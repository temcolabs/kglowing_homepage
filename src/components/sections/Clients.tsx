"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "belif", logo: "/images/clients/v2/brand-logo-1_v2.png", w: 145, h: 48 },
  { name: "Sooryehan", logo: "/images/clients/v2/brand-logo-2_v2.png", w: 277, h: 72 },
  { name: "CNP Laboratory", logo: "/images/clients/v2/brand-logo-3_v2.png", w: 318, h: 39 },
  { name: "EUTHYMOL", logo: "/images/clients/v2/brand-logo-4_v2.png", w: 216, h: 42 },
  { name: "ISA KNOX", logo: "/images/clients/v2/brand-logo-5_v2.png", w: 238, h: 39 },
  { name: "Centellian 24", logo: "/images/clients/v2/brand-logo-6_v2.png", w: 279, h: 48 },
  { name: "Lotte Wellfood", logo: "/images/clients/v2/brand-logo-7_v2.png", w: 305, h: 84 },
  { name: "THOME", logo: "/images/clients/v2/brand-logo-8_v2.png", w: 189, h: 36 },
  { name: "LADOR", logo: "/images/clients/v2/brand-logo-9_v2.png", w: 183, h: 39 },
  { name: "MODA MODA", logo: "/images/clients/v2/brand-logo-10_v2.png", w: 156, h: 84 },
  { name: "GD11", logo: "/images/clients/v2/brand-logo-11_v2.png", w: 138, h: 48 },
  { name: "Glampalm", logo: "/images/clients/v2/brand-logo-12_v2.png", w: 264, h: 45 },
  { name: "CLABIANE", logo: "/images/clients/v2/brand-logo-13_v2.png", w: 248, h: 36 },
  { name: "EDML", logo: "/images/clients/v2/brand-logo-14_v2.png", w: 213, h: 51 },
  { name: "FAU", logo: "/images/clients/v2/brand-logo-15_v2.png", w: 117, h: 51 },
  { name: "Taesi.K", logo: "/images/clients/v2/brand-logo-16_v2.png", w: 192, h: 42 },
  { name: "EXOPROXYL", logo: "/images/clients/v2/brand-logo-17_v2.png", w: 261, h: 36 },
  { name: "pure:K", logo: "/images/clients/v2/brand-logo-18_v2.png", w: 198, h: 54 },
  { name: "secret Key", logo: "/images/clients/v2/brand-logo-19_v2.png", w: 236, h: 60 },
  { name: "RISKY", logo: "/images/clients/v2/brand-logo-20_v2.png", w: 141, h: 42 },
  { name: "ROATTI", logo: "/images/clients/v2/brand-logo-21_v2.png", w: 183, h: 42 },
  { name: "let's kared", logo: "/images/clients/v2/brand-logo-22_v2.png", w: 132, h: 78 },
  { name: "BIOCESS", logo: "/images/clients/v2/brand-logo-23_v2.png", w: 225, h: 36 },
  { name: "FEEV", logo: "/images/clients/v2/brand-logo-24_v2.png", w: 172, h: 33 },
  { name: "OLLOCDAM", logo: "/images/clients/v2/brand-logo-25_v2.png", w: 252, h: 45 },
  { name: "ROOTONIX", logo: "/images/clients/v2/brand-logo-26_v2.png", w: 248, h: 33 },
  { name: "Olhaeyoung", logo: "/images/clients/v2/brand-logo-27_v2.png", w: 144, h: 144 },
  { name: "anok", logo: "/images/clients/v2/brand-logo-28_v2.png", w: 153, h: 54 },
  { name: "SERUMKIND", logo: "/images/clients/v2/brand-logo-29_v2.png", w: 336, h: 42 },
  { name: "LALARECIPE", logo: "/images/clients/v2/brand-logo-30_v2.png", w: 288, h: 33 },
  { name: "RAWDIVE", logo: "/images/clients/v2/brand-logo-31_v2.png", w: 225, h: 36 },
  { name: "UmbraPhil", logo: "/images/clients/v2/brand-logo-32_v2.png", w: 250, h: 51 },
  { name: "CLERIVY", logo: "/images/clients/v2/brand-logo-33_v2.png", w: 243, h: 39 },
  { name: "ilso", logo: "/images/clients/v2/brand-logo-34_v2.png", w: 111, h: 54 },
  { name: "LABO-H", logo: "/images/clients/v2/brand-logo-35_v2.png", w: 201, h: 36 },
  { name: "lilyeve", logo: "/images/clients/v2/brand-logo-36_v2.png", w: 180, h: 57 },
  { name: "roobliss", logo: "/images/clients/v2/brand-logo-37_v2.png", w: 198, h: 42 },
  { name: "TITAD", logo: "/images/clients/v2/brand-logo-38_v2.png", w: 138, h: 33 },
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
                width={Math.round(client.w / 3)}
                height={Math.round(client.h / 3)}
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
