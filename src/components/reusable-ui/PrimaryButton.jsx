import { theme } from "../../theme";
import styled from "styled-components";

export default function PrimaryButton({ label, icon }) {
  return (
    <>
      <ButtonLoginStyled>
        <span>{label}</span>
        {icon && icon}
      </ButtonLoginStyled>
    </>
  );
}

const ButtonLoginStyled = styled.button`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  font-size: 15px;
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.primary};

  &:hover:not(:disabled) {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
  }

  &:active {
    color: white;
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
