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
const InformationContainer = styled.tr `
    text-align: center;
    &:nth-child(even){
        background-color: #f2f2f2;
    }
`

const pivot_table_1 = [
    {pivot_table_1: 6},
    {pivot_table_1: 5},
    {pivot_table_1: 30},
    {pivot_table_1: 94},
    {pivot_table_1: 1},
    {pivot_table_1: 0},
]

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
                    {pivot_table_1
                        .sort((a, b) => a.pivot_table_1 - b.pivot_table_1) // Ordena o array com base no valor da propriedade pivot_table_1
                        .map((obj) => (
                            <td key={obj.pivot_table_1}>{obj.pivot_table_1}</td>
                        ))
                    }
                </InformationContainer>
                <InformationContainer>
                    {pivot_table_1
                        .sort((a, b) => b.pivot_table_1 - a.pivot_table_1) // Ordena o array com base no valor da propriedade pivot_table_1
                        .map((obj) => (
                            <td key={obj.pivot_table_1}>{obj.pivot_table_1}</td>
                        ))
                    }
                </InformationContainer>
            </tbody>
        </BodyContainer>

    );
}

export default TabelaDeInformacoes;