import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import QuoteOverlay from './QuoteOverlay';
import { sectionsData } from '../data/sections';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PatternBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%),
    radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%);
  background-size: 100px 100px;
  opacity: 0.3;
  transition: opacity 0.3s ease;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${PatternBackground} {
    opacity: 1;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextContent = styled.div`
  animation: ${fadeInUp} 1s ease-out;

  @media (max-width: 1024px) {
    margin: 0 auto;
    max-width: 600px;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #fff, #a5b4fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
  }

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: #a5b4fc;
    margin-bottom: 2rem;
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    color: #e5e7eb;
    line-height: 1.8;
    margin-bottom: 2.5rem;
    opacity: 0.8;
    max-width: 600px;

    @media (max-width: 1024px) {
      margin: 0 auto 2.5rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Button = styled.a`
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  ${props => props.primary ? `
    background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
    color: white;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
    }
  ` : `
    background: rgba(255, 255, 255, 0.1);
    color: white;
    backdrop-filter: blur(10px);
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }
  `}
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }

  a {
    color: #a5b4fc;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    padding: 0.5rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);

    &:hover {
      color: white;
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

const QuotesSection = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Quote = styled.div`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  font-style: italic;
  line-height: 1.6;
  max-width: 80%;
  position: absolute;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: #a5b4fc;
  margin-bottom: 1rem;
  opacity: 0.8;
  
  i {
    filter: drop-shadow(0 0 15px rgba(165, 180, 252, 0.4));
  }
`;

const QuoteText = styled.div`
  position: relative;
  
  &::before, &::after {
    content: '"';
    font-size: 3rem;
    color: rgba(165, 180, 252, 0.3);
    position: absolute;
    line-height: 1;
  }
  
  &::before {
    left: -2rem;
    top: -1rem;
  }
  
  &::after {
    right: -2rem;
    bottom: -2rem;
  }
`;

const HeroAlt = () => {
  const { name, title, description, profileImage, socialLinks, quotes } = sectionsData.hero;
  const [currentQuote, setCurrentQuote] = useState(0);

  const quoteIcons = {
    "Code is poetry in motion": "fas fa-code",
    "Building tomorrow's solutions today": "fas fa-rocket",
    "Turning coffee into code": "fas fa-coffee",
    "Debug like a detective, code like an artist": "fas fa-bug",
    "Making the complex simple": "fas fa-sitemap",
    "Creating digital experiences that matter": "fas fa-mobile-alt",
    "Innovation through iteration": "fas fa-sync-alt",
    "Clean code, clear mind": "fas fa-broom",
    "Crafting pixel-perfect experiences": "fas fa-paint-brush",
    "Mobile-first, user always": "fas fa-users"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <HeroSection id="home">
      <PatternBackground />
      <Content>
        <TextContent>
          <h1>{name}</h1>
          <h2>{title}</h2>
          <p>{description}</p>
          <ButtonGroup>
            <Button 
              href="/Resume.pdf" 
              download="MA-ARIFUL-JANNAT-Resume.pdf"
              primary
            >
              <i className="fas fa-download"></i>
              Download Resume
            </Button>
            <Button href="#contact">
              <i className="fas fa-envelope"></i>
              Contact Me
            </Button>
          </ButtonGroup>
          <SocialLinks>
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </SocialLinks>
        </TextContent>
        <QuotesSection>
          {quotes.map((quote, index) => (
            <Quote 
              key={index}
              className={currentQuote === index ? 'active' : ''}
            >
              <QuoteIcon>
                <i className={quoteIcons[quote] || 'fas fa-quote-right'}></i>
              </QuoteIcon>
              <QuoteText>
                {quote}
              </QuoteText>
            </Quote>
          ))}
        </QuotesSection>
      </Content>
    </HeroSection>
  );
};

export default HeroAlt; 