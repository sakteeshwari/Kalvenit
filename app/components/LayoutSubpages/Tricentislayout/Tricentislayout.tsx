
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Tricentis from "../../../components/Subpages/Tricentis/Tricentis"
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const Mordernizationlayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text="Driving Quality & Agility in SAP Testing"  />
      {children}
      <Tricentis></Tricentis>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default Mordernizationlayout;
