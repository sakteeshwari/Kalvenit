"use client";
import React from "react";
import Customerlayout from "../../../components/LayoutSubpages/Customerlayout/Customerlayout"

const DigitalizationPage = () => {
  return (
     <Customerlayout imgSrc="/assets/ecosystem.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">KALVEN CX expertise applies a design-thinking approach for providing a multi-channel engagement platform while keeping customers at the center to drive exceptional stakeholder experiences. Be it the product, interaction, or branding experiences, YASH Technologies provides cutting-edge technological expertise and advisory from domain experts to make every association genuinely exciting, prized, and in line with customer expectations. With a vast repository of the latest tools and applications, our co-innovation CX design services deliver real-time experience focused insights while enhancing branding and immersive customer interactions with a human-centric approach.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Customerlayout>
  );
};

export default DigitalizationPage;
