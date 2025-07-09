"use client";
import React from "react";
import DigitalizationLayout from "../../../components/LayoutSubpages/Digitallayout/Digitallayout";

const CloudPage = () => {
    return (
        <DigitalizationLayout imgSrc="/assets/digitalizationpageimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <p className="tracking-wide leading-loose"> <b>With the rising influence of social media</b>, enterprises need to harness the massive opportunities to drive global conversations, influence brand image, understand their customer’s needs, and engage with active-prospective customers and partners in real-time. To enable successful entry and expansion in social media, YASH has created a suite of services that allow businesses to identify the most appropriate social media platforms for engagement-promotion and marketing of products and services. We enable organizations to attract followers and target organizations through effective social media marketing. We design effective, customized, and well-thought-out digital campaigns from the insights garnered through consistent audience monitoring and combining the same with an in-depth understanding of the organizations overarching social media and marketing strategies. Working in close collaboration with organizations globally, we have helped them compellingly position themselves on social media channels and helped drive tangible business outcomes.</p>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
        </DigitalizationLayout>
    );
};

export default CloudPage;
