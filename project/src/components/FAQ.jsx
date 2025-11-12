import { HelpCircle, Search } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { useState } from "react";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "account",
      name: "회원/계정",
      badge: "HOT",
      faqs: [
        {
          question: "회원가입은 어떻게 하나요?",
          answer: "페이지 우측 상단의 '시작하기' 또는 '로그인' 버튼을 클릭하시면 회원가입 페이지로 이동합니다. 이메일과 비밀번호만 있으면 간편하게 가입하실 수 있으며, 소셜 로그인(Google, Facebook)도 지원합니다. 회원가입 후 이메일 인증을 완료하시면 모든 서비스를 이용하실 수 있습니다."
        },
        {
          question: "비밀번호를 잊어버렸어요.",
          answer: "로그인 페이지에서 '비밀번호 찾기'를 클릭하시면 가입 시 등록하신 이메일로 비밀번호 재설정 링크가 발송됩니다. 이메일을 받지 못하신 경우 스팸 메일함을 확인해주세요. 그래도 해결되지 않으면 고객센터로 문의해주시기 바랍니다."
        },
        {
          question: "회원 탈퇴는 어떻게 하나요?",
          answer: "마이페이지 > 설정 > 회원 정보 관리에서 회원 탈퇴를 진행하실 수 있습니다. 탈퇴 시 주문 내역, 적립금, 쿠폰 등 모든 정보가 삭제되며 복구가 불가능합니다. 진행 중인 주문이나 반품/교환 건이 있을 경우 완료 후 탈퇴가 가능합니다."
        },
        {
          question: "개인정보를 수정하고 싶어요.",
          answer: "마이페이지에서 이름, 연락처, 주소 등 개인정보를 수정하실 수 있습니다. 이메일 주소 변경 시에는 본인 확인을 위한 인증 절차가 필요합니다. 회원 정보는 언제든지 수정 가능하며, 변경 즉시 적용됩니다."
        }
      ]
    },
    {
      id: "order",
      name: "주문/결제",
      faqs: [
        {
          question: "주문은 어떻게 하나요?",
          answer: "원하시는 상품을 선택 후 '장바구니 담기' 버튼을 클릭하시고, 장바구니에서 주문하실 상품을 확인 후 '주문하기'를 클릭하시면 됩니다. 배송지 정보와 결제 수단을 입력하시면 주문이 완료됩니다. 비회원도 주문이 가능하지만, 회원 가입 시 더 많은 혜택을 받으실 수 있습니다."
        },
        {
          question: "결제 수단은 무엇이 있나요?",
          answer: "신용카드, 체크카드, 실시간 계좌이체, 무통장입금, 간편결제(카카오페이, 네이버페이, 토스), PayPal 등 다양한 결제 수단을 지원합니다. 모든 결제는 SSL 보안 인증서로 보호되어 안전하게 진행됩니다. 해외 결제의 경우 추가 수수료가 발생할 수 있습니다."
        },
        {
          question: "주문을 취소하고 싶어요.",
          answer: "배송 준비 중 단계까지는 마이페이지 → 주문내역에서 직접 취소가 가능합니다. 배송이 시작된 후에는 반품 절차를 통해 취소하실 수 있습니다. 결제하신 금액은 취소 완료 후 2-3영업일 이내에 환불됩니다. 무통장입금의 경우 환불 계좌를 입력해주셔야 합니다."
        },
        {
          question: "할인 쿠폰은 어떻게 사용하나요?",
          answer: "주문서 작성 시 '쿠폰 사용' 항목에서 보유하신 쿠폰을 선택하실 수 있습니다. 쿠폰은 발급일로부터 사용 기한이 정해져 있으며, 기한이 지나면 자동으로 소멸됩니다. 중복 사용이 불가한 쿠폰도 있으니 쿠폰 상세 내용을 확인해주세요."
        }
      ]
    },
    {
      id: "shipping",
      name: "배송",
      badge: "HOT",
      faqs: [
        {
          question: "배송은 얼마나 걸리나요?",
          answer: "일반 배송의 경우 주문 후 2-3일 이내에 배송됩니다. 도서산간 지역은 1-2일 추가 소요될 수 있습니다. 프리미엄 회원의 경우 로켓배송을 통해 당일 또는 익일 배송이 가능합니다. 주말 및 공휴일에는 배송이 지연될 수 있으며, 기상 상황에 따라 배송이 지연될 수 있습니다."
        },
        {
          question: "배송비는 얼마인가요?",
          answer: "기본 배송비는 3,000원이며, 30,000원 이상 구매 시 무료배송입니다. 프리미엄 회원은 구매 금액과 상관없이 모든 상품 무료배송 혜택을 받으실 수 있습니다. 제주 및 도서산간 지역은 추가 배송비가 발생할 수 있습니다."
        },
        {
          question: "배송지를 변경하고 싶어요.",
          answer: "배송 준비 중 단계까지는 마이페이지 → 주문내역에서 배송지를 변경하실 수 있습니다. 배송이 시작된 후에는 택배사에 직접 연락하셔서 배송지 변경을 요청하셔야 합니다. 배송지 변경이 어려운 경우 상품 수령 후 재배송을 진행해드립니다."
        },
        {
          question: "배송 조회는 어떻게 하나요?",
          answer: "마이페이지 → 주문내역에서 송장번호를 확인하실 수 있으며, 송장번호 클릭 시 택배사 배송 조회 페이지로 이동합니다. 배송이 시작되면 카카오톡 또는 문자로 배송 시작 안내가 발송됩니다. 실시간 배송 추적도 가능합니다."
        }
      ]
    },
    {
      id: "return",
      name: "교환/반품",
      faqs: [
        {
          question: "반품/교환은 어떻게 하나요?",
          answer: "상품 수령 후 7일 이내에 마이페이지 → 주문내역에서 반품/교환 신청이 가능합니다. 단순 변심의 경우 왕복 배송비가 발생할 수 있으며, 상품 하자의 경우 무료로 교환 또는 환불 처리됩니다. 상품은 미사용 상태여야 하며, 태그 및 라벨이 훼손되지 않아야 합니다."
        },
        {
          question: "반품 배송비는 누가 부담하나요?",
          answer: "단순 변심에 의한 반품의 경우 고객님께서 왕복 배송비를 부담하셔야 합니다. 상품 하자, 오배송 등 판매자 귀책 사유인 경우 배송비는 판매자가 부담합니다. 반품 배송비는 상품별로 다를 수 있으니 상품 상세 페이지를 확인해주세요."
        },
        {
          question: "환불은 언제 되나요?",
          answer: "반품 상품이 판매자에게 도착하고 확인이 완료되면 2-3영업일 이내에 환불이 진행됩니다. 신용카드 결제의 경우 카드사 승인 취소 처리되며, 무통장입금의 경우 입력하신 계좌로 환불됩니다. 환불 처리 시 알림톡이 발송됩니다."
        },
        {
          question: "교환 불가 상품이 있나요?",
          answer: "속옷, 화장품, 식품 등 위생상 문제가 있는 상품은 개봉 후 교환/반품이 불가합니다. 주문 제작 상품, 맞춤형 상품도 교환/반품이 제한될 수 있습니다. 각 상품의 교환/반품 정책은 상품 상세 페이지에서 확인하실 수 있습니다."
        }
      ]
    },
    {
      id: "product",
      name: "상품",
      faqs: [
        {
          question: "재입고 알림은 어떻게 받나요?",
          answer: "품절된 상품의 상세 페이지에서 '재입고 알림 신청' 버튼을 클릭하시면 상품이 재입고될 때 카카오톡 또는 이메일로 알림을 받으실 수 있습니다. 재입고 알림은 회원만 이용 가능한 서비스입니다."
        },
        {
          question: "상품 리뷰는 어떻게 작성하나요?",
          answer: "구매하신 상품에 한해 리뷰 작성이 가능합니다. 마이페이지 → 주문내역에서 배송 완료된 상품의 '리뷰 쓰기' 버튼을 클릭하여 작성하실 수 있습니다. 포토 리뷰 작성 시 추가 적립금을 받으실 수 있습니다."
        },
        {
          question: "상품 문의는 어떻게 하나요?",
          answer: "각 상품 상세 페이지 하단의 '상품 문의' 탭에서 궁금하신 내용을 문의하실 수 있습니다. 판매자가 직접 답변을 드리며, 일반적으로 1-2일 이내에 답변이 등록됩니다. 비공개 문의도 가능합니다."
        },
        {
          question: "위시리스트는 무엇인가요?",
          answer: "관심 있는 상품을 저장해두는 기능입니다. 상품 이미지의 하트 아이콘을 클릭하면 위시리스트에 추가되며, 마이페이지에서 확인하실 수 있습니다. 위시리스트에 담긴 상품의 가격이 할인되면 알림을 받으실 수 있습니다."
        }
      ]
    },
    {
      id: "membership",
      name: "멤버십/혜택",
      faqs: [
        {
          question: "프리미엄 회원은 무엇인가요?",
          answer: "월 9,900원으로 무제한 무료배송, 추가 할인, 독점 상품 구매 등의 혜택을 받으실 수 있는 유료 멤버십입니다. 첫 달은 무료로 체험하실 수 있으며, 언제든지 해지 가능합니다. 월 3회 이상 주문하시는 분들께 추천드립니다."
        },
        {
          question: "적립금은 어떻게 사용하나요?",
          answer: "상품 구매 시 결제 금액의 1-5%가 적립금으로 적립됩니다. 적립금은 다음 구매 시 현금처럼 사용하실 수 있으며, 최소 사용 금액은 1,000원입니다. 적립금 유효기간은 적립일로부터 1년이며, 기한이 지나면 자동 소멸됩니다."
        },
        {
          question: "등급별 혜택이 있나요?",
          answer: "구매 금액에 따라 실버, 골드, VIP 등급으로 나뉘며, 등급별로 추가 적립률, 생일 쿠폰, 무료배송 횟수 등 차별화된 혜택을 제공합니다. 등급은 최근 6개월 구매 금액을 기준으로 매월 1일 갱신됩니다."
        },
        {
          question: "친구 추천 이벤트는 무엇인가요?",
          answer: "친구를 초대하여 회원가입 및 첫 구매 시 추천인과 신규 회원 모두에게 쿠폰과 적립금을 지급하는 이벤트입니다. 마이페이지에서 추천 링크를 복사하여 친구에게 공유하시면 됩니다. 추천 인원에는 제한이 없습니다."
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-12 h-12" />
            </div>
            <h1 className="mb-4 text-4xl md:text-5xl">자주 묻는 질문</h1>
            <p className="text-xl text-white/90 mb-8">
              쇼피 이용 중 궁금하신 점을 빠르게 찾아보세요
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="궁금한 내용을 검색해보세요..."
                className="pl-12 h-14 bg-white text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="relative">
                    {category.name}
                    {category.badge && (
                      <Badge className="absolute -top-2 -right-2 px-1 py-0 h-5 text-xs">
                        {category.badge}
                      </Badge>
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>

              {filteredCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card>
                    <CardContent className="p-6">
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                              <span className="flex items-start gap-2">
                                <span className="text-blue-600 flex-shrink-0">Q.</span>
                                <span>{faq.question}</span>
                              </span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex items-start gap-2 pt-2">
                                <span className="text-purple-600 flex-shrink-0">A.</span>
                                <p className="text-gray-600 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            {searchQuery && filteredCategories.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="mb-2">검색 결과가 없습니다</h3>
                  <p className="text-gray-600 mb-6">
                    다른 검색어로 다시 시도해보세요
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Contact CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
              <div className="text-center">
                <h3 className="mb-2">원하는 답변을 찾지 못하셨나요?</h3>
                <p className="text-gray-600 mb-4">
                  고객센터로 문의하시면 친절하게 도와드리겠습니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
