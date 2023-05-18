import styled from 'styled-components';


const BodyContainer = styled.table `
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.0.15);
    fint-family: sans-serif;
    margin: 50px auto;
    border-collapse: collapse;
`
const CenterContainer = styled.th `
    text-align: center;
    padding: 5px 10px;

`
const InformationContainer = styled.tr`
    text-align: center;
`

function TabelaDeInformacoes() {
    return (

<BodyContainer>
            <thead>
                <tr>
                    <CenterContainer colSpan={6}>CHAMADOS NÃO FINALIZADOS</CenterContainer>
                </tr>
                <tr>
                    <CenterContainer>Código</CenterContainer>
                    <CenterContainer>Nome</CenterContainer>
                    <CenterContainer>Setor</CenterContainer>
                    <CenterContainer>Subsetor</CenterContainer>
                    <CenterContainer>Estação De Trabalho</CenterContainer>
                    <CenterContainer>Estatus De Atendimento</CenterContainer>
                </tr>
            </thead>
            <tbody>
                <InformationContainer>
                    <td>1</td>
                    <td>João</td>
                    <td>TI</td>
                    <td>Infra</td>
                    <td>Estação 1</td>
                    <td>Em atendimento</td>
                </InformationContainer>
                <InformationContainer>
                    <td>2</td>
                    <td>Maria</td>
                    <td>TI</td>
                    <td>Infra</td>
                    <td>Estação 2</td>
                    <td>Em atendimento</td>
                </InformationContainer>
            </tbody>
        </BodyContainer>

    );
}

export default TabelaDeInformacoes;