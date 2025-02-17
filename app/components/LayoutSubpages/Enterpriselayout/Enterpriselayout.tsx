
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Enterprise from "../../../components/Subpages/Enterprise/Enterprise"
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const Mordernizationlayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text="Transform Your Enterprise Testing with KALVEN"  />
      {children}
      <Enterprise></Enterprise>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default Mordernizationlayout;
