import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const Navbar = ({id, children}) => {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 100);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {children}
      </nav>
    );
  };

export default Navbar;