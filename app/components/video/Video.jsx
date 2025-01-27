"use client";
import React from 'react';
import "./Video.css";

const Video = () => {
  return (
    <div className="mx-2 mt-2  xl:mt-10 mb-1 flex flex-col items-center">
      <h1 className="text-2xl text-purple-700 text-center p-4 slide-up outlined-text lg:text-5xl">
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
          <source src="/assets/kelvinit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
