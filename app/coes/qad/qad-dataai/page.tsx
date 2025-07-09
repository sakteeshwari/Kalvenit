"use client";
import React from "react";
import Qadlayout from "../../../components/LayoutSubpages/Qadlayout/Qadlayout";

const CloudPage = () => {
    return (
        <Qadlayout imgSrc="/assets/qad3.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">Curated business transformation service portfolio, with an emphasis on QAD-driven operational excellence, KALVEN provides a comprehensive portfolio of the digital, application lifecycle, and infrastructure services, enabling its customers to maximize the value of their QAD investments while helping them optimize their IT expenses for sustained business value. We combine application services leadership and strong cloud capabilities with expertise in discrete and process manufacturing. As a global system integrator, we architect and deliver complex business-IT solutions across technology domains.</p>
                <img src="/assets/qad4.png" className="mt-6  rounded" alt="" />
            </div>
        </Qadlayout>
    );
};

export default CloudPage;
