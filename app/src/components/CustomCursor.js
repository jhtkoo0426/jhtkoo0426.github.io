// CustomCursor.js
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringH1, setIsHoveringH1] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if the cursor is over an h1 element
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      setIsHoveringH1(hoveredElement && (hoveredElement.classList.contains('title') || hoveredElement.classList.contains('masked')));
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHoveringH1 ? 'hover-h1' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default CustomCursor;
