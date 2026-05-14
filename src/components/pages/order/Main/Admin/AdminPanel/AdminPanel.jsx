import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import OrderContext from "../../../../../../Context/OrderContext";
import { getTabsConfig, getTabSelected } from "../getTabsConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function AdminPanel() {
  const { currentTabSelected, productSelected } = useContext(OrderContext);

  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT;
  const tabs = getTabsConfig(hasAlreadyBeenClicked);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>{tabSelected && tabSelected.content}</AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 240px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  padding: 30px 5%;
  box-sizing: border-box;
  box-shadow: ${theme.shadows.subtle};
`;
