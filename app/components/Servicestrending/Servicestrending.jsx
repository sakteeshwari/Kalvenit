"use client"

import React, { useState } from "react";

const Servicestrending = () => {
  // Sample content with background images
  const content = [
    {
      label: "Scaling tech-innovation: Unleash impact that matters",
      description: "Logistics behemoth attains $3 million savings and near real-time visibility on freight...",
      image: "/path-to-image-1.jpg", // Replace with your image
    },
    {
      label: "Long-term customer relationship management",
      description: "Transforming strategies to strengthen customer engagement and retention...",
      image: "/path-to-image-2.jpg", // Replace with your image
    },
    {
      label: "Driving operational excellence",
      description: "Empowering organizations to achieve excellence with streamlined processes...",
      image: "/path-to-image-3.jpg", // Replace with your image
    },
    {
      label: "Enhancing workforce productivity",
      description: "Discover strategies to drive efficiency and innovation in your teams...",
      image: "/path-to-image-4.jpg", // Replace with your image
    },
  ];

  // State for controlling scroll position
  const [scrollIndex, setScrollIndex] = useState(0);

  // Handle navigation
  const handlePrev = () => {
    setScrollIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : content.length - 1
    );
  };

  const handleNext = () => {
    setScrollIndex((prevIndex) =>
      prevIndex < content.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <section className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl sm:text-5xl font-bold text-center mt-10">
        Trending Now.
      </h2>

      {/* Card Carousel */}
      <div className="relative flex items-center justify-center mt-10">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-10 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
        >
          <span className="text-2xl sm:text-3xl">&larr;</span>
        </button>

        {/* Cards */}
        <div className="w-full max-w-[90%] lg:max-w-[80%] flex overflow-x-hidden">
          {content.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full transition-transform duration-700 ease-in-out transform ${
                scrollIndex === index
                  ? "translate-x-0"
                  : scrollIndex > index
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
            >
              <div
                className="relative bg-cover bg-center rounded-lg shadow-lg h-[400px] sm:h-[500px] flex flex-col justify-between p-6"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
                {/* Content */}
                <div className="relative z-10 text-white">
                  <span className="bg-black text-sm px-2 py-1 rounded">
                    Case study
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mt-4">
                    {item.label}
                  </h3>
                  <p className="text-sm sm:text-base mt-2">{item.description}</p>
                </div>
                {/* Learn More */}
                <a
                  href="#"
                  className="relative z-10 text-red-500 font-bold text-sm mt-4"
                >
                  Learn more &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-10 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
        >
          <span className="text-2xl sm:text-3xl">&rarr;</span>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {content.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${
              scrollIndex === index ? "bg-red-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Servicestrending;
