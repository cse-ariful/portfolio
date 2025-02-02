import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectsAlt from './components/ProjectsAlt';
import ProjectsAlt2 from './components/ProjectsAlt2';
import Contact from './components/Contact';
import SideProjects from './components/SideProjects';
import HeroAlt from './components/HeroAlt';
import ExperienceAlt from './components/ExperienceAlt';
import ExperienceAlt2 from './components/ExperienceAlt2';
import SkillsAlt from './components/SkillsAlt';
import ContactAlt from './components/ContactAlt';
import EducationAlt from './components/EducationAlt';
import CertificationsAlt from './components/CertificationsAlt';
import { sectionsData } from './data/sections';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
`;

const App = () => {
  const { sectionTitles } = sectionsData;

  return (
    <AppContainer className="App">
      <GlobalStyles />
      <Navbar />
      <Main>
        {sectionTitles.hero.enabled && <HeroAlt />}
        {sectionTitles.experience.enabled && <ExperienceAlt2 />}
        {sectionTitles.education.enabled && <EducationAlt />}
        {sectionTitles.certifications.enabled && <CertificationsAlt />}
        {sectionTitles.skills.enabled && <SkillsAlt />}
        {sectionTitles.sideProjects.enabled && <SideProjects />}
        {sectionTitles.projects.enabled && <ProjectsAlt2 />}
        {sectionTitles.contact.enabled && <ContactAlt />}
      </Main>
    </AppContainer>
  );
};

export default App; 