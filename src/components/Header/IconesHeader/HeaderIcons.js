import React, { useState } from 'react';
import perfil from '../../../img/perfil.svg';
import styled from 'styled-components';

const Dropdown = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
`;

const DropdownImg = styled.img`
  width: 35px;
  cursor: pointer;
  padding: 0 0 0 5px;
  margin-top: 5%;
  display: flex;
`;

const DropdownConteudo = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  flex-direction: column;
  align-items: center;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 140px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
`;

const DropdownLink = styled.a`
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

const DropdownMenu = () => {
  const [mostrarDropdown, setMostrarDropdown] = useState(false);

  const alternarDropdown = () => {
    setMostrarDropdown(!mostrarDropdown);
  };

  return (
    <div>
      <DropdownImg src={perfil} alt="perfil" onClick={alternarDropdown} />
      <Dropdown>
        <DropdownConteudo show={mostrarDropdown}>
          <DropdownLink href="#">Login Suporte</DropdownLink>
        </DropdownConteudo>
      </Dropdown>
    </div>
  );
};

export default DropdownMenu;