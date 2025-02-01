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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const EducationSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, 
      rgba(165, 180, 252, 0.1) 0%,
      rgba(165, 180, 252, 0.3) 50%,
      rgba(165, 180, 252, 0.1) 100%
    );
  }
`;

const EducationItem = styled.div`
  position: relative;
  padding-left: 3rem;
  margin-bottom: 4rem;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;
  animation-play-state: ${props => props.isVisible ? 'running' : 'paused'};

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #a5b4fc;
    box-shadow: 0 0 20px rgba(165, 180, 252, 0.5);
  }
`;

const Period = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(165, 180, 252, 0.1);
  border-radius: 20px;
  color: #a5b4fc;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);

  i {
    font-size: 0.8rem;
  }
`;

const Degree = styled.h3`
  color: #f3f4f6;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Institution = styled.div`
  color: #a5b4fc;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Location = styled.div`
  color: #9ca3af;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  i {
    color: #a5b4fc;
  }
`;

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
`;

const Achievement = styled.li`
  color: #e5e7eb;
  line-height: 1.6;
  padding-left: 1.5rem;
  position: relative;
  opacity: 0;
  animation: ${slideIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.1 + 0.3}s;
  animation-play-state: ${props => props.isVisible ? 'running' : 'paused'};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.7em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #a5b4fc;
  }
`;

const EducationAlt = () => {
  const [containerRef, isVisible] = useScrollAnimation(0.1);

  const education = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Leading University",
      period: "2015 - 2019",
      location: "Sylhet, Bangladesh",
      achievements: [
        "CGPA: 3.92",
        "Relevant coursework: Data Structures, Algorithms, Software Engineering",
        "Final year project: Smart Home Automation System"
      ]
    },
    // Add other educational qualifications
  ];

  return (
    <EducationSection id="education">
      <GradientOverlay />
      <Container>
        <Title>Education</Title>
        <Timeline ref={containerRef}>
          {education.map((edu, index) => (
            <EducationItem 
              key={index}
              index={index}
              isVisible={isVisible}
            >
              <Period>
                <i className="far fa-calendar-alt"></i>
                {edu.period}
              </Period>
              <Degree>{edu.degree}</Degree>
              <Institution>{edu.institution}</Institution>
              <Location>
                <i className="fas fa-map-marker-alt"></i>
                {edu.location}
              </Location>
              <Achievements>
                {edu.achievements.map((achievement, i) => (
                  <Achievement 
                    key={i}
                    index={i}
                    isVisible={isVisible}
                  >
                    {achievement}
                  </Achievement>
                ))}
              </Achievements>
            </EducationItem>
          ))}
        </Timeline>
      </Container>
    </EducationSection>
  );
};

export default EducationAlt; 