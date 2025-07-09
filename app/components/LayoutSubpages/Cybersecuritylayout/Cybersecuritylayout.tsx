
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Cybersecurity from "../../../components/Subpages/Cybersecurity/Cybersecurity"
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const Mordernizationlayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text="Business Innovation With KALVEN Cybersecurity Services"  />
      {children}
      <Cybersecurity></Cybersecurity>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default Mordernizationlayout;
