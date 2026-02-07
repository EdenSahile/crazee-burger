import React, { useContext } from "react";
// import { BsFillCameraFill } from "react-icons/bs";
// import { FaHamburger } from "react-icons/fa";
// import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
// import TextInput from "../../../../../reusable-ui/TextInput";
import OrderContext from "../../../../../../Context/OrderContext";

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const newProduct = {
    id: new Date().getTime(),
    title: "Nouveau produit",
    imageSource:
      "https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/4:3/w_2666,h_2000,c_limit/basically-burger-1.jpg",
    price: 9.99,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newProduct);
  };
  return (
    <AddFormstyled className="form" onSubmit={handleSubmit}>
      <div div className="image-preview">
        Aucune image
      </div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Image URL" />

        <input type="text" placeholder="Prix" />
      </div>
      <button type="submit" className="submit-button">
        Submit button
      </button>
    </AddFormstyled>
  );
}
const AddFormstyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  height: 100%;
  width: 70%;

  .image-preview {
    background-color: orange;
    grid-area: 1/1/4/2;
  }

  .input-fields {
    background-color: blue;
    grid-area: 1/2/4/2;
    display: grid;
  }

  .submit-button {
    background-color: green;
    grid-area: 4/2/-1/-1;
    display: grid;
    width: 50%;
  }
`;
