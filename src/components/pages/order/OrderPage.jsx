import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { fakeMenu } from "../../../fakeData/fakeMenu";

import OrderContext from "../../../Context/OrderContext";
import { useState } from "react";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  //comportement
  const handleAdd = (newProduct) => {
    //copie state
    const menuCopy = [...menu];
    //manipulation de la copie du tableau
    const menuUpdate = [newProduct, ...menuCopy];
    //Update du  state
    setMenu(menuUpdate);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;

  align-items: center;

  font-family: "Open Sans", sans-serif;

  .container {
    width: 1400px;

    height: 95vh;
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound};
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;
