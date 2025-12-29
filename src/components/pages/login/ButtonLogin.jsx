import React from "react";
import { theme } from "../../../theme";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";

export default function ButtonLogin() {
  return (
    <ButtonLoginStyled>
      <button className="button-with-icon">
        <span> Accéder à votre espace</span>
        <IoChevronForward className="icon" />
      </button>
    </ButtonLoginStyled>
  );
}

const ButtonLoginStyled=styled.div`

 .button-with-icon {
    width: 100%;
    display: inline-flex;
    justify-content: center;
align-items: center;
    background-color: ${theme.colors.primary_burger};
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: ${theme.borderRadius.round};
    font-size: 15px;
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary_burger};

    &:hover:not(:disabled) {
      color: ${theme.colors.primary};
      background-color:${theme.colors.white} ;
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

    .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }
}

`
