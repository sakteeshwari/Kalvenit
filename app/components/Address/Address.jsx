"use client"
import React from 'react'
import { ArrowRight } from "lucide-react";
import "./Address.css";
import useInView from "../../hooks/useInView";


const Address = () => {
    const [elementRef, inView] = useInView(0.5); // Each card has its own ref
    return (
        <div className=" relative lg:p-20 w-full h-full">
            {/* Background Image */}
            <img
                src="/assets/girllaptop.png"
                className="w-full h-72  lg:h-[700px]"
                alt="Background"
            />

            {/* Content Positioned Top-Left */}
            <div ref={elementRef} className={`absolute top-5 left-5 opacity leading-snug lg:p-32 lg:pr-72  pr-28 lg:top-12 lg:left-12 text-white ${inView ? "slide-up" : ""}`}>
                <h2 className="text-2xl lg:text-5xl font-semibold text-purple-900 xl:leading-relaxed slide-up address-heading">
                    Address current challenges
                    and get future-ready
                </h2>


                <p className="text-lg lg:mt-6 lg:text-4xl mt-2 text-black slide-up address-para">
                    From ideas, innovation to execution –
                </p>
                <p className="text-lg lg:mt-6 lg:text-4xl  text-black slide-up address-para">
                    Let Kalven Software Solutions be the catalyst for growth!
                </p>

                {/* Button */}
                <div className=" text-xl lg:text-2xl slide-up mt-3 lg:mt-16">
                    <button className="relative flex items-center text-red-500 font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden">
                        {/* Border animation */}
                        <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border border-red-500 rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>


                        {/* Content */}
                        <div className="flex justify-center items-center w-8 h-8 border border-red-500 rounded-full group-hover:hidden z-10">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                        <div className="hidden group-hover:block z-10">
                            <span> &rarr; </span>
                        </div>
                        <span className="z-10"> &nbsp;Know more</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Address;
