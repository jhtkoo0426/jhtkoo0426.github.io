import React from "react";
import Layout from "../components/layout";
import ProjectPageLayout from "../components/project_components/ProjectPageLayout";

// Styling
import { faEye, faMap } from "@fortawesome/free-solid-svg-icons";

// Media
import routeFinderFullscreen from "../images/route-finder-fullscreen.png";
import routeFinderUML from "../images/route-finder-uml.png";
import routeFinderVideo from "../videos/route-finder-demo.mp4";
import StyledSeparator from "../components/StyledSeparator";
import ProjectPageSection from "../components/project_components/ProjectPageSection";
import StyledLink from "../components/StyledLink";
import ProjectFeatureDescription from "../components/project_components/ProjectFeatureDescription";
import ProjectFeatureSection from "../components/project_components/ProjectFeatureSection";


const RouteFinderPage = () => {
    return (
        <Layout pageTitle="routefinder">
            <ProjectPageLayout
                projectName="Route Finder"
                projectType="Algorithms & Data Visualization"
                projectDescription="A dynamic and interactive web application that visualizes the 
                pathfinding process of different algorithms to determine the shortest routes 
                between two London Underground stations."
                projectVideo={routeFinderVideo}
                duration="Jan 2024 - Feb 2024"
                tools={["React.js"]}
                disciplines={["Web Development", "UI/UX Design"]}
                repoLink={"https://github.com/jhtkoo0426/route-finder"}
                siteLink={"https://jhtkoo0426.github.io/route-finder/"}>
                <div>
                    <ProjectPageSection sectionTitle="Motivation" sectionDescription="Visualize path-finding processes">
                        <p>While map applications such as Google Maps are impressive and efficient, they conceal 
                            the pathfinding process from users. To provide greater accessibility and transparency, 
                            I decided to create my own version that visualizes the path-finding process.</p> 
                    </ProjectPageSection>
                    
                    <StyledSeparator/>
                    <ProjectPageSection sectionTitle="Core Features">
                        <p>The application has two main features:</p>
                        <br></br>
                        <ProjectFeatureSection
                            featureDetails={[
                                {icon: faEye, featureName: "Data Processing", featureDescription: "Automatic parsing of metro map data (in .csv format) such as stations, interchanges, connections and railway lines."},
                                {icon: faMap, featureName: "Real-time Visualization", featureDescription: "Dynamic visualization of the exploration of various path-finding algorithms on metro maps"}
                            ]}
                        ></ProjectFeatureSection>
                    </ProjectPageSection>
                    
                    <StyledSeparator />
                    <ProjectPageSection sectionTitle="How Does it Work?">
                        <p>CSV data is first processed with parsers and consolidated in a central location 
                            (MetroMapAssetsManager.js). The assets (stations, connections, available lines) are 
                            loaded into three components:</p>
                        <br></br>
                        <ul>
                            <li>A canvas for displaying the metro map.</li>
                            <li>A search service where pathfinding algorithms operate, using adjacency lists 
                                generated from the loaded stations and connections.</li>
                            <li>A path generator, which converts the generated paths into a well-formatted 
                                structure that includes all necessary transits, similar to Google Maps.</li>
                        </ul>
                        <img src={routeFinderUML}></img>
                        <br></br>
                        <p>With these services ready, users can search for two stations to visualize the 
                            shortest distance path and select a specific pathfinding algorithm (Dijkstra, A*). 
                            While my algorithms may not be as sophisticated as Google's, they get the job done.</p>
                        <br></br>
                        <p>Each connection on the map is represented with three colors:</p>
                        <ul>
                            <li>Lightest: Unexplored connection</li>
                            <li>Darker: Explored connection</li>
                            <li>Solid color (corresponding to the line between the stations): Selected route</li>
                        </ul>
                        <br></br>
                        <p>The system explores the entire map in real-time based on the selected algorithm, 
                            visualizing the process. Once the shortest distance route is found, the selected 
                            route is displayed in solid color.</p>
                    </ProjectPageSection>

                    <StyledSeparator />
                    <ProjectPageSection sectionTitle="Best Practices">
                        <p>I followed SOLID principles and applied design patterns to improve code quality and 
                            scalability. Ultimately, this allows me to develop a more efficient, modular and 
                            adaptable system.</p>
                        <br></br>
                        <p>For details, please refer to the documentation for the application at the github page.</p>
                        <br></br>
                        <StyledLink address="https://github.com/jhtkoo0426/route-finder/tree/main" showText="GitHub"></StyledLink>
                    </ProjectPageSection>
                </div>
            </ProjectPageLayout>
        </Layout>
    )
}


export default RouteFinderPage