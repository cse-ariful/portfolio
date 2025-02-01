import React, { useState } from 'react';
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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;
  animation-play-state: ${props => props.isVisible ? 'running' : 'paused'};

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectHeader = styled.div`
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

const AppIconWrapper = styled.div`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    background: radial-gradient(circle at center, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
    border-radius: 18px;
    filter: blur(8px);
    z-index: -1;
  }
`;

const AppIcon = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #f3f4f6;
  margin-bottom: 0.5rem;
`;

const ProjectStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const PlatformBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  background: rgba(165, 180, 252, 0.1);
  color: #a5b4fc;

  i {
    font-size: 1rem;
  }
`;

const Downloads = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a5b4fc;
  font-size: 0.9rem;

  i {
    font-size: 1rem;
  }
`;

const ProjectContent = styled.div`
  padding: 0 2rem 2rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.8rem;
`;

const Feature = styled.li`
  color: #e5e7eb;
  font-size: 0.95rem;
  line-height: 1.6;
  display: flex;
  align-items: baseline;
  gap: 0.8rem;

  &::before {
    content: '•';
    color: #a5b4fc;
    font-size: 1.2rem;
  }
`;

const ProjectsAlt = () => {
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
      <Container ref={containerRef}>
        <Title>Featured Projects</Title>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              isVisible={isVisible}
            >
              <ProjectHeader>
                <AppIconWrapper>
                  <AppIcon 
                    src={`${process.env.PUBLIC_URL}/project_icons/${project.icon}`}
                    alt={project.title}
                  />
                </AppIconWrapper>
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectStats>
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
                  </ProjectStats>
                </ProjectInfo>
              </ProjectHeader>
              <ProjectContent>
                <FeatureList>
                  {project.features.map((feature, i) => (
                    <Feature key={i}>{feature}</Feature>
                  ))}
                </FeatureList>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </ProjectsSection>
  );
};

export default ProjectsAlt; 