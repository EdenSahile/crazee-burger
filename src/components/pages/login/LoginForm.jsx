import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

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

      <div>
        <div className="input-with-icon">
          <BsPersonCircle className="icon" />
          <input
            type="text"
            value={inputValue}
            placeholder="Entrez votre prénom..."
            onChange={handleChange}
            required
          />
        </div>
        <button className="button-with-icon" >
          <span> Accéder à votre espace</span>
          <IoChevronForward  className="icon"/>
        </button>
      </div>
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

  .input-with-icon {
    background-color: #fff;
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }

    input {
      font-size: 15px;
      color: #17161a;
      width: 100%;

      border: none;
    }

    ::placeholder {
      background: white;
      color: lightgrey;
    }
  }

  .button-with-icon {
    width: 100%;
    display: inline-flex;
    justify-content: center;
align-items: center;
    background-color: ${theme.colors.primary_burger};
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: ${theme.borderRadius.round};
    font-size: 15px;
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary_burger};

    &:hover:not(:disabled) {
      color: ${theme.colors.primary};
      background-color:${theme.colors.white} ;
    }

    &:active {
      color: white;
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }
}


`
