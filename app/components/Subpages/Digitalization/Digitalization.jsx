"use client"
import { ArrowRight } from "lucide-react"; 
import Link from "next/link";

export default function ServiceOfferings() {
    const services = [
      {
        title: "Cloud",
        description:
          "KALVEN gets involved in designing and re-engineering cloud architectures powered by digital accelerators and strategic frameworks to navigate the customers through their digital journey.",
        link: "/services/digitalization/cloud",
      },
      {
        title: "Mobility",
        description:
          "Our integrated suite of offerings enables customers to differentiate, engineer, implement, and sustain on-the-go mobility solutions to make a seamless transition of your autonomous mobile journey.",
        link: "/services/digitalization/mobility",
      },
      {
        title: "Data Analytics",
        description:
          "Data Analytics services from KALVEN help categorize, contextualize, scope, and derive data insights, and add value with machine learning paradigms.",
        link: "/services/digitalization/data-analytics",
      },
      {
        title: "Blockchain",
        description:
          "Blockchain services include comprehensive blockchain solutions for innovation, prototyping, re-engineering processes, and addressing issues in real-time.",
        link: "/services/digitalization/blockchain",
      },
      {
        title: "Social Media Marketing",
        description:
          "KALVEN offers social media marketing services by managing web presence on global websites and various social media platforms like Facebook, LinkedIn, Twitter, Instagram, YouTube, and a lot more.",
        link: "/services/digitalization/social-media-marketing",
      },
      {
        title: "AR/ VR/ MR",
        description:
          "AR/VR/MR capabilities at KALVEN include experimental designing to visualizing complex industrial projects and theoretical modeling.",  
        link: "/services/digitalization/ar-vr-mr",
      },
      {
        title: "AI & Automation",
        description:
          "KALVEN conducts automation need assessments, provides advisory on framing strategies, and facilitates change management using cognitive solutions from Automation Anywhere, UiPath, Pega, and more.",
        link: "/services/digitalization/ai-automation",
      },
      {
        title: "IoT and Embedded Systems",
        description:
          "KALVEN offers a full range of IoT and embedded systems services and helps organizations in end-to-end development, supplementing it with power-packed Analytics and Application Development and management.",
        link: "/services/digitalization/iot",
      },
      {
        title: "Manufacturing Operations Management",
        description:
          "We offer a unique Manufacturing Operations Management (MOM) services portfolio and customized strategies to blend advanced manufacturing concepts with real-time visibility and intelligent industrial Automation.",
        link: "/services/digitalization/embedded-factory",
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

                {/* Know More Button */}
                <Link href={service.link}>
                  <div className="pt-7 text-lg">
                    <button className="relative flex items-center space-x-2 text-red-500 font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden">
                      {/* Border Animation */}
                      <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border border-red-500 rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>

                      {/* Icon */}
                      <div className="flex justify-center items-center w-8 h-8 border border-red-500 rounded-full group-hover:hidden z-10">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <div className="hidden group-hover:block z-10">
                        <span>&rarr;</span>
                      </div>
                      <span className="z-10">Know More</span>
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
