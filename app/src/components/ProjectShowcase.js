import { Link } from "react-router-dom";
import AnimatedDiv from "./AnimatedDiv";
import Title from "./Title";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Anchor from "./Anchor";



// External: href is an external link (not to page in portfolio)
const ProjectShowcase = ({ delay, href, external, variants, project_title, year, description, tags}) => {
    console.log(external)
    return (
        external ?
        (
            <AnimatedDiv class_name={"project"} duration={0.75} delay={delay} variants={variants}>
                <Title animated={false} size={"small"}>
                    {project_title} ({year})
                    <Anchor href={href}>
                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                    </Anchor>
                </Title>
                <p className="description">{description}</p>
                <p className="work-tags">{tags.join(" / ")}</p>
            </AnimatedDiv>
        ) :
        (
            <AnimatedDiv class_name={"project"} duration={0.75} delay={delay} variants={variants}>
                <Title animated={false} size={"small"}>
                    {project_title} ({year})
                    <Link className="anchor" to={href}>
                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                    </Link>
                </Title>
                <p className="description">{description}</p>
                <p className="work-tags">{tags.join(" / ")}</p>
            </AnimatedDiv>
        )
    )
}

export default ProjectShowcase;