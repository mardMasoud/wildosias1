import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
const StyledSidbar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-right: 1px solid var(--color-grey-100);
  /* grid-column: 1/3; */
  grid-row: 1 / span 2;
  /* grid-row: 1/2; */
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
export default function SideBar() {
  return (
    <StyledSidbar>
      <Logo />
      <MainNav />
    </StyledSidbar>
  );
}
