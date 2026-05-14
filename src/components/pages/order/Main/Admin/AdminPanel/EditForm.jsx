import { useContext } from "react";
import OrderContext from "../../../../../../Context/OrderContext";
import styled from "styled-components";
import { GetInputTextsConfig } from "./inputTextConfig";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import { theme } from "../../../../../../theme";

export default function EditForm() {
  //state
  const { productSelected, handleEdit, setProductSelected, titleEditRef } =
    useContext(OrderContext);

  const inputTexts = GetInputTextsConfig(productSelected);

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
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            // au lieu d'écrire tout le code du dessus, on peut faire un spread operator pour récupérer toutes les autres propriétés de l'objet input
            // {...input} va récupérer toutes les propriétés de l'objet input et les passer en props au composant TextInput
            onChange={handleChange}
            version="minimalist"
            ref={input.name === "title" ? titleEditRef : null} // on veut seulement le ref du champ title, pas des autres champs
          />
        ))}
      </div>
      <div className="submit">
        <span className="sentence">
          Cliquer sur un produit du menu pour le modifier{" "}
          <span className="live-update">en temps réel</span>
        </span>{" "}
      </div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
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

    .sentence {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size.SM};
      .live-update {
        text-decoration: underline;
      }
    }
  }
`;
