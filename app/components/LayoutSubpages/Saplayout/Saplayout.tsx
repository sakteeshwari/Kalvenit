"use client";
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Sap from "../../../components/Subpages/Sap/Sap"
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const DigitalizationLayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text="Leadership. Value. Trust. Excellence" />
      {children}
      <Sap></Sap>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default DigitalizationLayout;
