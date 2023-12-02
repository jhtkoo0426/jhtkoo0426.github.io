// React.js component for a variable-size titlype.
import { text } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";


// size (options: huge, large, standard, tiny): Choose from a pre-defined font size.
// is_transparent (bool): Conditionally apply styling for the title.
// font (str | options: playfair, inter, interbold): Choose from a list of fonts.
// text_transform (str | option: upper, lower, normal. default = normal)
const Title = ({ id, className, children, size, is_transparent, font, text_transform}) => {
    if (text_transform === undefined || text_transform === null) {
        text_transform = 'normal';
    }
    return (
        <h1 className={`title ${className} ${size === undefined ? 'large' : size} ${font} ${text_transform}` + (is_transparent === true ? " transparent" : "") } id={id}>
            { children }
        </h1>
    )
}

export default Title;