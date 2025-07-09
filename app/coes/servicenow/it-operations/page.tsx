"use client";
import React from "react";
import Servicenowlayout from "../../../components/LayoutSubpages/Servicenowlayout/Servicenowlayout"

const DigitalizationPage = () => {
  return (
    <Servicenowlayout imgSrc="/assets/service.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">The elements of ServiceNow ITOM focuses on automating long and monotonous functions of your IT team as well as lower IT costs, upgrade IT, and enhance business service accessibility. 

KALVEN optimizes ITOM practices to help organizations boost their operational excellence. Backed by in-depth proficiencies, our domain experts implement ITOM solutions for your business to detect and diagnose service issues quickly.  </p>
            <img src="/assets/servicelogin.png" className="mt-6  rounded" alt="" />
            </div>
    </Servicenowlayout>
  );
};

export default DigitalizationPage;
