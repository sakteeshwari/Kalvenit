"use client";
import React from "react";
import Sustainabilitylayout from "../../../components/LayoutSubpages/Sustainabilitylayout/Sustainabilitylayout"

const DigitalizationPage = () => {
  return (
    <Sustainabilitylayout imgSrc="/assets/sustain.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <div>
          <p className="tracking-wide leading-loose">Businesses today have to increasingly monitor and manage regulatory compliances on various health and safety parameters for operational and competitive efficiency. Apart from occupational, legal, and financial risks, there are ramifications pertinent to the organization’s image and reputation that need to be considered. Businesses also face increased pressure from
            local authorities and stakeholders to remain compliant.</p>

          <p className="tracking-wide leading-loose">Organizations can get the best results by leveraging strategic technology solutions for managing their EHS compliance and sustainability initiatives.</p>
        </div>


        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Sustainabilitylayout>
  );
};

export default DigitalizationPage;
