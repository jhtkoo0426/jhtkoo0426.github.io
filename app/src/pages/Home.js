// Home.js template
// Import core libraries
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import components
import Anchor from '../components/Anchor';
import Title from "../components/Title";



const Home = () => {
    return (
        <div className='homepage'>
            {/* Grid layout wrapper for overlapping content with different z-indexes. */}
            <div className='landing-wrapper'>
                <div className='landing-intro'>
                    <Title className='name' size='small' font='inter' text_transform='upper'>justin koo</Title>
                    <Title className='intro-text' size='huge' font='interbold' text_transform='upper'>architecting the future with a foundation in data</Title>
                </div>
                <div className='landing-bg'></div>
            </div>

            {/* About me */}
            <div className='about'>
                <Title font='interbold' text_transform='upper'>about me</Title>
            </div>
            {/* What I do (skills) */}
            <div className='skillset'>

            </div>
            {/* Experience */}
            <div className='work'>

            </div>
        </div>
    );
};

export default Home;
