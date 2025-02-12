"use client";
import React from "react";
import Cloudlayout from "../../../components/LayoutSubpages/Cloudlayout/Cloudlayout"

const DigitalizationPage = () => {
  return (
     <Cloudlayout imgSrc="/assets/cloudinfrastructure.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">The challenges associated with governing and managing cloud cost in public cloud infrastructure 
              are intricate due to the complexity of pricing structures, cloud architecture, and deployed services such as Infrastructure as a service (IaaS) or Platform as a service (PaaS), which requires participation from cross-functional teams. Therefore, organizations must have a well-defined and structured Cloud FinOps model early in their cloud journey to operate more economically.Our Cloud FinOps Services will evaluate your current Cloud FinOps maturity and partner with you to design and implement market-leading FinOps capabilities to drive maximum value from your investment in the Cloud.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Cloudlayout>
  );
};

export default DigitalizationPage;
