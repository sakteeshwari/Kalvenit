"use client";
import React from "react";
import Cybersecuritylayout from "../../../components/LayoutSubpages/Cybersecuritylayout/Cybersecuritylayout"


const DigitalizationPage = () => {
  return (
    <Cybersecuritylayout imgSrc="/assets/cyber.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
       <div>
       <p className="tracking-wide leading-loose font-bold">By 2025, 50% of organizations will use MDR services for threat monitoring, detection, and response functions that offer threat containment and mitigation capabilities. - Gartner</p>
       <p className="tracking-wide leading-loose">Organizations have traditionally turned to Managed Security Services Providers (MSSPs) for their external security needs. Using advanced security analytics on endpoints, user behavior, applications, and the network, MDR provides deeper detection than traditional MSSPs that rely on log and Security Incident Event Management (SIEM) capabilities.</p>
       </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Cybersecuritylayout>
  );
};

export default DigitalizationPage;
