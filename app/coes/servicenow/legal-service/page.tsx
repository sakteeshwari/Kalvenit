"use client";
import React from "react";
import Servicenowlayout from "../../../components/LayoutSubpages/Servicenowlayout/Servicenowlayout"

const DigitalizationPage = () => {
  return (
    <Servicenowlayout imgSrc="/assets/service.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">Streamline your legal processes and bring digital transformation to your legal operations with efficient service delivery while reducing risk and increasing productivity. The ServiceNow Legal Service Delivery Product empowers legal teams with data-driven decision-making capabilities, automated workflows, employee self-service options, real-time information visibility, optimized internal legal workforce, and enhanced work distribution, including alternative delivery models. By leveraging these features, legal departments can streamline their processes, enhance collaboration, and align their operations with the organization’s overall business objectives.</p>
            <img src="/assets/servicelogin.png" className="mt-6  rounded" alt="" />
            </div>
    </Servicenowlayout>
  );
};

export default DigitalizationPage;
