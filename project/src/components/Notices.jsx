import { Bell, ChevronRight, Pin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";

export function Notices() {
  const [selectedNotice, setSelectedNotice] = useState(null);

  const notices = [
    {
      id: 1,
      title: "2025년 설 연휴 배송 및 고객센터 운영 안내",
      category: "배송",
      date: "2025.01.20",
      isPinned: true,
      isNew: true,
      content: `안녕하세요, 쇼피입니다.

2025년 설 연휴 기간 동안의 배송 및 고객센터 운영 일정을 안내드립니다.

[배송 안내]
- 1월 28일(화) 오후 2시 이후 주문 건은 2월 2일(일)부터 순차 출고됩니다.
- 설 연휴 기간: 1월 29일(수) ~ 2월 1일(토)
- 정상 배송 재개: 2월 2일(일)

[고객센터 운영]
- 설 연휴 기간 동안 고객센터는 휴무입니다.
- 1:1 문의는 접수 가능하며, 2월 2일부터 순차 답변드립니다.

이용에 불편을 드려 죄송하며, 즐거운 명절 보내시기 바랍니다.

감사합니다.`
    },
    {
      id: 2,
      title: "개인정보 처리방침 개정 안내",
      category: "정책",
      date: "2025.01.15",
      isPinned: true,
      content: `쇼피를 이용해 주시는 고객님께 감사드립니다.

개인정보 보호법 개정에 따라 개인정보 처리방침이 일부 개정되었음을 안내드립니다.

[주요 개정 내용]
1. 개인정보 처리 목적 명확화
2. 제3자 제공 정보 상세화
3. 개인정보 보유 기간 구체화
4. 정보주체의 권리 강화

[시행일]
- 2025년 2월 1일부터 시행

자세한 내용은 하단의 '개인정보 처리방침'에서 확인하실 수 있습니다.

감사합니다.`
    },
    {
      id: 3,
      title: "프리미엄 멤버십 혜택 확대 안내",
      category: "이벤트",
      date: "2025.01.10",
      isNew: true,
      content: `프리미엄 회원님들께 더 좋은 혜택을 드리기 위해 멤버십 혜택이 확대됩니다.

[추가 혜택]
1. 매월 5,000원 할인 쿠폰 추가 지급
2. 신상품 24시간 우선 구매 기회
3. 무료 반품 배송 월 3회 제공
4. 전용 고객센터 운영

[적용 시작일]
- 2025년 2월 1일 자동 적용

프리미엄 회원이 아니신 분들도 지금 가입하시면 첫 달 무료로 이용하실 수 있습니다.

감사합니다.`
    },
    {
      id: 4,
      title: "신규 결제 수단 추가 안내 (토스페이)",
      category: "서비스",
      date: "2025.01.05",
      content: `보다 편리한 결제를 위해 토스페이가 추가되었습니다.

[토스페이 이용 방법]
1. 주문서 작성 시 결제 수단에서 '토스페이' 선택
2. 토스 앱으로 자동 연결
3. 간편하게 결제 완료

[토스페이 혜택]
- 매월 첫 구매 시 5% 할인
- 최대 10만원까지 무이자 할부

많은 이용 부탁드립니다.`
    },
    {
      id: 5,
      title: "사칭 사이트 주의 안내",
      category: "보안",
      date: "2024.12.28",
      content: `최근 쇼피를 사칭한 피싱 사이트가 발견되어 주의를 당부드립니다.

[주의 사항]
1. 공식 도메인: www.shopi.com
2. 문자/이메일의 링크 클릭 시 도메인 확인 필수
3. 개인정보 및 결제 정보 요청 시 의심

[피해 예방 방법]
- 즐겨찾기를 통한 접속 권장
- 의심스러운 링크는 클릭하지 마세요
- 이상 징후 발견 시 즉시 고객센터로 신고

고객님의 안전한 쇼핑을 위해 최선을 다하겠습니다.`
    },
    {
      id: 6,
      title: "배송 추적 시스템 업그레이드 완료",
      category: "서비스",
      date: "2024.12.20",
      content: `배송 추적 시스템이 업그레이드되어 더욱 정확한 배송 정보를 확인하실 수 있습니다.

[개선 사항]
1. 실시간 위치 추적 강화
2. 배송 예정 시간 알림 추가
3. 배송 기사 연락처 제공
4. 부재 시 재배송 요청 간소화

마이페이지 → 주문내역에서 확인하실 수 있습니다.

감사합니다.`
    },
    {
      id: 7,
      title: "겨울 시즌 특가 이벤트 안내",
      category: "이벤트",
      date: "2024.12.15",
      content: `겨울을 따뜻하게 보내실 수 있도록 특가 이벤트를 준비했습니다.

[이벤트 기간]
- 2024년 12월 15일 ~ 2025년 1월 15일

[이벤트 내용]
1. 겨울 의류 최대 70% 할인
2. 가전제품 20% 추가 할인 쿠폰
3. 5만원 이상 구매 시 핫팩 증정

많은 관심 부탁드립니다.`
    },
    {
      id: 8,
      title: "모바일 앱 업데이트 안내 (v2.5)",
      category: "서비스",
      date: "2024.12.10",
      content: `쇼피 모바일 앱이 v2.5로 업데이트되었습니다.

[주요 업데이트 내용]
1. UI/UX 개선으로 더욱 편리한 사용성
2. 상품 검색 속도 향상
3. 위시리스트 공유 기능 추가
4. 다크 모드 지원

앱 스토어에서 업데이트해주시기 바랍니다.

감사합니다.`
    },
    {
      id: 9,
      title: "판매자 정산 기준 변경 안내",
      category: "정책",
      date: "2024.12.01",
      content: `판매자분들께 정산 기준 변경을 안내드립니다.

[변경 내용]
- 기존: 월 1회 정산
- 변경: 주 1회 정산

[적용 시작일]
- 2025년 1월 1일부터

더욱 빠른 정산으로 판매 활동에 도움이 되길 바랍니다.

문의사항은 판매자 센터로 연락 주시기 바랍니다.`
    },
    {
      id: 10,
      title: "추석 연휴 배송 및 고객센터 운영 안내",
      category: "배송",
      date: "2024.09.10",
      content: `추석 연휴 기간 동안의 운영 일정을 안내드립니다.

[배송 안내]
- 9월 15일 오후 2시 이후 주문 건은 9월 19일부터 출고
- 연휴 기간: 9월 16일 ~ 9월 18일

[고객센터]
- 연휴 기간 휴무
- 9월 19일부터 정상 운영

즐거운 추석 명절 보내세요.`
    }
  ];

  // 고정된 공지와 일반 공지 분리
  const pinnedNotices = notices.filter(n => n.isPinned);
  const regularNotices = notices.filter(n => !n.isPinned);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Bell className="w-12 h-12" />
            </div>
            <h1 className="mb-4 text-4xl md:text-5xl">공지사항</h1>
            <p className="text-xl text-white/90">
              쇼피의 새로운 소식과 중요한 안내사항을 확인하세요
            </p>
          </div>
        </div>
      </section>

      {/* Notice List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!selectedNotice ? (
              <div className="space-y-4">
                {/* Pinned Notices */}
                {pinnedNotices.length > 0 && (
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Pin className="w-5 h-5 text-blue-600" />
                      <h3>고정 공지</h3>
                    </div>
                    {pinnedNotices.map((notice) => (
                      <Card
                        key={notice.id}
                        className="cursor-pointer hover:shadow-lg transition-shadow border-blue-200 bg-blue-50/50"
                        onClick={() => setSelectedNotice(notice)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary">{notice.category}</Badge>
                                {notice.isNew && (
                                  <Badge className="bg-red-500 hover:bg-red-600">NEW</Badge>
                                )}
                              </div>
                              <h3 className="mb-2">{notice.title}</h3>
                              <p className="text-sm text-gray-500">{notice.date}</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Regular Notices */}
                <div className="space-y-2">
                  {regularNotices.map((notice) => (
                    <Card
                      key={notice.id}
                      className="cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedNotice(notice)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{notice.category}</Badge>
                              {notice.isNew && (
                                <Badge className="bg-red-500 hover:bg-red-600">NEW</Badge>
                              )}
                            </div>
                            <h3 className="mb-2">{notice.title}</h3>
                            <p className="text-sm text-gray-500">{notice.date}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              /* Notice Detail */
              <div>
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="text-blue-600 hover:text-blue-700 mb-6 flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  목록으로 돌아가기
                </button>

                <Card>
                  <CardContent className="p-8">
                    <div className="border-b pb-6 mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary">{selectedNotice.category}</Badge>
                        {selectedNotice.isNew && (
                          <Badge className="bg-red-500 hover:bg-red-600">NEW</Badge>
                        )}
                        {selectedNotice.isPinned && (
                          <Badge variant="outline" className="border-blue-600 text-blue-600">
                            <Pin className="w-3 h-3 mr-1" />
                            고정
                          </Badge>
                        )}
                      </div>
                      <h2 className="mb-4">{selectedNotice.title}</h2>
                      <p className="text-sm text-gray-500">{selectedNotice.date}</p>
                    </div>

                    <div className="prose max-w-none">
                      <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                        {selectedNotice.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <div className="mt-6 flex justify-between">
                  <div className="flex gap-2">
                    {notices.findIndex(n => n.id === selectedNotice.id) > 0 && (
                      <button
                        onClick={() => {
                          const currentIndex = notices.findIndex(n => n.id === selectedNotice.id);
                          setSelectedNotice(notices[currentIndex - 1]);
                        }}
                        className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        이전 글
                      </button>
                    )}
                  </div>
                  <div>
                    {notices.findIndex(n => n.id === selectedNotice.id) < notices.length - 1 && (
                      <button
                        onClick={() => {
                          const currentIndex = notices.findIndex(n => n.id === selectedNotice.id);
                          setSelectedNotice(notices[currentIndex + 1]);
                        }}
                        className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        다음 글
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
