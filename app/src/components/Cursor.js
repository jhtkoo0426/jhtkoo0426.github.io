// Custom cursor for web portfolio.
import React, { useEffect } from 'react'


const Cursor = () => {
    useEffect(() => {
        let innerCursor = document.querySelector(".inner-cursor");
    
        document.addEventListener('mousemove', moveCursor);
    
        function moveCursor(e) {
          let x = e.clientX;
          let y = e.clientY;
    
          innerCursor.style.left = `${x}px`;
          innerCursor.style.top = `${y}px`;
        }
  
        let links = Array.from(document.querySelectorAll('a, a.anchor'));

        links.forEach(link => {
          link.addEventListener('mouseover', () => {
            innerCursor.classList.add("grow");
          });
          link.addEventListener('mouseleave', () => {
            innerCursor.classList.remove("grow");
          });
        })
    })
    
    return (
        <div className="cursor">
          <div className="inner-cursor"></div>
          <div className="outer-cursor"></div>
        </div>
    )
}

export default Cursor