# KGlowing Homepage - 프로젝트 플랜

## 개요

회사 소개 단일 페이지(Single Page) 웹사이트.
참고 사이트: [jadenglobal.com](https://jadenglobal.com/default/)
스택: **Next.js + TypeScript**, 배포: **Vercel**

---

## 1. 사이트 구조 (섹션 구성)

단일 페이지, 상단 네비게이션 클릭 시 해당 섹션으로 스무스 스크롤.

| # | 섹션 | 설명 |
|---|------|------|
| 1 | **Navigation** | 고정(sticky) 상단바. 로고 + 메뉴(섹션 앵커 링크). 모바일 시 햄버거 메뉴 |
| 2 | **Hero** | 메인 비주얼. 회사 슬로건/핵심 메시지 + CTA 버튼 |
| 3 | **About** | 회사 소개. 비전/미션, 핵심 가치 등 |
| 4 | **Services** | 서비스 소개 카드 그리드 (6개 내외). 아이콘 + 제목 + 설명 |
| 5 | **Stats** | 숫자 카운트업 애니메이션 (실적/성과 지표) |
| 6 | **Portfolio / Packages** | 패키지 또는 포트폴리오 섹션 (선택적) |
| 7 | **Contact** | 문의 폼 (아래 상세 스펙 참고) |
| 8 | **Footer** | 회사 정보, 저작권, 개인정보처리방침 링크 |

---

## 2. Contact 폼 상세 스펙

### 입력 필드

| 필드 | 타입 | 필수 |
|------|------|------|
| 브랜드 (회사명) | text input | O |
| 성함 | text input | O |
| 연락처 | tel input | O |
| 이메일 | email input | O |
| 아마존 입점 여부 | select 또는 radio (예/아니오) | O |
| 희망 서비스 | checkbox 그룹 (복수 선택) | O |
| 문의 내용 | textarea | O |
| 파일 첨부 | file input (드래그앤드롭 지원) | X |

### 하단 요소
- **개인정보 수집 및 이용 동의** 체크박스 (약관 텍스트 표시/토글)
- **전송** 버튼

### 희망 서비스 체크박스 옵션 (예시, 실제 콘텐츠에 맞게 조정)
- [ ] 아마존 셀링
- [ ] 아마존 마케팅
- [ ] 광고 관리
- [ ] 물류 관리
- [ ] 최적화 서비스
- [ ] 데이터 분석

### 폼 전송 처리
- Next.js API Route (`/api/contact`)로 POST
- 서버 측 유효성 검증
- 파일 업로드 처리 (FormData)
- 이메일 발송 연동 (Nodemailer 또는 외부 서비스) — 추후 결정
- 전송 성공/실패 토스트 알림

---

## 3. 기술 스택

| 구분 | 기술 |
|------|------|
| 프레임워크 | Next.js 14+ (App Router) |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS |
| 애니메이션 | Framer Motion (스크롤 애니메이션, 카운트업) |
| 폼 관리 | React Hook Form + Zod (유효성 검증) |
| 배포 | Vercel |
| 폰트 | Noto Sans KR + 영문 폰트 (Google Fonts) |

---

## 4. 반응형 디자인

### 브레이크포인트 (Tailwind 기본)

| 이름 | 최소 너비 | 대상 |
|------|-----------|------|
| sm | 640px | 모바일 가로 |
| md | 768px | 태블릿 |
| lg | 1024px | 소형 데스크탑 |
| xl | 1280px | 대형 데스크탑 |

### 반응형 주요 포인트
- **Navigation**: PC → 가로 메뉴 / 모바일 → 햄버거 + 슬라이드 메뉴
- **Hero**: 텍스트 크기·여백 축소, 이미지 비율 조정
- **Services 카드**: PC → 3열 그리드 / 태블릿 → 2열 / 모바일 → 1열
- **Stats**: PC → 가로 4열 / 모바일 → 2열 그리드
- **Contact 폼**: PC → 2열 레이아웃 / 모바일 → 1열 스택
- **Footer**: PC → 가로 배치 / 모바일 → 세로 스택

---

## 5. 디렉토리 구조

```
kglowing-homepage/
├── public/
│   ├── images/          # 로고, 히어로 이미지, 서비스 아이콘 등
│   └── fonts/           # (필요 시 로컬 폰트)
├── src/
│   ├── app/
│   │   ├── layout.tsx   # 루트 레이아웃 (폰트, 메타데이터)
│   │   ├── page.tsx     # 메인 페이지 (섹션 조합)
│   │   ├── globals.css  # Tailwind 설정 + 글로벌 스타일
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts  # Contact 폼 API
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Stats.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── SectionTitle.tsx
│   │       └── CountUp.tsx
│   ├── lib/
│   │   └── validations.ts  # Zod 스키마
│   └── types/
│       └── index.ts        # 공통 타입 정의
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── package.json
└── PLAN.md
```

---

## 6. 구현 순서

### Phase 1: 프로젝트 셋업
- [ ] Next.js + TypeScript 프로젝트 생성
- [ ] Tailwind CSS 설정
- [ ] 폰트 설정 (Noto Sans KR)
- [ ] 기본 레이아웃 구성 (layout.tsx)

### Phase 2: 레이아웃 & 네비게이션
- [ ] Navigation 컴포넌트 (sticky, 스무스 스크롤, 모바일 햄버거)
- [ ] Footer 컴포넌트

### Phase 3: 콘텐츠 섹션
- [ ] Hero 섹션
- [ ] About 섹션
- [ ] Services 섹션 (카드 그리드)
- [ ] Stats 섹션 (카운트업 애니메이션)

### Phase 4: Contact 폼
- [ ] 폼 UI 구현 (React Hook Form)
- [ ] 유효성 검증 (Zod)
- [ ] 파일 업로드 UI
- [ ] 개인정보 동의 체크박스
- [ ] API Route 구현 (`/api/contact`)
- [ ] 전송 성공/실패 처리

### Phase 5: 반응형 & 폴리싱
- [ ] 전체 반응형 QA (모바일/태블릿/데스크탑)
- [ ] 스크롤 애니메이션 추가 (Framer Motion)
- [ ] SEO 메타태그 설정
- [ ] OG 이미지 설정

### Phase 6: 배포
- [ ] Vercel 연동 및 배포
- [ ] 도메인 연결 (필요 시)
- [ ] Contact 이메일 발송 연동

---

## 7. 참고 사이트 분석 요약 (jadenglobal.com)

| 항목 | 내용 |
|------|------|
| 유형 | 아마존 이커머스 파트너 회사 소개 |
| 구조 | Hero → 회사소개 → 숫자 통계 → 서비스(6개 카드) → 패키지(3단계) → 포트폴리오 → Contact → Footer |
| 디자인 톤 | 기업 이미지 중심, 깔끔하고 보수적인 톤 |
| 애니메이션 | 숫자 카운트업, Swiper 슬라이더, 순차 페이드인 |
| Contact 폼 | 회사명, 담당자, 이메일, 아마존 관련, 파일첨부, 개인정보 동의 |
| 폰트 | Noto Sans KR + Open Sans |

---

## 8. 추후 결정 사항

- [ ] 회사 로고 및 브랜드 컬러 확정
- [ ] 각 섹션 실제 콘텐츠 (텍스트, 이미지) 준비
- [ ] 희망 서비스 체크박스 옵션 목록 확정
- [ ] Contact 폼 전송 후 처리 방식 (이메일 수신 주소, 알림 방식)
- [ ] 개인정보처리방침 약관 텍스트
- [ ] 도메인 정보
