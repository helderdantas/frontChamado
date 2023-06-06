import { useNavigate } from 'react-router';
import logo from '../../../img/logotipoSeec.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 25px;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const LogoImage = styled.img`
  width: 15%;
  margin-right: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 80px;
  }
`

const LogoText = styled.p`
  text-align: center;
  `

function Logo() {
  const navigate = useNavigate();
  return (
    <LogoContainer>
      <LogoImage
        onClick={() => navigate('/')}
        src={logo}
        alt='Logo' />
      <LogoText>
        <strong>
          Sistema de Gerenciamento de Chamados
        </strong>
      </LogoText>
    </LogoContainer>
  )
}

export default Logo;