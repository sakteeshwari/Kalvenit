"use client";
import React from "react";
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon
import useInView from "../../hooks/useInView"; // Assuming your custom hook is in a separate file

const StatsGrid = () => {
    const stats = [
        { number: "80+", label: "Fortune 500 customers", bg: "bg-gray-900" },
        {
            number: "28",
            label: "Years driving customer success",
            bg: "bg-gray-800",
            bgImage: "/assets/gridpartner.png", // Background image path for the 2nd box
        },
        {
            number: "8500+",
            label: "Top Talent Employees",
            bg: "bg-gray-100",
            bgImage: "/assets/gridpart.png", // Background image path for the 3rd box
        },
        { number: "43+", label: "Global Campuses", bg: "bg-purple-700" },
    ];

    const [elementRef, inView] = useInView(0.4); // Trigger when 40% of the element is in view

    return (
        <div className="lg:flex lg:justify-evenly bg-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-2 basis-2/5 px-4 lg:pt-11">
                {stats.map((stat, index) => (
                   <div
                   key={index}
                   className={`flex flex-col justify-center items-center text-white p-12 ${stat.bg}`} // Apply background and other styles here
                   style={{
                     backgroundImage: stat.bgImage ? `url(${stat.bgImage})` : undefined, // Set background image if exists
                     backgroundSize: "cover", // Make sure the image covers the box
                     backgroundPosition: "center", // Center the background image
                   }}
                 >
                   {/* Apply slide-up animation only to the text content */}
                   <h2
                     ref={elementRef} // Attach the reference to track visibility
                     className={`text-3xl font-bold lg:text-4xl ${inView ? "slide-up" : ""}`} // Add slide-up animation based on inView
                   >
                     {stat.number}
                   </h2>
                 
                   <p
                     ref={elementRef} // Attach the reference to track visibility
                     className={`text-center text-sm mt-2 lg:text-lg ${inView ? "slide-up" : ""}`} // Add slide-up animation based on inView
                   >
                     {stat.label}
                   </p>
                 </div>
                 
                ))}
            </div>

            <div className="mt-8 basis-2/5">
                <h1
                    ref={elementRef}
                    className={`text-3xl px-2 xl:text-4xl font-semibold text-purple-900 ${
                        inView ? "slide-up" : ""
                    }`}
                >
                    We Partner to Deliver <span className="text-red-600">.</span>
                </h1>

                <p className={`xl:text-lg p-3 text-black ${
                        inView ? "slide-up" : ""
                    }`}>
                    Kalven Software Solutions is a leading technology integrator specializing in helping clients reimagine operating models, enhance competitiveness, optimize costs,
                    foster exceptional stakeholder experiences and drive business transformation. With our unique 'glocal' approach, we consultatively partner clients across geographies as a robust local provider while allowing them to
                    take advantage of our market-leading portfolio of technology services, solutions, and products; globally. As a 'Partner of Choice' for 75 Fortune500 corporations, we foster long-term strategic relationships with clients across Manufacturing, Lifesciences, BFSI, Mining, and Healthcare,
                    among others. Working collaboratively with organizations including SAP, Microsoft, AWS, ServiceNow, Automation Anywhere, and Pega, we help clients realize exceptional value from their technology investments. With outstanding employee engagement and status
                    as a preferred employer, we have been recognized as a "Great Place to Work" 10 years in a row.
                </p>

                <div ref={elementRef} className={`p-3 text-lg slide-up`}>
                    <button   className={`relative flex items-center space-x-2 text-red-500 font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden  ${
                        inView ? "slide-up" : ""
                    }`}>



                        {/* Border animation */}
                        <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border border-red-500 rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>

                        {/* Content */}
                        <div className="flex justify-center items-center w-8 h-8 border border-red-500 rounded-full group-hover:hidden z-10">
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
    );
};

export default StatsGrid;
