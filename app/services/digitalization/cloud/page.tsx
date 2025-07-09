"use client";
import React from "react";
import DigitalizationLayout from "../../../components/LayoutSubpages/Digitallayout/Digitallayout";

const CloudPage = () => {
    return (
        <DigitalizationLayout imgSrc="/assets/digitalizationpageimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose"> <b>Cloud</b> the given foundational role in fostering the end-to-end digital transformation of enterprises, KALVEN Technologies offers a practical,
                customized, and industry-centric approach to strategizing-architecting, implementing, and supporting multi-cloud environments. Our cloud practice provides a
                broad spectrum of services bringing leadership and expertise packaged as a complete managed service hosted on a secure cloud architecture that integrates the latest
                technologies blended with an established partner ecosystem comprising of Azure, AWS, Google Cloud Platform. We help you realize digitalization outcomes by adopting
                a cloud-native philosophy with the ultimate goal of creating smarter enterprises driven by cloud-enabled innovation.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
        </DigitalizationLayout>
    );
};

export default CloudPage;
