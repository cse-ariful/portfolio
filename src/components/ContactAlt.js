import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 100%, rgba(124, 58, 237, 0.1) 0%, transparent 50%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
  font-size: 2.5rem;
  background: linear-gradient(to right, #fff, #a5b4fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #4F46E5, #7C3AED);
    border-radius: 2px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  padding: 2rem;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-play-state: ${props => props.isVisible ? 'running' : 'paused'};
`;

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #e5e7eb;
  text-decoration: none;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(5px);
  }

  i {
    font-size: 1.5rem;
    color: #a5b4fc;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(165, 180, 252, 0.1);
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  &:hover i {
    animation: ${pulse} 0.5s ease-in-out;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const InfoLabel = styled.span`
  font-size: 0.9rem;
  color: #9ca3af;
`;

const InfoValue = styled.span`
  font-size: 1.1rem;
`;

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #e5e7eb;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-3px);
  }

  i {
    font-size: 1.2rem;
    color: #a5b4fc;
  }
`;

const ContactAlt = () => {
  const [containerRef, isVisible] = useScrollAnimation();

  return (
    <ContactSection id="contact">
      <GradientOverlay />
      <Container>
        <Title>Get In Touch</Title>
        <ContactGrid ref={containerRef} isVisible={isVisible}>
          <ContactCard>
            <ContactInfo>
              <InfoItem href="mailto:cse.ariful@gmail.com">
                <i className="fas fa-envelope"></i>
                <InfoText>
                  <InfoLabel>Email</InfoLabel>
                  <InfoValue>cse.ariful@gmail.com</InfoValue>
                </InfoText>
              </InfoItem>
              <InfoItem href="#">
                <i className="fas fa-map-marker-alt"></i>
                <InfoText>
                  <InfoLabel>Location</InfoLabel>
                  <InfoValue>Sylhet, Bangladesh</InfoValue>
                </InfoText>
              </InfoItem>
            </ContactInfo>
            <SocialLinks>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </SocialLink>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                GitHub
              </SocialLink>
            </SocialLinks>
          </ContactCard>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default ContactAlt; 