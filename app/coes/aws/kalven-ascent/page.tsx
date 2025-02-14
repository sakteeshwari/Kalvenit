"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">As an “AWS SAP Competency Partner” and a globally renowned partner for “SAP Services,” KALVEN has extensive experience assisting enterprises in migrating SAP Landscapes to the AWS platform while ensuring agility with high performance. Leveraging our in-depth SAP expertise and a range of proprietary tools and accelerators, the highly acknowledged KALVEN Software Solutions ASCENT Next-Gen Services and delivery framework enables businesses to migrate and run SAP applications on AWS confidently. Being at the forefront of helping SAP clients drive innovation, KALVEN has worked with customers of all sizes, including multiple Fortune 500 organizations, in accelerating their SAP on AWS journey.</p>  
            
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
