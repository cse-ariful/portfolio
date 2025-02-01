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

const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;
  animation-play-state: ${props => props.isVisible ? 'running' : 'paused'};

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const Role = styled.h3`
  font-size: 1.5rem;
  color: #f3f4f6;
  margin-bottom: 0.5rem;
`;

const Company = styled.a`
  font-size: 1.2rem;
  color: #a5b4fc;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  &::after {
    content: '↗';
    font-size: 1rem;
  }
`;

const Duration = styled.div`
  background: rgba(165, 180, 252, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: #a5b4fc;
  font-size: 0.9rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    font-size: 0.8rem;
  }
`;

const Location = styled.div`
  color: #9ca3af;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

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
  display: flex;
  align-items: baseline;
  gap: 1rem;

  &::before {
    content: '•';
    color: #a5b4fc;
    font-size: 1.5rem;
    line-height: 1;
  }
`;

const ExperienceAlt = () => {
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
        "Worked as a Mobile Development Lead with a team of 5 members, actively contributing to decision-making, analytical research, A/B testing, and leading the core Android team.",
        "Led development and maintained mobile applications for Android, ensuring high performance and scalability with a 99.99% crash-free app with 15M+ downloads.",
        "Owned project execution, planned sprints, managed the team, and drove efficient development to deliver high-quality results in 30% less time.",
        "Analyzed user data and integrated insights into feature development, leading to a 15% increase in in-app purchases.",
        "Optimized software architecture and modularized features, improving app stability by 20% and enhancing maintainability.",
        "Reduced crash rates to 0.01% through robust error handling and testing.",
        "Modernized legacy codebases, resulting in 25% faster development cycles."
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
    },
    // ... other experiences
  ];

  return (
    <ExperienceSection id="experience">
      <GradientOverlay />
      <Container ref={containerRef}>
        <Title>Professional Journey</Title>
        {experiences.map((exp, index) => (
          <ExperienceCard 
            key={index}
            index={index}
            isVisible={isVisible}
          >
            <Header>
              <CompanyInfo>
                <Role>{exp.title}</Role>
                <Company 
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.company}
                </Company>
              </CompanyInfo>
              <Duration>
                <i className="far fa-calendar-alt"></i>
                {exp.period}
              </Duration>
            </Header>
            <Location>
              <i className="fas fa-map-marker-alt"></i>
              {exp.location}
            </Location>
            <Achievements>
              {exp.achievements.map((achievement, i) => (
                <Achievement key={i}>
                  {achievement}
                </Achievement>
              ))}
            </Achievements>
          </ExperienceCard>
        ))}
      </Container>
    </ExperienceSection>
  );
};

export default ExperienceAlt; 