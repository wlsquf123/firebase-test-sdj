import { FileText, Shield, Users, AlertCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-12 h-12" />
            </div>
            <h1 className="mb-4 text-4xl md:text-5xl">이용약관</h1>
            <p className="text-xl text-white/90">
              쇼피 서비스 이용약관 및 정책을 확인하세요
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="service" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="service">서비스 이용약관</TabsTrigger>
                <TabsTrigger value="privacy">개인정보 처리방침</TabsTrigger>
                <TabsTrigger value="seller">판매자 약관</TabsTrigger>
              </TabsList>

              <TabsContent value="service">
                <Card>
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h2 className="mb-2">쇼피 서비스 이용약관</h2>
                      <p className="text-sm text-gray-500">시행일: 2025년 1월 1일</p>
                    </div>

                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-8">
                        <section>
                          <h3 className="mb-4">제1장 총칙</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="mb-2">제1조 (목적)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                본 약관은 쇼피(이하 "회사")가 제공하는 전자상거래 관련 서비스(이하 "서비스")를 이용함에 있어
                                회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                              </p>
                            </div>

                            <div>
                              <h4 className="mb-2">제2조 (정의)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                이 약관에서 사용하는 용어의 정의는 다음과 같습니다:
                              </p>
                              <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                                <li>"회사"라 함은 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 
                                재화 등을 거래할 수 있도록 설정한 가상의 영업장을 운영하는 사업자를 말합니다.</li>
                                <li>"이용자"란 "회사"에 접속하여 이 약관에 따라 "회사"가 제공하는 서비스를 받는 회원 및 
                                비회원을 말합니다.</li>
                                <li>"회원"이라 함은 "회사"에 개인정보를 제공하여 회원등록을 한 자로서, "회사"의 정보를 
                                지속적으로 제공받으며, "회사"가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
                                <li>"비회원"이라 함은 회원에 가입하지 않고 "회사"가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="mb-2">제3조 (약관의 명시와 개정)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
                              </p>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있으며,
                                개정된 약관은 적용일자 및 개정사유를 명시하여 현행약관과 함께 공지합니다.
                              </p>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">제2장 회원가입 및 서비스 이용</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="mb-2">제4조 (서비스의 제공 및 변경)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                회사는 다음과 같은 업무를 수행합니다:
                              </p>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>재화 또는 용역에 대한 정보 제공 및 구매계약의 체결</li>
                                <li>구매계약이 체결된 재화 또는 용역의 배송</li>
                                <li>기타 회사가 정하는 업무</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="mb-2">제5조 (회원가입)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 
                                회원가입을 신청합니다.
                              </p>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 
                                회원으로 등록합니다.
                              </p>
                            </div>

                            <div>
                              <h4 className="mb-2">제6조 (회원 탈퇴 및 자격 상실)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.
                              </p>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다.
                              </p>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">제3장 구매계약</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="mb-2">제7조 (구매신청)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                이용자는 회사에서 다음 또는 이와 유사한 방법에 의하여 구매를 신청하며, 
                                회사는 이용자가 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야 합니다.
                              </p>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>재화 등의 검색 및 선택</li>
                                <li>성명, 주소, 전화번호, 전자우편주소 등의 입력</li>
                                <li>약관내용, 청약철회권이 제한되는 서비스 등에 대한 확인</li>
                                <li>결제방법의 선택</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="mb-2">제8조 (계약의 성립)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                회사는 제7조와 같은 구매신청에 대하여 다음 각 호에 해당하면 승낙하지 않을 수 있습니다. 
                                다만, 미성년자와 계약을 체결하는 경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 
                                또는 법정대리인이 계약을 취소할 수 있다는 내용을 고지하여야 합니다.
                              </p>
                            </div>

                            <div>
                              <h4 className="mb-2">제9조 (지급방법)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                회사에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각 호의 방법 중 
                                가용한 방법으로 할 수 있습니다:
                              </p>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>폰뱅킹, 인터넷뱅킹, 메일 뱅킹 등의 각종 계좌이체</li>
                                <li>선불카드, 직불카드, 신용카드 등의 각종 카드 결제</li>
                                <li>온라인무통장입금</li>
                                <li>전자화폐에 의한 결제</li>
                                <li>기타 전자적 지급 방법에 의한 대금 지급 등</li>
                              </ul>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">제4장 청약철회 등</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="mb-2">제10조 (청약철회 등)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                회사와 재화등의 구매에 관한 계약을 체결한 이용자는 수신확인의 통지를 받은 날부터 7일 이내에는 
                                청약의 철회를 할 수 있습니다. 다만, 청약철회에 관하여 전자상거래 등에서의 소비자보호에 관한 
                                법률에 달리 정함이 있는 경우에는 동 법 규정에 따릅니다.
                              </p>
                            </div>

                            <div>
                              <h4 className="mb-2">제11조 (청약철회 등의 효과)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                회사는 이용자로부터 재화 등을 반환받은 경우 3영업일 이내에 이미 지급받은 재화 등의 대금을 
                                환급합니다. 이 경우 회사가 이용자에게 재화등의 환급을 지연한 때에는 그 지연기간에 대하여 
                                전자상거래 등에서의 소비자보호에 관한 법률 시행령에서 정하는 지연이자율을 곱하여 산정한 
                                지연이자를 지급합니다.
                              </p>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">제5장 개인정보보호</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="mb-2">제12조 (개인정보보호)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                회사는 이용자의 정보수집 시 구매계약 이행에 필요한 최소한의 정보를 수집합니다.
                              </p>
                              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                회사는 회원가입 시 구매계약이행에 필요한 정보를 미리 수집하지 않습니다. 
                                다만, 관련 법령상 의무이행을 위하여 구매계약 이전에 본인확인이 필요한 경우로서 
                                최소한의 특정 개인정보를 수집하는 경우에는 그러하지 아니합니다.
                              </p>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                회사는 이용자의 개인정보를 수집·이용하는 때에는 당해 이용자에게 그 목적을 고지하고 
                                동의를 받습니다.
                              </p>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">제6장 기타</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="mb-2">제13조 (회사의 의무)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 
                                이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화·용역을 제공하는데 최선을 다하여야 합니다.
                              </p>
                            </div>

                            <div>
                              <h4 className="mb-2">제14조 (이용자의 의무)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                이용자는 다음 행위를 하여서는 안 됩니다:
                              </p>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>신청 또는 변경 시 허위 내용의 등록</li>
                                <li>타인의 정보 도용</li>
                                <li>회사에 게시된 정보의 변경</li>
                                <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                                <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                                <li>회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="mb-2">제15조 (분쟁해결)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 
                                피해보상처리기구를 설치·운영합니다.
                              </p>
                            </div>

                            <div>
                              <h4 className="mb-2">제16조 (재판권 및 준거법)</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                회사와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 대한민국 법을 준거법으로 합니다.
                              </p>
                            </div>
                          </div>
                        </section>

                        <div className="pt-8 border-t">
                          <p className="text-sm text-gray-500 text-center">
                            부칙<br />
                            본 약관은 2025년 1월 1일부터 시행됩니다.
                          </p>
                        </div>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="privacy">
                <Card>
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h2 className="mb-2">개인정보 처리방침</h2>
                      <p className="text-sm text-gray-500">시행일: 2025년 2월 1일</p>
                    </div>

                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-8">
                        <section>
                          <h3 className="mb-4">1. 개인정보의 수집 및 이용 목적</h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다:
                          </p>
                          <div className="space-y-3">
                            <div>
                              <h4 className="mb-2 text-sm">가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</h4>
                              <p className="text-sm text-gray-600">
                                콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융 서비스
                              </p>
                            </div>
                            <div>
                              <h4 className="mb-2 text-sm">나. 회원 관리</h4>
                              <p className="text-sm text-gray-600">
                                회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지,
                                가입 의사 확인, 연령확인, 불만처리 등 민원처리, 고지사항 전달
                              </p>
                            </div>
                            <div>
                              <h4 className="mb-2 text-sm">다. 마케팅 및 광고에 활용</h4>
                              <p className="text-sm text-gray-600">
                                이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계
                              </p>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">2. 수집하는 개인정보 항목</h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="mb-2">가. 회원가입 시 수집항목</h4>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>필수항목: 이메일, 비밀번호, 이름, 휴대전화번호</li>
                                <li>선택항목: 생년월일, 성별</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="mb-2">나. 상품 구매 시 수집항목</h4>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>필수항목: 수령인 정보(이름, 주소, 연락처), 결제정보</li>
                                <li>선택항목: 배송 메시지</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="mb-2">다. 자동으로 수집되는 정보</h4>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>IP 주소, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록</li>
                              </ul>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">3. 개인정보의 보유 및 이용기간</h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 
                            단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
                          </p>
                          <div className="space-y-3">
                            <div>
                              <h4 className="mb-2 text-sm">가. 회사 내부 방침에 의한 정보보유 사유</h4>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>부정이용기록: 1년 (부정 이용 방지)</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="mb-2 text-sm">나. 관련법령에 의한 정보보유 사유</h4>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
                                <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)</li>
                                <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
                                <li>표시/광고에 관한 기록: 6개월 (전자상거래법)</li>
                                <li>웹사이트 방문기록: 3개월 (통신비밀보호법)</li>
                              </ul>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">4. 개인정보의 파기절차 및 방법</h3>
                          <div className="space-y-3">
                            <div>
                              <h4 className="mb-2 text-sm">가. 파기절차</h4>
                              <p className="text-sm text-gray-600">
                                이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져
                                (종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라
                                (보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.
                              </p>
                            </div>
                            <div>
                              <h4 className="mb-2 text-sm">나. 파기방법</h4>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제</li>
                                <li>종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각</li>
                              </ul>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">5. 개인정보 제공 및 공유</h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 
                            다만, 아래의 경우에는 예외로 합니다:
                          </p>
                          <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                            <li>이용자들이 사전에 동의한 경우</li>
                            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 
                            수사기관의 요구가 있는 경우</li>
                          </ul>
                        </section>

                        <section>
                          <h3 className="mb-4">6. 이용자의 권리와 그 행사방법</h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 
                            가입해지를 요청할 수도 있습니다.
                          </p>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            개인정보 조회·수정을 위해서는 '개인정보변경'을, 가입해지(동의철회)를 위해서는 
                            "회원탈퇴"를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.
                          </p>
                        </section>

                        <section>
                          <h3 className="mb-4">7. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 
                            수시로 불러오는 '쿠키(cookie)'를 사용합니다.
                          </p>
                          <div className="space-y-2 text-sm text-gray-600">
                            <p>쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 
                            보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.</p>
                            <p>이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹브라우저에서 
                            옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 
                            아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</p>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">8. 개인정보관리책임자</h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-700 mb-2">
                              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 
                              정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 
                              지정하고 있습니다.
                            </p>
                            <div className="space-y-1 text-sm text-gray-600">
                              <p>개인정보보호 책임자: 김보안</p>
                              <p>연락처: privacy@shopi.com</p>
                              <p>전화번호: 02-1234-5678</p>
                            </div>
                          </div>
                        </section>

                        <div className="pt-8 border-t">
                          <p className="text-sm text-gray-500 text-center">
                            부칙<br />
                            본 방침은 2025년 2월 1일부터 시행됩니다.
                          </p>
                        </div>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="seller">
                <Card>
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h2 className="mb-2">판매자 이용약관</h2>
                      <p className="text-sm text-gray-500">시행일: 2025년 1월 1일</p>
                    </div>

                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-8">
                        <section>
                          <h3 className="mb-4">제1조 (목적)</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            본 약관은 쇼피(이하 "회사")가 운영하는 온라인 마켓플레이스에서 판매 활동을 하고자 하는 
                            판매자(이하 "판매자")와 회사 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 
                            목적으로 합니다.
                          </p>
                        </section>

                        <section>
                          <h3 className="mb-4">제2조 (판매자 등록)</h3>
                          <div className="space-y-3">
                            <p className="text-sm text-gray-600 leading-relaxed">
                              판매자는 회사가 정한 양식에 따라 사업자 정보를 입력하고 필요한 서류를 제출하여 
                              판매자 등록을 신청합니다.
                            </p>
                            <div>
                              <h4 className="mb-2 text-sm">필수 제출 서류</h4>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>사업자등록증 사본</li>
                                <li>통신판매업 신고증 사본</li>
                                <li>신분증 사본</li>
                                <li>정산 계좌 정보</li>
                              </ul>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">제3조 (상품 등록 및 관리)</h3>
                          <div className="space-y-3">
                            <p className="text-sm text-gray-600 leading-relaxed">
                              판매자는 판매하고자 하는 상품의 정보를 정확하게 등록하여야 하며, 
                              등록된 정보에 대한 책임은 판매자에게 있습니다.
                            </p>
                            <div>
                              <h4 className="mb-2 text-sm">상품 등록 시 제공 정보</h4>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>상품명, 가격, 상품 설명</li>
                                <li>상품 이미지 (최소 3장 이상 권장)</li>
                                <li>재고 수량</li>
                                <li>배송 정보 (배송비, 배송 방법, 배송 기간)</li>
                                <li>교환/반품 정책</li>
                              </ul>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">제4조 (수수료)</h3>
                          <div className="space-y-3">
                            <p className="text-sm text-gray-600 leading-relaxed mb-2">
                              판매자는 회사에 다음과 같은 수수료를 지급합니다:
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <ul className="space-y-2 text-sm text-gray-600">
                                <li>• 판매 수수료: 판매 금액의 10%</li>
                                <li>• 결제 수수료: 거래당 3.5%</li>
                                <li>• 광고 수수료: 별도 계약에 따름</li>
                              </ul>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              수수료는 정산 시 판매 대금에서 자동 차감됩니다.
                            </p>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">제5조 (정산)</h3>
                          <div className="space-y-3">
                            <p className="text-sm text-gray-600 leading-relaxed">
                              회사는 주 1회 정산을 원칙으로 하며, 정산 기준일은 매주 월요일입니다.
                            </p>
                            <div>
                              <h4 className="mb-2 text-sm">정산 프로세스</h4>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>구매 확정일 기준 7일 후 정산 대상에 포함</li>
                                <li>수수료 차감 후 판매자 계좌로 입금</li>
                                <li>정산 내역은 판매자 센터에서 확인 가능</li>
                              </ul>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">제6조 (주문 처리)</h3>
                          <div className="space-y-3">
                            <p className="text-sm text-gray-600 leading-relaxed">
                              판매자는 주문 접수 후 2영업일 이내에 상품을 발송하여야 합니다.
                            </p>
                            <div>
                              <h4 className="mb-2 text-sm">발송 지연 시 조치</h4>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>구매자에게 지연 사유 및 예상 발송일 안내</li>
                                <li>3회 이상 발송 지연 시 판매자 계정 제한 가능</li>
                              </ul>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">제7조 (반품/교환 처리)</h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            판매자는 구매자의 반품/교환 신청에 대해 신속하고 성실하게 처리하여야 합니다.
                          </p>
                          <div className="space-y-2 text-sm text-gray-600">
                            <p>• 반품/교환 신청 접수 시 1영업일 이내 승인/거부 처리</p>
                            <p>• 상품 회수 후 2영업일 이내 검수 및 환불/재발송 처리</p>
                            <p>• 판매자 귀책 사유의 경우 배송비 판매자 부담</p>
                          </div>
                        </section>

                        <section>
                          <h3 className="mb-4">제8조 (금지 사항)</h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            판매자는 다음 각 호의 행위를 하여서는 안 됩니다:
                          </p>
                          <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                            <li>위조품, 모조품, 불법 복제품 판매</li>
                            <li>허위 또는 과장 광고</li>
                            <li>타 판매자의 상품 정보 무단 도용</li>
                            <li>구매자 개인정보 무단 수집 및 이용</li>
                            <li>회사의 사전 승인 없는 직거래 유도</li>
                            <li>리뷰 조작 등 부정한 방법으로 판매 촉진</li>
                          </ul>
                        </section>

                        <section>
                          <h3 className="mb-4">제9조 (책임 및 손해배상)</h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            판매자는 등록한 상품 정보의 정확성, 상품의 품질, 배송, 반품/교환 등에 대한 
                            모든 책임을 부담합니다.
                          </p>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            판매자의 귀책사유로 인해 구매자 또는 회사에 손해가 발생한 경우, 
                            판매자는 이에 대한 배상 책임을 집니다.
                          </p>
                        </section>

                        <section>
                          <h3 className="mb-4">제10조 (계약 해지)</h3>
                          <div className="space-y-3">
                            <p className="text-sm text-gray-600 leading-relaxed">
                              판매자는 언제든지 판매자 센터에서 계약 해지를 신청할 수 있습니다.
                            </p>
                            <div>
                              <h4 className="mb-2 text-sm">회사의 계약 해지 사유</h4>
                              <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                                <li>금지 사항 위반 시</li>
                                <li>3개월 이상 판매 실적이 없는 경우</li>
                                <li>구매자 불만이 지속적으로 발생하는 경우</li>
                                <li>사업자등록 말소 등으로 영업이 불가능한 경우</li>
                              </ul>
                            </div>
                          </div>
                        </section>

                        <div className="pt-8 border-t">
                          <p className="text-sm text-gray-500 text-center">
                            부칙<br />
                            본 약관은 2025년 1월 1일부터 시행됩니다.
                          </p>
                        </div>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">관련 정보</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="mb-2">개인정보보호</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    고객님의 개인정보를 안전하게 보호합니다
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="mb-2">이용자 보호</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    안전한 거래를 위한 보호 정책
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <AlertCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="mb-2">문의하기</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    약관 관련 문의사항은 고객센터로
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
