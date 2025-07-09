"use client";
import React from "react";
import Cloudlayout from "../../../components/LayoutSubpages/Cloudlayout/Cloudlayout"

const DigitalizationPage = () => {
  return (
     <Cloudlayout imgSrc="/assets/cloudinfrastructure.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">In the present day scenario, an agile, smart, optimized, and robust core IT infrastructure will enhance business growth and adapt to changes in the business environment. Due to the breadth and depth of its experience in next-gen Infrastructure Management, KALVEN Technologies is the Partner of Choice for leading organizations globally for providing end-to-end Core Infrastructure Support Services. Driven by the Core Infrastructure Centre of Excellence, our experts have helped organizations outperform through datacenter transformation, network modernization, Network Operations Centre Automation, and other similar initiatives.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Cloudlayout>
  );
};

export default DigitalizationPage;
