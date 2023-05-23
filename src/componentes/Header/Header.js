import Logo from './Logo/HeaderLogo'
import OpcoesHeader from './OpcoesHeader/HeaderList'
import IconesHeader from './IconesHeader/HeaderIcons'
import styled from 'styled-components'

const HeaderContainer = styled.header `
  background-color: #dedddd;
  display: flex;
  justify-content: space-around;
  margin: auto;
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