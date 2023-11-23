import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";


const Layout = () => {
    return (
      <>
        <Navbar>
          <div className="home-button">
            <Link to={"/"}>
              <p className="name">j.</p>
            </Link>
          </div>
          <div className="topnav-menu">
            <NavLink className="topnav-link anchor underline" activeclassname="active" to="/work">work</NavLink>
            <NavLink className="topnav-link anchor underline" activeclassname="active" to="/files/justin_koo_resume_2023.pdf" target="_blank" download>Résumé</NavLink>
          </div>
        </Navbar>

        <div className="app-container" id="app-container">
          {/* Container for the main content of the portfolio */}
          <div className="main-container"><Outlet/></div>
        </div>
      </>
    )
};

export default Layout;