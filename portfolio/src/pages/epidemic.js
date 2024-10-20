import React from "react";

// Components
import Layout from "../components/layout";
import ProjectPageLayout from "../components/project_components/ProjectPageLayout";
import ProjectPageSection from "../components/project_components/ProjectPageSection";

// Media
import epidemicVideo from "../videos/epidemic-sim.mp4";
import StyledSeparator from "../components/StyledSeparator";


const EpidemicPage = () => {
    return (
        <Layout pageTitle="epidemic simulation">
            <ProjectPageLayout
                projectName="Epidemic Simulation"
                projectType="Simulation"
                projectDescription="Visualiszing the impact of various environmental factors 
                and human behaviour on the spread of epidemics."
                projectVideo={epidemicVideo}
                duration=""
                tools={["React.js", "JavaScript"]}
                disciplines={["Web Development"]}
                repoLink="https://github.com/jhtkoo0426/epidemic-simulation">
                <div>
                    <ProjectPageSection sectionTitle="Overview" sectionDescription="How does 
                    human behaviour affect the spread of epidemics?">
                        <p>I watched a video by <a href="https://www.youtube.com/watch?v=gxAaO2rsdIs" 
                        target="_blank" rel="noreferrer">3Blue1Brown - "Simulating an Epidemic"</a>,
                        which featured an interesting simulation UI. I wanted to replicate it with
                        then new-ly learnt web technologies, mainly JavaScript and React.js.</p>
                    </ProjectPageSection>
                    
                    <StyledSeparator />
                    <ProjectPageSection sectionTitle="Simulation logic" sectionDescription="Outcomes and findings">
                        <p>The core idea was to simulate the movement of people with varying factors
                            such as density (the number of people within a specific area), movement
                            speed, infection radius (how close people come into contact with each
                            other) and infection chance (strength of a person's immune system).</p>
                        <br></br>
                        <p>By playing around with these features, we can grasp how human behaviour
                            affects the spread of epidemics. This serves as a reminder for people
                            to take preventive measures to protect each other during an epidemic.</p>
                    </ProjectPageSection>
                </div>
            </ProjectPageLayout>
        </Layout>
    )
}


export default EpidemicPage;