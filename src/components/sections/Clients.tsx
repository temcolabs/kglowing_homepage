"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "CNP Laboratory", logo: "/images/clients/cnp-laboratory.png", w: 345, h: 45 },
  { name: "Sooryehan", logo: "/images/clients/sooryehan.png", w: 323, h: 84 },
  { name: "belif", logo: "/images/clients/belif.png", w: 174, h: 60 },
  { name: "Glint", logo: "/images/clients/glint.png", w: 156, h: 81 },
  { name: "EUTHYMOL", logo: "/images/clients/euthymol.png", w: 273, h: 57 },
  { name: "Anua", logo: "/images/clients/anua.png", w: 162, h: 54 },
  { name: "mise en scene", logo: "/images/clients/mise-en-scene.png", w: 270, h: 48 },
  { name: "ILLIYOON", logo: "/images/clients/illiyoon.png", w: 249, h: 36 },
  { name: "Hince", logo: "/images/clients/hince.png", w: 159, h: 48 },
  { name: "Laka", logo: "/images/clients/laka.png", w: 117, h: 45 },
  { name: "Bebesup", logo: "/images/clients/bebesup.png", w: 210, h: 57 },
  { name: "iunik", logo: "/images/clients/iunik.png", w: 183, h: 90 },
  { name: "cepoLAB", logo: "/images/clients/cepolab.png", w: 225, h: 72 },
  { name: "LOE", logo: "/images/clients/loe.png", w: 114, h: 45 },
  { name: "Moda Moda", logo: "/images/clients/moda-moda.png", w: 156, h: 84 },
  { name: "THE TOOL LAB", logo: "/images/clients/the-tool-lab.png", w: 267, h: 42 },
  { name: "Clime Beauty", logo: "/images/clients/clime-beauty.png", w: 180, h: 66 },
  { name: "Glampalm", logo: "/images/clients/glampalm.png", w: 264, h: 45 },
  { name: "GROWUS", logo: "/images/clients/growus.png", w: 221, h: 39 },
  { name: "FROM LABS", logo: "/images/clients/fromlabs.png", w: 153, h: 60 },
  { name: "MBA", logo: "/images/clients/mba.png", w: 144, h: 45 },
  { name: "Hersteller", logo: "/images/clients/hersteller.png", w: 258, h: 48 },
  { name: "EXOPROXYL", logo: "/images/clients/exoproxyl.png", w: 237, h: 33 },
  { name: "Cellology", logo: "/images/clients/cellology.png", w: 261, h: 69 },
  { name: "Deoproce", logo: "/images/clients/deoproce.png", w: 264, h: 33 },
  { name: "FROMNATURE", logo: "/images/clients/fromnature.png", w: 289, h: 33 },
  { name: "Parnell", logo: "/images/clients/parnell.png", w: 167, h: 39 },
  { name: "THANK YOU FARMER", logo: "/images/clients/thank-you-farmer.png", w: 360, h: 35 },
  { name: "HAESOOL", logo: "/images/clients/haesool.png", w: 234, h: 33 },
  { name: "fromforet", logo: "/images/clients/fromforet.png", w: 206, h: 48 },
  { name: "Bephor", logo: "/images/clients/bephor.png", w: 175, h: 54 },
  { name: "Dr.G", logo: "/images/clients/dr-g.png", w: 108, h: 54 },
  { name: "JMW", logo: "/images/clients/jmw.png", w: 159, h: 33 },
  { name: "Lador", logo: "/images/clients/lador.png", w: 183, h: 39 },
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
