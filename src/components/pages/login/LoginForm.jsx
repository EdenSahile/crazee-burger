import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";


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
      
        <div >
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
      
          <button>Accéder à votre espace</button>
        </div>
      </LoginFormStyled>
    
  );
}

const LoginFormStyled = styled.form`


  width: 464px;
  height: 438px;



  .container-text {
    font-family: "Amatic SC", sans-serif;
    font-weight: ${theme.weights.bold};
    color:${theme.colors.white};


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

    .input-with-icon{
      background-color: #fff;
      border-radius: ${theme.borderRadius.round};
      display: flex;
      align-items: center;
      padding:18px 24px;
      margin:18px 0;
      
   
      .icon{
        font-size:15px;
        margin-right: 8px;
        color:#93a2b1
      }
      input {
      font-size: 15px;
      color:#17161a;
      
      border:none;
    }

    ::placeholder{
      background: white;
      color:lightgrey
    }

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


`;
