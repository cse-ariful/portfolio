import React from 'react';
import styled from 'styled-components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { slideUp, scaleUp } from '../styles/animations';

const SkillsSection = styled.section`
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
  margin-bottom: 3rem;
  color: #fff;
  font-size: 2.5rem;
  background: linear-gradient(to right, #fff, #a5b4fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);

  h3 {
    color: #f3f4f6;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      position: relative;
      color: #e5e7eb;

      &:before {
        content: "•";
        color: #a5b4fc;
        position: absolute;
        left: 0;
      }
    }
  }
`;

const TechIconsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

const TechIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  i {
    font-size: 2.5rem;
    color: #a5b4fc;
    
    &.fa-swift {
      color: #F05138;
    }
    &.fa-android {
      color: #3DDC84;
    }
    &.fa-apple {
      color: #A2AAAD;
    }
    &.fa-github {
      color: #f3f4f6;
    }
    &.fa-git-alt {
      color: #F1502F;
    }
    &.fa-bitbucket {
      color: #0052CC;
    }
    &.fa-docker {
      color: #2496ED;
    }
    &.fa-jira {
      color: #0052CC;
    }
    &.devicon-kotlin-plain {
      color: #7F52FF;
    }
    &.fa-asana {
      color: #F06A6A;
    }
  }

  span {
    font-size: 0.9rem;
    color: #e5e7eb;
  }
`;

const AnimatedTechIcon = styled(TechIcon)`
  opacity: 0;
  animation: ${scaleUp} 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  animation-play-state: ${props => props.isVisible ? 'running' : 'paused'};
`;

const AnimatedSkillCategory = styled(SkillCategory)`
  opacity: 0;
  animation: ${slideUp} 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;
  animation-play-state: ${props => props.isVisible ? 'running' : 'paused'};
`;

const Skills = () => {
  const [techGridRef, techGridVisible] = useScrollAnimation();
  // const [skillsGridRef, skillsGridVisible] = useScrollAnimation(); // Commented out as not needed

  const techIcons = [
    { icon: 'fab fa-swift', name: 'Swift' },
    { icon: 'fab fa-android', name: 'Android' },
    { icon: 'fab fa-apple', name: 'iOS' },
    { icon: 'devicon-kotlin-plain', name: 'Kotlin' },
    { icon: 'fab fa-git-alt', name: 'Git' },
    { icon: 'fab fa-github', name: 'GitHub' },
    { icon: 'fab fa-bitbucket', name: 'Bitbucket' },
    { icon: 'fas fa-sync-alt', name: 'CI/CD' },
    { icon: 'fab fa-docker', name: 'Docker' },
    { icon: 'fab fa-jira', name: 'Jira' },
    { icon: 'fab fa-asana', name: 'Asana' },
  ];

  return (
    <SkillsSection id="skills">
      <Title>Expertise</Title>
      <TechIconsGrid ref={techGridRef}>
        {techIcons.map((tech, index) => (
          <AnimatedTechIcon 
            key={index} 
            index={index}
            isVisible={techGridVisible}
          >
            <i className={tech.icon}></i>
            <span>{tech.name}</span>
          </AnimatedTechIcon>
        ))}
      </TechIconsGrid>
      {/* Temporarily hiding skill cards
      <SkillsGrid ref={skillsGridRef}>
        {skillCategories.map((category, index) => (
          <AnimatedSkillCategory 
            key={index}
            index={index}
            isVisible={skillsGridVisible}
          >
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </AnimatedSkillCategory>
        ))}
      </SkillsGrid>
      */}
    </SkillsSection>
  );
};

export default Skills; 