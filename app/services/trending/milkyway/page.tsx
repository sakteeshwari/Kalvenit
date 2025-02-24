"use client";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaPlus } from "react-icons/fa";
import Servicespageimg from "../../../components/Servicespageimg/Servicespageimg";
import { motion } from "framer-motion";

export default function CaseStudy() {
    const [activeSection, setActiveSection] = useState("overview");




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

    const handleClick = (id: string) => {
        setActiveSection(id);

        // Ensure the element exists before calling scrollIntoView
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            console.error(`Element with id "${id}" not found.`);
        }
    };

    return (
        <div>
            <Servicespageimg imgSrc={"/assets/servicepage1.jpg"} text="Drive Operational Excellence, Innovation and Transformation." />
            <div className="bg-gray-100 min-h-screen">
                <nav className="bg-blue-900 text-white flex justify-around py-4 text-sm font-semibold">
                    {['overview', 'challenge', 'solution', 'impact'].map((section) => (
                        <button
                            key={section}
                            onClick={() => handleClick(section)}
                            disabled={activeSection === section} // Disable button if it's the active section
                            className={`px-4 py-2 rounded transition-all duration-300 
                ${activeSection === section ? "bg-yellow-500 text-black cursor-not-allowed" : "hover:bg-yellow-500"}`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </nav>


                {/* Overview Section */}
                <section
                    id="overview"
                    className="p-8 flex justify-center"
                >
                    <div className="border border-blue-500 p-4 rounded-lg max-w-3xl text-center">
                        <p className="text-blue-900 font-semibold">
                            Headquartered in Europe, the client is a world leader in the dairy farming industry.
                        </p>
                    </div>
                </section>

                {/* Challenge Section */}
                <section
                    id="challenge"
                    className="p-8 bg-white"
                >
                    <h2 className="text-3xl font-bold text-black">The Challenge</h2>
                    <p className="mt-4 font-bold text-lg text-gray-700">
                        The dairy equipment needed servicing at regular intervals and due to their remote location & lack of prior information, they consumed time and cost.
                    </p>
                    <p className="mt-4 text-gray-700">The client needed to service the dairy equipment on the farms at a regular interval which needed physical visits by their engineers. Due to the remote location & limited connectivity of the farms, multiple visits were required for the servicing and it led to reduced productivity & increased cost.</p>
                </section>


                {/* Solution Section */}
                <section id="solution" className="p-8 flex flex-col items-center bg-white">
                    <h2 className="text-3xl font-bold text-black mb-4">Our Solution</h2>
                    <motion.img
                        src="/assets/milkyway.jpg"
                        alt="Business Impact"
                        className="w-full h-auto lg:h-[700px] object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeSection === "solution" ? 1 : 7 }}
                        transition={{ duration: 0.5 }}
                    />
                </section>


                {/* Business Impact Section */}
                <motion.section
                    id="impact"
                    className="p-8 flex flex-col justify-center items-center bg-gray-100 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: activeSection === "impact" ? 1 : 7, scale: activeSection === "impact" ? 1 : 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-black">Business Impact</h2>
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
                </motion.section>

                {/* Footer with Social Icons */}
                <div className="bg-gray-100 px-6 py-4 flex justify-between items-center border-t border-gray-300">
                    <div className="text-gray-700 font-semibold text-sm">Categories: <a href="#" className="text-blue-600 hover:underline">AWS</a> <a href="#" className="text-blue-600 hover:underline">Cloud</a></div>
                    <div className="flex space-x-3">
                        {[FaLinkedin, FaFacebook, FaTwitter, FaPlus].map((Icon, index) => (
                            <a key={index} href="#" className="bg-blue-600 text-white p-2 rounded">
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
