import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Anchor from "../components/Anchor";
import Title from "../components/Title";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faKaggle } from '@fortawesome/free-brands-svg-icons';



const Layout = () => {
    return (
      <>
        {/* Top navigation bar */}
        <motion.nav className="topnav-container" initial={{ opacity: 0, y: -50}} animate={{ opacity: 1, y: 0, transition: { delay: 0.25} }}>
          <div className="home-button">
            <Link to={"/"}>
              <p className="name">j.</p>
            </Link>
          </div>
          <div className="topnav-menu">
            <NavLink className="topnav-link anchor underline" activeclassname="active" to="/">home</NavLink>
            <NavLink className="topnav-link anchor underline" activeclassname="active" to="/work">work</NavLink>
            <NavLink className="topnav-link anchor underline" activeclassname="active" to="/files/justin_koo_resume_2023.pdf" target="_blank" download>Résumé</NavLink>
          </div>
        </motion.nav>

        <nav className="sidenav-container">
          <p>SCROLL DOWN</p>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>
        </nav>

        <div className="app-container" id="app-container">
          {/* Container for the main content of the portfolio */}
          <div className="main-container"><Outlet/></div>
          <nav className="botnav-container">
            <Title size="standard">Interested? Let's get in touch!</Title>
            <br></br>
            <div className="botnav-bottom">
              <p>©2023 Justin Koo </p>
              <Anchor target={true} underline={false} href={"https://www.linkedin.com/in/koo-justin/"}>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </Anchor>
              <Anchor target={true} underline={false} href={"https://github.com/jhtkoo0426"}>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </Anchor>
              <Anchor target={true} underline={false} href={"https://www.kaggle.com/jhtkoo0426"}>
                <FontAwesomeIcon icon={faKaggle}></FontAwesomeIcon>
              </Anchor>
              <Anchor href={"mailto:jhtkbusiness@gmail.com"} target={true} underline={false}>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </Anchor>
            </div>
          </nav>
        </div>
      </>
    )
};

export default Layout;