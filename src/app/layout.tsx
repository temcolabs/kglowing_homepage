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
  title: "KGlowing | 아마존 글로벌 셀링 파트너",
  description:
    "KGlowing은 아마존 글로벌 셀링의 전문 파트너입니다. 입점부터 마케팅, 물류, 데이터 분석까지 원스톱 솔루션을 제공합니다.",
  openGraph: {
    title: "KGlowing | 아마존 글로벌 셀링 파트너",
    description:
      "아마존 글로벌 셀링의 전문 파트너. 입점부터 마케팅, 물류, 데이터 분석까지 원스톱 솔루션.",
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
