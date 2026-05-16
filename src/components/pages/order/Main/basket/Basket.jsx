import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <div className="body">Body</div>
      <Footer />
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
