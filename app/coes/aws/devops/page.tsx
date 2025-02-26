"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/awsimg2.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">DevOps has made it possible for businesses to bring standardization and reduce time to market through automation processes. KALVEN’s AWS DevOps services help you bring people, processes, and technology together for better collaboration between your software delivery and IT operations teams to accelerate the release of high-quality software using different services provided by AWS. KALVEN AWS DevOps framework aligns your needs to improve business agility, brings continuous innovation culture, ensures timely delivery and reduces issues.</p>  
            
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
