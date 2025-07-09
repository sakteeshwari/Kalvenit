"use client";
import React from "react";
import Microsoftlayout from "../../../components/LayoutSubpages/Microsoftlayout/Microsoftlayout";

const CloudPage = () => {
    return (
        <Microsoftlayout imgSrc="/assets/micro.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">A motivated and dedicated team achieves great things in business. Therefore, companies must have a quick and efficient system of communication and collaboration for increased productivity. Microsoft Teams and Sharepoint is a  one-stop solution for instant messaging, voice/video calls, meetings, sharing and editing files, tracking projects, calendar, and much more. It seamlessly integrates with Office 365 and other third-party applications. Microsoft Teams divides information into selected channels and thus minimizes the interruption caused by unimportant conversations.</p>
                <img src="/assets/microsoft3.png" className="mt-6  rounded" alt="" />
            </div>
        </Microsoftlayout>
    );
};

export default CloudPage;
