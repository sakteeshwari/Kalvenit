"use client";
import React from "react";
import Cybersecuritylayout from "../../../components/LayoutSubpages/Cybersecuritylayout/Cybersecuritylayout"


const DigitalizationPage = () => {
  return (
    <Cybersecuritylayout imgSrc="/assets/cyber.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <p className="tracking-wide leading-loose font-bold text-xl">Key Challenge</p>
        <p className="tracking-wide leading-loose">Legal and compliance leaders have strongly emphasized that conventional approaches to due diligence in risk management policy fall short of expectations. It is alarming that over 80% of these leaders have reported that third-party risks and supply chain disruptions are only discovered after the initial onboarding and due diligence process. This gap is a significant concern as it exposes businesses to emerging and ever-changing threats, such as data breaches, disruptions in operations, loss of customers, lawsuits, and regulatory fines. Such threats can have severe consequences for businesses and their stakeholders.</p>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Cybersecuritylayout>
  );
};

export default DigitalizationPage;
