"use client";
import React from "react";
import Intelligencelayout from "../../../components/LayoutSubpages/Intelligencelayout/Intelligencelayout"

const DigitalizationPage = () => {
  return (
    <Intelligencelayout imgSrc="/assets/aiimg.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <div>
          <p className="tracking-wide leading-loose"><b>Cognitive 3D</b> helps reimagine reality enriched with human-centric and data-rich experiences enabling real-time insights. At KALVEN, we believe in amplifying the usage of engaging, multisensory digital experiences across your enterprise landscape through cognitive 3D technologies like AR/ VR/ MR. We empower enterprises to enhance omnichannel experiences for better digital customer conversions. Using a curated design thinking approach, we deliver augmented, immersive, and VR experiences from experimental designing, visualizing a real-world environment, scaling your transformation journey, to viewing reality with fresh perspectives.</p>
          
        </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Intelligencelayout>
  );
};

export default DigitalizationPage;
