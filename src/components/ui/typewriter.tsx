'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, delay = 70 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return (): void => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <>
      <noscript>{text}</noscript>
      {currentText}
      {currentIndex != text.length && (
        <span className="animate-ping font-light">|</span>
      )}
    </>
  );
};
