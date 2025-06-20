import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Nav = styled.nav`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
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

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo />
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <BookNowButton to="/reservation">Book Now</BookNowButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;