"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceOfferings() {
  const services = [
    {
      title: "Artificial Intelligence",
      description:
        "Drive operational excellence with AI-assisted offerings comprising visual recognition, machine learning, natural language processing.",
      link: "/services/intelligence/ai-services",
    },
    {
      title: "Robotic Process Automation",
      description:
        "RPA services that span your entire automation journey to ensure initiatives are embraced across the customer ecosystem.",
      link: "/services/intelligence/api-integration",
    },
    {
      title: "Conversational AI",
      description:
        "Ensuring the best human experience offered through a mix of virtual assistants and chatbots.",
      link: "/services/intelligence/conversational-ai",
    },
    {
      title: "Cognitive 3D Services",
      description:
        "Holistic services in the space of cognitive 3D with AR, VR, and MR propositions.",
      link: "/services/intelligence/cognitive-3d",
    },
    {
      title: "Business Intelligence",
      description:
        "Next-gen BI services to empower your enterprise with more access to data than ever before.",
      link: "/services/intelligence/business-intelligence",
    },
    {
      title: "Data Visualization",
      description:
        "Capture the real value of your complex data with advanced data visualization for data-driven decision-making.",
      link: "/services/intelligence/data-visualization",
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
              className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 flex-grow">{service.description}</p>

              {/* Know More Button */}
              <div className="mt-auto pt-7 text-lg">
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
