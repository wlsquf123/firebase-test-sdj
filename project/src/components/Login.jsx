import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CustomLabel } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import app from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [name, setName] = useState("");
  const auth = getAuth(app);

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, password);
    onLogin(); // 로그인 성공 시 상위 컴포넌트로 알림 
  } catch (error) {
    alert("로그인 실패: " + error.message);
  }
};

  /*const handleSignup = async (e) => {
  e.preventDefault();
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("회원가입 성공! 로그인해주세요.");
  } catch (error) {
    alert("회원가입 실패: " + error.message);
  }
};
*/

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    onLogin();
  };

  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
            S
          </div>
          <CardTitle>쇼피에 오신 것을 환영합니다</CardTitle>
          <CardDescription>로그인하고 쇼핑을 시작하세요</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-1 mb-6">
              <TabsTrigger value="login">로그인</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <CustomLabel htmlFor="login-email">이메일</CustomLabel>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="이메일 주소를 입력하세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <CustomLabel htmlFor="login-password">비밀번호</CustomLabel>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>로그인 유지</span>
                  </label>
                  <a href="/forgot-password" className="text-blue-600 hover:underline">
                    비밀번호 찾기
                  </a>
                </div>

                <Button type="submit" className="w-full">로그인</Button>
                <div className="text-center mt-4 text-sm">
                계정이 없으신가요?{" "}
                <button type="button" className="text-blue-600 hover:underline" onClick={() => window.location.href = "/signup"}>
                  가입하기
            </button>
</div>

              </form>
            </TabsContent>
          </Tabs>

          <div className="relative my-6">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
              또는
            </span>
          </div>

          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleSocialLogin('Google')}
            >
              {/* Google 아이콘 */}
              Google로 계속하기
            </Button>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleSocialLogin('Facebook')}
            >
              {/* Facebook 아이콘 */}
              Facebook으로 계속하기
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
