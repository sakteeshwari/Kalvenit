"use client";
import React from "react";
import Salesforcelayout from "../../../components/LayoutSubpages/Salesforcelayout/Salesforcelayout"

const DigitalizationPage = () => {
  return (
    <Salesforcelayout imgSrc="/assets/salesforce2.png">
        <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">KALVEN enables its clients with interplay of CRM strategies across the SFDC platform. Helping enterprises derive value from their Salesforce investments with services ranging from platform assessment, application architecture, implementation, and management, our experts provide focused and specialized advisory services that help you enhance the full potential of Salesforce effectiveness.</p>
                <img src="/assets/saleslogin.png" className="mt-6  rounded" alt="" />
            </div>
    </Salesforcelayout>
  );
};

export default DigitalizationPage;
