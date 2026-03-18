export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">KGlowing</h3>
            <p className="text-sm leading-relaxed">
              아마존 글로벌 셀링의 전문 파트너로서
              <br />
              브랜드의 성장을 함께 합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  회사소개
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  서비스
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li>이메일: contact@kglowing.com</li>
              <li>전화: 02-000-0000</li>
              <li>주소: 서울특별시 강남구</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} KGlowing. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-white transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
