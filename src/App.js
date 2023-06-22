import Rotas from './routes/Routes';
import styled from 'styled-components';

const AppContainer = styled.div`
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
      <Rotas />
    </AppContainer>
  );
}

export default App;
