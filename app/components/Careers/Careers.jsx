"use client";
import React from "react";
import "./Careers.css";
import { ArrowRight } from "lucide-react";
import useInView from "../../hooks/useInView"; // Ensure this hook is implemented correctly

const Careers = () => {
    const [elementRef, inView] = useInView(0.5); // Triggers when 40% of the element is in view

    return (
        <div>
            {/* Image Section */}
            <div className="img_sale relative">
                <img src="/assets/happy.png" alt="section_image" className="w-full" />

                {/* Animated Box */}
                <div
                    ref={elementRef}
                    className={`imgsale_box text-white border-4 border-yellow-400 shadow-lg rounded-lg transition-all duration-700 ease-in-out transform
                    ${inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"}
                    hover:shadow-[0px_10px_30px_rgba(0,0,0,0.5)] hover:border-yellow-500 hover:shadow-yellow-600`}
                >
                    <div className="img-salebox-two">
                        <h2 className={`lg:text-2xl ${inView ? "slide-up" : ""}`}>CAREERS</h2>
                        <p className={`mt-6 text-4xl lg:text-7xl lg:leading-relaxed ${inView ? "slide-up" : ""}`}>
                            Shape Your Future <br /> Join Kalven Today!
                        </p>
                    </div>

                    {/* Know More Button */}
                    <div className="px-4 py-3 text-lg">
                        <button className="relative flex items-center space-x-2 text-white font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden">
                            {/* Border animation */}
                            <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border border-white rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>

                            {/* Arrow */}
                            <div className="flex justify-center items-center w-8 h-8 border border-white rounded-full group-hover:hidden z-10">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                            <div className="hidden group-hover:block z-10">
                                <span>&rarr;</span>
                            </div>

                            {/* Text */}
                            <span className="z-10">Know more</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
