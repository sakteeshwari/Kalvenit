"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceOfferings() {
  const services = [
    {
      title: "Implementation and Support",
      description:
        "With practical, first-hand knowledge in designing enterprise mobility strategy and defining mobility architecture, KALVEN ensures that every aspect of your mobility journey is envisioned and resurrected with the best-fit implementation of enterprise user experience design, custom based industry-focused solutions, and productized mobile technology packages.",
      link: "/coes/mobility/implementation",
    },
    {
      title: "Mobile Application Design and Development",
      description:
        "Our application development services with proven technology expertise, ensure efficient ways to embark on a mobile app strategy for seamless architecture and experience design. With a solution-driven approach for technology adoption, we excel in leveraging native as well as hybrid applications and PWA while assessing the compatibility performance with cross-platform frameworks – Swift, Kotlin, Flutter, React, and more.",
      link: "/coes/mobility/app-dev",
    },
    {
      title: "Custom App Development",
      description:
        "Reimagine mobility to boost your business growth with our customer-led, insights-driven, and innovative solutions through Codiant – an integral part of KALVEN. With a multi-disciplinary team and hands-on ‘value in the making’ approach, we accelerate the process of turning ideas into prototypes and scalable real-world mobile solutions for mobile app & web development.",
        link: "/coes/mobility/app-dev",
    },
    {
      title: "Intelligent Mobility",
      description:
        "As mobile technology continues to grow, with each new trend getting absorbed into the mobile experience, digital reality and wearables are providing an entirely new definition to connect with customers in a more immersive and engaging way. At KALVEN, we are working towards building mobility offerings powered by AR-VR-MR solutions. With advancements in wearable technology, we are better equipped today to provide a complete mobile experience enhanced through HoloLens, Google Glass, Apple Glass, and more.",
      link: "/coes/mobility/intelligent",
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

              {/* Know More Button */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
