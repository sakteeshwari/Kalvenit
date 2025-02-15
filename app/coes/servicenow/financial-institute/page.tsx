"use client";
import React from "react";
import Servicenowlayout from "../../../components/LayoutSubpages/Servicenowlayout/Servicenowlayout"

const DigitalizationPage = () => {
  return (
    <Servicenowlayout imgSrc="/assets/service.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">Customers crave seamless service & data security, but fragmented systems hinder it. ServiceNow empowers clients with self-service tools and integrates workflows to automate tasks & reduce costs. A unified platform allows proactive risk management for a smooth financial journey.</p>
            <img src="/assets/servicelogin.png" className="mt-6  rounded" alt="" />
            </div>
    </Servicenowlayout>
  );
};

export default DigitalizationPage;
