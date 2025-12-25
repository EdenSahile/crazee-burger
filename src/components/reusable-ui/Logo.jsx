import styled from 'styled-components';
import { theme } from '../../theme';

export default function Logo({size="200"}) {
  return (
    <LogoStyled>
<span className='logoTitle'>CRAZEE</span> 
< img src='/logo/logo-orange.png' width={size}/>

<span className='logoTitle'>BURGER</span>
    </LogoStyled>
  )
}


const LogoStyled = styled.div`

    display: flex;
    align-items: center;
  

.logoTitle{
  color:${theme.colors.primary};
  font-size: 8rem;
  font-weight: ${theme.weights.bold};
  letter-spacing: 1.5px;
  vertical-align:top;

  font-family: "Amatic SC", sans-serif;

}
  
`;

