import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './Navbar.css';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  color: #f3f4f6;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #fff, #a5b4fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MenuItems = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  color: #e5e7eb;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #4F46E5, #7C3AED);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);

    &::after {
      width: 80%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #e5e7eb;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(15, 23, 42, 0.95);
  padding: 1rem;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const MobileMenuItem = styled(MenuItem)`
  display: block;
  padding: 1rem;
  text-align: center;
  border-radius: 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#skills', label: 'Skills' },
    { href: '#side-projects', label: 'Side Projects' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <Nav style={{ 
      background: scrolled ? 'rgba(15, 23, 42, 0.9)' : 'rgba(15, 23, 42, 0.8)',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
    }}>
      <NavContainer>
        <Logo href="#home">Ariful</Logo>
        <MenuItems>
          {menuItems.map((item, index) => (
            <MenuItem key={index} href={item.href}>
              {item.label}
            </MenuItem>
          ))}
        </MenuItems>
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
        </MobileMenuButton>
      </NavContainer>
      <MobileMenu isOpen={isOpen}>
        {menuItems.map((item, index) => (
          <MobileMenuItem 
            key={index} 
            href={item.href}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </MobileMenuItem>
        ))}
      </MobileMenu>
    </Nav>
  );
};

export default Navbar; 