import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import OrderContext from "../../../../../../Context/OrderContext";

export default function ImagePreview() {
  const { newProduct } = useContext(OrderContext);
  return (
    <ImagePreviewstyled className="image-preview">
      {newProduct.imageSource ? (
        <img src={newProduct.imageSource} alt={newProduct.title} />
      ) : (
        <div className="empty-image">Aucune image</div>
      )}
    </ImagePreviewstyled>
  );
}

const ImagePreviewstyled = styled.div`
  grid-area: 1/1/4/2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .empty-image {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }
`;
