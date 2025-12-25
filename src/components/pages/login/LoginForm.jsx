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
        <hr />
        <h2>Connectez-vous</h2>
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
  justify-content: center;

  margin: 0 auto;

  width: 464px;
  height: 438px;
  border: 1px solid black;

  .container-text {
    font-family: "Amatic SC", sans-serif;
    font-weight: ${theme.weights.bold};

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

  .cta-container {
    display: flex;
    flex-direction: column;
     align-items: center;
    gap: 12.8px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${theme.fonts.P0};

    input {
      width: 400px;
      height: 55px;
      background-color: ${theme.colors.white};
      border-radius: ${theme.borderRadius.round};
      border:1px solid grey
    }

    button {
      border: 1px solid purple;
      font-weight: ${theme.weights.bold};
      width: 400px;
      height: 53px;
      background-color: ${theme.colors.primary_burger};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary_burger};
      border-radius: ${theme.borderRadius.round};
    }
  }
`;
