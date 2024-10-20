// Renders a styled anchor (<a>) element, designed to be used for 
// external links with a consistent appearance.
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


const StyledLink = ({ address, showText, children }) => {
    return (
        <a
            className="styled-link"
            href={address}
            target="_blank"
            rel="noreferrer">
            {showText}
            <FontAwesomeIcon icon={faChevronRight} />
        </a>
    )
}


export default StyledLink;