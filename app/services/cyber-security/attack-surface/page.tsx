"use client";
import React from "react";
import Cybersecuritylayout from "../../../components/LayoutSubpages/Cybersecuritylayout/Cybersecuritylayout"

const services = [
  "Automated, semi-automated scan for all internet facing assets",
  "Identify areas of shadow IT",
  "Deep intelligence on leaked credential",
  "Identify domain names associated risks",
  "Risk analysis on exploitability and the probable IOCs",
  "Remediate and validate the closure",
];
const DigitalizationPage = () => {
  return (
     <Cybersecuritylayout imgSrc="/assets/cyber.png">
       <div className="bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold italic">
          A continuous approach to protecting your evolving attack surface
        </h2>
        <p className="mt-4 text-gray-700">
          Cyber attackers use multiple tools, techniques, and processes to attack the target company. Merely acknowledging the perimeter and publicly exposed services as a target is not sufficient. With cloud migration and the work-from-home culture dramatically increasing the number of external targets, being able to prioritize your attack surface from an attacker's perspective has never been more urgent.
        </p>
        <p className="mt-4 text-gray-700">
          Our KYAS service helps you to discover all the possibilities and examine the security from known attack vectors, dark web intelligence, Domain squatting, Unknown IOCs, etc. KALVEN’s KYAS services ensure:
        </p>

        <div className="mt-6 bg-white shadow-md rounded-lg">
          <ul className="divide-y divide-gray-300">
            {services.map((service, index) => (
              <li key={index} className="p-4 text-gray-700">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </Cybersecuritylayout>
  );
};

export default DigitalizationPage;
