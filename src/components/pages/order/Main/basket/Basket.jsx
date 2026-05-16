import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index";
export default function Basket() {
  return (
    <BasketStyled>
      <Header>Head</Header>
      <div className="body">Body</div>
      <Header>Footer</Header>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.basket};

  .body {
    background-color: ${theme.colors.background_white};
    flex: 1;
  }
  .footer {
    border-radius: 0px 0px 0px 15px;
  }
`;
