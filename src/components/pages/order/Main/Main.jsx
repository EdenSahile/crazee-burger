import React, { useContext } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import OrderContext from "../../../../Context/OrderContext";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  background-color: #f5f5f7;
  height: calc(95vh-10vh);
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  flex: 1;
  overflow-y: scroll;

  display: grid;
  grid-template-columns: 1fr;

  padding: 10px;

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
