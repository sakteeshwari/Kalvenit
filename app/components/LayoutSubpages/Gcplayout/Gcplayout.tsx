"use client";
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Gcp from "../../Subpages/Gcp/Gcp";
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const DigitalizationLayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text="Get more from SAP with Google Cloud Platform!" />
      {children}
      <Gcp></Gcp>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default DigitalizationLayout;
