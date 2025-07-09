"use client";
import React from "react";
import Cybersecuritylayout from "../../../components/LayoutSubpages/Cybersecuritylayout/Cybersecuritylayout"


const DigitalizationPage = () => {
  return (
    <Cybersecuritylayout imgSrc="/assets/cyber.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
       <div>
       <p className="tracking-wide leading-loose">Traditional risk management and compliance strategies are proving increasingly inadequate and expensive in today's rapidly evolving business environment. Enterprises today face numerous challenges, including blind spots in risk management,
          non-compliance, inability to see threats in real-time, resource drain from manual monitoring, data silos, and rigid reporting options.</p>
        <p className="tracking-wide leading-loose">Expanding attack surfaces and reliance on manual control monitoring pose significant challenges. KALVEN’s 360o Cyber Posture Management services provide real-time visibility through automated continuous monitoring of all security controls, empowering you to mitigate risks and enhance operational efficiency proactively.</p>
       </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Cybersecuritylayout>
  );
};

export default DigitalizationPage;
