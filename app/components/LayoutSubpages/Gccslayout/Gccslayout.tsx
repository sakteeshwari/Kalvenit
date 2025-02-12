"use client"
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Gccs from "../../Subpages/Gccs/Gccs"
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const Mordernizationlayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text=" Complement GCCs to help them accelerate transformation"  />
      {children}
      <Gccs></Gccs>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default Mordernizationlayout;
