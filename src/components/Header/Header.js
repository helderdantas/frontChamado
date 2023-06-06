import React from 'react';
import Logo from './Logo/HeaderLogo';
import IconesHeader from './IconesHeader/HeaderIcons';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #dedddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Opcoes = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Opcoes>
        <IconesHeader />
      </Opcoes>
    </HeaderContainer>
  );
};

export default Header;