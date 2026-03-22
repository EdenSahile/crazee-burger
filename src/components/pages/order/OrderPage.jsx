import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { fakeMenu } from "../../../fakeData/fakeMenu";

import OrderContext from "../../../Context/OrderContext";
import { useState } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { deepClone } from "../../../utils/array";

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
    const menuCopy = JSON.parse(JSON.stringify(menu));
    //manipulation de la copie du tableau
    const menuUpdate = [newProduct, ...menuCopy];
    //Update du state
    setMenu(menuUpdate);
  };

  const handleDelete = (id) => {
    const menuCopy = deepClone();
    const menuFiltered = menuCopy.filter((m) => {
      return m.id !== id;
    });

    setMenu(menuFiltered);
  };

  const handleEdit = (productBeingEdited) => {
    console.log("productBeingEdited : ", productBeingEdited);

    //1 - copie state (Deep Clone)

    const menuCopy = JSON.parse(JSON.stringify(menu));

    //2 - manipulation
    const indexOfProductToEdit = menu.findIndex(
      (menuproduct) => menuproduct.id === productBeingEdited.id,
    );
    menuCopy[indexOfProductToEdit] = productBeingEdited;

    //3 - update du state
    setMenu(menuCopy);
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
    handleEdit,
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
