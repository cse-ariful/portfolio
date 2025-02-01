import React from 'react';
import styled from 'styled-components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { slideIn, slideInRight } from '../styles/animations';

const ProjectsSection = styled.section`
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

  @media (max-width: 768px) {
    &::after {
      display: none;
    }
  }
`;

const ProjectItem = styled.div`
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
    border: 4px solid #111827;
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

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 0;
    left: 0;

    &::before, &::after {
      display: none;
    }
  }
`;

const AnimatedProjectItem = styled(ProjectItem)`
  opacity: 0;
  animation: ${props => props.position === 'left' ? slideIn : slideInRight} 0.8s ease-out forwards;
  animation-delay: ${props => props.index * 0.3}s;
  animation-play-state: ${props => props.isVisible ? 'running' : 'paused'};
`;

const ProjectContent = styled.div`
  padding: 2rem;
  position: relative;
  border-radius: 10px;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-left: 2px solid rgba(165, 180, 252, 0.3);
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
`;

const AppIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const PlatformBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-right: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  color: #a5b4fc;

  @media (max-width: 768px) {
    margin-right: 0;
  }

  i {
    font-size: 1rem;
  }
`;

const ProjectDetails = styled.div`
  flex: 1;

  h3 {
    color: #f3f4f6;
    margin-bottom: 0.8rem;
    font-size: 1.5rem;
  }

  .platforms {
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }

  .downloads {
    color: #a5b4fc;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  ul {
    margin-top: 1rem;
    padding-left: 1.5rem;
    list-style: none;

    @media (max-width: 768px) {
      text-align: left;
    }

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

const Projects = () => {
  const [timelineRef, timelineVisible] = useScrollAnimation();

  const projects = [
    {
      title: "PBN Grow 2",
      icon: "/pbn_grow_2.webp",
      platforms: ["ios"],
      downloads: "50K+",
      features: [
        "Paint by numbers creation tool",
        "Advanced color matching system",
        "Custom canvas size options",
        "Progress tracking feature",
        "Cloud sync capabilities"
      ]
    },
    {
      title: "Video Editor",
      icon: "/video_editor.webp",
      platforms: ["android"],
      downloads: "2M+",
      features: [
        "Professional editing tools",
        "Multiple video tracks support",
        "Transition effects library",
        "Text and sticker overlays",
        "Export in various qualities"
      ]
    },
    {
      title: "Video Converter",
      icon: "/video_converter.webp",
      platforms: ["android"],
      downloads: "10M+",
      features: [
        "Support for multiple video formats",
        "Hardware-accelerated encoding",
        "Audio extraction and conversion",
        "Custom output settings",
        "Format presets for different devices"
      ]
    },
    {
      title: "Video Compressor",
      icon: "/video_compressor.webp",
      platforms: ["android"],
      downloads: "5M+",
      features: [
        "Advanced video compression algorithm",
        "Multiple quality presets",
        "Batch processing capability",
        "Custom resolution and bitrate settings",
        "Preview before compression"
      ]
    },
    {
      title: "Noise Reducer",
      icon: "/noise_reducer.webp",
      platforms: ["android"],
      downloads: "500K+",
      features: [
        "AI-powered noise reduction",
        "Real-time audio processing",
        "Multiple noise reduction modes",
        "Background noise cancellation",
        "Voice enhancement technology"
      ]
    },
    {
      title: "Video Merger",
      icon: "/video_merger.webp",
      platforms: ["android"],
      downloads: "1M+",
      features: [
        "Multiple video joining modes",
        "Transition effects between clips",
        "Audio mixing capabilities",
        "Timeline-based editing",
        "Export in various qualities"
      ]
    },
    {
      title: "Image Compressor",
      icon: "/image_compressor.webp",
      platforms: ["android"],
      downloads: "1M+",
      features: [
        "Smart image compression algorithm",
        "Batch image processing",
        "Custom quality settings",
        "Original vs compressed preview",
        "Multiple output formats support"
      ]
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Title>Project Showcase</Title>
      <Timeline ref={timelineRef}>
        {projects.map((project, index) => (
          <AnimatedProjectItem 
            key={index}
            index={index}
            position={index % 2 === 0 ? 'left' : 'right'}
            isVisible={timelineVisible}
          >
            <ProjectContent>
              <AppIcon src={`${process.env.PUBLIC_URL}/project_icons/${project.icon}`} alt={`${project.title} icon`} />
              <ProjectDetails>
                <h3>{project.title}</h3>
                <div className="platforms">
                  {project.platforms.map(platform => (
                    <PlatformBadge key={platform}>
                      <i className={`fab fa-${platform}`}></i>
                      {platform === 'android' ? 'Android' : 'iOS'}
                    </PlatformBadge>
                  ))}
                </div>
                <div className="downloads">{project.downloads} downloads</div>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </ProjectDetails>
            </ProjectContent>
          </AnimatedProjectItem>
        ))}
      </Timeline>
    </ProjectsSection>
  );
};

export default Projects; 