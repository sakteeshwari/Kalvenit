"use client";
import React from "react";
import Mobilitylayout from "../../components/LayoutSubpages/Mobilitylayout/Mobilitylayout"

const DigitalizationPage = () => {
    return (
        <Mobilitylayout imgSrc="/assets/workday.png">
            <div className="bg-gray-200 p-4 leading-relaxed tracking-wider">
                <p className="mt-6">
                    At KALVEN Software Solutions, we are at the forefront of influencing and reshaping the “Business of HR,”
                    ushering in a new era of progressive workplace methodologies. KALVEN and Workday share a collective mission of leveraging cutting-edge technologies to enhance corporate well-being, promote active employee engagement, and foster a shared digital culture that thrives on proximity, empathy, and collaboration.
                </p>


                <div className="relative mt-6 py-6 bg-black text-white min-h-screen flex items-center justify-center px-8">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-bold">
            Workday: The Cornerstone of the Modern <span className="text-red-500">Workplace.</span>
          </h1>
          <p className="mt-4 text-gray-300">
            Workday, one of the premier HR and finance solutions, shares our vision of an ideal workplace and is renowned for its innovative offerings...
          </p>
          <ul className="mt-6 space-y-4">
            <li>
              <strong className="text-white">Talent Management:</strong> Empower your workforce through tools that nurture employee development.
            </li>
            <li>
              <strong className="text-white">Time Tracking:</strong> Streamline time management with seamless clock-in and clock-out options.
            </li>
            <li>
              <strong className="text-white">Recruiting:</strong> Transform your hiring process with an all-in-one platform.
            </li>
            <li>
              <strong className="text-white">Analytics and Reporting:</strong> Make informed decisions with a robust set of tools.
            </li>
            <li>
              <strong className="text-white">Employee Self-Service:</strong> Simplify onboarding with a customizable process.
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="/assets/team.png"
            alt="Team Meeting"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      
    
    </div>
            </div>
        </Mobilitylayout>
    );
};

export default DigitalizationPage;
