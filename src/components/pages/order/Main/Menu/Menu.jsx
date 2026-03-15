import styled from "styled-components";
// import { fakeMenu } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../../theme";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import { useContext, useRef } from "react";
import OrderContext from "../../../../../Context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const IMAGE_BY_DEFAULT = "/src/assets/coming-soon.png";

export default function Menu() {
  const { menu, isModeAdmin, handleDelete, resetMenu, setProductSelected } =
    useContext(OrderContext);

  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  const handleClick = (idProductClicked) => {
    const productSelected = menu.find(
      (product) => product.id === idProductClicked,
    );
    setProductSelected(productSelected);
  };

  // affichage
  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDelete(id)}
            onClick={() => handleClick(id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 50px 50px 150px;
  grid-row-gap: 60px;
  justify-items: center;
  overflow-y: scroll;
`;
