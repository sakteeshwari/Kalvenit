"use client";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaPlus } from "react-icons/fa";
import Servicespageimg from "../../../components/Servicespageimg/Servicespageimg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Coestrending from "../../../components/Coespagetrending/Coespagetrending"

const caseStudies = {

   "oracle": {
    "title": "Fixing the Root Cause of Recurring Issues in KALVEN Oracle",
    "imgSrc": "/assets/coestrending1.png",
    "overview": "A global enterprise faced persistent operational disruptions due to unresolved issues in their Oracle-based system.",
    "challenge": "The client's Oracle system frequently encountered errors that led to downtime, affecting business operations and reducing efficiency.",
    "challengepara": "Despite multiple patches and temporary fixes, the root cause of the issue remained unresolved. The recurring disruptions impacted workflow, causing delays in critical business processes and increasing maintenance costs.",
   
    "impact": [
        { "title": "Enhanced System Stability", "description": "by identifying and addressing the root cause of recurring issues" },
        { "title": "Reduced Downtime", "description": "leading to improved operational efficiency and seamless workflows" },
        { "title": "Lower Maintenance Costs", "description": "by eliminating the need for frequent temporary fixes" }
    ],
    "categories": [
        { "name": "Oracle", "link": "/coes/oracle" },
        { "name": "SAP Solutions", "link": "/coes/sap/sap-solutions" }
    ]
},
    "manufacturer": {
    "title": "Enhancing Operational Efficiency for Equipment Manufacturers",
    "imgSrc": "/assets/coestrending2.png",
    "overview": "A leading equipment manufacturer streamlined its production and maintenance processes to improve operational efficiency.",
    "challenge": "The company faced frequent machine downtimes and inefficient workflows, leading to production delays and increased costs.",
    "challengepara": "Due to legacy systems and lack of predictive maintenance, the manufacturer struggled with unexpected equipment failures, impacting productivity and revenue.",
   
    "impact": [
        { "title": "Optimized Production", "description": "by implementing real-time monitoring and predictive analytics" },
        { "title": "Reduced Downtime", "description": "through proactive maintenance and automated issue resolution" },
        { "title": "Cost Savings", "description": "with enhanced efficiency and resource allocation" }
    ],
    "categories": [
        { "name": "Manufacturing", "link": "/coes/aws" },
        { "name": "Automation", "link": "/services/digitalization/ai-automation" }
    ]
},
"innovation": {
    "title": "Driving Innovation in the Pharma Industry with E-Technology",
    "imgSrc": "/assets/coestrending3.png",
    "overview": "A major pharmaceutical company leveraged digital solutions to enhance research and drug development.",
    "challenge": "The company faced long development cycles and regulatory hurdles, delaying the launch of new medicines.",
    "challengepara": "Limited integration of digital technologies resulted in slower research processes and higher compliance costs.",
    
    "impact": [
        { "title": "Faster Drug Development", "description": "with AI-powered analysis and digital collaboration" },
        { "title": "Improved Compliance", "description": "through automated documentation and regulatory tracking" },
        { "title": "Cost Reduction", "description": "by optimizing research workflows and data management" }
    ],
    "categories": [
        { "name": "Mulesoft", "link": "/coes/salesforce/mulesoft" },
        { "name": "Support", "link": "/coes/salesforce/salesforce-support" }
    ]
},
"mobility": {
    "title": "Accelerating Time to Market with KALVEN Mobility Solutions",
    "imgSrc": "/assets/coestrending4.png",
    "overview": "A global enterprise adopted KALVEN’s mobility solutions to streamline operations and enhance agility.",
    "challenge": "Slow deployment of mobile applications led to operational bottlenecks and customer dissatisfaction.",
    "challengepara": "The company struggled to integrate mobility solutions with its existing IT infrastructure, delaying innovation and market responsiveness.",
    
    "impact": [
        { "title": "Faster Market Reach", "description": "through seamless mobile application deployment" },
        { "title": "Improved Customer Experience", "description": "with real-time mobile accessibility" },
        { "title": "Increased Productivity", "description": "by enabling remote work and automation" }
    ],
    "categories": [
        { "name": "Mobility", "link": "/coes/mobility" },
        { "name": "Codiant", "link": "/coes/mobility/codiant" }
    ]
},
"rpa": {
    "title": "Accelerating Financial Dispute Resolution with RPA",
    "imgSrc": "/assets/coestrending5.png",
    "overview": "A financial institution leveraged Robotic Process Automation (RPA) to speed up dispute handling.",
    "challenge": "Manual processes led to slow dispute resolution, increased errors, and customer dissatisfaction.",
    "challengepara": "Due to high volumes of transactions, human intervention in resolving disputes caused backlogs and inefficiencies.",
    
    "impact": [
        { "title": "Faster Dispute Resolution", "description": "with automated case processing and validation" },
        { "title": "Error Reduction", "description": "by eliminating manual data entry and verification" },
        { "title": "Operational Efficiency", "description": "with streamlined workflows and reduced workload" }
    ],
    "categories": [
        { "name": "RPA", "link": "/coes/rpa" },
        { "name": "GCP", "link": "/coes/gcp" }
    ]
},
"robotic": {
    "title": "Transforming Business with Robotic Process Automation",
    "imgSrc": "/assets/coestrending6.png",
    "overview": "Enterprises adopted Intelligent Automation to optimize business workflows and reduce manual effort.",
    "challenge": "Repetitive tasks and manual processing slowed down operations and increased costs.",
    "challengepara": "Businesses struggled to scale due to reliance on human-driven processes, causing delays and inefficiencies.",
    
    "impact": [
        { "title": "Increased Efficiency", "description": "with end-to-end process automation" },
        { "title": "Cost Reduction", "description": "by minimizing manual intervention and errors" },
        { "title": "Scalability", "description": "through AI-driven decision-making" }
    ],
    "categories": [
        { "name": "Automation", "link": "/coes/microsoft/data-ai" },
        { "name": "Workplace", "link": "/coes/microsoft/modern-workplace" }
    ]
},
"investment": {
    "title": "Maximizing Your Oracle Investment with KALVEN",
    "imgSrc": "/assets/coestrending7.png",
    "overview": "Enterprises optimized their Oracle infrastructure for better performance and cost efficiency.",
    "challenge": "Underutilized Oracle resources led to high costs and inefficiencies.",
    "challengepara": "Lack of proper Oracle strategy resulted in excess licensing fees and poor system performance.",
    
    "impact": [
        { "title": "Cost Savings", "description": "through optimized licensing and resource allocation" },
        { "title": "Enhanced Performance", "description": "with strategic Oracle utilization" },
        { "title": "Long-term Value", "description": "by aligning Oracle solutions with business needs" }
    ],
    "categories": [
        { "name": "Oracle", "link": "/coes/oracle" },
        { "name": "AWS Lambda", "link": "/coes/aws/aws-lambda" }
    ]
},
"intelligence": {
    "title": "Unlocking Business Potential with KALVEN Intelligent Automation",
    "imgSrc": "/assets/coestrending8.png",
    "overview": "Companies improved decision-making and operational efficiency using AI-powered automation.",
    "challenge": "Manual processes slowed down workflows and limited data-driven insights.",
    "challengepara": "Without AI integration, businesses faced inefficiencies in process execution and lacked predictive analytics capabilities.",
   
    "impact": [
        { "title": "Smarter Decision Making", "description": "with AI-driven insights" },
        { "title": "Process Optimization", "description": "through automation and predictive analytics" },
        { "title": "Increased Productivity", "description": "with reduced manual effort" }
    ],
    "categories": [
        { "name": "AI", "link": "/coes/servicenow/intelligent-app-dev" },
        { "name": "Automation", "link": "/services/digitalization/ai-automation" }
    ]
},
"computing": {
    "title": "Seamless Enterprise Computing Anytime, Anywhere",
    "imgSrc": "/assets/coestrending9.png",
    "overview": "Organizations adopted cloud computing to enable flexible and scalable IT operations.",
    "challenge": "On-premise infrastructure limited remote access and scalability.",
    "challengepara": "Businesses needed a cost-effective, secure, and scalable computing solution for global operations.",
    
    "impact": [
        { "title": "Improved Accessibility", "description": "with cloud-based solutions" },
        { "title": "Scalability", "description": "through flexible infrastructure" },
        { "title": "Cost Efficiency", "description": "by reducing hardware dependencies" }
    ],
    "categories": [
        { "name": "Cloud", "link": "/services/cloud-infrastructure" },
        { "name": "Tricentis", "link": "/coes/tricentis" }
    ]
},
"ai": {
    "title": "KALVEN Artificial Intelligence & Machine Learning Services",
    "imgSrc": "/assets/coestrending10.png",
    "overview": "Empowering businesses with cutting-edge AI and ML solutions to drive innovation and efficiency.",
    "challenge": "Organizations faced challenges in processing large datasets, making data-driven decisions, and automating complex tasks.",
    "challengepara": "Without AI and ML integration, businesses struggled with data silos, inefficient workflows, and limited predictive insights, impacting competitiveness.",
    
    "impact": [
        { "title": "Enhanced Decision-Making", "description": "with AI-driven insights and analytics" },
        { "title": "Automation of Complex Processes", "description": "to improve operational efficiency and reduce human effort" },
        { "title": "Scalability and Innovation", "description": "by leveraging machine learning for adaptive solutions" }
    ],
    "categories": [
        { "name": "Artificial Intelligence", "link": "/services/digitalization/ai-automation" },
        { "name": "IOT", "link": "/services/digitalization/iot" }
    ]
},
"risky": {
    "title": "Preserving Oracle Forms Investments and Avoiding Risks",
    "imgSrc": "/assets/coestrending11.png",
    "overview": "Organizations sought strategies to maintain Oracle Forms applications while reducing risks and modernization costs.",
    "challenge": "Businesses faced risks of outdated Oracle Forms applications, including security vulnerabilities, high maintenance costs, and lack of scalability.",
    "challengepara": "Migrating or modernizing Oracle Forms posed challenges such as compatibility issues, data integrity risks, and increased operational costs.",
    
    "impact": [
        { "title": "Risk Mitigation", "description": "by implementing secure and optimized Oracle Forms solutions" },
        { "title": "Cost Reduction", "description": "through efficient modernization strategies" },
        { "title": "Enhanced Application Performance", "description": "with upgraded and future-proofed Oracle Forms" }
    ],
    "categories": [
        { "name": "Vendor Risk", "link": "/coes/servicenow/vendor-risk" },
        { "name": "Legacy Service", "link": "/coes/servicenow/legal-service" }
    ]
}


}


export default function CaseStudy() {
    const { slug } = useParams(); // Get the slug from the URL
    const [activeSection, setActiveSection] = useState("overview");
    const caseStudy = caseStudies[slug as keyof typeof caseStudies] || caseStudies.oracle; // Default to Milkyway if slug not found

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
            <Coestrending></Coestrending>
        </div>
    );
}
