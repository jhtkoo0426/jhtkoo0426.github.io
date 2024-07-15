import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import AlternatingText from '../components/AlternatingText';
import Showcase from '../components/Showcase';

// Styling
import "../css/index.scss";

// Media
import routeFinder from "../images/route-finder-closeup.png";
import optionsAnalysis from "../images/options-analysis.png";
import spiderman from "../images/spiderman.jpg";
import fyp from "../videos/robotic-grasping.mp4";
import epidemic from "../videos/epidemic-sim.mp4";


const IndexPage = () => {
  return (
    <Layout>
      <section className='about'>
        <div className='greet'>
          <AlternatingText interval={2500}>
            <p className='en greet-text'>Hi,</p>
            <p className='cn greet-text'>你好,</p>
            <p className='es greet-text'>Hola,</p>
            <p className='jp greet-text'>こんにちは,</p>
          </AlternatingText>
          <p className='greet-text'>this is Justin.</p>
          <p className='intro desc'>Justin is a software engineer who loves bringing ideas to life 
            through technology. Previously, he developed analytical tools for the NHS, and is
            currently a freelance data engineer specializing in machine learning.</p>
          <br></br>
          <p className='desc'>He also has a thing for photography and kewpie mayonnaise.</p>
        </div>
      </section>
      <section className='work'>
        <div>
          <Showcase
            projectName="Route Finder"
            projectDescription="Algorithms & Data Visualization"
            projectImg={routeFinder}
            projectLink="route-finder"
            ></Showcase>
          <Showcase
            projectName="Portfolio"
            projectDescription="WebDev (React)"
            projectImg={spiderman}
            ></Showcase>
        </div>
        <div>
          <Showcase
            projectName="Epidemic Simulation"
            projectDescription="Simulations & WebDev (React)"
            projectVideo={epidemic}
            ></Showcase>
          <Showcase
            projectName="Robust Robotic Grasping"
            projectDescription="Machine Learning & Robotics"
            projectVideo={fyp}
            ></Showcase>
        </div>
        <div>
          <Showcase
            projectName="Lumin"
            projectDescription="Quantitative Finance & System Design"
            ></Showcase>
          <Showcase
            projectName="Options Analysis"
            projectDescription="Quantitative Finance"
            projectImg={optionsAnalysis}
          ></Showcase>
        </div>
      </section>
    </Layout>
  )
}


export const Head = () => <title>Home Page</title>
export default IndexPage