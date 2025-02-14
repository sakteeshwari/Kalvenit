"use client";
import React from "react";
import Saplayout from "../../../components/LayoutSubpages/Saplayout/Saplayout";

const CloudPage = () => {
    return (
        <Saplayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">The primary objective of SAP has always been to help the customers win. While the customers are well-versed in the transformation
            potential of SAP, their biggest challenge has been to achieve tangible outcomes, fully realize its promise and unlock untapped potential. To make this happen, enterprises need to adopt new business models along with intelligent processes.</p>
          
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Saplayout>
    );
};

export default CloudPage;
