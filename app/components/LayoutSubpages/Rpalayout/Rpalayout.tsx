"use client";
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Rpa from "../../Subpages/Rpa/Rpa";
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const DigitalizationLayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text="Bot up your organization's productivity and improve efficiencies" />
      {children}
      <Rpa></Rpa>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default DigitalizationLayout;
