import { motion } from "framer-motion";


const AnimatedDiv = ({ id, children, class_name, duration, delay, variants }) => {
    return (
        <motion.div
            className={class_name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: duration, delay: delay }}
            variants={variants}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedDiv;