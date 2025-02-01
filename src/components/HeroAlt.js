import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

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

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(79, 70, 229, 0.1) 0%,
    rgba(124, 58, 237, 0.1) 50%,
    rgba(139, 92, 246, 0.1) 100%
  );
  background-size: 200% 200%;
  animation: ${gradientMove} 15s ease infinite;
`;

const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
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

const ImageSection = styled.div`
  position: relative;
  animation: ${fadeInUp} 1s ease-out 0.3s backwards;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    bottom: -20px;
    left: -20px;
    background: radial-gradient(circle at center, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
    border-radius: 30px;
    filter: blur(20px);
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const HeroAlt = () => {
  return (
    <HeroSection id="home">
      <GradientBackground />
      <GridPattern />
      <Content>
        <TextContent>
          <h1>Ariful Jannat Arif</h1>
          <h2>Software Engineer (Android, iOS)</h2>
          <p>
            Software Engineer with 5+ years of specialized expertise in mobile application 
            development across iOS, Android, and Flutter platforms. Strong technical 
            leadership experience in architecting scalable solutions, mentoring teams, 
            and driving stakeholder communications.
          </p>
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
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            
          </SocialLinks>
        </TextContent>
        <ImageSection>
          <ProfileImage 
            src={`${process.env.PUBLIC_URL}/profile_image.jpeg`}
            alt="MA-ARIFUL JANNAT"
          />
        </ImageSection>
      </Content>
    </HeroSection>
  );
};

export default HeroAlt; 