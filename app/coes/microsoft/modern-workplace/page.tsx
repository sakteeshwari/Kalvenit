"use client";
import React from "react";
import Microsoftlayout from "../../../components/LayoutSubpages/Microsoftlayout/Microsoftlayout";

const CloudPage = () => {
    return (
        <Microsoftlayout imgSrc="/assets/micro.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">Microsoft 365 enables businesses to be agile, foster better stakeholder collaboration, improved enterprise communication,
                and an edge over the competition. With Microsoft 365, your business derives the benefits of an integrated cloud platform that delivers best in class productivity.
                It also enables easy data access to stakeholders with robust data security. </p>
                <img src="/assets/microsoft3.png" className="mt-6  rounded" alt="" />
            </div>
        </Microsoftlayout>
    );
};

export default CloudPage;
