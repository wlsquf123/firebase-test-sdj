    import { useState } from "react";
    import { Button } from "./ui/button";
    import { Input } from "./ui/input";
    import { CustomLabel } from "./ui/label";
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
    import { Separator } from "./ui/separator";

    // firebase import
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
    import { auth, db } from "../firebase";


    export function Signup({ onNavigate }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");
    const [gender, setGender] = useState(""); // "male" / "female"
    const [birthdate, setBirthdate] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            if (password !== confirmPassword) {
                alert("비밀번호가 일치하지 않습니다.");
                return;
            }
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("userId", "==", userId));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                alert("이미 사용 중인 아이디입니다.");
                return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", auth.currentUser.uid), {
            userId,
            name,
            gender,
            birthdate,
            email,
            isAdmin: false,
            isSeller: false,
        });
        alert("회원가입 성공! 로그인해주세요.");
        onNavigate("login"); // 로그인 페이지로 이동
        } catch (error) {
        alert("회원가입 실패: " + error.message);
        }
    };


    

    const handleSocialLogin = (provider) => {
        console.log(`Signing up with ${provider}`);
        alert(`${provider} 로그인은 현재 미지원입니다.`);
    };

    return (
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <Card className="w-full max-w-md">
            <CardHeader className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
                S
            </div>
            <CardTitle>회원가입</CardTitle>
            <CardDescription>계정을 만들어 쇼핑을 시작하세요</CardDescription>
            </CardHeader>


            
            <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">

            <div className="space-y-2">
                <CustomLabel htmlFor="signup-id">아이디</CustomLabel>
                <Input
                    id="signup-id"
                    type="text"
                    //placeholder="사용할 ID를 입력하세요"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
                </div>
                <div className="space-y-2">
                <CustomLabel htmlFor="signup-name">닉네임</CustomLabel>
                <Input
                    id="signup-name"
                    type="text"
                    // placeholder="이름을 입력하세요"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </div>

                <div className="space-y-2">
                <CustomLabel htmlFor="signup-email">이메일</CustomLabel>
                <div className="flex gap-2">
                    <Input
                    id="signup-email"
                    type="email"
                    //placeholder="이메일 주소를 입력하세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                </div>

                <div className="space-y-2">
                <CustomLabel htmlFor="signup-password">비밀번호</CustomLabel>
                <Input
                    id="signup-password"
                    type="password"
                    //placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>

                <div className="space-y-2">
                <CustomLabel htmlFor="confirm-password">비밀번호 재확인</CustomLabel>
                <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                </div>

                <div className="space-y-2">
                <CustomLabel htmlFor="birthdate">생년월일</CustomLabel>
                <Input
                    id="birthdate"
                    type="date"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    required
                />
                </div>

                <div className="space-y-2">
                <CustomLabel>성별</CustomLabel>
                <div className="flex gap-4">
                    <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={(e) => setGender(e.target.value)}
                        required
                    /> 남성
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={(e) => setGender(e.target.value)}
                        required
                    /> 여성
                    </label>
                </div>
                </div>

                <Button type="submit" className="w-full">회원가입</Button>
            </form>

            {/* 로그인 이동 링크 */}
            <div className="text-center mt-4 text-sm">
                이미 계정이 있으신가요?{" "}
                <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => onNavigate("login")}
                >
                로그인
                </button>
            </div>

            {/* 소셜 로그인 */}
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
                Google로 계속하기
                </Button>

                <Button
                variant="outline"
                className="w-full"
                onClick={() => handleSocialLogin('Facebook')}
                >
                Facebook으로 계속하기
                </Button>
            </div>
            </CardContent>
        </Card>
        </div>
    );
    }
