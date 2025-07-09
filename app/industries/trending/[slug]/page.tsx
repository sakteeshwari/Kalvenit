"use client";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaPlus } from "react-icons/fa";
import Servicespageimg from "../../../components/Servicespageimg/Servicespageimg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Industriestrending from "../../../components/Industriestrending/Industriestrending"

const caseStudies = {

    "servicenow-optimization": {
        title: "KALVEN Optimizes ServiceNow Application Landscape for a Major Client",
        imgSrc: "/assets/industriestrending1.png",
        overview: "KALVEN streamlined the ServiceNow application landscape to improve efficiency and reduce operational costs.",
        challenge: "The client faced integration issues and performance bottlenecks in their ServiceNow environment.",
        challengepara: "Existing workflows were slow and inefficient, leading to delays in service delivery and increased maintenance costs.",
        impact: [
          { title: "Enhanced Efficiency", description: "by optimizing ServiceNow processes" },
          { title: "Improved Integration", description: "seamless connectivity across platforms" },
          { title: "Reduced Costs", description: "by eliminating redundant processes" }
        ],
        categories: [
          { name: "IT Services", link: "/industries/trending/servicenow-optimization" },
          { name: "Automation", link: "/industries/trending/automation" }
        ]
      },
      "sustainable-it-education": {
        title: "Leading Higher Education Entity Deploys Sustainable IT Model",
        imgSrc: "/assets/industriestrending2.png",
        overview: "A top education institution embraced sustainable IT practices to enhance efficiency and reduce environmental impact.",
        challenge: "The university faced high IT infrastructure costs and unsustainable energy consumption.",
        challengepara: "Traditional IT systems led to excessive energy use, high operational costs, and an increasing carbon footprint.",
        impact: [
          { title: "Energy Efficiency", description: "by implementing eco-friendly IT solutions" },
          { title: "Cost Reduction", description: "through optimized resource allocation" },
          { title: "Sustainable Growth", description: "with long-term IT efficiency strategies" }
        ],
        categories: [
          { name: "Education", link: "/industries/trending/sustainable-it-education" },
          { name: "Sustainability", link: "/industries/trending/sustainability" }
        ]
      },
      "hospital-emr-automation": {
        title: "Lebanon-based Hospital Goes Tech-Savvy; Automates EMR",
        imgSrc: "/assets/industriestrending3.png",
        overview: "A leading hospital in Lebanon adopted digital transformation by automating its Electronic Medical Records (EMR) system.",
        challenge: "The hospital relied on outdated manual record-keeping, leading to inefficiencies in patient care.",
        challengepara: "Manual processes resulted in slow retrieval times, data inaccuracy, and compliance challenges.",
        impact: [
          { title: "Streamlined Patient Records", description: "with automated EMR solutions" },
          { title: "Improved Healthcare Delivery", description: "through real-time access to patient data" },
          { title: "Regulatory Compliance", description: "by ensuring accurate and secure records" }
        ],
        categories: [
          { name: "Healthcare", link: "/industries/trending/hospital-emr-automation" },
          { name: "Digital Transformation", link: "/industries/trending/digital-transformation" }
        ]
      },
      "digital-partner-food-dairy": {
        title: "KALVEN as a 'Digital Partner' for Food Processing and Dairy",
        imgSrc: "/assets/industriestrending4.png",
        overview: "KALVEN collaborated with food processing and dairy businesses to implement advanced digital solutions.",
        challenge: "The industry faced operational bottlenecks due to outdated production management systems.",
        challengepara: "Legacy systems and manual tracking led to inefficiencies in production, quality control, and supply chain management.",
        impact: [
          { title: "Optimized Supply Chain", description: "through digital tracking and automation" },
          { title: "Enhanced Quality Control", description: "with real-time monitoring solutions" },
          { title: "Improved Efficiency", description: "by reducing manual errors and waste" }
        ],
        categories: [
          { name: "Food & Beverage", link: "/industries/trending/digital-partner-food-dairy" },
          { name: "Automation", link: "/industries/trending/automation" }
        ]
      },

      "education-industry-value": {
    title: "How KALVEN Delivers Value to the Education Industry",
    imgSrc: "/assets/industriestrending5.png",
    overview: "KALVEN enhances digital learning and operational efficiency in the education industry through innovative technology solutions.",
    challenge: "Educational institutions struggle with outdated IT infrastructure and inefficient digital learning tools.",
    challengepara: "The lack of integrated digital platforms resulted in slow administrative processes and ineffective student engagement.",
    impact: [
      { title: "Enhanced Learning Experience", description: "through digital transformation initiatives" },
      { title: "Improved Administrative Efficiency", description: "by automating workflows" },
      { title: "Cost Optimization", description: "through scalable cloud-based solutions" }
    ],
    categories: [
      { name: "Education", link: "/industries/trending/education-industry-value" },
      { name: "Digital Transformation", link: "/industries/trending/digital-transformation" }
    ]
  },
  "rethink-education-post-covid": {
    title: "Rethink Higher Education in a World After Covid-19",
    imgSrc: "/assets/industriestrending6.png",
    overview: "Post-pandemic education demands a new approach, integrating hybrid learning models and digital accessibility.",
    challenge: "The pandemic forced institutions to shift rapidly to online learning, causing operational and engagement challenges.",
    challengepara: "Many institutions struggled with inadequate infrastructure, leading to poor student participation and retention rates.",
    impact: [
      { title: "Hybrid Learning Models", description: "that blend online and offline education seamlessly" },
      { title: "Improved Student Engagement", description: "through interactive and adaptive learning platforms" },
      { title: "Scalable Digital Infrastructure", description: "to support remote and in-person education" }
    ],
    categories: [
      { name: "Education", link: "/industries/trending/rethink-education-post-covid" },
      { name: "Hybrid Learning", link: "/industries/trending/hybrid-learning" }
    ]
  },
  "digital-learning-upskill": {
    title: "Digital Learning - A New Normal Way to Up-Skill",
    imgSrc: "/assets/industriestrending7.png",
    overview: "The future of education is digital, enabling professionals and students to upskill with flexible learning solutions.",
    challenge: "Traditional education models fail to keep up with the fast-paced demand for new skills in a digital world.",
    challengepara: "Rigid curriculums and outdated methods limit accessibility and effectiveness of modern education.",
    impact: [
      { title: "Personalized Learning Paths", description: "using AI-driven course recommendations" },
      { title: "Flexible Learning", description: "through on-demand and interactive digital courses" },
      { title: "Career Readiness", description: "by providing industry-relevant skill development" }
    ],
    categories: [
      { name: "Education", link: "/industries/trending/digital-learning-upskill" },
      { name: "E-Learning", link: "/industries/trending/e-learning" }
    ]
  },
  "pharma-sumtotal": {
    title: "Why 7 of 12 Largest Pharmaceutical Companies Use SumTotal",
    imgSrc: "/assets/industriestrending8.png",
    overview: "The pharmaceutical industry leverages SumTotal for efficient workforce management and regulatory compliance.",
    challenge: "Pharmaceutical firms struggle with managing large-scale training programs and compliance tracking.",
    challengepara: "Manual training systems lead to inefficiencies, compliance risks, and workforce skill gaps.",
    impact: [
      { title: "Automated Compliance Training", description: "ensuring regulatory adherence across teams" },
      { title: "Efficient Workforce Management", description: "with AI-driven analytics and insights" },
      { title: "Scalable Learning Solutions", description: "to support global pharmaceutical enterprises" }
    ],
    categories: [
      { name: "Pharmaceuticals", link: "/industries/trending/pharma-sumtotal" },
      { name: "Workforce Management", link: "/industries/trending/workforce-management" }
    ]
  }
}


export default function CaseStudy() {
    const { slug } = useParams(); // Get the slug from the URL
    const [activeSection, setActiveSection] = useState("overview");
    const caseStudy = caseStudies[slug as keyof typeof caseStudies] || caseStudies["servicenow-optimization"]; // Default to Milkyway if slug not found

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
                <nav className="bg-purple-600 z-20 sticky top-[72px]  text-white flex justify-around py-4 text-sm font-semibold">
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
            <Industriestrending></Industriestrending>
        </div>
    );
}
