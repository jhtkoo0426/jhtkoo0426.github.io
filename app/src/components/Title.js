// React.js component for a variable-size titlype.
import { motion } from "framer-motion";


// size (options: huge, standard, small, tiny): Choose from a pre-defined font size.
// is_transparent (bool): Conditionally apply styling for the title.
// font (options: playfair, inter): Choose from a list of fonts. 
// animated (bool): If true, uses framer motion variants.
// fadeIn (bool): If true, applies framer motion fade in.
const Title = ({ id, children, size, is_transparent, font, animated, fadeIn }) => {
    return animated ?
        <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
            className={`title ${size} ${font}` + (is_transparent === true ? " transparent" : "") }
            id={id}
        >
            { children }
        </motion.h1> :
        <h1 className={`title ${size} ${font}` + (is_transparent === true ? " transparent" : "") } id={id}>
            { children }
        </h1>
}

export default Title;