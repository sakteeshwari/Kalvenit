"use client";
import React from "react";
import DigitalizationLayout from "../../../components/Digitallayout/Digitallayout";

const CloudPage = () => {
    return (
        <DigitalizationLayout imgSrc="/assets/digitalizationpageimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose"> <b>Extended Reality (XR)</b> is the next wave for amplifying human experience across the enterprise with the already established momentum for immersive technologies. With extensive expertise in <b>Augmented Reality (AR), Virtual Reality (VR)</b>, and <b>Mixed Reality (MR),</b> in combination with a seasoned team of 3D artists, developers, and designers, KALVEN is well-positioned to turn any story into a 3D hyper-reality. Using a curated design thinking approach, we deliver end-to-end innovative XR experiences from experimental designing to visualizing complex industrial projects and theoretical modeling. By combining art and technology, we weave magic in pixels and bytes.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
        </DigitalizationLayout>
    );
};

export default CloudPage;
