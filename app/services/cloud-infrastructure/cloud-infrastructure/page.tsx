"use client";
import React from "react";
import Cloudlayout from "../../../components/LayoutSubpages/Cloudlayout/Cloudlayout"

const DigitalizationPage = () => {
  return (
    <Cloudlayout imgSrc="/assets/cloudinfrastructure.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <div>
          <p className="tracking-wide leading-loose">On-premise applications are many a time expensive, difficult to enhance, costly to maintain, and inhibit business agility. Enterprises are increasingly moving to Cloud solutions that overcome these challenges to thrive in this digital-first world.</p>
          <p className="tracking-wide leading-loose">KALVEN Cloud Infrastructure Service portfolio is designed to transform at scale and help customers unlock business value by delivering hybrid, multi-cloud services and non-linear growth to accelerate digital transformation.
            Our cloud assessment & migration framework is a Cloud agnostic, vendor aware methodology that focuses on low risk, high return business transformation. Our strategy for the Cloud addresses adoption that supports our clients with immediate SaaS, PaaS, and IaaS service needs while developing platforms and support functions to drive innovation and accelerate the digital journey</p>
        </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Cloudlayout>
  );
};

export default DigitalizationPage;
