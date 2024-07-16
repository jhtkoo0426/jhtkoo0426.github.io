import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion";
import MomentumScroll from './MomentumScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Styling
import "../css/app.scss";
import "../css/components.scss";
import "../css/layout.scss";


const Layout = ({ pageTitle, children }) => {
  const isIndexPage = pageTitle === "index";

  return (
    <>
      {!isIndexPage &&
        <nav className='topnav'>
          <Link to='/'>Justin Koo</Link>
          <Link to='/'><div className='close-button'></div></Link>
        </nav>
      }
      <div className='wrapper'>
        
        <MomentumScroll>
          <main>
            {children}
          </main>
        </MomentumScroll>
      </div>
    </>
  )
}

export default Layout