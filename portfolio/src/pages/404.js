import * as React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby";
import Seo from "../components/seo"

// Styling
import "../css/404.scss";

// Framer motion variants
const messageVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 }
  }
};


const NotFoundPage = () => (
  <div className='container-404'>
    <p className='icon'>
      <Link to='/'>justin</Link>
    </p>    
    <motion.div initial="hidden" animate="visible" variants={messageVariant} className="message">
      <p>Empty canvas hmmm.</p>
      <p>That's how we like to start.</p>
    </motion.div>
  </div>
)


export const Head = () => <Seo title="Justin Koo - Portfolio" />
export default NotFoundPage