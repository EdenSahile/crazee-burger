import styled from "styled-components";
import { theme } from "../../../../theme";
import Profile from "./Profile";
import ToogleButton from "../../../reusable-ui/ToggleButton";
import { useState } from "react";

export default function NavbarRightSide({ username }) {
  const [isChecked, setIsChecked] = useState(false);

  const onToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <NavbarRightStyled className="right-side">
      <ToogleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DESACTIVER LE MODE ADMIN"
        isChecked={isChecked}
        onToggle={onToggle}
      />
      <Profile username={username} />
    </NavbarRightStyled>
  );
}

const NavbarRightStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  gap: 10px;
`;
