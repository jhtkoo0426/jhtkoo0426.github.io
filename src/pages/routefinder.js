import React from "react";
import Layout from "../components/layout";
import ProjectPageLayout from "../components/project_components/ProjectPageLayout";

// Media
import routeFinderFullscreen from "../images/route-finder-fullscreen.png";
import routeFinderConnectionUnvisited from "../images/route-finder-connection-unvisited.png";
import routeFinderConnectionVisited from "../images/route-finder-connection-visited.png";
import routeFinderConnectionSelected from "../images/route-finder-connection-selected.png";
import routeFinderVideo from "../videos/route-finder-demo.mp4";
import StyledSeparator from "../components/StyledSeparator";
import ProjectPageSection from "../components/project_components/ProjectPageSection";
import StyledLink from "../components/StyledLink";
import ProjectImageCarousel from "../components/project_components/ProjectImageCarousel";


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
                repoLink="https://github.com/jhtkoo0426/route-finder"
                siteLink="https://jhtkoo0426.github.io/route-finder/">
                <div>
                    <ProjectPageSection sectionTitle="Motivation" sectionDescription="Enhancing maps with real-time path-finding visualizations">
                        <p>While map applications such as Google Maps are impressive and efficient, they conceal 
                            the pathfinding process from users. To provide greater accessibility and transparency, 
                            I decided to create my own version that visualizes the path-finding process.</p> 
                    </ProjectPageSection>
                    
                    <StyledSeparator />
                    <ProjectPageSection sectionTitle="How does it work?" sectionDescription="Building a robust system">
                        <p>To create a complete metro map, users must provide three .csv files with station names, 
                            connections, and metro line names. These files are processed and consolidated into a 
                            central data provider. This data can then be queried for:</p>
                        <br></br>
                        <ul>
                            <li>populating the metro map with stations and connections.</li>
                            <li>finding shortest paths using generated adjacency lists.</li>
                            <li>generating visualizations for optimal routes and necessary transits, similar to 
                                Google Maps.</li>
                        </ul>
                        <br></br>
                    </ProjectPageSection>

                    <StyledSeparator />
                    <ProjectPageSection sectionTitle="Bringing the idea to life" sectionDescription="Pathfinding states">
                        <p>With the underlying data structure prepared, users can search for a pair of stations
                             to visualize the shortest distance path and select a specific pathfinding algorithm.</p>
                        <br></br>
                        <p>Each connection on the map is represented with one of three color states:</p>
                        <ProjectImageCarousel
                            carouselItems={[
                                { img: routeFinderConnectionUnvisited, desc: "Lightest: Unexplored connection" },
                                { img: routeFinderConnectionVisited, desc: "Darker: Explored connection" },
                                { img: routeFinderConnectionSelected, desc: "Solid: Selected connection" }
                            ]}
                        />
                        <br></br>
                        <p>The system explores the entire map in real-time based on the selected algorithm, 
                            visualizing the process. Once the shortest distance route is found, the selected 
                            route is displayed in solid color.</p>
                        <br></br>
                        <img src={routeFinderFullscreen}></img>
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