import styled from 'styled-components';

const Opcao = styled.li `
  font-size: 16px;
  display: flex;
  justify-content: space-around ;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const Opcoes = styled.ul `
  margin: auto;
  display: flex;
`

const Button = styled.button `
  border-radius: 10px;
  background-color: #F2F2F2;
  color: black;
`

const textoOpcoes = [
  {texto: 'Gerar Relatório'},
  {texto: 'Abrir Chamado'},
];

function OpcoesHeader() {
  return (
    <Opcoes>
      { textoOpcoes.map( (textoOpcoes,index) => (
        <Opcao key={index}>
            <Button>{textoOpcoes.texto}</Button>
        </Opcao>
      ) ) }
    </Opcoes>
  );
}

export default OpcoesHeader;