"use client";
import React from "react";
import Cloudlayout from "../../../components/LayoutSubpages/Cloudlayout/Cloudlayout"

const DigitalizationPage = () => {
  return (
     <Cloudlayout imgSrc="/assets/cloudinfrastructure.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">We help create agile workplaces enabling seamless collaboration between different workflows, processes, and applications. It allows remote working options and increases organizational productivity across desktops, and mobile web-based platforms with powerful analytics tools and sharing applications, without increasing manual overhead costs.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Cloudlayout>
  );
};

export default DigitalizationPage;
