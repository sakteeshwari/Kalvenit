"use client";
import React from "react";
import Coinnovationlayout from "../../../components/LayoutSubpages/Coinnovationlayout/Coinnovationlayout"

const DigitalizationPage = () => {
  return (
    <Coinnovationlayout imgSrc="/assets/coinnovationlab.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose"><b>With a controlled and inclusive approach</b> from design to testing, we help you accomplish the most satisfactory conclusion from your innovation-centric software solution. We use our broad application development expertise and proven industry best practices during the project’s lifecycle to ensure that the solution is of high quality. We transform your goals into quantifiable outcomes and ensure that the solutions delivered fit the way people in your organization work, easing user adoption.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Coinnovationlayout>
  );
};

export default DigitalizationPage;
