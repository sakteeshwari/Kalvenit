"use client";
import React from "react";
import Customerlayout from "../../../components/LayoutSubpages/Customerlayout/Customerlayout"

const DigitalizationPage = () => {
  return (
     <Customerlayout imgSrc="/assets/ecosystem.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">We help organizations move their customer-centricity to a wholly different level by identifying unique opportunities to enhance customer engagement and delivering interactive digital experiences through high-performance mobile solutions. At KALVEN, we take a human-centric approach to creating and launching offerings that improve customer experiences, reshape talent strategies, and expand service delivery. By combining our in-depth expertise in developing and deploying customized mobility solutions with relevant tactical and strategic business aspects, we help you design and deliver incredibly connected experiences across multiple touchpoints through mobile solutions.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
    </Customerlayout>
  );
};

export default DigitalizationPage;
