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

const AppContainer = styled.div`
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
`;

function App() {
  return (
    <AppContainer className="App">
      <GlobalStyles />
      <Navbar />
      <Main>
         
        <HeroAlt />
        <ExperienceAlt2 />
        <SkillsAlt />
        <SideProjects />
        <ProjectsAlt2 />
        <ContactAlt />
      </Main>
    </AppContainer>
  );
}

export default App; 