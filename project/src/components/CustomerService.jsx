import { Mail, Phone, Clock, MessageCircle, Headphones, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { CustomLabel as Label } from "./ui/label";
import { useState } from "react";
import { toast } from "sonner";

export function CustomerService({ onNavigate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const contactMethods = [
    {
      icon: Phone,
      title: "전화 문의",
      description: "1588-1234",
      detail: "평일 09:00 - 18:00"
    },
    {
      icon: Mail,
      title: "이메일 문의",
      description: "tlsehdwns0320@gmail.com",
      detail: "24시간 접수 가능"
    },
    {
      icon: MessageCircle,
      title: "카카오톡 상담",
      description: "@쇼피고객센터",
      detail: "평일 09:00 - 18:00"
    },
    {
      icon: Clock,
      title: "운영 시간",
      description: "평일 09:00 - 18:00",
      detail: "주말 및 공휴일 휴무"
    }
  ];

  const quickLinks = [
    { title: "자주 묻는 질문", onClick: () => onNavigate("faq") },
    { title: "공지사항", onClick: () => onNavigate("notices") },
    { title: "배송 안내", onClick: () => onNavigate("shipping") },
    { title: "교환/반품 안내", onClick: () => onNavigate("returns") }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("모든 항목을 입력해주세요.");
      return;
    }
    toast.success("문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Headphones className="w-12 h-12" />
            </div>
            <h1 className="mb-4 text-4xl md:text-5xl">고객센터</h1>
            <p className="text-xl text-white/90">
              쇼피를 이용하시면서 궁금하신 점이 있으신가요?<br />
              친절하게 도와드리겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">연락 방법</h2>
            <p className="text-xl text-gray-600">
              편하신 방법으로 문의해주세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className="border-2 hover:border-blue-600 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="mb-2">{method.title}</h3>
                    <p className="text-gray-900 mb-1">{method.description}</p>
                    <p className="text-sm text-gray-500">{method.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">자주 찾는 도움말</h2>
            <p className="text-xl text-gray-600">
              원하시는 정보를 빠르게 찾아보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickLinks.map((link) => (
              <Button
                key={link.title}
                variant="outline"
                className="h-auto py-4"
                onClick={link.onClick}
              >
                {link.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">1:1 문의하기</h2>
              <p className="text-xl text-gray-600">
                문의사항을 남겨주시면 빠르게 답변드리겠습니다
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input
                      id="name"
                      placeholder="이름을 입력해주세요"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="이메일을 입력해주세요"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">제목</Label>
                    <Input
                      id="subject"
                      placeholder="문의 제목을 입력해주세요"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">문의 내용</Label>
                    <Textarea
                      id="message"
                      placeholder="문의하실 내용을 자세히 입력해주세요"
                      className="min-h-[200px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    문의하기
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-gray-700 text-center">
                * 문의하신 내용은 영업일 기준 1-2일 이내에 답변드립니다.<br />
                긴급한 문의는 전화 상담을 이용해주세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">오시는 길</h2>
              <p className="text-xl text-gray-600">
                쇼피 본사를 방문하시려면 사전 예약이 필요합니다
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2">쇼피 본사</h3>
                    <p className="text-gray-600">
                      서울특별시 강남구 테헤란로 123<br />
                      쇼피타워 10층
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">지도 영역</p>
                </div>

                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <p>
                    <strong className="text-gray-900">지하철:</strong> 2호선 강남역 3번 출구에서 도보 5분
                  </p>
                  <p>
                    <strong className="text-gray-900">버스:</strong> 강남역 정류장 하차
                  </p>
                  <p>
                    <strong className="text-gray-900">주차:</strong> 건물 지하 주차장 이용 가능 (2시간 무료)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
