import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectsAlt from './components/ProjectsAlt';
import Contact from './components/Contact';
import SideProjects from './components/SideProjects';
import HeroAlt from './components/HeroAlt';
import ExperienceAlt from './components/ExperienceAlt';

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
        {/* <Hero /> */}
        <HeroAlt />
        <Skills />
        <SideProjects />
        <ExperienceAlt />
        <ProjectsAlt />
        <Contact />
      </Main>
    </AppContainer>
  );
}

export default App; 