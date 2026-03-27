"use client";

import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-theme="light"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl border border-[#e2e8f0] shadow-xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 - sticky */}
            <div className="flex items-center justify-between px-6 py-5 md:px-8 border-b border-[#e2e8f0]">
              <h2 className="text-xl font-bold text-[#0f172a]">개인정보처리방침</h2>
              <button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#f1f5f9] transition-colors cursor-pointer bg-transparent border-0 text-[#64748b] hover:text-[#0f172a]"
                aria-label="닫기"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* 스크롤 영역 */}
            <div className="overflow-y-auto flex-1 p-6 md:px-8 md:pb-8 pt-4">
            <div className="text-sm text-[#334155] space-y-6 leading-relaxed">
              <p>
                주식회사 구하다(이하 &lsquo;회사&rsquo;)는 고객님의 개인정보를 중요시하며,
                「개인정보 보호법」 및 「정보통신망 이용촉진 및 정보보호에 관한 법률」을
                준수하고 있습니다.
              </p>
              <p>
                회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한
                용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가
                취해지고 있는지 알려드립니다.
              </p>
              <p>
                회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을
                통하여 공지할 것입니다.
              </p>
              <p className="font-medium">본 방침은 2026년 03월 23일부터 시행됩니다.</p>

              {/* 1조 */}
              <div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  1. 수집하는 개인정보 항목
                </h3>
                <p>
                  회사는 상담 및 서비스 문의를 위해 아래와 같은 개인정보를 수집하고
                  있습니다.
                </p>
                <div className="mt-2 pl-1">
                  <p className="font-semibold">온라인 문의</p>
                  <p>
                    - 수집항목 : 브랜드명(또는 홈페이지 주소), 성함, 연락처, 이메일,
                    아마존 입점 여부, 희망 서비스, 문의 내용
                  </p>
                </div>
              </div>

              {/* 2조 */}
              <div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  2. 개인정보의 수집 및 이용목적
                </h3>
                <p>
                  회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                </p>
                <p className="mt-1">
                  - 서비스 문의 접수 및 상담 회신
                  <br />- 아마존 글로벌 셀링 관련 서비스 안내
                </p>
              </div>

              {/* 3조 */}
              <div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  3. 개인정보의 보유 및 이용기간
                </h3>
                <p>
                  원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를
                  지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는
                  경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 개인정보를
                  보관합니다.
                </p>
                <ul className="mt-2 space-y-1 pl-1">
                  <li>
                    - 계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의
                    소비자보호에 관한 법률)
                  </li>
                  <li>
                    - 대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의
                    소비자보호에 관한 법률)
                  </li>
                  <li>
                    - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
                    (전자상거래등에서의 소비자보호에 관한 법률)
                  </li>
                </ul>
              </div>

              {/* 4조 */}
              <div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  4. 개인정보의 파기절차 및 방법
                </h3>
                <p>
                  회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
                  정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
                </p>
                <div className="mt-2">
                  <p className="font-semibold">파기절차</p>
                  <p>
                    고객님이 문의를 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로
                    옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정
                    기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한
                    경우가 아니고서는 보유 이외의 다른 목적으로 이용되지 않습니다.
                  </p>
                </div>
                <div className="mt-2">
                  <p className="font-semibold">파기방법</p>
                  <p>
                    전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
                    방법을 사용하여 삭제합니다.
                  </p>
                </div>
              </div>

              {/* 5조 */}
              <div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  5. 개인정보 제공
                </h3>
                <p>
                  회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만,
                  아래의 경우에는 예외로 합니다.
                </p>
                <ul className="mt-1 space-y-1 pl-1">
                  <li>- 이용자가 사전에 동의한 경우</li>
                  <li>
                    - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
                    방법에 따라 수사기관의 요구가 있는 경우
                  </li>
                </ul>
              </div>

              {/* 6조 */}
              <div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  6. 개인정보 처리 위탁
                </h3>
                <p>
                  회사는 서비스 이행을 위해 아래와 같이 외부 전문업체에 위탁하여
                  운영하고 있습니다.
                </p>
                <ul className="mt-1 space-y-1 pl-1">
                  <li>- 위탁 대상자 : Microsoft Corporation</li>
                  <li>- 위탁업무 내용 : 문의 접수 이메일 발송</li>
                </ul>
              </div>

              {/* 7조 */}
              <div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  7. 이용자의 권리와 그 행사방법
                </h3>
                <p>
                  이용자는 언제든지 수집된 자신의 개인정보를 조회하거나 수정할 수
                  있으며, 수집·이용에 대한 동의 철회를 요청할 수 있습니다.
                </p>
                <p className="mt-1">
                  개인정보의 조회, 수정 또는 동의 철회를 원하시는 경우
                  개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이
                  조치하겠습니다.
                </p>
                <p className="mt-1">
                  개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기
                  전까지 당해 개인정보를 이용 또는 제공하지 않습니다.
                </p>
              </div>

              {/* 8조 */}
              <div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  8. 개인정보 자동수집 장치의 설치·운영 및 거부에 관한 사항
                </h3>
                <p>
                  회사는 이용자의 정보를 수시로 저장하고 찾아내는
                  &lsquo;쿠키(cookie)&rsquo; 등을 운용할 수 있습니다. 쿠키란
                  웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 아주
                  작은 텍스트 파일로서 컴퓨터 하드디스크에 저장됩니다.
                </p>
                <div className="mt-2">
                  <p className="font-semibold">쿠키 사용 목적</p>
                  <p>
                    이용자의 접속 빈도나 방문 시간 등을 분석하여 서비스 개선에
                    활용합니다.
                  </p>
                </div>
                <div className="mt-2">
                  <p className="font-semibold">쿠키 설정 거부 방법</p>
                  <p>
                    웹 브라우저의 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가
                    저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수
                    있습니다. 단, 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이
                    있을 수 있습니다.
                  </p>
                </div>
              </div>

              {/* 9조 */}
              <div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">
                  9. 개인정보에 관한 민원서비스
                </h3>
                <p>
                  회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기
                  위하여 아래와 같이 개인정보관리책임자를 지정하고 있습니다.
                </p>
                <div className="mt-2 p-3 bg-[#f1f5f9] rounded-lg space-y-1">
                  <p className="font-semibold">개인정보관리 책임자</p>
                  <p>성명 : 윤재섭</p>
                  <p>전화번호 : 02-2038-8823</p>
                  <p>이메일 : official@kglowing.com</p>
                </div>
                <p className="mt-3">
                  기타 개인정보 침해에 대한 신고나 상담이 필요한 경우에 아래 기관에
                  문의하실 수 있습니다.
                </p>
                <ul className="mt-1 space-y-1 pl-1">
                  <li>
                    - 개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)
                  </li>
                  <li>
                    - 대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)
                  </li>
                  <li>
                    - 경찰청 사이버수사국 (police.go.kr / 국번없이 182)
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
