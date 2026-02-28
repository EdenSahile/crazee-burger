import React, { useContext, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import OrderContext from "../../../../../../Context/OrderContext";
import { theme } from "../../../../../../theme/index";
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};
export default function AddForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);

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
      <ImagePreview />
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
        />
        {isSubmitted && <SubmitMessage />}
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
  }
`;
