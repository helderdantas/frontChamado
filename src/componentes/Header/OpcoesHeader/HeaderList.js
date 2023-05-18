import styled from 'styled-components';

const Opcao = styled.li `
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const Opcoes = styled.ul `
  display: flex;
`

const textoOpcoes = [
  {texto: 'Home'},
  {texto: 'Sobre'},
  {texto: 'Contato'},
];

function OpcoesHeader() {
  return (
    <Opcoes>
      { textoOpcoes.map( (textoOpcoes,index) => (
        <Opcao key={index}>
            <button>{textoOpcoes.texto}</button>
        </Opcao>
      ) ) }
    </Opcoes>
  );
}

export default OpcoesHeader;