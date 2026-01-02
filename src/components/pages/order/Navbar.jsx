import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">
        <Logo/>
      </div>
<NavbarRightSide username={username}/>
   
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background-color: ${theme.colors.white};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px 0 20px;
  height: 10vh;
  border-radius: ${theme.borderRadius.extraRound}px  ${theme.borderRadius.extraRound}px 0 0;

  .left-side {
    cursor: pointer;
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
