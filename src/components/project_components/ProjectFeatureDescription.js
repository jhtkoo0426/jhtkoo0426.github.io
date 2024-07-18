import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const ProjectFeatureDescription = ({ iconName, featureName, children }) => {
    return (
        <div className="feature-description">
            <p className="feature-title">
                <FontAwesomeIcon icon={iconName}></FontAwesomeIcon>
                <span className="feature-name">{featureName}</span>
            </p>
            <p className="details">{children}</p>
        </div>
    )
}


export default ProjectFeatureDescription;