import React from "react";
import { Link } from "gatsby";


const Showcase = ({ projectName, projectDescription, projectImg, projectVideo, projectLink, children }) => {
    return (
        <Link className="showcase" to={projectLink}>
            {projectImg && <img src={projectImg} alt={projectName} />}
            {projectVideo && <video autoPlay muted loop src={projectVideo} />}
            {!projectImg && !projectVideo && <div className="placeholder" />}
            <div className="showcase-details">
                <p className="name">{projectName}</p>
                <p className="desc">{projectDescription}</p>
            </div>
        </Link>
    )
}


export default Showcase;