// Layout.js
// Import core libraries
import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Import components
import Anchor from "../components/Anchor";

// Import SCSS files
import "../css/layout.scss";
import "../css/home.scss";

// Other libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faKaggle } from '@fortawesome/free-brands-svg-icons';

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

    return (
        <>
          <motion.nav className="topnav" initial={{ opacity: 0, y: -50}} animate={{ opacity: 1, y: 0, transition: { delay: 0.25} }}>
            <div className="home-button">
              <Link to={"/"}>
                <p className="name">logo</p>
              </Link>
            </div>
            <div className="topnav-menu">
              <NavLink className="topnav-link anchor underline" activeclassname="active" to="/">home</NavLink>
              <NavLink className="topnav-link anchor underline" activeclassname="active" to="/work">work</NavLink>
              <NavLink className="topnav-link anchor underline" activeclassname="active" to="/files/justin_koo_resume_2023.pdf" target="_blank" download>Résumé</NavLink>
            </div>
          </motion.nav>
          <div className="leftnav">
            <div className='social-links'>
              <Anchor target={true} underline={false} href={"https://www.linkedin.com/in/koo-justin/"}>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </Anchor>
              <Anchor target={true} underline={false} href={"https://github.com/jhtkoo0426"}>
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
              </Anchor>
              <Anchor target={true} underline={false} href={"https://www.kaggle.com/jhtkoo0426"}>
                <FontAwesomeIcon icon={faKaggle}></FontAwesomeIcon>
              </Anchor>
              {/* <Anchor href={"mailto:jhtkbusiness@gmail.com"} target={true} underline={false}>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </Anchor> */}
            </div>
          </div>
          <div className="rightnav">
          </div>
          <div className="app-container">
            {/* Container for the main content of the portfolio */}
            <div className="main-container"><Outlet /></div>
          </div>
          <div className='botnav-placehold'>
            
          </div>
        </>
    );
};

export default Layout;
