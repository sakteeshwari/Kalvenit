"use client"
import React from 'react'

const Kalvendifferent = () => {
  return (
    <div className="relative mb-32 text-white bg-cover bg-center h-80 p-4 lg:px-32 lg:pt-10 lg:text-xl lg:leading-loose leading-relaxed tracking-wide">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-[url('/assets/kalvendiffimg.png')] bg-cover bg-center opacity-50"
      ></div>
      
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h1 className='text-5xl'>KALVEN Differentiators <span className='text-red-500 font-semibold'>.</span></h1>
        <p className='mt-2'>
          We craft added worth for our clients and improve the competitiveness and value of their processes. We harness the expertise in building in-depth digital strategies and market-ready solutions to unlock phenomenal digital possibilities for you. In today’s digital era, we believe in reimagining value optimization and business continuity.
        </p>
      </div>
    </div>
  )
}

export default Kalvendifferent