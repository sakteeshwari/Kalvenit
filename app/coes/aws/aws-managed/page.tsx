"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">Enterprises’ expectations of moving to the cloud are high on outcomes. However, several complexities during implementation, the proliferation of potentially risky configurations, and cloud expenditure keep them on their toes. To help you recognize and leverage the cloud’s advantages, KALVEN AWS Managed Services (YAMS) operates AWS on your behalf, providing a secure and compliant AWS Landing Zone, a proven enterprise operating model, on-going cost optimization, and day-to-day infrastructure management. We help you figure out the correct equation and balance technology with practical considerations to achieve agility and greater collaboration within the IT ecosystem.</p>  
             
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
