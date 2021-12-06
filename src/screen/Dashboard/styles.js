import styled from "@emotion/styled";
import { sm } from "../../styles/breakpoints";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 24px;
  flex-direction: column;
  ${sm} {
    align-items: flex-end;
    flex-direction: row;
  }
`;
export const TitlePage = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0;
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
  margin: auto;
  display: block;
  background: var(--color-primary);
  color: var(--text-primary);
  padding: 10px 20px;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  height: 40px;
  margin-bottom: 20px;
  width: 100%;
  ${sm} {
    min-width: 200px;
    width: auto;
    margin-bottom: 0;
  }
`;
