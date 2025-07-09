"use client";
import React from "react";
import Salesforcelayout from "../../../components/LayoutSubpages/Salesforcelayout/Salesforcelayout"

const DigitalizationPage = () => {
  return (
    <Salesforcelayout imgSrc="/assets/salesforce2.png">
        <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">As part of KALVEN MuleSoft services offerings, we offer reliable and scalable integration services for frictionless connectivity across your applications, data, and devices that help create a more engaging customer experience. Our highly experienced integration consultants, with their comprehensive domain knowledge and expansive skillset, work proficiently to help you build a connected digital future with seamless MuleSoft integration. Our expertise in API-led connectivity, third-party system integration offering custom digital strategies helps ensure smooth workflows and well-managed, risk-controlled data sharing among applications.</p>
                <img src="/assets/saleslogin.png" className="mt-6  rounded" alt="" />
            </div>
    </Salesforcelayout>
  );
};

export default DigitalizationPage;
