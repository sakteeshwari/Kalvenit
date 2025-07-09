"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/awsimg2.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">It is an era where data is fuel, and businesses are thriving based on their capacity to consume and exploit data. Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information. As an Advanced APN (Amazon Partner Network) Partner, KALVEN combines its in-depth knowledge of big data environments with AWS consulting and deployment. We are proficient and fully equipped with the resources, experience, and infrastructure to help organizations set up, deploy, support, and manage AWS Kinesis programs.</p>  
             
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
