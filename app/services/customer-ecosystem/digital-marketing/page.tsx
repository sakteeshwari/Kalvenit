"use client";
import React from "react";
import Customerlayout from "../../../components/LayoutSubpages/Customerlayout/Customerlayout"

const DigitalizationPage = () => {
  return (
     <Customerlayout imgSrc="/assets/ecosystem.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">Today digital marketing is indispensable to all organizations as it helps them provide customers with seamless and delightful experiences, online and offline. With a well thought and fully functional digital marketing approach to personalizing experiences, we enable better branding and ensure a data-driven marketing strategy. We help you enhance and unify omnichannel customer experiences by addressing challenges and providing innovative solutions at every step of your marketing journey through analytics-driven insights for decision-making, personalized campaign management, and digital program optimization.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Customerlayout>
  );
};

export default DigitalizationPage;
