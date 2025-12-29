import React from 'react'
import { theme } from "../../../theme";
import styled from "styled-components";


export default function TextInput({value,onChange,icon,...extraProps}) {


  return (
           <InputLoginStyled>
            {icon && icon}
             <input
               type="text"
               value={value}
               onChange={onChange}
               {...extraProps}
             
             />
           </InputLoginStyled>
  )
}

const InputLoginStyled=styled.div`
 
    background-color: #fff;
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1
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
 
  
  
 

`
