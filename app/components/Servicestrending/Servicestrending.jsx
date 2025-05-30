"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useInView from "../../hooks/useInView";

const Servicestrending = () => {
  const content = [
    {
      label: "Milkyway to the cloud, When the Dairy goes Digital...",
      link: "/services/trending/milkyway",
      image: "/assets/milkman.jpeg",
    },
    {
      label: "Major Powersport Company Modern Application...",
      link: "/services/trending/powersport-modern",
      image: "/assets/arrowup.png",
    },
    {
      label: "Scaling tech-Innovations: Unleash impact that matters...",
      link: "/contact",
      image: "/assets/servicesscale.png",
    },
    {
      label: "Long term customer relationship management...",
      link: "/services/trending/customer-relationship",
      image: "/assets/customerservices.png",
    },
    {
      label: "Digital Consulting & Advisory for the future...",
      link: "/services/trending/digital-consulting",
      image: "/assets/digitalservices.jpg",
    },
    {
      label: "Are you driving the change or are you driven by the change?",
      link: "/services/trending/driving-change",
      image: "/assets/drivingservices.png",
    },
    {
      label: "Kalven Intelligent Automation Services",
      link: "/services/trending/intelligent-automation",
      image: "/assets/automationservices.png",
    },
    {
      label: "Get 'Future-Ready' - Migrate to the Cloud with Kalven",
      link: "/services/trending/cloud-migration",
      image: "/assets/futureservices.png",
    },
    {
      label: "Data Integration and Migration Services @ Kalven...",
      link: "/services/trending/data-integration",
      image: "/assets/dataintegrationservices.png",
    },
    {
      label: "KALVEN Artificial Intelligence & Machine Learning Services...",
      link: "/services/trending/ai-ml",
      image: "/assets/aiservices.png",
    },
    {
      label: "Create a Dynamic Business with Microsoft Dynamic CRM...",
      link: "/services/trending/microsoft-crm",
      image: "/assets/crmservices.png",
    },
    {
      label: "Reinvent banking enterprise to prepare for future...",
      link: "/services/trending/banking-enterprise",
      image: "/assets/bankingservices.jpg",
    },
    {
      label: "Big Data Analytics: How to Use Hadoop to Excel in Excel",
      link: "/services/trending/big-data-analytics",
      image: "/assets/bigdataservices.png",
    },
    {
      label: "Accelerate your App migration and modernization using...",
      link: "/services/trending/app-migration",
      image: "/assets/appmigrateservices.jpg",
    },
    {
      label: "Listen to customer stories on how AI has businesses...",
      link: "/services/trending/ai-customer-stories",
      image: "/assets/customerstoriesservices.png",
    },
  ];

  const [scrollIndex, setScrollIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const [elementRef, inView] = useInView(1);

  return (
    <section className="relative w-full h-screen lg:mb-14 mt-10 overflow-hidden">
      <div className="m-4 lg:px-20">
        <h1 className="text-purple-800 text-xl font-semibold mb-4">NEW AT KALVEN</h1>
        <h1 className="text-black text-3xl">Trending Now <span className="text-red-600">.</span></h1>
      </div>

      <div className="relative h-72 flex items-center justify-center lg:justify-evenly lg:gap-52 mt-10">
        <button
          onClick={() => setScrollIndex((prev) => Math.max(prev - 1, 0))}
          disabled={scrollIndex === 0}
          className={`absolute left-4 sm:left-10 z-10 bg-white rounded-full p-2 shadow-md transition ${scrollIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="w-full mt-24 lg:flex lg:justify-evenly h-96 max-w-[90%] lg:max-w-[90%] overflow-hidden relative">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full lg:flex lg:gap-32 md:w-1/2 lg:w-1/3 absolute top-0 left-0 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${(index - scrollIndex) * 100}%)` }}
            >
              <Link href={item.link} passHref>
                <div
                  className="relative m-1 bg-cover w-72 bg-center rounded-lg shadow-lg h-[300px] sm:h-[500px] flex flex-col justify-between p-6 transform transition-all duration-500 ease-in-out hover:scale-110 hover:translate-y-[-10px] cursor-pointer"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="relative top-32 left-28 lg:top-36 z-10 bg-gray-500 p-4 w-72 text-white">
                    <span className="bg-black text-sm px-2 py-1 rounded">Case study</span>
                    <h3 className="text-lg sm:text-xl hover:underline font-bold mt-4">{item.label}</h3>
                    <div ref={elementRef} className={`py-3 text-lg ${inView ? "slide-up" : ""}`}>
                      <button className="relative flex items-center space-x-2 text-yellow-400 font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border border-yellow-400 rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
                        <div className="flex justify-center items-center w-8 h-8 border border-yellow-400 rounded-full group-hover:hidden z-10">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <span className="z-10">Learn more</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <button
          onClick={() => setScrollIndex((prev) => Math.min(prev + 1, content.length - 1))}
          disabled={scrollIndex === content.length - 1}
          className={`absolute right-4 sm:right-10 z-10 bg-white rounded-full p-2 shadow-md transition ${scrollIndex === content.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Servicestrending;
