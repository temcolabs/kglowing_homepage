# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 프로젝트 개요

KGlowing 홈페이지 — 아마존 글로벌 셀링 파트너 회사의 단일 페이지(SPA) 기업 소개 웹사이트. 한국어 사이트이며 섹션 간 스무스 스크롤 네비게이션 적용.

## 명령어

- `npm run dev` — 개발 서버 실행 (Next.js)
- `npm run build` — 프로덕션 빌드
- `npm run lint` — ESLint 실행 (flat config, Next.js core-web-vitals + TypeScript 규칙)
- 테스트 프레임워크는 설정되어 있지 않음

## 기술 스택

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/postcss` 사용, `tailwind.config.ts` 없음 — 테마는 `src/app/globals.css`에서 `@theme inline`으로 정의)
- **Framer Motion** — 스크롤 애니메이션 및 카운트업 효과
- **React Hook Form** + **Zod** — 폼 유효성 검증
- **폰트**: Noto Sans KR + Open Sans (`next/font/google` 사용)
- 배포: **Vercel**

## 아키텍처

단일 페이지 앱 — `src/app/page.tsx`가 `"use client"` 컴포넌트로, 모든 섹션을 순서대로 조합: Navigation → Hero → About → Services → Stats → Portfolio → Contact → Footer.

### 주요 디렉토리
- `src/components/sections/` — 페이지 섹션 컴포넌트 (Hero, About, Services, Stats, Portfolio, Contact)
- `src/components/layout/` — Navigation (sticky 헤더 + 모바일 햄버거 메뉴) 및 Footer
- `src/components/ui/` — 재사용 가능한 UI 컴포넌트 (Button, SectionTitle, CountUp)
- `src/lib/validations.ts` — 문의 폼용 Zod 스키마, 클라이언트와 API 라우트에서 공유
- `src/types/index.ts` — 공통 TypeScript 인터페이스 (ServiceItem, StatItem, NavItem, ContactFormData)
- `src/app/api/contact/route.ts` — 문의 폼 POST 엔드포인트 (현재 로그만 출력, 이메일 연동 TODO)

### 스타일링 규칙
- 디자인 토큰은 `globals.css`의 `:root`에 CSS 커스텀 속성으로 정의, `@theme inline`을 통해 Tailwind에 매핑
- 주요 색상: `--primary` (파란색), `--secondary` (주황색), `--accent` (시안)
- 경로 별칭: `@/*` → `./src/*`

### 폼 유효성 검증
- `src/lib/validations.ts`의 Zod 스키마가 단일 진실 공급원(single source of truth)으로, 클라이언트(React Hook Form `@hookform/resolvers`)와 서버(API 라우트) 양쪽에서 사용
- 모든 유효성 검증 메시지는 한국어
