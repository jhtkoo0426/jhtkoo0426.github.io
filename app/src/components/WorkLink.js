import { Link } from "react-router-dom"
import Title from "./Title"
import { useEffect, useRef, useState } from "react"


// A stylish link React.js component to a project or case study.
// external (bool): If true, the href link to the project is not on the portfolio site.
const WorkLink = ({ id, children, name, num, href, external, description, tags }) => {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    if (external === true) {
        return (
            <a href={href} target={"_blank"} className={"work-link" + (hovered ? ' hovered' : "")} onMouseEnter={toggleHover} onMouseLeave={toggleHover} rel="noreferrer">
                <div className="work-num">
                    <span></span>
                    <p className="">0{num}</p>
                </div>
                <div className="work-title">
                    <Title size="standard">{name}</Title>
                    <p className="work-description">{description}</p>
                    {
                        tags != null &&
                        <p className="work-tags">{tags.join(" / ")}</p>
                    }
                </div>
            </a>
        )
    } else {
        return (
            <Link className={"work-link" + (hovered ? ' hovered' : "")} to={href} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <div className="work-num">
                    <span></span>
                    <p className="">0{num}</p>
                </div>
                <div className="work-title">
                    <Title size="standard">{name}</Title>
                    <p className="work-description">{description}</p>
                    {
                        tags != null &&
                        <p className="work-tags">{tags.join(" / ")}</p>
                    }
                </div>
            </Link>
        )
    }
}

export default WorkLink