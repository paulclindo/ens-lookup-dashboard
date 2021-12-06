import styled from "@emotion/styled";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { sm } from "../../styles/breakpoints";

export const Background = styled.header`
  background: #000;
  min-height: 100vh;
`;
export const Logo = styled(LogoIcon)`
  width: 85px;
  ${sm} {
    width: unset;
  }
`;
export const WrapperHeader = styled.header`
  box-shadow: inset 0 -1px 0 hsl(210deg 13% 18%);
`;
export const Header = styled.div`
  max-width: var(--container-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--topbar-height);
  margin: 0 auto;
  padding: 0 24px;
`;
export const Main = styled.main`
  margin: 0 auto;
  padding: 0 24px;
  max-width: var(--container-width);
`;
