"use client";
import React from "react";
import Awslayout from "../../components/LayoutSubpages/Awslayout/Awslayout"

const DigitalizationPage = () => {
  return (
    <Awslayout imgSrc="/assets/awsimg2.png" >
      <div className="bg-gray-200 p-4 leading-relaxed flex flex-col justify-center items-center tracking-wider">
        <p className="mt-6">
        Keeping the competitive edge in the digital world is the need of the hour, which is why the uniquely blended KALVEN and Amazon Web Services (AWS) partnership is here to help you race to the future of the cloud. As an AWS Advanced Consulting Partner and a Managed Services provider, KALVEN has extensive capabilities in several business-critical areas and profound expertise in a comprehensive set of cloud solutions.
        </p>
        <p className="mt-6">
        Ensuring scalability and sustained business value, our leading-edge and value-creating end-to-end services help you modernize and manage your business-critical applications on the cloud while also leveraging cost-effective data warehousing and smooth application workload migrations.
        </p>
       
       <div>
        <img src="/assets/saplogin.png" className="lg:w-96" alt="" />
       </div>
      
      </div>
      <div className="bg-black">
        <img src="/assets/awsimg.png" alt="" />
      </div>
    </Awslayout>
  );
};

export default DigitalizationPage;
