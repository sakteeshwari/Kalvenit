
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Customerecosystem from "../../Subpages/Customerecosystem/Customerecosystem"
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const Mordernizationlayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text=" Winning strategies for a smarter customer-centric experience"  />
      {children}
      <Customerecosystem></Customerecosystem>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default Mordernizationlayout;
