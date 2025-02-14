"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">KALVEN Software Solutions has a deep understanding of Windows-based workloads on EC2, we help customers to optimize their EC2 instances for performance, security, and cost, reducing the time to market for new applications and services. Besides helping customers optimize the performance of Windows workloads on EC2 and we also provide guidance on selecting the right instance type and size, configuring networking and storage, and optimizing application performance for EC2 instances and ensuring Windows workloads on EC2 comply with industry and regulatory standards, provide guidance on best practices for security and compliance, helping customers minimize the risk of security breaches and data loss.</p>  
             
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
