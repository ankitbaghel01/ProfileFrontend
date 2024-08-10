// src/CursorDetector.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`

  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
`;

const follow = keyframes`
  from {
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    transform: translate(-50%, -50%) scale(1.5);
  }
`;

const Cursor = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 155, 0.788);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  animation: ${(props) => (props.isBlinking ? blink : 'none')} 1s infinite;
  transition: left 0.1s, top 0.1s;
`;

const Trail = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 155, 0.788);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  animation: ${follow} 0.5s infinite;
  transition: left 0.2s, top 0.2s;
`;

const CursorDetector = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  let timer;

  const updatePosition = (event) => {
    clearTimeout(timer);
    setIsBlinking(false);
    setPosition({ x: event.clientX, y: event.clientY });

    timer = setTimeout(() => {
      setIsBlinking(true);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const trailTimer = setInterval(() => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
    }, 16);

    return () => clearInterval(trailTimer);
  }, [position]);

  return (
    <div>

      <Cursor
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        isBlinking={isBlinking}
      />
      <Trail style={{ left: `${trailPosition.x}px`, top: `${trailPosition.y}px` }} />
    </div>
  );
};

export default CursorDetector;
