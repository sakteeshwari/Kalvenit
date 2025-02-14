"use client";
import React from "react";
import Saplayout from "../../../components/LayoutSubpages/Saplayout/Saplayout";

const CloudPage = () => {
    return (
        <Saplayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">The mounting pressure for staying competitive, rapidly evolving technical intricacies, and business imperative of greater visibility, transparency, operational excellence, and improved profitability have led organizations to adopt futuristic SAP solutions. However, ensuring efficient operations of any SAP environment is a herculean task, </p>
           <p className="tracking-wide leading-loose">KALVEN’s SAP Infrastructure Services portfolio is derived from the vision of delivering an agile, service-oriented SAP ecosystem. Our service suite focuses on strengthening the SAP landscape aligned to keep pace with the technology advancements to transform enterprises into a real-time business.</p>
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96  rounded" alt="" />
            </div>
        </Saplayout>
    );
};

export default CloudPage;
