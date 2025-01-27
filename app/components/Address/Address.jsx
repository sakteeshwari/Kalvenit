"use client"
import React from 'react'
import { ArrowRight } from "lucide-react";
import "./Address.css"

const Address = () => {
    return (
        <div className=" relative lg:p-20 w-full h-full">
            {/* Background Image */}
            <img
                src="/assets/girllaptop.png"
                className="w-full h-72  lg:h-[700px]"
                alt="Background"
            />

            {/* Content Positioned Top-Left */}
            <div className="absolute top-6 left-6 opacity leading-snug lg:p-32 lg:pr-72  pr-28 lg:top-12 lg:left-12 text-white">
                <h2 className="text-2xl lg:text-5xl font-semibold text-purple-900 xl:leading-relaxed slide-up">
                    Address current challenges
                    and get future-ready
                </h2>


                <p className="text-lg lg:mt-6 lg:text-4xl mt-4 text-black slide-up">
                    From ideas, innovation to execution –
                </p>
                <p className="text-lg lg:mt-6 lg:text-4xl mt-2 text-black slide-up">
                    Let YASH be the catalyst for growth!
                </p>

                {/* Button */}
                <div className="py-3 text-xl lg:text-2xl slide-up mt-6 lg:mt-16">
                    <button className="flex items-center space-x-2 text-red-500 hover:text-red-700 font-medium">
                        <div className="flex justify-center items-center w-8 h-8 border border-red-500 rounded-full hover:bg-red-100">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                        <span>Explore More</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Address;
