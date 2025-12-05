import React, { useState } from 'react'

export default function LoginPage() {
 const [inputValue, setInputValue] = useState("")

 const handleChange=(e)=>setInputValue(e.target.value);
  

 const handleSubmit=(e)=>{
  e.preventDefault()
   alert(`Bonjour ${inputValue}`)
 setInputValue("");
 }




  return (
   
     <div>
       <h1> Bienvenue chez nous !</h1>
       <h2>Connectez-vous</h2>
       <form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={inputValue} placeholder="Entrez votre prénom..."onChange={handleChange}  required/>
        <button>Accéder à votre espace</button>
       </form>
      
      </div>
  )
}
