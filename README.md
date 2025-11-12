# 내 프로젝트 문서

## 프로젝트 개요
- React 기반 웹 애플리케이션
- Tailwind CSS를 사용한 UI 스타일링
- Firebase를 통한 인증, 데이터 저장, 사진 업로드 지원
- 기능
  - 상품 리스트 조회 및 상세 페이지
  - 장바구니 기능
  - 사용자 인증 및 접근 제한
  - 이미지 업로드 및 관리
  - 배송 옵션 선택
  - 재고 상태 표시
  - 페이지 라우팅 및 네비게이션

---

## 프로젝트 구조

/src
/components
MyPage.jsx
ProductDetail.jsx
ProductList.jsx
CustomLabel.jsx
DialogComponents.jsx
/ui
button.jsx
card.jsx
checkbox.jsx
separator.jsx
App.js
index.js
/package.json
/README.md


---

## 주요 컴포넌트 및 기능

### 1. `App.js`
- 페이지 상태(`currentPage`) 관리
- 페이지 이동: 랜딩 → 홈 → 로그인 등
- 이벤트 핸들러: `handleNavigate`, `handleAddToCart`, `handleProductClick`
- 주요 문제 해결:
  - `handleNavigate`/`onNavigate` undefined 오류 수정

### 2. `ProductList.jsx`
- 상품 리스트 렌더링
- 장바구니 담기 기능
- 상품 클릭 시 상세 페이지 이동

### 3. `ProductDetail.jsx`
- 선택한 상품 상세 정보 표시
- 사용자 접근 제한: 로그인 여부 확인 후 페이지 이동
- 이미지 관련 문제 처리:
  - 빈 `src`로 인한 다운로드 오류
  - React에서 이미지 조건부 렌더링 적용

### 4. `MyPage.jsx`
- 사용자 정보 표시
- Firebase 기반 데이터 가져오기
- 인증된 사용자만 접근 가능
- 문제 해결:
  - `userId` undefined 오류 수정
  - React Hook 규칙 위반 오류(`useState` 조건적 호출) 해결

### 5. Dialog 및 UI 컴포넌트
- Tailwind + Lucide React 아이콘 사용
- `Dialog`, `Button`, `Card`, `Checkbox`, `Separator` 등 재사용 UI 구성

---

## Firebase 연동
- 사용자 인증
- 상품 데이터 CRUD
- 사진 업로드
- 보안 규칙 설정 문제:
  - 기본 규칙: 모두 허용 → 추후 제한 필요

---

## 스타일링
- Tailwind CSS 기반 Grid, Flex 활용
- 버튼/카드/다이얼로그 등 UI 구성
- 배송 옵션 및 재고 상태 표시 UI

---

## 미해결 / 주의 사항
- 이미지 관련 오류 처리 필요
- Firebase 보안 규칙 강화 필요
- Markdown으로 프로젝트 전체 코드 자동 정리 스크립트 가능
