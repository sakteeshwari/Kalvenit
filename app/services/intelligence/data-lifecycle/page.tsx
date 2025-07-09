"use client";
import React from "react";
import Intelligencelayout from "../../../components/LayoutSubpages/Intelligencelayout/Intelligencelayout"

const DigitalizationPage = () => {
  return (
    <Intelligencelayout imgSrc="/assets/aiimg.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <div>
          <p className="tracking-wide leading-loose">To drive incremental business value and gain a competitive advantage in the market, organizations need to adopt forward-thinking approaches to managing their data assets keeping future strategy and business shifts in mind. To optimize your digital journey, we design secure and resilient information architectures that redefine your capabilities and manage crucial data enterprise-wide. KALVEN excels in transforming your heterogeneous systems, digital assets, and confidential data by deploying solutions from data discovery and acquisition to governance while safeguarding data integrity and meeting compliance obligations.</p>
          
        </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Intelligencelayout>
  );
};

export default DigitalizationPage;
