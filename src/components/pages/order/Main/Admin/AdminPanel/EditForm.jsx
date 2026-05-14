import { useContext } from "react";
import OrderContext from "../../../../../../Context/OrderContext";
import { GetInputTextsConfig } from "./inputTextConfig";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import EditInfoMessage from "./EditInfoMessage";
import AdminForm from "./AdminForm";

export default function EditForm() {
  //state
  const { productSelected, handleEdit, setProductSelected, titleEditRef } =
    useContext(OrderContext);

  // comportement
  const handleChange = (e) => {
    const { name, value } = e.target;

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(productBeingUpdated); // update le formulaire
    handleEdit(productBeingUpdated); // update le menu
  };

  // affichage
  return (
    <AdminForm
      product={productSelected}
      onChange={handleChange}
      ref={titleEditRef}
    >
      <EditInfoMessage />
    </AdminForm>
  );
}
