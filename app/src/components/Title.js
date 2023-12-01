// React.js component for a variable-size titlype.
import { motion } from "framer-motion";


// size (options: huge, large, standard, tiny): Choose from a pre-defined font size.
// is_transparent (bool): Conditionally apply styling for the title.
// font (str, options: playfair, inter): Choose from a list of fonts. 
// animated (bool): If true, uses framer motion variants.
// with_top (bool): Optionally add a design on top of the title
// color (str, options: theme, darkgrey)
const Title = ({ id, children, size, is_transparent, font, animated, with_top, top_color }) => {
    if (top_color === undefined || top_color === null) {
        top_color = 'darkgrey';
    }

    return animated ?
        <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -200 }
            }}
            className={`title ${size === undefined ? 'large' : size} ${font}` + (is_transparent === true ? " transparent" : "") }
            id={id}
        >
            { children }
        </motion.h1> : (
            with_top ?
            <h1 className={`title ${size === undefined ? 'large' : size} ${top_color} ${font}` + (is_transparent === true ? " transparent" : "") } id={id}>
                <div className="title-top"></div>
                { children }
            </h1> :
            <h1 className={`title ${size === undefined ? 'large' : size} ${top_color} ${font}` + (is_transparent === true ? " transparent" : "") } id={id}>
                { children }
            </h1>
        )
}

export default Title;