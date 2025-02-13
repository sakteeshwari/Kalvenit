"use client";
import React from "react";
import Intelligencelayout from "../../../components/LayoutSubpages/Intelligencelayout/Intelligencelayout"

const DigitalizationPage = () => {
  return (
    <Intelligencelayout imgSrc="/assets/aiimg.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <div>
          <p className="tracking-wide leading-loose">Business intelligence allows you to surface useful data of various types across your enterprise, convert it into actionable insights, and drive a competitive edge for your business. We ensure that you can deliver the right information to the right people with our business intelligence services in real-time and enabling them to make impactful decisions. KALVEN incorporates ready-to-go data architecture, tools, and platforms across various industry domains, from its vast global experience to deliver business intelligence solutions across the spectrum of technologies.</p>
          
        </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Intelligencelayout>
  );
};

export default DigitalizationPage;
