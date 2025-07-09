"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/awsimg2.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">On the journey to adopting cloud-first strategies, enterprises need experienced guidance while ensuring flexibility, scalability, and cost-efficiencies in their IT infrastructure deployments. KALVEN and AWS work together to simplify enterprise-wide cloud adoption by following the AWS Cloud Transformation Maturity Model (CTMM), which provides you with secure ways to leverage the transformational power of the cloud. With unmatched expertise in successfully undertaking complex global cloud transformation programs for enterprises, we make sure that every step is placed uniquely to help an organization accomplish its vision of successful digital transformation.</p>  
             
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
