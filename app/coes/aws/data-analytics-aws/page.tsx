"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/awsimg2.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">KALVEN Software Solutions and Amazon Web Services (AWS) have partnered to empower enterprises across all industries to harness the true potential of their data. By combining the robust cloud infrastructure of AWS with KALVEN’s extensive expertise in data analytics, we offer customized solutions that transform raw data into actionable insights. These solutions enable businesses to make data-driven decisions, optimize their operations, gain a competitive advantage, and achieve their strategic objectives.

</p>  
             <p className="tracking-wide leading-loose">Experience the future of data management and analytics with KALVEN and AWS, and drive your business towards success.</p>
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
