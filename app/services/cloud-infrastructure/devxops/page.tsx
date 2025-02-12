"use client";
import React from "react";
import Cloudlayout from "../../../components/LayoutSubpages/Cloudlayout/Cloudlayout"

const DigitalizationPage = () => {
  return (
     <Cloudlayout imgSrc="/assets/cloudinfrastructure.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">At KALVEN, we empower businesses to enhance operational efficiencies, reliability, and availability of platforms and applications, leveraging our state-of-the-art DevXOps solutions and cutting-edge practices. It helps organizations to enhance collaboration, improve quality through automation, and increase efficiency, taking businesses from development to deployment at warp speed. Whether your organization follows agile, waterfall, scrum, or lean methodologies, our DevXOps framework combines development, operations, and user experience seamlessly for superior outcomes and optimized deployments.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Cloudlayout>
  );
};

export default DigitalizationPage;
