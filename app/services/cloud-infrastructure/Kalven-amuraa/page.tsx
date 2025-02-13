"use client";
import React from "react";
import Cloudlayout from "../../../components/LayoutSubpages/Cloudlayout/Cloudlayout"

const DigitalizationPage = () => {
  return (
    <Cloudlayout imgSrc="/assets/cloudinfrastructure.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <p className="tracking-wide leading-loose">Digital technologies are driving the most profound global macroeconomic changes today, disrupting business models & putting the enterprises on the trajectory of next level growth & innovation. YASH has been at the forefront of Digital Technologies for its customers and is planning to launch a powerful & pervasive digital platform AMURAA®, leveraging the power of cloud, AI/ML, RPA, Big data & analytics, DevOps, IoT, etc to help it’s customers re-imagine their businesses, stay ahead of the curve & create sustained value.
          AMURAA® encompass a comnbination of proprietary and partner led solution accelerators built by multiple YASH Digital COE’s such as Cloud & IT Infrastructure, AIOps, Automation, Data & Analytics, DevOps, etc. that makes it a powerful robust platform to foster innovation for customers. It will also embed APIs for plug-in capabilities via open source, and COTS software.
        </p>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Cloudlayout>
  );
};

export default DigitalizationPage;
