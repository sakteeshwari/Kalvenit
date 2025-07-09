"use client";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaPlus } from "react-icons/fa";
import Servicespageimg from "../../../components/Servicespageimg/Servicespageimg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Servicestrending from "../../../components/Servicestrending/Servicestrending"

const caseStudies = {
    "milkyway": {
        title: "Success Story - Increased Cost-Effectiveness with AWS Lambda",
        imgSrc: "/assets/servicestrending1.png",
        overview: "Headquartered in Europe, the client is a world leader in the dairy farming industry.",
        challenge: "The dairy equipment needed servicing at regular intervals, but due to their remote location & lack of prior information, it consumed time and cost.",
        challengepara: "The client needed to service the dairy equipment on the farms at a regular interval which needed physical visits by their engineers. Due to the remote location & limited connectivity of the farms, multiple visits were required for the servicing and it led to reduced productivity & increased cost.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Increased operational efficiency", description: "with in-depth and near-real-time visibility" },
            { title: "Achieved the balance", description: "between optimum costs and quality deliverables" },
            { title: "Increased cost-effectiveness", description: "with prior information on equipment" },
        ],
        categories: [
            { name: "AWS", link: "/coes/aws" },
            { name: "Cloud", link: "/services/cloud-infrastructure" },
        ],
    },
    "powersport-modern": {
        title: "Major Powersport - Enhancing Business Operations with AI",
        imgSrc: "/assets/servicestrending2.png",
        overview: "Headquartered The United States, the client is a Construction, Resource Industries, and Energy & Transportation behemoth with operations across 180+ countries.",
        challenge: "With vast operations of 500+ servicing and manufacturing locations globally, the client was looking to create a consolidated PDI scoring mechanism that would be easily managed and improve collaboration.",
        challengepara: "Given that the client’s existing scoring tool was not effectively managed, there was a lack of an organized, common repository of information or an effective way of tracking existing control measures. The client was also facing the lack of a common communication channel to conduct discussions, brainstorming sessions or knowledge transfers. Furthermore, the existing PDI tool has no web-based access to ease access to information.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Optimized inventory management", description: "through AI-based demand forecasting" },
            { title: "Reduced downtime", description: "with predictive maintenance" },
            { title: "Enhanced customer engagement", description: "using AI-driven analytics" },
        ],
        categories: [
            { name: "AI & ML", link: "/coes/microsoft/ai" },
            { name: "Predictive Analytics", link: "/services/predictive-analytics" },
        ],
    },


    "customer-relationship": {
        title: "Long-Term Customer Relationship Management",
        imgSrc: "/assets/customerservices.png",
        overview: "Building strong and lasting customer relationships through strategic CRM solutions.",
        challenge: "Maintaining long-term engagement and satisfaction of customers in a competitive market.",
        challengepara: "Companies often face difficulty in retaining customers due to evolving expectations and a lack of personalized engagement strategies.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Improved customer retention", description: "through personalized engagement" },
            { title: "Enhanced loyalty programs", description: "that increase repeat business" },
            { title: "Data-driven customer insights", description: "for better service offerings" },
        ],
        categories: [
            { name: "CRM", link: "/services/customer-ecosystem/crm" },
            { name: "Customer Experience", link: "/services/customer-ecosystem/customer-experience" },
        ],
    },

    "digital-consulting": {
        title: "Digital Consulting & Advisory for the Future",
        imgSrc: "/assets/digitalservices.jpg",
        overview: "Providing strategic digital consulting to help businesses transform and innovate.",
        challenge: "Organizations face challenges in adopting digital transformation effectively.",
        challengepara: "Many businesses struggle with aligning digital strategies with their operational goals, leading to inefficiencies and missed opportunities.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Enhanced digital strategy", description: "aligning technology with business goals" },
            { title: "Improved operational efficiency", description: "through digital transformation" },
            { title: "Innovative business models", description: "leveraging emerging technologies" },
        ],
        categories: [
            { name: "Digital Strategy", link: "/services/customer-ecosystem/digital-marketing" },
            { name: "Kalven", link: "/services/cloud-infrastructure/Kalven-amuraa" },
        ],
    },

    "driving-change": {
        title: "Are You Driving the Change or Being Driven by It?",
        imgSrc: "/assets/drivingservices.png",
        overview: "Helping businesses adapt to rapid technological and market changes.",
        challenge: "Organizations struggle to keep up with the fast pace of digital transformation.",
        challengepara: "Businesses often react to change rather than proactively driving transformation, leading to inefficiencies and missed opportunities.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Proactive change management", description: "empowering businesses to lead transformations" },
            { title: "Agility in business operations", description: "through strategic planning" },
            { title: "Competitive edge", description: "by embracing technological advancements" },
        ],
        categories: [
            { name: "Management", link: "/services/gccs/application-management" },
            { name: "Business Transformation", link: "/services/cloud-infrastructure/intelligent-business" },
        ],
    },
    "intelligent-automation": {
        title: "Kalven Intelligent Automation Services",
        imgSrc: "/assets/automationservices.png",
        overview: "Leveraging automation to enhance operational efficiency and reduce manual efforts.",
        challenge: "Businesses struggle with repetitive tasks and lack of process optimization.",
        challengepara: "Many organizations rely on manual processes, leading to inefficiencies and higher operational costs.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Increased efficiency", description: "by automating routine processes" },
            { title: "Reduced errors", description: "through AI-driven automation" },
            { title: "Enhanced scalability", description: "with intelligent workflow optimization" },
        ],
        categories: [
            { name: "Automation", link: "/services/digitalization/ai-automation" },
            { name: "AI & ML", link: "/services/digitalization/ar-vr-mr" },
        ],
    },
    "cloud-migration": {
        title: "Get 'Future-Ready' - Migrate to the Cloud with Kalven",
        imgSrc: "/assets/futureservices.png",
        overview: "Helping enterprises transition seamlessly to cloud environments.",
        challenge: "Legacy systems create scalability and performance challenges.",
        challengepara: "Businesses often struggle with migrating data and applications to the cloud without disruptions.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Seamless cloud adoption", description: "reducing downtime and migration risks" },
            { title: "Improved scalability", description: "by leveraging cloud infrastructure" },
            { title: "Cost optimization", description: "through efficient cloud resource management" },
        ],
        categories: [
            { name: "Cloud Services", link: "/services/modernization/cloud-transformation" },
            { name: "Migration", link: "/services/modernization/application-migration" },
        ],
    },
    "data-integration": {
        title: "Data Integration and Migration Services @ Kalven",
        imgSrc: "/assets/dataintegrationservices.png",
        overview: "Streamlining data migration and integration across platforms.",
        challenge: "Managing and consolidating data from multiple sources efficiently.",
        challengepara: "Enterprises face difficulties in ensuring seamless data transfer and integration while maintaining data integrity.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Enhanced data accessibility", description: "by unifying data sources" },
            { title: "Improved data security", description: "with robust encryption and compliance measures" },
            { title: "Seamless data migration", description: "reducing downtime and data loss" },
        ],
        categories: [
            { name: "Data Management", link: "/services/digitalization/data-analytics" },
            { name: "Integration", link: "/services/intelligence/api-integration" },
        ],
    },
    "ai-ml": {
        title: "KALVEN Artificial Intelligence & Machine Learning Services",
        imgSrc: "/assets/aiservices.png",
        overview: "Empowering businesses with AI-driven insights and automation.",
        challenge: "Organizations struggle to implement AI effectively to drive value.",
        challengepara: "Many businesses lack the expertise and infrastructure to harness AI & ML for meaningful insights and automation.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Smarter decision-making", description: "using AI-driven analytics" },
            { title: "Enhanced automation", description: "through machine learning models" },
            { title: "Personalized user experiences", description: "leveraging AI-powered recommendations" },
        ],
        categories: [
            { name: "Artificial Intelligence", link: "/services/digitalization/ai-automation" },
            { name: "Machine Learning", link: "/services/intelligence/cognitive-3d" },
        ],
    },


    "microsoft-crm": {
        title: "Create a Dynamic Business with Microsoft Dynamic CRM",
        imgSrc: "/assets/crmservices.png",
        overview: "Enhancing business efficiency with Microsoft Dynamics CRM solutions.",
        challenge: "Managing customer interactions and relationships effectively.",
        challengepara: "Companies struggle to streamline their customer engagement process with traditional CRM systems.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Improved customer engagement", description: "through seamless CRM integration" },
            { title: "Enhanced sales performance", description: "with automated workflows" },
            { title: "Data-driven decision making", description: "using CRM analytics" },
        ],
        categories: [
            { name: "CRM", link: "/services/customer-ecosystem/crm" },
            { name: "Microsoft Dynamics", link: "/coes/microsoft/microsoft-dynamics" },
        ],
    },
    "banking-enterprise": {
        title: "Reinvent Banking Enterprise to Prepare for the Future",
        imgSrc: "/assets/bankingservices.jpg",
        overview: "Modernizing banking systems to meet evolving financial industry needs.",
        challenge: "Legacy banking systems hinder innovation and efficiency.",
        challengepara: "Banks struggle to adopt digital transformation due to outdated infrastructure and compliance challenges.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Enhanced digital banking", description: "with AI-driven financial services" },
            { title: "Improved compliance", description: "through automated risk management tools" },
            { title: "Faster transactions", description: "with cloud-based infrastructure" },
        ],
        categories: [
            { name: "Banking & Finance", link: "/coes/servicenow/legal-service" },
            { name: "FinTech", link: "/coes/servicenow/financial-institute" },
        ],
    },
    "big-data-analytics": {
        title: "Big Data Analytics: How to Use Hadoop to Excel in Excel",
        imgSrc: "/assets/bigdataservices.png",
        overview: "Unlocking the power of big data for business intelligence.",
        challenge: "Managing and analyzing vast amounts of data efficiently.",
        challengepara: "Companies struggle to process and gain insights from large datasets using traditional methods.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Enhanced data processing", description: "using Hadoop and cloud solutions" },
            { title: "Improved business insights", description: "through AI-powered analytics" },
            { title: "Faster decision making", description: "with real-time data visualization" },
        ],
        categories: [
            { name: "IRM", link: "/coes/servicenow/irm" },
            { name: "Security", link: "/coes/servicenow/security-operations" },
        ],
    },
    "app-migration": {
        title: "Accelerate Your App Migration and Modernization",
        imgSrc: "/assets/appmigrateservices.jpg",
        overview: "Seamlessly migrate applications to modern cloud environments.",
        challenge: "Legacy applications pose challenges in modernization and scalability.",
        challengepara: "Many businesses face difficulties in transitioning applications to the cloud without disruptions.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Faster application migration", description: "with minimal downtime" },
            { title: "Enhanced scalability", description: "leveraging cloud-native solutions" },
            { title: "Reduced costs", description: "through optimized cloud resource allocation" },
        ],
        categories: [
            { name: "Application Modernization", link: "/services/modernization/application-migration" },
            { name: "Cloud Migration", link: "/services/modernization/enterprise-mobile" },
        ],
    },
    "ai-customer-stories": {
        title: "Listen to Customer Stories on How AI Has Transformed Businesses",
        imgSrc: "/assets/customerstoriesservices.png",
        overview: "Real-world success stories of AI-driven business transformations.",
        challenge: "Understanding the real impact of AI in various industries.",
        challengepara: "Businesses seek insights on how AI adoption has led to tangible benefits.",
        solutionImg: "/assets/milkyway.jpg",
        impact: [
            { title: "Improved business efficiency", description: "through AI-driven automation" },
            { title: "Data-driven innovation", description: "with machine learning insights" },
            { title: "Better customer experiences", description: "using AI-powered personalization" },
        ],
        categories: [
            { name: "Blockchain", link: "/services/digitalization/blockchain" },
            { name: "Customer Success", link: "/services/customer-ecosystem/customer-experience" },
        ],
    }
}


export default function CaseStudy() {
    const { slug } = useParams(); // Get the slug from the URL
    const [activeSection, setActiveSection] = useState("overview");
    const caseStudy = caseStudies[slug as keyof typeof caseStudies] || caseStudies.milkyway; // Default to Milkyway if slug not found

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
                <nav className="bg-purple-600 z-20 sticky top-[72px] text-white flex justify-around py-4 text-sm font-semibold">
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
                        src={caseStudy.solutionImg}
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
            <Servicestrending></Servicestrending>
        </div>
    );
}
