import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { GetInputTextsConfig } from "./inputTextConfig";

export default function AdminForm({
  onSubmit,
  onChange,
  product,
  ref,
  QUELQUECHOSE,
}) {
  const inputTexts = GetInputTextsConfig(product);

  return (
    <AdminFormStyled className="form" onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} title={product.title} />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            name={input.name}
            value={input.value}
            placeholder={input.placeholder}
            icon={input.icon}
            // au lieu d'écrire tout le code du dessus, on peut faire un spread operator pour récupérer toutes les autres propriétés de l'objet input
            // {...input} va récupérer toutes les propriétés de l'objet input et les passer en props au composant TextInput
            onChange={onChange}
            version="minimalist"
            ref={ref && input.name === "title" ? ref : null}
          />
        ))}
      </div>
      <div className="submit">{QUELQUECHOSE}</div>
    </AdminFormStyled>
  );
}
const AdminFormStyled = styled.form`
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
      /* width: 50%; */
      height: 100%;
    }
  }
`;
