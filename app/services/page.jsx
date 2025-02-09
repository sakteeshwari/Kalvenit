// pages/services.js
"use client"
import Servicespageimg from "../components/Servicespageimg/Servicespageimg";
import Servicespagecontent from "../components/Servicespagecontent/Servicespagecontent";

import Servicestrending from "../components/Servicestrending/Servicestrending.jsx";
import Servicesperspective from "../components/Servicesperspective/Servicesperspective.jsx";


 const services = () => {
 return(
  <>
 
  <Servicespageimg></Servicespageimg>
  <Servicespagecontent></Servicespagecontent>
  <Servicestrending></Servicestrending>
  <Servicesperspective></Servicesperspective>
 
  </>
  );
};

export default services;
