import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <main>MAIN</main>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: linear-gradient(135deg, #ff9500 0%, #ffb347 100%);

  max-width: 1400px;
  width: 100%;
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
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
        overflow: hidden;

  }


  main {
    border:3px solid green;
    flex:1;
     background: #f5f5f7;
    overflow-y: auto;
  
  }
`;
