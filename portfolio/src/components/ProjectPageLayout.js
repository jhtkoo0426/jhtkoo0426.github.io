import React from "react"
import StyledLink from "./StyledLink"
import StyledSeparator from "./StyledSeparator"


const ProjectPageLayout = ({ projectName, projectType, projectDescription,
    role, duration, tools, repoLink, siteLink, projectImage, projectVideo, children }) => {
    return (
        <section className="project-layout">
            { projectImage && <img className="project-landing-img" src={projectImage} alt={projectName}></img> }
            { projectVideo && <video className="project-landing-video" src={projectVideo} loop autoPlay muted /> }
            <div className="title">
                <p className="name">{projectName}</p>
                <p className="type">{projectType}</p>
            </div>
            <div className="content">
                <p className="desc">{projectDescription}</p>
                <br></br>
                <div className="details">
                    {
                        role &&
                        <div className="role">
                            <p className="col-name">Role</p>
                            <p className="col-content">{role}</p>
                        </div>
                    }
                    {
                        duration &&
                        <div className="duration">
                            <p className="col-name">Duration</p>
                            <p className="col-content">{ duration }</p>
                        </div>
                    }
                    {
                        tools &&
                        <div className="tools">
                            <p className="col-name">Tools</p>
                            <p className="col-content">
                                { tools.map((element, index) => (
                                    <span key={index}>{element}</span>
                                ))}
                            </p>
                        </div>
                    }
                </div>
                <div className="links">
                    {
                        repoLink &&
                        <StyledLink address="https://github.com/jhtkoo0426/route-finder" showText="GitHub" />
                    }
                    {
                        siteLink &&
                        <StyledLink address="https://jhtkoo0426.github.io/route-finder/" showText="Site" />
                    }
                </div>
                <StyledSeparator />
                { children }
            </div>
        </section>
    )
}


export default ProjectPageLayout