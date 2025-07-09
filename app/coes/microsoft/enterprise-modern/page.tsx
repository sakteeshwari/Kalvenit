"use client";
import React from "react";
import Microsoftlayout from "../../../components/LayoutSubpages/Microsoftlayout/Microsoftlayout";

const CloudPage = () => {
    return (
        <Microsoftlayout imgSrc="/assets/micro.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">Bringing a breadth of services with an unmatched partnership with Microsoft, our comprehensive Azure cloud service portfolio supports you with an agile 360° approach throughout your cloud engagement journey. With a structured and risk-mitigated cloud strategy to migrate existing infrastructure & applications to Azure, we help you gain scalability, security, networking & performance capabilities. Working in partnership with your team, our proven experience and end-to-end cloud services for Azure helps develop a technology foundation based on new hybrid, edge, and multi-cloud initiatives. By integrating best-in-class security, and comprehensive cloud-managed services, we engineer platforms and modernize infrastructure through automation and software-defined capabilities.</p>
                <img src="/assets/microsoft3.png" className="mt-6  rounded" alt="" />
            </div>
        </Microsoftlayout>
    );
};

export default CloudPage;
