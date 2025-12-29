import { useNavigate } from "react-router-dom";
import { theme } from "../../../theme";
import styled from "styled-components";
import InputLogin from "./InputLogin";
import ButtonLogin from "./ButtonLogin";

export default function LoginForm({ inputValue, setInputValue }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      console.log(inputValue);
    e.preventDefault();
    navigate(`/order/${inputValue}`);
      

  };

    const handleChange = (e) => setInputValue(e.target.value);


  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="container-text">
        <h1> Bienvenue chez nous!</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <InputLogin inputValue={inputValue}  handleChange={handleChange}/>
      <ButtonLogin />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  width: 400px;

  .container-text {
    font-family: "Amatic SC", sans-serif;
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};

    h1 {
      font-size: ${theme.fonts.P5};
    }
    h2 {
      font-size: ${theme.fonts.P4};
    }
    hr {
      border: 1px solid ${theme.colors.primary};
    }
  }
`;
