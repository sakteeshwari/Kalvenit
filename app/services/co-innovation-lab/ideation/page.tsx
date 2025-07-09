"use client";
import React from "react";
import Coinnovationlayout from "../../../components/LayoutSubpages/Coinnovationlayout/Coinnovationlayout"

const DigitalizationPage = () => {
  return (
    <Coinnovationlayout imgSrc="/assets/coinnovationlab.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose"><b>Innovation</b> helps organizations prepare to respond to evolving technologies and rapid digitalization in today’s hyper-competitive environment. We believe ideation paves the path to establish a unique position for your organization. With our collective intelligence and innovative ecosystem of tailored tools and processes, we collaborate and emphasize generating ideas. Based on our extensive expertise in ideation and industry processes, we build an innovative framework to help you collaborate and go-to-market quickly.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Coinnovationlayout>
  );
};

export default DigitalizationPage;
