export interface ServiceBlock {
  title: string;
  content: string;
}

export interface StatsCard {
  label: string;
  value?: string;
}

export interface ServiceSectionData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  statsCards?: StatsCard[];
  blocks: ServiceBlock[];
}

export const accountManagementData: ServiceSectionData = {
  id: "service-account",
  eyebrow: "AMAZON ACCOUNT MANAGEMENT SERVICE",
  title: "계정 운영은 더 심플하게, 성장은 더 확실하게",
  description:
    "아마존 계정 운영은 컴플라이언스, 카탈로그 세팅, 광고 운영, 리포팅까지 복잡하고 손이 많이 갑니다.\nKglowing은 아마존 코리아 출신의 전문적인 운영 인원과 체계적인 전략을 바탕으로, 브랜드가 더 효율적으로 성장할 수 있도록 아마존 계정 전반을 체계적으로 지원합니다.",
  statsCards: [
    { label: "성공적으로 운영한 계정 컨설팅", value: "100+" },
    { label: "아마존 마켓플레이스 경험", value: "6+" },
    { label: "Proven Amazon Ads & Seller Central Expertise" },
  ],
  blocks: [
    {
      title: "아마존 계정 생성 & 정책 준수 지원",
      content:
        "아마존 계정 개설부터 정책 준수까지 전 과정을 지원합니다. 계정 인증, 카테고리 승인, 컴플라이언스 대응을 안정적으로 관리합니다.",
    },
    {
      title: "Amazon 광고 PPC 계정 운영",
      content:
        "Amazon Ads 캠페인 기획, 운영, 최적화를 일관된 전략으로 진행합니다. 계정 목표에 맞춘 퍼포먼스 중심 운영으로 효율을 극대화합니다.",
    },
    {
      title: "카탈로그 & 제품 리스팅 관리",
      content:
        "아마존 상품 등록부터 불렛포인트, 백엔드 서치텀 및 프리미엄 A+ 콘텐츠까지 리스팅 전반을 제작 및 최적화합니다.",
    },
    {
      title: "프로모션 전략 서포트",
      content:
        "아마존 프라임 데이, 블랙프라이데이 & 사이버먼데이 등 주요 이벤트와 브랜드 맞춤형 프로모션 최적화 전략을 제안합니다.",
    },
    {
      title: "Performance Monitoring & Issue Resolution",
      content:
        "계정 퍼포먼스를 지속적으로 점검하고 주요 지표를 관리합니다. 이슈 대응 및 계정 리스크를 사전에 관리하고 빠르게 해결합니다.",
    },
    {
      title: "리포트 & 성장 분석",
      content:
        "API 연동을 진행하여 데이터 기반 리포트 분석을 통해 성과를 진단합니다. 성장 기회를 도출하고 다음 단계 전략 수립을 지원합니다.",
    },
  ],
};

export const advertisingData: ServiceSectionData = {
  id: "service-advertising",
  eyebrow: "AMAZON ADVERTISING OPTIMIZATION SERVICE",
  title: "성과 중심 광고 운영 & 매출로 이어지는 성장 전략",
  description:
    "Amazon Ads 전반을 아우르는 전략을 기반으로, 노출 확대부터 전환 최적화까지 체계적으로 운영합니다.\n캠페인 구조 설계, 예산 관리, 지속적인 데이터 분석을 통해 안정적인 성과와 장기적인 브랜드 성장을 만들어갑니다.",
  blocks: [
    {
      title: "Amazon PPC 광고 운영",
      content:
        "Sponsored Ads 전반을 아우르는 전략을 설계하고, 캠페인 운영부터 지속적인 최적화까지 관리합니다. 데이터 기반 의사결정으로 광고 효율과 매출 성과를 함께 개선합니다.",
    },
    {
      title: "키워드 & 상품 타겟팅 전략",
      content:
        "검색 의도와 구매 데이터를 기반으로 핵심 키워드와 타겟 상품을 정밀하게 설정합니다. 불필요한 클릭은 줄이고, 전환 가능성이 높은 트래픽을 확보합니다.",
    },
    {
      title: "캠페인 구조 설계 & 확장 전략",
      content:
        "광고 성과를 극대화할 수 있도록 계정 구조와 캠페인 세팅을 전략적으로 설계합니다. 성과가 검증된 구조를 기반으로 안정적인 확장과 스케일업을 지원합니다.",
    },
    {
      title: "광고 진단 및 최적화",
      content:
        "캠페인 구조와 집행 데이터를 다각도로 분석해 비효율 구간을 정확하게 진단합니다. 지속적인 테스트와 개선을 통해 광고 성과를 안정적으로 끌어올립니다.",
    },
    {
      title: "브랜드 스토어 & Sponsored Brands",
      content:
        "브랜드 스토어 구축과 Sponsored Brands 캠페인을 통해 브랜드 경험을 강화합니다. 제품 포트폴리오를 효과적으로 보여주고 고객 충성도를 높입니다.",
    },
    {
      title: "광고 데이터 분석 & 리포팅",
      content:
        "성과를 한눈에 파악할 수 있는 리포트와 인사이트를 제공합니다. 데이터 기반으로 개선 포인트를 도출하고 다음 전략 수립을 지원합니다.",
    },
  ],
};

export const logisticsData: ServiceSectionData = {
  id: "service-logistics",
  eyebrow: "AMAZON LOGISTICS AND INVENTORY MANAGEMENT SERVICE (FBA Prep & Packing)",
  title: "더 효율적인 물류, 더 안정적인 운영",
  description:
    "입고부터 FBA 운영까지 전 과정을 체계적으로 관리하여, 빠르고 정확한 물류 흐름을 구축합니다.\n재고 계획, 배송 운영, 물류 최적화를 통해 운영 부담은 줄이고 안정적인 성장을 지원합니다.",
  blocks: [
    {
      title: "FBA (Fulfillment by Amazon)",
      content:
        "상품을 아마존 물류센터로 입고하면, 보관부터 포장/배송/고객 응대까지 전 과정을 아마존이 처리합니다. 브랜드사의 상품들을 판매 원하시는 국가의 아마존 창고로 안전하고 빠르게 배송합니다.",
    },
    {
      title: "MCF (Multi-Channel Fulfillment)",
      content:
        "아마존 물류 인프라를 활용해 자사몰, Shopify, Walmart 등 외부 채널 주문까지 함께 처리할 수 있습니다. 채널 간 재고와 배송을 통합 관리하여 운영 효율을 높일 수 있습니다.",
    },
    {
      title: "Inventory Performance Index (IPI) 관리",
      content:
        "IPI는 FBA 재고 운영 효율을 평가하는 핵심 지표이며 지속적으로 높은 점수를 유지할 수 있도록 Kglowing이 직접 매니지합니다. 보관 한도 확대, 수수료 절감 등 운영 효율을 개선할 수 있습니다.",
    },
    {
      title: "Amazon Global Logistics (AGL) 운영",
      content:
        "해외 판매를 위한 국제 물류를 아마존과 연계해 일괄적으로 운영할 수 있는 솔루션입니다. 해상/항공 운송부터 통관, FBA 입고까지 전 과정을 효율적으로 대행합니다.",
    },
    {
      title: "데이터 기반 수요 예측 & 재고 전략",
      content:
        "머신러닝과 데이터 분석을 기반으로 수요를 예측하고 적정 재고 수준을 설계합니다. 과잉 재고와 품절 리스크를 줄이며, 안정적인 재고 운영을 지원합니다.",
    },
    {
      title: "재고 관리 시스템 & 운영 최적화",
      content:
        "Seller Central 대시보드와 다양한 솔루션을 활용해 재고 흐름을 실시간으로 관리합니다. 자동 보충, 성과 모니터링, 알림 시스템을 통해 운영 효율과 가시성을 높입니다.",
    },
  ],
};

export const contentServiceData: ServiceSectionData = {
  id: "service-content",
  eyebrow: "ENHANCED BRAND CONTENT SERVICE (Premium A+ Contents 제작, Cataloguing Service)",
  title: "전환을 만드는 A+ 콘텐츠 제작",
  description:
    "아마존에서는 제품만으로는 충분하지 않습니다. 구매를 결정짓는 것은 설계된 콘텐츠입니다.\nKglowing은 브랜드에 맞는 A+ 콘텐츠를 기획하고, 시각적 완성도와 신뢰를 동시에 높이는 상세페이지를 제작합니다. 스토리텔링, 정보 전달, SEO 요소까지 반영하여 단순 노출을 넘어 실제 구매로 이어지도록 설계합니다.",
  blocks: [
    {
      title: "브랜드 리포지셔닝 & Market Fit",
      content:
        "현지 시장과 타겟 고객에 맞춰 브랜드 포지션을 재정의합니다. 카테고리 트렌드와 경쟁 환경을 반영해 메시지와 방향성을 설계합니다.",
    },
    {
      title: "콘텐츠 전략 설계 & Structure Planning",
      content:
        "썸네일과 상세페이지의 전체 구조를 기획합니다. 구매 흐름에 맞춘 정보 배치와 전환 중심 스토리라인을 설계합니다.",
    },
    {
      title: "Premium A+ Contents 제작",
      content:
        "브랜드 스토리와 제품 강점을 반영한 A+ 콘텐츠를 제작합니다. 신뢰도와 완성도를 높여 구매 전환으로 이어지도록 설계합니다.",
    },
    {
      title: "이미지 제작 & Visual 콘텐츠 구성",
      content:
        "메인 이미지, 인포그래픽, 라이프스타일 컷 등 각 영역별 목적에 맞는 비주얼을 기획하고 제작합니다. 이에 맞게 브랜드 스토어도 브랜드 컨셉에 최적화된 버전으로 제작해드립니다.",
    },
    {
      title: "카탈로그 등록 & Listing 구축",
      content:
        "상품 등록, 카테고리 매핑, 키워드 세팅까지 Seller Central 기준에 맞춰 리스팅을 체계적으로 구축합니다. 특히 경쟁이 덜 치열하고 빠르게 Best Seller Ranking을 달성할 수 있는 카테고리를 선 제안합니다.",
    },
    {
      title: "콘텐츠 최적화 & Performance 개선",
      content:
        "성과 데이터를 기반으로 콘텐츠와 이미지를 지속적으로 개선합니다. CTR, CVR 중심으로 테스트와 최적화를 반복합니다.",
    },
  ],
};
