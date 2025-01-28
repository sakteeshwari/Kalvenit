
"use client"
import React from 'react'
import "./Careers.css"
import { ArrowLeft, ArrowRight } from "lucide-react";
import useInView from "../../hooks/useInView"; // Assuming your custom hook is in a separate file

const Careers = () => {

    const [elementRef, inView] = useInView(0.4); // Trigger when 40% of the element is in view
    return (
        <div>
            {/* <!--Image Section--> */}
            <div className="img_sale">
                <img src="/assets/happy.png" alt="section_image" />
                <div ref={elementRef} className="imgsale_box  text-white border-4 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.5)] hover:border-yellow-500 hover:shadow-yellow-600 border-yellow-400 shadow-lg rounded-lg  transition-all duration-500">
                    <div className='py-6 px-4'>
                        <h2 className='slide-up lg:text-2xl'>CAREERS</h2>
                        <p className='slide-up mt-6 text-4xl lg:text-7xl lg:leading-relaxed'>Shape Your Future Join Kalven Today!</p>
                    </div>
                    <div className="px-4 py-3 text-lg slide-up">
                        <button className="relative flex items-center space-x-2 text-white font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden">
                            {/* Border animation */}
                            <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border border-white rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>


                            {/* Content */}
                            <div className="flex justify-center items-center w-8 h-8 border border-white rounded-full group-hover:hidden z-10">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                            <div className="hidden group-hover:block z-10">
                                <span>&rarr;</span>
                            </div>
                            <span className="z-10">Know more</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers
