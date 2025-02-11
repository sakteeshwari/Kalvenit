"use client";
import React from "react";
import DigitalizationLayout from "../../../components/Digitallayout/Digitallayout";

const CloudPage = () => {
    return (
        <DigitalizationLayout imgSrc="/assets/digitalizationpageimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
            <div>
           <p className="tracking-wide leading-loose">In the digitally connected world today, organizations require the ability to blend information and insights across people, processes, and diverse data sources to influence business outcomes. To derive actionable data insights that aid enterprise decision-making, KALVEN helps organizations combine technology, data sciences, industry-centric business modeling techniques, and unlock enormous business value. Data Analytics services from KALVEN help categorize, contextualize, scope, and derive data insights, and add value with machine learning paradigms. </p>
           <p className="tracking-wide leading-loose">To harness the incredibly powerful business analytics capability, we identify new ways to combine a high-performance blend of insights, forecasting, visualization, advanced analytics, and more. Leveraging the transformative power of analytics, we bring you solutions that address your business challenges and map your data assets to drive value.  

</p>
           </div>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
        </DigitalizationLayout>
    );
};

export default CloudPage;
