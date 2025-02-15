"use client";
import React from "react";
import Salesforcelayout from "../../../components/LayoutSubpages/Salesforcelayout/Salesforcelayout"

const DigitalizationPage = () => {
  return (
    <Salesforcelayout imgSrc="/assets/salesforce2.png">
        <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">Bridging the gap between your Salesforce investments and the effective business outcomes, YASH Application Support for Salesforce help businesses drive greater customer-centricity, integrate additional functionalities for multi-tasking in workflows, and attain better business alignment with superior efficiencies. With unmatched expertise for delivering innovations, we help clients realize their SFDC platform’s full potential while leveraging custom app development and smooth integrations that amplify their customer engagements, APIs, and data.</p>
                <img src="/assets/saleslogin.png" className="mt-6  rounded" alt="" />
            </div>
    </Salesforcelayout>
  );
};

export default DigitalizationPage;
