import React, { useState, useEffect } from 'react';

const TextChange = () => {
  // Define the texts to display; the second text is "I am Developer"
  const texts = ["Rishabh", "a Developer"];
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100; // Adjust typing speed (ms per tick)
    const intervalId = setInterval(() => {
      const fullText = texts[textIndex];
      
      if (isForward) {
        // Typing forward
        if (charIndex < fullText.length) {
          setCharIndex((prev) => prev + 1);
          setCurrentText(fullText.substring(0, charIndex + 1));
        } else {
          // Finished typing; switch to deleting after a brief pause
          setIsForward(false);
        }
      } else {
        // Deleting text
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          setCurrentText(fullText.substring(0, charIndex - 1));
        } else {
          // Finished deleting; move to next text and start typing forward
          setIsForward(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [charIndex, isForward, textIndex, texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
