import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  color: white;
`;

const ContactContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  font-size: 2.5rem;
`;

const ContactInfo = styled.div`
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    strong {
      color: rgba(255, 255, 255, 0.9);
      min-width: 80px;
    }

    a {
      color: white;
      text-decoration: none;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }

  a {
    padding: 0.8rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    width: 100%;
    text-align: center;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateX(5px);
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>Contact Me</Title>
      <ContactContent>
        <ContactInfo>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:cse.ariful@gmail.com">cse.ariful@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+8801869946417">+880 186 994 6417</a>
          </p>
          <p>
            <strong>Location:</strong> Sylhet, Bangladesh
          </p>
        </ContactInfo>
        <SocialLinks>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
        </SocialLinks>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact; 