import styled from 'styled-components';
import  React, { useEffect, useState } from 'react';



const BodyContainer = styled.table`
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.0.15);
    fint-family: sans-serif;
    margin: auto;
    border-collapse: collapse;
    @media (max-width: 768px) {
        width: 90%;
        height: 90%;
    }
`
const CenterContainer = styled.th`
    text-align: center;
    padding: 5px 10px;
`
const InformationContainer = styled.tr`
    text-align: center;
    &:nth-child(even){
        background-color: #f2f2f2;
    }
`

function TabelaDeInformacoes() {
    const [dados, setDados] = useState([])
  
    
    useEffect(()=>{
        async function chamadosAberto(){
           const repos = await fetch("http://localhost:3032/listarChamadosAbertos")
           const data = await repos.json()
           setDados(data)
           console.log(data)            
        
        };
        chamadosAberto();
        
    },[])

 
    function renderizarDados() {
        if(dados){
        return dados?.map((chamado, i) => {
            return (
                <InformationContainer>
                    <CenterContainer>{chamado.id}</CenterContainer>
                    <CenterContainer>{chamado.nome}</CenterContainer>
                    <CenterContainer>{chamado.setor}</CenterContainer>
                    <CenterContainer>{chamado.subsetor}</CenterContainer>
                    <CenterContainer>{chamado.equipesuport}</CenterContainer>
                    <CenterContainer>{chamado.status}</CenterContainer>
                </InformationContainer>
            )

        })
    }
    }
               
    return (

        <BodyContainer>
            <thead>
                <tr>
                    <CenterContainer colSpan={6}>CHAMADOS</CenterContainer>
                </tr>
                <tr>
                    <CenterContainer>Código</CenterContainer>
                    <CenterContainer>Nome</CenterContainer>
                    <CenterContainer>Setor</CenterContainer>
                    <CenterContainer>Subsetor</CenterContainer>
                    <CenterContainer>Equipe Suporte</CenterContainer>
                    <CenterContainer>Estatus De Atendimento</CenterContainer>
                </tr>
            </thead>
            <tbody>
                {renderizarDados()}           
            
            </tbody>
        </BodyContainer>

    );
}

export default TabelaDeInformacoes;