"use client";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaPlus } from "react-icons/fa";
import Servicespageimg from "../../../components/Servicespageimg/Servicespageimg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Solutionstrending from "../../../components/Solutionstrending/Solutionstrending"

const caseStudies = {

  "equipment-manufacturer": {
    "title": "Equipment Manufacturer Improves Operational Efficiency",
    "imgSrc": "/assets/solutionstrending1.png",
    "overview": "A leading equipment manufacturer leveraged technology to streamline processes and enhance productivity.",
    "challenge": "The company faced inefficiencies in their operations due to outdated processes and manual workflows.",
    "challengepara": "Despite various efforts, the operational inefficiencies led to increased costs, delays, and reduced overall efficiency.",
    "impact": [
        { "title": "Optimized Workflows", "description": "by automating key operational tasks" },
        { "title": "Increased Productivity", "description": "through enhanced system integration and process improvements" },
        { "title": "Reduced Operational Costs", "description": "by minimizing manual intervention and inefficiencies" }
    ],
    "categories": [
        { "name": "Manufacturing", "link": "/solutions/trending/equipment-manufacturer" },
        { "name": "Automation", "link": "/solutions/trending/automation" }
    ]
  },

  "rpa-financial-dispute": {
    "title": "RPA Utilization Helps in Accelerated Financial Dispute Resolution",
    "imgSrc": "/assets/solutionstrending2.png",
    "overview": "A financial institution leveraged RPA to streamline dispute resolution and improve efficiency.",
    "challenge": "Manual processing of financial disputes resulted in delays, errors, and increased workload for employees.",
    "challengepara": "The organization struggled with handling high volumes of disputes, leading to customer dissatisfaction and regulatory challenges.",
    "impact": [
        { "title": "Faster Dispute Resolution", "description": "by automating repetitive tasks and data processing" },
        { "title": "Improved Accuracy", "description": "through intelligent automation reducing human errors" },
        { "title": "Enhanced Customer Satisfaction", "description": "by providing quicker resolutions and improved service" }
    ],
    "categories": [
        { "name": "Finance", "link": "/solutions/trending/rpa-financial-dispute" },
        { "name": "Automation", "link": "/solutions/trending/automation" }
    ]
  },

  "rpa-intelligent-automation": {
    "title": "Robotic Process Automation/Intelligent Automation Enhances Efficiency",
    "imgSrc": "/assets/solutionstrending3.png",
    "overview": "Organizations across industries are leveraging RPA to optimize processes and drive efficiency.",
    "challenge": "Manual processes and lack of automation led to inefficiencies and reduced scalability.",
    "challengepara": "The company faced challenges in handling high workloads, requiring automation to improve speed and accuracy.",
    "impact": [
        { "title": "Increased Efficiency", "description": "by automating repetitive processes across departments" },
        { "title": "Cost Savings", "description": "through reduced manual intervention and optimized resource allocation" },
        { "title": "Scalability", "description": "allowing businesses to expand operations seamlessly" }
    ],
    "categories": [
        { "name": "Technology", "link": "/solutions/trending/rpa-intelligent-automation" },
        { "name": "Automation", "link": "/solutions/trending/automation" }
    ]
  },

  "ecommerce-development": {
    "title": "e-Commerce Development for Scalable Online Business Growth",
    "imgSrc": "/assets/solutionstrending4.png",
    "overview": "Transforming retail businesses with innovative e-commerce solutions for seamless shopping experiences.",
    "challenge": "Businesses struggle with outdated platforms, poor user experience, and inefficiencies in online transactions.",
    "challengepara": "Without a scalable and secure e-commerce platform, companies face issues with performance, payment processing, and customer engagement.",
    "impact": [
        { "title": "Enhanced User Experience", "description": "through intuitive design and seamless navigation" },
        { "title": "Secure and Scalable Platform", "description": "with advanced payment processing and security features" },
        { "title": "Improved Conversion Rates", "description": "by optimizing checkout flows and boosting performance" }
    ],
    "categories": [
        { "name": "E-Commerce", "link": "/solutions/trending/ecommerce-development" },
        { "name": "Retail", "link": "/solutions/trending/retail-solutions" }
    ]
  },
  "healthcare-telemedicine": {
    "title": "Advanced Healthcare and Telemedicine Solutions",
    "imgSrc": "/assets/solutionstrending5.png",
    "overview": "Empowering healthcare providers with digital solutions for remote patient care and telehealth services.",
    "challenge": "Limited access to medical professionals and inefficient healthcare management hinder patient care.",
    "challengepara": "Healthcare organizations need secure, compliant, and user-friendly telemedicine platforms to provide better services remotely.",
    "impact": [
        { "title": "Improved Patient Access", "description": "by enabling remote consultations and medical support" },
        { "title": "Efficient Healthcare Management", "description": "through integrated digital records and appointment scheduling" },
        { "title": "Compliance and Security", "description": "ensuring HIPAA-compliant solutions for patient data protection" }
    ],
    "categories": [
        { "name": "Healthcare", "link": "/solutions/trending/healthcare-telemedicine" },
        { "name": "Telemedicine", "link": "/solutions/trending/telehealth" }
    ]
  },
  "taxi-booking-app": {
    "title": "Taxi Booking App Development Solution",
    "imgSrc": "/assets/solutionstrending6.png",
    "overview": "A smart, user-friendly taxi booking solution for seamless ride-hailing experiences.",
    "challenge": "Traditional taxi services struggle with inefficiencies, high wait times, and lack of digital booking options.",
    "challengepara": "The absence of a real-time tracking and automated dispatch system results in customer dissatisfaction and operational delays.",
    "impact": [
        { "title": "Real-Time Booking & Tracking", "description": "enabling users to book and track rides instantly" },
        { "title": "Optimized Driver Management", "description": "through automated ride allocation and fare calculations" },
        { "title": "Enhanced User Satisfaction", "description": "by providing seamless and convenient ride experiences" }
    ],
    "categories": [
        { "name": "Mobility", "link": "/solutions/trending/taxi-booking-app" },
        { "name": "Transportation", "link": "/solutions/trending/transport-solutions" }
    ]
  },
  "kalven-automation": {
    "title": "KALVEN Intelligent Automation Services",
    "imgSrc": "/assets/solutionstrending7.png",
    "overview": "Revolutionizing businesses with intelligent automation and AI-powered solutions.",
    "challenge": "Organizations struggle with manual, repetitive tasks that reduce efficiency and increase operational costs.",
    "challengepara": "Without automation, businesses face delays, errors, and inefficiencies in critical workflows and decision-making.",
    "impact": [
        { "title": "Process Optimization", "description": "by automating repetitive and rule-based tasks" },
        { "title": "Cost Reduction", "description": "through improved operational efficiency and minimized errors" },
        { "title": "Scalability & Innovation", "description": "by integrating AI-driven automation for enhanced decision-making" }
    ],
    "categories": [
        { "name": "Automation", "link": "/solutions/trending/kalven-automation" },
        { "name": "AI & ML", "link": "/solutions/trending/artificial-intelligence" }
    ]
  }

}


export default function CaseStudy() {
    const { slug } = useParams(); // Get the slug from the URL
    const [activeSection, setActiveSection] = useState("overview");
    const caseStudy = caseStudies[slug as keyof typeof caseStudies] || caseStudies["equipment-manufacturer"]; // Default to Milkyway if slug not found

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
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <div>
            <Servicespageimg imgSrc={caseStudy.imgSrc} text={caseStudy.title} />
            <div className="bg-gray-100 relative min-h-screen">
                <nav className="bg-purple-600 sticky top-[72px]  text-white flex justify-around py-4 text-sm font-semibold">
                    {["overview", "challenge", "solution", "impact"].map((section) => (
                        <button
                            key={section}
                            onClick={() => handleClick(section)}
                            disabled={activeSection === section}
                            className={`px-4 py-2 rounded transition-all duration-300 
                                ${activeSection === section ? "bg-yellow-500 text-black cursor-not-allowed" : "hover:bg-yellow-500"}`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </nav>

                {/* Overview Section */}
                <section id="overview" className="p-8 flex justify-center">
                    <div className="border border-blue-500 p-4 rounded-lg max-w-3xl text-center">
                        <p className="text-blue-900 font-semibold">{caseStudy.overview}</p>
                    </div>
                </section>

                {/* Challenge Section */}
                <section id="challenge" className="p-8 bg-white">
                    <h2 className="text-3xl font-bold text-black">The Challenge</h2>
                    <p className="mt-4 font-bold text-lg text-gray-700">{caseStudy.challenge}</p>
                    <p className="mt-4  text-lg text-gray-700">{caseStudy.challengepara}</p>
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
                    <div className="flex flex-col justify-center gap-6 lg:flex-row mt-6">
                        {caseStudy.impact.map((item, index) => (
                            <div key={index} className="border-l-4 border-blue-600 bg-white p-4 max-w-sm">
                                <h3 className="font-bold">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Footer with Social Icons */}
                <div className="bg-gray-100 px-6 py-4 flex justify-between items-center border-t border-gray-300">
                    <div className="text-gray-700 font-semibold text-sm">
                        Categories:
                        {caseStudy.categories.map((category, index) => (
                            <Link key={index} href={category.link} className="text-blue-600 hover:underline ml-2">
                                {category.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex space-x-3">
                        <Link href="https://www.linkedin.com/" target="_blank" className="bg-blue-600 text-white p-2 rounded">
                            <FaLinkedin size={16} />
                        </Link>
                        <Link href="https://www.facebook.com/" target="_blank" className="bg-blue-600 text-white p-2 rounded">
                            <FaFacebook size={16} />
                        </Link>
                        <Link href="https://twitter.com/" target="_blank" className="bg-blue-600 text-white p-2 rounded">
                            <FaTwitter size={16} />
                        </Link>
                        <Link href="#" className="bg-blue-600 text-white p-2 rounded">
                            <FaPlus size={16} />
                        </Link>
                    </div>
                </div>
            </div>
            <Solutionstrending></Solutionstrending>
        </div>
    );
}
