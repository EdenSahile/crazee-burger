import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../theme";

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
        <div className="right-side-icon"><BsPersonCircle className="iconProfile" />
</div>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background-color: ${theme.colors.white};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px 0 20px;
  height: 98.19px;
  border-radius: ${theme.borderRadius.extraRound}px ${theme.borderRadius.extraRound}px 0 0;

  .left-side {
    transform: scale(0.4);
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 10px;
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
    color: ${theme.colors.greyBlue};
        margin: 0 auto;

    font-weight: ${theme.fonts.weights.regular};
  }
  .userName {
    color: ${theme.colors.primary};
    font-weight:${theme.fonts.weights.bold};
  
  }

  button {
    font-family: "Open Sans", sans-serif;
    font-size: ${theme.fonts.size.XXS};
    line-height: 14px;
    color: ${theme.colors.greyBlue};
    background-color: transparent;
    border: none;

    &:hover{
      cursor: pointer;
    }

  }
.iconProfile{
    color:${theme.colors.greyBlue};
    width:36px;
    height: 36px;

  }
`;
