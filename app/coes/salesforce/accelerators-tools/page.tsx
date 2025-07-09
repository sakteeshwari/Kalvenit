"use client";
import React from "react";
import Salesforcelayout from "../../../components/LayoutSubpages/Salesforcelayout/Salesforcelayout"

const DigitalizationPage = () => {
  return (
    <Salesforcelayout imgSrc="/assets/salesforce2.png">
        <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">Unleash the power of AI to transform your business. KALVEN presents a comprehensive suite of next-generation AI accelerators and tools designed to maximize profitability and optimize operations. From streamlined dealer management to enhanced customer experiences, these solutions address key challenges across various industries, empowering you to achieve significant gains in efficiency, revenue, and risk mitigation.</p>
                <img src="/assets/saleslogin.png" className="mt-6  rounded" alt="" />
            </div>
    </Salesforcelayout>
  );
};

export default DigitalizationPage;
