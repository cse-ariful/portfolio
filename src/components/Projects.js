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

const ProjectsSection = styled.section`
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
  background: radial-gradient(circle at 50% 100%, rgba(124, 58, 237, 0.1) 0%, transparent 50%);
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
  padding: 1rem;
`;

const ProjectItem = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;
  animation-play-state: ${props => props.isVisible ? 'running' : 'paused'};
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.02);
    transform: translateY(-5px);
  }
`;

const AppIcon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 18px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 23px;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.5), rgba(79, 70, 229, 0.5));
    z-index: -1;
    opacity: 0.5;
    filter: blur(8px);
  }
`;

const ProjectTitle = styled.h3`
  color: #f3f4f6;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const PlatformBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  background: rgba(165, 180, 252, 0.1);
  border-radius: 20px;
  color: #a5b4fc;
  font-size: 0.9rem;
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;
  backdrop-filter: blur(10px);

  i {
    font-size: 0.8rem;
  }
`;

const Downloads = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #9ca3af;
  font-size: 0.9rem;

  i {
    color: #a5b4fc;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  display: grid;
  gap: 0.8rem;
`;

const Feature = styled.li`
  color: #e5e7eb;
  line-height: 1.6;
  padding-left: 1.5rem;
  position: relative;

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

const ProjectsAlt2 = () => {
  const [containerRef, isVisible] = useScrollAnimation(0.1);

  const projects = [
    {
      title: "PBN Grow 2",
      icon: "pbn_grow_2.webp",
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
      icon: "video_editor.webp",
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
      icon: "video_converter.webp",
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
      icon: "video_compressor.webp",
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
      icon: "noise_reducer.webp",
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
      icon: "video_merger.webp",
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
      icon: "image_compressor.webp",
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
      <GradientOverlay />
      <Container>
        <Title>Featured Projects</Title>
        <ProjectGrid ref={containerRef}>
          {projects.map((project, index) => (
            <ProjectItem 
              key={index}
              index={index}
              isVisible={isVisible}
            >
              <AppIcon>
                <img 
                  src={`${process.env.PUBLIC_URL}/project_icons/${project.icon}`}
                  alt={project.title}
                />
              </AppIcon>
              <ProjectTitle>{project.title}</ProjectTitle>
              <div>
                {project.platforms.map(platform => (
                  <PlatformBadge key={platform}>
                    <i className={`fab fa-${platform}`}></i>
                    {platform === 'android' ? 'Android' : 'iOS'}
                  </PlatformBadge>
                ))}
                <Downloads>
                  <i className="fas fa-download"></i>
                  {project.downloads}
                </Downloads>
              </div>
              <FeatureList>
                {project.features.map((feature, i) => (
                  <Feature key={i}>{feature}</Feature>
                ))}
              </FeatureList>
            </ProjectItem>
          ))}
        </ProjectGrid>
      </Container>
    </ProjectsSection>
  );
};

export default ProjectsAlt2; 