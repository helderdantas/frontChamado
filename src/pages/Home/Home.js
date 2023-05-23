import TabelaDeInformacoes from './TabelaDeInformacoes/TabelaDeInformacoes';
import Header from '../../componentes/Header/Header';
import styled from 'styled-components'

const AppContainer = styled.div `
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #155f206e 0%, #0a53d191 100%);

  li {
    list-style-type: none;
  }
`

function Home() {
  return (
    <AppContainer>
        <Header/>
        <TabelaDeInformacoes />
    </AppContainer>
  );
}

export default Home;