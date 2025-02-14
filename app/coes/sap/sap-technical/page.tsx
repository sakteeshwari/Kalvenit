"use client";
import React from "react";
import Saplayout from "../../../components/LayoutSubpages/Saplayout/Saplayout";

const CloudPage = () => {
    return (
        <Saplayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">Intelligent enterprises are generally powered by data-driven digital cores. The present ecosystem, influenced by various factors that cause disruption, calls for enterprises to embark on digital transformation journeys in order to stay relevant and competitive.</p>
           <p className="tracking-wide leading-loose">However, it has been observed that most enterprises are struggling with the challenge of resolving data complexities. The SAP Digital Platform offers businesses a wide range of integrated solutions that focus on process integration, data excellence, and extension while offering rich user experiences, optimized overheads, and better business outcomes.</p>
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Saplayout>
    );
};

export default CloudPage;
