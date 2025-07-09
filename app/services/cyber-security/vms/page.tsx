"use client";
import React from "react";
import Cybersecuritylayout from "../../../components/LayoutSubpages/Cybersecuritylayout/Cybersecuritylayout"


const DigitalizationPage = () => {
  return (
    <Cybersecuritylayout imgSrc="/assets/cyber.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <div>
        <p className="tracking-wide leading-loose">The digital technologies catalyze the enterprises looking to transform-at-speed. Although traditional technology services like application development and maintenance, datacentres, testing, etc. continue to be vital, newer technologies such as Artificial Intelligence, DevOps, Robotic Automation, Blockchain, Cloud, IoT are pivotal to transformation initiatives. Therefore, enterprises need the ‘right technology partner’ that can empower them to balance between their disparate legacy technology landscapes and emerging technologies. </p>
        <p className="tracking-wide leading-loose">KALVEN Software Solutions has the right combination of experience, competencies, people, and architecting capabilities in providing value-centric technology services and solutions for customers across industries. As a full-service technology partner, we offer a comprehensive suite of services across Enterprise Systems, Next-Gen Application Management, Cloud Solutions, Infrastructure services, etc. We leverage cutting-edge solution frameworks to enable our customers to address their business challenges, drive value, optimize costs, and foster enterprise agility. </p>
        </div>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Cybersecuritylayout>
  );
};

export default DigitalizationPage;
