import React, { createContext, useState } from 'react';

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <CursorContext.Provider value={{ hovering, setHovering }}>
      {children}
    </CursorContext.Provider>
  );
};
