"use client";
import React from 'react';
import "./Video.css";
import useInView from "../../hooks/useInView"; // Assuming your custom hook is in a separate file


const Video = () => {

  const [elementRef, inView] = useInView(0.5); // Trigger when 50% of the element is in view
  return (
    <div className="mx-2 mt-2 bg-white  xl:mt-10 mb-1 flex flex-col items-center">
      <h1
            ref={elementRef}
            className={`text-2xl text-purple-700 text-center outlined-text p-4 lg:text-5xl transition-all duration-1000 slide-up ${
              inView ? "slide-up" : "" // Add slide-up when the element is in view
            }`}
          >
            Watch this amazing video!
          </h1>
      <div className="rounded-video  mt-2 lg:mt-6">
        <video
          width="600"  
          muted
          autoPlay
          loop
          playsInline
          className="h-[] rounded-video w-full max-w-3xl lg:max-w-6xl"
        >
          <source src="/assets/Kalvenit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
