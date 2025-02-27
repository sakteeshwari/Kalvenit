"use client";
import React from "react";
import useInView from "../../hooks/useInView"; // Ensure this is correctly implemented

const SolutionsSection = () => {
  const solutions = [
    "KALVEN4HANA",
    "Factory Process Automation",
    "Healthcare & Tele-medicine",
    "Digital Shop Floor",
    "E-Learning",
    "SAP Solutions",
  ];

  return (
    <section className="bg-blue-900 text-white p-6 pt-12 lg:py-12 lg:px-16 relative">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-2xl font-semibold mb-4 slide-up">SOLUTIONS</h1>
          <h1 className="text-white text-4xl slide-up leading-snug">
            Drive Competitive Differentiation <span className="text-red-500 font-semibold">.</span>
          </h1>

          {/* Buttons Grid */}
          <div className="grid grid-cols-2 mt-6 md:grid-cols-3 gap-4">
            {solutions.map((solution, index) => {
              const [elementRef, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

              return (
                <div
                  key={index}
                  ref={elementRef} // Ensure each box has its own ref
                  className={`flex justify-center p-4 h-28 items-center text-center rounded-lg transition-transform duration-700 ${
                    inView ? "slide-up" : "opacity-0 translate-y-5"
                  } ${
                    index % 2 === 0
                      ? "lg:bg-cyan-400 border border-cyan-400 bg-transparent"
                      : "border border-cyan-400"
                  }`}
                >
                  {solution}
                </div>
              );
            })}
          </div>
        </div>

        {/* Image - Hidden on Large Screens */}
        <div className="relative">
          <img
            src="/assets/solutions.jpg" // Ensure the path is correct
            alt="Team collaborating"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
