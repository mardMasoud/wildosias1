import React from "react";
import styled from "styled-components";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  padding: 1.2rem 4.8rem;
  /* grid-column: 2/-1; */
  /* grid-row: 2/-1; */
`;
export default function Header() {
  return <StyledHeader>Header</StyledHeader>;
}
