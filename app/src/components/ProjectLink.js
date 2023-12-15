// ProjectLink.js template
// Import core libraries
import { Link } from "react-router-dom";

// Import components
import Title from "./Title";


const ProjectLink = ({ id, year, project_title, href }) => {
    return (
        <Link className='anchor project-link' to={href}>
            <p className='year'>{year}</p>
            <div className='slash'></div>
            <Title size='huge' text_transform='upper' font='avertabold'>{project_title}</Title>
        </Link>
    )
}


export default ProjectLink;