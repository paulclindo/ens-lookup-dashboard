import VisuallyHidden from "./../common/VisuallyHidden";
import { Background, Header, WrapperHeader, Main, Logo } from "./styles";

export default function Layout({ children }) {
  return (
    <Background>
      <WrapperHeader>
        <Header>
          <Logo />
        </Header>
      </WrapperHeader>
      <Main>{children}</Main>
    </Background>
  );
}
