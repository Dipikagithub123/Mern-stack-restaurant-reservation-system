import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
`;

const LogoIcon = styled(FaUtensils)`
  font-size: 2.2rem;
  color: #e65100;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RestaurantName = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #e65100;
  margin: 0;
  font-weight: 600;
  line-height: 1.1;
`;

const Tagline = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoIcon />
      <LogoText>
        <RestaurantName>Dipika's</RestaurantName>
        <Tagline>Authentic Indian Cuisine</Tagline>
      </LogoText>
    </LogoContainer>
  );
};

export default Logo; 