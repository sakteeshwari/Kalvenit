"use client";
import React from "react";
import Cybersecuritylayout from "../../components/LayoutSubpages/Cybersecuritylayout/Cybersecuritylayout"

const DigitalizationPage = () => {
  return (
    <Cybersecuritylayout imgSrc="/assets/cyber.png">
      <div className="bg-gray-200 p-4 leading-relaxed tracking-wider">
        <p className="mt-6">
        KALVEN delivers comprehensive cybersecurity solutions tailored to your unique needs. We assess your current security posture, identify gaps, and develop a roadmap to enhance your security maturity. Our expertise spans proactive risk mitigation, 24*7 incident response, and managing compliance. We help you navigate the complexities of the cyber landscape, enabling secure business growth while minimizing disruptions. Trust KALVEN to manage your cyber chaos and build a resilient security foundation.
        </p>
      <div className="mt-6 flex justify-center">
      <img src="/assets/cyber2.png" alt="" />
      </div>
      
      </div>
    </Cybersecuritylayout>
  );
};

export default DigitalizationPage;
