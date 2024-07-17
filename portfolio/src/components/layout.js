import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion";

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
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout