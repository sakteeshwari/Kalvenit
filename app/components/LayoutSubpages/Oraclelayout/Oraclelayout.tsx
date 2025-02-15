"use client";
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Oracle from "../../Subpages/Oracle/Oracle";
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const DigitalizationLayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text="Achieve Business Agility with Oracle Cloud Transformation Services" />
      {children}
      <Oracle></Oracle>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default DigitalizationLayout;
