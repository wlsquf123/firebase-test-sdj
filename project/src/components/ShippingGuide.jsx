import { Truck, Package, MapPin, Clock, DollarSign, AlertCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function ShippingGuide() {
  const shippingMethods = [
    {
      name: "일반 배송",
      duration: "2-3일",
      cost: "3,000원",
      freeThreshold: "30,000원 이상 무료",
      description: "가장 기본적인 배송 방식으로 전국 어디든 배송됩니다."
    },
    {
      name: "로켓 배송",
      duration: "당일/익일",
      cost: "무료",
      description: "오전 주문 시 당일 배송, 오후 주문 시 익일 배송됩니다.",
      badge: "빠름"
    },
    {
      name: "새벽 배송",
      duration: "익일 오전 7시",
      cost: "3,000원",
      freeThreshold: "40,000원 이상 무료",
      description: "신선식품 및 생활용품 새벽 배송 서비스입니다.",
      badge: "신선"
    }
  ];

  const deliveryProcess = [
    {
      step: 1,
      title: "주문 접수",
      description: "주문이 완료되면 판매자에게 전달됩니다.",
      icon: Package
    },
    {
      step: 2,
      title: "상품 준비",
      description: "판매자가 상품을 포장하고 배송 준비를 합니다.",
      icon: Package
    },
    {
      step: 3,
      title: "배송 시작",
      description: "택배사에 인계되어 배송이 시작됩니다.",
      icon: Truck
    },
    {
      step: 4,
      title: "배송 중",
      description: "고객님의 주소지로 이동 중입니다.",
      icon: MapPin
    },
    {
      step: 5,
      title: "배송 완료",
      description: "상품이 안전하게 도착했습니다.",
      icon: Package
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Truck className="w-12 h-12" />
            </div>
            <h1 className="mb-4 text-4xl md:text-5xl">배송 안내</h1>
            <p className="text-xl text-white/90">
              쇼피의 다양한 배송 서비스를 알아보세요
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">배송 방법</h2>
            <p className="text-xl text-gray-600">
              상황에 맞는 배송 방법을 선택하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {shippingMethods.map((method) => (
              <Card key={method.name} className="border-2 hover:border-blue-600 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3>{method.name}</h3>
                    {method.badge && (
                      <Badge className="bg-blue-600">{method.badge}</Badge>
                    )}
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">소요 시간:</span>
                      <span>{method.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">배송비:</span>
                      <span>{method.cost}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Package className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">무료 배송:</span>
                      <span>{method.freeThreshold}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">배송 프로세스</h2>
            <p className="text-xl text-gray-600">
              주문부터 배송 완료까지의 과정
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Progress Line */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200">
                <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-full"></div>
              </div>

              <div className="grid md:grid-cols-5 gap-8 relative">
                {deliveryProcess.map((process) => {
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
          </div>
        </div>
      </section>

      {/* Detailed Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="tracking" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="tracking">배송 조회</TabsTrigger>
                <TabsTrigger value="areas">배송 지역</TabsTrigger>
                <TabsTrigger value="schedule">배송 시간</TabsTrigger>
                <TabsTrigger value="faq">자주 묻는 질문</TabsTrigger>
              </TabsList>

              <TabsContent value="tracking">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="mb-6">배송 조회 방법</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-3">1. 마이페이지에서 조회</h4>
                        <p className="text-gray-600 mb-2">
                          마이페이지 &gt; 주문내역에서 배송 중인 상품의 송장번호를 확인하실 수 있습니다.
                        </p>
                        <p className="text-gray-600">
                          송장번호를 클릭하시면 택배사 배송 조회 페이지로 이동합니다.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-3">2. 알림톡/문자 확인</h4>
                        <p className="text-gray-600 mb-2">
                          배송이 시작되면 카카오톡 또는 문자로 배송 시작 안내가 발송됩니다.
                        </p>
                        <p className="text-gray-600">
                          알림톡의 배송 조회 버튼을 클릭하시면 실시간 배송 위치를 확인하실 수 있습니다.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-3">3. 실시간 위치 추적</h4>
                        <p className="text-gray-600">
                          마이페이지에서 '실시간 위치 보기'를 클릭하시면 배송 기사님의 현재 위치와 예상 도착 시간을 확인하실 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="areas">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="mb-6">배송 가능 지역</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-3">전국 배송</h4>
                        <p className="text-gray-600">
                          대한민국 전 지역 배송이 가능합니다. (제주 및 도서산간 지역 포함)
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-3">제주 및 도서산간 지역</h4>
                        <p className="text-gray-600 mb-2">
                          제주 및 도서산간 지역은 추가 배송비가 발생할 수 있습니다.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                          <li>제주도: 3,000원 추가</li>
                          <li>도서산간: 5,000원 추가</li>
                          <li>일부 지역은 배송이 제한될 수 있습니다</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-3">배송 불가 지역</h4>
                        <p className="text-gray-600">
                          일부 섬 지역 및 군부대는 배송이 제한될 수 있습니다. 주문 전 배송 가능 여부를 확인해주세요.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="mb-6">배송 시간 안내</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-3">일반 배송 시간</h4>
                        <p className="text-gray-600 mb-2">
                          택배사의 일반적인 배송 시간은 오전 9시부터 오후 6시까지입니다.
                        </p>
                        <p className="text-gray-600">
                          지역 및 배송량에 따라 시간이 조정될 수 있습니다.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-3">새벽 배송 시간</h4>
                        <p className="text-gray-600 mb-2">
                          전날 자정까지 주문하시면 다음 날 오전 7시 이전에 배송됩니다.
                        </p>
                        <p className="text-gray-600">
                          신선식품의 경우 문 앞 배송으로 진행됩니다.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-3">주말 및 공휴일</h4>
                        <p className="text-gray-600">
                          주말 및 공휴일에도 배송이 가능하나, 일부 지역은 배송이 지연될 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faq">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="mb-6">자주 묻는 질문</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2">Q. 배송지를 변경하고 싶어요.</h4>
                        <p className="text-gray-600">
                          A. 배송 준비 중 단계까지는 마이페이지에서 배송지 변경이 가능합니다. 배송이 시작된 후에는 택배사에 직접 연락하셔야 합니다.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-2">Q. 부재 시 어떻게 되나요?</h4>
                        <p className="text-gray-600">
                          A. 부재 시 경비실 또는 무인택배함에 보관되며, 부재 안내문이 남겨집니다. 재배송을 원하실 경우 택배사에 연락하시면 됩니다.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-2">Q. 배송이 지연되고 있어요.</h4>
                        <p className="text-gray-600">
                          A. 악천후, 물량 증가 등의 이유로 배송이 지연될 수 있습니다. 3일 이상 배송 정보가 업데이트되지 않으면 고객센터로 문의해주세요.
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-2">Q. 여러 상품을 주문했는데 따로 배송되나요?</h4>
                        <p className="text-gray-600">
                          A. 판매자가 다르거나 출고지가 다른 경우 개별 배송될 수 있습니다. 각 상품별로 배송비가 부과될 수 있습니다.
                        </p>
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
                  <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-4 text-orange-900">배송 관련 유의사항</h3>
                    <ul className="space-y-2 text-sm text-orange-800">
                      <li>• 배송 예정일은 영업일 기준이며, 주말 및 공휴일은 제외됩니다.</li>
                      <li>• 천재지변, 기상 상황 등으로 인해 배송이 지연될 수 있습니다.</li>
                      <li>• 주소 오기재로 인한 배송 지연 및 반송은 고객님 책임입니다.</li>
                      <li>• 배송 완료 후 분실, 파손 등의 문제는 택배사에 문의하셔야 합니다.</li>
                      <li>• 설, 추석 등 명절 기간에는 배송이 지연될 수 있습니다.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
