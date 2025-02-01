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

const CertificationsSection = styled.section`
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
  background: radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 50%);
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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  padding: 1rem;
`;

const CertificationCard = styled.div`
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;
  animation-play-state: ${props => props.isVisible ? 'running' : 'paused'};

  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.02);
    transform: translateY(-5px);
  }
`;

const CertificationTitle = styled.h3`
  color: #f3f4f6;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const IssuedBy = styled.div`
  color: #a5b4fc;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    font-size: 1rem;
  }
`;

const IssueDate = styled.div`
  color: #9ca3af;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  i {
    color: #a5b4fc;
  }
`;

const CredentialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #a5b4fc;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: rgba(165, 180, 252, 0.1);
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(165, 180, 252, 0.2);
    transform: translateX(5px);
  }

  i {
    font-size: 0.8rem;
  }
`;

const CertificationsAlt = () => {
  const [containerRef, isVisible] = useScrollAnimation(0.1);

  const certifications = [
    {
      title: "Managing and Leading Developers",
      issuedBy: "LinkedIn",
      issueDate: "March 23, 2023",
      credentialUrl: "https://www.linkedin.com/learning/certificates/2b23e1dcf0e4125af7cf48bdcd26213e88e1f7cbdd983b579e8086fa6fd7d72d",
      credentialId: "2b23e1dcf0e4"
    },
    {
      title: "Tech Career Skills: Effective Technical Communication",
      issuedBy: "LinkedIn",
      issueDate: "March 20, 2023",
      credentialUrl: "https://www.linkedin.com/learning/certificates/c3626dcf73838eb9e218c44db645b6c058b5f1f7e1541e97b82914a0f9f7356e",
      credentialId: "c3626dcf7383"
    },
    {
      title: "Continuous Integration and Continuous Delivery with GitLab",
      issuedBy: "LinkedIn",
      issueDate: "April 16, 2023",
      credentialUrl: "https://www.linkedin.com/learning/certificates/59a4a15bb0b9deb53307f3a4d811fcf1155361d76fbaa8967bbcd6710ad875d0",
      credentialId: "59a4a15bb0b9"
    }
  ];

  return (
    <CertificationsSection id="certifications">
      <GradientOverlay />
      <Container>
        <Title>Certifications</Title>
        <CertificationsGrid ref={containerRef}>
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={index}
              index={index}
              isVisible={isVisible}
            >
              <CertificationTitle>{cert.title}</CertificationTitle>
              <IssuedBy>
                <i className="fas fa-certificate"></i>
                {cert.issuedBy}
              </IssuedBy>
              <IssueDate>
                <i className="far fa-calendar-alt"></i>
                {cert.issueDate}
              </IssueDate>
              <CredentialLink 
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>
                View Credential
              </CredentialLink>
            </CertificationCard>
          ))}
        </CertificationsGrid>
      </Container>
    </CertificationsSection>
  );
};

export default CertificationsAlt; 