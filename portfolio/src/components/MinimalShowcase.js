import React from "react";
import CustomLink from "./CustomLink";


const MinimalShowcase = ({ projectName, description, image }) => {
  return (
    <div className="showcase" id={projectName}>
      <CustomLink to={`/${projectName}`} image={image} className="proj-name">
        {projectName}
      </CustomLink>
      <p className="proj-desc">{description}</p>
    </div>
  );
};


export default MinimalShowcase;