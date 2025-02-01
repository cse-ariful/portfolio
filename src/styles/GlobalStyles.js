import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #111827;
    color: #f3f4f6;
  }

  .App {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }

  section {
    padding: 5rem 2rem;
    
    @media (max-width: 768px) {
      padding: 3rem 1rem;
    }
  }
`;

export default GlobalStyles; 