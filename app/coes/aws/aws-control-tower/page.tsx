"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">KALVEN- Your Partner of Choice in implementing AWS Control Tower Landing Zone
           AWS has undeniably transformed resource utilization management with its self-service approach. However, it also introduces significant challenges such as increased costs due to underutilized or unnecessary resources, security risks posed by unused or unmonitored resources, and complexity in managing many resources while ensuring compliance with policies and best practices. This puts organizations in a difficult position to balance best practices with effective cloud budget management.</p>  
             <p className="tracking-wide leading-loose">Take advantage of the latest that the cloud has to offer and expedite your best-fit migration journey with KALVEN and AWS.</p>
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
