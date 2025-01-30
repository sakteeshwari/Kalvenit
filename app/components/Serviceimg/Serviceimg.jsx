"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import "./Serviceimg.css";
import useInView from "../../hooks/useInView"; // Assuming your custom hook is in a separate file

const Serviceimg = () => {

  const [elementRef, inView] = useInView(0.5); // Triggers when 50% of the element is in view
  

 
  const images = [
    {
      Label: "Digitalization",
      Description:"Drive Innovation, Efficiency, Productivity & Teamwork",
      src: "/assets/digitalization.png",
    },
    {
      Label: "Modernization",
      Description:"Transform Your IT Landscape - Create an agile enterprise",
      src: "/assets/mordernization.png",
    },
    {
      Label: "Intelligence Services",
      Description:"Become a data-driven Business - Reinvent your Organization",
      src: "/assets/intelligence.png",
    },
    {
      Label: "Cloud & Infrastructure Management Services",
      Description:"Optimized and Smart infrastructure - The Foundation for your digital business",
      src: "/assets/nextgen.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle left arrow click
  const leftSwap = () => {
    const prevSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
    document.getElementById(`slide-${prevSlide}`)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Function to handle right arrow click
  const rightSwap = () => {
    const nextSlide = (currentSlide + 1) % images.length;
    setCurrentSlide(nextSlide);
    document.getElementById(`slide-${nextSlide}`)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div >
      <section
        className="flex gap-2  mx-3 mt-6 z-10 overflow-hidden relative"
        style={{ height: "23rem", borderRadius: "5px" }}
      >
        <div
          id="slide-img"
          className="flex xl:gap-16 overflow-x-scroll h-80   xl:h-80 snap-x snap-mandatory z-10"
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((data, index) => (
            <div
              key={index}
              id={`slide-${index}`}
              className="flex-shrink-0 xl:w-2/6   xl:h-full  snap-center relative"
            >
              <img
                className="h-full w-full lg: object-cover"
                src={data.src}
                alt={`slide-${index}`}
              />
              <div className="absolute bottom-0 w-full left-0 bg-black bg-opacity-50 text-white p-2 text-sm">
               <h2  className={`font-semibold text-red-500 text-lg shadow-xl `}> {data.Label}</h2>
                <p ref={elementRef} className={`  ${inView ? "slide-up" : ""} `}>{data.Description}</p>
              </div>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                
              </div>
            </div>
          ))}
        </div>

        {/* Slide navigation controls */}
        <section className="text-white flex items-center absolute left-0 bottom-32 justify-between p-5 text-center rounded-lg w-full h-full md:p-10 lg:px-20">
          {/* Left arrow */}
          <div className="absolute z-30 flex items-center left-4">
            <img
              src="/assets/left-arrow.png"
              className="arrow h-8 w-8 md:h-12 md:w-12 cursor-pointer"
              onClick={leftSwap}
              alt="Left Arrow"
              id="arrowslide-img"
            />
          </div>

         {/* Right arrow */} 
          <div className="absolute right-5 z-30">
            <img
              src="/assets/right-arrow.png"
              className="arrow text-6xl h-8 xl:h-12 md:text-8xl text-white cursor-pointer"
              id="arrowslide-img"
              onClick={rightSwap}
              alt="Right Arrow"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Serviceimg;



