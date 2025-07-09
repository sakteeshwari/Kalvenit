"use client"
import React from "react";
import { motion } from "framer-motion";

const Aboutuspageimg = () => {
  return (
    <div
      className="relative h-96 lg:h-[700px]  w-full bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 object-cover"
      style={{
        backgroundImage: "url('/assets/gridpart.png')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-3xl  font-bold mb-8 max-w-2xl lg:tracking-wide lg:leading-loose leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Get more than what you think from KALVEN Software Solutions
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="#team"
            className="bg-pink-600 text-sm hover:bg-pink-700 text-white px-6 py-3 rounded-lg shadow-lg font-medium lg:text-lg transition"
          >
            Download Corporate Profile
          </a>
        </motion.div>
      </div>

      {/* Decorative Circles */}
      <motion.div
        className="absolute top-10 left-20 w-40 h-40 bg-blue-400 rounded-full filter blur-xl opacity-30"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-40 w-56 h-56 bg-purple-500 rounded-full filter blur-xl opacity-30"
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
    </div>
  );
};

export default Aboutuspageimg;
