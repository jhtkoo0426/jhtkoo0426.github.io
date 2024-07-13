import React from "react";
import CustomLink from "./CustomLink";


const MinimalShowcase = ({ projectName, description, image, projectLink }) => {
  return (
    <div className="showcase" id={projectName}>
      <CustomLink to={`/${projectLink}`} image={image} className="proj-name">
        {projectName}
      </CustomLink>
      <p className="proj-desc">{description}</p>
    </div>
  );
};


export default MinimalShowcase;