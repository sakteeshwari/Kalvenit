"use client";
import React from "react";
import Saplayout from "../../../components/LayoutSubpages/Saplayout/Saplayout";

const CloudPage = () => {
    return (
        <Saplayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">Businesses that run on SAP enterprise applications need a robust management solution for supporting, operating, managing, and maintaining those applications. The absence of a comprehensive administration solution may drive up TCO, lower the benefits they derive from their IT investments, aggravate risks, and create reliability issues.</p>
           <p className="tracking-wide leading-loose">At KALVEN Software Solutions , we take an in-depth look at the central IT processes and business tools while engaging with stakeholders and helping organizations gauge their IT process maturity before optimizing them using our best practices.</p>
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Saplayout>
    );
};

export default CloudPage;
