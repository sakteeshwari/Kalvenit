"use client";
import React from "react";
import Intelligencelayout from "../../../components/LayoutSubpages/Intelligencelayout/Intelligencelayout"

const DigitalizationPage = () => {
  return (
    <Intelligencelayout imgSrc="/assets/aiimg.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <div>
          <p className="tracking-wide leading-loose">Enterprises need data-enabled contextualization for optimized operations and predictive capabilities based on a concert of interconnected networks and distributed data management systems. KALVEN provides customized solutions for the intelligent convergence of Information networks into one integrated platform to enable higher reliability and superior decision making. We leverage connected convergence of technologies for seamless collaboration across processes and systems with a consistent digital-first, omnichannel experience. Bridging your networks, devices, and platforms into an integrated approach that enables real-time visibility, we are opening doors for creating a ‘connect everything and everyone’ scenario through convergence.</p>
          
        </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Intelligencelayout>
  );
};

export default DigitalizationPage;
