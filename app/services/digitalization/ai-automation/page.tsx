"use client";
import React from "react";
import DigitalizationLayout from "../../../components/LayoutSubpages/Digitallayout/Digitallayout";

const CloudPage = () => {
    return (
        <DigitalizationLayout imgSrc="/assets/digitalizationpageimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose"><b>AI and Automation</b> have unleashed cognitive transformations for intelligent enterprises that focus on a digital-centric future. Delivering value at scale, the AI and Automation teams at KALVEN helps set up an enterprise-wide ecosystem driven by end-to-end digitalization. We provide intelligent automation advisory, implementation, and support services to automate repetitive business processes in diverse areas, including finance, invoicing, marketing, and claims processing across industries. Our automation services integrate AI capabilities to optimize solutions and help drive operational excellence and ROI maximization.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
        </DigitalizationLayout>
    );
};

export default CloudPage;
