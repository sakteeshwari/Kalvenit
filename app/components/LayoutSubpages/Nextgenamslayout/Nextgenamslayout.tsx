"use client"
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Nextgenams from "../../Subpages/Nextgenams/Nextgenams"
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const Mordernizationlayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text="NextGen - Better Healthcare Outcomes for All"  />
      {children}
      <Nextgenams></Nextgenams>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default Mordernizationlayout;
