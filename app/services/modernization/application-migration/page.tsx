"use client";
import React from "react";
import Modernizationlayout from "../../../components/LayoutSubpages/Modernizationlayout/Modernizationlayout" 

const DigitalizationPage = () => {
  return (
    <Modernizationlayout imgSrc="/assets/modernizationpageimg.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose"><b>Digital technologies</b>, cloud-native developments, and increasing competitive pressures are making legacy modernization a mission-critical imperative. KALVEN helps revitalize legacy IT landscapes without interrupting business operations and moving applications to a scalable, agile platform by applying migration and modernization. We re-engineer your applications portfolio with a factory approach to rapidly enable digital change, unlock the value in your legacy applications while ensuring application security across the entire ecosystem. Accelerate your journey to the cloud by implementing a low-risk modernization methodology and unlock business value to reduce complexity and renew focus on innovation.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Modernizationlayout>
  );
};

export default DigitalizationPage;
