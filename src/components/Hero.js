import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.1) 0%, transparent 50%);
    animation: ${float} 6s ease-in-out infinite;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 1;
`;

const TextContent = styled.div`
  color: white;
  animation: ${fadeIn} 1s ease-out;
  text-align: center;
  max-width: 800px;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1rem;
    background: linear-gradient(to right, #fff, #a5b4fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: #a5b4fc;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #e5e7eb;
    line-height: 1.8;
    margin-bottom: 2rem;
    max-width: 800px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  animation: ${float} 6s ease-in-out infinite;
  margin-bottom: 1rem;

  img {
    width: 100px;
    display: none;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 30px rgba(165, 180, 252, 0.3);
  }

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const TypewriterText = styled.div`
  min-height: 3em;
  margin: 1rem 0;
  color: #a5b4fc;
  font-size: 1.1rem;
  font-style: italic;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  animation: ${fadeIn} 1s ease-out 0.5s backwards;
`;

const Button = styled.a`
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
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
    border: 1px solid rgba(255, 255, 255, 0.2);
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }
  `}
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  animation: ${fadeIn} 1s ease-out 1s backwards;

  a {
    color: #a5b4fc;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: white;
      transform: translateY(-3px);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <ImageContainer>
          <img src="/profile_image.jpeg" alt="MA-ARIFUL JANNAT" />
        </ImageContainer>
        <TextContent>
          <h1>Ariful Jannat Arif</h1>
          <h2>Software Engineer (Android, iOS)</h2>
          <p>
            Software Engineer with 5+ years of specialized expertise in mobile application 
            development across iOS, Android, and Flutter platforms. Strong technical 
            leadership experience in architecting scalable solutions, mentoring teams, 
            and driving stakeholder communications. Expertise aligning technical solutions 
            with business objectives.
          </p>
          <TypewriterText>
            "Crafting exceptional mobile experiences that delight millions of users"
          </TypewriterText>
          <ButtonContainer>
            <Button 
              href="/Resume.pdf" 
              download="MA-ARIFUL-JANNAT-Resume.pdf"
              primary
            >
              Download Resume
            </Button>
            <Button href="#contact">
              Contact Me
            </Button>
          </ButtonContainer>
          <SocialLinks>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-leetcode"></i>
            </a>
          </SocialLinks>
        </TextContent>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 