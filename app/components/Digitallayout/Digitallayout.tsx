"use client";
import React from "react";
import Servicespageimg from "../../components/Servicespageimg/Servicespageimg";
import Digitalizationservices from "../Subpages/Digitalization/Digitalization";
import Servicesperspective from "../../components/Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../components/Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../components/Kalvendifferent/Kalvendifferent";

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
