import styled from "@emotion/styled";
import { sm } from "../../styles/breakpoints";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 20px;
  flex-direction: column;
  ${sm} {
    flex-direction: row;
  }
`;
export const TitlePage = styled.h1`
  font-size: 1.5rem;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 0;
`;
export const ListItem = styled.li``;

export const LoadMoreButton = styled.button`
  background: var(--primary-color);
  color: var(--primary-text);
  padding: 10px 20px;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  height: var(--loadMore-height);
`;
