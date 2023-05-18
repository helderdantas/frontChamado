import Logo from './Logo/HeaderLogo'
import OpcoesHeader from './OpcoesHeader/HeaderList'
import IconesHeader from './IconesHeader/HeaderIcons'
import styled from 'styled-components'

const HeaderContainer = styled.header `
  background-color: white;
  display: flex;
  justify-content: space-around;
`


function Header () {
    return (
        <HeaderContainer>
          <Logo />
          <OpcoesHeader />
          <IconesHeader />
        </HeaderContainer>
    )
}

export default Header;