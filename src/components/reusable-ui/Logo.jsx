import styled from 'styled-components';

export default function Logo({size="40px"}) {
  return (
    <LogoStyled>
<span>CRAZEE</span> 
< img src='../../../public/logo/logo-orange.png' width={size}/>

<span>BURGER</span>
    </LogoStyled>
  )
}


const LogoStyled = styled.div`


width:40px;
  
`;

