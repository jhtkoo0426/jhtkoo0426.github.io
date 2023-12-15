// Home.js template
// Import core libraries
import React from 'react';

// Import components
import ProjectLink from '../components/ProjectLink';


const Home = () => {
    return (
        <div className='homepage'>
            <div className='projects-nav'>
                <ProjectLink year={2023} project_title={'zephyr'}></ProjectLink>
                <ProjectLink year={2023} project_title={'tube planner'}></ProjectLink>
                <ProjectLink year={2023} project_title={'london qol analysis'}></ProjectLink>
                <ProjectLink year={2023} project_title={'housing price prediction'}></ProjectLink>
                <ProjectLink year={2023} project_title={'epidemic simulation'}></ProjectLink>
                <ProjectLink year={2023} project_title={'ucl diss.'}></ProjectLink>
                <ProjectLink year={2022} project_title={'autofaq'}></ProjectLink>
                <ProjectLink year={2020} project_title={'tetris ai'}></ProjectLink>
                <ProjectLink year={2020} project_title={'l4s school analysis'}></ProjectLink>
                <ProjectLink year={2020} project_title={'journey begins'}></ProjectLink>
            </div>
        </div>
    );
};

export default Home;
