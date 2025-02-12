"use client";
import React from "react";
import Gccslayout from "../../../components/LayoutSubpages/Gccslayout/Gccslayout"

const DigitalizationPage = () => {
  return (
    <Gccslayout imgSrc="/assets/gccsimg.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <div>
          <p className="tracking-wide leading-loose">Change is good. It’s your intrepid journey from “We’ve always done it this way” to “Let’s do it differently this time.” Change is moving ahead with time. It is progress.</p>
          <p className="tracking-wide leading-loose mt-4">In the last couple of years, KALVEN Software Solutions has emerged as one of the most trusted business transformation partners for global organizations with SAP centric landscapes. As one of the largest SAP services providers with a team of 3000+ consultants worldwide, proven Industry expertise across Manufacturing, Lifesciences, Mining and Utilities, in-depth Functional and Technical domain knowledge across major SAP solution areas, 25 well organized SAP CoE’s and SME’s with advisory, strategic consulting and business road-mapping capabilities, we help organizations with complex SAP landscapes drive transformation, innovation and realize tangible business value.
            We are among a handful of SAP service providers who can successfully deliver implementation, roll-outs, cloud migrations, upgrades, and support across SAP landscapes of all sizes, complexity, and Industry verticals – in a collaborative and consultative manner. Helping organizations drive outstanding employee, and customer experiences are our forte.</p>
        </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Gccslayout>
  );
};

export default DigitalizationPage;
