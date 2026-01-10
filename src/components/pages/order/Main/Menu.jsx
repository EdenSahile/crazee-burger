import React, { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";

export default function Menu() {
  const [menu, setmenu] = useState(fakeMenu2);

  console.log(menu);
  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        return (
          <div className="produit">
            <div className="image">
              <img src={produit.imageSource} alt={produit.title} />
            </div>

            <div className="info-text">
              <div className="title">{produit.title}</div>
              <div className="description">
                <div className="price">{produit.price}</div>
                <button className="add-button">Ajouter</button>
              </div>
            </div>
          </div>
        );
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
      }
    }
  }
`;
