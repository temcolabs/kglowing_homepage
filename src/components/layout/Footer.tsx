"use client";

import { useState } from "react";
import Image from "next/image";
import PrivacyPolicyModal from "@/components/ui/PrivacyPolicyModal";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "Service", href: "#service" },
  { label: "Service Plans", href: "#service-plans" },
  { label: "Success Cases", href: "#success-cases" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="bg-card text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <Image src="/logo.png" alt="Kglowing" width={100} height={28} className="mb-4 object-contain w-16 h-auto sm:w-20 md:w-24 invert brightness-0" />
            {/* <p className="text-sm leading-relaxed text-muted-foreground">
              아마존 글로벌 셀링의 전문 파트너로서
              <br />
              브랜드의 성장을 함께 합니다.
            </p> */}
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-foreground font-semibold mb-4 text-sm">바로가기</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Details */}
          <div>
            <p className="text-foreground font-semibold mb-4 text-sm">회사 정보</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>주식회사 구하다<span className="mx-1">ㅣ</span>대표 : 윤재섭</li>
              <li>대표 전화 : 02-558-0412</li>
              <li>메일 : official@kglowing.com</li>
              <li>주소 : 경기도 성남시 분당구 이매로 45, 이수프라자 5층 507호</li>
              <li>사업자 등록번호 : 876-86-01259</li>
              <li>통신판매업자신고 : 2024-성남분당A-0137호</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kglowing. All rights reserved.</p>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-foreground transition-colors cursor-pointer bg-transparent border-0 text-xs text-muted-foreground p-0"
            >
              개인정보처리방침
            </button>
          </div>
        </div>
      </div>

      <PrivacyPolicyModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
    </footer>
  );
}
