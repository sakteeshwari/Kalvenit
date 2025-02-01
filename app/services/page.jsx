// pages/services.js
"use client"
import Servicespageimg from "../components/Servicespageimg/Servicespageimg";
import Servicespagecontent from "../components/Servicespagecontent/Servicespagecontent";
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Inbox from "../components/Inbox/Inbox.jsx"
import Servicestrending from "../components/Servicestrending/Servicestrending.jsx";
import Servicesperspective from "../components/Servicesperspective/Servicesperspective.jsx";
import Contactus from "../components/Contactus/Contactus.jsx";

 const services = () => {
 return(
  <>
  <Navbar></Navbar>
  <Servicespageimg></Servicespageimg>
  <Servicespagecontent></Servicespagecontent>
  <Servicestrending></Servicestrending>
  <Servicesperspective></Servicesperspective>
  <Contactus></Contactus>
  <Inbox></Inbox>
  <Footer></Footer>
  </>
  );
};

export default services;
