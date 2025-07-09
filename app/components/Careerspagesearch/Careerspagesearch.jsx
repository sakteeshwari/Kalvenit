"use client";
import React from "react";

const JobSearchBar = () => {
  return (
    <div className="my-6 flex flex-col gap-7 items-center justify-between lg:flex-row bg-white p-4 shadow-2xl rounded-lg w-full max-w-5xl mx-auto">

      {/* Input Fields */}
      
        <div className="flex flex-col gap-5 lg:flex-row  flex-1">
          <input
            type="text"
            placeholder="Search by job keyword"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Search by job Location"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      

      <div>
        {/* Search Button */}
        <button
          className="ml-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-full border-2 border-transparent 
             hover:border-red-500 hover:bg-white hover:text-red-500 transition-all duration-300 ease-in-out 
             focus:ring focus:ring-red-300 focus:outline-none transform hover:scale-105"
        >
          Search
        </button>


        {/* Login Link */}
        <a
          href="#"
          className="ml-4 text-purple-600 font-medium hover:underline"
        >
          Candidate Profile Login
        </a>
      </div>
    </div>
  );
};

export default JobSearchBar;
