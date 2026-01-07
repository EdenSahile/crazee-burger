import styled from 'styled-components';
import { theme } from "../../../../theme";
import Profile from './Profile';


export default function NavbarRightSide({username}) {
  return (
     <NavbarRightStyled  className="right-side">
      {/* <div className="admin-button">Admin Button</div> */}
        <Profile username={username}/>
    
      </NavbarRightStyled>
  )
}

const NavbarRightStyled = styled.div`


    display: flex;
    align-items: center;
    padding-right: 50px;
    gap: 10px;
  

    /* .admin-button{
      background: lightblue;

    } */

  
  
`;