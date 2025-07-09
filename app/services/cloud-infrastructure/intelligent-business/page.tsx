"use client";
import React from "react";
import Cloudlayout from "../../../components/LayoutSubpages/Cloudlayout/Cloudlayout"

const DigitalizationPage = () => {
  return (
     <Cloudlayout imgSrc="/assets/cloudinfrastructure.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">Your IT and business operations cannot halt or stumble and disrupt the pace of revenue growth and profitability. To continue working without operational downtime or breakdowns, you need to continually analyze and act on your data at speeds in sync with its ever-growing volume. YASH Intelligent Business Services Monitoring enables you to get insights on every critical component of your business functions – be it performance, availability, and health. This ensures robust business continuity by monitoring infrastructure, applications, business services, and user experience continually.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Cloudlayout>
  );
};

export default DigitalizationPage;
