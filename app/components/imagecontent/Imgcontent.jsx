"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import "./Imgcontent.css";
import { motion } from "framer-motion";


const Imgcontent = () => {
  const [showFirstContent, setShowFirstContent] = useState(true);
  const router = useRouter(); // Initialize useRouter for navigation


  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstContent((prev) => !prev); // Toggle content visibility
    }, 4000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="content relative">
      {/* Shared Background Image */}
      <motion.img
        src="/assets/ai-studio-hero.webp"
        className="relative img-content w-full h-full"
        alt="Background"
         // Initial animation when page loads
      initial={{ opacity: 0, scale: 1.1 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 1.5, ease: "easeOut" }}

      // Hover animation for parallax effect
      whileHover={{ scale: 1.05, rotate: 1 }}
      
      // Click effect
      whileTap={{ scale: 0.95 }}
      />

      {/* Content Wrapper */}
      <div className="absolute top-0 left-0 w-full h-full flex items-start justify-start p-6 lg:p-20">
        {/* Toggle Content */}
        <div className="text-left slide-up">
          {showFirstContent ? (
            <div className="transition-opacity duration-1000 opacity-100">
              <h2 className="text-4xl text-white font-bold lg:text-7xl">
                Right Sized Technology
              </h2>
              <h2 className="text-4xl text-white font-bold mt-4 lg:text-7xl">
                Partner of Choice
              </h2>
              <p className="text-2xl text-white mt-6 lg:text-5xl">
                Small Enough to Care,
              </p>
              <p className="text-2xl text-white mt-3 lg:text-5xl">
                Large Enough to Transform
              </p>
              <button  onClick={() => router.push("/contact")} className="mt-6 border px-5 text-white py-2 rounded-full lg:text-3xl lg:p-3 lg:px-7 hover:bg-purple-500">
                Explore Now &nbsp; &rarr;
              </button>
            </div>
          ) : (
            <div className="transition-opacity duration-1000 opacity-100 pt-6">
              <h2 className="text-4xl text-white font-bold lg:text-7xl lg:leading-relaxed">
                Aim Higher, Lead Smarter: Innovate with Agentic AI
              </h2>
              <button  onClick={() => router.push("/contact")} className="mt-6 border px-5 text-white py-2 rounded-full lg:text-3xl lg:p-3 lg:px-7 hover:bg-purple-500">
                Ask our Expert &nbsp; &rarr;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Imgcontent;
