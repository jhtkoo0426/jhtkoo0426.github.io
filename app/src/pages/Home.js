import { motion } from "framer-motion";


const Home = () => {
    // Animating elements
    const variants = {
        text: {
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -200 }, 
            transition: { delay: 0.25}
        },
        julius: {
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 200 }, 
            transition: { delay: 0.25, duration: 5}
        }
    }

    return (
        <motion.div className="home-container" exit={{ opacity: 0 }}>
            
            <div className="landing">
                Hi there
            </div>
        </motion.div>
    );
}

export default Home