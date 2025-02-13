"use client";
import React from "react";
import Cybersecuritylayout from "../../../components/LayoutSubpages/Cybersecuritylayout/Cybersecuritylayout"


const DigitalizationPage = () => {
  return (
    <Cybersecuritylayout imgSrc="/assets/cyber.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <div>
          <h1 className="mt-6 font-bold">Discover your organization’s security posture and plan for the most advanced cyber threats.</h1>
          <p className="tracking-wide leading-loose mt-6">Cyber-attacks have evolved dramatically in the past couple of decades, with hackers capitalizing on human errors like misconfigurations, shadow IT, and a lack of awareness to breach an organization’s network.
          KALVEN helps organizations test their overall security posture, including infrastructure configuration, network vulnerabilities, employee security awareness, and security control assessments. Our Breach & Attack Simulation (BAS) Platform can Simulate, Validate and Remediate every hacker’s path to your critical assets. Our APT attack simulation platform continuously exposes all attack vectors from breach point, thus acting as a fully automated purple team. The platform also helps reveal the most critical blind spots, including end-user behavior, poor IT hygiene, security exploitability, etc</p>
        </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Cybersecuritylayout>
  );
};

export default DigitalizationPage;
