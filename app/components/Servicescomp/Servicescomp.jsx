
"use client"
import React from 'react';
import Serviceimg from "../Serviceimg/Serviceimg";


const Services = () => {
 
 

  return (
    <div 
     className={`bg-white p-4 mt-6 slide-up`}>
      {/* Service title with animation */}
      <h1
         // Add ref for the first header
        className={`text-purple-800 text-2xl font-semibold mb-4 `}
      >
        SERVICES
      </h1>

      {/* Tagline with animation */}
      <h1
         // Add ref for the second header
        className={`text-black text-3xl `}
      >
        Agility. Resilience. Growth
      </h1>

      {/* Image Scrolling Section */}
      <Serviceimg />
    </div>
  );
};

export default Services;
