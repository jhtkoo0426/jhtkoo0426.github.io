// React.js component for titles.
import React, { useEffect, useRef, useState } from 'react';



// size (str | optional: [tiny, small, standard (default), medium, large, huge])
// font (str | optional: [averta (default), playfair, inter, interbold])
// text_transform (str | optional: [normal (default), upper, lower])
// masked (bool | optional). If true, masks the text within the title with a different style, varying
//            with the current scrolling position.
const Title = ({ id, className, children, size, font, text_transform, masked }) => {
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

            // Adjust the multiplier to control the rate at which characters are masked based on scroll position
            const scrollMultiplier = 0.3;
        
            // Adjust the threshold to control when the masking should start
            const startMaskingThreshold = 500; // Adjust this value based on when you want the masking to start
            const effectiveScrollPosition = Math.max(0, scrollPosition - startMaskingThreshold);
            const maxCharsToMask = Math.floor(effectiveScrollPosition * scrollMultiplier);
            const maskedText = children.substring(0, maxCharsToMask);
            const remainingText = children.substring(maxCharsToMask);
    
            titleElement.innerHTML = `
                <span class="masked">${maskedText}</span>${remainingText}
            `;
        }
    }, [scrollPosition, children, masked]);
    

    if (text_transform === undefined || text_transform === null) {
        text_transform = 'normal';
    }

    return (
        <h1
            ref={titleRef}
            className={`title ${className} ${size === undefined ? 'large' : size} ${font} ${text_transform}`}
            id={id}
        >
            {masked ? '' : children}
        </h1>
    );
};

export default Title;
