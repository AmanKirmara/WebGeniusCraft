import React, { useEffect, useState } from "react";

function TypewriterAnimation({ textArray, speed, color}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        if (currentText === textArray[currentIndex]) {
          setIsDeleting(true); // Start deleting animation
        } else {
          setCurrentText((prevText) => textArray[currentIndex].slice(0, prevText.length + 1));
        }
      } else {
        if (currentText === '') {
          setIsDeleting(false); // Stop deleting animation
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        } else {
          setCurrentText((prevText) => prevText.slice(0, prevText.length - 1));
        }
      }
    }, isDeleting ? speed / 2 : speed);
    
    return () => clearInterval(interval);
  }, [currentIndex, currentText, isDeleting, speed, textArray]);

  return <span style={{color}}>{currentText}</span>;
}

export default TypewriterAnimation;
