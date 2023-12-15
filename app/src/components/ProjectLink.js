// ProjectLink.js template
// Import core libraries
import { Link } from "react-router-dom";

// Import components
import Title from "./Title";


const ProjectLink = ({ id, year, project_title, href, external }) => {
    return (
        <Link className='anchor project-link' to={href} target={external === true ? '_blank' : '_self'}>
            <p className='year'>{year}</p>
            <div className='slash'></div>
            <Title size='huge' text_transform='upper' font='avertabold'>{project_title}</Title>
        </Link>
    )
}


export default ProjectLink;