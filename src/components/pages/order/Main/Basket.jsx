import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme/index";
export default function Basket() {
  return (
    <BasketStyled>
      <div className="head">Head</div>
      <div className="body">Body</div>
      <div className="footer">Footer</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.basket};
  .head {
    background-color: ${theme.colors.background_dark};
    height: 70px;
  }
  .body {
    background-color: ${theme.colors.background_white};
    flex: 1;
  }
  .footer {
    background-color: ${theme.colors.background_dark};
    border-radius: 0px 0px 0px 15px;

    height: 70px;
  }
`;
