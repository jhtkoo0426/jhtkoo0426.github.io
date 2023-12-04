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
                    <Title
                        className='name' size='small' font='averta' text_transform='upper'
                        normal_text={"justin koo"}
                        hovered_text={"hi there!"}
                    ></Title>
                    <Title
                        className='intro-text' size='huge' font='averta' text_transform='upper'
                        normal_text={"architecting the future with a foundation in data"}
                        hovered_text={"struggling with life with a foundation in data"}
                    ></Title>
                </div>
                <div className='landing-bg'></div>
            </div>

            {/* About me */}
            <div className='about-wrapper'>
                <Title
                    className='about-title' size='small' font='averta' text_transform='upper'
                    normal_text={"about me"}
                    // hovered_text={"about me"}
                    ></Title>
                <Title
                    className='about-text' size='medium' font='averta' text_transform='normal' masked={true}
                    normal_text={"I'm a data analyst with a strong focus on delivering impactful solutions through creative methods, including AI&ML."}
                    // hovered_text={"Cooking something up"}
                ></Title>
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
