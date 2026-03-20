# 반응형 디자인 기준 적용

모든 작업과 개선 사항에 대해 아래의 반응형 디자인 기준을 반드시 적용하세요.

## 브레이크포인트 기준

- **모바일**: 기본 (mobile-first, < 640px)
- **태블릿**: `sm:` (640px~), `md:` (768px~)
- **데스크톱**: `lg:` (1024px~), `xl:` (1280px~)

## 필수 체크리스트

### 레이아웃
- [ ] 모바일에서 단일 컬럼, 데스크톱에서 멀티 컬럼 레이아웃 적용
- [ ] Flexbox/Grid 사용 시 `flex-col` → `md:flex-row` 또는 `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3` 패턴 적용
- [ ] 컨테이너에 적절한 좌우 패딩 (`px-4` → `md:px-8` → `lg:px-16`)

### 타이포그래피
- [ ] 제목 텍스트 크기 반응형 적용 (`text-2xl` → `md:text-3xl` → `lg:text-4xl`)
- [ ] 본문 텍스트 최소 `text-sm` 이상 유지
- [ ] 줄 간격(line-height) 모바일에서 가독성 확보

### 이미지/미디어
- [ ] 이미지에 `w-full` 또는 적절한 반응형 크기 적용
- [ ] 비디오/임베드 요소 `aspect-ratio` 유지
- [ ] `object-fit: cover` 등으로 비율 깨짐 방지

### 간격(Spacing)
- [ ] 섹션 간 여백 반응형 (`py-12` → `md:py-16` → `lg:py-24`)
- [ ] 요소 간 gap 반응형 (`gap-4` → `md:gap-6` → `lg:gap-8`)

### 인터랙션
- [ ] 터치 타겟 최소 44x44px 확보 (모바일)
- [ ] 호버 효과는 `hover:` 프리픽스로, 모바일에서도 자연스럽게 동작
- [ ] 모바일 내비게이션(햄버거 메뉴) 정상 동작 확인

### 숨김/표시
- [ ] 모바일에서만 보여야 할 요소: `block md:hidden`
- [ ] 데스크톱에서만 보여야 할 요소: `hidden md:block`

## 작업 시 규칙

1. **Mobile-first**: 항상 모바일 스타일을 기본으로 작성하고, 브레이크포인트를 추가하여 확장
2. **테스트 관점 언급**: 코드 작성 후, 모바일(375px)과 데스크톱(1440px) 기준에서 어떻게 보이는지 설명
3. **기존 패턴 준수**: 프로젝트에서 이미 사용 중인 반응형 패턴을 우선 따르기
4. **Tailwind CSS v4**: `@theme inline`에 정의된 커스텀 속성 활용, `tailwind.config.ts` 없음을 인지
5. **고정 너비/높이 지양**: `w-[500px]` 같은 고정값 대신 `max-w-lg`, `w-full` 등 유동적 단위 사용
6. **overflow 방지**: 가로 스크롤이 발생하지 않도록 `overflow-hidden` 또는 적절한 처리 적용

## 적용 예시

```tsx
// 좋은 예
<div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:gap-6 md:px-8 lg:grid-cols-3 lg:gap-8 lg:px-16">
  <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">제목</h2>
</div>

// 나쁜 예
<div className="grid grid-cols-3 gap-8 px-16">
  <h2 className="text-4xl font-bold">제목</h2>
</div>
```

이 기준을 모든 컴포넌트 생성, 수정, 개선 작업에 적용하세요.
