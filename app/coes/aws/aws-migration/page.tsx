"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">As an AWS strategic partner, KALVEN has the consulting, migration, and management expertise to help customers in their journey of teleporting to the cloud. Our key focus areas of work include Migration workloads to the cloud, Data center migration, SAP migration to AWS, Data migration and Database migration, Modernization, Enterprise platforms migration, Disaster recovery on AWS, and Any cloud to AWS.</p>  
             <p className="tracking-wide leading-loose">Take advantage of the latest that the cloud has to offer and expedite your best-fit migration journey with KALVEN and AWS.</p>
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
