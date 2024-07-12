import React from "react";
import { Link } from "gatsby";


const MinimalShowcase = ({ projectName, description }) => {
    return (
        <div className="showcase" id={projectName}>
            <Link className="proj-name">{projectName}</Link>
            <p className="proj-desc">{description}</p>
        </div>
    )
}

export default MinimalShowcase;