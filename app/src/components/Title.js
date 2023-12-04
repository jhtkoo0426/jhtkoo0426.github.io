// React.js component for titles.
import React, { useEffect, useRef, useState } from 'react';



// size (str | optional: [tiny, small, standard (default), medium, large, huge])
// font (str | optional: [averta (default), playfair, inter, interbold])
// text_transform (str | optional: [normal (default), upper, lower])
// masked (bool | optional). If true, masks the text within the title with a different style, varying
//            with the current scrolling position.


const Title = ({ id, className, normal_text, hovered_text, size, font, text_transform, masked }) => {
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

    const handleTitleMouseEnter = (event) => {
        const cursor = document.querySelector('.cursor');
        console.log(event.target.classList)
        if (event.target.nodeType === 3) {
            // Check if the target is a text node
            cursor.classList.add('large');
            console.log('hi');
        }
    };
    
    const handleTitleMouseLeave = (event) => {
        const cursor = document.querySelector('.cursor');
        if (event.target.nodeType === 3) {
            // Check if the target is a text node
            cursor.classList.remove('large');
            console.log('bye');
        }
    };
    

    if (text_transform === undefined || text_transform === null) {
        text_transform = 'normal';
    }

    return (
        <h1
            ref={titleRef}
            id={id}
            className={`title ${className} ${size === undefined ? 'large' : size} ${font} ${text_transform}`}
            onMouseOver={handleTitleMouseEnter} onMouseLeave={handleTitleMouseLeave}
            style={{ position: 'relative' }}
        >
            {masked ? '' : normal_text}
        </h1>
    );
};

export default Title;