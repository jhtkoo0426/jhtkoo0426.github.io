import React from 'react';
import { motion } from 'framer-motion';
import Title from './Title';



const ProjectShowcase = ({ id, title, isActive, onClick }) => {
  return (
    <motion.div
      className={`project-showcase ${isActive ? 'expanded' : 'shrinked'}`}
      onClick={onClick}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Title font='interthin' size='small'>
            {title}
        </Title>
      </motion.div>
    </motion.div>
  );
};

export default ProjectShowcase;
