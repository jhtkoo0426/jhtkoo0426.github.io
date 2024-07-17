import React from "react";
import ProjectFeatureDescription from "./ProjectFeatureDescription";

const ProjectFeatureSection = ({ featureDetails }) => {
    return (
        <div className="project-features">
            {
                featureDetails && featureDetails.map((feature, index) => (
                    <ProjectFeatureDescription 
                        key={index} 
                        iconName={feature.icon} 
                        featureName={feature.featureName} 
                    >
                        {feature.featureDescription}
                    </ProjectFeatureDescription>
                ))
            }
        </div>
    );
}


export default ProjectFeatureSection;