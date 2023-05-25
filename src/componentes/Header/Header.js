import Logo from './Logo/HeaderLogo'
import OpcoesHeader from './OpcoesHeader/HeaderList'
import IconesHeader from './IconesHeader/HeaderIcons'
import styled from 'styled-components'

const HeaderContainer = styled.header `
  background-color: #dedddd;
  display: flex;
  justify-content: space-around;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const Opcoes = styled.div `
  display: flex;
`

function Header () {
    return (
        <HeaderContainer>
          <Logo />
          <Opcoes>
            <OpcoesHeader />
            <IconesHeader />
          </Opcoes>
        </HeaderContainer>
    )
}

export default Header;