"use client";
import React from "react";
import Servicenowlayout from "../../../components/LayoutSubpages/Servicenowlayout/Servicenowlayout"

const DigitalizationPage = () => {
  return (
    <Servicenowlayout imgSrc="/assets/service.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">KALVEN is your ServiceNow Partner for ServiceNow HR Service Delivery (HRSD). We work to streamline ServiceNow HRSD by utilizing our global Center of Excellence (CoE) through our Certified ServiceNow talents and taking advantage of the in-depth HR transformation expertise that KALVEN is known for. </p>
            <img src="/assets/servicelogin.png" className="mt-6  rounded" alt="" />
            </div>
    </Servicenowlayout>
  );
};

export default DigitalizationPage;
