import React from "react";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";

export default function HintMessage() {
  return (
    <EditFormStyled>
      <span className="hint">
        Cliquez sur un produit pour le modifier
        <HiCursorClick />
      </span>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};

  position: relative;
  top: 50px;

  span {
    margin-right: 10px;
  }
`;
