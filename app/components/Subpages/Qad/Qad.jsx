"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceOfferings() {
  const services = [
    {
      title: "Consulting Services",
      description:
        "Initiate your QAD-based transformation journey with tailored assessment, planning & advisory.",
      link: "/coes/qad/consult-services",
    },
    {
      title: "Cloud Services",
      description:
        "Application customization, enhancement, deployment, maintenance, and 24/7 support for comfortable accessibility and simple interface for clients.",
      link: "/coes/qad/qad-cloud",
    },
    {
      title: "Data and AI Services",
      description:
        "Comprehensive offerings to focus on quality and productivity benefits while delighting customers and achieving greater profitability.",
      link: "/coes/qad/qad-dataai",
    },
    {
      title: "Business Consulting",
      description:
        "Curated business transformation service portfolio, with an emphasis on QAD-driven operational excellence.",
        link: "/coes/qad/business-consult",
    },
    {
      title: "Support Services",
      description:
        "End-to-end ownership of QAD enterprise system support while delivering continuous improvement.",
      link: "/coes/qad/qad-support",
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
              className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 flex-grow">{service.description}</p>

              {/* Know More Button (only if link is available) */}
              {service.link && (
                <div className="mt-6">
                  <Link href={service.link} className="inline-block">
                    <button className="relative flex items-center space-x-2 text-red-500 font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden">
                      {/* Border animation */}
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
