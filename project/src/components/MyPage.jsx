import { useState, useEffect } from "react";
import { User, Mail, Lock, Edit2, Camera, LogOut, Package, CreditCard, Trash2, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { CustomLabel } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { toast } from "sonner";

import { doc, deleteDoc, setDoc, getDoc } from "firebase/firestore";  
import { auth } from "../firebase"; // Firebase 설정 파일 경로 맞게 수정
import { db } from "../firebase"; // Firestore 인스턴스
import { reauthenticateWithCredential, EmailAuthProvider, deleteUser, updateProfile  } from "firebase/auth";

export function MyPage({ user, onNavigate, onLogout }) {
  const [nickname, setNickname] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  useEffect(() => {
    if (!user) return;
  
    // email 세팅
    setEmail(user.email || "");
  
    // Firestore에서 닉네임 가져오기
    const fetchUser = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setNickname(docSnap.data().name || "");
      } else {
        setNickname("");
      }
    };
  
    fetchUser();
  }, [user]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // 찜한 상품 목록
  const [wishlistItems, setWishlistItems] = useState([]);
  // 결제 내역
  const [purchaseHistory] = useState([]);

  const handleDeleteAccount = async () => {
    const currentUser  = auth.currentUser;
    if (!currentUser) return;

    const password = prompt("비밀번호를 입력해주세요."); // 간단한 방식 예시
    if (!password) return alert("비밀번호를 입력해야 합니다.");
  
    const credential = EmailAuthProvider.credential(user.email, password);
  
    try {
      await reauthenticateWithCredential(currentUser, credential);
      await deleteDoc(doc(db, "users", currentUser.uid));
      await deleteUser(currentUser);

      alert("회원 탈퇴가 완료되었습니다.");
      onNavigate("landing");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("비밀번호가 올바르지 않습니다.");
      } else {
        console.error(error);
        alert("탈퇴 중 오류가 발생했습니다.");
      }
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const currentUser = auth.currentUser;
    if (!currentUser) return toast.error("로그인 상태를 확인해주세요.");

    try {
      await updateProfile(currentUser, { displayName: nickname });
      await setDoc(doc(db, "users", currentUser.uid), { name: nickname }, { merge: true });
      toast.success("프로필이 수정되었습니다.");
    } catch (error) {
        console.error(error);
        toast.error("프로필 수정 중 오류가 발생했습니다.");
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("새 비밀번호가 일치하지 않습니다.");
      return;
    }
    if (newPassword.length < 8) {
      toast.error("비밀번호는 8자 이상이어야 합니다.");
      return;
    }
    toast.success("비밀번호가 변경되었습니다.");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    if (!verificationCode) {
      toast.error("인증 코드를 입력해주세요.");
      return;
    }
    toast.success("이메일이 변경되었습니다.");
    setEmail(newEmail);
    setNewEmail("");
    setVerificationCode("");
  };

  const handleSendVerificationCode = () => {
    if (!newEmail) {
      toast.error("이메일을 입력해주세요.");
      return;
    }
    toast.success("인증 코드가 발송되었습니다.");
  };

  const handleRemoveFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter(i => i.id !== itemId));
    toast.success("찜한 상품이 삭제되었습니다.");
  };

  if (!user) return <div>불러오는 중...</div>;  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <User className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl">마이 페이지</h1>
          </div>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-2xl">
                        {nickname[0]}
                      </AvatarFallback>
                    </Avatar>
                    
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-1">{nickname || "이름 없음"}</h2>
                    <p className="text-gray-600">{email}</p>
                  </div>
                  <div className="text-right">
                    <Button variant="outline" onClick={onLogout}>
                      <LogOut className="w-4 h-4 mr-2" />
                      로그아웃
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Settings Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="profile">프로필 수정</TabsTrigger>
                <TabsTrigger value="security">보안 설정</TabsTrigger>
                <TabsTrigger value="account">계정 정보</TabsTrigger>
              </TabsList>

              {/* 프로필 수정 */}
              <TabsContent value="profile">
                <Card>
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="mb-2">프로필 수정</h3>
                      <p className="text-sm text-gray-600">
                        닉네임과 연락처를 변경할 수 있습니다
                      </p>
                    </div>

                    <form onSubmit={handleProfileUpdate} className="space-y-6">
                      <div className="space-y-2">
                        <CustomLabel htmlFor="nickname">닉네임</CustomLabel>
                        <Input
                          id="nickname"
                          placeholder="닉네임을 입력해주세요"
                          value={nickname}
                          onChange={(e) => setNickname(e.target.value)}
                        />
                        <p className="text-xs text-gray-500">
                          2-20자 이내로 입력해주세요
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <Button type="submit" className="flex-1">
                          <Edit2 className="w-4 h-4 mr-2" />
                          수정 완료
                        </Button>
                    
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 보안 설정 */}
              <TabsContent value="security">
                <div className="space-y-6">
                  {/* 비밀번호 변경 */}
                  <Card>
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <h3 className="mb-2">비밀번호 변경</h3>
                        <p className="text-sm text-gray-600">
                          안전한 비밀번호로 주기적으로 변경해주세요
                        </p>
                      </div>

                      <form onSubmit={handlePasswordChange} className="space-y-6">
                        <div className="space-y-2">
                          <CustomLabel htmlFor="current-password">현재 비밀번호</CustomLabel>
                          <Input
                            id="current-password"
                            type="password"
                            placeholder="현재 비밀번호를 입력해주세요"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <CustomLabel htmlFor="new-password">새 비밀번호</CustomLabel>
                          <Input
                            id="new-password"
                            type="password"
                            placeholder="새 비밀번호를 입력해주세요"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                          <p className="text-xs text-gray-500">
                            8자 이상, 영문/숫자/특수문자 조합을 권장합니다
                          </p>
                        </div>

                        <div className="space-y-2">
                          <CustomLabel htmlFor="confirm-password">새 비밀번호 확인</CustomLabel>
                          <Input
                            id="confirm-password"
                            type="password"
                            placeholder="새 비밀번호를 다시 입력해주세요"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>

                        <Separator />

                        <Button type="submit" className="w-full">
                          <Lock className="w-4 h-4 mr-2" />
                          비밀번호 변경
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  {/* 이메일 변경 */}
                  <Card>
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <h3 className="mb-2">이메일 변경</h3>
                        <p className="text-sm text-gray-600">
                          새 이메일로 인증 후 변경할 수 있습니다
                        </p>
                      </div>

                      <form onSubmit={handleEmailChange} className="space-y-6">
                        <div className="space-y-2">
                          <CustomLabel htmlFor="current-email">현재 이메일</CustomLabel>
                          <Input
                            id="current-email"
                            type="email"
                            value={email}
                            disabled
                            className="bg-gray-50"
                          />
                        </div>

                        <div className="space-y-2">
                          <CustomLabel htmlFor="new-email">새 이메일</CustomLabel>
                          <div className="flex gap-2">
                            <Input
                              id="new-email"
                              type="email"
                              placeholder="새 이메일을 입력해주세요"
                              value={newEmail}
                              onChange={(e) => setNewEmail(e.target.value)}
                              className="flex-1"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={handleSendVerificationCode}
                            >
                              인증 코드 발송
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <CustomLabel htmlFor="verification-code">인증 코드</CustomLabel>
                          <Input
                            id="verification-code"
                            placeholder="이메일로 받은 인증 코드를 입력해주세요"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                          />
                        </div>

                        <Separator />

                        <Button type="submit" className="w-full">
                          <Mail className="w-4 h-4 mr-2" />
                          이메일 변경
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 계정 정보 */}
              <TabsContent value="account">
                <Card>
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="mb-2">계정 정보</h3>
                      <p className="text-sm text-gray-600">
                        회원님의 계정 정보를 확인하세요
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center justify-between py-3 border-b">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">이메일</p>
                          <p className="text-gray-900">{user.email}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">가입일</p>
                          <p className="text-gray-900">{user && user.metadata?.creationTime
                            ? new Date(user.metadata.creationTime).toLocaleDateString("ko-KR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : "불러오는 중..."}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">마지막 로그인</p>
                          <p className="text-gray-900">{user && user.metadata?.lastSignInTime
                            ? new Date(user.metadata.lastSignInTime).toLocaleDateString("ko-KR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : "불러오는 중..."}</p>
                        </div>
                      </div>

                      <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                        <h4 className="text-red-900 mb-2">회원 탈퇴</h4>
                        <p className="text-sm text-red-700 mb-4">
                          탈퇴 시 모든 정보가 삭제되며 복구할 수 없습니다.
                        </p>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={handleDeleteAccount}
                        >
                          회원 탈퇴하기
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* 결제 내역 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="mb-2">결제 내역</h3>
                  <p className="text-sm text-gray-600">
                    최근 결제 내역을 확인하세요
                  </p>
                </div>

                <div className="space-y-6">
                  {purchaseHistory.map(order => (
                    <div key={order.id} className="flex items-center gap-4">
                      <Package className="w-12 h-12" />
                      <div className="flex-1">
                        <h4 className="mb-1">주문 번호: {order.id}</h4>
                        <p className="text-sm text-gray-600">
                          주문 날짜: {order.date}
                        </p>
                        <div className="space-y-2">
                          {order.items.map(item => (
                            <div key={item.name} className="flex items-center gap-2">
                              <Avatar className="w-8 h-8">
                                <AvatarImage src={item.image} />
                                <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-2xl">
                                  {item.name[0]}
                                </AvatarFallback>
                              </Avatar>
                              <p className="text-sm text-gray-600">
                                {item.name} x {item.quantity}
                              </p>
                              <p className="text-sm text-gray-600">
                                {item.price.toLocaleString()}원
                              </p>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">
                          총 결제 금액: {order.totalAmount.toLocaleString()}원
                        </p>
                        <div className={`inline-flex items-center gap-2 px-4 py-2 ${order.statusColor} rounded-lg border border-blue-100`}>
                          <CreditCard className="w-5 h-5 text-blue-600" />
                          <span className="text-sm">{order.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}