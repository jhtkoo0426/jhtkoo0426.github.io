// Formats and displays a feature description and additional details.
import React from "react";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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