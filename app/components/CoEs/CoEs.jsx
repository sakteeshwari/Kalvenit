"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./CoEs.css";
import useInView from "../../hooks/useInView";

const CoEs = () => {
    const data = [
        {
            title: "SAP",
            description: "Value realization. Future readiness. Competitive advantage",
            img: "/assets/sap.png",
        },
        {
            title: "Microsoft",
            description: "Real and Contextual innovation powered by Digital Technologies",
            img: "/assets/microsoft.png",
        },
        {
            title: "Data Science and AI",
            description: "Be the front runner in the accelerating AI race",
            img: "/assets/datascience.png",
        },
        {
            title: "RPA",
            description:
                "Accelerate and scale intelligent automation to improve efficiencies, productivity, and cost savings",
            img: "/assets/rpa.png",
        },
        {
            title: "Service Now",
            description: "Deliver exceptional customer, employee, and IT experiences",
            img: "/assets/servicenow.png",
        },
        {
            title: "AWS",
            description:
                "Seamless cloud journey with flexibility, scalability, and reliability",
            img: "/assets/aws.png",
        },
        {
            title: "Salesforce",
            description:
                "Connecting customer-focused cloud with value-driven innovation",
            img: "/assets/salesforce.png",
        },
        {
            title: "IoT",
            description: "Transform your business with our smart IoT Solutions",
            img: "/assets/iot.png",
        },
        {
            title: "Embedded & Factory Automation",
            description:
                "Leverage our Embedded & Factory Automation Solutions across industry verticals",
            img: "/assets/embedded.png",
        },
        {
            title: "GCP",
            description: "Embrace cloud for your Digital Transformation journey",
            img: "/assets/googlecloud.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < data.length - 3) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const [elementRef, inView] = useInView(1); // Each card has its own ref

    return (
        <div className="bg-gray-200 p-6 mt-6">
            
            {/* Title */}
            <h1 ref={elementRef} className={`text-purple-900 text-2xl font-semibold mb-4 slide-up ${inView ? "slide-up" : ""}`}>CoEs</h1>
            <h1 className={`text-black text-3xl slide-up ${inView ? "slide-up" : ""}`}>
                Change gears <span className="text-red-600 font-semibold">.</span> Accelerate{" "}
                <span className="text-red-600 font-semibold">.</span> Drive value{" "}
                <span className="text-red-600 font-semibold">.</span>
            </h1>
            <div className="relative mt-6 xl:mx-10 rounded-lg overflow-hidden mx-auto">
                {/* Arrow Buttons */}
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="absolute left-2 lg:left-12 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ArrowLeft className="w-6 h-6 text-gray-600" />
                </button>

                <button
                    onClick={handleNext}
                    disabled={currentIndex >= data.length - 3}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ArrowRight className="w-6 h-6 text-gray-600" />
                </button>

                {/* Cards */}
                <div className="flex lg:p-10 overflow-hidden">
                    <div
                        className="flex gap-5 transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentIndex * 10}%)`,
                        }}
                    >
                        {data.map((item, index) => {
                            const [elementRef, inView] = useInView(0.4); // Each card has its own ref
                            return (
                                <div
                                    key={index}
                                    
                                    className={`bg-white lg:rounded-lg p-5 coes-box w-[33.33%] transition-all duration-700 ease-in-out transform `}
                                >
                                    <h3 ref={elementRef} className={`text-lg font-bold mb-2 text-black ${inView ? "slide-up" : ""}`}>{item.title}</h3>
                                    <p ref={elementRef} className={`text-gray-700 ${inView ? "slide-up" : ""}`}>{item.description}</p>
                                    <div className="p-4 rounded flex flex-col items-center text-center">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-20 h-32 mb-4"
                                        />
                                    </div>
                                    <div ref={elementRef} className={`py-3 text-lg ${inView ? "slide-up" : ""}`}>
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
                                            <span className="z-10">Know more</span>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoEs;
