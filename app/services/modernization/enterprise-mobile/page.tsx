"use client";
import React from "react";
import Modernizationlayout from "../../../components/Modernizationlayout/Modernizationlayout" 

const DigitalizationPage = () => {
  return (
    <Modernizationlayout imgSrc="/assets/modernizationpageimg.png">
       <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose"> <b>With businesses moving legacy applications</b> into the modernized digital world, enterprise mobile transformation helps companies boost productivity and agility while providing seamless experiences to their customers. With grounded insights and extensive planning, KALVEN helps reimagine your legacy applications for a customer-centric mobile ecosystem by balancing risk, return, and new technology adoption. Whether developing an application customized to your set of business processes or integrating various mobile app solutions, we empower you to gain an edge with a digital-centric engaging mobile experience.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Modernizationlayout>
  );
};

export default DigitalizationPage;
