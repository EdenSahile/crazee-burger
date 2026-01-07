import React from 'react'
import styled from 'styled-components';
import Menu from './Menu';

export default function Main() {
  return (
    <MainStyled>
     
    {/* <div className="basket">
basket 
    </div> */}
    
    <Menu/>


    </MainStyled>
  )
}

const MainStyled = styled.main`


    background-color:#F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  border-radius: 0px 0px 15px 15px;
    flex:1;
    overflow-y: scroll;

    display: grid;
  grid-template-columns: 1fr;

    padding:10px;
  
  
/* .basket{
 background-color:red;
  
} */


  
  
`;
