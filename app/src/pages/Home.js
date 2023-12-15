// Home.js template
// Import core libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import components
import Title from "../components/Title";
import ProjectLink from '../components/ProjectLink';


const Home = () => {
    return (
        <div className='homepage'>
            <div className='projects-nav'>
                <ProjectLink year={2023} project_title={'zephyr'}></ProjectLink>
                <ProjectLink year={2023} project_title={'ucl diss.'}></ProjectLink>
                <ProjectLink year={2023} project_title={'epidemic simulation'}></ProjectLink>
                <ProjectLink year={2023} project_title={'london qol analysis'}></ProjectLink>
                <ProjectLink year={2023} project_title={'housing price prediction'}></ProjectLink>
                <ProjectLink year={2023} project_title={'autofaq'}></ProjectLink>
                <ProjectLink year={2023} project_title={'tube planner'}></ProjectLink>
                <ProjectLink year={2023} project_title={'tetris ai'}></ProjectLink>
                <ProjectLink year={2023} project_title={'l4s school analysis'}></ProjectLink>
            </div>
        </div>
    );
};

export default Home;
