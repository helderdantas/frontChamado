import TabelaDeInformacoes from './TabelaDeInformacoes/TabelaDeInformacoes';
import Header from '../../componentes/Header/Header';
import Body from '../../componentes/Body/Body';

function Home() {
  return (
    <>
      <Header />
      <Body>
          <TabelaDeInformacoes />
      </Body>
    </>
  );
}

export default Home;