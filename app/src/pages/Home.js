// Home.js template
// Import core libraries
import React, { useState, useEffect, useRef } from 'react';

// Import components
import Anchor from '../components/Anchor';
import ProjectShowcase from '../components/ProjectShowcase';
import Title from "../components/Title";
import MaskedTitle from "../components/MaskedTitle";
import { motion, useAnimation } from 'framer-motion';



const Home = () => {
    const [activeId, setActiveId] = useState('zephyr1');

    const handleProjectClick = (projectId) => {
        setActiveId((prevActiveId) => (prevActiveId === projectId ? null : projectId));
    };

    return (
        <div className='homepage'>
            {/* Grid layout wrapper for overlapping content with different z-indexes. */}
            <div className='landing-wrapper'>
                <div className='landing-intro'>
                    <Title className='name' size='small' font='averta' text_transform='upper'>
                        Justin Koo
                    </Title>
                    <Title className='intro-text' size='huge' font='averta' text_transform='normal'>
                        Architecting <span></span> the future with a foundation in data
                    </Title>
                </div>
                <div className='landing-bg'></div>
            </div>

            {/* About me */}
            <div className='about-wrapper'>
                <Title className='about-title' size='small' font='averta' text_transform='upper'>
                    about me
                </Title>
                <MaskedTitle
                    className='about-text' size='medium' font='averta' text_transform='normal' masked={true}
                    normal_text={"I'm a quant analyst with a strong focus on delivering impactful solutions through creative methods, including AI&ML."}
                ></MaskedTitle>
            </div>

            {/* Projects */}
            <div className='projects-wrapper'>
                <Title className='about-title' size='small' font='averta' text_transform='upper'>
                    featured projects
                </Title>
                <br></br>
                <div className='projects-grid'>
                    <ProjectShowcase
                        id='zephyr1'
                        title='Zephyr'
                        isActive={activeId === 'zephyr1'}
                        onClick={() => handleProjectClick('zephyr1')}
                    />
                    <ProjectShowcase
                        id='zephyr2'
                        title='zephyr 2'
                        isActive={activeId === 'zephyr2'}
                        onClick={() => handleProjectClick('zephyr2')}
                    />
                    <ProjectShowcase
                        id='zephyr3'
                        title='zephyr 3'
                        isActive={activeId === 'zephyr3'}
                        onClick={() => handleProjectClick('zephyr3')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
