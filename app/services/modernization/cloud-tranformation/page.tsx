"use client";
import React from "react";
import Modernizationlayout from "../../../components/Modernizationlayout/Modernizationlayout" 

const DigitalizationPage = () => {
  return (
    <Modernizationlayout imgSrc="/assets/modernizationpageimg.png">
       <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose"><b>Cloud adoption</b> is the catalyst for organizations to reduce data center footprint, modernize legacy applications while boosting business agility and scalability. KALVEN provides a managed suite of services to transform, manage, and secure your cloud while accelerating migration time and minimizing operational risks. Through cloud advisory assessments, application re-platforming, deploying foundation, and cloud automation, we help you drive maximum value from your multi-cloud investments. We strategize your cloud transformation roadmap for a simplified cloud environment with the advantage of cloud-native services and working with best-in-class innovators.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Modernizationlayout>
  );
};

export default DigitalizationPage;
