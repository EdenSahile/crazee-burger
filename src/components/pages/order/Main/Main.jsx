import React, { useContext } from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import OrderContext from "../../../../Context/OrderContext";
import { theme } from "../../../../theme";
import Basket from "./Basket";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  background-color: #f5f5f7;
  height: calc(95vh - 10vh);
  box-shadow: ${theme.shadows.strong};
  border-radius: 0px 0px 15px 15px;
  flex: 1;
  overflow-y: scroll;

  display: grid;
  grid-template-columns: 25% 1fr;

  padding: 0 10px;

  .basket {
    background-color: pink;
  }

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-radius: 0px 0px 15px 15px;
  }
`;
