// Layout.js
// Import core libraries
import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Import components
import Anchor from "../components/Anchor";
import CustomCursor from '../components/CustomCursor';
import Title from '../components/Title';

// Import SCSS files
import "../css/layout.scss";
import "../css/home.scss";

// Smooth parallax scroll
import Lenis from '@studio-freight/lenis'



const Layout = () => {
    // Apply smooth parallax scroll with Lenis
    const lenis = new Lenis()
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Get relative URL
    const location = useLocation();
    const [isHome, setIsHome] = useState(false);

    useEffect(() => {
      setIsHome(location.pathname === '/');
      console.log(isHome)
    }, [isHome, location.pathname])

    return (
        <>
          <CustomCursor />
          <div className="rightnav"></div>
          <div className={`app-container ${isHome ? 'home' : ''}`}>
            {/* Container for the main content of the portfolio */}
            <div className="main-container"><Outlet /></div>
          </div>
          <div className={`botnav ${isHome ? 'home' : ''}`}>
            <div className={`nav-links ${isHome ? 'home' : ''}`}>
              <Link className='anchor nav-icon' to='/'>
                <Title font='averta' text_transform='upper' size='medium'>
                  justin koo.
                </Title>
              </Link>
              <div className='nav-info'>
                <p>Web portfolio of Justin Koo</p>
                <p>London, UK | Hong Kong</p>
                <p>Data Analyst</p>
                <Anchor href={"mailto:justinkoo426@gmail.com"} target={true} underline={false}>
                  justinkoo426@gmail.com
                </Anchor>
              </div>
            </div>
            <div className={`social-links ${isHome ? 'home': ''}`}>
                <Anchor target={true} underline={false} href={"https://www.linkedin.com/in/koo-justin/"}>
                  linkedin
                </Anchor>
                <Anchor target={true} underline={false} href={"https://github.com/jhtkoo0426"}>
                  github
                </Anchor>
                <Anchor target={true} underline={false} href={"https://www.kaggle.com/jhtkoo0426"}>
                  kaggle
                </Anchor>
                
              </div>
          </div>
        </>
    );
};

export default Layout;
