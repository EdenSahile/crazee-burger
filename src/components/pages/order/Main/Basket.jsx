import React from "react";
import styled from "styled-components";

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

  background-color: #f5f5f7;
  .head {
    background-color: red;
  }
  .body {
    background-color: blue;
  }
  .footer {
    background-color: green;
  }
`;
