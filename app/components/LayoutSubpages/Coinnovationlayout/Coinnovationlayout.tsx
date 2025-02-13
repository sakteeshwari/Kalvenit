"use client"
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Coinnovationlab from "../../../components/Subpages/Coinnovationlab/Coinnovationlab"
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const Mordernizationlayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text=" Embrace the Future of Intelligent Cloud & Infrastructure with KALVEN"  />
      {children}
      <Coinnovationlab></Coinnovationlab>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default Mordernizationlayout;
