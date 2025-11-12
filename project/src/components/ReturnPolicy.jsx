import { RotateCcw, Package, DollarSign, Calendar, FileText, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function ReturnPolicy() {
  const returnProcess = [
    {
      step: 1,
      title: "반품 신청",
      description: "마이페이지에서 반품 신청",
      icon: FileText
    },
    {
      step: 2,
      title: "승인 확인",
      description: "판매자 승인 확인 (1-2일)",
      icon: Package
    },
    {
      step: 3,
      title: "상품 발송",
      description: "반품 상품 택배 발송",
      icon: Package
    },
    {
      step: 4,
      title: "검수 진행",
      description: "상품 상태 확인",
      icon: Package
    },
    {
      step: 5,
      title: "환불 완료",
      description: "결제 수단으로 환불",
      icon: DollarSign
    }
  ];

  const exchangeProcess = [
    {
      step: 1,
      title: "교환 신청",
      description: "마이페이지에서 교환 신청",
      icon: FileText
    },
    {
      step: 2,
      title: "승인 확인",
      description: "판매자 승인 확인",
      icon: Package
    },
    {
      step: 3,
      title: "상품 발송",
      description: "교환 상품 택배 발송",
      icon: Package
    },
    {
      step: 4,
      title: "검수 진행",
      description: "상품 상태 확인",
      icon: Package
    },
    {
      step: 5,
      title: "재발송",
      description: "새 상품 배송",
      icon: Package
    }
  ];

  const nonReturnableItems = [
    "포장을 개봉한 속옷, 화장품, 식품 등",
    "사용 또는 일부 소비로 상품 가치가 현저히 감소한 경우",
    "시간 경과로 재판매가 곤란한 상품",
    "주문 제작 상품, 맞춤형 상품",
    "복제 가능한 소프트웨어, 음반, DVD 등",
    "신문, 잡지, 도서 등 (포장 훼손 시)"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <RotateCcw className="w-12 h-12" />
            </div>
            <h1 className="mb-4 text-4xl md:text-5xl">교환/반품 안내</h1>
            <p className="text-xl text-white/90">
              쇼피의 교환 및 반품 정책을 안내드립니다
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="mb-2">반품 기한</h3>
                <p className="text-gray-600">
                  상품 수령 후<br />
                  <span className="text-blue-600">7일 이내</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="mb-2">반품 배송비</h3>
                <p className="text-gray-600">
                  단순 변심<br />
                  <span className="text-blue-600">6,000원</span> (왕복)
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Package className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="mb-2">환불 소요 기간</h3>
                <p className="text-gray-600">
                  검수 완료 후<br />
                  <span className="text-blue-600">2-3 영업일</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="return" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12 max-w-md mx-auto">
                <TabsTrigger value="return">반품 절차</TabsTrigger>
                <TabsTrigger value="exchange">교환 절차</TabsTrigger>
              </TabsList>

              <TabsContent value="return">
                <div className="relative">
                  {/* Progress Line */}
                  <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-full"></div>
                  </div>

                  <div className="grid md:grid-cols-5 gap-8 relative">
                    {returnProcess.map((process) => {
                      const Icon = process.icon;
                      return (
                        <div key={process.step} className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 relative">
                            <Icon className="w-10 h-10" />
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-blue-600">{process.step}</span>
                            </div>
                          </div>
                          <h3 className="mb-2">{process.title}</h3>
                          <p className="text-sm text-gray-600">
                            {process.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="exchange">
                <div className="relative">
                  {/* Progress Line */}
                  <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-full"></div>
                  </div>

                  <div className="grid md:grid-cols-5 gap-8 relative">
                    {exchangeProcess.map((process) => {
                      const Icon = process.icon;
                      return (
                        <div key={process.step} className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 relative">
                            <Icon className="w-10 h-10" />
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-blue-600">{process.step}</span>
                            </div>
                          </div>
                          <h3 className="mb-2">{process.title}</h3>
                          <p className="text-sm text-gray-600">
                            {process.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Detailed Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="how" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="how">신청 방법</TabsTrigger>
                <TabsTrigger value="cost">비용 안내</TabsTrigger>
                <TabsTrigger value="refund">환불 안내</TabsTrigger>
                <TabsTrigger value="conditions">반품 조건</TabsTrigger>
              </TabsList>

              <TabsContent value="how">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="mb-6">반품/교환 신청 방법</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge>STEP 1</Badge>
                          <h4>마이페이지 접속</h4>
                        </div>
                        <p className="text-gray-600">
                          로그인 후 '마이페이지 &gt; 주문내역'으로 이동합니다.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge>STEP 2</Badge>
                          <h4>해당 주문 선택</h4>
                        </div>
                        <p className="text-gray-600">
                          반품 또는 교환을 원하시는 상품의 주문 내역을 찾아 클릭합니다.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge>STEP 3</Badge>
                          <h4>반품/교환 신청</h4>
                        </div>
                        <p className="text-gray-600 mb-2">
                          '반품 신청' 또는 '교환 신청' 버튼을 클릭합니다.
                        </p>
                        <p className="text-gray-600">
                          신청 사유와 상세 내용을 입력하고, 필요 시 사진을 첨부합니다.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge>STEP 4</Badge>
                          <h4>수거 방법 선택</h4>
                        </div>
                        <p className="text-gray-600 mb-2">
                          택배 수거 또는 직접 발송 중 선택합니다.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          <li>택배 수거: 지정한 일시에 택배사가 방문하여 수거</li>
                          <li>직접 발송: 고객님이 직접 택배사를 통해 발송</li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge>STEP 5</Badge>
                          <h4>신청 완료</h4>
                        </div>
                        <p className="text-gray-600">
                          신청이 완료되면 판매자 승인 후 반품/교환이 진행됩니다.
                          진행 상황은 주문 내역에서 확인하실 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cost">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="mb-6">반품/교환 비용</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-3">단순 변심에 의한 반품</h4>
                        <div className="bg-gray-50 p-4 rounded-lg mb-2">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700">왕복 배송비</span>
                            <span>6,000원</span>
                          </div>
                          <div className="flex justify-between items-center text-sm text-gray-600">
                            <span>제주/도서산간</span>
                            <span>추가 비용 발생</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          * 착불로 발송 시 반품 택배비가 자동 차감됩니다.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-3">단순 변심에 의한 교환</h4>
                        <div className="bg-gray-50 p-4 rounded-lg mb-2">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700">왕복 배송비</span>
                            <span>6,000원</span>
                          </div>
                          <div className="flex justify-between items-center text-sm text-gray-600">
                            <span>편도 배송비 (수거)</span>
                            <span>3,000원</span>
                          </div>
                          <div className="flex justify-between items-center text-sm text-gray-600">
                            <span>편도 배송비 (재발송)</span>
                            <span>3,000원</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3">상품 하자/오배송</h4>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">배송비</span>
                            <span className="text-blue-600">무료</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          * 판매자 귀책 사유인 경우 모든 비용은 판매자가 부담합니다.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-3">교환 불가 시 환불</h4>
                        <p className="text-gray-600">
                          교환 신청 후 재고가 없어 교환이 불가한 경우, 자동으로 반품 처리되어 환불됩니다.
                          이 경우 왕복 배송비는 고객님 부담입니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="refund">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="mb-6">환불 처리 안내</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-3">환불 소요 기간</h4>
                        <p className="text-gray-600 mb-3">
                          반품 상품이 판매자에게 도착하고 검수가 완료되면 2-3영업일 이내에 환불이 진행됩니다.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• 신용카드: 승인 취소 (카드사에 따라 2-7영업일 소요)</li>
                            <li>• 실시간 계좌이체: 2-3영업일 이내 환불</li>
                            <li>• 무통장입금: 입력하신 계좌로 2-3영업일 이내 환불</li>
                            <li>• 간편결제: 각 결제사 정책에 따름</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3">환불 금액 계산</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-700">상품 금액</span>
                              <span>100,000원</span>
                            </div>
                            <div className="flex justify-between text-red-600">
                              <span>- 반품 배송비 (단순 변심)</span>
                              <span>-6,000원</span>
                            </div>
                            <div className="flex justify-between text-red-600">
                              <span>- 사용한 쿠폰 (재발급 불가)</span>
                              <span>-5,000원</span>
                            </div>
                            <div className="border-t pt-2 mt-2 flex justify-between">
                              <span>실제 환불 금액</span>
                              <span>89,000원</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3">부분 환불</h4>
                        <p className="text-gray-600">
                          여러 상품을 주문하신 경우, 일부 상품만 반품하실 수 있습니다.
                          이 경우 무료배송 조건이 충족되지 않으면 배송비가 추가 차감될 수 있습니다.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-3">환불 불가 케이스</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• 상품 훼손 또는 사용 흔적이 있는 경우</li>
                          <li>• 고객님 과실로 상품 가치가 감소한 경우</li>
                          <li>• 반품 기한(7일)이 지난 경우</li>
                          <li>• 반품 불가 상품인 경우</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="conditions">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="mb-6">반품 가능 조건</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-3">반품 가능한 경우</h4>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>✓ 상품 수령일로부터 7일 이내</li>
                            <li>✓ 상품이 미사용 상태이며 상품 가치가 손상되지 않은 경우</li>
                            <li>✓ 상품의 택, 라벨이 훼손되지 않은 경우</li>
                            <li>✓ 포장이 개봉되지 않은 상태 (일부 상품)</li>
                            <li>✓ 상품 하자, 오배송 등 판매자 귀책 사유</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 text-red-600">반품 불가능한 상품</h4>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <ul className="space-y-2 text-sm text-gray-700">
                            {nonReturnableItems.map((item, index) => (
                              <li key={index}>✗ {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3">반품 거부 사유</h4>
                        <p className="text-gray-600 mb-3">
                          다음의 경우 반품이 거부될 수 있습니다:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• 상품 사용 또는 일부 소비로 가치가 감소한 경우</li>
                          <li>• 시간 경과로 재판매가 어려운 경우</li>
                          <li>• 포장 훼손으로 상품 가치가 감소한 경우</li>
                          <li>• 고객 귀책 사유로 상품이 멸실 또는 훼손된 경우</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-4 text-orange-900">주의사항</h3>
                    <ul className="space-y-2 text-sm text-orange-800">
                      <li>• 반품 신청 후 7일 이내에 상품을 발송하지 않으면 자동으로 신청이 취소됩니다.</li>
                      <li>• 반품 배송비는 착불로 발송하시면 환불 금액에서 자동 차감됩니다.</li>
                      <li>• 교환 상품의 재고가 없을 경우 자동으로 반품 처리됩니다.</li>
                      <li>• 허위/악의적 반품 시 서비스 이용이 제한될 수 있습니다.</li>
                      <li>• 개별 판매자의 반품 정책이 우선 적용될 수 있으니 상품 페이지를 확인해주세요.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <div className="text-center">
                <h3 className="mb-2">반품/교환 관련 문의</h3>
                <p className="text-gray-600 mb-4">
                  더 자세한 내용이 궁금하시거나 도움이 필요하신 경우<br />
                  고객센터로 문의해주세요.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-600">전화:</span>
                    <span>1588-1234</span>
                  </div>
                  <div className="hidden sm:block text-gray-300">|</div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-600">이메일:</span>
                    <span>support@shopi.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
