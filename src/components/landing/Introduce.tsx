import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const BeautifulLeftToRightTitleSection = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px", // Trigger when the bottom of the viewport is near the section
        threshold: 0,
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section className="bg-gray-900 text-white py-24 px-6">
      {/* Title Section with Gradient and Scroll-triggered Animation (Left to Right) */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }} // Starts off-screen to the left
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Animates to original position
        transition={{ duration: 1.2 }}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-12"
      >
        <h2 className="bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
          Transforming the Future of Decentralized Finance
        </h2>
      </motion.div>

      {/* Content Section with Scroll-triggered Animation (Right to Left) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Starts off-screen to the right
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Animates to original position
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        <p>
          At the heart of the decentralized world lies HeartChain Inu (HTCN), an
          innovative cryptocurrency that seeks to disrupt traditional systems.
          Built on blockchain technology and powered by NFTs, HTCN offers a
          secure, transparent, and decentralized platform where users can truly
          engage with meaningful digital assets, unlock unique opportunities,
          and foster authentic connections.
        </p>
      </motion.div>

      {/* Image with Scroll-triggered Animation (Right to Left) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Starts off-screen to the right
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Animates to original position
        transition={{ duration: 1, delay: 0.4 }}
        className="flex justify-center"
      >
        <img
          src="./landing/Picture2.png"
          alt="HeartChain Inu Platform"
          className="w-full h-auto max-w-2xl rounded-xl shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default BeautifulLeftToRightTitleSection;
