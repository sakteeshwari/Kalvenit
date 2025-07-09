"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/awsimg2.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">Connectivity and efficiency are pillars of success in the dynamic landscape of technology. At YASH Technologies, we bring our Amazon Web Services (AWS) API Gateway expertise to the table, opening up new possibilities for seamless integration, enhanced scalability, and ironclad security. Modern businesses reap significant benefits by adopting AWS API Gateway, a fully managed service that simplifies API creation, deployment, and management. This tool empowers businesses to bridge gaps between applications and services, transforming how we connect and interact.</p>  
             
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
