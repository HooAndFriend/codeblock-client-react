import UserPageLeft from "../../components/UserPageLeft"
import {
  GreenBtn,
  InBox,
  KakaoBtn,
  MiddleText,
  NaverBtn,
  OutBox,
  RightBox,
  TitleText,
} from "./style"

export default function Login() {
  return (
    <OutBox>
      <UserPageLeft />
      <RightBox>
        <InBox>
          <TitleText>Code Block에 오신걸 환영합니다!</TitleText>
          <GreenBtn>Code Block 로그인</GreenBtn>
          <GreenBtn>Code Block 회원가입</GreenBtn>
          <MiddleText>또는</MiddleText>
          <MiddleText>소셜 계정으로 Code Block에 참여해보세요.</MiddleText>
          <NaverBtn>NAVER 계정으로 시작하기</NaverBtn>
          <KakaoBtn>KAKAO 계정으로 시작하기</KakaoBtn>
        </InBox>
      </RightBox>
    </OutBox>
  )
}
