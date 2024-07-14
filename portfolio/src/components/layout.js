import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion";
import MomentumScroll from './MomentumScroll';

// Styling
import "../css/app.scss";
import "../css/layout.scss";

// Framer motion variants
const topnavVariant = {
  initial: {
    y: -50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const item = {
  initial: {
    y: -30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Layout = ({ pageTitle, children }) => {
  return (
    <div className='layout-container'>
      <motion.nav variants={topnavVariant} initial="initial" animate="animate" className='topnav'>
        <motion.div variants={item} className='left-content'>
          <div className='icon'>
            <div className='icon-inner'>
              <p className='cn-last-name'><b>古</b></p>
              <p className='cn-first-name'><b>皓天</b></p>
            </div>
          </div>
          <div className='en-name'>
            <motion.p variants={item} className='name'>Justin Koo</motion.p>
            <motion.p variants={item} className='title'>Data Enthusiast</motion.p>
          </div>
        </motion.div>
        <nav className='navbar'>
          <Link to='/'>Work</Link>
        </nav>
        <nav className='socials'>
          <motion.a variants={item} href='https://www.linkedin.com/' target='_blank'>LinkedIn</motion.a>
          <motion.a variants={item} href='https://github.com/' target='_blank'>GitHub</motion.a>
        </nav>
      </motion.nav>
      <MomentumScroll>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </MomentumScroll>
    </div>
  )
}

export default Layout