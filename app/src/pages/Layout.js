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
      <div className={"app-container"}>
        <motion.nav
          className="leftnav"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 1.25 }}
          variants={{visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: -100 }}}>
          <NavLink className="anchor underline" activeclassname="active" to={"/"}>About</NavLink>
          <NavLink className="anchor underline" activeclassname="active" to={"/experiences"}>Experiences</NavLink>
          <NavLink className="anchor underline" activeclassname="active" to={"/projects"}>Projects</NavLink>
          <NavLink className="topnav-link anchor underline" activeclassname="active" to="/files/justin_koo_resume_2023.pdf" target="_blank" download>Résumé</NavLink>
        </motion.nav>
        {/* Container for the main content of the portfolio */}
        <div className="main-container">
          <Outlet/>
        </div>
        {/* <nav className="botnav-container">
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
        </nav> */}
      </div>
    )
};

export default Layout;