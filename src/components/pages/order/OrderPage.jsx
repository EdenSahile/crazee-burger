import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import { theme } from "../../../theme";
import Main from "./Main";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
      <Main/>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color:${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;

  align-items: center;

  font-family: "Open Sans", sans-serif;
 
 .container {
  width: 1400px;

    height: 95vh;
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound};
    display: flex;
    flex-direction: column;
        overflow: hidden;

  }


 
`;
