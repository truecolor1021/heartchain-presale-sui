import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const DividerSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsInView(true); // Ensure visibility for mobile devices
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
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
    }
  }, [isInView]);

  return (
    <section className="w-full py-16 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 400 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center w-full"
      >
        <div className="relative w-full flex items-center">
          <div className="flex-1 h-1.5 bg-gradient-to-r from-purple-700 to-blue-600 md:max-w-[15%]"></div>
          <div className="px-6 py-2 text-2xl md:text-4xl font-bold text-white whitespace-nowrap"></div>
          <div className="flex-1 h-1.5 bg-gradient-to-r from-blue-600 via-green-400 to-teal-500"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default DividerSection;
