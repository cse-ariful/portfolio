import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { sectionsData } from '../data/sections';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;
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
`;

const ContactWrapper = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  max-width: 500px;
`;

const Greeting = styled.h3`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1.5rem;
  
  span {
    color: #a5b4fc;
    font-style: italic;
  }
`;

const Description = styled.p`
  color: #e5e7eb;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactMethod = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.05);
    border-color: #a5b4fc;
  }

  i {
    font-size: 1.5rem;
    color: #a5b4fc;
    animation: ${float} 6s ease-in-out infinite;
  }
`;

const SocialGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 500px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SocialCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    border-color: #a5b4fc;

    i {
      transform: scale(1.2);
    }
  }

  i {
    font-size: 2rem;
    color: #a5b4fc;
    transition: transform 0.3s ease;
  }

  span {
    font-size: 1.1rem;
    opacity: 0.8;
  }
`;

const ContactAlt = () => {
  const [containerRef, isVisible] = useScrollAnimation();
  const { contact } = sectionsData;
  const { contact: contactTitle } = sectionsData.sectionTitles;

  return (
    <ContactSection id="contact">
      <Container ref={containerRef}>
        <Title>{contactTitle?.title || "Get In Touch"}</Title>
        <ContactWrapper>
          <ContactInfo>
            <Greeting>Let's <span>Connect</span></Greeting>
            <Description>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </Description>
            <ContactMethods>
              <ContactMethod href={`mailto:${contact.email.value}`}>
                <i className="fas fa-envelope"></i>
                <div>
                  <div style={{ opacity: 0.7, fontSize: '0.9rem' }}>{contact.email.label}</div>
                  {contact.email.value}
                </div>
              </ContactMethod>
              <ContactMethod href="#">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <div style={{ opacity: 0.7, fontSize: '0.9rem' }}>{contact.location.label}</div>
                  {contact.location.value}
                </div>
              </ContactMethod>
            </ContactMethods>
          </ContactInfo>
          <SocialGrid>
            {contact.socialLinks.map((link, index) => (
              <SocialCard
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
                <span>{link.label}</span>
              </SocialCard>
            ))}
          </SocialGrid>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};

export default ContactAlt; 