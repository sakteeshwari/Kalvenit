"use client";
import React from "react";
import Customerlayout from "../../../components/LayoutSubpages/Customerlayout/Customerlayout"

const DigitalizationPage = () => {
  return (
     <Customerlayout imgSrc="/assets/ecosystem.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">As social listening continues to evolve, it is essential to nurture social mutuality with your customers. KALVEN Social listening services enable a systematic way of interpreting your social media insights across the extended enterprise to help you tap into real-time market intelligence. We use social listening to correlate and contextualize your crucial business insights with actionable recommendations to profile your prospects and customers, increase brand awareness, and analyze market trends for more robust engagement and operational excellence.
Excel in social intelligence to understand buyer behavior better and create positive perceptions around the brand.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Customerlayout>
  );
};

export default DigitalizationPage;
