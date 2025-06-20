import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/hero-bg.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 1rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #f5f5f5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #e65100;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f57c00;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>Welcome to Dipika's <span style={{ color: '#e65100' }}>SpiceAura</span></Title>
        <Subtitle>Savor the Soul of Indian Cuisine.</Subtitle>
        <Subtitle>
          Experience the authentic flavors of India in an elegant setting
        </Subtitle>
        <CTAButton to="/reservation">Make a Reservation</CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 