// React.js component for a variable-size titlype.
import { motion } from "framer-motion";


// size (options: huge, standard, small, tiny): Choose from a pre-defined font size.
// font (options: playfair, inter): Choose from a list of fonts. 
// animated (bool): If true, uses framer motion variants.
const Title = ({ id, children, size, font, animated }) => {
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
            className={`title ${size} ${font}`}
            id={id}
        >
            { children }
        </motion.h1> :
        <h1 className={`title ${size} ${font}`} id={id}>
            { children }
        </h1>
}

export default Title;