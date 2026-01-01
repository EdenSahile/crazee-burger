import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
// import { BsPersonCircle } from "react-icons/bs";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">
        <Logo />
      </div>

      <div className="right-side">
        <div className="right-side-userInfo">
          <h1 className="salutation">
            {" "}
            Hey, <span className="userName">{username}</span>
          </h1>
          <Link to="/">
            <button>Se déconnecter</button>
          </Link>
        </div>
        <div className="right-side-icon">ICON</div>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px 0 20px;
  height: 98.19px;
  border-radius: 15px 15px 0 0;

  .left-side {
    transform: scale(0.4);
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .right-side-userInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h1 {
    font-size: 16px;
    line-height: 22px;
  }

  .salutation {
    color: #747b91;

    font-weight: 400;
  }
  .userName {
    color: #ffa01b;
    font-weight: 700;
  }

  button {
    font-family: "Open Sans", sans-serif;
    font-size: 10px;
    line-height: 14px;
    color: #747b91;
    background-color: transparent;
    border: none;
  }
`;
