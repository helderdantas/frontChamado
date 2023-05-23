import TabelaDeInformacoes from './TabelaDeInformacoes/TabelaDeInformacoes';
import Header from '../../componentes/Header/Header';
import Body from '../../componentes/Body/Body';

function Home() {
  return (
    <Body>
        <Header/>
        <TabelaDeInformacoes />
    </Body>
  );
}

export default Home;