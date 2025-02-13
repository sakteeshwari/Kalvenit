"use client";
import React from "react";
import Customerlayout from "../../../components/LayoutSubpages/Customerlayout/Customerlayout"

const DigitalizationPage = () => {
  return (
     <Customerlayout imgSrc="/assets/ecosystem.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">To meet today’s digital experience expectations, companies need to reimagine how they connect with customers using fresh perspectives – across all channels and touchpoints. At KALVEN Software Solutions, we facilitate our clients to fast-track customer relationship transformation programs by implementing winning CRM solutions across Microsoft, SAP, Pega, and Salesforce to boost sales and enhance customer interactions. Our end-to-end CRM services help provide everything you need in one place, from advisory, technology selection, implementation, support, migrations, and enhancements.

Understand and connect with your global customers and find unique ways to engage and market them with our CRM services.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Customerlayout>
  );
};

export default DigitalizationPage;
