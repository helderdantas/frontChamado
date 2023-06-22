import TabelaDeInformacoes from './TabelaDeInformacoes/TabelaDeInformacoes';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';

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