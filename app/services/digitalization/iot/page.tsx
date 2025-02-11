"use client";
import React from "react";
import DigitalizationLayout from "../../../components/Digitallayout/Digitallayout";

const CloudPage = () => {
    return (
        <DigitalizationLayout imgSrc="/assets/digitalizationpageimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose"> <b>KALVEN IoT</b> and Embedded systems competency enable organizations to harness the potential of their digital landscape with a structured yet practical approach towards IoT-led connectivity of the business value chain. With a dedicated CoE and a well-established portfolio of IoT offerings, and quality-oriented talent combined with a diverse group of ecosystem partners and alliances, we deliver best-fit platforms for every IoT engagement with a value-focused mindset. Leverage a business outcome-driven digital roadmap through innovation as we harness IoT’s inner crux in an extremely cost-optimal manner, ensuring business-aligned productivity and reliability.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
        </DigitalizationLayout>
    );
};

export default CloudPage;
