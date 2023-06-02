import styled from 'styled-components';

const Opcoes = styled.ul`
  margin: auto;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`
const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: space-around ;
  align-items: center;
  text-align: center;
  padding: 0 5px;
`

const Button = styled.button`
  cursor: pointer;
  border-radius: 10px;
  background-color: #F2F2F2;
  color: black;
`

const textoOpcoes = [
  { texto: 'Gerar Relatório' },
  { texto: 'Abrir Chamado' },
];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((textoOpcoes, index) => (
        <Opcao key={index}>
          <Button>{textoOpcoes.texto}</Button>
        </Opcao>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;