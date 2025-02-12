"use client";
import React from "react";
import Cloudlayout from "../../../components/LayoutSubpages/Cloudlayout/Cloudlayout"

const DigitalizationPage = () => {
  return (
     <Cloudlayout imgSrc="/assets/cloudinfrastructure.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">The Well Architected framework assessment is a comprehensive service that helps you to assess your cloud architecture & deployment against hyperscaler best practices. This assessment will examine the reliability, security, cost optimization, operational excellence, and performance efficiency of your workload’s design and provide recommendations & actionable steps to improve your cloud deployment.

Yash’s well-architected framework assessment helps organizations improve security, cost savings, resiliency, and streamline cloud processes.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Cloudlayout>
  );
};

export default DigitalizationPage;
