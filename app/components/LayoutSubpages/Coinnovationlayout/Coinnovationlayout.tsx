
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Coinnovationlab from "../../Subpages/Coinnovationlab/Coinnovationlab"
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const Mordernizationlayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text=" Business ecosystem with KALVEN ’ Co-Innovation Lab Services."  />
      {children}
      <Coinnovationlab></Coinnovationlab>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default Mordernizationlayout;
