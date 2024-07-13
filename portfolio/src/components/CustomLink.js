import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { CursorContext } from './CursorContext';


const CustomLink = ({ to, children, image }) => {
  const { setHovering } = useContext(CursorContext);

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovering(image)}
      onMouseLeave={() => setHovering(false)}
    >
      {children}
    </Link>
  );
};


export default CustomLink;