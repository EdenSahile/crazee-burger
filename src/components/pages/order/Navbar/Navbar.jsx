import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import { theme } from "../../../../theme";
import NavbarRightSide from "./NavbarRightSide";
import { refreshPage } from "../../../../utils/window";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo onClick={refreshPage} className={"logo-order-page"} />
      <NavbarRightSide username={username} />
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
  border-radius: ${theme.borderRadius.extraRound}px
    ${theme.borderRadius.extraRound}px 0 0;
    border-bottom: 1px solid ${theme.colors.greyLight};

  h1 {
    font-size: 16px;
    line-height: 22px;
  }

  button {
    font-family: "Open Sans", sans-serif;
    font-size: ${theme.fonts.size.XXS};
    line-height: 14px;
    color: ${theme.colors.greyBlue};
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
  .iconProfile {
    color: ${theme.colors.greyBlue};
    width: 36px;
    height: 36px;
  }

  .logo-order-page {
    cursor: pointer;
  }
`;
