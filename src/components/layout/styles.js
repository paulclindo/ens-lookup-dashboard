import styled from "@emotion/styled";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { sm } from "../../styles/breakpoints";

export const Background = styled.div`
  background: var(--color-neutral);
  min-height: 100vh;
`;
export const Logo = styled(LogoIcon)`
  width: 85px;
  ${sm} {
    width: unset;
  }
`;
export const WrapperHeader = styled.header`
  box-shadow: var(--box-shadow-sm);
`;
export const Header = styled.div`
  max-width: var(--container-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin: 0 auto;
  padding: 0 24px;
`;
export const Main = styled.main`
  margin: 0 auto;
  padding: 0 24px;
  max-width: var(--container-width);
`;
