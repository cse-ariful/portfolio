import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  90% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const QuoteContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  overflow: hidden;
`;

const Quote = styled.p`
  color: white;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
  animation: ${slideUp} 5s ease-in-out forwards;
  max-width: 80%;
  line-height: 1.6;
  font-style: italic;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const quotes = [
  "Code is poetry in motion",
  "Building tomorrow's solutions today",
  "Turning coffee into code",
  "Debug like a detective, code like an artist",
  "Making the complex simple",
  "Creating digital experiences that matter",
  "Innovation through iteration",
  "Clean code, clear mind",
  "Crafting pixel-perfect experiences",
  "Mobile-first, user always"
];

const QuoteOverlay = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(randomQuote);
      setKey(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <QuoteContainer>
      {currentQuote && <Quote key={key}>{currentQuote}</Quote>}
    </QuoteContainer>
  );
};

export default QuoteOverlay; 