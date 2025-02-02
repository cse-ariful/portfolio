import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SideProjects from './components/SideProjects';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import Certifications from './components/Certifications';
import { usePortfolioData } from './hooks/usePortfolioData';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
`;

const App = () => {
  const { data, loading } = usePortfolioData();
  
  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Error loading data</div>;
  
  const { sectionTitles } = data;

  return (
    <AppContainer className="App">
      <GlobalStyles />
      <Navbar />
      <Main>
        {sectionTitles?.hero?.enabled && <Hero />}
        {sectionTitles?.experience?.enabled && <Experience />}
        {sectionTitles?.education?.enabled && <Education />}
        {sectionTitles?.certifications?.enabled && <Certifications />}
        {sectionTitles?.skills?.enabled && <Skills />}
        {sectionTitles?.sideProjects?.enabled && <SideProjects />}
        {sectionTitles?.projects?.enabled && <Projects />}
        {sectionTitles?.contact?.enabled && <Contact />}
      </Main>
    </AppContainer>
  );
};

export default App; 