// Title.js
import React, { useEffect, useRef, useState } from 'react';

const MaskedTitle = ({ id, className, normal_text, size, font, text_transform, masked }) => {
  const titleRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY || window.pageYOffset;
      setScrollPosition(yPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (masked && titleRef.current) {
      const titleElement = titleRef.current;
      const scrollMultiplier = 0.3;
      const startMaskingThreshold = 500;
      const effectiveScrollPosition = Math.max(0, scrollPosition - startMaskingThreshold);
      const maxCharsToMask = Math.floor(effectiveScrollPosition * scrollMultiplier);
      const maskedText = normal_text.substring(0, maxCharsToMask);
      const remainingText = normal_text.substring(maxCharsToMask);

      titleElement.innerHTML = `
                <span class="masked">${maskedText}</span>${remainingText}
            `;
    }
  }, [scrollPosition, normal_text, masked]);

  const handleTitleMouseEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      cursor.classList.add('hover-title');
    }
  };

  const handleTitleMouseLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      cursor.classList.remove('hover-title');
    }
  };

  if (text_transform === undefined || text_transform === null) {
    text_transform = 'normal';
  }

  return (
    <div
      ref={titleRef}
      id={id}
      className={`title ${className} ${size === undefined ? 'large' : size} ${font} ${text_transform}`}
      onMouseEnter={handleTitleMouseEnter}
      onMouseLeave={handleTitleMouseLeave}
      style={{ position: 'relative' }}
    >
      <h1 className='normal-text'>{masked ? '' : normal_text}</h1>
    </div>
  );
};

export default MaskedTitle;
