import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const Navbar = ({id, className, children, scrollY}) => {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <nav className={`navbar ${className} ${scrolled ? 'scrolled' : ''}`}>
        {children}
      </nav>
    );
  };

export default Navbar;