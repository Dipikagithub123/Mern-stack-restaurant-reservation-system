import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Nav = styled.nav`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 2rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e65100;
  }
`;

const BookNowButton = styled(Link)`
  background-color: #e65100;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f57c00;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo />
        <HamburgerIcon onClick={toggleMenu}>
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </HamburgerIcon>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/menu" onClick={toggleMenu}>Menu</NavLink>
          <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
          <BookNowButton to="/reservation" onClick={toggleMenu}>Book Now</BookNowButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
