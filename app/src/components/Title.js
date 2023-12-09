// Title.js
import React from 'react';



const Title = ({ id, className, size, font, text_transform, children }) => {
  if (text_transform === undefined || text_transform === null) {
    text_transform = 'normal';
  }

  return (
    <h1
      id={id}
      className={`title ${className} ${size === undefined ? 'large' : size} ${font} ${text_transform}`}
      style={{ position: 'relative' }}
    >
      {children}
    </h1>
  );
};


export default Title;
