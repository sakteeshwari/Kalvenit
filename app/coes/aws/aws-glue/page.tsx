"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">Ready to harness the power of AWS Glue for your data needs?
           Cloud-based solutions are becoming increasingly popular among global organizations as they seek to extract and store large amounts of data, analyze it in batch or real time, and use insights to drive customer engagement. YASH understands the importance of this trend and utilizes AWS Glue to create robust data solutions for various workloads. Whether it’s data ingestion, data enrichment, or building technical metadata repositories, our team leverages AWS Glue’s capabilities to deliver exceptional results.</p>  
           
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
