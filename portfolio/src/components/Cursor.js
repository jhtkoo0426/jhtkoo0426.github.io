import React, { useState, useEffect, useContext } from 'react';
import { CursorContext } from './CursorContext';

// Styling
import '../css/cursor.scss';


const CustomCursor = () => {
  const { hovering } = useContext(CursorContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
    
  }, []);

  return (
    <div
      className={`custom-cursor ${hovering ? 'hovering' : ''}`}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      {hovering && <img src={hovering} alt="cursor-image" />}
    </div>
  );
};


export default CustomCursor;