import { useNavigate } from "react-router-dom";
import { theme } from "../../../theme/index";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { IoChevronForward } from "react-icons/io5";





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
      <TextInput type="text"
               value={inputValue}
               onChange={handleChange}
               placeholder="Entrez votre prénom..."
               required
               icon={<BsPersonCircle className="icon" />}
               />
      <PrimaryButton 
      label={"Accéder à mon espace" }
      icon={ <IoChevronForward className="icon" />}/>
    

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
      .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }


  
  

`

