import React from "react";
import Layout from "../components/layout";
import ProjectPageLayout from "../components/ProjectPageLayout";
import ProjectPageHeader from "../components/ProjectPageHeader";

// Media
import routeFinderFullscreen from "../images/route-finder-fullscreen.png";
import routeFinderVideo from "../videos/route-finder-demo.mp4";


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
                repoLink={"https://github.com/jhtkoo0426/route-finder"}
                siteLink={"https://jhtkoo0426.github.io/route-finder/"}>
                <div>
                    <ProjectPageHeader>Test</ProjectPageHeader>
                </div>
            </ProjectPageLayout>
        </Layout>
    )
}


export default RouteFinderPage