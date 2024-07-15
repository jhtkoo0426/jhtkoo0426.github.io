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
  return (
    <div className='wrapper'>
      <MomentumScroll>
        <main>
          {children}
        </main>
      </MomentumScroll>
    </div>
  )
}

export default Layout