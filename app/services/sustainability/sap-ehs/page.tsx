"use client";
import React from "react";
import Sustainabilitylayout from "../../../components/LayoutSubpages/Sustainabilitylayout/Sustainabilitylayout"

const DigitalizationPage = () => {
  return (
     <Sustainabilitylayout imgSrc="/assets/sustain.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
          <div>
          <p className="tracking-wide leading-loose">Sustainability and safety are no longer choices but imperatives for the organization. Companies need to mitigate environment, health, and safety risks by performing thorough risk assessments and communicating safe work practices.</p>

<p>Internal teams can benefit from the support of a competent regulatory partner to effectively implement the process.</p>
          </div>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Sustainabilitylayout>
  );
};

export default DigitalizationPage;
