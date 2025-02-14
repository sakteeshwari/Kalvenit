"use client";
import React from "react";
import Saplayout from "../../../components/LayoutSubpages/Saplayout/Saplayout";

const CloudPage = () => {
    return (
        <Saplayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">Today, organizations worldwide are facing multiple challenges fostering revenue growth, enhancing business effectiveness, and ensuring business resiliency and sustainability in the new socio-economic environment. Addressing these complex business challenges needs an exceptionally well–thought blend of focused SAP solutions and a provider like YASH with Industry and functional domain expertise, knowledge of global best practices,  strategic business advisory abilities, and pervasive technical excellence. The suite of Industry–specific SAP solutions from YASH Technologies ensures that organizations of all sizes can harness these cost-effective, pre-packaged SAP qualified solutions to address specific challenges that they would like to address. </p>
           
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Saplayout>
    );
};

export default CloudPage;
