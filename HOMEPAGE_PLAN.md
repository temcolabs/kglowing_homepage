# KGlowing 홈페이지 재구성 계획서

## 개요

전체 15개 섹션으로 구성된 단일 페이지(SPA).
스타일 레퍼런스: https://kglowing.ai/
아이콘 사용 금지 (이모지는 콘텐츠 텍스트에 한해 허용).

---

## 네비게이션 구조

| 메뉴명 | 연결 섹션 |
|---|---|
| About | 섹션 2~3 |
| Clients | 섹션 4 |
| Service | 섹션 5~9 |
| Service Plans | 섹션 10 |
| Success Cases | 섹션 11~14 |
| Contact | 섹션 15 |

---

## 페이지 구조 및 컴포넌트 매핑

### 컴포넌트 파일 구성 (신규 작성)

```
src/components/sections/
├── Hero.tsx            (섹션 1 — 재작성)
├── About.tsx           (섹션 2 — 재작성)
├── AboutAmazon.tsx     (섹션 3 — 신규)
├── Clients.tsx         (섹션 4 — 재작성)
├── CoreServices.tsx    (섹션 5 — 신규)
├── ServiceSection.tsx  (섹션 6~9 공통 — 신규, props로 데이터 주입)
├── ServicePlans.tsx    (섹션 10 — 신규)
├── Reviews.tsx         (섹션 11 — 신규)
├── CaseStudy1.tsx      (섹션 12 — 신규)
├── CaseStudy2.tsx      (섹션 13 — 신규)
├── Dashboard.tsx       (섹션 14 — 신규)
└── Contact.tsx         (섹션 15 — 기존 유지)

src/data/
└── serviceSections.ts  (섹션 6~9 콘텐츠 데이터 상수 정의)
```

---

## 섹션별 상세 계획

---

### 섹션 1 — Hero
**컴포넌트:** `Hero.tsx`
**id:** `hero`

**레이아웃:**
- 전체 화면(100vh) 배경 — 이미지 또는 영상 자리 (현재는 어두운 딤 처리 배경)
- 콘텐츠를 수직/수평 정중앙 배치
- 배경 위에 오버레이 처리로 텍스트 가독성 확보

**콘텐츠:**
```
제목(h1): A Trusted Full-Service Amazon Agency for High Growth Ecommerce Brands

본문: Kglowing은 아마존 성장을 가장 잘 이해하는 전문 파트너로서,
      전략부터 실행까지 모든 과정을 통합적으로 지원합니다.
      글로벌 진출에 필요한 모든 전략을 토탈 올인원 솔루션으로 제공합니다.

버튼: "문의하기" → #contact 섹션으로 스크롤
```

**구현 포인트:**
- 배경은 `<div>` placeholder (이미지/영상 추후 교체 가능하도록 구조화)
- 버튼 클릭 시 `document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })`

---

### 섹션 2 — About (Global Brand Accelerator)
**컴포넌트:** `About.tsx`
**id:** `about`
**nav 연결:** "About"

**레이아웃:**
- 3개 카테고리 구성
- 1번 카드: 좌우 전체 너비 (또는 상단 크게 배치)
- 2~3번 카드: 나란히 (2열 그리드)

**카드 1 — GLOBAL BRAND ACCELERATOR:**
```
tagline: GLOBAL BRAND ACCELATOR
제목: 글로벌 브랜드 성장을 위한 액셀레이팅 솔루션
설명: 국내 브랜드의 글로벌 브랜드 도약을 위해 글로벌 진출 제품 인허가부터
      아마존 등 글로벌 유통 플랫폼 입점 및 운영, 현지 마케팅 및 물류까지
      원스톱으로 지원합니다.
이미지: placeholder (지구본 이미지 예정)
```

통계 텍스트 (이미지 하단, 강조 스타일):
| 항목 | 값 |
|---|---|
| 아마존 제품 런칭 (인증 완료 기준) | 평균 1개월 |
| 아마존 평균 매출 성장률 | +1,500% |
| Kglowing과 함께한 브랜드 수 | 100+ |
| 수출바우처 수행기관 만족도 | 9.9 |
| 임직원 수 | 50+ |

**카드 2 — GLOBAL ECOMMERCE:**
```
tagline: GLOBAL ECOMMERCE
제목: 아마존부터 틱톡까지 국내외 모든 이커머스 연결
설명: 아마존과 틱톡 등 국내 외 모든 채널을 연결해 브랜드가 글로벌 이커머스
      시장에서 빠르고 안정적으로 성장하도록 지원합니다.
이미지: placeholder
```

**카드 3 — YOUR GLOBAL TEAM:**
```
tagline: YOUR GLOBAL TEAM
제목: 당신의 글로벌 비지니스를 위한 든든한 팀
설명: 해외팀이 따로 없어도 걱정 마세요. 케이글로잉이 브랜드의 글로벌 진출
      전략부터 현지 마케팅, 운영까지 전 과정을 함께 고민하며 책임지겠습니다.
이미지: 딤 처리 placeholder
```

---

### 섹션 3 — AboutAmazon (Why Kglowing?)
**컴포넌트:** `AboutAmazon.tsx`
**id:** `about-amazon`
**nav 연결:** "About" (2~3 섹션 포함)

**레이아웃:**
- 상단: 제목 + 설명 + 이미지(딤 placeholder)
- 하단: 대제목 + 소제목 + 4개 카드 (2x2 그리드)

**상단 콘텐츠:**
```
제목: 아마존, 전문가들과 이커머스 No.1
설명: 아마존 출신 이커머스 전문가와 함께 북미부터 유럽, 중동 호주까지
      빠르게 시장을 확장해 보세요.
      글로벌 시장에서 폭발적인 성장을 이끄는 가장 효과적인 플랫폼,
      아마존이 그 시작점입니다.
이미지: 딤 처리 placeholder
```

**카드 섹션:**
```
대제목: Why Kglowing?
소제목: 왜 한국의 주요 브랜드사에서 케이글로잉을 선택해주시나요?
```

| # | 카드 제목 | 카드 내용 |
|---|---|---|
| 1 | Amazon 중심 글로벌 확장 전략 | Amazon을 중심으로 TikTok 등 외부 채널까지 연결하여 브랜드의 글로벌 성장을 위한 통합 전략을 설계합니다. |
| 2 | 데이터 기반 성과 중심 운영 | 운영과 광고를 데이터 기반으로 관리하며, 성과 지표를 중심으로 지속적인 개선과 최적화를 진행합니다. |
| 3 | 전략부터 실행까지 통합 지원 | 입점, 콘텐츠, 광고, 물류까지 전 영역을 하나의 흐름으로 운영하여 불필요한 커뮤니케이션과 리소스를 줄입니다. |
| 4 | 다양한 카테고리 운영 경험 | K-Beauty, 식품, 라이프스타일 등 다양한 산업에서의 경험을 바탕으로 시장에 맞는 실행 전략을 제공합니다. |

---

### 섹션 4 — Clients (주요 고객사)
**컴포넌트:** `Clients.tsx`
**id:** `clients`
**nav 연결:** "Clients"

**레이아웃:**
- 섹션 제목
- 라운드 박스(pill/rounded-lg)로 감싼 로고 나열 — 로고 이미지 placeholder 처리
- 로고는 그레이스케일 처리 → hover 시 컬러

**콘텐츠:**
```
제목: 주요 고객사
```
- 로고 슬롯: placeholder 박스로 균등 배치 (추후 실제 이미지 교체)

---

### 섹션 5 — CoreServices (핵심 서비스 개요)
**컴포넌트:** `CoreServices.tsx`
**id:** `service`
**nav 연결:** "Service"

**레이아웃:**
- 제목 + 설명 (상단)
- 4개 카드 (2x2 그리드 또는 가로 스크롤)

**콘텐츠:**
```
제목: Full-Service 아마존 에이전시, Kglowing의 핵심 서비스 (Core Services)
설명: Kglowing은 아마존에서 성공에 필요한 상품 등록, Premium A+ Contents 이미지 제작,
      SEO, 광고 운영, 재고 및 FBA 물류, 브랜드 보호, 고객 응대까지 전 과정을 통합적으로
      관리합니다. 분산된 운영을 하나로 연결해 복잡도를 낮추고, 브랜드의 노출과 매출 성장을
      체계적으로 지원합니다.
```

| # | 카드 제목 |
|---|---|
| 1 | Amazon Account Management Service |
| 2 | Amazon Advertising Optimization Service |
| 3 | Amazon Logistics and Inventory Management Service (FBA Prep & Packing) |
| 4 | Enhanced Brand Content Service (Premium A+ Contents 제작, Cataloguing Service) |

- 각 카드 클릭 시 해당 상세 섹션(6~9)으로 스크롤 또는 앵커 링크

---

### 섹션 6~9 — ServiceSection (공통 컴포넌트)
**컴포넌트:** `ServiceSection.tsx` (단일 컴포넌트, 4회 재사용)
**데이터:** `src/data/serviceSections.ts`

#### 구조 분석 — 왜 공통 컴포넌트가 가능한가

| 구성 요소 | 섹션 6 | 섹션 7 | 섹션 8 | 섹션 9 |
|---|:---:|:---:|:---:|:---:|
| 대제목 (eyebrow) | ✅ | ✅ | ✅ | ✅ |
| 소제목 (title) | ✅ | ✅ | ✅ | ✅ |
| 설명 (description) | ✅ | ✅ | ✅ | ✅ |
| 3개 묶음 통계 카드 (statsCards) | ✅ | ❌ | ❌ | ❌ |
| 6개 블록 (blocks) | ✅ | ✅ | ✅ | ✅ |

→ `statsCards`를 optional prop으로 처리하면 섹션 6~9 모두 동일 컴포넌트로 커버 가능.

#### TypeScript 인터페이스

```typescript
// src/data/serviceSections.ts

interface ServiceBlock {
  title: string;
  content: string;
}

interface StatsCard {
  label: string;
  value: string;
}

export interface ServiceSectionData {
  id: string;
  eyebrow: string;          // 대제목 (영문 대문자)
  title: string;            // 소제목
  description: string;
  statsCards?: StatsCard[]; // 섹션 6만 사용, optional
  blocks: ServiceBlock[];   // 항상 6개
}
```

#### ServiceSection.tsx props

```typescript
// src/components/sections/ServiceSection.tsx

interface Props {
  data: ServiceSectionData;
}
```

#### 레이아웃 (공통)

```
[섹션 컨테이너]
  ├── 상단 헤더
  │     ├── eyebrow (소형 캡스 텍스트, 강조색)
  │     ├── title (h2)
  │     └── description (본문)
  │
  ├── statsCards 영역 (data.statsCards 있을 때만 렌더링)
  │     └── 3개 카드 가로 배치 — 수치/제목 강조 스타일
  │
  └── blocks 그리드
        └── 2열 3행 (모바일: 1열)
```

#### page.tsx에서의 사용 예시

```tsx
import ServiceSection from "@/components/sections/ServiceSection";
import {
  accountManagementData,
  advertisingData,
  logisticsData,
  contentServiceData,
} from "@/data/serviceSections";

// ...
<ServiceSection data={accountManagementData} />   // 섹션 6
<ServiceSection data={advertisingData} />         // 섹션 7
<ServiceSection data={logisticsData} />           // 섹션 8
<ServiceSection data={contentServiceData} />      // 섹션 9
```

---

#### 섹션 6 데이터 — accountManagementData
**id:** `service-account`

```
eyebrow: AMAZON ACCOUNT MANAGEMENT SERVICE
title: 계정 운영은 더 심플하게, 성장은 더 확실하게
description: 아마존 계정 운영은 컴플라이언스, 카탈로그 세팅, 광고 운영, 리포팅까지
             복잡하고 손이 많이 갑니다.
             Kglowing은 아마존 코리아 출신의 전문적인 운영 인원과 체계적인 전략을 바탕으로,
             브랜드가 더 효율적으로 성장할 수 있도록 아마존 계정 전반을 체계적으로 지원합니다.
```

**statsCards (섹션 6 전용):**
| label | value |
|---|---|
| 성공적으로 운영한 계정 컨설팅 | 100+ |
| 아마존 마켓플레이스 경험 | 6+ |
| Proven Amazon Ads & Seller Central Expertise | — |

**blocks:**
| # | 제목 | 내용 |
|---|---|---|
| 1 | 아마존 계정 생성 & 정책 준수 지원 | 아마존 계정 개설부터 정책 준수까지 전 과정을 지원합니다. 계정 인증, 카테고리 승인, 컴플라이언스 대응을 안정적으로 관리합니다. |
| 2 | Amazon 광고 PPC 계정 운영 | Amazon Ads 캠페인 기획, 운영, 최적화를 일관된 전략으로 진행합니다. 계정 목표에 맞춘 퍼포먼스 중심 운영으로 효율을 극대화합니다. |
| 3 | 카탈로그 & 제품 리스팅 관리 | 아마존 상품 등록부터 불렛포인트, 백엔드 서치텀 및 프리미엄 A+ 콘텐츠까지 리스팅 전반을 제작 및 최적화합니다. |
| 4 | 프로모션 전략 서포트 | 아마존 프라임 데이, 블랙프라이데이 & 사이버먼데이 등 주요 이벤트와 브랜드 맞춤형 프로모션 최적화 전략을 제안합니다. |
| 5 | Performance monitoring & Issue Resolution | 계정 퍼포먼스를 지속적으로 점검하고 주요 지표를 관리합니다. 이슈 대응 및 계정 리스크를 사전에 관리하고 빠르게 해결합니다. |
| 6 | 리포트 & 성장 분석 | API 연동을 진행하여 데이터 기반 리포트 분석을 통해 성과를 진단합니다. 성장 기회를 도출하고 다음 단계 전략 수립을 지원합니다. |

---

#### 섹션 7 데이터 — advertisingData
**id:** `service-advertising`

```
eyebrow: AMAZON ADVERTISING OPTIMIZATION SERVICE
title: 성과 중심 광고 운영 & 매출로 이어지는 성장 전략
description: Amazon Ads 전반을 아우르는 전략을 기반으로, 노출 확대부터 전환 최적화까지
             체계적으로 운영합니다.
             캠페인 구조 설계, 예산 관리, 지속적인 데이터 분석을 통해 안정적인 성과와
             장기적인 브랜드 성장을 만들어갑니다.
statsCards: 없음 (undefined)
```

**blocks:**
| # | 제목 | 내용 |
|---|---|---|
| 1 | Amazon PPC 광고 운영 | Sponsored Ads 전반을 아우르는 전략을 설계하고, 캠페인 운영부터 지속적인 최적화까지 관리합니다. 데이터 기반 의사결정으로 광고 효율과 매출 성과를 함께 개선합니다. |
| 2 | 키워드 & 상품 타겟팅 전략 | 검색 의도와 구매 데이터를 기반으로 핵심 키워드와 타겟 상품을 정밀하게 설정합니다. 불필요한 클릭은 줄이고, 전환 가능성이 높은 트래픽을 확보합니다. |
| 3 | 캠페인 구조 설계 & 확장 전략 | 광고 성과를 극대화할 수 있도록 계정 구조와 캠페인 세팅을 전략적으로 설계합니다. 성과가 검증된 구조를 기반으로 안정적인 확장과 스케일업을 지원합니다. |
| 4 | 광고 진단 및 최적화 | 캠페인 구조와 집행 데이터를 다각도로 분석해 비효율 구간을 정확하게 진단합니다. 지속적인 테스트와 개선을 통해 광고 성과를 안정적으로 끌어올립니다. |
| 5 | 브랜드 스토어 & Sponsored Brands | 브랜드 스토어 구축과 Sponsored Brands 캠페인을 통해 브랜드 경험을 강화합니다. 제품 포트폴리오를 효과적으로 보여주고 고객 충성도를 높입니다. |
| 6 | 광고 데이터 분석 & 리포팅 | 성과를 한눈에 파악할 수 있는 리포트와 인사이트를 제공합니다. 데이터 기반으로 개선 포인트를 도출하고 다음 전략 수립을 지원합니다. |

---

#### 섹션 8 데이터 — logisticsData
**id:** `service-logistics`

```
eyebrow: AMAZON LOGISTICS AND INVENTORY MANAGEMENT SERVICE (FBA Prep & Packing)
title: 더 효율적인 물류, 더 안정적인 운영
description: 입고부터 FBA 운영까지 전 과정을 체계적으로 관리하여,
             빠르고 정확한 물류 흐름을 구축합니다.
             재고 계획, 배송 운영, 물류 최적화를 통해 운영 부담은 줄이고
             안정적인 성장을 지원합니다.
statsCards: 없음 (undefined)
```

**blocks:**
| # | 제목 | 내용 |
|---|---|---|
| 1 | FBA (Fulfillment by Amazon) | 상품을 아마존 물류센터로 입고하면, 보관부터 포장/배송/고객 응대까지 전 과정을 아마존이 처리합니다. 브랜드사의 상품들을 판매 원하시는 국가의 아마존 창고로 안전하고 빠르게 배송합니다. |
| 2 | MCF (Multi-Channel Fulfillment) | 아마존 물류 인프라를 활용해 자사몰, Shopify, Walmart 등 외부 채널 주문까지 함께 처리할 수 있습니다. 채널 간 재고와 배송을 통합 관리하여 운영 효율을 높일 수 있습니다. |
| 3 | Inventory Performance Index (IPI) 관리 | IPI는 FBA 재고 운영 효율을 평가하는 핵심 지표이며 지속적으로 높은 점수를 유지할 수 있도록 Kglowing이 직접 매니지합니다. 보관 한도 확대, 수수료 절감 등 운영 효율을 개선할 수 있습니다. |
| 4 | Amazon Global Logistics (AGL) 운영 | 해외 판매를 위한 국제 물류를 아마존과 연계해 일괄적으로 운영할 수 있는 솔루션입니다. 해상/항공 운송부터 통관, FBA 입고까지 전 과정을 효율적으로 대행합니다. |
| 5 | 데이터 기반 수요 예측 & 재고 전략 | 머신러닝과 데이터 분석을 기반으로 수요를 예측하고 적정 재고 수준을 설계합니다. 과잉 재고와 품절 리스크를 줄이며, 안정적인 재고 운영을 지원합니다. |
| 6 | 재고 관리 시스템 & 운영 최적화 | Seller Central 대시보드와 다양한 솔루션을 활용해 재고 흐름을 실시간으로 관리합니다. 자동 보충, 성과 모니터링, 알림 시스템을 통해 운영 효율과 가시성을 높입니다. |

---

#### 섹션 9 데이터 — contentServiceData
**id:** `service-content`

```
eyebrow: ENHANCED BRAND CONTENT SERVICE (Premium A+ Contents 제작, Cataloguing Service)
title: 전환을 만드는 A+ 콘텐츠 제작
description: 아마존에서는 제품만으로는 충분하지 않습니다. 구매를 결정짓는 것은 설계된 콘텐츠입니다.
             Kglowing은 브랜드에 맞는 A+ 콘텐츠를 기획하고, 시각적 완성도와 신뢰를 동시에 높이는
             상세페이지를 제작합니다. 스토리텔링, 정보 전달, SEO 요소까지 반영하여 단순 노출을 넘어
             실제 구매로 이어지도록 설계합니다.
statsCards: 없음 (undefined)
```

**blocks:**
| # | 제목 | 내용 |
|---|---|---|
| 1 | 브랜드 리포지셔닝 & Market Fit | 현지 시장과 타겟 고객에 맞춰 브랜드 포지션을 재정의합니다. 카테고리 트렌드와 경쟁 환경을 반영해 메시지와 방향성을 설계합니다. |
| 2 | 콘텐츠 전략 설계 & Structure Planning | 썸네일과 상세페이지의 전체 구조를 기획합니다. 구매 흐름에 맞춘 정보 배치와 전환 중심 스토리라인을 설계합니다. |
| 3 | Premium A+ Contents 제작 | 브랜드 스토리와 제품 강점을 반영한 A+ 콘텐츠를 제작합니다. 신뢰도와 완성도를 높여 구매 전환으로 이어지도록 설계합니다. |
| 4 | 이미지 제작 & Visual 콘텐츠 구성 | 메인 이미지, 인포그래픽, 라이프스타일 컷 등 각 영역별 목적에 맞는 비주얼을 기획하고 제작합니다. 이에 맞게 브랜드 스토어도 브랜드 컨셉에 최적화된 버전으로 제작해드립니다. |
| 5 | 카탈로그 등록 & Listing 구축 | 상품 등록, 카테고리 매핑, 키워드 세팅까지 Seller Central 기준에 맞춰 리스팅을 체계적으로 구축합니다. 특히 경쟁이 덜 치열하고 빠르게 Best Seller Ranking을 달성할 수 있는 카테고리를 선 제안합니다. |
| 6 | 콘텐츠 최적화 & Performance 개선 | 성과 데이터를 기반으로 콘텐츠와 이미지를 지속적으로 개선합니다. CTR, CVR 중심으로 테스트와 최적화를 반복합니다. |

---

### 섹션 10 — ServicePlans
**컴포넌트:** `ServicePlans.tsx`
**id:** `service-plans`
**nav 연결:** "Service Plans"

**레이아웃:**
- 제목 + 설명
- 3개 플랜 카드 (가로 균등 배치, 모바일은 세로 스택)
- "가장 인기많은" 뱃지 없음

**콘텐츠:**
```
제목: Kglowing Service Plans
설명: 브랜드사의 글로벌 시장 진출 성숙도에 따라 맞춤형 서비스를 제공합니다.
```

**플랜 카드 1 — Starter:**
```
대제목: 🚀 Starter
소제목: 아마존 진출을 위한 기본 구축 패키지
설명: 아마존 입점을 처음 시작하는 브랜드를 위한 필수 세팅 서비스입니다.
     계정 개설부터 상품 등록, 물류 준비까지 초기 런칭에 필요한 전 과정을 지원합니다.

추천 대상: 신규 셀러 / 글로벌 진출 준비 단계

기능 지원:
✔ 계정 생성 및 결제/세금 세팅
✔ 아마존 브랜드 레지스트리 등록 지원
✔ 카테고리 승인 및 리스팅 권한 확보
✔ 상품 상세페이지 기획 및 제작 (기본 콘텐츠)
✔ 키워드 리서치 및 초기 SEO 세팅
✔ FBA 입고 및 물류 프로세스 가이드
✔ 브랜드 스토어 기본 구축

버튼: "문의하기" → #contact 스크롤
```

**플랜 카드 2 — Growth:**
```
대제목: 📈 Growth
소제목: 아마존 매출 성장 패키지
설명: 아마존 운영 경험이 있는 셀러를 대상으로,
     광고/재고/고객관리까지 포함한 통합 운영 서비스를 제공합니다.
     필요시 리브랜딩 단계부터 다시 진행합니다.

추천 대상: 운영 중 셀러 / 매출 성장 단계

기능 지원:
✔ Amazon Ads 전략 수립 및 운영 (SP/SB 중심)
✔ 키워드 및 캠페인 성과 최적화
✔ 재고 관리 및 리필 전략 설계
✔ 고객 응대(CS) 및 리뷰 관리
✔ 경쟁사 및 시장 데이터 분석
✔ 월간 성과 리포트 및 개선 전략 제안
✔ 계정 헬스 및 정책 이슈 관리

버튼: "문의하기" → #contact 스크롤
```

**플랜 카드 3 — 수출바우처:**
```
대제목: 🔥 수출바우처
소제목: 수출바우처 활용 아마존 진출 패키지
설명: 수출바우처를 활용하여 아마존 진출 혹은 아마존 매출 성장 확대에
     필요한 모든 서비스를 제공합니다.

추천 대상: 수출바우처 선정 대상 브랜드

기능 지원:
✔ 계정 세팅, 브랜드 등록, 카테고리 승인 지원
✔ 상세페이지, A+ 콘텐츠, 브랜드 스토어 제작
✔ 키워드 리서치 및 SEO 최적화
✔ Amazon Ads 운영 및 성과 개선
✔ 재고 관리 및 FBA 물류 운영
✔ CS, 리뷰 관리 및 계정 이슈 대응
✔ 데이터 분석 및 성장 전략 수립

버튼: "문의하기" → #contact 스크롤
```

---

### 섹션 11 — Reviews (고객 리뷰)
**컴포넌트:** `Reviews.tsx`
**id:** `success-cases`
**nav 연결:** "Success Cases"

**레이아웃:**
- 제목 + 설명
- 3개 리뷰 카드 (가로 배치, 모바일 세로)

**콘텐츠:**
```
제목: 고객 만족이 곧 성과입니다
설명: Kglowing의 모든 성공 사례는 브랜드사와의 신뢰와 협업 그리고 실제 성과에서 시작됩니다.
```

**리뷰 카드 공통 요소:** Verified Customer 뱃지 + 본문 인용구 + ★★★★★

| # | 내용 |
|---|---|
| 1 | "서비스 진행하면서 브랜드에 신경 많이 써주시고 의사소통이 너무 만족스러웠습니다. 가격도 적절한것 같고 수출업무 하면서 도움이 많이 되었습니다." |
| 2 | "내 브랜드처럼 오너십을 가지고 업무를 진행해 주셔서 만족합니다. 덕분에 매출 많이 상승시켰습니다. 신경써주셔서 감사합니다." |
| 3 | "Kglowing 서비스 전반에 대해 매우 만족합니다. 모든 담당자분들이 친절하게 안내해 주셔서 진행 과정이 매우 수월했습니다. 앞으로도 신뢰하고 계속 이용할 수 있을 것 같습니다." |

---

### 섹션 12 — CaseStudy1 (신규 입점 브랜드 성장 사례)
**컴포넌트:** `CaseStudy1.tsx`
**id:** `case-study-1`

**레이아웃:** PPT 슬라이드 형식, 좌우 2단 구성 또는 상하 구성
- 제목 + 라벨 + 강조 수치 (좌측 또는 상단)
- 차트 이미지 placeholder (우측 또는 하단)

**콘텐츠:**
```
제목: 신규 입점 브랜드 C사
라벨: 런치 첫달 대비 6개월 후 성장률
강조값: +13,614%
이미지: 차트 placeholder (추후 교체)
```

---

### 섹션 13 — CaseStudy2 (광고 RoAS 최적화 사례)
**컴포넌트:** `CaseStudy2.tsx`
**id:** `case-study-2`

**레이아웃:** 섹션 12와 동일한 PPT 스타일
- 제목 (상단)
- 3개 브랜드 차트 이미지 placeholder (가로 배치)
- 각 차트 하단에 브랜드명 라벨

**콘텐츠:**
```
제목: 광고 RoAS 최적화 사례
브랜드 1: 화장품 L사 — 차트 placeholder
브랜드 2: 화장품 T사 — 차트 placeholder
브랜드 3: 건기식 R사 — 차트 placeholder
```

---

### 섹션 14 — Dashboard (분석 대시보드 예시)
**컴포넌트:** `Dashboard.tsx`
**id:** `case-study-dashboard`

**레이아웃:**
- 제목
- 대시보드 이미지 placeholder (전체 너비, 추후 교체)

**콘텐츠:**
```
제목: Kglowing 광고 분석 대시보드 예시
이미지: 대시보드 placeholder (추후 실제 이미지로 교체)
```

---

### 섹션 15 — Contact (문의하기)
**컴포넌트:** `Contact.tsx` (기존 컴포넌트 유지)
**id:** `contact`
**nav 연결:** "Contact"

기존 `<Contact />` 컴포넌트를 그대로 사용.
필요 시 스타일만 전체 무드에 맞게 조정.

---

## 공통 스타일 가이드

### 색상 (globals.css 기준 유지)
- `--primary`: 파란색 계열 (메인 강조)
- `--secondary`: 주황색 계열 (보조 강조)
- `--accent`: 시안 계열

### 섹션 공통 패턴
- 섹션 패딩: `py-20` 내외 (일관성 유지)
- 최대 너비: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- 섹션 구분을 위한 배경색 교대 사용 (흰색 / 연한 회색)

### 이미지 placeholder 처리
```tsx
<div className="w-full aspect-video bg-gray-200 rounded-lg" />
// 또는 딤 처리가 필요한 경우
<div className="w-full aspect-video bg-gray-800 opacity-60 rounded-lg" />
```

### 네비게이션 스크롤 앵커 매핑
| 메뉴 | 타겟 id |
|---|---|
| About | `about` (섹션 2 기준, 3까지 포함) |
| Clients | `clients` |
| Service | `service` |
| Service Plans | `service-plans` |
| Success Cases | `success-cases` |
| Contact | `contact` |

---

## 구현 순서 (권장)

1. `page.tsx` — 새 컴포넌트 import 구조로 교체
2. `Navigation.tsx` — 메뉴 항목 및 앵커 업데이트
3. `Hero.tsx` — 재작성 (섹션 1)
4. `About.tsx` — 재작성 (섹션 2)
5. `AboutAmazon.tsx` — 신규 (섹션 3)
6. `Clients.tsx` — 신규 (섹션 4)
7. `CoreServices.tsx` — 신규 (섹션 5)
8. `src/data/serviceSections.ts` — 섹션 6~9 데이터 상수 정의
9. `ServiceSection.tsx` — 공통 컴포넌트 신규 (섹션 6~9 재사용)
10. `ServicePlans.tsx` — 신규 (섹션 10)
11. `Reviews.tsx` — 신규 (섹션 11)
12. `CaseStudy1.tsx` — 신규 (섹션 12)
13. `CaseStudy2.tsx` — 신규 (섹션 13)
14. `Dashboard.tsx` — 신규 (섹션 14)
15. `Contact.tsx` — 스타일 조정 (섹션 15)
16. `Footer.tsx` — 필요 시 업데이트

---

## 제거 대상 (기존 불필요 컴포넌트)

- `Stats.tsx` — About 섹션 내 통계로 통합
- `Services.tsx` — CoreServices.tsx로 대체
- `Portfolio.tsx` — CaseStudy 섹션들로 대체
- `AmazonDetail.tsx` — ServiceSection.tsx(섹션 6~9)으로 대체

## 파일 수 비교

| 구분 | 기존 계획 | 변경 후 |
|---|:---:|:---:|
| 서비스 상세 컴포넌트 | 4개 (섹션별 개별) | 1개 (ServiceSection.tsx) |
| 데이터 파일 | 없음 | 1개 (serviceSections.ts) |
| 순 감소 | — | 컴포넌트 3개 절약 |

---

## 반응형 디자인 계획 (PC / Mobile)

### 브레이크포인트 기준 (Tailwind CSS v4)

| 명칭 | 기준 | 주요 대상 |
|---|---|---|
| `sm` | 640px~ | 소형 태블릿 이상 |
| `md` | 768px~ | 태블릿 기준 |
| `lg` | 1024px~ | 데스크탑 기준 |
| `xl` | 1280px~ | 와이드 모니터 |

기본(모바일 우선) → `sm` → `md` → `lg` 순으로 확장.

---

### 섹션별 반응형 레이아웃

---

#### 섹션 1 — Hero

| 구분 | 모바일 | PC (lg+) |
|---|---|---|
| 전체 높이 | `min-h-screen` | `h-screen` |
| 텍스트 정렬 | 중앙 정렬 | 중앙 정렬 |
| h1 폰트 크기 | `text-2xl` | `text-5xl` |
| 본문 폰트 크기 | `text-sm` | `text-lg` |
| 버튼 | 전체 너비 (`w-full`) | 자동 너비 (`w-auto`) |
| 패딩 | `px-4 py-8` | `px-16` |

---

#### 섹션 2 — About

| 구분 | 모바일 | PC (lg+) |
|---|---|---|
| 카드 1 | 전체 너비 (1열) | 전체 너비 (강조 배치) |
| 카드 2~3 배치 | 세로 스택 (1열) | 나란히 (2열 그리드) |
| 통계 텍스트 | 2열 그리드 | 5열 가로 나열 |
| 이미지 비율 | `aspect-video` | `aspect-[4/3]` |

---

#### 섹션 3 — AboutAmazon

| 구분 | 모바일 | PC (lg+) |
|---|---|---|
| 상단 이미지 | 전체 너비, 고정 높이 | 좌우 2단 (텍스트 좌 / 이미지 우) |
| Why Kglowing 카드 | 1열 세로 스택 | 2열 2행 그리드 |
| 카드 패딩 | `p-4` | `p-6` |

---

#### 섹션 4 — Clients

| 구분 | 모바일 | PC (lg+) |
|---|---|---|
| 로고 배치 | 2열 그리드 | 4~5열 flex wrap |
| 로고 박스 크기 | `h-12` | `h-16` |

---

#### 섹션 5 — CoreServices

| 구분 | 모바일 | PC (lg+) |
|---|---|---|
| 카드 배치 | 1열 세로 스택 | 2열 2행 그리드 |
| 카드 클릭 | 탭 전환 없이 전체 노출 | 동일 |
| 설명 텍스트 | `text-sm` | `text-base` |

---

#### 섹션 6~9 — ServiceSection (공통)

| 구분 | 모바일 | PC (lg+) |
|---|---|---|
| 헤더 텍스트 정렬 | 좌측 정렬 | 좌측 정렬 |
| eyebrow 크기 | `text-xs` | `text-sm` |
| title 크기 | `text-xl` | `text-3xl` |
| statsCards (섹션 6) | 세로 스택 (1열) | 가로 3열 |
| blocks 그리드 | 1열 | 2열 3행 |
| 블록 패딩 | `p-4` | `p-6` |

---

#### 섹션 10 — ServicePlans

| 구분 | 모바일 | PC (lg+) |
|---|---|---|
| 플랜 카드 배치 | 세로 스택 (1열) | 가로 3열 균등 |
| 카드 높이 | 자동 | 동일 높이 (`h-full` + flex) |
| 기능 목록 | `text-sm` | `text-sm` (동일) |
| 버튼 | `w-full` | `w-full` (카드 하단 고정) |

---

#### 섹션 11 — Reviews

| 구분 | 모바일 | PC (lg+) |
|---|---|---|
| 카드 배치 | 세로 스택 (1열) | 가로 3열 |
| 카드 내 인용구 | `text-sm` | `text-base` |
| 별점 크기 | 동일 | 동일 |

---

#### 섹션 12 — CaseStudy1

| 구분 | 모바일 | PC (lg+) |
|---|---|---|
| 레이아웃 | 세로 (텍스트 상 / 이미지 하) | 좌우 2단 (텍스트 좌 / 이미지 우) |
| 강조 수치 크기 | `text-4xl` | `text-7xl` |
| 이미지 영역 | `aspect-video` | 고정 높이 |

---

#### 섹션 13 — CaseStudy2

| 구분 | 모바일 | PC (lg+) |
|---|---|---|
| 차트 배치 | 세로 스택 (1열) | 가로 3열 |
| 브랜드 라벨 | 차트 하단 중앙 정렬 | 동일 |
| 차트 영역 크기 | `aspect-video` | `aspect-[4/3]` |

---

#### 섹션 14 — Dashboard

| 구분 | 모바일 | PC (lg+) |
|---|---|---|
| 이미지 | 전체 너비, 세로 스크롤 허용 | 전체 너비, 고정 비율 |
| 이미지 비율 | `aspect-video` | `aspect-[16/7]` |

---

#### 섹션 15 — Contact

| 구분 | 모바일 | PC (lg+) |
|---|---|---|
| 폼 레이아웃 | 1열 (전체 너비) | 좌우 2단 (소개 좌 / 폼 우) 또는 중앙 단일 컬럼 |
| 입력 필드 | `w-full` | `w-full` |
| 제출 버튼 | `w-full` | `w-auto` 또는 `w-full` |

---

### 네비게이션 반응형

| 구분 | 모바일 | PC (lg+) |
|---|---|---|
| 메뉴 표시 | 햄버거 버튼 → 드로어/오버레이 | 수평 메뉴 바 (sticky) |
| 메뉴 항목 | 세로 목록, 전체 너비 탭 | 가로 나열 |
| 로고 위치 | 좌측 | 좌측 |
| CTA 버튼 | 메뉴 드로어 하단 | 우측 상단 노출 |
| 배경 | 스크롤 시 불투명 처리 | 동일 |

---

### 공통 반응형 원칙

1. **모바일 우선(Mobile First)** — 기본 스타일이 모바일, `lg:` prefix로 PC 스타일 확장
2. **터치 타겟** — 버튼/링크 최소 높이 `min-h-[44px]` (iOS HIG 기준)
3. **폰트 스케일**
   - 섹션 대제목: 모바일 `text-2xl` → PC `text-4xl`~`text-5xl`
   - 소제목: 모바일 `text-lg` → PC `text-2xl`~`text-3xl`
   - 본문: 모바일 `text-sm` → PC `text-base`
4. **패딩 스케일**
   - 섹션 수직 패딩: 모바일 `py-12` → PC `py-20`~`py-24`
   - 수평 패딩: `px-4 sm:px-6 lg:px-8` (공통 적용)
5. **그리드 전환 패턴**
   - 1열(모바일) → 2열(`md:`) → 필요 시 3열(`lg:`)
   - `gap-4 md:gap-6 lg:gap-8` 간격 스케일
6. **이미지 placeholder** — `aspect-video` 비율 유지로 레이아웃 깨짐 방지
7. **텍스트 줄바꿈** — 모바일에서 긴 영문 제목은 `break-words` 또는 `hyphens-auto` 적용
