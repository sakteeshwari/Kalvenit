"use client";
import React from "react";
import Servicenowlayout from "../../../components/LayoutSubpages/Servicenowlayout/Servicenowlayout"

const DigitalizationPage = () => {
  return (
    <Servicenowlayout imgSrc="/assets/service.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">With ServiceNow’s SPM–organize, prioritize, and track tasks in sync with your business goals. Empower the IT team to add value to the organization, respond faster to changes, and optimize resources to focus on newer ideas. Furthermore, benefit from comprehensive visibility into portfolio investments and business goals for enhanced results.   </p>
            <img src="/assets/servicelogin.png" className="mt-6  rounded" alt="" />
            </div>
    </Servicenowlayout>
  );
};

export default DigitalizationPage;
