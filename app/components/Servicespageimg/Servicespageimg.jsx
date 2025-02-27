"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Servicespageimg.css";

const Servicespageimg = ({ imgSrc, text }) => {
  const [showFirstContent, setShowFirstContent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstContent((prev) => !prev); // Toggle content visibility
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Intersection Observer for animations
  const { ref, inView } = useInView({
    threshold: 0.2, // Animation triggers when 20% of the section is in view
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="content relative">
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black opacity-50 z-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.5 } : {}}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Background Image with Animation */}
      <motion.img
        src={imgSrc} // Use the dynamic image source
        className="relative w-full h-full lg:h-[600px] object-cover"
        alt="Background"
        initial={{ opacity: 0, scale: 1.1, y: 50 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
      />

      {/* Content Wrapper with Animation */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-6 lg:p-20 z-20">
        <motion.div
          className="text-left transition-opacity duration-1000 opacity-100"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          <motion.h2
            className="text-3xl absolute top-10 w-[300px] left-5 sm:text-5xl sm:w-[500px] sm:leading-normal lg:text-7xl lg:w-[800px] lg:left-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white leading-normal lg:leading-snug tracking-wid z-20 text-shadow"
          >
            {text}
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Servicespageimg;
