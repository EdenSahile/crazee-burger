import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginForm({ inputValue, setInputValue }) {
  const handleChange = (e) => setInputValue(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${inputValue}`);

    setInputValue("");
  };

  return (
     
      <form action="submit" onSubmit={handleSubmit}>
         <h1 style={{color:"green"}}> Bienvenue chez nous!</h1>
      <h2 style={{fontSize:15}}>Connectez-vous</h2>

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
      </form>
   
  );
}

