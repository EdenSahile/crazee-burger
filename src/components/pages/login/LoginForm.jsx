import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm({ inputValue, setInputValue }) {
  const handleChange = (e) => setInputValue(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${inputValue}`);

    setInputValue("");
  };

  return (
    <div>
      <h1> Bienvenue chez nous!</h1>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Entrez votre prénom..."
          onChange={handleChange}
          required
        />

        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}
