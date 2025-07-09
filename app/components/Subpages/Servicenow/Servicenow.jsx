"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon

export default function ServiceOfferings() {
 

    const services = [
        {
            title: "IT Service Management",
            description:
                "Amplify your potential to drive innovation across the enterprise service experience continuum with our end-to-end service management solutions",
            link: "/coes/servicenow/it-service"
        },
        {
            title: "IT Operations Management",
            description:
                "Gain cross-functional visibility across infrastructure, apps, and optimize cloud spend with high service availability",
            link: "/coes/servicenow/it-operations"
        },
        {
            title: "Integrated Risk Management(IRM)",
            description:
                "Eliminate uncertainties and stay resilient with accurate, real-time visibility of risks and vulnerabilities",
            link: "/coes/servicenow/irm"
        },
        {
            title: "Vendor Risk Management",
            description:
                "Upgrade your third-party Risk Management strategy by adopting ServiceNow’s smarter & connected Vendor Risk Management",
            link: "/coes/servicenow/vendor-risk"
        },
        {
            title: "Security Operations",
            description:
                "Bridge the gap between security and IT with faster security response using ServiceNow’s intelligent workflows and automation capabilities",
            link: "/coes/servicenow/security-operations"
        },
        {
            title: "Strategic Portfolio Management",
            description:
                "Align and prioritize business goals to deliver enterprise agility for better business outcomes",
            link: "/coes/servicenow/strategic-portfolio"
        },
        {
            title: "Customer Service Management",
            description:
                "CSM transforms your conventional support service model into an automated self-service customer portal to meet the growing demand.",
            link: "/coes/servicenow/it-service"
        },
        {
            title: "Field Service Management",
            description:
                "Deliver Exceptional Customer Service & Ensure that Field Services is Your Strategic Differentiator.",
            link: "/coes/servicenow/field-service"
        },
        {
            title: "HR Service Delivery",
            description:
                "Deploy customized solutions for a productive and adaptive workforce to reinvent service experience for an informative powerhouse",
            link: "/coes/servicenow/hr-service-delivery"
        },
        {
            title: "Legal Service Delivery",
            description:
                "Modernize legal operations to make faster decisions and increase productivity.",
            link: "/coes/servicenow/legal-service"
        },
        {
            title: "Intelligent Application Development",
            description:
                "Combine the power of innovation-led capabilities to redefine application development",
            link: "/coes/servicenow/intelligent-app-dev"
        },
        {
            title: "ServiceNow Managed Services",
            description:
                "Harness The True Potential of ServiceNow Managed Services",
            link: "/coes/servicenow/servicenow-managed"
        },
    ];


    return (
        <section className="py-16 bg-gray-50 lg:px-20">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                    Service Offerings<span className="text-red-500">.</span>
                </h2>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                        >
                            {/* Title */}
                            <h3 className="text-xl font-bold text-purple-700 mb-4">{service.title}</h3>

                            {/* Description */}
                            <p className="text-gray-600 flex-grow">{service.description}</p>

                            {/* Know More Button */}
                            <div className="mt-6">
                                <Link href={service.link}>
                                <button className="relative flex items-center space-x-2 text-red-500 font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden">
                                        {/* Border Animation */}
                                        <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border border-red-500 rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>

                                        {/* Content */}
                                        <div className="flex justify-center items-center w-8 h-8 border border-red-500 rounded-full group-hover:hidden z-10">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                        <div className="hidden group-hover:block z-10">
                                            <span>&rarr;</span>
                                        </div>
                                        <span className="z-10">Know More</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}