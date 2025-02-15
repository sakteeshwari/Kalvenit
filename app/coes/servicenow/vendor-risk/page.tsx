"use client";
import React from "react";
import Servicenowlayout from "../../../components/LayoutSubpages/Servicenowlayout/Servicenowlayout"

const DigitalizationPage = () => {
  return (
    <Servicenowlayout imgSrc="/assets/service.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">In today’s interconnected business landscape, managing vendor relationships and mitigating risks has become crucial for organizations. Traditionally, managing vendor risk has been an inefficient and error-prone task, relying heavily on manual methods like spreadsheets, email, and essential tools for vendor risk management. ServiceNow offers a robust and comprehensive Vendor Risk Management Solution that helps businesses streamline their vendor management processes and ensure smooth on boarding and compliance tracking.   </p>
            <img src="/assets/servicelogin.png" className="mt-6  rounded" alt="" />
            </div>
    </Servicenowlayout>
  );
};

export default DigitalizationPage;
