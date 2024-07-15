import React, { useState, useEffect, Children } from 'react';


const AlternatingText = ({ interval = 1000, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = Children.toArray(children);

  useEffect(() => {
    const toggleText = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };
    const intervalId = setInterval(toggleText, interval);
    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return (
    <div className='alternating-text'>
      {texts[currentIndex]}
    </div>
  );
};


export default AlternatingText;