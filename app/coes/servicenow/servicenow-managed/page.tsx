"use client";
import React from "react";
import Servicenowlayout from "../../../components/LayoutSubpages/Servicenowlayout/Servicenowlayout"

const DigitalizationPage = () => {
  return (
    <Servicenowlayout imgSrc="/assets/service.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">KALVEN offers a managed service model for the ServiceNow platform, offloading day-to-day management, including platform management, enhancements and fixes to existing applications, new capabilities development, platform scaling support, and more. Our expert team of administrators and developers can help monitor the performance health of your network and digital services so that you can respond quickly to disruption and even proactively mitigate the chance of disruption.</p>
            <img src="/assets/servicelogin.png" className="mt-6  rounded" alt="" />
            </div>
    </Servicenowlayout>
  );
};

export default DigitalizationPage;
