"use client";
import React from "react";
import Microsoftlayout from "../../../components/LayoutSubpages/Microsoftlayout/Microsoftlayout";

const CloudPage = () => {
    return (
        <Microsoftlayout imgSrc="/assets/micro.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">In this age of relentless business transformation, it gets challenging to consolidate a unified and 360-degree view of data across all business functions. Microsoft Dynamics 365 offers a comprehensive platform to build customized solutions that combines CRM and ERP applications,
                 seamlessly running across both on-premise and cloud infrastructure. The power of Microsoft Dynamics 365, complemented with extensive industry experience of KALVEN Software Solutions, its in-depth technology know-how, and unparalleled service and support offering, help customers unleash the true value of Dynamics 365 solutions to stay ahead of the digital curve.</p>
                <img src="/assets/microsoft3.png" className="mt-6  rounded" alt="" />
            </div>
        </Microsoftlayout>
    );
};

export default CloudPage;
