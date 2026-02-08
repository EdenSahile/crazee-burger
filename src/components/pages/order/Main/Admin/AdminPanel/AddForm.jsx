import React, { useContext, useState } from "react";
// import { BsFillCameraFill } from "react-icons/bs";
// import { FaHamburger } from "react-icons/fa";
// import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
// import TextInput from "../../../../../reusable-ui/TextInput";
import OrderContext from "../../../../../../Context/OrderContext";

const EMPTY_PRODUCT = {
  id: "",
  title: "Nouveau produit",
  imageSource: "",
  price: 14,
};
export default function AddForm() {
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
          <div>Aucune image</div>
        )}
      </div>
      <div className="input-fields">
        <input
          type="text"
          name="title"
          placeholder="Nom"
          value={newProduct.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageSource"
          placeholder="Image URL"
          value={newProduct.imageSource}
          onChange={handleChange}
        />

        <input
          type="text"
          name="price"
          placeholder="Prix"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
        />
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
