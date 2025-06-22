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
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DesktopNav = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: white;
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  padding: 2rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-150%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 999;
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
  font-size: 2rem;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <>
      <Nav>
        <Logo />
        <DesktopNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <BookNowButton to="/reservation">Book Now</BookNowButton>
        </DesktopNav>
        <HamburgerIcon onClick={toggleMenu}>
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </HamburgerIcon>
      </Nav>
      <MobileNav isOpen={isOpen}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/menu" onClick={closeMenu}>Menu</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        <BookNowButton to="/reservation" onClick={closeMenu}>Book Now</BookNowButton>
      </MobileNav>
    </>
  );
};

export default Navbar;
