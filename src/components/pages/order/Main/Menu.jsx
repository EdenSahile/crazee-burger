import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Product from "./Product";

export default function Menu() {
  const [menu, setmenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        return (
          // <Product title={produit.title} imageSource={produit.imageSource} price={produit.price} />
          <Product {...produit}/>

        )
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  justify-items: center;

  .produit {
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    width: 240px;
    height: 330px;
    .image {
      width: 100px;
      height: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .description {
      border: 1px solid fuchsia;
    }
  }
`;
