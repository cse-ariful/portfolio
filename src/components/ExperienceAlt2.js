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

const ExperienceSection = styled.section`
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

const ExperienceItem = styled.div`
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

const Role = styled.h3`
  color: #f3f4f6;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Company = styled.a`
  color: #a5b4fc;
  text-decoration: none;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  &::after {
    content: '↗';
    font-size: 1rem;
  }
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

const ExperienceAlt2 = () => {
  const [containerRef, isVisible] = useScrollAnimation(0.1);

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Enosis Solutions",
      companyUrl: "https://www.enosisbd.com/",
      period: "Aug 2022 – Present",
      location: "Sylhet, Bangladesh",
      achievements: [
        "Integrated VoIP/SIP technology in an iOS app with 99% call reliability",
        "Analyzed project requirements and improved sprint efficiency by 25%",
        "Led and mentored iOS and Android developers, improving productivity by 30%",
        "Improved code quality and development efficiency by 35%",
        "Managed tasks in JIRA, reducing project delivery time by 10%"
      ]
    },
    {
      title: "Software Engineer",
      company: "Inverse.AI",
      companyUrl: "https://inverseai.com/",
      period: "Aug 2021 – Aug 2022",
      location: "Sylhet, Bangladesh",
      achievements: [
        "Worked as a Mobile Development Lead with a team of 5 members",
        "Led development and maintained mobile applications for Android",
        "Owned project execution and planned sprints",
        "Analyzed user data and integrated insights into feature development",
        "Optimized software architecture and modularized features"
      ]
    },
    {
      title: "Software Engineer",
      company: "Layal Technology",
      companyUrl: "https://www.withlayal.com/",
      period: "Jan 2019 – Jul 2021",
      location: "Sylhet, Bangladesh",
      achievements: [
        "Led planning and development using Flutter",
        "Reduced MVP release time by 20%",
        "Integrated in-app purchases improving purchase rate by 20%",
        "Managed app publishing across multiple platforms"
      ]
    }
  ];

  return (
    <ExperienceSection id="experience">
      <GradientOverlay />
      <Container>
        <Title>Professional Journey</Title>
        <Timeline ref={containerRef}>
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              index={index}
              isVisible={isVisible}
            >
              <Period>
                <i className="far fa-calendar-alt"></i>
                {exp.period}
              </Period>
              <Role>{exp.title}</Role>
              <Company 
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {exp.company}
              </Company>
              <Location>
                <i className="fas fa-map-marker-alt"></i>
                {exp.location}
              </Location>
              <Achievements>
                {exp.achievements.map((achievement, i) => (
                  <Achievement 
                    key={i}
                    index={i}
                    isVisible={isVisible}
                  >
                    {achievement}
                  </Achievement>
                ))}
              </Achievements>
            </ExperienceItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default ExperienceAlt2; 