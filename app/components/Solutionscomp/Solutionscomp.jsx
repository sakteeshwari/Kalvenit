
"use client";
import React from "react";
import useInView from "../../hooks/useInView"; // Assuming your custom hook is in a separate file

const SolutionsSection = () => {
  const solutions = [
    "KALVEN4HANA",
    "Factory Process Automation",
    "Healthcare & Tele-medicine",
    "Digital Shop Floor",
    "E-Learning",
    "SAP Solutions",
  ];
  const [elementRef, inView] = useInView({ triggerOnce: true, threshold: 1 });

  

  return (
    <section className="bg-blue-900 text-white p-6 pt-12 lg:py-12 lg:px-16 relative">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Text Content */}
        <div>
        <h1 className=' text-2xl font-semibold mb-4 slide-up'>SOLUTIONS</h1>
        <h1 className='text-white text-4xl slide-up leading-snug'>Drive Competitive Differentiation <span className='text-red-500 font-semibold'>.</span></h1>

          {/* Buttons Grid */}
          <div className="grid grid-cols-2 mt-6 md:grid-cols-3 gap-4">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`flex justify-center p-4 h-28 items-center text-center rounded-lg ${
                  index % 2 === 0
                    ? "lg:bg-cyan-400 border border-cyan-400 bg-transparent"
                    : "border border-cyan-400"
                }`}
              >
                <div ref={elementRef} className={` ${inView ? "slide-up" : ""} your-element-class`}>{solution}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image - Hidden on Large Screens */}
        <div className="relative ">
          <img
            src="/assets/solutions.jpg" // Replace with your image path
            alt="Team collaborating"
            className="rounded-lg shadow-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
