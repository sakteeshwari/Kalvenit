"use client"
import React from 'react'
import useInView from "../../hooks/useInView"; // Assuming your custom hook is in a separate file
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon

const Careerspagehyper = () => {

    const [elementRef, inView] = useInView(0.4); // Trigger when 40% of the element is in view
    
    return (
        <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 p-4 my-10 mt-10 lg:px-32 rounded-xl shadow-lg">
            {/* Subtle Pattern Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

            <h1 className="text-purple-700 text-2xl lg:text-5xl leading-relaxed font-semibold text-center relative z-10">
                A Hyperlearning workforce that is culturally adept at driving Next-Gen impact
            </h1>

            <div className="mt-10 leading-relaxed tracking-wide relative z-10">
                <p>
                    By now, professionals, particularly in the technology sector, know that future-proofing our learning and skills is crucial – but learning as we know it will not suffice. The evolving nature and dynamics of the workplace is being delivered by digital innovations, changing digital-native needs, and a young (& mobile) workforce which finds true professional joy in impactful work.
                </p>
                <p className="mt-6">
                    We connect your career goals to strategic skills that are a win-win for each and everyone in the KALVEN family. Our Hyperlearning workplace is grounded upon four principles:
                </p>
                <ul className="mt-6 list-disc pl-5">
                    <li>Free spirit and emotional positivity</li>
                    <li>Agile self-determination</li>
                    <li>Psychological and physical safety</li>
                    <li>Trust, transparency, and open collaboration</li>
                </ul>
                <p className="mt-6">
                    We leverage career-oriented skilling models that maximize the use of technology for continuous learning, unlearning, and relearning at a rapid pace and scale.
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
                        <span className="z-10">Join Us</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Careerspagehyper
