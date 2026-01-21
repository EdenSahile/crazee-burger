import styled from "styled-components";
import { theme } from "../../theme";
import logoOrange from "../../assets/logo-orange.png";

export default function Logo({className,onClick}) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <span className="logoTitle">CRAZEE</span>
      <img src={logoOrange} />

      <span className="logoTitle">BURGER</span>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  .logoTitle {
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    letter-spacing: 1.5px;
    vertical-align: top;

    font-family: "Amatic SC", sans-serif;
  }

  img {
    object-fit: contain;
    object-position: center;
    width: 80px;
    margin: 0 ${theme.gridUnit / 2};
  }
`;
