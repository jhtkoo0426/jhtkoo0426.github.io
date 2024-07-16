import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion";
import MomentumScroll from './MomentumScroll';

// Styling
import "../css/app.scss";
import "../css/components.scss";
import "../css/layout.scss";


// Framer motion variants

const Layout = ({ pageTitle, children }) => {
  const isIndexPage = pageTitle === "index";

  return (
    <div className='wrapper'>
      {!isIndexPage &&
        <nav className='topnav'>
          <Link to='/'>Back</Link>
        </nav>
      }
      <MomentumScroll>
        <main>
          {children}
        </main>
      </MomentumScroll>
    </div>
  )
}

export default Layout