
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Servicenow from "../../Subpages/Servicenow/Servicenow"
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const Mordernizationlayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text="Delivering Digital Transformation – “Faster, smarter and better”."  />
      {children}
      <Servicenow></Servicenow>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default Mordernizationlayout;
