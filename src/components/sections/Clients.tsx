"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Brand 1", logo: "/images/clients/brand-1.png", w: 162, h: 54 },
  { name: "Brand 2", logo: "/images/clients/brand-2.png", w: 270, h: 48 },
  { name: "Brand 3", logo: "/images/clients/brand-3.png", w: 249, h: 36 },
  { name: "Brand 4", logo: "/images/clients/brand-4.png", w: 159, h: 48 },
  { name: "Brand 5", logo: "/images/clients/brand-5.png", w: 117, h: 45 },
  { name: "Brand 6", logo: "/images/clients/brand-6.png", w: 210, h: 57 },
  { name: "Brand 7", logo: "/images/clients/brand-7.png", w: 183, h: 90 },
  { name: "Brand 8", logo: "/images/clients/brand-8.png", w: 225, h: 72 },
  { name: "Brand 9", logo: "/images/clients/brand-9.png", w: 114, h: 45 },
  { name: "Brand 10", logo: "/images/clients/brand-10.png", w: 156, h: 84 },
  { name: "Brand 11", logo: "/images/clients/brand-11.png", w: 267, h: 42 },
  { name: "Brand 12", logo: "/images/clients/brand-12.png", w: 180, h: 66 },
  { name: "Brand 14", logo: "/images/clients/brand-14.png", w: 264, h: 45 },
  { name: "Brand 15", logo: "/images/clients/brand-15.png", w: 221, h: 39 },
  { name: "Brand 16", logo: "/images/clients/brand-16.png", w: 153, h: 60 },
  { name: "Brand 17", logo: "/images/clients/brand-17.png", w: 228, h: 57 },
  { name: "Brand 18", logo: "/images/clients/brand-18.png", w: 144, h: 45 },
  { name: "Brand 19", logo: "/images/clients/brand-19.png", w: 258, h: 48 },
  { name: "Brand 20", logo: "/images/clients/brand-20.png", w: 237, h: 33 },
  { name: "Brand 21", logo: "/images/clients/brand-21.png", w: 261, h: 69 },
  { name: "Brand 22", logo: "/images/clients/brand-22.png", w: 264, h: 33 },
  { name: "Brand 23", logo: "/images/clients/brand-23.png", w: 289, h: 33 },
  { name: "Brand 24", logo: "/images/clients/brand-24.png", w: 297, h: 57 },
  { name: "Brand 25", logo: "/images/clients/brand-25.png", w: 285, h: 39 },
  { name: "Brand 26", logo: "/images/clients/brand-26.png", w: 165, h: 51 },
  { name: "Brand 27", logo: "/images/clients/brand-27.png", w: 198, h: 54 },
  { name: "Brand 28", logo: "/images/clients/brand-28.png", w: 167, h: 39 },
  { name: "Brand 31", logo: "/images/clients/brand-31.png", w: 360, h: 35 },
  { name: "Brand 32", logo: "/images/clients/brand-32.png", w: 234, h: 33 },
  { name: "Brand 33", logo: "/images/clients/brand-33.png", w: 206, h: 48 },
  { name: "Brand 34", logo: "/images/clients/brand-34.png", w: 175, h: 54 },
  { name: "Brand 35", logo: "/images/clients/brand-35.png", w: 108, h: 54 },
  { name: "JMW", logo: "/images/clients/jmw.png", w: 159, h: 33 },
  { name: "Lador", logo: "/images/clients/lador.png", w: 183, h: 39 },
  { name: "Superpaw", logo: "/images/clients/superpaw.png", w: 177, h: 63 },
  { name: "Taesi", logo: "/images/clients/taesi_k.png", w: 192, h: 42 },
  { name: "Thome", logo: "/images/clients/thome_w.png", w: 189, h: 36 },
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
            <div className="absolute inset-[15%] sm:inset-[12%] flex items-center justify-center">
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
    <section id="clients" className="py-12 md:py-20 bg-background">
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
