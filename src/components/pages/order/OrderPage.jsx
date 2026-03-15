import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { fakeMenu } from "../../../fakeData/fakeMenu";

import OrderContext from "../../../Context/OrderContext";
import { useState } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  //comportement
  const handleAdd = (newProduct) => {
    //copie state
    const menuCopy = [...menu];
    //manipulation de la copie du tableau
    const menuUpdate = [newProduct, ...menuCopy];
    //Update du state
    setMenu(menuUpdate);
  };

  const handleDelete = (id) => {
    const menuCopy = [...menu];

    const menuFiltered = menuCopy.filter((m) => {
      return m.id !== id;
    });

    setMenu(menuFiltered);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    resetMenu,
    handleAdd,
    handleDelete,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
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
