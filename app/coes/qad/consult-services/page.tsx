"use client";
import React from "react";
import Qadlayout from "../../../components/LayoutSubpages/Qadlayout/Qadlayout";

const CloudPage = () => {
    return (
        <Qadlayout imgSrc="/assets/qad3.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">As they engage in digital technology, build new capabilities, and enter new markets, businesses demand a service delivery system that can provide quick and localized help while controlling costs. The shared services model outperforms centralized services in terms of customer service, performance monitoring, and continuous improvement. QAD’s “Shared Service Model” enables us to offer lower-cost IT services such as development, augmentation, support, and maintenance. Overpaying for unutilized hours and services will be avoided due to politeness, flexibility, and customization.</p>
                <img src="/assets/qad4.png" className="mt-6  rounded" alt="" />
            </div>
        </Qadlayout>
    );
};

export default CloudPage;
