import AbrirChamado from './pages/AbrirChamado/AbrirChamado';
//import Home from './pages/Home/Home';
import styled from 'styled-components';

const AppContainer = styled.div `
  width: 100vw;
  height: 100vh;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`

function App() {
  return (
    <AppContainer>
      <AbrirChamado/>
    </AppContainer>
  );
}

export default App;
