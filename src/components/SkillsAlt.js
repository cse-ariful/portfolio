import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { sectionsData } from '../data/sections';

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
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const SkillsSection = styled.section`
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
  max-width: 1400px;
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

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  animation-play-state: ${props => props.isVisible ? 'running' : 'paused'};
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.index * 0.2}s;

  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    background: radial-gradient(circle at center, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
    border-radius: 25px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    
    &::before {
      opacity: 1;
    }

    i {
      transform: scale(1.1);
    }
  }

  i {
    font-size: 2.5rem;
    transition: transform 0.3s ease;
    
    &.fa-swift { color: #F05138; }
    &.fa-android { color: #3DDC84; }
    &.fa-apple { color: #A2AAAD; }
    &.fa-github { color: #f3f4f6; }
    &.fa-git-alt { color: #F1502F; }
    &.fa-bitbucket { color: #0052CC; }
    &.fa-docker { color: #2496ED; }
    &.fa-jira { color: #0052CC; }
    &.devicon-kotlin-plain { color: #7F52FF; }
    &.fa-asana { color: #F06A6A; }
  }
`;

const TechName = styled.span`
  color: #e5e7eb;
  font-size: 0.9rem;
  text-align: center;
  opacity: 0.8;
`;

const SkillsAlt = () => {
  const [techGridRef, techGridVisible] = useScrollAnimation();
  const { techIcons } = sectionsData.skills;
  const { skills: skillsTitle } = sectionsData.sectionTitles;

  return (
    <SkillsSection id="skills">
      <GradientOverlay />
      <Container>
        <Title>{skillsTitle?.title || "Technical Expertise"}</Title>
        <TechGrid ref={techGridRef}>
          {techIcons.map((tech, index) => (
            <TechItem 
              key={index}
              index={index}
              isVisible={techGridVisible}
            >
              <IconWrapper index={index}>
                <i className={tech.icon}></i>
              </IconWrapper>
              <TechName>{tech.name}</TechName>
            </TechItem>
          ))}
        </TechGrid>
      </Container>
    </SkillsSection>
  );
};

export default SkillsAlt; 