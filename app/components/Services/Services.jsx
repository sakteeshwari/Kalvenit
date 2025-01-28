
"use client"
import React from 'react';
import Serviceimg from "../Serviceimg/Serviceimg";
import useInView from "../../hooks/useInView"; // Assuming your custom hook is in a separate file

const Services = () => {
  const [elementRef, inView] = useInView(0.4); // Trigger when 40% of the element is in view
 

  return (
    <div className='bg-white p-4 mt-6'>
      {/* Service title with animation */}
      <h1
        ref={elementRef} // Add ref for the first header
        className={`text-purple-800 text-2xl font-semibold mb-4 ${inView ? "slide-up" : ""}`}
      >
        SERVICES
      </h1>

      {/* Tagline with animation */}
      <h1
        ref={elementRef} // Add ref for the second header
        className={`text-black text-3xl ${inView ? "slide-up" : ""}`}
      >
        Agility. Resilience. Growth
      </h1>

      {/* Image Scrolling Section */}
      <Serviceimg />
    </div>
  );
};

export default Services;
