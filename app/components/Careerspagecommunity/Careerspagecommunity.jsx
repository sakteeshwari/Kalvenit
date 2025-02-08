"use client"
import React from 'react'
import useInView from "../../hooks/useInView"; // Assuming your custom hook is in a separate file
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon


const Careerspagecommunity = () => {
    const [elementRef, inView] = useInView(0.4); // Trigger when 40% of the element is in view
    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/assets/careerspagecontent.png")' }}>
            {/* Content Box with white background */}
            <div className="absolute top-10 left-4 lg:left-10 lg:top-20 lg:p-10 p-6 bg-white rounded-lg shadow-lg w-[93%] lg:w-3/4">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-5xl">Join Our Talent Community <span className='text-red-500 font-bold'>.</span></h1>
                <p className="mt-4 text-gray-600 lg:text-xl">
                Stay connected by joining our network! Enter your e-mail and tell us a bit about yourself, and well keep you informed about upcoming events and opportunities that match your interests.
                </p>
                <div ref={elementRef} className={`pt-7 text-lg ${inView ? "slide-up" : ""}`}>
                    <button className="relative flex items-center space-x-2 text-red-500 font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden">
                        {/* Border animation */}
                        <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border border-red-500 rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>

                        {/* Content */}
                        <div className="flex justify-center items-center w-8 h-8 border border-red-500 rounded-full group-hover:hidden z-10">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                        <div className="hidden group-hover:block z-10">
                            <span>&rarr;</span>
                        </div>
                        <span className="z-10">Join Now</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Careerspagecommunity
