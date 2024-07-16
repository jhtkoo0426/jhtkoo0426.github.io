import React from "react";


const StyledLink = ({ address, showText, children }) => {
    return (
        <a
            className="styled-link"
            href={address}
            target="_blank"
            rel="noreferrer">
            {showText}
        </a>
    )
}


export default StyledLink;