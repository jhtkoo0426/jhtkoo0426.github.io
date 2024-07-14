import * as React from 'react';
import Layout from '../components/layout';

// Styling
import "../css/index.scss";
import MinimalShowcase from '../components/MinimalShowcase';

// Media
import routeFinder from "../images/route-finder-closeup.png";


const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <p className='intro'>IPA /ʤʌstɪn/ | Life-Long Learning</p>
      <p>Hi there, I'm <span className='highlight'>Justin</span>. I'm a CS graduate 
      from <span>University College London</span>. I'm originally from <span>Hong 
      Kong</span>, and am currently based in <span>London, UK</span>. I 
      like <span>building stuff</span> and <span>trying new things</span>, and 
      recently fell in love with exploring <span>fintech</span>.</p>
      <br></br>
      <p>Right now I'm developing <span>Lumin</span>, a <span>systematic trading system</span> focused
      on <span>equities trading</span>.</p>

      <h1 className='section-title'>Projects</h1>
      <div className='projects-grid'>
        <MinimalShowcase 
          projectName={'Lumin'}
          description={'A future money tree (hopefully)'}
        />
        <MinimalShowcase
          projectName={'Route Finder'}
          description={'Visualizing path-finding processes between TfL metro stations'}
          image={routeFinder}
          projectLink={'routefinder'}
        />
        <MinimalShowcase
          projectName={'Portfolio'}
          description={'Boring personal site built with Gatsby and React.js'}
        />
        <MinimalShowcase
          projectName={'UCL Dissertation'}
          description={'Predicting the stability of robotic hand grasps with ML models'}
        />
        <MinimalShowcase
          projectName={'Options Analysis'}
          description={'Analysing the Greeks and various options strategies'}
        />
        <MinimalShowcase
          projectName={'Epidemic Simulation'}
          description={'Interactive web-based simulation of epidemics'}
        />
      </div>

      <h1 className='section-title'>Experience</h1>
      <div className='experiences'>
        <div className='experience'>
          <p>Data Engineer - Freelance</p>
          <p>Sept 2023 - June 2024</p>
        </div>
        <div className='experience'>
          <p>Systems Engineer - NHS</p>
          <p>Oct 2021 - Apr 2022</p>
        </div>
        <div className='experience'>
          <p>Business Analyst - Look4SchoolsUK Ltd.</p>
          <p>Apr 2020 - Apr 2022</p>
        </div>
      </div>
    </Layout>
  )
}


export const Head = () => <title>Justin Koo - Portfolio</title>
export default IndexPage