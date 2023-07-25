import React, { useState } from 'react';
import perfil from '../../../img/perfil.svg';
import styled from 'styled-components';

const Dropdown = styled.div`
  position: relative;
  display: flex;
`;

const DropdownImg = styled.img`
  width: 35px;
  cursor: pointer;
  padding: 0 1px;
  margin-top: 7%;
  display: flex;

  @media (max-width: 768px) {
    width: 30px;
  }
`;

const DropdownConteudo = styled.div`
  display: ${(props) => (JSON.parse(props.show) ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 140px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  top: 125%;
  right: 0;

  &::before {
    content: '';
    position: absolute;
    top: -8px; 
    right: 10px; 
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #f9f9f9 transparent;
  }
`;

const DropdownLink = styled.a`
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ddd;
  }
`;

const DropdownMenu = () => {
  const [mostrarDropdown, setMostrarDropdown] = useState(false);

  const alternarDropdown = () => {
    setMostrarDropdown(!mostrarDropdown);
  };

  return (
    <Dropdown>
      <DropdownImg src={perfil} alt="perfil" onClick={alternarDropdown} />
      <DropdownConteudo show={mostrarDropdown ? "true" : "false"}>
        <DropdownLink href="#">Login Suporte</DropdownLink>
      </DropdownConteudo>
    </Dropdown>
  );
};

export default DropdownMenu;