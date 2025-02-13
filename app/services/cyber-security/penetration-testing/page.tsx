"use client";
import React from "react";
import Cybersecuritylayout from "../../../components/LayoutSubpages/Cybersecuritylayout/Cybersecuritylayout"


const DigitalizationPage = () => {
  return (
    <Cybersecuritylayout imgSrc="/assets/cyber.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <p className="tracking-wide leading-loose">Penetration testing is a vital element in safeguarding your organization against cyber threats. At YASH Technologies, we offer expert penetration testing services to uncover vulnerabilities, verify security measures, and ensure compliance with evolving industry standards.</p>
        <p className="tracking-wide leading-loose">By simulating real-world cyberattacks quickly, our Pen Test experts empower your organization to fortify its security and protect critical assets. Our actionable insights prioritize and allocate security resources effectively, ensuring your investments target the most significant vulnerabilities to maximize your cybersecurity ROI.</p>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Cybersecuritylayout>
  );
};

export default DigitalizationPage;
