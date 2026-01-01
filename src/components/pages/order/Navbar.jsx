import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {

  return (
    <NavbarStyled>
      
      <div className="left-side">
       LOGO
        </div>
      NAV
      <div className="right-side">
        <div className="right-side-name">
        <h1> Bonjour {username}</h1>
        <Link to="/">
          <button> Déconnexion</button>
        </Link>
        </div>
        <div className="right-side-icon">
          ICON
          </div>
       
      </div>
       
      
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
     border:3px solid green;

 display: flex;
 justify-content: space-between;
align-items: center;
 padding: 20px 30px;

 .left-side{
  border:2px solid red;
 }

.right-side{
    border:2px solid red;

  display: flex;
  align-items: center;
  gap:20px



  }



  
`;
