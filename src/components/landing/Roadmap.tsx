import React from "react";
import { motion } from "framer-motion";

// Animation for fadeIn effect
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, ease: "easeIn" },
  },
};

const Roadmap: React.FC = () => {
  return (
    <motion.div
      id="roadmap-section"
      className="px-4 py-16 content-center  bg-gradient-to-r from-gray-800 to-blue-800 shadow-xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      variants={fadeIn}
    >
      <h2 className="text-5xl mb-16 pt-16 md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
        Roadmap
      </h2>
      <img
        className="max-w-full mx-auto rounded-lg"
        src="./landing/roadmap.png"
        alt="Roadmap Visual"
      />
    </motion.div>
  );
};

export default Roadmap;
