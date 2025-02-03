"use client"

import React, { useState } from "react";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useInView from "../../hooks/useInView";
import "./Coespagetrending.css"


const Coespagetrending = () => {
  // Sample content with background images
  const content = [
    {
      label: "Fix root cause of recurring issue with KALVEN Oracle...",

      image: "/assets/coestrending1.png", 
    },
    {
      label: "Equipment manufacturer improves operational efficiency...",

      image: "/assets/coestrending2.png", 
    },
    {
      label: "Formulating innovation at a Pharma major with E-...",

      image: "/assets/coestrending3.png",
    },
    {
      label: "KALVEN Mobility solution improves time to market at a...",

      image: "/assets/coestrending4.png", 
    },
    {
      label: "RPA utilization helps in accelerated financial dispute... ",

      image: "/assets/coestrending5.png", 
    },
    {
      label: "Robotic Process Automation/Intelligent Automation...",

      image: "/assets/coestrending6.png",
    },
    {
      label: "Optimize Your Oracle Investment with KALVEN...",

      image: "/assets/coestrending7.png", 
    },
    {
      label: "KALVEN Intelligent Automation Services",

      image: "/assets/coestrending8.png",
    },
    {
      label: "Enterprise Computing Anytime, Anywhere",

      image: "/assets/coestrending9.png", 
    },
    {
      label: "KALVEN Artificial Intelligence & Machine Learning Services...",

      image: "/assets/coestrending10.png",
    },
    {
      label: "How to preserve Oracle forms investments and avoid risky...",

      image: "/assets/coestrending11.png",
    },
    
  ];

  // State for controlling scroll position
  const [scrollIndex, setScrollIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0); // Store window width


  // Handle navigation
  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (scrollIndex < content.length - 1) {
      setScrollIndex((prevIndex) => prevIndex + 1);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      // Listen for window resize events
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);


  
  const [elementRef, inView] = useInView(1); // Each card has its own ref

  return (
    <section className="relative w-full h-screen lg:mb-14  mt-10   overflow-hidden">
      {/* Title */}
      <div className="m-4 lg:px-20">
        <h1
          // Add ref for the first header
          className={`text-purple-800 text-xl font-semibold mb-4 `}
        >
          NEW AT KALVEN
        </h1>
        <h1
          // Add ref for the second header
          className={`text-black text-3xl `}
        >
          Trending Now <span className="text-red-600">.</span>      </h1>
      </div>

      {/* Card Carousel */}
      <div className="relative h-72   flex items-center justify-center lg:justify-evenly lg:gap-52  mt-10">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={scrollIndex === 0} // Disable when at the first index
          className={`absolute left-4 sm:left-10 z-10 bg-white rounded-full p-2 shadow-md transition ${scrollIndex === 0
              ? "opacity-50 cursor-not-allowed" // Reduce opacity when at the first item
              : "hover:bg-gray-200"
            }`}
        >
          <span className="text-2xl sm:text-3xl">&larr;</span>
        </button>

        {/* Cards */}
        <div className="w-full mt-24 lg:flex lg:justify-evenly  h-96 max-w-[90%] lg:max-w-[90%]  overflow-hidden relative">
          {content.map((item, index) => (
           <div
           key={index}
           className={`flex-shrink-0 w-full lg:flex lg:gap-32 md:w-1/2 lg:w-1/3 absolute top-0 left-0 transition-transform duration-700 ease-in-out`}
           style={{
             transform: `translateX(${(index - scrollIndex) * 100}%)`,
             opacity: scrollIndex === index || windowWidth >= 400 ? 1 : "", // Ensure at least two cards are visible on larger screens
             transition: "transform 0.7s ease-in-out, opacity 0.3s ease-in-out",
           }}
         >
              <div
                className="relative m-1 bg-cover w-72 bg-center rounded-lg shadow-lg h-[300px] sm:h-[500px] flex flex-col justify-between p-6 transform transition-all duration-500 ease-in-out hover:scale-110 hover:translate-y-[-10px]"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >

                {/* Content */}
                <div className="relative top-32 left-28 lg:top-36 z-10 bg-gray-500 p-4 w-72 text-white ">
                  <span className="bg-black text-sm px-2 py-1 rounded">
                    Case study
                  </span>
                  <h3 className="text-lg sm:text-xl hover:underline font-bold mt-4">
                    {item.label}
                  </h3>
                  <p className="text-sm sm:text-base mt-2">{item.description}</p>
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
                {/* Learn More */}

              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={scrollIndex === content.length - 1} // Disable when at the last index
          className={`absolute right-4 sm:right-10 z-10 bg-white rounded-full p-2 shadow-md transition ${scrollIndex === content.length - 1
              ? "opacity-50 cursor-not-allowed" // Reduce opacity when at the last item
              : "hover:bg-gray-200"
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
            className={`block w-1 h-2 rounded-full transition-all duration-300 ease-in-out ${scrollIndex === index
                ? "bg-red-500 scale-125" // Active dot with color and scale up effect
                : "bg-gray-300 scale-90" // Inactive dot with a smaller scale
              }`}
          ></span>
        ))}
      </div>

    </section>
  );
};

export default Coespagetrending;
