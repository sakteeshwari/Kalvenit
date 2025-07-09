"use client";
import React from "react";
import Qadlayout from "../../../components/LayoutSubpages/Qadlayout/Qadlayout";

const CloudPage = () => {
    return (
        <Qadlayout imgSrc="/assets/qad3.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">QAD cloud possesses nearly all of the functionality of QAD Enterprise Applications. KALVEN Software Solutions is a single point contact and management for implementation, customization, to cater to user access needs and to assist in solving security-related issues with the help of QAD cloud services. We offer round-the-clock global assistance in offering QAD cloud services that are trustworthy, secure, and compliant.</p>
                <img src="/assets/qad4.png" className="mt-6  rounded" alt="" />
            </div>
        </Qadlayout>
    );
};

export default CloudPage;
