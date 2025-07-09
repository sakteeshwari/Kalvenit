"use client";
import React from "react";
import Cybersecuritylayout from "../../../components/LayoutSubpages/Cybersecuritylayout/Cybersecuritylayout"


const DigitalizationPage = () => {
  return (
     <Cybersecuritylayout imgSrc="/assets/cyber.png">
   <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">KALVEN offers comprehensive AI-Driven Security Operation Center (SOC) services designed to safeguard your digital assets. Our services encompass a wide range of capabilities, including 24/7, 16/7, and 8/5 L1 and L2 security monitoring, advanced SOC/SIEM engineering, and efficient incident management. At the core of our offerings lies our proprietary Active Defense Framework, which empowers us to proactively identify, prioritize, and respond to potential threats, ensuring the highest level of security for your organization.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Cybersecuritylayout>
  );
};

export default DigitalizationPage;
