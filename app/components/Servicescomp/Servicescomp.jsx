"use client";
import React from "react";
import Serviceimg from "../Serviceimg/Serviceimg";
import useInView from "../../hooks/useInView"; // Ensure this is correctly imported

const Services = () => {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [subtitleRef, subtitleInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
    className="p-4 py-6 bg-white"
   >
      {/* Service title with animation */}
      <h1
        ref={titleRef}
        className={`text-purple-800 text-2xl font-semibold mb-4 transition-all duration-700 ease-in-out ${
          titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        SERVICES
      </h1>

      {/* Tagline with animation */}
      <h1
        ref={subtitleRef}
        className={`text-black text-3xl transition-all duration-700 ease-in-out ${
          subtitleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Agility. Resilience. Growth
      </h1>

      {/* Image Scrolling Section */}
      <Serviceimg />
    </div>
  );
};

export default Services;
