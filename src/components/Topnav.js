// Renders a top navigation bar that is visible on all non-index pages.
import React from "react";
import { Link } from "gatsby";


const TopNav = () => (
    <nav className='topnav'>
      <Link to='/'>Justin</Link>
      <Link to='/'><div className='close-button'></div></Link>
    </nav>
);


export default TopNav;