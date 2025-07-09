"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon

export default function ServiceOfferings() {
    const services = [
      {
        title: "DevOps on AWS",
        description:
          "Transform software delivery process through our AWS DevOps expertise to accelerate business growth and enhance operational efficiency",
        link: "/coes/aws/devops"
      },
      {
        title: "AWS Transformation Services",
        description:
          "Automate the core to reinvent your business model with our transformative frameworks for accelerated cloud adoption.",
        link: "/coes/aws/aws-transformation"
      },
      {
        title: "AWS Migration Services",
        description:
          "Execute the right migration strategy with unique methodologies to re-platform and re-host with AWS services.",
        link: "/coes/aws/aws-migration"
      },
      {
        title: "Managed AWS Cloud Services",
        description:
          "Create secure and compliant AWS environments with our superior, highly automated managed services..",
        link: "/coes/aws/aws-managed"
      },
      {
        title: "Delivery Framework KALVEN 'Ascent'",
        description:
          "Our consultative customer-centric approach to help you maximize value from SAP on AWS.",
        link: "/coes/aws/kalven-ascent"
      },
      {
        title: "AWS Lambda",
        description:
          "Optimize operations and transform business by AWS Lambda",
        link: "/coes/aws/aws-lambda"
      }
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

                {/* Know More button */}
                <div className="mt-6">
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