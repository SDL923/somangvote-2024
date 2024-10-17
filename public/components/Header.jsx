import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu.jsx';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5657A0;
  color: white;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Title>My Website</Title>
      <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </HeaderContainer>
  );
};

export default Header;
