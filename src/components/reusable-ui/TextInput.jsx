import React from "react";
import { theme } from "../../theme";
import styled from "styled-components";

export default function TextInput({ value, onChange, icon, ...extraProps }) {
  return (
    <InputLoginStyled>
      {icon && icon}
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
  margin: 18px 0;

  .icon {
    font-size: ${theme.fonts.size.P0};
    margin-right: ${theme.gridUnit};
    color: ${theme.colors.greySemiDark};
    padding-right: 8px;
  }

  input {
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    width: 100%;

    border: none;

    & ::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
