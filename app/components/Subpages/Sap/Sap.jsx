"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Import Link from Next.js

export default function ServiceOfferings() {
  const services = [
    {
      title: "S/4HANA",
      description: "Revamp Your ERP Strategy with SAP S/4HANA",
      link: "/coes/sap/sap-s4hana",
    },
    {
      title: "Rise With SAP",
      description: "Accelerate enterprise-wide digital transformation and transition to the Cloud",
      link: "/coes/sap/rise-with-sap",
    },
    {
      title: "SAP Cloud Management",
      description: "Achieve organizational growth with SAP Cloud Management.",
      link: "/coes/sap/sap-on-cloud",
    },
    {
      title: "SAP Solutions",
      description: "Deriving value through SAP SOlutions",
      link: "/coes/sap/sap-solutions",
    },
    {
      title: "SAP Infrastructure",
      description: "Adapt and reinvent while developing new business models at speed.",
      link: "/coes/sap/sap-infrastructure",
    },
    {
      title: "SAP Digital Manufacturing",
      description: "Agile SAP services empowering enterprises to realize business outcomes and value faster.",
      link: "/coes/sap/sap-dm",
    },
    {
      title: "Sustainability",
      description: "Create positive economic, social, and environmental impact.",
      link: "/services/sustainability",
    },
    {
      title: "Finance Transformation",
      description: "Enable Business Transformation with Finance Transformation Services",
      link: "/coes/servicenow/financial-institute",
    },
    {
      title: "Customer Experience Management",
      description: "Create memorable customer journeys with Customer Experience Management",
      link: "/services/customer-ecosystem/customer-experience",
    },
    {
      title: "SAP Business Technology Platform",
      description: "Reinforce transformation DNA into business operations with SAP BTP",
      link: "/coes/sap/sap-ibp",
    },
    {
      title: "SAP Technical Services",
      description: "Driving Quality & Agility in SAP Testing",
      link: "/coes/sap/sap-technical",
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
            <div key={index} className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              {/* Title */}
              <h3 className="text-xl font-bold text-purple-700 mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 flex-grow">{service.description}</p>

              {/* "Know More" Button - Always Aligned at the Bottom */}
              <div className="mt-auto pt-6">
                <Link href={service.link}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
