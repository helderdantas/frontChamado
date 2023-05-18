import logo from '../../../imagens/logotipoSeec.png';
import styled from 'styled-components';

const LogoContainer = styled.div `
  display: flex;
  font-size: 30px;
`
const LogoImage = styled.img `
  margin-right: 10px;
`

function Logo() {
  return (
    <LogoContainer>
      <LogoImage 
        src={logo} 
        alt='Logo' />
      <p>
        <strong>
          Chamados SEEC - Secretaria de Estado da Educação, da Cultura, do Esporte e do Lazer do Rio Grande do Norte
        </strong>
      </p>
    </LogoContainer>
  )
}

export default Logo;