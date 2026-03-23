import type { Metadata } from "next";
import { Noto_Sans_KR, Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const iowanOldStyle = localFont({
  src: "../../public/fonts/IowanOldStyleBTPro-Roman.ttf",
  variable: "--font-iowan-old-style",
  display: "swap",
});

export const metadata: Metadata = {
  title: "글로벌 바이럴 마케팅부터 아마존 성공을 위한 가장 가까운 브랜드 파트너 | 케이글로잉",
  description:
    "국내 브랜드의 글로벌 진출, 검증된 바이럴 전략과 아마존 최적화 솔루션을 통해 확신을 드립니다. 케이글로잉의 맞춤형 파트너십으로 브랜드 성장의 목표를 이루세요.",
  openGraph: {
    title: "글로벌 바이럴 마케팅부터 아마존 성공을 위한 가장 가까운 브랜드 파트너 | 케이글로잉",
    description:
      "국내 브랜드의 글로벌 진출, 검증된 바이럴 전략과 아마존 최적화 솔루션을 통해 확신을 드립니다. 케이글로잉의 맞춤형 파트너십으로 브랜드 성장의 목표를 이루세요.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${notoSansKR.variable} ${openSans.variable} ${iowanOldStyle.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
