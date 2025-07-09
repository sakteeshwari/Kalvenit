"use client";
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon
import Link from "next/link";

export default function ServiceOfferings() {
  const services = [
    {
      title: "Implementation Services",
      description:
        "Accelerate the full potential of Salesforce for a superior CX via successful design and integration solutions.",
      link: "/coes/salesforce/salesforce-implement",
    },
    {
      title: "Application Support",
      description:
        "Scale in parallel with your business growth by addressing your Salesforce support needs.",
      link: "/coes/salesforce/salesforce-support",
    },
    {
      title: "Advisory & Consulting Services",
      description:
        "Identify opportunities for amplified productivity and growth across your people, workflows, and technology.",
      link: "/coes/salesforce/salesforce-advisory",
    },
    {
      title: "MuleSoft Services",
      description:
        "Create a more engaging customer experience with seamless integration modules using MuleSoft.",
      link: "/coes/salesforce/mulesoft",
    },
    {
      title: "Accelerators & Tools",
      description: "NextGen AI-enabled - Accelerators & tools",
      link: "/coes/salesforce/accelerators-tools",
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
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 flex-grow">{service.description}</p>

              {/* Know More Button */}
              {service.link && (
                <div className="pt-7">
                  <Link href={service.link} className="inline-block">
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
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
