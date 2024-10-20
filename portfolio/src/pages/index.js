import * as React from 'react';
import Layout from '../components/layout';
import AlternatingText from '../components/AlternatingText';
import Showcase from '../components/Showcase';

// Styling
import "../css/index.scss";

// Media
import optionsAnalysis from "../images/options-analysis.png";
import spiderman from "../images/spiderman.jpg";
import fyp from "../videos/robotic-grasping.mp4";
import epidemic from "../videos/epidemic-sim.mp4";
import routeFinder from "../videos/route-finder-demo.mp4";


const IndexPage = ({ Component, pageProps }) => {
  return (
    <Layout pageTitle="index">
      <section className='about'>
        <div className='greet'>
          <AlternatingText interval={2500}>
            <p className='en greet-text'>Hi,</p>
            <p className='cn greet-text'>你好,</p>
            <p className='es greet-text'>Holá,</p>
            <p className='jp greet-text'>こんにちは,</p>
          </AlternatingText>
          <p className='greet-text'>this is Justin.</p>
          <p className='intro desc'>Justin is a software engineer who loves bringing ideas to life 
            through technology. Previously, he developed analytical tools for the NHS, and is
            currently a Cloud Consultant at Go Reply.</p>
          <br></br>
          <p className='desc'>He also has a thing for photography and kewpie mayonnaise.</p>
        </div>
      </section>
      <section className='work'>
        <div>
          <Showcase
            projectName="Route Finder"
            projectDescription="Algorithms & Data Visualization"
            projectVideo={routeFinder}
            projectLink="routefinder"
            ></Showcase>
          <Showcase
            projectName="Robust Robotic Grasping"
            projectDescription="Machine Learning & Robotics"
            projectVideo={fyp}
            projectLink="/"
            ></Showcase>
        </div>
        <div>
          <Showcase
            projectName="Epidemic Simulation"
            projectDescription="Simulations & WebDev (React)"
            projectVideo={epidemic}
            projectLink="epidemic"
            ></Showcase>
          <Showcase
            projectName="Lumin"
            projectDescription="Quantitative Finance & System Design"
            projectLink="/"
            ></Showcase>
        </div>
        <div>
          <Showcase
            projectName="Portfolio"
            projectDescription="WebDev (React)"
            projectImg={spiderman}
            projectLink="/"
            ></Showcase>
          <Showcase
            projectName="Options Analysis"
            projectDescription="Quantitative Finance"
            projectImg={optionsAnalysis}
            projectLink="/"
          ></Showcase>
        </div>
      </section>
    </Layout>
  )
}


export const Head = () => <title>Justin Koo - Software Engineer</title>
export default IndexPage