"use client";
import React from "react";
import "./Befuture.css";
import { ArrowRight } from "lucide-react";
import useInView from "../../hooks/useInView";
import Link from "next/link";

const Befuture = () => {
  const Solutions = [
    {
      images: "/assets/microdynamics.png",
      title: "Microsoft Dynamics 365",
      description:
        "Experience better customer retention  with Microsoft Dynamics 365",
      link: "/coes/microsoft/microsoft-dynamics",
    },
    {
      images: "/assets/embeddedsys.png",
      title: "Embedded Systems",
      description: "Top seven tips so you can create a reliable embedded system",
      link: "/coes/iot-embedded/embedded-systems",
    },
    {
      images: "/assets/qad.png",
      title: "QAD",
      description: "The Perfect Pairing: QAD and the Food and Beverage industry",
      link: "/coes/qad",
    },
    {
      images: "/assets/ams.jpg",
      title: "AMS",
      description: "The positive side-effects of COVID-19 for businesses",
      link: "/services/nextgen-ams",
    },
  ];

  // Separate refs for each section heading
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [subtitleRef, subtitleInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className="p-6 pt-12 bg-gray-100">
      {/* Headings with independent refs */}
      <h1 ref={titleRef} className={`text-purple-800 text-2xl font-semibold mb-4 transition-opacity duration-700 ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        BE FUTURE READY
      </h1>
      <h1 ref={subtitleRef} className={`text-black text-3xl transition-opacity duration-700 ${subtitleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        Kalven Software Solutions Perspectives <span className="text-red-700">.</span>
      </h1>
      
      <Link href="/aboutus/blog" passHref>
        <p className="text-blue-600 pt-4 text-right font-medium cursor-pointer mb-6 transition-all duration-300 hover:text-blue-800 hover:underline hover:scale-105">
          View ALL Blogs &nbsp; &rarr;
        </p>
      </Link>

      {/* Solutions List */}
      <div className="grid grid-cols-1 mx-8 lg:mx-12 lg:mt-8 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Solutions.map((solution, index) => {
          const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.3 });

          return (
            <div
              key={index}
              ref={cardRef} // Each card has its own ref
              className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-700 ease-in-out ${
                cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <img
                src={solution.images}
                alt={solution.title}
                className="h-52 w-96 rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-black">{solution.title}</h2>
              <p className="text-gray-700 mb-4 hover:underline cursor-pointer">{solution.description}</p>

              <div className="py-3 text-lg">
                <Link href={solution.link} passHref>
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
                    <span className="z-10">Know more</span>
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Befuture;
