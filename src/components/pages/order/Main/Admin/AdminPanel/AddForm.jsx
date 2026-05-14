import React, { useContext, useState } from "react";
import OrderContext from "../../../../../../Context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import AdminForm from "./AdminForm";

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
    <AdminForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      product={newProduct}
      isSubmitted={isSubmitted}
    />
  );
}
