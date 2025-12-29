import React from 'react'
import { theme } from "../../../theme";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";


export default function InputLogin({inputValue,handleChange}) {


  

  return (
       <InputLoginStyled>
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
      
         </InputLoginStyled>
  )
}

const InputLoginStyled=styled.div`

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
 

`
