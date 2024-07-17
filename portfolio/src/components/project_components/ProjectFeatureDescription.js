import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const ProjectFeatureDescription = ({ iconName, featureName, children }) => {
    return (
        <div className="feature-description">
            <p>
                <FontAwesomeIcon icon={iconName}></FontAwesomeIcon>
                <span className="feature-name">{featureName}</span>
            </p>
            {children}
        </div>
    )
}


export default ProjectFeatureDescription;