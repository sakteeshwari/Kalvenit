"use client";
import React from "react";
import Saplayout from "../../../components/LayoutSubpages/Saplayout/Saplayout";

const CloudPage = () => {
    return (
        <Saplayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
                <div>
                    <p className="tracking-wide leading-loose">“Harnessing the potential of digital transformation in asset management achieves greater asset operational efficiency, reduces maintenance costs, improves asset availability and drives overall equipment efficiency”.
                    </p>
                    <p className="tracking-wide leading-loose">Sustainable technology is increasingly important operationally for optimizing costs, energy performance and asset utilization, for instance but it also drives ESG outcomes like improving wellness and providing the traceability needed to ensure responsible business practices.

                        “Sustainable technology also facilitates new business models and tech-enabled products to better serve customers.”

                    </p>
                </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Saplayout>
    );
};

export default CloudPage;
