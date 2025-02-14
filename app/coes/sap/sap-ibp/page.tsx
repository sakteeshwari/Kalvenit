"use client";
import React from "react";
import Saplayout from "../../../components/LayoutSubpages/Saplayout/Saplayout";

const CloudPage = () => {
    return (
        <Saplayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">SAP Integrated Business Planning (IBP) is KALVEN Software Solutions’ chosen transformation tool to build a resilient and future-ready supply chain for businesses. By integrating advanced AI/ML capabilities, KALVEN empowers manufacturers, distributors, retailers, and service organizations to develop and execute real-time plans with enhanced precision and agility.</p>
           <p className="tracking-wide leading-loose">In today’s volatile market landscape, businesses must leverage robust digital backbones to adapt to dynamic supply chain challenges. KALVEN’s AI-powered SAP IBP solutions enable intelligent, end-to-end supply chain planning, helping organizations digitize business strategies by incorporating predictive analytics and machine learning models for demand forecasting, anomaly detection, and autonomous optimization.</p>
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96  rounded" alt="" />
            </div>
        </Saplayout>
    );
};

export default CloudPage;
