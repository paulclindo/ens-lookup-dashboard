import styled from "@emotion/styled";
import { sm } from "../../../styles/breakpoints";

export const WrapperInput = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px 0 10px;
  background-color: #0b0c0f;
  box-shadow: inset 0 0 0 1px #272d33;
  color: var(--secondary-text);
  ${sm} {
    width: 300px;
  }
`;

export const Input = styled.input`
  color: var(--primary-text);
  width: 100%;
  height: 100%;
  border: unset;
  padding: 14px 12px;
  background: none;
  outline: none;
  border-radius: 0px;
  appearance: none;
  font-size: 1rem;
`;
