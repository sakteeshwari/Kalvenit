"use client";
import React from "react";
import Intelligencelayout from "../../../components/LayoutSubpages/Intelligencelayout/Intelligencelayout"

const DigitalizationPage = () => {
  return (
    <Intelligencelayout imgSrc="/assets/aiimg.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <div>
          <p className="tracking-wide leading-loose">Automating processes hold great promise for improving operational efficiencies, enhancing productivity, enable smart stakeholder experiences, pivoting Robotic Process Automation(RPA) to the centre of organizational transformation. KALVEN Technologies has earned an extra edge over others by combining RPA with Machine Learning and Artificial Intelligence to enable intelligent Automation’s human-level adaptive control. With skilled technical expertise and partnerships with industry leaders, including Automation Anywhere and UiPath, our engagement approach and diverse capabilities provide effective services that span the entire automation journey.</p>
          
        </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Intelligencelayout>
  );
};

export default DigitalizationPage;
