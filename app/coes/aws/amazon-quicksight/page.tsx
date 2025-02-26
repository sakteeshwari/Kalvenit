"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/awsimg2.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">KALVEN has utilized Amazon QuickSight, a powerful cloud-based Business Intelligence tool, to effectively analyze large amounts of data from multiple sources and create insightful visualizations. Our expertise in QuickSight has enabled us to offer various solutions and services to our clients, including cloud integrations and data source management. At KALVEN, we possess the necessary resources, experience, and infrastructure to assist organizations in implementing, deploying, supporting, and managing AWS QuickSight programs.</p>  
             
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
