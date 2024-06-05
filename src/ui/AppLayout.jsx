import { Outlet } from "react-router-dom";
import Header from "./Header";

import Sidebar from "./Sidebar";
import styled from "styled-components";
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  /* grid-column: 2/-1; */
  /* grid-row: 1/-1; */
`;
const StyledAppLayout = styled.div`
  display: grid;
  /* background-color: aqua; */
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}
