"use client";
import React from "react";
import Intelligencelayout from "../../../components/LayoutSubpages/Intelligencelayout/Intelligencelayout"

const DigitalizationPage = () => {
  return (
    <Intelligencelayout imgSrc="/assets/aiimg.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <div>
          <p className="tracking-wide leading-loose">AI investments help drive speed and agility to enable building a data-driven intelligent enterprise. Keeping design thinking at the forefront, we provide you with an AI strategy, a constellation of tools, deep developer expertise, and processes that train deep learning algorithms in your systems to behave more like humans. Using logic-based insights, hyper-automation, and engagement capabilities derived through modern data architectures and artificial intelligence, you can rely on KALVEN for driving successful business transformation. Jumpstart your journey to better business insights as we help you harness the power of AI coupled with human-level intuitions.</p>
          
        </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Intelligencelayout>
  );
};

export default DigitalizationPage;
