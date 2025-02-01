import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
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
    background: radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.05) 0%, transparent 50%);
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

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: rgba(165, 180, 252, 0.3);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 1100px) {
    &::after {
      left: 0;
      transform: none;
    }
  }

  @media (max-width: 768px) {
    &::after {
      display: none;
    }
  }
`;

const ExperienceItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${props => props.position === 'left' ? '0' : '50%'};

  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: #a5b4fc;
    border: 4px solid #1a1a1a;
    border-radius: 50%;
    top: 25px;
    right: ${props => props.position === 'left' ? '-8px' : 'auto'};
    left: ${props => props.position === 'left' ? 'auto' : '-8px'};
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 2px;
    background: rgba(165, 180, 252, 0.3);
    top: 32px;
    right: ${props => props.position === 'left' ? '0' : 'auto'};
    left: ${props => props.position === 'left' ? 'auto' : '0'};
  }

  @media (max-width: 1100px) {
    width: 100%;
    left: 0;
    padding-left: 50px;
    padding-right: 20px;

    &::before {
      left: -8px;
      right: auto;
    }

    &::after {
      left: 0;
      right: auto;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;

    &::before, &::after {
      display: none;
    }
  }
`;

const ExperienceContent = styled.div`
  padding: 2rem;
  position: relative;
  border-radius: 10px;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.15);

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1100px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-left: 2px solid rgba(165, 180, 252, 0.3);
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
  }

  h3 {
    color: #f3f4f6;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  h4 {
    color: #a5b4fc;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .period, .location {
    color: #9ca3af;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  ul {
    margin-top: 1rem;
    padding-left: 1.5rem;
    list-style: none;

    li {
      margin-bottom: 0.8rem;
      color: #e5e7eb;
      line-height: 1.6;
      position: relative;

      &::before {
        content: "•";
        color: #a5b4fc;
        position: absolute;
        left: -1.5rem;
      }
    }
  }
`;

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Enosis Solutions",
      period: "Jun 2023 – present",
      location: "Hybrid, Dhaka, Bangladesh",
      achievements: [
        "Integrated VoIP/SIP technology in an iOS app with 99% call reliability",
        "Analyzed project requirements and improved sprint efficiency by 25%",
        "Led and mentored iOS and Android developers, improving productivity by 30%",
        "Improved code quality and development efficiency by 35%",
        "Managed tasks in JIRA, reducing project delivery time by 10%"
      ]
    },
    {
      title: "Mobile Application Developer",
      company: "Layal",
      period: "Oct 2022 – May 2023",
      location: "Remote, Netherlands",
      achievements: [
        "Led planning and development using Flutter",
        "Reduced MVP release time by 20%",
        "Integrated in-app purchases improving purchase rate by 20%",
        "Managed app publishing across multiple platforms"
      ]
    },
    {
      title: "Software Engineer",
      company: "Inverse.AI",
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
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Title>Experience</Title>
      <Timeline>
        {experiences.map((exp, index) => (
          <ExperienceItem 
            key={index} 
            position={index % 2 === 0 ? 'left' : 'right'}
          >
            <ExperienceContent>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="period">{exp.period}</p>
              <p className="location">{exp.location}</p>
              <ul>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </ExperienceContent>
          </ExperienceItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience; 