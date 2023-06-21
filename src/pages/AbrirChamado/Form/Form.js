import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  width: 500px;
  margin: auto;
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`

const FormStyle = styled.form`
  padding-top: 30%;
`

const Label = styled.label`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border-radius: 10px;
  width: 100%;
  height: 20px;
  padding: 5px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;

const Select = styled.select`
  border-radius: 10px;
  width: 103%;
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align-last: center;
  @media (max-width: 768px) {
    width: 95%;
    height: 95%;
  }
`;

const Option = styled.option`
  width: 100%;
  height: 30px;
  font-size: 18px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: auto;
  `;

const Button = styled.button`
  text-align: center;
  padding: .6%;
  font-size: 18px;
  border-radius: 10px;
  margin-top: 10%;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const Form = () => {
  const [nome, setName] = useState('');
  const [estacaoTrabalho, setWorkstation] = useState('');
  const [descricao, setDescription] = useState('');
  const [equipamento, setEquipamento] = useState('');
  const [equipamentotombo, setEquipamentotombo] = useState('');
  const [equipamentonumeroserie, setEquipamentonumeroserie] = useState('');
  const [controle, setControle] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleWorkstationChange = (e) => {
    setWorkstation(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleEquipamentoChange = (e) => {
    setEquipamento(e.target.value);
  };

  
  const buscarControle = async function obterControleControlePorId(){
      try {
          console.log('entrei')
          await axios.get(`http://localhost:3030/listarControle/` + estacaoTrabalho).then(response=>{
            setControle(response.data)
          })
  
      } catch (error) {
          return error

      }
  
  }

  async function criarChamado(){    
    console.log('imprimir controle')
    console.log(controle)
    const body = {
      nome:nome,
      setor:controle.setor,
      subsetor:controle.subsetor,
      ilha:controle.ilha,
      estacaotrabalho:estacaoTrabalho,
      equipamentocomdefeito:equipamento,
      equipamentotombo:equipamentotombo,
      equipamentonumeroserie:equipamentonumeroserie,
      descricao:descricao,
      equipesuport:"HELDER"
    }
    console.log(body)
    await axios.post("http://localhost:3032/criarChamado/", body).then(response=>{
      console.log(response.data)
    });
         
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    buscarControle();
    criarChamado()
     
  } 

  return (
    <FormContainer>
      <FormStyle onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name">Nome completo:</Label>
          <Input
            type="text"
            id="name"
            value={nome}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <Label htmlFor="workstation">Estação de trabalho:</Label>
          <Input
            type="text"
            id="workstation"
            value={estacaoTrabalho}
            onChange={handleWorkstationChange}
          />
        </div>
        <div>
          <Label htmlFor="description">Descrição do problema:</Label>
          <Input
            type="text"
            id="description"
            value={descricao}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <Label htmlFor="equipamento">Equipamento:</Label>
          <Select
            id="equipamento"
            value={equipamento}
            onChange={handleEquipamentoChange}
          >
            <Option value="">Selecione um equipamento</Option>
            <Option value="cpu">CPU</Option>
            <Option value="monitor1">Monitor 1</Option>
            <Option value="monitor2">Monitor 2</Option>
            <Option value="impressora">Impressora</Option>
            </Select>
        </div>
        <ButtonContainer>
          <Button type="submit">Enviar solicitação</Button>
        </ButtonContainer>
      </FormStyle>
    </FormContainer>
  );
};

export default Form;