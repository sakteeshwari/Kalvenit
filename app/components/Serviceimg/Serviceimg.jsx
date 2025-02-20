"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Serviceimg.css";

const Serviceimg = () => {
  const images = [
    {
      Label: "Digitalization",
      Description: "Drive Innovation, Efficiency, Productivity & Teamwork",
      src: "/assets/digitalization.png",
      link: "/services/digitalization",
    },
    {
      Label: "Modernization",
      Description: "Transform Your IT Landscape - Create an agile enterprise",
      src: "/assets/mordernization.png",
      link: "/services/modernization",
    },
    {
      Label: "Intelligence Services",
      Description: "Become a data-driven Business - Reinvent your Organization",
      src: "/assets/intelligence.png",
      link: "/services/intelligence",
    },
    {
      Label: "Cloud & Infrastructure Management Services",
      Description: "Optimized and Smart infrastructure - The Foundation for your digital business",
      src: "/assets/nextgen.png",
      link: "/services/cloud-infrastructure",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const nextSlide = () => {
    if (currentSlide < images.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="mt-6 relative w-full h-[23rem] overflow-hidden">
      {/* Slide container with animation */}
      <motion.div
        className="flex w-full h-full md:w-2/5 md:gap-5 lg:gap-20"
        animate={{ x: `${-currentSlide * 100}%` }} // Moves slides left or right
        initial={false}
        transition={{ type: "spring", stiffness: 100, damping: 15 }} // Smooth animation
      >
        {images.map((data, index) => (
          <div key={index} className="min-w-full h-full relative">
            <Link href={data.link || "#"} passHref legacyBehavior>
              <a className="block h-full w-full">
                <img className="h-full w-full object-cover" src={data.src} alt={data.Label} />
                <div className="absolute bottom-0 w-full left-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                  <h2 className="font-semibold text-red-500 text-lg">{data.Label}</h2>
                  <p>{data.Description}</p>
                </div>
              </a>
            </Link>
          </div>
        ))}

      </motion.div>

      {/* Left and Right Arrows */}
      <button
        className={`absolute left-4 top-14 transform -translate-y-1/2 ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        onClick={prevSlide}
        disabled={currentSlide === 0}
      >
        <img src="/assets/left-arrow.png" alt="Left Arrow" className="h-10 w-10" />
      </button>

      <button
        className={`absolute right-4 top-14 transform -translate-y-1/2 ${currentSlide === images.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        onClick={nextSlide}
        disabled={currentSlide === images.length - 1}
      >
        <img src="/assets/right-arrow.png" alt="Right Arrow" className="h-10 w-10" />
      </button>
    </div>
  );
}
export default Serviceimg;
