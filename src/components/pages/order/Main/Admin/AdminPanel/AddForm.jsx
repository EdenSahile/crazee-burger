import React, { useContext, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import OrderContext from "../../../../../../Context/OrderContext";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../theme/index";
import Button from "../../../../../reusable-ui/Button";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};
export default function AddForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      // title: newProduct.title,,
      // imageSource: newProduct.imageSource,
      // price: newProduct.price,
    };

    handleAdd(newProductToAdd);

    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });

    // autre façon de faire la même chose que la ligne du dessus
    // const { name, value } = e.target;
    //   setNewProduct({ ...newProduct, [name]:value });
  };

  return (
    <AddFormstyled className="form" onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div className="empty-image">Aucune image</div>
        )}
      </div>
      <div className="input-fields">
        <TextInput
          type="text"
          name="title"
          placeholder="Nom du produit (ex: Super Burger)"
          value={newProduct.title}
          onChange={handleChange}
          icon={<FaHamburger />}
          version="minimalist"
        />
        <TextInput
          type="text"
          name="imageSource"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newProduct.imageSource}
          onChange={handleChange}
          icon={<BsFillCameraFill />}
          version="minimalist"
        />

        <TextInput
          type="text"
          name="price"
          placeholder="Prix"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
          icon={<MdOutlineEuro />}
          version="minimalist"
        />
      </div>
      <div className="submit">
        <Button
          label={"ajouter un nouveau produit au menu"}
          type="submit"
          className="submit-button"
          version="success"
          s
        />

        {/* <button type="submit" className="submit-button">
          Submit button
        </button> */}
        {isSubmitted && (
          <div className="submit-message">
            <FiCheck className="icon" />
            <span className="message">Ajouté avec succès</span>
          </div>
        )}
      </div>
    </AddFormstyled>
  );
}
const AddFormstyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  height: 100%;
  width: 70%;

  .image-preview {
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
  }

  .input-fields {
    grid-area: 1/2/4/2;
    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4/2/-1/-1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      width: 50%;
    }
    .submit-message {
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5px;

      .icon {
        color: ${theme.colors.success};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border: 1px solid ${theme.colors.success};
        border-radius: 50%;
        vertical-align: middle;
      }

      .message {
        margin-left: 5px;
        font-size: ${theme.fonts.size.SM};
        color: ${theme.colors.success};
      }
    }
  }
`;
