"use client";
import React from "react";
import DigitalizationLayout from "../../../components/LayoutSubpages/Digitallayout/Digitallayout";

const CloudPage = () => {
    return (
        <DigitalizationLayout imgSrc="/assets/digitalizationpageimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose">Companies today are progressively changing their global enterprise <b>Mobility</b> programs through digitalization and automation. To help industry leaders navigate a connected future with an enhanced mobility landscape, we offer an integrated suite of offerings that reinvent, design, and develop custom mobile applications and wireless technology solutions. With a thoughtfully designed approach, we leverage the power of next-generation tools and technologies to improve workforce collaboration, deepen customer relationships and foster a connected enterprise.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
        </DigitalizationLayout>
    );
};

export default CloudPage;
