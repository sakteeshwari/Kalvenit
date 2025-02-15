"use client";
import React from "react";
import Salesforcelayout from "../../../components/LayoutSubpages/Salesforcelayout/Salesforcelayout"

const DigitalizationPage = () => {
  return (
    <Salesforcelayout imgSrc="/assets/salesforce2.png">
        <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">KALVEN leverages an iterative delivery model for delivering cross-cloud solutions. Our breadth of services spanning design thinking and digital strategy infuse personalized experience for customers across Core CRM, Community Cloud, Lightning Platform migrations, DevOps, and external Apps. Harnessing Salesforces’s community cloud provides fully branded, collaborative spaces enhanced with easy-to-use, 100% mobile-responsive Lightning Communities.</p>
                <img src="/assets/saleslogin.png" className="mt-6  rounded" alt="" />
            </div>
    </Salesforcelayout>
  );
};

export default DigitalizationPage;
