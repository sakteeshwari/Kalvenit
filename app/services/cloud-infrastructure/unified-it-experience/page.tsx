"use client";
import React from "react";
import Cloudlayout from "../../../components/LayoutSubpages/Cloudlayout/Cloudlayout"

const DigitalizationPage = () => {
  return (
     <Cloudlayout imgSrc="/assets/cloudinfrastructure.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">While traditional service desks have mainly focused on the speed and accuracy of ticket resolution, they have also let go of the immense opportunities for seamless collaboration, innovative user experiences and higher productivity. YASH Unified IT Experience Desk has been designed to be an ITIL V3 compliant service, that amalgamates end-to-end ticket ownership with user personalization and harmonizes service delivery, leveraging automation and self-heal opportunities in real-time.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Cloudlayout>
  );
};

export default DigitalizationPage;
