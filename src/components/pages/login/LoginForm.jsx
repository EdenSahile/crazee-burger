import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function LoginForm({ inputValue, setInputValue }) {
  const handleChange = (e) => setInputValue(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${inputValue}`);

    setInputValue("");
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="container-text">
        <h1> Bienvenue chez nous!</h1>
        <h2 >Connectez-vous</h2>
        <hr/>
      </div>
      
      <div className="cta-container">
        <input
          type="text"
          value={inputValue}
          placeholder="Entrez votre prénom..."
          onChange={handleChange}
          required
        />

        <button>Accéder à votre espace</button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin:O auto;


width:464px;
  .container-text {
    font-family: "Amatic SC", sans-serif;
    font-weight: ${theme.weights.bold};
    background: grey;
    width:100%;

    h1 {
      font-size: ${theme.fonts.P5};
    }
    h2 {
  
      font-size: ${theme.fonts.P4};
    }
     hr{
  border: 1px solid${theme.colors.primary};
  }

  }

 

  .cta-container {
    background: pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 438px;
    width:100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${theme.fonts.P0};

    input {
      border: 1px solid yellow;
    }

    button {
      border: 1px solid purple;
      font-weight: ${theme.weights.bold};
    }
  }
`;
