"use client";
import React from "react";
import Cybersecuritylayout from "../../../components/LayoutSubpages/Cybersecuritylayout/Cybersecuritylayout"


const DigitalizationPage = () => {
  return (
    <Cybersecuritylayout imgSrc="/assets/cyber.png">
      <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 ">
        <p className="tracking-wide leading-loose">“Organizations who recognize the value of a security leader but can’t afford a traditional CISO should consider virtual options.” – Gartner</p>
        <p className="tracking-wide leading-loose">Enterprises experiencing rapid growth often come across cyber threats which require a highly skilled Cybersecurity Team, Training, and advanced tools to assure compliance and protection.</p>
        <p className="tracking-wide leading-loose">KALVEN’s Ondemand vCISO (Virtual Chief Information Security Officer) is a service designed to make highly experienced security experts available to organizations like yours and introduce a customized security roadmap for a measurable improvement to the security posture.</p>
        <img src="/assets/cloudpageimg.png" className="mt-6  rounded" alt="" />
      </div>
    </Cybersecuritylayout>
  );
};

export default DigitalizationPage;
