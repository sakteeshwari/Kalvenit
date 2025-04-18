"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from Next.js
import { ArrowRight } from "lucide-react";
import useInView from "../../hooks/useInView";

const Solutionstrending = () => {
  // Sample content with background images and links
  const content = [
    {
      label: "Equipment manufacturer improves operational efficiency...",
      image: "/assets/solutionstrending1.png",
      link: "/solutions/trending/equipment-manufacturer", // Add respective links
    },
    {
      label: "RPA utilization helps in accelerated financial dispute...",
      image: "/assets/solutionstrending2.png",
      link: "/solutions/trending/rpa-financial-dispute",
    },
    {
      label: "Robotic Process Automation/Intelligent Automation...",
      image: "/assets/solutionstrending3.png",
      link: "/solutions/trending/rpa-intelligent-automation",
    },
    {
      label: "e-Commerce Development",
      image: "/assets/solutionstrending4.png",
      link: "/solutions/trending/ecommerce-development",
    },
    {
      label: "Healthcare and Telemedicine Solutions",
      image: "/assets/solutionstrending5.png",
      link: "/solutions/trending/healthcare-telemedicine",
    },
    {
      label: "Taxi Booking App Development Solution",
      image: "/assets/solutionstrending6.png",
      link: "/solutions/trending/taxi-booking-app",
    },
    {
      label: "KALVEN Intelligent Automation Services",
      image: "/assets/solutionstrending7.png",
      link: "/solutions/trending/kalven-automation",
    },
  ];

  // State for controlling scroll position
  const [scrollIndex, setScrollIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Update window width on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  const handleNext = () => {
    if (scrollIndex < content.length - 1) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const [elementRef, inView] = useInView(1);

  return (
    <section className="relative w-full lg:mb-14 h-screen mt-10 overflow-hidden">
      <div className="m-4 lg:px-20">
        <h1 className="text-purple-800 text-xl font-semibold mb-4">NEW AT KALVEN</h1>
        <h1 className="text-black text-3xl">
          Trending Now <span className="text-red-600">.</span>
        </h1>
      </div>

      {/* Card Carousel */}
      <div className="relative h-72 flex items-center justify-center lg:justify-evenly lg:gap-52 mt-10">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={scrollIndex === 0}
          className={`absolute left-4 sm:left-10 z-10 bg-white rounded-full p-2 shadow-md transition ${
            scrollIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
        >
          <span className="text-2xl sm:text-3xl">&larr;</span>
        </button>

        {/* Cards */}
        <div className="w-full mt-24 lg:flex lg:justify-evenly h-96 max-w-[90%] lg:max-w-[90%] overflow-hidden relative">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full lg:flex lg:gap-32 md:w-1/2 lg:w-1/3 absolute top-0 left-0 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(${(index - scrollIndex) * 100}%)`,
                opacity: scrollIndex === index || windowWidth >= 400 ? 1 : "",
                transition: "transform 0.7s ease-in-out, opacity 0.3s ease-in-out",
              }}
            >
              <div
                className="relative m-1 bg-cover w-72 bg-center rounded-lg shadow-lg h-[300px] sm:h-[500px] flex flex-col justify-between p-6 transform transition-all duration-500 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Content */}
                <Link href={item.link}>
                <div className="relative top-32 left-28 lg:top-36 z-10 bg-gray-500 p-4 w-72 text-white">
                  <span className="bg-black text-sm px-2 py-1 rounded">Brochure</span>
                  <h3 className="text-lg sm:text-xl hover:underline font-bold mt-4">{item.label}</h3>
                  
                  {/* Learn More Button with Link */}
                  <div ref={elementRef} className={`py-3 text-lg ${inView ? "slide-up" : ""}`}>
                   
                      <button className="relative flex items-center space-x-2 text-yellow-400 font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden">
                        {/* Border animation */}
                        <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border border-yellow-400 rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
                        {/* Content */}
                        <div className="flex justify-center items-center w-8 h-8 border border-yellow-400 rounded-full group-hover:hidden z-10">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <div className="hidden group-hover:block z-10">
                          <span>&rarr;</span>
                        </div>
                        <span className="z-10">Learn more</span>
                      </button>
                    
                  </div>
                  
                </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={scrollIndex === content.length - 1}
          className={`absolute right-4 sm:right-10 z-10 bg-white rounded-full p-2 shadow-md transition ${
            scrollIndex === content.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
        >
          <span className="text-2xl sm:text-3xl">&rarr;</span>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-32 space-x-4">
        {content.map((_, index) => (
          <span
            key={index}
            className={`block w-1 h-2 rounded-full transition-all duration-300 ease-in-out ${
              scrollIndex === index ? "bg-red-500 scale-125" : "bg-gray-300 scale-90"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Solutionstrending;
