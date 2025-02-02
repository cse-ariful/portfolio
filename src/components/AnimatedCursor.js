import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorHighlight = styled.div`
  width: 20px;
  height: 20px;
  background: rgba(165, 180, 252, 0.2);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.2s ease;
  transform: translate(-50%, -50%);
`;

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    let frame;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      const distX = position.x - currentX;
      const distY = position.y - currentY;
      
      currentX += distX * 0.15;
      currentY += distY * 0.15;

      if (Math.abs(distX) < 0.01) currentX = position.x;
      if (Math.abs(distY) < 0.01) currentY = position.y;

      const cursor = document.querySelector('#cursor-highlight');
      if (cursor) {
        cursor.style.left = `${currentX}px`;
        cursor.style.top = `${currentY}px`;
      }

      frame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    document.addEventListener('mousemove', handleMouseMove);
    frame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, [position]);

  return (
    <CursorHighlight
      id="cursor-highlight"
      style={{
        transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`
      }}
    />
  );
};

export default AnimatedCursor; 