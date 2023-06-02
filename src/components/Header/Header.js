import Logo from './Logo/HeaderLogo'
import IconesHeader from './IconesHeader/HeaderIcons'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #dedddd;
  display: flex;
  justify-content: space-around;
  margin: auto;
    @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`
const Opcoes = styled.div`
  display: flex;
`

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Opcoes>
        <IconesHeader />
      </Opcoes>
    </HeaderContainer>
  )
}

export default Header;