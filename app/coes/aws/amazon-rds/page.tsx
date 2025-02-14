"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">If you are looking for a comprehensive solution to establish, operate, and expand a relational database in the AWS Cloud, Amazon Relational Database Service (Amazon RDS) is the ideal choice. This service offers efficient and scalable capacity for standard relational databases while handling your most frequently encountered database administration tasks. This, in turn, helps you save both time and money.</p>  
             <p className="tracking-wide leading-loose">However, selecting the right service partner can be daunting. That’s where KALVEN Software Solutions steps in!</p>
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
