import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CustomLabel } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import app from "../firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const auth = getAuth(app);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("비밀번호 재설정 메일을 보냈습니다. 메일함을 확인하세요.");
    } catch (error) {
      alert("메일 전송 실패: " + error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
            S
          </div>
          <CardTitle>비밀번호 찾기</CardTitle>
          <CardDescription>가입 시 사용한 이메일을 입력하세요</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="space-y-2">
              <CustomLabel htmlFor="reset-email">이메일</CustomLabel>
              <Input
                id="reset-email"
                type="email"
                placeholder="이메일 주소를 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              비밀번호 재설정 메일 보내기
            </Button>
    
            <div className="text-center mt-4 text-sm">
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => (window.location.href = "/login")}
              >
                로그인으로 돌아가기
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
