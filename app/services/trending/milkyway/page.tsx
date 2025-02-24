"use client"
import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaPlus } from "react-icons/fa";
import Servicespageimg from "../../../components/Servicespageimg/Servicespageimg";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CaseStudy() {
    const [activeSection, setActiveSection] = useState("");


    useEffect(() => {
        const handleScroll = () => {
            const sections = ["overview", "challenge", "solution", "impact"];
            let currentSection = "";

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div>
            <Servicespageimg imgSrc={"/assets/servicepage1.jpg"} text=" Drive Operational Excellence, Innovation and Transformation."></Servicespageimg>
            <div className="bg-gray-100 min-h-screen">
                {/* Navigation Bar */}
                <nav className="bg-blue-900 text-white flex justify-around py-4 text-sm font-semibold">
                    <a
                        href="#overview"
                        className={`${activeSection === "overview" ? "text-yellow-500" : ""
                            }`}
                    >
                        Overview
                    </a>
                    <a
                        href="#challenge"
                        className={`${activeSection === "challenge" ? "text-yellow-500" : ""
                            }`}
                    >
                        The challenge
                    </a>
                    <a
                        href="#solution"
                        className={`${activeSection === "solution" ? "text-yellow-500" : ""
                            }`}
                    >
                        The solution
                    </a>
                    <a
                        href="#impact"
                        className={`${activeSection === "impact" ? "text-yellow-500" : ""
                            }`}
                    >
                        Business impact
                    </a>
                    </nav>

                    {/* Overview Section */}
                    <section id="overview" className="bg-gray-200 p-8 flex justify-center">
                        <div className="border border-blue-500 p-4 rounded-lg max-w-3xl text-center">
                            <p className="text-blue-900 font-semibold">
                                Headquartered in Europe, the client is a world leader in the dairy farming industry.
                            </p>
                        </div>
                    </section>

                    {/* Challenge Section */}
                    <section id="challenge" className="p-8 bg-white">
                        <h2 className="text-3xl font-bold text-black">The challenge</h2>
                        <p className="mt-4 text-lg text-gray-700">
                            The dairy equipment needed servicing at regular intervals and due to their remote location & lack of prior information, they consumed time and cost.
                        </p>
                        <p className="mt-2 text-gray-600">
                            The client needed to service the dairy equipment on the farms at a regular interval which needed physical visits by their engineers. Due to the remote location & limited connectivity of the farms, multiple visits were required for the servicing and it led to reduced productivity & increased cost.
                        </p>
                    </section>

                    {/* the solutions */}
                 
                  <img
                        src="/assets/milkyway.jpg"
                        alt="Business Impact"
                        className="w-full h-auto lg:h-[700px] object-cover"
                    />

                    {/* Business Impact Section */}
                    <section id="impact" className="p-8 flex flex-col justify-center items-center bg-gray-100 text-center">
                        <h2 className="text-3xl font-bold text-black">Business impact</h2>
                        <p className="mt-4 text-lg text-gray-700">
                            With the real-time monitoring available of the equipment, the client saw a significant reduction in the number of visits needed by the engineers for the servicing.
                        </p>
                        <div className="flex flex-col  justify-center gap-6 lg:flex-row mt-6">
                            <div className="border-l-4 border-blue-600 bg-white p-4 max-w-sm">
                                <h3 className="font-bold">Increased operational efficiency</h3>
                                <p className="text-gray-600">with in-depth and near-real-time visibility</p>
                            </div>
                            <div className="border-l-4 border-blue-600 bg-white p-4 max-w-sm">
                                <h3 className="font-bold">Achieved the balance</h3>
                                <p className="text-gray-600">between optimum costs and quality deliverables</p>
                            </div>
                            <div className="border-l-4 border-blue-600 bg-white p-4 max-w-sm">
                                <h3 className="font-bold">Increased cost-effectiveness</h3>
                                <p className="text-gray-600">with prior information on equipment</p>
                            </div>
                        </div>
                        <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
                            Download Full Case Study →
                        </button>
                    </section>

                    <div className="bg-gray-100 px-6 py-4 flex justify-between items-center border-t border-gray-300">
                        {/* Categories Section */}
                        <div className="text-gray-700 font-semibold text-sm">
                            Categories:{" "}
                            <a href="#" className="text-blue-600 hover:underline">
                                AWS
                            </a>{" "}
                            <a href="#" className="text-blue-600 hover:underline">
                                Cloud
                            </a>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-3">
                            <a href="#" className="bg-blue-700 text-white p-2 rounded">
                                <FaLinkedin size={16} />
                            </a>
                            <a href="#" className="bg-blue-600 text-white p-2 rounded">
                                <FaFacebook size={16} />
                            </a>
                            <a href="#" className="bg-blue-400 text-white p-2 rounded">
                                <FaTwitter size={16} />
                            </a>
                            <a href="#" className="bg-blue-500 text-white p-2 rounded">
                                <FaPlus size={16} />
                            </a>
                        </div>
                    </div>
            </div>
        </div>

    );
}
