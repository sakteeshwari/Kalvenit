"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

    return (
        <div className="bg-gray-200 p-6 mt-6">
            {/* Title */}
            <h1 className="text-purple-900 text-2xl font-semibold mb-4 slide-up">CoEs</h1>
            <h1 className="text-black text-3xl slide-up">
                Change gears <span className="text-red-600 font-semibold">.</span>{"  "}
                 Accelerate <span className="text-red-600 font-semibold">.</span> Drive
                value <span className="text-red-600 font-semibold">.</span>
            </h1>

            {/* Carousel Container */}
            <div className="relative mt-6 xl:mx-10   shadow-lg rounded-lg overflow-hidden mx-auto">
                {/* Arrow Buttons */}
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
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
                <div className="flex  overflow-hidden">

                    <div
                        className="flex gap-5 transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                        }}
                    >
                        {data.map((item, index) => (

                            <div
                                key={index}
                                className="w-1/3 bg-white  sm:w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4"
                            >
                                <h3 className="text-lg font-bold mb-2  slide-up">{item.title}</h3>
                                <p className="text-gray-700 slide-up">{item.description}</p>
                                <div className=" p-4 rounded  flex flex-col items-center text-center">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-32 h-32 mb-4"
                                    />

                                </div>
                                <div className="py-3 text-lg slide-up">
                                    <button className="flex items-center space-x-2 text-red-500 hover:text-red-700 font-medium">
                                        <div className="flex justify-center items-center w-8 h-8 border border-red-500 rounded-full hover:bg-red-100">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                        <span>Know more</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoEs;
