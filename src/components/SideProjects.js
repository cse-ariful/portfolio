import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SideProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: #111827;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(circle at 50% 50%, rgba(76, 0, 255, 0.05) 0%, transparent 50%);
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
  color: #fff;
  font-size: 2.5rem;
  background: linear-gradient(to right, #fff, #a5b4fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProjectInfo = styled.div`
  color: white;
  padding-right: 2rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #fff, #a5b4fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .tagline {
    color: #a5b4fc;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: #e5e7eb;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const AppStoreButton = styled.a`
  display: inline-block;
  transition: all 0.3s ease;

  img {
    height: 40px;
    width: auto;
  }

  &:hover {
    transform: translateY(-3px);
    filter: brightness(1.1);
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  height: 450px;
  perspective: 1000px;
`;

const CarouselTrack = styled.div`
  position: relative;
  height: 100%;
  transform-style: preserve-3d;
`;

const CarouselSlide = styled.div`
  position: absolute;
  width: 210px;
  height: 420px;
  left: 50%;
  transition: all 0.5s ease;
  opacity: ${props => props.active ? 1 : 0.5};
  transform: ${props => {
    if (props.position === 'center') {
      return 'translateX(-50%) translateZ(200px) scale(1)';
    } else if (props.position === 'left') {
      return 'translateX(-100%) translateZ(0) scale(0.8)';
    } else if (props.position === 'right') {
      return 'translateX(0) translateZ(0) scale(0.8)';
    }
    return 'translateX(-50%) translateZ(-200px) scale(0.6)';
  }};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const AppLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SideProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenshots = Array.from({ length: 10 }, (_, i) => 
    `/site_audit_pro/site_audit_ss_${i + 1}.png`
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SideProjectsSection id="side-projects">
      <Title>Side Projects</Title>
      <ProjectContainer>
        <ProjectInfo>
          <AppLogo 
            src="/site_audit_pro_logo.webp" 
            alt="Audit Master Pro Logo"
          />
          <h3>Audit Master</h3>
          <div className="tagline">Audit, Capture, Share</div>
          <p>
            AI-Powered Audit Companion that Transform the way you audit with Audit Master Pro, the professional-grade mobile app designed to save time, improve accuracy, and simplify inspections. Harness the power of advanced AI to generate precise reports and streamline your workflow effortless
          </p>
          <AppStoreButton 
            href="http://apps.apple.com/us/app/audit-master-site-check-pro/id6602890841"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
              alt="Download on the App Store"
            />
          </AppStoreButton>
        </ProjectInfo>
        <CarouselContainer>
          <CarouselTrack>
            {screenshots.map((src, index) => {
              let position = 'hidden';
              const diff = (index - currentIndex + screenshots.length) % screenshots.length;
              if (diff === 0) position = 'center';
              else if (diff === 1) position = 'right';
              else if (diff === screenshots.length - 1) position = 'left';

              return (
                <CarouselSlide
                  key={index}
                  position={position}
                  active={position === 'center'}
                >
                  <img src={src} alt={`Screenshot ${index + 1}`} />
                </CarouselSlide>
              );
            })}
          </CarouselTrack>
        </CarouselContainer>
      </ProjectContainer>
    </SideProjectsSection>
  );
};

export default SideProjects;