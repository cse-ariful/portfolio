import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './Navbar.css';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  z-index: 1000;
  transition: all 0.3s ease;
  
  ${props => props.scrolled ? `
    background: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  ` : `
    background: transparent;
  `}
`;

const Brand = styled.div`
  h1 {
    font-size: 1.5rem;
    margin: 0;
    background: linear-gradient(to right, #fff, #a5b4fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem;
    
    ${props => props.isOpen && `
      display: flex;
    `}
  }
`;

const NavLink = styled.a`
  color: #a5b4fc;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #4F46E5, #7C3AED);
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    text-align: center;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
    width: 30px;
    height: 20px;
    position: relative;
    
    span {
      position: absolute;
      width: 100%;
      height: 2px;
      background: #a5b4fc;
      transition: all 0.3s ease;
      
      &:first-child {
        top: 0;
        ${props => props.isOpen && `
          transform: rotate(45deg);
          top: 9px;
        `}
      }
      
      &:nth-child(2) {
        top: 9px;
        ${props => props.isOpen && `
          opacity: 0;
        `}
      }
      
      &:last-child {
        top: 18px;
        ${props => props.isOpen && `
          transform: rotate(-45deg);
          top: 9px;
        `}
      }
    }
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav scrolled={hasScrolled}>
      <Brand>
        <h1></h1>
      </Brand>
      <NavLinks isOpen={isMenuOpen}>
        <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</NavLink>
        <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
        <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
        <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
      </NavLinks>
      <Hamburger 
        isOpen={isMenuOpen} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
    </Nav>
  );
};

export default Navbar; 