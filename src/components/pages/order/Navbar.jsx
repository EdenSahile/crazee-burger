import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo"

export default function Navbar({ username }) {

  return (
    <NavbarStyled>
      
      <div className="left-side">
      <Logo />
        </div>
     
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
    background-color: white;

 display: flex;
 justify-content: space-between;
align-items: center;
padding:0 70px 0 20px;
 height: 98.19px;
 border-radius: 15px 15px 0 0;

 .left-side{
  transform: scale(0.4);
 


  
 }

.right-side{
    border:2px solid red;

  display: flex;
  align-items: center;
  gap:20px



  }



  
`;
