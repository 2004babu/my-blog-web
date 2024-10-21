import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-8 h-fit flex flex-col justify-center mb-10 items-center text-gray-800">
      
      {/* Title Section */}
      <motion.h1 
        className="text-4xl max-[600px]:mt-10 md:text-6xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Short description */}
      <motion.p 
        className="text-lg md:text-xl text-center max-w-3xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I'm a passionate MERN stack developer who loves building scalable and high-performance web applications. My journey as a developer began with curiosity, and today, I build dynamic applications using MongoDB, Express, React, and Node.js.
      </motion.p>

      {/* Skill Section */}
      <motion.div 
        className="skills w-full flex flex-wrap justify-around items-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <SkillBadge title="MongoDB" />
        <SkillBadge title="Express.js" />
        <SkillBadge title="React.js" />
        <SkillBadge title="Node.js" />
        <SkillBadge title="JavaScript" />
        <SkillBadge title="TypeScript" />
        <SkillBadge title="Git" />
      </motion.div>

      {/* Animated CTA button */}
      <motion.a
        href="#github.com/2004babu"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        Check My Projects
      </motion.a>
    </div>
  );
};

// Skill Badge Component for Reusability
const SkillBadge: React.FC<{ title: string }> = ({ title }) => {
  return (
    <motion.div 
      className="skill-badge bg-gray-200 p-4 rounded-full text-lg font-semibold m-2 shadow-md hover:shadow-lg transition duration-300"
      whileHover={{ scale: 1.1 }}
    >
      {title}
    </motion.div>
  );
};

export default About;
