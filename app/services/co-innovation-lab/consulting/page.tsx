"use client";
import React from "react";
import Coinnovationlayout from "../../../components/LayoutSubpages/Coinnovationlayout/Coinnovationlayout"

const DigitalizationPage = () => {
  return (
    <Coinnovationlayout imgSrc="/assets/coinnovationlab.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose"><b>We provide extensive tailor-made consulting services</b> to accelerate interactive innovation in your organization and simplify complex processes. We enable innovation through human-centric design thinking, applying lean methodologies, and creating a distinguished knowledge panel for supporting the innovation process. While designing processes, we pinpoint improvement areas to address market pressures by leveraging the right mix of technologies, key performance indicators, and idea evaluation strategies. With a strong legacy of innovation in technology services and global experience in providing insightful business perspectives, we help companies explore new approaches to business challenges and new opportunities.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Coinnovationlayout>
  );
};

export default DigitalizationPage;
