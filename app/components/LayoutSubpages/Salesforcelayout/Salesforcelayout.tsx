"use client";
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Salesforce from "../../Subpages/Salesforce/Salesforce";
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const DigitalizationLayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text="Strong Industry Domain Expertise" />
      {children}
     <Salesforce></Salesforce>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default DigitalizationLayout;
