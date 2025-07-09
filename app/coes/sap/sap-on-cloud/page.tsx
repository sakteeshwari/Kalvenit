"use client";
import React from "react";
import Saplayout from "../../../components/LayoutSubpages/Saplayout/Saplayout";

const CloudPage = () => {
    return (
        <Saplayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">Increasing complexity in the business ecosystem, coupled with the rising volume of transactions and the need for processing data into intelligence while lowering CAPEX, makes it imperative for organizations to look for viable solutions that offer flexibility, agility, and access to data real-time. It has translated into the adoption of cloud technologies based upon an operating expense model.  </p>
           <p className="tracking-wide leading-loose">Cloud, being a source of real-time business innovation at scale, acts as a powerful catalyst for organizations to realize their digital ambitions. SAP on Cloud can be a game-changer for organizations seeking new growth opportunities. For organizations running SAP, the Cloud offers multiple benefits, such as performance optimization and cost efficiencies.  </p>
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Saplayout>
    );
};

export default CloudPage;
