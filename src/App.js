import Header from './componentes/Header/Header'
import Body from './componentes/Body/Body'
import styled from 'styled-components'


//testando
const AppContainer = styled.div `
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #155f206e 0%, #0a53d191 100%);

  li {
    list-style-type: none;
  }
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Body />
    </AppContainer>
  );
}

export default App;
