"use client";
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Digitalizationservices from "../../Subpages/Digitalization/Digitalization";
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const DigitalizationLayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text="Drive Operational Excellence, Innovation and Transformation." />
      {children}
      <Digitalizationservices />
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default DigitalizationLayout;
