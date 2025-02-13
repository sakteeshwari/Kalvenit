"use client";
import React from "react";
import Intelligencelayout from "../../../components/LayoutSubpages/Intelligencelayout/Intelligencelayout"

const DigitalizationPage = () => {
  return (
    <Intelligencelayout imgSrc="/assets/aiimg.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <div>
          <p className="tracking-wide leading-loose">Data discovery, reporting, and visualization lie at the core of an organization’s ability to make business-critical decisions. KALVEN provides data visualization services that leverage technologies and domain expertise to unlock hidden opportunities and enable dynamic environments for timely, reliable, and personalized data analysis. With expertise across several industry domains, we help accelerate data-driven decision-making processes using innovative tools, including informative dashboards. Combining our highly regarded data visualization CoE with a broad partner network with scalable, next-generation capabilities, we empower companies to derive deeper insights and drive value-added innovation in data visualization.</p>
          
        </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Intelligencelayout>
  );
};

export default DigitalizationPage;
