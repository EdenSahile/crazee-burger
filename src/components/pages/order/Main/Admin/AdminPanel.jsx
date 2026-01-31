import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../Context/OrderContext";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      {currentTabSelected === "add" && "Ajouter un produit"}
      {currentTabSelected === "edit" && "Modifier un produit"}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
