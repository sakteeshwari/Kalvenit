"use client";
import React from "react";
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon
import { useInView } from "react-intersection-observer";

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

    // Using useInView hook
    const { ref, inView } = useInView({
        threshold: 0.3, // Trigger animation when 30% of the element is visible
        triggerOnce: true, // Trigger animation only once
    });

    return (
        <div className=" lg:flex lg:justify-evenly bg-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-2 basis-2/5 px-4 lg:pt-11">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`flex flex-col justify-center items-center text-white p-12 ${stat.bg}`}
                        style={{
                            backgroundImage: stat.bgImage ? `url(${stat.bgImage})` : undefined, // Set background image if exists
                            backgroundSize: "cover", // Make sure the image covers the box
                            backgroundPosition: "center", // Center the background image
                        }}
                    >
                        {/* <h2 ref={ref} className=`text-3xl font-bold lg:text-4xl ${inView ? "slide-up":" "}`>{stat.number}</h2> */}
                        <h2 ref={ref} className={`text-3xl font-bold lg:text-4xl ${inView ? "slide-up" : ""}`}>
                            {stat.number}
                        </h2>

                        <p ref={ref} className={`text-center text-sm mt-2 lg:text-lg ${inView ? "slide-up" : ""}`}>{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 basis-2/5">
                <h1
                    ref={ref}
                    className={`text-3xl  px-2 xl:text-4xl font-semibold text-purple-900 ${inView ? "slide-up" : " "}`}
                >
                    We Partner to Deliver <span className="text-red-600">.</span>
                </h1>

                <p className="xl:text-lg p-3">
                    Kalven Software Solutions is a leading technology integrator specializing in helping clients reimagine operating models, enhance competitiveness, optimize costs,
                    foster exceptional stakeholder experiences and drive business transformation. With our unique 'glocal' approach, we consultatively partner clients across geographies as a robust local provider while allowing them to
                    take advantage of our market-leading portfolio of technology services, solutions, and products; globally. As a 'Partner of Choice' for 75 Fortune500 corporations, we foster long-term strategic relationships with clients across Manufacturing, Lifesciences, BFSI, Mining, and Healthcare,
                    among others. Working collaboratively with organizations including SAP, Microsoft, AWS, ServiceNow, Automation Anywhere, and Pega, we help clients realize exceptional value from their technology investments. With outstanding employee engagement and status
                    as a preferred employer, we have been recognized as a "Great Place to Work" 10 years in a row.
                </p>

                <div className="p-3 text-lg slide-up">
                    <button className="flex items-center space-x-2 text-red-500 hover:text-red-700 font-medium">
                        <div className="flex justify-center items-center w-8 h-8 border border-red-500 rounded-full hover:bg-red-100">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                        <span>Know more</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StatsGrid;
