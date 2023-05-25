import { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 500px;
  margin: auto;
  @media (max-width: 768px) {
      width: 90%;
      height: 90%;
  }
`

const FormStyle = styled.form`
  padding-top: 2%;
`

const Label = styled.label`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  padding-top: 1%;
`

const Input = styled.input`
  border-radius: 10px;
  width: 500px;
  height: 30px;
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`

const Select = styled.select`
  border-radius: 10px;
  width: 500px;
  height: 30px;
  text-align: center;
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`

const Option = styled.option`
  width: 500px;
  height: 30px;
  font-size: 18px;
`

const Button = styled.button`
  text-align: center;
  padding: .6%;
  font-size: 18px;
  border-radius: 10px;
  margin-top: 2%;
`

const Form = () => {
  const [name, setName] = useState('');
  const [estacaoTrabalho, setWorkstation] = useState('');
  const [equipamento, setEquipamento] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleWorkstationChange = (e) => {
    setWorkstation(e.target.value);
  };

  const handleEquipamentoChange = (e) => {
    setEquipamento(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('Estação de Trabalho:', estacaoTrabalho);
    console.log('Equipamento:', equipamento);
  };

  return (
    <FormContainer>
      <FormStyle onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name">Nome:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <Label htmlFor="workstation">Estação de Trabalho:</Label>
          <Input
            type="text"
            id="workstation"
            value={estacaoTrabalho}
            onChange={handleWorkstationChange}
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
            <Option value="CPU">CPU</Option>
            <Option value="Monitor 1">Monitor 1</Option>
            <Option value="Monitor 2">Monitor 2</Option>
            <Option value="Impressora">Impressora</Option>
          </Select>
        </div>
        <Button type="submit">Solicitar</Button>
      </FormStyle>
    </FormContainer>
  );
};

export default Form;