import React from "react";
import styled from "styled-components";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin"></div>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  background-color: #f5f5f7;
  height: calc(95vh-10vh);
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  flex: 1;
  overflow-y: scroll;

  display: grid;
  grid-template-columns: 1fr;

  padding: 10px;

  .basket {
    background-color: pink;
  }

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-radius: 0px 0px 15px 15px;

    .admin {
      background-color: red;
      height: 250px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  /* .tabs {
    border: 2px solid blue;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .admin-panel {
    border: 2px solid green;
    flex: 1;
  } */
`;
