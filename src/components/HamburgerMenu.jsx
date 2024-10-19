import React from 'react';
import styled from 'styled-components';

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  position: fixed;
  top: 0.8rem;
  right: 1.5rem;
  z-index: 11;
`;

const MenuOverlay = styled.div`
  display: ${({ menuOpen }) => (menuOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease-in-out;
  z-index: 9;
`;

const MenuList = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background-color: #444585;
  list-style: none;
  padding: 2rem;
  transform: ${({ menuOpen }) => (menuOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 10;
`;

const MenuItem = styled.li`
  padding: 1.5rem;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;

const HamburgerMenu = ({ 
  menuOpen, 
  setMenuOpen, 
  onHomeClick, 
  onAboutClick, 
  onCandidatesClick 
}) => {
  const handleItemClick = (callback) => {
    setMenuOpen(false);
    callback();
  };

  return (
    <>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </MenuButton>
      <MenuOverlay menuOpen={menuOpen} onClick={() => setMenuOpen(false)} />
      <MenuList menuOpen={menuOpen}>
        <MenuItem onClick={() => handleItemClick(onHomeClick)}>Home</MenuItem>
        <MenuItem onClick={() => handleItemClick(onAboutClick)}>About</MenuItem>
        <MenuItem onClick={() => handleItemClick(onCandidatesClick)}>Candidates</MenuItem>
      </MenuList>
    </>
  );
};

export default HamburgerMenu;