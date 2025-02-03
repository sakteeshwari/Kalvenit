"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Solutionspageimg.css";

const Solutionspageimg = () => {
  const [showFirstContent, setShowFirstContent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstContent((prev) => !prev); // Toggle content visibility
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="content relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 lg:opacity-50 z-10"></div> {/* Dark overlay */}

      {/* Shared Background Image */}
      <motion.img
        src="/assets/solutionspageimg.png"
        className="relative w-full h-full lg:h-[600px] object-cover"
        alt="Background"
        initial={{ opacity: 1, scale: 1.1 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5, ease: "easeOut" }}
        // Hover animation for parallax effect
      whileHover={{ scale: 1.05, rotate: 1 }}
      
      // Click effect
      whileTap={{ scale: 0.95 }}
    
      />

      {/* Content Wrapper */}
      <div className="absolute -top-3 lg:top-5 left-0 w-full h-full flex items-center justify-center p-6 lg:p-20 z-20">
        {/* Toggle Content */}
        <div className="text-left transition-opacity duration-1000 opacity-100">
        <motion.h2
      className="text-3xl absolute top-10 w-[300px] left-5 sm:text-5xl sm:w-[500px] sm:leading-normal sm: lg:text-7xl lg:w-[800px] lg:left-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white leading-normal lg:leading-snug tracking-wid z-20 text-shadow"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 4, ease: "easeOut" }}
    >
      Chart your growth story with our best-in-class Solutions
    </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default Solutionspageimg;
