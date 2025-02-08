"use client"
import React from 'react'
import useInView from "../../hooks/useInView"; // Assuming your custom hook is in a separate file
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon

const Careerspageimg = () => {
    const [elementRef, inView] = useInView(0.4); // Trigger when 40% of the element is in view

    return (
        <div className="relative text-white bg-[url('/assets/careerpageimg.png')] bg-cover bg-center h-[40vh] w-[] lg:h-screen">
            {/* Content Section */}
            <div ref={elementRef} className={`absolute top-14 lg:left-6 lg:top-36 lg:text-2xl text-lg slide-up`}>
                <button className={`relative flex items-center space-x-2 text-white font-medium group 
                    hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden 
                    ${inView ? "slide-up" : ""}`}>

                    {/* Border animation */}
                    <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border 
                        border-white rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>

                    {/* Arrow Icon */}
                    <div className="flex justify-center items-center w-8 h-8 border border-white rounded-full group-hover:hidden z-10">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                    <div className="hidden group-hover:block z-10">
                        <span>&rarr;</span>
                    </div>
                    <span className="z-10">Make YOUR Mark!</span>
                </button>
            </div>
        </div>
    )
}

export default Careerspageimg
