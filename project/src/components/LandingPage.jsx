import { ArrowRight, ShoppingBag, Truck, Shield, Star, Zap, Users, Menu, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function LandingPage({ onGetStarted, onNavigateToLogin, onNavigateTosignup, onNavigate   }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: ShoppingBag, title: "다양한 상품", description: "전자기기부터 패션, 뷰티까지 모든 카테고리의 상품을 한 곳에서" },
    { icon: Truck, title: "빠른 배송", description: "2-3일 이내 배송, 30,000원 이상 무료배송" },
    { icon: Shield, title: "안전한 거래", description: "구매자 보호 프로그램으로 안심하고 쇼핑하세요" },
    { icon: Star, title: "검증된 리뷰", description: "실제 구매자들의 리뷰와 평점으로 현명한 선택" },
    { icon: Zap, title: "간편한 결제", description: "다양한 결제 수단으로 빠르고 편리하게" },
    { icon: Users, title: "고객 지원", description: "친절한 고객센터가 언제나 도와드립니다" }
  ];

  const categories = [
    { name: "전자기기", /*image: "",*/ count: "1,234" },
    { name: "패션", /*image: "",*/ count: "3,456" },
    { name: "홈&리빙", /*image: "",*/ count: "2,345" },
    { name: "뷰티", /*image: "",*/ count: "1,876" }
  ];

  const stats = [
    { value: "10,000+", label: "등록 상품" },
    { value: "50,000+", label: "만족한 고객" },
    { value: "4.8/5", label: "평균 평점" },
    { value: "90%", label: "재구매율" }
  ];

  const faqs = [
    {
      question: "회원가입은 어떻게 하나요?",
      answer: "페이지 우측 상단의 '시작하기' 버튼을 클릭하시면 회원가입 페이지로 이동합니다. 이메일과 비밀번호만 있으면 간편하게 가입하실 수 있으며, 소셜 로그인(Google, Facebook)도 지원합니다."
    },
    {
      question: "배송은 얼마나 걸리나요?",
      answer: "일반 배송의 경우 주문 후 2-3일 이내에 배송됩니다. 도서산간 지역은 1-2일 추가 소요될 수 있습니다. 프리미엄 회원의 경우 로켓배송을 통해 당일 또는 익일 배송이 가능합니다."
    },
    {
      question: "배송비는 얼마인가요?",
      answer: "기본 배송비는 3,000원이며, 30,000원 이상 구매 시 무료배송입니다. 프리미엄 회원은 구매 금액과 상관없이 모든 상품 무료배송 혜택을 받으실 수 있습니다."
    },
    {
      question: "반품/교환은 어떻게 하나요?",
      answer: "상품 수령 후 7일 이내에 '마이페이지 > 주문내역'에서 반품/교환 신청이 가능합니다. 단순 변심의 경우 왕복 배송비가 발생할 수 있으며, 상품 하자의 경우 무료로 교환 또는 환불 처리됩니다."
    },
    {
      question: "어떤 결제 수단을 사용할 수 있나요?",
      answer: "신용카드, 체크카드, 실시간 계좌이체, 무통장입금, 간편결제(카카오페이, 네이버페이, 토스), PayPal 등 다양한 결제 수단을 지원합니다. 모든 결제는 SSL 보안 인증서로 보호됩니다."
    },
    {
      question: "구매자 보호 프로그램이란 무엇인가요?",
      answer: "쇼피는 고객님의 안전한 거래를 위해 구매자 보호 프로그램을 운영합니다. 상품 미배송, 상품 불일치, 허위 광고 등의 문제 발생 시 전액 환불 보장 및 피해 보상을 받으실 수 있습니다."
    },
    {
      question: "판매자로 등록하려면 어떻게 해야 하나요?",
      answer: "일반 회원 가입 후 '판매자 센터'에서 사업자 정보를 등록하시면 됩니다. 개인 판매자와 사업자 모두 등록 가능하며, 간단한 심사 절차를 거친 후 상품을 등록하실 수 있습니다."
    },
    {
      question: "고객센터 운영시간은 어떻게 되나요?",
      answer: "고객센터는 평일 오전 9시부터 오후 6시까지 운영되며, 점심시간(12시~1시)에도 상담이 가능합니다. 긴급 문의사항은 24시간 이메일 지원(support@shopi.com)을 이용하실 수 있습니다."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={onGetStarted}>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">S</div>
              <span className="text-xl">쇼피</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors">기능</button>
              <button onClick={() => scrollToSection('categories')} className="text-gray-700 hover:text-blue-600 transition-colors">카테고리</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">후기</button>
            </nav>

            <div className="flex items-center gap-2">
              <Button onClick={onNavigateToLogin} className="hidden md:inline-flex">로그인</Button>
              <Button onClick={onNavigateTosignup} className="hidden md:inline-flex">회원가입</Button>
              <Button variant="ghost" size="icon" className="md:hidden"><Menu className="w-5 h-5" /></Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 hover:bg-white/30 border-white/30 text-white">✨ 새로운 쇼핑 경험</Badge>
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl">쇼피에서 시작하는<br />스마트한 쇼핑</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">다양한 상품을 합리적인 가격에, 안전하고 편리하게</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={onNavigateTosignup}>
                지금 시작하기 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30" onClick={() => scrollToSection('features')}>
                더 알아보기
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl mb-2">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">왜 쇼피를 선택해야 할까요?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">고객님의 편리하고 안전한 쇼핑을 위해 최선을 다합니다</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-2 hover:border-blue-600 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-gray-50 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">인기 카테고리</h2>
            <p className="text-xl text-gray-600">원하는 상품을 빠르게 찾아보세요</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="group cursor-pointer hover:shadow-lg transition-shadow overflow-hidden" onClick={onGetStarted}>
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <ImageWithFallback src={category.image || null} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count}개 상품</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" onClick={onGetStarted}>모든 카테고리 보기 <ArrowRight className="ml-2 w-5 h-5" /></Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">고객들의 이야기</h2>
            <p className="text-xl text-gray-600">쇼피를 이용하시는 분들의 생생한 후기</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "김*수", role: "일반 회원", content: "상품도 다양하고 배송도 빨라요. 가격도 저렴해서 자주 이용합니다!", rating: 5 },
              { name: "이*영", role: "프리미엄 회원", content: "고객센터 응대가 정말 친절해요. 문제가 생겨도 빠르게 해결해주셔서 좋습니다.", rating: 5 },
              { name: "박*민", role: "일반 회원", content: "리뷰 시스템이 정말 유용해요. 다른 분들의 후기를 보고 안심하고 구매할 수 있어요.", rating: 5 }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p>{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* FAQ Section */}
       <section id="faq" className="py-20 bg-gray-50 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-8 h-8 text-blue-600" />
              <h2>자주 묻는 질문</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              쇼피에 대해 궁금하신 점을 확인해보세요
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <div className="text-center">
                <p className="text-gray-700 mb-4">
                  더 궁금하신 사항이 있으신가요?
                </p>
                <Button variant="outline" onClick={() => onNavigate("faq")}
                > 
                  더 알아보기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">지금 바로 쇼핑을 시작하세요!</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">회원가입하고 첫 구매 시 10% 할인 혜택을 받으세요</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={onNavigateTosignup}>쇼핑 시작하기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

