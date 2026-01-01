import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import { theme } from "../../../theme";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <main></main>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color:${theme.colors.primary};
  margin:0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  font-family: "Open Sans", sans-serif;

 .container {
    max-width: 1400px;
    width: 100%;
    height: 95vh;
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
        overflow: hidden;

  }


  main {
    background-color:#F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  border-radius: 0px 0px 15px 15px;
    flex:1;
    overflow-y: auto;
  
  }
`;
