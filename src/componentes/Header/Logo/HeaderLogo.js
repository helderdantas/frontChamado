import logo from '../../../imagens/logotipoSeec.png';
import styled from 'styled-components';

const LogoContainer = styled.div `
  display: flex;
  font-size: 25px;
`
const LogoImage = styled.img `
  width: 125px;
  margin-right: 10px;
`

const LogoText = styled.p `
  text-align: junstify;
`

function Logo() {
  return (
    <LogoContainer>
      <LogoImage 
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