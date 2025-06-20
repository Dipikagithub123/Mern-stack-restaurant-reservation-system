import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Contact from './components/Contact';
import GlobalStyles from './styles/GlobalStyles';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home.jsx';
//import  NotFound  from './pages/NotFound.jsx'; 
import Success from './pages/Success.jsx';
import './App.css'

const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
`;

const App = () => {
  return (
      <Router>
      <GlobalStyles />
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path='/success' element={<Success/>}/>
        </Routes>
        <Footer />
        <Toaster/>
      </AppContainer>
      </Router>
  );
};

export default App;
