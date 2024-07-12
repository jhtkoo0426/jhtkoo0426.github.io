import React, { useState } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import ClockAPI from './Clock';
import Lenis from 'lenis';

// Styling
import "../css/layout.scss";


const Layout = ({ pageTitle, children }) => {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <div className='app-container'>
      <p className='icon'>justin</p>
      <p className='intro'>IPA /ʤʌstɪn/</p>
      <p>{pageTitle}</p>
      <main>
        {children}
      </main>
      <nav className='botnav'>
        <p>Justin Koo @ 2024</p>
        <div className='socials'>
          <p>Contact: </p>
          <a href='https://www.linkedin.com/in/koo-justin/' target='_blank'>LinkedIn</a>
          <a href='https://github.com/jhtkoo0426/' target='_blank'>GitHub</a>
        </div>
      </nav>
    </div>
  );
};


export default Layout;