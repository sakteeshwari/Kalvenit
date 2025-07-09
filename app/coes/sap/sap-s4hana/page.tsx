"use client";
import React from "react";
import Saplayout from "../../../components/LayoutSubpages/Saplayout/Saplayout";

const CloudPage = () => {
    return (
        <Saplayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">SAP S/4HANA is one of the largest enterprise solution suite brands globally. It comes with a strong reputation and pedigree, modern & future-ready architecture, rich functionally, easy deployability-con figurability, and a clear upgrade roadmap from SAP ECC/R/3. As the ‘digital core’ of organizations, it helps them successfully transform their business, drive simplification, enable real-time data for rapid decision-making, and deliver tangible business value.</p>
           <p className="tracking-wide leading-loose">As organizations prepare themselves to address their competitive landscape, we assist them in reimagining and re-engineering their business. We are one of the large SAP S/4HANA service providers globally, with experience of working on 100+ engagements. The KALVEN SAP S/4HANA CoE has developed accelerators, tools, frameworks, and repositories to help SAP customers seamlessly migrate to SAP S/4 HANA (On-premise of the Cloud).</p>
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Saplayout>
    );
};

export default CloudPage;
