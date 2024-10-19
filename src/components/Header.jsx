import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu.jsx';
import logo from '../../public/images/logo_ha.png';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #444585;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 30px;
`;

const Header = ({ onHomeClick, onAboutClick, onCandidatesClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <HamburgerMenu 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen}
        onHomeClick={onHomeClick}
        onAboutClick={onAboutClick}
        onCandidatesClick={onCandidatesClick}
      />
    </HeaderContainer>
  );
};

export default Header;