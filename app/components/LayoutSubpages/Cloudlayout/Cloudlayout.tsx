
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";
import Cloudinfrastructure from "../../../components/Subpages/Cloudinfrastructure/Cloudinfrastructure"
import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";

const Mordernizationlayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
  return (
    <div>
      <Servicespageimg imgSrc={imgSrc}  text=" Embrace the Future of Intelligent Cloud & Infrastructure with KALVEN"  />
      {children}
      <Cloudinfrastructure></Cloudinfrastructure>
      <Biznextpagespotlight />
      <Kalvendifferent />
      <Servicesperspective />
    </div>
  );
};

export default Mordernizationlayout;
