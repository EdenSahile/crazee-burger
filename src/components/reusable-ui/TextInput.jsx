import React from "react";
import { theme } from "../../theme";
import styled from "styled-components";

export default function TextInput({
  value,
  onChange,
  icon,
  className,
  ...extraProps
}) {
  return (
    <InputLoginStyled className={className}>
      <div className="icon">{icon && icon}</div>
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </InputLoginStyled>
  );
}

const InputLoginStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin: 0 8px 0 10px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;

    border: none;

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
      margin-left: 10px;
    }
  }
`;
