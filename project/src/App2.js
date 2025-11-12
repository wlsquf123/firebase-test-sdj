import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';

/*
1. 페이지 단위 기획
2. 각 페이지에 들어갈 컴포넌트 기획


로그인 페이지
- 로그인 기능을 하는 컴포넌트
-> 아이디 입력, 비번 입력, 로그인 버튼, 회원가입 버튼

회원가입 페이지
-> 아이디(이메일) 입력, 비밀번호 입력, 비밀번호 확인 입력, (닉네임 입력, 연락처, 생년월일, 성별 등 입력), 약관

랜딩 페이지 (Landing)
- 브랜드에 대한 혹은 서비스에 대한 설명을 적어놓은 페이지
-> 로그인 이동, 회원가입 이동
- 보통 컴포넌트 2~3개 생성

메인 페이지
- 서비스에 대한 페이지
- 서비스에 관련된 추가적 페이지가 존재
- 서비스에 관련된 추가적인 컴포넌트가 존재

src/pages 폴더 생성
- 페이지들을 저장해놓는 폴더

src/components 폴더 생성
- 컴포넌트들을 저장해놓는 폴더
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/signin' element={<SignInPage/>}></Route>
        <Route path='/signup' element={<SignUpPage/>}></Route>
        <Route path='/home' element={<MainPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
