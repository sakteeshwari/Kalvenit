"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/awsimg2.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">Amazon DynamoDB is a paragon of efficiency and adaptability in modern data management. As a fully managed NoSQL database service, DynamoDB boasts a reputation for its seamless scalability, lightning-fast response times, and flexibility in structuring data. DynamoDB isn’t just a database; it’s a catalyst for transformative data strategies. Its innate ability to scale with expanding data volumes effortlessly ensures uninterrupted operations for organizations of every size and industry. It empowers businesses to navigate real-time data trends with agility and precision.</p>  
             <p className="tracking-wide leading-loose">At KALVEN, we recognize data’s pivotal role in today’s business landscape and harness the capabilities of AWS DynamoDB to engineer robust, future-ready solutions. Our team possesses an acute understanding of the complexities involved in modern data management. We offer expertise in harnessing DynamoDB’s capabilities to their fullest potential, providing advisory, strategy, and consultation services tailored to your unique development requirements.</p>
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
