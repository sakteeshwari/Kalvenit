"use client";
import React from "react";
import DigitalizationLayout from "../../../components/Digitallayout/Digitallayout";

const CloudPage = () => {
    return (
        <DigitalizationLayout imgSrc="/assets/digitalizationpageimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
           <div>
           <p className="tracking-wide leading-loose"> <b>An industry-wide gamechanger, blockchain</b> ensures the integrity and the security of data while enabling validation, replication, and up-gradation of the records on the block through consensus. KALVEN Technologies offers comprehensive blockchain solutions for innovation, prototyping, re-engineering the processes, and addressing real-time challenges.</p>
           <p className="tracking-wide leading-loose">To derive the true potential of your digital journey, we help you unlock business value from every aspect of the blockchain ecosystem by enabling enterprise-wide integration. From monitoring operations to weeding out legacy process loads and paperwork, KALVEN allows clients to grasp the broad innovation landscape through our end-to-end blockchain services.   Our services guide industries to maintain digital identities (IDs) and safeguard copyrights and royalty laws for digital assets. With our technology leadership, expertise, and partnerships across platforms, we help you focus</p>
           </div>
                <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
            </div>
        </DigitalizationLayout>
    );
};

export default CloudPage;
