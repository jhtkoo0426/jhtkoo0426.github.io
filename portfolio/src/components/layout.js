import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion";
import MomentumScroll from './MomentumScroll';

// Styling
import "../css/layout.scss";


const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
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