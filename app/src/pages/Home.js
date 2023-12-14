// Home.js template
// Import core libraries
import React, { useState, useEffect, useRef } from 'react';

// Import components
import Anchor from '../components/Anchor';
import Title from "../components/Title";
import MaskedTitle from "../components/MaskedTitle";
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div className='homepage'>
            <div className='projects-nav'>
                <Link className='anchor project-link'>
                    <Title size='huge' text_transform='upper' font='interblack'>test project</Title>
                </Link>
                <Link className='anchor project-link'>
                    <Title size='huge' text_transform='upper' font='interblack'>test project</Title>
                </Link>
                <Link className='anchor project-link'>
                    <Title size='huge' text_transform='upper' font='interblack'>test project</Title>
                </Link>
                <Link className='anchor project-link'>
                    <Title size='huge' text_transform='upper' font='interblack'>test project</Title>
                </Link>
                <Link className='anchor project-link'>
                    <Title size='huge' text_transform='upper' font='interblack'>test project</Title>
                </Link>
                <Link className='anchor project-link'>
                    <Title size='huge' text_transform='upper' font='interblack'>test project</Title>
                </Link>
                <Link className='anchor project-link'>
                    <Title size='huge' text_transform='upper' font='interblack'>test project</Title>
                </Link>
                <Link className='anchor project-link'>
                    <Title size='huge' text_transform='upper' font='interblack'>test project</Title>
                </Link>
                <Link className='anchor project-link'>
                    <Title size='huge' text_transform='upper' font='interblack'>test project</Title>
                </Link>
            </div>
        </div>
    );
};

export default Home;
