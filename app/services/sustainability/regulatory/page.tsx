"use client";
import React from "react";
import Sustainabilitylayout from "../../../components/LayoutSubpages/Sustainabilitylayout/Sustainabilitylayout"

const DigitalizationPage = () => {
  return (
     <Sustainabilitylayout imgSrc="/assets/sustain.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">The dynamic nature of product regulations and compliance necessitates organizations to be agile in tracking, identifying, and managing the impact of such changes on their product portfolio and overall business.

<p>EHS (Environmental Health and Safety) and Product teams often grapple with complicated and continually altering regulatory obligations in multiple jurisdictions. Moreover, creating, updating, and maintaining current and compliant documents, including (M) SDS (Safety Data Sheets), Labels, TremCards, and others, can be a challenging and resource-intensive task.</p>

These teams stand to benefit from the expertise of a competent regulatory partner.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Sustainabilitylayout>
  );
};

export default DigitalizationPage;
