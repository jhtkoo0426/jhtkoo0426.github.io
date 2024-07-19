// Display a section of a project page. Each section includes a title, an 
// optional description, and additional content.
import React from "react";


const ProjectPageSection = ({ sectionTitle, sectionDescription, children }) => {
    return (
        <section className="project-section-wrapper">
            <p className="project-section-header">
                <span className="sec-title">{sectionTitle}</span>
            </p>
            { sectionDescription && <p className="sec-desc">{sectionDescription}</p>}
            <div className="section-content">
                { children }
            </div>
        </section>
    )
}


export default ProjectPageSection;