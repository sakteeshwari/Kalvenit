"use client"
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon
export default function ServiceOfferings() {
    const services = [
        {
            title: "Azure Infrastructure Services",
            description:
                "Get the most out of your digitalization investments by utilizing the ever-dilating power of Microsoft Azure cloud. Explore our comprehensive Azure cloud service portfolio that supports you with an agile 360° approach throughout your cloud engagement journey",

        },
        {
            title: "Enterprise Collaboration",
            description:
                "Combine the knowledge and capabilities of diverse teams and unite them in a common purpose and support structure. Ensure seamless collaboration for higher team productivity and better synchronization for amplified business capabilities.",

        },
        {
            title: "Workplace of the Future",
            description:
                "Today, the office can be anywhere, and IT must meet the changing needs of workers in different locations. Experience modernized workplace solutions through a powerful platform for a smoother transition and real-time collaborations across your workforce.",

        },
        {
            title: "Enterprise Modernization",
            description:
                "Whether your organization replaces the entire enterprise application system, replaces one application at a time, any approach is typically better than none at all. Explore the ever-expanding power of landscape modernization for a holistic enterprise transformation towards agile IT processes and business resiliency.",

        },
        {
            title: "Rapid Application Development",
            description:
                "With an effective rapid application development environment, we enable organizations to be adaptive with robust architecture, process transformation, and innovation. Cater to the changing needs of the work environment with our uniquely tailored, robust applications built with an eye on the future.",

        },
        {
            title: "Intelligent Applications",
            description:
                "Unlock the value of your Microsoft applications at the speed of change and power of intelligence. Microsoft helps you unlock the potential of your data. Build intelligent apps faster using the tools and technologies of your choice.",
            link: "/services/digitalization/cloud"
        },
        {
            title: "Dynamics 365",
            description:
                "Bring in the best of CRM and ERP together through Dynamics 365 for exponential benefits complemented with our in-depth technology know-how, unparalleled services, and support offerings",

        },
        {
            title: "Data and AI",
            description:
                "Accelerate business insights by unleashing the power of Microsoft’s data-driven approach enriched with AI. Map your data assets to drive value and achieve your vision for the future by experiencing the best of both worlds with Microsoft technologies for Data and AI.",

        },
        {
            title: "Blockchain",
            description:
                "Blockchain services include comprehensive blockchain solutions for innovation, prototyping, re-engineering processes, and addressing issues in real-time.",

        },
        {
            title: "Social Media Marketing",
            description:
                "KALVEN offers social media marketing services by managing web presence on global websites and various social media platforms like Facebook, LinkedIn, Twitter, Instagram, YouTube, and a lot more.",

        },
        {
            title: "AR/ VR/ MR",
            description:
                "AR/VR/MR capabilities at KALVEN includes experimental designing to visualizing complex industrial projects and theoretical modeling.",
        },
        {
            title: "AI & Automation",
            description:
                "KALVEN conducts automation need assessments, provides advisory on framing strategies, and facilitating change management using cognitive solutions from Automation Anywhere, UiPath, Pega, and more.",

        },
        {
            title: "IoT and Embedded Systems",
            description:
                "KALVEN offers a full range of IoT and embedded systems services and help organizations in end-to-end Development, supplementing it with power-packed Analytics and Application Development and management.",

        },
        {
            title: "Manufacturing Operations Management",
            description:
                "We offer a unique Manufacturing Operations Management (MOM) services portfolio and customized strategies to blend advanced manufacturing concepts with real-time visibility and intelligent industrial Automation.",

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
                            className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Title */}
                            <h3 className="text-xl font-bold text-purple-700 mb-4">{service.title}</h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-6">{service.description}</p>

                            {/* know more button */}
                            <div className={`pt-7 text-lg `}>
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
                                    <span className="z-10">Know More</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
