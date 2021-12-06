import styled from "@emotion/styled";
import { sm } from "../../../styles/breakpoints";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 24px;
  background-color: #0b0c0f;
  box-shadow: inset 0 0 0 1px #272d33;
  color: var(--primary-text);
  flex-direction: column;
  ${sm} {
    gap: 30px;
    flex-direction: row;
  }
`;
export const Name = styled.p`
  flex-basis: 25%;
  max-width: 25%;
  font-weight: 600;
`;

export const DescriptionList = styled.dl`
  display: flex;
  flex-wrap: wrap;
  ${sm} {
    flex: 1;
    align-items: center;
    justify-content: space-between;
  }
  & > div {
    margin-bottom: 8px;
    ${sm} {
      margin-left: 20px;
    }
  }
`;

export const Label = styled.dt`
  font-size: 0.875rem;
  color: var(--secondary-text);
`;
export const Value = styled.dd`
  color: var(--primary-text);
  margin-left: 0;
  + dt {
    margin-top: 8px;
  }
`;
