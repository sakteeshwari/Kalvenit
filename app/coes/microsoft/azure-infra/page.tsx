"use client";
import React from "react";
import Microsoftlayout from "../../../components/LayoutSubpages/Microsoftlayout/Microsoftlayout";

const CloudPage = () => {
    return (
        <Microsoftlayout imgSrc="/assets/micro.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">KALVEN helps businesses utilize the ever-expanding power of Microsoft Azure Cloud Services and bring speed and scale to your business. Our expertise lies in leveraging Azure’s fast–paced innovation to deliver agile IT processes, thereby helping our customers manage and optimize their hybrid IT environment. </p>
                <img src="/assets/microsoft3.png" className="mt-6  rounded" alt="" />
            </div>
        </Microsoftlayout>
    );
};

export default CloudPage;
