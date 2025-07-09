"use client"
import React from 'react'
import useInView from "../../hooks/useInView"; // Assuming your custom hook is in a separate file
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon
import Link from 'next/link';

const Aboutuspagestory = () => {
  const [elementRef, inView] = useInView(0.4); // Trigger when 40% of the element is in view
  return (
    <div className="relative p-1 text-white bg-[url('/assets/aboutusstoryimg.jpg')] bg-cover bg-center">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <h1 className='text-3xl font-semibold mt-10   flex-1 lg:text-5xl lg:leading-relaxed'>
          Our Story <span className='text-red-500 font-bold'>.</span>
        </h1>
        <p className='m-2 mt-6 lg:text-xl lg:leading-loose lg:tracking-wide leading-loose tracking-wide'>
          Founded in 1996, KALVEN started as an IT consulting partner for one of the most recognized brands in the agricultural equipment manufacturing industry.
          With steady and planned growth, KALVEN’s vision went global in 2000, with its introduction of offshore operations in Indore, India. Since then, we have grown exponentially and scaled our services globally.
        </p>
      </div>
     <Link href={"/aboutus"}>
     <div ref={elementRef} className={`pb-4 px-6 text-lg slide-up`}>
        <button className={`relative flex items-center space-x-2 text-purple-400 font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden  ${inView ? "slide-up" : ""
          }`}>

          {/* Border animation */}
          <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border border-purple-400 rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>

          {/* Content */}
          <div className="flex justify-center items-center w-8 h-8 border border-purple-400 rounded-full group-hover:hidden z-10">
            <ArrowRight className="w-4 h-4" />
          </div>
          <div className="hidden group-hover:block z-10">
            <span>&rarr;</span>
          </div>
          <span className="z-10">Know more</span>
        </button>
      </div>
     </Link>
    </div>
  )
}

export default Aboutuspagestory
