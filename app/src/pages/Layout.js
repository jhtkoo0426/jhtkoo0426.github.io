// Layout.js
import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/layout.scss";
import "../css/home.scss";

const Layout = () => {
  return (
    <>
      <motion.nav className="topnav" initial={{ opacity: 0, y: -50}} animate={{ opacity: 1, y: 0, transition: { delay: 0.25} }}>
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
      <div className="leftnav"></div>
      <div className="rightnav"></div>
      <div className="app-container">
        {/* Container for the main content of the portfolio */}
        <div className="main-container"><Outlet /></div>
      </div>
    </>
  );
};

export default Layout;
