import styled from 'styled-components';
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";


export default function NavbarRightSide({username}) {
  return (
     <NavbarRightStyled  className="right-side">
        <div className="right-side-userInfo">
          <h1 className="salutation">
            {" "}
            Hey, <span className="userName">{username}</span>
          </h1>
          <Link to="/">
            <button>Se déconnecter</button>
          </Link>
        </div>
        <div className="right-side-icon"><BsPersonCircle className="iconProfile" />
</div>
      </NavbarRightStyled>
  )
}

const NavbarRightStyled = styled.div`


    display: flex;
    align-items: center;
    gap: 10px;
  
  .right-side-userInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  
`;