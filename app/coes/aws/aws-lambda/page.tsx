"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">KALVEN has been at the forefront of delivering solutions that drive efficiency and performance. We leverage AWS Lambda to enable running code for real time data processing, streaming and file processing and custom backend services without the need for managing servers or provisioning infrastructure. AWS Lambda helps run all kinds of code, simple to complex, with speed and scale. Our customers are able to Accelerate iterative development, modernize applications, enhance code performance and focus on innovation with AWS Lambda.</p>  
             
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
